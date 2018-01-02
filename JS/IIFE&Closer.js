'use strict';
var result = [];
for(var i=0; i<5; i++){
    result.push(function(){
        return i
    });
}
console.log(result[1]());
console.log(result[3]());


/**
 * 해석을 해보자.
 * 현재 for문은 콘솔로그가 돌아가기 전에 이미 돌아가 있다.
 * 여기에서 문제는 for문의 i가 어떤 식으로 들어갈 것인지를 알아야 한다는 것이다.
 * 
 * for문이 돌아기고 있을 때,
 * result에는 function(){return i} 가 for문 만큼 들어가게 된다.
 * 이때 return i가 들어가는지 i의 주소가 가리키고 있는 값 0, 1, 2, 3, 4가 들어가는지?
 * 
 * 결론부터 말하면 result 에는 function() { return i } 가 들어 있게 된다.
 * 그렇게 때문에 for문으로 구성되어진
 * result = [
 *      function() { return i },
 *      function() { return i },
 *      function() { return i },
 *      function() { return i },
 *      function() { return i }
 * ]
 * 의 형태로 들어가져 있다.
 * 이 때 클로저는 외부 변수와의 연결을 계속 유지하고 있게 되는데,
 * 이런 부분 때문에 i는 최종값인 5가 되고,
 * 어느 배열 위치를 부르던 5값만이 리턴되게 된다.
 * 
 * 특히 이 문제는 선언을 할 때 지정하는 var의 속성과 관련이 있다.
 * var는 자바스크립트에서 미치광이처럼 날뛰는 형태인 것 같다..
 * 
 * 우선 교재 상으로 이 문제를 해결하는 방법을 본다면 다음과 같다.
 */

result = [];
for(var k=0; k<5; k++){
    (function() {
        var i2= k;
        result.push(function() { return i2 });
    }());
}
console.log(result[1]());
console.log(result[3]());

/**
 * 위의 방법은 CLOSER와 IIFE를 활용하여 만든 구성이다.
 * 
 * 또 다른 방법을 확인해보자.
 * 앞서 이야기했든 var는 미치광이처럼 날뛰는 친구이기 때문에,
 * var 대신 let이라는 친구를 활용해서 작동시키면,
 * 좀 더 직관적인 코드를 구성할 수 있다.
 * var는 호이스팅이 되어버리면서도 전역으로도 설정되기도 하는 알 수 없는 친구지만,
 * let은 호이스팅을 거부하며, Java 등에서 볼 수 있는 일반적인 규칙을 따르는 친구다.
 * let을 쓰는게 더 좋을 것 같은데, let을 쓰면 어떤 문제점이 있을지는 다음에 찾아보자.
 */

result = [];
for(let p=0; p<5; p++){
    result.push(function() { return p });
};

console.log(result[1]());
console.log(result[3]());
