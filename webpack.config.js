const loader = require('css-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader", "sass-loader"],
            },
            {
                exclude: /node_modules/,
                test: /\.(jsx|js)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env', {
                                    "targets": "defaults"
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        historyApiFallback:  true,
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Track Employees',
            minify: {
                collapseWhitespace: true,
            },
            filename: './index.html',
            inject: 'body',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    }
                }
            })
        ]
    }
}