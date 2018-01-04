'use strict';
/**
 * void 연산자는 내용물을 평가하고 undefined를 반환한다.
 */

var x = 3;
console.log(x);
void(x = 5);
console.log(x);

/**
 * javascript:void window.open("http://example.com/")
 * 북마클릿에서 새 창을 열면서 현재 표시된 콘텐츠를 바꾸지 말아야 할 경우에 사용
 */

/**
 * void를 접두사로 활용하여 IIFE를 바로 활용할 수 있음.
 * 이 때의 이점은 닫는 괄호에 대한 헷갈리는 일이 없다는 점.
 * 잘 활용하면 좋긴 하겠는데, 오히려 다른 사람이 읽을 때는 헷갈릴려나?
 */

 void function() {
     console.log('void function() IIFE active..');
 }();
