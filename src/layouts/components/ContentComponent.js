import React from "react";
import Router from "./../../Router";

function ContentComponent({children}){
    return (
        <div className="l_content">{children}</div>
    );
}

export default ContentComponent;