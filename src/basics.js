let liz = {
  name: 'liz',
  age: 32,
  location: { city: 'portland', state: 'oregon' },
  pets: [{ type: 'cat', name: 'redux' }],
};

let newliz = {
  ...liz,
  age: 43,
  pets: [...liz.pets],
};

console.log(liz.age);
console.log(newliz.age);
console.log(liz.pets === newliz.pets);
console.log(liz.pets);
console.log(newliz.pets);

let a = [2, 3, 4, 5];
let newitem = 1;
let b = [newitem, ...a];
console.log(b);
