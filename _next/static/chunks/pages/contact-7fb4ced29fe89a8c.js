(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8367:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(3343)}])},9058:function(n,e,r){"use strict";r.d(e,{M:function(){return s}});var i=r(1799),t=r(9534),a=r(5893),o=r(7357),c=r(2141),s=function(n){var e=n.id,r=n.children,s=n.bgColor,l=n.className,d=n.containerStyle;(0,t.Z)(n,["id","children","bgColor","className","containerStyle"]);return d=(0,i.Z)({backgroundColor:s,justifyContent:"center",textAlign:"inherit",padding:{lg:"90px 80px 70px 80px",xs:"70px 20px "}},d),s=void 0!=s?s:"inherit",(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,{id:e,className:l,sx:d,children:(0,a.jsx)(o.Z,{sx:{backgroundColor:s,justifyContent:"center",maxWidth:"800px",margin:"0 auto"},children:(0,a.jsx)(c.VS,{speed:-5,children:r})})})})}},3343:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return A}});var i=r(5893),t=r(5861),a=r(7357),o=r(7042),c=r(9058),s=r(7462),l=r(3366),d=r(7294),p=r(6010),u=r(4780),g=r(4867);var f=(0,r(182).ZP)(),x=r(5149),m=r(9718),v=r(9707),w=r(6500);const h=(n,e,r)=>{const i=n.keys[0];if(Array.isArray(e))e.forEach(((e,i)=>{r(((e,r)=>{i<=n.keys.length-1&&(0===i?Object.assign(e,r):e[n.up(n.keys[i])]=r)}),e)}));else if(e&&"object"===typeof e){(Object.keys(e).length>n.keys.length?n.keys:Object.keys(e)).forEach((t=>{if(-1!==n.keys.indexOf(t)){const a=e[t];void 0!==a&&r(((e,r)=>{i===t?Object.assign(e,r):e[n.up(t)]=r}),a)}}))}else"number"!==typeof e&&"string"!==typeof e||r(((n,e)=>{Object.assign(n,e)}),e)},S=({theme:n,ownerState:e})=>{const r={};return h(n.breakpoints,e.gridSize,((n,i)=>{let t={};!0===i&&(t={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===i&&(t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof i&&(t={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / var(--Grid-columns)${e.nested&&e.container?" + var(--Grid-columnSpacing)":""})`}),n(r,t)})),r},b=({theme:n,ownerState:e})=>{const r={};return h(n.breakpoints,e.gridOffset,((n,e)=>{let i={};"auto"===e&&(i={marginLeft:"auto"}),"number"===typeof e&&(i={marginLeft:0===e?"0px":`calc(100% * ${e} / var(--Grid-columns))`}),n(r,i)})),r},y=({theme:n,ownerState:e})=>{if(!e.container)return{};const r={"--Grid-columns":12};return h(n.breakpoints,e.columns,((n,e)=>{n(r,{"--Grid-columns":e})})),r},G=({theme:n,ownerState:e})=>{if(!e.container)return{};const r={};return h(n.breakpoints,e.rowSpacing,((e,i)=>{var t;e(r,{"--Grid-rowSpacing":"string"===typeof i?i:null==(t=n.spacing)?void 0:t.call(n,i)})})),r},j=({theme:n,ownerState:e})=>{if(!e.container)return{};const r={};return h(n.breakpoints,e.columnSpacing,((e,i)=>{var t;e(r,{"--Grid-columnSpacing":"string"===typeof i?i:null==(t=n.spacing)?void 0:t.call(n,i)})})),r},k=({theme:n,ownerState:e})=>{if(!e.container)return{};const r={};return h(n.breakpoints,e.direction,((n,e)=>{n(r,{flexDirection:e})})),r},O=({ownerState:n})=>(0,s.Z)({minWidth:0,boxSizing:"border-box"},n.container?(0,s.Z)({display:"flex",flexWrap:"wrap"},n.wrap&&"wrap"!==n.wrap&&{flexWrap:n.wrap},{margin:"calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2)"},n.disableEqualOverflow&&{margin:"calc(var(--Grid-rowSpacing) * -1) 0px 0px calc(var(--Grid-columnSpacing) * -1)"},n.nested?(0,s.Z)({padding:"calc(var(--Grid-nested-rowSpacing) / 2) calc(var(--Grid-nested-columnSpacing) / 2)"},(n.disableEqualOverflow||n.parentDisableEqualOverflow)&&{padding:"calc(var(--Grid-nested-rowSpacing)) 0px 0px calc(var(--Grid-nested-columnSpacing))"}):{"--Grid-nested-rowSpacing":"var(--Grid-rowSpacing)","--Grid-nested-columnSpacing":"var(--Grid-columnSpacing)"}):(0,s.Z)({padding:"calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2)"},n.disableEqualOverflow&&{padding:"calc(var(--Grid-rowSpacing)) 0px 0px calc(var(--Grid-columnSpacing))"})),Z=n=>{const e=[];return Object.entries(n).forEach((([n,r])=>{!1!==r&&void 0!==r&&e.push(`grid-${n}-${String(r)}`)})),e},E=(n,e="xs")=>{function r(n){return void 0!==n&&("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n&&n>0)}if(r(n))return[`spacing-${e}-${String(n)}`];if("object"===typeof n&&!Array.isArray(n)){const e=[];return Object.entries(n).forEach((([n,i])=>{r(i)&&e.push(`spacing-${n}-${String(i)}`)})),e}return[]},C=["className","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow"],N=(0,w.Z)(),_=f("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>e.root});function $(n){return(0,x.Z)({props:n,name:"MuiGrid",defaultTheme:N})}var q=r(948),F=r(1657);const P=function(n={}){const{createStyledComponent:e=_,useThemeProps:r=$,componentName:t="MuiGrid"}=n,a=d.createContext(!1),o=d.createContext(void 0),c=e(y,j,G,S,k,O,b);return d.forwardRef((function(n,e){var f,x,w,h,S,b,y,G;const j=(0,m.Z)(),k=r(n),O=(0,v.Z)(k),N=d.useContext(a),_=d.useContext(o),{className:$,columns:q=12,container:F=!1,component:P="div",direction:M="row",wrap:A="wrap",spacing:T=0,rowSpacing:W=T,columnSpacing:z=T,disableEqualOverflow:R}=O,D=(0,l.Z)(O,C);let B=R;N&&void 0!==R&&(B=n.disableEqualOverflow);const I={},L={},X={};Object.entries(D).forEach((([n,e])=>{void 0!==j.breakpoints.values[n]?I[n]=e:void 0!==j.breakpoints.values[n.replace("Offset","")]?L[n.replace("Offset","")]=e:X[n]=e}));const V=null!=(f=n.columns)?f:N?void 0:q,H=null!=(x=n.spacing)?x:N?void 0:T,J=null!=(w=null!=(h=n.rowSpacing)?h:n.spacing)?w:N?void 0:W,K=null!=(S=null!=(b=n.columnSpacing)?b:n.spacing)?S:N?void 0:z,Q=(0,s.Z)({},O,{nested:N,columns:V,container:F,direction:M,wrap:A,spacing:H,rowSpacing:J,columnSpacing:K,gridSize:I,gridOffset:L,disableEqualOverflow:null!=(y=null!=(G=B)?G:_)&&y,parentDisableEqualOverflow:_}),U=((n,e)=>{const{container:r,direction:i,spacing:a,wrap:o,gridSize:c}=n,s={root:["root",r&&"container","row"!==i&&`direction-xs-${String(i)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...Z(c),...r?E(a,e.breakpoints.keys[0]):[]]};return(0,u.Z)(s,(n=>(0,g.Z)(t,n)),{})})(Q,j);let Y=(0,i.jsx)(c,(0,s.Z)({ref:e,as:P,ownerState:Q,className:(0,p.Z)(U.root,$)},X));return N||(Y=(0,i.jsx)(a.Provider,{value:!0,children:Y})),void 0!==B&&B!==(null!=_&&_)&&(Y=(0,i.jsx)(o.Provider,{value:B,children:Y})),Y}))}({createStyledComponent:(0,q.ZP)("div",{name:"MuiGrid2",overridesResolver:(n,e)=>e.root}),componentName:"MuiGrid2",useThemeProps:n=>(0,F.Z)({props:n,name:"MuiGrid2"})});var M=P;function A(n){n.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("main",{children:(0,i.jsx)(c.M,{id:"contact",bgColor:"#494435",containerStyle:{padding:{lg:"20px 20px 45px",xs:"100px 20px "},paddingTop:{lg:"40px",xs:"0"},backgroundAttachment:"fixed",backgroundSize:"cover",backgroundPosition:"center"},children:(0,i.jsxs)(a.Z,{sx:{padding:{lg:"60px 90px",xs:"20px 50px"},borderRadius:"4px"},children:[(0,i.jsx)(t.Z,{variant:"h3",md:12,lg:3,style:{color:"#FFFFFF",margin:"0px"},children:"Any enquiries please send us an email. "}),(0,i.jsxs)(M,{container:!0,spacing:6,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,i.jsx)(M,{md:12,lg:4,children:(0,i.jsx)(o.y,{textcolor:"white"})}),(0,i.jsx)(M,{md:8,lg:8,children:(0,i.jsx)(t.Z,{variant:"h4",style:{color:"#D69C1E"},children:"Follow us on Facebook and Instagram."})})]})]})})})})}}},function(n){n.O(0,[774,888,179],(function(){return e=8367,n(n.s=e);var e}));var e=n.O();_N_E=e}]);