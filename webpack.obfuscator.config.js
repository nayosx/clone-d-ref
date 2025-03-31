const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true,
        stringArray: true,
        stringArrayThreshold: 0.75
      },
      ['vendor.js']
    )
  ]
};
