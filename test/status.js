/* global describe it */
const { expect } = require('chai')
const encodeStatus = require('../lib/encode-status')

describe('With temperature value triggered by pressing pushbutton 1', () => {
  it('should encode temperature in status byte', () => {
    const payload = encodeStatus({ temperature: 30 })

    expect(payload.toString('hex')).to.equal('a0')
  })
})
