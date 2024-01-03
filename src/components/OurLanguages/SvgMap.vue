<template>
   <div v-html = "this.mapImage" >
  </div>
</template>

<script>
export default {
  props:{
    map: String,
  },
  data() {
    return {
      mapImage: null,
    };
  },
  created() {
      this.mapImage = '<img src="/src/assets/maps/' + this.map + '.svg">'
      console.log (this.mapImage)
  },
  methods: {
    navigateToCountry(countryCode) {
      alert (countryCode)
    },
  },
};
</script>
