'use strict';
/**
 * 값을 boolean으로 바꾸는 방법
 */
const boolChecker = function(value) {
    let parsingBoolValue = Boolean(value);
    console.log(parsingBoolValue);
}

boolChecker(undefined); // false
boolChecker(null); // false
boolChecker(0); // false
boolChecker(1); // true
boolChecker(2); // true
boolChecker(''); // false
boolChecker('abc'); // true
boolChecker('false'); // true

console.log('--------------------------------');

const boolCheckerDouble = function(value) {
    let parsingBoolValue = !!value;
    console.log(parsingBoolValue);
}

boolCheckerDouble(undefined); // false
boolCheckerDouble(null); // false
boolCheckerDouble(0); // false
boolCheckerDouble(1); // true
boolCheckerDouble(2); // true
boolCheckerDouble(''); // false
boolCheckerDouble('abc'); // true
boolCheckerDouble('false'); // true

console.log('--------------------------------');

const boolCheckerTriple = function(value) {
    let parsingBoolValue = value?true:false;
    console.log(parsingBoolValue);
}

// 체크 안함.
