//Как мы знаем из главы Типы данных, в JavaScript существует 8 типов данных. Семь из них называются «примитивными», так как содержат только одно значение (будь то строка, число или что-то другое).

//Объекты же используются для хранения коллекций различных значений и более сложных сущностей. 

//empty object
let user=new Object();
let user1={};

//object with properties
let user2={
	name:"John",
  age:15,
  isAdmin:true
};
console.log(user2.name);
console.log(user2.age);
delete user2.isAdmin;

//if object is const,we cant declare smth new,but we can change the propertis

user2.age=30;//ok
console.log(user2[name]);//kam senc dimum anel

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...other props
  };
}

//stugum ka et propoy te che
let user3 = { name: "John", age: 30 };

console.log( "age" in user ); // true, user.age существует
console.log( "blabla" in user ); // false, user.blabla не существует

let user4 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user4) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}