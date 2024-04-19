const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

let slide = 1; //Sets the picture index

//Makes the photo pop up
function openn(){
    document.getElementById('images1').style.display = 'block';
}

//Makes the x button functional
function closee(){
    document.getElementById('images1').style.display = 'none';
}
//Goes onto the next slide
function nextSlide(n){
    slideshow(slide += n)
}
// Shows the current slide
function current(n){
    slideshow(slide = n)

}
//Displays the Slideshow
function slideshow(n){
    let slides = document.getElementsByClassName('murcii');
    if(n>slides.length){
        slide = 1
    }

    if(n<1){
        slide = slides.length;
    }

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
//displayes slide at correct index
    slides[slide-1].style.display = 'block';
}

//Display the slideshow when dom content is loaded
document.addEventListener('DOMContentLoaded', function(){
    slideshow(slide)
})