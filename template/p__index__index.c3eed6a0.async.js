"use strict";(self.webpackChunk_vis_template_=self.webpackChunk_vis_template_||[]).push([[610],{71763:function(Te,ae,r){r.r(ae),r.d(ae,{default:function(){return Ae}});var le={container:"container___YXRD5"},de=r(79506),ce=r.n(de),ve=r(66387),K=r.n(ve),me=r(77407),_=r.n(me),he=r(33127),oe=r(70958),O=r(52983),pe=r(87301),ie=r(27278),t=r(97458),F="vis-comp-wrokspace";function fe(e){var n=e.formRef,P=n===void 0?void 0:n,u=e.showBread,A=e.breadcrumb,c=A===void 0?{}:A,b=e.footer,m=e.tabs,C=e.desc,T=e.initValue,l=e.value,w=e.children,$=e.onChange,E=e.formColumns,g=e.formProps,D=g===void 0?{}:g,V=e.isUrlState,H=e.urlKey,B=H===void 0?"type":H,f=e.contentStyle,S=e.fixHeader,y=e.formRender,o=T||l||m[0].key,U=(0,pe.Z)(),Z=_()(U,2),W=Z[0],te=Z[1],M=(0,O.useState)(V&&W[B]||o),Q=_()(M,2),z=Q[0],X=Q[1],R=m.find(function(N){return N.key===z})||m[0];return(0,O.useEffect)(function(){l&&X(l)},[l]),(0,t.jsxs)("div",{className:"".concat(F,"-wrap"),children:[(0,t.jsxs)("div",{className:"".concat(F,"-header"),children:[u&&(0,t.jsx)("div",{style:{height:"30px"},children:(0,t.jsx)(he.H_,K()({},c))}),(0,t.jsx)("div",{className:"".concat(F,"-title"),children:m.length===1?(0,t.jsx)("div",{className:"".concat(F,"-label"),children:m[0].title}):(0,t.jsx)(ie.Z,{className:"".concat(F,"-tabs"),activeKey:z,onChange:function(k){var L=m.find(function(re){return re.key===k});$&&L&&$(L),X(k),V&&te(ce()({},B,k))},size:"small",items:m.map(function(N){return{label:N.title,key:N.key,children:void 0}})})}),C&&(0,t.jsx)("div",{className:"".concat(F,"-desc"),children:C}),(0,t.jsx)("div",{className:"".concat(F,"-form"),children:y?y(R):(0,t.jsx)(oe.Z,K()({formRef:P,columns:E||[],submitter:!1,layout:"inline"},D))})]}),w?w(R):(0,t.jsx)("div",{className:"".concat(F,"-content-wrap"),style:K()(K()({},f),{},{flex:S?"1":"none"}),children:R==null?void 0:R.content}),b&&(0,t.jsx)("div",{className:"".concat(F,"-content-footer"),children:b})]})}var ye=fe,we=function(n){return _jsx("div",{})},Ee=function(n){return _jsx("div",{})},De=function(n){return _jsx("div",{})},I="vis-comp-header";function xe(e){var n=e.formRef,P=n===void 0?void 0:n,u=e.tabs,A=e.initValue,c=e.value,b=e.tabBarExtraContent,m=e.children,C=e.onChange,T=e.formColumns,l=e.formProps,w=l===void 0?{}:l,$=e.contentStyle,E=e.style,g=e.formRender,D=A||c||u[0].key,V=(0,O.useState)(D),H=_()(V,2),B=H[0],f=H[1],S=u.find(function(y){return y.key===B})||u[0];return(0,O.useEffect)(function(){c&&f(c)},[c]),(0,t.jsxs)("div",{className:"".concat(I,"-wrap"),style:E,children:[(0,t.jsxs)("div",{className:"".concat(I,"-header ").concat(u.length!==1&&"tabs"),children:[(0,t.jsx)("div",{className:"".concat(I,"-title"),children:u.length===1?(0,t.jsx)("div",{className:"".concat(I,"-label"),children:u[0].title}):(0,t.jsx)(ie.Z,{className:"".concat(I,"-tabs"),activeKey:B,tabBarExtraContent:b,onChange:function(o){var U=u.find(function(Z){return Z.key===o});C&&U&&C(U),f(o)},size:"small",items:u==null?void 0:u.map(function(y){return K()({label:y.title,children:void 0},y)})})}),(0,t.jsx)("div",{className:"".concat(I,"-form"),children:g?g(S):(0,t.jsx)(oe.Z,K()({formRef:P,columns:T||[],submitter:!1,layout:"inline"},w))})]}),m?m(S):(0,t.jsx)("div",{className:"".concat(I,"-content-wrap"),style:$,children:S==null?void 0:S.content})]})}var se=xe,Ne=r(95606),Ie=r(57420),Ve=r(1780),He=r(41576),Ue=r(39378),je=null,Ge="vis-comp-page",be=[{title:"\u540D\u79F0",dataIndex:"name",valueType:"text"},{title:"\u7C7B\u578B",dataIndex:"type",valueType:"text"}];function Ke(e){var n=e.columns,P=n===void 0?be:n,u=e.tableRequest,A=e.prefixApi,c=A===void 0?"/api/table":A,b=e.addFormProps,m=b===void 0?{}:b,C=e.editFormProps,T=C===void 0?{}:C,l=e.addColumns,w=e.editColumns,$=e.editHandle,E=e.addHandle,g=e.request,D=g===void 0?fetch:g,V=e.tableProps,H=V===void 0?{}:V,B=e.columnActions,f=e.modalFooterAction,S=e.primaryKey,y=S===void 0?"id":S,o=e.formRef,U=e.showDeleteAction,Z=U===void 0?!0:U,W=e.showEditAction,te=W===void 0?!0:W,M=e.showAddToolbar,Q=M===void 0?!0:M,z=e.toolBars,X=z===void 0?[]:z,R=e.tableRef,N=e.requestParams,k=N===void 0?{}:N,L=e.tableRequestParams,re=L===void 0?{}:L,G=useRef(),Y=useRef(),$e=useState(),ue=_slicedToArray($e,2),ne=ue[0],J=ue[1],Be=useCallback(function(){var x=_asyncToGenerator(_regeneratorRuntime().mark(function j(i){var v,d,s,p;return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return v=i.pageSize,d=i.current,s=_objectWithoutProperties(i,je),a.next=3,D(c+"/query/page",{method:"post",data:_objectSpread(_objectSpread(_objectSpread({pageIndex:d,pageSize:v},s),k),re)});case 3:return p=a.sent,a.abrupt("return",{total:p.total,data:p.records,success:!0});case 5:case"end":return a.stop()}},j)}));return function(j){return x.apply(this,arguments)}}(),[c,k]),ke={title:"\u64CD\u4F5C",hideInSearch:!0,render:function(j,i){return[B==null?void 0:B(i),te&&($?_jsx(Button,{onClick:function(){return $(i)},type:"link",children:"\u7F16\u8F91"}):_jsx(Button,{type:"link",onClick:function(){J(i)},children:"\u7F16\u8F91"})),Z&&_jsx(Button,{danger:!0,type:"text",onClick:function(){Modal.confirm({title:"\u63D0\u793A",content:"\u8BE5\u64CD\u4F5C\u4F1A\u5220\u9664\u8BE5\u9879\u6570\u636E\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",onOk:function(){return _asyncToGenerator(_regeneratorRuntime().mark(function s(){var p,h,a;return _regeneratorRuntime().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,D(c+"/delete",{method:"post",data:_objectSpread({ids:[i[y]]},k)});case 2:message.success("\u5220\u9664\u6210\u529F!"),(p=R||Y)===null||p===void 0||(h=p.current)===null||h===void 0||(a=h.reloadAndRest)===null||a===void 0||a.call(h);case 4:case"end":return q.stop()}},s)}))()}})},children:"\u5220\u9664"})]}};return _jsxs("div",{children:[_jsx(Modal,{title:"\u7F16\u8F91\u8868\u5355",open:!!ne,onCancel:function(){J(void 0)},destroyOnClose:!0,footer:[_jsx("span",{children:f==null?void 0:f(function(){var x;return(x=(o||G).current)===null||x===void 0?void 0:x.getFieldsValue()})},0),_jsx(Button,{type:"default",onClick:function(){return J(void 0)},children:"\u53D6\u6D88"},1),_jsx(Button,{type:"primary",onClick:_asyncToGenerator(_regeneratorRuntime().mark(function x(){var j,i,v,d,s;return _regeneratorRuntime().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(j=(o||G).current)===null||j===void 0?void 0:j.validateFields();case 2:if(i=h.sent,!i){h.next=9;break}return h.next=6,D(c+"/update",{method:"post",data:_objectSpread(_objectSpread({},i),{},{id:ne.id},k)});case 6:message.success("\u7F16\u8F91\u6210\u529F!"),(v=R||Y)===null||v===void 0||(d=v.current)===null||d===void 0||(s=d.reloadAndRest)===null||s===void 0||s.call(d),J(void 0);case 9:case"end":return h.stop()}},x)})),children:"\u786E\u5B9A"},2)],width:800,children:_jsx(BetaSchemaForm,_objectSpread(_objectSpread({columns:w||P},T),{},{initialValues:ne,formRef:o||G,submitter:!1}))}),_jsx(ProTable,_objectSpread({columns:P.concat(ke),request:u||Be,actionRef:R||Y,rowKey:y,toolBarRender:function(){return[].concat(_toConsumableArray(X),[Q&&(E?_jsx(Button,{type:"primary",onClick:E,children:"\u65B0\u589E"}):_jsx(ModalForm,{title:"\u65B0\u5EFA\u8868\u5355",modalProps:{destroyOnClose:!0},onFinish:_asyncToGenerator(_regeneratorRuntime().mark(function j(){var i,v,d,s,p;return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(i=(o||G).current)===null||i===void 0?void 0:i.validateFields();case 2:if(v=a.sent,isEmpty(v)){a.next=9;break}return a.next=6,D(c+"/add",{method:"post",data:_objectSpread(_objectSpread({},v),k)});case 6:return message.success("\u65B0\u589E\u6210\u529F!"),(d=R||Y)===null||d===void 0||(s=d.current)===null||s===void 0||(p=s.reloadAndRest)===null||p===void 0||p.call(s),a.abrupt("return",!0);case 9:case"end":return a.stop()}},j)})),trigger:_jsx(Button,{onClick:function(){o!=null&&o.current&&(o.current=(o||G).current)},icon:_jsx(PlusOutlined,{}),type:"primary",children:"\u65B0\u5EFA"},"button"),submitter:{render:function(i,v){return[f==null?void 0:f(function(){var d,s;return(d=o||G)===null||d===void 0||(s=d.current)===null||s===void 0?void 0:s.getFieldsValue()})].concat(_toConsumableArray(v))}},children:_jsx(BetaSchemaForm,_objectSpread(_objectSpread({columns:l||P},m),{},{submitter:!1,formRef:o||G}))}))])}},H))]})}var Ze=null;function ze(e){var n=e.data,P=e.show,u=e.numberConversion,A=e.pointLength,c=e.useGrouping,b=c===void 0?!1:c,m=e.numStyle,C=e.unitStyle,T=_jsx("span",{children:numberFormat(n,b)});if(u&&isNumber(n)){var l=unitConvert(n,A),w=l==null?void 0:l.num,$=l==null?void 0:l.unit,E=numberFormat(w,b);T=_jsxs(_Fragment,{children:[_jsx("span",{children:E}),_jsx("span",{style:C,children:$})]})}var g=_jsx("div",{style:m,children:T});return P?g:null}var Le=null,ee=r(2056),Ce=r(62025);function ge(){return(0,t.jsxs)("div",{style:{display:"flex",height:2e3},children:[(0,t.jsx)(se,{style:{width:200,marginRight:"10px"},tabs:[{title:"SQL\u89C6\u56FE",key:"1",content:(0,t.jsx)("div",{style:{height:200,background:"white"}})}]}),(0,t.jsx)(se,{tabs:[{title:"\u8868\u89C6\u56FE",key:"1",content:(0,t.jsx)("div",{style:{height:400,background:"white"},children:(0,t.jsx)("div",{children:"Table View"})})},{title:"SQL\u89C6\u56FE",key:"2",content:(0,t.jsx)("div",{style:{height:400,background:"white"},children:(0,t.jsx)("div",{children:"SQL View"})})}],tabBarExtraContent:(0,t.jsx)("span",{onClick:function(){return Ce.history.push("/test")},children:"\u{1FAF1}\u70B9\u6211\u8DF3\u8F6C"}),children:function(n){return(0,t.jsx)("div",{children:n==null?void 0:n.content})}})]})}var Se=ge;function Re(){return(0,t.jsx)("div",{children:"Space2"})}var Fe=Re,Pe=function(n){return(0,t.jsx)("div",{className:le.container,children:(0,t.jsx)(ye,{isUrlState:!0,showBread:!0,fixHeader:!0,footer:(0,t.jsxs)(ee.Z.Group,{children:[(0,t.jsx)(ee.Z,{type:"primary",style:{marginRight:10},children:"\u4FDD\u5B58"}),(0,t.jsx)(ee.Z,{type:"primary",children:"\u8FD4\u56DE"})]}),breadcrumb:{routes:[{path:"/",breadcrumbName:"\u5B50\u5E94\u7528",children:[]}]},desc:"\u521D\u59CB\u5316demo\uFF0C\u7528\u6765\u5C55\u793AworkSpace\u7684\u57FA\u672C\u7528\u6CD5, \u9762\u5305\u5C51\u53EA\u5728\u591A\u5C42\u5F00\u542F\uFF0C\u5355\u5C42\u9700\u8981\u624B\u52A8\u914D\u7F6E",formProps:{size:"small"},formColumns:[{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"s",colProps:{xs:24,md:12}},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:{a:1,b:2},width:"s",colProps:{xs:24,md:12}}],tabs:[{key:"1",title:"\u5DE5\u4F5C\u533A1",content:(0,t.jsx)(Se,{})},{key:"2",title:"\u5DE5\u4F5C\u533A2",content:(0,t.jsx)(Fe,{})}]})})},Ae=Pe}}]);
