/* global describe it */
const { expect } = require('chai')
const encodeUplinkCounter = require('../lib/encode-downlink-counter')

describe('With downlink frame counter 32', () => {
  it('should encode 0x20 downlink frame counter in downlink frame counter byte', () => {
    const payload = encodeUplinkCounter(32)

    expect(payload.toString('hex')).to.equal('20')
  })
})
