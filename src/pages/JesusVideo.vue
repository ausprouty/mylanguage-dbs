<template>
  <q-page padding>
    <div> <JVideoSegmentSelect  @showVideo="handleShowVideo"/></div>
    <div v-if="this.videoSegment">
      <div> <VideoPlayer :videoSegment="this.videoSegment" :languageCodeHL="this.$route.params.languageCodeHL1 "/></div>
      <div> <VideoPlayer :videoSegment="this.videoSegment" :languageCodeHL="this.$route.params.languageCodeHL2 "/></div>
      <div><JVideoQuestions
              :languageCodeHL1="this.$route.params.languageCodeHL1"
              :languageCodeHL2="this.$route.params.languageCodeHL2"/>
      </div>
  </div><!-- content -->
  </q-page>
</template>

<script>
import VideoPlayer from "src/components/JesusVideo/JVideoPlayer.vue";
import JVideoSegmentSelect from "src/components/JesusVideo/JVideoSegmentSelect.vue";
import JVideoQuestions from "src/components/JesusVideo/JVideoQuestions.vue";

export default {
   name: 'JesusVideo',
   components: {
    VideoPlayer,
    JVideoSegmentSelect,
    JVideoQuestions
  },
  data() {
    return {
      videoSegment: null,
    };
  },
  methods:{
    handleShowVideo(response){
      console.log ('handle showVideo')
      console.log (response)
      this.videoSegment = response


    }
  }

}
</script>
