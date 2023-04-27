<template>
    <!-- components文件夹下的是一般组件 -->
    <!-- view文件夹下的是页面组件 -->
    <div class=''>组件</div>
    
</template>
<script>
import { defineComponent } from 'vue'
// import { userLogin } from '../../http';
export default defineComponent({
    methods: {
         btnLogin() {
             //console.log('userLogin')
             const data = {
             "email": "414090297@qq.com",
                "password": "12345678", 
                // 'age':21,
                // 'isStudent':true,
                // 'add':["","",""],
                // name:'admin'
            };
            //const login = userLogin(data)
            //console.log(login);
            const res = userLogin(data)
            console.log(res);
            res.then(result=>{
                console.log(result)
                
            }).catch(err=>{
                console.log(err)
            })
        }
    }
});
</script>
<style lang='scss' scoped></style>