import { defineStore } from "pinia";
import { reactive, ref } from 'vue';
//选项式
/**
 * 创建Store 注意命名：useUserStore
 * user是storeId唯一
 * 核心：state 其他属性都是为state服务 是个箭头函数并且return返回，数据一定要赋值
 * getters对象  主要作用是对state的数据进行过滤 方法
 * actions对象：修改state里面的数据方法
 * plugins 插件pinia-plugin-persist
 */
export const useUserStore=defineStore('user',{
    state: () => {
        return {
            token: '',
            userinfo: {
                "state": 1,
                "id": 0,
                "userName": "",
                "userType": "",
                "token": "",
                "binding": 0,
                "createTime": "",
                "updateTime": "",
                "email": ""
            }
        }
    },
    getters: {
        getToken() {
            return this.token;
        }
    },
    actions: {
        /**
         * token赋值
         * @param {*} token 
         */
        setToken(token) {
            this.token = token
        },
        /**
         * 填充用户数据
         * @param {*} user 
         */
        fillUserinfo(user) {
            this.userinfo = user
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'userinfo2003010222乐杙春',
                storage: localStorage,  //会话存储sessionStorage 本地存储localStorage
                paths: ['token']
            }
        ]
    }
})

/**
 * 组合式 没有this
 * 定义响应式值
 * 方法相当于actions
 **/
// export const useUserStore = defineStore('user', () => {
//     let token = ref('');
//     let userinfo = ref({});
//     const setToken = (token) => {
//         token = token
//     }
//     const fillUserinfo = (user) => {
//         userinfo = user
//     }
//     return (token, userinfo, setToken, fillUserinfo)
// })