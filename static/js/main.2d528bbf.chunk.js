(this["webpackJsonpmy-todo"]=this["webpackJsonpmy-todo"]||[]).push([[0],{32:function(e,t,n){e.exports={head_burger:"Header_head_burger__1-2fa",active:"Header_active__hLv6q"}},35:function(e,t,n){e.exports={form:"weatherForm_form__ojqpP",defaultCities:"weatherForm_defaultCities__1vTRL"}},45:function(e,t,n){e.exports={"display-4":"Jumbotron_display-4__3JmlF"}},46:function(e,t,n){e.exports={mobileMenu:"MobileLayout_mobileMenu__2Irtu"}},48:function(e,t,n){e.exports={weatherInfo:"weather_weatherInfo__39Kss"}},49:function(e,t,n){e.exports={weatherPage:"weather_weatherPage__3RwaL"}},56:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i=n(2),s=n(3),l=n.n(s),u=n(44),d=n.n(u),j=(n(56),n(19)),b=n(11),O=n(10),m=l.a.createContext(),h=l.a.createContext(),p=function(e){var t=Object(s.useContext)(h).addNote,n=Object(s.useState)(""),a=Object(O.a)(n,2),c=a[0],r=a[1],o=Object(s.useContext)(m),l=(o.alert,o.hide),u=o.show;return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(l(),t(c.trim())):u("Add note text","warning");setTimeout((function(){l()}),5e3);r("")},children:Object(i.jsxs)("div",{className:"input-group mb-3",children:[Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your note text",value:c,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("div",{className:"input-group-append",children:Object(i.jsx)("button",{className:"btn btn-primary",type:"submit",id:"button-addon2",children:"Add"})})]})})},f=function(e){e.emptyNotes;var t=Object(s.useContext)(m),n=(t.show,t.hide),a=t.alert;return a.visible?Object(i.jsxs)("div",{className:"alert alert-".concat(a.type||"warning"," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435 "}),a.text,Object(i.jsx)("button",{type:"button",onClick:n,className:"close",children:Object(i.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},x=function(e){var t=e.visibleNotes,n=e.changeImportant,a=e.changeDone,c=Object(s.useContext)(h),r=c.removeNote,o=(c.loading,c.showModal),l=c.notes;Object(s.useContext)(m).show;return Object(i.jsx)("div",{children:0===l.length?Object(i.jsx)("div",{className:"alert alert-primary",children:"You don't have any added notifications. Add the first entry."}):Object(i.jsx)("ul",{className:"list-group mt-2",children:t.map((function(e,t){return Object(i.jsxs)("li",{className:"list-group-item list-note",children:[Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("div",{onClick:function(){return a(e.id)},className:"list-title ".concat(e.important?"important-item":""," ").concat(e.done?"done-item":""),children:e.title}),Object(i.jsx)("small",{children:new Date(e.date).toLocaleString()})]}),Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("div",{className:"mr-2",children:Object(i.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){return o(e.id,e.title)},children:Object(i.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})})}),Object(i.jsx)("div",{className:"mr-2",children:Object(i.jsx)("button",{className:"btn ".concat(e.important?"btn-success":"btn-outline-success"),onClick:function(){return n(e.id)},children:Object(i.jsx)("i",{className:"fa fa-exclamation"})})}),Object(i.jsx)("div",{className:"",children:Object(i.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return r(e.id)},children:Object(i.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})})]})]},e.id)}))})})},v=function(){return Object(i.jsx)("div",{className:"loading_wrap",children:Object(i.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})})})},g=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(s.useContext)(m),r=Object(s.useContext)(h),o=r.editNote,l=r.edit,u=r.editId,d=r.hideModal,j=r.notes;Object(s.useEffect)((function(){var e=j.findIndex((function(e){return e.id==u}));-1!=e&&a(j[e].title)}),[u]);return Object(i.jsx)("div",{className:"modal ".concat(l?"active":""),children:Object(i.jsx)("div",{className:"modal-dialog",children:Object(i.jsxs)("div",{className:"modal-content",children:[Object(i.jsxs)("div",{className:"modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Modal title"}),Object(i.jsx)("button",{type:"button",className:"close",onClick:d,children:Object(i.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()?(o(u,n.trim()),c.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!","success")):c.show("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438","warning");setTimeout((function(){c.hide()}),5e3);a("")},children:[Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(i.jsx)("input",{id:"exampleInputEmail1",type:"text",value:n,onChange:function(e){return a(e.target.value)},className:"form-control"})]})}),Object(i.jsx)("div",{className:"modal-footer",children:Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})})]})]})})})},y=function(){var e=Object(s.useContext)(h),t=e.filterSearch,n=e.filterText;return Object(i.jsx)("form",{children:Object(i.jsx)("div",{className:"input-group",children:Object(i.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search..."})})})},N=function(){var e=Object(s.useContext)(h),t=e.fetchNotes,n=e.loading,a=e.visibleNotes,c=e.changeProperty;Object(s.useEffect)((function(){t()}),[]);var r=function(e,t){c(e,t)};return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"mt-2",children:[Object(i.jsx)(f,{}),Object(i.jsx)(g,{}),Object(i.jsx)(p,{}),n?Object(i.jsx)(v,{}):Object(i.jsx)(x,{visibleNotes:a,changeImportant:function(e){r(e,"important")},changeDone:function(e){r(e,"done")}})]})})},w=l.a.createContext(),k=n(45),C=n.n(k),I=function(e){var t=e.title,n=e.content;return Object(i.jsxs)("div",{className:"jumbotron mt-5",children:[Object(i.jsx)("h1",{className:"display-4 ".concat(C.a["display-4"]),children:t}),Object(i.jsx)("p",{className:"lead",children:n})]})},E=function(){var e=Object(s.useContext)(w).token;return Object(i.jsx)("div",{className:"container",children:e?Object(i.jsx)(I,{title:"Hello! You are a registered user.",content:"To log out go to the logout page"}):Object(i.jsx)(I,{title:"Hello! You are not a registered user.",content:"To register, go to the authorization page"})})},S=n(32),_=n.n(S),T=n(46),D=n.n(T),L=function(e){return Object(i.jsx)("div",{className:D.a.mobileMenu,children:Object(i.jsx)("ul",{children:e.links.map((function(t,n){return t.show?Object(i.jsx)(j.b,{className:"nav-link",onClick:e.mobileLinkHandler,to:t.to,children:t.label},(new Date).toString()+t.to):null}))})})},A=function(){var e=Object(s.useContext)(w).token,t=Object(b.h)(),n=Object(s.useState)(!1),a=Object(O.a)(n,2),c=a[0],r=a[1],o=[{label:"Main",to:"/",show:!0},{label:"Weather",to:"/weather",show:!0},{label:"Information",to:"/about",show:!0},{label:"Authorization",to:"/auth",show:!e},{label:"Logout",to:"/logout",show:!!e}],l=function(){r(!1)};return Object(i.jsx)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center w-100",children:[Object(i.jsx)(j.b,{to:"/",className:"navbar-brand",href:"/",children:"Todo"}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",children:[Object(i.jsx)("ul",{className:"navbar-nav mr-auto",children:o.map((function(e,t){return e.show?Object(i.jsx)(j.b,{className:"nav-link",onClick:l,exact:!0,to:e.to,children:e.label},(new Date).toString()+e.to):null}))}),"/"===t.pathname?Object(i.jsx)(y,{}):null]}),Object(i.jsx)("div",{className:"".concat(_.a.head_burger," ").concat(c?_.a.active:""),children:Object(i.jsx)("i",{className:"fa ".concat(c?"fa-times":"fa-bars"),onClick:function(){return r(!c)}})}),c?Object(i.jsx)(L,{mobileLinkHandler:l,links:o}):null]})})})},H=n(8),F=n(5),P="SHOW_ALERT",R="HIDE_ALERT",U=(a={},Object(H.a)(a,P,(function(e,t){var n=t.payload;return Object(F.a)(Object(F.a)({},n),{},{visible:!0})})),Object(H.a)(a,R,(function(e,t){t.payload;return Object(F.a)(Object(F.a)({},e),{},{visible:!1})})),Object(H.a)(a,"DEFAULT",(function(e){return e})),a),M=function(e,t){return(U[t.type]||U.DEFAULT)(e,t)},J=function(e){var t=e.children,n=Object(s.useReducer)(M,{visible:!1,text:"",type:"warning"}),a=Object(O.a)(n,2),c=a[0],r=a[1];return Object(i.jsx)(m.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";r({type:P,payload:{text:e,type:t}})},hide:function(){r({type:R})},alert:c},children:t})},G=n(13),W=n.n(G),q=n(24),z=n(20),B="ADD_NOTE",Q="REMOVE_NOTE",Y="FETCH_NOTE",K="TOGGLE_LOADER",X="EDIT_NOTE",V="SHOW_EDIT",Z="HIDE_EDIT",$="CHANGE_PROPERTY",ee=(c={},Object(H.a)(c,K,(function(e,t){var n=t.bool;return Object(F.a)(Object(F.a)({},e),{},{loading:n})})),Object(H.a)(c,B,(function(e,t){var n=t.payload;return Object(F.a)(Object(F.a)({},e),{},{notes:[].concat(Object(q.a)(e.notes),[n])})})),Object(H.a)(c,Q,(function(e,t){var n=t.id;return Object(F.a)(Object(F.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==n}))})})),Object(H.a)(c,X,(function(e,t){var n=t.notes;return Object(F.a)(Object(F.a)({},e),{},{edit:!1,editId:"",notes:n})})),Object(H.a)(c,V,(function(e,t){var n=t.editId;return Object(F.a)(Object(F.a)({},e),{},{edit:!0,editId:n})})),Object(H.a)(c,Z,(function(e,t){t.editId;return Object(F.a)(Object(F.a)({},e),{},{edit:!1,editId:""})})),Object(H.a)(c,Y,(function(e,t){var n=t.payload;return Object(F.a)(Object(F.a)({},e),{},{notes:n,loading:!1})})),Object(H.a)(c,$,(function(e,t){var n=t.notes;return Object(F.a)(Object(F.a)({},e),{},{notes:n})})),Object(H.a)(c,"DEFAULT",(function(e){return e})),c),te=function(e,t){return(ee[t.type]||ee.DEFAULT)(e,t)},ne=n(21),ae=n.n(ne),ce="https://react-todo-4c518-default-rtdb.firebaseio.com",re=function(e){var t=e.children,n=Object(s.useContext)(m),a=n.show,c=(n.hide,Object(s.useReducer)(te,{notes:[],loading:!1,edit:!1,editId:"",editValue:""})),r=Object(O.a)(c,2),o=r[0],l=r[1],u=Object(s.useState)(""),d=Object(O.a)(u,2),j=d[0],b=d[1],p=function(e){var t=e.filter((function(e,t){return-1!==e.title.toLowerCase().indexOf(j.toLowerCase())}));return""===j?e:t}(o.notes),f=function(){var e=Object(z.a)(W.a.mark((function e(t,n){var c,r,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=o.notes.findIndex((function(e){return e.id===t})),r=o.notes[c],i=Object(F.a)(Object(F.a)({},r),{},Object(H.a)({},n,!r[n])),e.next=6,ae.a.put("".concat(ce,"/notes").concat(t,".json"),i);case 6:e.sent,l({type:$,notes:[].concat(Object(q.a)(o.notes.slice(0,c)),[i],Object(q.a)(o.notes.slice(c+1)))}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435!","danger");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e){l({type:K,bool:e})},v=function(){var e=Object(z.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,ae.a.get("".concat(ce,"/notes.json"));case 3:(t=e.sent).data?(n=Object.keys(t.data).map((function(e,n){return Object(F.a)(Object(F.a)({},t.data[e]),{},{id:e})})),l({type:Y,payload:n}),x(!1)):x(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(z.a)(W.a.mark((function e(t){var n,c,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t,important:!1,done:!1,date:(new Date).toJSON()},e.prev=1,e.next=4,ae.a.post("".concat(ce,"/notes.json"),n);case 4:c=e.sent,r=Object(F.a)(Object(F.a)({},n),{},{id:c.data.name}),l({type:B,payload:r}),a("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430!","success"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435!","danger");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(z.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.a.delete("".concat(ce,"/notes/").concat(t,".json"));case 3:e.sent,l({type:Q,id:t}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(z.a)(W.a.mark((function e(t,n){var a,c,r,i,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={title:n,important:!1,done:!1,date:(new Date).toJSON()},c=o.notes.findIndex((function(e){return e.id===t})),r=o.notes[c],i=Object(F.a)(Object(F.a)({},r),{},{title:n}),e.next=6,ae.a.put("".concat(ce,"/notes/").concat(t,".json"),a);case 6:s=e.sent,console.log(s),l({type:X,notes:[].concat(Object(q.a)(o.notes.slice(0,c)),[i],Object(q.a)(o.notes.slice(c+1)))});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(i.jsx)(h.Provider,{value:{addNote:g,fetchNotes:v,removeNote:y,hideModal:function(){l({type:Z})},showModal:function(e){l({type:V,editId:e})},filterText:j,filterSearch:function(e){b(e.trim())},editNote:N,visibleNotes:p,notes:o.notes,loading:o.loading,edit:o.edit,editId:o.editId,changeProperty:f},children:t})},oe=l.a.createContext(),ie=n(35),se=n.n(ie),le=function(){var e=Object(s.useContext)(oe),t=e.searchWeather,n=e.defaultCities,a=e.error,c=Object(s.useState)(""),r=Object(O.a)(c,2),o=r[0],l=r[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o),l("")},className:se.a.form,children:[Object(i.jsx)("ul",{className:se.a.defaultCities,children:n.map((function(e,n){return Object(i.jsx)("li",{className:"",style:{marginRight:"5px"},onClick:function(){return t(e),void l("")},children:e},e+n)}))}),Object(i.jsxs)("div",{className:"input-group mb-3",children:[Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter city",value:o,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("div",{className:"input-group-append",children:Object(i.jsx)("button",{className:"btn btn-primary",type:"submit",id:"button-addon2",children:Object(i.jsx)("i",{className:"fa fa-search"})})})]})]}),a?Object(i.jsx)(I,{title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\u0442 \u0442\u0430\u043a.",content:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."}):null]})},ue=n(48),de=n.n(ue),je=function(){var e=Object(s.useContext)(oe),t=e.main,n=e.weather,a=e.name,c=e.searchWeather,r=e.units,o="http://openweathermap.org/img/wn/".concat(n.icon,"@2x.png")||!1;if(null===t)return null;var l=function(e){c(a,e)};return Object(i.jsxs)("div",{className:de.a.weatherInfo,children:[Object(i.jsx)("h5",{children:a}),Object(i.jsx)("div",{className:"",children:Object(i.jsx)("img",{src:o,alt:""})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"metric"===r?"btn btn-primary":"btn btn-dark",style:{marginRight:"5px"},onClick:function(){return l("metric")},children:"\u2103"}),Object(i.jsx)("button",{className:"imperial"===r?"btn btn-primary":"btn btn-dark",onClick:function(){return l("imperial")},children:"\u2109"})]}),Object(i.jsx)("ul",{children:Object.keys(t).map((function(e,n){return Object(i.jsxs)("li",{children:[Object(i.jsxs)("strong",{children:[e,": "]})," ",Math.round(t[e])]})}))})]})},be=n(49),Oe=n.n(be),me=function(){var e=Object(s.useContext)(oe).loading;return Object(i.jsx)("div",{className:Oe.a.weatherPage,children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"text-center mt-5",children:"Check weather in your city!"}),Object(i.jsx)(le,{}),e?Object(i.jsx)(v,{}):Object(i.jsx)(je,{})]})})},he="FETCH_WEATHER",pe=(r={},Object(H.a)(r,"TOGGLE_LOADER",(function(e,t){var n=t.bool;return Object(F.a)(Object(F.a)({},e),{},{loading:n})})),Object(H.a)(r,he,(function(e,t){var n=t.payload;return Object(F.a)(Object(F.a)({},e),{},{main:n.main,weather:n.weather,name:n.name,loading:!1,error:n.error,units:n.units})})),Object(H.a)(r,"DEFAULT",(function(e){return e})),r),fe=function(e,t){return(pe[t.type]||pe.DEFAULT)(e,t)},xe=ae.a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),ve=function(e){var t=e.children,n=Object(s.useReducer)(fe,{main:null,weather:[],name:"",loading:!1,units:null,defaultCities:["Kyiv","London","Paris"],error:null}),a=Object(O.a)(n,2),c=a[0],r=a[1],o=function(e){r({type:K,bool:e})},l=function(){var e=Object(z.a)(W.a.mark((function e(t){var n,a,c=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"metric",o(!0),e.prev=2,e.next=5,xe.get("weather?q=".concat(t,"&units=").concat(n,"&appid=7bb0d4450f7d6addbe608642a58bcf7a"));case 5:a=e.sent,r({type:he,payload:{main:a.data.main,weather:a.data.weather[0],name:a.data.name,units:n}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),o(!1),r({type:he,payload:{main:null,weather:[],name:"",error:!0}});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)(oe.Provider,{value:{searchWeather:l,main:c.main,weather:c.weather,name:c.name,loading:c.loading,defaultCities:c.defaultCities,error:c.error,units:c.units},children:t})},ge=n(50),ye="AUTH_SUCCESS",Ne="AUTH_LOGOUT",we=(o={},Object(H.a)(o,ye,(function(e,t){var n=t.token;return Object(F.a)(Object(F.a)({},e),{},{token:n})})),Object(H.a)(o,Ne,(function(e,t){t.token;return Object(F.a)(Object(F.a)({},e),{},{token:null})})),Object(H.a)(o,"DEFAULT",(function(e){return e})),o),ke=function(e,t){return(we[t.type]||we.DEFAULT)(e,t)};ge.a.initializeApp({apiKey:"AIzaSyBX4HJOqNx0cNH4JrSfGu7bsAtHQ23dwyQ",authDomain:"react-todo-4c518.firebaseapp.com",databaseURL:"https://react-todo-4c518-default-rtdb.firebaseio.com",projectId:"react-todo-4c518",storageBucket:"react-todo-4c518.appspot.com",messagingSenderId:"483701227594",appId:"1:483701227594:web:16e992bf14a55f9a98a6b3"});var Ce=function(e){var t=e.children;Object(b.g)();Object(s.useEffect)((function(){var e=localStorage.getItem("token");e?new Date(localStorage.getItem("expirationDate"))<=new Date?r({type:Ne}):r({type:ye,token:e}):o()}),[]);var n=Object(s.useReducer)(ke,{token:null}),a=Object(O.a)(n,2),c=a[0],r=a[1],o=function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),r({type:Ne})},l=function(){var e=Object(z.a)(W.a.mark((function e(t,n,a){var c,o,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBX4HJOqNx0cNH4JrSfGu7bsAtHQ23dwyQ":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBX4HJOqNx0cNH4JrSfGu7bsAtHQ23dwyQ",e.next=3,ae.a.post(c,{email:t,password:n}).then((function(e){return e.data}));case 3:o=e.sent,r({type:ye,token:o.idToken}),i=new Date((new Date).getTime()+1e3*o.expiresIn),localStorage.setItem("token",o.idToken),localStorage.setItem("userId",o.localId),localStorage.setItem("expirationDate",i);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(i.jsx)(w.Provider,{value:{authLogin:l,token:c.token,authLogout:o},children:t})},Ie=function(){var e=Object(s.useContext)(w),t=e.authLogin,n=e.token,a=Object(s.useState)(""),c=Object(O.a)(a,2),r=c[0],o=c[1],l=Object(s.useState)(""),u=Object(O.a)(l,2),d=u[0],j=u[1];return n?Object(i.jsx)(b.a,{to:"/"}):Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(i.jsx)("input",{type:"email",value:r,onChange:function(e){return o(e.target.value.trim())},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(i.jsx)("input",{type:"password",className:"form-control",value:d,onChange:function(e){return j(e.target.value)},id:"exampleInputPassword1"})]}),Object(i.jsx)("button",{type:"submit",onClick:function(){t(r,d,!0)},className:"btn btn-primary mr-2",children:"Sign In"}),Object(i.jsx)("button",{type:"submit",onClick:function(){t(r,d,!1)},className:"btn btn-primary",children:"Sign Up"})]})})})},Ee=function(){var e=Object(s.useContext)(w),t=e.authLogout,n=(e.autoLogout,Object(s.useReducer)(ke)),a=Object(O.a)(n,2);a[0],a[1];return Object(s.useEffect)((function(){t()}),[]),Object(i.jsx)(b.a,{to:"/auth"})};var Se=function(){return Object(i.jsx)(Ce,{children:Object(i.jsx)(J,{children:Object(i.jsx)(ve,{children:Object(i.jsx)(re,{children:Object(i.jsxs)(j.a,{children:[Object(i.jsx)(A,{}),Object(i.jsxs)(b.d,{children:[Object(i.jsx)(b.b,{exact:!0,path:"/",component:N}),Object(i.jsx)(b.b,{path:"/about",component:E}),Object(i.jsx)(b.b,{path:"/weather",component:me}),Object(i.jsx)(b.b,{path:"/auth",component:Ie}),Object(i.jsx)(b.b,{path:"/logout",component:Ee})]})]})})})})})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};d.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(Se,{})}),document.getElementById("root")),_e()}},[[84,1,2]]]);
//# sourceMappingURL=main.2d528bbf.chunk.js.map