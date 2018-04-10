let one = [11, 12];
let two = [21, 22];
let spreadObj = [51, ...one, 52, ...two];
let notSpreadObj = [51, one, 52, two];
console.log(spreadObj);
console.log(spreadObj.length);
console.log(notSpreadObj);
console.log(notSpreadObj.length);