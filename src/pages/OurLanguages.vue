<template>
  <q-page padding>
    <div>
      <p>Let's have a conversation.</p>
      <p>What languages do we speak?</p>
      <div><LanguageSelect /></div>
      <div><ContentAvailableButton @displayText="handleDisplay" /></div>
      <br/><br />
      <div v-if="this.available.dbs">
        <p  @click="seeLifePrinciples">Life Principles</p>
        <p @click="seeDBS">Discovery Bible Study</p>
      </div>
      <div v-if="this.available.bilingualGospel">
        <p @click="seeGospelTract">Bi-lingual Gospel Tracts</p>
      </div>
      <div v-if="this.available.video">
        <p @click="seeVideo">Jesus Video</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/OurLanguages/LanguageSelect.vue";
import ContentAvailableButton from "src/components/OurLanguages/ContentAvailableButton.vue";
import { useLanguageStore } from "stores/LanguageStore";

export default {
  name: "OurLanguages",
  props: ["languageCodeHL1", "languageCodeHL2"],
  components: {
    LanguageSelect,
    ContentAvailableButton,
  },
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  data() {
    return {
      available: {
        dbs: false,
        bilingualGospel: false,
        video: false

      },
      link: null,
    };
  },
  methods: {

    handleDisplay(response) {
      this.available = response;
      this.goNow()
    },
    seeLifePrinciples(){
      this.goNow('LifePrinciples')
    },
    seeDBS(){
      this.goNow('DiscoveryBibleStudy')
    },
    seeGospelTract(){
      this.goNow('GospelTract')
    },
    seeVideo(){
      this.goNow('VideoPage')
    },
    goNow(linkPage){
      this.$router.push({
        name: linkPage,
        params: {
          languageCodeHL1:  this.languageStore.getLanguage1HLCode,
          languageCodeHL2:  this.languageStore.getLanguage2HLCode
        },
      })

    }
  },
};
</script>
