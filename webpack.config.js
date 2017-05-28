
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname+ '/public',
    filename:'bundle.js',
    publicPath: '/public/'
  },
  module:{
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
				test:/\.sass$/,
				loader:'style-loader!css-loader!sass-loader',
			},{
        test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
         query:{presets: ['es2015','react'],
       plugins:['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']}
      },
    ]
  },

}
