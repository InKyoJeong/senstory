import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';

import reducer, { RootState } from '../reducers';
import rootSaga from '../sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper<Store<RootState>>(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
