<template>
  <q-page padding>
    <div>
      <div><LanguageSelect /></div>
      <div><DisplayButton  @displayText="handleDisplay"/></div>
      <hr />
      <div id="text" v-html="this.text"></div>
    </div>
  </q-page>
</template>

<script>
import LanguageSelect from "components/Gospel/LanguageSelect.vue";
import DisplayButton from "components/Gospel/DisplayButton.vue";
export default {
  name: "DiscoveryBibleStudy",
  props: ['languageCodeHL1','languageCodeHL2','session'],
  components: {
    LanguageSelect,
    DisplayButton,
  },
  data() {
    return {
      text: "",
    };
  },
  methods:{
    handleDisplay(response){
      this.text = response
    }
  }
};
</script>
