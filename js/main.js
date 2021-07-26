$('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText:['<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    navText:['<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('.foodimage').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    navText:['<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true