<template>
    <div class="salesclerks">
        <!-- 店员管理CURD 
        1 数据展示 table element-plus table
        2 数据添加 表单 element-plus表单组件的使用
        3 数据更新 表单
        4 数据删除 查询
        事件方法,

        -->
        <h3><slot></slot></h3>
        <div class="tools">
            <el-button icon="Plus" @click="toadd()" />


        </div>
        <slot name="header"></slot>
        <!-- 数据展示 -->
        <el-table :data="salesclerks" style="width: 100%">
            <el-table-column prop="id" label="id" width="80" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="profession" label="职业" width="180" />
            <el-table-column prop="shop" label="店名" width="180" />
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button size="small" type="danger" @click="btnClick()">组件自定义事件</el-button>
                    <el-button size="small" type="danger" @click="btnClick1()">子父传参</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="dialogSalesclerksFormVisible" title="Shipping address">
            <el-form :model="salesclerk">
                <el-form-item label="编号" :label-width="formLabelWidth">
                    <el-input v-model="salesclerk.id" autocomplete="off" />
                </el-form-item>
                <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="salesclerk.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="职位" :label-width="formLabelWidth">
                    <el-input v-model="salesclerk.profession" autocomplete="off" />
                </el-form-item>
                <el-form-item label="店名" :label-width="formLabelWidth">
                    <el-input v-model="salesclerk.shop" autocomplete="off" />
                </el-form-item>

            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogSalesclerksFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="save">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>

    </div>
</template>
<script>
import { defineComponent } from "vue"
//export default 默认输出,单个输出ks
import {cloneDeep} from 'lodash-es'
export default defineComponent({
    // props:['salesclerks'],
    props:{
        salesclerks:{
            type:Array,
            required:true,
        }
    },
    data() {
        return {
            
            dialogSalesclerksFormVisible: false,
            salesclerk: {
                id: 0,
                name: '',
                profession: '',
                shop: ''
            },
            index:0,
            formLabelWidth: '80px',
            flag: true,
        }

    },
    methods: {
        toadd() {
            this.dialogSalesclerksFormVisible = true,
            this.salesclerk = {
                id: 0,
                name: '',
                profession: '',
                shop: ''
            }
            this.flag = true;

        },
        save() {
            console.log(this.salesclerk);
            if (this.flag) {
                this.salesclerks.push(this.salesclerk);

            } else {
                this.salesclerks[this.index]=this.salesclerk
            }
            this.dialogSalesclerksFormVisible = false;



        },
        handleEdit(index, row) {
            this.flag = false;
            console.log(index, row)
            this.salesclerk = cloneDeep(row);
            this.index=index;
            this.dialogSalesclerksFormVisible = true;
        },
        handleDelete(index, row) {
            this.salesclerks.splice(index, 1)
        },
        btnClick(){
            this.$emit('customEvent');
        },
        btnClick1(){
            this.$emit('customEvent1',123);
        }
    }

});
</script>
<style lang='scss' scoped></style>
