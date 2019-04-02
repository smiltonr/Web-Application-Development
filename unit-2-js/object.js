// %% md
// # Object initializers
// %%
var empty = {};           // An object with no properties
var point = { x:0, y:0 }; // Two properties
var point2 = {            // Another object literal
x:point.x,                // With more complex properties
y:point.y+1
};
var book = {                // Nonidentifier property names are quoted
"main title": "JavaScript", // space in property name
'sub-title': "Pocket Ref",  // punctuation in name
"for": "all audiences",     // reserved word name
};
console.log(empty);
console.log(point);
console.log(point2);
console.log(book);

var o = new Object();    // An empty object: same as {}.
var a = new Array();     // An empty array: same as []. 
var d = new Date();      // A Date for the current time.
var r = new RegExp("js");// A pattern matching object.

// q inherits properties from p, o, and Object.prototype
var q = Object.create(p);
q.z = 3; // and has an own property z.
// toString is inherited from Object.prototype
var s = q.toString();
// x and y are inherited from o and p
q.x + q.y // => 3
