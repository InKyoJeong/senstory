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

이런식으로 뷰에서 특정 에러 경고창을 띄울때, 다른 페이지를 갔다가 다시 홈에 방문하면 동일하게 에러 경고창이 뜨는 문제.

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

<!-- // 에러 이미지 -->

그래서 `ERROR_FINISH`라는 액션을 하나 더 만들어서 finally로 error를 null로 변경해서 해결했다.

- finally안의 코드는 다음과 같은 상황에서 실행
  - 에러가 없는 경우: try 실행이 끝난 후
  - 에러가 있는 경우: catch 실행이 끝난 후

<br>

## 2

```js
//SequelizeDatabaseError: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''3'' at line 1

const comment = await Comment.create({
  PostId: parseInt(req.params.postId, 10),
});

//
const followings = await user.getFollowings({
  limit: parseInt(req.query.limit, 10),
});
```

params, query등으로 데이터를 받을때 숫자가아니여서 생기는 에러
숫자로 변환해줘야한다는 것을 알았다.

<br>

## 3

팔로워&팔로우 목록을 받아올때 데이터를 쉽게 받아올 수 있는 SWR을 사용해봤는데,
취소시 갱신이 바로 되지않고 새로고침해야 반영되는 문제.

```js
const {
  data: followerData,
  error: followerError,
  mutate: mutateFollower,
} = useSWR(
  `http://localhost:3065/user/followers?limit=${followerLimit}`,
  fetcher
);

const {
  data: followingData,
  error: followingError,
  mutate: mutateFollowing,
} = useSWR(
  `http://localhost:3065/user/followings?limit=${followingLimit}`,
  fetcher
);

  return (
    <>
        <FollowList
          //...
          mutate={mutateFollowing}
        />
        <FollowList
          //...
          mutate={mutateFollower}
        />
    </>
  );
};
```

`mutate`를 추가하여 갱신하였다.

<br>

## 4

- 에러

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```
