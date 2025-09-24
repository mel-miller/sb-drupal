import{j as e,M as r}from"./blocks-DUyYjHcx.js";import{useMDXComponents as o}from"./index-D-Rm53Mw.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Byb8vbVJ.js";function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Drupal Integration"}),`
`,e.jsx(n.h1,{id:"drupal-integration",children:"Drupal Integration"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"NOTE: These instructions are still a work in progress and need to be fully tested."})}),`
`,e.jsx(n.p,{children:"This toolkit is intended to be imported directly into a custom Drupal theme."}),`
`,e.jsxs(n.p,{children:["It is recommended that you build your theme from scratch and set the base theme to ",e.jsx(n.code,{children:"stable9"}),"."]}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Drupal 10 or 11 site with a custom theme."}),`
`,e.jsxs(n.li,{children:["Drupal ",e.jsx(n.a,{href:"https://www.drupal.org/project/components",rel:"nofollow",children:"Components!"})," module installed and enabled."]}),`
`,e.jsx(n.li,{children:"Node.js and NPM installed on your local machine."}),`
`]}),`
`,e.jsx(n.h2,{id:"local-development-setup-for-theme",children:"Local development setup for theme"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["From the root of your Drupal theme, run ",e.jsx(n.code,{children:"npm init -y"})," to create a ",e.jsx(n.code,{children:"package.json"})," file."]}),`
`,e.jsxs(n.li,{children:["Install the vendor-copy npm package by running ",e.jsx(n.code,{children:"npm install --save-dev vendor-copy"}),"."]}),`
`,e.jsxs(n.li,{children:['Add a "vendorCopy" section to your ',e.jsx(n.code,{children:"package.json"})," file. It should look like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"vendorCopy": [
  {
    "from": "node_modules/@mel-miller/sb-drupal/dist/",
    "to": "sb-drupal"
  },
]
`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Add a postinstall script to your ",e.jsx(n.code,{children:"package.json"})," file to copy the assets after installing dependencies. It should look like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`  "scripts": {
    "postinstall": "vendor-copy"
  }
`})}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:["Install the toolkit as a dependency by running ",e.jsx(n.code,{children:"npm install sb-drupal"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"theme-integration",children:"Theme integration"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Add a library definition to your theme's ",e.jsx(n.code,{children:".libraries.yml"})," file. It should look like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`sb-drupal:
  css:
    theme:
      sb-drupal/css/sb-global.css: {}
  js:
    sb-drupal/js/sb-global.js: {}
  dependencies:
    - core/jquery
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Include the library in your theme's ",e.jsx(n.code,{children:".info.yml"})," file."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`libraries:
  - THEMENAME/sb-drupal
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:["Configure ckeditor to use the toolkit styles by adding the following to your theme's ",e.jsx(n.code,{children:".info.yml"})," file."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ckeditor5-stylesheets:
  - 'sb-drupal/css/sb-global.css'
`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Configure component namespaces in your theme's ",e.jsx(n.code,{children:".info.yml"})," file."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`components:
  namespaces:
    elements: 'sb-drupal/elements'
    components: 'sb-drupal/components'
    layouts: 'sb-drupal/layouts'
`})})]})}function a(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{a as default};
