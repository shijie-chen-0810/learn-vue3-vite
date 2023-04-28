import { defineStore } from "pinia";

interface State {
  list: TodoItem | null;
}

export interface TodoItem {
  id: number;
  status: boolean;
  content: string;
  next: TodoItem | null;
  prev: TodoItem | null;
}

const useTodoList = defineStore("todoList", {
  state: (): State => {
    return {
      list: null,
    };
  },
  getters: {
    allList: ({ list: all }) => {
      const _list: TodoItem[] = [];
      const getAllList = (list: TodoItem | null) => {
        if (!list?.next) {
          if (list) {
            _list.push(list);
          }
          return;
        }
        _list.push(list);
        getAllList(list.next);
      };
      getAllList(all);
      return _list;
    },
    doneList: ({ list: all }) => {
      const _list: TodoItem[] = [];
      const getAllList = (list: TodoItem | null) => {
        if (!list?.next) {
          if (list && list.status) {
            _list.push(list);
          }
          return;
        }
        if (list.status) {
          _list.push(list);
        }
        getAllList(list.next);
      };
      getAllList(all);
      return _list;
    },
    notDoneList: ({ list: all }) => {
      const _list: TodoItem[] = [];
      const getAllList = (list: TodoItem | null) => {
        if (!list?.next) {
          if (list && !list.status) {
            _list.push(list);
          }
          return;
        }
        if (!list.status) {
          _list.push(list);
        }
        getAllList(list.next);
      };
      getAllList(all);
      return _list;
    },
  },
  actions: {
    addTodoitem(content: string) {
      if (!this.list) {
        return (this.list = {
          id: 1,
          status: false,
          content,
          next: null,
          prev: null,
        });
      }
      const insertLastItem = (list: TodoItem, content: string) => {
        if (!list.next) {
          list.next = {
            id: Date.now(),
            status: false,
            content,
            next: null,
            prev: list,
          };
        } else {
          insertLastItem(list.next, content);
        }
      };
      insertLastItem(this.list, content);
    },
    deleteTodoItem(id: number) {
      const deleteItem = (
        head: TodoItem | null,
        id: number
      ): TodoItem | null => {
        if (head?.id === id) return head.next;
        let cur = head;
        let prev = head?.next;
        while (prev) {
          if (cur && prev && prev.id === id) {
            cur.next = prev.next;
          }
          cur = cur && cur.next;
          prev = prev.next;
        }
        return head;
      };
      this.list = deleteItem(this.list, id);
    },
    editTodoItem(id: number, content: string) {
      const changeItemStatus = (
        list: TodoItem | null,
        id: number,
        content: string
      ) => {
        if (list) {
          if (list.id === id) {
            return (list.content = content);
          } else {
            changeItemStatus(list.next, id, content);
          }
        } else {
          console.log("未找到要修改的项");
        }
      };
      changeItemStatus(this.list, id, content);
    },
    changeStatus(id: number, status: boolean) {
      const changeItemStatus = (
        list: TodoItem | null,
        id: number,
        status: boolean
      ) => {
        if (list) {
          if (list.id === id) {
            return (list.status = status);
          } else {
            changeItemStatus(list.next, id, status);
          }
        } else {
          console.log("未找到要修改的项");
        }
      };
      changeItemStatus(this.list, id, status);
    },
  },
});

export default useTodoList;
