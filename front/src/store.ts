import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface Task {
  id: number;
  name: string;
  done: boolean;
}

export interface RootState {
  tasks: Task[];
  nextTaskId: number;
}

// export type Mutation<T, S> = (state: T, payload: S) => T;

export type Mutation<T, S> = (state: T, payload: S) => void;

const initialTasks: Task[] = [
  {
    id: 1,
    name: 'buy milk',
    done: false,
  },
  {
    id: 2,
    name: 'swim',
    done: true,
  },
];

const addTask: Mutation<RootState, Task> = (state: RootState, { name }: Task): void => {
  // return {
  //  tasks: [...state.tasks, { id: state.nextTaskId, name, done: false }],
  //  nextTaskId: state.nextTaskId++,
  // };

  state.tasks.push({
    id: state.nextTaskId, name, done: false,
  });

  state.nextTaskId++;
};

const toggleTaskStatus: Mutation<RootState, Task> = (state, { id }: Task): void => {
  // return {
  //  tasks: state.tasks.map((t) => {
  //    return t.id === id ? { id: t.id, name: t.name, done: !t.done } : t;
  //  }),
  //  nextTaskId: state.nextTaskId,
  // };

  const filtered = state.tasks.filter((task) => task.id === id);
  filtered.forEach((task) => { task.done = !task.done; });
};

const store = new Vuex.Store({
  state: {
    tasks: initialTasks,
    nextTaskId: 3,
  },
  mutations: {
    addTask,
    toggleTaskStatus,
  },
});

export default store;
