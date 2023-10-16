// Object /////
//Object in the javascript are important topic.//
//Dates are always object
//Math are always object
// regular expression are always object
//Booleans can be objects (if defined with the new keyword)
//Numbers can be objects (if defined with the new keyword)
//Strings can be objects (if defined with the new keyword)
//Arrays are always objects
//Functions are always objects
//Objects are always objects


//JavaScript Primitives
//A primitive value is a value that has no properties or methods.for example 3.14 is a primitive value.
// this value can't be broke down to the further
//<><><><><><<<><<<<><><><<><><><><><><><><> ////
// array javascript///
//Array:An array is special variable which can hold more than one value:
/*
let book=['English','hindi','punjabi','urdu','telgu'];
let book2=['hind','english','punjabi','urdu','tamil'];
console.log(book+" "+book2);

//An array can hold many values under a single name, and you can access the values by referring to an index number.
//JavaScript Literals are constant values that can be assigned to the variables called literals or constants. 
//JavaScript Literals are syntactic representations for different types of data like numeric, 
//string, Boolean, array, etc. data
const fruits=["banana","Apple","grapes","mango"];
console.log(fruits[1]);
const arrayMixed=['banana','apple',1,2,3];
console.log(arrayMixed);
const fruits1=["banana","Apple","grapes","mango"];
fruits1[2]='Banana1';  //To change the array of index value used this<>/Use the index where you want to change the element in your array//
console.log(fruits1);

// Array is order collection of element //

// how to type check of the of the array
const fruits1=["banana","Apple","grapes","mango"];
console.log(typeof fruits1);
// To check the array of your array you can use the function//
console.log(Array.isArray(fruits1));

const fruits1=["banana","Apple","grapes","mango"];
fruits1.push=("lime");// This method is used to push the elment to your array from the last//
console.log(fruits1);
// here if you push the element from the last via push operation and then simultaneosly want to remove thaat pushed element.
// Here it can't push the last element which you push. you have to write here first like this
let fruits11=["banana","Apple","grapes","mango","lime"];
console.log(fruits11.pop()); // This method is used to pop the elment of your array from the last //
// it will tell you the element which you pop//
let poopedfruit=fruits11.pop();
console.log(fruits11);
console.log("poopedout fruits  is" , poopedfruit); 

//unshift:

const fruits1=["banana","Apple","grapes","mango"];
fruits1.unshift('kiwi'); // This is used to add the element in the first position
console.log(fruits1);
fruits1.shift(); // used to add the element in first position of your array /////
console.log(fruits1);

let num1=6;
let num2= num1; 
console.log("value is num1 is",num1);
console.log("value is num1 is",num1);
/// primitive array-------/////
let array1=[6];
let array2= array1; 
console.log(array1);
console.log(array2);
array1++ 
console.log("After incrementing the number")
console.log(array1);
console.log(array2);
/// referecne array element ///////////
let array1=["item1","item2"];
let array2=array1;
console.log('array1',array1);
console.log('array2',array2);
array1.push("item3","item4","item5");
console.log("after pushing the element into this");
console.log(array1.length);
console.log(array2.length);
console.log('array1',array1);
console.log('array2',array2);
// this happend because of the rerference array /////


//// Clone the array /////
let fruits=["apple","mango","kiwi"];
let fruits2=fruits;
console.log(fruits===fruits2);
// THis === is used to check for the two array is equal or not// it will give you the output with this == but best practice is this one ===


//Spread Operator ////////
//React ES6 Spread Operator 
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
let array=['item1','item2','item3','item4','item5','item6'];
let array2=[...array];
console.log(array,"\n",array2);
array.push=('item7')
console.log(array);
console.log(array2);
//op=correct output 

let array1=['item1','item2','item3','item4'];
let array2=array1.slice(0).concat(['item5','item6']) // To concat the two array   we can use this //
console.log(array2);

//loops in array
let fruits=['Apple','kiwi','grapes','lime','orange'];
console.log(fruits.length)               // To print the length of the array.  \\
console.log(fruits[fruits.length-1]);   // To print the last item of your array.\\
console.log(fruits[1],fruits[3]);      // To print the index of your array.      \\
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    console.log(fruits[i].toUpperCase());
    console.log(fruits[i].toLowerCase());
}

///////////////////
let fruits=['Apple','kiwi','grapes','lime','orange'];
let fruits2=[];
for(i=0;i<fruits.length;i++){
    fruits2.push(fruits[i]);
}
console.log(fruits2);

//use const for creating array


////////////////////////////
const fruits=["orange"];
fruits.push("kiwi"); // Push here in the fruits. //<>push <>pop <>shift <>unshift you can use these method of array in const [arrayname.push],[arrayname.pop]
const fruits1=["apple"];
console.log(fruits,"+",fruits1);
///////////////////////////////////


///// for while loop  /////////////
const fruits=['apple','orange'];
const fruits1=[];
let i=0;
while(i<fruits.length){
     fruits1.push(fruits[i]);
    i++;
}
console.log(fruits1);
////

const fruits=["kiwi","apple","orange"];
for(let fruit of fruits){ // here fruits item is going to be stored in the [fruit]
    console.log(fruit);
}

const fruits=["aaple","banana"];
const fruits2=[];
for (let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

const fruits1=["apple","kiwi","orange","lime","lemon"];
for(let index in fruits){
    console.log(index);
}
// for in loop will give the index of the the array
const fruits=["apple","kiwi","orange","lime","lemon"];
for(let index in fruits){
    console.log(index);
}
// it will print the index of your array
*/


