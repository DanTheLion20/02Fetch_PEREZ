//fetch api it returns a promise,
//accessing the movies.json using fetch
/*
fetch("./movies.json").then((response) => {
    console.log(response);
})

//fetching the json file
fetch("./movies.json")
    .then((response) => response.json())
    .then((data) => console.log(data))

//fetching from a text file
fetch("./test.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
*/
//fetching api github

fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => (document.querySelector("h1").textContent = data.login))