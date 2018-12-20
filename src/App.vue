<template>
  <div id="app">
    <GlobeMap :rotation="rotation" :scale="scale"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { timer, Timer } from "d3-timer";
import GlobeMap from "./components/GlobeMap.vue";

const velocity = [0.015, -0.005];
const rotate = [39.666666666666664, -30];

@Component({
  components: {
    GlobeMap
  }
})
export default class App extends Vue {
  rotation = rotate;
  scale = 400;
  timer!: Timer;
  mounted() {
    this.timer = timer(dt => {
      this.rotation = [
        rotate[0] + velocity[0] * dt,
        rotate[1] + velocity[1] * dt
      ];
    });
  }
}
</script>

<style lang="scss">
</style>
