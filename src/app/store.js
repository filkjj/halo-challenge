import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { toDoReducer } from './reducers';

const reducer = combineReducers({
  toDos : toDoReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware,createLogger({ collapsed:true}))
);

export const store = createStore(reducer,middleware);
