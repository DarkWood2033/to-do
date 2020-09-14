export function deleteCategory(state, id){
    return state.filter(item => item.id !== id);
}

export function addCategory(state, payload){
    let newState = [...state, {name: payload.name, color: payload.color, id: Date.now()}];
    return newState;
}

export function editCategory(state, payload){
    return state.map(item => item.id === payload.id ? payload : item);
}