/* global describe it */
const { expect } = require('chai')
const encodeTemperature = require('../lib/encode-temperature')

describe('With 27 degree temperature triggered by pressing pushbutton 1', () => {
  it('should encode temperature in temperature byte', () => {
    const payload = encodeTemperature(27)

    expect(payload.toString('hex')).to.equal('1b')
  })
})

describe('With -12 degree temperature triggered by pressing pushbutton 1', () => {
  it('should encode temperature in temperature byte', () => {
    const payload = encodeTemperature(-12)

    expect(payload.toString('hex')).to.equal('f4')
  })
})
