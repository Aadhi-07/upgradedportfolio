import { TextureLoader, Cache } from "three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";
function throttle(func, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    const now = /* @__PURE__ */ new Date();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}
Cache.enabled = true;
const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath("/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
const modelLoader = gltfLoader;
const textureLoader = new TextureLoader();
const cleanScene = (scene) => {
  scene == null ? void 0 : scene.traverse((object) => {
    if (!object.isMesh) return;
    object.geometry.dispose();
    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    }
  });
};
const cleanMaterial = (material) => {
  var _a, _b, _c;
  material.dispose();
  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === "object" && "minFilter" in value) {
      value.dispose();
      (_c = (_b = (_a = value.source) == null ? void 0 : _a.data) == null ? void 0 : _b.close) == null ? void 0 : _c.call(_b);
    }
  }
};
const cleanRenderer = (renderer) => {
  renderer.dispose();
  renderer = null;
};
const removeLights = (lights) => {
  for (const light of lights) {
    light.parent.remove(light);
  }
};
export {
  cleanRenderer as a,
  textureLoader as b,
  cleanScene as c,
  modelLoader as m,
  removeLights as r,
  throttle as t
};
