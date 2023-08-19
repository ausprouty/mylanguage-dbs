<template>
  <div>
    <q-btn push @click="createTract" color="primary" label="View" />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { useGospelStore } from "stores/GospelStore";
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
    const gospelStore = useGospelStore();
    const language1State = ref(gospelStore.getLanguage1);
    return {
      language1State,
      gospelStore,
    };
  },
  methods: {
    createTract() {
      var url =
        "api/gospel/view/" +
        this.gospelStore.language1.webpage;
        console.log (url)
      api.get(url).then((response) => {
        console.log("I am emitting");
        this.$emit("displayText", response.data);
      });
    },
  },
};
</script>
