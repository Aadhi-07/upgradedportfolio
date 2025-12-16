var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
};

// build/server/assets/three-D0yK2C4B.js
import { TextureLoader, Cache } from "three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";
function throttle(func, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    let now = /* @__PURE__ */ new Date();
    now - lastTime >= timeFrame && (func(...args), lastTime = now);
  };
}
var dracoLoader, gltfLoader, modelLoader, textureLoader, cleanScene, cleanMaterial, cleanRenderer, removeLights, init_three_D0yK2C4B = __esm({
  "build/server/assets/three-D0yK2C4B.js"() {
    Cache.enabled = !0;
    dracoLoader = new DRACOLoader(), gltfLoader = new GLTFLoader();
    dracoLoader.setDecoderPath("/draco/");
    gltfLoader.setDRACOLoader(dracoLoader);
    modelLoader = gltfLoader, textureLoader = new TextureLoader(), cleanScene = (scene) => {
      scene?.traverse((object) => {
        if (object.isMesh)
          if (object.geometry.dispose(), object.material.isMaterial)
            cleanMaterial(object.material);
          else
            for (let material of object.material)
              cleanMaterial(material);
      });
    }, cleanMaterial = (material) => {
      var _a, _b, _c;
      material.dispose();
      for (let key of Object.keys(material)) {
        let value2 = material[key];
        value2 && typeof value2 == "object" && "minFilter" in value2 && (value2.dispose(), (_c = (_b = (_a = value2.source) == null ? void 0 : _a.data) == null ? void 0 : _b.close) == null || _c.call(_b));
      }
    }, cleanRenderer = (renderer) => {
      renderer.dispose(), renderer = null;
    }, removeLights = (lights) => {
      for (let light2 of lights)
        light2.parent.remove(light2);
    };
  }
});

// build/server/assets/displacement-sphere-D3i-OXzm.js
var displacement_sphere_D3i_OXzm_exports = {};
__export(displacement_sphere_D3i_OXzm_exports, {
  DisplacementSphere: () => DisplacementSphere
});
import { jsx } from "react/jsx-runtime";
import { useReducedMotion, useSpring } from "framer-motion";
import { useRef, useEffect, startTransition } from "react";
import { Vector2, WebGLRenderer, LinearSRGBColorSpace, PerspectiveCamera, Scene, MeshPhongMaterial, UniformsUtils, SphereGeometry, Mesh, DirectionalLight, AmbientLight } from "three";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "@mdx-js/react";
import "three-stdlib";
var fragmentShader, vertexShader, canvas, styles, springConfig, DisplacementSphere, init_displacement_sphere_D3i_OXzm = __esm({
  "build/server/assets/displacement-sphere-D3i-OXzm.js"() {
    init_server_build_BUqUCazy();
    init_three_D0yK2C4B();
    fragmentShader = `#define PHONG\r
\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform vec3 specular;\r
uniform float shininess;\r
uniform float opacity;\r
\r
uniform float time;\r
varying vec2 vUv;\r
varying vec3 newPosition;\r
varying float noise;\r
\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <alphahash_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <bsdfs>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_phong_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <specularmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
\r
void main() {\r
\r
	#include <clipping_planes_fragment>\r
\r
  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\r
  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\r
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\r
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\r
  vec3 totalEmissiveRadiance = emissive;\r
\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>\r
	#include <alphamap_fragment>\r
	#include <alphatest_fragment>\r
	#include <alphahash_fragment>\r
	#include <specularmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
\r
	// accumulation\r
	#include <lights_phong_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
\r
	// modulation\r
	#include <aomap_fragment>\r
\r
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r
\r
	#include <envmap_fragment>\r
	#include <opaque_fragment>\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
\r
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\r
}\r
`, vertexShader = `#define PHONG\r
\r
//\r
// GLSL textureless classic 3D noise "cnoise",\r
// with an RSL-style periodic variant "pnoise".\r
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\r
// Version: 2011-10-11\r
//\r
// Many thanks to Ian McEwan of Ashima Arts for the\r
// ideas for permutation and gradient selection.\r
//\r
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\r
// Distributed under the MIT license. See LICENSE file.\r
// https://github.com/ashima/webgl-noise\r
//\r
vec3 mod289(vec3 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 mod289(vec4 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 permute(vec4 x)\r
{\r
  return mod289(((x*34.0)+1.0)*x);\r
}\r
\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
\r
vec3 fade(vec3 t) {\r
  return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}\r
\r
// Classic Perlin noise\r
float cnoise(vec3 P)\r
{\r
  vec3 Pi0 = floor(P); // Integer part for indexing\r
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
// Classic Perlin noise, periodic variant\r
float pnoise(vec3 P, vec3 rep)\r
{\r
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\r
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\r
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); // Fractional part for interpolation\r
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\r
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;\r
\r
  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);\r
\r
  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\r
\r
  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\r
\r
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\r
\r
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;\r
\r
  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);\r
\r
  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
  return 2.2 * n_xyz;\r
}\r
\r
float turbulence(vec3 p) {\r
  float w = 100.0;\r
  float t = -.5;\r
  for (float f = 1.0 ; f <= 10.0 ; f++) {\r
    float power = pow(2.0, f);\r
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\r
  }\r
  return t;\r
}\r
\r
// START\r
uniform float time;\r
varying vec2 vUv;\r
varying float noise;\r
\r
varying vec3 vViewPosition;\r
\r
#include <common>\r
#include <batching_pars_vertex>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <envmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
\r
void main() {\r
\r
	#include <uv_vertex>\r
	#include <color_vertex>\r
	#include <morphcolor_vertex>\r
	#include <batching_vertex>\r
\r
	#include <beginnormal_vertex>\r
	#include <morphnormal_vertex>\r
	#include <skinbase_vertex>\r
	#include <skinnormal_vertex>\r
	#include <defaultnormal_vertex>\r
	#include <normal_vertex>\r
\r
	#include <begin_vertex>\r
	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
\r
	vViewPosition = - mvPosition.xyz;\r
\r
	#include <worldpos_vertex>\r
	#include <envmap_vertex>\r
	#include <shadowmap_vertex>\r
	#include <fog_vertex>\r
\r
  vUv = uv;\r
\r
  noise = turbulence(0.01 * position + normal + time * 0.8);\r
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\r
}\r
`, canvas = "_canvas_1pqfq_1", styles = {
      canvas
    }, springConfig = {
      stiffness: 30,
      damping: 20,
      mass: 2
    }, DisplacementSphere = (props) => {
      let { theme } = useTheme(), start = useRef(Date.now()), canvasRef = useRef(), mouse = useRef(), renderer = useRef(), camera = useRef(), scene = useRef(), lights = useRef(), uniforms = useRef(), material = useRef(), geometry = useRef(), sphere = useRef(), reduceMotion = useReducedMotion(), isInViewport = useInViewport(canvasRef), windowSize = useWindowSize(), rotationX = useSpring(0, springConfig), rotationY = useSpring(0, springConfig);
      return useEffect(() => {
        let { innerWidth, innerHeight } = window;
        return mouse.current = new Vector2(0.8, 0.5), renderer.current = new WebGLRenderer({
          canvas: canvasRef.current,
          antialias: !1,
          alpha: !0,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), renderer.current.setSize(innerWidth, innerHeight), renderer.current.setPixelRatio(1), renderer.current.outputColorSpace = LinearSRGBColorSpace, camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100), camera.current.position.z = 52, scene.current = new Scene(), material.current = new MeshPhongMaterial(), material.current.onBeforeCompile = (shader) => {
          uniforms.current = UniformsUtils.merge([
            shader.uniforms,
            { time: { type: "f", value: 0 } }
          ]), shader.uniforms = uniforms.current, shader.vertexShader = vertexShader, shader.fragmentShader = fragmentShader;
        }, startTransition(() => {
          geometry.current = new SphereGeometry(32, 128, 128), sphere.current = new Mesh(geometry.current, material.current), sphere.current.position.z = 0, sphere.current.modifier = Math.random(), scene.current.add(sphere.current);
        }), () => {
          cleanScene(scene.current), cleanRenderer(renderer.current);
        };
      }, []), useEffect(() => {
        let dirLight = new DirectionalLight(16777215, theme === "light" ? 1.8 : 2), ambientLight = new AmbientLight(16777215, theme === "light" ? 2.7 : 0.4);
        return dirLight.position.z = 200, dirLight.position.x = 100, dirLight.position.y = 100, lights.current = [dirLight, ambientLight], lights.current.forEach((light2) => scene.current.add(light2)), () => {
          removeLights(lights.current);
        };
      }, [theme]), useEffect(() => {
        let { width, height } = windowSize, adjustedHeight = height + height * 0.3;
        renderer.current.setSize(width, adjustedHeight), camera.current.aspect = width / adjustedHeight, camera.current.updateProjectionMatrix(), reduceMotion && renderer.current.render(scene.current, camera.current), width <= media.mobile ? (sphere.current.position.x = 14, sphere.current.position.y = 10) : width <= media.tablet ? (sphere.current.position.x = 18, sphere.current.position.y = 14) : (sphere.current.position.x = 22, sphere.current.position.y = 16);
      }, [reduceMotion, windowSize]), useEffect(() => {
        let onMouseMove = throttle((event) => {
          let position = {
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight
          };
          rotationX.set(position.y / 2), rotationY.set(position.x / 2);
        }, 100);
        return !reduceMotion && isInViewport && window.addEventListener("mousemove", onMouseMove), () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }, [isInViewport, reduceMotion, rotationX, rotationY]), useEffect(() => {
        let animation, animate2 = () => {
          animation = requestAnimationFrame(animate2), uniforms.current !== void 0 && (uniforms.current.time.value = 5e-5 * (Date.now() - start.current)), sphere.current.rotation.z += 1e-3, sphere.current.rotation.x = rotationX.get(), sphere.current.rotation.y = rotationY.get(), renderer.current.render(scene.current, camera.current);
        };
        return !reduceMotion && isInViewport ? animate2() : renderer.current.render(scene.current, camera.current), () => {
          cancelAnimationFrame(animation);
        };
      }, [isInViewport, reduceMotion, rotationX, rotationY]), /* @__PURE__ */ jsx(Transition, { in: !0, timeout: 3e3, nodeRef: canvasRef, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
        "canvas",
        {
          "aria-hidden": !0,
          className: styles.canvas,
          "data-visible": visible,
          ref: nodeRef,
          ...props
        }
      ) });
    };
  }
});

