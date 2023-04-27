<template>
    <div class="common-layout">
        <el-container>
            <Aside></Aside>
            <Main></Main>
        </el-container>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import Aside from '@/layout/admin/aside.vue'
import Main from '@/layout/admin/main.vue'
export default defineComponent({
    components:{
        Aside,
        Main
    }

});
</script>

<style lang='scss' scoped></style>