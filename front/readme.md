## Start

```bash
$ npm run dev
```

## Build

```
$ npm run build
```

<!-- ### antd

- xs screen < 576px
- sm screen ≥ 576px
- md screen ≥ 768px
- lg screen ≥ 992px
- xl screen ≥ 1200px
- xxl screen ≥ 1600px

## todo

- 컴포넌트 폴더나누기
  - Common/Home/Post/Diary/Profile/User

#### 메인포스트는 10개씩, 다이어리는 30개씩 -->

<!-- #### Build Result

Page                              Size     First Load JS
┌ λ /                             4.01 kB         263 kB
├   /_app                         0 B             103 kB
├ ○ /404                          1.02 kB         111 kB
├ ○ /500                          1.02 kB         111 kB
├ λ /diary/[userId]               5.69 kB         216 kB
├ λ /diary/[userId]/[diaryId]     3.95 kB         214 kB
├ λ /feel/[id]/[feel]             2.21 kB         213 kB
├ λ /hashtag/[tag]                2.09 kB         261 kB
├ λ /login                        1.59 kB         206 kB
├ λ /post/[id]                    613 B           260 kB
├ λ /profile                      8.89 kB         240 kB
├ λ /related                      2.18 kB         261 kB
├ λ /signup                       1.99 kB         206 kB
└ λ /user/[id]                    3.3 kB          262 kB
+ First Load JS shared by all     103 kB
  ├ chunks/framework.2191d1.js    42.4 kB
  ├ chunks/main.a3a79a.js         20.2 kB
  ├ chunks/pages/_app.2a8356.js   39.8 kB
  ├ chunks/webpack.9fc9ab.js      857 B
  └ css/cd471eb86ce46a4e0ac2.css  70.2 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps) -->

<!--
### ts

useRef에 있는 current 내에 값을 사용하기 위해선 null 체킹을 반드시 해주어야 한다.

```js
  const imageInput = useRef<HTMLInputElement>(null);

  const onClickImageUpload = useCallback(() => {
    if (!imageInput.current) {   // null check
      return;
    }
    imageInput.current.click();
  }, [imageInput.current]);

``` -->

<!-- 이런방법도있다  const enteredText = todoTextInputRef.current!.value; // not null -->
