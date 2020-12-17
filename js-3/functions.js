//-----------1------------
// function one(a,b){
//     if(a<b)alert("-1");
//     if(a>b)alert("1");
//     if(a===b)alert("0");
//   }
//   console.log(one(5,9));


//------2---------
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
  
//   alert( factorial(4) );


//------------3--------
// function three(a,b,c) {
//     alert(String(a)+b+c);
//  }
 
//  console.log(three(1,6,5) );

//-----------4----------
// function four (a=0,b=0) {
//     if(b===0) alert (a*a);
//     else alert(a*b);
//  }
 
//  console.log(four(2,5) );

//------------5----------
// function five  (n) {
//     let sum=0;
//     for(let i=1; i<n; i++){
//           if(n%i===0){
//                 sum+=i;
//                 }
//     }
//     if(n===sum) alert("Yes");
//     if(n!==sum) alert("No");
//   }
  
//    console.log(five(28) );

//--------------6----------------
// function five  (n) {
//     let sum=0;
//     for(let i=1; i<n; i++){
//           if(n%i===0){
//                 sum+=i;
//                 }
//     }
//     if(n===sum) alert(sum);
//   }
  
//   function six(a,b){
//     while(a<(b-1)){
//       a++;
//       five(a);
//     }
  
//   }
//    console.log(six(1,1000) );

//-------------7---------
// function seven (hour='00', min='00', sec='00') {
//   if (hour < 9 && hour !==  '00') hour = '0'+hour;
//   if (min < 9 && min !== '00') min = '0'+min;
//   if (sec < 9 && sec !== '00') sec = '0'+sec;
//   alert('«'+hour+':'+min+':'+sec+'»');
// }
// console.log(seven (3, 2, 40));

//-----------8---------
//function eight(hour, min, sec) {
//     alert(sec + (min * 60) + (hour * 3600));
// }
// console.log(eight(10, 20, 40));

//---------9-------
// function seven (hour = '00', min = '00', sec = '00') {
//     if (hour < 9 && hour !== '00') hour = '0' + hour;
//     if (min < 9 && min !== '00') min = '0' + min;
//     if (sec < 9 && sec !== '00') sec = '0' + sec;
//     alert('«'+hour+':'+min+':'+sec+'»');
//   }
//   function nine (sec) {
//       let hour = Math.floor(sec / 3600);
//       let min = Math.floor(sec / 60) - (hour * 60);
//       sec = sec % 60;
//      seven(hour, min, sec);
//   }
//   console.log(nine(5000));

//-------10------
function seven (hour = '00', min = '00', sec = '00') {
    if (hour < 9 && hour !== '00') hour = '0' + hour;
    if (min < 9 && min !== '00') min = '0' + min;
    if (sec < 9 && sec !== '00') sec = '0' + sec;
    alert ('«'+hour+':'+min+':'+sec+'»');
}
function eight(hour, min, sec) {
    return (sec + (min * 60) + (hour * 3600));
}
function nine (sec) {
      let hour = Math.floor(sec / 3600);
      let min = Math.floor(sec / 60) - (hour * 60);
      sec = sec % 60;
     seven(hour, min, sec);
}

function ten (hour1, min1, sec1, hour2, min2, sec2){
  const time1 = eight(hour1, min1, sec1);
  const time2 = eight(hour2, min2, sec2);
  const time = Math.abs(time1-time2);
  return (nine(time));
}
console.log(ten(10, 2, 3, 4, 5, 7));