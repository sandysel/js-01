//document.write('Hello World');
//var hello = 'Hello World';
//alert(hello);

//console.log(hello);

var userName = prompt('What is your name?');
var greet = 'Hello, <br>' + userName + "!";
document.write(greet);

var userAge = Number(prompt('what is your age?'));

 if(isNaN(userAge)){
     document.write('please enter a number, numbskull');
 }
 else{
    var nextAge = addOne(userAge);
    document.write('<br> soon you shall be ' + nextAge);
 }
 
 function addOne(num){
     var result = num + 1;
     return result;
 }