'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
//   API_ROOT: '"http://192.168.3.94/web/index.php?r="'
})
