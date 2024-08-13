import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-BfBzRqX4.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-ByoUlz_3.js";import{a as b}from"./popover-content-Cpd64f6c.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-CEsHZeW8.js";import{M as P}from"./menu-divider-DtMXEGGZ.js";import{C as R}from"./center-B_1km1ec.js";import{T as _}from"./text-D1mCFSxx.js";import"./index-eSD88g-m.js";import"./index-B0VytHna.js";import"./use-component-style-BVTnHHBW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-woLZZCt0.js";import"./index-mMbOwMyI.js";import"./index-BiU9JfDX.js";import"./index-Bs-lF4nn.js";import"./index-Du0-7Fls.js";import"./index-CJoenRMx.js";import"./index-BRxq38iM.js";import"./index-58rlMJFI.js";import"./index-DvmWYllV.js";import"./motion-pO-YJ4mG.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-GzIAF6MG.js";import"./index-Ms_xn5rh.js";import"./utils-CjZAsgMN.js";import"./scale-fade-B2Mx2rh3.js";import"./close-button-Y2DR3mZ1.js";import"./use-ripple-BwG2DVG4.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";import"./extends-CF3RwP-h.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} w="full" h="xs" borderWidth="1px" borderStyle="dashed" p="md" rounded="md">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuDivider />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ue=["basic"];export{ue as __namedExportsOrder,r as basic,de as default};