/**
 * 옵션 매개변수에 대한 일반적인 패턴입니다.
 */
function pair(x, y) {
    x = x || -1;
    y = y || -1;
    return [x, y];
}
console.log(pair());