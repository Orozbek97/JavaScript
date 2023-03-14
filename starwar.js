fetch('https://swapi.dev/api/people/7/')
    .then(res => res.json())
    .then((data) => alert(data))