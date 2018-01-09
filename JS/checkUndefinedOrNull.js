'use strict';

var x = 'some value';

/**
 * 이 변수 x가 undefined인지 null인지 체크하는 경우
 */

if (x != null) {
    console.log('간결하지만 혼란스러운 방법: 추천하지 않는 방법');
}

if(x) {
    console.log('표준 방법')
}

if(x !== undefined && x !== null) {
    console.log('정밀하게 하기위해 두 값을 명시적으로 체크하는 방법');
}
