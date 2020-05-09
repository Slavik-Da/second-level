const API_URL = 'https://api.github.com/repos/sahanr/street-fighter/contents/fighters.json';
fetch(API_URL);
console.log(responsePromise);
responsePromise.then(response => { console.log(response) });