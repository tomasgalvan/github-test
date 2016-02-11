
function num2arr(na1,nb2){
  var add = (na1 + nb2);
  alert ("the addition number is " +add);
  var multiply = (na1 * nb2);
  alert ("the multiply number is " + multiply);
var outPutArray = [na1 + nb2, na1 * nb2];
return outPutArray;
}



/*Create a function with the signature numCompare(num1,num2) that takes two number arguments.
If the first number is larger, return the string "larger".
If the numbers are equal, return the string "equal". If the first number is smaller, return the string "smaller".
Example Input: 2, 5
Example Output: "smaller"*/

function numCompare(num1, num2){
  if(num1 == num2) {
  return "equal"
}
  else if(num1 > num2){
  return "Larger"}
  else if(num1 < num2){
    return "Smaller"
  }

}


/*Create a loop that prints out the numbers 1 – 100.
If a number is divisible by 3, print "Fizz" instead of the number.
If a number is divisible by 5, print "Buzz" instead of the number.
If a number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
Example output for first few numbers: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz ….
*/
//for(i = 0; i <  i++) {
  //  text += "The number is " + i + "<br>";


/*
Create a function that takes a single character as an input and returns true if
the character is capitalized and false if the character is lowercase.
Example input 1: "A" Example output 1: true
Example input 2: "b" Example output 2: false*/
function characterCase(s){
if(s == s.toUpperCase()){
  return true;
}else{
  return false;}
}

/*Create a function that takes a string as an input and returns an array of the characters in the string.
Example input: "corey"
Example output: ["c", "o", "r", "e", "y"]*/
" ".split('')
