window.addEventListener('mousemove', mouseFollow)

function mouseFollow(e) {
    const mouseFollower = document.querySelector('.mouse-follower')

    setTimeout(() => {
        mouseFollower.style.left = e.pageX + 'px';
        mouseFollower.style.top = e.pageY + 'px';
    }, 100)

    if (e.target.matches('li, li i, a, button, .viewer i, .contact__box, .contact__box i, .contact__box input, .panel__icon')) {
        setTarget(mouseFollower);
    } else {
        removeTarget(mouseFollower);
    }
}

function setTarget(mouseFollower) {
    mouseFollower.classList.add('mouse-follower--target')
}

function removeTarget(mouseFollower) {
    mouseFollower.classList.remove('mouse-follower--target')
}