<template>
    <div class="shop">商店</div>
    <!-- <ul v-for="item in shops" :key='item'> -->
    <ul>
        <li v-for="item in shops" :key='item'>店名:{{ item.name }},面积{{ item.area }}</li>
        <form action="#" @submit="onSubmit">
            <button>提交</button>
        </form>
        <h3>数据双向绑定（表单）{{ msg }}</h3>
        <input type="text" v-model="msg">
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <!--单选按钮-->
        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
        <!--选择器 单选-->
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <!--选择器 多选  multiple-->
        <div>Selecteds: {{ selecteds }}</div>

        <select v-model="selecteds" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </ul>
</template>
<script>
import { defineComponent } from "vue"
//export default 默认输出，单个输出
export default defineComponent({
    data() {
        return {
            checkedNames: [],
            shops: [
                { id: 1, name: 'shopA', 'area': 1000 },
                { id: 2, name: 'shopB', 'area': 800 },
                { id: 3, name: 'shopC', 'area': 900 },
            ],
            msg: 'abc',
            selected:'',
            selecteds:[],
            picked:''
        }
    }
});
</script>
<style lang='scss' scoped></style>
