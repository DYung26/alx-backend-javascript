const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token")

describe('getPaymentTokenFromAPI', function (done) {
  it('...', async function () {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.be.an('object');
        expect(res).to.deep.equal(
          {
	    data: 'Successful response from the API'
          }
        );
	done();
      })
      .catch((err) => done(err));
  });
});
