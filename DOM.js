
const buttonPlus = document.querySelector('.plusButton')
const buttonMinus = document.querySelector('.minusButton')
const buttonMulti = document.querySelector('.mulButton')
const buttonDel = document.querySelector('.delButton')
const result = document.querySelector('.result')


let num = 0;
result.innerText = num

buttonPlus.addEventListener('click', () => {
    if (num < 15){
        num += 1
        result.innerText = num
        buttonMinus.disabled = false
    } else {
        buttonPlus.disabled = true
    }
})

buttonMinus.addEventListener('click', () => {
    if (num > 0 ){
        num -= 1
        result.innerText = num
        buttonPlus.disabled = false
    } else {
        buttonMinus.disabled = true
    }
})



buttonMulti.addEventListener('click', () => {
    if (num < 100){
        num *=2
        result.innerText = num
        buttonDel.disabled = false
    } else {
        buttonMulti.disabled = true
    }
})

buttonDel.addEventListener('click', () => {
    if (num >= 1){
        num /=2
        result.innerText = num
        buttonMulti.disabled = false
    } else {
        buttonDel.disabled = true
    }
})

