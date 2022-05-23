var _ = require('lodash');
var val = {
    a : 'abc',
    b : 'pqr',
};
console.log(_.isEmpty(null));
console.log(_.isEmpty(undefined));
console.log(_.isEmpty([2,4,1]));
console.log(_.isEmpty(0));
console.log(_.isEmpty(val));