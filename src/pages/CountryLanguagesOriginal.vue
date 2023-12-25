<template>
  <div>
    <q-layout view="hHh lpR fFf">
      <!-- Left Side -->
      <q-layout-section>
        <q-page-container>
          <q-col cols="6">
            <div style="background-color: #eee; height: 100vh">
              <h4>Languages in {{ this.$route.params.countryName }}</h4>
              <p>Which language do you speak?</p>
              <ul v-for="language in languages" :key="language.languageCodeHL">
                <li @click="handleLanguageClick(language.languageCodeJF)">
                  {{ language.languageNameEnglish }}
                </li>
              </ul>
              <iframe   src="https://api.arclight.org/videoPlayerUrl?refId=1_496-jf6103-0-0&playerStyle=default&autoplay=true"></iframe>
            </div>
          </q-col>
        </q-page-container>
      </q-layout-section>

      <!-- Right Side -->
      <q-layout-section>
        <q-page-container>
          <q-col cols="6">
            <div style="background-color: #ccc; height: 100vh">
              <div v-html="this.iframe"></div>
              <!-- Loop through each card in the cards array -->
              <div
                v-for="language in languages"
                :key="language.languageCodeHL"
                class="col-6"
              >
                <q-card class="full-width shadow-2">
                    <div>
                      {{ language.languageNameEnglish }}
                    </div>
                </q-card>
              </div>
            </div>
          </q-col>
        </q-page-container>
      </q-layout-section>
    </q-layout>
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
      selectedOption: "",
      iframe: "",
      iframeStart:
        '<iframe   src="https://api.arclight.org/videoPlayerUrl?refId=1_',
      iframeEnd: '-jf6103-0-0&playerStyle=default&autoplay=true"></iframe>',
      iframeLanguageCodeJF: "",
    };
  },
  methods: {
    handleLanguageClick(languageCodeJF) {
      if (languageCodeJF) {
        this.iframe = this.iframeStart + languageCodeJF + this.iframeEnd;
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
