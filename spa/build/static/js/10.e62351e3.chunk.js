(this["webpackJsonpspace-y-spa"]=this["webpackJsonpspace-y-spa"]||[]).push([[10],{52:function(e,t,n){e.exports={content:"SendToMars_content__1hY7h",items:"SendToMars_items__2AVkx",form:"SendToMars_form__2Ur2O"}},58:function(e,t,n){"use strict";n.r(t);var a=n(23),s=n(1),r=n(0),c=n(11),i=n(8),j=n(52),o=n.n(j);t.default=()=>{var e=Object(r.useContext)(i.a),{data:t}=Object(c.e)(i.j,(()=>e.getSentToMars())),n=Object(c.f)(),[j,{isLoadingSend:l}]=Object(c.d)((t=>e.sendToMars(t)),{onMutate:e=>{n.cancelQueries(i.j);var t=n.getQueryData(i.j);return n.setQueryData(i.j,(t=>[...t,Object(a.a)(Object(a.a)({},e),{},{id:Math.random()})])),()=>n.setQueryData(i.j,t)},onError:i.f,onSettled:()=>{n.invalidateQueries(i.j)}}),[d,{isLoading:b}]=Object(c.d)((t=>e.cancelSendingToMars(t)),{onMutate:e=>{n.cancelQueries(i.j);var t=n.getQueryData(i.j);return n.setQueryData(i.j,(t=>t.filter((t=>t.id!==e.id)))),()=>n.setQueryData(i.j,t)},onError:i.f,onSettled:()=>{n.invalidateQueries(i.j)}}),u=l||b;return Object(s.jsxs)("section",{className:o.a.content,children:[Object(s.jsx)("h1",{children:"Send to Mars"}),Object(s.jsx)("section",{children:Object(s.jsx)("form",{onSubmit:e=>{e.preventDefault();var t=new FormData(e.target);j(((e,t)=>Object.fromEntries(t.map((t=>[t,e.get(t)]))))(t,["name","phone","weight","color","important"]))},children:Object(s.jsxs)("fieldset",{disabled:u,className:o.a.form,children:[Object(s.jsxs)("label",{children:["Name ",Object(s.jsx)("input",{required:!0,type:"text",name:"name"})]}),Object(s.jsxs)("label",{children:["Phone ",Object(s.jsx)("input",{required:!0,type:"tel",name:"phone"})]}),Object(s.jsxs)("label",{children:["Weight ",Object(s.jsx)("input",{type:"number",name:"weight"})]}),Object(s.jsxs)("label",{children:["Color ",Object(s.jsx)("input",{type:"color",name:"color",defaultValue:"#ffffff"})]}),Object(s.jsxs)("label",{children:["Important ",Object(s.jsx)("input",{type:"checkbox",name:"important"})]}),Object(s.jsxs)("label",{children:["Done? ",Object(s.jsx)("input",{type:"submit",value:"send"})]})]})})}),Object(s.jsx)("section",{children:t.length>0?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Waiting for launch date"}),Object(s.jsx)("ul",{className:o.a.items,children:t.map((e=>(console.log(e),Object(s.jsxs)("li",{style:{color:e.color},children:[e.name,e.important?" (!) ":" ",Object(s.jsx)("button",{onClick:()=>{d(e)},children:"X"})]},e.id))))})]}):Object(s.jsx)("h2",{children:"Queue is empty"})})]})}}}]);
//# sourceMappingURL=10.e62351e3.chunk.js.map