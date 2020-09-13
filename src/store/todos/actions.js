export function deleteTodo(state, id){
    return state.filter(item => item.id !== id);
}

export function changeStatusTodo(state, id){
    return state.map(item => {
        if(item.id === id){
            item.complited = !item.complited;
        }
        return item;
    });
}

export function addTodo(state, payload){
    let newState = [...state, {text: payload.text, category_id: payload.category_id, complited: false, id: Date.now()}];
    return newState;
}

export function editTodo(state, payload){
    return state.map(item => item.id === payload.id ? payload : item);
}