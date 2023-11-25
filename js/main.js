
// menu===========>>>

$(".menu").sticky({topSpacing:0});


// slider ============>>>>>

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,
    autoplayTimeout:2000,
    autoplayHoverpause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




// swpeir ==================>>>>

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// video popup 1 =======>

    $('.v-play a').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            srcAction: 'iframe_src'
        }
    });