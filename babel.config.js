module.exports = {
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
		'console-source',
		'class-display-name',
		'@babel/plugin-proposal-function-bind',
		'@babel/plugin-proposal-logical-assignment-operators',
		["@babel/plugin-proposal-decorators",
			{
				"legacy": true,
			},
		],
	],
};
