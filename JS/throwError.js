// 나쁜 예외 출력
if ( somethingBadHappened ) {
    throw 'Somthing bad..';
}

// 좋은 예외 출력: 내장된 Error() 생성자 사용
if ( somethingBadHappened ) {
    throw new Error('Somthing bad happened..');
}
