let get = ( one, ...rest ) => {
    console.log( one );
    console.log( rest );
}
get( ...[1, 2, 3] );