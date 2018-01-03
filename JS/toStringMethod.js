// 숫자 리터럴에서 toString() 하는 방법

/**
 * 1.toString()
 * 위 toString()이 에러나는 이유는 1이 숫자이기 때문에 뒤에 따라오는 . 이 소수점으로 우선판별되기 때문이다.
 * 그렇기 때문에 숫자의 경우엔 toString()을 아래와 같은 방법으로 활용한다.
 * */


console.log(1 .toString());
console.log((1).toString());
console.log(1.0.toString());
console.log(1..toString());

// 실행했을 경우 모두 1로 출력된다.
// 브라우저 콘솔에서는 정확하게 "1"