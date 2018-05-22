<template>
  <v-container class="c-results-map" fluid>
    <iframe
      class="c-gmap"
      width="100%"
      height="100%"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCZ_Hc8fdPmCeGuk595Tq-o1GVBqVawDrM
        &center=34.0245691,-81.3237312&zoom=14">
    </iframe>
  </v-container>
</template>

<style scoped>
.c-results-map {
  height: 100%;
  padding: 0;
  position: relative;
}
.c-gmap {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
