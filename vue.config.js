module.exports = {
  runtimeCompiler: true,

  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3000',
        secure:false,
        ws:true,
        changeOrigin:true,
      }
    }
  },

  assetsDir: 'static'
}