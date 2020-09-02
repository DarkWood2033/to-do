import initialState from "./initialState";
import { DIALOG_ADD, DIALOG_DELETE } from './types';
import { addDialog, deleteDialog } from './actions';

function DialogReducer(state = initialState, action){
    switch(action.type){
        case DIALOG_ADD : return addDialog(state, action.value);
        case DIALOG_DELETE : return deleteDialog(state, action.value);
        default : return state;
    }
};

export default DialogReducer;