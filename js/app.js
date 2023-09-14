let $ = document
let firstContainer = $.querySelector('.question')
let secondContainer = $.querySelector('.success')
let numButton = $.querySelectorAll('.num-button')
let subButton = $.querySelector('.submit')
let spanRate = $.querySelector('.rate-num')
let rateNum = 5

numButton.forEach(btn => {
    btn.addEventListener('click', (event) => {
        numButton.forEach(remove => {
            remove.classList.remove('active')
        })
        event.target.classList.add('active')
        rateNum = +event.target.innerHTML
        console.log(rateNum);
    })
})

subButton.addEventListener('click', () => {
    firstContainer.style.display = 'none'
    secondContainer.style.display = 'block'
    spanRate.innerHTML = `You selected ${rateNum} out of 5`
})