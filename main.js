let slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
    slide.addEventListener('click', ()=> {
        clearActive()
        slide.classList.add('active')
    })
})

function clearActive() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}