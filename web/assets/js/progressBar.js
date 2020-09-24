//console.log(window.pageYOffset)
const bar = document.querySelectorAll('.bar');
const boxArray = document.querySelectorAll('.skills__box');
const activateHeight = 1040;
const disableHeight = 1970;

window.addEventListener('scroll', loadContent);

function loadContent() {
    var windowHeight = this.pageYOffset;

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
    var level = box.children[1].getAttribute('level');
    loadSpan(level, levelSpan);
    loadHoverBar(level, hoverBar)
}

function loadHoverBar(level, bar) {
    bar.style.width = level + '%';
}

function loadSpan(level, span) {
    const beginner = 'Beginner';
    const experienced = 'Experienced';
    const advanced = 'Advanced';
    const master = 'Master';
    
    switch(true) {
        case level <= 10:  
            span.innerHTML = beginner;
            var spanWidth = span.offsetWidth;
            span.style.left = 'calc(' + level + '%' + ' - ' + spanWidth + 'px' + ')';

            break; 
            
        case level > 10 && level <= 50:
            span.innerHTML = experienced     
            var spanWidth = span.offsetWidth;
            span.style.left = 'calc(' + level + '%' + ' - ' + spanWidth + 'px' + ')';

            break;

        case level > 50 && level <= 90:
            span.innerHTML = advanced;
            var spanWidth = span.offsetWidth;
            span.style.left = 'calc(' + level + '%' + ' - ' + spanWidth + 'px' + ')';

            break;

        case level > 90 && level <= 100:
            span.innerHTML = master;
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