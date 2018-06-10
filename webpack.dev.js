let path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    nodeModulesDir = path.resolve(__dirname, './node_modules'),
    LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = {
    entry: {
        app: ['./app/app.ts'],
        vendor: [
            'angular/angular.js',
            'angular-ui-router/release/angular-ui-router.js',
            'angular-sanitize'
        ]
    },
    context: __dirname + '',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {}
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'file-loader?name=[path][name].[ext]r',
                    options: {
                        minimize: true
                    }
                },
                    { loader: 'extract-loader' },
                    { loader: 'html-loader' }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({ name: 'vendor', filename: 'vendors.js' }),
        new CopyWebpackPlugin([{ from: './app/index.html', to: './index.html' }])
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9001
    },
};