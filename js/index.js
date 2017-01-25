//document.write('Hello World');
//var hello = 'Hello World';
//alert(hello);

//console.log(hello);

var userName = prompt('What is your name?');
var greet = 'Hello, /n' + userName;
document.write(greet);

var userAge = Number(prompt('what is your age?'));

 if(isNaN(userAge)){
     document.write('please enter a number, numbskull');
 }
 else{
    var nextAge = userAge + 1;
    document.write('soon you shall be ' + nextAge);
 }