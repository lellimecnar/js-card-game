const {
	ProvidePlugin,
} = require('webpack');
const path = require('path');
const {
	paramCase,
	pascalCase,
} = require('change-case');

const PKG_DIR = path.resolve(__dirname, './packages');

const config = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: PKG_DIR,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							babelrc: false,
							presets: [
								['@babel/preset-env',
									{
										targets: {
											node: true,
											browsers: 'defaults',
										},
										useBuiltIns: 'entry',
									},
								],
							],
							plugins: [
								'@babel/plugin-proposal-function-bind',
								'@babel/plugin-proposal-logical-assignment-operators',
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		new ProvidePlugin({
			'_': ['@card-game/core/src/util/privates', 'default'],
		}),
	],
};

module.exports = [
	[
		{
			name: 'deck-rook',
			library: 'RookDeck',
		},
		{
			name: 'deck-standard',
			library: 'StandardDeck',
		},
	].reduce((configs, { name, library }) => ({
		...config,
		name,
		entry: [ path.resolve(PKG_DIR, name, 'src/index.js') ],
		output: {
			path: path.resolve(PKG_DIR, name, 'lib'),
			filename: `card-game-${ name }.dist.js`,
			library,
		},
	}), {}),
];
