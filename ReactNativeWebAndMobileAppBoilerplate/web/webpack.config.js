const webpack = require('webpack');

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'builds'),
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: 8080
    },
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        'babel-regenerator-runtime',
        path.join(__dirname, '../index.web.js')
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: [
                    path.resolve(__dirname, '..', 'index.web.js'),
                    path.resolve(__dirname, '..', 'src'),
                    path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
                    path.resolve(__dirname, '../node_modules/react-native-tab-view'),
                    path.resolve(__dirname, '../node_modules/react-native-modal'),
                    path.resolve(__dirname, '../node_modules/react-native-star-rating'),
                    path.resolve(__dirname, '../node_modules/react-native-button'),
                    path.resolve(__dirname, '../node_modules/react-native-animatable'),
                    path.resolve(__dirname, '../node_modules/tricky-components'),
                    path.resolve(__dirname, '../node_modules/react-native-web-webview'),
                    path.resolve(__dirname, '../node_modules/react-navigation')
                ],
                loader: 'babel-loader?+cacheDirectory'
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: {name: '[name].[hash:16].[ext]'}
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    }
                ]
            },
            {
              test: /postMock.html$/,
              use: {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
              },
            },
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, '..', 'node_modules')
        ],
        extensions: ['.web.js', '.js', '.scss'],
        alias: {
            'react-native': 'react-native-web',
            'react-navigation': 'react-navigation/lib/react-navigation.js',
            'WebView': 'react-native-web-webview',
        }
    }
};
