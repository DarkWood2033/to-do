import React from 'react';
import TodoForm from './TodoForm';
import dialog from '../../core/layouts/Dialogs';
import {connect} from 'react-redux';
import mapDispatchToProps from '../../store/mapDispacthToProps';

function TodoAdd({addTodo}){
    return (
        <button 
            className="default secondary" 
            onClick={() => dialog.prompt({
                title: 'Создание задания',
                form: TodoForm, 
                onAccept: data => addTodo(data)
            }, {
                btnText: 'Добавить'
            })}
        >Добавить задание</button>
    );
}

const dispatch = mapDispatchToProps({
    addTodo: 'todos/add'
});

export default connect(null, dispatch)(TodoAdd);