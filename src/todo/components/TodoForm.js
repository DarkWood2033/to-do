import React, {useState, useEffect} from 'react';
import Prompt from '../../components/dialogs/Prompt';

function TodoForm({title, color, onClose, btnText, btnColor, onAccept, data}){
    const [text, setText] = useState(data.text || '');
    const [errorText, setErrorText] = useState(false);
    const handle = (data) => {
        if(text.length === 0){
            setErrorText('Заполните поле');
            return;
        }
        if(text.length < 3){
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
            onAccept={() => handle(text)} 
            btnText={btnText} 
            btnColor={btnColor}
        >
            <input
                type="text" 
                className="default" 
                value={text}
                onChange={(event) => setText(event.target.value)} 
                placeholder="Введите название задания" />
            { errorText ? <p className="text_error m-2">{errorText}</p> : '' }
        </Prompt>
    );
}

export default TodoForm;