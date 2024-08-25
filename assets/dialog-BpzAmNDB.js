import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{u as nr}from"./index-4Gt8jg-E.js";import{r as y,R as Vr}from"./index-BwDkhjyp.js";import{c as Se,a as Yr,u as Kr,R as Xr}from"./Combination-CONbhR2A.js";import{S as Zr}from"./slide-D7hdYkVE.js";import{m as G,M as or}from"./motion-B_4DOUn5.js";import{f as Jr}from"./fade-BhHqvC3Z.js";import{aW as Qr,L as zr,l as je,t as se,w as B,s as et,c as O,b as te,h as ar,a4 as rt,a5 as tt,j as be}from"./factory-EKX9DfWO.js";import{C as nt}from"./close-button-HuZkQ3Ew.js";import{f as E}from"./forward-ref-BmTAT9U5.js";import{a as Be}from"./use-component-style-3J6UAnbr.js";import{o as Ne}from"./theme-provider-CuwCkym_.js";import{A as ot}from"./index-Ms_xn5rh.js";import{P as at}from"./container-portal-CECpxDWy.js";import{_ as st,a as ut}from"./defineProperty-UXmCCx-B.js";import{_ as De}from"./extends-CF3RwP-h.js";import{_ as ct}from"./inheritsLoose-DR8r8Ogv.js";import{B as ge}from"./button-Dn8j2tRU.js";import{s as ce}from"./slide-fade-BMyyzG7L.js";import{s as it}from"./scale-fade-C2yiJ92K.js";var ke="data-focus-lock",sr="data-focus-lock-disabled",lt="data-no-focus-lock",dt="data-autofocus-inside",ft="data-no-autofocus",ye={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ur=Se({},function(e){var r=e.target,t=e.currentTarget;return{target:r,currentTarget:t}}),cr=Se(),vt=Se(),mt=Yr({async:!0,ssr:typeof document<"u"}),ht=y.createContext(void 0),pt=[],Ae=y.forwardRef(function(r,t){var n,o=y.useState(),a=o[0],s=o[1],i=y.useRef(),f=y.useRef(!1),u=y.useRef(null),m=y.useState({}),c=m[1],v=r.children,h=r.disabled,d=h===void 0?!1:h,p=r.noFocusGuards,x=p===void 0?!1:p,g=r.persistentFocus,_=g===void 0?!1:g,w=r.crossFrame,k=w===void 0?!0:w,D=r.autoFocus,P=D===void 0?!0:D;r.allowTextSelection;var A=r.group,I=r.className,S=r.whiteList,T=r.hasPositiveIndices,b=r.shards,C=b===void 0?pt:b,F=r.as,L=F===void 0?"div":F,j=r.lockProps,H=j===void 0?{}:j,R=r.sideCar,W=r.returnFocus,M=W===void 0?!1:W,he=r.focusOptions,X=r.onActivation,pe=r.onDeactivation,Br=y.useState({}),Nr=Br[0],Ar=y.useCallback(function(U){var Z=U.captureFocusRestore;if(!u.current){var J,$=(J=document)==null?void 0:J.activeElement;u.current=$,$!==document.body&&(u.current=Z($))}i.current&&X&&X(i.current),f.current=!0,c()},[X]),Tr=y.useCallback(function(){f.current=!1,pe&&pe(i.current),c()},[pe]),Lr=y.useCallback(function(U){var Z=u.current;if(Z){var J=(typeof Z=="function"?Z():Z)||document.body,$=typeof M=="function"?M(J):M;if($){var Ke=typeof $=="object"?$:void 0;u.current=null,U?Promise.resolve().then(function(){return J.focus(Ke)}):J.focus(Ke)}}},[M]),Wr=y.useCallback(function(U){f.current&&ur.useMedium(U)},[]),Ur=cr.useMedium,Hr=y.useCallback(function(U){i.current!==U&&(i.current=U,s(U))},[]),Rr=De((n={},n[sr]=d&&"disabled",n[ke]=A,n),H),Ye=x!==!0,Gr=Ye&&x!=="tail",$r=Kr([t,Hr]),qr=y.useMemo(function(){return{observed:i,shards:C,enabled:!d,active:f.current}},[d,f.current,C,a]);return y.createElement(y.Fragment,null,Ye&&[y.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:d?-1:0,style:ye}),T?y.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:d?-1:1,style:ye}):null],!d&&y.createElement(R,{id:Nr,sideCar:mt,observed:a,disabled:d,persistentFocus:_,crossFrame:k,autoFocus:P,whiteList:S,shards:C,onActivation:Ar,onDeactivation:Tr,returnFocus:Lr,focusOptions:he}),y.createElement(L,De({ref:$r},Rr,{className:I,onBlur:Ur,onFocus:Wr}),y.createElement(ht.Provider,{value:qr},v)),Gr&&y.createElement("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:ye}))});Ae.propTypes={};function bt(e,r){function t(n){return n.displayName||n.name||"Component"}return function(o){var a=[],s;function i(){s=e(a.map(function(u){return u.props})),r(s)}var f=function(u){ct(m,u);function m(){return u.apply(this,arguments)||this}m.peek=function(){return s};var c=m.prototype;return c.componentDidMount=function(){a.push(this),i()},c.componentDidUpdate=function(){i()},c.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),i()},c.render=function(){return Vr.createElement(o,this.props)},m}(y.PureComponent);return st(f,"displayName","SideEffect("+t(o)+")"),f}}var N=function(e){for(var r=Array(e.length),t=0;t<e.length;++t)r[t]=e[t];return r},V=function(e){return Array.isArray(e)?e:[e]},ir=function(e){return Array.isArray(e)?e[0]:e},gt=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(e,null);return!r||!r.getPropertyValue?!1:r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"},lr=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},dr=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},yt=function(e){return e.hasAttribute("inert")},xt=function(e,r){return!e||dr(e)||!gt(e)&&!yt(e)&&r(lr(e))},fr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=xt(r,fr.bind(void 0,e));return e.set(r,n),n},wt=function(e,r){return e&&!dr(e)?Ft(e)?r(lr(e)):!1:!0},vr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=wt(r,vr.bind(void 0,e));return e.set(r,n),n},mr=function(e){return e.dataset},Ct=function(e){return e.tagName==="BUTTON"},hr=function(e){return e.tagName==="INPUT"},pr=function(e){return hr(e)&&e.type==="radio"},_t=function(e){return!((hr(e)||Ct(e))&&(e.type==="hidden"||e.disabled))},Ft=function(e){var r=e.getAttribute(ft);return![!0,"true",""].includes(r)},Te=function(e){var r;return!!(e&&(!((r=mr(e))===null||r===void 0)&&r.focusGuard))},Ee=function(e){return!Te(e)},Ot=function(e){return!!e},Dt=function(e,r){var t=Math.max(0,e.tabIndex),n=Math.max(0,r.tabIndex),o=t-n,a=e.index-r.index;if(o){if(!t)return 1;if(!n)return-1}return o||a},kt=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Le=function(e,r,t){return N(e).map(function(n,o){var a=kt(n);return{node:n,index:o,tabIndex:t&&a===-1?(n.dataset||{}).focusGuard?0:-1:a}}).filter(function(n){return!r||n.tabIndex>=0}).sort(Dt)},Et=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],We=Et.join(","),It="".concat(We,", [data-focus-guard]"),br=function(e,r){return N((e.shadowRoot||e).children).reduce(function(t,n){return t.concat(n.matches(r?It:We)?[n]:[],br(n))},[])},Mt=function(e,r){var t;return e instanceof HTMLIFrameElement&&(!((t=e.contentDocument)===null||t===void 0)&&t.body)?re([e.contentDocument.body],r):[e]},re=function(e,r){return e.reduce(function(t,n){var o,a=br(n,r),s=(o=[]).concat.apply(o,a.map(function(i){return Mt(i,r)}));return t.concat(s,n.parentNode?N(n.parentNode.querySelectorAll(We)).filter(function(i){return i===n}):[])},[])},Pt=function(e){var r=e.querySelectorAll("[".concat(dt,"]"));return N(r).map(function(t){return re([t])}).reduce(function(t,n){return t.concat(n)},[])},Ue=function(e,r){return N(e).filter(function(t){return fr(r,t)}).filter(function(t){return _t(t)})},Xe=function(e,r){return r===void 0&&(r=new Map),N(e).filter(function(t){return vr(r,t)})},He=function(e,r,t){return Le(Ue(re(e,t),r),!0,t)},de=function(e,r){return Le(Ue(re(e),r),!1)},St=function(e,r){return Ue(Pt(e),r)},q=function(e,r){return e.shadowRoot?q(e.shadowRoot,r):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,r)?!0:N(e.children).some(function(t){var n;if(t instanceof HTMLIFrameElement){var o=(n=t.contentDocument)===null||n===void 0?void 0:n.body;return o?q(o,r):!1}return q(t,r)})},jt=function(e){for(var r=new Set,t=e.length,n=0;n<t;n+=1)for(var o=n+1;o<t;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&r.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&r.add(n)}return e.filter(function(s,i){return!r.has(i)})},gr=function(e){return e.parentNode?gr(e.parentNode):e},Re=function(e){var r=V(e);return r.filter(Boolean).reduce(function(t,n){var o=n.getAttribute(ke);return t.push.apply(t,o?jt(N(gr(n).querySelectorAll("[".concat(ke,'="').concat(o,'"]:not([').concat(sr,'="disabled"])')))):[n]),t},[])},Bt=function(e){try{return e()}catch{return}},oe=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var r=e.activeElement;return r.shadowRoot?oe(r.shadowRoot):r instanceof HTMLIFrameElement&&Bt(function(){return r.contentWindow.document})?oe(r.contentWindow.document):r}},Nt=function(e,r){return e===r},At=function(e,r){return!!N(e.querySelectorAll("iframe")).some(function(t){return Nt(t,r)})},yr=function(e,r){return r===void 0&&(r=oe(ir(e).ownerDocument)),!r||r.dataset&&r.dataset.focusGuard?!1:Re(e).some(function(t){return q(t,r)||At(t,r)})},Tt=function(e){e===void 0&&(e=document);var r=oe(e);return r?N(e.querySelectorAll("[".concat(lt,"]"))).some(function(t){return q(t,r)}):!1},Lt=function(e,r){return r.filter(pr).filter(function(t){return t.name===e.name}).filter(function(t){return t.checked})[0]||e},Ge=function(e,r){return pr(e)&&e.name?Lt(e,r):e},Wt=function(e){var r=new Set;return e.forEach(function(t){return r.add(Ge(t,e))}),e.filter(function(t){return r.has(t)})},Ze=function(e){return e[0]&&e.length>1?Ge(e[0],e):e[0]},Je=function(e,r){return e.indexOf(Ge(r,e))},Ie="NEW_FOCUS",Ut=function(e,r,t,n,o){var a=e.length,s=e[0],i=e[a-1],f=Te(n);if(!(n&&e.indexOf(n)>=0)){var u=n!==void 0?t.indexOf(n):-1,m=o?t.indexOf(o):u,c=o?e.indexOf(o):-1;if(u===-1)return c!==-1?c:Ie;if(c===-1)return Ie;var v=u-m,h=t.indexOf(s),d=t.indexOf(i),p=Wt(t),x=n!==void 0?p.indexOf(n):-1,g=x-(o?p.indexOf(o):u);if(!v&&c>=0||r.length===0)return c;var _=Je(e,r[0]),w=Je(e,r[r.length-1]);if(u<=h&&f&&Math.abs(v)>1)return w;if(u>=d&&f&&Math.abs(v)>1)return _;if(v&&Math.abs(g)>1)return c;if(u<=h)return w;if(u>d)return _;if(v)return Math.abs(v)>1?c:(a+c+v)%a}},Ht=function(e){return function(r){var t,n=(t=mr(r))===null||t===void 0?void 0:t.autofocus;return r.autofocus||n!==void 0&&n!=="false"||e.indexOf(r)>=0}},Qe=function(e,r,t){var n=e.map(function(a){var s=a.node;return s}),o=Xe(n.filter(Ht(t)));return o&&o.length?Ze(o):Ze(Xe(r))},Me=function(e,r){return r===void 0&&(r=[]),r.push(e),e.parentNode&&Me(e.parentNode.host||e.parentNode,r),r},xe=function(e,r){for(var t=Me(e),n=Me(r),o=0;o<t.length;o+=1){var a=t[o];if(n.indexOf(a)>=0)return a}return!1},xr=function(e,r,t){var n=V(e),o=V(r),a=n[0],s=!1;return o.filter(Boolean).forEach(function(i){s=xe(s||i,i)||s,t.filter(Boolean).forEach(function(f){var u=xe(a,f);u&&(!s||q(u,s)?s=u:s=xe(u,s))})}),s},ze=function(e,r){return e.reduce(function(t,n){return t.concat(St(n,r))},[])},Rt=function(e,r){var t=new Map;return r.forEach(function(n){return t.set(n.node,n)}),e.map(function(n){return t.get(n)}).filter(Ot)},Gt=function(e,r){var t=oe(V(e).length>0?document:ir(e).ownerDocument),n=Re(e).filter(Ee),o=xr(t||e,e,n),a=new Map,s=de(n,a),i=s.filter(function(d){var p=d.node;return Ee(p)});if(i[0]){var f=de([o],a).map(function(d){var p=d.node;return p}),u=Rt(f,i),m=u.map(function(d){var p=d.node;return p}),c=u.filter(function(d){var p=d.tabIndex;return p>=0}).map(function(d){var p=d.node;return p}),v=Ut(m,c,f,t,r);if(v===Ie){var h=Qe(s,c,ze(n,a))||Qe(s,m,ze(n,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return v===void 0?v:u[v]}},$t=function(e){var r=Re(e).filter(Ee),t=xr(e,e,r),n=Le(re([t],!0),!0,!0),o=re(r,!1);return n.map(function(a){var s=a.node,i=a.index;return{node:s,index:i,lockItem:o.indexOf(s)>=0,guard:Te(s)}})},$e=function(e,r){e&&("focus"in e&&e.focus(r),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},we=0,Ce=!1,wr=function(e,r,t){t===void 0&&(t={});var n=Gt(e,r);if(!Ce&&n){if(we>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Ce=!0,setTimeout(function(){Ce=!1},1);return}we++,$e(n.node,t.focusOptions),we--}};function ne(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var r=e?new WeakRef(e):null;return function(){return(r==null?void 0:r.deref())||null}}var qt=function(e){if(!e)return null;for(var r=[],t=e;t&&t!==document.body;)r.push({current:ne(t),parent:ne(t.parentElement),left:ne(t.previousElementSibling),right:ne(t.nextElementSibling)}),t=t.parentElement;return{element:ne(e),stack:r,ownerDocument:e.ownerDocument}},Vt=function(e){var r,t,n,o,a;if(e)for(var s=e.stack,i=e.ownerDocument,f=new Map,u=0,m=s;u<m.length;u++){var c=m[u],v=(r=c.parent)===null||r===void 0?void 0:r.call(c);if(v&&i.contains(v)){for(var h=(t=c.left)===null||t===void 0?void 0:t.call(c),d=c.current(),p=v.contains(d)?d:void 0,x=(n=c.right)===null||n===void 0?void 0:n.call(c),g=He([v],f),_=(a=(o=p??(h==null?void 0:h.nextElementSibling))!==null&&o!==void 0?o:x)!==null&&a!==void 0?a:h;_;){for(var w=0,k=g;w<k.length;w++){var D=k[w];if(_!=null&&_.contains(D.node))return D.node}_=_.nextElementSibling}if(g.length)return g[0].node}}},Yt=function(e){var r=qt(e);return function(){return Vt(r)}},Kt=function(e,r,t){if(!e||!r)return console.error("no element or scope given"),{};var n=V(r);if(n.every(function(s){return!q(s,e)}))return console.error("Active element is not contained in the scope"),{};var o=t?He(n,new Map):de(n,new Map),a=o.findIndex(function(s){var i=s.node;return i===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Xt=function(e,r){var t=r?He(V(e),new Map):de(V(e),new Map);return{first:t[0],last:t[t.length-1]}},Zt=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Cr=function(e,r,t){r===void 0&&(r={});var n=Zt(r),o=Kt(e,n.scope,n.onlyTabbable);if(o){var a=t(o,n.cycle);a&&$e(a.node,n.focusOptions)}},Jt=function(e,r){r===void 0&&(r={}),Cr(e,r,function(t,n){var o=t.next,a=t.first;return o||n&&a})},Qt=function(e,r){r===void 0&&(r={}),Cr(e,r,function(t,n){var o=t.prev,a=t.last;return o||n&&a})},_r=function(e,r,t){var n,o=Xt(e,(n=r.onlyTabbable)!==null&&n!==void 0?n:!0),a=o[t];a&&$e(a.node,r.focusOptions)},zt=function(e,r){r===void 0&&(r={}),_r(e,r,"first")},en=function(e,r){r===void 0&&(r={}),_r(e,r,"last")};function qe(e){setTimeout(e,1)}var rn=function(r){return r&&"current"in r?r.current:r},tn=function(){return document&&document.activeElement===document.body},nn=function(){return tn()||Tt()},z=null,Q=null,ee=null,ae=!1,on=function(){return!0},an=function(r){return(z.whiteList||on)(r)},sn=function(r,t){ee={observerNode:r,portaledElement:t}},un=function(r){return ee&&ee.portaledElement===r};function er(e,r,t,n){var o=null,a=e;do{var s=n[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else if(s.lockItem){if(a!==e)return;o=null}else break}while((a+=t)!==r);o&&(o.node.tabIndex=0)}var cn=function(r){return r?!!ae:ae==="meanwhile"},ln=function e(r,t,n){return t&&(t.host===r&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&e(r,t.parentNode,n))},dn=function(r,t){return t.some(function(n){return ln(r,n,n)})},fe=function(){var r=!1;if(z){var t=z,n=t.observed,o=t.persistentFocus,a=t.autoFocus,s=t.shards,i=t.crossFrame,f=t.focusOptions,u=n||ee&&ee.portaledElement,m=document&&document.activeElement;if(u){var c=[u].concat(s.map(rn).filter(Boolean));if((!m||an(m))&&(o||cn(i)||!nn()||!Q&&a)&&(u&&!(yr(c)||m&&dn(m,c)||un(m))&&(document&&!Q&&m&&!a?(m.blur&&m.blur(),document.body.focus()):(r=wr(c,Q,{focusOptions:f}),ee={})),ae=!1,Q=document&&document.activeElement),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var v=document&&document.activeElement,h=$t(c),d=h.map(function(p){var x=p.node;return x}).indexOf(v);d>-1&&(h.filter(function(p){var x=p.guard,g=p.node;return x&&g.dataset.focusAutoGuard}).forEach(function(p){var x=p.node;return x.removeAttribute("tabIndex")}),er(d,h.length,1,h),er(d,-1,-1,h))}}}return r},Fr=function(r){fe()&&r&&(r.stopPropagation(),r.preventDefault())},Ve=function(){return qe(fe)},fn=function(r){var t=r.target,n=r.currentTarget;n.contains(t)||sn(n,t)},vn=function(){return null},Or=function(){ae="just",qe(function(){ae="meanwhile"})},mn=function(){document.addEventListener("focusin",Fr),document.addEventListener("focusout",Ve),window.addEventListener("blur",Or)},hn=function(){document.removeEventListener("focusin",Fr),document.removeEventListener("focusout",Ve),window.removeEventListener("blur",Or)};function pn(e){return e.filter(function(r){var t=r.disabled;return!t})}var Dr={moveFocusInside:wr,focusInside:yr,focusNextElement:Jt,focusPrevElement:Qt,focusFirstElement:zt,focusLastElement:en,captureFocusRestore:Yt};function bn(e){var r=e.slice(-1)[0];r&&!z&&mn();var t=z,n=t&&r&&r.id===t.id;z=r,t&&!n&&(t.onDeactivation(),e.filter(function(o){var a=o.id;return a===t.id}).length||t.returnFocus(!r)),r?(Q=null,(!n||t.observed!==r.observed)&&r.onActivation(Dr),fe(),qe(fe)):(hn(),Q=null)}ur.assignSyncMedium(fn);cr.assignMedium(Ve);vt.assignMedium(function(e){return e(Dr)});const gn=bt(pn,bn)(vn);var kr=y.forwardRef(function(r,t){return y.createElement(Ae,De({sideCar:gn,ref:t},r))}),Er=Ae.propTypes||{};Er.sideCar;ut(Er,["sideCar"]);kr.propTypes={};const yn=Qr(kr),xn=({initialFocusRef:e,finalFocusRef:r,contentRef:t,restoreFocus:n,children:o,isDisabled:a,autoFocus:s,persistentFocus:i,lockFocusAcrossFrames:f})=>{const u=y.useCallback(()=>{e!=null&&e.current?e.current.focus():t!=null&&t.current&&zr(t.current).length===0&&requestAnimationFrame(()=>{var h;(h=t.current)==null||h.focus()})},[e,t]),m=y.useCallback(()=>{var v;(v=r==null?void 0:r.current)==null||v.focus()},[r]),c=n&&!r;return l.jsx(yn,{crossFrame:f,persistentFocus:i,autoFocus:s,disabled:a,onActivation:u,onDeactivation:m,returnFocus:c,children:o})},[wn,Y]=je({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),Vn=G(({size:e,placement:r="right",closeOnDrag:t=!1,...n},o)=>{const[a,s]=Be("Drawer",{size:e,placement:r,closeOnDrag:t,...n}),{children:i,isOpen:f,onClose:u,onOverlayClick:m,onEsc:c,onCloseComplete:v,withCloseButton:h=!t,withOverlay:d=!0,withDragBar:p=!0,allowPinchZoom:x,autoFocus:g,restoreFocus:_,initialFocusRef:w,finalFocusRef:k,blockScrollOnMount:D,closeOnOverlay:P,closeOnEsc:A,lockFocusAcrossFrames:I,duration:S={enter:.4,exit:.3},dragConstraints:T=0,dragElastic:b=.1,dragOffset:C=80,dragVelocity:F=100,blankForDragProps:L,portalProps:j,...H}=Ne(s,["isFullHeight"]),R=se(i),[W,...M]=B(R,Pe);return l.jsx(wn,{value:a,children:l.jsxs(Mr,{ref:o,isOpen:f,onClose:u,onOverlayClick:m,onEsc:c,onCloseComplete:v,withCloseButton:!1,withOverlay:!1,allowPinchZoom:x,autoFocus:g,restoreFocus:_,initialFocusRef:w,finalFocusRef:k,blockScrollOnMount:D,closeOnOverlay:P,closeOnEsc:A,lockFocusAcrossFrames:I,duration:S,portalProps:j,children:[W??(d?l.jsx(Pe,{}):null),l.jsx(Ir,{dragConstraints:T,dragElastic:b,dragOffset:C,dragVelocity:F,withCloseButton:h,withDragBar:p,blankForDragProps:L,...H,placement:r,closeOnDrag:t,children:M})]})})}),Ir=G(({className:e,children:r,placement:t,withCloseButton:n,withDragBar:o,closeOnDrag:a,dragConstraints:s,dragElastic:i,dragOffset:f,dragVelocity:u,blankForDragProps:m,...c},v)=>{const{isOpen:h,onClose:d,duration:p}=K(),x=Y(),g=nr(t),_=se(r),[w,...k]=B(_,tr),D=y.useMemo(()=>{var L,j,H,R;const b=c.backgroundColor??c.bgColor??c.background??c.bg,C=((L=x.container)==null?void 0:L.backgroundColor)??((j=x.container)==null?void 0:j.bgColor)??((H=x.container)==null?void 0:H.background)??((R=x.container)==null?void 0:R.bg),F=b??C;return et(F)?F:[F]},[c,x]),P=y.useMemo(()=>{let b={};switch(g){case"top":b={top:"calc(-100dvh + 1px)",left:0,right:0};break;case"bottom":b={bottom:"calc(-100dvh + 1px)",left:0,right:0};break;case"left":b={left:"calc(-100% + 1px)",top:0,bottom:0};break;case"right":b={right:"calc(-100% + 1px)",top:0,bottom:0};break}const[C,F]=D;return{_after:{content:'""',display:"block",w:"100%",h:"100dvh",bg:C,position:"absolute",...b,...m},_dark:{_after:{bg:F}}}},[g,D,m]),A=y.useMemo(()=>({display:"flex",flexDirection:g==="top"||g==="bottom"?"column":"row",outline:0,...a?P:{},...x.container}),[P,a,g,x]),I=y.useCallback(b=>{switch(g){case"top":return{bottom:b};case"bottom":return{top:b};case"left":return{right:b};case"right":return{left:b}}},[g]),S=y.useCallback(()=>{switch(g){case"top":case"bottom":return"y";case"left":case"right":return"x"}},[g]),T=y.useCallback(b=>{switch(g){case"top":return b.velocity.y<=u*-1||b.offset.y<=f*-1;case"bottom":return b.velocity.y>=u||b.offset.y>=f;case"left":return b.velocity.x<=u*-1||b.offset.x<=f*-1;case"right":return b.velocity.x>=u||b.offset.x>=f}},[g,u,f]);return l.jsxs(Zr,{ref:v,className:O("ui-drawer",e),isOpen:h,placement:g,duration:p,drag:a?S():!1,dragConstraints:I(s),dragElastic:I(i),dragSnapToOrigin:!0,dragMomentum:!1,onDragEnd:(b,C)=>{T(C)&&(d==null||d())},tabIndex:-1,__css:A,...c,children:[w??(n&&d?l.jsx(tr,{}):null),o&&a&&(g==="bottom"||g==="right")?l.jsx(rr,{}):null,l.jsx(te.div,{className:"ui-drawer__inner",__css:{display:"flex",flexDirection:"column",...x.inner},children:k}),o&&a&&(g==="top"||g==="left")?l.jsx(rr,{}):null]})}),Pe=G(({className:e,...r},t)=>{const o={...Y().overlay};return l.jsx(ve,{ref:t,className:O("ui-drawer__overlay",e),__css:o,...r})}),rr=({className:e,...r})=>{const n={...Y().dragBar};return l.jsx(te.div,{className:O("ui-drawer__drag-bar",e),__css:n,...r})},tr=E(({className:e,...r},t)=>{const o={...Y().closeButton};return l.jsx(me,{ref:t,className:O("ui-drawer__close-button",e),__css:o,...r})}),Yn=E(({className:e,...r},t)=>{const o={...Y().header};return l.jsx(Pr,{ref:t,className:O("ui-drawer__header",e),__css:o,...r})}),Kn=E(({className:e,...r},t)=>{const o={...Y().body};return l.jsx(Sr,{ref:t,className:O("ui-drawer__body",e),__css:o,...r})}),Xn=E(({className:e,...r},t)=>{const o={...Y().footer};return l.jsx(jr,{ref:t,className:O("ui-drawer__footer",e),__css:o,...r})}),[Cn,K]=je({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),Mr=G(({size:e,...r},t)=>{const[n,o]=Be("Modal",{size:e,...r}),{className:a,children:s,isOpen:i,onClose:f,onOverlayClick:u,onEsc:m,onCloseComplete:c,placement:v="center",outside:h="fallback(4, 1rem)",withCloseButton:d=!0,withOverlay:p=!0,allowPinchZoom:x=!1,scrollBehavior:g="inside",autoFocus:_,restoreFocus:w,initialFocusRef:k,finalFocusRef:D,blockScrollOnMount:P=!0,closeOnOverlay:A=!0,closeOnEsc:I=!0,lockFocusAcrossFrames:S=!0,animation:T="scale",duration:b,portalProps:C,...F}=Ne(o),L=y.useCallback(X=>{X.key==="Escape"&&(X.stopPropagation(),I&&(f==null||f()),m==null||m())},[I,f,m]),j=se(s),[H,...R]=B(j,ve,ie,Pe);let[W]=B(j,Ir);W&&(W=y.cloneElement(W,{onKeyDown:L}));const M=nr(v),he={position:"fixed",top:0,left:0,zIndex:"fallback(jeice, 110)",w:"100vw",h:"100dvh",p:e!=="full"?h:void 0,display:"flex",justifyContent:M.includes("left")?"flex-start":M.includes("right")?"flex-end":"center",alignItems:M.includes("top")?"flex-start":M.includes("bottom")?"flex-end":"center"};return l.jsx(Cn,{value:{isOpen:i,onClose:f,onOverlayClick:u,withCloseButton:d,scrollBehavior:g,closeOnOverlay:A,animation:T,duration:b,styles:n},children:l.jsx(ot,{onExitComplete:c,children:i?l.jsx(at,{...C,children:l.jsx(xn,{autoFocus:_,initialFocusRef:k,finalFocusRef:D,restoreFocus:w,lockFocusAcrossFrames:S,children:l.jsx(Xr,{allowPinchZoom:x,enabled:P,forwardProps:!0,children:l.jsxs(te.div,{__css:he,children:[H??(p&&e!=="full"?l.jsx(ve,{}):null),W??l.jsx(Fn,{ref:t,className:a,onKeyDown:L,...F,children:R})]})})})}):null})})}),_n=(e="scale",r)=>{switch(e){case"scale":return{...it,custom:{scale:.95,reverse:!0,duration:r}};case"top":return{...ce,custom:{offsetY:-16,reverse:!0,duration:r}};case"right":return{...ce,custom:{offsetX:16,reverse:!0,duration:r}};case"left":return{...ce,custom:{offsetX:-16,reverse:!0,duration:r}};case"bottom":return{...ce,custom:{offsetY:16,reverse:!0,duration:r}}}},Fn=G(({className:e,children:r,__css:t,...n},o)=>{const{styles:a,scrollBehavior:s,withCloseButton:i,onClose:f,animation:u,duration:m}=K(),c=se(r),[v,...h]=B(c,me,le),d=u!=="none"?_n(u,m):{},p={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:s==="inside"?"hidden":"auto",outline:0,...t||a.container};return l.jsxs(or,{as:"section",role:"dialog","aria-modal":"true",ref:o,className:O("ui-modal",e),tabIndex:-1,__css:p,...d,...n,children:[v??(i&&f?l.jsx(me,{}):null),h]})}),ve=G(({className:e,__css:r,onClick:t,...n},o)=>{const{styles:a,closeOnOverlay:s,onOverlayClick:i,onClose:f,animation:u,duration:m}=K(),c={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...r||a.overlay},v=u!=="none"?Jr:{};return l.jsx(or,{ref:o,className:O("ui-modal__overlay",e),custom:{duration:m},__css:c,onClick:ar(t,i,h=>{h.stopPropagation(),s&&(f==null||f())}),...v,...n})}),me=E(({onClick:e,__css:r,...t},n)=>{const{styles:o,onClose:a}=K(),s={position:"absolute",...r||o.closeButton};return l.jsx(nt,{ref:n,className:O("ui-modal__close-button"),__css:s,onClick:ar(e,i=>{i.stopPropagation(),a==null||a()}),...t})}),Pr=E(({className:e,__css:r,...t},n)=>{const{styles:o}=K(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...r||o.header};return l.jsx(te.header,{ref:n,className:O("ui-modal__header",e),__css:a,...t})}),Sr=E(({className:e,__css:r,...t},n)=>{const{styles:o,scrollBehavior:a}=K(),s={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...r||o.body};return l.jsx(te.div,{ref:n,className:O("ui-modal__body",e),__css:s,...t})}),jr=E(({className:e,__css:r,...t},n)=>{const{styles:o}=K(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...r||o.footer};return l.jsx(te.footer,{ref:n,className:O("ui-modal__footer",e),__css:a,...t})}),[On,ue]=je({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),Zn=G(({size:e,...r},t)=>{const[n,o]=Be("Dialog",{size:e,...r}),{className:a,children:s,withOverlay:i=!0,withCloseButton:f=!0,header:u,footer:m,cancel:c,other:v,success:h,onClose:d,onCancel:p,onOther:x,onSuccess:g,..._}=Ne(o),w=se(s),[k]=B(w,ie),[D]=B(w,le),[P]=B(w,_e),[A]=B(w,Fe),[I]=B(w,Oe),S=rt(w)?s:tt(w,ie,le,_e,Fe,Oe),T={...n.container},b=be(c)?{children:c}:c,C=be(v)?{children:v}:v,F=be(h)?{children:h}:h;return b&&!b.variant&&(b.variant="ghost"),C&&!C.colorScheme&&(C.colorScheme="secondary"),F&&!F.colorScheme&&(F.colorScheme="primary"),l.jsx(On,{value:n,children:l.jsxs(Mr,{ref:t,className:O("ui-dialog",a),__css:T,onClose:d,withOverlay:!1,withCloseButton:!1,..._,size:e,children:[k??(i&&e!=="full"?l.jsx(ie,{}):null),D??(f&&d?l.jsx(le,{}):null),P??(u?l.jsx(_e,{children:u}):null),A??(S?l.jsx(Fe,{children:S}):null),I??(m||b||C||F?l.jsx(Oe,{children:m??l.jsxs(l.Fragment,{children:[b?l.jsx(ge,{onClick:()=>p==null?void 0:p(d),...b}):null,C?l.jsx(ge,{onClick:()=>x==null?void 0:x(d),...C}):null,F?l.jsx(ge,{onClick:()=>g==null?void 0:g(d),...F}):null]})}):null)]})})}),ie=G(({className:e,...r},t)=>{const o={...ue().overlay};return l.jsx(ve,{ref:t,className:O("ui-dialog__overlay",e),__css:o,...r})}),le=E(({className:e,...r},t)=>{const o={...ue().closeButton};return l.jsx(me,{ref:t,className:O("ui-dialog__close-button",e),__css:o,...r})}),_e=E(({className:e,...r},t)=>{const o={...ue().header};return l.jsx(Pr,{ref:t,className:O("ui-dialog__header",e),__css:o,...r})}),Fe=E(({className:e,...r},t)=>{const o={...ue().body};return l.jsx(Sr,{ref:t,className:O("ui-dialog__body",e),__css:o,...r})}),Oe=E(({className:e,...r},t)=>{const o={...ue().footer};return l.jsx(jr,{ref:t,className:O("ui-dialog__footer",e),__css:o,...r})});export{Zn as D,Mr as M,_e as a,Fe as b,Oe as c,le as d,ie as e,Vn as f,Yn as g,Kn as h,Xn as i,tr as j,Pe as k,Pr as l,Sr as m,jr as n,me as o,ve as p};