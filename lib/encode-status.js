const { isDefined } = require('./util')

const PRESENCE = {
  TEMPERATURE: 0x80,
  UPLINK_FRAME_COUNTER: 0x08,
  DOWNLINK_FRAME_COUNTER: 0x04,
  DEVICE_RSSI_SNR: 0x01
}

module.exports = function encodeStatus ({
  temperature,
  uplinkFrameCounter,
  downlinkFrameCounter,
  battery,
  rssi,
  snr
}) {
  // Always set "Transmission triggered by pressing pushbutton 1"
  let status = 0x20
  if (isDefined(temperature)) {
    status |= PRESENCE.TEMPERATURE
  }

  if (isDefined(uplinkFrameCounter)) {
    status |= PRESENCE.UPLINK_FRAME_COUNTER
  }

  if (isDefined(downlinkFrameCounter)) {
    status |= PRESENCE.DOWNLINK_FRAME_COUNTER
  }

  if (isDefined(rssi) && isDefined(snr)) {
    status |= PRESENCE.DEVICE_RSSI_SNR
  }

  return Buffer.from([ status ])
}
