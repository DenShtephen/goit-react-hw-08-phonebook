"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[987],{4987:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(9434),r=n(4217),o=n(4478),s=n(184),c=function(){var e=(0,a.v9)(r.Af),t=(0,a.v9)(r.mj),n=(0,a.I0)();console.log(e),console.log(t);var c=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:"contact-list",children:c.map((function(e){return(0,s.jsxs)("li",{className:"contact-list-item",children:[e.name,": ",e.number,(0,s.jsx)("button",{type:"button",className:"delete-button",onClick:function(){return t=e.id,void n((0,o._f)(t));var t},children:"Delete"})]},e.id)}))})})},i=n(2646),u=(n(1174),function(){var e=(0,a.I0)(),t=(0,a.v9)(r.mj);return(0,s.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,i.T)(t.target.value))},className:"filter-input",placeholder:"Search contacts by name"})}),l=n(9439),m=n(2791),d=function(){var e=(0,m.useState)(""),t=(0,l.Z)(e,2),n=t[0],c=t[1],i=(0,m.useState)(""),u=(0,l.Z)(i,2),d=u[0],h=u[1],f=(0,a.I0)(),p=(0,a.v9)(r.Af),v=function(e){switch(e.target.name){case"name":c(e.target.value);break;case"number":h(e.target.value)}},x=function(e){p.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert('"'.concat(e.name,'" \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432.')):f((0,o.el)(e))};return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}();x({id:t,name:n,number:d}),c(""),h("")},className:"contact-form",children:[(0,s.jsx)("input",{type:"text",name:"name",value:n,onChange:v,placeholder:"Joe Biden",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces...",required:!0}),(0,s.jsx)("input",{type:"text",name:"number",value:d,onChange:v,placeholder:"696-96-96",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}...",title:"Phone number must be digits and can contain spaces, dashes...",required:!0}),(0,s.jsx)("button",{type:"submit",className:"submit-button",children:"Add Contact"})]})},h=function(e){var t=e.title,n=e.children;return(0,s.jsxs)("section",{children:[t&&(0,s.jsx)("h3",{className:"section-title",children:t}),n]})},f=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(h,{title:"PhoneBook",children:(0,s.jsx)(d,{})}),(0,s.jsxs)(h,{title:"Contacts",children:[(0,s.jsx)(u,{}),(0,s.jsx)(c,{})]})]})}}}]);
//# sourceMappingURL=987.8dd62c6a.chunk.js.map