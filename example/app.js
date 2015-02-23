var domReady = require('domready')
var request = require('..')

domReady(function () {

    Jax.get('https://reddit.com/r/startups.json').done(function (err, res) {
        if(err) {
            return console.log(err)
        } else {
            console.log(res)
        }
    })

})