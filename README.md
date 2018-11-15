# Adeunis field test device "LoRaWAN Europe EU863-870"

[![Build Status](https://travis-ci.org/antoniobusrod/adeunis-payload.svg?branch=master)](https://travis-ci.org/antoniobusrod/adeunis-payload)

Generates field test device payload properties from user guide v1.2.2

- Status
- Temperature
- Uplink frame counter
- Downlink frame counter
- Downlink frame counter
- RSSI and SNR

Future work will include to payload composed next properties

- GPS latitude
- GPS longitude
- GPS quality
- Battery


## Installation

```sh
npm install --save adeunis-payload
```


## Usage

```javascript
  const adeunisPayload = require('adeunis-payload')

  const payload = adeunisPayload.encode({
    temperature: 27,
    uplinkFrameCounter: 32,
    downlinkFrameCounter: 32,
    rssi: 82,
    snr: 7,
  })
  console.log(payload.toString('hex'))
  // ad1b000000000000000000202000005207
```

