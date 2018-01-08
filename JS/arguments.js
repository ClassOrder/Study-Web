/**
 * arguments는 특별한 변수이다.
 * 자바스크립트에서는 함수를 호출할 때 매개변수를 자유롭게 쓸 수 있다.
 * 그리고 그 매개변수는 '모두' arguments에 담기게 된다.
 * 얼핏 보기에 arguments는 매개변수들을 담은 배열처럼 보일 수 있지만,
 * 배열 메소드는 하나도 없는 특별한 변수이다.
 */

 function args() {
     return arguments;
 }
 var ar = args('one', 'two', 'three');
 console.log(ar.length);

 /**
  * arguments를 활용한 자릿수 강제하기
  */

function pair(x, y){
    if(arguments.length !== 2) throw new Error('Need exactly 2 arguments');
}

pair(10);

/**
* 반대로 arguments를 활용한 매개변수의 수와 관계없이 활용하기
*/

function logArgs() {
    for(var i=0; i < arguments.length; i++){
        console.log(i +'. ' + arguments[i]);
    }
}

logArgs('Hello', 'Worlds', 'I\'m', 'here!');

/**
 * 엄격하지 않은 모드에서는 arguments와 매개변수가 연결이라도 되어있는듯이
 * 매개변수의 값이 바뀌면 arguments의 값이 바뀌는 기묘한 상황이 발생한다.
 * 엄격한 모드에서는 당연스럽게 바뀌지 않는다.
 */

function sloppyFunc(param){
    param = 'changed';
    return arguments[0];
}
console.log('None-Strict Mode: ' + sloppyFunc('value'));

function strictFunc(param) {
    'use strict';
    param = 'changed';
    return arguments[0];
}
console.log('Strict Mode: ' + strictFunc('value'));
