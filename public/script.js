console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //selects the buttons to toggle the fetch get and post requests, respectively
  const getAllPokemonButton = document.querySelectorAll('.get-pokemon-button')[0]
  const addAPokemonButton = document.querySelectorAll('.add-pokemon-button')[0]

  //This gets used inside the fetch below that makes a get request
  const showPokemon = function(data) {
    const displaySection = document.querySelectorAll('.list')[0]

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
    //show the form
    console.log('bye')
  })

  //this button triggers a fetch that makes a get request
  getAllPokemonButton.addEventListener('click', function() {
    //hide the eventual form
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
