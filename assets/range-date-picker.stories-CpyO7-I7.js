import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{d as H,a as ea,i as aa,C as Jt}from"./ja-DWn_lVqH.js";import{r as f}from"./index-BwDkhjyp.js";import{u as Gt,C as At}from"./index.esm-CnEPCCvu.js";import{c as ra}from"./components-B_YIT2Uz.js";import{u as Kt,a as Qt,c as Xt,d as Zt,e as en}from"./date-picker-DIR5nZVV.js";import{u as an}from"./index-AEOZ2ZJT.js";import{g as ta,N as na,U as oa,f as Le,aa as sa,a as Ue,h as T,b as z,c as qt,B as rn,d as Nt,a1 as tn,a2 as nn}from"./factory-CEsHZeW8.js";import{P as on,b as sn,a as ln}from"./popover-content-CYV3XEV7.js";import{P as cn}from"./container-portal-Df4525l3.js";import{f as Ke}from"./forward-ref-BmTAT9U5.js";import{a as dn}from"./use-component-style-BVTnHHBW.js";import{o as Dn}from"./theme-provider-woLZZCt0.js";import{V as ze}from"./stack-wqY1Rk5c.js";import{B as We}from"./button-DfQHZeQx.js";import{H as la}from"./heading-DcMADrCH.js";import{G as Je}from"./grid-BIE2bsT8.js";import{F as q}from"./form-control-C8wk9nRT.js";import{G as un}from"./ghost-BvK6GZJy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";import"./icon-button-CgSt39u3.js";import"./index-B0VytHna.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-CTBsaqbx.js";import"./index-CQE_718C.js";import"./motion-CcTWI5_V.js";import"./loading-provider-DdrknJQn.js";import"./index-B9PLoIDO.js";import"./Combination-CONbhR2A.js";import"./loading-BHrGiIMj.js";import"./motion-Cp3z4NrY.js";import"./index-UcjmprJc.js";import"./notice-CPPoZ4Qo.js";import"./alert-B63btnMF.js";import"./close-button-ERbTtWXY.js";import"./use-ripple-bahltC27.js";import"./container-DnslSSdx.js";import"./box-BMuUZYWP.js";import"./text-D1mCFSxx.js";import"./checkbox-CkhrFoGt.js";import"./index-Cd_6Vxlk.js";import"./flex-Chb4wwx3.js";import"./index-CAFI9pe4.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CMpatZvi.js";import"./index-BiU9JfDX.js";import"./index-BC2fJpjq.js";import"./index-BRxq38iM.js";import"./index-58rlMJFI.js";import"./index-DvmWYllV.js";import"./slide-fade-DXt_l2ly.js";import"./utils-CjZAsgMN.js";import"./scale-fade-DytBqAu_.js";import"./index-eSD88g-m.js";import"./index-PMfx84N2.js";import"./select-CIle65QD.js";import"./option-5PEviHLt.js";import"./index-mMbOwMyI.js";import"./extends-CF3RwP-h.js";import"./index-Bs-lF4nn.js";import"./index-Du0-7Fls.js";import"./index-CJoenRMx.js";import"./index-DxjWwZXO.js";import"./lucide-icon-ldRVr7-m.js";const Yn=({value:r,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:h,endPlaceholder:M,closeOnSelect:d=!0,allowInputBeyond:D=!1,maxSelectValues:C,...x})=>{const P=f.useRef(!1),p=f.useRef(null),u=f.useRef(null),k=f.useRef(void 0),[j,g]=an({value:r,defaultValue:s,onChange:Y}),[c,m]=j??[],_=m&&ta(C)?H(m).subtract(C-1,"day").toDate():void 0,b=c&&ta(C)?H(c).add(C-1,"day").toDate():void 0,{containerRef:v,id:B,allowInput:R,pattern:S,inputProps:I,formControlProps:y,isOpen:N,onClose:G,dateToString:w,stringToDate:F,getContainerProps:He,getPopoverProps:Ge,getFieldProps:Ae,getCalendarProps:qe,getIconProps:$t}=Kt({...x,maxSelectValues:C,allowInputBeyond:D,enableRange:!0,value:j,defaultValue:s,autoFocus:!1,onChange:([t,o])=>{E(w(t)??""),O(w(o)??""),k.current=[t,o],g([t,o]),d&&t&&o&&G()},onClear:()=>{var t;E(""),O(""),g([]),k.current=void 0,R&&N&&((t=p.current)==null||t.focus())},onClick:t=>{var o,n,l;N&&(c?(n=u.current)==null||n.focus():(o=p.current)==null||o.focus()),(l=x.onClick)==null||l.call(x,t)},onClose:()=>{var n;const[t,o]=k.current??j??[];E(w(t)??""),O(w(o)??""),k.current=void 0,(n=x.onClose)==null||n.call(x)},onEnter:()=>{var n,l,A;if(P.current||!v.current)return;const t=na(v.current);if(oa(t,p.current)){const V=w(c);if(V){E(V);const Ze=(((n=u.current)==null?void 0:n.value)??"").length;(l=u.current)==null||l.focus(),(A=u.current)==null||A.setSelectionRange(Ze,Ze)}}else{const V=w(m);V&&O(V)}},onDelete:t=>{var A,V,$e;if(!u.current||u.current.value.length>1||!v.current)return;const o=na(v.current);if(!oa(o,u.current))return;t.preventDefault(),t.stopPropagation(),O(""),g([c,void 0]);const l=(((A=p.current)==null?void 0:A.value)??"").length;(V=p.current)==null||V.focus(),($e=p.current)==null||$e.setSelectionRange(l,l)}}),[W,E]=f.useState(w(c)??""),[Ne,O]=f.useState(w(m)??""),Qe=f.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(S,""));let n=F(o);n&&H(n).isValid()?(D||_&&ea(n,_)&&(n=_),m&&aa(n,m)&&(n=m)):n=void 0,k.current=[n,m],g([n,m]),E(o)},[S,F,D,_,g,m]),Xe=f.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(S,""));let n=F(o);n&&H(n).isValid()?(D||b&&aa(n,b)&&(n=b),c&&ea(n,c)&&(n=c)):n=void 0,k.current=[c,n],g([c,n]),O(o)},[c,D,b,S,F,g]);Le(()=>{g(r??[])},[r]),Le(()=>{p.current&&sa(p.current)||E(w(c)??"")},[j]),Le(()=>{u.current&&sa(u.current)||O(w(m)??"")},[j]);const Lt=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:h??i,...y,...I,...t,ref:Ue(o,p),style:n,id:B,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:T(t.onChange,Qe),onClick:T(t.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:T(t.onCompositionStart,()=>P.current=!0),onCompositionEnd:T(t.onCompositionEnd,()=>{P.current=!1,E(l=>l.replace(S,""))})}},[I,R,h,i,y,B,W,Qe,S]),Ut=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:M??i,...y,...I,...t,ref:Ue(o,u),style:n,id:B,tabIndex:!R||!W?-1:0,value:Ne??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:T(t.onChange,Xe),onClick:T(t.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:T(t.onCompositionStart,()=>P.current=!0),onCompositionEnd:T(t.onCompositionEnd,()=>{P.current=!1,O(l=>l.replace(S,""))})}},[W,I,R,M,i,y,B,Ne,Xe,S]);return{id:B,value:j,inputValue:[W,Ne],onClose:G,dateToString:w,getContainerProps:He,getPopoverProps:Ge,getFieldProps:Ae,getStartInputProps:Lt,getEndInputProps:Ut,getIconProps:$t,getCalendarProps:qe}},a=Ke((r,s)=>{const[Y,i]=dn("RangeDatePicker",r);let{className:h,children:M,isClearable:d=!0,separator:D,color:C,h:x,height:P,minH:p,minHeight:u,containerProps:k,fieldProps:j,startInputProps:g,endInputProps:c,iconProps:m,clearIconProps:_,portalProps:b={isDisabled:!0},...v}=Dn(i);const{getPopoverProps:B,getContainerProps:R,getCalendarProps:S,getFieldProps:I,getStartInputProps:y,getEndInputProps:N,getIconProps:G,onClose:w,value:F,id:He}=Yn(v),[Ge,Ae]=F??[];x??(x=P),p??(p=u);const qe={w:"100%",h:"fit-content",color:C,...Y.container};return e.jsx(Qt,{value:Y,children:e.jsx(on,{...B(),children:e.jsxs(z.div,{className:qt("ui-range-date-picker",h),__css:qe,...R(k),children:[e.jsxs(z.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(pn,{separator:D,value:F,...I({h:x,minH:p,...j}),startInputProps:y(g,s),endInputProps:N(c)}),d&&(Ge||Ae)?e.jsx(Xt,{...G({clear:!0,..._})}):e.jsx(Zt,{...G({clear:!1,...m})})]}),e.jsx(cn,{...b,children:e.jsxs(sn,{id:He,role:"dialog","aria-modal":"true",className:"ui-range-date-picker__popover",__css:{...Y.list},children:[e.jsx(Jt,{className:"ui-range-date-picker__calendar",...S()}),rn(M,{value:F,onClose:w})]})})]})})})}),pn=Ke(({className:r,value:s=[],h:Y,minH:i,startInputProps:h,endInputProps:M,separator:d="-",...D},C)=>{const x=en(),[P,p]=s,{placeholder:u,ref:k,...j}=h??{},{placeholder:g,...c}=M??{},b=!!u||!!g||(!!P||!!p),v={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...x.field};return e.jsx(ln,{children:e.jsxs(z.div,{className:qt("ui-range-date-picker__field",r),__css:v,...D,children:[e.jsx(ca,{ref:Ue(C,k),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:u,...j}),b&&d?e.jsx(z.span,{"data-placeholder":Nt(!P),marginInline:"0.25rem",children:d}):null,e.jsx(ca,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:g,...c})]})})}),ca=Ke(({className:r,value:s,placeholder:Y,...i},h)=>{const[M,d]=tn(i,nn),D={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(z.div,{className:r,__css:D,...M,children:[e.jsx(z.span,{"data-placeholder":Nt(!s),opacity:s?0:1,children:s||Y}),e.jsx(z.input,{ref:h,value:s,position:"absolute",left:"0",...d})]})}),vo={title:"Components / Forms / RangeDatePicker",component:a},$=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(ze,{mt:"sm",children:e.jsx(We,{children:"Submit"})})}),e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1,children:({value:r,onClose:s})=>e.jsx(ze,{mt:"sm",children:e.jsxs(We,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${H(r[0]).format("MM/DD")} -`:"",r[1]?` ${H(r[1]).format("MM/DD")}`:""]})})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(la,{size:"xl",children:"Solid"}),e.jsx(Je,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:ra.map(r=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))}),e.jsx(la,{size:"xl",children:"Subtle"}),e.jsx(Je,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:ra.map(r=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))})]}),X=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),ee=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),te=()=>e.jsx(a,{separator:"~"}),ne=()=>e.jsx(a,{maxSelectValues:3}),oe=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),se=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),le=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r)}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),de=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),De=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),he=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),Me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),we=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:r})},fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:r=>r.getDay()===0||r.getDay()===6}),xe=()=>e.jsx(a,{locale:"ja"}),Pe=()=>e.jsxs(Je,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),je=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),Se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(un,{})}})]}),Ve=()=>{const[r,s]=f.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:r,onChangeType:s})},Te=()=>{const[r,s]=f.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:r,onChangeMonth:s})},_e=()=>{const[r,s]=f.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},Be=()=>{var M;const{control:r,handleSubmit:s,watch:Y,formState:{errors:i}}=Gt(),h=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(ze,{as:"form",onSubmit:s(h),children:[e.jsx(q,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(M=i.multiDatePicker)==null?void 0:M.message,children:e.jsx(At,{name:"multiDatePicker",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(We,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var d;const r={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:h}}=Gt({defaultValues:r}),M=D=>console.log("submit:",D);return console.log("watch:",i()),e.jsxs(ze,{as:"form",onSubmit:Y(M),children:[e.jsx(q,{isInvalid:!!h.multiDatePicker,label:"Date to reserve",errorMessage:(d=h.multiDatePicker)==null?void 0:d.message,children:e.jsx(At,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D})})}),e.jsx(We,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ia,da,Da;$.parameters={...$.parameters,docs:{...(ia=$.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(Da=(da=$.parameters)==null?void 0:da.docs)==null?void 0:Da.source}}};var ua,Ya,pa;L.parameters={...L.parameters,docs:{...(ua=L.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </RangeDatePicker>

      <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false}>
        {({
        value,
        onClose
      }) => <VStack mt="sm">
            <Button isDisabled={!value} onClick={onClose}>
              Submit
              {value[0] ? \` \${dayjs(value[0]).format("MM/DD")} -\` : ""}
              {value[1] ? \` \${dayjs(value[1]).format("MM/DD")}\` : ""}
            </Button>
          </VStack>}
      </RangeDatePicker>
    </>;
}`,...(pa=(Ya=L.parameters)==null?void 0:Ya.docs)==null?void 0:pa.source}}};var ma,ha,Ma;U.parameters={...U.parameters,docs:{...(ma=U.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(Ma=(ha=U.parameters)==null?void 0:ha.docs)==null?void 0:Ma.source}}};var ga,wa,fa;J.parameters={...J.parameters,docs:{...(ga=J.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(fa=(wa=J.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var xa,Pa,ka;K.parameters={...K.parameters,docs:{...(xa=K.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ka=(Pa=K.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var ja,Sa,ya;Q.parameters={...Q.parameters,docs:{...(ja=Q.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
  return <>
      <Heading size="xl">Solid</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map(colorScheme => <RangeDatePicker key={colorScheme} calendarVariant="solid" calendarColorScheme={colorScheme} today defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />)}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map(colorScheme => <RangeDatePicker key={colorScheme} calendarVariant="subtle" calendarColorScheme={colorScheme} today defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />)}
      </Grid>
    </>;
}`,...(ya=(Sa=Q.parameters)==null?void 0:Sa.docs)==null?void 0:ya.source}}};var Ca,Ra,ba;X.parameters={...X.parameters,docs:{...(Ca=X.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(ba=(Ra=X.parameters)==null?void 0:Ra.docs)==null?void 0:ba.source}}};var va,Ia,Fa;Z.parameters={...Z.parameters,docs:{...(va=Z.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(Fa=(Ia=Z.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Oa,Va,Ta;ee.parameters={...ee.parameters,docs:{...(Oa=ee.parameters)==null?void 0:Oa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(Ta=(Va=ee.parameters)==null?void 0:Va.docs)==null?void 0:Ta.source}}};var _a,Ba,Ea;ae.parameters={...ae.parameters,docs:{...(_a=ae.parameters)==null?void 0:_a.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(Ea=(Ba=ae.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source}}};var za,Wa,Ha;re.parameters={...re.parameters,docs:{...(za=re.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ha=(Wa=re.parameters)==null?void 0:Wa.docs)==null?void 0:Ha.source}}};var Ga,Aa,qa;te.parameters={...te.parameters,docs:{...(Ga=te.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(qa=(Aa=te.parameters)==null?void 0:Aa.docs)==null?void 0:qa.source}}};var Na,$a,La;ne.parameters={...ne.parameters,docs:{...(Na=ne.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(La=($a=ne.parameters)==null?void 0:$a.docs)==null?void 0:La.source}}};var Ua,Ja,Ka;oe.parameters={...oe.parameters,docs:{...(Ua=oe.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(Ka=(Ja=oe.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Xa,Za;se.parameters={...se.parameters,docs:{...(Qa=se.parameters)==null?void 0:Qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(Za=(Xa=se.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var er,ar,rr;le.parameters={...le.parameters,docs:{...(er=le.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(rr=(ar=le.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var tr,nr,or;ce.parameters={...ce.parameters,docs:{...(tr=ce.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(or=(nr=ce.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var sr,lr,cr;ie.parameters={...ie.parameters,docs:{...(sr=ie.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(cr=(lr=ie.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ir,dr,Dr;de.parameters={...de.parameters,docs:{...(ir=de.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(Dr=(dr=de.parameters)==null?void 0:dr.docs)==null?void 0:Dr.source}}};var ur,Yr,pr;De.parameters={...De.parameters,docs:{...(ur=De.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(pr=(Yr=De.parameters)==null?void 0:Yr.docs)==null?void 0:pr.source}}};var mr,hr,Mr;ue.parameters={...ue.parameters,docs:{...(mr=ue.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Mr=(hr=ue.parameters)==null?void 0:hr.docs)==null?void 0:Mr.source}}};var gr,wr,fr;Ye.parameters={...Ye.parameters,docs:{...(gr=Ye.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(fr=(wr=Ye.parameters)==null?void 0:wr.docs)==null?void 0:fr.source}}};var xr,Pr,kr;pe.parameters={...pe.parameters,docs:{...(xr=pe.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(kr=(Pr=pe.parameters)==null?void 0:Pr.docs)==null?void 0:kr.source}}};var jr,Sr,yr;me.parameters={...me.parameters,docs:{...(jr=me.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(yr=(Sr=me.parameters)==null?void 0:Sr.docs)==null?void 0:yr.source}}};var Cr,Rr,br;he.parameters={...he.parameters,docs:{...(Cr=he.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(br=(Rr=he.parameters)==null?void 0:Rr.docs)==null?void 0:br.source}}};var vr,Ir,Fr;Me.parameters={...Me.parameters,docs:{...(vr=Me.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Fr=(Ir=Me.parameters)==null?void 0:Ir.docs)==null?void 0:Fr.source}}};var Or,Vr,Tr;ge.parameters={...ge.parameters,docs:{...(Or=ge.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Tr=(Vr=ge.parameters)==null?void 0:Vr.docs)==null?void 0:Tr.source}}};var _r,Br,Er;we.parameters={...we.parameters,docs:{...(_r=we.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(Er=(Br=we.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var zr,Wr,Hr;fe.parameters={...fe.parameters,docs:{...(zr=fe.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Hr=(Wr=fe.parameters)==null?void 0:Wr.docs)==null?void 0:Hr.source}}};var Gr,Ar,qr;xe.parameters={...xe.parameters,docs:{...(Gr=xe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(qr=(Ar=xe.parameters)==null?void 0:Ar.docs)==null?void 0:qr.source}}};var Nr,$r,Lr;Pe.parameters={...Pe.parameters,docs:{...(Nr=Pe.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Lr=($r=Pe.parameters)==null?void 0:$r.docs)==null?void 0:Lr.source}}};var Ur,Jr,Kr;ke.parameters={...ke.parameters,docs:{...(Ur=ke.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(Kr=(Jr=ke.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Xr,Zr;je.parameters={...je.parameters,docs:{...(Qr=je.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(Zr=(Xr=je.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var et,at,rt;Se.parameters={...Se.parameters,docs:{...(et=Se.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(rt=(at=Se.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var tt,nt,ot;ye.parameters={...ye.parameters,docs:{...(tt=ye.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(ot=(nt=ye.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,lt,ct;Ce.parameters={...Ce.parameters,docs:{...(st=Ce.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(ct=(lt=Ce.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var it,dt,Dt;Re.parameters={...Re.parameters,docs:{...(it=Re.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(Dt=(dt=Re.parameters)==null?void 0:dt.docs)==null?void 0:Dt.source}}};var ut,Yt,pt;be.parameters={...be.parameters,docs:{...(ut=be.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(pt=(Yt=be.parameters)==null?void 0:Yt.docs)==null?void 0:pt.source}}};var mt,ht,Mt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(Mt=(ht=ve.parameters)==null?void 0:ht.docs)==null?void 0:Mt.source}}};var gt,wt,ft;Ie.parameters={...Ie.parameters,docs:{...(gt=Ie.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(ft=(wt=Ie.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};var xt,Pt,kt;Fe.parameters={...Fe.parameters,docs:{...(xt=Fe.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(kt=(Pt=Fe.parameters)==null?void 0:Pt.docs)==null?void 0:kt.source}}};var jt,St,yt;Oe.parameters={...Oe.parameters,docs:{...(jt=Oe.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(yt=(St=Oe.parameters)==null?void 0:St.docs)==null?void 0:yt.source}}};var Ct,Rt,bt;Ve.parameters={...Ve.parameters,docs:{...(Ct=Ve.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(bt=(Rt=Ve.parameters)==null?void 0:Rt.docs)==null?void 0:bt.source}}};var vt,It,Ft;Te.parameters={...Te.parameters,docs:{...(vt=Te.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(Ft=(It=Te.parameters)==null?void 0:It.docs)==null?void 0:Ft.source}}};var Ot,Vt,Tt;_e.parameters={..._e.parameters,docs:{...(Ot=_e.parameters)==null?void 0:Ot.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Tt=(Vt=_e.parameters)==null?void 0:Vt.docs)==null?void 0:Tt.source}}};var _t,Bt,Et;Be.parameters={...Be.parameters,docs:{...(_t=Be.parameters)==null?void 0:_t.docs,source:{originalSource:`() => {
  type Data = {
    multiDatePicker: [Date?, Date?];
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.multiDatePicker} label="Date to reserve" errorMessage={errors.multiDatePicker?.message}>
        <Controller name="multiDatePicker" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Et=(Bt=Be.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var zt,Wt,Ht;Ee.parameters={...Ee.parameters,docs:{...(zt=Ee.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
  type Data = {
    multiDatePicker: [Date?, Date?];
  };
  const defaultValues: Data = {
    multiDatePicker: [new Date()]
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
      <FormControl isInvalid={!!errors.multiDatePicker} label="Date to reserve" errorMessage={errors.multiDatePicker?.message}>
        <Controller name="multiDatePicker" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ht=(Wt=Ee.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};const Io=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Io as __namedExportsOrder,$ as basic,Te as customControlMonth,Ve as customControlType,_e as customControlValue,Oe as customIcon,vo as default,Re as disabledAllowInput,ye as disabledCloseOnBlur,Se as disabledCloseOnSelect,ve as disabledControls,Ce as disabledIsClearable,be as disabledOutsideDays,Ie as disabledWeekdays,Fe as hiddenOutsideDays,ue as isDisabled,pe as isInvalid,Ye as isReadonly,Be as reactHookForm,Ee as reactHookFormWithDefaultValue,he as withAllowInputBeyond,ke as withAmountOfMonths,re as withBorderColor,J as withCalendarSize,L as withChildren,Q as withColorScheme,ee as withDefaultMonth,Z as withDefaultType,X as withDefaultValue,De as withDuration,fe as withExcludeDate,ae as withFirstDayOfWeek,Pe as withFormat,de as withGutter,we as withHolidays,se as withInputFormat,xe as withLocale,ne as withMaxSelectedValue,me as withMinMaxDate,ie as withOffset,je as withPaginateBy,le as withParseDate,oe as withPattern,ce as withPlacement,te as withSeparator,U as withSize,Me as withToday,K as withVariant,ge as withWeekendDays};