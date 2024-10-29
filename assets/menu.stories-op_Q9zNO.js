import{j as e}from"./extends-CwFRzn3r.js";import{u as ln}from"./index-D7MGIgCi.js";import{r as x}from"./index-BwDkhjyp.js";import{C as u,S as mn,a as Mn}from"./square-pen-CcKQUvtr.js";import{M as sn}from"./menu-PGPOp3GJ.js";import{a as dn,f as d,b as t,c as r,d as n}from"./menu-list-DYhYcAne.js";import{f as hn}from"./forward-ref-BWI-Phbn.js";import{b as H,c as J,J as X,q as xn}from"./factory-CBW6YcbY.js";import{u as pn}from"./index-DAOPkzwd.js";import{M as s,a as Y}from"./menu-button-U0UMeQQk.js";import{B as o}from"./button-CJFsrc4z.js";import{I as un}from"./icon-button-DCMSylan.js";import{P as In}from"./plus-DiSi0d_x.js";import{M as $}from"./menu-divider-CcYeUgnU.js";import{P as jn}from"./portal-DCEThVLn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lucide-icon-BYLO5a3r.js";import"./icon-C1fg-h9m.js";import"./use-component-style-Givb0biW.js";import"./theme-provider-B8NHi_rL.js";import"./use-var-BcRMoVLh.js";import"./popover-trigger-BfTl05Lo.js";import"./close-button-CAt6lTNE.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./slide-fade-BtzrfF3F.js";import"./index-ZFP3ngUa.js";import"./index-DP81e-8u.js";import"./forward-ref-scR1bmHx.js";import"./utils-CC31eNL0.js";import"./scale-fade-ChN5nit0.js";import"./index-Du-PXOJx.js";import"./index-CoJrGj-T.js";import"./index-qHjnnOt4.js";import"./index-Cyo00D5l.js";import"./index-B1KvLq6v.js";import"./index-BEwlKK2P.js";import"./index-BOsfR7XW.js";import"./loading-CKKxrtqP.js";import"./index-CS4BWtGh.js";const p=hn(({className:a,children:h,label:M,labelProps:m,...R},k)=>{const{styles:I}=dn(),A=x.useId(),l=(m==null?void 0:m.id)??A,c={...I.group};return e.jsxs(H.section,{ref:k,className:J("ui-menu__item","ui-menu__item--group",a),"aria-labelledby":l,role:"group",__css:c,...R,children:[M?e.jsx(H.header,{className:J("ui-menu__item--group-label"),role:"presentation",__css:I.groupLabel,...m,id:l,children:M}):null,e.jsx(H.div,{className:"ui-menu__item__group",children:h})]})});p.displayName="MenuGroup";p.__ui__="MenuGroup";const F=x.forwardRef(({type:a,className:h,children:M,defaultValue:m,value:R,onChange:k,...I},A)=>{const l=a==="radio";m??(m=l?"":[]);const[c,q]=pn({defaultValue:m,value:R,onChange:k}),on=x.useCallback(i=>{if(l&&typeof c=="string"&&q(i),!l&&X(c)){const U=c.includes(i)?c.filter(W=>W!==i):c.concat(i);q(U)}},[l,c,q]),cn=xn(M).map(i=>{if(i.type!==d)return i;const U=an=>{var K,Q;on(i.props.value),(Q=(K=i.props).onClick)==null||Q.call(K,an)},W=!l&&X(c)?c.includes(i.props.value):i.props.value===c;return x.cloneElement(i,{type:a,isChecked:W,onClick:U})});return e.jsx(p,{ref:A,className:J("ui-menu__item--group--option",h),...I,children:cn})});F.displayName="MenuOptionGroup";F.__ui__="MenuOptionGroup";const ct={component:t,title:"Components / Overlay / Menu"},j=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),f=()=>e.jsxs(t,{children:[e.jsx(s,{as:un,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),S=()=>e.jsxs(t,{children:[e.jsx(s,{as:un,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",icon:e.jsx(In,{fontSize:"lg"}),children:"New Tab"}),e.jsx(n,{command:"⌘N",icon:e.jsx(mn,{fontSize:"lg"}),children:"New Window"}),e.jsx(n,{command:"⌘O",icon:e.jsx(Mn,{fontSize:"lg"}),children:"Open File"})]})]}),g=()=>{const a=x.useRef(null);return e.jsxs(t,{initialFocusRef:a,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:a,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},P=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),B=()=>e.jsxs(t,{animation:"top",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{gutter:32,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),v=()=>e.jsxs(t,{duration:.4,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),z=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx($,{}),e.jsx(n,{children:"Sign out"})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(p,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx($,{}),e.jsx(p,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),C=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(F,{type:"radio",label:"order",children:[e.jsx(d,{value:"asc",children:"Ascending"}),e.jsx(d,{value:"desc",children:"Descending"})]}),e.jsx($,{}),e.jsxs(F,{type:"checkbox",label:"display",children:[e.jsx(d,{value:"gender",children:"gender"}),e.jsx(d,{value:"email",children:"email"}),e.jsx(d,{value:"phone",children:"phone"})]})]})]}),E=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsx(jn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),D=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),b=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),N=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),y=()=>{const{isOpen:a,onClose:h,onOpen:M}=ln();return e.jsxs(t,{isOpen:a,onClose:h,onOpen:M,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var Z,V,ee;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ee=(V=j.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,te,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ue,oe;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T" icon={<Plus fontSize="lg" />}>
          New Tab
        </MenuItem>
        <MenuItem command="⌘N" icon={<SquareArrowOutUpRight fontSize="lg" />}>
          New Window
        </MenuItem>
        <MenuItem command="⌘O" icon={<SquarePen fontSize="lg" />}>
          Open File
        </MenuItem>
      </MenuList>
    </Menu>;
}`,...(oe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,ce,ae;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  return <Menu initialFocusRef={ref}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem ref={ref}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ae=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,me,Me;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Menu placement="right-start">
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Me=(me=P.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var de,he,xe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Menu animation="top">
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(xe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var pe,Ie,je;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Menu offset={[16, 16]}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(je=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var fe,Se,ge;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Menu gutter={32}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ge=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var Pe,Be,we;v.parameters={...v.parameters,docs:{...(Pe=v.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <Menu duration={0.4}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(we=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Le,ve,ze;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>

        <MenuDivider />

        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ze=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:ze.source}}};var Oe,Ce,Ee;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuGroup label="account">
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup label="action">
          <MenuItem>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>;
}`,...(Ee=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var De,be,_e;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup type="radio" label="order">
          <MenuOptionItem value="asc">Ascending</MenuOptionItem>
          <MenuOptionItem value="desc">Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuDivider />

        <MenuOptionGroup type="checkbox" label="display">
          <MenuOptionItem value="gender">gender</MenuOptionItem>
          <MenuOptionItem value="email">email</MenuOptionItem>
          <MenuOptionItem value="phone">phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>;
}`,...(_e=(be=C.parameters)==null?void 0:be.docs)==null?void 0:_e.source}}};var Ge,Te,Ne;E.parameters={...E.parameters,docs:{...(Ge=E.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <Portal>
        <MenuList>
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Portal>
    </Menu>;
}`,...(Ne=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var ye,Fe,Re;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>
          <Menu>
            <MenuItemButton>Settings</MenuItemButton>

            <MenuList>
              <MenuItem>Extensions</MenuItem>
              <MenuItem>
                <Menu>
                  <MenuItemButton>Theme</MenuItemButton>

                  <MenuList>
                    <MenuItem>Color Theme</MenuItem>
                    <MenuItem>File Icon Theme</MenuItem>
                    <MenuItem>Product Icon Theme</MenuItem>
                  </MenuList>
                </Menu>
              </MenuItem>
              <MenuItem>User Tasks</MenuItem>
            </MenuList>
          </Menu>
        </MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Re=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Ae,qe;b.parameters={...b.parameters,docs:{...(ke=b.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(qe=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Ue,We,He;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Menu closeOnBlur={false}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(He=(We=_.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Je,$e,Ke;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ke=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;T.parameters={...T.parameters,docs:{...(Qe=T.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled isFocusable>
          Edit Profile
        </MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ye=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,Ve,en;N.parameters={...N.parameters,docs:{...(Ze=N.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <Menu isLazy>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(en=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,tn,rn;y.parameters={...y.parameters,docs:{...(nn=y.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure();
  return <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(rn=(tn=y.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const at=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{at as __namedExportsOrder,j as basic,y as customControl,ct as default,_ as disabledCloseBlur,b as disabledCloseOnSelect,G as isDisabled,T as isFocusable,D as nestedMenu,N as useLazy,B as withAnimation,f as withCommand,z as withDivider,v as withDuration,O as withGroup,L as withGutter,S as withIcon,g as withInitialFocusRef,w as withOffset,C as withOptionGroup,P as withPlacement,E as withPortal};
