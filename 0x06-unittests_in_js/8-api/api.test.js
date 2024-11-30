const { expect } = require("chai");
const request = require("request");

describe('index', () => {
  const API_URL = 'http://localhost:7865';

  it('...', (done) => {
    request.get(`${API_URL}`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
