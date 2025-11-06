//1. Print Hello javascript
console.log("Hello Javascript");

// 2.Print age
let age=21;
console.log("My age is" +age);

//3.Concate using + and use template literals
let a="Niharika";
let b="Goswami";
console.log("My complete name is " +a+b);//Concate using +
console.log(`${a}${b}`); //use template literals

//4.declare variable using var let and const and then reclare which one give errroe?

var m=10;
let n=20;
const o=5;

console.log(m,n,o)
m=2;
n=3;
// o=4;
console.log(m,n) // o is const hence doesnt print and give error

//5.Addition of two

let num1=5;
let num2=3;
console.log(num1+num2);

//6.Typeof
console.log(typeof "hello")
console.log(typeof 25)
console.log(typeof true)
console.log(typeof undefined)
console.log( typeof null)

//7.Wap to compare 10==10 and 10===10

console.log(10=="10")
console.log(10==="10")

// 8.program to perform arithematic calculations

let a1=2
let a2=4;
console.log(a1+a2)
console.log(a1-a2)
console.log(a1*a2)
console.log(a1/a2)
console.log(a1%a2)
console.log(a1**a2)

// 9.swap with and without third variable

//with a third variable

let n1=2;
let n2=3;
let temp;
temp=n1;
n1=n2;
n2=temp;
console.log(n1 , n2)

//without third variable
n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log(n1 , n2)

//10.Even Odd

let number=3;
if(number%2==0){
    confirm.log("Even")
}else{
    console.log("odd")
}

// 11. += operator
let number1 = 5;
number1+=4
console.log(number1)

// 12.User Input
let name1 =prompt("enter your name")
console.log(`hello ${name1},welcome`)

//13.Ask user 2 enter num and print sum

let b1=Number(prompt("enter first number"));
let b2=Number(prompt("enter second number"));
console.log(" total is" +b1+b2)

