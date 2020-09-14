import React from 'react';
import MenuItemComponent from './MenuItemComponent';
import LineItemComponent from './LineItemComponent';

function MenuComponent(){
    return (
        <div className="menu">
            <MenuItemComponent icon="home" text="Home" url="" />
            <MenuItemComponent icon="user-o" text="Profile" url="" isActive={true} />
            <MenuItemComponent icon="cog" text="Setting" url="" />
            <LineItemComponent text="Todo" />
            <MenuItemComponent icon="circle-o" text="Primary" url="" />
            <MenuItemComponent icon="circle-o" text="Secondary" url="" />
            <LineItemComponent text="Notebook" />
            <MenuItemComponent icon="circle-o" text="Primary" url="" />
            <MenuItemComponent icon="circle-o" text="Secondary" url="" />
        </div>
    );
}

export default MenuComponent;