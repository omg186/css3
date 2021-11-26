// craco.config.js
// const cssNext = require("postcss-cssnext");

// const { createWebpackDevConfig } = require('@craco/craco')

const path = require('path')
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('postcss-cssnext')]
    }
  },
  webpack: {
    loaders: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            include: path.resolve(__dirname, '../src/svg')
          },
          {
            loader: 'svgo-loader'
          }
        ]
      }
    ]
  }
}
