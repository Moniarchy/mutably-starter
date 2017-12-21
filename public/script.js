console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //selects the buttons to toggle the fetch get and post requests, respectively
  const getAllPokemonButton = document.querySelectorAll('.get-pokemon-button')[0]
  const addAPokemonButton = document.querySelectorAll('.add-pokemon-button')[0]
  const displaySection = document.querySelectorAll('.list')[0]
  const addPokemonForm = document.querySelectorAll('.add-pokemon')[0]
  const form = new FormData(addPokemonForm);
  const submitInput = addPokemonForm.children[4]
  const nameInputText = addPokemonForm.children[0].value
  const pokedexInputText = addPokemonForm.children[1].value
  const evolutionInputText = addPokemonForm.children[2].value
  const imageInputText = addPokemonForm.children[3].value

  //options for the fetch to take
  const postOptions = {
    method: 'POST',
    body: JSON.stringify({nameInputText, pokedexInputText, evolutionInputText, imageInputText})
    //TODO: decide if I want other options here
  }

  //options for the fetch to take
  const getOptions = {
    method: 'GET'
    //TODO: decide if I want other options here
  }

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

  //this button triggers a fetch that makes a post request to create a new pokemon
  submitInput.addEventListener('click', function() {

    console.log('name', nameInputText)
    console.log(form)
    fetch("https://mutably.herokuapp.com/pokemon", postOptions)
    .then(function(data) {
      console.log(imageInputText)
      console.log(nameInputText)
      console.log(pokedexInputText)
      console.log(evolutionInputText)
      event.preventDefault()
    })
    //grab the value of the other inputs
    //pass them as data to a fetch
    //hide the form and show the new pokemon
  })

  //this button shows the form that will make a post request
  addAPokemonButton.addEventListener('click', function() {
    displaySection.style.display = 'none'
    addPokemonForm.style.display = 'block'
  })

  //this button triggers a fetch that makes a get request
  getAllPokemonButton.addEventListener('click', function() {
    addPokemonForm.style.display = 'none'
    displaySection.style.display = 'block'
    fetch("https://mutably.herokuapp.com/pokemon", getOptions)
    //TODO: check to make sure the response is ok and if not, throw error
    .then(function(data) {
      console.log(data)
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
