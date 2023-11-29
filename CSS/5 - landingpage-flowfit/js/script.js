function mobileNavShow() {
    let mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.classList.contains('open')){
        mobileNav.classList.remove('open');
        document.querySelector('.nav-icon').src = "img/menu_white_36dp.svg";
    } else {
        mobileNav.classList.add('open');
        document.querySelector('.nav-icon').src = "img/close_white_36dp.svg";
    }
}