// **************   JS-React-Review for NextJS-05Sep2023  *************************

// --------------- Spread Opreator
console.log("* Spread Opreator Start")
let a = [1,2 ,3,4,5,6], c = 99;
let b = [c, ...a], d = [...a,c];
console.log(`B after Spread [c, ...a] == ${b}`)
console.log(`D after Spread [...a,c] == ${d}`)

// Another Example
arr = [1,2,4,6,32]
let avg = (a,b,c) =>{
    console.log("A=== ",a)
    console.log("b=== ",b)
    console.log("c=== ",c)

    return a+b+c/3;
}

console.log("avg === ",avg(...arr))
console.log("Spread Opreator End")
// --------------- Destructuring
let num = {ac:3, ad:67}
console.log("* Destructuring Start")

let {ac,ad} = num;
console.log(`ac ===== ${ac}`)
console.log(`ad ===== ${ad}`)

console.log("Destructuring End")