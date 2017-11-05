var path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}