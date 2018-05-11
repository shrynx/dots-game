const base = require('../.eslintrc');

const withCypress = base;
withCypress.extends.splice(1, 5);
withCypress.plugins.push('cypress');
withCypress.env = { 'cypress/globals': true };

module.exports = withCypress;
