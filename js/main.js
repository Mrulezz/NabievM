$('.document-slider').owlCarousel({
    margin: 15,
    loop: true,
    items: 4,
    responsiveClass:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        481:{
            items:1,
            nav:true
        },
        769:{
            items:2,
            nav:true
        },
        992:{
            items:3,
            nav:true
        }
    }
});


$('.banner').owlCarousel({
    margin: 15,
    loop: true,
    items: 4,
    responsiveClass:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        481:{
            items:1,
            nav:true
        },
        769:{
            items:1,
            nav:true
        },
        992:{
            items:1,
            nav:true
        }
    }
});


$(document).ready(function(){
    $('.main__map-box svg path').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});