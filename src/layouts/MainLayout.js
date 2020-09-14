import React from "react";
import NavBarComponent from "./components/NavBarComponent";
import ContentComponent from "./components/ContentComponent";
import DialogComponent from './components/DialogComponent';

function MainLayout({children}){
    return (
        <div className="l_main full">
            <NavBarComponent />
            <ContentComponent>{children}</ContentComponent>
            <DialogComponent />
        </div>
    );
}

export default MainLayout;