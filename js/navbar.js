
// const displayWindowSize = () => {
    
//     const header = document.getElementsByClassName('header')[0];
//     const w = screen.width;
//     if (w >= 800) {
//         header.classList.remove('hidden');
//     }
// }

// const throttleDisplayWindowSize = (func) => {

//     let shouldWait = false;
//     // debugger;
//     return () => {

//         if (shouldWait) return;
//         func();
//         shouldWait = true;
//         setTimeout(() => {
//             shouldWait = false;

//         }, 1000);

//     }

// }



const toggleMenu = ()=>{
    
    let firstLoad = true;
    return  ()=>{
        console.log("Clicked");
        if (firstLoad){
            const header = document.getElementsByClassName('header')[0];
            if (header.classList.contains('hidden')){
                header.classList.remove('hidden');

            }
            firstLoad =  false;
        }
        else{
            const header = document.getElementsByClassName('header')[0];
            if (header.classList.contains('hidden')){
                header.classList.remove('hidden');
            }
            else {
                header.classList.add('hidden');
        
            }
        }
       

    }
}

const toggleMenuMobile = toggleMenu();

window.addEventListener('load', () => {
    toggleMenuMobile();
});

// const windowDisplayToggle = throttleDisplayWindowSize(displayWindowSize);

// window.addEventListener('resize', () => {
//     windowDisplayToggle();
// })





