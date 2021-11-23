module.exports = {
  runtimeCompiler: true,
  devServer:{
    proxy:{
      '/blog':{
        target:'http://127.0.0.1:3000',
        secure:false,
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/blog':''
        }
      }
    }
  }
}