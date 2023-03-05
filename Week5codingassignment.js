class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }
}
class Pokedex {
  constructor() {
    this.pokemonCollection = [];
  }

  addPokemon(pokemon) {
    this.pokemonCollection.push(pokemon);
  }

  removePokemon(pokemon) {
    let index = this.pokemonCollection.indexOf(pokemon);
    if (index > -1) {
      this.pokemonCollection.splice(index, 1);
    }
  }

  displayPokemon() {
    console.log(`The Pokedex has the following Pokemon:`);
    this.pokemonCollection.forEach(pokemon => {
      console.log(`${pokemon.name} (Type: ${pokemon.type}, Level: ${pokemon.level})`);
    });
  }
}
let pokedex = new Pokedex();
function createPokemon() {
  let name = prompt("Enter the Pokemon's name:");
  let type = prompt("Enter the Pokemon's type:");
  let level = prompt("Enter the Pokemon's level:");
  let newPokemon = new Pokemon(name, type, level);
  pokedex.addPokemon(newPokemon);
}
function viewPokedex() {
  pokedex.displayPokemon();
}
function removePokemon() {
  let index = prompt("Enter the index of the Pokemon you would like to remove:");
  let selectedPokemon = pokedex.pokemonCollection[index];
  pokedex.removePokemon(selectedPokemon);
}
let menu = true;

while (menu) {
  let choice = prompt("Select an option:\n1. Create a Pokemon\n2. View the Pokedex\n3. Remove a Pokemon\n4. Exit");
  switch (choice) {
    case "1":
      createPokemon();
      break;
    case "2":
      viewPokedex();
      break;
    case "3":
      removePokemon();
      break;
    case "4":
      menu = false;
      break;
    default:
      console.log("Invalid choice, please try again.");
  }
}
