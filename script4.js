console.log("i am tutorial on loops")

let a=1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
for (let i = 0; i < 100; i++) {
    console.log(a+i);
   
}
let obj={
    name :"niharika",
    role:"programmer",
    company :"RX Ai"
}
for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element)
   
}
for (const c of "niharika") {
    console.log(c)
}
let i=5
while(i<6){
    console.log(i)
    i++ ;
}
let j=5
do {
    console.log(j)
    j++
} while (i<6);