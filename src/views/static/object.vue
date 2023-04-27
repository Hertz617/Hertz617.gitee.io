<template>
    <div>
        object
    </div>
    <router-view></router-view>
</template>
<script>
// javascript
export default{
    data(){
        return{
            //定义数据
        }
    },
    method:{

    },
    mounted(){
        //生命周期
        console.log('mounted')
        const obj={
            a:10,
            b:'abc',
            run:function(){
                console.log('run')

            }
        }
        console.log(obj.a)
    }
}
</script>
<style>

</style>