import React from 'react';
import Icon from '../../components/icons/Icon';

function Board({title, number, icon, color}){
    return (
        <div className="board">
            <div className={'icon '+color}>
                <Icon name={icon} size={22} type={color} />
            </div>
            <div className="text">
                <p className="number">{number}</p>
                <p className="title">{title}</p>
            </div>
        </div>
    );
}

export default Board;