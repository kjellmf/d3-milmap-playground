<template>
  <nav class="panel">
    <p class="panel-heading">
      Markers
    </p>
    <a class="panel-block"
       v-for="feature, idx in features" :key="idx"
       @click="onMarkerClick(feature)"
    >
    <span class="panel-icon">
      <MilSymbol :size="12" :sidc="feature.properties.sidc || DEFAULT_SIDC"/>
    </span>
      {{feature.properties.name}}
    </a>

  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Feature, FeatureCollection } from "geojson";

import MilSymbol from "@/components/MilSymbol";

const DEFAULT_SIDC = "10030100001101000000";

@Component({
  components: { MilSymbol }
})
export default class MarkerList extends Vue {
  @Prop({ required: true, type: Object }) markers!: FeatureCollection;
  DEFAULT_SIDC = DEFAULT_SIDC;

  get features() {
    return this.markers.features;
  }

  onMarkerClick(feature: Feature) {
    this.$emit('markerSelect', feature);
  }
}

</script>
