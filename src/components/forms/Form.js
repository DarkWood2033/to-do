import React from 'react';

function Form({onSubmit, btnText, btnColor}){
    return (
        <div className="form">
            <div className="content">{children}</div>
            <div className="action">
                <button className={'default '+btnColor} onClick={onSubmit}>{btnText}</button>
            </div>
        </div>
    );
}

export default Form;