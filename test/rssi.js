/* global describe it */
const { expect } = require('chai')
const encodeUplinkCounter = require('../lib/encode-rssi')

describe('With RSSI 82', () => {
  it('should encode 0x52 hexadecimal value in RSSI byte', () => {
    const payload = encodeUplinkCounter(82)

    expect(payload.toString('hex')).to.equal('52')
  })
})
