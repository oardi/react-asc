const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {

	return {
		context: path.resolve(__dirname, './src'),

		entry: { app: './index.tsx' },

		output: {
			filename: '[name].[fullhash].bundle.js',
			chunkFilename: '[name].[fullhash].bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: ''
		},

		devServer: {
			open: true,
			hot: true,
			port: 9000
		},

		resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: 'ts-loader'
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
				},
				{
					test: /\.(jpe?g|png|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							}
						}
					]
				},
				{
					test: /\.(svg)$/,
					use: [
						{
							loader: 'raw-loader',
						}
					]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					loader: 'file-loader',
					options: {
						outputPath: '',
					}
				}
			],
		},

		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './index.html',
				title: 'React Craft',
				filename: 'index.html',
				chunksSortMode: 'manual',
				chunks: ['vendors', 'app'],
				favicon: 'favicon.ico'
			}),
			new MiniCssExtractPlugin({
				filename: 'style.css',
				chunkFilename: 'style.css'
			}),
			new CopyPlugin({
				patterns: [
					{ from: path.resolve(__dirname, './public'), to: "public" }
				]
			})
		],

		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()],
			splitChunks: {
				cacheGroups: {
					commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }
				}
			}
		}
	};
};
