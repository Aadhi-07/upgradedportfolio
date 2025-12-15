import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, useSyncExternalStore, Suspense, lazy } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents } from "@mdx-js/react";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      // If you wish to abort the rendering process, you can pass a signal here.
      // Please refer to the templates for example son how to configure this.
      // signal: controller.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
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
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
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
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
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
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
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
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
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
`);
const fontStyles = squish(`
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
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notfoundImg = "/assets/profile-D1ZjCPU8.jpg";
const notFoundVideo = "/assets/notfound-CWoY6dGp.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_nm21j_3";
const styles$r = {
  icon: icon$2
};
const sprites = "/assets/icons-COBh-4sA.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$r.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_w1gy9_3";
const styles$q = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
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
  );
};
const loader$4 = "_loader_11zpc_3";
const text$4 = "_text_11zpc_33";
const span = "_span_11zpc_85";
const styles$p = {
  loader: loader$4,
  text: text$4,
  span
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$p.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$p.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$p.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
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
};
const TransitionContent = ({
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
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show) return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show) return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$5 = "_button_4jwwg_3";
const text$3 = "_text_4jwwg_263";
const loader$3 = "_loader_4jwwg_289";
const icon$1 = "_icon_4jwwg_315";
const styles$o = {
  button: button$5,
  text: text$3,
  loader: loader$3,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
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
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
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
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$o.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$o.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$o.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
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
);
const hidden = "_hidden_u59mf_3";
const styles$n = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$n.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_81hf5_3";
const glyph = "_glyph_81hf5_17";
const value = "_value_81hf5_31";
const styles$m = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      const renderOutput = () => {
        const characterMap = output.current.map((item) => {
          return `<span class="${styles$m[item.type]}">${item.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && true && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$m.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$m.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$m.content, ref: container2 })
    ] });
  }
);
const heading = "_heading_8oupr_3";
const styles$l = {
  heading
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
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
};
const page = "_page_3rfjn_3";
const videoContainer = "_videoContainer_3rfjn_43";
const video = "_video_3rfjn_43";
const credit = "_credit_3rfjn_155";
const details$2 = "_details_3rfjn_203";
const text$1 = "_text_3rfjn_229";
const title$6 = "_title_3rfjn_243";
const titleFlatline = "_titleFlatline_3rfjn_245";
const subheading = "_subheading_3rfjn_309";
const description$4 = "_description_3rfjn_369";
const button$4 = "_button_3rfjn_407";
const styles$k = {
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
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current)) return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob) throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$2 = "_image_1yz75_3";
const elementWrapper = "_elementWrapper_1yz75_97";
const placeholder = "_placeholder_1yz75_141";
const element = "_element_1yz75_97";
const button$3 = "_button_1yz75_207";
const styles$j = {
  image: image$2,
  elementWrapper,
  placeholder,
  element,
  button: button$3
};
const Image$1 = ({
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
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$j.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
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
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted) return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$j.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
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
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$j.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
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
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$j.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
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
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-BCo2ngDH.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
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
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$k.page, children: [
    flatlined && /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$k.details, children: /* @__PURE__ */ jsxs("div", { className: styles$k.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$k.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$k.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$k.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$k.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$k.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$k.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$k.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$k.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notfoundImg
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$k.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
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
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_1jhi1_3";
const highlight = "_highlight_1jhi1_13";
const styles$i = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: classes(styles$i.monogram, className),
      width: "48",
      height: "29",
      viewBox: "0 0 48 26",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M24 6L8 42h6l3.5-8h13L34 42h6L24 6zm-4.5 16L24 12l4.5 10h-9z",
            fill: "currentColor"
          }
        ) }) }),
        /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$i.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});
const toggle$1 = "_toggle_h91zx_3";
const inner = "_inner_h91zx_33";
const icon = "_icon_h91zx_49";
const styles$h = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$h.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$h.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$h.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$h.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_y3n84_3";
const circle = "_circle_y3n84_57";
const mask = "_mask_y3n84_107";
const path = "_path_y3n84_143";
const styles$g = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$g.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$g.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$g.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$g.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$g.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$g.circle,
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
const name$2 = "Aadhithiya J";
const role = "AI Engineer";
const disciplines = [
  "Machine Learning",
  "Data Science",
  "CyberSecurity",
  "Dive In!"
];
const url$1 = "https://www.linkedin.com/in/aadhi-j-8a0671292";
const github = "Aadhi";
const repo = "https://github.com/Aadhi-07";
const ascii = "  ┌───┐\n  │   │\n  │   │\n  ├───┤\n  │   │\n  │   │";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  github,
  repo,
  ascii
};
const navLinks = [
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
];
const socialLinks = [
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const navbar = "_navbar_1qbli_3";
const logo = "_logo_1qbli_53";
const nav = "_nav_1qbli_3";
const navList = "_navList_1qbli_101";
const navLink = "_navLink_1qbli_117";
const navIcons = "_navIcons_1qbli_203";
const navIconLink = "_navIconLink_1qbli_251";
const navIcon = "_navIcon_1qbli_203";
const mobileNav = "_mobileNav_1qbli_293";
const mobileNavLink = "_mobileNavLink_1qbli_353";
const styles$f = {
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
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/") return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements) return;
      inverseMeasurements = Array.from(invertedElements).map((item) => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item) => {
        const rect = item.getBoundingClientRect();
        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$f.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$f.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$f.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$f.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$f.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$f.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
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
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$f.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$f.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$f.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_brpaj_3";
const styles$e = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current) return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted) return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
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
const container$1 = "_container_1g4r3_3";
const skip = "_skip_1g4r3_23";
const styles$d = {
  container: container$1,
  skip
};
const links$1 = () => [
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
];
const loader$2 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
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
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$d.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$d.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "You (probably) don't need CSS-in-JS",
  "abstract": "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
  "date": "2022-05-01",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent$1(props) {
  const _components = {
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
  if (!Embed) _missingMdxReference("Embed");
  return jsxs(Fragment$1, {
    children: [jsxs(_components.p, {
      children: ["When I first tried CSS-in-JS libraries like ", jsx(_components.a, {
        href: "https://styled-components.com/",
        children: "Styled Components"
      }), " and ", jsx(_components.a, {
        href: "https://emotion.sh",
        children: "Emotion"
      }), ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."]
    }), "\n", jsx(_components.p, {
      children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Values:"
        }), " like a color, delay, or position. Anything that represents a single value for a CSS property."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "States:"
        }), " like a primary button variant, or a loading state each having their own set of associated styles."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "where-we-are-today",
      children: "Where we are today"
    }), "\n", jsxs(_components.p, {
      children: ["Before we get started, for comparison I'll be using SCSS (with ", jsx(_components.a, {
        href: "https://css-tricks.com/bem-101/",
        children: "BEM syntax"
      }), ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ", jsx(_components.a, {
        href: "https://vanilla-extract.style/",
        children: "Vanilla Extract"
      }), ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."]
    }), "\n", jsxs(_components.p, {
      children: ["If you're already familiar with the problem, ", jsx(_components.a, {
        href: "#theres-a-better-way-vanilla-css",
        children: "skip to the solution"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "values",
      children: "Values"
    }), "\n", jsxs(_components.p, {
      children: ["Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ", jsx(_components.em, {
        children: "value"
      }), " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles."
    }), "\n", jsx(_components.p, {
      children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// We can pass the `color` value into the styled component as a prop"
        }), "\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n", jsx(_components.span, {
          className: "token comment",
          children: "// The syntax is a little funky, but now in the styled component's styles"
        }), "\r\n", jsx(_components.span, {
          className: "token comment",
          children: "// we can use its props as a function"
        }), "\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "color"
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "states",
      children: "States"
    }), "\n", jsx(_components.p, {
      children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), "\r\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token string",
              children: "'button'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsx(_components.span, {
                className: "token string",
                children: "button--"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "size", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " primary ", jsx(_components.span, {
              className: "token operator",
              children: "?"
            }), " ", jsx(_components.span, {
              className: "token string",
              children: "'button--primary'"
            }), " ", jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token keyword null nil",
              children: "null"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            }), "\r\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "filter"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token known-class-name class-name",
              children: "Boolean"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), "\r\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "join"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token string",
              children: "' '"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\r\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\r\n    ", jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-scss",
      children: jsxs(_components.code, {
        className: "language-scss",
        children: [jsx(_components.span, {
          className: "token selector",
          children: ".button "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--primary "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token variable",
          children: "$primary-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--small "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--medium "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--large "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax."
    }), "\n", jsxs(_components.p, {
      children: ["Our JSX, however, isn't faring so well. That string concatenation on the ", jsx(_components.code, {
        children: "className"
      }), " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ", jsx(_components.code, {
        children: "filter(Boolean)"
      }), " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ", jsx(_components.code, {
        children: "classnames"
      }), " package on NPM. But they only make the problem marginally more bearable."]
    }), "\n", jsx(_components.p, {
      children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "whitesmoke"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " $primary-color", jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'small'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "30"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'medium'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'large'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["It's not ", jsx(_components.em, {
        children: "terrible"
      }), ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), "\r\n    props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), "\r\n      ", jsx(_components.span, {
                className: "token operator",
                children: "?"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "darkslateblue"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), "\r\n      ", jsx(_components.span, {
                className: "token operator",
                children: ":"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "whitesmoke"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "theres-a-better-way-vanilla-css",
      children: "There's a better way: vanilla CSS"
    }), "\n", jsx(_components.p, {
      children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)."
    }), "\n", jsxs(_components.p, {
      children: ["After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ", jsx(_components.em, {
        children: "better"
      }), " than what they have to offer."]
    }), "\n", jsx(_components.p, {
      children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away."
    }), "\n", jsx(_components.h3, {
      id: "values-1",
      children: "Values"
    }), "\n", jsx(_components.p, {
      children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works."
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--color'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `, jsx(_components.code, {
        children: ".button"
      }), " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."]
    }), "\n", jsx(_components.p, {
      children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// All we need to pass is the value needed by the transform, rather than"
        }), "\r\n", jsx(_components.span, {
          className: "token comment",
          children: "// polluting our jsx with the full transform in the inline style"
        }), "\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " offset", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--offset'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "offset", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token string",
                children: "px"
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), " ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "transform"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "translate3d"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--offset"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `, jsx(_components.a, {
        href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/",
        children: "This article from Lea Verou"
      }), " does a great job at explaining this technique."]
    }), "\n", jsx(_components.h3, {
      id: "states-1",
      children: "States"
    }), "\n", jsxs(_components.p, {
      children: ["The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ", jsx(_components.code, {
        children: "&--modifier"
      }), " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-size"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "size", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-primary"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "primary", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-primary"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--colorPrimary"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'small'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'medium'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'large'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "Have a play with the example button component here:"
    }), "\n", jsx(Embed, {
      src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx"
    }), "\n", jsxs(_components.p, {
      children: ["This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ", jsx(_components.code, {
        children: "&--modifier"
      }), " pattern, but I think that's an acceptable tradeoff."]
    }), "\n", jsxs(_components.p, {
      children: ["It may seem kinda ", jsx(_components.em, {
        children: "weird"
      }), " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"]
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "aria-pressed"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "gainsboro"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "disabled"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "opacity"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0.4"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ", jsx(_components.a, {
        href: "https://github.com/css-modules/css-modules",
        children: "CSS Modules"
      }), " which is included out of the box in most React frameworks like Next.js and Create React App."]
    }), "\n", jsxs(_components.p, {
      children: ["Of course, these techniques don't require you to ", jsx(_components.em, {
        children: "only"
      }), " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-nesting-1/",
        children: "nesting"
      }), " and ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-color-5/#relative-colors",
        children: "relative colors"
      }), " I think it's becoming less necessary to reach for these tools."]
    }), "\n", jsxs(_components.p, {
      children: ["The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ", jsx(_components.a, {
        href: "https://github.com/HamishMW/portfolio",
        children: "source code"
      }), "."]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Hello world: how I built this site",
  "abstract": "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  "date": "2022-04-21",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  const _components = {
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
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "how-it-all-started",
      children: "How it all started"
    }), "\n", jsxs(_components.p, {
      children: [`Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `, jsx(_components.a, {
        href: "/404",
        children: "404 page"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/inspiration.png",
        alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect",
        width: "1495",
        height: "1418"
      })
    }), "\n", jsx(_components.h2, {
      id: "the-first-iteration",
      children: "The first iteration"
    }), "\n", jsx(_components.p, {
      children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship."
    }), "\n", jsx(_components.p, {
      children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage."
    }), "\n", jsxs(_components.p, {
      children: ["Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ", jsx(_components.a, {
        href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D",
        children: "Clay Mockups 3D Figma plugin"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/clay-mockups.png",
        alt: "Thumbnail for my Clay Mockups 3D plugin",
        width: "1920",
        height: "960"
      })
    }), "\n", jsx(_components.h2, {
      id: "migrating-to-nextjs",
      children: "Migrating to Next.js"
    }), "\n", jsx(_components.p, {
      children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future."
      }), "\n", jsx(_components.li, {
        children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts."
      }), "\n", jsxs(_components.li, {
        children: ["For generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files, I'm using Kent C Dodds' ", jsx(_components.a, {
          href: "https://github.com/kentcdodds/mdx-bundler",
          children: "mdx-bundler"
        }), ". In combination with Next.js it makes generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files really quick and simple."]
      }), "\n", jsx(_components.li, {
        children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion."
      }), "\n", jsxs(_components.li, {
        children: ["3D effects are still all using Three.js, but I've added ", jsx(_components.code, {
          children: "three-stdlib"
        }), " as a better maintained replacement for modules from Three's examples."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "not-all-smooth-sailing",
      children: "Not all smooth sailing"
    }), "\n", jsx(_components.p, {
      children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:"
    }), "\n", jsx(_components.h3, {
      id: "1-route-transitions",
      children: "1. Route transitions"
    }), "\n", jsxs(_components.p, {
      children: ["There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464",
        children: "the most commented and reacted to issues"
      }), " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107",
        children: "hack to fix things"
      }), " from the issue's comments."]
    }), "\n", jsx(_components.h3, {
      id: "2-scroll-restoration",
      children: "2. Scroll restoration"
    }), "\n", jsx(_components.p, {
      children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility."
    }), "\n", jsx(_components.h2, {
      id: "looking-back-and-forward",
      children: "Looking back, and forward"
    }), "\n", jsx(_components.p, {
      children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it."
    }), "\n", jsx(_components.p, {
      children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today."
    }), "\n", jsx(_components.h2, {
      id: "update-feb-2024",
      children: "Update: Feb 2024"
    }), "\n", jsxs(_components.p, {
      children: [`I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `, jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
        children: "CSS view transitions API"
      }), " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."]
    }), "\n", jsx(_components.p, {
      children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const sliceAnnotationLarge = "/assets/slice-annotation-large-BMgELH_L.png";
const sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png";
const sliceAnnotation = "/assets/slice-annotation-BYMGWVwS.png";
const sliceAppLarge = "/assets/slice-app-large-CHKPTcWm.jpg";
const sliceTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=";
const sliceApp = "/assets/slice-app-PoRtkkeP.jpg";
const sliceBackgroundBarLarge = "/assets/slice-background-bar-large-CYHGpgXa.jpg";
const sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==";
const sliceBackgroundBar = "/assets/slice-background-bar-DUyfyeHo.jpg";
const sliceBackgroundLarge = "/assets/slice-background-large-Dnpu52lB.jpg";
const sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z";
const sliceBackground = "/assets/slice-background-5195om16.jpg";
const sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==";
const sliceIrl = "/assets/slice-irl-Bok-9coc.jpg";
const sliceSidebarAnnotationsLarge = "/assets/slice-sidebar-annotations-large-CrYJmPog.png";
const sliceSidebarAnnotationsPlaceholder = "/assets/slice-sidebar-annotations-placeholder-Bewc5d-7.png";
const sliceSidebarAnnotations = "/assets/slice-sidebar-annotations-CisIo7UR.png";
const sliceSidebarLayersLarge = "/assets/slice-sidebar-layers-large-CqnA6hBc.png";
const sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==";
const sliceSidebarLayers = "/assets/slice-sidebar-layers-jDBpAmZU.png";
const sliceSlidesLarge = "/assets/slice-slides-large--yrOgN_x.jpg";
const sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==";
const sliceSlides = "/assets/slice-slides-me7j0Hig.jpg";
const link$1 = "_link_4ieiq_3";
const styles$c = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$c.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer$1 = "_footer_if18v_3";
const link = "_link_if18v_31";
const date = "_date_if18v_39";
const styles$b = {
  footer: footer$1,
  link,
  date
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$b.footer, className), children: /* @__PURE__ */ jsxs(Text, { size: "s", align: "center", children: [
  /* @__PURE__ */ jsx("span", { className: styles$b.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }),
  /* @__PURE__ */ jsx(Link, { secondary: true, className: styles$b.link, href: "/humans.txt", target: "_self" })
] }) });
const section$1 = "_section_1278e_3";
const styles$a = {
  section: section$1
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$a.section, className), ref, ...rest, children })
);
const project = "_project_1n18f_39";
const section = "_section_1n18f_57";
const sectionInner = "_sectionInner_1n18f_87";
const sectionBackground = "_sectionBackground_1n18f_177";
const backgroundImage = "_backgroundImage_1n18f_275";
const backgroundImageElement = "_backgroundImageElement_1n18f_313";
const backgroundScrim = "_backgroundScrim_1n18f_351";
const header = "_header_1n18f_383";
const headerContent = "_headerContent_1n18f_423";
const details$1 = "_details_1n18f_499";
const title$5 = "_title_1n18f_523";
const description$3 = "_description_1n18f_543";
const linkButton = "_linkButton_1n18f_563";
const meta$4 = "_meta_1n18f_583";
const metaItem = "_metaItem_1n18f_613";
const image$1 = "_image_1n18f_653";
const sectionContent = "_sectionContent_1n18f_669";
const sectionHeading = "_sectionHeading_1n18f_715";
const sectionText = "_sectionText_1n18f_723";
const textRow = "_textRow_1n18f_737";
const sectionColumns = "_sectionColumns_1n18f_849";
const styles$9 = {
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
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$9.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$9.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$9.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$9.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$9.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$9.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$9.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$9.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$9.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$9.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$9.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$9.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$9.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$9.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$9.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$9.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$9.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$9.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$9.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
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
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$9.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
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
const columns = "_columns_1lqwj_1";
const grid = "_grid_1lqwj_9";
const gridImage = "_gridImage_1lqwj_31";
const gridBackground = "_gridBackground_1lqwj_55";
const gridForeground = "_gridForeground_1lqwj_81";
const gridText = "_gridText_1lqwj_113";
const sidebarImages = "_sidebarImages_1lqwj_137";
const sidebarImage = "_sidebarImage_1lqwj_137";
const styles$8 = {
  columns,
  grid,
  gridImage,
  gridBackground,
  gridForeground,
  gridText,
  sidebarImages,
  sidebarImage
};
const title$4 = "Biomedical image collaboration";
const description$2 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.";
const roles = ["User Research", "UX Design", "Interface Design"];
const meta$3 = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const Slice = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$8.slice, children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$8.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$8.imagesText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Bringing it together" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others’ annotations and make their own." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$8.sidebarImages, children: [
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Improving the experience" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
        ] }),
        /* @__PURE__ */ jsx(
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
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs(ProjectSectionContent, { className: styles$8.grid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$8.gridImage, children: [
          /* @__PURE__ */ jsx("div", { className: styles$8.gridBackground, children: /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx("div", { className: styles$8.gridForeground, children: /* @__PURE__ */ jsx(
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
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$8.gridText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Meaningful details" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            src: sliceIrl,
            width: 940,
            height: 500,
            placeholder: sliceIrlPlaceholder,
            alt: "Students at the University using the new collaborative annotation features"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slice,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const divider$1 = "_divider_uwer4_3";
const line$1 = "_line_uwer4_15";
const notch = "_notch_uwer4_59";
const styles$7 = {
  divider: divider$1,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("div", { className: styles$7.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
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
  collapsed: false,
  collapseDelay: 0
};
const textarea = "_textarea_13d9g_3";
const styles$6 = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
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
};
const container = "_container_17spy_3";
const content$2 = "_content_17spy_31";
const input$1 = "_input_17spy_41";
const underline = "_underline_17spy_109";
const label = "_label_17spy_145";
const error = "_error_17spy_189";
const errorMessage = "_errorMessage_17spy_221";
const styles$5 = {
  container,
  content: content$2,
  input: input$1,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
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
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$5.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$5.content, children: [
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$5.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
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
          /* @__PURE__ */ jsx("div", { className: styles$5.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
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
              children: /* @__PURE__ */ jsxs("div", { className: styles$5.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_1p6je_1";
const form = "_form_1p6je_35";
const title$3 = "_title_1p6je_59";
const divider = "_divider_1p6je_119";
const input = "_input_1p6je_195";
const botkiller = "_botkiller_1p6je_279";
const button$2 = "_button_1p6je_287";
const complete = "_complete_1p6je_407";
const completeTitle = "_completeTitle_1p6je_429";
const completeText = "_completeText_1p6je_467";
const completeButton = "_completeButton_1p6je_505";
const formError = "_formError_1p6je_557";
const formErrorContent = "_formErrorContent_1p6je_581";
const formErrorMessage = "_formErrorMessage_1p6je_589";
const formErrorIcon = "_formErrorIcon_1p6je_605";
const footer = "_footer_1p6je_615";
const styles$4 = {
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
};
const meta$2 = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
  });
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error2, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    const form2 = e.target;
    const formData = new FormData(form2);
    try {
      const res = await fetch(
        "https://formspree.io/f/meoynvll",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData
        }
      );
      if (res.ok) {
        setSuccess(true);
        form2.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }
  return /* @__PURE__ */ jsxs(Section, { className: styles$4.contact, children: [
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: !success, timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs(
      "form",
      {
        ref: nodeRef,
        className: styles$4.form,
        onSubmit: handleSubmit,
        children: [
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$4.title,
              "data-status": status,
              level: 3,
              as: "h1",
              style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx(
            Divider,
            {
              className: styles$4.divider,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: styles$4.botkiller,
              label: "Name",
              name: "name",
              tabIndex: "-1",
              autoComplete: "off"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
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
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              multiline: true,
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
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: !!error2, children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
            var _a;
            return /* @__PURE__ */ jsx(
              "div",
              {
                ref: nodeRef2,
                className: styles$4.formError,
                "data-status": errorStatus,
                style: cssProps({
                  height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                }),
                children: /* @__PURE__ */ jsx("div", { className: styles$4.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs("div", { className: styles$4.formErrorMessage, children: [
                  /* @__PURE__ */ jsx(Icon, { className: styles$4.formErrorIcon, icon: "error" }),
                  error2
                ] }) })
              }
            );
          } }),
          /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$4.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h3",
          className: styles$4.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx(
        Text,
        {
          size: "l",
          as: "p",
          className: styles$4.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I’ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$4.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { className: styles$4.footer })
  ] });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const gamestackTexture2Placeholder = "/assets/SpringFallSecondTexture-C55pFQ8V.png";
const gamestackTexturePlaceholder = "/assets/SpringFallFirstTexture-BkYFIuBu.jpg";
const SpringFallFirstTexture = "/assets/SpringFallFirstTexture-BkYFIuBu.jpg";
const SpringFallSecondTexture = "/assets/SpringFallSecondTexture-C55pFQ8V.png";
const CoolestProjectsTexure = "/assets/CoolestProjectsTexure-DQh7zqpe.png";
const sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const devxoraTexture = "/assets/devxoraTexture-D0WlXirq.png";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_vzhcp_1";
const text = "_text_vzhcp_17";
const name = "_name_vzhcp_71";
const title$2 = "_title_vzhcp_147";
const row = "_row_vzhcp_155";
const word = "_word_vzhcp_213";
const line = "_line_vzhcp_365";
const scrollIndicator = "_scrollIndicator_vzhcp_463";
const mobileScrollIndicator = "_mobileScrollIndicator_vzhcp_597";
const styles$3 = {
  intro,
  text,
  name,
  title: title$2,
  row,
  word,
  line,
  scrollIndicator,
  mobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-D3i-OXzm.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$3.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$3.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$3.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$3.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$3.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$3.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$3.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$3.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$3.row, children: disciplines2.map((item) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$3.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item
                  }
                )
              },
              item
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$3.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$3.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const katakana = "/assets/katakana-CPFTGsJ1.svg";
const profile = "_profile_kx5p3_1";
const content$1 = "_content_kx5p3_73";
const column = "_column_kx5p3_99";
const title$1 = "_title_kx5p3_117";
const description$1 = "_description_kx5p3_139";
const image = "_image_kx5p3_227";
const svg$1 = "_svg_kx5p3_237";
const button$1 = "_button_kx5p3_269";
const styles$2 = {
  profile,
  content: content$1,
  column,
  title: title$1,
  description: description$1,
  image,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 2, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "I’m Aadhithiya, an AI Engineer passionate about building intelligent, data-driven systems. I create smart applications that combine machine learning, clean code, and practical problem-solving." }),
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Education", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 6, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Bachelor of Computer Science", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: [
    "Annamalai University -- 2023-2027",
    /* @__PURE__ */ jsx("br", {}),
    "CGPA: 8.5/10",
    /* @__PURE__ */ jsx("br", {}),
    "Focused on Artificial Intelligence, Machine Learning, CyberSecurity, and Software Development"
  ] }),
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "My Certifications", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: [
    "1. ",
    /* @__PURE__ */ jsx("a", { href: "https://www.credly.com/badges/afda80eb-487d-471e-b761-16b9977f4931/linked_in_profile", target: "_blank", children: "AI Fundamentals - IBM." }),
    /* @__PURE__ */ jsx("br", {}),
    "2. ",
    /* @__PURE__ */ jsx("a", { href: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS116S55440028110319179", target: "_blank", children: "CyberSecurity - NPTEL(IIT Madras)" }),
    /* @__PURE__ */ jsx("br", {}),
    "3. ",
    /* @__PURE__ */ jsx("a", { href: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS11S94330865904227439", target: "_blank", children: "Cloud Computing - NPTEL(IIT Kharagpur)" }),
    /* @__PURE__ */ jsx("br", {}),
    "4. ",
    /* @__PURE__ */ jsx("a", { href: "https://www.udemy.com/certificate/UC-e26bbf7a-cafb-435c-8d32-5d987fbc3119/", target: "_blank", children: "Python - Udemy" }),
    /* @__PURE__ */ jsx("br", {})
  ] })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$2.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$2.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$2.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$2.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Contact Me !"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.column, children: [
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("div", { className: styles$2.image, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                reveal: true,
                delay: 100,
                placeholder: notfoundImg,
                srcSet: `${notfoundImg} 480w, ${notfoundImg} 960w`,
                width: 960,
                height: 1280,
                sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                alt: "Me smiling like a goofball at the office in Sydney"
              }
            ),
            /* @__PURE__ */ jsx("svg", { className: styles$2.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
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
};
const summary = "_summary_4rpvx_1";
const content = "_content_4rpvx_69";
const details = "_details_4rpvx_129";
const preview = "_preview_4rpvx_155";
const model = "_model_4rpvx_175";
const loader$1 = "_loader_4rpvx_283";
const svg = "_svg_4rpvx_301";
const index = "_index_4rpvx_383";
const indexNumber = "_indexNumber_4rpvx_401";
const title = "_title_4rpvx_443";
const description = "_description_4rpvx_481";
const button = "_button_4rpvx_519";
const styles$1 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title,
  description,
  button
};
const Model = lazy(
  () => import("./index-y0mg-2Uk.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$1.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$1.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$1.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$1.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(Text, { className: styles$1.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$1.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$1.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$1.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$1.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$1.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$1.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
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
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$1.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$1.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_pb8qs_1";
const styles = {
  home
};
const links = () => {
  return [
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
  ];
};
const meta$1 = () => {
  return baseMeta({
    title: "AI engineer",
    description: `focused on building intelligent, scalable systems using machine learning and deep learning. Passionate about turning data into real-world solutions.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, projectThree, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2)) return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
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
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DnABqKI9.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-JBIitAk6.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-PmB62Q9r.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-JBIitAk6.js", "/assets/image-vZx_tkgY.js", "/assets/error-DL5JBJKD.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/heading-hCU_4ZIW.js", "/assets/useWindowSize-BTW94ndq.js", "/assets/config-x8ocTanZ.js", "/assets/notfound-CPT66_Cg.js"], "css": ["/assets/root-r4TejvkZ.css", "/assets/image-wAiq2qtr.css", "/assets/heading-C5dfv3B4.css", "/assets/error-5kCT514i.css", "/assets/decoder-text-cQOBPbn6.css"] }, "routes/articles.modern-styling-in-react": { "id": "routes/articles.modern-styling-in-react", "parentId": "root", "path": "articles/modern-styling-in-react", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.modern-styling-in-react-pA7lDNH2.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CV1fLf9-.js"], "css": [] }, "routes/articles.hello-world": { "id": "routes/articles.hello-world", "parentId": "root", "path": "articles/hello-world", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.hello-world-D6FOhEfE.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CV1fLf9-.js"], "css": [] }, "routes/projects.slice": { "id": "routes/projects.slice", "parentId": "root", "path": "projects/slice", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D1H7avui.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/slice-app-placeholder-BfRsQMSa.js", "/assets/meta-CJGqz-H_.js", "/assets/image-vZx_tkgY.js", "/assets/heading-hCU_4ZIW.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js"], "css": ["/assets/route-CNxG_otN.css", "/assets/meta-Dd3xeam3.css", "/assets/heading-C5dfv3B4.css", "/assets/image-wAiq2qtr.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-hQifnFgo.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/heading-hCU_4ZIW.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/divider-S5Fqv3gb.js", "/assets/meta-CJGqz-H_.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js"], "css": ["/assets/route-BBxXI2Ph.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/divider-95tbulif.css", "/assets/meta-Dd3xeam3.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bv6MaUT2.js", "imports": ["/assets/route-C3YmDCza.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/slice-app-placeholder-BfRsQMSa.js", "/assets/meta-CJGqz-H_.js", "/assets/heading-hCU_4ZIW.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/image-vZx_tkgY.js", "/assets/useWindowSize-BTW94ndq.js", "/assets/notfound-CPT66_Cg.js", "/assets/divider-S5Fqv3gb.js"], "css": ["/assets/route-Bww4lImB.css", "/assets/meta-Dd3xeam3.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/image-wAiq2qtr.css", "/assets/divider-95tbulif.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-BTg6chgg.js", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/error-DL5JBJKD.js", "/assets/components-JBIitAk6.js", "/assets/notfound-CPT66_Cg.js", "/assets/heading-hCU_4ZIW.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/image-vZx_tkgY.js"], "css": ["/assets/error-5kCT514i.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/image-wAiq2qtr.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bv6MaUT2.js", "imports": ["/assets/route-C3YmDCza.js", "/assets/jsx-runtime-BMrMXMSG.js", "/assets/slice-app-placeholder-BfRsQMSa.js", "/assets/meta-CJGqz-H_.js", "/assets/heading-hCU_4ZIW.js", "/assets/components-JBIitAk6.js", "/assets/config-x8ocTanZ.js", "/assets/decoder-text-D7ymNoZO.js", "/assets/image-vZx_tkgY.js", "/assets/useWindowSize-BTW94ndq.js", "/assets/notfound-CPT66_Cg.js", "/assets/divider-S5Fqv3gb.js"], "css": ["/assets/route-Bww4lImB.css", "/assets/meta-Dd3xeam3.css", "/assets/heading-C5dfv3B4.css", "/assets/decoder-text-cQOBPbn6.css", "/assets/image-wAiq2qtr.css", "/assets/divider-95tbulif.css"] } }, "url": "/assets/manifest-974cc56a.js", "version": "974cc56a" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
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
    index: true,
    caseSensitive: void 0,
    module: route8
  }
};
export {
  ModelAnimationType as M,
  Transition as T,
  useInViewport as a,
  useWindowSize as b,
  cssProps as c,
  classes as d,
  mode as e,
  assetsBuildDirectory as f,
  basename as g,
  future as h,
  isSpaMode as i,
  entry as j,
  routes as k,
  media as m,
  numToMs as n,
  publicPath as p,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  useTheme as u
};
