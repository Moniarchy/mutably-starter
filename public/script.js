console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //selects the buttons to toggle the fetch get and post requests, respectively
  const getAllPokemonButton = document.querySelectorAll('.get-pokemon-button')[0]
  const addAPokemonButton = document.querySelectorAll('.add-pokemon-button')[0]
  const displaySection = document.querySelectorAll('.list')[0]

  //This gets used inside the fetch below that makes a get request
  const showPokemon = function(data) {

    data.pokemon.forEach(function(pokemon) {
      const pokemonName = document.createElement('li')
      const pokemonPokedexNumber = document.createElement('li')
      const pokemonImage = document.createElement('img')

      pokemonName.innerText = pokemon.name
      pokemonPokedexNumber.innerText = pokemon.pokedex
      pokemonImage.src = pokemon.image
      displaySection.appendChild(pokemonName)
      displaySection.appendChild(pokemonPokedexNumber)
      displaySection.appendChild(pokemonImage)
    })
  }
  //a form that is displayed and hidden depending on which request has been toggled
  const addPokemonForm = document.querySelectorAll('.add-pokemon')[0]

  //options for the fetch to take
  const initObject = {
    method: 'GET'
    // headers:
    // mode:
    // credentials:
    // redirect?
    // referrer:
  }

  //this button triggers a fetch that makes a post request
  addAPokemonButton.addEventListener('click', function() {
    //hide the list of pokemon
    displaySection.style.display = 'none'
    addPokemonForm.style.display = 'block'
  })

  //this button triggers a fetch that makes a get request
  getAllPokemonButton.addEventListener('click', function() {
    addPokemonForm.style.display = 'none'
    displaySection.style.display = 'block'
    fetch("https://mutably.herokuapp.com/pokemon", initObject)
    // .then(function(data) {
    //   if (!data.ok) {
    //     throw data.statusText
    //   }
    // })
    .then(function(data) {
      return data.json()
    })
    .then(function(pokemonObjects) {
      showPokemon(pokemonObjects)
    })
    .catch(function(error) {
      console.log(error)
    })
  })
});
