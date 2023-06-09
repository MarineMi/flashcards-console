const readlineSync = require('readline-sync');
const { nighthawk, otter, raccoon, slang, assorty } = require('./Topics');
const User = require('./User');

const newUser = new User();
let theme;

function registrateUser() {
  console.clear();

  newUser.name = readlineSync.question('Введите своё имя: ');

  console.clear();

  let chosenTheme = readlineSync.question(
    `Здравствуйте, ${newUser.name}! Выберите номер темы:

    1. Nighthawk
    2. Otter
    3. Raccoon
    4. Slang
    5. Assorty

    `
  );

  console.clear();

  switch (chosenTheme) {
    case '1':
      chosenTheme = nighthawk;
      break;

    case '2':
      chosenTheme = otter;
      break;

    case '3':
      chosenTheme = raccoon;
      break;

    case '4':
      chosenTheme = slang;
      break;
      
    case '5':
      chosenTheme = assorty;
      break;

    default:
      console.log(`Темы под номером "${chosenTheme}" не существует!`);
      setTimeout(registrateUser, 4000);
      setTimeout(console.log, 1000, 'Возврат в главное меню через 3 секунды.');
      setTimeout(console.log, 2000, 'Возврат в главное меню через 2 секунды.');
      setTimeout(console.log, 3000, 'Возврат в главное меню через 1 секунду.');
      break;
  }

  theme = chosenTheme;
}

registrateUser();

module.exports = { theme, newUser };
