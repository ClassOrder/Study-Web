let arrayObj = [1, 2];
let iteratorObj = arrayObj[Symbol.iterator]();
console.log("1: ", typeof iteratorObj);

console.log("2: ", iteratorObj.next());
console.log("3: ", iteratorObj.next());
console.log("4: ", iteratorObj.next());
console.log("5: ", iteratorObj.next());

/* iterator를 활용하는 것은 for문으로 반복처리하는 것과는 그 목적과 활용이 다른 것에 주의해야 합니다. */