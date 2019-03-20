const toolkits = require('./toolkits');
const ListOperator = require('./list-op');

module.exports = {
    ...toolkits,
    create: (path, option = {}) => new ListOperator(path, option),
};