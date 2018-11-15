/* global describe it */
const { expect } = require('chai')
const encodeSnr = require('../lib/encode-snr')

describe('With SNR 7db', () => {
  it('should encode 0x07 hexadecimal value in SNR byte', () => {
    const payload = encodeSnr(7)

    expect(payload.toString('hex')).to.equal('07')
  })
})
