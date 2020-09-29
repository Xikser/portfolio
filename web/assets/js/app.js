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