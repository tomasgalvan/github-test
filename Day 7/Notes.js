//Day 7 Notes
//Tomas Galvan
//2 /1 /16

var number1 = 0;
var number2 = 0;

function add(a, b) {
  var c = a + b;
  return c;
}

function main() {
  var result = add(number1, number2);
  result = Math.round(result);
  if(result > 0){
    console.log("positive");
  }
  else {
    console.log("negative")
  }
  console.log(result);
}
var cond = "a";

switch(cond) {
  case "a":

      //do something for case a
      console.log("case a");
      break;

    case "b":

      //do something for case b
      console.log("case b");
      break ;

    case "c":

      //do something for case c
      console.log("case c");
      break;



})
main();
