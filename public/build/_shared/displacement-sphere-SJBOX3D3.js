import{B as T,C as W,D as B,b as C,d as D,i as G,j as E,l as I,q as U,r as V,s as k,t as q,u as H,v as j,w as A}from"/build/_shared/chunk-2JSTSRVL.js";import{a as M}from"/build/_shared/chunk-AGEJM6GD.js";import{d as b}from"/build/_shared/chunk-MNUF47VI.js";import{a as R}from"/build/_shared/chunk-XLNHO7CM.js";import{c as L}from"/build/_shared/chunk-W6DBIU65.js";import{a as x,i as h,j as S}from"/build/_shared/chunk-LOR6SSLI.js";import{a as Q,b as w}from"/build/_shared/chunk-4HXKWYDW.js";import{c as _}from"/build/_shared/chunk-Q3IECNXJ.js";var n=_(Q(),1);var Z=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float time;
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

  #include <clipping_planes_fragment>

  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);
  ReflectedLight reflectedLight = ReflectedLight(
    vec3(0.0),
    vec3(0.0),
    vec3(0.0),
    vec3(0.0)
  );
  vec3 totalEmissiveRadiance = emissive;

  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>

  // accumulation
  #include <lights_phong_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 outgoingLight =
    reflectedLight.directDiffuse +
    reflectedLight.indirectDiffuse +
    reflectedLight.directSpecular +
    reflectedLight.indirectSpecular +
    totalEmissiveRadiance;

  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,F=Z;var $=`
#define PHONG

//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author: Stefan Gustavson
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);

  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(
    dot(g000, g000),
    dot(g010, g010),
    dot(g100, g100),
    dot(g110, g110)
  ));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;

  vec4 norm1 = taylorInvSqrt(vec4(
    dot(g001, g001),
    dot(g011, g011),
    dot(g101, g101),
    dot(g111, g111)
  ));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float turbulence(vec3 p) {
  float t = -0.5;
  for (float f = 1.0; f <= 10.0; f++) {
    float power = pow(2.0, f);
    t += abs(cnoise(p * power) / power);
  }
  return t;
}

uniform float time;
varying vec2 vUv;
varying float noise;
varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

  #include <uv_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>

  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = -mvPosition.xyz;

  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

  vUv = uv;
  noise = turbulence(0.01 * position + normal + time * 0.8);

  vec3 displacement = vec3(
    position.x * noise,
    position.y * noise,
    position.z * noise
  );

  gl_Position = projectionMatrix * modelViewMatrix * vec4(
    (position + normal) + displacement,
    1.0
  );
}
`,N=$;var O={canvas:"_17BOs"};var y=_(w(),1),X={stiffness:30,damping:20,mass:2},de=Y=>{let{theme:f}=b(),J=(0,n.useRef)(Date.now()),d=(0,n.useRef)(),K=(0,n.useRef)(),o=(0,n.useRef)(),c=(0,n.useRef)(),a=(0,n.useRef)(),v=(0,n.useRef)(),l=(0,n.useRef)(),p=(0,n.useRef)(),z=(0,n.useRef)(),t=(0,n.useRef)(),s=S(),u=R(d),P=M(),g=h(0,X),m=h(0,X);return(0,n.useEffect)(()=>{let{innerWidth:e,innerHeight:r}=window;return K.current=new D(.8,.5),o.current=new U({canvas:d.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),o.current.setSize(e,r),o.current.setPixelRatio(1),o.current.outputColorSpace=C,c.current=new I(54,e/r,.1,100),c.current.position.z=52,a.current=new V,p.current=new q,p.current.onBeforeCompile=i=>{l.current=E.merge([i.uniforms,{time:{type:"f",value:0}}]),i.uniforms=l.current,i.vertexShader=N,i.fragmentShader=F},(0,n.startTransition)(()=>{z.current=new k(32,128,128),t.current=new G(z.current,p.current),t.current.position.z=0,t.current.modifier=Math.random(),a.current.add(t.current)}),()=>{T(a.current),W(o.current)}},[]),(0,n.useEffect)(()=>{let e=new H(16777215,f==="light"?1.8:2),r=new j(16777215,f==="light"?2.7:.4);return e.position.z=200,e.position.x=100,e.position.y=100,v.current=[e,r],v.current.forEach(i=>a.current.add(i)),()=>{B(v.current)}},[f]),(0,n.useEffect)(()=>{let{width:e,height:r}=P,i=r+r*.3;o.current.setSize(e,i),c.current.aspect=e/i,c.current.updateProjectionMatrix(),s&&o.current.render(a.current,c.current),e<=x.mobile?(t.current.position.x=14,t.current.position.y=10):e<=x.tablet?(t.current.position.x=18,t.current.position.y=14):(t.current.position.x=22,t.current.position.y=16)},[s,P]),(0,n.useEffect)(()=>{let e=A(r=>{let i={x:r.clientX/window.innerWidth,y:r.clientY/window.innerHeight};g.set(i.y/2),m.set(i.x/2)},100);return!s&&u&&window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[u,s,g,m]),(0,n.useEffect)(()=>{let e,r=()=>{e=requestAnimationFrame(r),l.current!==void 0&&(l.current.time.value=5e-5*(Date.now()-J.current)),t.current.rotation.z+=.001,t.current.rotation.x=g.get(),t.current.rotation.y=m.get(),o.current.render(a.current,c.current)};return!s&&u?r():o.current.render(a.current,c.current),()=>{cancelAnimationFrame(e)}},[u,s,g,m]),(0,y.jsx)(L,{in:!0,timeout:3e3,nodeRef:d,children:({visible:e,nodeRef:r})=>(0,y.jsx)("canvas",{"aria-hidden":!0,className:O.canvas,"data-visible":e,ref:r,...Y})})};export{de as DisplacementSphere};
