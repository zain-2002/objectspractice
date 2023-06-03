// // var playButton = document.getElementById("play-btn");
// // var player = document.getElementById("player");

// // playButton.addEventListener("click", function() {
// //   player.src += "?autoplay=1";
// //   player.style.display = "block";
// //   playButton.style.display = "none";
// // });

// // function add(num){
// //   return function(num2){
// //     console.log(num+num2);
// //   }
// // }
// // let a=add(7);
// // a(5);
// // let a=[1,5,7,8,9,10]
// // a.forEach(function(val,index){
// //   console.log(val,index);
// // })
// // let c=a.filter(function(val){
// //   return val%2===0
// // })
// // console.log(c);
// // let c=a.sort(function(a,b){
// //   if(a>b){
// //     return 1;
// //   }
// //   else{
// //     return -1
// //   }
// // })
// // console.log(c);
// // let c=a.reduce(function(prev,curr){
// // return prev+curr
// // },0)
// // console.log(c);
// // a=a.map(function(val){
// //   return val*3
// // })
// // console.log(a);
// // let b=a.map(function(element){
// // console.log(element);
// // })
// // let person={
// //   pname:"zain",
// //   pcnic:4230107360871,
// //   canspaek:true,
// //   speak:function(lang){
// //     console.log(this.pname+" can speak "+lang);
// //   }
// // }
// // person.speak("urdu");
// // function addstd(sname,sclass,sid,scourse){
// //   return{
// // sname :sname,
// // sclass:sclass,
// // sid:sid,
// // scourse:scourse,
// // };
// // }
// // let a=[addstd("zain","bse",123,"oop"),addstd("ali","bse",1234,"cp"),addstd("anas","bse",1253,"cf")]
// // console.log(a);
// // let c = localStorage.getItem("students");
// // let starr = c ? JSON.parse(c) : [];
// // function addstudent(){
// //   let std = {
// //     sname:prompt("ENter std name:"),
// //     class:prompt("ENter std class:"),
// //     id:+prompt("ENter std id:"),
// //     course:prompt("ENter std course:"),
// //   };
// //   starr.push(std);
// //   console.log(starr);

// //   let a = JSON.stringify(starr);
// //   localStorage.setItem("students",a);
// // }
// // let g=localStorage.getItem("stu")
// // let c=g ? JSON.parse(g) : []

// // function addstu(){
  
// //   let stob={
// //     name:prompt("enter name"),
// //     cnic:prompt("enter cnic"),
// //     id:prompt("enter id")
// //   }
// //   c.push(stob);
// //   let s=JSON.stringify(stob)
// //   localStorage.setItem("stu",s)
// // }
// // lecture 7 
// //defer keyword or attribute in script tag
// //querryselector
// // let a=document.querySelector("#p3")
// // a.innerHTML="heloo"
// // let c=document.querySelectorAll("p")
// // console.log(c[0].nodeName);
// // c[0].innerHTML="<b>ZAIN UL ABIDEEN </b>"
// // console.log(c[0]);
// // c[0].style.color="red"
// // c[0].style.marginLeft="400px"
// // c[0].style.fontSize="50px"

// // setInterval(function(){
// //   if (c[0].style.display==="none") {
// //     c[0].style.display="block"
// //   }
// //   else{
// //     c[0].style.display="none"

// //   }
// //   },500)
// //   c[1].innerHTML="<b>ZAIN UL ABIDEEN </b>"
// // console.log(c[1]);
// // c[1].style.color="white"
// // c[1].style.backgroundColor="#000"

// // c[1].style.fontSize="20px"

// // setInterval(function(){
// //  let width=c[1].style.width;
// //  if (width==="100%") {
// //   c[1].style.width="20%"
// //  }
// //  else{
// //  width=+width.replace("%","")
// //   c[1].style.width= width+10 + "%"
// //  }
// //   },500)
// // let c=document.querySelectorAll("p")
// // c[0].innerHTML="<b>ZAIN UL ABIDEEN </b>"
// // c[0].style.backgroundColor="black"
// // c[0].style.color="white"
// // c[0].style.fontSize="20px"
// // setInterval(function (){
// // if (c[0].style.backgroundColor==="black" && c[0].style.color==="white") {
// //   c[0].style.backgroundColor="white"
// //   c[0].style.color= "black"
// // }
// // else{
// //   c[0].style.backgroundColor="black"
// // c[0].style.color="white"
// // }
// // },500)
// // let c=document.querySelectorAll("p")
// // c[0].innerHTML="<b>ZAIN UL ABIDEEN </b>"
// // c[0].style.fontSize="20px"
// // setInterval(function (){
// // let c1=Math.round(Math.random()*16777215).toString(16)
// // let c2=Math.round(Math.random()*16777215).toString(16)
// // c[0].style.backgroundColor="#"+c1
// // c[0].style.color="#"+c2


