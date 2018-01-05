var EPSILON = Math.pow(2, -53);
function epsEqu(x, y) {
    return Math.abs(x - y) < EPSILON;
}
// 반올림 에러의 상계는 2^-53 이므로 그 뒤 값보다 작다면 true로 보내주고, 더 크다면 오류가 있는 것으로 판단하는 것 같다.

console.log(epsEqu(0.1 + 0.2, 0.3));
