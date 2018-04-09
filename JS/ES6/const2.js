const obj = {language: "한글"};
try {
    obj = {};
} catch ( e ) {
    console.log("const 재할당은 불가능합니다.");
}
obj.language = "영어";
console.log(obj.language);