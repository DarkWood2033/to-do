import React from "react";
import NavBarComponent from "./components/NavBarComponent";
import ContentComponent from "./components/ContentComponent";

function MainLayout(){
    return (
        <div className="l_main">
            <NavBarComponent />
            <ContentComponent />
        </div>
    );
}

export default MainLayout;