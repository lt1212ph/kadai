const person = {
    name: 'arai',
    age: 21,
}

console.log(person.age)
person.age = 20 //オブジェクトのプロパティ値に代入することができる
console.log(person.age)
person['age'] = 20 //もちろんブラケット記法でもOK
console.log(person.age)