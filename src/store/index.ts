import { createStore } from "vuex";
import axios from "axios";

interface State {
  entities: string[];
}

export default createStore<State>({
  state: {
    entities: [],
  },
  getters: {},
  mutations: {
    SET_ENTITIES(state, entities: string[]) {
      state.entities = entities;
    },
  },
  actions: {
    getEntities({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}`).then((res) => {
        const entities: string[] = res.data;

        commit(
          "SET_ENTITIES",
          Object.keys(entities).map(
            (entity) => `${entity[0].toUpperCase()}${entity.slice(1)}`
          )
        );
      });
    },
  },
  modules: {},
});
