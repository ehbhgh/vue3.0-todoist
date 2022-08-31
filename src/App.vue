<template>

    <div class="btns">
      <button  class="btn btn-primary" @click="truen('/todolist')">到达todoList页面</button>
      <button class="btn btn-primary" @click="truen('/add')">到达add页面</button>
    </div>
    <router-view></router-view>
 
</template>

<script>
import { reactive } from "vue";
import router from "./routes";
export default {
  name: "App",
  setup(props) {
    const truen = (path) => {
      router.push(path);
    };

    const state = reactive({
      truen,
    });
    return state;
  },
};
</script>

<style lang="" scope>
.btns{
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin: 30px auto;

}
</style>
