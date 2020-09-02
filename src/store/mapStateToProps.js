export default (nameDeps) => {
    return state => {
        let deps = {}; 
        for(const nameDep in nameDeps){
            if(!state.hasOwnProperty(nameDeps[nameDep])){
                throw new Error(`Не существует ${nameDeps[nameDep]} state.`);
            }
            deps[nameDep] = state[nameDeps[nameDep]];
        }
        return deps;
    }
};