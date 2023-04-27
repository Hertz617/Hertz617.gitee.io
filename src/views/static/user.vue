<template>
    <userCom @customEvent="customEvent" @customEvent1="customEvent1" :salesclerks="salesclerks">店员管理
        <template #header>
            同步信息{{ $route.params.id }}{{ $route.query.id }}
        </template>
    </userCom>
</template>

<script>
import { defineComponent } from 'vue'
import UserCom from '../../components/UserCom.vue';
export default defineComponent({
    data() {
        return {
            salesclerks: [
                { id: 1, name: '黄药师', profession: '店长', shop: '优衣库' },
                { id: 2, name: '梅超风', profession: '出纳', shop: '优衣库' },
                { id: 3, name: '黄蓉', profession: '导购', shop: '优衣库' },
                { id: 4, name: '郭靖', profession: '导购', shop: '优衣库' },
                { id: 5, name: '郭芙', profession: '导购', shop: '优衣库' },
                { id: 6, name: '郭襄', profession: '库管', shop: '优衣库' },
            ],
        }
    },

    components: {
        //局部注册
        //key:value
        userCom: UserCom
    },
    methods: {
        customEvent() {
            console.log('customEvent')
        },
        customEvent1(id) {
            console.log('customEvent1', id)
        }
    }

});
</script>

<style lang='scss' scoped></style>