/// pages setup

/// trees page

const treesFolder = 'static/img/trees/'


const treesImages = {
    '0':{
        'path':'tree01.jpg',
        'name':'Antlers',
    },
    '1':{
        'path':'tree02.jpg',
        'name':'Sienna',
    },
    '2':{
        'path':'tree03.jpg',
        'name':'Florence rooftops',
    },
    '3':{
        'path':'tree04.jpg',
        'name':'Perth Palm',
    },

}


/// seascape

const  seaFolder = 'static/img/Seascapes/'

const seaImages = {
    '0':{
        'path':'seascape01.jpg',
        'name':'Dome',
    },
    '1':{
        'path':'seascape02.jpg',
        'name':'Sienna',
    },
    '2':{
        'path':'seascape03.jpg',
        'name':'Florence rooftops',
    },
    '3':{
        'path':'seascape04.jpg',
        'name':'A walk through the city.',
    },
    '4':{
        'path':'seascape05.jpg',
        'name':'Crabbing',
    },
    '5':{
        'path':'seascape06.jpg',
        'name':'Clavell Tower',
    },
    '6':{
        'path':'seascape07.jpg',
        'name':'Clavell Tower',
    },
    '7':{
        'path':'seascape08.jpg',
        'name':'Dome(again)',
    },
}

/// architecture

const  archFolder = 'static/img/Architecture/'

const archImages = {
    '0':{
        'path':'Camel.jpg',
        'name':'Al Jamal Square'
    },
    '1':{
        'path':'dome.jpg',
        'name':'dome in florence',
    },
    '2':{
        'path':'opra.jpg',
        'name':'Sydney Oprea House',
    },
    '3':{
        'path':'pigeon.jpg',
        'name':'Pigeon on a roof',
    },
    '4':{
        'path':'villa.jpg',
        'name':'Compton Acres',
    },
}


/// Florence

const  floFolder = 'static/img/Florence/'

const floImages = {
    '0':{
        'path':'florence01.jpg',
        'name':'Dome',
    },
    '1':{
        'path':'florence02.jpg',
        'name':'Sienna',
    },
    '2':{
        'path':'florence03.jpg',
        'name':'Florence rooftops',
    },
    '3':{
        'path':'florence04.jpg',
        'name':'A walk through the city.',
    },
    '4':{
        'path':'florence05.jpg',
        'name':'Dome(again)',
    },
}


// vegas

const  vegasFolder = 'static/img/Vegas/'

const vegasImages = {
    '0':{
        'path':'Las_Vegas_01.jpg',
        'name':'Vegas Sign'
    },
    '1':{
        'path':'ceasers.jpg',
        'name':'Ceasers',
    }
}


var mobileTotalWidth = 500;



// open solo image
function ImageSelection(elem){
    if (window.innerWidth <= mobileTotalWidth){
        document.querySelector('.mobile-hamburger').style.opacity = 0;
        document.querySelector('.mobile-hamburger').style.pointerEvents = 'none';

    }else{
        //pass
    }
    const sidebar = document.querySelector('.solo-image-box');
    sidebar.setAttribute('status','open');
    const soloBox = document.querySelector('.solo-image-container');
    const imageTitle = elem.getAttribute('name');
    document.getElementById('image-title').innerHTML = imageTitle;
    soloBox.innerHTML = '';
    sidebar.style.transform = 'translateX(0)';
    sidebar.style.opacity = 1;
    sidebar.style.pointerEvents = 'auto';
    const soloImageElement = document.createElement('img');
    soloImageElement.setAttribute('src',elem.getAttribute('src'));
    soloImageElement.setAttribute('class','solo-image');
    soloBox.appendChild(soloImageElement);
    setTimeout(function(){
        soloImageElement.style.opacity = '1';
        soloImageElement.style.transform= 'translateY(0)';
        document.querySelector('.solo-text').style.opacity = 1;
    }, 300);
   

}

//close solo-image window
document.querySelector('.close-ico').addEventListener('click', function() {
    const sidebar = document.querySelector('.solo-image-box');
    sidebar.style.transform = 'translateX(-500px)';
    sidebar.style.opacity = 0;
    sidebar.style.pointerEvents = 'none';
    if (window.innerWidth <= mobileTotalWidth){
        document.querySelector('.mobile-hamburger').style.opacity = 1;
        document.querySelector('.mobile-hamburger').style.pointerEvents = 'auto';

    }else{
        //pass
    }
    sidebar.setAttribute('status','closed');


});


function MobileMenu(){
    var mobileMenu = document.querySelector('.main-info');
    mobileMenu.style.transform = 'translateX(-500px)';
    // mobileMenu.style.display = 'none'
    var i;
        for (i = 0; i < mobileMenu.length; i++) {
            mobileMenu.children[i].style.display = 'none';
        }
    document.querySelector('.mobile-hamburger').style.opacity = 1;
    document.querySelector('.mobile-hamburger').style.pointerEvents = 'auto';

    

}




