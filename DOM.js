
const buttonPlus = document.querySelector('.plusButton')
const buttonMinus = document.querySelector('.minusButton')
const buttonMulti = document.querySelector('.mulButton')
const buttonDiv = document.querySelector('.divButton')
const result = document.querySelector('.result')
const buttonNum = document.querySelectorAll('[data-number]')
const buttonEqual = document.querySelector('.button-equal')
const buttonDel = document.querySelector('.button-delete')
const buttonClear = document.querySelector('.btn-f')
const buttonPercent = document.querySelector('.perButton')

let num = '0';
result.innerText = num

buttonDel.addEventListener('click', () => {
    if (num !== '0') {
        if (num.length > 1){
            num = num.slice(0 , -1)
            result.innerText = num
        } else {
            num = '0'
            result.innerText = num
            buttonPlus.disabled = false
            buttonMinus.disabled = false
        }
    }
})

buttonClear.addEventListener('click', () => {
        num = '0';
        result.innerText = num;
})

 buttonNum.forEach( button =>  {
    button.addEventListener('click', () => {
        if (num === '0') {
            result.innerText = button.innerText
        } else {
            result.innerText = result.innerText + button.innerText
        }
        num = result.innerText
    })
})


    buttonEqual.addEventListener('click', () =>{
        if (result.innerText.includes('+')){
            let a = Number(result.innerText.slice(0 , result.innerText.indexOf('+')))
            let b = Number(result.innerText.slice(result.innerText.indexOf('+') +1, result.innerText.length))
            result.innerText = a + b
        } else if (result.innerText.includes('-')) {
            let a = Number(result.innerText.slice(0 , result.innerText.indexOf('-')));
            let b = Number(result.innerText.slice(result.innerText.indexOf('-') +1, result.innerText.length));
            result.innerText = a - b;
        }
        else if   (result.innerText.includes('*')){
            let a = Number(result.innerText.slice(0 , result.innerText.indexOf('*')));
            let b = Number(result.innerText.slice(result.innerText.indexOf('*') +1 , result.innerText.length));
            result.innerText = a * b;
        }
        else if (result.innerText.includes('÷')) {
            let a = Number(result.innerText.slice(0, result.innerText.indexOf('÷')));
            let b = Number(result.innerText.slice(result.innerText.indexOf('÷') +1 , result.innerText.length));
            result.innerText = a / b;
        }
        else if (result.innerText.includes('%')) {
                let a = Number(result.innerText.slice(0 , result.innerText.indexOf('%')))
                let b = Number(result.innerText.slice(result.innerText.indexOf('%') +1 , result.innerText.length))
                result.innerText = a * b / 100
        }
    })

buttonPlus.addEventListener('click', () => {
      if (result.innerText.includes('+')){
          let a = Number(result.innerText.slice(0 , result.innerText.indexOf('+')))
          let b = Number(result.innerText.slice(result.innerText.indexOf('+') +1, result.innerText.length))
          result.innerText = a + b
      } else {
          result.innerText = result.innerText + buttonPlus.innerText
      }
})

buttonMinus.addEventListener('click', () => {
    if (result.innerText.includes('-')){
        let a = Number(result.innerText.slice(0 , result.innerText.indexOf('-')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('-') +1, result.innerText.length))
        result.innerText = a - b
    } else {
        result.innerText = result.innerText + buttonMinus.innerText
    }
})

buttonMulti.addEventListener('click', () => {
    if (result.innerText.includes('*')){
        let a = Number(result.innerText.slice(0 , result.innerText.indexOf('*')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('*') +1 , result.innerText.length))
        result.innerText = a *  b
    } else {
        result.innerText = result.innerText + buttonMulti.innerText
    }
})
//
buttonDiv.addEventListener('click', () => {
    if (result.innerText.includes('÷')){
        let a = Number(result.innerText.slice(0 , result.innerText.indexOf('÷')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('÷') +1 , result.innerText.length))
        result.innerText = a / b
    } else {
        result.innerText = result.innerText + buttonDiv.innerText
    }
})

buttonPercent.addEventListener('click', () => {
    result.innerText + buttonPercent.innerText
})


