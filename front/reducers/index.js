import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import diary from "./diary";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE: ", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
        diary,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
