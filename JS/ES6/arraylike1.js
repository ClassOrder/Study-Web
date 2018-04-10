let values = { 0: "zero", 1: "one", 2: "two", length: 3 };
for ( let key in values ) {
    console.log( key, ":", values[key] );
}
for ( let k = 0; k < values.length; k++ ) {
    console.log( values[k] );
}