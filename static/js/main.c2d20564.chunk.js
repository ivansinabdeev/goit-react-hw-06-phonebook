(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={addContact:"Form_addContact__GEI3F",button:"Form_button__baYOq"}},16:function(e,t,n){e.exports={buttonDelete:"ContactList_buttonDelete__Rh5RN"}},17:function(e,t,n){e.exports={title:"Title_title__gp0zy"}},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),b=n(14),i=n(12),u=n.n(i),s=n(3),l=n(36),j=n(4),d=Object(j.b)("phonebook/add",(function(e){return{payload:{id:Object(l.a)(),name:e.name,number:e.number}}})),O=Object(j.b)("phonebook/get"),m={addContact:d,deleteContact:Object(j.b)("phonebook/delete"),changeFilter:Object(j.b)("phonebook/changeFilter"),getContacts:O},h=function(e){return e.phonebook.contacts},p=function(e){return e.phonebook.filter},f=n(1);function x(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(b.a)(r,2),i=o[0],l=o[1],j=Object(s.c)(h),d=Object(s.b)(),O=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}};return Object(f.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),t={name:n,number:i},j.some((function(e){return e.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()||j.some((function(e){return e.number===t.number}))}))?alert("Friend ".concat(t.name," or number ").concat(t.number," is alredy exist")):d(m.addContact(t)),a(""),l("")},className:u.a.addContact,children:[Object(f.jsxs)("label",{children:["Name",Object(f.jsx)("input",{value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O})]}),Object(f.jsxs)("label",{children:["Number",Object(f.jsx)("input",{value:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O})]}),Object(f.jsx)("button",{type:"submit",className:u.a.button,children:"Add contact"})]})}function C(){var e=Object(s.c)(p),t=Object(s.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:function(e){return t(m.changeFilter(e.target.value))}})]})})}var g=n(16),v=n.n(g);function k(){var e=Object(s.c)(h),t=Object(s.c)(p),n=Object(s.b)(),c=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(f.jsx)("ul",{children:c.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(f.jsxs)("li",{children:[c,": ",a,Object(f.jsx)("button",{className:v.a.buttonDelete,type:"button",onClick:function(){return n(m.deleteContact(t))},children:"Delete"})]},t)}))})}var y=n(17),_=n.n(y);var w=function(e){var t=e.title;return Object(f.jsx)("p",{className:_.a.title,children:t})};n(31);function F(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w,{title:"Phonebook"}),Object(f.jsx)(x,{}),Object(f.jsx)(w,{title:"Contacts"}),Object(f.jsx)(C,{}),Object(f.jsx)(k,{})]})}var A,N=n(8),L=n(6),z=n(2),D=Object(j.c)([],(A={},Object(L.a)(A,m.addContact,(function(e,t){var n=t.payload;return[].concat(Object(N.a)(e),[n])})),Object(L.a)(A,m.deleteContact,(function(e,t){var n=t.payload,c=e.filter((function(e){return e.id!==n}));return Object(N.a)(c)})),A)),S=Object(j.c)("",Object(L.a)({},m.changeFilter,(function(e,t){return t.payload}))),q=Object(z.b)({contacts:D,filter:S}),J=n(5),Z=n(18),B=n.n(Z),E=Object(N.a)(Object(j.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),I={key:"phonebook",storage:B.a},M=Object(j.a)({reducer:{phonebook:Object(J.g)(I,q)},middleware:E}),R=Object(J.h)(M),G=n(19);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(s.a,{store:M,children:Object(f.jsx)(G.a,{loading:null,persistor:R,children:Object(f.jsx)(F,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c2d20564.chunk.js.map