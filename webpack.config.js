const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCss = new ExtractTextPlugin({
    filename: 'bundle.css'
});

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    context: PATHS.app,
    entry: './app.module.ts',
    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
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
                        presets: ['es2015'],
                        plugins: [
                            'angularjs-annotate'
                        ]
                    }
                }]
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './assets/'
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
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        extractCss,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
}