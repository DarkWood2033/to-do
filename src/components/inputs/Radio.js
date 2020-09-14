import React from 'react';
import pt from 'prop-types';

function Radio({label = '', onChange, type = 'circle', color = '', value = false}){
    return (
        <div className="radio" onClick={() => onChange(!value)} >
            <div className={'button '+type+' '+color}>
                { (value) ? <div /> : '' }
            </div>
            <span>{' '+label}</span>
        </div>
    );
}

Radio.propTypes = {
    label: pt.string,
    onChange: pt.func.isRequired,
    type: pt.string,
    color: pt.string,
    value: pt.bool.isRequired
};

export default Radio;