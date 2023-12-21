<template>
  <q-page padding>


    <div class="container">
        <button @click="playAudio"> PlaY Audio</button>
      <div class="reduced" v-html="this.iframe"></div>

  </div>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
   name: 'AudioSample',
   data() {
    return {
      iframe: '',
      audioIframe: '<iframe   src="https://api.arclight.org/videoPlayerUrl?refId=1_529-jf6103-0-0&playerStyle=default&autoplay=true"></iframe>',
    };
  },
  methods:{
    playAudio(){
      this.iframe = this.audioIframe;
    }
  }

}
</script>
<style scoped>
   .hiddenv{
     position: absolute;
    left: -9999px;
   }
   .reduced{
     width:60px;
     height:30px;
     overflow-y: hidden;
     overflow-x: hidden;
   }
</style>
