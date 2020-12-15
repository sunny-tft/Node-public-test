const convict = require('convict');
// Define schema
var config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV',
  },
  db: {
    url: '',
    password: '',
    username: '',
  },
});
// Load environment dependent configuration
var env = config.get('env');
config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({ allowed: 'strict' });
module.exports = config;
