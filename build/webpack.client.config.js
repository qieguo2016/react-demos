const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const config = require('../config')

module.exports = {
	entry: {
		app: config.srcPath + 'main.js',
		vendor: [
			'es6-promise',
			'axios',
			'react',
			'react-dom',
			'react-router',
			'react-redux',
			'redux'
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist' + config.publicPath),
		publicPath: config.publicPath,
		filename: '[name].[hash].js',
		// 异步加载的业务模块，例如按需加载的.vue单文件组件
		chunkFilename: "[id].[name].[chunkHash].js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: "css-loader",
						options: {
							modules: false   // not use css module
						}
					},
					{loader: 'postcss-loader'},
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: "css-loader",
						options: {modules: false}    // not use css module
					},
					{loader: 'postcss-loader'},
					{
						loader: 'sass-loader',
						options: {sourceMap: true}   // use sourceMap
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				},
				exclude: /^node_modules$/,
			}
		]
	},
	resolve: {
		modules: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions: ['.web.js', '.js', '.json'],
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map',
	plugins: [

		new webpack.NamedModulesPlugin(),

		// 提取公共引用脚本并独立打包，避免重复打包
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.bundle.js',
		}),

		// 自动生成HTML入口文件，index.html为模板文件
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: config.srcPath + 'index.html',
			inject: true
		})],
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
