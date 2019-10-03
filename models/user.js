module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
  email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    profileimgsrc: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '/images/profile/default.png',
    },
  }, {
    timestamps: true,
    paranoid: true,
    tableName: 'user',
  });
};
