const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('...', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');
    const result = sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledWith('The total is: 10')).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.returned(10)).to.be.true;
    expect(result).to.equal(10);

    logSpy.restore();
    stub.restore();
  });
});

