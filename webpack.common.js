const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname,'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: ['babel-polyfill', PATHS.app]
  },
  output: {
    path: PATHS.build,
    filename: '[chunkhash]'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            },
          }
        ]
      }, {
        test: /\.svg$/,
        loader: 'url-loader'
      }, {
        test: /\.(eot|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ],
  },
   plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html',
        title: "Olivia Stalcup"
    }),
    new CleanWebpackPlugin(['dist']),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   }
};
