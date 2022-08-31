import {reactive, computed} from "vue";
import { uuid } from "./util.js";
const state = {
    list: [
      { id: uuid(), name: 1, isChecked: false, isEdit: false },
      {
        id: uuid(),
        name: 2,
        isChecked: false,
        isEdit: false,
      },
      {
        id: uuid(),
        name: 3,
        isChecked: false,
        isEdit: false,
      },
    ],
  
    addValue: "",
    editValue: "",
    addNum: 0,
  }
    
export default state