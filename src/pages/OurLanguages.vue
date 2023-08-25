<template>
  <q-page padding>
    <div>
      <p>Let's have a conversation.</p>
      <p>What languages do we speak?</p>
      <div><LanguageSelect /></div>
      <div><ContentAvailableButton @displayText="handleDisplay" /></div>

      <div v-if="this.available.dbs">
        <p >Life Principles</p>
        <p>Discovery Bible Study</p>
      </div>
      <div v-if="this.available.bilingualGospel">
        <p>Bi-lingual Gospel Tracts</p>
      </div>
      <div v-if="this.available.video">
        <p>Jesus Video</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/OurLanguages/LanguageSelect.vue";
import ContentAvailableButton from "src/components/OurLanguages/ContentAvailableButton.vue";

export default {
  name: "OurLanguages",
  props: ["languageCodeHL1", "languageCodeHL2"],
  components: {
    LanguageSelect,
    ContentAvailableButton,
  },
  data() {
    return {
      available: {
        dbs: false,
        bilingualGospel: false,
        video: false

      },
    };
  },
  methods: {
    handleDisplay(response) {
      this.available = response;
    },
  },
};
</script>
