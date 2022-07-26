// 1.
let weight

// 2.
console.log(typeof weight)

// 3.
let name = "Joao"
let age = 27
let stars = 499.5
let isSubscribed = true

let student = {}

// 4 
student = {
    name: "Joao",
    age: 27,
    stars: 499.5,
    isSubscribed: true,
    weight: 85.6
}

console.log(student)

// 4.2
console.log(`
${student.name} ${student.age} de idade pesa ${student.weight} kg.
`)

// 5
let students = []
console.log(typeof students)

// 6
students = [
    {
        student
    }
]

console.log(students)

// 7
console.log(students[0])

// 8 
const joao = {
    name: 'Senger',
    isAdmin: true
}

students[1] = joao

console.log(students[1])