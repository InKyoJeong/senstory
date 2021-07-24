## 개발하다 발생한 문제들

## 1

```js
// Home
useEffect(() => {
  if (repostError) {
    alert(repostError);
  }
}, [repostError]);
```

이런식으로 뷰에서 리포스트 에러 경고창을 띄울때, 다른 페이지를 갔다가 다시 홈에 방문하면 동일하게 에러 경고창이 뜨는 문제.

error상태가 계속 FAILURE 라서 뜨는 문제니까, 한번 경고창을 띄운 이후에는 에러값을 없애야 할거같다고 생각했다.

```js
// saga
function* repost(action) {
  try {
    const result = yield call(repostAPI, action.data);
    yield put({
      type: REPOST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REPOST_FAILURE,
      error: err.response.data,
    });
  } finally {
    yield put({
      type: REPOST_ERROR_FINISH,
    });
  }
}

// reducer
case REPOST_ERROR_FINISH:
  draft.repostError = null;
  break;
```

그래서 `REPOST_ERROR_FINISH`라는 액션을 하나 더 만들어서 finally로 에러가 뜬이후 error를 null로 변경해서 해결했다.

- finally안의 코드는 다음과 같은 상황에서 실행
  - 에러가 없는 경우: try 실행이 끝난 후
  - 에러가 있는 경우: catch 실행이 끝난 후
