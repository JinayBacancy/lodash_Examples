var _ = require('lodash')

function square(n) {
    return n * n;
  }

console.log(_.map([4,2], square));

console.log(_.map({'a': 2, 'b': 4}, square));

var users = [
    { 'user': 'barney', 'mail': 'mal@gmail.com' },
    { 'user': 'fred' },
    { 'mail': 'jin@gmail.com' },
  ];

console.log(_.map(users, 'user'));

console.log()