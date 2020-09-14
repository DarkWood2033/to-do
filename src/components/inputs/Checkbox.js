import React from 'react';
import Icon from '../icons/Icon';

function Checkbox({value, onChange, type = 'square', label = '', color = ''}){
    return (
        <div className="checkbox" onClick={() => onChange(!value)} >
            <div className={'button '+type+' '+color}>
                { (value) ? <Icon name="check" size={14} /> : '' }
            </div>
            <span>{' '+label}</span>
        </div>
    );
}

export default Checkbox;