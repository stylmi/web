import{r as m,a as x}from"./vendor-b4aa003a.js";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=m,v=Symbol.for("react.element"),d=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,R=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,o){var e,s={},a=null,p=null;o!==void 0&&(a=""+o),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)j.call(r,e)&&!O.hasOwnProperty(e)&&(s[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:v,type:t,key:a,ref:p,props:s,_owner:R.current}}n.Fragment=d;n.jsx=l;n.jsxs=l;c.exports=n;var _=c.exports;const b=_.jsx,g=_.jsxs;var f={},i=x;f.createRoot=i.createRoot,f.hydrateRoot=i.hydrateRoot;function u(){return u=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var e in o)({}).hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t},u.apply(null,arguments)}export{u as _,b as a,f as c,g as j};
//# sourceMappingURL=three-f5a7bfc2.js.map
