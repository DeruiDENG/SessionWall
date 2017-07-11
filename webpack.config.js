const path = require('path');

module.exports = {
    entry: './scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    // rules: [{
    //     test: /\.scss$/,
    //     use: [{
    //         loader: "style-loader"
    //     }, {
    //         loader: "css-loader"
    //     }, {
    //         loader: "sass-loader",
    //         options: {
    //             includePaths: ["./contents"]
    //         }
    //     }]
    // }]
}