import React from 'react';
import Modal from '../../components/modal/Modal';
import {connect} from 'react-redux'
import mapStateToProps from '../../store/mapStateToProps';
import mapDispacthToProps from '../../store/mapDispacthToProps';
import Confirm from '../../components/dialogs/Confirm';
import Alert from '../../components/dialogs/Alert';

function DialogComponent({dialogs, deleteDialog}){
    if(dialogs.length === 0) return (<div></div>);
    const dialog = dialogs[0];
    const onClose = () => deleteDialog(dialog.id);
    if(dialog.method === 'confirm'){
        return (
            <Modal>
                <Confirm
                    title={dialog.title} 
                    onClose={onClose} 
                    color={dialog.color}
                    message={dialog.message}
                    onAccept={() => { dialog.onAccept(); onClose(); }}
                    btnText={dialog.btnText}
                    btnColor={dialog.btnColor}
                    btnCancelText={dialog.btnCancelText}
                    btnCancelColor={dialog.btnCancelColor} />
            </Modal>
        );
    }else if(dialog.method === 'prompt'){
        return (
            <Modal>
                <dialog.form 
                    title={dialog.title}
                    onClose={() => { dialog.onCancel(); onClose(); }}
                    color={dialog.color}
                    data={dialog.data} 
                    onAccept={data => { dialog.onAccept(data); onClose(); }} 
                    btnText={dialog.btnText}
                    btnColor={dialog.btnColor} />
            </Modal>
        );
    }else{
        return (
            <Modal>
                <Alert 
                    title={dialog.title}
                    onClose={onClose}
                    color={dialog.color}
                    message={dialog.message}
                    btnText={dialog.btnText}
                    btnColor={dialog.btnColor} />
            </Modal>
        ); 
    }
}

const state = mapStateToProps({
    dialogs: 'dialogs'
});

const dispatch = mapDispacthToProps({
    deleteDialog: 'dialogs/delete'
});

export default connect(state, dispatch)(DialogComponent);