const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseName = '.';

module.exports = merge(common, {
    entry: [
        './src/index.js',
        './src/style.scss'
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: './postcss.config.js'
                                }
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        // Extract imported CSS into own file - see above
        new ExtractTextPlugin('[name].[hash:20].css'),
        // Minify JS
        // new UglifyJSPlugin({
        //     sourceMap: true,
        //     compress: true,
        //     output: {
        //         comments: false
        //     }
        // }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'BASE_NAME': JSON.stringify(baseName)
        })
    ],
    output: {
        filename: '[name].[hash:20].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: `${baseName}/`
    },
});