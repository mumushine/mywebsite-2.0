import axios from "axios";
import Qs from 'qs';

const base = `${window.globeBaseUrl}`;
const config = {
    // 请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    url: '/user',
    // 请求的接口
    baseURL: base,
    // 默认请求方法
    method: 'post',
    // 在发送请求之前对请求数据做处理
    transformRequest: [
        function (data) {
            if (data == null || data == "") {
                return "{}";
            } else  {
                if (typeof (data) == "object") {
                    if (data.hasOwnProperty("data")) {
                        return JSON.stringify(data);
                    } else {
                        return JSON.stringify({"data":data});
                    }
                } else {
                    return JSON.stringify({"data":data});
                }
            }
        }
    ],

    // 提前处理返回的数据=
    transformResponse: [
        function (data) {
            return data
        }
    ],
    // 请求头信息
    headers: {
        'Content-Type': 'application/json',
        'csrfcheck': window.sessionStorage.getItem('omc_crsf')
    },

    // 默认parameter参数
    params: {},

    // 序列化param
    paramsSerializer: function (params) {
        return Qs.stringify(params);
    },

    // 默认post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    data: {},

    // 设置超时时间
    timeout: 500000000,

    // // 是否跨站点访问控制请求
    // withCredentials: true, // default

    // 返回数据类型
    responseType: 'json', // default

    maxContentLength: 2000,
   
    // default
    maxRedirects: 5
};
// export config;
 const axiosHttp = axios.create(config);

 axios.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem("Authorization")
     token = eval('(' + token + ')');
      console.log(token)
    if (token) {
        config.headers.token = token;    //将token放到请求头发送给服务器
        //这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中 // config.headers['token'] = Token;
　　　　//config.headers.token的token是需要和后台定义叫什么的，我这里定义叫token了

    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
// // 请求拦截器
// axiosHttp.interceptors.request.use(config => {
//     if (config.method != "get" 
//         && config.url.substr(config.url.lastIndexOf("/") + 1) != "login"
//         && config.url.substr(config.url.lastIndexOf("/") + 1) != "bulidReportFile") {
//         //暂时无用的代码
//         // $.ajax({
//         //     url: config.baseURL + '/token',
//         //     type: 'get',
//         //     async: false,
//         //     xhrFields: {
//         //         withCredentials: true
//         //     },
//         //     crossDomain: true,
//         //     success: function (data) {
//         //         config.headers.csrf_token = data.data;
//         //     },
//         //     error: function (error) {
//         //         console.log(error)
//         //     }
//         // });
//         return config;
//     } else
//         return config;
// }, error => {
//     Promise.reject(error);
// });

// // 响应拦截器
// axiosHttp.interceptors.response.use((response) => {
//     if (typeof (response.data) != "object") {
//         response.data = JSON.parse(response.data);
//     }
//     // 处理异常请求
//     if (response.data.code != "0" && response.data.code) {
//         console.log(response);
//         if (response.data.code != "200") {
//             //权限不足
//             if (response.data.code == "401") {
//                 let flag = false;
//                 if (!flag) {
//                     let currentPage = GetUrlRelativePath();
//                     if (currentPage === "/#/") {
//                         store.dispatch('login/logout').then(() => {
//                            location.replace("../#/login");
//                            location.reload();
//                         });
//                     } else if (currentPage !== "/#/login" && response.config.url !== "/bizframe/logout.json") {
//                         hui.hMsgBox.confirm({
//                             title: "确认登录",
//                             content: "会话已失效,请重新登录",
//                             onOk: () => {
//                                 store.dispatch('login/logout').then(() => {
//                                     //router.push({path: '/login'});
//                                     location.replace("../#/login");
//                                     location.reload();
//                                 });
//                             },
//                             onCancle: () => {
//                             }
//                         })
//                     }
//                 }
//             }
//         }
//     }
//     return response;
// }, (error) => {
//     console.log(error);
//     //hui.hMessage.error("系统异常，请联系系统管理员！");
//     return Promise.reject(error);
// });

export default axiosHttp;