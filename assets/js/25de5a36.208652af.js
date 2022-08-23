"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},a="Collections",l={unversionedId:"Know_more/Collections",id:"Know_more/Collections",title:"Collections",description:"You can serialize collections, but there are some caveats.",source:"@site/docs/Know_more/Collections.md",sourceDirName:"Know_more",slug:"/Know_more/Collections",permalink:"/persyst-docs/Know_more/Collections",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"I want to know more!",permalink:"/persyst-docs/category/i-want-to-know-more"},next:{title:"Nesting classes",permalink:"/persyst-docs/Know_more/Nesting_classes"}},s={},c=[{value:"Which collections",id:"which-collections",level:2},{value:"Collections of references and the RefWrapper class",id:"collections-of-references-and-the-refwrapper-class",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collections"},"Collections"),(0,r.kt)("p",null,"You can serialize collections, but there are some caveats."),(0,r.kt)("h2",{id:"which-collections"},"Which collections"),(0,r.kt)("p",null,"Currently, only some collections are supported. "),(0,r.kt)("p",null,"Those would be: ",(0,r.kt)("inlineCode",{parentName:"p"},"Lists"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Arrays"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionaries"),". Support for more of them will be added at some point in the not-too-distant future. Adding support for custom-made collections is also planned, by having an interface that your custom collection should implement. But, alas, not yet."),(0,r.kt)("h2",{id:"collections-of-references-and-the-refwrapper-class"},"Collections of references and the RefWrapper class"),(0,r.kt)("p",null,"A variable of type ",(0,r.kt)("inlineCode",{parentName:"p"},"List<GameObject>")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Component>"),", or any other ",(0,r.kt)("inlineCode",{parentName:"p"},"UnityEngine.Object"),") is a collection of references. This would ",(0,r.kt)("em",{parentName:"p"},"technically")," work with the current serialization system, but it would create some issues with the ",(0,r.kt)("a",{parentName:"p",href:"Pending_references"},"Pending References System"),'. And by "issues", I mean the pending references would be entirely ignored. I felt this half-working, half-not behaviour would create a lot of confusion, so I made the call to make collections of ',(0,r.kt)("inlineCode",{parentName:"p"},"UnityEngine.Object")," ",(0,r.kt)("strong",{parentName:"p"},"not a thing"),". "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you try to serialize a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<UnityEngine.Object>"),", you will get an error message and the collection will be ignored.")),(0,r.kt)("admonition",{title:"Rejoice!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"But, good news! You can still serialize collections of references. You just need to add a RefWrapper around the reference itself. ",(0,r.kt)("inlineCode",{parentName:"p"},"List<RefWrapper<UnityEngine.Object>>")," serializes just fine, and maintains your references, including those that are pending at the time of loading.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why do collections of naked references not work?"),(0,r.kt)("div",null,"As I said, it's because of how the Pending References system works. Essentially, the system stores a MemberInfo variable to the Field of Property that wanted to get a reference. You can think of this as a reference-to-the-reference (not really in the sense of C-style pointers-to-pointers, this is just some Reflection data, not actual memory addresses).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Sadly, as far as I know there is no way to get a similar thing for elements of a collection, because any specific element in the collection is not a members of the collection class. Therefore, there is no way to recover the variable that wanted to get a reference when the referenced object does become available.")))}u.isMDXComponent=!0}}]);