import { defineStore } from "pinia";

interface State {
  list: TodoItem[];
}

interface Getter {
  list: TodoItem[];
}

interface TodoItem {
  id: number;
  status: boolean;
  content: string;
}

const useTodoList = defineStore("todoList", {
  state: (): State => {
    return {
      list: [],
    };
  },
  getters: {
    doneList: ({ list }) => {
      return list.filter((item) => item.status);
    },
    notDoneList: ({ list }) => {
      return list.filter((item) => !item.status);
    },
  },
  actions: {
    addTodoitem(content: string) {
      this.list.push({
        id: Date.now(),
        status: false,
        content,
      });
    },
    deleteTodoItem(id: number) {
      console.log(id);
      this.list = this.list.filter((item) => item.id !== id);
    },
    changeStatus(id: number, status: boolean) {
      this.list = this.list.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            status: status,
          };
        }
        return item;
      });
    },
  },
});

export default useTodoList;
