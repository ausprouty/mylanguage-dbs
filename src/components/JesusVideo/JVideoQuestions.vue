<template>
  <div v-html = "this.questions" >
  </div>
</template>
<script>
import { api } from "boot/axios";
export default {
  name: 'JVideoPlayer',
  props:{
    languageCodeHL1 : String,
    languageCodeHL2 : String
  },
  data() {
    return {
      questions: '',
    };
  },
 created(){
    var url = 'api/jvideo/questions/'+ this.languageCodeHL1 + '/' + this.languageCodeHL2
    console.log (url)
    api.get(url).then((response) => {
      this.questions = response.data;
      console.log (this.questions)
    });
  }
}
</script>
