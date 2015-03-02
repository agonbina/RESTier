/**
 * Dependencies
 */

var Resource = require('./resource')
var result = require('lodash/object/result')


/**
 * Remote Store definition
 * @param config
 * @constructor
 */

function Store(config) {
    this.host = result(config, 'host', 'localhost')
    this.namespace = result(config, 'namespace', '')
    this.resources = {}

    var resources = Object.keys(config.resources)

    resources.forEach(function (name) {
        var definition = config.resources[name]

        console.log(definition)
    })
}

module.exports = Store