console.log("Javascript added");

let image1Btn = document.querySelector('#image1');
let image2Btn = document.querySelector('#image2');
let image3Btn = document.querySelector('#image3');
let image4Btn = document.querySelector('#image4');
let bike = document.getElementById('bike');

image1Btn.addEventListener('click',()=>{
    console.log("image 1 is clicked");
    bike.style.backgroundImage = 'url(images/image1.jpg)';
});

image2Btn.addEventListener('click',()=>{
    console.log("image 2 is clicked");
    bike.style.backgroundImage = 'url(images/image2.jpg)';
});

image3Btn.addEventListener('click',()=>{
    console.log("image 3 is clicked");
    bike.style.backgroundImage = 'url(images/image3.jpg)';
});

image4Btn.addEventListener('click',()=>{
    console.log("image 4 is clicked");
    bike.style.backgroundImage = 'url(images/image4.jpg)';
});