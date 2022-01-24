const path = require('path');
const webpack = require('webpack');

const MinCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    mode: 'none',

    entry: {
        app: './src/app.js',
        index: './code-spliting/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/'
    },

    module:{
        rules: [            
            { 
                test: /\.css$/i,
                use: [
                    {loader: MinCssExtractPlugin.loader},
                    {loader: 'vue-style-loader'},
                    {loader: 'css-loader'}
                ]
            },

            { 
                test: /\.vue$/i,
                use: [
                    {loader: 'vue-loader'}
                ]
            },

            { 
                test: /\.js$/i,
                loader: 'babel-loader', 
                exclude: /node_modules/
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]?[hash]'}
            }

        ]
    },
    
    resolve: {

        alias: { 'vue$' : 'vue/dist/vue.esm.js' },

        // 아래 확장자에 대새허는 import 시 확장자 없어도 인식해줌
        extensions : ['*', '.js', '.vue', '.json']
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


    devServer:{
        historyApiFallback: true,
        noInfo: true,
        overlay: true 
    },

    performance : {
        hints: false 
    },

    devtool: '#eval-source-map'
}

/* webpack version 3 이하에는 아래 내용 실행 
  아래 내용을 mode로 간단히 설정하게 변경하였습니다. */
  
/*
    if ( process.env.NODE_ENV == 'production')
    {// 배포시 추가적으로 아래 것을 넣는다.

        module.exports.devtool = '#source-map';

        module.exports.plugins = (module.exports.plugins || []).concat([

            new webpack.DefinePlugin({
                'process.env' : { NODE_ENV: '"production"'}
            }),

            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress : {warnings: false}
            }),

            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ]);
    }
*/