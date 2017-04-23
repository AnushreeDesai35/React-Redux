var config = {
   entry: './index.js',
	
   output: {
      //path: __dirname + 'release',
      filename: 'app.min.js',
      publicPath: 'http://localhost:8081'
   },
	
   devServer: {
      port: 8081
   },
	
   devtool: '#source-map',

   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015', 'stage-0']
            }
         }
      ]
   }
}

module.exports = config;