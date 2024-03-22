<template>
    <div class="intro-video">
    <video autoplay loop>
      <source src="videoSource" type="mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<script>
export default {
    data() {
    return {
      videoSource: "https://i.imgur.com/scVOLT3.mp4"
    };
  }
}
</script>
<style scoped>

.intro-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
    
</style>