(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8625:function(e,t,n){"use strict";var i=n(7379).ZP.button.withConfig({displayName:"button__Button",componentId:"sc-1ahu4c1-0"})(["display:inline-block;border-radius:",";padding:",";background:",";color:",";box-shadow:1px 2px 4px ",";font-family:inherit;font-size:100%;line-height:1.15;border-style:none;text-decoration:none;box-sizing:border-box;cursor:pointer;"],(function(e){return e.theme.borderRadius}),(function(e){return e.larger?"1rem 1.5rem 0.75rem 1.5rem":"0.5rem 1rem 0.25rem 1rem"}),(function(e){return e.secondary?e.theme.colors.secondary:e.theme.colors.primary}),(function(e){return e.secondary?e.theme.colors.primary:e.theme.colors.secondary}),(function(e){return e.theme.boxShadowColor}));t.Z=i},8095:function(e,t,n){"use strict";n.d(t,{s_:function(){return r},N:function(){return o},UQ:function(){return a}});var i=n(7379),r=i.ZP.div.withConfig({displayName:"panel__Panel",componentId:"sc-1k7yghg-0"})(["margin:0.5rem;background:",";box-shadow:0px 4px 4px ",";"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.boxShadowColor})),o=i.ZP.div.withConfig({displayName:"panel__PanelBody",componentId:"sc-1k7yghg-1"})(["padding:1.25rem 1.25rem;"]),a=i.ZP.h2.withConfig({displayName:"panel__PanelHeading",componentId:"sc-1k7yghg-2"})(["background:",";padding-top:1.25rem;padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;margin:0;color:",";"],(function(e){return e.noBackground?"":e.theme.colors.primary}),(function(e){return e.noBackground?e.theme.colors.primary:e.theme.colors.secondary}))},2553:function(e,t,n){"use strict";var i=n(7379).ZP.p.withConfig({displayName:"paragraph__Paragraph",componentId:"sc-rtwhsy-0"})(["color:",";font-size:1em;margin:1.8rem 0rem;"],(function(e){return e.theme.colors.text}));t.Z=i},664:function(e,t,n){"use strict";n.d(t,{Z:function(){return H}});var i=n(8435),r=n.n(i),o=n(5455),a=n(8625),c=n(4840),s=n(7379),d=s.ZP.hr.withConfig({displayName:"horizontalRuler__HorizontalRuler",componentId:"sc-4pkigx-0"})([""]),l=n(9499),m=n(2640),p=n(4730),h=n(131),u=n(6700),f=n(5893),g=["height","margin","lazy"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=s.ZP.div.withConfig({displayName:"image__ImageContainer",componentId:"sc-135ukgl-0"})(["height:",";"],(function(e){return e.height?e.height:"initial"})),j=function(e){var t=e.height,n=e.margin,i=void 0===n?"200px":n,r=e.lazy,o=void 0===r||r,a=(0,p.Z)(e,g),c=(0,h.YD)({rootMargin:i}),s=(0,m.Z)(c,2),d=s[0],l=s[1];return o?(0,f.jsx)(x,{className:"image-container",height:t,ref:d,children:l&&(0,f.jsx)(u.Z,b({},a))}):(0,f.jsx)(u.Z,b({},a))},w=s.ZP.video.withConfig({displayName:"video__Video",componentId:"sc-1tfich9-0"})(["display:",";width:",";max-width:100%;"],(function(e){return e.inline?"inline":"block"}),(function(e){return e.fillContainer?"100%":""})),_=n(7294),Z=["srcSet","height","margin","lazy"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var P=s.ZP.div.withConfig({displayName:"video__VideoContainer",componentId:"sc-ou3k1u-0"})(["height:",";"],(function(e){return e.height?e.height:"initial"})),O=function(e){var t=e.srcSet,n=e.height,i=e.margin,r=void 0===i?"200px":i,o=e.lazy,a=void 0===o||o,c=(0,p.Z)(e,Z),s=(0,h.YD)({rootMargin:r}),d=(0,m.Z)(s,2),u=d[0],g=d[1],y=t||"";if("string"===typeof y)try{y=JSON.parse(y)}catch(j){}var b=function(e){var t=(0,_.useState)(""),n=t[0],i=t[1],r=function(){for(var t=Object.keys(e).sort((function(e,t){return Number(e)-Number(t)})),n="",r=0;r<t.length;r++){var o=Number(t[r]);if(o>=window.innerWidth||r===t.length-1){n=e[o];break}}i(n)};return(0,_.useEffect)((function(){return r(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),n}(y),x=(0,f.jsx)(w,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({src:b},c));return a?(0,f.jsx)(P,{className:"video-container",height:n,ref:u,children:g&&x}):x},k=s.ZP.ul.withConfig({displayName:"list__List",componentId:"sc-hhbgw0-0"})([""]),C=s.ZP.li.withConfig({displayName:"listItem__ListItem",componentId:"sc-8qlwi-0"})(["padding-bottom:0.25rem;padding-top:0.25rem;color:",";"],(function(e){return e.theme.colors.text})),N=n(2553),I=s.ZP.table.withConfig({displayName:"table__Table",componentId:"sc-k2fiws-0"})([""]),S=s.ZP.thead.withConfig({displayName:"table__HeaderRow",componentId:"sc-k2fiws-1"})([""]),z=s.ZP.th.withConfig({displayName:"table__HeaderCell",componentId:"sc-k2fiws-2"})([""]),D=s.ZP.tr.withConfig({displayName:"table__Row",componentId:"sc-k2fiws-3"})([""]),E=s.ZP.td.withConfig({displayName:"table__Cell",componentId:"sc-k2fiws-4"})([""]),T=n(8095),M={a:o.Z,button:a.Z,h1:c.Z,heading:c.Z,hr:d,img:j,ul:k,ol:k,li:C,p:N.Z,table:I,thead:S,th:z,tr:D,td:E,panel:T.s_,pbody:T.N,pheading:T.UQ,video:O},H=function(e){return(0,f.jsx)(r(),{html:e.html,replacements:M})}},8225:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return M},default:function(){return H}});var i=n(9499),r=n(1685),o=n(8371),a=n(7379),c=n(1393),s=n(4840),d=n(5893),l=a.ZP.table.withConfig({displayName:"role__RoleTable",componentId:"sc-1nfg7cv-0"})(["padding:2.5rem 0rem;max-width:300px;text-align:center;img{max-width:200px;max-height:170px;}thead{min-height:200px;}h3{padding-top:1.5rem;}"]),m=function(e){var t=e.img,n=e.title,i=e.body;return(0,d.jsxs)(l,{children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:(0,d.jsx)("th",{children:(0,d.jsx)("img",{alt:n,src:t})})})}),(0,d.jsxs)("tbody",{children:[(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:(0,d.jsx)("h3",{children:n})})}),(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:i})})]})]})},p=(0,a.ZP)(c.Z).withConfig({displayName:"introduction__Section",componentId:"sc-1okxtz1-0"})(["padding-top:1rem;padding-bottom:2rem;"]),h=a.ZP.div.withConfig({displayName:"introduction__RoleContainer",componentId:"sc-1okxtz1-1"})(["display:flex;justify-content:space-evenly;flex-wrap:wrap;"]),u=(0,a.ZP)(s.Z).withConfig({displayName:"introduction__SectionHeading",componentId:"sc-1okxtz1-2"})(["@media (min-width:","){font-size:2rem;}@media (min-width:","){font-size:2.25rem;}"],(function(e){return e.theme.breakpoints.mdMin}),(function(e){return e.theme.breakpoints.lgMin})),f=function(e){var t=e.titleText,n=e.roles;return(0,d.jsxs)(p,{id:"introduction",as:"section",children:[(0,d.jsx)(u,{children:t}),(0,d.jsx)(h,{children:n.map((function(e,t){return(0,d.jsx)(m,{img:e.img,title:e.title,body:e.body},t)}))})]})},g=a.ZP.section.withConfig({displayName:"section__FullWidthSection",componentId:"sc-1mufnh9-0"})(["padding:3rem 0rem;display:block;width:100%;background:",";color:",";box-shadow:0px 4px 4px ",";margin-bottom:10px;h1,h2,h3,h4,h5,h6{color:",";}"],(function(e){return e.primary?e.theme.colors.primary:e.theme.colors.secondary}),(function(e){return e.primary?e.theme.colors.secondary:"inherit"}),(function(e){return e.theme.boxShadowColor}),(function(e){return e.primary?e.theme.colors.secondary:e.theme.colors.primary})),y=n(664),b=n(8625),x=n(1477),j=(0,a.ZP)(c.Z).withConfig({displayName:"about__ContentContainer",componentId:"sc-1sw7bpy-0"})(["padding-bottom:2rem;h4{padding-bottom:2rem;}display:block;@media (min-width:","){padding-bottom:0rem;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.mdMin})),w=a.ZP.div.withConfig({displayName:"about__ContentSection",componentId:"sc-1sw7bpy-1"})(["&:nth-of-type(2){text-align:center;padding:0px;}padding-bottom:2rem;@media (min-width:","){flex:1 1 auto;max-width:50%;&:nth-of-type(2){padding:0rem 2.5rem;}padding-bottom:0rem;}"],(function(e){return e.theme.breakpoints.mdMin})),_=function(e){var t=e.titleText,n=e.aboutCopy,i=e.linkHeading,r=e.buttonText;return(0,d.jsx)(g,{id:"about",children:(0,d.jsxs)(j,{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)(s.Z,{as:"h2",children:t}),(0,d.jsx)(y.Z,{html:n})]}),(0,d.jsxs)(w,{children:[(0,d.jsx)(s.Z,{as:"h4",children:i}),(0,d.jsx)(x.Z,{href:"/about",children:(0,d.jsx)(b.Z,{as:"a",larger:!0,children:r})})]})]})})},Z=n(6700),v=(0,a.ZP)(c.Z).withConfig({displayName:"projects__Section",componentId:"sc-14jglih-0"})(["padding-top:3rem;padding-bottom:2rem;@media (min-width:","){display:flex;justify-content:space-evenly;align-items:center;}"],(function(e){return e.theme.breakpoints.mdMin})),P=a.ZP.div.withConfig({displayName:"projects__LinkSection",componentId:"sc-14jglih-1"})(["padding-bottom:3rem;margin:auto;max-width:300px;text-align:center;img{display:inline-block;width:300px;margin-bottom:1rem;}a{width:300px;text-align:center;}@media (min-width:","){margin:initial;}"],(function(e){return e.theme.breakpoints.mdMin})),O=a.ZP.div.withConfig({displayName:"projects__CopySection",componentId:"sc-14jglih-2"})(["@media (min-width:","){max-width:60%;padding:0rem 1rem 0rem 1rem;}"],(function(e){return e.theme.breakpoints.mdMin})),k=function(e){var t=e.linkText,n=e.linkUrl,i=e.titleText,r=e.svgUrl,o=e.svgAlt,a=e.copy;return(0,d.jsxs)(v,{id:"projects",as:"section",children:[(0,d.jsxs)(P,{children:[(0,d.jsx)(Z.Z,{src:r,alt:o}),(0,d.jsx)(x.Z,{href:n,children:(0,d.jsx)(b.Z,{as:"a",larger:!0,children:t})})]}),(0,d.jsxs)(O,{children:[(0,d.jsx)(s.Z,{children:i}),(0,d.jsx)(y.Z,{html:a})]})]})},C=n(6930),N=(0,a.ZP)(c.Z).withConfig({displayName:"contact__ContentContainer",componentId:"sc-ur84lj-0"})(["display:block;@media (min-width:","){display:flex;align-items:center;justify-content:space-around;}"],(function(e){return e.theme.breakpoints.mdMin})),I=a.ZP.div.withConfig({displayName:"contact__ContentSection",componentId:"sc-ur84lj-1"})(["text-align:center;padding-top:3rem;padding-bottom:3rem;&:nth-of-type(1){a{width:300px;font-weight:bold;}}&:nth-of-type(2){font-size:2rem;span{display:inline-block;max-width:400px;}}@media (min-width:","){max-width:50%;&:nth-of-type(2){font-size:3rem;padding:0rem 2.5rem;}}"],(function(e){return e.theme.breakpoints.mdMin})),S=(0,a.ZP)(s.Z).withConfig({displayName:"contact__ContactHeading",componentId:"sc-ur84lj-2"})(["@media (max-width:","){padding-bottom:1rem;}"],(function(e){return e.theme.breakpoints.smMax})),z=function(e){var t=e.titleText,n=e.linkText,i=e.linkHref,r=e.socialMediaExclusions;return(0,d.jsxs)(g,{id:"about",primary:!0,children:[(0,d.jsx)(c.Z,{children:(0,d.jsx)(S,{as:"h2",children:t})}),(0,d.jsxs)(N,{children:[(0,d.jsx)(I,{children:(0,d.jsx)(x.Z,{href:i,children:(0,d.jsx)(b.Z,{as:"a",secondary:!0,larger:!0,children:n})})}),(0,d.jsx)(I,{children:(0,d.jsx)("span",{children:(0,d.jsx)(C.Z,{exclusions:r})})})]})]})},D=n(2778);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=!0,H=function(e){var t=e.titleText,n=e.smallerTitle,i=e.headTitle,a=e.metaDescription,c=e.metaOgImg,s=e.sections;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{description:a,title:i,img:c}),(0,d.jsx)(r.Z,{titleText:t,smaller:n}),(0,d.jsx)(f,T({},s.introduction)),(0,d.jsx)(_,T({},s.about)),(0,d.jsx)(k,T({},s.projects)),(0,d.jsx)(z,T({},s.contact)),(0,d.jsx)(D.Z,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8225)}])}},function(e){e.O(0,[392,29,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);