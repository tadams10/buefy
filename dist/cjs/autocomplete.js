'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-1bb51959.js')
require('./chunk-2e522c9c.js')
require('./chunk-6d6da562.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-92656c77.js')
var __chunk_7 = require('./chunk-38e40936.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete)
    }
}
__chunk_5.use(Plugin)

exports.BAutocomplete = __chunk_7.Autocomplete
exports.default = Plugin
