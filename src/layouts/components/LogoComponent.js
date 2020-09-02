import React, {useRef} from 'react';
import Icon from '../../components/icons/Icon';
import ThemeCompoent from './logo/ThemeComponent';
import FixNavbarComponent from './logo/FixNavbarComponent';
import Menu from '../../core/layouts/Menu';

function LogoComponent(){
    const menu = useRef(new Menu());
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