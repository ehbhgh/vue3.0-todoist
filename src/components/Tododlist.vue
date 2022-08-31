<template>
  <div @mousedown="mouseDown" class="container">
    <h1>Todolist</h1>
    <h3>
      总的列表数：<span style="color: blue">{{ list.length }}</span
      >,未完成的列表:<span style="color: red">{{ length }}</span
      >,已完成的列表:<span style="color: green">{{ finish.length }}</span>
    </h3>
    <h2>还没有完成的列表</h2>
    <ul class="list-group">
      <template v-for="(item, index) in list">
        <li class="list-group-item" :key="item.name" v-if="!item.isChecked">
          <div class="form-group form-check list_item">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="item.isChecked"
                @click="() => (item.isChecked = !item.isChecked)"
              />
              <label
                class="form-check-label"
                v-if="!item.isEdit"
                @dblclick="showEdit(item, index)"
                style="dispaly: block"
              >
                {{ item.name }}
              </label>
              <label class="form-check-label" v-else>
                <input
                  type="text"
                  v-model="editValue"
                  ref="myInput"
                  @keyup.enter.native="sureEdit"
                />
              </label>
            </div>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="deleteListItem(item.id)"
            ></button>
          </div>
        </li>
      </template>
    </ul>
    <h2>已经完成的列表</h2>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in finish"
        :key="index + 'item.name'"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :id="index + 'finishflexCheckDefault'"
            v-model="item.isChecked"
            disabled
          />
          <label
            class="form-check-label"
            :for="index + 'finishflexCheckDefault'"
          >
            {{ item.name }}
          </label>
        </div>
      </li>
    </ul>
    <h3>添加新的Task</h3>
    <div class="form-group">
      <label for="add" class="form-label"
        >添加Task条数:<span style="color: blue">{{ addNum }}</span></label
      >
      <input
        type="email"
        class="form-control"
        id="add"
        placeholder="添加新的Task"
        v-model="addValue"
        @keyup.enter.native="addTask(item, index)"
      />
      <div class="d-grid gap-2">
        <button
          class="btn btn-primary"
          type="button"
          @click="addTask(item, index)"
          style="margin-top: 20px"
        >
          确认添加
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, toRefs } from "vue";
import defaultState from "./state.js";
import { uuid } from "./util.js";
export default {
  name: "Todolist",

  setup(props) {
    let indexTarget = 0;
    const myInput = ref(null);
    const addTask = () => {
      if (state.addValue === "" || state.addValue.length === 0) return false;
      state.list.push({
        id: uuid(),
        name: state.addValue,
        isChecked: false,
        isEdit: false,
      });
      state.addValue = "";
      state.addNum++;
    };
    const showEdit = (item, index) => {
      indexTarget = index;
      item.isEdit = true;
      state.editValue = item.name;
    };
    const mouseDown = (e) => {
      if (state.editValue == "") return false;
      if (myInput.value && !e.target.contains(myInput.value[0])) {
        state.list[indexTarget] = {
          id: uuid(),
          name: state.editValue,
          isChecked: false,
          isEdit: false,
        };
      }
    };
    const sureEdit = () => {
      if (state.editValue == "") return false;
      state.list[indexTarget] = {
        id: uuid(),
        name: state.editValue,
        isChecked: false,
        isEdit: false,
      };
    };

    const deleteListItem = (id) => {
      state.list = state.list.filter((item) => item.id !== id);
    };
    const state = reactive({
     ...defaultState,
      finish: computed(() =>
        state.list.filter((item) => item.isChecked == true)
      ),
      length: computed(() => state.list.length - state.finish.length),
    });

    return {
      ...toRefs(state),
      addTask,
      myInput,
      showEdit,
      mouseDown,
      sureEdit,
      deleteListItem,
    };
  },
};
</script>

<style lang="" scope>
.list_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>