const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
   devtool: 'source-map',
   module: { 
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              pngquant: {
                quality: '80-90',
                speed: 1
              },
            },
          },
        ],
      },
    ]
   }, 
   plugins: [
     new UglifyJSPlugin({
       sourceMap: true
     }),
     new webpack.optimize.DedupePlugin(),
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     }),
     new webpack.optimize.AggressiveMergingPlugin()
   ]
});
