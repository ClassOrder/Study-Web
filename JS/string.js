/**
 * 문자열 리터럴 이스케이프를 활용한 행 이어짐
 */
var str = 'written \
over \
multiple \
lines';
console.log(str);
/* 유용하게 쓸 수 있을 것 같다. */


/**
 * 비교연산자를 통한 문자열 비교는 대소문자를 구분하여 비교하는데 상식적인 결과값과는 조금 다르게 나온다.
 * 추측..을 해보면 아스키코드 값으로 비교를 하는게 아닐까? 라는 생각이 드는데.. 어쨌든 다르게 나온다.
 * String.prototype.localeCompare(x) 는 좀더 정확하게 나오지만 지원하지 않는 환경도 있다.
 * toUpperCase()를 활용해서 대소문자를 맞춘 다음 비교연산자를 통해 비교하는 것도 괜찮을 것 같고..
 * 상황에 맞춰 비교활용을 사용해야 할 것 같다.
 */


 /* 문자열을 병합하는 방법 */
 var arr = [];
 arr.push('Say Hello ');
 arr.push('7');
 arr.push(' times fast.');
 
 console.log(arr.join(''));


 /**
  * split()은 정규표현식과 함께 쓸 때 더욱 더 강력해진다.
  */

/**
* slice()와 substring()은 비슷한 처리를 하지만 slice()는 음수 위치도 처리할 수 있고, 브라우저 구현도 더 일관적.
*/
console.log('-------------------br--------------------');

const abc = '\r\nabc \t';
console.log(abc);
console.log(abc.trim());

console.log(abc.concat('World!'));
console.log(abc.trim().concat(' World!'));
// indexOf() 앞에서 찾기
// lastIndexOf() 뒤에서 찾기
/**
 * 정규표현식을 활용해서 index 찾기 =>
 * String.prototype.search(regexp)
 * String.prototype.match(regexp)
 */

 function replaceRef(x) {
     return '(' + x.toUpperCase() + ')';
 }
 console.log('axbbyyxaaa'.replace(/a+|y+/g, replaceRef));

