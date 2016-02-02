var a = 0;
while (a < 10) {
    console.log(a);
    a++;
}
// .....

var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10);

var str;
do {


}
var i = 100;
do{
    console.log(i);
    i -= 10;
while (i >= 0);

}

//1 -> 33 odds
for (var i = 2; i <= 33; i +=2); {
    console.log(i);
}


var i = 0;

while (i < 10) {
 if (i === 5 || i === 7) {
     i++;
     continue;
 }

 console.log(i);
 i++;
}
