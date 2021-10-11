

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = '';
let movie = '';
let book = '';
let sport = '';
let food = '';
let animal = '';
let toy = '';

rl.question('What is your special nickname? ', (answer) => {
  name = answer;
  rl.question('What is your favourite movie? ', (answer) => {
    movie = answer;
    rl.question('What is your favourite book? ', (answer) => {
      book = answer;
      rl.question('What is your favourite sport? ', (answer) => {
        sport = answer;
        rl.question('What is your favourite food? ', (answer) => {
          food = answer;
          rl.question('What is your favourite animal? ', (answer) => {
            animal = answer;
            rl.question('What is your favourite toy? ', (answer) => {
              toy = answer;
              console.log(`${name} loves eating ${food} while watching ${movie}, reading ${book} or playing with ${toy}. He\'s really good at ${sport} and wishes he could have a ${animal} as a pet!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});




