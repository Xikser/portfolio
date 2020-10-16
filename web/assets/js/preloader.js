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

const createPercentBar = () => {
    return new Promise((resolve) => {      
        const bar = document.createElement('div')
        const barLoader = document.createElement('div')
        bar.classList.add('preloader--bar')
        barLoader.classList.add('preloader--bar-loader')

        bar.appendChild(barLoader)
        resolve(bar, barLoader)
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

const loadPreloader = (preloader, bar, counter) => {
    const barLoader = bar.children[0]
    loadBar(barLoader)
    loadCounter(preloader, counter)
}

const loadBar = (bar) => {
    setTimeout(() => {
        bar.style.width = '100' + '%'
    }, 0)
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
    }, 19.5);

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
    const bar = await createPercentBar()
    const counter = await createPreloaderCounter()

    container.appendChild(counter)
    container.appendChild(bar)
    preloader.appendChild(container)

    loadPreloader(preloader, bar, counter)

    return preloader;   
}

async function constructPreloader() {
    const preloader = await createPreloader()
    await contructPreloaderContent(preloader)
    await addPreloaderToBody(preloader)

    return preloader
}
