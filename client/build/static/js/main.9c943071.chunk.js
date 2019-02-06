(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(79)},35:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(26),c=t.n(s),o=(t(35),t(6)),l=t(7),i=t(9),m=t(8),u=t(10),d=t(80),p=t(81),h=t(12),f=(t(38),t(82));t(40);var g=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{id:"logo",alt:"Logo",src:"/images/logo.svg",width:"65",height:"65"})," ",r.a.createElement("span",null,"Destination Expert")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item ml-2 mr-3"},r.a.createElement(f.a,{strict:!0,to:"/login",className:"normal",activeClassName:"active"},"Log in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{strict:!0,to:"/signup",className:"normal",activeClassName:"active"},"Sign up")))))};function v(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function E(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function b(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}var N=function(e){var a=e.children;return r.a.createElement("div",{style:{height:150,clear:"both",paddingTop:30,textAlign:"center"},className:"jumbotron"},a)};var y=function(){return r.a.createElement(v,{fluid:!0},r.a.createElement(E,null,r.a.createElement(b,{size:"md-12"},r.a.createElement(N,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},w=(t(46),t(11)),C=t(19);t(48),t(50);function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",margin:10,marginRight:40},className:"btn dialog-confirm-btn "}),e.children)}var j=function(e){var a=e.label,t=e.isSelected,n=e.onCheckboxChange;return r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:a,checked:t,onChange:n,className:"form-check-input"}),a))},O=t(13),S=t.n(O),x={saveTravelsLocation:function(e){return console.log("inside API.js  sending request: ",e),S.a.post("/api/travels/location",e)},saveTravelsPreference:function(e){return S.a.post("/api/travels/Preference",e)},signup:function(e){return S.a.post("/api/user/register",e)},login:function(e){return S.a.post("/api/user/login",e)},searchCity:function(e){return console.log(e),S.a.get("/api/citysearch",{params:e}).then(function(e){return e})},yelpSearch:function(e){return S.a.get("/api/yelp/Search",{params:e}).then(function(e){return e})},yelpSearchConsolidated:function(e){return S.a.get("/api/yelp/SearchConsolidated",{params:e}).then(function(e){return e})}},D=t(83),F=["Restaurants","Hotels","Recreation","Bars","Meetups"],M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={categories:F.reduce(function(e,a){return Object(C.a)({},e,Object(w.a)({},a,!1))},{}),city_zip:"",nearby:""},t.createCheckbox=function(e){return r.a.createElement(j,{label:e,isSelected:t.state.categories[e],onCheckboxChange:t.handleCheckboxChange,key:e})},t.createCheckboxes=function(){return F.map(t.createCheckbox)},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(w.a)({},n,r))},t.formatResultData=function(e){var a=[];return e.businesses.forEach(function(e,t){var n={};n.name=e.name,n.phone=e.display_phone,n.rating=e.rating,n.price=e.price,n.image_url=e.image_url,n.address={},n.address.street=e.location.display_address[0],n.address.city=e.location.city,n.address.state=e.location.state,n.address.zipcode=e.location.zip_code,a.push(n)}),a},t.formatResultDataArray=function(e){for(var a=[],t=0;t<e.length;t++)e[t].businesses.forEach(function(e,t){var n={};n.name=e.name,n.phone=e.display_phone,n.rating=e.rating,n.price=e.price,n.image_url=e.image_url,n.address={},n.address.street=e.location.display_address[0],n.address.city=e.location.city,n.address.state=e.location.state,n.address.zipcode=e.location.zip_code,a.push(n)});return console.log("result number: "+a.length),a},t.handleFormSubmit=function(e){var a=t.props.history;if(e.preventDefault(),console.log(JSON.stringify(t.state)),t.state.city_zip){var n={location:t.state.city_zip,sort_by:"distance",radius:8e3,limit:5,term:[]};t.state.categories.Hotels&&n.term.push("Hotel"),t.state.categories.Bars&&n.term.push("Bars"),t.state.categories.Meetups&&n.term.push("Meetups"),t.state.categories.Recreation&&n.term.push("Recreation"),t.state.categories.Restaurants&&n.term.push("Restaurants"),n.term.length>0&&x.yelpSearchConsolidated(n).then(function(e){var n=t.formatResultDataArray(e.data);a.push({pathname:"/result",state:{details:n}})}).catch(function(e){return console.log(e)})}},t.handleCheckboxChange=function(e){var a=e.target.name;t.setState(function(e){return{categories:Object(C.a)({},e.categories,Object(w.a)({},a,!e.categories[a]))}})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid col-md-3 mt-5"},r.a.createElement("form",{className:"dest-form"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"destination",className:"col-form-label"},"Destination"),r.a.createElement("input",{className:"form-control",name:"city_zip",placeholder:"City or Zipcode",value:this.state.city_zip,onChange:this.handleInputChange,required:!0})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"nearby",className:"col-form-label"},"Beach,\xa0Mountain,\xa0By the airport"),r.a.createElement("input",{className:"form-control",name:"nearby",placeholder:"General preferences",value:this.state.nearby,onChange:this.handleInputChange,required:!0})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"find",className:"col-form-label my-0"},"Find:"),r.a.createElement("div",{className:"col-sm-12 ml-5"},this.createCheckboxes(),r.a.createElement(k,{onClick:this.handleFormSubmit},"Search")))))}}]),a}(r.a.Component),_=Object(D.a)(M),P=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"fill main-image"},r.a.createElement("div",{id:"content"},r.a.createElement("div",{className:"row-div col-md-12"},r.a.createElement(_,null))))}}]),a}(n.Component),R=(t(71),t(73),function(e){var a=e.rec,t=e.onCheckboxChange;return r.a.createElement("div",{className:"card col-md-4"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:a.image_url,width:"300",height:"200",alt:"img"})),r.a.createElement("div",{className:"card-body p-1"},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("div",{className:"card-text p-0"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},"Price:"),r.a.createElement("div",{className:"col text-success dollar-font"},a.price)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},"Rating:"),r.a.createElement("div",{className:"col"},a.rating)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},"Phone:"),r.a.createElement("div",{className:"col"},a.phone)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},"Address:"),r.a.createElement("div",{className:"col"},a.address.street)),r.a.createElement("div",{className:"row justify-content-end"},r.a.createElement("div",{className:"col-md-8"},a.address.city,", ",a.address.zipcode)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(j,{label:"Save",onCheckboxChange:t,key:a.phone,name:a.phone})))))))}),z=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={detailsData:[],saveStatuses:[],checked:!1},t.handleFormSubmitSearch=function(e){e.preventDefault(),t.props.history.push({pathname:"/"})},t.handleFormSubmitSave=function(e){e.preventDefault(),console.log("inside the submit form===",t.state.detailsData[0]),t.state.detailsData[0].name&&x.saveTravelsLocation({name:t.state.detailsData[0].name,category:t.state.detailsData[0].category,description:t.state.detailsData[0].description,rating:t.state.detailsData[0].rating,price:t.state.detailsData[0].price,address:{street:t.state.detailsData[0].street,city:t.state.detailsData[0].city,state:t.state.detailsData[0].state,zipcode:t.state.detailsData[0].zipcode},phone:t.state.detailsData[0].phone,image_url:t.state.detailsData[0].image_url}).then(function(e){console.log("inside results page repsonse recieved",e)}).catch(function(e){return console.log(e)})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({detailsData:this.props.location.state.details})}},{key:"onCheckboxChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;console.log("checkmark click"),this.setState(Object(w.a)({},n,t))}},{key:"render",value:function(){var e=this;return void 0!==this.props.location.state?r.a.createElement("div",{className:"fill result-image"},r.a.createElement("div",{className:"clearfix"},r.a.createElement("div",{id:"action-div"},r.a.createElement(k,{name:"search",onClick:this.handleFormSubmitSearch},"Search again"),r.a.createElement(k,{name:"save",onClick:this.handleFormSubmitSave},"Save to My Account"))),r.a.createElement("div",{className:"container",id:"content"},r.a.createElement("div",{className:"row-div col-md-12"},this.props.location.state.details?this.props.location.state.details.map(function(a){return r.a.createElement(R,{rec:a,onCheckboxChange:e.onCheckboxChange,key:a.phone})}):r.a.createElement("p",null,"No Results Found")))):r.a.createElement("h2",null," Page Load Error ")}}]),a}(n.Component),L=Object(D.a)(z),A=(t(75),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).validateForm=function(){var e=!1,a=t.state,n=a.email,r=a.password;return n.length>0&&r.length>0&&(e=!0),e},t.handleLogin=function(e){e.preventDefault(),t.validateForm()?x.login({email:t.state.email,password:t.state.password}).then(function(e){console.log("login success: "+e.data.email),t.props.history.push("/")}).catch(function(e){console.log("err:"+e),t.setState({errorMsg:"User not found, please signup"})}):t.setState({errorMsg:"Password not match, please re-enter password"})},t.state={email:"",password:"",errorMsg:""},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fill login-image"},r.a.createElement("div",{className:"Login"},r.a.createElement("form",{className:"dest-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email",className:"col-form-label"},"Email"),r.a.createElement("input",{className:"form-control",name:"email",placeholder:"Email",value:this.state.email,type:"email",onChange:function(a){return e.setState({email:a.target.value})},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Password"),r.a.createElement("input",{className:"form-control password",name:"password",placeholder:"Password",value:this.state.password,type:"password",onChange:function(a){return e.setState({errorMsg:"",password:a.target.value})},required:!0})),r.a.createElement("div",{className:"button col-form-label text-center confirm-btn",onClick:this.handleLogin},"Log in"),r.a.createElement("div",{id:"ErrorMsg"},this.state.errorMsg))))}}]),a}(n.Component)),q=(t(77),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).validateForm=function(){var e=!1,a=t.state,n=a.email,r=a.password,s=a.retypepassword;return n.length>0&&r.length>0&&s.length>0&&r===s&&(e=!0),e},t.handleSignup=function(e){e.preventDefault(),t.validateForm()?x.signup({email:t.state.email,password:t.state.password}).then(function(e){console.log("signup success: "+e.data.email),t.props.history.push("/")}).catch(function(e){t.setState({errorMsg:"User is already exist, please login"})}):t.setState({errorMsg:"Password not match, please re-enter password"})},t.state={email:"",password:"",retypepassword:"",errorMsg:""},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fill signup-image"},r.a.createElement("div",{className:"Login"},r.a.createElement("form",{className:"dest-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email",className:"col-form-label"},"Email"),r.a.createElement("input",{className:"form-control",name:"email",placeholder:"Email",type:"email",onChange:function(a){return e.setState({email:a.target.value})},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Password"),r.a.createElement("input",{className:"form-control password",name:"password",placeholder:"Password",type:"password",onChange:function(a){return e.setState({errorMsg:"",password:a.target.value})},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password",className:"col-form-label"},"Re-type Password"),r.a.createElement("input",{className:"form-control password",name:"retypepassword",placeholder:"Password",type:"password",onChange:function(a){return e.setState({errorMsg:"",retypepassword:a.target.value})},required:!0})),r.a.createElement("div",{className:"button col-form-label text-center confirm-btn",onClick:this.handleSignup},"Sign up"),r.a.createElement("div",{id:"ErrorMsg"},this.state.errorMsg))))}}]),a}(n.Component)),B=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"main"},r.a.createElement(g,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:P}),r.a.createElement(h.a,{exact:!0,path:"/result",component:L}),r.a.createElement(h.a,{exact:!0,path:"/login",component:A}),r.a.createElement(h.a,{exact:!0,path:"/signup",component:q}),r.a.createElement(h.a,{component:y}))))}}]),a}(n.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):W(e)})}}()}},[[29,2,1]]]);
//# sourceMappingURL=main.9c943071.chunk.js.map