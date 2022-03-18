let pokemonList = [
  { name: "bobasoar", height: 0.8, type: ["grass", "poison"] },
  { name: "churmender", height: 0.6, type: "fire" },
  { name: "skurtle", height: 0.4, type: ["water", "cool"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " " + pokemonList[i].height + "<br>");
}

//for loop with arrays and objects
for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "<br>"
  );
}

//function has been declared
function printArrayDetails() {
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 0.5) {
      document.write(pokemonList[i].name + " is a small pokemon ");
    } else if (pokemonList[i].height > 0.5 && pokemonList[i].height < 0.7) {
      document.write(pokemonList[i].name + " is a medium pokemon ");
    } else {
      document.write(pokemonList[i].name + " is a big pokemon ");
    }
  }
}
printArrayDetails();

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 0.5) {
    document.write(pokemonList[i].name + " is a small pokemon ");
  } else if (pokemonList[i].height > 0.5 && pokemonList[i].height < 0.7) {
    document.write(pokemonList[i].name + " is a medium pokemon ");
  } else {
    document.write(pokemonList[i].name + " is a big pokemon ");
  }
}
// funtion declaration
function greetingMessage(firstName, lastName) {
  console.log("Hello, My Name is" + " " + firstName + " " + lastName);
  document.write("Hello, My name is" + " " + firstName + " " + lastName);
}
//arguments
greetingMessage("Brad", "Pitt");
greetingMessage("michael", "chen");

function Sum(val1, val2) {
  return val1 + val2;
}
let result = Sum(2332, 1432);
document.write(result);

function print() {
  document.write("bobby");
}
print();

// function to a variable, then use that variable as a function: function expression
let add = function sum(val1, val2) {
  return val1 + val2;
};

let result1 = add(100, 200); //returns 300
console.log(result1);

let result2 = sum(100, 200); // not valid
