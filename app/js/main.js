window.addEventListener("load", function(){


    new Swiper('.company__swiper', {
        wrapperClass: 'company__wrapper',
        slideClass: 'company__text',
        direction: "vertical",
        pagination: {
            el: '.company__pagination',
            clickable: true,
            
        },
    });

    new Swiper('.portfolio__swiper', {
        wrapperClass: 'portfolio__wrapper',
        slideClass: 'portfolio__slide',
        direction: "vertical",
        pagination: {
            el: '.portfolio__pagination',
            clickable: true,
            
        },
    });


    // feedback__content
    let feedbackContent = document.querySelectorAll('.feedback__content');
    feedbackContent.forEach(element => {
        element.addEventListener('click', function(){
            if(element.classList.length == 1) {
                feedbackContent.forEach(element => {
                    element.classList.remove('feedback__content--active');
                });    
                this.classList.add('feedback__content--active');
            }
        });
    });

// window.addEventListener("load", function(){

    // $('.header__btn').on('click', function(){
    //     $('.menu').toggleClass('menu--active');
    //     $('.header__btn-item').toggleClass('header__btn-item--active');
    // });

    // let headerItems = document.querySelectorAll('.header__btn-item');
    // document.querySelector('.header__btn').addEventListener('click', function(){
    //     document.querySelector('.menu').classList.toggle('menu--active');
    //     headerItems.forEach(elem => {
    //         elem.classList.toggle('header__btn-item--active');
    //     });
    // });

    // window.addEventListener('scroll', function(){
    //     if(window.scrollY >= 100) {
    //         document.querySelector('.header').classList.add('header--active');
    //         document.querySelector('.home-page__title').classList.add('home-page__title--outLeft');
    //         document.querySelector('.home-page__name').classList.add('home-page__name--outLeft');
    //         document.querySelector('.home-page__link').classList.add('home-page__link--outLeft');
    //     }
    //     else {
    //         document.querySelector('.header').classList.remove('header--active');
    //         document.querySelector('.home-page__title').classList.remove('home-page__title--outLeft');
    //         document.querySelector('.home-page__name').classList.remove('home-page__name--outLeft');
    //         document.querySelector('.home-page__link').classList.remove('home-page__link--outLeft');
    //     }
    // });

    // const anim = ['html', 'css', 'js', 'sass', 'gulp', 'git', 'jquery', 'figma'];
    // anim.forEach(id =>
    //     new Vivus(id, {
    //         duration: 300,
    //         type: 'delayed'
    //     })
    // );

    // $('.menu__link, .logo, .home-page__link').on('click', function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href');
    //     var top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);

    //     $('.menu').removeClass('menu--active');
    //     $('.header__btn-item').removeClass('header__btn-item--active');
    // });

    // new WOW().init();
});
