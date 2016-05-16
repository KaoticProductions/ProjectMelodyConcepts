var path = require('path');

module.exports = {
    devtool: "cheap-eval-source-map",
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
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "file",
                query: {
                    name: "[name].[ext]"
                }
            },
            {
              test: /\.css$/,
              loader: "css-loader"
            }
        ]
    }
}
