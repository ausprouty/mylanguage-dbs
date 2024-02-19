<template>
  <q-page padding>
    <div
      ref="svgContainer"
      style="width: 300px; height: auto; overflow: hidden"
    >
      <svg
        ref="svgMap"
        xmlns="http://www.w3.org/2000/svg"
        :width="svgWidth"
        :height="svgHeight"
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
import { nonReactiveMapData } from "src/assets/maps/continentMapData.js";
export default {
  mounted() {
    // Access the SVG elements
    const svgMap = this.$refs.svgMap;
    // Set the dimensions of the SVG container
    this.svgWidth = 300; // Width of the viewport
    this.svgHeight = 300 * (svgMap.clientHeight / svgMap.clientWidth);
    // Handle resize events
    window.addEventListener("resize", this.handleResize);
  },
  data() {
    return {
      svgWidth: 0,
      svgHeight: 0,
      continents: { ...nonReactiveMapData }, // Create a local copy
    };
  },
  methods: {
    navigateToContinent(countinentId) {
      console.log(countinentId);
      this.continentSelected = "Map" + countinentId;
      this.$router.push({
        name: this.continentSelected,
      });
    },
    handleResize() {
      const svgContainer = this.$refs.svgContainer;
      const svgMap = this.$refs.svgMap;

      // Update the dimensions of the SVG container
      this.svgWidth = 300; // Width of the viewport
      this.svgHeight = 300 * (svgMap.clientHeight / svgMap.clientWidth);
    },
  },
  beforeUnmount() {
    // Remove the resize event listener when the component is unmounted
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style scoped></style>
