const {
	ProvidePlugin,
} = require('webpack');
const path = require('path');

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
								'@babel/preset-flow',
							],
							plugins: [
								'class-display-name',
								'@babel/plugin-proposal-logical-assignment-operators',
								'@babel/plugin-proposal-function-bind',
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
	...[
		{
			name: 'core',
			library: 'CardGame',
		},
		{
			name: 'deck-phase-10',
			library: 'Phase10Deck',
		},
		{
			name: 'deck-rook',
			library: 'RookDeck',
		},
		{
			name: 'deck-standard',
			library: 'StandardDeck',
		},
		{
			name: 'deck-uno',
			library: 'UNODeck',
		},
	].map(({ name, library }) => ({
		...config,
		name,
		entry: [ path.resolve(PKG_DIR, name, 'src/index.js') ],
		output: {
			path: path.resolve(PKG_DIR, name, 'lib'),
			filename: `card-game-${ name }.dist.js`,
			library,
		},
	})),
];
