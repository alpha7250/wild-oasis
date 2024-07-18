(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{4130:function(e,s,t){Promise.resolve().then(t.bind(t,9923)),Promise.resolve().then(t.bind(t,9839)),Promise.resolve().then(t.bind(t,3177)),Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23))},9923:function(e,s,t){"use strict";t.r(s);var r=t(7437),n=t(7182),a=t(9422),i=t(6084),l=t(4970),c=t(1386);t(1296);var o=t(2369);s.default=function(e){let{settings:s,cabin:t,bookedDates:d}=e,{range:u,setRange:m,resetRange:f}=(0,o.useReservation)(),x=u.from&&u.to&&d.some(e=>(0,n._)(e,{start:u.from,end:u.to}))?{}:u,{regularPrice:b,discount:p}=t,h=(0,a.j)(x.to,x.from),A=h*(b-p),{minBookingLength:g,maxBookingLength:j}=s;return(0,r.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,r.jsx)(c._W,{className:"pt-12 place-self-center",mode:"range",onSelect:m,selected:x,min:g+1,max:j,fromMonth:new Date,fromDate:new Date,toYear:new Date().getFullYear()+5,captionLayout:"dropdown",numberOfMonths:2,disabled:e=>(0,i.C)(e)||d.some(s=>(0,l.K)(s,e))}),(0,r.jsxs)("div",{className:"flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]",children:[(0,r.jsxs)("div",{className:"flex items-baseline gap-6",children:[(0,r.jsxs)("p",{className:"flex gap-2 items-baseline",children:[p>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"text-2xl",children:["$",b-p]}),(0,r.jsxs)("span",{className:"line-through font-semibold text-primary-700",children:["$",b]})]}):(0,r.jsxs)("span",{className:"text-2xl",children:["$",b]}),(0,r.jsx)("span",{className:"",children:"/night"})]}),h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"bg-accent-600 px-3 py-2 text-2xl",children:[(0,r.jsx)("span",{children:"\xd7"})," ",(0,r.jsx)("span",{children:h})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:"text-lg font-bold uppercase",children:"Total"})," ",(0,r.jsxs)("span",{className:"text-2xl font-semibold",children:["$",A]})]})]}):null]}),u.from||u.to?(0,r.jsx)("button",{className:"border border-primary-800 py-2 px-4 text-sm font-semibold",onClick:f,children:"Clear"}):null]})]})}},2369:function(e,s,t){"use strict";t.r(s),t.d(s,{ReservationProvider:function(){return l},useReservation:function(){return c}});var r=t(7437),n=t(2265);let a=(0,n.createContext)(),i={from:void 0,to:void 0};function l(e){let{children:s}=e,[t,l]=(0,n.useState)(i);return(0,r.jsx)(a.Provider,{value:{range:t,setRange:l,resetRange:()=>l(i)},children:s})}function c(){let e=(0,n.useContext)(a);if(void 0===e)throw Error("Context was used outside provider");return e}},9839:function(e,s,t){"use strict";t.r(s);var r=t(7437),n=t(9422),a=t(2369),i=t(2527),l=t(7117);s.default=function(e){let{cabin:s,user:t}=e,{range:c,resetRange:o}=(0,a.useReservation)(),{maxCapacity:d,regularPrice:u,discount:m,id:f}=s,x=c.from,b=c.to,p=(0,n.j)(b,x),h=i.TB.bind(null,{startDate:x,endDate:b,numNights:p,cabinPrice:p*(u-m),cabinId:f});return(0,r.jsxs)("div",{className:"scale-[1.01]",children:[(0,r.jsxs)("div",{className:"bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center",children:[(0,r.jsx)("p",{children:"Logged in as"}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,r.jsx)("img",{referrerPolicy:"no-referrer",className:"h-8 rounded-full",src:t.image,alt:t.name}),(0,r.jsx)("p",{children:t.name})]})]}),(0,r.jsxs)("form",{action:async e=>{await h(e),o()},className:"bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{htmlFor:"numGuests",children:"How many guests?"}),(0,r.jsxs)("select",{name:"numGuests",id:"numGuests",className:"px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm",required:!0,children:[(0,r.jsx)("option",{value:"",children:"Select number of guests..."},""),Array.from({length:d},(e,s)=>s+1).map(e=>(0,r.jsxs)("option",{value:e,children:[e," ",1===e?"guest":"guests"]},e))]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{htmlFor:"observations",children:"Anything we should know about your stay?"}),(0,r.jsx)("textarea",{name:"observations",id:"observations",className:"px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm",placeholder:"Any pets, allergies, special requirements, etc.?"})]}),(0,r.jsx)("div",{className:"flex justify-end items-center gap-6",children:x&&b?(0,r.jsx)(l.default,{pendingLabel:"Reserving...",children:"Reserve now"}):(0,r.jsx)("p",{className:"text-primary-300 text-base",children:"Start by selecting dates"})})]})]})}},7117:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}});var r=t(7437),n=t(4887);function a(e){let{children:s,pendingLabel:t}=e,{pending:a}=(0,n.useFormStatus)();return(0,r.jsx)("button",{className:"bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300",disabled:a,children:a?t:s})}},3177:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}});var r=t(7437),n=t(2265);t(703),t(8792),t(930);var a=function(e){let{children:s}=e,[t,a]=(0,n.useState)(!1),i=t?s:s.split(" ").slice(0,40).join(" ")+"...";return(0,r.jsxs)("span",{children:[i," ",(0,r.jsx)("button",{className:"text-primary-700 border-b border-primary-700 leading-3 pb-1",onClick:()=>a(!t),children:t?"Show less":"Show more"})]})}},2527:function(e,s,t){"use strict";t.d(s,{FF:function(){return l},NH:function(){return n},TB:function(){return i},sF:function(){return a}}),t(5355);var r=t(3472),n=(0,r.$)("0f09d4a8c26f8d2c925ceab04583ffae2ab1ea5e"),a=(0,r.$)("e5a337733ade2505cb595996d764c194ea0bfef1"),i=(0,r.$)("82160a7d1ca276b33147286893c18c4c3da8b516"),l=(0,r.$)("f0b8d886889679ea4c676c9c9bba9d7f388b5505");(0,r.$)("4d8a75d4b016293d2823e129c1e4faba360bc42d"),(0,r.$)("f6c79ea63b4dfd53b992fdbbda5a127086afb96e")},930:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/logo.b502d2fa.png",height:163,width:163,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Aem/agANDgAp/v4GmP34+Dn7+PgA/wkiyP8EEmf69PLXAeO9bCkVHRnF//z8Ef39BgABBRYA/goeAPbs5e/28fU7Ab95MMIJJjs9Gykk+url7gYCERwAIRb++unTwwb8+gDCAY9fOPoJ9eYFAggBANzg4QDR5wAAcWlDABsOBQDM1/L7AWFINvoKCQMF8vP6ABQeFgD5/wQAvs7qAFMsAgDn7fr7AVdEN8Hd7/0+Jh8O+mA/Ewb7+fwAmcHx+rLY9AYwFQPDAVZWSikFBQLFFQsDETMfBwD59/oAyuP8ANHk9O/J3PA7AT89OQArHg0p4u74mdz0/jjwAAIADf/+xw3//mjs+QDX4aJ7np7qbooAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[250,749,890,212,971,69,744],function(){return e(e.s=4130)}),_N_E=e.O()}]);