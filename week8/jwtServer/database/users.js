/**
 * id->primary key(auto increment)
 * email->unique key
 */
const users = [
    { id: 1, email: 'test@test', password: '1234'},
    { id: 2, email: 'test2@test2', password: '12345'},
];

module.exports = users;