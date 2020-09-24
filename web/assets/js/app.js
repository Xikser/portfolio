//show sitemap on page scroll
const siteMap = document.querySelector('.map');

document.addEventListener('scroll', () => {
    const topPosition = window.pageYOffset;
    
    if (topPosition > 450) {
        siteMap.classList.add('map--is-active')
    } else {
        siteMap.classList.remove('map--is-active');
    }
});