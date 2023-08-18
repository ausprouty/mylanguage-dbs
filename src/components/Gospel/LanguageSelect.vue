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
import { useGospelStore } from "stores/GospelStore";
import { useQuasar } from "quasar";
export default {
  name: "GospelLanguageSelect",
  setup() {
    const gospelStore = useGospelStore();
    return {
      gospelStore,
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
        if (line.languageCodeHL == this.$route.params.languageCodeHL1) {
          this.language1 = line;
        }
      }
    },
    updateLanguage1() {
      this.gospelStore.updateLanguage1(this.language1);
    },
  },
};
</script>
