const person = {
    name: 'arai',
    age: 21,
    'has-cat': false
}
// 組み込みのオブジェクトである Object を使う
// Object には keys(), values() のようなメソッドがある

const keys = Object.keys(person)
console.log(keys)
const values =Object.values(person)
console.log(values)

const prefectures = {
    '01': '北海道',
    '02': '青森県'
}
const prefCodes = Object.keys(prefectures) // ['01', '02', ...]