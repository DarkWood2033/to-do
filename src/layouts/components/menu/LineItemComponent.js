import React from 'react';
import pt from 'prop-types';

function LineItemComponent({text}){
    return (
        <div className="line" data-label={text}>
            <hr />
        </div>
    );
}

LineItemComponent.propTypes = {
    text: pt.string.isRequired
};

export default LineItemComponent;