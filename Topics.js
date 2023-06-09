const fs = require('fs');

// class Topic {
//   constructor(args = {}) {
//     this.question = args.question;
//     this.answer = args.answer;
//   }
// }

const nighthawkArr = fs
  .readFileSync(`${__dirname}/topics/nighthawk_flashcard_data.txt`, 'utf-8')
  .split('\n\n');
const nighthawk = [];
for (let i = 0; i < nighthawkArr.length; i += 1) {
  nighthawk.push(nighthawkArr[i].trim().split('\n'));
}

const otterArr = fs
  .readFileSync(`${__dirname}/topics/otter_flashcard_data.txt`, 'utf-8')
  .split('\n\n');
const otter = [];
for (let i = 0; i < otterArr.length; i += 1) {
  otter.push(otterArr[i].trim().split('\n'));
}

const raccoonArr = fs
  .readFileSync(`${__dirname}/topics/raccoon_flashcard_data.txt`, 'utf-8')
  .split('\n\n');
const raccoon = [];
for (let i = 0; i < raccoonArr.length; i += 1) {
  raccoon.push(raccoonArr[i].trim().split('\n'));
}

const slangArr = fs
  .readFileSync(`${__dirname}/topics/slang.txt`, 'utf-8')
  .split('\n\n');
const slang = [];
for (let i = 0; i < slangArr.length; i += 1) {
  slang.push(slangArr[i].trim().split('\n'));
}

const assortyArr = fs
  .readFileSync(`${__dirname}/topics/assort.txt`, 'utf-8')
  .split('\n\n');
const assorty = [];
for (let i = 0; i < assortyArr.length; i += 1) {
  assorty.push(assortyArr[i].trim().split('\n'));
}

//console.log(nighthawk, otter, raccoon);

module.exports = { nighthawk, otter, raccoon, slang, assorty };
