const panelOverlap = document.querySelector('.overlap');
const panel = document.querySelector('.panel');
const activeClass = 'panel--is-active';

panelOverlap.addEventListener('click', showPanel);

function showPanel() {
    const panelCogIcon = panelOverlap.querySelector('.panel__icon.fas.fa-cog');
    const panelTimesIcon = panelOverlap.querySelector('.panel__icon.fas.fa-times');

    panelOverlap.classList.add(activeClass)
    panel.classList.add(activeClass)
    changePanelIcon(panelCogIcon, panelTimesIcon);
}

function changePanelIcon(cog, times) {
    const cogProperty = cog.style.getPropertyValue('display')
    const timesProperty = times.style.getPropertyValue('display')

    if(cogProperty === 'block' && timesProperty === 'none') {
        cog.style.setProperty('display', 'none')
        times.style.setProperty('display', 'block')
    } else {
        hidePanel();
        cog.style.setProperty('display', 'block')
        times.style.setProperty('display', 'none')
    }
}

function hidePanel() {
    panelOverlap.classList.remove(activeClass)
    panel.classList.remove(activeClass)
}


//create curtain


document.querySelectorAll('.circle').forEach(e => e.addEventListener('click', createCurtain))

function createCurtain() {
    const body = document.body;
    const curtain = document.createElement('div');
    curtain.classList.add('curtain')
    
    activeCurtain(body, curtain)
    getColor(this);
}

function activeCurtain(body, curtain) {
    body.appendChild(curtain)

    setTimeout(() => {
        curtain.classList.add('curtain--active')
    }, 500)

    setTimeout(() => {
        curtain.classList.remove('curtain--active')
    }, 2000)
}


//change color


const redColor = 'rgb(255, 7, 58)';
const cyanColor = 'rgb(0, 255, 255)';
const yellowColor = 'rgb(207, 255, 4)';
const greenColor = 'rgb(78, 253, 84)';
const purpleColor = 'rgb(188, 19, 254)'
const pinkColor = 'rgb(254, 1, 154)'
const orangeColor = 'rgb(253, 95, 0)';
const blueColor = 'rgb(53, 0, 255)';

const whiteColor = 'rgb(255, 255, 255)'
const blackColor = 'rgb(0, 0, 0)'

function getColor(circle) {
    var getElementStyleProperty = getComputedStyle(circle);
    const styleProperty = getElementStyleProperty.backgroundColor;

    setTimeout(() => {
        changeColor(styleProperty)
    }, 1500)
}

function changeColor(color) {
    const cssVar = '--accent-color';
    const buttonColorVar = '--button-font-color';

    switch(true) {
        case color === redColor:
            document.documentElement.style.setProperty(cssVar, redColor)
            changeButtonColor(buttonColorVar, whiteColor)
            break;
            
        case color === cyanColor:
            document.documentElement.style.setProperty(cssVar, cyanColor)
            changeButtonColor(buttonColorVar, blackColor)
            break;

        case color === yellowColor:
            document.documentElement.style.setProperty(cssVar, yellowColor)
            changeButtonColor(buttonColorVar, blackColor)
            break;

        case color === greenColor:
            document.documentElement.style.setProperty(cssVar, greenColor)
            changeButtonColor(buttonColorVar, blackColor)
            break;

        case color === purpleColor:
            document.documentElement.style.setProperty(cssVar, purpleColor)
            changeButtonColor(buttonColorVar, whiteColor)
            break;

        case color === pinkColor:
            document.documentElement.style.setProperty(cssVar, pinkColor)
            changeButtonColor(buttonColorVar, whiteColor)
            break;

        case color === orangeColor:
            document.documentElement.style.setProperty(cssVar, orangeColor)
            changeButtonColor(buttonColorVar, blackColor)
            break;

        case color === blueColor:
            document.documentElement.style.setProperty(cssVar, blueColor)
            changeButtonColor(buttonColorVar, whiteColor)
            break;

        default: 
            document.documentElement.style.setProperty(cssVar, pinkColor)
            changeButtonColor(buttonColorVar, whiteColor)
    }
}

function changeButtonColor(cssVariable, color) {
    const pageButton = document.querySelectorAll('.button')

    for(let i = 0; i < pageButton.length; i++) {
        const button = pageButton[i];

        button.style.setProperty(cssVariable, color)
    }
}



const resetColorButton = document.querySelector('.button--reset-color');

resetColorButton.addEventListener('click', () => {
    const body = document.body;
    const curtain = document.createElement('div');
    curtain.classList.add('curtain')

    activeCurtain(body, curtain)
    
    setTimeout(() => {
        resetColor();
    }, 1500) 
});

function resetColor() {
    document.documentElement.style.setProperty('--accent-color', pinkColor)
    changeButtonColor('--button-font-color', whiteColor)
}