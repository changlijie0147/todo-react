var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
        "webpack/hot/dev-server", path.resolve(__dirname, "./app/index.js")
    ],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            }, {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css')
    ]
};