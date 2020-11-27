const { fake } = require('faker');
var faker = require('faker');

var database = { tickets: [] };

for (var i = 1; i<= 300; i++) {
  database.tickets.push({
    id: faker.git.commitSha(),
    name: faker.commerce.productAdjective(),
    ticket: faker.random.words(),
    description: faker.lorem.sentences()
  });
}

console.log(JSON.stringify(database));