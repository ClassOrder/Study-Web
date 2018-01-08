// 나쁜 예외 출력
if ( somethingBadHappened ) {
    throw 'Somthing bad..';
}

// 좋은 예외 출력: 내장된 Error() 생성자 사용
if ( somethingBadHappened ) {
    throw new Error('Somthing bad happened..');
}


/**
* try-catch-finally
* try에 return 문이 있을 경우 finally 블록은 그 함수나 메서드를 떠나기 '바로 직전'에 실행됩니다.
*/
