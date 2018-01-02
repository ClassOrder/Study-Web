// 가능
function foo(){
    bar();
    function bar(){
        console.log('foo');
    }
}

// 불가능
function impFoo() {
    bar();
    var bar = function() {
        console.log('foo');
    }
}

foo();
impFoo();
/**
 * 에러가 나는 이유는..
 * 자바스크립트는 해당 스코프에서 함수 선언을 가장 먼저 처리하는데,
 * 이런 특징을 HOISTING이라고 한다.
 * 함수를 선언하기 전에 참조를 할 수 있게 해준다.
 * 
 * var의 선언은 호이스팅되지만, 할당의 경우에는 그렇지 않다.
 * 따라서 impFoo()의 bar는 undifined 상태에서 실행이 되고,
 * 함수가 아니라는 출력이 나오게 된다.
 */