'use strict';
/**
 * typeof의 사용시 주의해야할 점은
 * typeof null 의 결과값이다.
 */

 console.log(typeof null);

/**
 * 결과값이 object로 나오는 것을 알 수 있다.
 * 이는 매우 불행한 일이다.
 * null은 내부 객체 타입의 멤버가 아니다.
 * null에 항상 주의해야 한다... null의 지옥...
 */
