<template>
  <q-page padding>
    <p>{{ screenWidth }}</p>
    <div
      ref="svgContainer"
      style="width: 468px; height: 350px; overflow: hidden"
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
  data() {
    return {
      screenWidth: 0,
      svgWidth: 468,
      svgHeight: 350,
      continents: { ...nonReactiveMapData }, // Create a local copy
    };
  },
  mounted() {
    this.updateScreenWidth();
    window.addEventListener("resize", this.updateScreenWidth);
    this.$nextTick(() => {
      this.calculateDimensions();
    });
    //window.addEventListener('resize', this.handleResize);
  },
  methods: {
    navigateToContinent(countinentId) {
      console.log(countinentId);
      this.continentSelected = "Map" + countinentId;
      this.$router.push({
        name: this.continentSelected,
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    calculateDimensions() {
      const svgMap = this.$refs.svgMap;
      console.log(svgMap);
      if (svgMap && svgMap.clientWidth !== 0) {
        this.svgHeight = 300 * (svgMap.clientHeight / svgMap.clientWidth);
      }
    },
    handleResize() {
      this.calculateDimensions();
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("resize", this.updateScreenWidth);
  },
};
</script>
<style scoped></style>
