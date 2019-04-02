// %% [md]
 Primitive  data types
// %%
var a = 2;
typeof a;
a = "Hello";
typeof a;

// %% [md]
Boolean data type
// %%
var  states = [[false, false], [false,true], [true, false], [true, true]];
for (var i in states){
  console.log(states[i], states[i][0] || states[i][1]);
  // console.log(state[0] && state[1])
}
//%% [md]
Convert to boolean.
//%%
var falsy = [0, "", null, undefined, [], {}];
for (var i in falsy) {
  console.log(falsy[i] + "\t" + !!falsy[i]);
}

//%% [md]
Convert to number.
//%%
var nums = ["12", "0x12", "o12", false, true, null, undefined];
for (var i in nums) {
  console.log(Number(nums[i]));
}

//%% [md]
Arithmetic operators
//%%
var a = 5;
var b = "qwery";
var c = "10";
a+b;
a+c;
a+true;

//%% [md]
Literals
//%%
var a = 8,
    b = "Logos",
    c = true,
    d = 1/0,
    e = e/e,
    f = null,
    g;
console.log(a, b, c, d, e, f);
g +  2;
