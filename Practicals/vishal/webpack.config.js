var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'

    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new hwp({ template: path.join(__dirname, '/src/index.html') })
    ]
}