// Geekwise Day 4 Notes
//Tomas Galvan

/* switch -  will evaluate the
condition and then perform a given block
of code based on that value.

break - the loop is immediately terminated and the
program control resumes at the next statement following
the loop.


var condition = "foo";

switch (condition) {
case "foo":
    alert("foo");
    break;
case "bar":
    alert("bar");
    break;
default:
    alert("wasn't foo or bar");
}


//Intrinsic Objects
//String Objects

var strA = "0123456789";
//this code sets strB to "456"
var strB = strA.substring(3,9);
console.log(strB);
var str1 = "airplane";
//this code sets to all caps
var str2 = str1.toUpperCase();
console.log(str2);
//this code gathers length of string
var str3 = str1.length;
console.log(str3);

*/
/*The Date object can be used to represent and
compare dates, as well as get the current system time.


var today = new Date();
var thisYear = today.getFullYear();
console.log(today);
console.log(thisYear);

var nu1 = 15.Max_Value;
console.log(nu1);
*/

function log(str)
    str = str.toUpperCase();
    str = str.trim();
    console.log(str);

    return str;

var a1 = log("      this is a log          ");
var a2 = log("test 1");
var a3 = log("test 2");
var a4 = log("test 3     ");

console.log(a1);
console.log(a2);

//build a funtion that takes the input of the string
// capitalizes the first character
//return that value
