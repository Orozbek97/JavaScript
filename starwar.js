// ///Luke SkyWalker
// id = 1
// fetch(`https://swapi.dev/api/people/${id}/`)
//     .then(res => res.json())
//     .then((data) => alert(`
//     Name :          "${data.name}"
//     Birthday:       "${data.birth_year} "
//     Vehicle :       "${data.vehicles[0]}"
//     Starships:      "${data.starships[0]}"`))

// //Luke Vehicle
// fetch ( 'https://swapi.dev/api/vehicles/14')
//     .then(res => res.json())
//     .then((data) => alert(`
//     Vehicle name :   "${data.name}"
//     Model :             "${data.model}"`))
//
// //Luke StarShip
// fetch ( 'https://swapi.dev/api/starships/12/')
//     .then(res => res.json())
//     .then((data) => alert(`
//     StarShip name :  "${data.name}"
//     Model :              "${data.model}"`))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///C-3PO
// id = 2
// fetch(`https://swapi.dev/api/people/${id}/`)
//     .then(res => res.json())
//     .then((data) => alert(`
//     Name :          "${data.name}"
//     Birthday:       "${data.birth_year} "
//     Vehicle :       "${data.vehicles[0]}"
//     Starships:      "${data.starships[0]}"`))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ///R2-D2
// id = 3
// fetch(`https://swapi.dev/api/people/${id}/`)
//     .then(res => res.json())
//     .then((data) => alert(`
//     Name :          "${data.name}"
//     Birthday:       "${data.birth_year} "
//     Vehicle :       "${data.vehicles[0]}"
//     Starships:      "${data.starships[0]}"`))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ///Darth Vader
// id = 4
// fetch(`https://swapi.dev/api/people/${id}/`)
//     .then(res => res.json())
//     .then((data) => alert(`
//     Name :          "${data.name}"
//     Birthday:       "${data.birth_year} "
//     Vehicle :       "${data.vehicles[0]}"
//     Starships:      "${data.starships[0]}"`))
//
//
// //Darth Vader StarShip
// fetch ( 'https://swapi.dev/api/starships/13/')
//     .then(res => res.json())
//     .then((data) => alert(`
//     StarShip name :  "${data.name}"
//     Model :              "${data.model}"`))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ///Leia Organa
// id = 5
// fetch(`https://swapi.dev/api/people/${id}/`)
//     .then(res => res.json())
//     .then((data) => alert(`
//     Name :          "${data.name}"
//     Birthday:       "${data.birth_year} "
//     Vehicle :       "${data.vehicles[0]}"
//     Starships:      "${data.starships[0]}"`))
//
// //Leia Organa Vehicle
// fetch ( 'https://swapi.dev/api/vehicles/30')
//     .then(res => res.json())
//     .then((data) => alert(`
//     Vehicle name :   "${data.name}"
//     Model :             "${data.model}"`))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///Owen Lars
// id = 6
// fetch(`https://swapi.dev/api/people/${id}/`)
//     .then(res => res.json())
//     .then((data) => alert(`
//     Name :          "${data.name}"
//     Birthday:       "${data.birth_year} "
//     Vehicle :       "${data.vehicles[0]}"
//     Starships:      "${data.starships[0]}"`))



///////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function res (id) {
//     const res = await fetch(`http://swapi.dev/api/people/${id}`)
//     const result = await res.json()
//     alert(`Name: ${result.name},\nBirthday: ${result.birth_year}`)
//     const  vehicles = result.vehicles.map(async (veh)=>{
//         const vehName = await fetch(veh)
//         const nameCar = await vehName.json()
//         console.log(nameCar)
//         // console.log(veh, 'veh')
//         // console.log(result.vehicles[0], 'vehicles')
//     })
// } res (1)
