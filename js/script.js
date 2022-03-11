let pokemonList = [
  { name: "bobasoar", height: 0.8, type: ["grass", "poison"] },
  { name: "churmender", height: 0.6, type: "fire" },
  { name: "skurtle", height: 0.4, type: ["water", "cool"] },
];

//for loop with arrays and objects
for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + " (height: " + pokemonList[i].height + ") "
  );
}

//conditionals
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 0.5) {
    document.write(pokemonList[i].name + " is a small pokemon ");
  } else if (pokemonList[i].height > 0.5 && pokemonList[i].height < 0.7) {
    document.write(pokemonList[i].name + " is a medium pokemon ");
  } else {
    document.write(pokemonList[i].name + " is a big pokemon ");
  }
}
