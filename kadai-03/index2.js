// 最⼤の数を⼊⼒する
const max = parseInt (process.argv[2])
for (let n = 1; n < max; n = n + 1) {
if (n % 10 === 3) {
console.log ('3がつく数字です')
} else if (n < 30) {
console.log (n)
} else if (n < 40) {
    console.log ('3がつく数字です')
} else if(40 <= n) {
    console.log (n)
}
}