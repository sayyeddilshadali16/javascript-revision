// Immediately Invoked Function Expression
// named iife
(function one() {
  console.log(`DB connected`);
})();

// to avoid pollution of global scope iife is used
// unnamed iife
(() => {
  console.log(`DB connected two`);
})();

// passing variables in iife

((name) => {
  console.log(`DB connected two ${name}`);
})("sayyed");
