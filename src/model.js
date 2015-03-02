
/*
  Dependencies
 */

var Store = require('datastore')
var mixin = require('lodash/utility/mixin')

function Model() {
    Store.call(this)
}

mixin(Model.prototype, Store.prototype)

/**
 * Public API
 */

/*
Model.prototype.save = function () {
    var promise = Promise()

    Jax.update(this._remote.path() + this._path())
        .data()
        .done(function (err, save) {
            if(err) {
                promise.reject(err)
            } else {
                promise.resolve(save)
            }
        })

    return promise
}
Can now do this: .save().then().fail()
*/


/**
 *  Private API
 */

module.exports = Model