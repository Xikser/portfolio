window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', scrollTop)

    constructPreloader()
        .then(() => {
            const TIME = 2500   

            setTimeout(() => {
                window.removeEventListener('scroll', scrollTop)
            }, TIME)
        })
})

const createPreloader = () => {
    return new Promise((resolve) => {
        const preloader = document.createElement('div')
        preloader.classList.add('preloader')

        resolve(preloader);
    })
}

const createPreloaderContainer = () => {
    return new Promise((resolve) => {
        const container = document.createElement('div')
        container.classList.add('preloader--container')
    
        resolve(container)
    })
}

const createPreloaderCounter = () => {
    return new Promise((resolve) => {
        const counter = document.createElement('div')
        const counterSpan = document.createElement('span')
        counter.classList.add('preloader--counter')
        counter.appendChild(counterSpan)

        resolve(counter)
    })
}

const addPreloaderToBody = (preloader) => {
    return new Promise((resolve) => {
        body.appendChild(preloader)

        resolve(body)
    }).catch(error => {
        console.log(error)
    })
}

const loadPreloader = (preloader, counter) => {
    loadCounter(preloader, counter)
}

const loadCounter = (preloader, counterParent) => {
    const span = counterParent.children[0]
    var c = 0
    
    const counter = setInterval(() => {
        c = c +1
        span.innerHTML = c + '%'

        if(c == 100) {
            clearInterval(counter)
            hidePreloader(preloader)
        }
    }, 20);

}

const hidePreloader = (preloader) => {
    setTimeout(() => {
        preloader.style.opacity = '0'
    }, 500);

    setTimeout(() => {
        body.removeChild(preloader)
    }, 2200);
}

async function contructPreloaderContent(preloader) {
    const container = await createPreloaderContainer()
    const counter = await createPreloaderCounter()

    container.appendChild(counter)
    preloader.appendChild(container)

    loadPreloader(preloader, counter)

    return preloader;   
}

async function constructPreloader() {
    const preloader = await createPreloader()
    await contructPreloaderContent(preloader)
    await addPreloaderToBody(preloader)

    return preloader
}
