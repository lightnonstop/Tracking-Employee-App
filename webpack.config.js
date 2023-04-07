const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    devtool: false,
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader", "sass-loader"],
            },
            {
                test: /\.(jsx|js)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    }
}