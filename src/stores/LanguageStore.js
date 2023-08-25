import { defineStore } from "pinia";

export const useLanguageStore = defineStore("LanguageStore", {
  state: () => ({
    language1: null,
    language2: null,
    dbsLesson: null,
    lifeLesson: null,
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
    getDbsLesson() {
      return this.dbsLesson;
    },
    getLifeLesson() {
      return this.lifeLesson;
    }
  },
  actions: {
    updateLanguage1(newValue) {
      this.language1 = newValue;
    },
    updateLanguage2(newValue) {
      this.language2 = newValue;
    },
    updateDbsLesson(newValue) {
      this.dbsLesson = newValue;
    },
    updateLifeLesson(newValue) {
      this.lifeLesson = newValue;
    },
  },
});
