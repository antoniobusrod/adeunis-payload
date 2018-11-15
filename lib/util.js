exports.isDefined = (value) => {
  return value !== undefined && value !== null
}

exports.encodeByte = value => {
  return value > 255 ? Buffer.from([0xFF]) : Buffer.from([ value ])
}

exports.encodeSignedByte = value => {
  if (value > 127) {
    value = 127
  } else if (value < -128) {
    value = -128
  }

  if (value >= 0) {
    return Buffer.from([ value & 0x7F ])
  } else {
    return Buffer.from([ ((value + 128) & 0x7F) | 0x80 ])
  }
}
