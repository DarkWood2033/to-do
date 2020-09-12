import { addCategory, deleteCategory, editCategory } from './actions';
import { CATEGORY_ADD, CATEGORY_DELETE, CATEGORY_EDIT } from './types';
import initialState from './initialState';

function CategoryReducer(state = initialState, action){
    switch(action.type){
        case CATEGORY_ADD : return addCategory(state, action.value);
        case CATEGORY_DELETE : return deleteCategory(state, action.value);
        case CATEGORY_EDIT : return editCategory(state, action.value);
        default : return state;
    }
}

export default CategoryReducer;