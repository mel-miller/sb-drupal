import{j as e,M as r}from"./blocks-DG3SluDF.js";import{useMDXComponents as s}from"./index-QOMfznCg.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Bha8Ox15.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utilities/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"Breakpoints are standardized values for media queries and are used in conjunction with our grid. The small breakpoint has a maximum value, while all others have minimum values."}),`
`,e.jsx(n.h3,{id:"values",children:"Values"}),`
`,e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"--bp-sm"})}),e.jsx("td",{children:"max-width: 760px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"--bp-md"})}),e.jsx("td",{children:"min-width: 761px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"--bp-lg"})}),e.jsx("td",{children:"min-width: 1025px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"--bp-xl"})}),e.jsx("td",{children:"min-width: 1441px"})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Components that depend on the use of breakpoints will already have the functionality built in. If you are building a new component or composing a pattern that requires the use of our breakpoints, follow the implementation instructions below."}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.p,{children:"Breakpoints are defined and accessed via PostCSS Custom Media."}),`
`,e.jsx(n.p,{children:"For example, we can set a minimum height of a div when the viewport reaches the large breakpoint like so:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`@media (--bp-lg) {
  .sample-div {
    min-height: 4rem;
  }
};
`})}),`
`,e.jsx(n.p,{children:"The mixin can also be used within a css rule. This can be handy when applying multiple media queries to the same selector. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`.sample-div {
  @media (--bp-md) {
    min-height: 3rem;
  }

  @media (--bp-lg) {
    min-height: 4rem;
  }
}
`})})]})}function o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{o as default};
