import store from '../../store';
import { DIALOG_ADD } from '../../store/dialogs/types';

const DEFAULT_TITLE = 'title';
const DEFAULT_MESSAGE = 'Message';
const DEFAULT_BTN_TEXT = 'Ok';
const DEFAULT_BTN_CANCEL_TEXT = 'Cancel';
const DEFAULT_BTN_COLOR = 'primary';
const DEFAULT_COLOR = 'primary';
const DEFAULT_BTN_CANCEL_COLOR = 'primary';
const DEFAULT_CALLBACK = () => {};

function Dialog(store){
    return {
        alert(params = {}, design = {}){
            store.dispatch({
                type: DIALOG_ADD, 
                value: {
                    method: 'alert', 
                    title: params.title || DEFAULT_TITLE, 
                    color: design.color || DEFAULT_COLOR, 
                    message: params.message || DEFAULT_MESSAGE, 
                    btnText: design.btnText || DEFAULT_BTN_TEXT, 
                    btnColor: design.btnColor || DEFAULT_BTN_COLOR
                }
            });
        },
        confirm(params = {}, design = {}){
            store.dispatch({
                type: DIALOG_ADD, 
                value: {
                    method: 'confirm', 
                    title: params.title || DEFAULT_TITLE, 
                    color: design.color || DEFAULT_COLOR, 
                    message: params.message || DEFAULT_MESSAGE, 
                    onAccept: params.onAccept || DEFAULT_CALLBACK, 
                    btnText: design.btnText || DEFAULT_BTN_TEXT, 
                    btnColor: design.btnColor || DEFAULT_BTN_COLOR, 
                    btnCancelText: design.btnCancelText || DEFAULT_BTN_CANCEL_TEXT, 
                    btnCancelColor: design.btnCancelColor || DEFAULT_BTN_CANCEL_COLOR
                }
            });
        },
        prompt(params = {}, design = {}){
            store.dispatch({
                type: DIALOG_ADD, 
                value: {
                    method: 'prompt', 
                    title: params.title || DEFAULT_TITLE, 
                    color: design.color || DEFAULT_COLOR, 
                    form: params.form || '<div></div>', 
                    onAccept: params.onAccept || DEFAULT_CALLBACK, 
                    onCancel: params.onCancel || DEFAULT_CALLBACK, 
                    data: params.data || {},
                    btnText: design.btnText || DEFAULT_BTN_TEXT,
                    btnColor: design.btnColor || DEFAULT_BTN_COLOR
                }
            });
        }
    }
}

export default Dialog(store);