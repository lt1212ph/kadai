
//サーバーから正常なデータが取得できた場合
//const jsonstring = '{"id": "lt1212ph", "tweet": 500, "follows": 100, "followers" : 300}'
//変なデータが入ってきた場合
const jsonstring = undefined

let userdata
try {
    userdata = JSON.parse(jsonstring)
    console.log("こんにちは、"　+ userdata.id + "!")
} catch (error) {
    console.log(error)
    console.log("異常なJSONです。")
}