/// This is array De-Structuring method //////
const array=["apple","orange","kiwi"];
/*let myarray=array[0];
let myarray2=array[1];
console.log(myarray);
console.log(myarray2);
// Shortcut in JavaScript to declared the two variable in single step.   //////
let[myarray, ,myarray2]=array;  // by giving , here you can skip the value too.
let mynewArray=array.slice(1); // slice(0) is the method which will slice your array and give your array after index 1 when you console.
console.log(mynewArray);
console.log(myarray);
console.log(myarray2);

const person2={
    Name:"Gandhi",
    Age:22,
    "My Hobbies":["Walking","Sleeping","Writting"]
}
console.log(person2["My Hobbies"]);
// key can be called as properties // Here key is name,age,hobbies,gender,city,state,country
person2.Gender="male";
person2.city="bengalore";
person2.state="karnatka";
person2.country="India";
console.log(person2);


/// HOw to iterate object   //////
const person={
    Name:"Abhishek Thakur",
    Age:22,
    "Person Hobbies":["Music","sleeping","reading"]
}
// for in loop
// object.keys
for(let key in person){
    //console.log(person[key]);
    console.log(key,":",person[key]); //Here if you want whole value keys which is name,age,hobbies from the person then used this 
} // by adding : By this it will give you full key value which is in the Person.
console.log(typeof (Object.keys(person)));
const val=Array.isArray((Object.keys(person)));
console.log(val);
/////

//for loop here ///////////
for(let key of Object.keys(person)){
    console.log(person[key]);
}

//object.keys(person) will give the keys object which belong to the person.
// above are the method which is used iterate the array //
///
///
///

const key1="objkey1"
const key2="objkey2"

const value1="value1"
const value2="value2"

const finalkey={
    [key1] :"value1",
    [key2] :"value2" // here these square bracket are used to copy the value from previosuly declraed variable
}
console.log(finalkey); // here [finalkey] store the key1 value which is "objkey1" and print the result as objkey1:value1


//function in JavaScript /////////////
// A Javascript is the function of block of code designed to perform a Particular task ///
// A Javascript fucntion is executed when "something" invokes it (calls it).
function singhappybirthday(){
    console.log("happy birthday to you");
}
function twoplusfour(){
    console.log(2+4);
}

// singhappybirthday()
// twoplusfour()

let newPlus = twoplusfour();
console.log(newPlus);

////
// Fucntion is always in the form of repeatable 


//Declaration: Function can be declared in the form where one is keyword and other is your fucntion name and
//after you can decrlaration the fucntionname()
// fucntion can be call after you can declared the same.
// if you declared the function first and calling it above in the code somewehere else it will give the result()


function sumoftwonumber(number1,number2){
    return number1+number2;
}
const returnedValue =sumoftwonumber(4,5);
console.log(returnedValue);


// fucntion expression  //

/// this is the example in the fucntion
function singhappybirthday(){
    console.log("happy birthday to you....");
}


// this is the function  Expression ///

const singhappybirthday = function(){
    console.log("happy birythday to you...");
}
singhappybirthday()
*/

const number=[1,2,3,4,5];
// aim:sum of all numbers in array
const sum=number.reduce((accumalator,currentValue) => {
return accumalator + currentValue;
},0);
console.log(sum);