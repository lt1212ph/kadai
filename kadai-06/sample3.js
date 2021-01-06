const cat = {
    name: 'Tama',
    age: 2,
    sex: 'Male',
    isStray: false,
    meow: () => {console.log('Meow!')},
    aaa: null,
    bbb: undefined
}
console.log(cat)
cat.meow()
console.log(JSON.stringify(cat))
