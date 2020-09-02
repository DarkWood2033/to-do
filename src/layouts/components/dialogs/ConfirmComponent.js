import React from 'react';
import Modal from '../../../components/modal/Modal';
import Confirm from '../../../components/dialogs/Confirm';

function ConfirmComponent(props){
    return (
        <Modal>
            <Confirm {...props} />
        </Modal>
    );
}

export default ConfirmComponent;