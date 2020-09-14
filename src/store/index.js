import { createStore, combineReducers } from 'redux';
import TodoReducer from './todos/reducer';
import DialogReducer from './dialogs/reducer';
import CategoryReducer from './categories/reducer';

let store = createStore(combineReducers({
    todos: TodoReducer,
    dialogs: DialogReducer,
    categories: CategoryReducer
}));

window.onbeforeunload = function(){
    localStorage.setItem('todos', JSON.stringify(store.getState().todos));
    localStorage.setItem('categories', JSON.stringify(store.getState().categories));
}

export default store;