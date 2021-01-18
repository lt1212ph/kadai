// 組み込みモジュールを使ってみる

const fs = require('fs')
// ファイルを書き込む
fs.writeFileSync('./kadai-09/hello.txt','こんにちは!')

// 作ったファイルをまた読み込む
const file = fs.readFileSync('./kadai-09/hello.txt')

// 読み込んだファイルをコンソールに表示する
console.log(file.toString())