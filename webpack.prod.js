let path = require('path'),
	base = require('./webpack.base.js'),
	{ smart } = require('webpack-merge'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),//文件清除
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),//分离css文件成外链样式
	glob = require('glob'),
	OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),//压缩css
	UglifyJsPlugin  = require('uglifyjs-webpack-plugin'),//压缩js
	pathResolve = (targetPath) => path.resolve(__dirname,targetPath);

module.exports = smart(base,{
	mode: 'production',
	output: {
		filename: 'js/[name].[chunkhash:7].js',
		chunkFilename: 'js/[name].[chunkhash:7].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:7].css'
		})
	],
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	}
});