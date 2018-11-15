/* global describe it */
const { expect } = require('chai')
const encodeUplinkCounter = require('../lib/encode-uplink-counter')

describe('With uplink frame counter 32', () => {
  it('should encode 0x20 uplink frame counter in uplink frame counter byte', () => {
    const payload = encodeUplinkCounter(32)

    expect(payload.toString('hex')).to.equal('20')
  })
})
