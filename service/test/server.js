var expect  = require("chai").expect;
var request = require("request");

describe("Test microJS service", function() {

  describe("Get one user", function() {

    var url = "http://dp9grg7o4cfej.cloudfront.net/users/3";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the correct string", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal(JSON.stringify({"id":3,"username":"grzegorz","name":"Grzegorz Przytula","bio":"WUT Student, DevOps"}));
        done();
      });
    });

  });

  describe("Get all users", function() {
    var url = "http://dp9grg7o4cfej.cloudfront.net/users";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

});