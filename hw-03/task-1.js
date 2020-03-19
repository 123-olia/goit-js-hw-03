/*
Задание 1
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате 
ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addMood(value) {
    this.mood = value;
  },
  changeHobby(value) {
    this.hobby = value;
  },
  changePremium(value) {
    this.premium = value;
  },

  getInform() {
    const keys = Object.keys(user);

    for (const key of keys) {
      console.log(`${key}`, user[key]);
    }
  },
};

user.addMood('happy');
user.changeHobby('skydiving');
user.changePremium(false);

console.log(user.getInform(user));
console.table(user);
