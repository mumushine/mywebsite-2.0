//vue.config.js
module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: 'localhost',
        port: 8888,//配置页面端口
        https: false,
        hotOnly: false,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SEV_URL,//要访问的跨域的域名
                ws: true,// 是否启用websockets
                changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true
                pathRewrite: {//重定向
                    // '^/api': '/api'    这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
                    ['^' + process.env.VUE_APP_BASE_API]: '' //这种接口配置出来     http://XX.XX.XX.XX:8083/login
                }
            },

        }
    },
    lintOnSave: false, // 关闭格式检查
}