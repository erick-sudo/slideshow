
let index = 1;



function switchIndex(button) {
    currIndex = index
    if(button > 0) {
        index = (index + 1) % 3
    } else {
        index = (index - 1)
        if (index < 0) {
            index = 2
        }
    }
    return currIndex
}

setInterval(() => {
    switchDiv(index, switchIndex(1))
}, 5000)

function switchDiv(index, prevIndex) {
    const slides = Array.from(document.querySelectorAll('.slides'))
    const dots = Array.from(document.querySelectorAll('.dot'))

    slides[prevIndex].style.display = 'block'
    slides[prevIndex].classList.add('animate-slide-in')
    // setTimeout(() => {
    //     slides[index].classList.add('animate-slide-in')
    // }, 1000)

    // slides.forEach((slide, idx) => {
    //     if(idx !== index) {
    //            slides[index].style.display = 'none'
    //         slide.classList.remove('animate-slide-in', '')
    //         slide.style.display ='none'
    //         dots[idx].style.backgroundColor = 'rgba(46, 28, 21, .5)'
    //     }
    // })
}

switchDiv(index, 0)

// 0 -> 1
// 1 -> 2
// 2 -> 3
// 3 -> 0
// flex-grow: 2;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
