import 'redux';
import { Task } from 'redux-saga';

declare module 'redux' {
  export interface Store<RootState, AnyAction> {
    sagaTask?: Task;
  }
}
