// Primitives passed by value, objects passed by reference.
(function () {
    function f(p) {
        console.log(p);
        p = p + 1;
        console.log(p);
    }
    var a = 5;
    console.log(a);
    f(a);
    console.log(a);
});

(function () {
    function g(p) {
        console.log(p);
        p.n = p.n + 1;
        console.log(p);
    }

    a = {n: 5};
    console.log(a);
    g(a);
    console.log(a);
});

// Global and local variables
(function () {
   function f(u) {
       function g(v) {
            console.log("Inside g(): before update, v = " + v);
            v *= 2;
            console.log("Inside g(): after update, v = " + v);
            u += 2;
       }
       console.log("Inside f(): before update, u = " + u);
       u += 1;
       console.log("Inside f(): after update, u = " + u);
    }
})();
f(5);