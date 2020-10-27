var targets = [
    'li',
    'li i',
    'a',
    'button',
    '.viewer i',
    '.contact__box',
    '.contact__box i',
    '.contact__box input',
    '.panel__icon'
];


const hideFollower = (mouseFollower) => {
    mouseFollower.style.opacity = '0';
}

const showFollower = (mouseFollower) => {
    mouseFollower.style.opacity = '.5';
}

const setTarget = (mouseFollower) => {
    mouseFollower.classList.add('mouse-follower--target')
}

const removeTarget = (mouseFollower) => {
    mouseFollower.classList.remove('mouse-follower--target')
}

const mouseFollow = (e) => {
    const mouseFollower = document.querySelector('.mouse-follower')
    
    setTimeout(() => {
        mouseFollower.style.left = e.pageX + 'px';
        mouseFollower.style.top = e.pageY + 'px';
    }, 50)
    
    if (e.target.matches(targets)) {
        setTarget(mouseFollower);
    } else {
        removeTarget(mouseFollower);
    }
    
    if (e.target.matches('.circle')) {
        hideFollower(mouseFollower);
    } else {
        showFollower(mouseFollower);
    }
    
    if (toggleSlider.classList.contains(toggleSliderIsChecked)) {
        hideFollower(mouseFollower);
        removeTarget(mouseFollower)
    }
}

const onOffFollower = () => {
    const deviceWidth = getDeviceWidth();

    if(deviceWidth > 980) {
        window.addEventListener('mousemove', mouseFollow)
    } else {
        window.removeEventListener('mousemove', mouseFollow)
    }
}

onOffFollower();