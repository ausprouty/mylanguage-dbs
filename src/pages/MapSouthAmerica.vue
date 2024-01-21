<template>
  <q-page padding>
    <div class="center">

      <svg
        ref="svgElement"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height= "100%"
        viewBox="0 0 1000 1001"
      >
        <g
          v-for="country in countries"
          :key="country.id"
          :id="country.countryCode"
          :transform="country.transform"
          :class="country.class"
          @click="navigateToCountry(country.countryCode, country.countryName)"
        >
          <path
            v-for="pathData in country.paths"
            :key="pathData.id"
            :d="pathData.d"
            @click="navigateToCountry(country.countryCode, country.countryName)"
          />
        </g>
      </svg>
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import { nonReactiveMapData } from 'src/assets/maps/southAmericaMapData.js';
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
      countries: { ...nonReactiveMapData }, // Create a local copy

    };
  },

  methods: {
    navigateToCountry(countryCode, countryName) {
      this.$router.push({
        name: "CountryLanguages",
        params: {
          countryCode: countryCode,
          countryName: countryName,
        },
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
    if (screenWidth < 855){
      return screenWidth / 1.3
    }
    if (screenWidth < 1037){
      return screenWidth / 1.4
    }
    if (screenWidth < 1209){
      return screenWidth / 1.8
    }
    return screenWidth / 1.7
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
/**
 * Circles around small countries and territories
 *
 * Change opacity to 1 to display all circles
 *
 */
.circlexx {
  opacity: 0;
  fill: var(--color-south_america);
  stroke: #000000;
  stroke-width: 0.5;
}

/*
 * Smaller circles around subnational territories: Australian external territories, Chinese SARs, Dutch special municipalities, and French DOMs (overseas regions/departments) [but not French COMs (overseas collectivities)]
 *
 * Change opacity to 1 to display all circles
 */
.subxx {
  opacity: 0;
  fill:var(--color-south_america);
  stroke: #000000;
  stroke-width: 0.3;
}

/*
 * Land
 * (all land, as opposed to water, should belong to this class; in order to modify the coastline for land pieces with no borders on them a special class &quot;coastxx&quot; has been added below)
 */
.landxx {
  fill: var(--color-south_america);
  stroke: #ffffff;
  stroke-width: 0.5;
  fill-rule: evenodd;
}

/*
 * Styles for coastlines of islands and continents with no borders on them
 * (all of them should also belong to the class &quot;landxx&quot; - to allow for all land to be modified at once by refining &quot;landxx&quot; style's definition further down)
 */
.coastxx {
  stroke-width: 0.2;
}

/*
 * Styles for territories without permanent population (the largest of which is Antarctica)
 *
 * Change opacity to 0 to hide all territories
 */
.antxx {
  opacity: 1;
  fill: #c0c0c0;
}

/*
 * Circles around small countries without permanent population
 *
 * Change opacity to 1 to display all circles
 */
.noxx {
  opacity: 0;
  fill: #c0c0c0;
  stroke: #000000;
  stroke-width: 0.5;
}

/*
 * Styles for territories with limited or no recognition
 * (all of them - including Taiwan - are overlays (i.e. duplicate layers) over their &quot;host&quot; countries, and so not showing them doesn't leave any gaps on the map)
 *
 * Change opacity to 1 to display all territories
 */
.limitxx {
  opacity: 0;
  fill: #c0c0c0;
  stroke: #ffffff;
  stroke-width: 0.2;
  fill-rule: evenodd;
}

/*
 * Smaller circles around small territories with limited or no recognition
 *
 * Change opacity to 1 to display all circles
 */
.unxx {
  opacity: 0;
  fill: #c0c0c0;
  stroke: #000000;
  stroke-width: 0.3;
}

/*
 * Oceans, seas, and large lakes
 */
.oceanxx {
  opacity: 1;
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.5;
}

/*
 * Reserved class names:
 *
 * .eu - for members of European Union
 * .eaeu - for members of Eurasian Economic Union
 */

/*
 * Additional style rules
 *
 * The following are examples of colouring countries.
 * These can be substituted with custom styles to colour the countries on the map.
 *
 * Colour a few countries:
 *
 * .gb, .au, .nc
 * {
 * 	fill: #ff0000;
 * }
 *
 * Colour a few small-country circles (along with the countries):
 *
 * .ms, .ky
 * {
 * 	opacity: 1;
 * 	fill: #ff0000;
 * }
 *
 */
.center {
  text-align: center;
}
</style>
