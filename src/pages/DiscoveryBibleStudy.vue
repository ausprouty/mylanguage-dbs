<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><BiblePassageSelect :session="session"/></div>
      <div><CreateStudyButton   @displayDbsText="handleDisplayDbsText"/></div>
      <div><PdfButton :text="text"  :filename="filename"/></div>
      <hr />
      <div id="pdfText" v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/DiscoveryBibleStudy/LanguageSelect.vue";
import BiblePassageSelect from "components/DiscoveryBibleStudy/BiblePassageSelect.vue";
import CreateStudyButton from "components/DiscoveryBibleStudy/CreateStudyButton.vue";
import PdfButton from "src/components/PdfButton.vue";
export default {
  name: "DiscoveryBibleStudy",
  props: ['languageCodeHL1','languageCodeHL2','session'],
  components: {
    LanguageSelect,
    BiblePassageSelect,
    CreateStudyButton,
    PdfButton
  },
  data() {
    return {
      text: "",
      filename: 'DBS'
    };
  },
  methods:{
    handleDisplayDbsText(response){
      this.text = response
    }
  }
};
</script>
