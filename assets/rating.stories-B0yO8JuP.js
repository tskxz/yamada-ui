import{j as e}from"./extends-CwFRzn3r.js";import{r as a}from"./index-BwDkhjyp.js";import{u as at,C as ot}from"./index.esm-DXPXqkjk.js";import{l as lt,h as w,d as _,B as z,a2 as ct,b as Z,c as ee,t as ut,T as it,a as dt}from"./factory-DfCPDZht.js";import{u as mt}from"./index-423R83gY.js";import{t as gt}from"./index-BiLlsoJy.js";import{b as ft}from"./icon-BY9dMEpR.js";import{f as Ze}from"./forward-ref-BWI-Phbn.js";import{m as pt}from"./forward-ref-scR1bmHx.js";import{m as ht}from"./factory-B9-LT_yD.js";import{u as xt,f as bt,F as ae}from"./form-control-DrDTnnc0.js";import{c as jt}from"./number-CcP_arM8.js";import{a as Ct}from"./use-component-style-D0DGb12b.js";import{o as St}from"./theme-provider-Bw55Thfs.js";import{S as It,L as yt,a as Rt,F as wt,A as Vt}from"./smile-clJKwICs.js";import{G as A}from"./ghost-CQymZGLO.js";import{V as Ft}from"./stack-BgPwn3nO.js";import{B as vt}from"./button-CrM87X6c.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DOyhBR5n.js";import"./motion-I-9Hg3gW.js";import"./lucide-icon-C0tfv9O8.js";import"./use-ripple-C-c72TCS.js";import"./loading-BhlblpEj.js";const[kt,te]=lt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Mt=({groupValue:r,fractionValue:t,value:n})=>{const{id:l,name:o,formControlProps:i,isOutside:f,highlightSelectedOnly:m,roundedValue:g,resolvedValue:I,setValue:P,setHoveredValue:V}=te(),{readOnly:b,disabled:p}=i,[y,j]=a.useState(!1),[x,C]=a.useState(!1),c=n===I,k=n===g,D=m?n===I:n<=I,O=a.useCallback(()=>{j(!1),f&&V(-1)},[f,V]),S=a.useCallback(d=>{if(b||p)return;const F=parseFloat(d.target.value);V(F)},[p,b,V]),R=a.useCallback(d=>{b||p||P(d)},[p,b,P]),E=a.useCallback(()=>{b||p||R(n)},[p,R,b,n]),T=a.useCallback(()=>{b||p||R(n)},[p,R,b,n]),oe=a.useCallback((d={},F=null)=>{const v=c?1:-1;return{ref:F,htmlFor:`${l}-${r}-${n}`,...i,...d,zIndex:t!==1?v:void 0,onMouseDown:w(E,d.onMouseDown),onTouchStart:w(T,d.onTouchStart),"data-active":_(c),"data-filled":_(D),"data-focus":_(y),"data-focus-visible":_(y&&x)}},[i,t,r,l,c,D,x,y,E,T,n]),ne=a.useCallback((d={},F=null)=>({ref:F,"aria-label":`${n}`,...i,...d,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${l}-${r}-${n}`,name:o,value:n,checked:k,onChange:w(S,d.onChange),onFocus:w(()=>j(!0),d.onFocus),onBlur:w(O,d.onBlur),onKeyDown:w(v=>v.key===" "?R(n):void 0,d.onKeyDown),"data-active":_(c),"data-checked":_(k)}),[n,i,l,r,o,k,S,O,c,R]);return a.useEffect(()=>gt(C),[]),{isActive:c,isChecked:k,isFilled:D,getItemProps:oe,getInputProps:ne}},Pt=Ze(({className:r,groupValue:t,value:n,fractionValue:l,color:o,...i},f)=>{const{styles:m,inputProps:g,emptyIcon:I=e.jsx(ge,{}),filledIcon:P=e.jsx(ge,{}),itemProps:V}=te(),{isActive:b,isFilled:p,getInputProps:y,getItemProps:j}=Mt({value:n,groupValue:t,fractionValue:l}),x=z(V,n),C=z(g,n),c=o?{_filled:{color:ct(o)?[o,o]:o}}:{},k={display:"block",lineHeight:"0",...m.item,...c};return e.jsxs(e.Fragment,{children:[e.jsx(Z.input,{...y(C,f)}),e.jsx(Z.label,{className:ee("ui-rating__item",r),__css:k,...j({...x,...i}),children:e.jsx(_t,{clipPath:l!==1?`inset(0 ${b?100-l*100:100}% 0 0)`:void 0,children:p?z(P,t):z(I,t)})})]})}),_t=({className:r,children:t,...n})=>{const{styles:l}=te(),i=ut(t).map(m=>a.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),f={display:"inline-flex",alignItems:"center",justifyContent:"center",...l.icon};return e.jsx(Z.div,{className:ee("ui-rating__item__icon",r),__css:f,...n,children:i})},ge=({...r})=>e.jsx(ft,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),re=(r,t)=>{var o;const n=Math.round(r/t)*t,l=((o=`${t}`.split(".")[1])==null?void 0:o.length)||0;return Number(n.toFixed(l))},Dt=pt(({className:r,value:t,items:n,color:l,...o},i)=>{const{styles:f,decimal:m,groupProps:g,getGroupProps:I}=te(),P=z(g,t),V={...f.group};return e.jsx(ht.div,{className:ee("ui-rating__group",r),__css:V,...I({value:t,...P,...o},i),children:Array(n).fill(0).map((b,p)=>{const y=m*(t===1?p:p+1),j=re(t-1+y,m);return e.jsx(Pt,{groupValue:t,value:j,fractionValue:y,color:l},`${t}-${y}`)})})}),Ot=({name:r,color:t,value:n,defaultValue:l=0,onChange:o,items:i=5,fractions:f=1,highlightSelectedOnly:m=!1,onHover:g,groupProps:I,itemProps:P,inputProps:V,emptyIcon:b,filledIcon:p,...y})=>{let{id:j,...x}=xt(y);const{disabled:C,readOnly:c}=x,k=a.useRef(null),[D,O]=mt({value:n,defaultValue:l,onChange:o}),[S,R]=a.useState(-1),[E,T]=a.useState(!0);j??(j=a.useId()),r??(r=`rating-${j}`);const{"aria-readonly":oe,...ne}=it(x,bt),d=Math.floor(f),F=Math.floor(i),v=1/d,le=re(D,v),et=S!==-1?S:le,$=a.useCallback(u=>{const{left:h,width:M}=k.current.getBoundingClientRect(),se=M/F,rt=(u-h)/se;return jt(re(rt+v/2,v),v,F)},[v,F]),ce=a.useCallback(()=>{!C&&!c&&T(!1)},[C,c]),ue=a.useCallback(()=>{C||c||(R(-1),T(!0),S!==-1&&(g==null||g(-1)))},[C,S,g,c,R]),ie=a.useCallback(u=>{u.preventDefault();const h=u.touches[0];if(!h)return;const M=$(h.clientX);O(M)},[$,O]),de=a.useCallback(u=>{u.preventDefault()},[]),me=a.useCallback(u=>{if(C||c)return;const h=$(u.clientX);R(h),h!==S&&(g==null||g(h))},[C,$,S,c,g]),tt=a.useCallback((u={},h=null)=>({ref:dt(h,k),...x,...u,id:j,onMouseEnter:w(ce,u.onMouseEnter,x.onMouseEnter),onMouseMove:w(me,u.onMouseMove,x.onMouseMove),onMouseLeave:w(ue,u.onMouseLeave,x.onMouseLeave),onTouchStart:w(ie,u.onTouchStart,x.onTouchStart),onTouchEnd:w(de,u.onTouchEnd,x.onTouchEnd)}),[ce,ue,me,de,ie,j,x]),nt=a.useCallback(({value:u,...h},M=null)=>{const se=!c&&Math.ceil(S)===u;return{ref:M,whileTap:!C&&!c?{y:-4}:void 0,...h,tabIndex:-1,"data-active":_(se)}},[C,S,c]),st=Array(F).fill(0).map((u,h)=>{const M=h+1;return e.jsx(Dt,{value:M,color:z(t,M),items:h===0?d+1:d},M)});return{getContainerProps:tt,getGroupProps:nt,id:j,name:r,value:D,roundedValue:le,hoveredValue:S,resolvedValue:et,isOutside:E,setValue:O,setHoveredValue:R,decimal:v,highlightSelectedOnly:m,formControlProps:ne,groupProps:I,itemProps:P,inputProps:V,children:st,emptyIcon:b,filledIcon:p}},s=Ze((r,t)=>{const[n,l]=Ct("Rating",r),{className:o,...i}=St(l),{getContainerProps:f,children:m,...g}=Ot(i),I={display:"flex",...n.container};return e.jsx(kt,{value:{styles:n,...g},children:e.jsx(Z.div,{className:ee("ui-rating",o),__css:I,...f({},t),children:m})})}),on={title:"Components / Forms / Rating",component:s},B=()=>e.jsx(s,{}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),N=()=>e.jsx(s,{defaultValue:3}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{fractions:2,defaultValue:1.5}),e.jsx(s,{fractions:3,defaultValue:2.33}),e.jsx(s,{fractions:4,defaultValue:3.75})]}),H=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isDisabled:!0,defaultValue:3}),e.jsx(ae,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isReadOnly:!0,defaultValue:3}),e.jsx(ae,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),X=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:r,defaultValue:3}),e.jsx(s,{color:r,defaultValue:3,fractions:3})]})},q=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e.jsx(Vt,{});case 2:return e.jsx(wt,{});case 3:return e.jsx(Rt,{});case 4:return e.jsx(yt,{});case 5:return e.jsx(It,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(A,{}),filledIcon:e.jsx(A,{})}),e.jsx(s,{defaultValue:2,fractions:3,emptyIcon:e.jsx(A,{}),filledIcon:e.jsx(A,{})}),e.jsx(s,{gap:"xs",emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},J=()=>{const[r,t]=a.useState(3);return e.jsx(s,{value:r,onChange:t})},Q=()=>{var f;const r={rating:3},{control:t,handleSubmit:n,watch:l,formState:{errors:o}}=at({defaultValues:r}),i=m=>console.log("submit:",m);return console.log("watch:",l()),e.jsxs(Ft,{as:"form",onSubmit:n(i),children:[e.jsx(ae,{isInvalid:!!o.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(f=o.rating)==null?void 0:f.message,children:e.jsx(ot,{name:"rating",control:t,render:({field:m})=>e.jsx(s,{...m})})}),e.jsx(vt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,pe,he;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(he=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var xe,be,je;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(je=(be=G.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ce,Se,Ie;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Ie=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var ye,Re,we;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(we=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Ve,Fe,ve;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(ve=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var ke,Me,Pe;Y.parameters={...Y.parameters,docs:{...(ke=Y.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(Pe=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var _e,De,Oe;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Oe=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var ze,Te,Ee;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ee=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var $e,Ae,Be;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Be=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var Ge,Le,Ne;X.parameters={...X.parameters,docs:{...(Ge=X.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500";
      case 2:
        return "orange.500";
      case 3:
        return "yellow.500";
      case 4:
        return "green.500";
      case 5:
        return "blue.500";
      default:
        return undefined;
    }
  };
  return <>
      <Rating color="green.500" defaultValue={3} />
      <Rating color={getColor} defaultValue={3} />
      <Rating color={getColor} defaultValue={3} fractions={3} />
    </>;
}`,...(Ne=(Le=X.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Ue,Ye,He;q.parameters={...q.parameters,docs:{...(Ue=q.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500";
      case 2:
        return "orange.500";
      case 3:
        return "yellow.500";
      case 4:
        return "green.500";
      case 5:
        return "blue.500";
      default:
        return undefined;
    }
  };
  const getIcon = (value: number) => {
    switch (value) {
      case 1:
        return <Angry />;
      case 2:
        return <Frown />;
      case 3:
        return <Smile />;
      case 4:
        return <Laugh />;
      case 5:
        return <SmilePlus />;
      default:
        return null;
    }
  };
  return <>
      <Rating defaultValue={3} emptyIcon={<Ghost />} filledIcon={<Ghost />} />

      <Rating defaultValue={2} fractions={3} emptyIcon={<Ghost />} filledIcon={<Ghost />} />

      <Rating gap="xs" emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating gap="xs" color={getColor} emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating gap="xs" fractions={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>;
}`,...(He=(Ye=q.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var Ke,We,Xe;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Xe=(We=J.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var qe,Je,Qe;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  interface Data {
    rating: number;
  }
  const defaultValues: Data = {
    rating: 3
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.rating} label="How satisfied are you with Yamada UI?" errorMessage={errors.rating?.message}>
        <Controller name="rating" control={control} render={({
        field
      }) => <Rating {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Qe=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};const ln=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{ln as __namedExportsOrder,B as basic,X as customColor,J as customControl,q as customIcon,on as default,K as isDisabled,W as isReadonly,Q as reactHookForm,L as withColorScheme,N as withDefaultValue,Y as withFractions,H as withHighlightSelectedOnly,U as withItems,G as withSize};
