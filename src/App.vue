<template>
  <div id="app" class="container is-fluid">
    <div class="columns is-marginless">
      <div class="column mapview">
        <GlobeMap :rotation="rotation" :scale="scale" ref="gmap">
          <MapSymbolLayer :layer="layer"/>
        </GlobeMap>

      </div>
      <div class="column is-4 has-background-white-bis sidebar">
        <div class="content">
          <h1>D3 map experiment</h1>
        </div>
        <div>
          <button class="button" @click="toggleSpin">Toggle spin</button>
        </div>
        <MarkerList :markers="layer" @markerSelect="onMarkerSelect"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { timer, Timer } from "d3-timer";
import MapSymbolLayer from "./components/MapSymbolLayer.vue";

import { MARKERS } from "./markers";
import MarkerList from "@/components/MarkerList.vue";
import { Feature, Point } from "geojson";
import GlobeMap from "@/components/GlobeMap.vue";

const velocity = [0.015, -0.005];
let rotate = [19.666666666666664, -30];

@Component({
  components: {
    GlobeMap,
    MarkerList,
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

  onMarkerSelect(feature: Feature<Point>) {
    console.log("Selected", { ...feature.properties });
    let p = feature.geometry.coordinates;
    (this.$refs.gmap as any).rotateTo(p);
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
