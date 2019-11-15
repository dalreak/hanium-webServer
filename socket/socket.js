const SocketIO = require('socket.io');
const fs = require('fs');
require('dotenv').config();

module.exports = (server,app,sessionMiddleware) => {
  const io = SocketIO(server, {
    path: '/socket.io'
  });
  app.set('io',io);
  io.use((socket,next) =>{
    sessionMiddleware(socket.request,socket.request.res,next);
  });

  const arduinoHtml = fs.readFileSync('./views/arduinoHtml.page','utf8');
  const raspberrypi = fs.readFileSync('./views/raspberrypi.page','utf8');
  const dashboardHome = fs.readFileSync('./views/dashboardHome.page','utf8');

  const dbUpdate = io.of('/dbUpdate');
  const resHtml = io.of('/resHtml');

  dbUpdate.on('connection', (socket) => {

    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || (req.connection && req.connection.remoteAddress) || ''
    console.log('dbUpdate socket 새로운 클라이언트 접속',ip, socket.id);

    socket.join(socket.handshake.query.user,( ) => {
      socket.on('error', (error) => {
        console.error(error);
      });
      socket.on('reply', (data) => {
        console.log(data);
      });
    })
  });

  resHtml.on('connection',(socket) =>{
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || (req.connection && req.connection.remoteAddress) || ''
    console.log('resHtml socket 새로운 클라이언트 접속',ip, socket.id);

    socket.on('error', (error) => {
      console.error(error);
    });

    socket.on('arduinoHtml',(data) => {
      socket.emit('htmlDataRes',arduinoHtml);
      console.log('arduinoHtml send');
    });

    socket.on('raspberrypiHtml',(data) => {
      socket.emit('htmlDataRes',raspberrypi);
      console.log('raspberrypiHtml send');
    });

    socket.on('dashboardHtml',(data) => {
      socket.emit('htmlDataRes',dashboardHome);
      console.log('dashboardHomeHtml send');
    });

    socket.on('vmapKeyServer',(data) => {
      socket.emit('vmapKey',{key:process.env.vmapkey,machine_num:data.machine_num});
      console.log('vmpaKey send');
    });

    socket.on('reply', (data) => {
      console.log(data);
    });
  });
};
