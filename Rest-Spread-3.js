const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

const { id, firstName, lastName, age } = person
const personInfo = { firstName, lastName, age };

// console.log(id, personInfo);
console.log(id, { ...personInfo });
