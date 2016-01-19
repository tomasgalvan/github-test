//Tomas Galvan
//"use script"

var a = 12;
var b = 3;

var c = a % 3;
var d = a/b;

console.log(c);
console.log(d);

var count = 0;
count = count + 1; //count is 1
count += 3; //count is 3
count ++; //count is 3
console.log(count);

var count2 = 5;
count2 = count2 - 1; //count is 4
count2 -=1; //count is 3
count2 --; //count is 2
console.log(count2);

var count3 = 23
count3 /=5; //count3 = count3 / 5
count3 *=6; //count3 = count3 *6
console.log(count3);

var count4 = 10;
var count5 = count4 ++; //post increment 
console.log(count4); //11
console.log(count5); //10
count5 = ++ count4; //pre-increment
console.log(count4);//12
console.log(count5);//12

//comparison operator
console.log(count4 != count5);

var num =15;
console.log ( (num >= 10) || (num <=12) );

//parseInt

// control flow
//simple if statement

if (true) {
	console.log("yup");
}
