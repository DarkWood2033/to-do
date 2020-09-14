import React from "react";

function Icon({name, type = '', size = 16}){
    return (
        <i className={'fa fa-'+name+' '+type} style={{fontSize:size}} />
    );
}

export default Icon;