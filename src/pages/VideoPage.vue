<template>
  <q-page padding>
    <div> <VideoPlayer /></div>

    <div> <VideoPlayer /></div>


    <!-- content -->
  </q-page>
</template>

<script>
import VideoPlayer from "components/Video/VideoPlayer.vue";

export default {
   name: 'VideoPage',
   components: {
    VideoPlayer,
  },
  
}
</script>
