const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");
const Sinon = require("sinon");


describe('...', function () {
  let logSpy;

  beforeEach(function () {
    logSpy = Sinon.spy(console, 'log');
  });

  afterEach(function () {
     logSpy.restore();
  });

  it('...', function () {
    sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  })

  it('...', function () {
    sendPaymentRequestToApi(10, 10);

    expect(logSpy.calledWith('The total is: 20')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  })
})
