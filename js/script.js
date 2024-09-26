document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    const body = document.querySelector('.body');
    const burger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const headerLink = document.querySelectorAll('.header__link');
    headerLink.forEach(element => {
        element.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                headerOpened()
            }
        });
    });
    burger.addEventListener('click', function() {
        headerOpened()
    });
    function headerOpened(){
        headerMenu.classList.toggle('active');
        if (headerMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    window.addEventListener('load', checkScreenWidth);
    window.addEventListener('resize', checkScreenWidth);
    function checkScreenWidth() {
        if (window.innerWidth > 767) {
            document.body.style.overflow = '';
            headerMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    }
    resizeHeight()
    function resizeHeight(){
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', () => {
    resizeHeight()
    });
});
