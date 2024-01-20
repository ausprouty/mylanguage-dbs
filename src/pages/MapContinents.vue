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

       if (screenWidth == 412){
          this.imageScale = 2.5 ;
        }
       else if (screenWidth == 280){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 360){
          this.imageScale = 2.5 ;
        }
        else if(screenWidth == 375){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 390){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 412){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 414){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 430){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 540){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 768){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 820){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 912){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 1024){
          this.imageScale = 2.5 ;
        }
        else if (screenWidth == 1280){
          this.imageScale = 2.5 ;
        }
        else{
          var widthScale = screenWidth/this.imageWidth
          var heightScale = screenHeight/this.imageHeight
          this.imageScale = widthScale
          if (widthScale > heightScale){
            this.imageScale = heightScale
          }
          this.imageScale = 2.5
        }
       const svgElement = this.$refs.svgElement;
       //this.imageScale = 1.4;
       //svgElement.style.transform = `scale(${this.imageScale})`;
       var offsetX = this.computeOffsetX(screenWidth); // Replace with your desired X-axis offset
       var offsetY = this.computeOffsetY(screenHeight);; // Replace with your desired Y-axis offset
       svgElement.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${this.imageScale})`;

       console.log (screenWidth + ' | ' + screenHeight + ' | ' + this.imageScale + ' | '+ offsetX + '|' + offsetY)
    },
    computeOffsetX(screenWidth){
      console.log (screenWidth)
      if (screenWidth == 280){
        return  170;
      }
      if (screenWidth == 360){
        return  225;
      }
      if (screenWidth == 375){
        return  235;
      }
      if (screenWidth == 390){
        return  240;
      }
      if (screenWidth == 412){
        return  260;
      }
      if (screenWidth == 414){
        return  260;
      }
      if (screenWidth == 430){
        return  270;
      }
      if (screenWidth == 540){
        return  350;
      }
      if (screenWidth == 768){
        return  470;
      }
      if (screenWidth == 820){
        return  500;
      }
      if (screenWidth == 912){
        return  570;
      }
      if (screenWidth == 1024){
        return  450;
      }
      if (screenWidth == 1280){
        return  600;
      }
      if (screenWidth == 2270){
        return  1550;
      }
      if (screenWidth <=1400){
        return  600;
      }
      return 1550;
    },
    computeOffsetY(screenHeight){
      console.log (screenHeight)
      if (screenHeight == 653){
        return  200;
      }
      if (screenHeight == 667){
        return  300;
      }
      if (screenHeight == 720){
        return  400;
      }
      if (screenHeight == 740){
        return  250;
      }
      if (screenHeight == 800){
        return  700;
      }
      if (screenHeight == 844){
        return  300;
      }
      if (screenHeight == 896){
        return  300;
      }
      if (screenHeight == 914){
        return  300;
      }
      if (screenHeight == 915){
        return  300;
      }
      if (screenHeight == 932){
        return  300;
      }
      if (screenHeight == 1024){
        return  550;
      }
      if (screenHeight == 1180){
        return  600;
      }
      if (screenHeight == 1366){
        return  500;
      }
      if (screenHeight == 1368){
        return  700;
      }
      if (screenHeight == 1648){
        return  1800;
      }
      if (screenHeight <=720){
        return  499;
      }
      if (screenHeight <=1400){
        return  599;
      }
      return 700;
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
