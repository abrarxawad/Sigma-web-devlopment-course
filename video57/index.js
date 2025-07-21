//loops in javascript


for (let i = 1; i < 10; i++) {
    console.log(i)
}

let obj = {
    name: "Jawad",
    role: "CSE student",
    company: "Microsoft"
}
//for in loop

for (const key in obj) {

    const element = obj[key];
    console.log(key, element)
}

//for of loop
for (const c of "Jawad") {
    console.log(c)
}

let i = 0
while (i < 6) {
    console.log(i)
    i++;
}

let j = 3

do {
    console.log(j)
    j++;
} while (j < 6);
