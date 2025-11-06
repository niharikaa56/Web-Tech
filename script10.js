//Q 14.printlength of string

let a="Niharika" ;
console.log(a.length);

// Q15.PRINT FIRST AND LAST CHARACTER OF STRING
 console.log(a.charAt(0) + a.charAt(a.length-1))

 //Q16. Uppercase and lowercase
 console.log(a.toUpperCase() + a.toLowerCase())

 //Q17. Chcek wheter string contains " java"
  console.log(a.includes("java"))

  //Q18. Extract sceript from javascript using slice
  let text="javascript"
   console.log(text.slice(4))

  // Q19. Replace bad with good

  let sentence="Javascript is bad"
   console.log(sentence.replace("bad","good"))

   //Q20. Reverse a string without using bulit in function...............write
    let str="hello"
    let rev ="" ;
    for (let i = str.length; i >=0; i--) {
        rev= rev+str[i]; // rev+=str[i]
    }
     console.log(rev);

     //Q21. cOUNT vOWELS..............write
     let namee="niharika"
     let count =0;
     for ( let ch of namee) {
       if ("aeiou".includes(ch))
        count++;
     }
      console.log(count)

      //Q22. check if string is empty
      let st=""
      console.log(st.length===0)

      //Q23. Repeat string 3 times
      let word="niharika"
      console.log(word.repeat(3))

      //Q24. trim extra space
      let news="    breaking news india won finale"
            console.log(news.trim());
                  console.log(news)
     //Q26. count words

     let sent="javascript is good"
     let words=sent.split("")
     console.log(words.length)