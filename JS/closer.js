function closerTest(test){
    return function() {
        test++;
        return test;
    }
}

var test = closerTest(10);
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
