'use strict'
// 1
console.log(new String('abc') == new String('abc')); //false
// 2
console.log('abc' == new String('abc')); // true
// 래퍼 인스턴스와 원시값을 비교할 때 2의 방법을 사용하면 안되는 이유

console.log('apple' < 'orange'); // true
console.log('apple' > 'orange'); // false
console.log('ap' < 'bp'); // 정렬기준인지 확인

/**
 * 비교연산과정
 * 1. 두개의 피연산자가 있다고 했을 때,
 * 2. 두 피연산자를 모두 원시값으로 바꿈
 * 3. 객체 obj는 obj.valueOf()나 obj.toString()을 호출하는 내부 조작을 통해 원시값으로 바꾼다.
 * 4. 두 피연산자가 문자열인 경우 해당 문자열의 자바스크립트 문자인 16비트 코드 단위를 '사전' 순서로 비교
 * 5. else 두 피연산자를 모두 숫자로 바꿔 비교
 */

 console.log(3+true); // 타입강제 => 따라서 평가 순서가 중요함
 
 /**
  * 연산과정
  * 1. 두 피연산자를 원시값으로 변형
  * 2. 둘 중 하나가 문자열이면 다른 하나도 문자열로 변환하여 합친 결과를 반환
  * 3. else 두 피연산자를 숫자로 변환하여 더한 결과를 반환
  */
