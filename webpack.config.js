var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// var nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(function(x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function(mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index', 
    './src/css/home.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/bcoin/, ".")
  ],
  module:{
     noParse: ['ws']
  },
  node: {
    fs: "empty",
    dns: 'mock',
    net: 'mock',
    tls: "empty"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.jsx$/, loaders: [ "jsx-loader"], include: path.join(__dirname, "src") },
    {test: /\.jsx?$/, loader: 'babel-loader',
  plugins: ['transform-runtime',{
                helpers: false,
                polyfill: false,
                regenerator: true
              }]},
    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.json$/, loader: 'json-loader' }
  ]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    alias: {
      App: 'src/components/App.jsx',
      Reducers: "src/reducers"
    }
  }
   //externals: nodeModules
};
