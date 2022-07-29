const toggleMenuMobile = () => {
    const header  = document.getElementsByClassName('header')[0];
    if (header.style.transform ===  'translateX(-100%)'){
        header.style.transform = 'translateX(0%)';  
    }
    else{
        header.style.transform = 'translateX(-100%)';       
    
    }
  
}

