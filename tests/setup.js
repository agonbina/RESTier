
expect = chai.expect;
chai.use(require('sinon-chai'));

/**
 * Load dependencies globally
 */

datastore = require('datastore')
Store = require('../src/store')
Model = require('../src/model')
Resource = require('../src/resource')


/**
 * Load tests
 */

require('./store.test')
require('./model.test')
require('./resource.test')