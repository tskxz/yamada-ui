import{j as l}from"./extends-CwFRzn3r.js";import{b as f,r as m,R,S as C}from"./factory-zMrA9M4D.js";import{f as u}from"./forward-ref-BWI-Phbn.js";import{u as S}from"./theme-provider-D6YJ9wXo.js";const g=u(({area:o,autoColumns:t,autoFlow:n,autoRows:s,column:e,columnGap:a,gap:i,row:p,rowGap:c,templateAreas:d,templateColumns:r,templateRows:x,...w},j)=>{const $={columnGap:a,display:"grid",gap:i,gridArea:o,gridAutoColumns:t,gridAutoFlow:n,gridAutoRows:s,gridColumn:e,gridRow:p,gridTemplateAreas:d,gridTemplateColumns:r,gridTemplateRows:x,rowGap:c};return l.jsx(f.div,{ref:j,__css:$,...w})}),G=(o,t)=>n=>t?m(t,s=>(s=R(n,`sizes.${s}`,C.px(s)),s!=null?`repeat(auto-fit, minmax(${s}, 1fr))`:void 0)):m(o,s=>s!=null?`repeat(${s}, minmax(0, 1fr))`:void 0),O=u(({columns:o,minChildWidth:t,...n},s)=>{const{theme:e}=S(),a=G(o,t)(e);return l.jsx(g,{ref:s,templateColumns:a,...n})}),h=u(({area:o,colEnd:t,colSpan:n,colStart:s,rowEnd:e,rowSpan:a,rowStart:i,...p},c)=>{const d={gridArea:o,gridColumn:m(n,r=>r!=null?`span ${r}/span ${r}`:void 0),gridColumnEnd:t,gridColumnStart:s,gridRow:m(a,r=>r!=null?`span ${r}/span ${r}`:void 0),gridRowEnd:e,gridRowStart:i};return l.jsx(f.div,{ref:c,__css:d,...p})});export{g as G,O as S,h as a};