// build/server/assets/index-y0mg-2Uk.js
var index_y0mg_2Uk_exports = {};
__export(index_y0mg_2Uk_exports, {
  Model: () => Model
});
import { jsxs, jsx as jsx2 } from "react/jsx-runtime";
import { useReducedMotion as useReducedMotion2, useSpring as useSpring2, animate } from "framer-motion";
import { useState, useRef as useRef2, useEffect as useEffect2, useCallback, createRef, startTransition as startTransition2 } from "react";
import { WebGLRenderer as WebGLRenderer2, SRGBColorSpace, PerspectiveCamera as PerspectiveCamera2, Scene as Scene2, Group, AmbientLight as AmbientLight2, DirectionalLight as DirectionalLight2, WebGLRenderTarget, PlaneGeometry, MeshBasicMaterial, Mesh as Mesh2, OrthographicCamera, MeshDepthMaterial, ShaderMaterial, Color, Vector3, MathUtils } from "three";
import { HorizontalBlurShader, VerticalBlurShader } from "three-stdlib";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "@mdx-js/react";
var model, canvas2, styles2, MeshType, rotationSpringConfig, Model, Device, init_index_y0mg_2Uk = __esm({
  "build/server/assets/index-y0mg-2Uk.js"() {
    init_server_build_BUqUCazy();
    init_three_D0yK2C4B();
    model = "_model_9lrnh_3", canvas2 = "_canvas_9lrnh_21", styles2 = {
      model,
      canvas: canvas2
    }, MeshType = {
      Frame: "Frame",
      Screen: "Screen"
    }, rotationSpringConfig = {
      stiffness: 40,
      damping: 20,
      mass: 1.4,
      restSpeed: 1e-3
    }, Model = ({
      models,
      show = !0,
      showDelay = 0,
      cameraPosition = { x: 0, y: 0, z: 8 },
      style,
      className,
      onLoad,
      alt,
      ...rest
    }) => {
      let [loaded, setLoaded] = useState(!1), container2 = useRef2(), canvas22 = useRef2(), camera = useRef2(), modelGroup = useRef2(), scene = useRef2(), renderer = useRef2(), shadowGroup = useRef2(), renderTarget = useRef2(), renderTargetBlur = useRef2(), shadowCamera = useRef2(), depthMaterial = useRef2(), horizontalBlurMaterial = useRef2(), verticalBlurMaterial = useRef2(), plane = useRef2(), lights = useRef2(), blurPlane = useRef2(), fillPlane = useRef2(), isInViewport = useInViewport(container2, !1, { threshold: 0.2 }), reduceMotion = useReducedMotion2(), rotationX = useSpring2(0, rotationSpringConfig), rotationY = useSpring2(0, rotationSpringConfig);
      useEffect2(() => {
        let { clientWidth, clientHeight } = container2.current;
        renderer.current = new WebGLRenderer2({
          canvas: canvas22.current,
          alpha: !0,
          antialias: !1,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), renderer.current.setPixelRatio(2), renderer.current.setSize(clientWidth, clientHeight), renderer.current.outputColorSpace = SRGBColorSpace, camera.current = new PerspectiveCamera2(36, clientWidth / clientHeight, 0.1, 100), camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z), scene.current = new Scene2(), modelGroup.current = new Group(), scene.current.add(modelGroup.current);
        let ambientLight = new AmbientLight2(16777215, 1.2), keyLight = new DirectionalLight2(16777215, 1.1), fillLight = new DirectionalLight2(16777215, 0.8);
        fillLight.position.set(-6, 2, 2), keyLight.position.set(0.5, 0, 0.866), lights.current = [ambientLight, keyLight, fillLight], lights.current.forEach((light2) => scene.current.add(light2)), shadowGroup.current = new Group(), scene.current.add(shadowGroup.current), shadowGroup.current.position.set(0, 0, -0.8), shadowGroup.current.rotateX(Math.PI / 2);
        let renderTargetSize = 512, planeWidth = 8, planeHeight = 8, cameraHeight = 1.5, shadowOpacity = 0.8, shadowDarkness = 3;
        renderTarget.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize), renderTarget.current.texture.generateMipmaps = !1, renderTargetBlur.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize), renderTargetBlur.current.texture.generateMipmaps = !1;
        let planeGeometry = new PlaneGeometry(planeWidth, planeHeight).rotateX(Math.PI / 2), planeMaterial = new MeshBasicMaterial({
          map: renderTarget.current.texture,
          opacity: shadowOpacity,
          transparent: !0
        });
        plane.current = new Mesh2(planeGeometry, planeMaterial), plane.current.scale.y = -1, shadowGroup.current.add(plane.current), blurPlane.current = new Mesh2(planeGeometry), blurPlane.current.visible = !1, shadowGroup.current.add(blurPlane.current);
        let fillMaterial = new MeshBasicMaterial({
          color: 16777215,
          opacity: 0,
          transparent: !0
        });
        fillPlane.current = new Mesh2(planeGeometry, fillMaterial), fillPlane.current.rotateX(Math.PI), fillPlane.current.position.y -= 1e-5, shadowGroup.current.add(fillPlane.current), shadowCamera.current = new OrthographicCamera(
          -planeWidth / 2,
          planeWidth / 2,
          planeHeight / 2,
          -planeHeight / 2,
          0,
          cameraHeight
        ), shadowCamera.current.rotation.x = Math.PI / 2, shadowGroup.current.add(shadowCamera.current), depthMaterial.current = new MeshDepthMaterial(), depthMaterial.current.userData.darkness = { value: shadowDarkness }, depthMaterial.current.onBeforeCompile = (shader) => {
          shader.uniforms.darkness = depthMaterial.current.userData.darkness, shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace(
            "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
            "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"
          )}
      `;
        }, depthMaterial.current.depthTest = !1, depthMaterial.current.depthWrite = !1, horizontalBlurMaterial.current = new ShaderMaterial(HorizontalBlurShader), horizontalBlurMaterial.current.depthTest = !1, verticalBlurMaterial.current = new ShaderMaterial(VerticalBlurShader), verticalBlurMaterial.current.depthTest = !1;
        let unsubscribeX = rotationX.on("change", renderFrame), unsubscribeY = rotationY.on("change", renderFrame);
        return () => {
          renderTarget.current.dispose(), renderTargetBlur.current.dispose(), removeLights(lights.current), cleanScene(scene.current), cleanRenderer(renderer.current), unsubscribeX(), unsubscribeY();
        };
      }, []);
      let blurShadow = useCallback((amount) => {
        blurPlane.current.visible = !0, blurPlane.current.material = horizontalBlurMaterial.current, blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture, horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256), renderer.current.setRenderTarget(renderTargetBlur.current), renderer.current.render(blurPlane.current, shadowCamera.current), blurPlane.current.material = verticalBlurMaterial.current, blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture, verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256), renderer.current.setRenderTarget(renderTarget.current), renderer.current.render(blurPlane.current, shadowCamera.current), blurPlane.current.visible = !1;
      }, []), renderFrame = useCallback(() => {
        let initialBackground = scene.current.background;
        scene.current.background = null, scene.current.overrideMaterial = depthMaterial.current, renderer.current.setRenderTarget(renderTarget.current), renderer.current.render(scene.current, shadowCamera.current), scene.current.overrideMaterial = null, blurShadow(5), blurShadow(5 * 0.4), renderer.current.setRenderTarget(null), scene.current.background = initialBackground, modelGroup.current.rotation.x = rotationX.get(), modelGroup.current.rotation.y = rotationY.get(), renderer.current.render(scene.current, camera.current);
      }, [blurShadow, rotationX, rotationY]);
      return useEffect2(() => {
        let onMouseMove = throttle((event) => {
          let { innerWidth, innerHeight } = window, position = {
            x: (event.clientX - innerWidth / 2) / innerWidth,
            y: (event.clientY - innerHeight / 2) / innerHeight
          };
          rotationY.set(position.x / 2), rotationX.set(position.y / 2);
        }, 100);
        return isInViewport && !reduceMotion && window.addEventListener("mousemove", onMouseMove), () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }, [isInViewport, reduceMotion, rotationX, rotationY]), useEffect2(() => {
        let handleResize = () => {
          if (!container2.current)
            return;
          let { clientWidth, clientHeight } = container2.current;
          renderer.current.setSize(clientWidth, clientHeight), camera.current.aspect = clientWidth / clientHeight, camera.current.updateProjectionMatrix(), renderFrame();
        };
        return window.addEventListener("resize", handleResize), handleResize(), () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [renderFrame]), /* @__PURE__ */ jsxs(
        "div",
        {
          className: classes(styles2.model, className),
          "data-loaded": loaded,
          style: cssProps({ delay: numToMs(showDelay) }, style),
          ref: container2,
          role: "img",
          "aria-label": alt,
          ...rest,
          children: [
            /* @__PURE__ */ jsx2("canvas", { className: styles2.canvas, ref: canvas22 }),
            models.map((model22, index2) => /* @__PURE__ */ jsx2(
              Device,
              {
                renderer,
                modelGroup,
                show,
                showDelay,
                renderFrame,
                index: index2,
                setLoaded,
                onLoad,
                model: model22
              },
              JSON.stringify(model22.position)
            ))
          ]
        }
      );
    }, Device = ({
      renderer,
      model: model22,
      modelGroup,
      renderFrame,
      index: index2,
      showDelay,
      setLoaded,
      onLoad,
      show
    }) => {
      let [loadDevice, setLoadDevice] = useState(), reduceMotion = useReducedMotion2(), placeholderScreen = createRef();
      useEffect2(() => {
        let applyScreenTexture = async (texture, node) => {
          texture.colorSpace = SRGBColorSpace, texture.flipY = !1, texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy(), texture.generateMipmaps = !1, await renderer.current.initTexture(texture), node.material.color = new Color(16777215), node.material.transparent = !0, node.material.map = texture;
        };
        setLoadDevice({ start: async () => {
          let { texture, position, url: url2 } = model22, loadFullResTexture, playAnimation, [placeholder2, gltf] = await Promise.all([
            await textureLoader.loadAsync(texture.placeholder),
            await modelLoader.loadAsync(url2)
          ]);
          modelGroup.current.add(gltf.scene), gltf.scene.traverse(async (node) => {
            node.material && (node.material.color = new Color(2039845)), node.name === MeshType.Screen && (placeholderScreen.current = node.clone(), placeholderScreen.current.material = node.material.clone(), node.parent.add(placeholderScreen.current), placeholderScreen.current.material.opacity = 1, placeholderScreen.current.position.z += 1e-3, applyScreenTexture(placeholder2, placeholderScreen.current), loadFullResTexture = async () => {
              let image2 = await resolveSrcFromSrcSet(texture), fullSize = await textureLoader.loadAsync(image2);
              await applyScreenTexture(fullSize, node), animate(1, 0, {
                onUpdate: (value2) => {
                  placeholderScreen.current.material.opacity = value2, renderFrame();
                }
              });
            });
          });
          let targetPosition = new Vector3(position.x, position.y, position.z);
          return reduceMotion && gltf.scene.position.set(...targetPosition.toArray()), model22.animation === ModelAnimationType.SpringUp && (playAnimation = () => {
            let startPosition = new Vector3(
              targetPosition.x,
              targetPosition.y - 1,
              targetPosition.z
            );
            gltf.scene.position.set(...startPosition.toArray()), animate(startPosition.y, targetPosition.y, {
              type: "spring",
              delay: (300 * index2 + showDelay) / 1e3,
              stiffness: 60,
              damping: 20,
              mass: 1,
              restSpeed: 1e-4,
              restDelta: 1e-4,
              onUpdate: (value2) => {
                gltf.scene.position.y = value2, renderFrame();
              }
            });
          }), model22.animation === ModelAnimationType.LaptopOpen && (playAnimation = () => {
            let frameNode = gltf.scene.children.find(
              (node) => node.name === MeshType.Frame
            ), startRotation = new Vector3(MathUtils.degToRad(90), 0, 0), endRotation = new Vector3(0, 0, 0);
            return gltf.scene.position.set(...targetPosition.toArray()), frameNode.rotation.set(...startRotation.toArray()), animate(startRotation.x, endRotation.x, {
              type: "spring",
              delay: (300 * index2 + showDelay + 300) / 1e3,
              stiffness: 80,
              damping: 20,
              restSpeed: 1e-4,
              restDelta: 1e-4,
              onUpdate: (value2) => {
                frameNode.rotation.x = value2, renderFrame();
              }
            });
          }), { loadFullResTexture, playAnimation };
        } });
      }, []), useEffect2(() => {
        if (!loadDevice || !show)
          return;
        let animation, onModelLoad = async () => {
          let { loadFullResTexture, playAnimation } = await loadDevice.start();
          setLoaded(!0), onLoad?.(), reduceMotion || (animation = playAnimation()), await loadFullResTexture(), reduceMotion && renderFrame();
        };
        return startTransition2(() => {
          onModelLoad();
        }), () => {
          animation?.stop();
        };
      }, [loadDevice, show]);
    };
  }
});

// build/server/assets/server-build-BUqUCazy.js
import { jsx as jsx3, jsxs as jsxs2, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef as useRef3, useEffect as useEffect3, useState as useState2, memo, Fragment, useCallback as useCallback2, useId, useSyncExternalStore, Suspense, lazy } from "react";
import { useReducedMotion as useReducedMotion3, AnimatePresence, usePresence, useSpring as useSpring3 } from "framer-motion";
import { useMDXComponents } from "@mdx-js/react";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let body = await renderToReadableStream(
    /* @__PURE__ */ jsx3(RemixServer, { context: remixContext, url: request.url }),
    {
      // If you wish to abort the rendering process, you can pass a signal here.
      // Please refer to the templates for example son how to configure this.
      // signal: controller.signal,
      onError(error2) {
        console.error(error2), responseStatusCode = 500;
      }
    }
  );
  return isBotRequest(request.headers.get("user-agent")) && await body.allReady, responseHeaders.set("Content-Type", "text/html"), new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function cssProps(props, style = {}) {
  let result = {}, keys = Object.keys(props);
  for (let key of keys) {
    let value2 = props[key];
    typeof value2 == "number" && key === "delay" && (value2 = numToMs(value2)), typeof value2 == "number" && key !== "opacity" && (value2 = numToPx(value2)), typeof value2 == "number" && key === "opacity" && (value2 = `${value2 * 100}%`), result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
function useTheme() {
  return useContext(ThemeContext);
}
function squish(styles22) {
  return styles22.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join(`

`)
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `).join(`
`)
  );
}
function isExternalLink(href) {
  return href?.includes("://");
}
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position)
      return { type: CharType.Value, value: value2 };
    if (position % 1 < 0.5) {
      let rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
function useFormInput(initialValue = "") {
  let [value2, setValue] = useState2(initialValue), [error2, setError] = useState2(), [isDirty, setIsDirty] = useState2(!1);
  return {
    value: value2,
    error: error2,
    onChange: (event) => {
      setValue(event.target.value), setIsDirty(!0), error2 && event.target.checkValidity() && setError(null);
    },
    onBlur: (event) => {
      isDirty && event.target.checkValidity();
    },
    onInvalid: (event) => {
      event.preventDefault(), setError(event.target.validationMessage);
    }
  };
}
function useHasMounted() {
  let [mounted, setMounted] = useState2(!1);
  return useEffect3(() => {
    setMounted(!0);
  }, []), mounted;
}
function useInterval(callback, delay2, reset) {
  let savedCallback = useRef3();
  useEffect3(() => {
    savedCallback.current = callback;
  }), useEffect3(() => {
    function tick() {
      savedCallback.current();
    }
    {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = !0) {
  let [intersect, setIntersect] = useState2(!1), [isUnobserved, setIsUnobserved] = useState2(!1);
  return useEffect3(() => {
    if (!elementRef?.current)
      return;
    let observer = new IntersectionObserver(([entry2]) => {
      let { isIntersecting, target } = entry2;
      setIntersect(isIntersecting), isIntersecting && unobserveOnIntersect && (observer.unobserve(target), setIsUnobserved(!0));
    }, options);
    return !isUnobserved && shouldObserve && observer.observe(elementRef.current), () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]), intersect;
}
function useParallax(multiplier, onChange) {
  let reduceMotion = useReducedMotion3();
  useEffect3(() => {
    let ticking = !1, animationFrame = null, animate2 = () => {
      let { innerHeight } = window, offsetValue = Math.max(0, window.scrollY) * multiplier, clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue), ticking = !1;
    }, handleScroll = () => {
      ticking || (ticking = !0, animationFrame = requestAnimationFrame(animate2));
    };
    return reduceMotion || (window.addEventListener("scroll", handleScroll), handleScroll()), () => {
      window.removeEventListener("scroll", handleScroll), cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  let ref = useRef3();
  return useEffect3(() => {
    ref.current = value2;
  }, [value2]), ref.current;
}
function useScrollToHash() {
  let scrollTimeout = useRef3(), location = useLocation(), navigate = useNavigate(), reduceMotion = useReducedMotion3();
  return useCallback2(
    (hash, onDone) => {
      let id = hash.split("#")[1];
      document.getElementById(id).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      let handleScroll = () => {
        clearTimeout(scrollTimeout.current), scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll), window.location.pathname === location.pathname && (onDone?.(), navigate(`${location.pathname}#${id}`, { scroll: !1 }));
        }, 50);
      };
      return window.addEventListener("scroll", handleScroll), () => {
        window.removeEventListener("scroll", handleScroll), clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
}
function useWindowSize() {
  let dimensions = useRef3(() => ({ w: 1280, h: 800 })), createRuler = useCallback2(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed", ruler.style.height = "100vh", ruler.style.width = 0, ruler.style.top = 0, document.documentElement.appendChild(ruler), dimensions.current.w = window.innerWidth, dimensions.current.h = ruler.offsetHeight, document.documentElement.removeChild(ruler), ruler = null;
  }, []), getHeight = useCallback2(() => navigator?.userAgent.match(/iphone|ipod|ipad/i) ? (createRuler(), dimensions.current.h) : window.innerHeight, [createRuler]), getSize = useCallback2(() => ({
    width: window.innerWidth,
    height: getHeight()
  }), [getHeight]), [windowSize, setWindowSize] = useState2(dimensions.current);
  return useEffect3(() => {
    let handleResize = () => {
      setWindowSize(getSize());
    };
    return window.addEventListener("resize", handleResize), handleResize(), () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]), windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet)
        throw new Error("No image src or srcSet provided");
      let tempImage = new Image();
      src && (tempImage.src = src), srcSet && (tempImage.srcset = srcSet), sizes && (tempImage.sizes = sizes);
      let onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        let source = tempImage.currentSrc;
        tempImage = null, resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    let canvas3 = document.createElement("canvas"), ctx = canvas3.getContext("2d");
    canvas3.width = width, canvas3.height = height, ctx.fillStyle = "rgba(0, 0, 0, 0)", ctx.fillRect(0, 0, width, height), canvas3.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      let image2 = URL.createObjectURL(blob);
      canvas3.remove(), resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  let sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      let [src, width] = srcString.split(" "), size = Number(width.replace("w", "")), image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  ), fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", "), fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  return sources.find((src) => src.image === fakeSrc).src;
}
function getIsVideo(src) {
  return typeof src == "string" && src.includes(".mp4");
}
function Error$1({ error: error2 }) {
  let flatlined = !error2.status, getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn\u2019t exist or was deleted. Or perhaps you don\u2019t exist and this webpage couldn\u2019t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  }, { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs2("section", {
    className: styles$k.page,
    children: [
      flatlined && /* @__PURE__ */ jsx3(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
          }
        }
      ),
      /* @__PURE__ */ jsx3(Transition, { in: !0, children: ({ visible }) => /* @__PURE__ */ jsxs2(Fragment$1, {
        children: [
          /* @__PURE__ */ jsx3("div", { className: styles$k.details, children: /* @__PURE__ */ jsxs2("div", {
            className: styles$k.text,
            children: [
              !flatlined && /* @__PURE__ */ jsx3(
                Heading,
                {
                  className: styles$k.title,
                  "data-visible": visible,
                  level: 0,
                  weight: "bold",
                  children: error2.status
                }
              ),
              flatlined && /* @__PURE__ */ jsxs2(
                Heading,
                {
                  className: styles$k.titleFlatline,
                  "data-visible": visible,
                  level: 2,
                  as: "h1",
                  children: [
                    /* @__PURE__ */ jsx3("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx3("use", { href: `${flatlineSkull}#skull` }) }),
                    /* @__PURE__ */ jsx3(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
                  ]
                }
              ),
              !flatlined && /* @__PURE__ */ jsx3(
                Heading,
                {
                  "aria-hidden": !0,
                  className: styles$k.subheading,
                  "data-visible": visible,
                  as: "h2",
                  level: 4,
                  children: /* @__PURE__ */ jsx3(DecoderText, { text: summary2, start: visible, delay: 300 })
                }
              ),
              /* @__PURE__ */ jsx3(Text, { className: styles$k.description, "data-visible": visible, as: "p", children: message }),
              flatlined ? /* @__PURE__ */ jsx3(
                Button,
                {
                  secondary: !0,
                  iconHoverShift: !0,
                  className: styles$k.button,
                  "data-visible": visible,
                  href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
                  icon: "chevron-right",
                  children: "Emotional support"
                }
              ) : /* @__PURE__ */ jsx3(
                Button,
                {
                  secondary: !0,
                  iconHoverShift: !0,
                  className: styles$k.button,
                  "data-visible": visible,
                  href: "/",
                  icon: "chevron-right",
                  children: "Back to homepage"
                }
              )
            ]
          }) }),
          /* @__PURE__ */ jsxs2("div", {
            className: styles$k.videoContainer,
            "data-visible": visible,
            children: [
              /* @__PURE__ */ jsx3(
                Image$1,
                {
                  reveal: !0,
                  cover: !0,
                  noPauseButton: !0,
                  delay: 600,
                  className: styles$k.video,
                  src: flatlined ? flatlineVideo : notFoundVideo,
                  placeholder: flatlined ? flatlinePoster : notfoundImg
                }
              ),
              flatlined ? /* @__PURE__ */ jsx3(
                "a",
                {
                  className: styles$k.credit,
                  "data-visible": visible,
                  href: "https://www.imdb.com/title/tt0318871/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Animation from Berserk (1997)"
                }
              ) : /* @__PURE__ */ jsx3(
                "a",
                {
                  className: styles$k.credit,
                  "data-visible": visible,
                  href: "https://www.imdb.com/title/tt0113568/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Animation from Ghost in the Shell (1995)"
                }
              )
            ]
          })
        ]
      }) })
    ]
  });
}
function Progress() {
  let [animationComplete, setAnimationComplete] = useState2(!1), [visible, setVisible] = useState2(!1), { state } = useNavigation(), progressRef = useRef3(), timeout = useRef3(0);
  return useEffect3(() => {
    clearTimeout(timeout.current), state !== "idle" ? timeout.current = setTimeout(() => {
      setVisible(!0);
    }, 500) : animationComplete && (timeout.current = setTimeout(() => {
      setVisible(!1);
    }, 300));
  }, [state, animationComplete]), useEffect3(() => {
    if (!progressRef.current)
      return;
    let controller = new AbortController();
    return state !== "idle" ? setAnimationComplete(!1) : (Promise.all(
      progressRef.current.getAnimations({ subtree: !0 }).map((animation) => animation.finished)
    ).then(() => {
      controller.signal.aborted || setAnimationComplete(!0);
    }), () => {
      controller.abort();
    });
  }, [state]), /* @__PURE__ */ jsx3(
    "div",
    {
      className: styles$e.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData(), fetcher = useFetcher(), { state } = useNavigation();
  (_a = fetcher.formData) != null && _a.has("theme") && (theme = fetcher.formData.get("theme"));
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme || (theme === "dark" ? "light" : "dark") },
      { action: "/api/set-theme", method: "post" }
    );
  }
  return useEffect3(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []), /* @__PURE__ */ jsxs2("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxs2("head", {
        children: [
          /* @__PURE__ */ jsx3("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ jsx3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          /* @__PURE__ */ jsx3("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
          /* @__PURE__ */ jsx3(
            "meta",
            {
              name: "color-scheme",
              content: theme === "light" ? "light dark" : "dark light"
            }
          ),
          /* @__PURE__ */ jsx3("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
          /* @__PURE__ */ jsx3(Meta, {}),
          /* @__PURE__ */ jsx3(Links, {}),
          /* @__PURE__ */ jsx3("link", { rel: "canonical", href: canonicalUrl })
        ]
      }),
      /* @__PURE__ */ jsxs2("body", {
        "data-theme": theme,
        children: [
          /* @__PURE__ */ jsxs2(ThemeProvider, {
            theme,
            toggleTheme,
            children: [
              /* @__PURE__ */ jsx3(Progress, {}),
              /* @__PURE__ */ jsx3(VisuallyHidden, { showOnFocus: !0, as: "a", className: styles$d.skip, href: "#main-content", children: "Skip to main content" }),
              /* @__PURE__ */ jsx3(Navbar, {}),
              /* @__PURE__ */ jsx3(
                "main",
                {
                  id: "main-content",
                  className: styles$d.container,
                  tabIndex: -1,
                  "data-loading": state === "loading",
                  children: /* @__PURE__ */ jsx3(Outlet, {})
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx3(ScrollRestoration, {}),
          /* @__PURE__ */ jsx3(Scripts, {})
        ]
      })
    ]
  });
}
function ErrorBoundary$1() {
  let error2 = useRouteError();
  return /* @__PURE__ */ jsxs2("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxs2("head", {
        children: [
          /* @__PURE__ */ jsx3("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ jsx3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          /* @__PURE__ */ jsx3("meta", { name: "theme-color", content: "#111" }),
          /* @__PURE__ */ jsx3("meta", { name: "color-scheme", content: "dark light" }),
          /* @__PURE__ */ jsx3("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
          /* @__PURE__ */ jsx3(Meta, {}),
          /* @__PURE__ */ jsx3(Links, {})
        ]
      }),
      /* @__PURE__ */ jsxs2("body", {
        "data-theme": "dark",
        children: [
          /* @__PURE__ */ jsx3(Error$1, { error: error2 }),
          /* @__PURE__ */ jsx3(ScrollRestoration, {}),
          /* @__PURE__ */ jsx3(Scripts, {})
        ]
      })
    ]
  });
}
function _createMdxContent$1(props) {
  let _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  }, { Embed } = _components;
  return Embed || _missingMdxReference("Embed"), jsxs2(Fragment$1, {
    children: [jsxs2(_components.p, {
      children: ["When I first tried CSS-in-JS libraries like ", jsx3(_components.a, {
        href: "https://styled-components.com/",
        children: "Styled Components"
      }), " and ", jsx3(_components.a, {
        href: "https://emotion.sh",
        children: "Emotion"
      }), ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."]
    }), `
`, jsx3(_components.p, {
      children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:"
    }), `
`, jsxs2(_components.ol, {
      children: [`
`, jsxs2(_components.li, {
        children: [jsx3(_components.strong, {
          children: "Values:"
        }), " like a color, delay, or position. Anything that represents a single value for a CSS property."]
      }), `
`, jsxs2(_components.li, {
        children: [jsx3(_components.strong, {
          children: "States:"
        }), " like a primary button variant, or a loading state each having their own set of associated styles."]
      }), `
`]
    }), `
`, jsx3(_components.h2, {
      id: "where-we-are-today",
      children: "Where we are today"
    }), `
`, jsxs2(_components.p, {
      children: ["Before we get started, for comparison I'll be using SCSS (with ", jsx3(_components.a, {
        href: "https://css-tricks.com/bem-101/",
        children: "BEM syntax"
      }), ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ", jsx3(_components.a, {
        href: "https://vanilla-extract.style/",
        children: "Vanilla Extract"
      }), ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."]
    }), `
`, jsxs2(_components.p, {
      children: ["If you're already familiar with the problem, ", jsx3(_components.a, {
        href: "#theres-a-better-way-vanilla-css",
        children: "skip to the solution"
      }), "."]
    }), `
`, jsx3(_components.h3, {
      id: "values",
      children: "Values"
    }), `
`, jsxs2(_components.p, {
      children: ["Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ", jsx3(_components.em, {
        children: "value"
      }), " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"]
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), `\r
    `, jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs2(_components.span, {
            className: "token attr-value",
            children: [jsx3(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx3(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx3(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
      `
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
    `
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.p, {
      children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles."
    }), `
`, jsx3(_components.p, {
      children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props"
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token comment",
          children: "// We can pass the `color` value into the styled component as a prop"
        }), `\r
`, jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx3(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx3(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
`, jsx3(_components.span, {
          className: "token comment",
          children: "// The syntax is a little funky, but now in the styled component's styles"
        }), `\r
`, jsx3(_components.span, {
          className: "token comment",
          children: "// we can use its props as a function"
        }), `\r
`, jsx3(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx3(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx3(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx3(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx3(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs2(_components.span, {
          className: "token template-string",
          children: [jsx3(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs2(_components.span, {
            className: "token css language-css",
            children: [`\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "border"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "0"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "4"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "8"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "12"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "14"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "color"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsxs2(_components.span, {
              className: "token interpolation",
              children: [jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx3(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx3(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx3(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx3(_components.span, {
                className: "token property-access",
                children: "color"
              }), jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
`]
          }), jsx3(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `
`]
      })
    }), `
`, jsx3(_components.h3, {
      id: "states",
      children: "States"
    }), `
`, jsx3(_components.p, {
      children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:"
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), `\r
    `, jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), `\r
      `, jsx3(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token string",
              children: "'button'"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ","
            }), " ", jsxs2(_components.span, {
              className: "token template-string",
              children: [jsx3(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsx3(_components.span, {
                className: "token string",
                children: "button--"
              }), jsxs2(_components.span, {
                className: "token interpolation",
                children: [jsx3(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "size", jsx3(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx3(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ","
            }), " primary ", jsx3(_components.span, {
              className: "token operator",
              children: "?"
            }), " ", jsx3(_components.span, {
              className: "token string",
              children: "'button--primary'"
            }), " ", jsx3(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token keyword null nil",
              children: "null"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            }), `\r
        `, jsx3(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx3(_components.span, {
              className: "token method function property-access",
              children: "filter"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx3(_components.span, {
              className: "token known-class-name class-name",
              children: "Boolean"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ")"
            }), `\r
        `, jsx3(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx3(_components.span, {
              className: "token method function property-access",
              children: "join"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx3(_components.span, {
              className: "token string",
              children: "' '"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ")"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), `\r
      `, jsx3(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx3(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx3(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), `\r
    `, jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
      `
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
    `
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.pre, {
      className: "language-scss",
      children: jsxs2(_components.code, {
        className: "language-scss",
        children: [jsx3(_components.span, {
          className: "token selector",
          children: ".button "
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "0"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "4"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "8"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "12"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "14"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: [jsx3(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--primary "]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token variable",
          children: "$primary-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: [jsx3(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--small "]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "height"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "30"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: [jsx3(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--medium "]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "height"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "40"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: [jsx3(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--large "]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "height"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "60"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.p, {
      children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax."
    }), `
`, jsxs2(_components.p, {
      children: ["Our JSX, however, isn't faring so well. That string concatenation on the ", jsx3(_components.code, {
        children: "className"
      }), " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ", jsx3(_components.code, {
        children: "filter(Boolean)"
      }), " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ", jsx3(_components.code, {
        children: "classnames"
      }), " package on NPM. But they only make the problem marginally more bearable."]
    }), `
`, jsx3(_components.p, {
      children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states"
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), `\r
    `, jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx3(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx3(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
\r
`, jsx3(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx3(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx3(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx3(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx3(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs2(_components.span, {
          className: "token template-string",
          children: [jsx3(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs2(_components.span, {
            className: "token css language-css",
            children: [`\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "border"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "0"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "4"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "8"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "12"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "14"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "color"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token color",
              children: "whitesmoke"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
\r
  `, jsxs2(_components.span, {
              className: "token interpolation",
              children: [jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx3(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx3(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx3(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx3(_components.span, {
                className: "token property-access",
                children: "primary"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs2(_components.span, {
                className: "token template-string",
                children: [jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs2(_components.span, {
                  className: "token css language-css",
                  children: [`\r
    `, jsx3(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " $primary-color", jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
  `]
                }), jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), `\r
\r
  `, jsxs2(_components.span, {
              className: "token interpolation",
              children: [jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx3(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx3(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx3(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx3(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx3(_components.span, {
                className: "token string",
                children: "'small'"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs2(_components.span, {
                className: "token template-string",
                children: [jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs2(_components.span, {
                  className: "token css language-css",
                  children: [`\r
    `, jsx3(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token number",
                    children: "30"
                  }), jsx3(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
  `]
                }), jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), `\r
\r
  `, jsxs2(_components.span, {
              className: "token interpolation",
              children: [jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx3(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx3(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx3(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx3(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx3(_components.span, {
                className: "token string",
                children: "'medium'"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs2(_components.span, {
                className: "token template-string",
                children: [jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs2(_components.span, {
                  className: "token css language-css",
                  children: [`\r
    `, jsx3(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx3(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
  `]
                }), jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), `\r
\r
  `, jsxs2(_components.span, {
              className: "token interpolation",
              children: [jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx3(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx3(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx3(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx3(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx3(_components.span, {
                className: "token string",
                children: "'large'"
              }), " ", jsx3(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs2(_components.span, {
                className: "token template-string",
                children: [jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs2(_components.span, {
                  className: "token css language-css",
                  children: [`\r
    `, jsx3(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx3(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
  `]
                }), jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), `\r
`]
          }), jsx3(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `
`]
      })
    }), `
`, jsxs2(_components.p, {
      children: ["It's not ", jsx3(_components.em, {
        children: "terrible"
      }), ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."]
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx3(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx3(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx3(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx3(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs2(_components.span, {
          className: "token template-string",
          children: [jsx3(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs2(_components.span, {
            className: "token css language-css",
            children: [`\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "border"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "0"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "4"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "8"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "12"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token number",
              children: "14"
            }), jsx3(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
  `, jsx3(_components.span, {
              className: "token property",
              children: "color"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx3(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: ";"
            }), `\r
\r
  `, jsxs2(_components.span, {
              className: "token interpolation",
              children: [jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx3(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx3(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), `\r
    props`, jsx3(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx3(_components.span, {
                className: "token property-access",
                children: "primary"
              }), `\r
      `, jsx3(_components.span, {
                className: "token operator",
                children: "?"
              }), " css", jsxs2(_components.span, {
                className: "token template-string",
                children: [jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs2(_components.span, {
                  className: "token css language-css",
                  children: [`\r
          `, jsx3(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx3(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
          `, jsx3(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token color",
                    children: "darkslateblue"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
        `]
                }), jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), `\r
      `, jsx3(_components.span, {
                className: "token operator",
                children: ":"
              }), " css", jsxs2(_components.span, {
                className: "token template-string",
                children: [jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs2(_components.span, {
                  className: "token css language-css",
                  children: [`\r
          `, jsx3(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx3(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
          `, jsx3(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx3(_components.span, {
                    className: "token color",
                    children: "whitesmoke"
                  }), jsx3(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), `\r
        `]
                }), jsx3(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx3(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), `\r
`]
          }), jsx3(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `
`]
      })
    }), `
`, jsx3(_components.p, {
      children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read."
    }), `
`, jsx3(_components.hr, {}), `
`, jsx3(_components.h2, {
      id: "theres-a-better-way-vanilla-css",
      children: "There's a better way: vanilla CSS"
    }), `
`, jsx3(_components.p, {
      children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)."
    }), `
`, jsxs2(_components.p, {
      children: ["After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ", jsx3(_components.em, {
        children: "better"
      }), " than what they have to offer."]
    }), `
`, jsx3(_components.p, {
      children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away."
    }), `
`, jsx3(_components.h3, {
      id: "values-1",
      children: "Values"
    }), `
`, jsx3(_components.p, {
      children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works."
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), `\r
    `, jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs2(_components.span, {
            className: "token attr-value",
            children: [jsx3(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx3(_components.span, {
              className: "token string-property property",
              children: "'--color'"
            }), jsx3(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
      `
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
    `
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.pre, {
      className: "language-css",
      children: jsxs2(_components.code, {
        className: "language-css",
        children: [jsx3(_components.span, {
          className: "token selector",
          children: jsx3(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "0"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "4"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "8"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "12"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "14"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: "var"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx3(_components.span, {
          className: "token variable",
          children: "--color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsxs2(_components.p, {
      children: [`Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `, jsx3(_components.code, {
        children: ".button"
      }), " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."]
    }), `
`, jsx3(_components.p, {
      children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value"
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token comment",
          children: "// All we need to pass is the value needed by the transform, rather than"
        }), `\r
`, jsx3(_components.span, {
          className: "token comment",
          children: "// polluting our jsx with the full transform in the inline style"
        }), `\r
`, jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " offset", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), `\r
    `, jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs2(_components.span, {
            className: "token attr-value",
            children: [jsx3(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx3(_components.span, {
              className: "token string-property property",
              children: "'--offset'"
            }), jsx3(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsxs2(_components.span, {
              className: "token template-string",
              children: [jsx3(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsxs2(_components.span, {
                className: "token interpolation",
                children: [jsx3(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "offset", jsx3(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx3(_components.span, {
                className: "token string",
                children: "px"
              }), jsx3(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), " ", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
      `
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
    `
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.pre, {
      className: "language-css",
      children: jsxs2(_components.code, {
        className: "language-css",
        children: [jsx3(_components.span, {
          className: "token selector",
          children: jsx3(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "0"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "8"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "12"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "14"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "transform"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: "translate3d"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx3(_components.span, {
          className: "token number",
          children: "0"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: "var"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx3(_components.span, {
          className: "token variable",
          children: "--offset"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "0"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsxs2(_components.p, {
      children: [`There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `, jsx3(_components.a, {
        href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/",
        children: "This article from Lea Verou"
      }), " does a great job at explaining this technique."]
    }), `
`, jsx3(_components.h3, {
      id: "states-1",
      children: "States"
    }), `
`, jsxs2(_components.p, {
      children: ["The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ", jsx3(_components.code, {
        children: "&--modifier"
      }), " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"]
    }), `
`, jsx3(_components.pre, {
      className: "language-jsx",
      children: jsxs2(_components.code, {
        className: "language-jsx",
        children: [jsx3(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: jsx3(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs2(_components.span, {
          className: "token parameter",
          children: [jsx3(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx3(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx3(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), `\r
    `, jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs2(_components.span, {
            className: "token attr-value",
            children: [jsx3(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx3(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "data-size"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "size", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), " ", jsx3(_components.span, {
            className: "token attr-name",
            children: "data-primary"
          }), jsxs2(_components.span, {
            className: "token script language-javascript",
            children: [jsx3(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "primary", jsx3(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
      `
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx3(_components.span, {
          className: "token plain-text",
          children: `\r
    `
        }), jsxs2(_components.span, {
          className: "token tag",
          children: [jsxs2(_components.span, {
            className: "token tag",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx3(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.pre, {
      className: "language-css",
      children: jsxs2(_components.code, {
        className: "language-css",
        children: [jsx3(_components.span, {
          className: "token selector",
          children: jsx3(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "0"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "4"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "8"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "12"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "14"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: ["&", jsxs2(_components.span, {
            className: "token attribute",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token attr-name",
              children: "data-primary"
            }), jsx3(_components.span, {
              className: "token operator",
              children: "="
            }), jsx3(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token function",
          children: "var"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx3(_components.span, {
          className: "token variable",
          children: "--colorPrimary"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: ["&", jsxs2(_components.span, {
            className: "token attribute",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx3(_components.span, {
              className: "token operator",
              children: "="
            }), jsx3(_components.span, {
              className: "token attr-value",
              children: "'small'"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "height"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "30"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: ["&", jsxs2(_components.span, {
            className: "token attribute",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx3(_components.span, {
              className: "token operator",
              children: "="
            }), jsx3(_components.span, {
              className: "token attr-value",
              children: "'medium'"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "height"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "40"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: ["&", jsxs2(_components.span, {
            className: "token attribute",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx3(_components.span, {
              className: "token operator",
              children: "="
            }), jsx3(_components.span, {
              className: "token attr-value",
              children: "'large'"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "height"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "60"
        }), jsx3(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsx3(_components.p, {
      children: "Have a play with the example button component here:"
    }), `
`, jsx3(Embed, {
      src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx"
    }), `
`, jsxs2(_components.p, {
      children: ["This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ", jsx3(_components.code, {
        children: "&--modifier"
      }), " pattern, but I think that's an acceptable tradeoff."]
    }), `
`, jsxs2(_components.p, {
      children: ["It may seem kinda ", jsx3(_components.em, {
        children: "weird"
      }), " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"]
    }), `
`, jsx3(_components.pre, {
      className: "language-css",
      children: jsxs2(_components.code, {
        className: "language-css",
        children: [jsx3(_components.span, {
          className: "token selector",
          children: jsx3(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: ["&", jsxs2(_components.span, {
            className: "token attribute",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token attr-name",
              children: "aria-pressed"
            }), jsx3(_components.span, {
              className: "token operator",
              children: "="
            }), jsx3(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token color",
          children: "gainsboro"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
\r
  `, jsxs2(_components.span, {
          className: "token selector",
          children: ["&", jsxs2(_components.span, {
            className: "token attribute",
            children: [jsx3(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx3(_components.span, {
              className: "token attr-name",
              children: "disabled"
            }), jsx3(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx3(_components.span, {
          className: "token punctuation",
          children: "{"
        }), `\r
    `, jsx3(_components.span, {
          className: "token property",
          children: "opacity"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx3(_components.span, {
          className: "token number",
          children: "0.4"
        }), jsx3(_components.span, {
          className: "token punctuation",
          children: ";"
        }), `\r
  `, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `\r
`, jsx3(_components.span, {
          className: "token punctuation",
          children: "}"
        }), `
`]
      })
    }), `
`, jsxs2(_components.p, {
      children: ["I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ", jsx3(_components.a, {
        href: "https://github.com/css-modules/css-modules",
        children: "CSS Modules"
      }), " which is included out of the box in most React frameworks like Next.js and Create React App."]
    }), `
`, jsxs2(_components.p, {
      children: ["Of course, these techniques don't require you to ", jsx3(_components.em, {
        children: "only"
      }), " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ", jsx3(_components.a, {
        href: "https://www.w3.org/TR/css-nesting-1/",
        children: "nesting"
      }), " and ", jsx3(_components.a, {
        href: "https://www.w3.org/TR/css-color-5/#relative-colors",
        children: "relative colors"
      }), " I think it's becoming less necessary to reach for these tools."]
    }), `
`, jsxs2(_components.p, {
      children: ["The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ", jsx3(_components.a, {
        href: "https://github.com/HamishMW/portfolio",
        children: "source code"
      }), "."]
    })]
  });
}
function MDXContent$1(props = {}) {
  let { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx3(MDXLayout, {
    ...props,
    children: jsx3(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
function _createMdxContent(props) {
  let _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs2(Fragment$1, {
    children: [jsx3(_components.h2, {
      id: "how-it-all-started",
      children: "How it all started"
    }), `
`, jsxs2(_components.p, {
      children: [`Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `, jsx3(_components.a, {
        href: "/404",
        children: "404 page"
      }), "."]
    }), `
`, jsx3(_components.p, {
      children: jsx3(_components.img, {
        src: "/static/inspiration.png",
        alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect",
        width: "1495",
        height: "1418"
      })
    }), `
`, jsx3(_components.h2, {
      id: "the-first-iteration",
      children: "The first iteration"
    }), `
`, jsx3(_components.p, {
      children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship."
    }), `
`, jsx3(_components.p, {
      children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage."
    }), `
`, jsxs2(_components.p, {
      children: ["Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ", jsx3(_components.a, {
        href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D",
        children: "Clay Mockups 3D Figma plugin"
      }), "."]
    }), `
`, jsx3(_components.p, {
      children: jsx3(_components.img, {
        src: "/static/clay-mockups.png",
        alt: "Thumbnail for my Clay Mockups 3D plugin",
        width: "1920",
        height: "960"
      })
    }), `
`, jsx3(_components.h2, {
      id: "migrating-to-nextjs",
      children: "Migrating to Next.js"
    }), `
`, jsx3(_components.p, {
      children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs."
    }), `
`, jsxs2(_components.ul, {
      children: [`
`, jsx3(_components.li, {
        children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future."
      }), `
`, jsx3(_components.li, {
        children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts."
      }), `
`, jsxs2(_components.li, {
        children: ["For generating pages from ", jsx3(_components.code, {
          children: ".mdx"
        }), " files, I'm using Kent C Dodds' ", jsx3(_components.a, {
          href: "https://github.com/kentcdodds/mdx-bundler",
          children: "mdx-bundler"
        }), ". In combination with Next.js it makes generating pages from ", jsx3(_components.code, {
          children: ".mdx"
        }), " files really quick and simple."]
      }), `
`, jsx3(_components.li, {
        children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion."
      }), `
`, jsxs2(_components.li, {
        children: ["3D effects are still all using Three.js, but I've added ", jsx3(_components.code, {
          children: "three-stdlib"
        }), " as a better maintained replacement for modules from Three's examples."]
      }), `
`]
    }), `
`, jsx3(_components.h2, {
      id: "not-all-smooth-sailing",
      children: "Not all smooth sailing"
    }), `
`, jsx3(_components.p, {
      children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:"
    }), `
`, jsx3(_components.h3, {
      id: "1-route-transitions",
      children: "1. Route transitions"
    }), `
`, jsxs2(_components.p, {
      children: ["There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ", jsx3(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464",
        children: "the most commented and reacted to issues"
      }), " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ", jsx3(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107",
        children: "hack to fix things"
      }), " from the issue's comments."]
    }), `
`, jsx3(_components.h3, {
      id: "2-scroll-restoration",
      children: "2. Scroll restoration"
    }), `
`, jsx3(_components.p, {
      children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility."
    }), `
`, jsx3(_components.h2, {
      id: "looking-back-and-forward",
      children: "Looking back, and forward"
    }), `
`, jsx3(_components.p, {
      children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it."
    }), `
`, jsx3(_components.p, {
      children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today."
    }), `
`, jsx3(_components.h2, {
      id: "update-feb-2024",
      children: "Update: Feb 2024"
    }), `
`, jsxs2(_components.p, {
      children: [`I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `, jsx3(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
        children: "CSS view transitions API"
      }), " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."]
    }), `
`, jsx3(_components.p, {
      children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year."
    })]
  });
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx3(MDXLayout, {
    ...props,
    children: jsx3(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function isAnchor(href) {
  let isValidExtension = VALID_EXT.includes(href?.split(".").pop());
  return href?.includes("://") || href?.[0] === "#" || isValidExtension;
}
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx3(Section, { className: classes(styles$9.header, className), as: "section", children: /* @__PURE__ */ jsxs2(
    "div",
    {
      className: styles$9.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs2("div", {
          className: styles$9.details,
          children: [
            /* @__PURE__ */ jsx3(Heading, { className: styles$9.title, level: 2, as: "h1", children: title2 }),
            /* @__PURE__ */ jsx3(Text, { className: styles$9.description, size: "xl", as: "p", children: description2 }),
            !!url2 && /* @__PURE__ */ jsx3(
              Button,
              {
                secondary: !0,
                iconHoverShift: !0,
                className: styles$9.linkButton,
                icon: "chevron-right",
                href: url2,
                children: linkLabel
              }
            )
          ]
        }),
        !!roles2?.length && /* @__PURE__ */ jsx3("ul", { className: styles$9.meta, children: roles2?.map((role2, index2) => /* @__PURE__ */ jsx3(
          "li",
          {
            className: styles$9.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx3(Text, { secondary: !0, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  let titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
async function action({ request, context }) {
  let theme = (await request.formData()).get("theme"), { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: !0,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: !0
    }
  }), session = await getSession(request.headers.get("Cookie"));
  return session.set("theme", theme), json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  let numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => !0,
    () => !1
  );
}
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  let { theme } = useTheme(), { disciplines: disciplines2 } = config, [disciplineIndex, setDisciplineIndex] = useState2(0), prevTheme = usePrevious(theme), introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  ), currentDiscipline = disciplines2.find((item, index2) => index2 === disciplineIndex), titleId = `${id}-title`, scrollToHash = useScrollToHash(), isHydrated = useHydrated();
  useInterval(
    () => {
      let index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  ), useEffect3(() => {
    prevTheme && prevTheme !== theme && setDisciplineIndex(0);
  }, [theme, prevTheme]);
  let handleScrollClick = (event) => {
    event.preventDefault(), scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx3(
    Section,
    {
      className: styles$3.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx3(Transition, { in: !0, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs2(Fragment$1, {
        children: [
          isHydrated && /* @__PURE__ */ jsx3(Suspense, { children: /* @__PURE__ */ jsx3(DisplacementSphere2, {}) }),
          /* @__PURE__ */ jsxs2("header", {
            className: styles$3.text,
            children: [
              /* @__PURE__ */ jsx3("h1", { className: styles$3.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx3(DecoderText, { text: config.name, delay: 500 }) }),
              /* @__PURE__ */ jsxs2(Heading, {
                level: 0,
                as: "h2",
                className: styles$3.title,
                children: [
                  /* @__PURE__ */ jsx3(VisuallyHidden, { className: styles$3.label, children: `${config.role} + ${introLabel}` }),
                  /* @__PURE__ */ jsxs2("span", {
                    "aria-hidden": !0,
                    className: styles$3.row,
                    children: [
                      /* @__PURE__ */ jsx3(
                        "span",
                        {
                          className: styles$3.word,
                          "data-status": status,
                          style: cssProps({ delay: tokens.base.durationXS }),
                          children: config.role
                        }
                      ),
                      /* @__PURE__ */ jsx3("span", { className: styles$3.line, "data-status": status })
                    ]
                  }),
                  /* @__PURE__ */ jsx3("div", { className: styles$3.row, children: disciplines2.map((item) => /* @__PURE__ */ jsx3(
                    Transition,
                    {
                      unmount: !0,
                      in: item === currentDiscipline,
                      timeout: { enter: 3e3, exit: 2e3 },
                      children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx3(
                        "span",
                        {
                          "aria-hidden": !0,
                          ref: nodeRef,
                          className: styles$3.word,
                          "data-plus": !0,
                          "data-status": status2,
                          style: cssProps({ delay: tokens.base.durationL }),
                          children: item
                        }
                      )
                    },
                    item
                  )) })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx3(
            Link$1,
            {
              to: "/#project-1",
              className: styles$3.scrollIndicator,
              "data-status": status,
              "data-hidden": scrollIndicatorHidden,
              onClick: handleScrollClick,
              children: /* @__PURE__ */ jsx3(VisuallyHidden, { children: "Scroll to projects" })
            }
          ),
          /* @__PURE__ */ jsxs2(
            Link$1,
            {
              to: "/#project-1",
              className: styles$3.mobileScrollIndicator,
              "data-status": status,
              "data-hidden": scrollIndicatorHidden,
              onClick: handleScrollClick,
              children: [
                /* @__PURE__ */ jsx3(VisuallyHidden, { children: "Scroll to projects" }),
                /* @__PURE__ */ jsx3(
                  "svg",
                  {
                    "aria-hidden": !0,
                    stroke: "currentColor",
                    width: "43",
                    height: "15",
                    viewBox: "0 0 43 15",
                    children: /* @__PURE__ */ jsx3("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                  }
                )
              ]
            }
          )
        ]
      }) }, theme)
    }
  );
}
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model22,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  let [focused, setFocused] = useState2(!1), [modelLoaded, setModelLoaded] = useState2(!1), { theme } = useTheme(), { width } = useWindowSize(), isHydrated = useHydrated(), titleId = `${id}-title`, isMobile = width <= media.tablet, svgOpacity = theme === "light" ? 0.7 : 1, indexText = index2 < 10 ? `0${index2}` : index2, phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`, laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(!0);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx3(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$1.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx3("use", { href: `${katakana}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs2("div", {
      className: styles$1.details,
      children: [
        /* @__PURE__ */ jsxs2("div", {
          "aria-hidden": !0,
          className: styles$1.index,
          children: [
            /* @__PURE__ */ jsx3(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx3("span", { className: styles$1.indexNumber, "data-visible": visible, children: indexText })
          ]
        }),
        /* @__PURE__ */ jsx3(
          Heading,
          {
            level: 3,
            as: "h2",
            className: styles$1.title,
            "data-visible": visible,
            id: titleId,
            children: title2
          }
        ),
        /* @__PURE__ */ jsx3(Text, { className: styles$1.description, "data-visible": visible, as: "p", children: description2 }),
        /* @__PURE__ */ jsx3("div", { className: styles$1.button, "data-visible": visible, children: /* @__PURE__ */ jsx3(Button, { iconHoverShift: !0, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
      ]
    });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs2("div", {
      className: styles$1.preview,
      children: [
        model22.type === "laptop" && /* @__PURE__ */ jsxs2(Fragment$1, {
          children: [
            renderKatakana("laptop", visible),
            /* @__PURE__ */ jsxs2("div", {
              className: styles$1.model,
              "data-device": "laptop",
              children: [
                !modelLoaded && /* @__PURE__ */ jsx3(Loader, { center: !0, className: styles$1.loader, "data-visible": visible }),
                isHydrated && visible && /* @__PURE__ */ jsx3(Suspense, { children: /* @__PURE__ */ jsx3(
                  Model2,
                  {
                    alt: model22.alt,
                    cameraPosition: { x: 0, y: 0, z: 8 },
                    showDelay: 700,
                    onLoad: handleModelLoad,
                    show: visible,
                    models: [
                      {
                        ...deviceModels.laptop,
                        texture: {
                          ...model22.textures[0],
                          sizes: laptopSizes
                        }
                      }
                    ]
                  }
                ) })
              ]
            })
          ]
        }),
        model22.type === "phone" && /* @__PURE__ */ jsxs2(Fragment$1, {
          children: [
            renderKatakana("phone", visible),
            /* @__PURE__ */ jsxs2("div", {
              className: styles$1.model,
              "data-device": "phone",
              children: [
                !modelLoaded && /* @__PURE__ */ jsx3(Loader, { center: !0, className: styles$1.loader, "data-visible": visible }),
                isHydrated && visible && /* @__PURE__ */ jsx3(Suspense, { children: /* @__PURE__ */ jsx3(
                  Model2,
                  {
                    alt: model22.alt,
                    cameraPosition: { x: 0, y: 0, z: 11.5 },
                    showDelay: 300,
                    onLoad: handleModelLoad,
                    show: visible,
                    models: [
                      {
                        ...deviceModels.phone,
                        position: { x: -0.6, y: 1.1, z: 0 },
                        texture: {
                          ...model22.textures[0],
                          sizes: phoneSizes
                        }
                      },
                      {
                        ...deviceModels.phone,
                        position: { x: 0.6, y: -0.5, z: 0.3 },
                        texture: {
                          ...model22.textures[1],
                          sizes: phoneSizes
                        }
                      }
                    ]
                  }
                ) })
              ]
            })
          ]
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx3(
    Section,
    {
      className: styles$1.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(!0),
      onBlur: () => setFocused(!1),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx3("div", { className: styles$1.content, children: /* @__PURE__ */ jsx3(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs2(Fragment$1, {
        children: [
          !alternate && !isMobile && /* @__PURE__ */ jsxs2(Fragment$1, {
            children: [
              renderDetails(visible),
              renderPreview(visible)
            ]
          }),
          (alternate || isMobile) && /* @__PURE__ */ jsxs2(Fragment$1, {
            children: [
              renderPreview(visible),
              renderDetails(visible)
            ]
          })
        ]
      }) }) })
    }
  );
}
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
function ErrorBoundary() {
  let error2 = useRouteError();
  return /* @__PURE__ */ jsx3(Error$1, { error: error2 });
}
var entryServer, GothamBoldItalic, GothamBold, GothamBookItalic, GothamBook, GothamMediumItalic, GothamMedium, IPAGothic, media, numToPx, pxToRem, msToNum, numToMs, baseTokens, tokensDesktop, tokensLaptop, tokensTablet, tokensMobile, tokensMobileSmall, dark, light, tokens, themes, ThemeContext, ThemeProvider, layerStyles, tokenStyles, fontStyles, themeStyles, notfoundImg, notFoundVideo, flatlinePoster, flatlineVideo, icon$2, styles$r, sprites, Icon, text$5, styles$q, Text, loader$4, text$4, span, styles$p, Loader, Transition, TransitionContent, button$5, text$3, loader$3, icon$1, styles$o, Button, ButtonContent, hidden, styles$n, VisuallyHidden, text$2, glyph, value, styles$m, glyphs, CharType, DecoderText, heading, styles$l, Heading, page, videoContainer, video, credit, details$2, text$1, title$6, titleFlatline, subheading, description$4, button$4, styles$k, image$2, elementWrapper, placeholder, element, button$3, styles$j, Image$1, ImageElements, flatlineSkull, monogram, highlight, styles$i, Monogram, toggle$1, inner, icon, styles$h, NavToggle, toggle, circle, mask, path, styles$g, ThemeToggle, name$2, role, disciplines, url$1, github, repo, ascii, config, navLinks, socialLinks, navbar, logo, nav, navList, navLink, navIcons, navIconLink, navIcon, mobileNav, mobileNavLink, styles$f, Navbar, NavbarIcons, progress, styles$e, container$1, skip, styles$d, links$1, loader$2, route0, frontmatter$1, route1, frontmatter, route2, sliceAnnotationLarge, sliceAnnotationPlaceholder, sliceAnnotation, sliceAppLarge, sliceTexturePlaceholder, sliceApp, sliceBackgroundBarLarge, sliceBackgroundBarPlaceholder, sliceBackgroundBar, sliceBackgroundLarge, sliceBackgroundPlaceholder, sliceBackground, sliceIrlPlaceholder, sliceIrl, sliceSidebarAnnotationsLarge, sliceSidebarAnnotationsPlaceholder, sliceSidebarAnnotations, sliceSidebarLayersLarge, sliceSidebarLayersPlaceholder, sliceSidebarLayers, sliceSlidesLarge, sliceSlidesPlaceholder, sliceSlides, link$1, styles$c, VALID_EXT, Link, footer$1, link, date, styles$b, Footer, section$1, styles$a, Section, project, section, sectionInner, sectionBackground, backgroundImage, backgroundImageElement, backgroundScrim, header, headerContent, details$1, title$5, description$3, linkButton, meta$4, metaItem, image$1, sectionContent, sectionHeading, sectionText, textRow, sectionColumns, styles$9, initDelay, ProjectContainer, ProjectSection, ProjectBackground, ProjectImage, ProjectSectionContent, ProjectSectionHeading, ProjectSectionText, ProjectTextRow, ProjectSectionColumns, name$1, url, twitter, defaultOgImage, columns, grid, gridImage, gridBackground, gridForeground, gridText, sidebarImages, sidebarImage, styles$8, title$4, description$2, roles, meta$3, Slice, route3, route4, divider$1, line$1, notch, styles$7, Divider, textarea, styles$6, TextArea, container, content$2, input$1, underline, label, error, errorMessage, styles$5, Input, contact, form, title$3, divider, input, botkiller, button$2, complete, completeTitle, completeText, completeButton, formError, formErrorContent, formErrorMessage, formErrorIcon, footer, styles$4, meta$2, MAX_EMAIL_LENGTH, MAX_MESSAGE_LENGTH, Contact, route5, gamestackTexture2Placeholder, gamestackTexturePlaceholder, SpringFallFirstTexture, SpringFallSecondTexture, CoolestProjectsTexure, sprTexturePlaceholder, devxoraTexture, intro, text, name, title$2, row, word, line, scrollIndicator, mobileScrollIndicator, styles$3, DisplacementSphere2, katakana, profile, content$1, column, title$1, description$1, image, svg$1, button$1, styles$2, ProfileText, Profile, iphone11, macbookPro, ModelAnimationType, deviceModels, summary, content, details, preview, model2, loader$1, svg, index, indexNumber, title, description, button, styles$1, Model2, home, styles3, links, meta$1, Home, route8, meta, route7, serverManifest, mode, assetsBuildDirectory, basename, future, isSpaMode, publicPath, entry, routes, init_server_build_BUqUCazy = __esm({
  "build/server/assets/server-build-BUqUCazy.js"() {
    entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: handleRequest
    }, Symbol.toStringTag, { value: "Module" })), GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2", GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2", GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2", GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2", GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2", GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2", IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2", media = {
      desktop: 2080,
      laptop: 1680,
      tablet: 1040,
      mobile: 696,
      mobileS: 400
    }, numToPx = (num) => `${num}px`, pxToRem = (px) => `${px / 16}rem`, msToNum = (msString) => Number(msString.replace("ms", "")), numToMs = (num) => `${num}ms`;
    baseTokens = {
      black: "oklch(0% 0 0)",
      white: "oklch(100% 0 0)",
      bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      durationXS: "200ms",
      durationS: "300ms",
      durationM: "400ms",
      durationL: "600ms",
      durationXL: "800ms",
      systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
      fontStack: "Gotham, var(--systemFontStack)",
      monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      japaneseFontStack: "IPA Gothic, \u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30E1\u30A4\u30EA\u30AA, Meiryo, Segoe UI, sans-serif",
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      fontSizeH0: pxToRem(140),
      fontSizeH1: pxToRem(100),
      fontSizeH2: pxToRem(58),
      fontSizeH3: pxToRem(38),
      fontSizeH4: pxToRem(28),
      fontSizeH5: pxToRem(24),
      fontSizeBodyXL: pxToRem(22),
      fontSizeBodyL: pxToRem(20),
      fontSizeBodyM: pxToRem(18),
      fontSizeBodyS: pxToRem(16),
      fontSizeBodyXS: pxToRem(14),
      lineHeightTitle: "1.1",
      lineHeightBody: "1.6",
      maxWidthS: "540px",
      maxWidthM: "720px",
      maxWidthL: "1096px",
      maxWidthXL: "1680px",
      spaceOuter: "64px",
      spaceXS: "4px",
      spaceS: "8px",
      spaceM: "16px",
      spaceL: "24px",
      spaceXL: "32px",
      space2XL: "48px",
      space3XL: "64px",
      space4XL: "96px",
      space5XL: "128px",
      zIndex0: 0,
      zIndex1: 4,
      zIndex2: 8,
      zIndex3: 16,
      zIndex4: 32,
      zIndex5: 64
    }, tokensDesktop = {
      fontSizeH0: pxToRem(120),
      fontSizeH1: pxToRem(80)
    }, tokensLaptop = {
      maxWidthS: "480px",
      maxWidthM: "640px",
      maxWidthL: "1000px",
      maxWidthXL: "1100px",
      spaceOuter: "48px",
      fontSizeH0: pxToRem(100),
      fontSizeH1: pxToRem(70),
      fontSizeH2: pxToRem(50),
      fontSizeH3: pxToRem(36),
      fontSizeH4: pxToRem(26),
      fontSizeH5: pxToRem(22)
    }, tokensTablet = {
      fontSizeH0: pxToRem(80),
      fontSizeH1: pxToRem(60),
      fontSizeH2: pxToRem(48),
      fontSizeH3: pxToRem(32),
      fontSizeH4: pxToRem(24),
      fontSizeH5: pxToRem(20)
    }, tokensMobile = {
      spaceOuter: "24px",
      fontSizeH0: pxToRem(56),
      fontSizeH1: pxToRem(40),
      fontSizeH2: pxToRem(34),
      fontSizeH3: pxToRem(28),
      fontSizeH4: pxToRem(22),
      fontSizeH5: pxToRem(18),
      fontSizeBodyL: pxToRem(17),
      fontSizeBodyM: pxToRem(16),
      fontSizeBodyS: pxToRem(14)
    }, tokensMobileSmall = {
      spaceOuter: "16px",
      fontSizeH0: pxToRem(42),
      fontSizeH1: pxToRem(38),
      fontSizeH2: pxToRem(28),
      fontSizeH3: pxToRem(24),
      fontSizeH4: pxToRem(20)
    }, dark = {
      background: "oklch(17.76% 0 0)",
      backgroundLight: "oklch(21.78% 0 0)",
      primary: "oklch(84.42% 0.19 202.24)",
      accent: "oklch(84.42% 0.19 202.24)",
      error: "oklch(65.91% 0.249 13.76)",
      text: "var(--white)",
      textTitle: "var(--text)",
      textBody: "color-mix(in lab, var(--text) 80%, transparent)",
      textLight: "color-mix(in lab, var(--text) 60%, transparent)"
    }, light = {
      background: "oklch(96.12% 0 0)",
      backgroundLight: "var(--white)",
      primary: "var(--black)",
      accent: "oklch(84.42% 0.19 202.24)",
      error: "oklch(63.17% 0.259 25.41)",
      text: "var(--black)",
      textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
      textBody: "color-mix(in lab, var(--text) 75%, transparent)",
      textLight: "color-mix(in lab, var(--text) 55%, transparent)"
    }, tokens = {
      base: baseTokens,
      desktop: tokensDesktop,
      laptop: tokensLaptop,
      tablet: tokensTablet,
      mobile: tokensMobile,
      mobileS: tokensMobileSmall
    }, themes = { dark, light }, ThemeContext = createContext({}), ThemeProvider = ({
      theme = "dark",
      children,
      className,
      as: Component = "div",
      toggleTheme,
      ...rest
    }) => {
      let parentTheme = useTheme(), isRootProvider = !parentTheme.theme;
      return /* @__PURE__ */ jsxs2(
        ThemeContext.Provider,
        {
          value: {
            theme,
            toggleTheme: toggleTheme || parentTheme.toggleTheme
          },
          children: [
            isRootProvider && children,
            !isRootProvider && /* @__PURE__ */ jsx3(Component, { className: classes(className), "data-theme": theme, ...rest, children })
          ]
        }
      );
    };
    layerStyles = squish(`
  @layer theme, base, components, layout;
`), tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`), fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`), themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`), notfoundImg = "/assets/profile-D1ZjCPU8.jpg", notFoundVideo = "/assets/notfound-CWoY6dGp.mp4", flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=", flatlineVideo = "/assets/flatline-DaiGY3H4.mp4", icon$2 = "_icon_nm21j_3", styles$r = {
      icon: icon$2
    }, sprites = "/assets/icons-COBh-4sA.svg", Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => /* @__PURE__ */ jsx3(
      "svg",
      {
        "aria-hidden": !0,
        ref,
        className: classes(styles$r.icon, className),
        width: size || 24,
        height: size || 24,
        ...rest,
        children: /* @__PURE__ */ jsx3("use", { href: `${sprites}#${icon2}` })
      }
    )), text$5 = "_text_w1gy9_3", styles$q = {
      text: text$5
    }, Text = ({
      children,
      size = "m",
      as: Component = "span",
      align = "auto",
      weight = "auto",
      secondary,
      className,
      ...rest
    }) => /* @__PURE__ */ jsx3(
      Component,
      {
        className: classes(styles$q.text, className),
        "data-align": align,
        "data-size": size,
        "data-weight": weight,
        "data-secondary": secondary,
        ...rest,
        children
      }
    ), loader$4 = "_loader_11zpc_3", text$4 = "_text_11zpc_33", span = "_span_11zpc_85", styles$p = {
      loader: loader$4,
      text: text$4,
      span
    }, Loader = forwardRef(
      ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => useReducedMotion3() ? /* @__PURE__ */ jsx3(Text, { className: classes(styles$p.text, className), weight: "medium", ...rest, children: text2 }) : /* @__PURE__ */ jsx3(
        "div",
        {
          ref,
          className: classes(styles$p.loader, className),
          "data-center": center,
          style: cssProps({ width, height }, style),
          ...rest,
          children: /* @__PURE__ */ jsx3("div", { className: styles$p.span })
        }
      )
    ), Transition = ({ children, in: show, unmount, initial = !0, ...props }) => {
      let enterTimeout = useRef3(), exitTimeout = useRef3();
      return useEffect3(() => {
        clearTimeout(show ? exitTimeout.current : enterTimeout.current);
      }, [show]), /* @__PURE__ */ jsx3(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx3(
        TransitionContent,
        {
          enterTimeout,
          exitTimeout,
          in: show,
          initial,
          ...props,
          children
        }
      ) });
    }, TransitionContent = ({
      children,
      timeout = 0,
      enterTimeout,
      exitTimeout,
      onEnter,
      onEntered,
      onExit,
      onExited,
      initial,
      nodeRef: defaultNodeRef,
      in: show
    }) => {
      let [status, setStatus] = useState2(initial ? "exited" : "entered"), [isPresent, safeToRemove] = usePresence(), [hasEntered, setHasEntered] = useState2(!initial), splitTimeout = typeof timeout == "object", internalNodeRef = useRef3(null), nodeRef = defaultNodeRef || internalNodeRef, visible = hasEntered && show ? isPresent : !1;
      return useEffect3(() => {
        var _a;
        if (hasEntered || !show)
          return;
        let actualTimeout = splitTimeout ? timeout.enter : timeout;
        clearTimeout(enterTimeout.current), clearTimeout(exitTimeout.current), setHasEntered(!0), setStatus("entering"), onEnter?.(), (_a = nodeRef.current) == null || _a.offsetHeight, enterTimeout.current = setTimeout(() => {
          setStatus("entered"), onEntered?.();
        }, actualTimeout);
      }, [onEnter, onEntered, timeout, status, show]), useEffect3(() => {
        var _a;
        if (isPresent && show)
          return;
        let actualTimeout = splitTimeout ? timeout.exit : timeout;
        clearTimeout(enterTimeout.current), clearTimeout(exitTimeout.current), setStatus("exiting"), onExit?.(), (_a = nodeRef.current) == null || _a.offsetHeight, exitTimeout.current = setTimeout(() => {
          setStatus("exited"), safeToRemove?.(), onExited?.();
        }, actualTimeout);
      }, [isPresent, onExit, safeToRemove, timeout, onExited, show]), children({ visible, status, nodeRef });
    }, button$5 = "_button_4jwwg_3", text$3 = "_text_4jwwg_263", loader$3 = "_loader_4jwwg_289", icon$1 = "_icon_4jwwg_315", styles$o = {
      button: button$5,
      text: text$3,
      loader: loader$3,
      icon: icon$1
    };
    Button = forwardRef(({ href, ...rest }, ref) => isExternalLink(href) || !href ? /* @__PURE__ */ jsx3(ButtonContent, { href, ref, ...rest }) : /* @__PURE__ */ jsx3(
      ButtonContent,
      {
        unstable_viewTransition: !0,
        as: Link$1,
        prefetch: "intent",
        to: href,
        ref,
        ...rest
      }
    )), ButtonContent = forwardRef(
      ({
        className,
        as,
        secondary,
        loading,
        loadingText = "loading",
        icon: icon2,
        iconEnd,
        iconHoverShift,
        iconOnly,
        children,
        rel,
        target,
        href,
        disabled,
        ...rest
      }, ref) => {
        let isExternal = isExternalLink(href);
        return /* @__PURE__ */ jsxs2(
          as || (href ? "a" : "button"),
          {
            className: classes(styles$o.button, className),
            "data-loading": loading,
            "data-icon-only": iconOnly,
            "data-secondary": secondary,
            "data-icon": icon2,
            href,
            rel: rel || isExternal ? "noopener noreferrer" : void 0,
            target: target || isExternal ? "_blank" : void 0,
            disabled,
            ref,
            ...rest,
            children: [
              !!icon2 && /* @__PURE__ */ jsx3(
                Icon,
                {
                  className: styles$o.icon,
                  "data-start": !iconOnly,
                  "data-shift": iconHoverShift,
                  icon: icon2
                }
              ),
              !!children && /* @__PURE__ */ jsx3("span", { className: styles$o.text, children }),
              !!iconEnd && /* @__PURE__ */ jsx3(
                Icon,
                {
                  className: styles$o.icon,
                  "data-end": !iconOnly,
                  "data-shift": iconHoverShift,
                  icon: iconEnd
                }
              ),
              /* @__PURE__ */ jsx3(Transition, { unmount: !0, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx3(
                Loader,
                {
                  ref: nodeRef,
                  className: styles$o.loader,
                  size: 32,
                  text: loadingText,
                  "data-visible": visible
                }
              ) })
            ]
          }
        );
      }
    ), hidden = "_hidden_u59mf_3", styles$n = {
      hidden
    }, VisuallyHidden = forwardRef(
      ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => /* @__PURE__ */ jsx3(
        Component,
        {
          className: classes(styles$n.hidden, className),
          "data-hidden": !visible && !showOnFocus,
          "data-show-on-focus": showOnFocus,
          ref,
          ...rest,
          children
        }
      )
    );
    text$2 = "_text_81hf5_3", glyph = "_glyph_81hf5_17", value = "_value_81hf5_31", styles$m = {
      text: text$2,
      glyph,
      value
    }, glyphs = [
      "\u30A2",
      "\u30A4",
      "\u30A6",
      "\u30A8",
      "\u30AA",
      "\u30AB",
      "\u30AD",
      "\u30AF",
      "\u30B1",
      "\u30B3",
      "\u30B5",
      "\u30B7",
      "\u30B9",
      "\u30BB",
      "\u30BD",
      "\u30BF",
      "\u30C1",
      "\u30C4",
      "\u30C6",
      "\u30C8",
      "\u30CA",
      "\u30CB",
      "\u30CC",
      "\u30CD",
      "\u30CE",
      "\u30CF",
      "\u30D2",
      "\u30D5",
      "\u30D8",
      "\u30DB",
      "\u30DE",
      "\u30DF",
      "\u30E0",
      "\u30E1",
      "\u30E2",
      "\u30E4",
      "\u30E6",
      "\u30E8",
      "\u30FC",
      "\u30E9",
      "\u30EA",
      "\u30EB",
      "\u30EC",
      "\u30ED",
      "\u30EF",
      "\u30F0",
      "\u30F1",
      "\u30F2",
      "\u30F3",
      "\u30AC",
      "\u30AE",
      "\u30B0",
      "\u30B2",
      "\u30B4",
      "\u30B6",
      "\u30B8",
      "\u30BA",
      "\u30BC",
      "\u30BE",
      "\u30C0",
      "\u30C2",
      "\u30C5",
      "\u30C7",
      "\u30C9",
      "\u30D0",
      "\u30D3",
      "\u30D6",
      "\u30D9",
      "\u30DC",
      "\u30D1",
      "\u30D4",
      "\u30D7",
      "\u30DA",
      "\u30DD"
    ], CharType = {
      Glyph: "glyph",
      Value: "value"
    };
    DecoderText = memo(
      ({ text: text2, start = !0, delay: startDelay = 0, className, ...rest }) => {
        let output = useRef3([{ type: CharType.Glyph, value: "" }]), container2 = useRef3(), reduceMotion = useReducedMotion3(), decoderSpring = useSpring3(0, { stiffness: 8, damping: 5 });
        return useEffect3(() => {
          let containerInstance = container2.current, content2 = text2.split(""), renderOutput = () => {
            let characterMap = output.current.map((item) => `<span class="${styles$m[item.type]}">${item.value}</span>`);
            containerInstance.innerHTML = characterMap.join("");
          }, unsubscribeSpring = decoderSpring.on("change", (value2) => {
            output.current = shuffle(content2, output.current, value2), renderOutput();
          });
          return start && !reduceMotion && (async () => {
            await delay(startDelay), decoderSpring.set(content2.length);
          })(), reduceMotion && (output.current = content2.map((value2, index2) => ({
            type: CharType.Value,
            value: content2[index2]
          })), renderOutput()), () => {
            unsubscribeSpring?.();
          };
        }, [decoderSpring, reduceMotion, start, startDelay, text2]), /* @__PURE__ */ jsxs2("span", {
          className: classes(styles$m.text, className),
          ...rest,
          children: [
            /* @__PURE__ */ jsx3(VisuallyHidden, { className: styles$m.label, children: text2 }),
            /* @__PURE__ */ jsx3("span", { "aria-hidden": !0, className: styles$m.content, ref: container2 })
          ]
        });
      }
    ), heading = "_heading_8oupr_3", styles$l = {
      heading
    }, Heading = ({
      children,
      level = 1,
      as,
      align = "auto",
      weight = "medium",
      className,
      ...rest
    }) => {
      let clampedLevel = Math.min(Math.max(level, 0), 5), Component = as || `h${Math.max(clampedLevel, 1)}`;
      return /* @__PURE__ */ jsx3(Fragment, { children: /* @__PURE__ */ jsx3(
        Component,
        {
          className: classes(styles$l.heading, className),
          "data-align": align,
          "data-weight": weight,
          "data-level": clampedLevel,
          ...rest,
          children
        }
      ) });
    }, page = "_page_3rfjn_3", videoContainer = "_videoContainer_3rfjn_43", video = "_video_3rfjn_43", credit = "_credit_3rfjn_155", details$2 = "_details_3rfjn_203", text$1 = "_text_3rfjn_229", title$6 = "_title_3rfjn_243", titleFlatline = "_titleFlatline_3rfjn_245", subheading = "_subheading_3rfjn_309", description$4 = "_description_3rfjn_369", button$4 = "_button_3rfjn_407", styles$k = {
      page,
      videoContainer,
      video,
      credit,
      details: details$2,
      text: text$1,
      title: title$6,
      titleFlatline,
      subheading,
      description: description$4,
      button: button$4
    };
    image$2 = "_image_1yz75_3", elementWrapper = "_elementWrapper_1yz75_97", placeholder = "_placeholder_1yz75_141", element = "_element_1yz75_97", button$3 = "_button_1yz75_207", styles$j = {
      image: image$2,
      elementWrapper,
      placeholder,
      element,
      button: button$3
    }, Image$1 = ({
      className,
      style,
      reveal,
      delay: delay2 = 0,
      raised,
      src: baseSrc,
      srcSet,
      placeholder: placeholder2,
      ...rest
    }) => {
      let [loaded, setLoaded] = useState2(!1), { theme } = useTheme(), containerRef = useRef3(), src = baseSrc || srcSet.split(" ")[0], inViewport = useInViewport(containerRef, !getIsVideo(src)), onLoad = useCallback2(() => {
        setLoaded(!0);
      }, []);
      return /* @__PURE__ */ jsx3(
        "div",
        {
          className: classes(styles$j.image, className),
          "data-visible": inViewport || loaded,
          "data-reveal": reveal,
          "data-raised": raised,
          "data-theme": theme,
          style: cssProps({ delay: numToMs(delay2) }, style),
          ref: containerRef,
          children: /* @__PURE__ */ jsx3(
            ImageElements,
            {
              delay: delay2,
              onLoad,
              loaded,
              inViewport,
              reveal,
              src,
              srcSet,
              placeholder: placeholder2,
              ...rest
            }
          )
        }
      );
    }, ImageElements = ({
      onLoad,
      loaded,
      inViewport,
      srcSet,
      placeholder: placeholder2,
      delay: delay2,
      src,
      alt,
      play = !0,
      restartOnPause,
      reveal,
      sizes,
      width,
      height,
      noPauseButton,
      cover,
      ...rest
    }) => {
      let reduceMotion = useReducedMotion3(), [showPlaceholder, setShowPlaceholder] = useState2(!0), [playing, setPlaying] = useState2(!reduceMotion), [videoSrc, setVideoSrc] = useState2(), [videoInteracted, setVideoInteracted] = useState2(!1), placeholderRef = useRef3(), videoRef = useRef3(), isVideo = getIsVideo(src), showFullRes = inViewport, hasMounted = useHasMounted();
      useEffect3(() => {
        isVideo && srcSet ? (async () => {
          let resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
          setVideoSrc(resolvedVideoSrc);
        })() : isVideo && setVideoSrc(src);
      }, [isVideo, sizes, src, srcSet]), useEffect3(() => {
        if (!videoRef.current || !videoSrc)
          return;
        let playVideo = () => {
          setPlaying(!0), videoRef.current.play();
        }, pauseVideo = () => {
          setPlaying(!1), videoRef.current.pause();
        };
        play || (pauseVideo(), restartOnPause && (videoRef.current.currentTime = 0)), !videoInteracted && (inViewport ? inViewport && !reduceMotion && play && playVideo() : pauseVideo());
      }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
      let togglePlaying = (event) => {
        event.preventDefault(), setVideoInteracted(!0), videoRef.current.paused ? (setPlaying(!0), videoRef.current.play()) : (setPlaying(!1), videoRef.current.pause());
      };
      return /* @__PURE__ */ jsxs2(
        "div",
        {
          className: styles$j.elementWrapper,
          "data-reveal": reveal,
          "data-visible": inViewport || loaded,
          style: cssProps({ delay: numToMs(delay2 + 1e3) }),
          children: [
            isVideo && hasMounted && /* @__PURE__ */ jsxs2(Fragment, {
              children: [
                /* @__PURE__ */ jsx3(
                  "video",
                  {
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    className: styles$j.element,
                    "data-loaded": loaded,
                    "data-cover": cover,
                    autoPlay: !reduceMotion,
                    onLoadStart: onLoad,
                    src: videoSrc,
                    "aria-label": alt,
                    ref: videoRef,
                    ...rest
                  }
                ),
                !noPauseButton && /* @__PURE__ */ jsxs2(Button, {
                  className: styles$j.button,
                  onClick: togglePlaying,
                  children: [
                    /* @__PURE__ */ jsx3(Icon, { icon: playing ? "pause" : "play" }),
                    playing ? "Pause" : "Play"
                  ]
                })
              ]
            }),
            !isVideo && /* @__PURE__ */ jsx3(
              "img",
              {
                className: styles$j.element,
                "data-loaded": loaded,
                "data-cover": cover,
                onLoad,
                decoding: "async",
                src: showFullRes ? src : void 0,
                srcSet: showFullRes ? srcSet : void 0,
                width,
                height,
                alt,
                sizes,
                ...rest
              }
            ),
            showPlaceholder && /* @__PURE__ */ jsx3(
              "img",
              {
                "aria-hidden": !0,
                className: styles$j.placeholder,
                "data-loaded": loaded,
                "data-cover": cover,
                style: cssProps({ delay: numToMs(delay2) }),
                ref: placeholderRef,
                src: placeholder2,
                width,
                height,
                onTransitionEnd: () => setShowPlaceholder(!1),
                decoding: "async",
                loading: "lazy",
                alt: "",
                role: "presentation"
              }
            )
          ]
        }
      );
    };
    flatlineSkull = "/assets/error-flatline-BCo2ngDH.svg";
    monogram = "_monogram_1jhi1_3", highlight = "_highlight_1jhi1_13", styles$i = {
      monogram,
      highlight
    }, Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
      let clipId = `${useId()}monogram-clip`;
      return /* @__PURE__ */ jsxs2(
        "svg",
        {
          "aria-hidden": !0,
          className: classes(styles$i.monogram, className),
          width: "48",
          height: "29",
          viewBox: "0 0 48 26",
          ref,
          ...props,
          children: [
            /* @__PURE__ */ jsx3("defs", { children: /* @__PURE__ */ jsx3("clipPath", { id: clipId, children: /* @__PURE__ */ jsx3(
              "path",
              {
                d: "M24 6L8 42h6l3.5-8h13L34 42h6L24 6zm-4.5 16L24 12l4.5 10h-9z",
                fill: "currentColor"
              }
            ) }) }),
            /* @__PURE__ */ jsx3("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
            highlight2 && /* @__PURE__ */ jsx3("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx3("rect", { className: styles$i.highlight, width: "100%", height: "100%" }) })
          ]
        }
      );
    }), toggle$1 = "_toggle_h91zx_3", inner = "_inner_h91zx_33", icon = "_icon_h91zx_49", styles$h = {
      toggle: toggle$1,
      inner,
      icon
    }, NavToggle = ({ menuOpen, ...rest }) => /* @__PURE__ */ jsx3(
      Button,
      {
        iconOnly: !0,
        className: styles$h.toggle,
        "aria-label": "Menu",
        "aria-expanded": menuOpen,
        ...rest,
        children: /* @__PURE__ */ jsxs2("div", {
          className: styles$h.inner,
          children: [
            /* @__PURE__ */ jsx3(Icon, { className: styles$h.icon, "data-menu": !0, "data-open": menuOpen, icon: "menu" }),
            /* @__PURE__ */ jsx3(
              Icon,
              {
                className: styles$h.icon,
                "data-close": !0,
                "data-open": menuOpen,
                icon: "close"
              }
            )
          ]
        })
      }
    ), toggle = "_toggle_y3n84_3", circle = "_circle_y3n84_57", mask = "_mask_y3n84_107", path = "_path_y3n84_143", styles$g = {
      toggle,
      circle,
      mask,
      path
    }, ThemeToggle = ({ isMobile, ...rest }) => {
      let id = useId(), { toggleTheme } = useTheme(), maskId = `${id}theme-toggle-mask`;
      return /* @__PURE__ */ jsx3(
        Button,
        {
          iconOnly: !0,
          className: styles$g.toggle,
          "data-mobile": isMobile,
          "aria-label": "Toggle theme",
          onClick: () => toggleTheme(),
          ...rest,
          children: /* @__PURE__ */ jsxs2("svg", {
            "aria-hidden": !0,
            className: styles$g.svg,
            width: "38",
            height: "38",
            viewBox: "0 0 38 38",
            children: [
              /* @__PURE__ */ jsx3("defs", { children: /* @__PURE__ */ jsxs2("mask", {
                id: maskId,
                children: [
                  /* @__PURE__ */ jsx3("circle", { className: styles$g.circle, "data-mask": !0, cx: "19", cy: "19", r: "13" }),
                  /* @__PURE__ */ jsx3("circle", { className: styles$g.mask, cx: "25", cy: "14", r: "9" })
                ]
              }) }),
              /* @__PURE__ */ jsx3(
                "path",
                {
                  className: styles$g.path,
                  d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
                }
              ),
              /* @__PURE__ */ jsx3(
                "circle",
                {
                  className: styles$g.circle,
                  mask: `url(#${maskId})`,
                  cx: "19",
                  cy: "19",
                  r: "12"
                }
              )
            ]
          })
        }
      );
    }, name$2 = "Aadhithiya J", role = "AI Engineer", disciplines = [
      "Machine Learning",
      "Data Science",
      "CyberSecurity",
      "Dive In!"
    ], url$1 = "https://www.linkedin.com/in/aadhi-j-8a0671292", github = "Aadhi", repo = "https://github.com/Aadhi-07", ascii = `  \u250C\u2500\u2500\u2500\u2510
  \u2502   \u2502
  \u2502   \u2502
  \u251C\u2500\u2500\u2500\u2524
  \u2502   \u2502
  \u2502   \u2502`, config = {
      name: name$2,
      role,
      disciplines,
      url: url$1,
      github,
      repo,
      ascii
    }, navLinks = [
      {
        label: "Projects",
        pathname: "/#project-1"
      },
      {
        label: "Details",
        pathname: "/#details"
      },
      {
        label: "Contact",
        pathname: "/contact"
      }
    ], socialLinks = [
      {
        label: "Github",
        url: `https://github.com/${config.github}`,
        icon: "github"
      }
    ], navbar = "_navbar_1qbli_3", logo = "_logo_1qbli_53", nav = "_nav_1qbli_3", navList = "_navList_1qbli_101", navLink = "_navLink_1qbli_117", navIcons = "_navIcons_1qbli_203", navIconLink = "_navIconLink_1qbli_251", navIcon = "_navIcon_1qbli_203", mobileNav = "_mobileNav_1qbli_293", mobileNavLink = "_mobileNavLink_1qbli_353", styles$f = {
      navbar,
      logo,
      nav,
      navList,
      navLink,
      navIcons,
      navIconLink,
      navIcon,
      mobileNav,
      mobileNavLink
    }, Navbar = () => {
      let [current, setCurrent] = useState2(), [menuOpen, setMenuOpen] = useState2(!1), [target, setTarget] = useState2(), { theme } = useTheme(), location = useLocation(), windowSize = useWindowSize(), headerRef = useRef3(), isMobile = windowSize.width <= media.mobile || windowSize.height <= 696, scrollToHash = useScrollToHash();
      useEffect3(() => {
        setCurrent(`${location.pathname}${location.hash}`);
      }, [location]), useEffect3(() => {
        !target || location.pathname !== "/" || (setCurrent(`${location.pathname}${target}`), scrollToHash(target, () => setTarget(null)));
      }, [location.pathname, scrollToHash, target]), useEffect3(() => {
        let navItems = document.querySelectorAll("[data-navbar-item]"), inverseTheme = theme === "dark" ? "light" : "dark", { innerHeight } = window, inverseMeasurements = [], navItemMeasurements = [], isOverlap = (rect1, rect2, scrollY) => !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom), resetNavTheme = () => {
          for (let measurement of navItemMeasurements)
            measurement.element.dataset.theme = "";
        }, handleInversion = () => {
          let invertedElements = document.querySelectorAll(
            `[data-theme='${inverseTheme}'][data-invert]`
          );
          if (!invertedElements)
            return;
          inverseMeasurements = Array.from(invertedElements).map((item) => ({
            element: item,
            top: item.offsetTop,
            bottom: item.offsetTop + item.offsetHeight
          }));
          let { scrollY } = window;
          resetNavTheme();
          for (let inverseMeasurement of inverseMeasurements)
            if (!(inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0))
              for (let measurement of navItemMeasurements)
                isOverlap(inverseMeasurement, measurement, scrollY) ? measurement.element.dataset.theme = inverseTheme : measurement.element.dataset.theme = "";
        };
        return theme === "light" && (navItemMeasurements = Array.from(navItems).map((item) => {
          let rect = item.getBoundingClientRect();
          return {
            element: item,
            top: rect.top,
            bottom: rect.bottom
          };
        }), document.addEventListener("scroll", handleInversion), handleInversion()), () => {
          document.removeEventListener("scroll", handleInversion), resetNavTheme();
        };
      }, [theme, windowSize, location.key]);
      let getCurrent = (url2 = "") => {
        let nonTrailing = current?.endsWith("/") ? current?.slice(0, -1) : current;
        return url2 === nonTrailing ? "page" : "";
      }, handleNavItemClick = (event) => {
        let hash = event.currentTarget.href.split("#")[1];
        setTarget(null), hash && location.pathname === "/" && (setTarget(`#${hash}`), event.preventDefault());
      }, handleMobileNavClick = (event) => {
        handleNavItemClick(event), menuOpen && setMenuOpen(!1);
      };
      return /* @__PURE__ */ jsxs2("header", {
        className: styles$f.navbar,
        ref: headerRef,
        children: [
          /* @__PURE__ */ jsx3(
            Link$1,
            {
              unstable_viewTransition: !0,
              prefetch: "intent",
              to: location.pathname === "/" ? "/#intro" : "/",
              "data-navbar-item": !0,
              className: styles$f.logo,
              "aria-label": `${config.name}, ${config.role}`,
              onClick: handleMobileNavClick,
              children: /* @__PURE__ */ jsx3(Monogram, { highlight: !0 })
            }
          ),
          /* @__PURE__ */ jsx3(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
          /* @__PURE__ */ jsxs2("nav", {
            className: styles$f.nav,
            children: [
              /* @__PURE__ */ jsx3("div", { className: styles$f.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx3(
                Link$1,
                {
                  unstable_viewTransition: !0,
                  prefetch: "intent",
                  to: pathname,
                  "data-navbar-item": !0,
                  className: styles$f.navLink,
                  "aria-current": getCurrent(pathname),
                  onClick: handleNavItemClick,
                  children: label2
                },
                label2
              )) }),
              /* @__PURE__ */ jsx3(NavbarIcons, { desktop: !0 })
            ]
          }),
          /* @__PURE__ */ jsx3(Transition, { unmount: !0, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs2("nav", {
            className: styles$f.mobileNav,
            "data-visible": visible,
            ref: nodeRef,
            children: [
              navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx3(
                Link$1,
                {
                  unstable_viewTransition: !0,
                  prefetch: "intent",
                  to: pathname,
                  className: styles$f.mobileNavLink,
                  "data-visible": visible,
                  "aria-current": getCurrent(pathname),
                  onClick: handleMobileNavClick,
                  style: cssProps({
                    transitionDelay: numToMs(
                      Number(msToNum(tokens.base.durationS)) + index2 * 50
                    )
                  }),
                  children: label2
                },
                label2
              )),
              /* @__PURE__ */ jsx3(NavbarIcons, {}),
              /* @__PURE__ */ jsx3(ThemeToggle, { isMobile: !0 })
            ]
          }) }),
          !isMobile && /* @__PURE__ */ jsx3(ThemeToggle, { "data-navbar-item": !0 })
        ]
      });
    }, NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx3("div", { className: styles$f.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx3(
      "a",
      {
        "data-navbar-item": desktop || void 0,
        className: styles$f.navIconLink,
        "aria-label": label2,
        href: url2,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ jsx3(Icon, { className: styles$f.navIcon, icon: icon2 })
      },
      label2
    )) }), progress = "_progress_brpaj_3", styles$e = {
      progress
    };
    container$1 = "_container_1g4r3_3", skip = "_skip_1g4r3_23", styles$d = {
      container: container$1,
      skip
    }, links$1 = () => [
      {
        rel: "preload",
        href: GothamMedium,
        as: "font",
        type: "font/woff2",
        crossOrigin: ""
      },
      {
        rel: "preload",
        href: GothamBook,
        as: "font",
        type: "font/woff2",
        crossOrigin: ""
      },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
      { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
      { rel: "author", href: "/humans.txt", type: "text/plain" }
    ], loader$2 = async ({ request, context }) => {
      let { url: url2 } = request, { pathname } = new URL(url2), pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2, canonicalUrl = `${config.url}${pathnameSliced}`, { getSession, commitSession } = createCookieSessionStorage({
        cookie: {
          name: "__session",
          httpOnly: !0,
          maxAge: 604800,
          path: "/",
          sameSite: "lax",
          secrets: [context.cloudflare.env.SESSION_SECRET || " "],
          secure: !0
        }
      }), session = await getSession(request.headers.get("Cookie")), theme = session.get("theme") || "dark";
      return json(
        { canonicalUrl, theme },
        {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        }
      );
    };
    route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      ErrorBoundary: ErrorBoundary$1,
      default: App,
      links: links$1,
      loader: loader$2
    }, Symbol.toStringTag, { value: "Module" })), frontmatter$1 = {
      title: "You (probably) don't need CSS-in-JS",
      abstract: "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
      date: "2022-05-01",
      banner: "/static/modern-styling-in-react-banner.jpg",
      featured: !0
    };
    route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: MDXContent$1,
      frontmatter: frontmatter$1
    }, Symbol.toStringTag, { value: "Module" })), frontmatter = {
      title: "Hello world: how I built this site",
      abstract: "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
      date: "2022-04-21",
      banner: "/static/hello-world-banner.jpg"
    };
    route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: MDXContent,
      frontmatter
    }, Symbol.toStringTag, { value: "Module" })), sliceAnnotationLarge = "/assets/slice-annotation-large-BMgELH_L.png", sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png", sliceAnnotation = "/assets/slice-annotation-BYMGWVwS.png", sliceAppLarge = "/assets/slice-app-large-CHKPTcWm.jpg", sliceTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=", sliceApp = "/assets/slice-app-PoRtkkeP.jpg", sliceBackgroundBarLarge = "/assets/slice-background-bar-large-CYHGpgXa.jpg", sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==", sliceBackgroundBar = "/assets/slice-background-bar-DUyfyeHo.jpg", sliceBackgroundLarge = "/assets/slice-background-large-Dnpu52lB.jpg", sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z", sliceBackground = "/assets/slice-background-5195om16.jpg", sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==", sliceIrl = "/assets/slice-irl-Bok-9coc.jpg", sliceSidebarAnnotationsLarge = "/assets/slice-sidebar-annotations-large-CrYJmPog.png", sliceSidebarAnnotationsPlaceholder = "/assets/slice-sidebar-annotations-placeholder-Bewc5d-7.png", sliceSidebarAnnotations = "/assets/slice-sidebar-annotations-CisIo7UR.png", sliceSidebarLayersLarge = "/assets/slice-sidebar-layers-large-CqnA6hBc.png", sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==", sliceSidebarLayers = "/assets/slice-sidebar-layers-jDBpAmZU.png", sliceSlidesLarge = "/assets/slice-slides-large--yrOgN_x.jpg", sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==", sliceSlides = "/assets/slice-slides-me7j0Hig.jpg", link$1 = "_link_4ieiq_3", styles$c = {
      link: link$1
    }, VALID_EXT = ["txt", "png", "jpg"];
    Link = forwardRef(
      ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
        let isExternal = href?.includes("://"), relValue = rel || (isExternal ? "noreferrer noopener" : void 0), targetValue = target || (isExternal ? "_blank" : void 0), linkProps = {
          className: classes(styles$c.link, className),
          ["data-secondary"]: secondary,
          rel: relValue,
          href,
          target: targetValue,
          ref,
          ...rest
        };
        return isAnchor(href) ? /* @__PURE__ */ jsx3("a", { ...linkProps, href, children }) : /* @__PURE__ */ jsx3(Link$1, { unstable_viewTransition: !0, prefetch: "intent", ...linkProps, to: href, children });
      }
    ), footer$1 = "_footer_if18v_3", link = "_link_if18v_31", date = "_date_if18v_39", styles$b = {
      footer: footer$1,
      link,
      date
    }, Footer = ({ className }) => /* @__PURE__ */ jsx3("footer", { className: classes(styles$b.footer, className), children: /* @__PURE__ */ jsxs2(Text, {
      size: "s",
      align: "center",
      children: [
        /* @__PURE__ */ jsx3("span", { className: styles$b.date, children: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }),
        /* @__PURE__ */ jsx3(Link, { secondary: !0, className: styles$b.link, href: "/humans.txt", target: "_self" })
      ]
    }) }), section$1 = "_section_1278e_3", styles$a = {
      section: section$1
    }, Section = forwardRef(
      ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx3(Component, { className: classes(styles$a.section, className), ref, ...rest, children })
    ), project = "_project_1n18f_39", section = "_section_1n18f_57", sectionInner = "_sectionInner_1n18f_87", sectionBackground = "_sectionBackground_1n18f_177", backgroundImage = "_backgroundImage_1n18f_275", backgroundImageElement = "_backgroundImageElement_1n18f_313", backgroundScrim = "_backgroundScrim_1n18f_351", header = "_header_1n18f_383", headerContent = "_headerContent_1n18f_423", details$1 = "_details_1n18f_499", title$5 = "_title_1n18f_523", description$3 = "_description_1n18f_543", linkButton = "_linkButton_1n18f_563", meta$4 = "_meta_1n18f_583", metaItem = "_metaItem_1n18f_613", image$1 = "_image_1n18f_653", sectionContent = "_sectionContent_1n18f_669", sectionHeading = "_sectionHeading_1n18f_715", sectionText = "_sectionText_1n18f_723", textRow = "_textRow_1n18f_737", sectionColumns = "_sectionColumns_1n18f_849", styles$9 = {
      project,
      section,
      sectionInner,
      sectionBackground,
      backgroundImage,
      backgroundImageElement,
      backgroundScrim,
      header,
      headerContent,
      details: details$1,
      title: title$5,
      description: description$3,
      linkButton,
      meta: meta$4,
      metaItem,
      image: image$1,
      sectionContent,
      sectionHeading,
      sectionText,
      textRow,
      sectionColumns
    }, initDelay = 300;
    ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx3("article", { className: classes(styles$9.project, className), ...rest }), ProjectSection = forwardRef(
      ({
        className,
        light: light2,
        padding = "both",
        fullHeight,
        backgroundOverlayOpacity = 0.9,
        backgroundElement,
        children,
        ...rest
      }, ref) => /* @__PURE__ */ jsxs2(
        "section",
        {
          className: classes(styles$9.section, className),
          "data-light": light2,
          "data-full-height": fullHeight,
          ref,
          ...rest,
          children: [
            !!backgroundElement && /* @__PURE__ */ jsx3(
              "div",
              {
                className: styles$9.sectionBackground,
                style: cssProps({ opacity: backgroundOverlayOpacity }),
                children: backgroundElement
              }
            ),
            /* @__PURE__ */ jsx3(Section, { className: styles$9.sectionInner, "data-padding": padding, children })
          ]
        }
      )
    ), ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
      let imageRef = useRef3();
      return useParallax(0.6, (value2) => {
        imageRef.current && imageRef.current.style.setProperty("--offset", `${value2}px`);
      }), /* @__PURE__ */ jsx3(Transition, { in: !0, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs2(
        "div",
        {
          className: classes(styles$9.backgroundImage, className),
          "data-visible": visible,
          ref: nodeRef,
          children: [
            /* @__PURE__ */ jsx3("div", { className: styles$9.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx3(Image$1, { cover: !0, alt: "", role: "presentation", ...rest }) }),
            /* @__PURE__ */ jsx3("div", { className: styles$9.backgroundScrim, style: cssProps({ opacity }) })
          ]
        }
      ) });
    }, ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx3("div", { className: classes(styles$9.image, className), children: /* @__PURE__ */ jsx3(Image$1, { reveal: !0, alt, delay: 300, ...rest }) }), ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx3(
      "div",
      {
        className: classes(styles$9.sectionContent, className),
        "data-width": width,
        ...rest
      }
    ), ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx3(
      Heading,
      {
        className: classes(styles$9.sectionHeading, className),
        as,
        level,
        align: "auto",
        ...rest
      }
    ), ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx3(Text, { className: classes(styles$9.sectionText, className), size: "l", as: "p", ...rest }), ProjectTextRow = ({
      center,
      stretch,
      justify = "center",
      width = "m",
      noMargin,
      className,
      centerMobile,
      ...rest
    }) => /* @__PURE__ */ jsx3(
      "div",
      {
        className: classes(styles$9.textRow, className),
        "data-center": center,
        "data-stretch": stretch,
        "data-center-mobile": centerMobile,
        "data-no-margin": noMargin,
        "data-width": width,
        "data-justify": justify,
        ...rest
      }
    ), ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx3(
      ProjectSectionContent,
      {
        className: classes(styles$9.sectionColumns, className),
        "data-centered": centered,
        ...rest
      }
    ), { name: name$1, url, twitter } = config, defaultOgImage = `${url}/social-image.png`;
    columns = "_columns_1lqwj_1", grid = "_grid_1lqwj_9", gridImage = "_gridImage_1lqwj_31", gridBackground = "_gridBackground_1lqwj_55", gridForeground = "_gridForeground_1lqwj_81", gridText = "_gridText_1lqwj_113", sidebarImages = "_sidebarImages_1lqwj_137", sidebarImage = "_sidebarImage_1lqwj_137", styles$8 = {
      columns,
      grid,
      gridImage,
      gridBackground,
      gridForeground,
      gridText,
      sidebarImages,
      sidebarImage
    }, title$4 = "Biomedical image collaboration", description$2 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.", roles = ["User Research", "UX Design", "Interface Design"], meta$3 = () => baseMeta({ title: title$4, description: description$2, prefix: "Projects" }), Slice = () => /* @__PURE__ */ jsxs2(Fragment, {
      children: [
        /* @__PURE__ */ jsxs2(ProjectContainer, {
          className: styles$8.slice,
          children: [
            /* @__PURE__ */ jsx3(
              ProjectBackground,
              {
                src: sliceBackground,
                srcSet: `${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`,
                width: 1280,
                height: 800,
                placeholder: sliceBackgroundPlaceholder,
                opacity: 0.8
              }
            ),
            /* @__PURE__ */ jsx3(
              ProjectHeader,
              {
                title: title$4,
                description: description$2,
                url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
                roles
              }
            ),
            /* @__PURE__ */ jsx3(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx3(ProjectSectionContent, { children: /* @__PURE__ */ jsx3(
              ProjectImage,
              {
                srcSet: `${sliceApp} 800w, ${sliceAppLarge} 1920w`,
                width: 800,
                height: 500,
                placeholder: sliceTexturePlaceholder,
                alt: "The Slice web application showing a selected user annotation.",
                sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
              }
            ) }) }),
            /* @__PURE__ */ jsx3(ProjectSection, { children: /* @__PURE__ */ jsxs2(ProjectSectionColumns, {
              centered: !0,
              className: styles$8.columns,
              children: [
                /* @__PURE__ */ jsxs2("div", {
                  className: styles$8.imagesText,
                  children: [
                    /* @__PURE__ */ jsx3(ProjectSectionHeading, { children: "Bringing it together" }),
                    /* @__PURE__ */ jsx3(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
                    /* @__PURE__ */ jsx3(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others\u2019 annotations and make their own." })
                  ]
                }),
                /* @__PURE__ */ jsxs2("div", {
                  className: styles$8.sidebarImages,
                  children: [
                    /* @__PURE__ */ jsx3(
                      Image$1,
                      {
                        className: styles$8.sidebarImage,
                        srcSet: `${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`,
                        width: 350,
                        height: 750,
                        placeholder: sliceSidebarLayersPlaceholder,
                        alt: "The layers sidebar design, now with user profiles.",
                        sizes: `(max-width: ${media.mobile}px) 200px, 343px`
                      }
                    ),
                    /* @__PURE__ */ jsx3(
                      Image$1,
                      {
                        className: styles$8.sidebarImage,
                        srcSet: `${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`,
                        width: 350,
                        height: 750,
                        placeholder: sliceSidebarAnnotationsPlaceholder,
                        alt: "Multiple user annotations on a shared layer.",
                        sizes: `(max-width: ${media.mobile}px) 200px, 343px`
                      }
                    )
                  ]
                })
              ]
            }) }),
            /* @__PURE__ */ jsx3(ProjectSection, { light: !0, children: /* @__PURE__ */ jsxs2(ProjectSectionContent, {
              children: [
                /* @__PURE__ */ jsxs2(ProjectTextRow, {
                  children: [
                    /* @__PURE__ */ jsx3(ProjectSectionHeading, { children: "Improving the experience" }),
                    /* @__PURE__ */ jsx3(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
                  ]
                }),
                /* @__PURE__ */ jsx3(
                  Image$1,
                  {
                    srcSet: `${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`,
                    width: 800,
                    height: 500,
                    placeholder: sliceSlidesPlaceholder,
                    alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
                    sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
                  }
                )
              ]
            }) }),
            /* @__PURE__ */ jsx3(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs2(ProjectSectionContent, {
              className: styles$8.grid,
              children: [
                /* @__PURE__ */ jsxs2("div", {
                  className: styles$8.gridImage,
                  children: [
                    /* @__PURE__ */ jsx3("div", { className: styles$8.gridBackground, children: /* @__PURE__ */ jsx3(
                      Image$1,
                      {
                        srcSet: `${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`,
                        width: 440,
                        height: 790,
                        placeholder: sliceBackgroundBarPlaceholder,
                        alt: "",
                        role: "presentation",
                        sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
                      }
                    ) }),
                    /* @__PURE__ */ jsx3("div", { className: styles$8.gridForeground, children: /* @__PURE__ */ jsx3(
                      Image$1,
                      {
                        srcSet: `${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`,
                        width: 440,
                        height: 340,
                        placeholder: sliceAnnotationPlaceholder,
                        alt: "An annotation preview popover with statistics for shape perimeter and area.",
                        sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
                      }
                    ) })
                  ]
                }),
                /* @__PURE__ */ jsxs2("div", {
                  className: styles$8.gridText,
                  children: [
                    /* @__PURE__ */ jsx3(ProjectSectionHeading, { children: "Meaningful details" }),
                    /* @__PURE__ */ jsx3(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
                  ]
                })
              ]
            }) }),
            /* @__PURE__ */ jsx3(ProjectSection, { children: /* @__PURE__ */ jsxs2(ProjectSectionContent, {
              children: [
                /* @__PURE__ */ jsxs2(ProjectTextRow, {
                  children: [
                    /* @__PURE__ */ jsx3(ProjectSectionHeading, { children: "Project outcomes" }),
                    /* @__PURE__ */ jsx3(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
                  ]
                }),
                /* @__PURE__ */ jsx3(
                  Image$1,
                  {
                    src: sliceIrl,
                    width: 940,
                    height: 500,
                    placeholder: sliceIrlPlaceholder,
                    alt: "Students at the University using the new collaborative annotation features"
                  }
                )
              ]
            }) })
          ]
        }),
        /* @__PURE__ */ jsx3(Footer, {})
      ]
    }), route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Slice,
      meta: meta$3
    }, Symbol.toStringTag, { value: "Module" }));
    route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      action
    }, Symbol.toStringTag, { value: "Module" })), divider$1 = "_divider_uwer4_3", line$1 = "_line_uwer4_15", notch = "_notch_uwer4_59", styles$7 = {
      divider: divider$1,
      line: line$1,
      notch
    }, Divider = ({
      lineWidth,
      lineHeight,
      notchWidth,
      notchHeight,
      collapseDelay,
      collapsed,
      className,
      style,
      ...rest
    }) => /* @__PURE__ */ jsxs2(
      "div",
      {
        className: classes(styles$7.divider, className),
        style: cssProps(
          {
            lineWidth,
            lineHeight,
            notchWidth,
            notchHeight,
            collapseDelay: numToMs(collapseDelay)
          },
          style
        ),
        ...rest,
        children: [
          /* @__PURE__ */ jsx3("div", { className: styles$7.line, "data-collapsed": collapsed }),
          /* @__PURE__ */ jsx3(
            "div",
            {
              className: styles$7.notch,
              "data-collapsed": collapsed,
              style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
            }
          )
        ]
      }
    );
    Divider.defaultProps = {
      lineWidth: "100%",
      lineHeight: "2px",
      notchWidth: "90px",
      notchHeight: "10px",
      collapsed: !1,
      collapseDelay: 0
    };
    textarea = "_textarea_13d9g_3", styles$6 = {
      textarea
    }, TextArea = ({
      className,
      resize = "none",
      value: value2,
      onChange,
      minRows = 1,
      maxRows,
      ...rest
    }) => {
      let [rows, setRows] = useState2(minRows), [textareaDimensions, setTextareaDimensions] = useState2(), textareaRef = useRef3();
      useEffect3(() => {
        let style = getComputedStyle(textareaRef.current), lineHeight = parseInt(style.lineHeight, 10), paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
        setTextareaDimensions({ lineHeight, paddingHeight });
      }, []);
      let handleChange = (event) => {
        onChange(event);
        let { lineHeight, paddingHeight } = textareaDimensions, previousRows = event.target.rows;
        event.target.rows = minRows;
        let currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
        currentRows === previousRows && (event.target.rows = currentRows), maxRows && currentRows >= maxRows && (event.target.rows = maxRows, event.target.scrollTop = event.target.scrollHeight), setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
      };
      return /* @__PURE__ */ jsx3(
        "textarea",
        {
          className: classes(styles$6.textarea, className),
          ref: textareaRef,
          onChange: handleChange,
          style: cssProps({ resize }),
          rows,
          value: value2,
          ...rest
        }
      );
    }, container = "_container_17spy_3", content$2 = "_content_17spy_31", input$1 = "_input_17spy_41", underline = "_underline_17spy_109", label = "_label_17spy_145", error = "_error_17spy_189", errorMessage = "_errorMessage_17spy_221", styles$5 = {
      container,
      content: content$2,
      input: input$1,
      underline,
      label,
      error,
      errorMessage
    }, Input = ({
      id,
      label: label2,
      value: value2,
      multiline,
      className,
      style,
      error: error2,
      onBlur,
      autoComplete,
      required,
      maxLength,
      type,
      onChange,
      name: name2,
      ...rest
    }) => {
      let [focused, setFocused] = useState2(!1), generatedId = useId(), errorRef = useRef3(), inputId = id || `${generatedId}input`, labelId = `${inputId}-label`, errorId = `${inputId}-error`, InputElement = multiline ? TextArea : "input", handleBlur = (event) => {
        setFocused(!1), onBlur && onBlur(event);
      };
      return /* @__PURE__ */ jsxs2(
        "div",
        {
          className: classes(styles$5.container, className),
          "data-error": !!error2,
          style,
          ...rest,
          children: [
            /* @__PURE__ */ jsxs2("div", {
              className: styles$5.content,
              children: [
                /* @__PURE__ */ jsx3(
                  "label",
                  {
                    className: styles$5.label,
                    "data-focused": focused,
                    "data-filled": !!value2,
                    id: labelId,
                    htmlFor: inputId,
                    children: label2
                  }
                ),
                /* @__PURE__ */ jsx3(
                  InputElement,
                  {
                    className: styles$5.input,
                    id: inputId,
                    "aria-labelledby": labelId,
                    "aria-describedby": error2 ? errorId : void 0,
                    onFocus: () => setFocused(!0),
                    onBlur: handleBlur,
                    value: value2,
                    onChange,
                    autoComplete,
                    required,
                    maxLength,
                    type,
                    name: name2
                  }
                ),
                /* @__PURE__ */ jsx3("div", { className: styles$5.underline, "data-focused": focused })
              ]
            }),
            /* @__PURE__ */ jsx3(Transition, { unmount: !0, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => {
              var _a;
              return /* @__PURE__ */ jsx3(
                "div",
                {
                  ref: nodeRef,
                  className: styles$5.error,
                  "data-visible": visible,
                  id: errorId,
                  role: "alert",
                  style: cssProps({
                    height: visible ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
                  }),
                  children: /* @__PURE__ */ jsxs2("div", {
                    className: styles$5.errorMessage,
                    ref: errorRef,
                    children: [
                      /* @__PURE__ */ jsx3(Icon, { icon: "error" }),
                      error2
                    ]
                  })
                }
              );
            } })
          ]
        }
      );
    }, contact = "_contact_1p6je_1", form = "_form_1p6je_35", title$3 = "_title_1p6je_59", divider = "_divider_1p6je_119", input = "_input_1p6je_195", botkiller = "_botkiller_1p6je_279", button$2 = "_button_1p6je_287", complete = "_complete_1p6je_407", completeTitle = "_completeTitle_1p6je_429", completeText = "_completeText_1p6je_467", completeButton = "_completeButton_1p6je_505", formError = "_formError_1p6je_557", formErrorContent = "_formErrorContent_1p6je_581", formErrorMessage = "_formErrorMessage_1p6je_589", formErrorIcon = "_formErrorIcon_1p6je_605", footer = "_footer_1p6je_615", styles$4 = {
      contact,
      form,
      title: title$3,
      divider,
      input,
      botkiller,
      button: button$2,
      complete,
      completeTitle,
      completeText,
      completeButton,
      formError,
      formErrorContent,
      formErrorMessage,
      formErrorIcon,
      footer
    }, meta$2 = () => baseMeta({
      title: "Contact",
      description: "Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"
    }), MAX_EMAIL_LENGTH = 512, MAX_MESSAGE_LENGTH = 4096, Contact = () => {
      let errorRef = useRef3(), email = useFormInput(""), message = useFormInput(""), initDelay2 = tokens.base.durationS, [sending, setSending] = useState2(!1), [success, setSuccess] = useState2(!1), [error2, setError] = useState2("");
      async function handleSubmit(e) {
        e.preventDefault(), setSending(!0), setError("");
        let form2 = e.target, formData = new FormData(form2);
        try {
          (await fetch(
            "https://formspree.io/f/meoynvll",
            {
              method: "POST",
              headers: { Accept: "application/json" },
              body: formData
            }
          )).ok ? (setSuccess(!0), form2.reset()) : setError("Something went wrong. Please try again.");
        } catch {
          setError("Network error. Please try again.");
        } finally {
          setSending(!1);
        }
      }
      return /* @__PURE__ */ jsxs2(Section, {
        className: styles$4.contact,
        children: [
          /* @__PURE__ */ jsx3(Transition, { unmount: !0, in: !success, timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs2(
            "form",
            {
              ref: nodeRef,
              className: styles$4.form,
              onSubmit: handleSubmit,
              children: [
                /* @__PURE__ */ jsx3(
                  Heading,
                  {
                    className: styles$4.title,
                    "data-status": status,
                    level: 3,
                    as: "h1",
                    style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
                    children: /* @__PURE__ */ jsx3(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
                  }
                ),
                /* @__PURE__ */ jsx3(
                  Divider,
                  {
                    className: styles$4.divider,
                    "data-status": status,
                    style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
                  }
                ),
                /* @__PURE__ */ jsx3(
                  Input,
                  {
                    className: styles$4.botkiller,
                    label: "Name",
                    name: "name",
                    tabIndex: "-1",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ jsx3(
                  Input,
                  {
                    required: !0,
                    className: styles$4.input,
                    "data-status": status,
                    style: getDelay(tokens.base.durationXS, initDelay2),
                    autoComplete: "email",
                    label: "Your email",
                    type: "email",
                    name: "email",
                    maxLength: MAX_EMAIL_LENGTH,
                    ...email
                  }
                ),
                /* @__PURE__ */ jsx3(
                  Input,
                  {
                    required: !0,
                    multiline: !0,
                    className: styles$4.input,
                    "data-status": status,
                    style: getDelay(tokens.base.durationS, initDelay2),
                    autoComplete: "off",
                    label: "Message",
                    name: "message",
                    maxLength: MAX_MESSAGE_LENGTH,
                    ...message
                  }
                ),
                /* @__PURE__ */ jsx3(Transition, { unmount: !0, in: !!error2, children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
                  var _a;
                  return /* @__PURE__ */ jsx3(
                    "div",
                    {
                      ref: nodeRef2,
                      className: styles$4.formError,
                      "data-status": errorStatus,
                      style: cssProps({
                        height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                      }),
                      children: /* @__PURE__ */ jsx3("div", { className: styles$4.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs2("div", {
                        className: styles$4.formErrorMessage,
                        children: [
                          /* @__PURE__ */ jsx3(Icon, { className: styles$4.formErrorIcon, icon: "error" }),
                          error2
                        ]
                      }) })
                    }
                  );
                } }),
                /* @__PURE__ */ jsx3(
                  Button,
                  {
                    className: styles$4.button,
                    "data-status": status,
                    "data-sending": sending,
                    style: getDelay(tokens.base.durationM, initDelay2),
                    disabled: sending,
                    loading: sending,
                    loadingText: "Sending...",
                    icon: "send",
                    type: "submit",
                    children: "Send message"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx3(Transition, { unmount: !0, in: success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs2("div", {
            className: styles$4.complete,
            "aria-live": "polite",
            ref: nodeRef,
            children: [
              /* @__PURE__ */ jsx3(
                Heading,
                {
                  level: 3,
                  as: "h3",
                  className: styles$4.completeTitle,
                  "data-status": status,
                  children: "Message Sent"
                }
              ),
              /* @__PURE__ */ jsx3(
                Text,
                {
                  size: "l",
                  as: "p",
                  className: styles$4.completeText,
                  "data-status": status,
                  style: getDelay(tokens.base.durationXS),
                  children: "I\u2019ll get back to you within a couple days, sit tight"
                }
              ),
              /* @__PURE__ */ jsx3(
                Button,
                {
                  secondary: !0,
                  iconHoverShift: !0,
                  className: styles$4.completeButton,
                  "data-status": status,
                  style: getDelay(tokens.base.durationM),
                  href: "/",
                  icon: "chevron-right",
                  children: "Back to homepage"
                }
              )
            ]
          }) }),
          /* @__PURE__ */ jsx3(Footer, { className: styles$4.footer })
        ]
      });
    };
    route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Contact,
      meta: meta$2
    }, Symbol.toStringTag, { value: "Module" })), gamestackTexture2Placeholder = "/assets/SpringFallSecondTexture-C55pFQ8V.png", gamestackTexturePlaceholder = "/assets/SpringFallFirstTexture-BkYFIuBu.jpg", SpringFallFirstTexture = "/assets/SpringFallFirstTexture-BkYFIuBu.jpg", SpringFallSecondTexture = "/assets/SpringFallSecondTexture-C55pFQ8V.png", CoolestProjectsTexure = "/assets/CoolestProjectsTexure-DQh7zqpe.png", sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg", devxoraTexture = "/assets/devxoraTexture-D0WlXirq.png";
    intro = "_intro_vzhcp_1", text = "_text_vzhcp_17", name = "_name_vzhcp_71", title$2 = "_title_vzhcp_147", row = "_row_vzhcp_155", word = "_word_vzhcp_213", line = "_line_vzhcp_365", scrollIndicator = "_scrollIndicator_vzhcp_463", mobileScrollIndicator = "_mobileScrollIndicator_vzhcp_597", styles$3 = {
      intro,
      text,
      name,
      title: title$2,
      row,
      word,
      line,
      scrollIndicator,
      mobileScrollIndicator
    }, DisplacementSphere2 = lazy(
      () => Promise.resolve().then(() => (init_displacement_sphere_D3i_OXzm(), displacement_sphere_D3i_OXzm_exports)).then((module) => ({ default: module.DisplacementSphere }))
    );
    katakana = "/assets/katakana-CPFTGsJ1.svg", profile = "_profile_kx5p3_1", content$1 = "_content_kx5p3_73", column = "_column_kx5p3_99", title$1 = "_title_kx5p3_117", description$1 = "_description_kx5p3_139", image = "_image_kx5p3_227", svg$1 = "_svg_kx5p3_237", button$1 = "_button_kx5p3_269", styles$2 = {
      profile,
      content: content$1,
      column,
      title: title$1,
      description: description$1,
      image,
      svg: svg$1,
      button: button$1
    }, ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs2(Fragment, {
      children: [
        /* @__PURE__ */ jsx3(Heading, { className: styles$2.title, "data-visible": visible, level: 2, id: titleId, children: /* @__PURE__ */ jsx3(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
        /* @__PURE__ */ jsx3(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "I\u2019m Aadhithiya, an AI Engineer passionate about building intelligent, data-driven systems. I create smart applications that combine machine learning, clean code, and practical problem-solving." }),
        /* @__PURE__ */ jsx3(Heading, { className: styles$2.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx3(DecoderText, { text: "Education", start: visible, delay: 500 }) }),
        /* @__PURE__ */ jsx3(Heading, { className: styles$2.title, "data-visible": visible, level: 6, id: titleId, children: /* @__PURE__ */ jsx3(DecoderText, { text: "Bachelor of Computer Science", start: visible, delay: 500 }) }),
        /* @__PURE__ */ jsxs2(Text, {
          className: styles$2.description,
          "data-visible": visible,
          size: "l",
          as: "p",
          children: [
            "Annamalai University -- 2023-2027",
            /* @__PURE__ */ jsx3("br", {}),
            "CGPA: 8.5/10",
            /* @__PURE__ */ jsx3("br", {}),
            "Focused on Artificial Intelligence, Machine Learning, CyberSecurity, and Software Development"
          ]
        }),
        /* @__PURE__ */ jsx3(Heading, { className: styles$2.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx3(DecoderText, { text: "My Certifications", start: visible, delay: 500 }) }),
        /* @__PURE__ */ jsxs2(Text, {
          className: styles$2.description,
          "data-visible": visible,
          size: "l",
          as: "p",
          children: [
            "1. ",
            /* @__PURE__ */ jsx3("a", { href: "https://www.credly.com/badges/afda80eb-487d-471e-b761-16b9977f4931/linked_in_profile", target: "_blank", children: "AI Fundamentals - IBM." }),
            /* @__PURE__ */ jsx3("br", {}),
            "2. ",
            /* @__PURE__ */ jsx3("a", { href: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS116S55440028110319179", target: "_blank", children: "CyberSecurity - NPTEL(IIT Madras)" }),
            /* @__PURE__ */ jsx3("br", {}),
            "3. ",
            /* @__PURE__ */ jsx3("a", { href: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS11S94330865904227439", target: "_blank", children: "Cloud Computing - NPTEL(IIT Kharagpur)" }),
            /* @__PURE__ */ jsx3("br", {}),
            "4. ",
            /* @__PURE__ */ jsx3("a", { href: "https://www.udemy.com/certificate/UC-e26bbf7a-cafb-435c-8d32-5d987fbc3119/", target: "_blank", children: "Python - Udemy" }),
            /* @__PURE__ */ jsx3("br", {})
          ]
        })
      ]
    }), Profile = ({ id, visible, sectionRef }) => {
      let [focused, setFocused] = useState2(!1), titleId = `${id}-title`;
      return /* @__PURE__ */ jsx3(
        Section,
        {
          className: styles$2.profile,
          onFocus: () => setFocused(!0),
          onBlur: () => setFocused(!1),
          as: "section",
          id,
          ref: sectionRef,
          "aria-labelledby": titleId,
          tabIndex: -1,
          children: /* @__PURE__ */ jsx3(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs2("div", {
            className: styles$2.content,
            ref: nodeRef,
            children: [
              /* @__PURE__ */ jsxs2("div", {
                className: styles$2.column,
                children: [
                  /* @__PURE__ */ jsx3(ProfileText, { visible: visible2, titleId }),
                  /* @__PURE__ */ jsx3(
                    Button,
                    {
                      secondary: !0,
                      className: styles$2.button,
                      "data-visible": visible2,
                      href: "/contact",
                      icon: "send",
                      children: "Contact Me !"
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs2("div", {
                className: styles$2.column,
                children: [
                  /* @__PURE__ */ jsx3("br", {}),
                  /* @__PURE__ */ jsx3("br", {}),
                  /* @__PURE__ */ jsx3("br", {}),
                  /* @__PURE__ */ jsxs2("div", {
                    className: styles$2.image,
                    children: [
                      /* @__PURE__ */ jsx3(
                        Image$1,
                        {
                          reveal: !0,
                          delay: 100,
                          placeholder: notfoundImg,
                          srcSet: `${notfoundImg} 480w, ${notfoundImg} 960w`,
                          width: 960,
                          height: 1280,
                          sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                          alt: "Me smiling like a goofball at the office in Sydney"
                        }
                      ),
                      /* @__PURE__ */ jsx3("svg", { className: styles$2.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx3("use", { href: `${katakana}#katakana-profile` }) })
                    ]
                  })
                ]
              })
            ]
          }) })
        }
      );
    }, iphone11 = "/assets/iphone-11-DGIHa_Ph.glb", macbookPro = "/assets/macbook-pro-DZn-FKKF.glb", ModelAnimationType = {
      SpringUp: "spring-up",
      LaptopOpen: "laptop-open"
    }, deviceModels = {
      phone: {
        url: iphone11,
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.SpringUp
      },
      laptop: {
        url: macbookPro,
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen
      }
    }, summary = "_summary_4rpvx_1", content = "_content_4rpvx_69", details = "_details_4rpvx_129", preview = "_preview_4rpvx_155", model2 = "_model_4rpvx_175", loader$1 = "_loader_4rpvx_283", svg = "_svg_4rpvx_301", index = "_index_4rpvx_383", indexNumber = "_indexNumber_4rpvx_401", title = "_title_4rpvx_443", description = "_description_4rpvx_481", button = "_button_4rpvx_519", styles$1 = {
      summary,
      content,
      details,
      preview,
      model: model2,
      loader: loader$1,
      svg,
      index,
      indexNumber,
      title,
      description,
      button
    }, Model2 = lazy(
      () => Promise.resolve().then(() => (init_index_y0mg_2Uk(), index_y0mg_2Uk_exports)).then((module) => ({ default: module.Model }))
    );
    home = "_home_pb8qs_1", styles3 = {
      home
    }, links = () => [
      {
        rel: "prefetch",
        href: "/draco/draco_wasm_wrapper.js",
        as: "script",
        type: "text/javascript",
        importance: "low"
      },
      {
        rel: "prefetch",
        href: "/draco/draco_decoder.wasm",
        as: "fetch",
        type: "application/wasm",
        importance: "low"
      }
    ], meta$1 = () => baseMeta({
      title: "AI engineer",
      description: "focused on building intelligent, scalable systems using machine learning and deep learning. Passionate about turning data into real-world solutions."
    }), Home = () => {
      let [visibleSections, setVisibleSections] = useState2([]), [scrollIndicatorHidden, setScrollIndicatorHidden] = useState2(!1), intro2 = useRef3(), projectOne = useRef3(), projectTwo = useRef3(), projectThree = useRef3(), details2 = useRef3();
      return useEffect3(() => {
        let sections = [intro2, projectOne, projectTwo, projectThree, details2], sectionObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry2) => {
              if (entry2.isIntersecting) {
                let section2 = entry2.target;
                if (observer.unobserve(section2), visibleSections.includes(section2))
                  return;
                setVisibleSections((prevSections) => [...prevSections, section2]);
              }
            });
          },
          { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
        ), indicatorObserver = new IntersectionObserver(
          ([entry2]) => {
            setScrollIndicatorHidden(!entry2.isIntersecting);
          },
          { rootMargin: "-100% 0px 0px 0px" }
        );
        return sections.forEach((section2) => {
          sectionObserver.observe(section2.current);
        }), indicatorObserver.observe(intro2.current), () => {
          sectionObserver.disconnect(), indicatorObserver.disconnect();
        };
      }, [visibleSections]), /* @__PURE__ */ jsxs2("div", {
        className: styles3.home,
        children: [
          /* @__PURE__ */ jsx3(
            Intro,
            {
              id: "intro",
              sectionRef: intro2,
              scrollIndicatorHidden
            }
          ),
          /* @__PURE__ */ jsx3(
            ProjectSummary,
            {
              id: "project-1",
              sectionRef: projectOne,
              visible: visibleSections.includes(projectOne.current),
              index: 1,
              title: "AI web scrapping ",
              description: "An AI-powered web scraping system that automatically extracts, cleans, and structures data from websites, enabling intelligent analysis and insights.",
              buttonText: "Visit GitHub",
              buttonLink: "https://github.com/Aadhi-07/AI-Web-scrapper.git",
              model: {
                type: "laptop",
                alt: "AI web scrapping system architecture",
                textures: [
                  {
                    srcSet: `${devxoraTexture} 1280w, ${devxoraTexture} 2560w`,
                    placeholder: sprTexturePlaceholder
                  }
                ]
              }
            }
          ),
          /* @__PURE__ */ jsx3(
            ProjectSummary,
            {
              id: "project-3",
              sectionRef: projectTwo,
              visible: visibleSections.includes(projectTwo.current),
              index: 2,
              title: "Content Research Agent",
              description: "An AI agent that searches the web, analyzes sources, and generates concise, relevant research summaries in real time.",
              buttonText: "Visit Github",
              buttonLink: "https://github.com/Aadhi-07/content-researching-agent.git",
              model: {
                type: "laptop",
                alt: "Content Research Agent app preview",
                textures: [
                  {
                    srcSet: `${CoolestProjectsTexure} 800w, ${CoolestProjectsTexure} 1920w`,
                    placeholder: sliceTexturePlaceholder
                  }
                ]
              }
            }
          ),
          /* @__PURE__ */ jsx3(
            ProjectSummary,
            {
              id: "project-2",
              alternate: !0,
              sectionRef: projectThree,
              visible: visibleSections.includes(projectThree.current),
              index: 3,
              title: "Featured cool projects !",
              description: "Take cool at my cool projects in my repo..!!",
              buttonText: "Visit Github",
              buttonLink: "https://github.com/Aadhi-07",
              model: {
                type: "phone",
                alt: "Featured repos",
                textures: [
                  {
                    srcSet: `${SpringFallSecondTexture} 375w, ${SpringFallSecondTexture} 750w`,
                    placeholder: gamestackTexture2Placeholder
                  },
                  {
                    srcSet: `${SpringFallFirstTexture} 375w, ${SpringFallFirstTexture} 750w`,
                    placeholder: gamestackTexturePlaceholder
                  }
                ]
              }
            }
          ),
          /* @__PURE__ */ jsx3(
            Profile,
            {
              sectionRef: details2,
              visible: visibleSections.includes(details2.current),
              id: "details"
            }
          ),
          /* @__PURE__ */ jsx3(Footer, {})
        ]
      });
    }, route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Home,
      links,
      meta: meta$1
    }, Symbol.toStringTag, { value: "Module" }));
    meta = () => [{ title: "404 | Redacted" }];
    route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      ErrorBoundary,
      loader,
      meta
    }, Symbol.toStringTag, { value: "Module" })), serverManifest = { entry: { module: "/assets/entry.client-DnABqKI9.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-JBIitAk6.js"], css: [] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0, module: "/assets/root-PmB62Q9r.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-JBIitAk6.js", "/assets/image-vZx_tkgY.js", "/assets/error-DL5JBJKD.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/heading-hCU_4ZIW.js", "/assets/useWindowSize-BTW94ndq.js", "/assets/config-x8ocTanZ.js", "/assets/notfound-CPT66_Cg.js"], css: ["/assets/root-r4TejvkZ.css", "/assets/image-wAiq2qtr.css", "/assets/heading-C5dfv3B4.css", "/assets/error-5kCT514i.css", "/assets/decoder-text-cQOBPbn6.css"] }, "routes/articles.modern-styling-in-react": { id: "routes/articles.modern-styling-in-react", parentId: "root", path: "articles/modern-styling-in-react", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/articles.modern-styling-in-react-pA7lDNH2.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CV1fLf9-.js"], css: [] }, "routes/articles.hello-world": { id: "routes/articles.hello-world", parentId: "root", path: "articles/hello-world", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/articles.hello-world-D6FOhEfE.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CV1fLf9-.js"], css: [] }, "routes/projects.slice": { id: "routes/projects.slice", parentId: "root", path: "projects/slice", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/route-D1H7avui.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/slice-app-placeholder-BfRsQMSa.js", "/assets/meta-CJGqz-H_.js", "/assets/image-vZx_tkgY.js", "/assets/heading-hCU_4ZIW.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js"], css: ["/assets/route-CNxG_otN.css", "/assets/meta-Dd3xeam3.css", "/assets/heading-C5dfv3B4.css", "/assets/image-wAiq2qtr.css"] }, "routes/api.set-theme": { id: "routes/api.set-theme", parentId: "root", path: "api/set-theme", index: void 0, caseSensitive: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/api.set-theme-l0sNRNKZ.js", imports: [], css: [] }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/route-hQifnFgo.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/heading-hCU_4ZIW.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/divider-S5Fqv3gb.js", "/assets/meta-CJGqz-H_.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js"], css: ["/assets/route-BBxXI2Ph.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/divider-95tbulif.css", "/assets/meta-Dd3xeam3.css"] }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/route-Bv6MaUT2.js", imports: ["/assets/route-C3YmDCza.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/slice-app-placeholder-BfRsQMSa.js", "/assets/meta-CJGqz-H_.js", "/assets/heading-hCU_4ZIW.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/image-vZx_tkgY.js", "/assets/useWindowSize-BTW94ndq.js", "/assets/notfound-CPT66_Cg.js", "/assets/divider-S5Fqv3gb.js"], css: ["/assets/route-Bww4lImB.css", "/assets/meta-Dd3xeam3.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/image-wAiq2qtr.css", "/assets/divider-95tbulif.css"] }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0, module: "/assets/_-BTg6chgg.js", imports: ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/error-DL5JBJKD.js", "/assets/components-JBIitAk6.js", "/assets/notfound-CPT66_Cg.js", "/assets/heading-hCU_4ZIW.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/image-vZx_tkgY.js"], css: ["/assets/error-5kCT514i.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/image-wAiq2qtr.css"] }, "routes/home/route": { id: "routes/home/route", parentId: "root", path: "/", index: !0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/route-Bv6MaUT2.js", imports: ["/assets/route-C3YmDCza.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/slice-app-placeholder-BfRsQMSa.js", "/assets/meta-CJGqz-H_.js", "/assets/heading-hCU_4ZIW.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/image-vZx_tkgY.js", "/assets/useWindowSize-BTW94ndq.js", "/assets/notfound-CPT66_Cg.js", "/assets/divider-S5Fqv3gb.js"], css: ["/assets/route-Bww4lImB.css", "/assets/meta-Dd3xeam3.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/image-wAiq2qtr.css", "/assets/divider-95tbulif.css"] } }, url: "/assets/manifest-974cc56a.js", version: "974cc56a" }, mode = "production", assetsBuildDirectory = "build\\client", basename = "/", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, isSpaMode = !1, publicPath = "/", entry = { module: entryServer }, routes = {
      root: {
        id: "root",
        parentId: void 0,
        path: "",
        index: void 0,
        caseSensitive: void 0,
        module: route0
      },
      "routes/articles.modern-styling-in-react": {
        id: "routes/articles.modern-styling-in-react",
        parentId: "root",
        path: "articles/modern-styling-in-react",
        index: void 0,
        caseSensitive: void 0,
        module: route1
      },
      "routes/articles.hello-world": {
        id: "routes/articles.hello-world",
        parentId: "root",
        path: "articles/hello-world",
        index: void 0,
        caseSensitive: void 0,
        module: route2
      },
      "routes/projects.slice": {
        id: "routes/projects.slice",
        parentId: "root",
        path: "projects/slice",
        index: void 0,
        caseSensitive: void 0,
        module: route3
      },
      "routes/api.set-theme": {
        id: "routes/api.set-theme",
        parentId: "root",
        path: "api/set-theme",
        index: void 0,
        caseSensitive: void 0,
        module: route4
      },
      "routes/contact": {
        id: "routes/contact",
        parentId: "root",
        path: "contact",
        index: void 0,
        caseSensitive: void 0,
        module: route5
      },
      "routes/home": {
        id: "routes/home",
        parentId: "root",
        path: "home",
        index: void 0,
        caseSensitive: void 0,
        module: route8
      },
      "routes/$": {
        id: "routes/$",
        parentId: "root",
        path: "*",
        index: void 0,
        caseSensitive: void 0,
        module: route7
      },
      "routes/home/route": {
        id: "routes/home/route",
        parentId: "root",
        path: "/",
        index: !0,
        caseSensitive: void 0,
        module: route8
      }
    };
  }
});

// index.js
init_server_build_BUqUCazy();
import "react/jsx-runtime";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "@remix-run/cloudflare";
import "react";
import "framer-motion";
import "@mdx-js/react";
import { createRequestHandler } from "@remix-run/node";
var newPortfolio_default = createRequestHandler({
  build,
  mode: "production"
});
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  newPortfolio_default as default,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
