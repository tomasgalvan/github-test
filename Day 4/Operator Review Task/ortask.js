var number1 = prompt("Enter first number");
var number2 = prompt("Enter second number");

var na1 = parseInt(number1);
var nb2 = parseInt(number2);

if( isNaN(na1) || isNaN(nb2) )
{
	alert("Not a number");
}

else

{

var multiply = (na1 * nb2);
alert ("the multiplication number is " +multiply);
var divide = (na1 / nb2);
alert ("the divided number is " + divide);
}
