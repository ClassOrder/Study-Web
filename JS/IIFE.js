(function() {
    var test = 10;
    console.log(test);
}());
/**
 * Immediately Invoked Function Expression
 *     즉시     표현하는     함수      표현식
 * IIFE 이피
 */

// IIFE의 경우 test 변수가 전역으로 생성되지 않음을 확인해볼 수 있다.
// 현재 스코프에 생성되지 않게 하려면 IIFE 패턴을 쓰면 된다.

var File = function() {
    var UNTITLED = 'Untitled';
    function File(name) {
        this.name = name || UNTITLED;
    }
    return File;
}();

var x = 23;

(function (twice) {
    console.log(twice);
}(x * 2));
