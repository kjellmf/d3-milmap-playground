<template>
  <svg :width="width" :height="height">
    <slot v-if="isMounted"></slot>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Component,
  Prop,
  Watch,
  Inject,
  Provide
} from "vue-property-decorator";
import { select, Selection } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import * as topojson from "topojson";

export type RefreshCallback = () => void;

const world = require("../../node_modules/world-atlas/world/110m.json");
const width = 1200;
const height = 900;

const SCALE = 430;
const ROTATION = [0, 0, 0];

var proj = geoOrthographic()
  .scale(SCALE)
  .translate([width / 2, height / 2])
  .clipAngle(90);

let pathGenerator = geoPath()
  .projection(proj)
  .pointRadius(1.5);

let graticule = geoGraticule();
let svg: any;

@Component
export default class GlobeMapComponent extends Vue {
  isMounted = false;
  width = width;
  height = height;
  centerPos = [0, 0];
  callbacks!: Array<RefreshCallback>;
  @Prop() rotation!: [number, number, number];
  @Prop({ type: Number }) scale!: number;
  @Provide() globeData: any = {};
  @Provide() rreg = this.registerRefresh;

  created() {
    this.callbacks = [];
  }

  mounted() {
    svg = select(this.$el);
    console.log(svg);
    this.globeData.svg = svg;
    this.globeData.proj = proj;
    this.globeData.centerPos = this.centerPos;
    console.log("set container");
    proj.scale(this.scale || SCALE);
    proj.rotate(this.rotation || ROTATION);
    this.createGlobe();
    this.refresh();
    this.isMounted = true;
  }

  @Watch("rotation", { deep: true })
  onRotationChange(rotation: [number, number, number]) {
    proj.rotate(rotation);
    this.refresh();
  }

  createGlobe() {
    svg
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", proj.scale())
      .attr("class", "earth-circle noclicks")
      .attr("fill", "none");

    svg
      .append("path")
      .data((topojson.feature(world, world.objects.land) as any).features)
      .attr("class", "land")
      .attr("d", pathGenerator as any);

    svg
      .append("path")
      .datum(graticule)
      .attr("class", "graticule noclicks")
      .attr("d", pathGenerator);
  }

  refresh() {
    this.globeData.centerPos = (proj as any).invert([
      this.width / 2,
      this.height / 2
    ]);
    svg.selectAll(".land").attr("d", pathGenerator);
    svg.selectAll(".countries path").attr("d", pathGenerator);
    svg.selectAll(".graticule").attr("d", pathGenerator);
    this.callbacks.forEach(f => f());
  }

  registerRefresh(f: RefreshCallback) {
    this.callbacks.push(f);
  }
}
</script>

<style>
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


