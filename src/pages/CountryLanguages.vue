<template>
  <div class="row items-start">
    <div  class="col-12">
      <h4>Languages in {{ this.$route.params.countryName }}</h4>
      <p>Which language do you speak?</p>
    </div>
    <div class="col-6">
      <!-- Loop through each card in the cards array -->
      <div
        v-for="language in languages"
        :key="language.languageCodeHL"
        class="col-6"
      >
        <q-card
          @click="handleLanguageClick(language)"
          class="full-width shadow-2 custom-card"
          :class="{'selected': this.selectedCard === language.languageCodeHL}"
          style="padding: 10px"
        >
          <div class="text-h6">
            {{ language.languageNameEnglish }}
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-6 parent-container">
      <div class="video top-div" v-html="this.iframe"></div>
    </div>
  </div>
</template>

<script>
import { api } from "boot/axios";
export default {
  name: "CountryLanguages",
  props: ["countryCode", "countryName"],
  data() {
    return {
      languages: [],
      selectedCard: null,
      languageCodeHL: null,
      iframe: "",
      iframeStart:
        '<iframe   src="https://api.arclight.org/videoPlayerUrl?refId=1_',
      iframeEnd: '-jf6111-0-0&start=22&end=47&playerStyle=default"></iframe>',
      iframeLanguageCodeJF: "",
    };
  },
  methods: {
    handleLanguageClick(language) {
      this.selectedCard= language.languageCodeHL
      console.log (this.selectedCard)
      if (language.languageCodeJF) {
        this.iframe = this.iframeStart + language.languageCodeJF + this.iframeEnd;
        console.log(this.iframe);
      } else {
        this.iframe = "No Audio";
      }
    },
  },
  mounted() {
    var url = "api/languages/country/" + this.$route.params.countryCode;
    console.log(url);
    api.get(url).then((response) => {
      this.languages = response.data;
      console.log(this.languages);
    });
  },
};
</script>
<style scoped>
.custom-card:hover {
  background-color: #ff0; /* Change to your desired color */
  transition: background-color 0.3s; /* Optional: adds a smooth transition effect */
}
.selected {
  background-color: #0F0;  /* Add your desired highlight color */
  /* Add any other styling for the selected card */
}
.video {
  margin: auto;
}
.parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* this centers the child elements horizontally */
}
.top-div {
  align-self: flex-start; /* aligns the div to the top of the container */
}

</style>
