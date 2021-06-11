const path = require('path');
module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, '/wap'),
        filename: '[name].js',
        chunkFilename: '[id].build.js?[chunkhash]',
        clean: true
    }
}