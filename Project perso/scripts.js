let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('.ul li')

let active = 0
let firstPosition = 0
let lastPosition = itens.length -1


nextButton.onclick = () => {
    let itensOld = container.querySelector('.list .item.active')
    itensOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    itens [active].classList.add('active')
}

prevButton.onclick = () => {
    let itensOld = container.querySelector('.list .item.active')
    itensOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    itens [active].classList.add('active')

}

















