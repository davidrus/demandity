module.export = () => {

  return {

    context: __dirname,
    entry: './index',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },

    resolve: {
      extensions: [
        '.js',
        '.ts'
      ]
    },

    devtool: 'cheap-module-source-map',

    module: {
      loaders: [
        { text: /\.ts$/, loaders: ['awesome-typescript-loader']}
      ]
    },

    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://localhost:90000'
        }
      }
    }

  }

}