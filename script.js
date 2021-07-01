let taskbar = document.getElementsByClassName('taskbar')[0];
let startMenu = document.getElementsByClassName('startmenu')[0];

taskbar.addEventListener('click', () => {
    console.log('clicked');
    if (startMenu.style.bottom === '60px')
        startMenu.style.bottom = '-650px';
    else 
        startMenu.style.bottom = '60px';
});