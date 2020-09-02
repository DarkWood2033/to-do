import { createStore, combineReducers } from 'redux';
import TodoReducer from './todos/reducer';
import DialogReducer from './dialogs/reducer';

let store = createStore(combineReducers({
    todos: TodoReducer,
    dialogs: DialogReducer
}));

window.onbeforeunload = function(){
    localStorage.setItem('todos', JSON.stringify(store.getState().todos));
}

export default store;