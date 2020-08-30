import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";

import indexreducer from './reducers/index'

const logger = createLogger();
const enhancer = applyMiddleware(rpm,logger);

const store = createStore(indexreducer, enhancer);

export default store;