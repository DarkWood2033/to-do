import React from "react";
import NavBarComponent from "./components/NavBarComponent";
import ContentComponent from "./components/ContentComponent";
import DialogComponent from './components/DialogComponent';

function MainLayout(){
    return (
        <div className="l_main full">
            <NavBarComponent />
            <ContentComponent />
            <DialogComponent />
        </div>
    );
}

export default MainLayout;