const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname,'app'),
  build: path.join(__dirname, 'build')
};

module.exports = merge(common, {
  devServer: {
		contentBase: PATHS.build,
		historyApiFallback: true,
		hot: true,
		inline: true,
		stats: 'errors-only',
		host: process.env.HOST,
		port: process.env.PORT
	},
	devtool: 'eval-source-map',
	plugins: [
		new Webpack.HotModuleReplacementPlugin()
	],
	module: { 
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
  	]
  }
});
