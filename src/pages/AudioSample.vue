<template>
  <q-page padding>
    <div class="arc-cont"><iframe class="reduced"  src="https://api.arclight.org/videoPlayerUrl?refId=1_529-jf6103-0-0&playerStyle=autoplay" ></iframe>
     Button
</div>

<div class="container">
    <img src="your-image.jpg" alt="Overlay Image" class="overlay-image">
    <div class="content">
      <iframe class="reduced"  src="https://api.arclight.org/videoPlayerUrl?refId=1_529-jf6103-0-0&playerStyle=autoplay" ></iframe>
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
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
