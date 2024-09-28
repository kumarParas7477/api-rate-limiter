// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'rate-limiter.min.js', // Output file
    path: __dirname + '/dist',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
