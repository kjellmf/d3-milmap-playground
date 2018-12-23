(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"46a5":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(e,t,r){},"76f1":function(e,t,r){"use strict";var a=r("46a5"),n=r.n(a);n.a},"7b6a":function(e,t,r){"use strict";var a=r("dee1"),n=r.n(a);n.a},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var a,n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container is-fluid",attrs:{id:"app"}},[r("div",{staticClass:"columns is-marginless"},[r("div",{staticClass:"column mapview"},[r("GlobeMap",{ref:"gmap",attrs:{rotation:e.rotation,scale:e.scale}},[r("MapSymbolLayer",{attrs:{layer:e.layer}})],1)],1),r("div",{staticClass:"column is-4 has-background-white-bis sidebar"},[e._m(0),r("div",[r("button",{staticClass:"button",on:{click:e.toggleSpin}},[e._v("Toggle spin")])]),r("MarkerList",{attrs:{markers:e.layer},on:{markerSelect:e.onMarkerSelect}})],1)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",[e._v("D3 map experiment")])])}],s=r("be94"),c=r("d4ec"),l=r("bee2"),p=r("99de"),u=r("7e84"),d=r("262e"),f=r("9ab4"),y=r("60a3"),b=r("b5ae"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"map-container",attrs:{viewBox:"0 0 "+e.width+" "+e.height}},[e.isMounted?e._t("default"):e._e()],2)},m=[],v=(r("c5f6"),r("ac6a"),r("fd32")),g=r("9fc0"),j=r("6eee"),O=r("3fe2"),k=r("b108"),P=r("a43d"),_=r("517f"),M=900,S=900,C=430,w=[0,0,0],N=Object(g["c"])().scale(C).translate([M/2,S/2]).clipAngle(90),F=Object(g["d"])().projection(N).pointRadius(1.5),x=Object(g["b"])(),D=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(p["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isMounted=!1,e.width=M,e.height=S,e.centerPos=[0,0],e.interactive=!0,e.globeData={},e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){this.refresCallbacks=[]}},{key:"mounted",value:function(){a=Object(v["f"])(this.$el),this.globeData.svg=a,this.globeData.proj=N,this.globeData.centerPos=this.centerPos,N.scale(this.scale||C),N.rotate(this.rotation||w),this.createGlobe(),this.refresh(),this.isMounted=!0,this.interactive&&Object(j["a"])().projection(N).onMove(this.refresh)(a.node())}},{key:"onRotationChange",value:function(e){N.rotate(e),this.refresh()}},{key:"createGlobe",value:function(){a.append("circle").attr("cx",M/2).attr("cy",S/2).attr("r",N.scale()).attr("class","earth-circle noclicks").attr("fill","none"),a.append("path").data(O["a"](_,_.objects.land).features).attr("class","land").attr("d",F),a.append("path").datum(x).attr("class","graticule noclicks").attr("d",F)}},{key:"refresh",value:function(){this.globeData.centerPos=N.invert([this.width/2,this.height/2]),a.selectAll(".earth-circle").attr("r",N.scale()),a.selectAll(".land").attr("d",F),a.selectAll(".countries path").attr("d",F),a.selectAll(".graticule").attr("d",F),this.refresCallbacks.forEach(function(e){return e()})}},{key:"registerRefreshCallback",value:function(e){this.refresCallbacks.push(e)}},{key:"getRotation",value:function(){return N.rotate()}},{key:"rotateTo",value:function(e){var t=this;Object(k["b"])().duration(2e3).tween("rotate",function(){var r=Object(P["a"])(N.rotate(),[-e[0],-e[1]]);return function(e){N.rotate(r(e)),t.refresh()}})}}]),t}(n["default"]);f["a"]([Object(y["c"])()],D.prototype,"rotation",void 0),f["a"]([Object(y["c"])({type:Number})],D.prototype,"scale",void 0),f["a"]([Object(y["c"])({default:!0})],D.prototype,"interactive",void 0),f["a"]([Object(y["d"])()],D.prototype,"globeData",void 0),f["a"]([Object(y["f"])("rotation",{deep:!0})],D.prototype,"onRotationChange",null),f["a"]([Object(y["d"])()],D.prototype,"registerRefreshCallback",null),D=f["a"]([y["a"]],D);var A=D,R=A,$=(r("76f1"),r("2877")),G=Object($["a"])(R,h,m,!1,null,null,null);G.options.__file="GlobeMap.vue";var L=G.exports,T=r("d61f"),z=r.n(T),E=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(p["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isMounted=!1,e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"mounted",value:function(){var e=this.globeData,t=(e.proj,e.svg);t.append("g").attr("class","symbols").selectAll("g").data(this.layer.features).enter().append("g").attr("class","symbol").html(function(e){var t=e.properties.sidc||"10030100001101000000",r=new T["Symbol"](t,{size:20});return e.s=r,r.asSVG()}),this.positionSymbols(),this.registerRefreshCallback(this.positionSymbols)}},{key:"positionSymbols",value:function(){var e=this,t=this.globeData,r=t.proj,a=t.svg,n=t.centerPos;a.selectAll(".symbol").attr("transform",function(e){var t=Object(g["a"])(e.geometry.coordinates,n),a=1;t>1&&(a=1-1.25*(t-1));var o=r(e.geometry.coordinates),i=o[0],s=o[1],c=-e.s.octagonAnchor.x,l=-e.s.octagonAnchor.y;return"translate(".concat(i,", ").concat(s,") scale(").concat(a,") translate(").concat(c,", ").concat(l,")")}).style("display",function(t){var r=e.globeData,a=(r.proj,r.svg,r.centerPos),n=Object(g["a"])(t.geometry.coordinates,a);return n>1.57?"none":"inline"})}},{key:"render",value:function(e){return null}},{key:"centerPos",get:function(){return this.globeData.centerPos}}]),t}(n["default"]);f["a"]([Object(y["c"])({type:Object})],E.prototype,"layer",void 0),f["a"]([Object(y["b"])()],E.prototype,"globeData",void 0),f["a"]([Object(y["b"])()],E.prototype,"registerRefreshCallback",void 0),E=f["a"]([y["a"]],E);var J,V,q=E,B=q,H=(r("7b6a"),Object($["a"])(B,J,V,!1,null,null,null));H.options.__file="MapSymbolLayer.vue";var I=H.exports,K={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"N1",sidc:"10032000001213010000"},geometry:{type:"Point",coordinates:[-122.41716877355225,37.76919562968743]}},{type:"Feature",properties:{name:"N2"},geometry:{type:"Point",coordinates:[-87.75200083270931,41.83193651927843]}},{type:"Feature",properties:{name:"N3"},geometry:{type:"Point",coordinates:[-118.243683,34.052235]}},{type:"Feature",properties:{name:"N4"},geometry:{type:"Point",coordinates:[-123.116226,49.246292]}},{type:"Feature",properties:{name:"N5"},geometry:{type:"Point",coordinates:[-114.062019,51.04427]}},{type:"Feature",properties:{name:"N6"},geometry:{type:"Point",coordinates:[2.154007,41.390205]}},{type:"Feature",properties:{"marker-color":"#7e7e7e","marker-size":"medium","marker-symbol":"",name:"",sidc:10010100001103e6},geometry:{type:"Point",coordinates:[141.328125,37.71859032558816]}},{type:"Feature",properties:{name:"N7"},geometry:{type:"Point",coordinates:[2.349014,48.864716]}},{type:"Feature",properties:{name:"N8"},geometry:{type:"Point",coordinates:[6.953101,50.935173]}},{type:"Feature",properties:{name:"N9"},geometry:{type:"Point",coordinates:[6.143158,46.204391]}},{type:"Feature",properties:{name:"N10",sidc:10063000001201e6},geometry:{type:"Point",coordinates:[91.0546875,-9.44906182688142]}},{type:"Feature",properties:{name:"N11",sidc:"10033000001201000001"},geometry:{type:"Point",coordinates:[-20,0]}},{type:"Feature",properties:{name:"N12",sidc:"10063500001101000006"},geometry:{type:"Point",coordinates:[-30,1]}},{type:"Feature",properties:{name:"N12",sidc:"10032500001313000000"},geometry:{type:"Point",coordinates:[0,90]}},{type:"Feature",properties:{name:"N12",sidc:"10032500001602050000"},geometry:{type:"Point",coordinates:[0,-90]}},{type:"Feature",properties:{name:"N12",sidc:"10033000001401090000"},geometry:{type:"Point",coordinates:[-155,20]}}]},Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"panel"},[r("p",{staticClass:"panel-heading"},[e._v("\n    Markers\n  ")]),e._l(e.features,function(t,a){return r("a",{key:a,staticClass:"panel-block",on:{click:function(r){e.onMarkerClick(t)}}},[r("span",{staticClass:"panel-icon"},[r("MilSymbol",{attrs:{size:12,sidc:t.properties.sidc||""}})],1),e._v("\n    "+e._s(t.properties.name)+"\n  ")])})],2)},U=[],W=n["default"].extend({name:"MilSymbol",props:{sidc:[String,Number],size:{type:Number,default:15},modifiers:{type:Object}},render:function(e){var t=new z.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return e("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:t.asSVG()}})}}),X=function(e){function t(){return Object(c["a"])(this,t),Object(p["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"onMarkerClick",value:function(e){this.$emit("markerSelect",e)}},{key:"features",get:function(){return this.markers.features}}]),t}(y["e"]);f["a"]([Object(y["c"])({required:!0,type:Object})],X.prototype,"markers",void 0),X=f["a"]([Object(y["a"])({components:{MilSymbol:W}})],X);var Y=X,Z=Y,ee=Object($["a"])(Z,Q,U,!1,null,null,null);ee.options.__file="MarkerList.vue";var te=ee.exports,re=[.015,-.005],ae=[19.666666666666664,-30],ne=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(p["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.rotation=ae,e.scale=400,e.layer=K,e.spin=!1,e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"mounted",value:function(){}},{key:"onMarkerSelect",value:function(e){console.log("Selected",Object(s["a"])({},e.properties));var t=e.geometry.coordinates;this.$refs.gmap.rotateTo(t)}},{key:"toggleSpin",value:function(){var e=this;this.spin?(this.timer&&(this.timer.stop(),ae=this.$refs.gmap.getRotation()),this.spin=!1):(this.timer&&this.timer.stop(),this.timer=Object(b["c"])(function(t){e.rotation=[ae[0]+re[0]*t,ae[1]+re[1]*t]}),this.spin=!0)}}]),t}(y["e"]);ne=f["a"]([Object(y["a"])({components:{MarkerList:te,GlobeMap:L,MapSymbolLayer:I}})],ne);var oe=ne,ie=oe,se=(r("5c0b"),Object($["a"])(ie,o,i,!1,null,null,null));se.options.__file="App.vue";var ce=se.exports;r("92c6");n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(ce)}}).$mount("#app")},dee1:function(e,t,r){}});
//# sourceMappingURL=app-legacy.c5268b9a.js.map