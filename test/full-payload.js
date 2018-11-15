/* global describe it */
const { expect } = require('chai')
const { encode } = require('../index')

describe('Given specification example parameters', () => {
  it('should encode example payload', () => {
    const payload = encode({
      temperature: 27,
      uplinkFrameCounter: 32,
      downlinkFrameCounter: 32,
      rssi: 82,
      snr: 7
    })
    expect(payload.toString('hex')).to.equal('ad1b000000000000000000202000005207')
  })
})
