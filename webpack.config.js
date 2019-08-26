const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My custom project template',
            minify:{
               collapseWhitespace:true
            },
// Load a custom template (lodash by default)
            template: 'src/index.ejs'
        })
    ]
}