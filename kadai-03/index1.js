// 生まれた日を入力
const day = parseInt(process.argv[2])
if (day % 4 === 0) {
    console.log('あなたはいい人です')
} else if (day % 4 === 1) {
    console.log('あなたは悪くない人です')
} else if (day % 4 === 2) {
    console.log('あなたは素晴らしい人です')
} else {
    console.log('あなたはちょっといい人です')
}