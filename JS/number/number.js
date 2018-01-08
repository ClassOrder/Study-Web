var EPSILON = Math.pow(2, -53);
function epsEqu(x, y) {
    return Math.abs(x - y) < EPSILON;
}

console.log('0.1 + 0.2 == 0.3: ' + epsEqu(0.1 + 0.2, 0.3));

// 안전한 정수
console.log('안전한 숫자의 최대에 대한 식: ' + (Number.MAX_SAFE_INTEGER == Math.pow(2, 53)-1));
console.log('안전한 숫자의 최소에 대한 식: ' + (Number.MIN_SAFE_INTEGER == -Number.MAX_SAFE_INTEGER));

Number.isSafeInteger = function (n) {
    return (typeof n === 'number' &&
            Math.round(n) === n &&
            Number.MIN_SAFE_INTEGER <= n &&
            n <= Number.MAX_SAFE_INTEGER);
}

/**
 * Math.floor()는 매개변수를 가장 가까운 정수로 내립니다.
 * Math.ceil()은 매개변수를 가장 가까운 정수로 올립니다.
 * Math.round()는 매개변수를 가장 가까운 정수로 반올림합니다.
 */

 function ToInteger(x) {
     x = Number(x);
     return x < 0 ? Math.ceil(x) : Math.floor(x);
     // 음수면 Math.ceil() 양수면 Math.floor()
 }

 // 나머지 == remainder
 // 나머지 연산 == modulo
 // * 나머지 연산자 %는 모듈로가 아니라는 점에서 주의.
 // 모듈로와 차이를 보이는데 나머지 연산자의 결과값은 항상 첫번째 피연산자의 부호와 동일하다.
 // 모듈로는 두 번째 피연산자의 부호와 같아야 한다.

 /**
  * 산술연산 부분은 좀 어려우니 여러번 봐야할 것 같음..
  */
