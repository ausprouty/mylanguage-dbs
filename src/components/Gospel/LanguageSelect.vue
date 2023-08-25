<template>
  <div>
    <q-select
      filled
      v-model="language1"
      :options="languages"
      option-label="name"
      option-value="languageCodeHL"
      @update:model-value="updateLanguage1"
      label="Language"
    /><br />
    <br />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
import { useQuasar } from "quasar";
export default {
  name: "GospelLanguageSelect",
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      language1: "",
      languages: [],
    };
  },
  created() {
    api.get("api/gospel/languages").then((response) => {
      this.languages = response.data;
      this.insertLanguages();
      this.updateLanguage1();
    });
  },
  methods: {
    insertLanguages() {
      for (var i = 0; i < this.languages.length; i++) {
        var line = this.languages[i];
      //  if (line.languageCodeHL == this.$route.params.languageCodeHL1) {
        if (line.languageCodeHL == this.languageStore.getLanguage2) {
          this.language1 = line;
        }
      }
    },
    updateLanguage1() {
      this.languageStore.updateLanguage1(this.language1);
    },
  },
};
</script>
