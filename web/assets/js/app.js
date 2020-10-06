//navbar
const header = document.querySelector('.header');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.portfolio');
const contact = document.querySelector('.contact')

const navbar = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

const linkMap = new Map();

document.querySelectorAll('.link--home').forEach(e => linkMap.set(e, header));
document.querySelectorAll('.link--about').forEach(e => linkMap.set(e, about));
document.querySelectorAll('.link--skills').forEach(e => linkMap.set(e, skills));
document.querySelectorAll('.link--projects').forEach(e => linkMap.set(e, projects));
document.querySelectorAll('.link--contact').forEach(e => linkMap.set(e, contact));

for(const link of linkMap.keys()) {
    link.addEventListener('click', detectWidth);
}

function detectWidth() {
    const section = linkMap.get(this)
    var deviceWidth = window.innerWidth;
    scrollPage(section, deviceWidth);
}

function scrollPage(section, width) {
    const offsetTop = section.offsetTop;
    
     if (width <= 736) {
        hideMobileNavBar();
     }
    
     scroll({
         top: offsetTop,
         behavior: "smooth"
     });
}


//mobile navbar
const mobileNavBar = document.querySelector('.mobile-nav')
const mobileNavIconBar = document.querySelector('.mobile-icons--bar');
const mobileNavIconTimes = document.querySelector('.mobile-icons--times');
const mobileNavBarItems = document.querySelectorAll('.mobile-nav__item');
const classToSetItemsStyle = 'mobile-nav--set-items-style';

mobileNavIconBar.addEventListener('click', () => {
    mobileNavBar.classList.add(classToSetItemsStyle)

    for (let i = 0; i < mobileNavBarItems.length; i++) {
        const navItem = mobileNavBarItems[i];
        navItem.style.left = '0';
    }
})

mobileNavIconTimes.addEventListener('click', hideMobileNavBar);

function hideMobileNavBar() {
    mobileNavBarItems[0].style.left = '-100%'
    mobileNavBarItems[1].style.left = '100%'
    mobileNavBarItems[2].style.left = '-100%'
    mobileNavBarItems[3].style.left = '100%'

    setTimeout(() => {
        mobileNavBar.classList.remove(classToSetItemsStyle)
    }, 2500)
}


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



//contact clipboard
const clipboards = document.querySelectorAll('.contact__box');

for(const clipboard of clipboards) {
    clipboard.addEventListener('click', copyText)
}

function copyText() {
    const elem = this.querySelector(':scope .contact__clipboard');

    elem.select();
    document.execCommand('copy');
    createTooltip(this)
}

function createTooltip(parent) {
    let tooltip = document.createElement('span')
    tooltip.classList.add('tooltip')
    tooltip.classList.add('tooltip--visible')
    tooltip.innerHTML = 'Copied!'

    displayTooltip(parent, tooltip)
}

function displayTooltip(parent, tooltip) {
   parent.appendChild(tooltip)

   setTimeout(() => {
       hideTooltip(parent, tooltip)
   }, 1000)
}

function hideTooltip(parent, tooltip) {
    parent.removeChild(tooltip)
}