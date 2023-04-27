<template>
    <!--登录表单设计
    1.表单
    2.验证（自定义）
    3.登录实现   效果loading
    4.状态信息保存（pinia. vuex）
    问题刷新会出现状态信息丢失的问题，数据持久化 数据库
    本地持久化：持久化插件
    5.页面跳转
    6.reset
    数据接口：http://api.jqrjq.cn/doc.html
  -->
    <!-- <div>数量{{ userStore.count }}</div>
  <button @click="userStore.increat">count++</button> -->
    <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item prop="email">
            <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入你的用户邮箱" suffix-icon="Message" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="userForm.password" type="password" autocomplete="off" placeholder="请输入你的用户密码"
                suffix-icon="Lock" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="btnLogin">用户登录</el-button>
            <el-button @click="resetForm">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions, storeToRefs } from "pinia";
import { userLogin } from "../../http";
import { useUserStore } from "../../store/user";
export default defineComponent({
    setup() {
        //组合式
        // const userStore = useUserStore();
        // // const { setToken,fillUserinfo} = storeToRefs(userStore);
        // return { userStore }
    },
    data() {
        return {
            userForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入正确的邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '电子邮箱格式错误', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入正确的用户密码', trigger: 'blur' },
                    { min: 8, message: '密码长度不得少于8个字符', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ['setToken', 'fillUserinfo']),
        btnLogin() {
            const that = this;
            const formEl = this.$refs.ruleFormRef//取ref对象
            // console.log(formEl);
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    const res = userLogin(that.userForm)

                    res.then(result => {

                        /**
                         *选项式
                         *用户状态：登录状态 token='',未登录，token='asd...',已经登录
                         * setToken
                         * 保存登录用户信息
                         * fillUserinfo
                         * 调用状态存储pinia的辅助函数 mapActions
                         * methods:{
                         * ...mapActions(useUserStore, ['setToken', 'fillUserinfo']),
                         * }
                         **/

                        //pinia 
                        //跳转页面

                        if (result.success) {
                            const userinfo = result.data.userinfo;
                            console.log(that);
                            that.setToken(userinfo.token);
                            that.fillUserinfo(userinfo);
                            that.$router.push('/');

                        }
                        else {
                            return false;
                        }



                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        },

        resetForm() {
            const formEl = this.$refs.ruleFormRef
            formEl.resetFields()
        },
    }
});
</script>
   
<style lang="scss" scoped></style>
