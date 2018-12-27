<script lang="ts">
import Vue from "vue";
import { Component, Prop, Inject } from "vue-property-decorator";
import { FeatureCollection } from "geojson";
import { D3GlobeMap, SymbolLayer } from "@/components/d3components";

@Component
export default class MapSymbolLayer extends Vue {
  isMounted = false;

  @Prop({ type: Object }) layer!: FeatureCollection;
  @Inject() globeData!: any;
  symbolLayer!: SymbolLayer;
  mapContainer!: D3GlobeMap;

  mounted() {
    this.mapContainer = this.globeData.mapContainer;
    this.symbolLayer = new SymbolLayer(this.layer, this.mapContainer);
  }

  render(h: any) {
    return null;
  }
}
</script>



