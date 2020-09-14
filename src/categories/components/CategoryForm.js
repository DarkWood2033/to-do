import React, {useState} from 'react';
import {connect} from 'react-redux';
import mapDispatchToProps from '../../store/mapDispacthToProps';

const colors = [
    {
        color: 'primary',
        name: 'Blue'
    },
    {
        color: 'secondary',
        name: 'Grey'
    },
    {
        color: 'success',
        name: 'Green'
    },
    {
        color: 'error',
        name: 'Red'
    },
    {
        color: 'warning',
        name: 'Yellow'
    },
    {
        color: 'info',
        name: 'Blue'
    }
];

function CategoryForm({data = {}, onAccept}){
    const [name, setName] = useState(data.name || '');
    const [color, setColor] = useState(data.color || colors[0].color);
    const clearInput = () => {
        setName('');
    }
    return (
        <div className="form">
            <div className="form_control">
                <label>Название
                    <input
                        type="text" 
                        value={name} 
                        className="default" 
                        placeholder="Название категории"
                        onChange={event => setName(event.target.value)} />
                </label>
            </div>
            <div className="form_control">
                <label>Цвет
                    <select className="default" onChange={event => setColor(event.target.value)}>
                        { colors.map((item, key) => <option key={key} value={item.color}>{item.name}</option>) }
                    </select>
                </label>
            </div>
            <div className="text_center">
                <button className="default" onClick={() => {
                    onAccept({name, color});
                    clearInput();
                }}>Добавить</button>
            </div>
        </div>
    );
}

const dispatch = mapDispatchToProps({
    addCategory: 'categories/add'
});

export default connect(null, dispatch)(CategoryForm);