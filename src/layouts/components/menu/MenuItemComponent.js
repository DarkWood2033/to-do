import React from 'react';
import pt from 'prop-types';
import Icon from "../../../components/icons/Icon";
import { Link } from 'react-router-dom';

function MenuItemComponent({icon, text, url, color, isActive = false}){
    return (
        <Link to={url} style={{textDecoration:'none'}}>
            <div className={'menu_item '+(isActive?'active':'')} data-label={' '+text}>
                <Icon name={icon} type={color || 'light'} size="20px" />
            </div>
        </Link>
    );
}

MenuItemComponent.propTypes = {
    icon: pt.string,
    text: pt.string.isRequired,
    url: pt.string.isRequired,
    isActive: pt.bool
};

export default MenuItemComponent;