// // },500)
// // let a=new Date();
// // // let b=new Date("dec 20,2025")
// // let b=new Date();
// // b.setDate(20)
// // b.setFullYear(2025)
// // b.setMonth(11)
// // let c=b-a;
// // let f=c/(1000*60*60*24*365.25)
// // // console.log(Math.round(f));
// // console.log(f.toFixed(1));
// // console.log(b);
// // let h=document.getElementById("hours")
// // let m=document.getElementById("min")
// // let s=document.getElementById("sec")

// // setInterval(function () {
// // let date=new Date()
// //  h.innerText=date.getHours()
// //  m.innerText=date.getMinutes()
// //  s.innerText= date.getSeconds()
// // },1000)

// // let h=document.getElementById("hours")
// // let m=document.getElementById("min")
// // let s=document.getElementById("sec")
// // let amPm=document.getElementById("ampm")

// // setInterval(function () {
// // let date=new Date()
// // let ch=date.getHours()
// // amPm.innerText="AM"

// // if (ch>11) {
// //   amPm.innerText="PM"

// // if (ch>12) {
// //   ch=ch-12;

// // }
// // }
// // h.innerText=ch
// // m.innerText=date.getMinutes()
// //  s.innerText= date.getSeconds()
// // },1000)
// // let c=[1,5]
// // console.log(c);
// // var sub1=prompt("Enter subject one Name:").toUpperCase()
// // var sub2=prompt("Enter subject two Name:").toUpperCase()
// // var sub3=prompt("Enter subject three Name:").toUpperCase()
// // var tMarks=100
// // var markSub1=+prompt("Enter marks obtained in subject one:")
// // var markSub2=+prompt("Enter marks obtained in subject two:")
// // var markSub3=+prompt("Enter marks obtained in subject three:")
// // var percentSub1=(markSub1/tMarks)*100;
// // var percentSub2=(markSub2/tMarks)*100;
// // var percentSub3=(markSub3/tMarks)*100;
// // var totalObtainedmarks=markSub1+markSub2+markSub3;
// // var totalPercent=(totalObtainedmarks/300)*100;
// // let sub1text=document.getElementById("sub1name")
// // sub1text.innerText=sub1;
// // let sub2text=document.getElementById("sub2name")
// // sub2text.innerText=sub2;
// // let sub3text=document.getElementById("sub3name")
// // sub3text.innerText=sub3;
// // let sub1obttxt=document.getElementById("sub1obtmrks")
// // sub1obttxt.innerText=markSub1
// // let sub2obttxt=document.getElementById("sub2obtmrks")
// // sub2obttxt.innerText=markSub2
// // let sub3obttxt=document.getElementById("sub3obtmrks")
// // sub3obttxt.innerText=markSub3
// // let sub1obtpercent=document.getElementById("sub1percent")
// // sub1obtpercent.innerText=percentSub1;
// // let sub2obtpercent=document.getElementById("sub2percent")
// // sub2obtpercent.innerText=percentSub2;
// // let sub3obtpercent=document.getElementById("sub3percent")
// // sub3obtpercent.innerText=percentSub3;
// // let totalobttxt=document.getElementById("totalobtmrks")
// // totalobttxt.innerText=totalObtainedmarks;
// // let totalpercenttxt=document.getElementById("totalpercent")
// // totalpercenttxt.innerText=totalPercent;
// // const mathFunctions = [
// //     function add(a, b) {
// //       return a + b;
// //     },
// //     function subtract(a, b) {
// //       return a - b;
// //     },
// //     function multiply(a, b) {
// //       return a * b;
// //     }
// //   ];
  
