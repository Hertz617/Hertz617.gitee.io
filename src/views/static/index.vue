<template>
    <!-- <MyComponent></MyComponent> -->
    <div class='home'>
        首页
        {{ msg }}
        <div v-html="msgHtml"></div>
    </div>
    <p>{{ count }}</p >
</template>
<script>
/**
 * 对象的析构
 * const person={
            name:'admin',
            age:23,
            sex:'male',
            run:function(){
                console.log('run')
            }
        }
    const {name,age,sex,run}=person 对象析构
 */
import {storeToRefs} from 'pinia';
import { defineComponent } from 'vue'
import {useUserStore} from '../../store/user'
export default defineComponent({
    setup() {
        //组合api
        const store = useUserStore();
        //console.log(store)
        // return {
        //     store,
        // }<p>{{ store.count }}</p >
        const {count}=storeToRefs(store);
        return{
            count,
        }
    },
    data(){
        return{
            msg:'this is vue app',
            msgHtml:'<h3>this is v-html</h3>',
            home:'home',
            count: 0
        }
    }
});
</script>
<style lang='scss' scoped>
//可编程的css
//scoped css使用范围，只在这个页面 
    .home{
        background-color: blue;
    }
</style>;