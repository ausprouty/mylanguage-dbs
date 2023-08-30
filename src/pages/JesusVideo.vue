<template>
  <q-page padding>
    <div> <JVideoSegmentSelect /></div>
    <div> <VideoPlayer /></div>
    <!-- content -->
  </q-page>
</template>

<script>
import VideoPlayer from "components/JesusVideo/VideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";

export default {
   name: 'JesusVideo',
   components: {
    VideoPlayer,
    JVideoSegmentSelect,
  },

}
</script>
