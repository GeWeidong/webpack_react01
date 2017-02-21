/**
 * Created by Geweidong on 2017/2/21.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test:/\.css$/,
                loader:'style!css?modules'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热加载
    ]
};