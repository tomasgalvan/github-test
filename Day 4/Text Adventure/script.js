var enter = confirm("You are outside the forest. Press OK to enter.");

if(enter) {
  //go into cabin
  var bowl = prompt("You see three bowls of porridge. Eat bowl 1, 2 or 3?");

bowl = parseInt(bowl);
}
switch(bowl) {
  default:console.log("You starved. THE END!");
  break;

  case 1: console.log("It's too hot! THE END!");
    break;

  case 2: console.log("It's too cold! THE END!");
    break

  case 3: console.log("It's juuuuust righ!");


    var hours = ("the porridge makes you sleepy. Nap for how many hours?");
    var sleep = prompt(hours);
    sleep = parseInt(sleep);
    if(sleep < 2)
    console.log("You wake up just in time, and scamper away");
  console.log("The End");
}


/*
  if(bowl == 1) {
  console.log("It's too hot! THE END");
  }else if (bowl == 2) {
console.log("It's too cold! THE END");
}else{
console.log("It's juuuust right");

var hours = ("the porridge makes you sleepy. Nap for how many hours?");

var sleep = prompt(hours);
sleep = Number(sleep);

if(sleep < 2){
  console.log("You wake up just in time, and scamper away");

} else {
  console.log("You sleep too late, and are eatin by hungry bears");
  }
console.log("The End");


}

}else{
      //didn't say okay
      console.log("that's the worlds shortest fable.");
}
*/
