


x = "this is a string"

y = 'this is also a string'

console.log(x.length);


//escape characters
console.log("this is a \"string");
console.log('this is a "string');
console.log("this is a 'string");

//  you need to escape the escape character
// \n new line
// \t tab
// \\ backslash
// \' single quote
// \" double quote
// to escape a character you need to use a backslash
console.log("this is a \nstring");
console.log("this is a \\nstring"); // with escaping



console.log("sdjfhsdfhsdfhj \\ sadsadsad ");



console.log("jkdsfhsdkjfh" + 123123); // concatenation


// template literals
// string interpolation
x = 4
y = 5
console.log(`x = ${x}`);
console.log("x = " + x);
console.log("the sum of " + x + " and " + y + " is " + (x + y));
console.log(`the sum of ${x} and ${y} is ${x + y}`); // better