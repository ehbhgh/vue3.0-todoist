<template>
  <div class="container">
    <h1>这是一个计算页面</h1>
    <form class="row g-3">
      <div class="col-auto">
        <button @click="add" class="btn btn-success">+</button>
      </div>

      <div class="col-auto">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="count"
        />
      </div>
      <div class="col-auto">
        <button @click="reduce" class="btn btn-success">-</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Add",
  setup(props) {
    const add = () => {
      state.count++;
    };
    const reduce = () => {
      state.count--;
    };
    const state = reactive({
      count: 0,
      add,
      reduce,
    });
    return state;
  },
};
</script>

<style lang="" scope>
</style>