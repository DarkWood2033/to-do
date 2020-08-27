import React, {useState, useRef, useEffect} from 'react';
import Radio from '../../../components/inputs/Radio';
import Menu from '../../../core/layouts/Menu';

function FixNavbarComponent(){
    const [statusMenu, setStatusMenu] = useState(false);
    const menu = useRef(new Menu());
    useEffect(menu.current.toggle, [statusMenu]);
    return (
        <div className="l_fix_navbar">
            <Radio 
                value={statusMenu} 
                onChange={status => setStatusMenu(status)} 
                color="secondary" />
        </div>
    );
}

export default FixNavbarComponent;