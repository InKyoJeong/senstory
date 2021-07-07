import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from "../actions/post";

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Kyo",
      },
      content: "첫번째 게시글 #해시태그",
      Images: [
        { src: "https://avatars.githubusercontent.com/u/48676844?s=120&v=4" },
        { src: "https://avatars.githubusercontent.com/u/48676844?s=120&v=4" },
        { src: "https://avatars.githubusercontent.com/u/48676844?s=120&v=4" },
      ],
      Comments: [
        {
          User: {
            nickname: "Tak",
          },
          content: "안녕하세요",
        },
        {
          User: {
            nickname: "Mike",
          },
          content: "반가워요",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  content: "더미 포스트",
  User: {
    id: 1,
    nickname: "INGG",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        //
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_FAILURE:
      return {
        //
      };
    default:
      return state;
  }
};

export default reducer;