// // console.log(mathFunctions[0](2, 3)); // Output: 5
// // console.log(mathFunctions[1](5, 2)); // Output: 3
// // console.log(mathFunctions[2](4, 6)); // Output: 24
// // let flag=0
// // do{
// //     let password=prompt("Enter a password")
   
   
// //    for (let index = 0; index < password.length; index++) {
// //     if (password.charCodeAt(index)>=65 &&password.charCodeAt(index)<=90||password.charCodeAt(index)>=97 &&password.charCodeAt(index)<=122) {
// //         flag=1;
// //     }
// //     else if(password.charCodeAt(index)>=48 &&password.charCodeAt(index)<=57) {
// //         flag=1;
// //     }
// //     else{
// //         flag=1
// //     }
// //    }
// //    if (password.length < 6) {
// //     flag=1;
// // }
// // else if (password.charCodeAt(0)>=48 &&password.charCodeAt(0)<=57) {
// //     flag=1;
    
// // }
// // else{
// //     flag=0;
// // }
// //     if (flag===1) {
// //         alert("Enter valid password!")
// //     }

// // }
// // while(flag===1)
// // function isPasswordValid(password) {
// //     if (password.length < 6) {
// //       return false;
// //     }
// //     if (!isNaN(password[0])) {
// //       return false;
// //     }
// //     const regex = /[a-zA-Z]/;
// //     const containsAlphabet = regex.test(password);
// //     const containsNumber = /[0-9]/.test(password);
// //     if (containsAlphabet && containsNumber) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
  
// //   let password = prompt("Enter a password:");
  
// //   while (!isPasswordValid(password)) {
// //     password = prompt("Invalid password! Password should contain alphabets and numbers, should not start with a number, and should be at least 6 characters long. Enter a valid password:");
// //   }
// //   alert("Password is valid!");
// // function isPasswordValid(password) {
// //     if (password.length < 6) {
// //       return false;
// //     }
// //     const firstChar = password.charCodeAt(0);
// //     if (firstChar >= 48 && firstChar <= 57) {
// //       return false;
// //     }
// //     let containsAlphabet = false;
// //     let containsNumber = false;
// //     for (let i = 0; i < password.length; i++) {
// //       const charCode = password.charCodeAt(i);
// //       if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
// //         containsAlphabet = true;
// //       }
// //       if (charCode >= 48 && charCode <= 57) {
// //         containsNumber = true;
// //       }
// //     }
// //     if (containsAlphabet && containsNumber) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// //   let password = prompt("Enter a password:");
// //   while (!isPasswordValid(password)) {
// //     password = prompt("Invalid password! Password should contain alphabets and numbers, should not start with a number, and should be at least 6 characters long. Enter a valid password:");
// //   }
// //   alert("Password is valid!");
  
// // ASSIGNMENT
    
// // let h=document.getElementById("hours")
// // let m=document.getElementById("min")
// // let s=document.getElementById("sec")
// // let amPm=document.getElementById("ampm")
// // setInterval(function () {
// // let date=new Date()
// // let ch=date.getHours()
// // let cm=date.getMinutes()
// // let cs=date.getSeconds()

// // amPm.innerText="AM"
// // m.innerText=cm
// //  s.innerText= cs
// // if (ch>11) {
// //     amPm.innerText="PM"
  
// //   if (ch>12) {
// //     ch=ch-12;
// //   }
// //   }
// // h.innerText=ch

// // if (ch===0) {
// //     h.innerText="12" 
// // }
// // if (ch<10) {
// //     h.innerText="0"+ch 
// // }
// // if (cm<10) {
// //     m.innerText="0"+cm
// // }
// // if (cs<10) {
// //     s.innerText="0"+cs
// // }

// // },1000)



// // setInterval(function(){
// //     let h=document.getElementById("hours")
// //     let m=document.getElementById("min")
// //     let s=document.getElementById("sec")
// //     let amPm=document.getElementById("ampm")
// //     let date=new Date();
// //     let ch =date.getHours();
// //     let cm=date.getMinutes();
// //     let cs=date.getSeconds();
// //     amPm.innerText="AM"
// //     if (ch>11) {
// //         amPm.innerText="PM"
// //     }
// //     m.innerText=cm
// //     s.innerText=cs
// //     if (cm<10) {
// //         m.innerText="0"+cm
// //     }
// //     if (cs<10) {
// //         s.innerText="0"+cs
// //     }
// //     h.innerText=ch
// //     if (ch<10) {
// //         h.innerText="0"+ch
// //     }
// //     if (ch>12) {
// //         ch=ch-12
// //         if (ch<10) {
// //             h.innerText="0"+ch
// //         }
// //     }
   
// //     if (ch===0) {
// //         h.innerText="12"
// //     }
   
