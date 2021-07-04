#### Antd Grid

- xs: screen < 576px
- sm: screen ≥ 576px
- md: screen ≥ 768px
- lg: screen ≥ 992px

## Error

#### 에러1

```
Warning: Prop `className` did not match. Server: "sc-dlnjwi jMrkpW" Client: "sc-bdnxRM kUqbXD"
```

- next의 styled-components 사용할 경우 첫 로딩 이후 새로고침 시 발생
- 첫 페이지는 SSR로 작동하며 이후 CSR로 화면을 렌더링하게 되는데, 이때 서버에서 받은 해시+클래스명과 이후 클라이언트에서 작동하는 해시+클래스 명이 달라지면서 스타일을 불러올수 없는 문제

#### 해결

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

<Br>

#### 경고1

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

#### 해결

```js
export default (initialValue = null) => {
  //...
};
```

아래 처럼 수정

```js
const useInput = (initialValue = null) => {
  //...
};

export default useInput;
```
