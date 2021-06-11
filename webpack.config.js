const path = require('path'),
      webpack = require('webpack'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      HtmlPlugin = require('html-webpack-plugin'),
      TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/wap'),
        filename: '[name].js',
        chunkFilename: '[id].build.js?[chunkhash]',
        clean: true
    },
    resolve: {
        extensions: ['', '.js', '.html', '.json']
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
        new MiniCssExtractPlugin(),
        new TerserPlugin({
            terserOptions: {
                compress: { warnings: false },
                sourceMap: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(), // Reemplazo del módulo en caliente
    ]
}