// checks for loaded images
var ImgsLoaded = 0;
function ImageLoaded(array){
    ImgsLoaded ++;
    var ArrayLength = Object.keys(array).length
    var ImgProgress = ImgsLoaded / ArrayLength * 100;
    if(ImgsLoaded == ArrayLength) {
        document.querySelector('.overlay').style.opacity = 0;
        document.querySelector('.overlay').style.pointerEvents = 'none';
        console.log("Loading finished");
        document.getElementById('slider-progress').style.width = ImgProgress +'%';
    }

    document.getElementById('slider-progress').style.width = ImgProgress + '%';
    

}

// collections grid

const collectionItems = document.querySelector('.collection-items');

//load Collection

function CollectionSelection(elem){
    document.getElementById('slider-progress').style.width = 0;
    ImgsLoaded = 0;

    //check for hero-image
    var treeHero = document.querySelector('.hero-image');
    if(treeHero){
        treeHero.remove();

    }else{
       //pass
    }

    // check for mobile and run menu
    if(window.innerWidth <= mobileTotalWidth){
        MobileMenu();
        
    }else{
       //pass and run desktop version
    }

    //check solo window status
    var sib = document.querySelector('.solo-image-box');
    if(sib.getAttribute('status') == 'open'){
        sib.style.transform = 'translateX(-500px)';
        sib.style.opacity = 0;
        sib.style.pointerEvents = 'none';
        sib.setAttribute('status','closed');
    }else{
        //pass
    }

    //sets menu style to inactive
    var projects = document.querySelector('.projects');
        var f = projects.children;
        var i;
        for (i = 0; i < projects.children.length; i++) {
            projects.children[i].setAttribute('class','home-project-title');
        }
    //set selected element class to active
        elem.setAttribute('class','home-project-title-active');

    document.querySelector('.overlay').style.opacity = 1;
    setTimeout(function(){
        collectionItems.style.opacity = 1;
        collectionItems.innerHTML = ''
        var ImageArray = ''
        var ImageFolder = ''
        //check which collection has been selected
        if(elem.innerHTML === 'Vegas.'){
            ImageArray = vegasImages;
            ImageFolder = vegasFolder;

        }else if(elem.innerHTML ==='Florence.'){
            ImageArray = floImages;
            ImageFolder = floFolder;

        }else if(elem.innerHTML === 'Architecture.'){
            ImageArray = archImages;
            ImageFolder = archFolder;

        }else if(elem.innerHTML === 'Seascapes.'){
            ImageArray = seaImages;
            ImageFolder = seaFolder;

        }else{
            ImageArray = treesImages;
            ImageFolder = treesFolder;

        }

        
        //load images
        for (const [key, value] of Object.entries(ImageArray)) {
            const Path = ImageFolder + ImageArray[key]['path'];
            const ImgHTML = document.createElement('img');
            ImgHTML.setAttribute('class','collection-item');
            ImgHTML.setAttribute('src',Path);
            ImgHTML.setAttribute('onclick','ImageSelection(this);');
            ImgHTML.setAttribute('name',ImageArray[key]['name']);
            collectionItems.appendChild(ImgHTML);
            ImgHTML.addEventListener('load',function(){
                console.log('image loaded');
                ImageLoaded(ImageArray);
            });

        }

    },750);
    // setTimeout(function(){
    //     document.querySelector('.overlay').style.opacity = 0;
    //     document.querySelector('.overlay').style.pointerEvents = 'none';


    // },750);





};


//open mobile menu

document.querySelector('.mobile-hamburger').addEventListener('click',function(){
    var mobileMenu = document.querySelector('.main-info');
    mobileMenu.style.width = '100%';
    document.querySelector('.mobile-hamburger').style.opacity = 0;
    document.querySelector('.mobile-hamburger').style.pointerEvents = 'none';
    document.querySelector('.mobile-menu-close').style.opacity = 1;
    document.querySelector('.mobile-menu-close').style.pointerEvents = 'auto';
    mobileMenu.style.transform = 'translateX(0)';

});

//close mobile menu

document.querySelector('.mobile-menu-close').addEventListener('click',function(){
    var mobileMenu = document.querySelector('.main-info');
    mobileMenu.style.width = '0';
    mobileMenu.style.transform = 'translateX(-500px)';
    document.querySelector('.mobile-hamburger').style.opacity = 1;
    document.querySelector('.mobile-hamburger').style.pointerEvents = 'auto';
    document.querySelector('.mobile-menu-close').style.pointerEvents = 'none';
    document.querySelector('.mobile-menu-close').style.opacity = 0;

});


window.addEventListener('load',function(){
    document.querySelector('.gif-loader').style.opacity = 0;
    document.querySelector('.gif-loader').style.pointerEvents = 'none';
    console.log('page-loaded');
});