// Create a function called dinosaur that has a signature dinosaur(type, era, food)
//should return an array containg the type, era, and eating habits(carnivore or herbivore) passed into the function
var dinoArray = [];

function dinosaur(type, era, food){
  return [type, era, food];
}

//Create a second function that contains a for loop.
function runApp(){
  var number = prompt("how many dinoaurs? up to 3 please");
  for(var i = 0; i < number; i++)
      var type = prompt("What type of dinosaur?");
      var era = prompt("What era is the dinosaur from");
      var food = prompt("What is the dinosaur's dietary restriction? (Omnivore, Carnivore, Herbivore)");

  var dino = dinosaur(type, era, food);
  dinoArray.push(dino);

//print dino user data to console
for(var i = 0; i < number; i++){
  var output = "";
  var dino = dinoArray[i];
  output += "Dino #" + (i+1);
  output += dino[0] + " ";
  output += dino[1] + " ";
  output += dino[2] + " ";
  console.log(output);
}
}

runApp();
dinosaur();
