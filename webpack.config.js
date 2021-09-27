const path = require('path')

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: path.resolve(__dirname, '/public/dist/'),
    filename: 'index.bundle.js'
  },
  devServer: {
    port: 3010
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}