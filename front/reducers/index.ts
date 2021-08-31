import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import user from './user';
import post from './post';
import diary from './diary';
import { PostinitialState } from '../interfaces/post';
import { DiaryInitialState } from '../interfaces/diary';
import { UserInitialState } from '../interfaces/user';

export interface RootState {
  post: PostinitialState;
  diary: DiaryInitialState;
  user: UserInitialState;
}

const rootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE: ', action);
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
