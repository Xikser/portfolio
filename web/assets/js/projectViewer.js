const viewerTargets = [
    '.viewer',
    '.viewer__content',
    '.viewer__image-box',
    '.viewer__image-box img',
    '.viewer__title',
    '.viewer__text',
    '.viewer__buttons',
    '.button--viewer',
    '.button--portfolio-info'
]

const portfolioSection = document.querySelector('.portfolio')
const portfolioContentSection = document.querySelector('.portfolio__content');
const viewerButton = document.querySelectorAll('.button--portfolio-info')
let viewerIsActive = false;

for(const button of viewerButton) {
    button.addEventListener('click', getCurrentViewer)
}

function getCurrentViewer() {
    const portfolioBox = this.parentNode.parentNode;
    const portfolioViewer = portfolioBox.querySelector(':scope .viewer')
    const clonePortfolioViewer = portfolioViewer.cloneNode(true)

    displayCurrentViewer(clonePortfolioViewer)
}

function displayCurrentViewer(viewer) {
    const icon = viewer.querySelector(':scope i.fa-times')
    
    viewer.style.display = 'flex'
    viewer.classList.add('viewer--is-active')
    portfolioContentSection.appendChild(viewer);
    viewerIsActive = true;
    
    createBlur();
    preventScroll();
    disableMap(viewer);

    icon.addEventListener('click', () => {
        closeViewer(viewer)
    }) 

    if(viewerIsActive === true) {
        window.addEventListener("click", checkTarget);
        window.addEventListener('keydown', checkKey);
    }
}
    
function createBlur() {
    let blur = document.createElement('div');
    blur.classList.add('blur');
    
    portfolioSection.appendChild(blur)
}

function preventScroll() {
    const body = document.body;
    body.style.overflowY = 'hidden';
}

function closeViewer(viewer) {
    viewer.style.display = 'none'
    viewer.classList.remove('viewer--is-active')
    removeBlur();
    allowScroll();
    activeMap();
    deleteViewerFromSection(viewer)
    
    viewerIsActive = false;

    window.removeEventListener('click', checkTarget)
    window.removeEventListener('keydown', checkKey)
}

function deleteViewerFromSection(viewer) {
    portfolioContentSection.removeChild(viewer);
}

function removeBlur() {
    const blur = document.querySelector('.blur');
    portfolioSection.removeChild(blur)
}

function allowScroll() {
    const body = document.body;
    body.style.overflowY = 'auto';
}


//set site-map status when viewer is active
function disableMap(viewer) {
    if (viewer.style.display === 'flex') {
        siteMap.classList.remove('map--is-active');
    }
}

function activeMap() {
    siteMap.classList.add('map--is-active')
}


//hide viewer on window click
function checkTarget(e) {
    const currentViewer = document.querySelector('.viewer--is-active')
    if(!e.target.matches(viewerTargets)) {
        closeViewer(currentViewer)
        deleteViewerFromSection(currentViewer)
    }
}

//hide viewer on escape click
function checkKey(e) {
    const currentViewer = document.querySelector('.viewer--is-active')
    if (e.key === 'Escape') {
        closeViewer(currentViewer)
        deleteViewerFromSection(currentViewer)
    }
}