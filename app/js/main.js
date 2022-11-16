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


        document.querySelector('.menu__button').addEventListener('click', function(){
            document.querySelector('.menu').classList.toggle('menu--active');
            document.querySelector('.menu__button').classList.toggle('menu__button--active');
        });


    window.addEventListener('scroll', function(){
        if(window.scrollY >= 100) {
            document.querySelector('.header').classList.add('header--active');
        }
        else {
            document.querySelector('.header').classList.remove('header--active');
        }
    });



    // $('.menu__link, .logo, .home-page__link').on('click', function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href');
    //     var top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);

    //     $('.menu').removeClass('menu--active');
    //     $('.header__btn-item').removeClass('header__btn-item--active');
    // });

    // new WOW().init();


    const headerLinks = document.querySelectorAll('.menu__link');
    for (let link of headerLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = link.getAttribute('href').substr(1);
            
            document.getElementById(section).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.querySelector('.menu').classList.toggle('menu--active');
            document.querySelector('.menu__button').classList.toggle('menu__button--active');
            // document.querySelectorAll('.header__btn-item').forEach(item => {
            //     item.classList.toggle('header__btn-item--active');
            // });
        });
    }


});
