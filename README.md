# **MainNodeServer**

**Node**를 사용해 **Server**를 구성 후 동작 url형태로 명령 인식 database 작업,login 처리

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

 temperature| humidity | gas | fine_dust | gps | date | machine_type | machine_num | order_num
--------|--------|--------|--------|--------|--------|--------|--------|--------
int | int | boolean | int | varchar(256) | timestamp | int | int | int

>arduino machine_type : 0

>raspberry machine_type : 1

>machine_num : 각 기기의 고유번호


## 제공 api

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
