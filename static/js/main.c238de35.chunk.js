(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=(a(12),a(1)),l=a(2),s=a(3),h=a(4),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-white dib br3 pa3 ma3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n).concat(t,"ildar?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))};function d(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=a.length,r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*n));return t}for(var f=[],b=0;b<200;b++)f[b]={id:b,name:d(10),username:d(10),email:d(10)};var v=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--white bg-white bw2 shadow-5 ma3 tc bg-white br3 pa3",type:"search",placeholder:"search for Robot",onChange:t}))},w=(a(13),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),p=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"This is the error"):this.props.children}}]),a}(n.Component),E=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:f,searchfield:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())||e.username.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 ttu"},"Robo-friends"),r.a.createElement(v,{searchChange:this.onSearchChange}),r.a.createElement(w,null,r.a.createElement(p,null,r.a.createElement(m,{robots:n})))):r.a.createElement("h1",null,"Loading")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.c238de35.chunk.js.map