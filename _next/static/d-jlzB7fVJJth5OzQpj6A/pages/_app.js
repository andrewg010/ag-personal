(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(n,t,e){e("74v/"),n.exports=e("nOHt")},"74v/":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("cha2")}])},"8Bbg":function(n,t,e){n.exports=e("B5Ud")},B5Ud:function(n,t,e){"use strict";var o=e("lwsE"),r=e("W8MJ"),i=e("7W2i"),a=e("a1gu"),c=e("Nsbk"),l=e("o0o1");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var f=e("TqRt");t.__esModule=!0,t.Container=function(n){0;return n.children},t.createUrl=d,t.default=void 0;var u=f(e("q1tI")),p=e("g/15");function h(n){var t,e,o;return l.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.Component,e=n.ctx,r.next=3,l.awrap((0,p.loadGetInitialProps)(t,e));case 3:return o=r.sent,r.abrupt("return",{pageProps:o});case 5:case"end":return r.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var m=function(n){i(l,n);var t,e=(t=l,function(){var n,e=c(t);if(s()){var o=c(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return a(this,n)});function l(){return o(this,l),e.apply(this,arguments)}return r(l,[{key:"componentDidCatch",value:function(n,t){throw n}},{key:"render",value:function(){var n=this.props,t=n.router,e=n.Component,o=n.pageProps,r=n.__N_SSG,i=n.__N_SSP;return u.default.createElement(e,Object.assign({},o,r||i?{}:{url:d(t)}))}}]),l}(u.default.Component);function d(n){var t=n.pathname,e=n.asPath,o=n.query;return{get query(){return o},get pathname(){return t},get asPath(){return e},back:function(){n.back()},push:function(t,e){return n.push(t,e)},pushTo:function(t,e){var o=e?t:"",r=e||t;return n.push(o,r)},replace:function(t,e){return n.replace(t,e)},replaceTo:function(t,e){var o=e?t:"",r=e||t;return n.replace(o,r)}}}t.default=m,m.origGetInitialProps=h,m.getInitialProps=h},Ff2n:function(n,t,e){"use strict";function o(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e.d(t,"a",(function(){return o}))},KQjJ:function(n,t,e){"use strict";var o=e("wx14"),r=e("Ff2n"),i=e("q1tI"),a=e.n(i),c=e("YFqc"),l=e.n(c),s=e("ddS8"),f=a.a.createElement;t.a=function(n){var t=n.href,e=Object(r.a)(n,["href"]);return f(l.a,Object(o.a)({href:t,as:"".concat(s.a).concat(t)},e))}},YFqc:function(n,t,e){n.exports=e("cTJO")},cTJO:function(n,t,e){"use strict";var o=e("lwsE"),r=e("W8MJ"),i=e("7W2i"),a=e("a1gu"),c=e("Nsbk");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var s=e("TqRt"),f=e("284h");t.__esModule=!0,t.default=void 0;var u,p=f(e("q1tI")),h=e("QmWs"),m=e("g/15"),d=s(e("nOHt")),g=e("elyg");function y(n){return n&&"object"===typeof n?(0,m.formatWithValidation)(n):n}var v=new Map,k=window.IntersectionObserver,w={};function b(){return u||(k?u=new k((function(n){n.forEach((function(n){if(v.has(n.target)){var t=v.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(u.unobserve(n.target),v.delete(n.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(n){i(s,n);var t,e=(t=s,function(){var n,e=c(t);if(l()){var o=c(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return a(this,n)});function s(n){var t;return o(this,s),(t=e.call(this,n)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(n){var t=null,e=null,o=null;return function(r,i){if(o&&r===t&&i===e)return o;var a=n(r,i);return t=r,e=i,o=a,a}}((function(n,t){return{href:(0,g.addBasePath)(y(n)),as:t?(0,g.addBasePath)(y(t)):t}})),t.linkClicked=function(n){var e=n.currentTarget,o=e.nodeName,r=e.target;if("A"!==o||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,c=i.as;if(function(n){var t=(0,h.parse)(n,!1,!0),e=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===e.protocol&&t.host===e.host}(a)){var l=window.location.pathname;a=(0,h.resolve)(l,a),c=c?(0,h.resolve)(l,c):a,n.preventDefault();var s=t.props.scroll;null==s&&(s=c.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](a,c,{shallow:t.props.shallow}).then((function(n){n&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==n.prefetch,t}return r(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),e=t.href,o=t.as,r=(0,h.resolve)(n,e);return[r,o?(0,h.resolve)(n,o):r]}},{key:"handleRef",value:function(n){var t=this;this.p&&k&&n&&n.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,t){var e=b();return e?(e.observe(n),v.set(n,t),function(){try{e.unobserve(n)}catch(t){console.error(t)}v.delete(n)}):function(){}}(n,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],n).catch((function(n){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var n=this,t=this.props.children,e=this.formatUrls(this.props.href,this.props.as),o=e.href,r=e.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){n.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),n.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||n.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=r||o),p.default.cloneElement(i,a)}}]),s}(p.Component);t.default=x},cha2:function(n,t,e){"use strict";function o(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function i(n){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n){return(a="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(n){return i(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":i(n)})(n)}function c(n,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}e.r(t),e.d(t,"default",(function(){return cn}));var s=e("q1tI"),f=e.n(s),u=e("8Bbg"),p=e.n(u),h=e("vOnD");var m=e("ddS8");function d(){var n,t,e=(n=["\n  @font-face {\n    font-family: 'Rockwell, Arial';\n      src: url(",");\n      src: url(",");\n      src: url(",");\n  }\n  html {\n    font-family: ",";\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    color: ",";\n    height: 100%;\n  }\n  body {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return d=function(){return e},e}var g=Object(h.b)(d(),"".concat(m.a,"/fonts/Rockwell.woff"),"".concat(m.a,"/fonts/Rockwell.woff2"),"".concat(m.a,"/fonts/Rockwell.ttf"),(function(n){return n.theme.fontFamily}),(function(n){return n.theme.colors.text})),y=e("8Kt/"),v=e.n(y),k=f.a.createElement,w=function(){return k(v.a,null,k("link",{rel:"apple-touch-icon",sizes:"57x57",href:"".concat(m.a,"img/icons/apple-icon-57x57.png")}),k("link",{rel:"apple-touch-icon",sizes:"60x60",href:"".concat(m.a,"/img/icons/apple-icon-60x60.png")}),k("link",{rel:"apple-touch-icon",sizes:"72x72",href:"".concat(m.a,"/img/icons/apple-icon-72x72.png")}),k("link",{rel:"apple-touch-icon",sizes:"76x76",href:"".concat(m.a,"/img/icons/apple-icon-76x76.png")}),k("link",{rel:"apple-touch-icon",sizes:"114x114",href:"".concat(m.a,"/img/icons/apple-icon-114x114.png")}),k("link",{rel:"apple-touch-icon",sizes:"120x120",href:"".concat(m.a,"/img/icons/apple-icon-120x120.png")}),k("link",{rel:"apple-touch-icon",sizes:"144x144",href:"".concat(m.a,"/img/icons/apple-icon-144x144.png")}),k("link",{rel:"apple-touch-icon",sizes:"152x152",href:"".concat(m.a,"/img/icons/apple-icon-152x152.png")}),k("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(m.a,"/img/icons/apple-icon-180x180.png")}),k("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat(m.a,"/img/icons/android-icon-192x192.png")}),k("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(m.a,"/img/icons/favicon-32x32.png")}),k("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"".concat(m.a,"/img/icons/favicon-96x96.png")}),k("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(m.a,"/img/icons/favicon-16x16.png")}),k("link",{rel:"manifest",href:"".concat(m.a,"/manifest.json")}),k("meta",{key:"msapplication-TileColor",name:"msapplication-TileColor",content:"#ffffff"}),k("meta",{key:"msapplication-TileImage",name:"msapplication-TileImage",content:"".concat(m.a,"/img/icons/ms-icon-144x144.png")}),k("meta",{key:"theme-color",name:"theme-color",content:"#ffffff"}))},b=e("7O5W"),x=(e("VAPu"),e("wHSu")),O=e("8tEE");b.a.autoAddCss=!1,b.c.add(x.b,x.g,x.e,x.a,x.c,O.b,O.a,O.d,O.c,x.d,x.f);var R=function(){return null},C=e("wx14"),_=e("gQLT"),j=e("BZ/I"),z=f.a.createElement,P=h.c.div.withConfig({displayName:"logo__LogoDiv",componentId:"yrfqi7-0"})(["display:",";width:100%;"],(function(n){return n.inline?"inline":"block"})),I=function(n){if(n.staticImg&&!n.color)return z(P,n,z(_.a,{alt:"Andrew Griffiths Logo",fillContainer:!0,src:"".concat(m.a,"/img/svg/aglogo.svg")}));var t='\n<svg\nviewBox="0 0 70.77067 70.770674"\nid="svg8">\n<g\n  id="layer1"\n  transform="translate(-11.744599,-4.2162763)">\n  <g\n    id="g872"\n    transform="matrix(2.4886531,0,0,2.4886531,-48.149589,-99.226163)">\n    <g>\n      <path\n        d="M 44.866247,52.766965 V 51.34895 h 3.684975 v 1.725874 h -1.772519 v 7.351292 q 0,2.565489 -1.296739,3.955517 -1.287409,1.399358 -3.768936,1.399358 -2.350921,0 -4.011492,-1.324725 L 38.9423,63.066237 q 0.671692,0.49444 1.343383,0.736995 0.681021,0.251885 1.483319,0.251885 1.455332,0 2.276289,-0.904918 0.820956,-0.904918 0.820956,-2.397566 v -0.914247 q -0.634375,0.746324 -1.613926,1.17546 -0.970221,0.429136 -1.940442,0.429136 -1.362042,0 -2.453541,-0.690349 -1.082169,-0.69035 -1.697887,-1.828494 -0.606388,-1.147473 -0.606388,-2.509515 0,-1.390028 0.634375,-2.584147 0.643705,-1.194118 1.753862,-1.903126 1.110157,-0.709008 2.462869,-0.709008 0.970222,0 1.809836,0.382491 0.848944,0.382491 1.651242,1.166131 z m -3.190535,6.950143 q 0.914247,0 1.651242,-0.457123 0.736995,-0.457124 1.147473,-1.231435 0.410478,-0.774311 0.410478,-1.6699 0,-0.839615 -0.410478,-1.613926 -0.410478,-0.774311 -1.138144,-1.250093 -0.727666,-0.475781 -1.623255,-0.475781 -0.876931,0 -1.595268,0.457123 -0.718337,0.457124 -1.119486,1.231435 -0.401149,0.774311 -0.401149,1.6699 0,0.914247 0.382491,1.679229 0.382491,0.764982 1.08217,1.212777 0.709008,0.447794 1.613926,0.447794 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.47764736"\n        id="path827" />\n    </g>\n    <g>\n      <path\n        d="m 36.398295,53.746867 v 4.62721 h 1.641913 v 1.716545 h -3.3398 v -1.203448 q -1.399358,1.371371 -3.115903,1.371371 -0.904918,0 -1.660571,-0.419807 -0.746324,-0.419808 -1.203448,-1.119487 -0.447794,-0.709007 -0.447794,-1.56728 0,-0.923576 0.49444,-1.641913 0.503768,-0.727666 1.352712,-1.119486 0.848944,-0.39182 1.707216,-0.39182 1.436674,0 2.677438,0.839614 v -1.054182 q 0,-1.147474 -0.485111,-1.641913 -0.48511,-0.49444 -1.595267,-0.49444 -0.783641,0 -1.315397,0.289201 -0.522426,0.279871 -0.867601,0.858272 L 28.39397,52.338181 q 0.625046,-1.166132 1.688558,-1.735204 1.063512,-0.578401 2.528173,-0.578401 1.968429,0 2.873347,0.895589 0.914247,0.895589 0.914247,2.826702 z m -4.552577,5.028359 q 1.418016,0 2.65878,-1.18479 v -1.147473 q -1.259422,-0.97955 -2.518844,-0.97955 -0.764982,0 -1.324725,0.48511 -0.550414,0.475782 -0.550414,1.203448 0,0.699679 0.485111,1.166131 0.48511,0.457124 1.250092,0.457124 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.47764736"\n        id="path824" />\n    </g>\n    <g\n      aria-label="&lt;/&gt;"\n      transform="scale(0.94720615,1.0557364)"\n      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.37428904px;line-height:1.25;font-family:Rockwell;-inkscape-font-specification:Rockwell;letter-spacing:0px;word-spacing:0px;fill:{COLOR};fill-opacity:1;stroke:none;stroke-width:0.10935722"\n      id="text903">\n      <path\n        d="m 30.692284,43.718243 v 0.395139 l -2.533157,-1.06367 v -0.322518 l 2.533157,-1.067942 v 0.393002 l -2.041904,0.839403 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.10935722"\n        id="path830" />\n      <path\n        d="m 31.027618,44.551238 1.648902,-3.338386 h 0.382323 l -1.646766,3.338386 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.10935722"\n        id="path832" />\n      <path\n        d="m 35.92947,43.049712 -2.533157,1.06367 v -0.395139 l 2.04404,-0.826586 -2.04404,-0.839403 v -0.393002 l 2.533157,1.067942 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.10935722"\n        id="path834" />\n    </g>\n  </g>\n  <rect\n    style="opacity:1;fill:none;fill-opacity:1;stroke:{COLOR};stroke-width:1.97536814;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect860"\n    width="68.795303"\n    height="68.795303"\n    x="12.732283"\n    y="5.2039604"\n    rx="11.785713" />\n  <rect\n    style="opacity:1;fill:{COLOR};fill-opacity:1;stroke:{COLOR};stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect872"\n    width="7.4726267"\n    height="3.1470189"\n    x="39.787449"\n    y="12.362849"\n    rx="0" />\n  <rect\n    style="opacity:1;fill:{COLOR};fill-opacity:1;stroke:{COLOR};stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect963"\n    width="15.135825"\n    height="3.1475725"\n    x="48.847576"\n    y="12.362296" />\n  <rect\n    style="opacity:1;fill:{COLOR};fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect1007"\n    width="5.0773482"\n    height="3.147583"\n    x="65.320534"\n    y="12.339291" />\n</g>\n</svg>\n'.replace(/{COLOR}/g,n.color||j.a.colors.primary);return z(P,Object(C.a)({},n,{dangerouslySetInnerHTML:{__html:t}}))},M=e("gEIo"),E={hamburgerSize:20,hamburgerReductionFactor:1.75,hamburgerPositionFromBottom:2.6,desktopMenuHeight:3,mobileMenuWidth:80,navMobileTransition:400,logo:{color:"",mobileColor:"#ffffff"}},S=E.hamburgerSize,L=E.hamburgerReductionFactor,N=E.hamburgerPositionFromBottom,q=E.mobileMenuWidth,T=E.navMobileTransition,U=E.desktopMenuHeight,D=h.c.nav.withConfig({displayName:"navigation-styled-components__NavOuter",componentId:"sc-3lnpz1-0"})(["@media (max-width:","){width:100%;z-index:1;position:absolute;border-bottom:none;background:none;}@media (min-width:","){position:fixed;z-index:1;margin-bottom:",";background:",";height:",";display:flex;align-items:center;width:100%;}"],(function(n){return n.theme.breakpoints.xsMax}),(function(n){return n.theme.breakpoints.smMin}),"".concat(U,"rem"),(function(n){return n.theme.colors.light}),"".concat(U,"rem")),B=Object(h.c)(I).withConfig({displayName:"navigation-styled-components__NavLogo",componentId:"sc-3lnpz1-1"})(["display:none;width:",";position:relative;padding-top:0.4rem;padding-left:0.25rem;img{margin-bottom:0.4rem;}@media (min-width:","){display:block;}"],"".concat(U-.5,"rem"),(function(n){return n.theme.breakpoints.smMin})),F=Object(h.c)(I).withConfig({displayName:"navigation-styled-components__MobileLogo",componentId:"sc-3lnpz1-2"})(["width:",";position:absolute;right:0px;padding-top:0.4rem;padding-right:0.4rem;@media (min-width:","){display:none;}"],"".concat(U-.5,"rem"),(function(n){return n.theme.breakpoints.smMin})),W=h.c.ul.withConfig({displayName:"navigation-styled-components__NavLinks",componentId:"sc-3lnpz1-3"})(["overflow:hidden;list-style:none;@media (max-width:","){z-index:1;position:fixed;min-width:",";transition-duration:",";top:",";background:",";padding:1rem;margin:0px;left:",";border-radius:",";box-shadow:1px 2px 4px ",";}@media (min-width:","){padding-top:0.25rem;margin-left:auto;}"],(function(n){return n.theme.breakpoints.xsMax}),"".concat(q,"%"),"".concat(T,"ms"),"calc(100% - ".concat(S*(N+.5),"vw)"),(function(n){return n.theme.colors.primary}),(function(n){return n.open?"".concat(100-q,"%"):"100%"}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.boxShadowColor}),(function(n){return n.theme.breakpoints.smMin})),A=h.c.li.withConfig({displayName:"navigation-styled-components__NavItem",componentId:"sc-3lnpz1-4"})(["overflow:hidden;@media (max-width:","){&:not(:first-child){padding-top:1rem;}}@media (min-width:","){display:inline;padding-right:1rem;}"],(function(n){return n.theme.breakpoints.xsMax}),(function(n){return n.theme.breakpoints.smMin})),H=Object(h.c)(M.a).withConfig({displayName:"navigation-styled-components__NavLink",componentId:"sc-3lnpz1-5"})(["@media (max-width:","){display:block;color:",";&:hover{color:",";}svg{padding-right:1rem;min-width:20px;}}@media (min-width:","){svg{display:none;}span{display:inline-block;&:hover{transform:scale(1.1);transition-duration:125ms;}}}"],(function(n){return n.theme.breakpoints.xsMax}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.breakpoints.smMin})),J=h.c.div.withConfig({displayName:"navigation-styled-components__Hamburger",componentId:"sc-3lnpz1-6"})(["z-index:2;width:",";height:",";transition-duration:",";position:fixed;display:block;top:",";left:",";background:",";border-radius:100%;box-shadow:1px 2px 4px ",";color:",";display:flex;align-items:center;justify-content:center;font-size:",";@media (min-width:","){display:none;}"],(function(n){return n.open?"".concat(S/L,"vw"):"".concat(S,"vw")}),(function(n){return n.open?"".concat(S/L,"vw"):"".concat(S,"vw")}),"".concat(T,"ms"),(function(n){return n.open?"calc(100% - ".concat(S*(N+.4),"vw)"):"calc(100% - ".concat(S*N,"vw)")}),(function(n){return n.open?"calc(95% - ".concat(S/L,"vw)"):"calc(95% - ".concat(S,"vw)")}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.boxShadowColor}),(function(n){return n.theme.colors.secondary}),(function(n){return n.open?"1rem":"2rem"}),(function(n){return n.theme.breakpoints.smMin})),K=h.c.div.withConfig({displayName:"navigation-styled-components__Offset",componentId:"sc-3lnpz1-7"})(["height:0px;@media (min-width:","){height:",";}"],(function(n){return n.theme.breakpoints.smMin}),"".concat(U,"rem")),G=e("IP2g"),Q=f.a.createElement,V=function(n){var t=n.open,e=n.handleClick;return Q(J,{onClick:function(){return e(!t)},open:t},!t&&Q(G.a,{icon:x.b}),t&&Q(G.a,{icon:x.g}))},X=e("KQjJ"),Y=[{href:"/about",text:"About me",icon:x.c},{href:"/project",text:"Projects",icon:x.e},{href:"/contact",text:"Contact",icon:x.a}],Z=f.a.createElement,$=function(n){var t=n.open;return Y.length?Z(W,{open:t},Y.map((function(n,t){return Z(A,{key:t},Z(X.a,{href:n.href},Z(H,null,Z(G.a,{icon:n.icon}),Z("span",null,n.text))))}))):null},nn=f.a.createElement,tn=function(){return nn(X.a,{href:"/"},nn("a",null,nn(B,{staticImg:!0,color:E.logo.color}),nn(F,{color:E.logo.mobileColor})))},en=f.a.createElement,on=function(){var n=Object(s.useState)(!1),t=n[0],e=n[1];return en(f.a.Fragment,null,en(D,null,en(tn,null),en(V,{open:t,handleClick:e}),en($,{open:t})),en(K,null))},rn=f.a.createElement;function an(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var cn=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}(f,n);var t,e,i,a,s=(t=f,function(){var n,e=l(t);if(an()){var o=l(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return c(this,n)});function f(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),s.apply(this,arguments)}return e=f,(i=[{key:"render",value:function(){var n=this.props,t=n.Component,e=n.pageProps;return rn(h.a,{theme:j.a},rn(w,null),rn(R,null),rn(g,null),rn(on,null),rn(t,e))}}])&&o(e.prototype,i),a&&o(e,a),f}(p.a)},gEIo:function(n,t,e){"use strict";var o=e("vOnD").c.a.withConfig({displayName:"anchor__Anchor",componentId:"sc-1e0m41i-0"})(["text-decoration:none;color:",";&:hover{color:",";}cursor:pointer;"],(function(n){return n.theme.links.color}),(function(n){return n.theme.links.hoverColor}));t.a=o}},[[0,0,1,3,8,2,7,21]]]);