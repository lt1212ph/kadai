const obj = {
    'a' : 12345,
    'b' : 'こんにちは',
    "hello-world": 'ハイフンを含むキーに対応するプロパティ'
}

console.log (obj.a)
console.log (obj.b)
// console.log(obj.hello-world)

console.log (obj['a'])
console.log (obj['b'])
console.log(obj['hello-world'])