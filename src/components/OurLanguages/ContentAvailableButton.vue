<template>
  <div>
    <q-btn
      push
      @click="findAvailableContent"
      color="primary"
      label="What are our options?"
    />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  methods: {
    findAvailableContent() {
      console.log("findOptions");
      var url =
        "api/content/available/" +
        this.languageStore.language1.languageCodeHL +
        "/" +
        this.languageStore.language2.languageCodeHL;
      api.get(url).then((response) => {
        console.log(response);
        this.$emit("displayText", response.data);
      });
    },
  },
};
</script>
