import"./index-IybTgENJ.js";import{M as f}from"./factory-KjDUWRxd.js";let i=!1,r=null,t=!1,s=!1;const u=new Set,d=(e,o)=>u.forEach(l=>l(e,o)),m=e=>!(e.metaKey||!f&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta"),a=e=>{t=!0,m(e)&&(r="keyboard",d("keyboard",e))},n=e=>{if(r="pointer",e.type==="mousedown"||e.type==="pointerdown"){if(t=!0,(e.composedPath?e.composedPath()[0]:e.target).matches(":focus-visible"))return;d("pointer",e)}},p=e=>e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType,y=e=>{p(e)&&(t=!0,r="virtual")},E=e=>{e.target===window||e.target===document||(!t&&!s&&(r="virtual",d("virtual",e)),t=!1,s=!1)},w=()=>{t=!1,s=!0},c=()=>r!=="pointer",L=()=>{typeof window>"u"||i||(HTMLElement.prototype.focus=(...e)=>{t=!0},document.addEventListener("keydown",a,!0),document.addEventListener("keyup",a,!0),document.addEventListener("click",y,!0),window.addEventListener("focus",E,!0),window.addEventListener("blur",w,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",n,!0),document.addEventListener("pointermove",n,!0),document.addEventListener("pointerup",n,!0)):(document.addEventListener("mousedown",n,!0),document.addEventListener("mousemove",n,!0),document.addEventListener("mouseup",n,!0)),i=!0)},v=e=>{L(),e(c());const o=()=>e(c());return u.add(o),()=>{u.delete(o)}};export{v as t};