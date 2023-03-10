
//  function signin (user, day) {
//     if (day % 2 == 0) {
//         return `Welcome , ${user}! How are you? Today is ${day} , Great day!`
//     }
//     else if (day > 30) {
//         return 'error'
//     }
//     else {
//         return `Welcome , ${user}! How are you? Today is ${day} , simple day!`
//     }
//  }
//  console.log(signin( 'Martin', 36))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1111111                                            // user admin true welcome, 'user'
                                                     // false not correct user
// function  sign (user) {
//     if ( user == 'admin'){
//         return `Welcome, ${user} !`
//     }
//     else  {
//         return 'please, correct username'
//     }
// }  console.log(sign('admin'))



//22222222                                            // today is 'day' of february
                                                      // on february only 28 day, your day is 'day' of another month

// function february (day) {
//     if (day > 28 )  {
//         return `On february only 28 DAY. Your day is ${day} of another month`
//     } else {
//         return `Today is ${day} of February`
//     }
// }  console.log(february( '45'))


///333333333                                            // 'num' is equals of 50
                                                        // 'num' is not correct

// function equals (number) {
//     if ( number == 50) {
//         return `Yeaaah !!!! NUMBER ${number} is equals of 50`
//     } else {
//         return `${number} is not correct`
//     }
// }   console.log(equals( '50'))



///444444444                                               // 'user' 'age' old, welcome
                                                           // 'user' 'age' old, rejected

 // function login (user, age) {
 //    if (age < 18 ) {
 //        return ` Dear ,${user} ! You're under the age of 18. Login is not allowed !!!`
 //    }
 //    else {
 //        return ` ${user} , WELCOME !!!!`
 //     }
 // }  console.log( login('Cucurella', 18))


//////55555555                                                  // 'user' name is too short (min 3)
                                                                // 'user' name is accepted

// function username (user) {
//     if (user.length >= 3) {
//         return `"${user}" names is accepted!`
//     } else {
//         return `"${user}" name is too short . (min 3) `
//     }
//
// }    console.log(username( 'Reece'))



/////66666666                                                 // 'user' name is too long (max 5)
                                                              // 'user' name is accepted

// function username (user) {
//     if (user.length <= 5) {
//         return `"${user}" names is accepted!`
//     } else {
//         return `"${user}" name is too long (max 5) `
//     }
//
// }    console.log(username( 'Messi'))



/////77777777                                                // 'age' must be a number ('20')

//efrg




//////888888                                                               // 'age' must be a string (20)
                                                                           //  'age' must be older then 23
// function handleCheckAge (age) {
//     if (typeof age !== 'string') {
//         return `${age} must be a string`
//     }
//     else if ( age => 23) {
//         return `${age} must be older then 23`
//     }
//     else {
//         return  'WELCOME'
//     }
// }
//
// console.log(handleCheckAge(23))


///////9999999                                               // today is monday/tuesday/wednesday/thursday/friday weekend
                                                              // max days of weeks 7


