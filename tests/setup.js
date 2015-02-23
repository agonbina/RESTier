
expect = chai.expect;
chai.use(require('sinon-chai'));

/**
 * Load dependencies globally
 */

model = require('../src/model')


/**
 * Load tests
 */

require('./model.test')
//require('./collection.test')