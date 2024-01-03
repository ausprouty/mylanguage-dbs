<template>
  <q-page padding>
    <p>Test Map</p>
    <SvgMap :map="map"/>
  </q-page>
</template>

<script>
import SvgMap from "components/OurLanguages/SvgMap.vue";
export default {
  components: {
    SvgMap
  },
  data() {
    return {
      map:'SouthAmerica',
    };
  },
  methods: {
    navigateToCountry(countryCode) {
      alert (countryCode)
    },
  },

};
</script>
