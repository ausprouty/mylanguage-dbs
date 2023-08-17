<template>
  <div>
    <q-select
      filled
      v-model="study"
      :options="supportedPassages"
      option-label="title"
      option-value="lesson"
      @update:model-value="updatePassage"
      label="Bible Passage"
    />
  </div>
  {{ this.scope }}
</template>

<script>
import { watch, ref } from "vue";
import { api } from "boot/axios";
import { useDbsStore } from "stores/DbsStore";
export default {
  name: "BiblePassageSelect",
  setup() {
    const dbsStore = useDbsStore();
    const language1State = ref(dbsStore.getLanguage1);
    watch(
      () => dbsStore.getLanguage1,
      (newValue) => {
        language1State.value = newValue;
      }
    );
    const language2State = ref(dbsStore.getLanguage1);
    watch(
      () => dbsStore.getLanguage2,
      (newValue) => {
        language2State.value = newValue;
      }
    );
    return {
      language1State,
      language2State,
      dbsStore,
    };
  },
  data() {
    return {
      study: this.$route.params.session,
      passages: [],
      supportedPassages: [],
      scope: null,
    };
  },
  watch: {
    language1State() {
      this.showPassages();
    },
    language2State() {
      this.showPassages();
    },
  },
  mounted() {
    api.get("api/dbs/studies").then((response) => {
      this.passages = response.data;
      this.supportedPassages = this.passages;
      this.Passages();
    });
  },
  created() {
    this.dbsStore.updateLesson(this.$route.params.session)
  },
  methods: {
    showPassages() {
      if (this.language1State == null || this.language2State == null) {
        this.showAllPassages();
        return;
      } else if (
        typeof this.language1State.collectionCode == "undefined" ||
        typeof this.language2State.collectionCode == "undefined"
      ) {
        this.showAllPassages();
        return;
      } else if (
        this.language1State.collectionCode == "C" &&
        this.language2State.collectionCode == "C"
      ) {
        this.showAllPassages();
        return;
      } else {
        this.showNTPassages();
      }
    },
    showAllPassages() {
      this.supportedPassages = this.passages;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.lesson == this.$route.params.session) {
          this.study = line.title;
        }
      }
    },
    showNTPassages() {
      this.supportedPassages = [];
      this.study = null;
      for (var i = 0; i < this.passages.length; i++) {
        var line = this.passages[i];
        if (line.testament == "NT") {
          this.supportedPassages.push(line);
          if (line.lesson == this.$route.params.session) {
            this.study = line.title;
          }
        }
      }
    },
    updatePassage() {
      this.dbsStore.updateLesson(this.study.lesson);
    },
  },
};
</script>
