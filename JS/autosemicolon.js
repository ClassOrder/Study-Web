(function() {
    return
    {
        name: 'John'
    }
}());

(function() {
    // Do not do this.
    return
    {
        name: 'John'
    };
}());