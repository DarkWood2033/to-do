import React, {useState, useRef, useEffect} from 'react';
import Icon from '../../components/icons/Icon';
import ThemeCompoent from './logo/ThemeComponent';
import FixNavbarComponent from './logo/FixNavbarComponent';
import Menu from '../../core/layouts/Menu';

function LogoComponent(){
    const [statusMenu, setStatusMenu] = useState(false);
    const menu = useRef(new Menu());
    useEffect(menu.current.toggle, [statusMenu]);
    return (
        <div className="logo">
            <div className="title">
                T<span>D</span>
            </div>
            <div className="action">
                <ThemeCompoent />
                <FixNavbarComponent />
                <div className="close" onClick={menu.current.hide}>
                    <Icon name="close" size={25} />
                </div>
            </div>
        </div>
    );
}

export default LogoComponent;