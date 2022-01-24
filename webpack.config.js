var path = require('path');
var MinCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',

    entry: {
        app: './src/app.js',
        index: './code-spliting/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module:{
        rules: [            
            { 
                test: /\.css$/,
                use: [
                    {loader: MinCssExtractPlugin.loader},
                    {loader: 'css-loader'}
                ]
            }
            /*
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, 

            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
            
            {
                test: /\.js$/,
                use: ['babel-loader']
            }*/
        ]
    },
    
    plugins : [ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            // 템플릿 기반으로 빌드 결과물을 추가해줌
            template: './code-spliting/index.html'
        })
    ],

    stats:{
        colors: true
    },
    devtool: 'source-map'
}