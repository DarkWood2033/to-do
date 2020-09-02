import React, {useState, useMemo} from 'react';
import Todo from './components/Todo';
import Pagination from '../components/paginations/Pagination';
import TodoStatistics from './components/TodoStatistics';
import {connect} from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispacthToProps from '../store/mapDispacthToProps';
import TodoForm from './components/TodoForm';
import dialog from '../core/layouts/Dialogs';

function ListRouter({todos, addTodo}){
    const availableTodos = useMemo(() => todos, [todos]);
    const oneOfPage = 5;
    const countPageTodos = Math.ceil(todos.length / oneOfPage);
    const [current, setCurrent] = useState(1);
    if(countPageTodos < current){
        setCurrent(countPageTodos);
    }
    return (
        <div className="container">

            <TodoStatistics todos={availableTodos} />

            <div className="mb-3">
                <button 
                    className="default secondary" 
                    onClick={() => dialog.prompt({
                        title: 'Создание задания',
                        form: TodoForm, 
                        onAccept: text => addTodo({text})
                    }, {
                        btnText: 'Добавить'
                    })}
                >Добавить задание</button>
            </div>

            <Todo page={current} oneOfPage={oneOfPage} todos={availableTodos} />

            { oneOfPage < todos.length ? <div className="mt-3">
                <Pagination current={current} count={countPageTodos} setCurrent={setCurrent} range={3} />
            </div> : '' }

        </div>
    );
}

export default connect(
    mapStateToProps({
        todos: 'todos'
    }),mapDispacthToProps({
        addDialog: 'dialogs/add',
        addTodo: 'todos/add'
    })
)(ListRouter);