<template>
  <q-page padding>
    <ul v-for="language in languages" :key="language.languageCodeHL">
      <li @click="handleLanguageClick(language.languageCodeHL)">
          {{ language.languageNameEnglish }}
      </li>
    </ul>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
export default {
  name: 'CountryLanguages',
  props: ['countryCode'],
  data() {
    return {
      languages: [],
    };
  },
  methods:{
    handleLanguageClick(languageCode){
      alert (languageCode)
    }
  },
  mounted() {
    var url = 'api/languages/country/' + this.$route.params.countryCode
    api.get(url).then((response) => {
      this.languages = response.data;
      console.log (this.languages)
    });
  }
}
</script>
