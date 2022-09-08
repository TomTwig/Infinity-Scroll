  
const count = 30;
const apiKey ='L2H_U3SqPRisPS_2_UD7Jh82R9Txku6dMP5vg749r34';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById("loader");
let photosArray = [];
let ready = false;
let totalImages = 0;
let imagesLoaded = 0;

function imagesLoad (){
  imagesLoaded++;
  loader.hidden = true;
  if(imagesLoaded === totalImages){
    ready = true;
  }
}

window.addEventListener("scroll", () => {
  if((window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) && ready){
    getPhotos();
    ready=false;
  }
} )

function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

async function getPhotos(){
    const request = await fetch(apiUrl);
    photosArray = await request.json();
    displayPhotos();
}

function displayPhotos(){
  imagesLoaded = 0;
  
  totalImages = photosArray.length;
  
  
    photosArray.forEach((element)=>{

        const item = document.createElement('a');
        setAttributes(item,
            {
                href:element.urls.small,
                target:'blank_'
            });
            
        const img = document.createElement('img');
        setAttributes(img,
            {
                src:element.urls.small,
                alt:element.views,
                title:element.views
            });
            img.addEventListener("load",imagesLoad);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
  
}
// On Load
getPhotos();


