let path = require('path'),//路径生成
	pathResolve = targetPath => path.resolve(__dirname,targetPath),
	htmlWebpackPlugin = require('html-webpack-plugin'),//生成html文件
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),//分离css文件成外链样式
	devMode = process.env.NODE_ENV !== 'production';

module.exports = {

	entry: {
		index: pathResolve('src/index.js'),
		home: pathResolve('src/home.js')
	},
	output: {
		path: pathResolve('dist')
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		},{
			test: /\.(sa|sc|c)ss$/i,
			use: [devMode ? 'style-loader' : {
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
		new htmlWebpackPlugin({
			minify: {
				collapseWhitespace: !devMode,
				removeAttributeQuotes: !devMode,
				removeComments: !devMode
			},
			filename: pathResolve('dist/index.html'),
			template: pathResolve('src/views/index.html'),
			chunks: ['manifest','index']
		}),
		new htmlWebpackPlugin({
			minify: {
				collapseWhitespace: !devMode,
				removeAttributeQuotes: !devMode,
				removeComments: !devMode
			},
			filename: pathResolve('dist/home.html'),
			template: pathResolve('src/views/home.html'),
			chunks: ['manifest','home']
		})
	]
};