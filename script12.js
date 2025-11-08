//   Q38. print 1-10
let num=10
for (let i = 0; i <=10; i++) {
    console.log(i)
    
}

//  Q39. Multiplication of 7
let number=7;
for (let i = 0; i <=10; i++) {
    console.log(i*number)
    
}

//Q40. even num 1-50 using while

let i=1;
while (i<=50) {
    if(i%2===0)
        console.log(i)
    i++
}

//Q41.Reverse a string
let str="hello";
let rev="";
for (let i =str.length-1 ; i >=0; i--) {
    rev=rev+str[i]
}
console.log("reversed" ,rev)

//Q42. Count vowels in a givel string

let str1="niharika"
let Count=0

for(let ch of str1){
if ("aeiouAeiuo".includes(ch)) 
    Count++
}
console.log("vowel count",Count)
