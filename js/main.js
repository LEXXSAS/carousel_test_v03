$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    nav:true,
    navText: ["&#60;", "&#62;"],
    animateIn: 'fadeInd',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
