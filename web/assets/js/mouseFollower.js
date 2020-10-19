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

window.addEventListener('mousemove', mouseFollow)

function mouseFollow(e) {
    const mouseFollower = document.querySelector('.mouse-follower')

    setTimeout(() => {
        mouseFollower.style.left = e.pageX + 'px';
        mouseFollower.style.top = e.pageY + 'px';
    }, 100)

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

function hideFollower(mouseFollower) {
    mouseFollower.style.opacity = '0';
}

function showFollower(mouseFollower) {
    mouseFollower.style.opacity = '.5';
}

function setTarget(mouseFollower) {
    mouseFollower.classList.add('mouse-follower--target')
}

function removeTarget(mouseFollower) {
    mouseFollower.classList.remove('mouse-follower--target')
}