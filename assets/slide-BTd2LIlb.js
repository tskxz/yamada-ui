import{j as f}from"./jsx-runtime-2xDJh5tt.js";import{u as N}from"./index-DqoR4ST1.js";import{A as S}from"./index-_tcQm2Fk.js";import{M as R}from"./motion-Ca3VN97B.js";import{b as a,a as T,t as _}from"./utils-BA6yXg59.js";import{f as w}from"./forward-ref-DuAegr0M.js";import{a as M}from"./factory-kXR3An-G.js";const i=(t="right")=>{switch(t){case"right":return a.slideRight;case"left":return a.slideLeft;case"bottom":return a.slideDown;case"top":return a.slideUp}},P={enter:({placement:t,transition:e,transitionEnd:r,delay:s,duration:o,enter:c}={})=>({...i(t).enter,transition:T(e==null?void 0:e.enter)(s,o),transitionEnd:r==null?void 0:r.enter,...c}),exit:({placement:t,transition:e,transitionEnd:r,delay:s,duration:o,exit:c}={})=>({...i(t).exit,transition:_(e==null?void 0:e.exit)(s,o),transitionEnd:r==null?void 0:r.exit,...c})},b={initial:"exit",animate:"enter",exit:"exit",variants:P},U=w(({unmountOnExit:t,isOpen:e,placement:r="right",transition:s,transitionEnd:o,delay:c,duration:p={enter:.4,exit:.3},className:x,__css:u,...d},h)=>{const g=e||t?"enter":"exit",m=N(r),l={placement:m,transition:s,transitionEnd:o,delay:c,duration:p};e=t?e&&t:!0;const{position:A}=i(m),I={position:"fixed",zIndex:110,...u,...A};return f(S,{custom:l,children:e?f(R,{ref:h,className:M("ui-slide",x),custom:l,...b,animate:g,__css:I,...d}):null})});export{U as S};