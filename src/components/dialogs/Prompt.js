import React from 'react';
import Dialog from './Dialog';

function Prompt({title, color, onClose, onAccept, children, btnText, btnColor}){
    return (
        <Dialog title={title} color={color} onClose={onClose}>
            <div className="form">{children}</div>
            <div className="action">
                <button className={'default '+btnColor} onClick={onAccept}>{btnText}</button>
            </div>
        </Dialog>
    );
}

export default Prompt;