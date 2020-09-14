import React from 'react';
import TodoItem from './TodoItem';

function Todo({todos, page, oneOfPage = 5}){
    const start = (page - 1) * oneOfPage;
    const end = start + oneOfPage;
    const showTodos =  todos.slice(start, end);
    return (
        <div className="todo">
            { todos.length > 0 
                ? showTodos.map(item => <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    category_id={item.category_id}
                    complited={item.complited} />) 
                : <p>Нет список задач.</p>
            }
        </div>
    );
}

export default Todo;