const menuButton = document.querySelector('img.menu');
const menu = document.querySelector('#main-nav');
const login = document.querySelector('.login-section');
const menuDrop = document.querySelector('li:nth-child(1) a');
const menuDropDown1 = document.querySelector('.drop-down-nav');
const menuDrop2 = document.querySelector('li:nth-child(2) a');
const menuDropDown2 = document.querySelector('.drop-down-nav-2');

menuButton.addEventListener('click',()=>{
    if(menuButton.getAttribute('src') == './images/icon-menu.svg'){
        menuButton.setAttribute('src','./images/icon-close-menu.svg')
        menu.style.display = 'flex';
        login.style.display = 'flex';
    }else {
        menuButton.setAttribute('src','./images/icon-menu.svg')
        menu.style.display = 'none';
        login.style.display = 'none'; 
    }
})

menuDrop.addEventListener('click',()=>{
    if(menuDropDown1.style.display == 'none'){
    menuDropDown1.style.display = 'block';
    menuDropDown2.style.display = 'none';
    }else{
        menuDropDown1.style.display = 'none';
    }
})
menuDrop2.addEventListener('click',()=>{
    if(menuDropDown2.style.display == 'none'){
    menuDropDown2.style.display = 'block';
    menuDropDown1.style.display = 'none';
    }else{
        menuDropDown2.style.display = 'none';
    }
})
