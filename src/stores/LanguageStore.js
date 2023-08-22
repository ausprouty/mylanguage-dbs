import { defineStore } from "pinia";

export const useLanguageStore = defineStore("LanguageStore", {
  state: () => ({
    language1: null,
    language2: null,
    lesson: null,
  }),
  getters: {
    getUrl() {
      var url =
        this.language1.languageCodeHL +
        "/" +
        this.language2.languageCodeHL +
        "/" +
        this.lesson;
      return url;
    },
    getLanguage1() {
      return this.language1;
    },
    getLanguage2() {
      return this.language2;
    },
    getLesson() {
      return this.lesson;
    },
  },
  actions: {
    updateLanguage1(newValue) {
      this.language1 = newValue;
    },
    updateLanguage2(newValue) {
      this.language2 = newValue;
    },
    updateLesson(newValue) {
      this.lesson = newValue;
    },
  },
});
