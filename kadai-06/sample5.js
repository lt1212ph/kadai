// throw の使い方

const num = process.argv[2]
if (num % 2 === 0) {
console.log('偶数です。')
} else {
throw new Error( '偶数ではありません!エラーを発⽣させてプログラムを終了します' )
}
console.log('正常に終了しました。')