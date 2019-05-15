// первая задача
for (let str="#";str.length<=7;) {
    console.log(str)
    str+="#"; 
}
// вторая задача
    for (let i=1; i<100;i++) {
        let x="";
    if (i%3!==0&&i%5!==0) { 
         x+=i;        
       }else if (i%3==0&&i%5!==0) {  
         x+="Fizz";
    } else if (i%5==0&&i%3!==0) {
         x+="Buzz";  
    } else {
        x+="FizzBuzz";  
    }
    console.log(x)
   }

 // третья задача
 
for (let i=0; i<8;i++){
     let string=' ';
     let a;
     let b;
if (i%2){
    a='#';
    b=' ';
} else {
    a=' ';
    b='#';
}    
for (let j=0;j<8;j++) {
    if (j%2) {
        string+=a;
   } else {
       string+=b;
   }
}    
console.log(string);
    }
 // четвертая задача
function isEven (n) {
 if (n==1) {
     return 0;
 } else if (n==0) {
     return 1;
 } else if (n>0){
 return isEven(n-2);
 } else {
    return isEven(n+2);
 }
 }

console.log (isEven(75));
console.log (isEven(50));
console.log (isEven(-1));

 // пятая задача
function range (x,y) {
   let todoList=[];
   if (x<=y){   
    for (let j=x;j<=y;j++)    
    todoList.push(j);
   }   
   else {
   for (let j=y;j<=x;j++)
   todoList.unshift(j);
   }
   return todoList;
   }


function sum(arrayForSum) {
    return arrayForSum.reduce((accumulator, currentValue) =>
        accumulator + currentValue);
}

console.log(range(10, 1));
console.log(sum(range(10, 1)));
 
 // шестая задача
  function reverseArray(array){
let  newArray=[];
for (i=array.length;i>0;i--){
newArray.push(array.pop());
}
return newArray;
   }
console.log(reverseArray(["A","B","C"]));

// 1 вар.
function reverseArrayInPlace(array) {
let  newArray=[];
for (i=array.length;i>0;i--){
newArray.push(array.pop());
}
return newArray;
for (j=array.length;j>0;j--){
newArray.push(array.pop());
}
return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5]))
 //  2 вар
// function reverseArrayInPlace2(array2){
// for (i=1;i<array2.length;i++){
// let l=array2.length-i;
// array2.splice(-5,array2.length-1,l);

// }
// return array2;
// }
// console.log(reverseArrayInPlace2([1,2,3,4,5]))
 // седьмая задача
  function arrayToList(array1) {
    if (array1.length > 1) {
        return { value: array1.shift(), rest: arrayToList(array1)};
    } else {
        return { value: array1.shift(), rest: null};
    }
  }
  console.log(arrayToList([10, 20]));

  
  function listToArray(list) {
    let array = [];
    let x = list;
    while (x) {
      array.push(x.value);
    x = x.rest;
    }
    return array;
  }
  console.log(listToArray(arrayToList([10, 20, 30])));

  function prepend(n, list) {
    return {value:n, rest: list};
    }
 

console.log(prepend(10, prepend(20, null)));

function nth (list,y) {
    if (!list) return undefined;
    else if (y == 0) return list.value;
    else return nth(list.rest, y - 1);
    }

console.log(nth(arrayToList([10, 20, 30]), 1));

// восьмая задача
    function deepEqual (q,w) {
    if (q===w) return true;
    if (q==null||w==null||typeof q!="object"||typeof w!="object") return false;

   if (Object.keys(q).length != Object.keys(w).length)
    return false;
    for (let elem of Object.keys(q)) {
        if (!Object.keys(w).includes(elem)||!deepEqual(q[elem],w[elem]))
             return false;
    }
    return true;
    }


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
