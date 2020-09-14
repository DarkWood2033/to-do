import React from 'react';
import Board from './Board';

function TodoStatistics({todos}){
    const complitedTodos = todos.reduce((prevVal, item) => {
        if(item.complited){
            prevVal++;
        }
        return prevVal;
    }, 0);
    const percent = ((complitedTodos / todos.length || 0)  * 100).toFixed(0);
    return (
        <div className="row mb-4">
            <div className="col-md-4 my-2">
                <Board title="Количество заданий" icon="tasks" number={todos.length} color="success" />
            </div>
            <div className="col-md-4 my-2">
                <Board title="Выполненные задания" icon="check-square-o" number={complitedTodos} color="info" />
            </div>
            <div className="col-md-4 my-2">
                <Board title="Соотношение" icon="bar-chart-o" number={percent + '%'} color="warning" />
            </div>
        </div>
    );
}

export default TodoStatistics;