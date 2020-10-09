//console.log(window.pageYOffset)
const bar = document.querySelectorAll('.bar');
const boxArray = document.querySelectorAll('.skills__box');
const activateHeight = 1040;
const disableHeight = 1970;

window.addEventListener('scroll', loadContent);

function loadContent() {
    const windowHeight = this.pageYOffset;

    for(const box of boxArray) {    
        const levelSpan = box.children[1];
        const hoverBar = box.children[2].children[0];
        
        if(windowHeight >= activateHeight && windowHeight < disableHeight) {
            getLevel(box, levelSpan, hoverBar);
        } else if(windowHeight < activateHeight || windowHeight > disableHeight){
            unloadContent(levelSpan, hoverBar);
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