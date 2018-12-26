<template>
  <svg :viewBox="`0 0 ${width} ${height}`" class="map-container">
    <slot v-if="isMounted"></slot>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Component,
  Prop,
  Watch,
  Provide
} from "vue-property-decorator";
import { D3GlobeMap } from "@/components/d3components";

const width = 900;
const height = 900;

@Component
export default class GlobeMapComponentTmp extends Vue {
  isMounted = false;
  d3g!: D3GlobeMap;
  width = width;
  height = height;
  @Prop() rotation!: [number, number, number];
  @Prop({ type: Number }) scale!: number;
  @Provide() globeData: any = {};

  mounted() {
    this.d3g = new D3GlobeMap(this.$el, this.width, this.height, {scale: this.scale});
    this.globeData.mapContainer = this.d3g;
    this.isMounted = true;
  }

  @Watch("rotation", { deep: true })
  onRotationChange(rotation: [number, number, number]) {
    this.d3g.rotation = rotation;
  }

  getRotation() {
    return this.d3g.rotation;
  }

  rotateTo(p) {
    this.d3g.rotateTo(p);
  }


}
</script>

<style>
.map-container {
  max-height: 900px;
}

.land {
  fill: white;
  opacity: 0.5;
  stroke: #4f2291;
  stroke-opacity: 1;
}

.countries path {
  stroke: #4f2291;
  stroke-linejoin: round;
  stroke-width: 0.5;
  fill: #4f2291;
  opacity: 0.1;
  pointer-events: none;
}

.lines path {
  fill: none;
  stroke: black;
  stroke-opacity: 0.3;
  stroke-dasharray: 15, 5;
}

circle {
  stroke: #4f2291;
}

.graticule {
  fill: none;
  stroke: #4f2291;
  stroke-width: 0.5;
  opacity: 0.2;
}

.labels {
  font: 8px sans-serif;
  fill: black;
  opacity: 1;
  cursor: pointer;
}

.noclicks {
  pointer-events: none;
}

.range-ring {
  opacity: 0.5;
  fill: bisque;
  stroke: red;
}

.point {
  opacity: 0.6;
}
</style>


