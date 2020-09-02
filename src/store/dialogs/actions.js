export function addDialog(state, payload){
    return [...state, {...payload, id: Date.now()}];
}

export function deleteDialog(state, id){
    return state.filter(item => item.id !== id);
}