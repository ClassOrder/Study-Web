function getDefiningObject(obj, propKey) {
    obj = Object(obj);
    while(obj && !{}.hasOwnProperty.call(obj, propKey)) {
        obj = Object.getPrototypeOf(obj);
    }
    return obj;
}

var proto = { foo: 'a' };

var obj = Object.create(proto);
console.log("obj.foo: " + obj.foo);
console.log("obj는 \"foo\" prop가 있는가? " + obj.hasOwnProperty('foo'));

obj.foo = 'b';
console.log("obj.foo: " + obj.foo);
console.log("obj는 \"foo\" prop가 있는가? " + obj.hasOwnProperty('foo'));
console.log("proto.foo: " + proto.foo);

console.log("obj.foo prop 제거: " + delete obj.foo);
console.log("obj.foo: " + obj.foo);

console.log("obj의 소유 객체 프로퍼티 찾고 변경: " + delete getDefiningObject(obj, 'foo').foo);
console.log("obj.foo: " + obj.foo);
console.log("proto.foo: " + proto.foo);
// 소유 객체의 프로퍼티 자체를 삭제하는 것을 알 수 있다.
