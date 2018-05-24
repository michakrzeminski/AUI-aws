var expect  = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", function() {

  describe("Main page", function() {

    var url = "http://localhost:3000/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the correct string", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("Ready to receive requests");
        done();
      });
    });

  });

  describe("Get all users", function() {
    var url = "http://localhost:3000/users";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

});