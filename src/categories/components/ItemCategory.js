import React from 'react';
import {connect} from 'react-redux';
import mapDispatchToProps from '../../store/mapDispacthToProps';
import store from '../../store';
import dialog from '../../core/layouts/Dialogs';
import Icon from '../../components/icons/Icon';

function ItemCategory({id, name, color, deleteCategory}){
    const deleteItem = () => {
        const isFounfTodos = store.getState().todos.some(item => item.category_id === id);
        if(store.getState().categories.length !== 0){
            if(isFounfTodos){
                dialog.alert({
                    title: 'Удаление невозможно',
                    message: 'Не удалось удалить категорию, связи присутствием в ней задания.'
                });
            }else{
                deleteCategory(id);
            }
        }else{
            dialog.alert({
                title: 'Удаление невозможно',
                message: 'Должна быть хотя бы одна категория'
            });
        }
    };
    return (
        <div className="item_category">
            <div><Icon name="circle" type={color} /></div>
            <div>{name}</div>
            <div className="action">
                <div className="delete">
                    <button className="text error" onClick={deleteItem}><Icon name="times" /></button>
                </div>
            </div>
        </div>
    );
}

const dispatch = mapDispatchToProps({
    deleteCategory: 'categories/delete'
});

export default connect(null, dispatch)(ItemCategory);