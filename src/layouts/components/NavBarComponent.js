import React from "react";
import MenuComponent from "./menu/MenuComponent";
import LogoComponent from "./LogoComponent";

function NavBarComponent(){
    return (
        <div className="l_navbar">
            <LogoComponent />
            
            <MenuComponent />
        </div>
    );
}

export default NavBarComponent;