// // },1000)


// // setInterval(function(){
// //     let cd=new Date();
// //     let bd=new Date("Dec 20,2023")
// //     let diff=bd-cd;
// //     let h=document.getElementById("hours")
// //     let m=document.getElementById("min")
// //     let s=document.getElementById("sec")
// //     let amPm=document.getElementById("ampm")
// // h.innerText=Math.round(diff/(1000*60*60*24*30))
// // m.innerText=Math.round(diff/(1000*60*60*24))
// // s.innerText=Math.round(diff/(1000*60*60))
// // amPm.innerText=Math.round(diff/(1000*60))

// // },1000)
// // let s=""
// // for (let i = 1; i <= 6; i++) {
// //     // let spaces = " ".repeat(n - i);
// //     // let hashes = "#".repeat(i);
// //     // console.log(spaces + hashes);
 
// //     for(let j = 1; j <= 6-i; j++){
// //         s+=" "
// //     }
// // for(let k = 1; k <= i; k++){
// //     s+="#"
    
// // }
// //  s+="\n"   
// // }
// // console.log(s)
// // let min=[]
// // let minsamp=[1,2,3,4,5]
// // for(let i=0;i<4;i++){
// //   let  minval = minsamp.reduce(function(prev,curr){
// //     if(prev>curr){
// //         prev=curr;
// //     }
// //     return prev;
// //    },minsamp[0]);
// //    min.push(minval)
// //    minsamp.splice(minsamp.indexOf(minval),1);
// // }
// // let mincount=min.reduce(function(prev,curr){
// //     return prev+curr;
// // },0);
// // let max=[]
// // let maxsamp=[1,2,3,4,5]
// // for(let i=0;i<4;i++){
// //   let  maxval = maxsamp.reduce(function(prev,curr){
// //     if(prev<curr){
// //         prev=curr;
// //     }
// //     return prev;
// //    },maxsamp[0]);
// //    max.push(maxval)
// //    maxsamp.splice(maxsamp.indexOf(maxval),1);
// // }
// // let maxcount=max.reduce(function(prev,curr){
// //     return prev+curr;
// // },0);
// // console.log(mincount+" "+maxcount );
// // function miniMaxSum(arr) {
// //     // Write your code here
// //     let mincount=0;let maxcount=0;
// // arr.sort();
// // for(i=0;i<4;i++){
// //     mincount+=arr[i];
// //     maxcount+=arr[i+1];
// // }
// // console.log(mincount+" "+maxcount);
// // }
// // let a=[1,2,3,4,5]
// // miniMaxSum(a)
// // function miniMaxSum2(arr) {
// //     // Write your code here
// //     let mincount=0;let maxcount=0;
// // arr.sort(function(a,b){
// //     return a-b;
// // });
// // for(i=0;i<4;i++){
// //     mincount+=arr[i];
// //     maxcount+=arr[i+1];
// // }
// // console.log(mincount+" "+maxcount);
// // }
// // miniMaxSum2(a)
// // function birthdayCakeCandles(candles) {
// //     // Write your code here
// //     candles.sort();
// //     let max=candles[candles.length-1];
// //     let maxCount=0;
// //     for(let i=0;i<candles.length;i++){
// //         if(candles[i]===max){
// //             maxCount++;
// //         }
// //     }
// // return maxCount;
// // }
// // let candles=[3,1,3,2]
// // candles.sort();
// // let max=candles[candles.length-1];
// // console.log(max);
// // let count=0;
// // candles.forEach(function(val){
// // if (val==max) {
// //     count++;
// // }
// // })
// // console.log(count);
// // function f(array,value){
// //     var n = 0;
// //     for(i = 0; i < array.length; i++){
// //         if(array[i] == value){n++}
// //     }
// //     return n;
// // }
// // console.log(f(candles,3))
// // console.log(birthdayCakeCandles(candles));
// // function birthdayCakeCandles2(candles) {
// //     // Write your code here
// //   // initialize max height and count of max height candles
// //   let maxHeight = 0;
// //   let countMaxHeight = 0;
  
// //   // iterate through the candle heights
// //   for (let i = 0; i < candles.length; i++) {
// //     // if current candle height is greater than max height, update max height and reset count of max height candles
// //     if (candles[i] > maxHeight) {
// //       maxHeight = candles[i];
// //       countMaxHeight = 1;
// //     }
// //     // if current candle height is equal to max height, increment count of max height candles
// //     else if (candles[i] === maxHeight) {
// //       countMaxHeight++;
// //     }
// //   }
  
