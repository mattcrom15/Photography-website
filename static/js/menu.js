// menu


function SubMenu(){
    var subMenu = document.querySelector('.sub-menu');
    var MenuStatus = subMenu.getAttribute('menu');
    var subMenuItems = document.querySelectorAll('.sub-menu-item');
    if(MenuStatus == 'closed'){
        subMenu.setAttribute('menu','open');
        subMenu.style.height = 'auto';
        subMenu.style.opacity = '1';
        subMenuItems.forEach(menuItem => {
            // menuItem.style.display = 'none';
            menuItem.style.opacity = '1';

        });
    }else{
        subMenu.setAttribute('menu','closed');
        subMenu.style.height = '0';
        subMenu.style.opacity = '0';
        subMenuItems.forEach(menuItem => {
            // menuItem.style.display = 'block';
            menuItem.style.opacity = '0';

        });
    }   

}

document.getElementById('collection').addEventListener('mouseover',function(){
    SubMenu();

});

document.querySelector('.sub-menu-container').addEventListener('mouseout',function(){
    SubMenu();

});



