import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
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
  addPostLoading: false,
  addPostFinish: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentFinish: false,
  addCommentError: null,
};

const dummyPost = (data) => ({
  id: 2,
  content: data,
  User: {
    id: 1,
    nickname: "INGG",
  },
  Images: [],
  Comments: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostFinish: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostFinish: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentFinish: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentFinish: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
