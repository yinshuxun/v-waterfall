const webpack = require('webpack');
const pkgConfig = require('../package.json');
const plugins = [];

var banner = [
    'vue-waterfall v' + pkgConfig.version,
    '(c) ' + (new Date().getFullYear()) + ' ' + pkgConfig.author
].join('\n')

plugins.push(new webpack.BannerPlugin(banner))

module.exports = {
    entry: {
        'waterfall': './lib/waterfall.vue'
    },
    output: {
        path: './dist',
        filename: '[name].min.js',
        library: 'Waterfall',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ]
    },
    plugins
}