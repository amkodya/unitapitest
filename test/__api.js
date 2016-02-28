// var expect = require('expect');
// var server = require('../src/server.js');
var request = require('supertest');

describe('API', function() {
	var server;

	beforeEach(function (){
		server = require('../src/server.js');
	});

	afterEach(function() {
		server.close();
	});

	it('/ should return specified object.', function testHealth(done) {
		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { hello: "world"} ,done);
	});

	it('/ should return specific object. healthy:true.', function testHealth(done) {
		request(server)
			.get('/api/status')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { healthy: true} ,done);

	});

		it('/user/id should return a user obj with id', function testHealth(done) {
			var fakeUserID = 347;
			request(server)
			.get('/api/user/' + fakeUserID)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { user: {id: 347}} ,done);

	});


});



/* var assert = require('assert');
describe('Array', function() {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal("daisy", [1,"daisy",3].indexOf(1));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});

*/