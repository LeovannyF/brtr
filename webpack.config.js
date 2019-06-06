const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/components/index.js'],
  output: {
    path: `${__dirname}/public`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },{
        test: /\.(png|jpe?g|gif|JPG)$/i,
        use: [
          "file-loader",
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlanced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90'
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              name: '[path][name].[ext]',
            }
          }
        ]
      }
    ],
  },
};