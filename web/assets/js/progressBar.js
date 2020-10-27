const bar = document.querySelectorAll('.bar');
const boxArray = document.querySelectorAll('.skills__box');

//desktop height
const activateDesktopHeight = 1040;
const disableDesktopHeight = 1970;

//mobile height
const activateMobileHeight = 650;
const disableMobileHeight = 1330;

window.addEventListener('scroll', loadContent);

function loadContent() {
    const windowHeight = this.pageYOffset;

    for(const box of boxArray) {    
        const levelSpan = box.children[1];
        const hoverBar = box.children[2].children[0];

        const deviceWidth = getDeviceWidth()
        const deviceHeight = getDeviceHeight()

        //desktop and mobile vertical view
        if(deviceHeight > 736 && deviceWidth > 980 || deviceHeight <= 980 && deviceWidth < 480) {
            if(windowHeight >= activateDesktopHeight && windowHeight < disableDesktopHeight) {
                getLevel(box, levelSpan, hoverBar);
            } else if(windowHeight < activateDesktopHeight || windowHeight > disableDesktopHeight) {
                unloadContent(levelSpan, hoverBar);
            }
        } 
        
        //mobile horizontal view
        else if(deviceHeight < 480 && deviceWidth <= 736) {
            if(windowHeight >= activateMobileHeight && windowHeight < disableMobileHeight) {
                getLevel(box, levelSpan, hoverBar);
            } else if(windowHeight < activateMobileHeight || windowHeight > disableMobileHeight) {
                unloadContent(levelSpan, hoverBar);
            }
        }   
    }
}

function getLevel(box, levelSpan, hoverBar) {
    const level = box.children[1].getAttribute('level');
    loadSpan(level, levelSpan);
    loadHoverBar(level, hoverBar)
}

function loadHoverBar(level, bar) {
    bar.style.width = level + '%';
}

function loadSpan(level, span) {
    const basic = 'Basic';
    const intermediate = 'Intermediate';
    const proficient = 'Proficient';
    
    switch(true) {
        case level <= 20:  
            span.innerHTML = basic;
            var spanWidth = span.offsetWidth;
            span.style.left = 'calc(' + level + '%' + ' - ' + spanWidth + 'px' + ')';

            break; 
            
        case level > 20 && level <= 75:
            span.innerHTML = intermediate     
            var spanWidth = span.offsetWidth;
            span.style.left = 'calc(' + level + '%' + ' - ' + spanWidth + 'px' + ')';

            break;

        case level > 75 && level <= 100:
            span.innerHTML = proficient;
            var spanWidth = span.offsetWidth;
            span.style.left = 'calc(' + level + '%' + ' - ' + spanWidth + 'px' + ')';

            break;
            
        default:
            span.innerHTML = ' ';
            span.style.left = 0 + '%';
    }
}



function unloadContent(levelSpan, hoverBar) {
    unloadSpan(levelSpan);
    unloadHoverBar(hoverBar);
}

function unloadSpan(span) {
    span.style.left = 0 + '%';

    setTimeout(() => {
        if (span.style.left === 0 + '%') {
            span.innerHTML = ' ';
        }
    }, 1100)
}

function unloadHoverBar(bar) {
    bar.style.width = 1 + '%';
}