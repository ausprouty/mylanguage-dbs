<template>
  <q-page padding>
    <p>ScreenWidth: {{ screenWidth }}</p>
    <div ref="svgContainer" :style="containerStyle">
      <svg
        ref="svgMap"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="'0 0 ' + viewBoxWidth + ' ' + viewBoxHeight"
        :width="containerWidth"
        :height="containerHeight"
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
      containerWidth: 468,
      containerHeight: 350,
      viewBoxWidth: 468,
      viewBoxHeight: 250,
      continents: { ...nonReactiveMapData }, // Create a local copy
    };
  },
  computed: {
    containerStyle() {
      return {
        width: this.containerWidth + "px",
        height: this.containerHeight + "px",
        overflow: "hidden",
        marginLeft: `calc((100% - ${this.containerWidth}px) / 2)`, // Center horizontally
      };
    },
  },
  mounted() {
    this.updateScreenWidth();
    window.addEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth < 500) {
        console.log("I am resetting container size");
        this.containerWidth = this.screenWidth - 30;
        this.containerHeight = this.containerWidth * (350 / 468);
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
};
</script>
<style scoped></style>
