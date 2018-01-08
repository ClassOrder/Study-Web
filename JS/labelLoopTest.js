void function findLabelTest() {
    loop: {
        for(var i = 0; i < 10; i++) {
            for( var k = 0; k < 5; k++) {
                console.log( 'Label Test i: ' + i + ', k: ' + k );
                if( i == 5 && k == 3 ) {
                    console.log('강제로 멈추고, Loop 레이블 빠져나가기');
                    break loop;
                }
            }
        }
    }
}();

// break만 걸려있다면 i == 5, k == 3일 때에 내부 반복문만 멈추고 외부 반복문은 계속 돌겠지만,
// break loop; 형태로 레이블을 빠져나가게끔 설정되어 있다면, i == 5, k == 3 일 때에 멈추고 더이상 작동하지 않아야 한다.
