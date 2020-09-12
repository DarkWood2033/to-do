import React from "react";
// import ListRouter from "../../todo/ListRouter";
import CategoryRouter from '../../categories/CategoryRouter';

function ContentComponent(){
    return (
        <div className="l_content">
            <CategoryRouter />
        </div>
    );
}

export default ContentComponent;