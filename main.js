// Selects page elements
const button = document.getElementById('getJokes');
// Call function on click
button.addEventListener('click', getJokes);
// fetch() GET request
function getJokes() {
  let endpoint = 'http://api.icndb.com/jokes/random/';
  // sends request
  fetch(endpoint, {
      mode: 'no-cors'
    })
    .then(response => {
      // converts response object to JSON
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => console.log(data))
    .then(data => {

      // Displaying it to the DOM
      const output = ` <h3>Jokes:</h3>
      <ul class="list-group mb-3" id="">
        <li class="list-group-item"><strong>ID:</strong> </li>
        <li class="list-group-item"><strong>Joke:</strong> </li>
      </ul>`;
      document.getElementById('jokes').innerHTML = output;
    })
}
