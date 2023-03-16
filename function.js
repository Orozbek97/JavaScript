
//1                        // строка проверить строку на наличие . и после нее на com или ru
//
// function yoursite (adress) {
//     const checkSiteCom = adress[adress.indexOf('com') - 1]
//     const checkSiteRu = adress[adress.indexOf('ru') - 1]
//     if (adress) {
//         if (adress.includes('com', 'ru')  && (checkSiteCom === '.') || (checkSiteRu === '.') ) {
//             return 'ok'
//         } else {
//             return 'wrong address'
//         }
//     }
// }  console.log(yoursite('test.com'))



//2                           // строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4

// function LengthWord (word) {
// if  (8 < word.length || word.length < 4) {
//     return ' длина неверна'
//  }else if (word.length % 2 !== 0) {
//     return 'слова нечетная'
// } else {
//     return 'ок'
// }
//
// }
//
// console.log (LengthWord('1234567890'))



//3                            // строка поменять букву каждого четного индекса на E можно решить через map


                //empty


//4             // строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале

// function  passwords (password1 , password2) {
//     const pass = ' '
//     if ((password1 !== password2) && password1.startsWith(' ') || password2.startsWith(' ')  )  {
//         return 'errror'
//     }else{
//         return 'ok'
//     }
// }
//
// console.log(passwords('thomas', 'thomas'))


//5               FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.


//
// for (var number = 1; number <= 100; number++) {
//
//     if ( (number%3===0 && number%5 === 0) ) {
//         console.log(number , 'FizzBuzz')
//     }
//     else if (number%5 === 0){
//         console.log( number ,'Buzz') }
//     else if (number%3===0){
//         console.log(number , 'Fizz')
//     }
//     else {
//         console.log(number)
//     }
//
// }

// const arr  =[
//     1, 3, ,4 ,5, 6, 6
// ]
// console.log(arr.filter(el => el % 2 === 0))

// const names = ['misha', 'Ivan', 'Petr', 'Niko', 'VasYA', 'masha', 'AFONYA']
// const namesfilter = (array) => {
//     return array.filter((name) => name.toLowerCase().startsWith('m'))
// }
// console.log(namesfilter(names))

// const num = [2, 3, 4, 5, 6]
//
// const numsFilter = (array) => {
//     return array.map((num) => num %2 ===0 ? 'even' : 'odd')
// }
// console.log(numsFilter(num))

// const num = ['we', 'asd', 2, 3, 4, 'user', 5, 6]
//
// const numsFilter = (array) => {
//     return array.filter(el => typeof el === "number")
//         .map(el => el > 2 && el < 5 ? `${el}`: el)
//         .reduce((acc, el) =>{
//             return  acc + + el
//     },0)
// }
// console.log(numsFilter(num))
