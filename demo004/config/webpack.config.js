const path = require('path');

//处理html模板插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	mode: 'development',

	entry: {

		app: './app/app.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),

		filename: '[name].js'
	},



	module: {
		rules:[
		{
			test: /\.(png|gif|jpg|jpeg)$/,
			use: [
				{loader: 'url-loader', options:{limit:2000}}
			]
		},
		{
			test: /\.html?$/,
			use:[
				{loader: 'html-withimg-loader'}
			]
		},
		{
			test: /\.css$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'}
			]
		}
		]

	},

	plugins: [
		new HtmlWebpackPlugin({
			//处理的html模板路径
			template: './app.html',

			inject: true,

			//输出html模板名称
			filename: 'productapp.html',

			//html模板格式化
			minify: {

				//移除注释
				removeComments: true,

				//移除属性的引号(双引号和单引号)
				removeAttributeQuotes: true,

				//去除空格, 换行 ...
				collapseWhitespace: true

			}
		})

	],

	devServer: {
		contentBase: path.resolve(__dirname, '../public'),
		host: '127.0.0.1',//localhost
		port: 8001,
		compress: true
	}

}