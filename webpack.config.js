const path = require('path');
const webpack = require('webpack');

const BASE_PATH = __dirname;
const NPM_PATH = path.join(BASE_PATH, 'node_modules');
const SRC_PATH = path.join(BASE_PATH, 'src');
const DEST_PATH = path.join(BASE_PATH, 'dist');

const config = {
	context: BASE_PATH,
	entry: './src/CardGame.js',
	output: {
		filename: 'CardGame.js',
		path: DEST_PATH,
		library: 'CardGame',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [NPM_PATH],
				include: [SRC_PATH],
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					}
				}
			},
			{
				test: path.join(SRC_PATH, 'CardGame.js'),
				use: {
					loader: 'exports-loader?CardGame',
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		})
	]
}

module.exports = [config];