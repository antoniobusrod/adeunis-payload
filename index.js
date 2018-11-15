const encodeStatus = require('./lib/encode-status')
const encodeTemperature = require('./lib/encode-temperature')
const encodeUplinkFrameCounter = require('./lib/encode-uplink-counter')
const encodeDownlinkFrameCounter = require('./lib/encode-downlink-counter')
const encodeRssi = require('./lib/encode-rssi')
const encodeSnr = require('./lib/encode-snr')
const { isDefined } = require('./lib/util')

const encodePayloadValues = [{
  key: 'temperature',
  encode: encodeTemperature,
  fallback: Buffer.alloc(1)
}, {
  key: 'gpsLatitude',
  encode: null,
  fallback: Buffer.alloc(4)
}, {
  key: 'gpsLongitude',
  encode: null,
  fallback: Buffer.alloc(4)
}, {
  key: 'gpsQuality',
  encode: null,
  fallback: Buffer.alloc(1)
}, {
  key: 'uplinkFrameCounter',
  encode: encodeUplinkFrameCounter,
  fallback: Buffer.alloc(1)
}, {
  key: 'downlinkFrameCounter',
  encode: encodeDownlinkFrameCounter,
  fallback: Buffer.alloc(1)
}, {
  key: 'battery',
  encode: null,
  fallback: Buffer.alloc(2)
}, {
  key: 'rssi',
  encode: encodeRssi,
  fallback: Buffer.alloc(1)
}, {
  key: 'snr',
  encode: encodeSnr,
  fallback: Buffer.alloc(1)
}]

exports.encode = function encode (options) {
  let payload = encodeStatus(options)
  for (let encodePayloadValue of encodePayloadValues) {
    const { key, encode, fallback } = encodePayloadValue
    const value = options[key]
    const buf = encode && isDefined(value) ? encode(value) : fallback
    payload = Buffer.concat([ payload, buf ])
  }

  return payload
}
