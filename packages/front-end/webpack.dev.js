const webpack = require('webpack')
const {merge} = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.js')

module.exports = merge(
    commonConfig,
    {
        mode: 'development',
        devServer: {
            contentBase: path.join(__dirname, 'public/'),
            port: 3001,
            publicPath: 'http://localhost:3001/dist/',
            hotOnly: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
)