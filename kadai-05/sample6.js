// 配列のいろいろな組み込み
const animals = ['dog','cat','rabbit']

console.log(animals.length)
animals.push('bird')
console.log(animals)
animals.push('fish','beetle')
console.log(animals)

const last = animals.pop()
console.log(last)
console.log(animals)

const deleted = animals.splice(2,2,'frog')
console.log(deleted)
console.log(animals)