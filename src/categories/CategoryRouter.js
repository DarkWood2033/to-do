import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispacthToProps';
import CategoryForm from './components/CategoryForm';
import ListCategories from './components/ListCategories';

function CategoryRouter({categories, addCategory}){
    return (
        <div className="container">
            <div className="mb-3">
                <CategoryForm onAccept={(data) => addCategory(data)} />
            </div>
            <div>
                <ListCategories categories={categories} />
            </div>
            
        </div>
    );
}

const state = mapStateToProps({
    categories: 'categories'
});

const dispatch = mapDispatchToProps({
    addCategory: 'categories/add',
    deleteCategory: 'categories/delete',
    editCategory: 'categories/edit'
});

export default connect(state, dispatch)(CategoryRouter);