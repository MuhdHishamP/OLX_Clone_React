(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(30),a=c.n(n),i=c(17),j=c(9),r=(c(38),c(10)),l=c.p+"static/media/olx-logo.b3f099a2.png",b=(c(39),c(2)),d=Object(s.createContext)(null),h=Object(s.createContext)(null);function o(e){var t=e.children,c=Object(s.useState)(null),n=Object(r.a)(c,2),a=n[0],i=n[1];return Object(b.jsx)(h.Provider,{value:{user:a,setUser:i},children:t})}function O(){var e=Object(j.e)(),t=Object(s.useState)(""),c=Object(r.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(""),h=Object(r.a)(i,2),o=h[0],O=h[1],u=Object(s.useState)(""),x=Object(r.a)(u,2),m=x[0],p=x[1],v=Object(s.useState)(""),f=Object(r.a)(v,2),g=f[0],N=f[1],C=Object(s.useContext)(d).firebase;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"signupParentDiv",children:[Object(b.jsx)("img",{width:"200px",height:"200px",src:l}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),C.auth().createUserWithEmailAndPassword(o,g).then((function(e){return e.user.updateProfile({displayName:n}),e})).then((function(e){C.firestore().collection("users").add({id:e.user.uid,username:n,phone:m})})).then((function(){e.push("/login")}))},style:{marginBottom:15},children:[Object(b.jsx)("label",{htmlFor:"fname",children:"Username"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"text",id:"fname",value:n,onChange:function(e){return a(e.target.value)},name:"name"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"email",id:"fname",value:o,onChange:function(e){return O(e.target.value)},name:"email"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"lname",children:"Phone"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"number",id:"lname",name:"phone",value:m,onChange:function(e){return p(e.target.value)},defaultValue:"Doe"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"password",id:"lname",value:g,onChange:function(e){return N(e.target.value)},name:"password",defaultValue:"Doe"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{children:"Signup"})]}),Object(b.jsx)("a",{style:{color:"blue",textDecoration:"underline"},onClick:function(){return e.push("/login")},children:"Login"})]})})}var u=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(O,{})})};c(45);function x(){return Object(b.jsx)("svg",{width:"48px",height:"48px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(b.jsx)("path",{className:"rui-77aaa",d:"M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"})})}function m(e){return Object(b.jsx)("svg",{width:"25px",height:"25px",viewBox:"0 0 1024 1024","data-aut-id":"icon",color:e.color?e.color:"",className:!0,fillRule:"evenodd",children:Object(b.jsx)("path",{className:"rui-77aaa",d:"M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"})})}function p(){return Object(b.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(b.jsx)("path",{className:"rui-77aaa",d:"M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"})})}function v(){return Object(b.jsx)("svg",{width:104,height:48,viewBox:"0 0 1603 768",className:"_3V9PS",children:Object(b.jsxs)("g",{children:[Object(b.jsx)("path",{className:"all",d:"M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"}),Object(b.jsx)("path",{className:"left",d:"M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"}),Object(b.jsx)("path",{className:"top",d:"M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"}),Object(b.jsx)("path",{className:"right",d:"M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"})]})})}function f(e){return Object(b.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(b.jsx)("path",{className:"rui-367TP",d:"M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"})})}var g=function(){var e=Object(s.useContext)(h).user,t=Object(s.useContext)(d).firebase,c=Object(j.e)();return console.log(e),Object(b.jsx)("div",{className:"headerParentDiv",children:Object(b.jsxs)("div",{className:"headerChildDiv",children:[Object(b.jsx)("div",{className:"brandName",children:Object(b.jsx)(x,{})}),Object(b.jsxs)("div",{className:"placeSearch",children:[Object(b.jsx)(m,{}),Object(b.jsx)("input",{type:"text"}),Object(b.jsx)(p,{})]}),Object(b.jsxs)("div",{className:"productSearch",children:[Object(b.jsx)("div",{className:"input",children:Object(b.jsx)("input",{type:"text",placeholder:"Find Cars,Mobile Phones and more..."})}),Object(b.jsx)("div",{className:"searchAction",children:Object(b.jsx)(m,{color:"#ffffff"})})]}),Object(b.jsxs)("div",{className:"language",children:[Object(b.jsx)("span",{children:" ENGLISH "}),Object(b.jsx)(p,{})]}),Object(b.jsxs)("div",{className:"loginPage",onClick:function(){return c.push("/login")},children:[Object(b.jsx)("span",{children:e?"Welcome, "+e.displayName:"Login"}),Object(b.jsx)("hr",{})]}),e&&Object(b.jsx)("span",{style:{cursor:"pointer"},onClick:function(){t.auth().signOut(),c.push("/login")},children:"Logout"}),Object(b.jsxs)("div",{className:"sellMenu",onClick:function(){return e?c.push("/create"):c.push("/login")},children:[Object(b.jsx)(v,{}),Object(b.jsxs)("div",{className:"sellMenuContent",children:[Object(b.jsx)(f,{}),Object(b.jsx)("span",{children:"SELL"})]})]})]})})};c(46);var N=function(){return Object(b.jsx)("div",{className:"bannerParentDiv",children:Object(b.jsxs)("div",{className:"bannerChildDiv",children:[Object(b.jsxs)("div",{className:"menuBar",children:[Object(b.jsxs)("div",{className:"categoryMenu",children:[Object(b.jsx)("span",{children:"ALL CATEGORIES"}),Object(b.jsx)(p,{})]}),Object(b.jsxs)("div",{className:"otherQuickOptions",children:[Object(b.jsx)("span",{children:"Cars"}),Object(b.jsx)("span",{children:"Motorcy..."}),Object(b.jsx)("span",{children:"Mobile Ph..."}),Object(b.jsx)("span",{children:"For Sale:Houses & Apart..."}),Object(b.jsx)("span",{children:"Scoot..."}),Object(b.jsx)("span",{children:"Commercial & Other Ve..."}),Object(b.jsx)("span",{children:"For Rent: House & Apart..."})]})]}),Object(b.jsx)("div",{className:"banner",children:Object(b.jsx)("img",{src:"../../../Images/banner copy.png",alt:""})})]})})},C=c(23);function w(){return Object(b.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(b.jsx)("path",{className:"rui-77aaa",d:"M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"})})}c(47);var S=Object(s.createContext)(null);function P(e){var t=e.children,c=Object(s.useState)(),n=Object(r.a)(c,2),a=n[0],i=n[1];return Object(b.jsx)(S.Provider,{value:{postDetails:a,setpostDetails:i},children:t})}var y=function(){var e=Object(s.useContext)(d).firebase,t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],a=c[1],i=Object(s.useContext)(S).setpostDetails,l=Object(j.e)();return Object(s.useEffect)((function(){e.firestore().collection("products").get().then((function(e){var t=e.docs.map((function(e){return Object(C.a)(Object(C.a)({},e.data()),{},{id:e.id})}));a(t)}))})),Object(b.jsxs)("div",{className:"postParentDiv",children:[Object(b.jsxs)("div",{className:"moreView",children:[Object(b.jsxs)("div",{className:"heading",children:[Object(b.jsx)("span",{children:"Quick Menu"}),Object(b.jsx)("span",{style:{cursor:"default"},children:"View more"})]}),Object(b.jsx)("div",{className:"cards",children:n.map((function(e){return Object(b.jsxs)("div",{className:"card",onClick:function(){i(e),l.push("/view")},children:[Object(b.jsx)("div",{className:"favorite",children:Object(b.jsx)(w,{})}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:e.url,alt:""})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("p",{className:"rate",children:["\u20b9 ",e.Price]}),Object(b.jsx)("span",{className:"kilometer",children:e.Category}),Object(b.jsx)("p",{className:"name",children:e.name})]}),Object(b.jsx)("div",{className:"date",children:Object(b.jsx)("span",{children:e.createdAt})})]})}))})]}),Object(b.jsxs)("div",{className:"recommendations",children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("span",{children:"Fresh recommendations"})}),Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"favorite",children:Object(b.jsx)(w,{})}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"../../../Images/R15V3.jpg",alt:""})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{className:"rate",children:"\u20b9 250000"}),Object(b.jsx)("span",{className:"kilometer",children:"Two Wheeler"}),Object(b.jsx)("p",{className:"name",children:" YAMAHA R15V3"})]}),Object(b.jsx)("div",{className:"date",children:Object(b.jsx)("span",{children:"10/5/2021"})})]}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"favorite",children:Object(b.jsx)(w,{})}),Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:"../../../Images/e5262d8eebfaab317ff63870ce2b5bcebdcf2463.webp",alt:""})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{className:"rate",children:"\u20b9 50000"}),Object(b.jsx)("span",{className:"kilometer",children:"Mobile Phones"}),Object(b.jsx)("p",{className:"name",children:" iPhone 13"})]}),Object(b.jsx)("div",{className:"date",children:Object(b.jsx)("span",{children:"10/5/2021"})})]})]})]})]})};c(48);var D=function(){return Object(b.jsxs)("div",{className:"footerParentDiv",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("p",{children:"POPULAR LOCATIONS"})}),Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"kolkata"}),Object(b.jsx)("li",{children:"Mumbai"}),Object(b.jsx)("li",{children:"Chennai"}),Object(b.jsx)("li",{children:"Pune"})]})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("p",{children:"ABOUT US"})}),Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"About OLX Group"}),Object(b.jsx)("li",{children:"Careers"}),Object(b.jsx)("li",{children:"Contact Us"}),Object(b.jsx)("li",{children:"OLXPeople"})]})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("p",{children:"OLX"})}),Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Help"}),Object(b.jsx)("li",{children:"Sitemap"}),Object(b.jsx)("li",{children:"Legal & Privacy information"})]})})]})]}),Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("p",{children:"Other Countries Pakistan - South Africa - Indonesia"}),Object(b.jsx)("p",{children:"Free Classifieds in India. \xa9 2006-2021 OLX"})]})]})};var M=function(e){return Object(b.jsxs)("div",{className:"homeParentDiv",children:[Object(b.jsx)(g,{}),Object(b.jsx)(N,{}),Object(b.jsx)(y,{}),Object(b.jsx)(D,{})]})};c(49);var A=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),h=i[0],o=i[1],O=Object(s.useContext)(d).firebase,u=Object(j.e)();return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"loginParentDiv",children:[Object(b.jsx)("img",{width:"200px",height:"200px",src:l}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.auth().signInWithEmailAndPassword(c,h).then((function(){return u.push("/")}))},children:[Object(b.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"email",id:"fname",name:"email",value:c,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"password",id:"lname",name:"password",value:h,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{children:"Login"})]}),Object(b.jsx)("a",{style:{color:"blue",textDecoration:"underline"},onClick:function(){u.push("/signup")},children:"Signup"})]})})};var L=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(A,{})})},I=(c(50),function(){var e=Object(s.useContext)(d).firebase,t=Object(s.useContext)(h).user,c=Object(s.useState)(""),n=Object(r.a)(c,2),a=n[0],i=n[1],l=Object(s.useState)(""),o=Object(r.a)(l,2),O=o[0],u=o[1],x=Object(s.useState)(""),m=Object(r.a)(x,2),p=m[0],v=m[1],f=Object(s.useState)(null),N=Object(r.a)(f,2),C=N[0],w=N[1],S=new Date,P=Object(j.e)();return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(g,{}),Object(b.jsx)("card",{className:"createCard",children:Object(b.jsx)("div",{className:"centerDiv",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"fname",children:"Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"text",id:"fname",name:"Name",value:a,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"fname",children:"Category"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"text",id:"fname",name:"category",value:O,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"fname",children:"Price"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",type:"number",id:"fname",name:"Price",value:p,onChange:function(e){return v(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),C&&Object(b.jsx)("img",{alt:"Posts",width:"200px",height:"200px",src:URL.createObjectURL(C)}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onChange:function(e){return w(e.target.files[0])},type:"file"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(c){e.storage().ref("/image/".concat(C.name)).put(C).then((function(c){c.ref.getDownloadURL().then((function(c){console.log(c),e.firestore().collection("products").add({name:a,Category:O,Price:p,url:c,userId:t.uid,createdAt:S.toDateString()})}))})),P.push("/")},className:"uploadBtn",children:"Upload and Submit"})]})})})]})}),k=function(){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(g,{}),Object(b.jsx)(I,{})]})};c(51);var z=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useContext)(S).postDetails,i=Object(s.useContext)(d).firebase;return Object(s.useEffect)((function(){var e=a.userId;i.firestore().collection("users").where("id","==",e).get().then((function(e){e.forEach((function(e){n(e.data())}))}))}),[]),Object(b.jsxs)("div",{className:"viewParentDiv",children:[Object(b.jsx)("div",{className:"imageShowDiv",children:Object(b.jsx)("img",{src:a.url,alt:""})}),Object(b.jsxs)("div",{className:"rightSection",children:[Object(b.jsxs)("div",{className:"productDetails",children:[Object(b.jsxs)("p",{children:["\u20b9 ",a.Price," "]}),Object(b.jsx)("span",{children:a.name}),Object(b.jsx)("p",{children:a.Category}),Object(b.jsx)("span",{children:a.createdAt})]}),c&&Object(b.jsxs)("div",{className:"contactDetails",children:[Object(b.jsx)("p",{children:"Seller details"}),Object(b.jsx)("p",{children:c.username}),Object(b.jsx)("p",{children:c.phone})]})]})]})};var F=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(z,{})]})};var E=function(){var e=Object(s.useContext)(h).setUser,t=Object(s.useContext)(d).firebase;return Object(s.useEffect)((function(){t.auth().onAuthStateChanged((function(t){e(t)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(P,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(M,{})}),Object(b.jsx)(j.a,{path:"/signup",children:Object(b.jsx)(u,{})}),Object(b.jsx)(j.a,{path:"/login",children:Object(b.jsx)(L,{})}),Object(b.jsx)(j.a,{path:"/create",children:Object(b.jsx)(k,{})}),Object(b.jsx)(j.a,{path:"/view",children:Object(b.jsx)(F,{})})]})})})},R=c(33),B=(c(54),c(55),c(56),R.a.initializeApp({apiKey:"AIzaSyDGIfQcjzOzAMwaL2hEZuYs5iSWwIyOnqM",authDomain:"olx-clone-87dba.firebaseapp.com",projectId:"olx-clone-87dba",storageBucket:"olx-clone-87dba.appspot.com",messagingSenderId:"515396944329",appId:"1:515396944329:web:000f7df1a493d1212f6818",measurementId:"G-3G2GPZ032H"}));a.a.render(Object(b.jsx)(d.Provider,{value:{firebase:B},children:Object(b.jsx)(o,{children:Object(b.jsx)(E,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.c6cd69ce.chunk.js.map