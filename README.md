# node-rescuetime-client

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```sh
$ npm install node-rescuetime-client --save
```

## How to use it

To start, require the RescueTime module and create a client passing in an API key:

```javascript
const RescueTime = require('node-rescuetime-client')
const client = new RescueTime(process.env.RESCUETIME_API_TOKEN)
```