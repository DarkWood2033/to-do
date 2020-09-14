import React from 'react';
import ItemCategory from './ItemCategory';

function ListCategories({categories}){
    return (
        <div className="list_categories">
            <div className="header">
                <div>Color</div>
                <div>Name</div>
                <div></div>
            </div>
            { categories.map(item => <ItemCategory 
                key={item.id} 
                id={item.id}
                name={item.name}
                color={item.color} />) }
        </div>
    );
}

export default ListCategories;