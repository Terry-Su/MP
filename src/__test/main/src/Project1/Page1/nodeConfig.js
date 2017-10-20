const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PATH = require('path')


module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.js.*/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'stage-2'],
              }
            }
          ]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
      ]
    },
    devtool: 'source-map',
    plugins: process.env.production ? [
      new UglifyJSPlugin()
    ] : [],
  },

  html: {
    name: 'index.html',
    content: `
<html>
  <body>index.html</body>
</html>
`,
  },
  relativePathsToOutput: ['pageFolder1', 'pageFolder2', 'pageFolder3'],
  outputPath: PATH.resolve(__dirname, '../../../tmpPublic/customPage1')
}
