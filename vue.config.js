module.exports = {
  pages: {
    index:{
      entry: 'src/pages/index/main.js',
      filename: 'index.html',
    },
    about:{
      entry: 'src/pages/about/main.js',
      filename: 'about.html',
    },
    list: {
      entry: 'src/pages/list/main.js',
      filename: 'list.html',
    },
    detail: {
      entry: 'src/pages/detail/main.js',
      filename: 'detail.html',
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
