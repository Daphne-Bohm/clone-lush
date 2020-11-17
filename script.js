
window.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const screenWidth = document.documentElement.clientWidth;
    
    const message = document.getElementById('message-icon');
    const messageBox = document.getElementById('message-box');
    const closeMenu = document.getElementById('close-menu');

    const menu = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');

    const search = document.getElementById('search-icon');
    const searchItems = document.getElementById('search-items');
    const closeSearch = document.getElementById('close-search-bar');
    const hiddenSearchIcon = document.getElementById('search-icon-hidden');

    const bag = document.getElementById('bag-icon');
    const shoppingBox = document.getElementById('shopping-bag-box');
    const closeShopping = document.getElementById('close-shopping-bag');


    /****************************************HEADER****************************************/

    // MESSAGE
    message.addEventListener('click', () =>{

        if(screenWidth < 768){
            messageBox.classList.add('showMessageSM');
        }else{
            messageBox.classList.add('showMessageMD');
            header.classList.add('move680px');
        }

    })

    closeMenu.addEventListener('click', () =>{
        if(screenWidth < 768){
            messageBox.classList.remove('showMessageSM');
        }else{
            messageBox.classList.remove('showMessageMD');
            header.classList.remove('move680px');
        }
    })


    // MENU
    menu.addEventListener('click', () => {
        menuItems.classList.toggle('showMenuOrSearch');
    })


    // SEARCH
    search.addEventListener('click', () => {
        if(screenWidth < 768){
            searchItems.classList.toggle('showMenuOrSearch');
        }else{
            searchItems.classList.toggle('showMenuOrSearch');
            searchItems.classList.contains('showMenuOrSearch') ? hiddenSearchIcon.classList.add('showLoop') : hiddenSearchIcon.classList.remove('showLoop');
        }
    })

    closeSearch.addEventListener('click', () => {
        if(searchItems.classList.contains('showMenuOrSearch')) searchItems.classList.remove('showMenuOrSearch');
    })


    // BAG
    bag.addEventListener('click', () => {
        if(screenWidth < 768){
            shoppingBox.classList.add('showBagSM');
        }else{
            shoppingBox.classList.add('showBagMD');
            header.classList.add('goBack680px');
        }
    })

    closeShopping.addEventListener('click', (e) => {
        if(screenWidth < 768){
            shoppingBox.classList.remove('showBagSM');
        }else{
            shoppingBox.classList.remove('showBagMD');
            header.classList.remove('goBack680px');
        }
    })



});