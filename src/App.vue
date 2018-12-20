<template>
  <div id="app">
    <GlobeMap :rotation="rotation" :scale="scale">
      <MapSymbolLayer :layer="layer"/>
    </GlobeMap>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { timer, Timer } from "d3-timer";
import GlobeMap from "./components/GlobeMap.vue";
import MapSymbolLayer from "./components/MapSymbolLayer.vue";
const velocity = [0.015, -0.005];
const rotate = [19.666666666666664, -30];

const markers = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "N1",
        sidc: "10032000001213010000"
      },
      geometry: {
        type: "Point",
        coordinates: [-122.41716877355225, 37.76919562968743]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N2"
      },
      geometry: {
        type: "Point",
        coordinates: [-87.75200083270931, 41.83193651927843]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N3"
      },
      geometry: {
        type: "Point",
        coordinates: [-118.243683, 34.052235]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N4"
      },
      geometry: {
        type: "Point",
        coordinates: [-123.116226, 49.246292]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N5"
      },
      geometry: {
        type: "Point",
        coordinates: [-114.062019, 51.04427]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N6"
      },
      geometry: {
        type: "Point",
        coordinates: [2.154007, 41.390205]
      }
    },
    {
      type: "Feature",
      properties: {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        name: "",
        sidc: 10010100001103000000
      },
      geometry: {
        type: "Point",
        coordinates: [141.328125, 37.71859032558816]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N7"
      },
      geometry: {
        type: "Point",
        coordinates: [2.349014, 48.864716]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N8"
      },
      geometry: {
        type: "Point",
        coordinates: [6.953101, 50.935173]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N9"
      },
      geometry: {
        type: "Point",
        coordinates: [6.143158, 46.204391]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N10",
        sidc: 10063000001201000000
      },
      geometry: {
        type: "Point",
        coordinates: [91.0546875, -9.44906182688142]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N11",
        sidc: "10033000001201000001"
      },
      geometry: {
        type: "Point",
        coordinates: [-20, 0]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "N12",
        sidc: "10063500001101000006"
      },
      geometry: {
        type: "Point",
        coordinates: [-30, 1]
      }
    }
  ]
};

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
  layer = markers;
  spin = true;
  mounted() {
    if (!this.spin) {
      return;
    }
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
