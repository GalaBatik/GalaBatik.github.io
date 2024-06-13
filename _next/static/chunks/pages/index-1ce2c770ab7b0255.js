(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8508)}])},3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return d}});let a="refresh",o="navigate",i="restore",l="server-patch",s="prefetch",u="fast-refresh",c="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),a=r(5893),o=n._(r(7294)),i=r(7950),l=r(7387),s=r(6982),u=r(6921),c=r(7727),d=r(1973),f=r(6216),p=r(1722),h=r(6504),g=r(634),m=r(3412),v=new Set;function x(e,t,r,n,a,o){if(o||(0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(a))return;v.add(a)}Promise.resolve(o?e.prefetch(t,a):e.prefetch(t,r,n)).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:v,children:y,prefetch:j=null,passHref:_,replace:w,shallow:C,scroll:k,locale:A,onClick:N,onMouseEnter:P,onTouchStart:O,legacyBehavior:R=!1,...M}=e;r=y,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let T=o.default.useContext(d.RouterContext),E=o.default.useContext(f.AppRouterContext),S=null!=T?T:E,z=!T,I=!1!==j,L=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:B,as:U}=o.default.useMemo(()=>{if(!T){let e=b(s);return{href:e,as:v?b(v):e}}let[e,t]=(0,i.resolveHref)(T,s,!0);return{href:e,as:v?(0,i.resolveHref)(T,v):t||e}},[T,s,v]),V=o.default.useRef(B),G=o.default.useRef(U);R&&(n=o.default.Children.only(r));let H=R?n&&"object"==typeof n&&n.ref:t,[K,F,D]=(0,p.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(G.current!==U||V.current!==B)&&(D(),G.current=U,V.current=B),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[U,H,B,D,K]);o.default.useEffect(()=>{S&&F&&I&&x(S,B,U,{locale:A},{kind:L},z)},[U,B,F,A,I,null==T?void 0:T.locale,S,z,L]);let J={ref:q,onClick(e){R||"function"!=typeof N||N(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,a,i,s,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:i,locale:u,scroll:e}):t[a?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(f):f()}(e,S,B,U,w,C,k,A,z)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(I||!z)&&x(S,B,U,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:L},z)},onTouchStart(e){R||"function"!=typeof O||O(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(I||!z)&&x(S,B,U,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:L},z)}};if((0,u.isAbsoluteUrl)(U))J.href=U;else if(!R||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);J.href=t||(0,g.addBasePath)((0,c.addLocale)(U,e,null==T?void 0:T.defaultLocale))}return R?o.default.cloneElement(n,J):(0,a.jsx)("a",{...M,...J,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),a=r(9126),o="function"==typeof IntersectionObserver,i=new Map,l=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!o,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:a,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let a=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:a},l.push(r),i.set(r,t),t}(r);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,a.requestIdleCallback)(()=>d(!0));return()=>(0,a.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8508:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),a=r(1664),o=r.n(a);r(7294);var i=r(9008),l=r.n(i),s=e=>{let{children:t,title:r="Title"}=e;return(0,n.jsxs)("div",{className:"relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"".concat(r," | ").concat("Gala Batik - Premium Batik Art")}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"/images/logo.png"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{name:"description",content:"Gala Batik is a premium Batik originated in Surabaya."}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(r," | Gala Batik - Premium Batik Art")}),(0,n.jsx)("meta",{property:"og:description",content:"Gala Batik is a premium batik art originated in Surabaya."}),(0,n.jsx)("meta",{property:"og:url",content:"https://galabatik.biz.id/"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"ClothingStore",name:"Gala Batik",image:"images/logo.png","@id":"https://galabatik.biz.id/",url:"https://galabatik.biz.id/",telephone:"",address:{"@type":"PostalAddress",streetAddress:"Jl. Tenggilis Lama IVB/30",addressLocality:"SURABAYA",postalCode:"60292",addressCountry:"ID"},geo:{"@type":"GeoCoordinates",latitude:-7.3160046,longitude:112.76224},sameAs:"https://www.instagram.com/galabatikboutique"},{"@type":"Product",name:"Product1",image:"1.png",sku:"1",aggregateRating:{"@type":"AggregateRating",ratingValue:"5",ratingCount:"1",reviewCount:"1"}},{"@type":"Product",name:"Product2",image:"2.png",sku:"2",aggregateRating:{"@type":"AggregateRating",ratingValue:"5",ratingCount:"1",reviewCount:"1"}}]})}})]}),t]})},u=()=>(0,n.jsxs)(s,{title:"Coming Soon",children:[(0,n.jsx)("img",{src:"/images/xera.svg",alt:"Themeptation ",className:"absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"}),(0,n.jsx)("img",{src:"/images/shapes.svg",alt:"hero",className:"absolute w-full left-24 bottom-24 animate-blob2"}),(0,n.jsx)("div",{className:"relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900",children:(0,n.jsxs)("div",{className:"text-center space-y-10",children:[(0,n.jsx)("h3",{className:"font-light text-xl uppercase tracking-wider",children:"Coming soon"}),(0,n.jsx)("h1",{className:"text-7xl lg:text-9xl font-extrabold",children:"Gala Batik"}),(0,n.jsx)("h2",{className:"font-light text-xl tracking-wider",children:"A premium batik art originated in Surabaya. "}),(0,n.jsx)("p",{className:"text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xxl lg:mx-auto",children:"Stay in touch!"})]})}),(0,n.jsx)("div",{className:"absolute bottom-5",children:(0,n.jsxs)("ul",{className:"flex space-x-3",children:[(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://instagram.com/galabatikboutique",className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://galabatik.biz.id",className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://galabatik.biz.id",className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"https://galabatik.biz.id",className:"flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})})})]})})]})},9008:function(e,t,r){e.exports=r(6665)},1664:function(e,t,r){e.exports=r(3480)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);