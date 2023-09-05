// **************   JS-React-Review for NextJS-05Sep2023  *************************

// --------------- Spread Opreator
console.log("* Spread Opreator Start")
let a = [1, 2, 3, 4, 5, 6], c = 99;
let b = [c, ...a], d = [...a, c];
console.log(`B after Spread [c, ...a] == ${b}`)
console.log(`D after Spread [...a,c] == ${d}`)

// Another Example
arr = [1, 2, 4, 6, 32]
let avg = (a, b, c) => {
    console.log("A=== ", a)
    console.log("b=== ", b)
    console.log("c=== ", c)

    return a + b + c / 3;
}

console.log("avg === ", avg(...arr))
console.log("Spread Opreator End")

// --------------- Destructuring
console.log("* Destructuring Start")
let num = { ac: 3, ad: 67 }

let { ac, ad } = num;
console.log(`ac ===== ${ac}`)
console.log(`ad ===== ${ad}`)

console.log("Destructuring End")

// --------------- Async Js
console.log("* Async Js Start")

// 1
console.log("1. Harry is a good boy!");
// 2
setTimeout(() => {
    console.log("2. Harry is inside setTimeout");
}, 1000);
// 3
console.log("3. Harry is a bad boy!");

console.log("Async Js End")

// --------------- Promises and Callback
console.log("* Promises and Callback Js Start")
// Callbacks and Promises are two common ways to handle 
// asynchronous operations in JavaScript. 
// Here's an example that demonstrates both callback-based and 
// Promise-based approaches to fetching data from a simulated API:

console.log("Callback-Based Approach:")
// Simulate an asynchronous operation (fetching data from an API)
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = { message: 'Data fetched using callbacks' };
      // Simulate success and pass data to the callback
      callback(null, data);
      
      // Uncomment the following line to simulate an error:
    //   callback(new Error('Data fetch failed'));
    }, 2000); // Simulate a 2-second delay
  }
  
  // Using the Callback
  fetchDataWithCallback((error, result) => {
    if (error) {
      console.error(error.message); // Data fetch failed
    } else {
      console.log(result.message); // Data fetched using callbacks
    }
  });
  


console.log("Promises and Callback Js End")