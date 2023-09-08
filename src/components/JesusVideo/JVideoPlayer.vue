<template>
  <div class="arc-cont" v-html="this.videoIframe"></div>
</template>

<script>
import { api } from "boot/axios";
export default {
  name: 'JVideoPlayer',
  props:{
    videoSegment: String,
    languageCodeHL : String
  },

  data() {
    return {
      show1 : false,
      iframeStart: '<iframe src="https://api.arclight.org/videoPlayerUrl?refId=',
      iframeEnd: '&playerStyle=default" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',
      videoIframe: null,


    };
  },
  created(){
        this.show1 = true
        console.log ('show videos')
        var url =  'api/video/code/JESUS/' + this.languageCodeHL
        console.log (url)
        api.get(url).then((response) => {
        var video1 = response.data.replace('-0-0', this.videoSegment)
        this.videoIframe = this.iframeStart + video1 + this.iframeEnd
        });
      }
}
</script>
<style>
  .arc-cont{position:relative;display:block;margin:10px auto;width:100%}
  .arc-cont:after{padding-top:59%;display:block;content:""}
  .arc-cont>iframe{position:absolute;top:0;bottom:0;right:0;left:0;width:98%;height:98%;border:0}
</style>
