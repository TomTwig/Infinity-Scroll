// Unsplash API

const count = 10;
const apiKey ='L2H_U3SqPRisPS_2_UD7Jh82R9Txku6dMP5vg749r34';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById("loader");
let photosArray = [];



function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

async function getPhotos(){

    const request = await fetch(apiUrl);
    photosArray = await request.json();
    console.log(photosArray);
    displayPhotos();

    

}

function displayPhotos(){

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


        item.appendChild(img);
        imageContainer.appendChild(item);

        console.log(imageContainer);


    });
    



}





getPhotos();


