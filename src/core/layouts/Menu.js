function Menu(){
    let node = null;
    const menu = () => {
        if(!node){
            node = document.getElementsByClassName('l_main')[0];
        }
        return node || null;
    };

    const obj =  {
        toggle(){
            if(!menu()) return;
            menu().classList.toggle('full');
        },
        show(){
            menu().firstChild.style.display = 'block'
        },
        hide(){
            menu().firstChild.style.display = 'none'
        }
    };

    window.addEventListener('resize', () => {
        if(window.innerWidth < 600){
            if(!menu()) return;
            obj.hide();
        }else{
            if(!menu()) return;
            obj.show();
        }
    });

    return obj;
}

export default Menu;