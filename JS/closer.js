function closerTest(number){
    return function() {
        number++;
        return number;
    }
}

var test = closerTest(10);
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());

/**
 * 클로저는 외부 변수의 연결이 그대로 유지되어 있는 상태를 가진다.
 * 따라서 test()를 새로 시작했다 하더라도 test의 함수인 closerTest(10);
 * 이 실행되는 것이 아니라,
 * 기존에 가지고 있는 함수 내부에 있는 number와 외부에 연결되어 수치가 계속 증가하게 된다.
 * 
 * 이 부분이 좀 이해가 안가는데 .. 
 * var test 라인에서 closerTest(10)이 이미 동작되어 버린 후에 이미 결과가 리턴되어
 * test() = function() { number++; return number; }
 * 가 되는 것일까?
 * 만약 그렇다고 한다면
 * console.log(function() { number++; return number; });
 * 가 되므로 number가 마치 전역변수인 것마냥 행세를 해버리게 되어 외부변수와 연결되어져서 행동할 수도 있을 것 같다.
 * 
 * 하지만.. 확실하지가 않다. 오히려 아닐 것 같다는 생각이 더 드는데. 좀더 찾아봐야겠다.
 * */