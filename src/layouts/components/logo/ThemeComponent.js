import React, {useState, useRef, useEffect} from 'react';
import Theme from '../../../core/layouts/Theme';
import Icon from '../../../components/icons/Icon';

function ThemeCompoent(){
    const [status, setStatus] = useState(true);
    const theme = useRef(new Theme());
    useEffect(theme.current.toggle, [status]);
    return (
        <div className="l_theme" onClick={() => setStatus(!status)}>
            <Icon name={status ? 'star-o' : 'star'} size={21} />
        </div>
    );
}

export default ThemeCompoent;