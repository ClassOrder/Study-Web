var es5 = function ( one, two ) {
    console.log(this);
    return one + two;
}

var sum = es5( 1, 2 );
console.log( sum );

var es6 = ( one, two ) => {
    console.log(this);
    return one + two;
};
let result = es6( 1, 2 );
console.log( result );

// What is the different between this of es5(function) and es6(arrow function)?