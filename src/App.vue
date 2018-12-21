<template>
  <div id="app" class="container is-fluid">
    <div class="columns is-marginless">
      <div class="column mapview">
        <GlobeMap :rotation="rotation" :scale="scale" ref="gmap">
          <MapSymbolLayer :layer="layer"/>
        </GlobeMap>
      </div>
      <div class="column is-4 has-background-light sidebar">
        <div class="content">
          <h1>D3 map experiment</h1>
        </div>
        <div>
          <button class="button" @click="toggleSpin">Toggle spin</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { timer, Timer } from "d3-timer";
import GlobeMap from "./components/GlobeMap.vue";
import MapSymbolLayer from "./components/MapSymbolLayer.vue";

import { MARKERS } from "./markers";

const velocity = [0.015, -0.005];
let rotate = [19.666666666666664, -30];

@Component({
  components: {
    GlobeMap,
    MapSymbolLayer
  }
})
export default class App extends Vue {
  rotation = rotate;
  scale = 400;
  timer!: Timer;
  layer = MARKERS;
  spin = false;

  mounted() {
    //this.toggleSpin();
  }

  toggleSpin() {
    if (!this.spin) {
      if (this.timer) {
        this.timer.stop();
      }
      this.timer = timer(dt => {
        this.rotation = [
          rotate[0] + velocity[0] * dt,
          rotate[1] + velocity[1] * dt
        ];
      });
      this.spin = true;
    } else {
      if (this.timer) {
        this.timer.stop();
        rotate = (this.$refs.gmap as any).getRotation();
      }
      this.spin = false;
    }
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.mapview {
  margin-left: 32px;
}

.sidebar {
  height: 100vh;
}
</style>
