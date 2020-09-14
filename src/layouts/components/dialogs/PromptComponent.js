import React from 'react';
import Modal from '../../../components/modal/Modal';

function PromptComponent(props){
    return (
        <Modal>
            <props.form {...props} />
        </Modal>
    );
}

export default PromptComponent;