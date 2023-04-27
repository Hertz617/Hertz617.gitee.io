<template>
  <div class="cart">购物车</div>
  <div class="products" v-for="item in products" :key="item.id">
    <div class="product">
      <div class="name">
        <el-checkbox :label="item.name" v-model="item.ischeck" size="small"
          @change="selectProducts(item.id, item.ischeck)" />
      </div>
      <div class="bars">
        <span class="price">￥{{ item.price }}</span>
        <span class="count">
          <el-input-number :min="min" value-on-clear="min" v-model.number="item.count" size="small" @change="handleChange(item.id, item.count)"></el-input-number>
        </span>
      </div>
    </div>
  </div>
  <div>
    全选<input type="checkbox" @click="changeAll" v-model="allcheck" />
    <span>合计：￥
      <span>{{ total }}</span>
    </span><button>购买</button>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      min: 1,
      products: [
          { id: 1001, name: "海尔立式热水器", price: 1849, count: 1, selected: false },
          { id: 1002, name: "Vue核心技术解析", price: 43, count: 1, selected: false },
        ],
      allcheck: false,
    };
  },
  computed: {
    total() {
      let sum = 0;
      this.products.forEach((item) => {
        if (item.ischeck) {
          sum += item.price * item.count;
        }
      });
      return sum;
    },
  },
  methods: {
    selectProducts(id, ischeck) {
      this.all();
      if (ischeck) {
        //被选中
        this.products.forEach((p) => {
          if (p.id == id) {
            this.total += p.price * p.count;
          }
        });
      } else {
        //被取消
        this.products.forEach((p) => {
          if (p.id == id) {
            this.total -= p.price * p.count;
          }
        });
      }
    },
    handleCountChange(item) {
        this.total = this.selectedProducts.reduce(
          (total, p) => total + p.price * p.count,
          0
        );
      },
    handleChange(id, count) {
      if (this.products.length === 0) {
        this.total = 0;
        return;
      }
      this.total = 0;
      this.$nextTick(() => {
        this.products.forEach((item) => {
          if (!item.count) {
            item.count = 1; // 设置默认值
          }
          this.total += item.price * item.count;
        });
      });
    },

    //全选
    changeAll() {
      //取反
      this.allcheck = !this.allcheck;
      //遍历数组products
      this.products.forEach((item) => {
        item.ischeck = this.allcheck;
      });
      if (this.allcheck) {
        this.total = 0;
        this.products.forEach((item) => {
          this.total += item.price * item.count;
        });
      } else {
        this.total = 0;
      }
    },
    all() {
      let _id = this.products.findIndex((item) => {
        return !item.ischeck;
      });
      if (_id == -1) {
        this.allcheck = true;
      } else {
        this.allcheck = false;
      }
    },

  },
});
</script>
  
<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;

  .name {
    font-size: 16px;
    font-weight: bold;
  }

  .bars {
    display: flex;
    justify-content: space-between;
    height: 35px;
    align-items: center;
    margin-top: 10px;

    .price {
      color: red;
    }
  }
}

.total {
  display: flex;
  margin: 20px 10px 0 10px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
</style>