const { resolve } = require('path');

const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// webpack config helpers
const { getIfUtils, removeEmpty, combineLoaders } = require('webpack-config-utils');

module.exports = (env) => {
  const { ifProd, ifNotProd } = getIfUtils(env);

  return {
    context: resolve('src'),
    entry: {
      app: './main.tsx'
    },
    output: {
      filename: '[name].js',
      path: resolve('dist'),
      // Include comments with information about the modules.
      pathinfo: ifNotProd(),
      libraryTarget: 'umd'
    },

    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.tsx'
      ]
    },

    devtool: ifProd('source-map', 'cheap-module-source-map'),

    module: {
      loaders: [
        // Typescript
        { test: /\.tsx?$/, loaders: [ 'awesome-typescript-loader' ], exclude: /node_modules/ },
        // CSS
        {
          test: /\.css$/,
          loaders: combineLoaders( [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            { loader: 'postcss-loader' }
          ] )
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },

        // **IMPORTANT** This is needed so that each bootstrap js file required by
        // bootstrap-webpack has access to the jQuery object
        { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

        // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
        // loads bootstrap's css.
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }

      ],
    },

    // This is required, when using Hot Code Replacement between multiple calls to the compiler.
    recordsPath: resolve(__dirname, './tmp/webpack-records.json'),

    plugins: removeEmpty([

      // Add nice progress bar
      new ProgressBarPlugin(),

      new HtmlWebpackPlugin({
        template: resolve('src','index.html')
      }),

      // Set NODE_ENV to enable production react version
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      }),

      // Deduplicate node modules dependencies
      ifProd(new webpack.optimize.DedupePlugin()),

      // Default webpack build options
      ifProd(new webpack.LoaderOptionsPlugin({
        debug: false
      })),

      // Uglify bundles
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false
        }
      }))

    ])
  }
};