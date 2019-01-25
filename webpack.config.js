const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeExternals = require('webpack-node-externals'); // Remove node_modules when creating the bundle

//Env variables
// const compileMode = env.mode //? process.env.mode : "development"
// const isWatched = env.watch //? process.env.watch : "Watch"

module.exports = {

    entry: ['./src/js/app.js', './src/scss/bootstrap.scss'],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'public')
    },
    devtool: 'source-map',
    watch: true,
    target: 'web',
    mode: 'development',
    externals: {},
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[hash:7].[ext]'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: true
                        }
                    }
                ]
            },

            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        // includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            }
        ],
    },
    plugins: [
        // new CleanWebpackPlugin([path.join(__dirname, 'dist')], {watch: true}),

        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),



        // new MiniCssExtractPlugin({
        //     filename: 'index.css', chunkFilename: 'index.css',
        // }),

        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
    }
}