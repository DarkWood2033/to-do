function Theme(){
    const theme = document.getElementsByTagName('html')[0];
    
    return {
        toggle(){
            theme.dataset.theme = theme.dataset.theme === 'dark'
                ? 'light'
                : 'dark';
        },
        dark(){
            theme.dataset.theme = 'dark';
        },
        light(){
            theme.dataset.theme = 'light';
        },
        get theme(){
            return theme.dataset.theme;
        }
    };
}

export default Theme;