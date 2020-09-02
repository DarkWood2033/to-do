import React from 'react';
import Dialog from './Dialog';

function Alert({title, message, onClose, color, btnText, btnColor}){
    return (
        <Dialog title={title} onClose={onClose} color={color}>
            <div className="message">{message}</div>
            <div className="action">
                <button class={'default '+btnColor} onClick={onClose}>{btnText}</button>
            </div>
        </Dialog>
    );
}

export default Alert;