const portfolioSection = document.querySelector('.portfolio')
const viewerButton = document.querySelectorAll('.button--portfolio-info')

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
    const sectionContent = document.querySelector('.portfolio__content');
    
    viewer.style.display = 'flex'
    sectionContent.appendChild(viewer)
    
    createBlur();
    preventScroll();
    createCloseIcon(viewer);
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

function createCloseIcon(viewer) {
    let closeIcon = document.createElement('i')
    closeIcon.classList.add('fas')
    closeIcon.classList.add('fa-times')
    
    viewer.appendChild(closeIcon)
    closeIcon.addEventListener('click', closeViewer)
}

function closeViewer() {
    this.parentNode.style.display = 'none'
    removeBlur();
    unlockScroll();
}

function removeBlur() {
    const blur = document.querySelector('.blur');
    portfolioSection.removeChild(blur)
}

function unlockScroll() {
    const body = document.body;
    body.style.overflowY = 'auto';
}