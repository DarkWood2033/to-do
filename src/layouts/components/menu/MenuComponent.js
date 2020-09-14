import React from 'react';
import MenuItemComponent from './MenuItemComponent';
import LineItemComponent from './LineItemComponent';
import menuConfig from '../../../configs/menu';
import {connect} from 'react-redux'; 
import mapStateToProps from '../../../store/mapStateToProps';
import {useLocation} from 'react-router-dom';

function MenuComponent({categories}){
    const getMenuItem = () => {
        let menuItem = [];
        menuItem = menuConfig;
        menuItem = menuItem.concat(categories.map(item => ({
            text: item.name,
            icon: 'circle-o',
            type: 'menu',
            url: `/todos/${item.name}`
        })));
        return menuItem;
    }
    const url = useLocation().pathname;
    return (
        <div className="menu">
            { getMenuItem().map((item, key) => 
                item.type === 'menu'
                ? <MenuItemComponent 
                    key={key}
                    icon={item.icon} 
                    text={item.text} 
                    url={item.url}
                    color={item.color} 
                    isActive={url === item.url} />
                : <LineItemComponent
                    key={key}
                    text={item.text} />
            ) }
        </div>
    );
}

const state = mapStateToProps({
    categories: 'categories'
});

export default connect(state)(MenuComponent);