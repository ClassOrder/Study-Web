'use strict';
var emrys = {
    name: 'emrys',
    describe: function() {
        return 'He named ' + this.name;
    }
};

console.log(emrys.name);
console.log(emrys.name = 'John');
emrys.newProp = 'Jace';
console.log(emrys.describe());

console.log('newProp' in emrys);
delete emrys.newProp;
console.log('newProp' in emrys);