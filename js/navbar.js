
const displayWindowSize = () => {
    
    const header = document.getElementsByClassName('header')[0];
    const w = screen.width;
    if (w >= 800) {
        header.style.transform = 'translateX(0%)';
    }
}

const throttleDisplayWindowSize = (func) => {

    let shouldWait = false;
    // debugger;
    return () => {

        if (shouldWait) return;
        func();
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;

        }, 1000);

    }

}



const toggleMenu = ()=>{
    let firstLoad = true;
    return  ()=>{
        if (firstLoad){
            const header = document.getElementsByClassName('header')[0];
            if (header.style.transform === 'translateX(-1000px)') {
                header.style.transform = 'translateX(0%)';
            }
            firstLoad =  false;
        }
        else{
            const header = document.getElementsByClassName('header')[0];
            if (header.style.transform === 'translateX(-1000px)') {
                header.style.transform = 'translateX(0%)';
            }
            else {
                header.style.transform = 'translateX(-1000px)';
        
            }
        }
       
        
    }
}

const toggleMenuMobile = toggleMenu();

window.addEventListener('load', () => {
    toggleMenuMobile();
});

const windowDisplayToggle = throttleDisplayWindowSize(displayWindowSize);

window.addEventListener('resize', () => {
    windowDisplayToggle();
})





