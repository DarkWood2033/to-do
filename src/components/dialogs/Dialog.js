import React from 'react';
import Icon from '../icons/Icon';

function Dialog({title, onClose, color, children}){
    return (
        <div className="dialog">
            <div className={'title '+color}>{title}
                <button className="text" onClick={onClose}>
                    <Icon name="times" size={14} />
                </button>
            </div>
            <div className="content">{children}</div>
        </div>
    );
}

export default Dialog;