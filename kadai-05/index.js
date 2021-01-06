const profile = {
    '名前' : 'あらい',
    '年齢' : 21,
    '趣味' : '旅行',
    '専攻' : '地域観光学'
}
const keys = Object.keys(profile)
console.log(keys)
for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key];
    console.log('私の' + key + 'は、' + value + 'です。')
}