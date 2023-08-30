<template>
  <div class="arc-cont" v-if="show" v-html="this.videoIframe">
    </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      show : false,
      videoUrl: '<iframe src="https://api.arclight.org/videoPlayerUrl?refId=',
      videoLanguage: '1_529-',
      videoSegment: 'jf6104-0-0',
      videoSettings: '&playerStyle=default" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',
      videoIframe: ''
    };
  },
  created(){
    this.videoIframe = this.videoUrl + this.videoLanguage + this.videoSegment + this.videoSettings
    console.log (this.videoIframe)
  }
}
</script>
<style>
  .arc-cont{position:relative;display:block;margin:10px auto;width:100%}
  .arc-cont:after{padding-top:59%;display:block;content:""}
  .arc-cont>iframe{position:absolute;top:0;bottom:0;right:0;left:0;width:98%;height:98%;border:0}
</style>
