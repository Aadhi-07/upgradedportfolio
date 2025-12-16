import{a as c,b as m}from"/build/_shared/chunk-W6DBIU65.js";import{a,f as d}from"/build/_shared/chunk-LOR6SSLI.js";import{a as X,b as v}from"/build/_shared/chunk-4HXKWYDW.js";import{c as s}from"/build/_shared/chunk-Q3IECNXJ.js";var R="/build/_assets/gotham-bold-italic-OLGVLVDA.woff2";var $="/build/_assets/gotham-bold-YCA2Z2KD.woff2";var h="/build/_assets/gotham-book-italic-GDMS7P5O.woff2";var I="/build/_assets/gotham-book-6DKF6M3J.woff2";var G="/build/_assets/gotham-medium-italic-7A76FGFF.woff2";var j="/build/_assets/gotham-medium-ZMMBQFZI.woff2";var F="/build/_assets/ipa-gothic-UH26V325.woff2";var n=s(X(),1);var f=s(v(),1),i=(0,n.createContext)({}),u=({theme:t="dark",children:o,className:b,as:y="div",toggleTheme:W,...J})=>{let l=T(),Y=!l.theme;return(0,f.jsxs)(i.Provider,{value:{theme:t,toggleTheme:W||l.toggleTheme},children:[Y&&o,!Y&&(0,f.jsx)(y,{className:d(b),"data-theme":t,...J,children:o})]})};function T(){return(0,n.useContext)(i)}function e(t){return t.replace(/\s\s+/g," ")}function r(t){return e(Object.keys(t).map(o=>`--${o}: ${t[o]};`).join(`

`))}function Q(){return e(Object.keys(a).map(t=>`
        @media (max-width: ${a[t]}px) {
          :root {
            ${r(c[t])}
          }
        }
      `).join(`
`))}var S=e(`
  @layer theme, base, components, layout;
`),M=e(`
  :root {
    ${r(c.base)}
  }

  ${Q()}

  [data-theme='dark'] {
    ${r(m.dark)}
  }

  [data-theme='light'] {
    ${r(m.light)}
  }
`),P=e(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${I}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${h}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${j}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${G}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${$}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${R}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${F}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),C=e(`
  ${S}

  @layer theme {
    ${M}
    ${P}
  }
`);export{I as a,j as b,u as c,T as d,C as e};