// //   // return count of max height candles
// //   return countMaxHeight;
// // }
// // console.log(birthdayCakeCandles2(candles));
// // let a="12:05:45PM"
// // console.log(a.split(""));
// // let arr=a.split("")
// // let b=parseInt(arr[0]+arr[1])
// // console.log(b);
// // arr.splice(arr.length-2,2)
// // console.log(arr);
// // if (b===12) {
// //     arr[0]=0;
// //     arr[1]=0;
// // }
// // else{
// //     b=
// // }
// // console.log(arr);
// // let a="";
// // for (let i = 1; i <= 6; i++) {
// // a=a+(" ").repeat(6-i);
// // a+=("#").repeat(i);
// // a+=("\n")
    
// // }
// // document.write(a)
// // console.log(a)






// // Sync Example
// alert("done");
// console.log("Hello Pakistan");

// // Async Example
// function runAfter1Sec() {
//   setTimeout(function () {
//     console.log("done");
//   }, 2000);
// }
// runAfter1Sec();
// console.log("Hello Pakistan");

// Callbacks
// function runAfter1Sec(val, cb) {
//   setTimeout(function () {
//     let data = 5 + val;
//     cb(data);
//   }, 1000);
// }

// function toBeExecutedWhenDone (dataToGet) {
//     console.log("Yes, It's done", dataToGet);
// }

// runAfter1Sec(10, function (dataToGet) {
//         console.log("Yes, It's done", dataToGet);
//     });
// console.log("Hello Pakistan");

// // Callback Hell

// function runAfter1Sec(val, cb) {
//   setTimeout(function () {
//     let data = 5 + val;
//     cb(data);
//   }, 1000);
// }

// runAfter1Sec(10, function (dataToGet) {
//   runAfter1Sec(dataToGet, function(dataToGet1) {
//     runAfter1Sec(dataToGet1, function(dataToGet2) { // Callback Hell
//         console.log(dataToGet2);
//     });
//   });
// });
// console.log("Hello Pakistan");

// Promise

// function runAfter1Sec(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let data = 5 + val;
//       resolve(data);
//     }, 1000);
//   });
// }

// runAfter1Sec(5)
// .then(function (data) {
//     return runAfter1Sec(data);
// }).then(function (data) {
//     return runAfter1Sec(data);
// }).then(function (data) {
//     return runAfter1Sec(data);
// }).then(function (data) {
//     console.log(data);
// });

// Async/Await

// function runAfter1Sec(val) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let data = 5 + val;
//       if(data % 2 === 0) {
//         resolve(data);
//       } else {
//         reject("Odd number detected");
//       }
//     }, 1000);
//   });
// }

// runAfter1Sec(6)
// .then(function (data) {
//     return runAfter1Sec(data);
// }).catch(function (error) {
//     console.error(error);
// })

// (async function() {
//     try {
//         const data = await runAfter1Sec(6);
//     } catch (err) {
//         console.error(err);
//     }
//   })()



// async function run() {
//   // async functions By defaut return a promise
//   const data = await runAfter1Sec(5);
//   const data1 = await runAfter1Sec(data);
//   const data2 = await runAfter1Sec(data1);
//   const data3 = await runAfter1Sec(data2);
//   return data3;
// }

// run().then(function (data3) {
//   console.log(data3);
// });
// function  runafteronesec(val,wd) {
//   setTimeout(function () {
//     let value=5+val;
//     wd(value);
//   },2000)
// }
  
// runafteronesec(5,function (value) {
    
// runafteronesec(value,function (value) {
    
// runafteronesec(value,function (value) {
//   console.log("the value is: "+value );

// });
// });
// });

// console.log("Hello Pakistan");

// function  runafteronesec(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let value=5+val;
//       resolve(value);
//     },1000)
//   })
 
// }
// (async function () {
//   let a=await runafteronesec(5);
//   console.log(a);
// })();
// runafteronesec(5).then(function (value) {
//   return runafteronesec(value);
// }).then(function (value) {
//   return runafteronesec(value);
// }).then(function (value) {
//   return runafteronesec(value);
// }).then(function (value) {
// console.log(value);
// })
// function runafteronesec(val){
//   return new Promise(function (resolve,reject) {
//     setTimeout(function () {
//       let a=val %2;
//       if (a===0) {
//         resolve(a)
//       }
//       else{
//         reject("Its odd")
//       }
//     },1000)
//   })

