import React from 'react';
import Dialog from './Dialog';

function Confirm({title, color, onClose, message, onAccept, btnText, btnColor, btnCancelText, btnCancelColor}){
    return (
        <Dialog title={title} onClose={onClose} color={color}>
            <div className="message">{message}</div>
            <div className="action">
                <button class={'default '+btnColor} onClick={onAccept}>{btnText}</button>
                <button class={'default '+btnCancelColor} onClick={onClose}>{btnCancelText}</button>
            </div>
        </Dialog>
    );
}

export default Confirm;