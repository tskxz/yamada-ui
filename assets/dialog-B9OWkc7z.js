import{j as l}from"./jsx-runtime-CKrituN3.js";import{u as Pt}from"./index-mdwqubC6.js";import{r as h,R as Et}from"./index-CBqU2yxZ.js";import{c as Ee,a as It,u as jt,R as Nt}from"./Combination-DlzjZhkT.js";import{S as St}from"./slide-QP6mCrsr.js";import{m as kt}from"./motion-JgkBPv6g.js";import{f as Mt}from"./fade-DTN3xAFK.js";import{f as g}from"./forward-ref-DuAegr0M.js";import{an as At,L as Bt,r as Ie,x as X,z as P,E as Tt,c as O,u as Z,h as Ke,a0 as Lt,a1 as Ut,g as ve}from"./factory-DKdOmnTE.js";import{C as Wt}from"./close-button-0-3R9bmA.js";import{a as je}from"./use-component-style-CM81S9bB.js";import{o as Ne}from"./theme-provider-6JRwGmsH.js";import{A as Ht}from"./index-_tcQm2Fk.js";import{P as Gt}from"./container-portal-D2xVMWUg.js";import{_ as we,a as Rt,b as qt}from"./defineProperty-oP4RI-GC.js";import{M as Vt}from"./motion-CLgphBsa.js";import{B as me}from"./button-oNOtr6rX.js";import{s as ee}from"./slide-fade-DSkGhpsW.js";import{s as $t}from"./scale-fade-BKc-0Sur.js";var Ce="data-focus-lock",Xe="data-focus-lock-disabled",Yt="data-no-focus-lock",Kt="data-autofocus-inside",Xt="data-no-autofocus",he={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},Ze=Ee({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),Je=Ee(),Zt=Ee(),Jt=It({async:!0}),Qt=[],Se=h.forwardRef(function(t,r){var n,o=h.useState(),a=o[0],s=o[1],u=h.useRef(),c=h.useRef(!1),f=h.useRef(null),d=t.children,i=t.disabled,m=t.noFocusGuards,v=t.persistentFocus,p=t.crossFrame,y=t.autoFocus;t.allowTextSelection;var x=t.group,w=t.className,b=t.whiteList,C=t.hasPositiveIndices,j=t.shards,k=j===void 0?Qt:j,N=t.as,M=N===void 0?"div":N,I=t.lockProps,S=I===void 0?{}:I,A=t.sideCar,_=t.returnFocus,D=t.focusOptions,F=t.onActivation,L=t.onDeactivation,Q=h.useState({}),ie=Q[0],le=h.useCallback(function(){f.current=f.current||document&&document.activeElement,u.current&&F&&F(u.current),c.current=!0},[F]),U=h.useCallback(function(){c.current=!1,L&&L(u.current)},[L]);h.useEffect(function(){i||(f.current=null)},[]);var W=h.useCallback(function(B){var $=f.current;if($&&$.focus){var fe=typeof _=="function"?_($):_;if(fe){var He=typeof fe=="object"?fe:void 0;f.current=null,B?Promise.resolve().then(function(){return $.focus(He)}):$.focus(He)}}},[_]),de=h.useCallback(function(B){c.current&&Ze.useMedium(B)},[]),z=Je.useMedium,Ct=h.useCallback(function(B){u.current!==B&&(u.current=B,s(B))},[]),_t=we((n={},n[Xe]=i&&"disabled",n[Ce]=x,n),S),We=m!==!0,Ft=We&&m!=="tail",Dt=jt([r,Ct]);return h.createElement(h.Fragment,null,We&&[h.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:i?-1:0,style:he}),C?h.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:i?-1:1,style:he}):null],!i&&h.createElement(A,{id:ie,sideCar:Jt,observed:a,disabled:i,persistentFocus:v,crossFrame:p,autoFocus:y,whiteList:b,shards:k,onActivation:le,onDeactivation:U,returnFocus:W,focusOptions:D}),h.createElement(M,we({ref:Dt},_t,{className:w,onBlur:z,onFocus:de}),d),Ft&&h.createElement("div",{"data-focus-guard":!0,tabIndex:i?-1:0,style:he}))});Se.propTypes={};Se.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const Qe=Se;function _e(e,t){return _e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},_e(e,t)}function zt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_e(e,t)}function er(e,t){function r(n){return n.displayName||n.name||"Component"}return function(o){var a=[],s;function u(){s=e(a.map(function(f){return f.props})),t(s)}var c=function(f){zt(d,f);function d(){return f.apply(this,arguments)||this}d.peek=function(){return s};var i=d.prototype;return i.componentDidMount=function(){a.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var v=a.indexOf(this);a.splice(v,1),u()},i.render=function(){return Et.createElement(o,this.props)},d}(h.PureComponent);return Rt(c,"displayName","SideEffect("+r(o)+")"),c}}var E=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},ne=function(e){return Array.isArray(e)?e:[e]},ze=function(e){return Array.isArray(e)?e[0]:e},tr=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},et=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},tt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},rr=function(e,t){return!e||tt(e)||!tr(e)&&t(et(e))},rt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=rr(t,rt.bind(void 0,e));return e.set(t,n),n},nr=function(e,t){return e&&!tt(e)?sr(e)?t(et(e)):!1:!0},nt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=nr(t,nt.bind(void 0,e));return e.set(t,n),n},ot=function(e){return e.dataset},or=function(e){return e.tagName==="BUTTON"},at=function(e){return e.tagName==="INPUT"},st=function(e){return at(e)&&e.type==="radio"},ar=function(e){return!((at(e)||or(e))&&(e.type==="hidden"||e.disabled))},sr=function(e){var t=e.getAttribute(Xt);return![!0,"true",""].includes(t)},ke=function(e){var t;return!!(e&&(!((t=ot(e))===null||t===void 0)&&t.focusGuard))},oe=function(e){return!ke(e)},ur=function(e){return!!e},cr=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},ut=function(e,t,r){return E(e).map(function(n,o){return{node:n,index:o,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(cr)},ir=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Me=ir.join(","),lr="".concat(Me,", [data-focus-guard]"),ct=function(e,t){return E((e.shadowRoot||e).children).reduce(function(r,n){return r.concat(n.matches(t?lr:Me)?[n]:[],ct(n))},[])},dr=function(e,t){var r;return e instanceof HTMLIFrameElement&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?ce([e.contentDocument.body],t):[e]},ce=function(e,t){return e.reduce(function(r,n){var o,a=ct(n,t),s=(o=[]).concat.apply(o,a.map(function(u){return dr(u,t)}));return r.concat(s,n.parentNode?E(n.parentNode.querySelectorAll(Me)).filter(function(u){return u===n}):[])},[])},fr=function(e){var t=e.querySelectorAll("[".concat(Kt,"]"));return E(t).map(function(r){return ce([r])}).reduce(function(r,n){return r.concat(n)},[])},Ae=function(e,t){return E(e).filter(function(r){return rt(t,r)}).filter(function(r){return ar(r)})},Ge=function(e,t){return t===void 0&&(t=new Map),E(e).filter(function(r){return nt(t,r)})},Fe=function(e,t,r){return ut(Ae(ce(e,r),t),!0,r)},Re=function(e,t){return ut(Ae(ce(e),t),!1)},vr=function(e,t){return Ae(fr(e),t)},G=function(e,t){return e.shadowRoot?G(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:E(e.children).some(function(r){var n;if(r instanceof HTMLIFrameElement){var o=(n=r.contentDocument)===null||n===void 0?void 0:n.body;return o?G(o,t):!1}return G(r,t)})},mr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var o=n+1;o<r;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(s,u){return!t.has(u)})},it=function(e){return e.parentNode?it(e.parentNode):e},Be=function(e){var t=ne(e);return t.filter(Boolean).reduce(function(r,n){var o=n.getAttribute(Ce);return r.push.apply(r,o?mr(E(it(n).querySelectorAll("[".concat(Ce,'="').concat(o,'"]:not([').concat(Xe,'="disabled"])')))):[n]),r},[])},hr=function(e){try{return e()}catch{return}},Y=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Y(t.shadowRoot):t instanceof HTMLIFrameElement&&hr(function(){return t.contentWindow.document})?Y(t.contentWindow.document):t}},pr=function(e,t){return e===t},yr=function(e,t){return!!E(e.querySelectorAll("iframe")).some(function(r){return pr(r,t)})},lt=function(e,t){return t===void 0&&(t=Y(ze(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Be(e).some(function(r){return G(r,t)||yr(r,t)})},br=function(e){e===void 0&&(e=document);var t=Y(e);return t?E(e.querySelectorAll("[".concat(Yt,"]"))).some(function(r){return G(r,t)}):!1},gr=function(e,t){return t.filter(st).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Te=function(e,t){return st(e)&&e.name?gr(e,t):e},xr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Te(r,e))}),e.filter(function(r){return t.has(r)})},qe=function(e){return e[0]&&e.length>1?Te(e[0],e):e[0]},Ve=function(e,t){return e.length>1?e.indexOf(Te(e[t],e)):t},dt="NEW_FOCUS",Or=function(e,t,r,n){var o=e.length,a=e[0],s=e[o-1],u=ke(r);if(!(r&&e.indexOf(r)>=0)){var c=r!==void 0?t.indexOf(r):-1,f=n?t.indexOf(n):c,d=n?e.indexOf(n):-1,i=c-f,m=t.indexOf(a),v=t.indexOf(s),p=xr(t),y=r!==void 0?p.indexOf(r):-1,x=y-(n?p.indexOf(n):c),w=Ve(e,0),b=Ve(e,o-1);if(c===-1||d===-1)return dt;if(!i&&d>=0)return d;if(c<=m&&u&&Math.abs(i)>1)return b;if(c>=v&&u&&Math.abs(i)>1)return w;if(i&&Math.abs(x)>1)return d;if(c<=m)return b;if(c>v)return w;if(i)return Math.abs(i)>1?d:(o+d+i)%o}},wr=function(e){return function(t){var r,n=(r=ot(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},Cr=function(e,t,r){var n=e.map(function(a){var s=a.node;return s}),o=Ge(n.filter(wr(r)));return o&&o.length?qe(o):qe(Ge(t))},De=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&De(e.parentNode.host||e.parentNode,t),t},pe=function(e,t){for(var r=De(e),n=De(t),o=0;o<r.length;o+=1){var a=r[o];if(n.indexOf(a)>=0)return a}return!1},ft=function(e,t,r){var n=ne(e),o=ne(t),a=n[0],s=!1;return o.filter(Boolean).forEach(function(u){s=pe(s||u,u)||s,r.filter(Boolean).forEach(function(c){var f=pe(a,c);f&&(!s||G(f,s)?s=f:s=pe(f,s))})}),s},_r=function(e,t){return e.reduce(function(r,n){return r.concat(vr(n,t))},[])},Fr=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(ur)},Dr=function(e,t){var r=Y(ne(e).length>0?document:ze(e).ownerDocument),n=Be(e).filter(oe),o=ft(r||e,e,n),a=new Map,s=Re(n,a),u=Fe(n,a).filter(function(v){var p=v.node;return oe(p)});if(!(!u[0]&&(u=s,!u[0]))){var c=Re([o],a).map(function(v){var p=v.node;return p}),f=Fr(c,u),d=f.map(function(v){var p=v.node;return p}),i=Or(d,c,r,t);if(i===dt){var m=Cr(s,d,_r(n,a));if(m)return{node:m};console.warn("focus-lock: cannot find any node to move focus into");return}return i===void 0?i:f[i]}},Pr=function(e){var t=Be(e).filter(oe),r=ft(e,e,t),n=new Map,o=Fe([r],n,!0),a=Fe(t,n).filter(function(s){var u=s.node;return oe(u)}).map(function(s){var u=s.node;return u});return o.map(function(s){var u=s.node,c=s.index;return{node:u,index:c,lockItem:a.indexOf(u)>=0,guard:ke(u)}})},Er=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ye=0,be=!1,vt=function(e,t,r){r===void 0&&(r={});var n=Dr(e,t);if(!be&&n){if(ye>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),be=!0,setTimeout(function(){be=!1},1);return}ye++,Er(n.node,r.focusOptions),ye--}};function Le(e){setTimeout(e,1)}var Ir=function(){return document&&document.activeElement===document.body},jr=function(){return Ir()||br()},R=null,H=null,q=null,K=!1,Nr=function(){return!0},Sr=function(t){return(R.whiteList||Nr)(t)},kr=function(t,r){q={observerNode:t,portaledElement:r}},Mr=function(t){return q&&q.portaledElement===t};function $e(e,t,r,n){var o=null,a=e;do{var s=n[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=r)!==t);o&&(o.node.tabIndex=0)}var Ar=function(t){return t&&"current"in t?t.current:t},Br=function(t){return t?!!K:K==="meanwhile"},Tr=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},Lr=function(t,r){return r.some(function(n){return Tr(t,n,n)})},ae=function(){var t=!1;if(R){var r=R,n=r.observed,o=r.persistentFocus,a=r.autoFocus,s=r.shards,u=r.crossFrame,c=r.focusOptions,f=n||q&&q.portaledElement,d=document&&document.activeElement;if(f){var i=[f].concat(s.map(Ar).filter(Boolean));if((!d||Sr(d))&&(o||Br(u)||!jr()||!H&&a)&&(f&&!(lt(i)||d&&Lr(d,i)||Mr(d))&&(document&&!H&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=vt(i,H,{focusOptions:c}),q={})),K=!1,H=document&&document.activeElement),document){var m=document&&document.activeElement,v=Pr(i),p=v.map(function(y){var x=y.node;return x}).indexOf(m);p>-1&&(v.filter(function(y){var x=y.guard,w=y.node;return x&&w.dataset.focusAutoGuard}).forEach(function(y){var x=y.node;return x.removeAttribute("tabIndex")}),$e(p,v.length,1,v),$e(p,-1,-1,v))}}}return t},mt=function(t){ae()&&t&&(t.stopPropagation(),t.preventDefault())},Ue=function(){return Le(ae)},Ur=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||kr(n,r)},Wr=function(){return null},ht=function(){K="just",Le(function(){K="meanwhile"})},Hr=function(){document.addEventListener("focusin",mt),document.addEventListener("focusout",Ue),window.addEventListener("blur",ht)},Gr=function(){document.removeEventListener("focusin",mt),document.removeEventListener("focusout",Ue),window.removeEventListener("blur",ht)};function Rr(e){return e.filter(function(t){var r=t.disabled;return!r})}function qr(e){var t=e.slice(-1)[0];t&&!R&&Hr();var r=R,n=r&&t&&t.id===r.id;R=t,r&&!n&&(r.onDeactivation(),e.filter(function(o){var a=o.id;return a===r.id}).length||r.returnFocus(!t)),t?(H=null,(!n||r.observed!==t.observed)&&t.onActivation(),ae(),Le(ae)):(Gr(),H=null)}Ze.assignSyncMedium(Ur);Je.assignMedium(Ue);Zt.assignMedium(function(e){return e({moveFocusInside:vt,focusInside:lt})});const Vr=er(Rr,qr)(Wr);var pt=h.forwardRef(function(t,r){return h.createElement(Qe,we({sideCar:Vr,ref:r},t))}),yt=Qe.propTypes||{};yt.sideCar;qt(yt,["sideCar"]);pt.propTypes={};const $r=pt,Yr=At($r),Kr=({initialFocusRef:e,finalFocusRef:t,contentRef:r,restoreFocus:n,children:o,isDisabled:a,autoFocus:s,persistentFocus:u,lockFocusAcrossFrames:c})=>{const f=h.useCallback(()=>{e!=null&&e.current?e.current.focus():r!=null&&r.current&&Bt(r.current).length===0&&requestAnimationFrame(()=>{var v;(v=r.current)==null||v.focus()})},[e,r]),d=h.useCallback(()=>{var m;(m=t==null?void 0:t.current)==null||m.focus()},[t]),i=n&&!t;return l.jsx(Yr,{crossFrame:c,persistentFocus:u,autoFocus:s,disabled:a,onActivation:f,onDeactivation:d,returnFocus:i,children:o})},[Xr,V]=Ie({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),xn=g(({size:e,placement:t="right",closeOnDrag:r,...n},o)=>{const[a,s]=je("Drawer",{size:e,placement:t,...n}),{children:u,isOpen:c,onClose:f,onOverlayClick:d,onEsc:i,onCloseComplete:m,withCloseButton:v=!0,withOverlay:p=!0,allowPinchZoom:y,autoFocus:x,restoreFocus:w,initialFocusRef:b,finalFocusRef:C,blockScrollOnMount:j,closeOnOverlay:k,closeOnEsc:N,lockFocusAcrossFrames:M,duration:I={enter:.4,exit:.3},portalProps:S,...A}=Ne(s),_=X(u),[D,...F]=P(_,Pe);return l.jsx(Xr,{value:a,children:l.jsxs(gt,{ref:o,isOpen:c,onClose:f,onOverlayClick:d,onEsc:i,onCloseComplete:m,withCloseButton:!1,withOverlay:!1,allowPinchZoom:y,autoFocus:x,restoreFocus:w,initialFocusRef:b,finalFocusRef:C,blockScrollOnMount:j,closeOnOverlay:k,closeOnEsc:N,lockFocusAcrossFrames:M,duration:I,portalProps:S,children:[D??(p?l.jsx(Pe,{}):null),l.jsx(bt,{closeOnDrag:r,withCloseButton:v,...Tt(A,["isFullHeight"]),placement:t,children:F})]})})}),bt=g(({className:e,children:t,placement:r,withCloseButton:n,closeOnDrag:o,...a},s)=>{const{isOpen:u,onClose:c,duration:f}=T(),d=V(),i=X(t),[m,...v]=P(i,Ye),p={display:"flex",flexDirection:"column",width:"100%",outline:0,...d.container},y=h.useCallback(()=>{switch(r){case"top":return{bottom:0};case"bottom":return{top:0};case"left":return{right:0};case"right":return{left:0}}},[r]),x=h.useCallback(()=>{switch(r){case"top":case"bottom":return"y";case"left":case"right":return"x"}},[r]),w=h.useCallback(b=>{switch(r){case"top":return b.velocity.y<=-100||b.offset.y<=-80;case"bottom":return b.velocity.y>=100||b.offset.y>=80;case"left":return b.velocity.x<=-100||b.offset.x<=-80;case"right":return b.velocity.x>=100||b.offset.x>=80}},[r]);return l.jsxs(St,{ref:s,drag:o?x():!1,dragConstraints:y(),dragElastic:y(),dragSnapToOrigin:!0,dragMomentum:!1,onDragEnd:(b,C)=>{w(C)&&(c==null||c())},className:O("ui-drawer",e),tabIndex:-1,isOpen:u,placement:r,duration:f,__css:p,...a,children:[m??(n&&c?l.jsx(Ye,{}):null),v]})}),Pe=g(({className:e,...t},r)=>{const o={...V().overlay};return l.jsx(se,{ref:r,className:O("ui-drawer__overlay",e),__css:o,...t})}),Ye=g(({className:e,...t},r)=>{const o={...V().closeButton};return l.jsx(ue,{ref:r,className:O("ui-drawer__close-button",e),__css:o,...t})}),On=g(({className:e,...t},r)=>{const o={...V().header};return l.jsx(xt,{ref:r,className:O("ui-drawer__header",e),__css:o,...t})}),wn=g(({className:e,...t},r)=>{const o={...V().body};return l.jsx(Ot,{ref:r,className:O("ui-drawer__body",e),__css:o,...t})}),Cn=g(({className:e,...t},r)=>{const o={...V().footer};return l.jsx(wt,{ref:r,className:O("ui-drawer__footer",e),__css:o,...t})}),[Zr,T]=Ie({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),gt=g(({size:e,...t},r)=>{const[n,o]=je("Modal",{size:e,...t}),{className:a,children:s,isOpen:u,onClose:c,onOverlayClick:f,onEsc:d,onCloseComplete:i,placement:m="center",outside:v="fallback(4, 1rem)",withCloseButton:p=!0,withOverlay:y=!0,allowPinchZoom:x=!1,scrollBehavior:w="inside",autoFocus:b,restoreFocus:C,initialFocusRef:j,finalFocusRef:k,blockScrollOnMount:N=!0,closeOnOverlay:M=!0,closeOnEsc:I=!0,lockFocusAcrossFrames:S=!0,animation:A="scale",duration:_,portalProps:D,...F}=Ne(o),L=h.useCallback(z=>{z.key==="Escape"&&(z.stopPropagation(),I&&(c==null||c()),d==null||d())},[I,c,d]),Q=X(s),[ie,...le]=P(Q,se,te,Pe);let[U]=P(Q,bt);U&&(U=h.cloneElement(U,{onKeyDown:L}));const W=Pt(m),de={position:"fixed",top:0,left:0,zIndex:"fallback(jeice, 110)",w:"100vw",h:"100dvh",p:e!=="full"?v:void 0,display:"flex",justifyContent:W.includes("left")?"flex-start":W.includes("right")?"flex-end":"center",alignItems:W.includes("top")?"flex-start":W.includes("bottom")?"flex-end":"center"};return l.jsx(Zr,{value:{isOpen:u,onClose:c,onOverlayClick:f,withCloseButton:p,scrollBehavior:w,closeOnOverlay:M,animation:A,duration:_,styles:n},children:l.jsx(Ht,{onExitComplete:i,children:u?l.jsx(Gt,{...D,children:l.jsx(Kr,{autoFocus:b,initialFocusRef:j,finalFocusRef:k,restoreFocus:C,lockFocusAcrossFrames:S,children:l.jsx(Nt,{allowPinchZoom:x,enabled:N,forwardProps:!0,children:l.jsxs(Z.div,{__css:de,children:[ie??(y&&e!=="full"?l.jsx(se,{}):null),U??l.jsx(Qr,{ref:r,className:a,onKeyDown:L,...F,children:le})]})})})}):null})})}),Jr=(e="scale",t)=>{switch(e){case"scale":return{...$t,custom:{scale:.95,reverse:!0,duration:t}};case"top":return{...ee,custom:{offsetY:-16,reverse:!0,duration:t}};case"right":return{...ee,custom:{offsetX:16,reverse:!0,duration:t}};case"left":return{...ee,custom:{offsetX:-16,reverse:!0,duration:t}};case"bottom":return{...ee,custom:{offsetY:16,reverse:!0,duration:t}}}},Qr=g(({className:e,children:t,__css:r,...n},o)=>{const{styles:a,scrollBehavior:s,withCloseButton:u,onClose:c,animation:f,duration:d}=T(),i=X(t),[m,...v]=P(i,ue,re),p=f!=="none"?Jr(f,d):{},y={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:s==="inside"?"hidden":"auto",outline:0,...r||a.container};return l.jsxs(Vt,{as:"section",ref:o,className:O("ui-modal",e),tabIndex:-1,__css:y,...p,...n,children:[m??(u&&c?l.jsx(ue,{}):null),v]})}),se=g(({className:e,__css:t,onClick:r,...n},o)=>{const{styles:a,closeOnOverlay:s,onOverlayClick:u,onClose:c,animation:f,duration:d}=T(),i={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...t||a.overlay},m=f!=="none"?Mt:{};return l.jsx(Z.div,{as:kt.div,ref:o,className:O("ui-modal__overlay",e),custom:{duration:d},__css:i,onClick:Ke(r,u,v=>{v.stopPropagation(),s&&(c==null||c())}),...m,...n})}),ue=g(({onClick:e,__css:t,...r},n)=>{const{styles:o,onClose:a}=T(),s={position:"absolute",...t||o.closeButton};return l.jsx(Wt,{ref:n,className:O("ui-modal__close-button"),__css:s,onClick:Ke(e,u=>{u.stopPropagation(),a==null||a()}),...r})}),xt=g(({className:e,__css:t,...r},n)=>{const{styles:o}=T(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...t||o.header};return l.jsx(Z.header,{ref:n,className:O("ui-modal__header",e),__css:a,...r})}),Ot=g(({className:e,__css:t,...r},n)=>{const{styles:o,scrollBehavior:a}=T(),s={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...t||o.body};return l.jsx(Z.main,{ref:n,className:O("ui-modal__body",e),__css:s,...r})}),wt=g(({className:e,__css:t,...r},n)=>{const{styles:o}=T(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...t||o.footer};return l.jsx(Z.footer,{ref:n,className:O("ui-modal__footer",e),__css:a,...r})}),[zr,J]=Ie({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),_n=g(({size:e,...t},r)=>{const[n,o]=je("Dialog",{size:e,...t}),{className:a,children:s,withOverlay:u=!0,withCloseButton:c=!0,header:f,footer:d,cancel:i,other:m,success:v,onClose:p,onCancel:y,onOther:x,onSuccess:w,...b}=Ne(o),C=X(s),[j]=P(C,te),[k]=P(C,re),[N]=P(C,ge),[M]=P(C,xe),[I]=P(C,Oe),S=Lt(C)?s:Ut(C,te,re,ge,xe,Oe),A={...n.container},_=ve(i)?{children:i}:i,D=ve(m)?{children:m}:m,F=ve(v)?{children:v}:v;return _&&!_.variant&&(_.variant="ghost"),D&&!D.colorScheme&&(D.colorScheme="secondary"),F&&!F.colorScheme&&(F.colorScheme="primary"),l.jsx(zr,{value:n,children:l.jsxs(gt,{ref:r,className:O("ui-dialog",a),__css:A,size:e,onClose:p,withOverlay:!1,withCloseButton:!1,...b,children:[j??(u&&e!=="full"?l.jsx(te,{}):null),k??(c&&p?l.jsx(re,{}):null),N??(f?l.jsx(ge,{children:f}):null),M??(S?l.jsx(xe,{children:S}):null),I??(d||_||D||F?l.jsx(Oe,{children:d??l.jsxs(l.Fragment,{children:[_?l.jsx(me,{onClick:()=>y==null?void 0:y(p),..._}):null,D?l.jsx(me,{onClick:()=>x==null?void 0:x(p),...D}):null,F?l.jsx(me,{onClick:()=>w==null?void 0:w(p),...F}):null]})}):null)]})})}),te=g(({className:e,...t},r)=>{const o={...J().overlay};return l.jsx(se,{ref:r,className:O("ui-dialog__overlay",e),__css:o,...t})}),re=g(({className:e,...t},r)=>{const o={...J().closeButton};return l.jsx(ue,{ref:r,className:O("ui-dialog__close-button",e),__css:o,...t})}),ge=g(({className:e,...t},r)=>{const o={...J().header};return l.jsx(xt,{ref:r,className:O("ui-dialog__header",e),__css:o,...t})}),xe=g(({className:e,...t},r)=>{const o={...J().body};return l.jsx(Ot,{ref:r,className:O("ui-dialog__body",e),__css:o,...t})}),Oe=g(({className:e,...t},r)=>{const o={...J().footer};return l.jsx(wt,{ref:r,className:O("ui-dialog__footer",e),__css:o,...t})});export{_n as D,gt as M,ge as a,xe as b,Oe as c,re as d,te as e,xn as f,On as g,wn as h,Cn as i,Ye as j,Pe as k,xt as l,Ot as m,wt as n,ue as o,se as p};
