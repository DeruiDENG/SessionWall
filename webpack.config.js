const path = require('path');

module.exports = {
    entry: './scripts/app.js',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // rules: [
    //     {
    //         test: /\.css$/,
    //         use: ['style-loader', 'css-loader']
    //     }
    // ]
}