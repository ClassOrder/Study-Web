"use strict";

var obj = {};
console.log(obj.__proto__ === Object.prototype);

obj.__proto__ = Array.prototype
console.log(Object.getPrototypeOf(obj) === Array.prototype)

/* 엔진에서 __proto__를 지원하고 있는지의 여부 */
console.log(Object.getPrototypeOf({ __proto__: null }) === null);
