<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch, Inject } from "vue-property-decorator";
import { geoDistance } from "d3-geo";
import * as ms from "milsymbol";
import { FeatureCollection } from "geojson";

@Component
export default class MapSymbolLayer extends Vue {
  isMounted = false;

  @Prop({ type: Object }) layer!: FeatureCollection;
  @Inject() globeData!: any;
  @Inject() registerRefreshCallback!: any;

  mounted() {
    let { proj, svg } = this.globeData;
    svg
      .append("g")
      .attr("class", "symbols")
      .selectAll("g")
      .data(this.layer.features)
      .enter()
      .append("g")
      .attr("class", "symbol")
      .html((d: any) => {
        let sidc = d.properties.sidc || "10030100001101000000";
        let s = new ms.Symbol(sidc, { size: 20 });
        d.s = s;
        return s.asSVG();
      });
    this.positionSymbols();
    this.registerRefreshCallback(this.positionSymbols);
  }

  get centerPos() {
    return this.globeData.centerPos;
  }

  positionSymbols() {
    let { proj, svg, centerPos } = this.globeData;
    svg
      .selectAll(".symbol")
      .attr("transform", (d: any) => {
        let distance = geoDistance(d.geometry.coordinates, centerPos);
        let scale = 1;
        if (distance > 1) {
          scale = 1 - (1 / 0.8) * (distance - 1);
        }

        let loc = proj(d.geometry.coordinates),
          x = loc[0],
          y = loc[1];
        let dx = -d.s.octagonAnchor.x;
        let dy = -d.s.octagonAnchor.y;
        return `translate(${x}, ${y}) scale(${scale}) translate(${dx}, ${dy})`;
      })
      .style("display", (d: any) => {
        let { proj, svg, centerPos } = this.globeData;
        let distance = geoDistance(d.geometry.coordinates, centerPos);
        return distance > 1.57 ? "none" : "inline";
      });
  }

  render(h: any) {
    return null;
  }
}
</script>

<style>
</style>


