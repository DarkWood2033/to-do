import React, {useState, useMemo} from 'react';
import Todo from './components/Todo';
import Pagination from '../components/paginations/Pagination';
import TodoStatistics from './components/TodoStatistics';
import {connect} from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import {useParams} from 'react-router-dom';
import TodoAdd from './components/TodoAdd';

function SingleRouter({todos, categories}){
    const name = useParams().category;
    const category_id = useMemo(() => {
        return categories.find(item => item.name === name);
    }).id;
    const availableTodos = useMemo(() => todos.filter(item => item.category_id === category_id));
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
                <TodoAdd />
            </div>

            <Todo page={current} oneOfPage={oneOfPage} todos={availableTodos} />

            { oneOfPage < availableTodos.length ? <div className="mt-3">
                <Pagination current={current} count={countPageTodos} setCurrent={setCurrent} range={3} />
            </div> : '' }

        </div>
    );
}

const state = mapStateToProps({
    todos: 'todos',
    categories: 'categories'
});

export default connect(state)(SingleRouter);