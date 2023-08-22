<template>
  <div>
    <q-btn push @click="createTract" color="primary" label="View" />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
import { ref } from "vue";
export default {
  name: "DisplayButton",
  data() {
    return {
      language1: null,
      ready: false,
    };
  },
  setup() {
    const languageStore = useLanguageStore();
    const language1State = ref(languageStore.getLanguage1);
    return {
      language1State,
      languageStore,
    };
  },
  methods: {
    createTract() {
      var url = "api/gospel/view/" + this.languageStore.language1.webpage;
      console.log(url);
      api.get(url).then((response) => {
        console.log("I am emitting");
        this.$emit("displayText", response.data);
      });
    },
  },
};
</script>
