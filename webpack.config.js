const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const extractCss = new ExtractTextPlugin({
    filename: 'bundle.css'
});

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    context: PATHS.app,
    entry: {
        app: './app.module.ts',
        admin: './modules/admin/admin.module.ts'
    },
    output: {
        path: PATHS.dist,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    },
                }],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './assets/fonts'
                    }
                }]
            }, {
                test: /\.jpg?$|\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './assets/images/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', {
                    loader: 'sass-loader',
                    options: {
                        data: '@import "./variables";',
                        includePaths: [
                            path.resolve(__dirname, './app/sass')
                        ]
                    }
                }])
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    // options: {
                    //     minimize: true,
                    //     removeComments: true,
                    //     collapseWhitespace: true,
                    //     conservativeCollapse: true
                    // }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        extractCss,
        new webpack.optimize.CommonsChunkPlugin('common'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['common', 'app']
        }),
        // new UglifyJSPlugin()
    ]
}