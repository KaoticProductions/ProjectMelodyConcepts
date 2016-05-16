var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        javascript: path.resolve(__dirname, 'src/index.jsx'),
        html: path.resolve(__dirname, 'src/index.html')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
}
