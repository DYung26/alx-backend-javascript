const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('...', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const result = sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.returned(120)).to.be.true;
    expect(result).to.equal(120);

    spy.restore();
  });
});
