import{a as d,F,j as u}from"./jsx-runtime-5BUNAZ9W.js";import{u as s}from"./index-YuXFfT5-.js";import{F as l}from"./fade-DY762hLf.js";import{B as p}from"./button-BwFPDuN6.js";import{B as o}from"./box-vGn7lDxy.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-EargzzxG.js";import"./motion-ukEXpwwk.js";import"./forward-ref-A-8Arhkk.js";import"./factory-1uJrB2de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./utils-llwn_R54.js";import"./use-ripple-iEFkrfzn.js";import"./motion-rimQiqxs.js";import"./loading-6RwEQblT.js";import"./index-2fdIbPpW.js";import"./theme-provider-4KOeReOn.js";import"./index-F6j05pB5.js";import"./index-DKGSNMBl.js";import"./icon-VHqa4iO4.js";import"./use-component-style-a9Y1koMB.js";const L={title:"Components / Transitions / Fade",component:l},r=()=>{const[n,{toggle:e}]=s();return d(F,{children:[u(p,{onClick:e,children:"Please Click"}),u(l,{isOpen:n,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[n,{toggle:e}]=s();return d(F,{children:[u(p,{onClick:e,children:"Please Click"}),u(l,{isOpen:n,duration:.4,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[n,{toggle:e}]=s();return d(F,{children:[u(p,{onClick:e,children:"Please Click"}),u(l,{isOpen:n,unmountOnExit:!0,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var B,g,C;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} duration={0.4}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var E,h,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(A=(h=i.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const M=["basic","withDuration","exitUnmount"];export{M as __namedExportsOrder,r as basic,L as default,i as exitUnmount,t as withDuration};
