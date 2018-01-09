function compare(x, y) {
    switch(true) {
        case x > y: return -1;
        case x === y: return 0;
        default: return 1;
    }
}

console.log(compare(2, 1));

// 일반적으로 이쪽이 더 명확하므로 이쪽을 쓰는 방향이 좋다라고 교재에서 이야기 하고 있다.
// 음.. 그런데 switch의 절약성을 고려한다면... 상황에 따라 switch를 쓰는 것도 좋을 것 같긴 한데.. 그냥 추측.
function ifCompare(x, y) {
    if( x < y ) {
        return -1;
    } else if ( x === y ) {
        return 0;
    } else {
        return 1;
    }
}
