const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: [
        // 'react-hot-loader/patch', // activate HMR for React
        'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './src/index.js', // the entry point of our app
        './src/style.scss'
      ],
    devtool: 'inline-source-map',
    output: {
      filename: '[name].[hash:20].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true,
        host: "0.0.0.0"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});