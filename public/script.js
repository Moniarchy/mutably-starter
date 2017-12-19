console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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

  const initObject = {
    method: 'GET'
    // headers:
    // mode:
    // credentials:
    // redirect?
    // referrer:
  }

  fetch("https://mutably.herokuapp.com/pokemon", initObject)
  .then(function(data) {
    return data.json()
  })
  .then(function(pokemonObjects) {
    showPokemon(pokemonObjects)
  })
  .catch(function(error) {
    console.log(error)
  })
});
