import { defineStore } from "pinia";

export const useLanguageStore = defineStore("GospelStore", {
  state: () => ({
    language1: null,
    logic: null,
  }),
  getters: {
    getLanguage1() {
      return this.language1;
    },
  },
  actions: {
    updateLanguage1(newValue) {
      this.language1 = newValue;
    },
  },
});
