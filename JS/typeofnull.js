'use strict';
/**
 * typeof의 사용시 주의해야할 점은
 * typeof null 의 결과값이다.
 */

console.log(typeof null);
console.log('-------------------');
/**
 * 결과값이 object로 나오는 것을 알 수 있다.
 * 이는 매우 불행한 일이다.
 * null은 내부 객체 타입의 멤버가 아니다.
 * null에 항상 주의해야 한다... null의 지옥...
 */

/**
 * 객체인지 확인하는 함수
 */
function isObject(value) {
    return (value !== null && (typeof value === 'object' || typeof value === 'function'));
}

console.log(isObject(123)); // 객체가 아닌 원시값이므로 false
console.log(isObject(null)); // null 값이므로 false
console.log(isObject({})); // 객체이므로 true

function isObjectExceptNull(value) {
    return (typeof value === 'object' || typeof value === 'function');
}
console.log('-----------');
console.log(isObjectExceptNull(null)); // null 임에도 object로 체크가 되어 객체로 착각해서 나오는 상황 결과: true
