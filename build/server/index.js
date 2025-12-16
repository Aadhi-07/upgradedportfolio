var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
};

// app/assets/fonts/gotham-bold-italic.woff2
var gotham_bold_italic_default, init_gotham_bold_italic = __esm({
  "app/assets/fonts/gotham-bold-italic.woff2"() {
    gotham_bold_italic_default = "/build/_assets/gotham-bold-italic-OLGVLVDA.woff2";
  }
});

// app/assets/fonts/gotham-bold.woff2
var gotham_bold_default, init_gotham_bold = __esm({
  "app/assets/fonts/gotham-bold.woff2"() {
    gotham_bold_default = "/build/_assets/gotham-bold-YCA2Z2KD.woff2";
  }
});

// app/assets/fonts/gotham-book-italic.woff2
var gotham_book_italic_default, init_gotham_book_italic = __esm({
  "app/assets/fonts/gotham-book-italic.woff2"() {
    gotham_book_italic_default = "/build/_assets/gotham-book-italic-GDMS7P5O.woff2";
  }
});

// app/assets/fonts/gotham-book.woff2
var gotham_book_default, init_gotham_book = __esm({
  "app/assets/fonts/gotham-book.woff2"() {
    gotham_book_default = "/build/_assets/gotham-book-6DKF6M3J.woff2";
  }
});

// app/assets/fonts/gotham-medium-italic.woff2
var gotham_medium_italic_default, init_gotham_medium_italic = __esm({
  "app/assets/fonts/gotham-medium-italic.woff2"() {
    gotham_medium_italic_default = "/build/_assets/gotham-medium-italic-7A76FGFF.woff2";
  }
});

// app/assets/fonts/gotham-medium.woff2
var gotham_medium_default, init_gotham_medium = __esm({
  "app/assets/fonts/gotham-medium.woff2"() {
    gotham_medium_default = "/build/_assets/gotham-medium-ZMMBQFZI.woff2";
  }
});

// app/assets/fonts/ipa-gothic.woff2
var ipa_gothic_default, init_ipa_gothic = __esm({
  "app/assets/fonts/ipa-gothic.woff2"() {
    ipa_gothic_default = "/build/_assets/ipa-gothic-UH26V325.woff2";
  }
});

