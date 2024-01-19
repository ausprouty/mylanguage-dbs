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
        transform="scale(1)"
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
console.log(nonReactiveMapData);
export default {
  created() {
    console.log(this.continents);
  },
  data() {
    return {
      initialDistance: null,
      currentScale: 3,
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
.center {
  text-align: center;
}

</style>
