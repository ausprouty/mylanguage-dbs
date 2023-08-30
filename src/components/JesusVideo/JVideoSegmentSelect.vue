<template>
  <div>
    <q-select
      filled
      v-model="segment"
      :options="segments"
      option-label="title"
      option-value="videoSegment"
      @update:model-value="updateSegment"
      label="Video Segment"
    />
  </div>
  <div v-if="this.ready">
    <q-btn push @click="showVideo" color="primary" label="Show Video" />
  </div>
</template>

<script>
import { watch, ref } from "vue";
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: "JVideoSegmentSelect",
  setup() {
    const languageStore = useLanguageStore();
    const language1State = ref(languageStore.getLanguage1);
    watch(
      () => languageStore.getLanguage1,
      (newValue) => {
        language1State.value = newValue;
      }
    );
    const language2State = ref(languageStore.getLanguage1);
    watch(
      () => languageStore.getLanguage2,
      (newValue) => {
        language2State.value = newValue;
      }
    );
    return {
      language1State,
      language2State,
      languageStore,
    };
  },
  data() {
    return {
      ready:false,
      segment: this.$route.params.segment,
      segments: [],
    };
  },
  watch: {
    language1State() {
      this.showSegments();
    },
    language2State() {
      this.showSegments();
    },
  },

  created() {
    this.getSegmentList()
    this.languageStore.updateJVideoSegment(this.$route.params.segment);
  },
  methods: {
    getSegmentList() {
      //$url = 'api/jvideo/segments/'+ this.language1State.languageCodeHL + '/' + this.language2State.languageCodeHL
      var url = 'api/jvideo/segments/eng00/aln00';
      console.log (url)
      api.get(url).then((response) => {
        this.segments = response.data;
      });
    },
    updateSegment() {
      this.ready = true;
      this.languageStore.updateJVideoSegment(this.segment.videoSegment);
    },
  },
};
</script>
