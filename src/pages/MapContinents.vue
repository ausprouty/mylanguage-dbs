<template>
  <q-page padding>
    <p>This is our page</p>
    <div ref="container"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
      <svg
        ref="svgElement"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1001"
      >
        <g
          v-for="continent in continents"
          :key="continent.id"
          :transform="continent.transform"
          :class="continent.class"
          @click="navigateToContinent(continent.id)"
        >
          <path
            v-for="pathData in continent.paths"
            :key="pathData.id"
            :class="pathData.class"
            :d="pathData.d"
            @click="navigateToContinent(continent.id)"
          />
        </g>
      </svg>
    </div>
  </q-page>
</template>

<script>
import { nonReactiveMapData } from 'src/assets/maps/continentMapData.js';
export default {
  mounted() {
    console.log("Screen width:", this.$q.screen.width);
    console.log("Screen height:", this.$q.screen.height);
    window.addEventListener("resize", this.reScaleMap);
    this.scaleMap(this.$q.screen.width, this.$q.screen.height )
  },
  data() {
    return {
      initialDistance: null,
      screenWidth: this.$q.screen.width,
      screenHeight:this.$q.screen.height,
      imageWidth: 468,
      imageHeight: 239,
      imageScale: 1,
      selectedContinent:'',
      continents: { ...nonReactiveMapData }, // Create a local copy
    }
  },
  methods: {
    navigateToContinent(countinentId) {
      console.log (countinentId)
      this.continentSelected = 'Map' + countinentId
      this.$router.push({
        name: this.continentSelected,
      });
    },
    reScaleMap(){
      console.log ('I am rescaling map')
      this.scaleMap(this.screenWidth, this.screenHeight)
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


</style>
