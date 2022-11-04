import { createStore } from "vuex";
import axios from "axios";

interface State {
  entities: string[];
  loading: boolean;
}

export default createStore<State>({
  state: {
    entities: [],
    loading: false,
  },
  getters: {
    entities(state) {
      return state.entities;
    },

    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    setEntities(state, entities: string[]) {
      state.entities = entities;
    },

    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },
  actions: {
    getEntities({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}`).then((res) => {
        const entities: string[] = res.data;

        commit(
          "setEntities",
          Object.keys(entities).map(
            (entity) => `${entity[0].toUpperCase()}${entity.slice(1)}`
          )
        );
      });
    },

    setLoading({ commit }, loading) {
      commit("setLoading", loading);
    },
  },
  modules: {},
});
