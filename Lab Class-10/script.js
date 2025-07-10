
let name = prompt("Enter your name:");
function prinName(name) {
    let result = "Hello, " + name + "!";
    document.writeln(result);
    return result;
}

let a = parseInt(prompt("Enter a number:"));

function printResult(a){
   let result = a * a;
   return result;
}
prinName(name);
document.writeln("The square of " + a + " is: " + printResult(a));



let printArea = function(length, width){
    let area = length * width;
    return area;
}

document.writeln("Area of rectangle (5x3): " + printArea(5, 3));

(function sum(a, b) {
    let result = a + b;
    document.writeln("The sum of " + a + " and " + b + " is: " + result);
})(5, 10);


let names = ["Alice", "Bob", "Charlie"];
names.forEach((name) => {
   // console.log("Hello, " + name + "!");
});
//give me map expample
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num);
//console.log("Squares: ", squares);

let isThere = names.find((name) => name === "Bob");
//console.log(isThere ? "Yes" : "No");


//Arrow functions
let printHello = () => {
    //console.log("Hello, World!");
}
//slice example
let fruits = ["Apple", "Banana", "Cherry", "Date"];
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}                                             
// Array of objects
let arr = [{name : "rifat", age: 22},{name : "Maurf", age: 21},]
console.log(arr[0]);

let arr2 = [[1,"A"], [2,"B"],[3,"C"]];
for(let i =0; i<arr2.length; i++){
    for( j=0; j<arr2[i].length;j++){
        console.log(arr2[i][j]);
    }
}