// var
function toWeirdCase(s){
    var result = s.split("");
    
    for(var i=0;i<result.length;++i){
        if(i%2==0) result[i].toUpperCase();
        else result[i].toLowerCase();
    }
    result.join("");
    return result;
}

// let을 활용했을 경우에는 내부 클로저 => 외부 함수 부분에서 에러 발생.   

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));

function closerTest() {
    var result = [];
    for(var i=0; i < 5; i++) {
        result.push(function() { return i });
    }
}
