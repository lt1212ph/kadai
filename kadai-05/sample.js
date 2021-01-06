const person = {
    name: 'arai',
    age: 21,
    'has-cat': false
}

// console.log(person.has-cat) -が加減算の演算子として解釈される
console.log(person['has-cat'])