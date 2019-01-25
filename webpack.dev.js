let path = require('path'),
	webpack = require('webpack'),
	base = require('./webpack.base.js'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	{ smart } = require('webpack-merge'),//合并数组或对象
	pathResolve = (targetPath) => path.resolve(__dirname,targetPath);

module.exports = smart(base,{
	mode: 'development',
	output: {
		filename: 'js/[name].[hash:7].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
	],
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	}
});