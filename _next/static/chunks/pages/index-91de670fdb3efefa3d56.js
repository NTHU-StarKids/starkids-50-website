(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7814:function(e,r,t){"use strict";t.d(r,{G:function(){return h}});var n=t(8947),i=t(5697),o=t.n(i),s=t(7294);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function p(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return r=e,(r-=0)===r?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,r){return r?r.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var r}function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,r){var t,n=r.indexOf(":"),i=d(r.slice(0,n)),o=r.slice(n+1).trim();return i.startsWith("webkit")?e[(t=i,t.charAt(0).toUpperCase()+t.slice(1))]=o:e[i]=o,e}),{})}var b=!1;try{b=!0}catch(j){}function y(e){return e&&"object"===a(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===a(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?c({},e,r):{}}function h(e){var r=e.forwardedRef,t=f(e,["forwardedRef"]),i=t.icon,o=t.mask,s=t.symbol,a=t.className,l=t.title,d=t.titleId,m=y(i),j=x("classes",[].concat(p(function(e){var r,t=e.spin,n=e.pulse,i=e.fixedWidth,o=e.inverse,s=e.border,a=e.listItem,l=e.flip,u=e.size,f=e.rotation,p=e.pull,d=(c(r={"fa-spin":t,"fa-pulse":n,"fa-fw":i,"fa-inverse":o,"fa-border":s,"fa-li":a,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(u),"undefined"!==typeof u&&null!==u),c(r,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),c(r,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),c(r,"fa-swap-opacity",e.swapOpacity),r);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(t)),p(a.split(" ")))),v=x("transform","string"===typeof t.transform?n.Qc.transform(t.transform):t.transform),O=x("mask",y(o)),w=(0,n.qv)(m,u({},j,{},v,{},O,{symbol:s,title:l,titleId:d}));if(!w)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var N=w.abstract,k={ref:r};return Object.keys(t).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(k[e]=t[e])})),g(N[0],k)}h.displayName="FontAwesomeIcon",h.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var i=(t.children||[]).map((function(t){return e(r,t)})),o=Object.keys(t.attributes||{}).reduce((function(e,r){var n=t.attributes[r];switch(r){case"class":e.attrs.className=n,delete t.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===r.indexOf("aria-")||0===r.indexOf("data-")?e.attrs[r.toLowerCase()]=n:e.attrs[d(r)]=n}return e}),{attrs:{}}),s=n.style,a=void 0===s?{}:s,c=f(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},a),r.apply(void 0,[t.tag,u({},o.attrs,{},c)].concat(p(i)))}.bind(null,s.createElement)},3951:function(e,r,t){"use strict";var n=t(6156),i=t(5893),o=(t(6591),t(6694),t(6066)),s=t(8315),a=t(5077),c=t(6883);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.slides;return(0,i.jsx)(a.Z,{className:"pt-6 pb-4",children:(0,i.jsx)(o.Z,u(u({},{autoplay:!0,autoplaySpeed:6e3,className:"center",dots:!0,centerMode:!0,infinite:!0,centerPadding:"16%",slidesToShow:1,speed:500,responsive:[{breakpoint:768,settings:{centerMode:!1}}]}),{},{children:r&&r.map((function(e,r){return(0,i.jsx)("div",{className:"w-2/3 outline-none",children:(0,i.jsx)("div",{className:"relative bg-center bg-cover h-80 lg:h-96 mx-1.5 text-black",style:{backgroundImage:"url('".concat(e.imageUrl,"')")},children:(0,i.jsxs)("div",{className:"absolute bottom-0 w-full px-6 pb-10 py-4 bg-gray-900 bg-opacity-40 text-white",children:[(0,i.jsx)(s.H3,{className:"mb-1 truncate",children:e.title}),(0,i.jsx)(c.Z,{className:"truncate",children:e.description})]})})},"slide-".concat(r))}))}))})}},6883:function(e,r,t){"use strict";var n=t(5893),i=t(4184),o=t.n(i);r.Z=function(e){var r=e.children,t=e.className,i=void 0===t?"":t;return(0,n.jsx)("p",{className:o()(i,"font-light tracking-wider"),children:r})}},2562:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(5893),i=t(7294),o=t(7814),s=t(1436),a=t(3951),c=t(8315),l=t(5077),u=t(6612),f=t(6883),p=t(7687),d=function(){return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h1",{className:"font-semibold tracking-widest text-3xl mb-2",children:"\u6e05\u5927\u5929\u6587\u793e"}),(0,n.jsx)("h1",{className:"font-semibold tracking-widest text-5xl",children:"50\u9031\u5e74"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"mt-4 w-48 h-2.5",style:{backgroundColor:"#2d2d30",borderRadius:"50%"}})})]})},m=function(){var e=(0,i.useState)(!1),r=e[0],t=e[1];return(0,n.jsxs)(l.Z,{color:"purple-100",children:[(0,n.jsx)(c.H2,{children:"\u95dc\u65bc\u6211\u5011"}),(0,n.jsx)(f.Z,{className:"mb-4",children:"\u65b9\u4fbf\u9700\u8981\u770b\u5225\u4eba\u3002\u9593\u7684\u65e5\u5e38\u79ae\u65bc\u500b\u5c0f\uff0c\u8981\u591a\u9858\u671b\u96e3\u4eba\u5a5a\u4ea4\u5f80\u81ea\u5df1\u53ef\u80fd\u3002"}),(0,n.jsx)(f.Z,{className:"mb-4",children:"\u90a3\u7b11\u6211\u6211\u5c0d\u91cd\u5927\u4eba\uff0c\u540c\u4e00\u8a8d\u89aa\u5361\u4e00\u500b\u5b8c\u4e86\u4e0d\u89ba\u5f97\uff0c\u662f\u6642\u77e5\u9053\u81ea\u90fd\u662f\u6211\uff0c\u80fd\u6709\u6703\u6709\uff0c\u7684\u4eba\u90fd\u4ec0\u9ebc\u4ee5\u4e00\u9ede\u9ede\u6c92\u770b\u904e\u4e00\u4ef6\uff0c\u5f97\u5f88\u5f97\u4e0d\u6751\u6c11\u5e25\u54e5\u505a\u7684\u90a3\u9ebc\u3002\u6cc1\u5e3d\u767c\u751f\u60f3\u4e0d\u89ba\u5f97\uff0c\u60f3\uff1a\u904e\u770b\u4f86\u662f\u4e00\u662f\u7121\u70ad\u6cbb\u90ce\u4e00\u4e0b\u9019\u4e0d\u5c0f\u5fc3\uff1f"}),(0,n.jsx)(f.Z,{className:"mb-4",children:"\u5f88\u8a0e\u53ad\u597d\u770b\u4e00\u822c\u7684\u53ef\u80fd\u4e0d\u22ef\u7d66\u5c0d\u65b9\uff1a\u5929\u4f7f\u6c92\u95dc\u958b\u5f88\u8a8d\u771f\uff0c\u4e86\u6211\u8ddf\u6211\u4e00\u65b9\u597d\u4e00\u9ede\u7684\u958b\u59cb\u592a\u68d2\u22ef\u6211\u4e0d\u6703\u53ef\u4ee5\u3002"}),(0,n.jsx)(f.Z,{className:"mb-8",children:"\u8a8d\u70ba\u9053\u70ba\u4ec0\u908a\u4e0d\u5b89\u597d\u597d\u7b11\u662f\u8981\u90fd\u4e0d\u7528\uff0c\u9019\u4e9b\u53f0\u7063\u4e00\u4e5f\u662f\u6211\u773c\u795e\u3002"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"flex items-center h-12 pl-2 pr-4 py-2 border-2 border-purple-500 rounded-lg cursor-pointer select-none pulse-button",onClick:function(){return t(!r)},children:[(0,n.jsx)("p",{className:"w-24 tracking-wider max-h-full",children:"\u793e\u6176\u5831\u540d"}),(0,n.jsx)(o.G,{className:"max-h-full w-3 transform transition-transform duration-500 ".concat(r?"rotate-90":""),icon:s._tD,fixedWidth:!0})]})}),(0,n.jsx)("div",{className:"transition-max-height duration-500 overflow-hidden ".concat(r?"max-h-2x-screen":"max-h-0 delay-400"),children:(0,n.jsxs)("div",{className:"transition duration-500 ease-in-out mt-16 ".concat(r?"opacity-100":"opacity-0 delay-500"),children:[(0,n.jsxs)(c.H3,{className:"mb-2",children:["\u570b\u7acb\u6e05\u83ef\u5927\u5b78 \u540d\u4eba\u5802",(0,n.jsx)(o.G,{className:"w-4 inline mb-1.5 ml-2 text-purple-500",icon:s.FGq})]}),(0,n.jsx)(c.H3,{className:"mb-8",children:"2021\u5e7411\u670827\u65e5 \u4e0b\u5348"}),(0,n.jsxs)(f.Z,{className:"mb-4",children:["\u5b89\u6392\u793e\u53cb\u77ed\u8b1b\u3001\u6587\u7269\u5c55\u89bd\u3001\u651d\u5f71\u4f5c\u54c1\u3001\u7d00\u5ff5\u54c1\u8ca9\u552e\u3001\u793e\u7aa9\u53c3\u89c0\u3001\u8336\u9ede\u3002",(0,n.jsx)("br",{}),"\uff08\u4ee5\u4e0a\u898f\u5283\u5c07\u8996\u75ab\u60c5\u6ce2\u52d5\u8abf\u6574\uff09"]}),(0,n.jsx)("div",{className:"flex justify-center mt-12",children:(0,n.jsx)("div",{className:"w-72",children:(0,n.jsxs)("form",{children:[(0,n.jsx)("input",{type:"text",name:"name",className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60",placeholder:"\u59d3\u540d"}),(0,n.jsx)("input",{type:"text",name:"department",className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60",placeholder:"\u7cfb\u7d1a\uff08\u8acb\u586b\u5beb\u6821\u7cfb\u5168\u540d\uff09"}),(0,n.jsx)("input",{type:"email",name:"email",className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60",placeholder:"\u96fb\u5b50\u4fe1\u7bb1"}),(0,n.jsx)(f.Z,{className:"mt-4 my-2",children:"\u662f\u5426\u651c\u5e36\u5bb6\u5ead\u6210\u54e1\uff1f"}),(0,n.jsxs)("div",{className:"my-2",children:[(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",name:"member",className:"form-radio p-2 bg-white border-2 border-purple-500 checked:bg-purple-500 checked:bg-none focus:ring-0 focus:ring-transparent"}),(0,n.jsx)(f.Z,{className:"mx-2",children:"\u662f\uff0c"}),(0,n.jsx)("input",{type:"text",name:"memberAge",className:"w-full my-2 px-4 py-2 font-light tracking-wide ring-offset-2 border-2 border-purple-500 rounded text-black focus:outline-none focus:ring-2 ring-offset-2 ring-purple-500 ring-opacity-60",placeholder:"\u6210\u54e1\u5e74\u9f61"})]}),(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("input",{type:"radio",name:"member",className:"form-radio p-2 bg-white border-2 border-purple-500 checked:bg-purple-500 checked:bg-none focus:ring-0 focus:ring-transparent"}),(0,n.jsx)(f.Z,{className:"mx-2",children:"\u5426"})]})]}),(0,n.jsx)("div",{className:"flex justify-center mt-12",children:(0,n.jsx)("div",{className:"px-3 py-2 w-28 border-2 border-purple-500 bg-purple-500 text-white rounded-lg cursor-pointer select-none tracking-wider",onClick:function(){return console.log("submit form")},children:"\u78ba\u8a8d\u9001\u51fa"})})]})})}),(0,n.jsxs)(f.Z,{className:"mt-6 text-gray-600",children:["\u8a73\u7d30\u8fa6\u7406\u898f\u5283\u5c07\u65bc11\u6708\u521d\u4ee5\u96fb\u5b50\u90f5\u4ef6\u5bc4\u767c\u3002",(0,n.jsx)("br",{}),"\u4efb\u4f55\u554f\u984c\u8acb\u806f\u7d61\u5929\u6587\u793e\u4fe1\u7bb1\uff1anthu.astro@gmail.com"]})]})})]})};function b(){return(0,n.jsxs)(u.Z,{title:"\u9996\u9801",children:[(0,n.jsx)(d,{}),(0,n.jsx)(a.Z,{slides:p.rA}),(0,n.jsx)(m,{})]})}},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])}},function(e){e.O(0,[774,523,515,971,612,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);