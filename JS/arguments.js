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

function logArgs() {
    for(var i=0; i < arguments.length; i++){
        console.log(i +'. ' + arguments[i]);
    }
}

logArgs('Hello', 'Worlds', 'I\'m', 'here!');
