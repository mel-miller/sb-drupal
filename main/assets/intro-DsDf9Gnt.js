import{j as e,M as t}from"./blocks-DG3SluDF.js";import{useMDXComponents as o}from"./index-QOMfznCg.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Bha8Ox15.js";function s(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentation/Overview"}),`
`,e.jsx(i.h1,{id:"storybook-drupal",children:"Storybook Drupal"}),`
`,e.jsx(i.p,{children:"This toolkit is a sample Storybook implementation for Drupal."}),`
`,e.jsx(i.p,{children:"At this point in time, it is not meant to be a complete example of a design system, but rather an organizational system and collection of example components."}),`
`,e.jsxs(i.p,{children:["Project repository: ",e.jsx(i.a,{href:"https://github.com/mel-miller/sb-drupal",rel:"nofollow",children:"https://github.com/mel-miller/sb-drupal"})]}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h2,{id:"toolkit-organization",children:"Toolkit Organization"}),`
`,e.jsx(i.p,{children:"This toolkit is divided into five main sections."}),`
`,e.jsx(i.h3,{id:"documentation",children:"Documentation"}),`
`,e.jsx(i.p,{children:"All documentation that is not for a specific component type is included in this section. It includes setup instructions, usage instructions, and tips for building components."}),`
`,e.jsx(i.h3,{id:"foundations",children:"Foundations"}),`
`,e.jsxs(i.p,{children:["This section includes stories for displaying the styles for native HTML elements or global styles. Styles will be compiled into ",e.jsx(i.code,{children:"sb-global.css"}),". Items in this section will not provide Twig files."]}),`
`,e.jsx(i.h3,{id:"utilities",children:"Utilities"}),`
`,e.jsxs(i.p,{children:["This section includes global utilities such as breakpoints, grid, and colors. Some will provide utility classes or mixins. Each will have a story with instructions and usage guidelines. Styles will be compiled into ",e.jsx(i.code,{children:"sb-global.css"}),". Items in this section will not provide Twig files."]}),`
`,e.jsx(i.h3,{id:"elements",children:"Elements"}),`
`,e.jsx(i.p,{children:"This section includes simple UI elements such as buttons or icons. Elements can be used on their own or as part of more complex components."}),`
`,e.jsxs(i.p,{children:["Styles will be compiled into ",e.jsx(i.code,{children:"sb-global.css"}),"and each items's Twig file will be provided within the ",e.jsx(i.code,{children:"elements"})," directory of the npm package."]}),`
`,e.jsx(i.h3,{id:"components",children:"Components"}),`
`,e.jsx(i.p,{children:"This section contains more complex UI components such as cards, modals, or navigation."}),`
`,e.jsxs(i.p,{children:["Styles will be compiled into ",e.jsx(i.code,{children:"sb-global.css"}),"and each items's Twig file will be provided within the ",e.jsx(i.code,{children:"components"})," directory of the npm package."]}),`
`,e.jsx(i.h3,{id:"layouts",children:"Layouts"}),`
`,e.jsx(i.p,{children:"Layouts are unstyled (or minimally-styled) components that provide structure to a page. Examples include containers, region layouts, and page templates."}),`
`,e.jsxs(i.p,{children:["Styles will be compiled into ",e.jsx(i.code,{children:"sb-global.css"}),"and each items's Twig file will be provided within the ",e.jsx(i.code,{children:"layouts"})," directory of the npm package."]})]})}function a(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
