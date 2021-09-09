"use strict";(self.webpackChunkwebpack_react_ts=self.webpackChunkwebpack_react_ts||[]).push([[320],{3861:function(e,t,n){n.d(t,{J:function(){return K},Z:function(){return G}});var a=n(7462),r=n(4942),o=n(885),i=n(1002),c=n(5987),l=n(1413),u=n(7294),s=n(4184),f=n.n(s),d=n(344),v=n(1131),h=n(1770),b=n(2982),m=n(5164),p=n(4084);function y(e){var t=(0,u.useRef)(),n=(0,u.useRef)(!1);return(0,u.useEffect)((function(){return function(){n.current=!0,m.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(m.Z.cancel(t.current),t.current=(0,m.Z)((function(){e.apply(void 0,r)})))}}var Z=n(5105);function g(e,t){var n,a=e.prefixCls,o=e.id,i=e.active,c=e.tab,l=c.key,s=c.tab,d=c.disabled,v=c.closeIcon,h=e.closable,b=e.renderWrapper,m=e.removeAriaLabel,p=e.editable,y=e.onClick,g=e.onRemove,E=e.onFocus,k=e.style,w="".concat(a,"-tab");u.useEffect((function(){return g}),[]);var x=p&&!1!==h&&!d;function C(e){d||y(e)}var T=u.createElement("div",{key:l,ref:t,className:f()(w,(n={},(0,r.Z)(n,"".concat(w,"-with-remove"),x),(0,r.Z)(n,"".concat(w,"-active"),i),(0,r.Z)(n,"".concat(w,"-disabled"),d),n)),style:k,onClick:C},u.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(l),className:"".concat(w,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(l),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[Z.Z.SPACE,Z.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:E},s),x&&u.createElement("button",{type:"button","aria-label":m||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),p.onEdit("remove",{key:l,event:t})}},v||p.removeIcon||"\xd7"));return b?b(T):T}var E=u.forwardRef(g),k={width:0,height:0,left:0,top:0};var w={width:0,height:0,left:0,top:0,right:0};var x=n(965),C=n(271);function T(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?u.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var N=u.forwardRef(T);function S(e,t){var n=e.prefixCls,a=e.id,i=e.tabs,c=e.locale,l=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,v=e.moreTransitionName,h=e.style,b=e.className,m=e.editable,p=e.tabBarGutter,y=e.rtl,g=e.onTabClick,E=(0,u.useState)(!1),k=(0,o.Z)(E,2),w=k[0],T=k[1],S=(0,u.useState)(null),R=(0,o.Z)(S,2),I=R[0],P=R[1],M="".concat(a,"-more-popup"),B="".concat(n,"-dropdown"),L=null!==I?"".concat(M,"-").concat(I):null,D=null===c||void 0===c?void 0:c.dropdownAriaLabel,A=u.createElement(x.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),T(!1)},id:M,tabIndex:-1,role:"listbox","aria-activedescendant":L,selectedKeys:[I],"aria-label":void 0!==D?D:"expanded dropdown"},i.map((function(e){return u.createElement(x.sN,{key:e.key,id:"".concat(M,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function K(e){for(var t=i.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void P(o.key)}}(0,u.useEffect)((function(){var e=document.getElementById(L);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),(0,u.useEffect)((function(){w||P(null)}),[w]);var W=(0,r.Z)({},y?"marginRight":"marginLeft",p);i.length||(W.visibility="hidden",W.order=1);var _=f()((0,r.Z)({},"".concat(B,"-rtl"),y)),j=l?null:u.createElement(C.Z,{prefixCls:B,overlay:A,trigger:["hover"],visible:w,transitionName:v,onVisibleChange:T,overlayClassName:_,mouseEnterDelay:.1,mouseLeaveDelay:.1},u.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case Z.Z.UP:K(-1),e.preventDefault();break;case Z.Z.DOWN:K(1),e.preventDefault();break;case Z.Z.ESC:T(!1);break;case Z.Z.SPACE:case Z.Z.ENTER:null!==I&&g(I,e)}else[Z.Z.DOWN,Z.Z.SPACE,Z.Z.ENTER].includes(t)&&(T(!0),e.preventDefault())}},d));return u.createElement("div",{className:f()("".concat(n,"-nav-operations"),b),style:h,ref:t},j,u.createElement(N,{prefixCls:n,locale:c,editable:m}))}var R=u.forwardRef(S),I=(0,u.createContext)(null),P=Math.pow(.995,20);function M(e,t){var n=u.useRef(e),a=u.useState({}),r=(0,o.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var B=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,i.Z)(r)&&!u.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?u.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function L(e,t){var n,i,c=u.useContext(I),s=c.prefixCls,d=c.tabs,v=e.className,h=e.style,Z=e.id,g=e.animated,x=e.activeKey,C=e.rtl,T=e.extra,S=e.editable,L=e.locale,D=e.tabPosition,A=e.tabBarGutter,K=e.children,W=e.onTabClick,_=e.onTabScroll,j=(0,u.useRef)(),V=(0,u.useRef)(),G=(0,u.useRef)(),H=(0,u.useRef)(),Y=(i=(0,u.useRef)(new Map),[function(e){return i.current.has(e)||i.current.set(e,u.createRef()),i.current.get(e)},function(e){i.current.delete(e)}]),F=(0,o.Z)(Y,2),X=F[0],z=F[1],O="top"===D||"bottom"===D,J=M(0,(function(e,t){O&&_&&_({direction:e>t?"left":"right"})})),U=(0,o.Z)(J,2),q=U[0],Q=U[1],$=M(0,(function(e,t){!O&&_&&_({direction:e>t?"top":"bottom"})})),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],ae=(0,u.useState)(0),re=(0,o.Z)(ae,2),oe=re[0],ie=re[1],ce=(0,u.useState)(0),le=(0,o.Z)(ce,2),ue=le[0],se=le[1],fe=(0,u.useState)(0),de=(0,o.Z)(fe,2),ve=de[0],he=de[1],be=(0,u.useState)(0),me=(0,o.Z)(be,2),pe=me[0],ye=me[1],Ze=(0,u.useState)(null),ge=(0,o.Z)(Ze,2),Ee=ge[0],ke=ge[1],we=(0,u.useState)(null),xe=(0,o.Z)(we,2),Ce=xe[0],Te=xe[1],Ne=(0,u.useState)(0),Se=(0,o.Z)(Ne,2),Re=Se[0],Ie=Se[1],Pe=(0,u.useState)(0),Me=(0,o.Z)(Pe,2),Be=Me[0],Le=Me[1],De=function(e){var t=(0,u.useRef)([]),n=(0,u.useState)({}),a=(0,o.Z)(n,2)[1],r=(0,u.useRef)("function"===typeof e?e():e),i=y((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),i()}]}(new Map),Ae=(0,o.Z)(De,2),Ke=Ae[0],We=Ae[1],_e=function(e,t,n){return(0,u.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||k,o=r.left+r.width,i=0;i<e.length;i+=1){var c,u=e[i].key,s=t.get(u);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||k);var f=a.get(u)||(0,l.Z)({},s);f.right=o-f.left-f.width,a.set(u,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(d,Ke,oe),je="".concat(s,"-nav-operations-hidden"),Ve=0,Ge=0;function He(e){return e<Ve?Ve:e>Ge?Ge:e}O?C?(Ve=0,Ge=Math.max(0,oe-Ee)):(Ve=Math.min(0,Ee-oe),Ge=0):(Ve=Math.min(0,Ce-ue),Ge=0);var Ye=(0,u.useRef)(),Fe=(0,u.useState)(),Xe=(0,o.Z)(Fe,2),ze=Xe[0],Oe=Xe[1];function Je(){Oe(Date.now())}function Ue(){window.clearTimeout(Ye.current)}function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=_e.get(e)||{width:0,height:0,left:0,right:0,top:0};if(O){var n=q;C?t.right<q?n=t.right:t.right+t.width>q+Ee&&(n=t.right+t.width-Ee):t.left<-q?n=-t.left:t.left+t.width>-q+Ee&&(n=-(t.left+t.width-Ee)),ne(0),Q(He(n))}else{var a=te;t.top<-te?a=-t.top:t.top+t.height>-te+Ce&&(a=-(t.top+t.height-Ce)),Q(0),ne(He(a))}}!function(e,t){var n=(0,u.useState)(),a=(0,o.Z)(n,2),r=a[0],i=a[1],c=(0,u.useState)(0),l=(0,o.Z)(c,2),s=l[0],f=l[1],d=(0,u.useState)(0),v=(0,o.Z)(d,2),h=v[0],b=v[1],m=(0,u.useState)(),p=(0,o.Z)(m,2),y=p[0],Z=p[1],g=(0,u.useRef)(),E=(0,u.useRef)(),k=(0,u.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;i({x:a,y:o});var c=a-r.x,l=o-r.y;t(c,l);var u=Date.now();f(u),b(u-s),Z({x:c,y:l})}},onTouchEnd:function(){if(r&&(i(null),Z(null),y)){var e=y.x/h,n=y.y/h,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(c*=P),20*(l*=P))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},u.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(j,(function(e,t){function n(e,t){e((function(e){return He(e+t)}))}if(O){if(Ee>=oe)return!1;n(Q,e)}else{if(Ce>=ue)return!1;n(ne,t)}return Ue(),Je(),!0})),(0,u.useEffect)((function(){return Ue(),ze&&(Ye.current=window.setTimeout((function(){Oe(0)}),100)),Ue}),[ze]);var Qe=function(e,t,n,a,r){var o,i,c,l=r.tabs,s=r.tabPosition,f=r.rtl;["top","bottom"].includes(s)?(o="width",i=f?"right":"left",c=Math.abs(t.left)):(o="height",i="top",c=-t.top);var d=t[o],v=n[o],h=a[o],b=d;return v+h>d&&(b=d-h),(0,u.useMemo)((function(){if(!l.length)return[0,0];for(var t=l.length,n=t,a=0;a<t;a+=1){var r=e.get(l[a].key)||w;if(r[i]+r[o]>c+b){n=a-1;break}}for(var u=0,s=t-1;s>=0;s-=1)if((e.get(l[s].key)||w)[i]<c){u=s+1;break}return[u,n]}),[e,c,b,s,l.map((function(e){return e.key})).join("_"),f])}(_e,{width:Ee,height:Ce,left:q,top:te},{width:ve,height:pe},{width:Re,height:Be},(0,l.Z)((0,l.Z)({},e),{},{tabs:d})),$e=(0,o.Z)(Qe,2),et=$e[0],tt=$e[1],nt={};"top"===D||"bottom"===D?nt[C?"marginRight":"marginLeft"]=A:nt.marginTop=A;var at=d.map((function(e,t){var n=e.key;return u.createElement(E,{id:Z,prefixCls:s,key:n,tab:e,style:0===t?void 0:nt,closable:e.closable,editable:S,active:n===x,renderWrapper:K,removeAriaLabel:null===L||void 0===L?void 0:L.removeAriaLabel,ref:X(n),onClick:function(e){W(n,e)},onRemove:function(){z(n)},onFocus:function(){qe(n),Je(),j.current&&(C||(j.current.scrollLeft=0),j.current.scrollTop=0)}})})),rt=y((function(){var e,t,n,a,r,o,i,c,l,u=(null===(e=j.current)||void 0===e?void 0:e.offsetWidth)||0,s=(null===(t=j.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=H.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=H.current)||void 0===a?void 0:a.offsetHeight)||0,h=(null===(r=G.current)||void 0===r?void 0:r.offsetWidth)||0,b=(null===(o=G.current)||void 0===o?void 0:o.offsetHeight)||0;ke(u),Te(s),Ie(f),Le(v);var m=((null===(i=V.current)||void 0===i?void 0:i.offsetWidth)||0)-f,p=((null===(c=V.current)||void 0===c?void 0:c.offsetHeight)||0)-v;ie(m),se(p);var y=null===(l=G.current)||void 0===l?void 0:l.className.includes(je);he(m-(y?0:h)),ye(p-(y?0:b)),We((function(){var e=new Map;return d.forEach((function(t){var n=t.key,a=X(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),ot=d.slice(0,et),it=d.slice(tt+1),ct=[].concat((0,b.Z)(ot),(0,b.Z)(it)),lt=(0,u.useState)(),ut=(0,o.Z)(lt,2),st=ut[0],ft=ut[1],dt=_e.get(x),vt=(0,u.useRef)();function ht(){m.Z.cancel(vt.current)}(0,u.useEffect)((function(){var e={};return dt&&(O?(C?e.right=dt.right:e.left=dt.left,e.width=dt.width):(e.top=dt.top,e.height=dt.height)),ht(),vt.current=(0,m.Z)((function(){ft(e)})),ht}),[dt,O,C]),(0,u.useEffect)((function(){qe()}),[x,dt,_e,O]),(0,u.useEffect)((function(){rt()}),[C,A,x,d.map((function(e){return e.key})).join("_")]);var bt,mt,pt,yt,Zt=!!ct.length,gt="".concat(s,"-nav-wrap");return O?C?(mt=q>0,bt=q+Ee<oe):(bt=q<0,mt=-q+Ee<oe):(pt=te<0,yt=-te+Ce<ue),u.createElement("div",{ref:t,role:"tablist",className:f()("".concat(s,"-nav"),v),style:h,onKeyDown:function(){Je()}},u.createElement(B,{position:"left",extra:T,prefixCls:s}),u.createElement(p.Z,{onResize:rt},u.createElement("div",{className:f()(gt,(n={},(0,r.Z)(n,"".concat(gt,"-ping-left"),bt),(0,r.Z)(n,"".concat(gt,"-ping-right"),mt),(0,r.Z)(n,"".concat(gt,"-ping-top"),pt),(0,r.Z)(n,"".concat(gt,"-ping-bottom"),yt),n)),ref:j},u.createElement(p.Z,{onResize:rt},u.createElement("div",{ref:V,className:"".concat(s,"-nav-list"),style:{transform:"translate(".concat(q,"px, ").concat(te,"px)"),transition:ze?"none":void 0}},at,u.createElement(N,{ref:H,prefixCls:s,locale:L,editable:S,style:(0,l.Z)((0,l.Z)({},0===at.length?void 0:nt),{},{visibility:Zt?"hidden":null})}),u.createElement("div",{className:f()("".concat(s,"-ink-bar"),(0,r.Z)({},"".concat(s,"-ink-bar-animated"),g.inkBar)),style:st}))))),u.createElement(R,(0,a.Z)({},e,{ref:G,prefixCls:s,tabs:ct,className:!Zt&&je})),u.createElement(B,{position:"right",extra:T,prefixCls:s}))}var D=u.forwardRef(L);function A(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,i=e.rtl,c=e.destroyInactiveTabPane,l=u.useContext(I),s=l.prefixCls,d=l.tabs,v=a.tabPane,h=d.findIndex((function(e){return e.key===n}));return u.createElement("div",{className:f()("".concat(s,"-content-holder"))},u.createElement("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:h&&v?(0,r.Z)({},i?"marginRight":"marginLeft","-".concat(h,"00%")):null},d.map((function(e){return u.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:c})}))))}function K(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,i=e.id,c=e.active,s=e.animated,d=e.destroyInactiveTabPane,v=e.tabKey,h=e.children,b=u.useState(n),m=(0,o.Z)(b,2),p=m[0],y=m[1];u.useEffect((function(){c?y(!0):d&&y(!1)}),[c,d]);var Z={};return c||(s?(Z.visibility="hidden",Z.height=0,Z.overflowY="hidden"):Z.display="none"),u.createElement("div",{id:i&&"".concat(i,"-panel-").concat(v),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(v),"aria-hidden":!c,style:(0,l.Z)((0,l.Z)({},Z),r),className:f()("".concat(t,"-tabpane"),c&&"".concat(t,"-tabpane-active"),a)},(c||p||n)&&h)}var W=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],_=0;function j(e,t){var n,s,b=e.id,m=e.prefixCls,p=void 0===m?"rc-tabs":m,y=e.className,Z=e.children,g=e.direction,E=e.activeKey,k=e.defaultActiveKey,w=e.editable,x=e.animated,C=void 0===x?{inkBar:!0,tabPane:!1}:x,T=e.tabPosition,N=void 0===T?"top":T,S=e.tabBarGutter,R=e.tabBarStyle,P=e.tabBarExtraContent,M=e.locale,B=e.moreIcon,L=e.moreTransitionName,K=e.destroyInactiveTabPane,j=e.renderTabBar,V=e.onChange,G=e.onTabClick,H=e.onTabScroll,Y=(0,c.Z)(e,W),F=function(e){return(0,d.Z)(e).map((function(e){if(u.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,l.Z)((0,l.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(Z),X="rtl"===g;s=!1===C?{inkBar:!1,tabPane:!1}:!0===C?{inkBar:!0,tabPane:!0}:(0,l.Z)({inkBar:!0,tabPane:!1},"object"===(0,i.Z)(C)?C:{});var z=(0,u.useState)(!1),O=(0,o.Z)(z,2),J=O[0],U=O[1];(0,u.useEffect)((function(){U((0,v.Z)())}),[]);var q=(0,h.Z)((function(){var e;return null===(e=F[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:k}),Q=(0,o.Z)(q,2),$=Q[0],ee=Q[1],te=(0,u.useState)((function(){return F.findIndex((function(e){return e.key===$}))})),ne=(0,o.Z)(te,2),ae=ne[0],re=ne[1];(0,u.useEffect)((function(){var e,t=F.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,F.length-1)),ee(null===(e=F[t])||void 0===e?void 0:e.key));re(t)}),[F.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,h.Z)(null,{value:b}),ie=(0,o.Z)(oe,2),ce=ie[0],le=ie[1],ue=N;J&&!["left","right"].includes(N)&&(ue="top"),(0,u.useEffect)((function(){b||(le("rc-tabs-".concat(_)),_+=1)}),[]);var se,fe={id:ce,activeKey:$,animated:s,tabPosition:ue,rtl:X,mobile:J},de=(0,l.Z)((0,l.Z)({},fe),{},{editable:w,locale:M,moreIcon:B,moreTransitionName:L,tabBarGutter:S,onTabClick:function(e,t){null===G||void 0===G||G(e,t),ee(e),null===V||void 0===V||V(e)},onTabScroll:H,extra:P,style:R,panes:Z});return se=j?j(de,D):u.createElement(D,de),u.createElement(I.Provider,{value:{tabs:F,prefixCls:p}},u.createElement("div",(0,a.Z)({ref:t,id:b,className:f()(p,"".concat(p,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(p,"-mobile"),J),(0,r.Z)(n,"".concat(p,"-editable"),w),(0,r.Z)(n,"".concat(p,"-rtl"),X),n),y)},Y),se,u.createElement(A,(0,a.Z)({destroyInactiveTabPane:K},fe,{animated:s}))))}var V=u.forwardRef(j);V.TabPane=K;var G=V}}]);