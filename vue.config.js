module.exports = {
  runtimeCompiler: true,
  devServer:{
    proxy:{
      '/api':{
        target:'https://qcgkxh.app.cloudendpoint.cn',
        secure:false,
        ws:true,
        changeOrigin:true,
      }
    }
  }
}