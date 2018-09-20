const base = require('./base');
const dfPath = require('./path');
const merge = require('webpack-merge');
const webpack = require('webpack');

let strategyMerge = merge.strategy({
    entry: 'prepend',
});

let config = {

    module:{
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude: [
                    dfPath.node_modules
                ]
            },
            {
				test: /\.less$/,
				use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    "less-loader"
                ]
			},
            {
				test: /\.scss$/,
				use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    },
                    "sass-loader"
                ],
                include: [dfPath.src]
			},
            {
				test: /\.scss$/,
				use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    "sass-loader"
                ],
                exclude: [dfPath.src]
			},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
			{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            },
            {
                test: /\.(mp4|ogg|svg|ico)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            },
        ]
    },

    plugins:[
        new webpack.EnvironmentPlugin({
			NODE_ENV: 'development'
		}),
    ],

    devtool: 'cheap-module-eval-source-map',
}

module.exports = strategyMerge(base,config);
