<template>
  <q-page padding>
    <div class="center">
    <svg
      ref="svgElement"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      viewBox="0 0 1000 1001"
    >
      <path
        v-for="country in countries"
        :key="country.countryCode"
        :id="country.countryCode"
        :d="country.d"
        @click="navigateToCountry(country.countryCode, country.countryName)"
      />
    </svg>
  </div>
    <!-- content -->
  </q-page>
</template>

<script>
import { nonReactiveMapData } from 'src/assets/maps/africaMapData.js';
export default {
  mounted() {
    console.log("Screen width:", this.$q.screen.width);
    console.log("Screen height:", this.$q.screen.height);
    //window.addEventListener("resize", this.reScaleMap);
    //this.scaleMap(this.$q.screen.width, this.$q.screen.height )
  },
  data() {
    return {
      initialDistance: null,
      screenWidth: this.$q.screen.width,
      screenHeight:this.$q.screen.height,
      imageWidth: 468,
      imageHeight: 239,
      imageScale: 1,
      selectedCountry:'',
      countries: { ...nonReactiveMapData }, // Create a local copy
    }
  },
  methods: {
    navigateToCountry(countryCode,countryName) {
      this.$router.push({
        name: 'CountryLanguages',
        params: {
          countryCode: countryCode,
          countryName: countryName,
        }
      })
    },
    reScaleMap(){
     //console.log ('I am rescaling map')
     // this.scaleMap(this.screenWidth, this.screenHeight)
    },

    scaleMap(screenWidth, screenHeight){
      this.imageScale = 2.5
       const svgElement = this.$refs.svgElement;
       var offsetX = this.computeOffsetX(screenWidth); // Replace with your desired X-axis offset
       var offsetY = this.computeOffsetY(screenWidth);; // Replace with your desired Y-axis offset
       svgElement.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${this.imageScale})`;

       console.log (screenWidth + ' | ' + screenHeight + ' | ' + this.imageScale + ' | '+ offsetX + '|' + offsetY)
    },
    computeOffsetX(screenWidth){
      console.log (screenWidth)
    if (screenWidth < 1000){
      return screenWidth / 1.6
    }
    if (screenWidth < 1200){
      return screenWidth / 2.3
    }
    if (screenWidth < 2000){
      return screenWidth / 2
    }
    return screenWidth / 1.8
    },
    computeOffsetY(screenWidth){
      console.log (screenWidth)
      if (screenWidth < 700){
        return screenWidth/1.4
      }
      if (screenWidth < 1000){
        return screenWidth/1.4
      }
      if (screenWidth < 1300){
        return screenWidth/1.8
      }
      if (screenWidth < 2000){
        return screenWidth/2
      }
      return screenWidth/1.5

    },
    handleTouchStart(event) {
      const touches = event.touches;
      if (touches.length === 2) {
        const x1 = touches[0].clientX;
        const y1 = touches[0].clientY;
        const x2 = touches[1].clientX;
        const y2 = touches[1].clientY;

        this.initialDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      }
    },
    handleTouchMove(event) {
      const touches = event.touches;
      if (touches.length === 2 && this.initialDistance !== null) {
        const x1 = touches[0].clientX;
        const y1 = touches[0].clientY;
        const x2 = touches[1].clientX;
        const y2 = touches[1].clientY;

        const currentDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const scale = currentDistance / this.initialDistance;
        this.currentScale = scale;

        this.applyTransform();
      }
    },
    handleTouchEnd() {
      this.initialDistance = null;
    },
    applyTransform() {
      const svgElement = this.$refs.svgElement;
      svgElement.style.transform = `scale(${this.currentScale})`;
    }
  },


};
</script>

<style scoped>
path {
  stroke: #000; /* Stroke color (e.g., black) */
  stroke-width: 10; /* Stroke width (e.g., 2 pixels) */
  fill: var(--color-africa) /* Ensure that paths are not filled */
}
.center{
  text-align: center;
}
</style>
