const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: './app/app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.js$/, use: 'babel-loader', exclude: /(node_modules|bower_components)/ }
		]
	},
	plugins: [new HtmlWebpackPlugin({template: 'app/index.html'})]
}
