const path = require('path'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/wap'),
        filename: '[name].js',
        chunkFilename: '[id].build.js?[chunkhash]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.html$/i,
                use: 'raw-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './app/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}