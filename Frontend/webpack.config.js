"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// global css
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});
// local css modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.css$/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});

module.exports = {
	entry: [
		`webpack-dev-server/client?http://${HOST}:${PORT}`,
		`webpack/hot/only-dev-server`,
		`./src/index.jsx` // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		quiet: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new DashboardPlugin(dashboard.setData),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
