
describe('Store', function () {

    it('should parse resource definitions', function () {
        var config = {
            namespace: '/api/v0',

            resources: {
                rooms: {
                    path: '/rooms'
                },
                cars: {
                    namespace: '/api/v1',
                    path: '/cars'
                }
            }
        }

        var store = new Store(config)
        console.log(store)
    })

})