// Fixed nav
const nav = document.querySelector('.nav')
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll',()=>{
    const pageHeight = window.pageYOffset;
    if(pageHeight >= navHeight){
        nav.classList.add('fix_nav')
    }else{
        nav.classList.remove('fix_nav')
    }
})

// Display nav
const navLink = document.querySelectorAll('.nav_link')
const navToggle = document.querySelector('.nav_toggle');
const navCollapse = document.querySelector('.nav_collapse')
navToggle.addEventListener('click',()=>{
    navCollapse.classList.toggle('show_nav')
})

navLink.forEach((link,index) =>{
    link.addEventListener('click',()=>{
        navCollapse.classList.remove('show_nav');
    })    
    // console.log(link,index)
})


// Menu magnific-popup

$(document).ready(function(){
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery:{
            enabled:true,
            navigateByImgClick:true,
            // preload: [0,1]
        }
    })
})


// Testimonial auto swipping
$(document).ready(function(){
    $('.testimonial_center').slick({
        dots: true,
        infinite:true,
        autoplay:true,
        speed: 300,
        slideToShow:1,
        adpativeHeight: true,
    })
})















