const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    "devtool":'eval-source-map',
    mode:'development',
    entry: ['./client/client.js'],
    output: {
        path: path.resolve(__dirname, './dist')
    },
    plugins: [

        new HtmlWebpackPlugin({

            title: '',
            template: path.join(__dirname, './src/assets/index.html'), // 模板文件
            inject: 'body',
            initialData: 'window.__INITIAL_STATE__ = <%- __state__ %>',
            hash: false, // 为静态资源生成hash值
            minify: { // 压缩HTML文件
                removeComments: false, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
            },
        }),
    ],
    module:{
        rules:[   {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/,
        },]
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase: 'dist'
    }

};

module.exports = config;