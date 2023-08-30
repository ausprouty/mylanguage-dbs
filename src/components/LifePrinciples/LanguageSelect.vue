<template>
  <div>
    <q-select
      filled
      v-model="language1"
      :options="languages"
      option-label="name"
      option-value="languageCodeHL"
      @update:model-value="updateLanguage1"
      label="First Language"
    /><br />
    <q-select
      filled
      v-model="language2"
      option-label="name"
      option-value="languageCodeHL"
      @update:model-value="updateLanguage2"
      :options="languages"
      label="Second Language"
    /><br />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "LanguageSelect",
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      language1: "",
      language2: "",
      languages: [],
    };
  },
  created() {
    api.get("api/dbs/languages").then((response) => {
      this.languages = response.data;
      this.insertLanguages();
      this.updateLanguage1();
      this.updateLanguage2();
    });
  },
  methods: {
    insertLanguages() {
      for (var i = 0; i < this.languages.length; i++) {
        var line = this.languages[i];
        if (line.languageCodeHL == this.$route.params.languageCodeHL1) {
          this.language1 = line;
        }
        if (line.languageCodeHL == this.$route.params.languageCodeHL2) {
          this.language2 = line;
        }
      }
    },
    updateLanguage1() {
      this.languageStore.updateLanguage1(this.language1);
    },
    updateLanguage2() {
      this.languageStore.updateLanguage2(this.language2);
    },
  },
};
</script>
