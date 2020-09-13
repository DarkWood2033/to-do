import React, {useState} from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../store/mapStateToProps'
import Prompt from '../../components/dialogs/Prompt';

function TodoForm({title, color, onClose, btnText, btnColor, onAccept, data, categories}){
    const [text, setText] = useState(data.text || '');
    const [errorText, setErrorText] = useState(false);
    const [category_id, setCategoryId] = useState(data.category_id || categories[0].id);
    const handle = (data) => {
        if(data.text.length === 0){
            setErrorText('Заполните поле');
            return;
        }
        if(data.text.length < 3){
            setErrorText('Минимальное значение поля 3 символа');
            return;
        }
        onAccept(data);
    };
    return (
        <Prompt 
            title={title} 
            color={color} 
            onClose={onClose} 
            onAccept={() => handle({text, category_id})} 
            btnText={btnText} 
            btnColor={btnColor}
        >
            <div className="form_control">
                <label>Название
                    <input
                        type="text" 
                        className="default" 
                        value={text}
                        onChange={(event) => setText(event.target.value)} 
                        placeholder="Введите название задания" />
                </label>
                { errorText ? <p className="text_error m-2">{errorText}</p> : '' }
            </div>
            <div className="form_control">
                <label>Категория
                    <select className="default"  value={category_id} onChange={event => setCategoryId(+event.target.value)}>
                        { categories.map((item, key) => <option key={key} value={item.id}>{item.name}</option>) }
                    </select>
                </label>
            </div>
        </Prompt>
    );
}

const state = mapStateToProps({
    categories: 'categories'
});

export default connect(state)(TodoForm);