// app/utils/style.js
function cssProps(props, style = {}) {
  let result = {}, keys = Object.keys(props);
  for (let key of keys) {
    let value = props[key];
    typeof value == "number" && key === "delay" && (value = numToMs(value)), typeof value == "number" && key !== "opacity" && (value = numToPx(value)), typeof value == "number" && key === "opacity" && (value = `${value * 100}%`), result[`--${key}`] = value;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
var media, numToPx, pxToRem, msToNum, numToMs, init_style = __esm({
  "app/utils/style.js"() {
    media = {
      desktop: 2080,
      laptop: 1680,
      tablet: 1040,
      mobile: 696,
      mobileS: 400
    }, numToPx = (num) => `${num}px`, pxToRem = (px) => `${px / 16}rem`, msToNum = (msString) => Number(msString.replace("ms", "")), numToMs = (num) => `${num}ms`;
  }
});

// app/components/theme-provider/theme.js
var baseTokens, tokensDesktop, tokensLaptop, tokensTablet, tokensMobile, tokensMobileSmall, dark, light, tokens, themes, init_theme = __esm({
  "app/components/theme-provider/theme.js"() {
    init_style();
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
    }, themes = { dark, light };
  }
});

// app/components/theme-provider/theme-provider.jsx
import { createContext, useContext } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function useTheme() {
  return useContext(ThemeContext);
}
function squish(styles) {
  return styles.replace(/\s\s+/g, " ");
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
var ThemeContext, ThemeProvider, layerStyles, tokenStyles, fontStyles, themeStyles, init_theme_provider = __esm({
  "app/components/theme-provider/theme-provider.jsx"() {
    init_gotham_bold_italic();
    init_gotham_bold();
    init_gotham_book_italic();
    init_gotham_book();
    init_gotham_medium_italic();
    init_gotham_medium();
    init_ipa_gothic();
    init_style();
    init_theme();
    ThemeContext = createContext({}), ThemeProvider = ({
      theme = "dark",
      children,
      className,
      as: Component = "div",
      toggleTheme,
      ...rest
    }) => {
      let parentTheme = useTheme(), isRootProvider = !parentTheme.theme;
      return /* @__PURE__ */ jsxs(
        ThemeContext.Provider,
        {
          value: {
            theme,
            toggleTheme: toggleTheme || parentTheme.toggleTheme
          },
          children: [
            isRootProvider && children,
            !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
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
    src: url(${gotham_book_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${gotham_book_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${gotham_medium_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${gotham_medium_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${gotham_bold_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${gotham_bold_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${ipa_gothic_default}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`), themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
  }
});

// app/components/theme-provider/index.js
var init_theme_provider2 = __esm({
  "app/components/theme-provider/index.js"() {
    init_theme_provider();
  }
});

// app/components/transition/transition.jsx
import { AnimatePresence, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Transition, TransitionContent, init_transition = __esm({
  "app/components/transition/transition.jsx"() {
    Transition = ({ children, in: show, unmount, initial = !0, ...props }) => {
      let enterTimeout = useRef(), exitTimeout = useRef();
      return useEffect(() => {
        clearTimeout(show ? exitTimeout.current : enterTimeout.current);
      }, [show]), /* @__PURE__ */ jsx5(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx5(
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
      let [status, setStatus] = useState(initial ? "exited" : "entered"), [isPresent, safeToRemove] = usePresence(), [hasEntered, setHasEntered] = useState(!initial), splitTimeout = typeof timeout == "object", internalNodeRef = useRef(null), nodeRef = defaultNodeRef || internalNodeRef, visible = hasEntered && show ? isPresent : !1;
      return useEffect(() => {
        if (hasEntered || !show)
          return;
        let actualTimeout = splitTimeout ? timeout.enter : timeout;
        clearTimeout(enterTimeout.current), clearTimeout(exitTimeout.current), setHasEntered(!0), setStatus("entering"), onEnter?.(), nodeRef.current?.offsetHeight, enterTimeout.current = setTimeout(() => {
          setStatus("entered"), onEntered?.();
        }, actualTimeout);
      }, [onEnter, onEntered, timeout, status, show]), useEffect(() => {
        if (isPresent && show)
          return;
        let actualTimeout = splitTimeout ? timeout.exit : timeout;
        clearTimeout(enterTimeout.current), clearTimeout(exitTimeout.current), setStatus("exiting"), onExit?.(), nodeRef.current?.offsetHeight, exitTimeout.current = setTimeout(() => {
          setStatus("exited"), safeToRemove?.(), onExited?.();
        }, actualTimeout);
      }, [isPresent, onExit, safeToRemove, timeout, onExited, show]), children({ visible, status, nodeRef });
    };
  }
});

// app/components/transition/index.js
var init_transition2 = __esm({
  "app/components/transition/index.js"() {
    init_transition();
  }
});

// app/hooks/useFormInput.js
import { useState as useState2 } from "react";
function useFormInput(initialValue = "") {
  let [value, setValue] = useState2(initialValue), [error, setError] = useState2(), [isDirty, setIsDirty] = useState2(!1);
  return {
    value,
    error,
    onChange: (event) => {
      setValue(event.target.value), setIsDirty(!0), error && event.target.checkValidity() && setError(null);
    },
    onBlur: (event) => {
      isDirty && event.target.checkValidity();
    },
    onInvalid: (event) => {
      event.preventDefault(), setError(event.target.validationMessage);
    }
  };
}
var init_useFormInput = __esm({
  "app/hooks/useFormInput.js"() {
  }
});

// app/hooks/useHasMounted.js
import { useEffect as useEffect3, useState as useState3 } from "react";
function useHasMounted() {
  let [mounted, setMounted] = useState3(!1);
  return useEffect3(() => {
    setMounted(!0);
  }, []), mounted;
}
var init_useHasMounted = __esm({
  "app/hooks/useHasMounted.js"() {
  }
});

// app/hooks/useInterval.js
import { useEffect as useEffect4, useRef as useRef3 } from "react";
function useInterval(callback, delay2, reset) {
  let savedCallback = useRef3();
  useEffect4(() => {
    savedCallback.current = callback;
  }), useEffect4(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
var init_useInterval = __esm({
  "app/hooks/useInterval.js"() {
  }
});

// app/hooks/useInViewport.js
import { useEffect as useEffect5, useState as useState4 } from "react";
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = !0) {
  let [intersect, setIntersect] = useState4(!1), [isUnobserved, setIsUnobserved] = useState4(!1);
  return useEffect5(() => {
    if (!elementRef?.current)
      return;
    let observer = new IntersectionObserver(([entry2]) => {
      let { isIntersecting, target } = entry2;
      setIntersect(isIntersecting), isIntersecting && unobserveOnIntersect && (observer.unobserve(target), setIsUnobserved(!0));
    }, options);
    return !isUnobserved && shouldObserve && observer.observe(elementRef.current), () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]), intersect;
}
var init_useInViewport = __esm({
  "app/hooks/useInViewport.js"() {
  }
});

// app/hooks/useParallax.js
import { useReducedMotion as useReducedMotion3 } from "framer-motion";
import { useEffect as useEffect6 } from "react";
function useParallax(multiplier, onChange) {
  let reduceMotion = useReducedMotion3();
  useEffect6(() => {
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
var init_useParallax = __esm({
  "app/hooks/useParallax.js"() {
  }
});

// app/hooks/usePrevious.js
import { useEffect as useEffect7, useRef as useRef4 } from "react";
function usePrevious(value) {
  let ref = useRef4();
  return useEffect7(() => {
    ref.current = value;
  }, [value]), ref.current;
}
var init_usePrevious = __esm({
  "app/hooks/usePrevious.js"() {
  }
});

// app/hooks/useScrollToHash.js
import { useReducedMotion as useReducedMotion4 } from "framer-motion";
import { useLocation, useNavigate } from "@remix-run/react";
import { useCallback, useRef as useRef5 } from "react";
function useScrollToHash() {
  let scrollTimeout = useRef5(), location = useLocation(), navigate = useNavigate(), reduceMotion = useReducedMotion4();
  return useCallback(
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
var init_useScrollToHash = __esm({
  "app/hooks/useScrollToHash.js"() {
  }
});

// app/hooks/useWindowSize.js
import { useCallback as useCallback2, useEffect as useEffect8, useRef as useRef6, useState as useState5 } from "react";
function useWindowSize() {
  let dimensions = useRef6(() => ({ w: 1280, h: 800 })), createRuler = useCallback2(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed", ruler.style.height = "100vh", ruler.style.width = 0, ruler.style.top = 0, document.documentElement.appendChild(ruler), dimensions.current.w = window.innerWidth, dimensions.current.h = ruler.offsetHeight, document.documentElement.removeChild(ruler), ruler = null;
  }, []), getHeight = useCallback2(() => navigator?.userAgent.match(/iphone|ipod|ipad/i) ? (createRuler(), dimensions.current.h) : window.innerHeight, [createRuler]), getSize = useCallback2(() => ({
    width: window.innerWidth,
    height: getHeight()
  }), [getHeight]), [windowSize, setWindowSize] = useState5(dimensions.current);
  return useEffect8(() => {
    let handleResize = () => {
      setWindowSize(getSize());
    };
    return window.addEventListener("resize", handleResize), handleResize(), () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]), windowSize;
}
var init_useWindowSize = __esm({
  "app/hooks/useWindowSize.js"() {
  }
});

// app/hooks/index.js
var init_hooks = __esm({
  "app/hooks/index.js"() {
    init_useFormInput();
    init_useHasMounted();
    init_useInterval();
    init_useInViewport();
    init_useParallax();
    init_usePrevious();
    init_useScrollToHash();
    init_useWindowSize();
  }
});

// app/utils/image.js
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
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    let canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
    canvas.width = width, canvas.height = height, ctx.fillStyle = "rgba(0, 0, 0, 0)", ctx.fillRect(0, 0, width, height), canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      let image = URL.createObjectURL(blob);
      canvas.remove(), resolve(image);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  let sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      let [src, width] = srcString.split(" "), size = Number(width.replace("w", "")), image = await generateImage(size);
      return { src, image, width };
    })
  ), fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(", "), fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  return sources.find((src) => src.image === fakeSrc).src;
}
var init_image = __esm({
  "app/utils/image.js"() {
  }
});

// app/utils/throttle.js
function throttle(func, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    let now = /* @__PURE__ */ new Date();
    now - lastTime >= timeFrame && (func(...args), lastTime = now);
  };
}
var init_throttle = __esm({
  "app/utils/throttle.js"() {
  }
});

// app/utils/three.js
import { Cache, TextureLoader } from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";
var dracoLoader, gltfLoader, modelLoader, textureLoader, cleanScene, cleanMaterial, cleanRenderer, removeLights, init_three = __esm({
  "app/utils/three.js"() {
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
      material.dispose();
      for (let key of Object.keys(material)) {
        let value = material[key];
        value && typeof value == "object" && "minFilter" in value && (value.dispose(), value.source?.data?.close?.());
      }
    }, cleanRenderer = (renderer) => {
      renderer.dispose(), renderer = null;
    }, removeLights = (lights) => {
      for (let light2 of lights)
        light2.parent.remove(light2);
    };
  }
});

// app/routes/home/displacement-sphere-fragment.js
var fragmentShader, displacement_sphere_fragment_default, init_displacement_sphere_fragment = __esm({
  "app/routes/home/displacement-sphere-fragment.js"() {
    fragmentShader = `
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
`, displacement_sphere_fragment_default = fragmentShader;
  }
});

// app/routes/home/displacement-sphere-vertex.js
var vertexShader, displacement_sphere_vertex_default, init_displacement_sphere_vertex = __esm({
  "app/routes/home/displacement-sphere-vertex.js"() {
    vertexShader = `
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
`, displacement_sphere_vertex_default = vertexShader;
  }
});

// app/routes/home/displacement-sphere.module.css
var displacement_sphere_module_default, init_displacement_sphere_module = __esm({
  "app/routes/home/displacement-sphere.module.css"() {
    displacement_sphere_module_default = { canvas: "_17BOs" };
  }
});

// app/routes/home/displacement-sphere.jsx
var displacement_sphere_exports = {};
__export(displacement_sphere_exports, {
  DisplacementSphere: () => DisplacementSphere
});
import { useReducedMotion as useReducedMotion6, useSpring as useSpring2 } from "framer-motion";
import { startTransition, useEffect as useEffect14, useRef as useRef14 } from "react";
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer
} from "three";
import { jsx as jsx30 } from "react/jsx-runtime";
var springConfig, DisplacementSphere, init_displacement_sphere = __esm({
  "app/routes/home/displacement-sphere.jsx"() {
    init_theme_provider2();
    init_transition2();
    init_hooks();
    init_style();
    init_throttle();
    init_three();
    init_displacement_sphere_fragment();
    init_displacement_sphere_vertex();
    init_displacement_sphere_module();
    springConfig = {
      stiffness: 30,
      damping: 20,
      mass: 2
    }, DisplacementSphere = (props) => {
      let { theme } = useTheme(), start = useRef14(Date.now()), canvasRef = useRef14(), mouse = useRef14(), renderer = useRef14(), camera = useRef14(), scene = useRef14(), lights = useRef14(), uniforms = useRef14(), material = useRef14(), geometry = useRef14(), sphere = useRef14(), reduceMotion = useReducedMotion6(), isInViewport = useInViewport(canvasRef), windowSize = useWindowSize(), rotationX = useSpring2(0, springConfig), rotationY = useSpring2(0, springConfig);
      return useEffect14(() => {
        let { innerWidth, innerHeight } = window;
        return mouse.current = new Vector2(0.8, 0.5), renderer.current = new WebGLRenderer({
          canvas: canvasRef.current,
          antialias: !1,
          alpha: !0,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), renderer.current.setSize(innerWidth, innerHeight), renderer.current.setPixelRatio(1), renderer.current.outputColorSpace = LinearSRGBColorSpace, camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100), camera.current.position.z = 52, scene.current = new Scene(), material.current = new MeshPhongMaterial(), material.current.onBeforeCompile = (shader) => {
          uniforms.current = UniformsUtils.merge(
            [
              shader.uniforms,
              { time: { type: "f", value: 0 } }
            ]
          ), shader.uniforms = uniforms.current, shader.vertexShader = displacement_sphere_vertex_default, shader.fragmentShader = displacement_sphere_fragment_default;
        }, startTransition(() => {
          geometry.current = new SphereGeometry(32, 128, 128), sphere.current = new Mesh(geometry.current, material.current), sphere.current.position.z = 0, sphere.current.modifier = Math.random(), scene.current.add(sphere.current);
        }), () => {
          cleanScene(scene.current), cleanRenderer(renderer.current);
        };
      }, []), useEffect14(() => {
        let dirLight = new DirectionalLight(16777215, theme === "light" ? 1.8 : 2), ambientLight = new AmbientLight(16777215, theme === "light" ? 2.7 : 0.4);
        return dirLight.position.z = 200, dirLight.position.x = 100, dirLight.position.y = 100, lights.current = [dirLight, ambientLight], lights.current.forEach((light2) => scene.current.add(light2)), () => {
          removeLights(lights.current);
        };
      }, [theme]), useEffect14(() => {
        let { width, height } = windowSize, adjustedHeight = height + height * 0.3;
        renderer.current.setSize(width, adjustedHeight), camera.current.aspect = width / adjustedHeight, camera.current.updateProjectionMatrix(), reduceMotion && renderer.current.render(scene.current, camera.current), width <= media.mobile ? (sphere.current.position.x = 14, sphere.current.position.y = 10) : width <= media.tablet ? (sphere.current.position.x = 18, sphere.current.position.y = 14) : (sphere.current.position.x = 22, sphere.current.position.y = 16);
      }, [reduceMotion, windowSize]), useEffect14(() => {
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
      }, [isInViewport, reduceMotion, rotationX, rotationY]), useEffect14(() => {
        let animation, animate2 = () => {
          animation = requestAnimationFrame(animate2), uniforms.current !== void 0 && (uniforms.current.time.value = 5e-5 * (Date.now() - start.current)), sphere.current.rotation.z += 1e-3, sphere.current.rotation.x = rotationX.get(), sphere.current.rotation.y = rotationY.get(), renderer.current.render(scene.current, camera.current);
        };
        return !reduceMotion && isInViewport ? animate2() : renderer.current.render(scene.current, camera.current), () => {
          cancelAnimationFrame(animation);
        };
      }, [isInViewport, reduceMotion, rotationX, rotationY]), /* @__PURE__ */ jsx30(Transition, { in: !0, timeout: 3e3, nodeRef: canvasRef, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx30(
        "canvas",
        {
          "aria-hidden": !0,
          className: displacement_sphere_module_default.canvas,
          "data-visible": visible,
          ref: nodeRef,
          ...props
        }
      ) });
    };
  }
});

// app/assets/iphone-11.glb
var iphone_11_default, init_iphone_11 = __esm({
  "app/assets/iphone-11.glb"() {
    iphone_11_default = "/build/_assets/iphone-11-S4EFIVYB.glb";
  }
});

// app/assets/macbook-pro.glb
var macbook_pro_default, init_macbook_pro = __esm({
  "app/assets/macbook-pro.glb"() {
    macbook_pro_default = "/build/_assets/macbook-pro-C6DU7EB5.glb";
  }
});

// app/components/model/device-models.js
var ModelAnimationType, deviceModels, init_device_models = __esm({
  "app/components/model/device-models.js"() {
    init_iphone_11();
    init_macbook_pro();
    ModelAnimationType = {
      SpringUp: "spring-up",
      LaptopOpen: "laptop-open"
    }, deviceModels = {
      phone: {
        url: iphone_11_default,
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.SpringUp
      },
      laptop: {
        url: macbook_pro_default,
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen
      }
    };
  }
});

// app/components/model/model.module.css
var model_module_default, init_model_module = __esm({
  "app/components/model/model.module.css"() {
    model_module_default = { model: "qMqUg", canvas: "iryn2" };
  }
});

// app/components/model/model.jsx
import { animate, useReducedMotion as useReducedMotion7, useSpring as useSpring3 } from "framer-motion";
import {
  createRef,
  startTransition as startTransition2,
  useCallback as useCallback4,
  useEffect as useEffect16,
  useRef as useRef15,
  useState as useState14
} from "react";
import {
  AmbientLight as AmbientLight2,
  Color,
  DirectionalLight as DirectionalLight2,
  Group,
  MathUtils,
  Mesh as Mesh2,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera,
  PerspectiveCamera as PerspectiveCamera2,
  PlaneGeometry,
  SRGBColorSpace,
  Scene as Scene2,
  ShaderMaterial,
  Vector3,
  WebGLRenderTarget,
  WebGLRenderer as WebGLRenderer2
} from "three";
import { HorizontalBlurShader, VerticalBlurShader } from "three-stdlib";
import { jsx as jsx33, jsxs as jsxs21 } from "react/jsx-runtime";
var MeshType, rotationSpringConfig, Model, Device, init_model = __esm({
  "app/components/model/model.jsx"() {
    init_hooks();
    init_image();
    init_style();
    init_three();
    init_device_models();
    init_throttle();
    init_model_module();
    MeshType = {
      Frame: "Frame",
      Logo: "Logo",
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
      let [loaded, setLoaded] = useState14(!1), container = useRef15(), canvas = useRef15(), camera = useRef15(), modelGroup = useRef15(), scene = useRef15(), renderer = useRef15(), shadowGroup = useRef15(), renderTarget = useRef15(), renderTargetBlur = useRef15(), shadowCamera = useRef15(), depthMaterial = useRef15(), horizontalBlurMaterial = useRef15(), verticalBlurMaterial = useRef15(), plane = useRef15(), lights = useRef15(), blurPlane = useRef15(), fillPlane = useRef15(), isInViewport = useInViewport(container, !1, { threshold: 0.2 }), reduceMotion = useReducedMotion7(), rotationX = useSpring3(0, rotationSpringConfig), rotationY = useSpring3(0, rotationSpringConfig);
      useEffect16(() => {
        let { clientWidth, clientHeight } = container.current;
        renderer.current = new WebGLRenderer2({
          canvas: canvas.current,
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
      let blurShadow = useCallback4((amount) => {
        blurPlane.current.visible = !0, blurPlane.current.material = horizontalBlurMaterial.current, blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture, horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256), renderer.current.setRenderTarget(renderTargetBlur.current), renderer.current.render(blurPlane.current, shadowCamera.current), blurPlane.current.material = verticalBlurMaterial.current, blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture, verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256), renderer.current.setRenderTarget(renderTarget.current), renderer.current.render(blurPlane.current, shadowCamera.current), blurPlane.current.visible = !1;
      }, []), renderFrame = useCallback4(() => {
        let initialBackground = scene.current.background;
        scene.current.background = null, scene.current.overrideMaterial = depthMaterial.current, renderer.current.setRenderTarget(renderTarget.current), renderer.current.render(scene.current, shadowCamera.current), scene.current.overrideMaterial = null, blurShadow(5), blurShadow(5 * 0.4), renderer.current.setRenderTarget(null), scene.current.background = initialBackground, modelGroup.current.rotation.x = rotationX.get(), modelGroup.current.rotation.y = rotationY.get(), renderer.current.render(scene.current, camera.current);
      }, [blurShadow, rotationX, rotationY]);
      return useEffect16(() => {
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
      }, [isInViewport, reduceMotion, rotationX, rotationY]), useEffect16(() => {
        let handleResize = () => {
          if (!container.current)
            return;
          let { clientWidth, clientHeight } = container.current;
          renderer.current.setSize(clientWidth, clientHeight), camera.current.aspect = clientWidth / clientHeight, camera.current.updateProjectionMatrix(), renderFrame();
        };
        return window.addEventListener("resize", handleResize), handleResize(), () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [renderFrame]), /* @__PURE__ */ jsxs21(
        "div",
        {
          className: classes(model_module_default.model, className),
          "data-loaded": loaded,
          style: cssProps({ delay: numToMs(showDelay) }, style),
          ref: container,
          role: "img",
          "aria-label": alt,
          ...rest,
          children: [
            /* @__PURE__ */ jsx33("canvas", { className: model_module_default.canvas, ref: canvas }),
            models.map(
              (model, index) => /* @__PURE__ */ jsx33(
                Device,
                {
                  renderer,
                  modelGroup,
                  show,
                  showDelay,
                  renderFrame,
                  index,
                  setLoaded,
                  onLoad,
                  model
                },
                JSON.stringify(model.position)
              )
            )
          ]
        }
      );
    }, Device = ({
      renderer,
      model,
      modelGroup,
      renderFrame,
      index,
      showDelay,
      setLoaded,
      onLoad,
      show
    }) => {
      let [loadDevice, setLoadDevice] = useState14(), reduceMotion = useReducedMotion7(), placeholderScreen = createRef();
      useEffect16(() => {
        let applyScreenTexture = async (texture, node) => {
          texture.colorSpace = SRGBColorSpace, texture.flipY = !1, texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy(), texture.generateMipmaps = !1, await renderer.current.initTexture(texture), node.material.color = new Color(16777215), node.material.transparent = !0, node.material.map = texture;
        };
        setLoadDevice({ start: async () => {
          let { texture, position, url: url2 } = model, loadFullResTexture, playAnimation, [placeholder, gltf] = await Promise.all(
            [
              await textureLoader.loadAsync(texture.placeholder),
              await modelLoader.loadAsync(url2)
            ]
          );
          modelGroup.current.add(gltf.scene), gltf.scene.traverse(async (node) => {
            node.material && (node.material.color = new Color(2039845)), node.name === MeshType.Screen && (placeholderScreen.current = node.clone(), placeholderScreen.current.material = node.material.clone(), node.parent.add(placeholderScreen.current), placeholderScreen.current.material.opacity = 1, placeholderScreen.current.position.z += 1e-3, applyScreenTexture(placeholder, placeholderScreen.current), loadFullResTexture = async () => {
              let image = await resolveSrcFromSrcSet(texture), fullSize = await textureLoader.loadAsync(image);
              await applyScreenTexture(fullSize, node), animate(1, 0, {
                onUpdate: (value) => {
                  placeholderScreen.current.material.opacity = value, renderFrame();
                }
              });
            });
          });
          let targetPosition = new Vector3(position.x, position.y, position.z);
          return reduceMotion && gltf.scene.position.set(...targetPosition.toArray()), model.animation === ModelAnimationType.SpringUp && (playAnimation = () => {
            let startPosition = new Vector3(
              targetPosition.x,
              targetPosition.y - 1,
              targetPosition.z
            );
            gltf.scene.position.set(...startPosition.toArray()), animate(startPosition.y, targetPosition.y, {
              type: "spring",
              delay: (300 * index + showDelay) / 1e3,
              stiffness: 60,
              damping: 20,
              mass: 1,
              restSpeed: 1e-4,
              restDelta: 1e-4,
              onUpdate: (value) => {
                gltf.scene.position.y = value, renderFrame();
              }
            });
          }), model.animation === ModelAnimationType.LaptopOpen && (playAnimation = () => {
            let frameNode = gltf.scene.children.find(
              (node) => node.name === MeshType.Frame
            ), startRotation = new Vector3(MathUtils.degToRad(90), 0, 0), endRotation = new Vector3(0, 0, 0);
            return gltf.scene.position.set(...targetPosition.toArray()), frameNode.rotation.set(...startRotation.toArray()), animate(startRotation.x, endRotation.x, {
              type: "spring",
              delay: (300 * index + showDelay + 300) / 1e3,
              stiffness: 80,
              damping: 20,
              restSpeed: 1e-4,
              restDelta: 1e-4,
              onUpdate: (value) => {
                frameNode.rotation.x = value, renderFrame();
              }
            });
          }), { loadFullResTexture, playAnimation };
        } });
      }, []), useEffect16(() => {
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

// app/components/model/index.js
var model_exports = {};
__export(model_exports, {
  Model: () => Model
});
var init_model2 = __esm({
  "app/components/model/index.js"() {
    init_model();
  }
});

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
import { createRequestHandler } from "@remix-run/node";
var entry_server_default = createRequestHandler({
  build: server_build_exports,
  mode: "production"
});

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
init_theme_provider2();
init_gotham_book();
init_gotham_medium();
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation as useNavigation2,
  useRouteError
} from "@remix-run/react";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { useEffect as useEffect12 } from "react";

// app/assets/notfound.jpg
var notfound_default = "/build/_assets/notfound-ZN6XUIXQ.jpg";

// app/assets/notfound.mp4
var notfound_default2 = "/build/_assets/notfound-USYXZ2OY.mp4";

// app/assets/flatline.png
var flatline_default = "/build/_assets/flatline-JWOYUSTO.png";

// app/assets/flatline.mp4
var flatline_default2 = "/build/_assets/flatline-UYYGGDOS.mp4";

// app/components/icon/icon.jsx
init_style();

// app/components/icon/icon.module.css
var icon_module_default = { icon: "r1Pyw" };

// app/components/icon/icon.jsx
import { forwardRef } from "react";

// app/components/icon/icons.svg
var icons_default = "/build/_assets/icons-GMFDO5DU.svg";

// app/components/icon/icon.jsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Icon = forwardRef(({ icon, className, size, ...rest }, ref) => /* @__PURE__ */ jsx2(
  "svg",
  {
    "aria-hidden": !0,
    ref,
    className: classes(icon_module_default.icon, className),
    width: size || 24,
    height: size || 24,
    ...rest,
    children: /* @__PURE__ */ jsx2("use", { href: `${icons_default}#${icon}` })
  }
));

// app/components/text/text.jsx
init_style();

// app/components/text/text.module.css
var text_module_default = { text: "KmYWM" };

// app/components/text/text.jsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Text = ({
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
    className: classes(text_module_default.text, className),
    "data-align": align,
    "data-size": size,
    "data-weight": weight,
    "data-secondary": secondary,
    ...rest,
    children
  }
);

// app/components/loader/loader.jsx
init_style();
import { useReducedMotion } from "framer-motion";
import { forwardRef as forwardRef2 } from "react";

// app/components/loader/loader.module.css
var loader_module_default = { loader: "CLh4a", text: "hJb7K", span: "HPbpu", loaderSpan: "WKqtW" };

// app/components/loader/loader.jsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Loader = forwardRef2(
  ({ className, style, width = 32, height = 4, text = "Loading...", center, ...rest }, ref) => useReducedMotion() ? /* @__PURE__ */ jsx4(Text, { className: classes(loader_module_default.text, className), weight: "medium", ...rest, children: text }) : /* @__PURE__ */ jsx4(
    "div",
    {
      ref,
      className: classes(loader_module_default.loader, className),
      "data-center": center,
      style: cssProps({ width, height }, style),
      ...rest,
      children: /* @__PURE__ */ jsx4("div", { className: loader_module_default.span })
    }
  )
);

// app/components/button/button.jsx
init_transition2();
init_style();
import { Link } from "@remix-run/react";
import { forwardRef as forwardRef3 } from "react";

// app/components/button/button.module.css
var button_module_default = { button: "SARA3", text: "_4sqkJ", loader: "VfprI", icon: "eDsbl" };

// app/components/button/button.jsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function isExternalLink(href) {
  return href?.includes("://");
}
var Button = forwardRef3(({ href, ...rest }, ref) => isExternalLink(href) || !href ? /* @__PURE__ */ jsx6(ButtonContent, { href, ref, ...rest }) : /* @__PURE__ */ jsx6(
  ButtonContent,
  {
    unstable_viewTransition: !0,
    as: Link,
    prefetch: "intent",
    to: href,
    ref,
    ...rest
  }
)), ButtonContent = forwardRef3(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon,
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
        className: classes(button_module_default.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon && /* @__PURE__ */ jsx6(
            Icon,
            {
              className: button_module_default.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon
            }
          ),
          !!children && /* @__PURE__ */ jsx6("span", { className: button_module_default.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx6(
            Icon,
            {
              className: button_module_default.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx6(Transition, { unmount: !0, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx6(
            Loader,
            {
              ref: nodeRef,
              className: button_module_default.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);

// app/components/visually-hidden/visually-hidden.jsx
init_style();
import { forwardRef as forwardRef4 } from "react";

// app/components/visually-hidden/visually-hidden.module.css
var visually_hidden_module_default = { hidden: "JJv3L" };

// app/components/visually-hidden/visually-hidden.jsx
import { jsx as jsx7 } from "react/jsx-runtime";
var VisuallyHidden = forwardRef4(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => /* @__PURE__ */ jsx7(
    Component,
    {
      className: classes(visually_hidden_module_default.hidden, className),
      "data-hidden": !visible && !showOnFocus,
      "data-show-on-focus": showOnFocus,
      ref,
      ...rest,
      children
    }
  )
);

// app/components/decoder-text/decoder-text.jsx
import { useReducedMotion as useReducedMotion2, useSpring } from "framer-motion";
import { memo, useEffect as useEffect2, useRef as useRef2 } from "react";

// app/utils/delay.js
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// app/components/decoder-text/decoder-text.jsx
init_style();

// app/components/decoder-text/decoder-text.module.css
var decoder_text_module_default = { text: "BHlln", glyph: "atVYn", value: "NNNE7" };

// app/components/decoder-text/decoder-text.jsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var glyphs = [
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
function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position)
      return { type: CharType.Value, value };
    if (position % 1 < 0.5) {
      let rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index].value };
  });
}
var DecoderText = memo(
  ({ text, start = !0, delay: startDelay = 0, className, ...rest }) => {
    let output = useRef2([{ type: CharType.Glyph, value: "" }]), container = useRef2(), reduceMotion = useReducedMotion2(), decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    return useEffect2(() => {
      let containerInstance = container.current, content = text.split(""), animation, renderOutput = () => {
        let characterMap = output.current.map((item) => `<span class="${decoder_text_module_default[item.type]}">${item.value}</span>`);
        containerInstance.innerHTML = characterMap.join("");
      }, unsubscribeSpring = decoderSpring.on("change", (value) => {
        output.current = shuffle(content, output.current, value), renderOutput();
      });
      return start && !animation && !reduceMotion && (async () => {
        await delay(startDelay), decoderSpring.set(content.length);
      })(), reduceMotion && (output.current = content.map((value, index) => ({
        type: CharType.Value,
        value: content[index]
      })), renderOutput()), () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]), /* @__PURE__ */ jsxs3("span", { className: classes(decoder_text_module_default.text, className), ...rest, children: [
      /* @__PURE__ */ jsx8(VisuallyHidden, { className: decoder_text_module_default.label, children: text }),
      /* @__PURE__ */ jsx8("span", { "aria-hidden": !0, className: decoder_text_module_default.content, ref: container })
    ] });
  }
);

// app/components/heading/heading.jsx
init_style();
import { Fragment } from "react";

// app/components/heading/heading.module.css
var heading_module_default = { heading: "AdbmM" };

// app/components/heading/heading.jsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  let clampedLevel = Math.min(Math.max(level, 0), 5), Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx9(Fragment, { children: /* @__PURE__ */ jsx9(
    Component,
    {
      className: classes(heading_module_default.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};

// app/layouts/error/error.jsx
init_transition2();

// app/layouts/error/error.module.css
var error_module_default = { page: "SuB3S", videoContainer: "ogiG-", video: "tJ3c4", credit: "_0Go7a", details: "JIUmS", text: "CCYV5", title: "rojWg", titleFlatline: "XbGLm", subheading: "_13Erg", description: "Kr-QX", button: "g2Qxx" };

// app/components/image/image.jsx
init_theme_provider2();
init_hooks();
init_image();
init_style();
import { useReducedMotion as useReducedMotion5 } from "framer-motion";
import { Fragment as Fragment2, useCallback as useCallback3, useEffect as useEffect9, useRef as useRef7, useState as useState6 } from "react";

// app/components/image/image.module.css
var image_module_default = { image: "tpmj9", container: "_-6RB5", elementWrapper: "wili2", placeholder: "Y1AuN", element: "BJ3ki", button: "_9e7NM" };

// app/components/image/image.jsx
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var Image2 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  ...rest
}) => {
  let [loaded, setLoaded] = useState6(!1), { theme } = useTheme(), containerRef = useRef7(), src = baseSrc || srcSet.split(" ")[0], inViewport = useInViewport(containerRef, !getIsVideo(src)), onLoad = useCallback3(() => {
    setLoaded(!0);
  }, []);
  return /* @__PURE__ */ jsx10(
    "div",
    {
      className: classes(image_module_default.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx10(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder,
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
  placeholder,
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
  let reduceMotion = useReducedMotion5(), [showPlaceholder, setShowPlaceholder] = useState6(!0), [playing, setPlaying] = useState6(!reduceMotion), [videoSrc, setVideoSrc] = useState6(), [videoInteracted, setVideoInteracted] = useState6(!1), placeholderRef = useRef7(), videoRef = useRef7(), isVideo = getIsVideo(src), showFullRes = inViewport, hasMounted = useHasMounted();
  useEffect9(() => {
    isVideo && srcSet ? (async () => {
      let resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    })() : isVideo && setVideoSrc(src);
  }, [isVideo, sizes, src, srcSet]), useEffect9(() => {
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
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: image_module_default.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs4(Fragment2, { children: [
          /* @__PURE__ */ jsx10(
            "video",
            {
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: image_module_default.element,
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
          !noPauseButton && /* @__PURE__ */ jsxs4(Button, { className: image_module_default.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx10(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx10(
          "img",
          {
            className: image_module_default.element,
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
        showPlaceholder && /* @__PURE__ */ jsx10(
          "img",
          {
            "aria-hidden": !0,
            className: image_module_default.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder,
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
function getIsVideo(src) {
  return typeof src == "string" && src.includes(".mp4");
}

// app/layouts/error/error-flatline.svg
var error_flatline_default = "/build/_assets/error-flatline-XVZJ4GZR.svg";

// app/layouts/error/error.jsx
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
function Error2({ error }) {
  let flatlined = !error.status, getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn\u2019t exist or was deleted. Or perhaps you don\u2019t exist and this webpage couldn\u2019t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error.statusText || error.data || error.toString()
        };
    }
  }, { summary, message } = getMessage();
  return /* @__PURE__ */ jsxs5("section", { className: error_module_default.page, children: [
    flatlined && /* @__PURE__ */ jsx11(
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
    /* @__PURE__ */ jsx11(Transition, { in: !0, children: ({ visible }) => /* @__PURE__ */ jsxs5(Fragment3, { children: [
      /* @__PURE__ */ jsx11("div", { className: error_module_default.details, children: /* @__PURE__ */ jsxs5("div", { className: error_module_default.text, children: [
        !flatlined && /* @__PURE__ */ jsx11(
          Heading,
          {
            className: error_module_default.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs5(
          Heading,
          {
            className: error_module_default.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx11("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx11("use", { href: `${error_flatline_default}#skull` }) }),
              /* @__PURE__ */ jsx11(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx11(
          Heading,
          {
            "aria-hidden": !0,
            className: error_module_default.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx11(DecoderText, { text: summary, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx11(Text, { className: error_module_default.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx11(
          Button,
          {
            secondary: !0,
            iconHoverShift: !0,
            className: error_module_default.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx11(
          Button,
          {
            secondary: !0,
            iconHoverShift: !0,
            className: error_module_default.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs5("div", { className: error_module_default.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx11(
          Image2,
          {
            reveal: !0,
            cover: !0,
            noPauseButton: !0,
            delay: 600,
            className: error_module_default.video,
            src: flatlined ? flatline_default2 : notfound_default2,
            placeholder: flatlined ? flatline_default : notfound_default
          }
        ),
        flatlined ? /* @__PURE__ */ jsx11(
          "a",
          {
            className: error_module_default.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx11(
          "a",
          {
            className: error_module_default.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}

// app/components/monogram/monogram.jsx
init_style();
import { forwardRef as forwardRef5, useId } from "react";

// app/components/monogram/monogram.module.css
var monogram_module_default = { monogram: "UE7Gm", highlight: "VBeuZ" };

// app/components/monogram/monogram.jsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var Monogram = forwardRef5(({ highlight, className, ...props }, ref) => {
  let clipId = `${useId()}monogram-clip`;
  return /* @__PURE__ */ jsxs6(
    "svg",
    {
      "aria-hidden": !0,
      className: classes(monogram_module_default.monogram, className),
      width: "48",
      height: "29",
      viewBox: "0 0 48 26",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx12("defs", { children: /* @__PURE__ */ jsx12("clipPath", { id: clipId, children: /* @__PURE__ */ jsx12(
          "path",
          {
            d: "M24 6L8 42h6l3.5-8h13L34 42h6L24 6zm-4.5 16L24 12l4.5 10h-9z",
            fill: "currentColor"
          }
        ) }) }),
        /* @__PURE__ */ jsx12("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight && /* @__PURE__ */ jsx12("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx12("rect", { className: monogram_module_default.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});

// app/layouts/navbar/navbar.jsx
init_theme_provider2();
init_theme();
init_transition2();
init_hooks();
init_style();
import { Link as RouterLink, useLocation as useLocation2 } from "@remix-run/react";
import { useEffect as useEffect10, useRef as useRef8, useState as useState7 } from "react";

// app/layouts/navbar/nav-toggle.module.css
var nav_toggle_module_default = { toggle: "gctfR", inner: "O1kfu", icon: "lwp7P" };

// app/layouts/navbar/nav-toggle.jsx
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var NavToggle = ({ menuOpen, ...rest }) => /* @__PURE__ */ jsx13(
  Button,
  {
    iconOnly: !0,
    className: nav_toggle_module_default.toggle,
    "aria-label": "Menu",
    "aria-expanded": menuOpen,
    ...rest,
    children: /* @__PURE__ */ jsxs7("div", { className: nav_toggle_module_default.inner, children: [
      /* @__PURE__ */ jsx13(Icon, { className: nav_toggle_module_default.icon, "data-menu": !0, "data-open": menuOpen, icon: "menu" }),
      /* @__PURE__ */ jsx13(
        Icon,
        {
          className: nav_toggle_module_default.icon,
          "data-close": !0,
          "data-open": menuOpen,
          icon: "close"
        }
      )
    ] })
  }
);

// app/layouts/navbar/theme-toggle.jsx
import { useId as useId2 } from "react";
init_theme_provider2();

// app/layouts/navbar/theme-toggle.module.css
var theme_toggle_module_default = { toggle: "ls80m", circle: "jvMd-", mask: "CPuNg", path: "rq6eK" };

// app/layouts/navbar/theme-toggle.jsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var ThemeToggle = ({ isMobile, ...rest }) => {
  let id = useId2(), { toggleTheme } = useTheme(), maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx14(
    Button,
    {
      iconOnly: !0,
      className: theme_toggle_module_default.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs8("svg", { "aria-hidden": !0, className: theme_toggle_module_default.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx14("defs", { children: /* @__PURE__ */ jsxs8("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx14("circle", { className: theme_toggle_module_default.circle, "data-mask": !0, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx14("circle", { className: theme_toggle_module_default.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx14(
          "path",
          {
            className: theme_toggle_module_default.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx14(
          "circle",
          {
            className: theme_toggle_module_default.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};

// app/config.json
var config_default = {
  name: "Aadhithiya J",
  role: "AI Engineer",
  disciplines: ["Machine Learning", "Data Science", "CyberSecurity", "Dive In!"],
  url: "https://www.linkedin.com/in/aadhi-j-8a0671292",
  figma: "#",
  github: "Aadhi",
  repo: "https://github.com/Aadhi-07",
  ascii: `  \u250C\u2500\u2500\u2500\u2510
  \u2502   \u2502
  \u2502   \u2502
  \u251C\u2500\u2500\u2500\u2524
  \u2502   \u2502
  \u2502   \u2502`
};

// app/layouts/navbar/nav-data.js
var navLinks = [
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
    url: `https://github.com/${config_default.github}`,
    icon: "github"
  }
];

// app/layouts/navbar/navbar.module.css
var navbar_module_default = { navbar: "_46DuX", logo: "Z2qRL", nav: "DIzD5", navList: "a1gft", navLink: "_4J-M7", navIcons: "a2SJE", navIconLink: "VohwH", navIcon: "svnGC", mobileNav: "L4ba-", mobileNavLink: "n-kxj" };

// app/layouts/navbar/navbar.jsx
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var Navbar = () => {
  let [current, setCurrent] = useState7(), [menuOpen, setMenuOpen] = useState7(!1), [target, setTarget] = useState7(), { theme } = useTheme(), location = useLocation2(), windowSize = useWindowSize(), headerRef = useRef8(), isMobile = windowSize.width <= media.mobile || windowSize.height <= 696, scrollToHash = useScrollToHash();
  useEffect10(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]), useEffect10(() => {
    !target || location.pathname !== "/" || (setCurrent(`${location.pathname}${target}`), scrollToHash(target, () => setTarget(null)));
  }, [location.pathname, scrollToHash, target]), useEffect10(() => {
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
  return /* @__PURE__ */ jsxs9("header", { className: navbar_module_default.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx15(
      RouterLink,
      {
        unstable_viewTransition: !0,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": !0,
        className: navbar_module_default.logo,
        "aria-label": `${config_default.name}, ${config_default.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx15(Monogram, { highlight: !0 })
      }
    ),
    /* @__PURE__ */ jsx15(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs9("nav", { className: navbar_module_default.nav, children: [
      /* @__PURE__ */ jsx15("div", { className: navbar_module_default.navList, children: navLinks.map(
        ({ label, pathname }) => /* @__PURE__ */ jsx15(
          RouterLink,
          {
            unstable_viewTransition: !0,
            prefetch: "intent",
            to: pathname,
            "data-navbar-item": !0,
            className: navbar_module_default.navLink,
            "aria-current": getCurrent(pathname),
            onClick: handleNavItemClick,
            children: label
          },
          label
        )
      ) }),
      /* @__PURE__ */ jsx15(NavbarIcons, { desktop: !0 })
    ] }),
    /* @__PURE__ */ jsx15(Transition, { unmount: !0, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs9("nav", { className: navbar_module_default.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(
        ({ label, pathname }, index) => /* @__PURE__ */ jsx15(
          RouterLink,
          {
            unstable_viewTransition: !0,
            prefetch: "intent",
            to: pathname,
            className: navbar_module_default.mobileNavLink,
            "data-visible": visible,
            "aria-current": getCurrent(pathname),
            onClick: handleMobileNavClick,
            style: cssProps({
              transitionDelay: numToMs(
                Number(msToNum(tokens.base.durationS)) + index * 50
              )
            }),
            children: label
          },
          label
        )
      ),
      /* @__PURE__ */ jsx15(NavbarIcons, {}),
      /* @__PURE__ */ jsx15(ThemeToggle, { isMobile: !0 })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx15(ThemeToggle, { "data-navbar-item": !0 })
  ] });
}, NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx15("div", { className: navbar_module_default.navIcons, children: socialLinks.map(
  ({ label, url: url2, icon }) => /* @__PURE__ */ jsx15(
    "a",
    {
      "data-navbar-item": desktop || void 0,
      className: navbar_module_default.navIconLink,
      "aria-label": label,
      href: url2,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ jsx15(Icon, { className: navbar_module_default.navIcon, icon })
    },
    label
  )
) });

// app/components/progress/progress.jsx
import { useNavigation } from "@remix-run/react";
import { useRef as useRef9, useEffect as useEffect11, useState as useState8 } from "react";

// app/components/progress/progress.module.css
var progress_module_default = { progress: "_06fop" };

// app/components/progress/progress.jsx
import { jsx as jsx16 } from "react/jsx-runtime";
function Progress() {
  let [animationComplete, setAnimationComplete] = useState8(!1), [visible, setVisible] = useState8(!1), { state } = useNavigation(), progressRef = useRef9(), timeout = useRef9(0);
  return useEffect11(() => {
    clearTimeout(timeout.current), state !== "idle" ? timeout.current = setTimeout(() => {
      setVisible(!0);
    }, 500) : animationComplete && (timeout.current = setTimeout(() => {
      setVisible(!1);
    }, 300));
  }, [state, animationComplete]), useEffect11(() => {
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
  }, [state]), /* @__PURE__ */ jsx16(
    "div",
    {
      className: progress_module_default.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}

// app/root.module.css
var root_module_default = { container: "UjqpW", skip: "UAFb7" };

// app/root.jsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var links = () => [
  {
    rel: "preload",
    href: gotham_medium_default,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: gotham_book_default,
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
], loader = async ({ request, context }) => {
  let { url: url2 } = request, { pathname } = new URL(url2), pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2, canonicalUrl = `${config_default.url}${pathnameSliced}`, { getSession, commitSession } = createCookieSessionStorage({
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
function App() {
  let { canonicalUrl, theme } = useLoaderData(), fetcher = useFetcher(), { state } = useNavigation2();
  fetcher.formData?.has("theme") && (theme = fetcher.formData.get("theme"));
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme || (theme === "dark" ? "light" : "dark") },
      { action: "/api/set-theme", method: "post" }
    );
  }
  return useEffect12(() => {
    console.info(
      `${config_default.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config_default.repo}

`
    );
  }, []), /* @__PURE__ */ jsxs10("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs10("head", { children: [
      /* @__PURE__ */ jsx17("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx17("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx17("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx17(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx17("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx17(Meta, {}),
      /* @__PURE__ */ jsx17(Links, {}),
      /* @__PURE__ */ jsx17("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs10("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs10(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx17(Progress, {}),
        /* @__PURE__ */ jsx17(VisuallyHidden, { showOnFocus: !0, as: "a", className: root_module_default.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx17(Navbar, {}),
        /* @__PURE__ */ jsx17(
          "main",
          {
            id: "main-content",
            className: root_module_default.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx17(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx17(ScrollRestoration, {}),
      /* @__PURE__ */ jsx17(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let error = useRouteError();
  return /* @__PURE__ */ jsxs10("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs10("head", { children: [
      /* @__PURE__ */ jsx17("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx17("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx17("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx17("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx17("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx17(Meta, {}),
      /* @__PURE__ */ jsx17(Links, {})
    ] }),
    /* @__PURE__ */ jsxs10("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx17(Error2, { error }),
      /* @__PURE__ */ jsx17(ScrollRestoration, {}),
      /* @__PURE__ */ jsx17(Scripts, {})
    ] })
  ] });
}

// mdx:routes\articles.modern-styling-in-react.mdx
var articles_modern_styling_in_react_exports = {};
__export(articles_modern_styling_in_react_exports, {
  attributes: () => attributes,
  default: () => articles_modern_styling_in_react_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta
});
import { Fragment as Fragment4, jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var attributes = {
  title: "You (probably) don't need CSS-in-JS",
  abstract: "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
  date: "2022-05-01",
  banner: "/static/modern-styling-in-react-banner.jpg",
  featured: !0
};
function _createMdxContent(props) {
  let _components = Object.assign({
    p: "p",
    a: "a",
    ol: "ol",
    li: "li",
    strong: "strong",
    h2: "h2",
    h3: "h3",
    em: "em",
    pre: "pre",
    code: "code",
    hr: "hr"
  }, props.components), { Embed } = _components;
  return Embed || _missingMdxReference("Embed", !0), /* @__PURE__ */ jsxs11(Fragment4, { children: [
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "When I first tried CSS-in-JS libraries like ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://styled-components.com/", children: "Styled Components" }),
      " and ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://emotion.sh", children: "Emotion" }),
      ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:" }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.ol, { children: [
      `
`,
      /* @__PURE__ */ jsxs11(_components.li, { children: [
        /* @__PURE__ */ jsx18(_components.strong, { children: "Values:" }),
        " like a color, delay, or position. Anything that represents a single value for a CSS property."
      ] }),
      `
`,
      /* @__PURE__ */ jsxs11(_components.li, { children: [
        /* @__PURE__ */ jsx18(_components.strong, { children: "States:" }),
        " like a primary button variant, or a loading state each having their own set of associated styles."
      ] }),
      `
`
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h2, { children: "Where we are today" }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "Before we get started, for comparison I'll be using SCSS (with ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://css-tricks.com/bem-101/", children: "BEM syntax" }),
      ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://vanilla-extract.style/", children: "Vanilla Extract" }),
      ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "If you're already familiar with the problem, ",
      /* @__PURE__ */ jsx18(_components.a, { href: "#theres-a-better-way-vanilla-css", children: "skip to the solution" }),
      "."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "Values" }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ",
      /* @__PURE__ */ jsx18(_components.em, { children: "value" }),
      " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, children }) {\r
  return (\r
    <button className="button" style={{ backgroundColor: color }}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `// We can pass the \`color\` value into the styled component as a prop\r
function Button({ color, children }) {\r
  return <StyledButton color={color}>{children}</StyledButton>;\r
}\r
\r
// The syntax is a little funky, but now in the styled component's styles\r
// we can use its props as a function\r
const StyledButton = styled.button\`\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: \${props => props.color};\r
\`;
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "States" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, size, primary, children }) {\r
  return (\r
    <button\r
      className={['button', \`button--\${size}\`, primary ? 'button--primary' : null]\r
        .filter(Boolean)\r
        .join(' ')}\r
      style={{ backgroundColor: color }}\r
    >\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-scss", children: `.button {\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
\r
  &--primary {\r
    background-color: $primary-color;\r
  }\r
\r
  &--small {\r
    height: 30px;\r
  }\r
\r
  &--medium {\r
    height: 40px;\r
  }\r
\r
  &--large {\r
    height: 60px;\r
  }\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax." }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "Our JSX, however, isn't faring so well. That string concatenation on the ",
      /* @__PURE__ */ jsx18(_components.code, { children: "className" }),
      " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ",
      /* @__PURE__ */ jsx18(_components.code, { children: "filter(Boolean)" }),
      " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ",
      /* @__PURE__ */ jsx18(_components.code, { children: "classnames" }),
      " package on NPM. But they only make the problem marginally more bearable."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, size, primary, children }) {\r
  return (\r
    <StyledButton color={color}>{children}</StyledButton>\r
  }\r
);\r
\r
const StyledButton = styled.button\`\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
\r
  \${props => props.primary && css\`\r
    background-color: $primary-color;\r
  \`}\r
\r
  \${props => props.size === 'small' && css\`\r
    height: 30px;\r
  \`}\r
\r
  \${props => props.size === 'medium' && css\`\r
    height: 40px;\r
  \`}\r
\r
  \${props => props.size === 'large' && css\`\r
    height: 60px;\r
  \`}\r
\`;
` }) }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "It's not ",
      /* @__PURE__ */ jsx18(_components.em, { children: "terrible" }),
      ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `const StyledButton = styled.button\`\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
\r
  \${props =>\r
    props.primary\r
      ? css\`\r
          height: 60px;\r
          background-color: darkslateblue;\r
        \`\r
      : css\`\r
          height: 40px;\r
          background-color: whitesmoke;\r
        \`}\r
\`;
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.hr, {}),
    `
`,
    /* @__PURE__ */ jsx18(_components.h2, { children: "There's a better way: vanilla CSS" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)." }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ",
      /* @__PURE__ */ jsx18(_components.em, { children: "better" }),
      " than what they have to offer."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "Values" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, children }) {\r
  return (\r
    <button className="button" style={{ '--color': color }}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: var(--color);\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      `Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `,
      /* @__PURE__ */ jsx18(_components.code, { children: ".button" }),
      " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `// All we need to pass is the value needed by the transform, rather than\r
// polluting our jsx with the full transform in the inline style\r
function Button({ offset, children }) {\r
  return (\r
    <button className="button" style={{ '--offset': \`\${offset}px\` }}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  border: 0;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
  transform: translate3d(0, var(--offset), 0);\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      `There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `,
      /* @__PURE__ */ jsx18(_components.a, { href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/", children: "This article from Lea Verou" }),
      " does a great job at explaining this technique."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "States" }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ",
      /* @__PURE__ */ jsx18(_components.code, { children: "&--modifier" }),
      " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, size, primary, children }) {\r
  return (\r
    <button className="button" data-size={size} data-primary={primary}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
\r
  &[data-primary='true'] {\r
    background-color: var(--colorPrimary);\r
  }\r
\r
  &[data-size='small'] {\r
    height: 30px;\r
  }\r
\r
  &[data-size='medium'] {\r
    height: 40px;\r
  }\r
\r
  &[data-size='large'] {\r
    height: 60px;\r
  }\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "Have a play with the example button component here:" }),
    `
`,
    /* @__PURE__ */ jsx18(Embed, { src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx" }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ",
      /* @__PURE__ */ jsx18(_components.code, { children: "&--modifier" }),
      " pattern, but I think that's an acceptable tradeoff."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "It may seem kinda ",
      /* @__PURE__ */ jsx18(_components.em, { children: "weird" }),
      " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  &[aria-pressed='true'] {\r
    background-color: gainsboro;\r
  }\r
\r
  &[disabled] {\r
    opacity: 0.4;\r
  }\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://github.com/css-modules/css-modules", children: "CSS Modules" }),
      " which is included out of the box in most React frameworks like Next.js and Create React App."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "Of course, these techniques don't require you to ",
      /* @__PURE__ */ jsx18(_components.em, { children: "only" }),
      " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://www.w3.org/TR/css-nesting-1/", children: "nesting" }),
      " and ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://www.w3.org/TR/css-color-5/#relative-colors", children: "relative colors" }),
      " I think it's becoming less necessary to reach for these tools."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs11(_components.p, { children: [
      "The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://github.com/HamishMW/portfolio", children: "source code" }),
      "."
    ] })
  ] });
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsx18(MDXLayout, { ...props, children: /* @__PURE__ */ jsx18(_createMdxContent, { ...props }) }) : _createMdxContent(props);
}
var articles_modern_styling_in_react_default = MDXContent;
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
var filename = "articles.modern-styling-in-react.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// mdx:routes\articles.hello-world.mdx
var articles_hello_world_exports = {};
__export(articles_hello_world_exports, {
  attributes: () => attributes2,
  default: () => articles_hello_world_default,
  filename: () => filename2,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta2
});
import { Fragment as Fragment5, jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var attributes2 = {
  title: "Hello world: how I built this site",
  abstract: "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  date: "2022-04-21",
  banner: "/static/hello-world-banner.jpg"
};
function _createMdxContent2(props) {
  let _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    img: "img",
    ul: "ul",
    li: "li",
    code: "code",
    h3: "h3"
  }, props.components);
  return /* @__PURE__ */ jsxs12(Fragment5, { children: [
    /* @__PURE__ */ jsx19(_components.h2, { children: "How it all started" }),
    `
`,
    /* @__PURE__ */ jsxs12(_components.p, { children: [
      `Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `,
      /* @__PURE__ */ jsx19(_components.a, { href: "/404", children: "404 page" }),
      "."
    ] }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: /* @__PURE__ */ jsx19(_components.img, { src: "/static/inspiration.png", alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect" }) }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h2, { children: "The first iteration" }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship." }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage." }),
    `
`,
    /* @__PURE__ */ jsxs12(_components.p, { children: [
      "Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ",
      /* @__PURE__ */ jsx19(_components.a, { href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D", children: "Clay Mockups 3D Figma plugin" }),
      "."
    ] }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: /* @__PURE__ */ jsx19(_components.img, { src: "/static/clay-mockups.png", alt: "Thumbnail for my Clay Mockups 3D plugin" }) }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h2, { children: "Migrating to Next.js" }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs." }),
    `
`,
    /* @__PURE__ */ jsxs12(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsx19(_components.li, { children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future." }),
      `
`,
      /* @__PURE__ */ jsx19(_components.li, { children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts." }),
      `
`,
      /* @__PURE__ */ jsxs12(_components.li, { children: [
        "For generating pages from ",
        /* @__PURE__ */ jsx19(_components.code, { children: ".mdx" }),
        " files, I'm using Kent C Dodds' ",
        /* @__PURE__ */ jsx19(_components.a, { href: "https://github.com/kentcdodds/mdx-bundler", children: "mdx-bundler" }),
        ". In combination with Next.js it makes generating pages from ",
        /* @__PURE__ */ jsx19(_components.code, { children: ".mdx" }),
        " files really quick and simple."
      ] }),
      `
`,
      /* @__PURE__ */ jsx19(_components.li, { children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion." }),
      `
`,
      /* @__PURE__ */ jsxs12(_components.li, { children: [
        "3D effects are still all using Three.js, but I've added ",
        /* @__PURE__ */ jsx19(_components.code, { children: "three-stdlib" }),
        " as a better maintained replacement for modules from Three's examples."
      ] }),
      `
`
    ] }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h2, { children: "Not all smooth sailing" }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:" }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h3, { children: "1. Route transitions" }),
    `
`,
    /* @__PURE__ */ jsxs12(_components.p, { children: [
      "There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ",
      /* @__PURE__ */ jsx19(_components.a, { href: "https://github.com/vercel/next.js/issues/17464", children: "the most commented and reacted to issues" }),
      " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ",
      /* @__PURE__ */ jsx19(_components.a, { href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107", children: "hack to fix things" }),
      " from the issue's comments."
    ] }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h3, { children: "2. Scroll restoration" }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility." }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h2, { children: "Looking back, and forward" }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it." }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today." }),
    `
`,
    /* @__PURE__ */ jsx19(_components.h2, { children: "Update: Feb 2024" }),
    `
`,
    /* @__PURE__ */ jsxs12(_components.p, { children: [
      `I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `,
      /* @__PURE__ */ jsx19(_components.a, { href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API", children: "CSS view transitions API" }),
      " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."
    ] }),
    `
`,
    /* @__PURE__ */ jsx19(_components.p, { children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year." })
  ] });
}
function MDXContent2(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsx19(MDXLayout, { ...props, children: /* @__PURE__ */ jsx19(_createMdxContent2, { ...props }) }) : _createMdxContent2(props);
}
var articles_hello_world_default = MDXContent2, filename2 = "articles.hello-world.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta2 = typeof attributes2 < "u" && attributes2.meta, handle2 = typeof attributes2 < "u" && attributes2.handle;

// app/routes/projects.slice/route.js
var route_exports = {};
__export(route_exports, {
  default: () => Slice,
  meta: () => meta3
});

// app/assets/slice-annotation-large.png
var slice_annotation_large_default = "/build/_assets/slice-annotation-large-LJQ3JEQU.png";

// app/assets/slice-annotation-placeholder.png
var slice_annotation_placeholder_default = "/build/_assets/slice-annotation-placeholder-UTVIR27F.png";

// app/assets/slice-annotation.png
var slice_annotation_default = "/build/_assets/slice-annotation-LMJ4SHTG.png";

// app/assets/slice-app-large.jpg
var slice_app_large_default = "/build/_assets/slice-app-large-SQA2X7QL.jpg";

// app/assets/slice-app-placeholder.jpg
var slice_app_placeholder_default = "/build/_assets/slice-app-placeholder-5BEINETE.jpg";

// app/assets/slice-app.jpg
var slice_app_default = "/build/_assets/slice-app-ZLTVDULD.jpg";

// app/assets/slice-background-bar-large.jpg
var slice_background_bar_large_default = "/build/_assets/slice-background-bar-large-JM2XLI7V.jpg";

// app/assets/slice-background-bar-placeholder.jpg
var slice_background_bar_placeholder_default = "/build/_assets/slice-background-bar-placeholder-CC6U754O.jpg";

// app/assets/slice-background-bar.jpg
var slice_background_bar_default = "/build/_assets/slice-background-bar-HPSRTEPD.jpg";

// app/assets/slice-background-large.jpg
var slice_background_large_default = "/build/_assets/slice-background-large-FXC34VWZ.jpg";

// app/assets/slice-background-placeholder.jpg
var slice_background_placeholder_default = "/build/_assets/slice-background-placeholder-3JQ6HPDP.jpg";

// app/assets/slice-background.jpg
var slice_background_default = "/build/_assets/slice-background-3HDNKLRZ.jpg";

// app/assets/slice-irl-placeholder.jpg
var slice_irl_placeholder_default = "/build/_assets/slice-irl-placeholder-RFQ6HNVD.jpg";

// app/assets/slice-irl.jpg
var slice_irl_default = "/build/_assets/slice-irl-3T3HH7DN.jpg";

// app/assets/slice-sidebar-annotations-large.png
var slice_sidebar_annotations_large_default = "/build/_assets/slice-sidebar-annotations-large-FTIP6NCQ.png";

// app/assets/slice-sidebar-annotations-placeholder.png
var slice_sidebar_annotations_placeholder_default = "/build/_assets/slice-sidebar-annotations-placeholder-YFXXAA2E.png";

// app/assets/slice-sidebar-annotations.png
var slice_sidebar_annotations_default = "/build/_assets/slice-sidebar-annotations-5ITXTVIF.png";

// app/assets/slice-sidebar-layers-large.png
var slice_sidebar_layers_large_default = "/build/_assets/slice-sidebar-layers-large-4GTTK7BF.png";

// app/assets/slice-sidebar-layers-placeholder.png
var slice_sidebar_layers_placeholder_default = "/build/_assets/slice-sidebar-layers-placeholder-ROSLNJBM.png";

// app/assets/slice-sidebar-layers.png
var slice_sidebar_layers_default = "/build/_assets/slice-sidebar-layers-7JQOI62D.png";

// app/assets/slice-slides-large.jpg
var slice_slides_large_default = "/build/_assets/slice-slides-large-ULMCGDSJ.jpg";

// app/assets/slice-slides-placeholder.jpg
var slice_slides_placeholder_default = "/build/_assets/slice-slides-placeholder-WF6KXRTC.jpg";

// app/assets/slice-slides.jpg
var slice_slides_default = "/build/_assets/slice-slides-TKNQTCXE.jpg";

// app/components/link/link.jsx
init_style();
import { forwardRef as forwardRef6 } from "react";
import { Link as RouterLink2 } from "@remix-run/react";

// app/components/link/link.module.css
var link_module_default = { link: "LvEEB" };

// app/components/link/link.jsx
import { jsx as jsx20 } from "react/jsx-runtime";
var VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  let isValidExtension = VALID_EXT.includes(href?.split(".").pop());
  return href?.includes("://") || href?.[0] === "#" || isValidExtension;
}
var Link2 = forwardRef6(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    let isExternal = href?.includes("://"), relValue = rel || (isExternal ? "noreferrer noopener" : void 0), targetValue = target || (isExternal ? "_blank" : void 0), linkProps = {
      className: classes(link_module_default.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    return isAnchor(href) ? /* @__PURE__ */ jsx20("a", { ...linkProps, href, children }) : /* @__PURE__ */ jsx20(RouterLink2, { unstable_viewTransition: !0, prefetch: "intent", ...linkProps, to: href, children });
  }
);

// app/components/footer/footer.jsx
init_style();

// app/components/footer/footer.module.css
var footer_module_default = { footer: "KsomK", link: "tCL51", date: "RNpgt" };

// app/components/footer/footer.jsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var Footer = ({ className }) => /* @__PURE__ */ jsx21("footer", { className: classes(footer_module_default.footer, className), children: /* @__PURE__ */ jsxs13(Text, { size: "s", align: "center", children: [
  /* @__PURE__ */ jsx21("span", { className: footer_module_default.date, children: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config_default.name}.` }),
  /* @__PURE__ */ jsx21(Link2, { secondary: !0, className: footer_module_default.link, href: "/humans.txt", target: "_self" })
] }) });

// app/components/section/section.jsx
init_style();
import { forwardRef as forwardRef7 } from "react";

// app/components/section/section.module.css
var section_module_default = { section: "_0LpwB" };

// app/components/section/section.jsx
import { jsx as jsx22 } from "react/jsx-runtime";
var Section = forwardRef7(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx22(Component, { className: classes(section_module_default.section, className), ref, ...rest, children })
);

// app/layouts/project/project.jsx
init_theme();
init_transition2();
init_hooks();
init_style();
import { forwardRef as forwardRef8, useRef as useRef10 } from "react";

// app/layouts/project/project.module.css
var project_module_default = { project: "w6Bx9", section: "JYVPr", sectionInner: "tMr2z", sectionBackground: "dCBAB", backgroundImage: "oD5ZT", backgroundImageElement: "DEKZB", backgroundScrim: "-VMCG", header: "CiZDP", headerContent: "wfPG-", details: "oT9Np", title: "rBDT0", projectFadeSlide: "_6FeYJ", description: "MRRKO", linkButton: "cSZhZ", meta: "-CO3B", metaItem: "sWJAP", image: "lwExx", sectionContent: "or9OZ", sectionHeading: "GErAq", sectionText: "bL-ex", textRow: "sfK04", sectionColumns: "mq-73" };

// app/layouts/project/project.jsx
import { jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";
var initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx23(Section, { className: classes(project_module_default.header, className), as: "section", children: /* @__PURE__ */ jsxs14(
    "div",
    {
      className: project_module_default.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs14("div", { className: project_module_default.details, children: [
          /* @__PURE__ */ jsx23(Heading, { className: project_module_default.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx23(Text, { className: project_module_default.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx23(
            Button,
            {
              secondary: !0,
              iconHoverShift: !0,
              className: project_module_default.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!roles2?.length && /* @__PURE__ */ jsx23("ul", { className: project_module_default.meta, children: roles2?.map(
          (role, index) => /* @__PURE__ */ jsx23(
            "li",
            {
              className: project_module_default.metaItem,
              style: cssProps({ delay: numToMs(initDelay + 300 + index * 140) }),
              children: /* @__PURE__ */ jsx23(Text, { secondary: !0, children: role })
            },
            role
          )
        ) })
      ]
    }
  ) });
}
var ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx23("article", { className: classes(project_module_default.project, className), ...rest }), ProjectSection = forwardRef8(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs14(
    "section",
    {
      className: classes(project_module_default.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx23(
          "div",
          {
            className: project_module_default.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx23(Section, { className: project_module_default.sectionInner, "data-padding": padding, children })
      ]
    }
  )
), ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  let imageRef = useRef10();
  return useParallax(0.6, (value) => {
    imageRef.current && imageRef.current.style.setProperty("--offset", `${value}px`);
  }), /* @__PURE__ */ jsx23(Transition, { in: !0, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs14(
    "div",
    {
      className: classes(project_module_default.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx23("div", { className: project_module_default.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx23(Image2, { cover: !0, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx23("div", { className: project_module_default.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
}, ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx23("div", { className: classes(project_module_default.image, className), children: /* @__PURE__ */ jsx23(Image2, { reveal: !0, alt, delay: 300, ...rest }) }), ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx23(
  "div",
  {
    className: classes(project_module_default.sectionContent, className),
    "data-width": width,
    ...rest
  }
), ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx23(
  Heading,
  {
    className: classes(project_module_default.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
), ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx23(Text, { className: classes(project_module_default.sectionText, className), size: "l", as: "p", ...rest }), ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx23(
  "div",
  {
    className: classes(project_module_default.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
), ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx23(
  ProjectSectionContent,
  {
    className: classes(project_module_default.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);

// app/routes/projects.slice/slice.jsx
init_style();
import { Fragment as Fragment6 } from "react";

// app/utils/meta.js
var { name, url, twitter } = config_default, defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name,
  ogImage = defaultOgImage
}) {
  let titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name },
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

// app/routes/projects.slice/slice.module.css
var slice_module_default = { columns: "hu83r", grid: "_641lY", gridImage: "lpgHB", gridBackground: "m1bL-", gridForeground: "zie1W", gridText: "ZkM9r", sidebarImages: "JoOcp", sidebarImagesText: "Am-Wf", sidebarImage: "O1A2-" };

// app/routes/projects.slice/slice.jsx
import { jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";
var title = "Biomedical image collaboration", description = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.", roles = ["User Research", "UX Design", "Interface Design"], meta3 = () => baseMeta({ title, description, prefix: "Projects" }), Slice = () => /* @__PURE__ */ jsxs15(Fragment6, { children: [
  /* @__PURE__ */ jsxs15(ProjectContainer, { className: slice_module_default.slice, children: [
    /* @__PURE__ */ jsx24(
      ProjectBackground,
      {
        src: slice_background_default,
        srcSet: `${slice_background_default} 1280w, ${slice_background_large_default} 2560w`,
        width: 1280,
        height: 800,
        placeholder: slice_background_placeholder_default,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx24(
      ProjectHeader,
      {
        title,
        description,
        url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
        roles
      }
    ),
    /* @__PURE__ */ jsx24(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx24(ProjectSectionContent, { children: /* @__PURE__ */ jsx24(
      ProjectImage,
      {
        srcSet: `${slice_app_default} 800w, ${slice_app_large_default} 1920w`,
        width: 800,
        height: 500,
        placeholder: slice_app_placeholder_default,
        alt: "The Slice web application showing a selected user annotation.",
        sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
      }
    ) }) }),
    /* @__PURE__ */ jsx24(ProjectSection, { children: /* @__PURE__ */ jsxs15(ProjectSectionColumns, { centered: !0, className: slice_module_default.columns, children: [
      /* @__PURE__ */ jsxs15("div", { className: slice_module_default.imagesText, children: [
        /* @__PURE__ */ jsx24(ProjectSectionHeading, { children: "Bringing it together" }),
        /* @__PURE__ */ jsx24(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
        /* @__PURE__ */ jsx24(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others\u2019 annotations and make their own." })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: slice_module_default.sidebarImages, children: [
        /* @__PURE__ */ jsx24(
          Image2,
          {
            className: slice_module_default.sidebarImage,
            srcSet: `${slice_sidebar_layers_default} 350w, ${slice_sidebar_layers_large_default} 700w`,
            width: 350,
            height: 750,
            placeholder: slice_sidebar_layers_placeholder_default,
            alt: "The layers sidebar design, now with user profiles.",
            sizes: `(max-width: ${media.mobile}px) 200px, 343px`
          }
        ),
        /* @__PURE__ */ jsx24(
          Image2,
          {
            className: slice_module_default.sidebarImage,
            srcSet: `${slice_sidebar_annotations_default} 350w, ${slice_sidebar_annotations_large_default} 700w`,
            width: 350,
            height: 750,
            placeholder: slice_sidebar_annotations_placeholder_default,
            alt: "Multiple user annotations on a shared layer.",
            sizes: `(max-width: ${media.mobile}px) 200px, 343px`
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx24(ProjectSection, { light: !0, children: /* @__PURE__ */ jsxs15(ProjectSectionContent, { children: [
      /* @__PURE__ */ jsxs15(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx24(ProjectSectionHeading, { children: "Improving the experience" }),
        /* @__PURE__ */ jsx24(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
      ] }),
      /* @__PURE__ */ jsx24(
        Image2,
        {
          srcSet: `${slice_slides_default} 800w, ${slice_slides_large_default} 1920w`,
          width: 800,
          height: 500,
          placeholder: slice_slides_placeholder_default,
          alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx24(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs15(ProjectSectionContent, { className: slice_module_default.grid, children: [
      /* @__PURE__ */ jsxs15("div", { className: slice_module_default.gridImage, children: [
        /* @__PURE__ */ jsx24("div", { className: slice_module_default.gridBackground, children: /* @__PURE__ */ jsx24(
          Image2,
          {
            srcSet: `${slice_background_bar_default} 440w, ${slice_background_bar_large_default} 880w`,
            width: 440,
            height: 790,
            placeholder: slice_background_bar_placeholder_default,
            alt: "",
            role: "presentation",
            sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
          }
        ) }),
        /* @__PURE__ */ jsx24("div", { className: slice_module_default.gridForeground, children: /* @__PURE__ */ jsx24(
          Image2,
          {
            srcSet: `${slice_annotation_default} 440w, ${slice_annotation_large_default} 880w`,
            width: 440,
            height: 340,
            placeholder: slice_annotation_placeholder_default,
            alt: "An annotation preview popover with statistics for shape perimeter and area.",
            sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: slice_module_default.gridText, children: [
        /* @__PURE__ */ jsx24(ProjectSectionHeading, { children: "Meaningful details" }),
        /* @__PURE__ */ jsx24(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx24(ProjectSection, { children: /* @__PURE__ */ jsxs15(ProjectSectionContent, { children: [
      /* @__PURE__ */ jsxs15(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx24(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsx24(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
      ] }),
      /* @__PURE__ */ jsx24(
        Image2,
        {
          src: slice_irl_default,
          width: 940,
          height: 500,
          placeholder: slice_irl_placeholder_default,
          alt: "Students at the University using the new collaborative annotation features"
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ jsx24(Footer, {})
] });

// app/routes/api.set-theme.js
var api_set_theme_exports = {};
__export(api_set_theme_exports, {
  action: () => action
});
import { json as json2, createCookieSessionStorage as createCookieSessionStorage2 } from "@remix-run/cloudflare";
async function action({ request, context }) {
  let theme = (await request.formData()).get("theme"), { getSession, commitSession } = createCookieSessionStorage2({
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
  return session.set("theme", theme), json2(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}

// app/routes/contact/route.js
var route_exports2 = {};
__export(route_exports2, {
  default: () => Contact,
  meta: () => meta4
});

// app/components/divider/divider.jsx
init_style();

// app/components/divider/divider.module.css
var divider_module_default = { divider: "szpR-", line: "TdvjY", notch: "ZQYLT" };

// app/components/divider/divider.jsx
import { jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
var Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs16(
  "div",
  {
    className: classes(divider_module_default.divider, className),
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
      /* @__PURE__ */ jsx25("div", { className: divider_module_default.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx25(
        "div",
        {
          className: divider_module_default.notch,
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

// app/components/input/input.jsx
import { useId as useId3, useRef as useRef12, useState as useState10 } from "react";
init_theme();
init_transition2();
init_style();

// app/components/input/text-area.jsx
init_style();
import { useEffect as useEffect13, useRef as useRef11, useState as useState9 } from "react";

// app/components/input/text-area.module.css
var text_area_module_default = { textarea: "u58rs" };

// app/components/input/text-area.jsx
import { jsx as jsx26 } from "react/jsx-runtime";
var TextArea = ({
  className,
  resize = "none",
  value,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  let [rows, setRows] = useState9(minRows), [textareaDimensions, setTextareaDimensions] = useState9(), textareaRef = useRef11();
  useEffect13(() => {
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
  return /* @__PURE__ */ jsx26(
    "textarea",
    {
      className: classes(text_area_module_default.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps({ resize }),
      rows,
      value,
      ...rest
    }
  );
};

// app/components/input/input.module.css
var input_module_default = { container: "kkjWZ", content: "kG0OK", input: "SDam6", root: "VdEVq", underline: "lqyKb", label: "PMrKI", error: "_6J0F4", errorMessage: "Sf0KK" };

// app/components/input/input.jsx
import { jsx as jsx27, jsxs as jsxs17 } from "react/jsx-runtime";
var Input = ({
  id,
  label,
  value,
  multiline,
  className,
  style,
  error,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  let [focused, setFocused] = useState10(!1), generatedId = useId3(), errorRef = useRef12(), inputId = id || `${generatedId}input`, labelId = `${inputId}-label`, errorId = `${inputId}-error`, InputElement = multiline ? TextArea : "input", handleBlur = (event) => {
    setFocused(!1), onBlur && onBlur(event);
  };
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      className: classes(input_module_default.container, className),
      "data-error": !!error,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs17("div", { className: input_module_default.content, children: [
          /* @__PURE__ */ jsx27(
            "label",
            {
              className: input_module_default.label,
              "data-focused": focused,
              "data-filled": !!value,
              id: labelId,
              htmlFor: inputId,
              children: label
            }
          ),
          /* @__PURE__ */ jsx27(
            InputElement,
            {
              className: input_module_default.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error ? errorId : void 0,
              onFocus: () => setFocused(!0),
              onBlur: handleBlur,
              value,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx27("div", { className: input_module_default.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx27(Transition, { unmount: !0, in: error, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx27(
          "div",
          {
            ref: nodeRef,
            className: input_module_default.error,
            "data-visible": visible,
            id: errorId,
            role: "alert",
            style: cssProps({
              height: visible ? errorRef.current?.getBoundingClientRect().height : 0
            }),
            children: /* @__PURE__ */ jsxs17("div", { className: input_module_default.errorMessage, ref: errorRef, children: [
              /* @__PURE__ */ jsx27(Icon, { icon: "error" }),
              error
            ] })
          }
        ) })
      ]
    }
  );
};

// app/routes/contact/contact.jsx
init_theme();
init_transition2();
init_hooks();
init_style();
import { useRef as useRef13, useState as useState11 } from "react";

// app/routes/contact/contact.module.css
var contact_module_default = { contact: "n2XMS", form: "_4W4F-", title: "-fCli", divider: "TE-yZ", input: "ddk7S", botkiller: "_0uxaC", button: "Se1qR", complete: "RRn1U", completeTitle: "-Haq2", completeText: "twaFB", completeButton: "OwrQg", formError: "pNp7h", formErrorContent: "mdL26", formErrorMessage: "auRJo", formErrorIcon: "MZFlX", footer: "fJgYh" };

// app/routes/contact/contact.jsx
import { jsx as jsx28, jsxs as jsxs18 } from "react/jsx-runtime";
var meta4 = () => baseMeta({
  title: "Contact",
  description: "Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"
}), MAX_EMAIL_LENGTH = 512, MAX_MESSAGE_LENGTH = 4096, Contact = () => {
  let errorRef = useRef13(), email = useFormInput(""), message = useFormInput(""), initDelay2 = tokens.base.durationS, [sending, setSending] = useState11(!1), [success, setSuccess] = useState11(!1), [error, setError] = useState11("");
  async function handleSubmit(e) {
    e.preventDefault(), setSending(!0), setError("");
    let form = e.target, formData = new FormData(form);
    try {
      (await fetch(
        "https://formspree.io/f/meoynvll",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData
        }
      )).ok ? (setSuccess(!0), form.reset()) : setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(!1);
    }
  }
  return /* @__PURE__ */ jsxs18(Section, { className: contact_module_default.contact, children: [
    /* @__PURE__ */ jsx28(Transition, { unmount: !0, in: !success, timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs18(
      "form",
      {
        ref: nodeRef,
        className: contact_module_default.form,
        onSubmit: handleSubmit,
        children: [
          /* @__PURE__ */ jsx28(
            Heading,
            {
              className: contact_module_default.title,
              "data-status": status,
              level: 3,
              as: "h1",
              style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
              children: /* @__PURE__ */ jsx28(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx28(
            Divider,
            {
              className: contact_module_default.divider,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
            }
          ),
          /* @__PURE__ */ jsx28(
            Input,
            {
              className: contact_module_default.botkiller,
              label: "Name",
              name: "name",
              tabIndex: "-1",
              autoComplete: "off"
            }
          ),
          /* @__PURE__ */ jsx28(
            Input,
            {
              required: !0,
              className: contact_module_default.input,
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
          /* @__PURE__ */ jsx28(
            Input,
            {
              required: !0,
              multiline: !0,
              className: contact_module_default.input,
              "data-status": status,
              style: getDelay(tokens.base.durationS, initDelay2),
              autoComplete: "off",
              label: "Message",
              name: "message",
              maxLength: MAX_MESSAGE_LENGTH,
              ...message
            }
          ),
          /* @__PURE__ */ jsx28(Transition, { unmount: !0, in: !!error, children: ({ status: errorStatus, nodeRef: nodeRef2 }) => /* @__PURE__ */ jsx28(
            "div",
            {
              ref: nodeRef2,
              className: contact_module_default.formError,
              "data-status": errorStatus,
              style: cssProps({
                height: errorStatus ? errorRef.current?.offsetHeight : 0
              }),
              children: /* @__PURE__ */ jsx28("div", { className: contact_module_default.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs18("div", { className: contact_module_default.formErrorMessage, children: [
                /* @__PURE__ */ jsx28(Icon, { className: contact_module_default.formErrorIcon, icon: "error" }),
                error
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsx28(
            Button,
            {
              className: contact_module_default.button,
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
    /* @__PURE__ */ jsx28(Transition, { unmount: !0, in: success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs18("div", { className: contact_module_default.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx28(
        Heading,
        {
          level: 3,
          as: "h3",
          className: contact_module_default.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx28(
        Text,
        {
          size: "l",
          as: "p",
          className: contact_module_default.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I\u2019ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx28(
        Button,
        {
          secondary: !0,
          iconHoverShift: !0,
          className: contact_module_default.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx28(Footer, { className: contact_module_default.footer })
  ] });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  let numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { jsx as jsx29 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsx29("main", { style: { padding: "2rem", color: "white" }, children: /* @__PURE__ */ jsx29("h1", { children: "Portfolio Live \u{1F680}" }) });
}

// app/routes/home/route.js
var route_exports3 = {};
__export(route_exports3, {
  default: () => Home,
  links: () => links2,
  meta: () => meta5
});

// app/assets/gamestack-list-placeholder.jpg
var gamestack_list_placeholder_default = "/build/_assets/gamestack-list-placeholder-ICZJKPIR.jpg";

// app/assets/gamestack-login-placeholder.jpg
var gamestack_login_placeholder_default = "/build/_assets/gamestack-login-placeholder-2DCMKVMG.jpg";

// app/assets/SpringFallFirstTexture.jpg
var SpringFallFirstTexture_default = "/build/_assets/SpringFallFirstTexture-2DCMKVMG.jpg";

// app/assets/SpringFallSecondTexture.png
var SpringFallSecondTexture_default = "/build/_assets/SpringFallSecondTexture-ICZJKPIR.png";

// app/assets/CoolestProjectsTexure.png
var CoolestProjectsTexure_default = "/build/_assets/CoolestProjectsTexure-Y6IN57KN.png";

// app/assets/spr-lesson-builder-dark-placeholder.jpg
var spr_lesson_builder_dark_placeholder_default = "/build/_assets/spr-lesson-builder-dark-placeholder-IRHUAAEP.jpg";

// app/assets/devxoraTexture.png
var devxoraTexture_default = "/build/_assets/devxoraTexture-IJY7IQ2L.png";

// app/routes/home/intro.jsx
init_theme_provider2();
init_theme();
init_transition2();
init_hooks();
init_style();
import { Link as RouterLink3 } from "@remix-run/react";
import { Suspense, lazy, useEffect as useEffect15, useState as useState12 } from "react";

// app/hooks/useHydrated.js
import { useSyncExternalStore } from "react";
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

// app/routes/home/intro.module.css
var intro_module_default = { intro: "_7k9vk", text: "-gIqp", name: "_75ymq", title: "I9wY1", row: "UbQTY", word: "BttZj", introTextReveal: "gigpy", line: "uWNLY", introLine: "_4GJDW", scrollIndicator: "oDnUq", introScrollIndicator: "-vEmE", mobileScrollIndicator: "uHDjV", introMobileScrollIndicator: "zweSQ" };

// app/routes/home/intro.jsx
import { Fragment as Fragment7, jsx as jsx31, jsxs as jsxs19 } from "react/jsx-runtime";
var DisplacementSphere2 = lazy(
  () => Promise.resolve().then(() => (init_displacement_sphere(), displacement_sphere_exports)).then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  let { theme } = useTheme(), { disciplines } = config_default, [disciplineIndex, setDisciplineIndex] = useState12(0), prevTheme = usePrevious(theme), introLabel = [disciplines.slice(0, -1).join(", "), disciplines.slice(-1)[0]].join(
    ", and "
  ), currentDiscipline = disciplines.find((item, index) => index === disciplineIndex), titleId = `${id}-title`, scrollToHash = useScrollToHash(), isHydrated = useHydrated();
  useInterval(
    () => {
      let index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5e3,
    theme
  ), useEffect15(() => {
    prevTheme && prevTheme !== theme && setDisciplineIndex(0);
  }, [theme, prevTheme]);
  let handleScrollClick = (event) => {
    event.preventDefault(), scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx31(
    Section,
    {
      className: intro_module_default.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx31(Transition, { in: !0, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs19(Fragment7, { children: [
        isHydrated && /* @__PURE__ */ jsx31(Suspense, { children: /* @__PURE__ */ jsx31(DisplacementSphere2, {}) }),
        /* @__PURE__ */ jsxs19("header", { className: intro_module_default.text, children: [
          /* @__PURE__ */ jsx31("h1", { className: intro_module_default.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx31(DecoderText, { text: config_default.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs19(Heading, { level: 0, as: "h2", className: intro_module_default.title, children: [
            /* @__PURE__ */ jsx31(VisuallyHidden, { className: intro_module_default.label, children: `${config_default.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs19("span", { "aria-hidden": !0, className: intro_module_default.row, children: [
              /* @__PURE__ */ jsx31(
                "span",
                {
                  className: intro_module_default.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config_default.role
                }
              ),
              /* @__PURE__ */ jsx31("span", { className: intro_module_default.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx31("div", { className: intro_module_default.row, children: disciplines.map(
              (item) => /* @__PURE__ */ jsx31(
                Transition,
                {
                  unmount: !0,
                  in: item === currentDiscipline,
                  timeout: { enter: 3e3, exit: 2e3 },
                  children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx31(
                    "span",
                    {
                      "aria-hidden": !0,
                      ref: nodeRef,
                      className: intro_module_default.word,
                      "data-plus": !0,
                      "data-status": status2,
                      style: cssProps({ delay: tokens.base.durationL }),
                      children: item
                    }
                  )
                },
                item
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx31(
          RouterLink3,
          {
            to: "/#project-1",
            className: intro_module_default.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx31(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs19(
          RouterLink3,
          {
            to: "/#project-1",
            className: intro_module_default.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx31(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx31(
                "svg",
                {
                  "aria-hidden": !0,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx31("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}

// app/routes/home/profile.jsx
init_transition2();
init_style();
import { Fragment as Fragment8, useState as useState13 } from "react";

// app/routes/home/katakana.svg
var katakana_default = "/build/_assets/katakana-FXSAGDO3.svg";

// app/routes/home/profile.module.css
var profile_module_default = { profile: "_7hNxv", content: "_9BsSW", column: "czfVX", title: "-QwOv", description: "gJPD-", tag: "VVKtL", tagText: "XHBZ3", image: "lOqP1", svg: "FWH9p", button: "_3eYJe" };

// app/routes/home/profile.jsx
import { jsx as jsx32, jsxs as jsxs20 } from "react/jsx-runtime";
var ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs20(Fragment8, { children: [
  /* @__PURE__ */ jsx32(Heading, { className: profile_module_default.title, "data-visible": visible, level: 2, id: titleId, children: /* @__PURE__ */ jsx32(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx32(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: "I\u2019m Aadhithiya, an AI Engineer passionate about building intelligent, data-driven systems. I create smart applications that combine machine learning, clean code, and practical problem-solving." }),
  /* @__PURE__ */ jsx32(Heading, { className: profile_module_default.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx32(DecoderText, { text: "Education", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx32(Heading, { className: profile_module_default.title, "data-visible": visible, level: 6, id: titleId, children: /* @__PURE__ */ jsx32(DecoderText, { text: "Bachelor of Computer Science", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs20(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: [
    "Annamalai University -- 2023-2027",
    /* @__PURE__ */ jsx32("br", {}),
    "CGPA: 8.5/10",
    /* @__PURE__ */ jsx32("br", {}),
    "Focused on Artificial Intelligence, Machine Learning, CyberSecurity, and Software Development"
  ] }),
  /* @__PURE__ */ jsx32(Heading, { className: profile_module_default.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx32(DecoderText, { text: "My Certifications", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs20(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: [
    "1. ",
    /* @__PURE__ */ jsx32("a", { href: "https://www.credly.com/badges/afda80eb-487d-471e-b761-16b9977f4931/linked_in_profile", target: "_blank", children: "AI Fundamentals - IBM." }),
    /* @__PURE__ */ jsx32("br", {}),
    "2. ",
    /* @__PURE__ */ jsx32("a", { href: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS116S55440028110319179", target: "_blank", children: "CyberSecurity - NPTEL(IIT Madras)" }),
    /* @__PURE__ */ jsx32("br", {}),
    "3. ",
    /* @__PURE__ */ jsx32("a", { href: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS11S94330865904227439", target: "_blank", children: "Cloud Computing - NPTEL(IIT Kharagpur)" }),
    /* @__PURE__ */ jsx32("br", {}),
    "4. ",
    /* @__PURE__ */ jsx32("a", { href: "https://www.udemy.com/certificate/UC-e26bbf7a-cafb-435c-8d32-5d987fbc3119/", target: "_blank", children: "Python - Udemy" }),
    /* @__PURE__ */ jsx32("br", {})
  ] })
] }), Profile = ({ id, visible, sectionRef }) => {
  let [focused, setFocused] = useState13(!1), titleId = `${id}-title`;
  return /* @__PURE__ */ jsx32(
    Section,
    {
      className: profile_module_default.profile,
      onFocus: () => setFocused(!0),
      onBlur: () => setFocused(!1),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx32(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs20("div", { className: profile_module_default.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs20("div", { className: profile_module_default.column, children: [
          /* @__PURE__ */ jsx32(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx32(
            Button,
            {
              secondary: !0,
              className: profile_module_default.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Contact Me !"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs20("div", { className: profile_module_default.column, children: [
          /* @__PURE__ */ jsx32("br", {}),
          /* @__PURE__ */ jsx32("br", {}),
          /* @__PURE__ */ jsx32("br", {}),
          /* @__PURE__ */ jsxs20("div", { className: profile_module_default.image, children: [
            /* @__PURE__ */ jsx32(
              Image2,
              {
                reveal: !0,
                delay: 100,
                placeholder: notfound_default,
                srcSet: `${notfound_default} 480w, ${notfound_default} 960w`,
                width: 960,
                height: 1280,
                sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                alt: "Me smiling like a goofball at the office in Sydney"
              }
            ),
            /* @__PURE__ */ jsx32("svg", { className: profile_module_default.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx32("use", { href: `${katakana_default}#katakana-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};

// app/routes/home/project-summary.jsx
init_device_models();
init_theme_provider2();
init_transition2();
init_hooks();
init_style();
import { Suspense as Suspense2, lazy as lazy2, useState as useState15 } from "react";

// app/routes/home/project-summary.module.css
var project_summary_module_default = { summary: "Qfeul", content: "hnB2y", details: "_43CF1", preview: "byZvr", model: "l0LkK", loader: "Ztk-H", svg: "ImNuU", index: "_8moKJ", indexNumber: "ytF-w", title: "vDiPG", description: "Uw5Ku", button: "Sj79x" };

// app/routes/home/project-summary.jsx
import { Fragment as Fragment9, jsx as jsx34, jsxs as jsxs22 } from "react/jsx-runtime";
var Model2 = lazy2(
  () => Promise.resolve().then(() => (init_model2(), model_exports)).then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title: title2,
  description: description2,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  let [focused, setFocused] = useState15(!1), [modelLoaded, setModelLoaded] = useState15(!1), { theme } = useTheme(), { width } = useWindowSize(), isHydrated = useHydrated(), titleId = `${id}-title`, isMobile = width <= media.tablet, svgOpacity = theme === "light" ? 0.7 : 1, indexText = index < 10 ? `0${index}` : index, phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`, laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(!0);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx34(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: project_summary_module_default.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx34("use", { href: `${katakana_default}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs22("div", { className: project_summary_module_default.details, children: [
      /* @__PURE__ */ jsxs22("div", { "aria-hidden": !0, className: project_summary_module_default.index, children: [
        /* @__PURE__ */ jsx34(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx34("span", { className: project_summary_module_default.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx34(
        Heading,
        {
          level: 3,
          as: "h2",
          className: project_summary_module_default.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx34(Text, { className: project_summary_module_default.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx34("div", { className: project_summary_module_default.button, "data-visible": visible, children: /* @__PURE__ */ jsx34(Button, { iconHoverShift: !0, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs22("div", { className: project_summary_module_default.preview, children: [
      model.type === "laptop" && /* @__PURE__ */ jsxs22(Fragment9, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs22("div", { className: project_summary_module_default.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx34(Loader, { center: !0, className: project_summary_module_default.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx34(Suspense2, { children: /* @__PURE__ */ jsx34(
            Model2,
            {
              alt: model.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model.type === "phone" && /* @__PURE__ */ jsxs22(Fragment9, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs22("div", { className: project_summary_module_default.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx34(Loader, { center: !0, className: project_summary_module_default.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx34(Suspense2, { children: /* @__PURE__ */ jsx34(
            Model2,
            {
              alt: model.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx34(
    Section,
    {
      className: project_summary_module_default.summary,
      "data-alternate": alternate,
      "data-first": index === 1,
      onFocus: () => setFocused(!0),
      onBlur: () => setFocused(!1),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx34("div", { className: project_summary_module_default.content, children: /* @__PURE__ */ jsx34(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs22(Fragment9, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs22(Fragment9, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs22(Fragment9, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}

// app/routes/home/home.jsx
import { useEffect as useEffect17, useRef as useRef16, useState as useState16 } from "react";

// app/routes/home/home.module.css
var home_module_default = { home: "bDEQd" };

// app/routes/home/home.jsx
import { jsx as jsx35, jsxs as jsxs23 } from "react/jsx-runtime";
var links2 = () => [
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
], meta5 = () => baseMeta({
  title: "AI engineer",
  description: "focused on building intelligent, scalable systems using machine learning and deep learning. Passionate about turning data into real-world solutions."
}), Home = () => {
  let [visibleSections, setVisibleSections] = useState16([]), [scrollIndicatorHidden, setScrollIndicatorHidden] = useState16(!1), intro = useRef16(), projectOne = useRef16(), projectTwo = useRef16(), projectThree = useRef16(), details = useRef16();
  return useEffect17(() => {
    let sections = [intro, projectOne, projectTwo, projectThree, details], sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            let section = entry2.target;
            if (observer.unobserve(section), visibleSections.includes(section))
              return;
            setVisibleSections((prevSections) => [...prevSections, section]);
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
    return sections.forEach((section) => {
      sectionObserver.observe(section.current);
    }), indicatorObserver.observe(intro.current), () => {
      sectionObserver.disconnect(), indicatorObserver.disconnect();
    };
  }, [visibleSections]), /* @__PURE__ */ jsxs23("div", { className: home_module_default.home, children: [
    /* @__PURE__ */ jsx35(
      Intro,
      {
        id: "intro",
        sectionRef: intro,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx35(
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
              srcSet: `${devxoraTexture_default} 1280w, ${devxoraTexture_default} 2560w`,
              placeholder: spr_lesson_builder_dark_placeholder_default
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx35(
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
              srcSet: `${CoolestProjectsTexure_default} 800w, ${CoolestProjectsTexure_default} 1920w`,
              placeholder: slice_app_placeholder_default
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx35(
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
              srcSet: `${SpringFallSecondTexture_default} 375w, ${SpringFallSecondTexture_default} 750w`,
              placeholder: gamestack_list_placeholder_default
            },
            {
              srcSet: `${SpringFallFirstTexture_default} 375w, ${SpringFallFirstTexture_default} 750w`,
              placeholder: gamestack_login_placeholder_default
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx35(
      Profile,
      {
        sectionRef: details,
        visible: visibleSections.includes(details.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx35(Footer, {})
  ] });
};

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  ErrorBoundary: () => ErrorBoundary2,
  loader: () => loader2,
  meta: () => meta6
});
import { useRouteError as useRouteError2 } from "@remix-run/react";
import { jsx as jsx36 } from "react/jsx-runtime";
async function loader2() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
var meta6 = () => [{ title: "404 | Redacted" }];
function ErrorBoundary2() {
  let error = useRouteError2();
  return /* @__PURE__ */ jsx36(Error2, { error });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DLI663KS.js", imports: ["/build/_shared/chunk-WHCUGIB2.js", "/build/_shared/chunk-4HXKWYDW.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RSO3AZSH.js", imports: ["/build/_shared/chunk-6OIOLXVR.js", "/build/_shared/chunk-C2R6GFTW.js", "/build/_shared/chunk-BV7BKXWS.js", "/build/_shared/chunk-AGEJM6GD.js", "/build/_shared/chunk-VTYCUDO3.js", "/build/_shared/chunk-MNUF47VI.js", "/build/_shared/chunk-UFO47Q2A.js", "/build/_shared/chunk-XLNHO7CM.js", "/build/_shared/chunk-WGS25AAH.js", "/build/_shared/chunk-P3VUQJCD.js", "/build/_shared/chunk-UHM6SLHM.js", "/build/_shared/chunk-W6DBIU65.js", "/build/_shared/chunk-LOR6SSLI.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-DERNYI22.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7SQZPBWT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.set-theme": { id: "routes/api.set-theme", parentId: "root", path: "api/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/api.set-theme-G5NM5GYH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles.hello-world": { id: "routes/articles.hello-world", parentId: "root", path: "articles/hello-world", index: void 0, caseSensitive: void 0, module: "/build/routes/articles.hello-world-VYERO5RV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles.modern-styling-in-react": { id: "routes/articles.modern-styling-in-react", parentId: "root", path: "articles/modern-styling-in-react", index: void 0, caseSensitive: void 0, module: "/build/routes/articles.modern-styling-in-react-YMSPD2Y6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-LJ3DJZMT.js", imports: ["/build/_shared/chunk-QUJCHFG4.js", "/build/_shared/chunk-ME5QDMAD.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-BJTBDXAP.js", imports: ["/build/_shared/chunk-4W5RFXWF.js", "/build/_shared/chunk-YIMEZXSI.js", "/build/_shared/chunk-QUJCHFG4.js", "/build/_shared/chunk-ME5QDMAD.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects.slice": { id: "routes/projects.slice", parentId: "root", path: "projects/slice", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.slice-QYNUIHQQ.js", imports: ["/build/_shared/chunk-YIMEZXSI.js", "/build/_shared/chunk-ME5QDMAD.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "8e1e3bb2", hmr: void 0, url: "/build/manifest-8E1E3BB2.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/articles.modern-styling-in-react": {
    id: "routes/articles.modern-styling-in-react",
    parentId: "root",
    path: "articles/modern-styling-in-react",
    index: void 0,
    caseSensitive: void 0,
    module: articles_modern_styling_in_react_exports
  },
  "routes/articles.hello-world": {
    id: "routes/articles.hello-world",
    parentId: "root",
    path: "articles/hello-world",
    index: void 0,
    caseSensitive: void 0,
    module: articles_hello_world_exports
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: api_set_theme_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
