const webpack = require('webpack')
const base = require('./webpack.base.config.js')

var config = Object.assign({}, base)

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
])

module.exports = config
