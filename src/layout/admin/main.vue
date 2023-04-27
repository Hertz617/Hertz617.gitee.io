<template>
    <!-- main页面 -->
    <el-main>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
        <RouterView :key="key"></RouterView>
    </el-main>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
        }
    },
    computed: {
        key() {
            return this.$route.path
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }

});
</script>

<style lang='scss' scoped></style>