import{a as p}from"./jsx-runtime-2xDJh5tt.js";import{a as c}from"./index-B3rKjj8b.js";import{u as r}from"./index-DqoR4ST1.js";import{j as u}from"./factory-kXR3An-G.js";import{B as m}from"./box-BLs15Z1y.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-Bd5T4K5M.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const B={title:"Hooks / useValue"},o=()=>{const{colorMode:s}=u(),a=c(),l=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p(m,{bg:l,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',a,'", colorMode is "',s,'"']})};var e,n,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const breakpoint = useBreakpoint();
  const bg = useValue({
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  const color = useValue(["whiteAlpha.800", "blackAlpha.800"]);
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const y=["basic"];export{y as __namedExportsOrder,o as basic,B as default};