// **************   JS-React-Review for NextJS-05Sep2023  *************************

// Spread Opreator
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