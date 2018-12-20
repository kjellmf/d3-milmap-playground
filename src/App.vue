<template>
  <div id="app">
    <GlobeMap :rotation="rotation" :scale="scale"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GlobeMap from "./components/GlobeMap.vue";

@Component({
  components: {
    GlobeMap
  }
})
export default class App extends Vue {
  rotation = [0,-21,10];
  scale = 400;
}
</script>

<style lang="scss">

</style>
