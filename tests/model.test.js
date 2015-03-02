
describe('Model', function() {

	it('get and set should proxy to the datastore instance', function () {
		window.user = new Model()

		expect(user.set('name', 'Agon').get('name')).to.equal('Agon')
		expect(user.get('test')).to.be.undefined
	})

})
