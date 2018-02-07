'use strict'
const request = require('request-promise')

class RescueTime {
  constructor (key) {
    this.options = {
      key: key
    }
  }

  getAnalyticData (params = {}) {
    const query = Object.assign({}, this.options, params)

    return request({
      uri: 'https://www.rescuetime.com/anapi/data',
      qs: query,
      json: true
    })
  }
}

module.exports = RescueTime
