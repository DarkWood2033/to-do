import { TODO_DELETE, TODO_CHANGE_STATUS, TODO_ADD, TODO_EDIT } from './todos/types';
import { DIALOG_ADD, DIALOG_DELETE } from './dialogs/types';
import { CATEGORY_ADD, CATEGORY_EDIT, CATEGORY_DELETE } from './categories/types';

const cfgDispatch = {
    todos: {
        add: TODO_ADD,
        delete: TODO_DELETE,
        edit: TODO_EDIT,
        changeStatus: TODO_CHANGE_STATUS
    },
    dialogs: {
        add: DIALOG_ADD,
        delete: DIALOG_DELETE
    },
    categories: {
        add: CATEGORY_ADD,
        delete: CATEGORY_DELETE,
        edit: CATEGORY_EDIT
    }
};

export default function mapDispatchToProps(nameDeps){
    return dispatch => {
        let deps = {};
        for(const nameDep in nameDeps){
            deps[nameDep] = findDispatch(nameDeps[nameDep], dispatch);
        }
        return deps;
    }
}

function findDispatch(dep, dispatch){
    const [module, action] = dep.split('/');
    return payload => dispatch({
        type: cfgDispatch[module][action],
        value: payload
    });
}