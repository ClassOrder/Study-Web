/**
* MDN Function.prototype.bind() 항목
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
* */

this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x }
}

console.log(module.getX());
// module에서는 this.x가 가리키는 것이 module 내에 존재하는 x이므로 81

var retrieve = module.getX;
retrieve();
/** 
* retrieve 변수에는 현재 retrive = function() { return this.x } 가 들어가져 있는 상태.
* 이런 경우 여기에서 가리키는 this.x 는 module 내부에 있는 x가 아닌 전역으로 설정되어 있는 this.x를 가리킴
* 따라서 결과값은 9가 나오게 됨.
* */

// 따라서 이를 방지하고 싶을 경우 bind()함수를 사용하여 객체를 넣어줘서 그 객체 내에 존재하는 값을 가리키도록 해야함
var boundGetX = retrieve.bind(module);
boundGetX();
// 81의 결과값이 나옴.

/**
* 좀더 첨언을 해보자면,
* 굳이 모듈이 아니더라도
* */
