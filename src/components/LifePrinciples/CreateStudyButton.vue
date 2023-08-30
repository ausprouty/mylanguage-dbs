<template>
  <div v-if="this.ready">
    <q-btn push @click="createStudy" color="primary" label="Create Study" />
  </div>
</template>

<script>
import { api } from "boot/axios";
import { watch, ref } from "vue";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "CreateStudyButton",
  setup() {
    const languageStore = useLanguageStore();
    const language1State = ref(languageStore.getLanguage1);
    watch(
      () => languageStore.getLanguage1,
      (newValue) => {
        language1State.value = newValue.languageCodeHL;
      }
    );
    const language2State = ref(languageStore.getLanguage1);
    watch(
      () => languageStore.getLanguage2,
      (newValue) => {
        language2State.value = newValue.languageCodeHL;
      }
    );
    const lifeLessonState = ref(languageStore.getDbsLesson);
    watch(
      () => languageStore.getLifeLesson,
      (newValue) => {
        lifeLessonState.value = newValue;
      }
    );
    return {
      language1State,
      language2State,
      lifeLessonState,
      languageStore,
    };
  },
  data() {
    return {
      language1: null,
      language2: null,
      lifeLesson: this.$route.params.session,
      ready: false,
    };
  },
  watch: {
    language1State() {
      this.checkComplete();
    },
    language2State() {
      this.checkComplete();
    },
    lifeLessonState() {
      this.checkComplete();
    },
  },
  methods: {
    checkComplete() {
      if (
        typeof this.language1State != "undefined" &&
        typeof this.language2State != "undefined" &&
        this.lifeLessonState != null
      ) {
        this.ready = true;
      } else {
        this.ready = false;
      }
    },
    createStudy() {
      var url =
        "api/life/view/" +
        this.languageStore.lifeLesson +
        "/" +
        this.languageStore.language1.languageCodeHL +
        "/" +
        this.languageStore.language2.languageCodeHL;
        console.log (url)
      api.get(url).then((response) => {
        console.log(response);
        console.log("I am emitting");
        this.$emit("displayText", response.data);
      });
    },
  },
};
</script>
