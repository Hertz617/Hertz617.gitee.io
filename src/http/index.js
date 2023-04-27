//统一api管理
import instance from "./axios";
//data json
const userLogin = (data) => {
    //返回Prommise对象
    return instance.request({
        url: 'api/mobile/elogin', //url=baseURL+url
        method: 'post',
        data
    })
}
const adminLogin = (data) => {
    return instance.request({
        url: '',
        method: 'post',
        data
    })
}
export {
    userLogin,
    adminLogin
} //多个输出