//calculate the factorial of a number

let a = 4

function fac(numb) {
    let arr = Array.from(Array(numb + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => (a * b))
    console.log(c)
}

fac(a)

//second way

let b = 5

function factorial(numb) {

    let c = 1
    for (let index = 1; index <= numb; index++) {

        c = c * index
    }
   console.log(c)
}
factorial(b)