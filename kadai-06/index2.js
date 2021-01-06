try {
    const str1 = "abc"
    const jsonstr1 = JSON.parse(str1)
    console.log(jsonstr1)
} catch (error) {
    // ダブルクオーテーションの前後がシングルクオーテーションで囲まれていないため
    console.log("error")
}

try {
    const str2 = "'abc'"
    const jsonstr2 = JSON.parse(str2)
    console.log(jsonstr2)
} catch (error) {
    // 文字列の前後にシングルクオーテーションがあるため
    console.log("error")
}

try {
    const str3= '"abc"'
    const jsonstr3 = JSON.parse(str3)
    console.log(jsonstr3)
} catch (error) {
    // これは正しい JSON である。
    console.log("error")
}

try {
    const str4 = '{"a":undefined}'
    const jsonstr4 = JSON.parse(str4)
    console.log(jsonstr4)
} catch (error) {
    // undefined は JSON の値として使えないため
    console.log("error")
}

try {
    const str5 = '{"a":123}'
    const jsonstr5 = JSON.parse(str5)
    console.log(jsonstr5)
} catch (error) {
    // これは正しい JSON である。
    console.log("error")
}

try {
    const str6 = '{a:123}'
    const jsonstr6 = JSON.parse(str6)
    console.log(jsonstr6)
} catch (error) {
    // {}内の a がダブルクオーテーションで囲まれていないため
    console.log("error")
}

try {
    const str7 = '{"func":()=>console.log("Hi!")}'
    const jsonstr7 = JSON.parse(str7)
    console.log(jsonstr7)
} catch (error) {
    // 関数は JSON の値として使えないため
    console.log("error")
}
