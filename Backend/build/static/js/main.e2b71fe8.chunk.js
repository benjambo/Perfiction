(this.webpackJsonpperfiction=this.webpackJsonpperfiction||[]).push([[0],{108:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),o=t.n(l),c=t(66),i=t(18),s=t(28),m=t(14),u=t(15),h=t(21),d=t(20),p=t(26),E=t(22),f=t(34),v=t(9),g=t(17),b=t(116),w=t(118),N=new(function(){function e(){Object(m.a)(this,e),this.authenticated=!1}return Object(u.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),y=t(29),k=t.n(y),O=t(10);function j(){var e=Object(v.a)(["\n    .navbar {\n        background-color: rgba(0,0,0,0.9);\n    }\n\n    .navbar-default, .collapsed {\n        border-color: white;\n        background-color: white;\n      }\n      \n      .navbar-default, .toggle{\n       background-color: white;\n      }\n\n    .navbar-brand, .navbar-nav .nav-link  {\n        color white;\n        margin: 2vh 2vw 2vh 2vw;\n\n        &:hover {\n            color: #690505;\n        }\n    }\n\n    .nav-item {\n      color white;\n      margin: 2vh 2vw 2vh 2vw;\n    }\n    "]);return j=function(){return e},e}var C=O.a.div(j()),A=function(e){var a=e.formErrors,t=Object(f.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){""===e&&(n=!1)})),n},S=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),x=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(d.a)(a).call(this,e))).handleSubmit=function(e){if(e.preventDefault(),A(t.state)){var a={firstName:t.state.firstName,lastName:t.state.lastName,email:t.state.email,password:t.state.password};k.a.post("/signup",a).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log(t.state),N.login((function(){t.props.history.push("/home")}))}else console.log("INVALID FORM - ERROR MESSAGE")},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.name,r=a.value,l=t.state.formErrors;switch(n){case"firstName":l.firstName=r.length<2?"minimum 2 characters required":"";break;case"lastName":l.lastName=r.length<2?"minimum 2 characters required":"";break;case"email":l.email=S.test(r)?"":"Invald email address";break;case"password":l.password=r.length<6?"minimum 6 characters required":""}t.setState(Object(s.a)({formErrors:l},n,r))},t.state={firstName:"",lastName:"",email:"",password:"",formErrors:{firstName:"",lastName:"",email:"",password:""}},t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.firstName,n=a.lastName,l=a.email,o=a.password,c=a.formErrors;return r.a.createElement(C,null,r.a.createElement(b.a,{expand:"lg",fixed:"top"},r.a.createElement(b.a.Brand,null,"Perfiction"),r.a.createElement(b.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"ml-auto"},r.a.createElement(w.a.Item,null,"Welcome to Perfiction")))),r.a.createElement(g.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1250}},(function(a){return r.a.createElement("div",{style:a,className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Create Account"),r.a.createElement("form",{action:"/signup",className:"forms",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"firstName"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:c.firstName.length>0?"error":null,placeholder:"First Name",type:"text",name:"firstName",value:t,onChange:e.handleChange}),c.firstName.length>0&&r.a.createElement("span",{className:"errorMessage"},c.firstName)),r.a.createElement("div",{className:"lastName"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:c.lastName.length>0?"error":null,placeholder:"Last Name",type:"text",name:"lastName",value:n,onChange:e.handleChange}),c.lastName.length>0&&r.a.createElement("span",{className:"errorMessage"},c.lastName)),r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:c.email.length>0?"error":null,placeholder:"Email",type:"email",name:"email",value:l,onChange:e.handleChange}),c.email.length>0&&r.a.createElement("span",{className:"errorMessage"},c.email)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:c.password.length>0?"error":null,placeholder:"Password",type:"password",name:"password",value:o,onChange:e.handleChange}),c.password.length>0&&r.a.createElement("span",{className:"errorMessage"},c.password)),r.a.createElement("div",{className:"createAccount"},r.a.createElement("button",{type:"submit"},"Create Account"),r.a.createElement("a",{href:"/"},r.a.createElement("small",null,"Already Have an Account?"))))))})))}}]),a}(n.Component);function I(){var e=Object(v.a)(["\n    .navbar {\n        background-color: rgba(0,0,0,0.9);\n    }\n\n    .navbar-default, .collapsed {\n        border-color: white;\n        background-color: white;\n      }\n      \n      .navbar-default, .toggle{\n       background-color: white;\n      }\n\n    .navbar-brand, .navbar-nav .nav-link  {\n        color white;\n        margin: 2vh 2vw 2vh 2vw;\n\n        &:hover {\n            color: #690505;\n        }\n    }\n\n    .nav-item {\n      color white;\n      margin: 2vh 2vw 2vh 2vw;\n    }\n    "]);return I=function(){return e},e}var P=O.a.div(I()),R=function(e){var a=e.formErrors,t=Object(f.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach((function(e){e.length>0&&(n=!1)})),Object.values(t).forEach((function(e){""===e&&(n=!1)})),n},F=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),L=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(h.a)(this,Object(d.a)(a).call(this))).handleSubmit=function(a){if(a.preventDefault(),R(e.state)){var t={email:e.state.email,password:e.state.password};k.a.post("/",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),N.login((function(){e.props.history.push("/home")}))}else console.log("INVALID FORM - ERROR MESSAGE")},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value,l=e.state.formErrors;switch(n){case"email":l.email=F.test(r)?"":"Invald email address";break;case"password":l.password=r.length<6?"minimum 6 characters required":""}e.setState(Object(s.a)({formErrors:l},n,r),(function(){return console.log(e.state)}))},e.state={email:"",password:"",formErrors:{email:"",password:""}},e}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.email,n=a.password,l=a.formErrors;return r.a.createElement(P,null,r.a.createElement(b.a,{expand:"lg",fixed:"top"},r.a.createElement(b.a.Brand,{href:"/"},"Perfiction"),r.a.createElement(b.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"ml-auto"},r.a.createElement(w.a.Item,null,"Welcome to Perfiction")))),r.a.createElement(g.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1250}},(function(a){return r.a.createElement("div",{style:a,className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{action:"/",className:"forms",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:l.email.length>0?"error":null,placeholder:"Email",type:"email",name:"email",value:t,onChange:e.handleChange}),l.email.length>0&&r.a.createElement("span",{className:"errorMessage"},l.email)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:l.password.length>0?"error":null,placeholder:"Password",type:"password",name:"password",value:n,onChange:e.handleChange}),l.password.length>0&&r.a.createElement("span",{className:"errorMessage"},l.password)),r.a.createElement("div",{className:"createAccount"},r.a.createElement("button",{type:"submit",href:"/"},"Login"),r.a.createElement("a",{href:"/signup"},r.a.createElement("small",null,"Don't Have an Account? Register Here!"))))))})))}}]),a}(n.Component),M=t(113),T=t(114),H=t(64),z=t.n(H);function W(){var e=Object(v.a)(["\n    .jumbotron {\n        background: url(",") no-repeat ;\n        background-size: cover;\n        color: white;\n        height: 600px;\n        z-index: -2;\n        margin: 0;\n    }\n\n    .overlay {\n        text-color: white;\n        text-align: center;\n        margin 19vh 0 0 0;\n        z-index: 0;\n    }\n"]);return W=function(){return e},e}var B=O.a.div(W(),z.a),D=function(){return r.a.createElement(B,null,r.a.createElement(M.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"},r.a.createElement(T.a,null,r.a.createElement("h2",null,"Welcome To Perfiction"),r.a.createElement("p",null,"Everything start with a cup of Coffee")))))},G=t(117),q=t(65),V=t(115);function Z(){var e=Object(v.a)(["\n    .navbar {\n        background-color: rgba(0,0,0,0.9);\n    }\n\n    .navbar-default, .collapsed {\n        border-color: white;\n        background-color: white;\n      }\n      \n      .navbar-default, .toggle{\n       background-color: white;\n      }\n\n    .navbar-brand, .navbar-nav .nav-link  {\n        color white;\n        margin: 2vh 2vw 2vh 2vw;\n\n        &:hover {\n            color: #690505;\n        }\n    }\n    "]);return Z=function(){return e},e}var U=O.a.div(Z()),$=function(){return r.a.createElement(U,null,r.a.createElement(b.a,{expand:"lg",fixed:"top"},r.a.createElement(b.a.Brand,{href:"/home"},"Perfiction"),r.a.createElement(b.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"ml-auto"},r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{href:"/home"},"Home")),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{href:"/catalog"},"Catalog")),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{href:"/about"},"About")),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{className:"logout",href:"/"},"Logout"))),r.a.createElement(G.a,{inline:!0},r.a.createElement(q.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(V.a,{variant:"outline-dark"},"Search")))))},J=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(D,null),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h3",null,"THE COMPANY"),r.a.createElement("p",null,"Perfiction is a long-term dream of two entrepreneurs combining science, art and coffee."),r.a.createElement("p",null,"We are located in the center of Helsinki at the corner of L\xf6nnrotinkatu and Abrahaminkatu."),r.a.createElement("p",null,"In our cafe, we have a miniature grinding machine which guarantees fresh coffee daily."),r.a.createElement("p",null,"Welcome to enjoy our goods!")),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h3",null,"OUR VISION"),r.a.createElement("p",null,"Established in 2019, our cafe offers high-quality, well-chosen and well-studied coffees."),r.a.createElement("p",null,"We prefer local food and small-scale products. We also offer small sweet and salty delicacies in Perfiction which are all produced within a radius of less than 10 km."),r.a.createElement("p",null,"Our company's priority is to act responsibly and environmentally friendly.")),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h3",null,"THE ROASTERY"),r.a.createElement("p",null,"Our roastery staff currently consists of two employees who produce 30 kg of roasted coffee weekly."),r.a.createElement("p",null,"There is also a shop where you can buy beans or coffee of choosing at our cafe or roastery."),r.a.createElement("p",null,"Our high quality coffee and future product development is guaranteed by constantly testing and experimenting with new ways."),r.a.createElement("p",null,"Our staff works hard and passionately which guarantees the best flavors and products.")))},Y=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(D,null),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h3",null,"ABOUT US"),r.a.createElement("p",null,"Hi! We are Benjamin Bowo and Jere Saarelma, two individuals with a passion for creativity \u2014 creativity makes us happy. We truly believe in the transformative power of illustration and design and their ability to simplify communications, elevate experiences, engage and inspire people everywhere. Good design and good relationships come from collaboration. We're excited to start a visual dialogue, learn about you, and make something beautiful together.")))},_=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(D,null),r.a.createElement("div",{className:"paragraph"},r.a.createElement("h2",null,"CATALOG PAGE"),r.a.createElement("h3",null,"Product Images"),r.a.createElement("p",null,"Most products should have photos that show the product in use, if practical, and in an appealing light. Users should have the option to view the image from the top, the side, facing front, and more. All images should be available in larger sizes, to show the product in detail. And some visual element should indicate the size of the product."),r.a.createElement("h3",null,"Product Details"),r.a.createElement("p",null,"A picture is great, but, visitors also want to read about your products. Give them as much detailed information as you can. Maybe everyone won\u2019t read all of it, but your most serious potential customers will.")))};function K(){var e=Object(v.a)(["\n    .navbar {\n        background-color: rgba(0,0,0,0.9);\n    }\n\n    .navbar-default, .collapsed {\n        border-color: white;\n        background-color: white;\n      }\n      \n      .navbar-default, .toggle{\n       background-color: white;\n      }\n\n    .navbar-brand, .navbar-nav .nav-link  {\n        color white;\n        margin: 2vh 2vw 2vh 2vw;\n\n        &:hover {\n            color: #690505;\n        }\n    }\n\n    .nav-item {\n      color white;\n      margin: 2vh 2vw 2vh 2vw;\n    }\n    "]);return K=function(){return e},e}var Q=O.a.div(K()),X=function(e){function a(){return Object(m.a)(this,a),Object(h.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(Q,null,r.a.createElement(b.a,{expand:"lg",fixed:"top"},r.a.createElement(b.a.Brand,{href:"/"},"Perfiction"),r.a.createElement(b.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"ml-auto"},r.a.createElement(w.a.Item,null,"Welcome to Perfiction")))),r.a.createElement(g.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1250}},(function(a){return r.a.createElement("div",{style:a,className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{className:"forms",onSubmit:e.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"",placeholder:"Email",type:"email",name:"email",noValidate:!0,onChange:e.handleChange})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"",placeholder:"Password",type:"password",name:"password",noValidate:!0,onChange:e.handleChange})),r.a.createElement("div",{className:"createAccount"},r.a.createElement("button",{type:"submit",href:"/"},"Login"),r.a.createElement("a",{href:"/signup"},r.a.createElement("small",null,"Don't Have an Account? Register Here!"))))))})))}}]),a}(n.Component);function ee(){var e=Object(v.a)(["\n  .container {\n    max-width: 100%;\n    padding: 0;\n  }\n"]);return ee=function(){return e},e}var ae=O.a.div(ee()),te=function(e){return r.a.createElement(ae,null,r.a.createElement(T.a,null,e.children))},ne=(t(108),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("ul",{className:"column"},r.a.createElement("li",null,r.a.createElement("strong",{className:"otsikot"},"Perfiction")),r.a.createElement("li",null,"Roast And Coffee Shop"),r.a.createElement("li",null,"L\xf6nnrotinkatu 32"),r.a.createElement("li",null,"00180"),r.a.createElement("li",null,"HELSINKI"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/groups/2107970076086665/"},"Facebook / Cup o'Roast"))),r.a.createElement("ul",{className:"column"},r.a.createElement("li",null,r.a.createElement("strong",{className:"otsikot"},"INFO")),r.a.createElement("li",null,"info@perf.com"),r.a.createElement("li",null,"040 547349"),r.a.createElement("li",null,"Availability on weekdays:"),r.a.createElement("li",null,"9:00 - 16:00")),r.a.createElement("ul",{className:"column"},r.a.createElement("li",null,r.a.createElement("strong",{className:"otsikot"},"OPENING HOURS")),r.a.createElement("li",null,"Coffee shop"),r.a.createElement("li",null,"open:"),r.a.createElement("li",null,"Mon - Thu 6:00 - 18:00"),r.a.createElement("li",null,"Friday 6:00 - 21:00"),r.a.createElement("li",null,"Sat - Sun 10:00 - 20:00")))}),re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/signup",component:x}),r.a.createElement(i.a,{exact:!0,path:"/",component:L}),r.a.createElement(g.Spring,{from:{marginTop:-500},to:{marginTop:0}},(function(e){return r.a.createElement("div",{style:e},r.a.createElement(i.a,{exact:!0,path:"/home",component:J}),r.a.createElement(i.a,{exact:!0,path:"/catalog",component:_}),r.a.createElement(i.a,{exact:!0,path:"/about",component:Y}))})),r.a.createElement(i.a,{component:X})))),r.a.createElement(ne,null))};o.a.render(r.a.createElement(re,null),document.getElementById("root"))},64:function(e,a,t){e.exports=t.p+"static/media/coffee.ddb6002b.jpg"},71:function(e,a,t){e.exports=t(111)}},[[71,1,2]]]);
//# sourceMappingURL=main.e2b71fe8.chunk.js.map