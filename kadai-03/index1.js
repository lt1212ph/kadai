// 生まれた日を入力
const day = parseInt(process.argv[2])
if (day % 3 === 0) {
    console.log('あなたはいい人です')
} else if (day % 3 === 1) {
    console.log('あなたは悪くない人です')
} else {
    console.log('あなたは素晴らしい人です')
}