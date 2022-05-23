var _ = require('lodash');
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

console.log(_.find(users,{'user': 'pebbles'}));
console.log(_.find(users, function(o) { return o.user = 'fred'}));
console.log(_.find(users,{ 'age': 1, 'active': true }));
