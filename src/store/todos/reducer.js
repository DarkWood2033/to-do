import { deleteTodo, changeStatusTodo, addTodo, editTodo } from './actions';
import { TODO_ADD, TODO_DELETE, TODO_CHANGE_STATUS, TODO_EDIT } from './types';
import initialState from './initialState';

function TodoReducer(state = initialState, action){
    switch(action.type){
        case TODO_DELETE : return deleteTodo(state, action.value);
        case TODO_CHANGE_STATUS : return changeStatusTodo(state, action.value);
        case TODO_ADD : return addTodo(state, action.value);
        case TODO_EDIT : return editTodo(state, action.value);
        default : return state;
    }
}

export default TodoReducer;