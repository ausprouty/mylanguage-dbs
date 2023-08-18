<template>
  <div v-if="this.ready">
    <q-btn push @click="createTract" color="primary" label="Create Study" />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { watch, ref } from "vue";
import { useGospelStore } from "stores/DbsStore";
export default {
  name: "CreateStudyButton",
  setup() {
    const gospelStore = useGospelStore();
    const language1State = ref(gospelStore.getLanguage1);
    watch(
      () => gospelStore.getLanguage1,
      (newValue) => {
        language1State.value = newValue.languageCodeHL;
      }
    );
    return {
      language1State,
      gospelStore,
    };
  },
  data() {
    return {
      language1: null,
      ready: false,
    };
  },
  watch: {
    language1State() {
      this.checkComplete();
    },



  },
  methods: {
    checkComplete() {
      if (
        typeof this.language1State != "undefined"
      ) {
        this.ready = true;
      } else {
        this.ready = false;
      }
    },
    createTract() {
      var url =
        "api/gospel/view/" +
        this.gospelStore.language1.webpage;
      api.get(url).then((response) => {
        console.log("I am emitting");
        this.$emit("displayText", response.data);
      });
    },
  },
};
</script>
