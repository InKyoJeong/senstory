## [Senstroy](https://senstory.kr)

<br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/48676844/132283332-7fbd302f-bdcf-4854-b466-d2308098c38d.png" width='100px' height='100px' alt="senstory" >
  <h3 align="center">Sense + Story</h3>
  <h4 align="center">사람들과 소통하는 공간과 나만의 감정을 기록하는 공간을 더한 sns 프로젝트</h4>
  <p align="center">2021.07.04 ~ 2021.09.06</p>
  <br />
</p>

<br>

- [사용 기술](#tech)
- [스크린 샷](#screenshots)
- [에러해결과 알게된 것들](#myerror)
- [자잘한 실수들](#mistake)
- [배포 이후 업데이트](#update)

<br>

## 📌 <a name="tech"></a>사용 기술

- Front : react(next), redux-saga, styled-components
- Back : node.js(express), sequelize
- AWS EC2, S3

<br>

## 📌 <a name="screenshots"></a>스크린샷

### 홈

- 로그인 후 **글 작성**, **좋아요** 표시, **댓글** 등록, 게시글 **공유**, **게시글 링크 주소 복사**기능을 사용할 수 있다.
- 우측 메뉴에 **친구의 게시물만 보기**, **사용자 추천**, **해시태그 검색**등의 기능이 표시된다.

![home](https://user-images.githubusercontent.com/48676844/132282473-292a0e17-3e0b-4926-a2cf-ca976587e8da.png)

### 프로필

- 프로필페이지에서 개인정보 수정 및 팔로워 관리를 할 수 있다.

![profile](https://user-images.githubusercontent.com/48676844/132282530-5982d586-b46b-4567-bbba-23dd0b1fdecd.png)

### 다이어리

- 다이어리 메뉴에서는 **자신만 볼 수 있는 일기**를 작성할 수 있다.
- 기분상태에 따른 블럭 색상과 함께 날짜와 제목이 표시된다.
- 우측에는 작성한 다이어리 개수에 따른 비율이 표시되고, 클릭 시 특정 감정만 모아서 볼 수 있다.

![diary](https://user-images.githubusercontent.com/48676844/132282577-4eafa26d-62cd-48cf-aa3b-f76ce80029d8.png)

![diarysame](https://user-images.githubusercontent.com/48676844/132283721-75630904-e6fb-4966-9e28-510251e90a29.png)

### 다이어리 작성

- 사진, 글과 함께 나의 감정을 선택하여 기록할 수 있다.
- 현재 위치기반으로 날씨(온도)가 입력된다.

![write](https://user-images.githubusercontent.com/48676844/132283120-9a16b9a4-68db-47f4-a7ba-d3461e4235d4.png)

### 다이어리 상세

- 각 블럭을 누르면 기록했던 자세한 내용들을 볼수있다.

![detail](https://user-images.githubusercontent.com/48676844/132283184-5b4aa5b9-8e4b-45f7-b6c6-88f1e50b2bf9.png)

### 개인 프로필

- 프로필 사진을 누르면 사용자의 프로필을 볼 수 있다.

![user](https://user-images.githubusercontent.com/48676844/132283224-adc8e72b-8bd9-4445-9fc6-c0e1c26ba5b4.png)

### 로그인/회원가입

![signup](https://user-images.githubusercontent.com/48676844/132286850-20b7b925-ee3a-46c2-b8f9-2c0cb036a29d.png)

<br>

## 📌 <a name="myerror"></a>에러해결과 알게된 것들

#### 1) 뷰에서 특정 에러 경고창을 띄울때, 다른 페이지를 갔다가 다시 홈에 방문하면 동일하게 에러 경고창이 뜨는 문제

```js
useEffect(() => {
  if (repostError) {
    alert(repostError);
  }
}, [repostError]);
```

- 이런식으로 뷰에서 특정 에러 경고창을 띄울때, 다른 페이지를 갔다가 다시 홈에 방문하면 동일하게 에러 경고창이 뜨는 문제가 있었다.
- error상태가 계속 FAILURE 라서 뜨는 문제니까, 한번 경고창을 띄운 이후에는 에러값을 없애야 할거같다고 생각했다.
- 그래서 **ERROR_FINISH** 라는 액션을 하나 더 만들어서 `finally`로 error를 null로 변경해서 해결했다.

```js
// saga
function* repost(action) {
  try {
    const result = yield call(repostAPI, action.data);
    yield put(repostSuccess(result.data));
  } catch (err) {
    yield put(repostFailure(err.response.data));
  } finally {
    yield put(repostErrorFinish());
  }
}

// reducer
case REPOST_ERROR_FINISH:
  draft.repostError = null;
  break;
```

![error1](https://user-images.githubusercontent.com/48676844/132288127-a688cb1e-fd02-4743-b0e8-aae2bbd382cd.png)

<br>

#### 2) Warning: Prop className did not match. Server: "..." Client: "..."

- 경고

```
Warning: Prop `className` did not match. Server: "sc-dlnjwi jMrkpW" Client: "sc-bdnxRM kUqbXD"
```

- next에서 _styled-components_ 를 사용할 경우 첫 로딩 이후 새로고침 시 발생
- 첫 페이지는 SSR로 작동하며 이후 CSR로 화면을 렌더링하는데, 서버에서 받은 해시+클래스명과 이후 클라이언트에서 작동하는 해시+클래스 명이 달라지면서 스타일을 불러올수 없는 문제였다.

- 해결

```bash
$ npm i babel-plugin-styled-components -D
```

- 서버와 클라이언트의 클래스명을 일치 시켜주기

```json
// .babelrc
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      { "fileName": true, "displayName": true, "pure": true }
    ]
  ]
}
```

<br>

#### 3) axios를 이용하여 통신시에, 로그인을 했는데도 401 Unauthorize 에러가 뜨는 문제

- 브라우저와 백엔드 주소가 다르면 cors문제가 생기는건 알았지만, 이렇게 도메인이 다르면 쿠키도 전송이 안된다는것을 알게 됐다.

- `axios` 로 통신할 시, **withCredentials** 설정을 **true** 로 넣어주면 된다.

```js
axios.post(주소, 데이터, { withCredentials: true });

// 또는 공통으로 추가
axios.defaults.withCredentials = true;
```

- backend에서도 마찬가지로 **credentials** 설정을 **true** 로 해야한다.

```js
app.use(
  cors({
    origin: "http://localhost:3060",
    credentials: true,
  })
);
```

<br>

#### 4) 시퀄라이즈 DB Syntax Error

- 에러

```
SequelizeDatabaseError: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''3'' at line 1
```

- `params, query` 등으로 데이터를 받을때 숫자가아니여서 생기는 에러.
- 숫자로 변환해줘야한다는 것을 알았다.

```js
const comment = await Comment.create({
  PostId: parseInt(req.params.postId, 10),
});
```

<br>

#### 5) 빌드 실패 에러 : UnhandledPromiseRejectionWarning: TypeError: Converting circular structure to JSON

- 에러

```
(node:32488) UnhandledPromiseRejectionWarning: TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Node'
    |     property 'local' -> object with constructor 'Node'
    --- property 'parent' closes the circle
    at stringify (<anonymous>)
    at writeChannelMessage (internal/child_process/serialization.js:117:20)
    at process.target._send (internal/child_process.js:805:17)
    at process.target.send (internal/child_process.js:703:19)
    at reportError (/Users/ingg/Documents/scenery-book/front/node_modules/jest-worker/build/workers/processChild.js:87:11)
    at reportClientError (/Users/ingg/Documents/scenery-book/front/node_modules/jest-worker/build/workers/processChild.js:71:10)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:32488) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:32488) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

- 해결

에러가 발생하는 이유들이 코드에서 await이나 catch문을 빠뜨거나, stringify를 사용할때 발생하는 것으로 보였다. 나는 코드를 아무리 봐도 저기에 해당하지않아서 next의 깃헙의 issue도 살펴보고 구글링해봤지만 해결하기 힘들었던 에러였다.

먼저 저렇게 빌드가 실패하기전,

![errorbuild](https://user-images.githubusercontent.com/48676844/132298788-5f18e73d-323e-444e-a627-1b2ffcc3ceb1.png)

이런 에러가 먼저 떴는데, 아래 명령어로 설치하라는 문구를 따라 설치하고 나서 빌드를 했지만 위의 에러가 발생했다.

```
$ npm install --save-dev eslint-config-next
```

그래서 다른 방법으로, 패키지를 다시 지우고

```
If you do not want to run ESLint during builds, disable it in next.config.js. See https://nextjs.org/docs/api-reference/next.config.js/ignoring-eslint
```

이부분을 따라 next.config.js 에서 빌드시 eslint옵션을 끄고 빌드했더니 해결되었다.

```js
// next.config.js
 eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
```

<br>

#### 6) 빌드 실패 에러 : Type error: Cannot find module or its corresponding type declarations.

- 에러
  - 로컬에서는 빌드가 정상적으로 되는데, ubuntu에서는 계속 빌드가 실패했다.

```
Type error: Cannot find module '../../common/FollowButton' or its corresponding type declarations.

  4 | import { Avatar } from 'antd';
  5 | import { TeamOutlined } from '@ant-design/icons';
> 6 | import FollowButton from '../../common/FollowButton';
```

- 해결
  - styled-component에서 props의 타입을 지정하고 ubuntu에서도 결국 빌드가 성공했다.

```
export const FollowButtonContainer = styled(Button)<{ unfollow: boolean }>
```

<br>

#### 7) 빌드 멈춤 현상

- 빌드 시 **_Creating an optimized production build..._** 부분에서 멈춰버리는 현상이 발생했다.
- aws 프리티어인 메모리1기가(t2.micro)를 사용해서 그런지 메모리 부족으로 인한 에러가 발생했다.
- 빌드시 _**GENERATE_SOURCEMAP=false**_ 를 넣어 옵션을 끄는방법, 하드디스크를 가상메모리로 전환시켜 사용한다는 **swap 메모리**를 지정하는 방법 등도 있었다.
- 그러나 첫번째로는 해결되지않았고 두번째는 가상메모리를 쓰면 성능에 문제가 생길수도 있을거같아서 빌드 결과물인 **.next**를 _git lfs_ 를 이용하여 올리고 서버로 전송해서 실행시켜 보았다.
- 일단 임시적으로 해결한 방법이라서 aws 메모리를 늘리는법 말고도 빌드 규모를 줄이기 위한 코드 스플리팅 등의 방법도 알아봐야겠다.

<br>

#### 8) https 적용후 cors 에러

![httpscors](https://user-images.githubusercontent.com/48676844/132301027-cb658db2-6f32-4588-9aae-574184afdb8c.png)

- https를 적용 후에, 포스트 등록은 에러가 발생하지 않지만 사진파일을 올리면 cors 에러가 발생했다. cors 설정에는 문제가 없는 것 같은데 어떤 부분이 문제인지 몰라서 힘들었다. 그런데 nginx 설정이 되어 있는 배포 환경에서 이미지 용량이 커도 cors 에러가 발생한다고 한다.
- nginx의 기본설정에 **_client_max_body_size_** 는 1mb로 설정 되어있기 때문이다.
- front/back 서버의 _nginx.conf_ 파일 http 부분에 다음 코드를 추가하였다.

```bash
# sudo vim /etc/nginx/nginx.conf
http {
        client_max_body_size 20m;
        ...
```

재시작

```bash
$ sudo service nginx restart
$ sudo systemctl restart nginx
$ sudo /etc/init.d/nginx restart
```

재시작하니 정상적으로 이미지 업로드가 되고 cors에러가 해결되었다.

<br>

## 📌 <a name="mistake"></a>자잘한 실수들

> 자주하거나 자잘한 실수들

#### 1)

- 에러

```
TypeError: Router.use() requires a middleware function but got a Object
```

- 해결 : routes폴더의 파일 마지막에 `module.exports = router;` 를 쓰지 않아서 발생한 에러. 파일 아래에 추가하면 된다.

#### 2)

- 경고

```
./hooks/useInput.js
Anonymous arrow functions cause Fast Refresh to not preserve local component state.
Please add a name to your function, for example:

Before
export default () => <div />;

After
const Named = () => <div />;
export default Named;

A codemod is available to fix the most common
```

- 해결

```js
export default (initialValue = null) => {
  //...
};
```

아래 처럼 이름을 추가해서 수정

```js
const useInput = (initialValue = null) => {
  //...
};

export default useInput;
```

- next가 함수의 이름을 사용해서 기존 값을 저장하고 있다가 핫 리로딩 할때도 함수 이름을 통해 기존값을 불러오기 때문이다.

#### 3)

```
Error: listen EADDRINUSE: address already in use :::
```

- 원인 : 포트가 다른 프로세스에서 사용중
- 해결 : 포트 확인후 종료시킨다.

```bash
$ lsof -i TCP: [PORT_NUM]
$ kill -9 [PID_NUM]
```

<br>

## 📌 <a name="update"></a>배포 이후 업데이트

- 프로필페이지에서 로그아웃시 에러창이 뜨는 문제
  - randomUser추천을 프로필페이지에서는 제거하고, 로그아웃하여 유저정보가 없다면 홈으로 이동하게 수정
- 인풋창 클릭시 모바일에서 자동으로 스크린이 zoom되는 현상 수정
  - 폰트크기가 16px이하면 자동으로 확대를 하므로, 16으로 수정
- 람다로 이미지를 리사이징했는데, 세로 사진이 가로로 회전하는 문제
  - sharp 옵션에서 `.withMetadata()` 를 추가하여 회전되지 않게 수정
