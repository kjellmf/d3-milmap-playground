import { select } from "d3-selection";
import { geoOrthographic, geoPath, geoGraticule, GeoProjection, GeoPath, geoDistance } from "d3-geo";
import geoZoom from "d3-geo-zoom";
import * as topojson from "topojson";
import { transition } from "d3-transition";
import { interpolate } from "d3-interpolate";
import { FeatureCollection } from "geojson";
import * as ms from "milsymbol";


const world = require("../../node_modules/world-atlas/world/110m.json");
const DEFAULT_SIDC = "10030100001101000000";

const SCALE = 430;
const ROTATION = [0, 0, 0] as [number, number, number];

export type RefreshCallback = () => void;

export class D3GlobeMap {
  centerPos = [0, 0];
  width: number;
  height: number;
  refreshCallbacks: RefreshCallback[] = [];
  svg: any;
  proj: GeoProjection;
  pathGenerator: GeoPath;

  constructor(svgElement: Element, width, height, options) {
    this.width = width;
    this.height = height;

    let proj = geoOrthographic()
      .clipAngle(90)
      .scale(options.scale || SCALE)
      .translate([width / 2, height / 2])
      .rotate(ROTATION);

    this.pathGenerator = geoPath()
      .projection(proj)
      .pointRadius(1.5);


    this.svg = select(svgElement);
    this.proj = proj;
    this.createGlobe();

    geoZoom()
      .projection(proj)
      .onMove(f => this.refresh())(this.svg.node());
  }

  private createGlobe() {
    let { svg, proj, pathGenerator } = this;
    let graticule = geoGraticule();
    svg
      .append("circle")
      .attr("cx", this.width / 2)
      .attr("cy", this.height / 2)
      .attr("r", proj.scale())
      .attr("class", "earth-circle noclicks")
      .attr("fill", "none");

    svg
      .append("path")
      .data((topojson.feature(world, world.objects.land) as any).features)
      .attr("class", "land")
      .attr("d", pathGenerator);

    svg
      .append("path")
      .datum(graticule)
      .attr("class", "graticule noclicks")
      .attr("d", pathGenerator);
  }

  refresh() {
    let { proj, pathGenerator } = this;
    this.centerPos = (proj as any).invert([
      this.width / 2,
      this.height / 2
    ]);
    let svg = this.svg;
    svg.selectAll(".earth-circle").attr("r", proj.scale());
    svg.selectAll(".land").attr("d", pathGenerator);
    svg.selectAll(".countries path").attr("d", pathGenerator);
    svg.selectAll(".graticule").attr("d", pathGenerator);
    this.refreshCallbacks.forEach(f => f());
  }

  registerRefreshCallback(f: RefreshCallback) {
    this.refreshCallbacks.push(f);
  }

  set rotation(angles) {
    this.proj.rotate(angles);
    this.refresh();
  }

  get rotation() {
    return this.proj.rotate();
  }

  rotateTo(p) {
    let vm = this;
    let proj = this.proj;
    transition()
      .duration(2000)
      .tween("rotate", () => {
        let r = interpolate(proj.rotate(), [-p[0], -p[1], 0]) as any;
        return function (t) {
          proj.rotate(r(t));
          vm.refresh()
        };
      })
  }
}

export class SymbolLayer {

  constructor(public layer: FeatureCollection, private mapContainer: D3GlobeMap) {
    this.drawSymbolLayer();
    mapContainer.registerRefreshCallback(() => {
      this.positionSymbols()
    });
  }

  private drawSymbolLayer() {
    let { svg } = this.mapContainer;

    svg
      .append("g")
      .attr("class", "symbols")
      .selectAll("g")
      .data(this.layer.features)
      .enter()
      .append("g")
      .attr("class", "symbol")
      .html((d: any) => {
        let sidc = d.properties.sidc || DEFAULT_SIDC;
        let s = new ms.Symbol(sidc, { size: 20 });
        d.s = s;
        return s.asSVG();
      });
    this.positionSymbols();
  }

  positionSymbols() {
    let { proj, svg, centerPos } = this.mapContainer;
    svg
      .selectAll(".symbol")
      .attr("transform", (d: any) => {
        let distance = geoDistance(d.geometry.coordinates, centerPos as any);
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
        let distance = geoDistance(d.geometry.coordinates, centerPos as any);
        return distance > 1.57 ? "none" : "inline";
      });
  }

}





