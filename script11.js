// 27.Check positive negative zero
let num1=2
if (num1>0) {
          console.log("positive")
} else if(num1==0){
   console.log("zero")
} else{
          console.log("negative")
}

//Q28. Grade A B C D Fail
let marks=20;

if (marks>=80) {
    console.log("A Grade")
} else if (marks>=60 && marks<=80){
     console.log("B Grade")
}else if (marks>=40 && marks<=60){
     console.log("C Grade")
}else if (marks>=40 && marks<=30){
     console.log("D Grade")
}else{
    console.log("Fail")
}

//Q29. leap year
let year =2016;
if (year%4===0 && year%100 !=0 || year%400===0) {
    console.log("leap year")
} else {
   console.log("not a leap year") 
}

//Q30 input
let age=20;
if (age<=13) {
    console.log("child")
} else if(age<=19 && age>=13) {
     console.log("teenager")
}else if(age>=20){
     console.log("adult")
}

//Q31 month name based on month number 1-2

let month =7
switch (month) {
    case 1:
        console.log("january")
        break;
        case 2:
        console.log("February")
        break;
        case 3:
        console.log("March")
        break;
        case 4:
        console.log("April")
        break;
        case 5:
        console.log("May")
        break;
        case 6:
        console.log("June")
        break;
        case 7:
        console.log("July")
        break;
        case 8:
        console.log("August")
        break;
        case 9:
        console.log("September")
        break;
        case 10:
        console.log("October")
        break;
        case 11:
        console.log("November")
        break;
        case 12:
        console.log("December")
        break;

    default:
        console.log("invalid")
        break;
}

//Q32   Even off using ternary

let number=3;
console.log(number%2===0 ? "even": "odd")

//Q33.LOwer and Uppercase
let alphabet="b";
if (alphabet<='Z' && alphabet>='A') {
    console.log("Uppercase")
} else if (alphabet<='z' && alphabet>='a'){
     console.log("Lowercase")
}

//Q34. Vowel Or Consonant

let alpha="z";
if ("aeiouAEIOU".includes(alpha)) {
    console.log("Vowel")
} else {
    console.log("Consonant")
}

//Q35.Absolute value

let numm=-12;
console.log(Math.abs(numm))

//Q36. Usernam and password check

let username="niha_rika"
let password="123"
if (username==="niha_rika" && password=="123") {
    console.log("Login successfull")
} else {
    console.log("login failed")
}

//Q37. three sides to form valid traingle

let a1=50
let a2=60
let a3=90
if (a1+a2+a3===180) {
    console.log("Valid triangle")
} else {
    console.log("InValid triangle")
}