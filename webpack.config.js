let path = require('path'),
	pathResolve = targetPath => path.resolve(__dirname,targetPath),
	htmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

	entry: {
		index: pathResolve('src/index.js')
	},
	output: {
		path: pathResolve('dist'),
		filename: '[name].[hash:7].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		},{
			test: /\.(sa|sc|c)ss$/i,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '../'
				}
			},
				'css-loader',
				'postcss-loader',
				'sass-loader'
			]
		},{
			test: /\.(png|jpe?g|svg|gif)/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: '[name].[hash:7].[ext]',
					outputPath: 'img'
				}
			},{
				loader: 'image-webpack-loader'
			}]
		},{
			test: /\.(eot|woff|woff2|ttf)$/i,
			use: [{
				loader: 'url-loader',
				options: {
					name: '[name].[hash:7].[ext]',
					limit: '8192',
					outputPath: 'fonts'
				}
			}]
		},{
			test: /\.html$/i,
			use: {
				loader: 'html-loader',
				options: {
					attrs: ['img:src']
				}
			}
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),
		new htmlWebpackPlugin({
			template: pathResolve('./src/views/index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:7].css'
		})
	],
	mode: 'production'
};