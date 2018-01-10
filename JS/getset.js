"use strict";

var obj = {
    get foo() {
        return "getter";
    },
    set foo(value) {
        console.log("setter: " + value);
    }
};

obj.foo = "blablabla";
console.log(obj.foo);

var something = {
    name: "something",
    age: 12,
    get getAge() {
        return this.age;
    },
    set setAge(value) {
        this.age = value
    },
    get getName() {
        return this.name;
    },
    set setName(value) {
        this.name = value;
    }
}
/** 당연하게도 프로퍼티 명들이 겹치면 안된다. set get var 들끼리조차도. */
console.log(something.getAge);
something.setAge = 15;
console.log(something.getAge);
something.age = 16;
console.log(something.getAge);

var otherthing = {
    _age: 10, // private 에 대한 약속이기는 한데 건드리기가 너무 쉬워서 이건 .. 어떻게? private을 만들 수 있는 방법이 없을려나.. 
    get age() {
        return this._age;
    },
    set age(value){
        this._age = value;
    }
}
console.log(otherthing.age);
console.log(otherthing.age = 15);
console.log(otherthing.age);

var obj2 = Object.create(
    Object.prototype, {
        foo: {
            get: function() {
                return "getter";
            },
            set: function(value) {
                console.log("setter: " + value);
            }
        }
    }
);

console.log(obj2.foo);

var proto = { get foo() { return "hello" }};
var obj = Object.create(proto);
console.log(obj.foo);
