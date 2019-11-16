# **MainNodeServer**

![홈페이지](https://toojs.asuscomm.com/unimportant_file/mainpage.png)

**Node 모듈**을 사용해 **Server**를 구성 후 동작 url형태로 명령 인식 database 작업,login 처리,웹페이지 렌더

## 사용된 module

>**Node : 12.5.0(x64)** [다운로드](https://nodejs.org/ko/)

>**npm : 6.9.2**
>>npm 버전확인
```
npm -v
```
>npm package 다운로드
```
npm install
```
>npm 업데이트
>>>리눅스
```
sudo npm install -g npm
```
>>>윈도우
```
npm install -g  npm
```

>**bcrypt-nodejs : 0.0.3**

>**connect-flash : ^0.1.1**

>**debug : ~4.1.1**

>**dotenv : ^8.0.0**

>**express-http2-workaround : ^1.1.3**

>**http-errors : ~1.7.3**

>**passport : ^0.4.0**

>**passport-local : 1.0.0**

>**pug : ^2.0.4**

>**sequelize : ^5.13.0**

>**express : 4.17.1**

>**express-session : 1.16.2**

>**express-handlebars: 3.1.0**

>**morgan : 1.9.1**

>**cookie-parser : 1.4.4**

>**mariadb: 10.1.38**

>**mariadb module : 2.1.0**

## 실행방법

```
Node server.js
```

## DB 구성

>**DB**를 통해 효율적인 data관리 가능

### User 테이블

id | email | nick | password | name | createdAt | updateAt | deletedAt
--------|--------|--------|--------|--------|--------|--------|--------
int(primary key) | varchar(40) | varchar(15) | varchar(100) | varchar(20) | datetime | datetime | datetime  

>email : user 관리 위해 로그인 계정 id

>password : user의 비밀번호 bcrypt 모듈을 이용해 암호화 저장

### Sensor 테이블

id | temperature| humidity | gas | fine_dust | gps | recorddate | machine_type | machine_num | deviceid
--------|--------|--------|--------|--------|--------|--------|--------|--------|--------
int(primary key)|int | int | boolean | int | varchar(256) | timestamp | int | int | int

>arduino machine_type(라즈베리 파이) : 0

>raspberry machine_type(아두이노) : 1

>machine_num : 각 기기의 고유번호

>deviceid : 각 사용자 데이터 분리 하기 위한 foreign key user 테이블의 id와 연동


## 제공 api

---------추가예정 수정중----------------------

>**GET**

api | 설명
-------------------- | --------------------
 \<endPoint\>\/getSensorData=? | ?개수 만큼 최근 업데이트 된 값 조회
 \<endPoint\>\/getSensorData_machine_type=? | ?의 최근 업데이트 된 값 조회
 \<endPoint\>\/getSensorData_machine_num=? | ?번호의 기기 최근 업데이트 된 값 조회

 >**POST**

헤더파일에 값 포함해서  request해야함

api| \설명
 -------------------- | --------------------
  \<endPoint\>\/uploadData | data 업로드
