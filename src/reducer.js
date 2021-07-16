import { combineReducers } from 'redux';
import filtersSlice from './features/filters/filtersSlice.js';
import todosSlice from './features/todos/todosSlice.js';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersSlice,
});

export default rootReducer;
