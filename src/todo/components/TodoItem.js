import React from 'react';
import Icon from '../../components/icons/Icon';
import Checkbox from '../../components/inputs/Checkbox';
import {connect} from 'react-redux';
import mapDispacthToProps from '../../store/mapDispacthToProps';
import TodoForm from './TodoForm';
import dialog from '../../core/layouts/Dialogs';

function TodoItem({id, text, complited, deleteTodo, changeStatusTodo, editTodo}){
    return (
        <div className="todo_item">
            <div className="switch">
                <Checkbox value={complited} onChange={() => changeStatusTodo(id)} color="light" /> 
            </div>
            <div className={'text'+(complited?' complited':'')}><p>{text}</p></div>
            <div className="action">
                <div className="edit">
                    <button 
                        className="text info" 
                        onClick={() => dialog.prompt({
                            data: {text},
                            title: 'Редактирование задания',
                            form: TodoForm, 
                            onAccept: text => editTodo({id, text, complited})
                        }, {
                            btnText: 'Изменить'
                        })}
                    >
                        <Icon size={18} name="pencil-square-o" />
                    </button>
                </div>
                <div className="delete">
                    <button className="text error" onClick={() => deleteTodo(id)}>
                        <Icon size={18} name="times" />
                    </button>
                </div>
            </div>
        </div>
    );
}

const dispatch = mapDispacthToProps({
    deleteTodo: 'todos/delete',
    changeStatusTodo: 'todos/changeStatus',
    editTodo: 'todos/edit'
});

export default connect(null, dispatch)(TodoItem);