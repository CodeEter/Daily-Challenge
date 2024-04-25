let json = '{"name":"John","age":30}';

let user = JSON.parse(json);

console.log(user.name);
console.log(user.age);

console.log(typeof user.name);
console.log(typeof user.age);