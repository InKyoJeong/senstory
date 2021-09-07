<!-- ## todo

- [ ] 마이그레이션 학습
  - 공식문서 : https://sequelize.org/master/manual/migrations.html
  - 김정환님 블로그 : https://jeonghwan-kim.github.io/sequelize-migration/
  - https://handhand.tistory.com/83

--- -->

## Start

```bash
$ npm run dev
```

## Start(ubuntu)

```
$ sudo npm start
```

<!-- ## sequelize setting

```bash
$ npx sequelize init
```

## sequelize db create

```bash
$ npx sequelize db:create

``` -->
<!--
## db 재생성

```js
db.sequelize
  .sync({ alter: true }) // 테이블수정
  .then(() => {
    console.log("db 연결성공");
  })
  .catch(console.error);
``` -->

<br>

<!-- ## REST API

- GET/ diarys/:id
  - 유저의 일기 목록 가져옴
- POST/ diary
  - 일기 등록 -->
