(function(e){function t(t){for(var a,i,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)i=c[u],o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},o={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"46a5":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var a=r("5e27"),o=r.n(a);o.a},"5e27":function(e,t,r){},"76f1":function(e,t,r){"use strict";var a=r("46a5"),o=r.n(a);o.a},"7b6a":function(e,t,r){"use strict";var a=r("dee1"),o=r.n(a);o.a},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var a,o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("GlobeMap",{ref:"gmap",attrs:{rotation:e.rotation,scale:e.scale}},[r("MapSymbolLayer",{attrs:{layer:e.layer}})],1),r("button",{on:{click:e.toggleSpin}},[e._v("Toggle spin")])],1)},i=[],c=r("d4ec"),s=r("bee2"),l=r("99de"),p=r("7e84"),u=r("262e"),f=r("9ab4"),y=r("60a3"),d=r("b5ae"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{width:e.width,height:e.height}},[e.isMounted?e._t("default"):e._e()],2)},h=[],g=(r("c5f6"),r("ac6a"),r("fd32")),v=r("9fc0"),m=r("6eee"),j=r("3fe2"),O=r("517f"),k=1200,P=900,_=430,w=[0,0,0],M=Object(v["c"])().scale(_).translate([k/2,P/2]).clipAngle(90),S=Object(v["d"])().projection(M).pointRadius(1.5),F=Object(v["b"])(),N=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.isMounted=!1,e.width=k,e.height=P,e.centerPos=[0,0],e.interactive=!0,e.globeData={},e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"created",value:function(){this.refresCallbacks=[]}},{key:"mounted",value:function(){a=Object(g["f"])(this.$el),this.globeData.svg=a,this.globeData.proj=M,this.globeData.centerPos=this.centerPos,M.scale(this.scale||_),M.rotate(this.rotation||w),this.createGlobe(),this.refresh(),this.isMounted=!0,this.interactive&&Object(m["a"])().projection(M).onMove(this.refresh)(a.node())}},{key:"onRotationChange",value:function(e){M.rotate(e),this.refresh()}},{key:"createGlobe",value:function(){a.append("circle").attr("cx",k/2).attr("cy",P/2).attr("r",M.scale()).attr("class","earth-circle noclicks").attr("fill","none"),a.append("path").data(j["a"](O,O.objects.land).features).attr("class","land").attr("d",S),a.append("path").datum(F).attr("class","graticule noclicks").attr("d",S)}},{key:"refresh",value:function(){this.globeData.centerPos=M.invert([this.width/2,this.height/2]),a.selectAll(".earth-circle").attr("r",M.scale()),a.selectAll(".land").attr("d",S),a.selectAll(".countries path").attr("d",S),a.selectAll(".graticule").attr("d",S),this.refresCallbacks.forEach(function(e){return e()})}},{key:"registerRefreshCallback",value:function(e){this.refresCallbacks.push(e)}},{key:"getRotation",value:function(){return M.rotate()}}]),t}(o["default"]);f["a"]([Object(y["c"])()],N.prototype,"rotation",void 0),f["a"]([Object(y["c"])({type:Number})],N.prototype,"scale",void 0),f["a"]([Object(y["c"])({default:!0})],N.prototype,"interactive",void 0),f["a"]([Object(y["d"])()],N.prototype,"globeData",void 0),f["a"]([Object(y["f"])("rotation",{deep:!0})],N.prototype,"onRotationChange",null),f["a"]([Object(y["d"])()],N.prototype,"registerRefreshCallback",null),N=f["a"]([y["a"]],N);var x=N,D=x,A=(r("76f1"),r("2877")),C=Object(A["a"])(D,b,h,!1,null,null,null);C.options.__file="GlobeMap.vue";var R=C.exports,G=r("d61f"),$=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.isMounted=!1,e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){var e=this.globeData,t=(e.proj,e.svg);t.append("g").attr("class","symbols").selectAll("g").data(this.layer.features).enter().append("g").attr("class","symbol").html(function(e){var t=e.properties.sidc||"10030100001101000000",r=new G["Symbol"](t,{size:20});return e.s=r,r.asSVG()}),this.positionSymbols(),this.registerRefreshCallback(this.positionSymbols)}},{key:"positionSymbols",value:function(){var e=this,t=this.globeData,r=t.proj,a=t.svg,o=t.centerPos;a.selectAll(".symbol").attr("transform",function(e){var t=Object(v["a"])(e.geometry.coordinates,o),a=1;t>1&&(a=1-1.25*(t-1));var n=r(e.geometry.coordinates),i=n[0],c=n[1],s=-e.s.octagonAnchor.x,l=-e.s.octagonAnchor.y;return"translate(".concat(i,", ").concat(c,") scale(").concat(a,") translate(").concat(s,", ").concat(l,")")}).style("display",function(t){var r=e.globeData,a=(r.proj,r.svg,r.centerPos),o=Object(v["a"])(t.geometry.coordinates,a);return o>1.57?"none":"inline"})}},{key:"render",value:function(e){return null}},{key:"centerPos",get:function(){return this.globeData.centerPos}}]),t}(o["default"]);f["a"]([Object(y["c"])({type:Object})],$.prototype,"layer",void 0),f["a"]([Object(y["b"])()],$.prototype,"globeData",void 0),f["a"]([Object(y["b"])()],$.prototype,"registerRefreshCallback",void 0),$=f["a"]([y["a"]],$);var T,E,L=$,z=L,J=(r("7b6a"),Object(A["a"])(z,T,E,!1,null,null,null));J.options.__file="MapSymbolLayer.vue";var V=J.exports,q={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"N1",sidc:"10032000001213010000"},geometry:{type:"Point",coordinates:[-122.41716877355225,37.76919562968743]}},{type:"Feature",properties:{name:"N2"},geometry:{type:"Point",coordinates:[-87.75200083270931,41.83193651927843]}},{type:"Feature",properties:{name:"N3"},geometry:{type:"Point",coordinates:[-118.243683,34.052235]}},{type:"Feature",properties:{name:"N4"},geometry:{type:"Point",coordinates:[-123.116226,49.246292]}},{type:"Feature",properties:{name:"N5"},geometry:{type:"Point",coordinates:[-114.062019,51.04427]}},{type:"Feature",properties:{name:"N6"},geometry:{type:"Point",coordinates:[2.154007,41.390205]}},{type:"Feature",properties:{"marker-color":"#7e7e7e","marker-size":"medium","marker-symbol":"",name:"",sidc:10010100001103e6},geometry:{type:"Point",coordinates:[141.328125,37.71859032558816]}},{type:"Feature",properties:{name:"N7"},geometry:{type:"Point",coordinates:[2.349014,48.864716]}},{type:"Feature",properties:{name:"N8"},geometry:{type:"Point",coordinates:[6.953101,50.935173]}},{type:"Feature",properties:{name:"N9"},geometry:{type:"Point",coordinates:[6.143158,46.204391]}},{type:"Feature",properties:{name:"N10",sidc:10063000001201e6},geometry:{type:"Point",coordinates:[91.0546875,-9.44906182688142]}},{type:"Feature",properties:{name:"N11",sidc:"10033000001201000001"},geometry:{type:"Point",coordinates:[-20,0]}},{type:"Feature",properties:{name:"N12",sidc:"10063500001101000006"},geometry:{type:"Point",coordinates:[-30,1]}}]},B=[.015,-.005],H=[19.666666666666664,-30],I=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.rotation=H,e.scale=400,e.layer=q,e.spin=!1,e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){}},{key:"toggleSpin",value:function(){var e=this;this.spin?(this.timer&&(this.timer.stop(),H=this.$refs.gmap.getRotation()),this.spin=!1):(this.timer&&this.timer.stop(),this.timer=Object(d["c"])(function(t){e.rotation=[H[0]+B[0]*t,H[1]+B[1]*t]}),this.spin=!0)}}]),t}(y["e"]);I=f["a"]([Object(y["a"])({components:{GlobeMap:R,MapSymbolLayer:V}})],I);var K=I,Q=K,U=(r("5c0b"),Object(A["a"])(Q,n,i,!1,null,null,null));U.options.__file="App.vue";var W=U.exports;o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(W)}}).$mount("#app")},dee1:function(e,t,r){}});
//# sourceMappingURL=app-legacy.23919dc4.js.map