// }
// (async function () {
//   try{
//     let a=await runafteronesec(7);
//     console.log(a);
//   }
//   catch(err){
// console.error(err);
//   }
// })();
// console.log("Hello Pakistan");

// const a = {
//   sname:"string",
//   id:5,
//   cnic:456
// };
// console.log(a.sname);
// let c=[{sn:"zain",sid:25},{sn:"ali",sid:5}]
// console.log(c[0].sn);
// (async function () {
//   let c=await fetch("./apli.json")
//   let no= await c.json();
//   console.log(no);
// })();
// var x=10;
// function  greet() {
// console.log(x);
// var x=20;
// }
// greet()
// var dat=new Date()
// console.log(dat.toLocaleString());
// var date=new Date("2022-05-15 T03:00:00Z")
// console.log(date.toLocaleString());


// let d1=new Date("2022-05-15 T03:00:00Z")
// let d2=new Date("2022-05-15 T04:00:00Z")
// console.log(d2>d1);
var userResult = [
    {
        name: "John Doe",
        results: [
            { subject: "Math", marks: 85 },
            { subject: "English", marks: 92 },
            { subject: "Science", marks: 78 },
            // Add more subjects and marks for John Doe
        ]
    },
    {
        name: "Jane Smith",
        results: [
            { subject: "Math", marks: 90 },
            { subject: "English", marks: 88 },
            { subject: "Science", marks: 76 },
            // Add more subjects and marks for Jane Smith
        ]
    },
    {
        name: "Alice Johnson",
        results: [
            { subject: "Math", marks: 82 },
            { subject: "English", marks: 95 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Alice Johnson
        ]
    },
    {
        name: "Robert Davis",
        results: [
            { subject: "Math", marks: 78 },
            { subject: "English", marks: 82 },
            { subject: "Science", marks: 79 },
            // Add more subjects and marks for Robert Davis
        ]
    },
    {
        name: "Emily Wilson",
        results: [
            { subject: "Math", marks: 92 },
            { subject: "English", marks: 86 },
            { subject: "Science", marks: 94 },
            // Add more subjects and marks for Emily Wilson
        ]
    },
    {
        name: "Michael Brown",
        results: [
            { subject: "Math", marks: 87 },
            { subject: "English", marks: 90 },
            { subject: "Science", marks: 83 },
            // Add more subjects and marks for Michael Brown
        ]
    },
    {
        name: "Olivia Taylor",
        results: [
            { subject: "Math", marks: 79 },
            { subject: "English", marks: 91 },
            { subject: "Science", marks: 84 },
            // Add more subjects and marks for Olivia Taylor
        ]
    },
    {
        name: "James Anderson",
        results: [
            { subject: "Math", marks: 86 },
            { subject: "English", marks: 84 },
            { subject: "Science", marks: 90 },
            // Add more subjects and marks for James Anderson
        ]
    },
    {
        name: "Sophia Martinez",
        results: [
            { subject: "Math", marks: 93 },
            { subject: "English", marks: 79 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Sophia Martinez
        ]
    },
    {
        name: "Benjamin Thomas",
        results: [
            { subject: "Math", marks: 88 },
            { subject: "English", marks: 83 },
            { subject: "Science", marks: 91 },
            // Add more subjects and marks for Benjamin Thomas
        ]
    }
];
let tb=document.getElementById("tb")
let sn=0;
let topcont=[]
class topper{
    constructor(name,num){
        this.name=name;
        this.num=num;
    }
}
function call (){
userResult.forEach((val)=>{
sn++;
let tr=document.createElement("tr")
let total=0;
val.results.forEach((v)=>{
total+=v.marks;
})
topcont.push(new topper(val.name,total))
tr.innerHTML=`
<td>${sn}</td>
<td>${val.name}</td>
<td>${val.results[0].marks}</td>
<td>${val.results[1].marks}</td>
<td>${val.results[2].marks}</td>
<td>${total}</td>
<td>${(total/300)*100}</td>
`
tb.appendChild(tr)

})
};
call();
topcont=topcont.sort((a,b)=>
    b['num']-a['num']
)
document.getElementById("first").innerText="First position: "+ topcont[0].name
document.getElementById("second").innerText="Second position: "+ topcont[1].name
document.getElementById("third").innerText="Third position: "+ topcont[2].name


