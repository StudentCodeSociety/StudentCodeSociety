const path = require('path');

module.exports = {
  // Other Webpack config...
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add this line if not present
  }
};
