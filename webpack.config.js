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
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    modules: ['./src', 'node_modules'],
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}