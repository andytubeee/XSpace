_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{YExt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/launch_generator",function(){return n("YZAg")}])},YZAg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),a=(n("g4pe"),n("20a2")),o=n("VX74"),c=n("h4VS"),s=n("ateg"),l=n("PSD3"),i=n.n(l),u=n("q1tI");function h(){var e=Object(c.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n      launch_year\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return h=function(){return e},e}var m=Object(o.gql)(h());function d(e){var t=Object(o.useQuery)(m),n=t.loading,c=t.error,l=t.data,h=Object(u.useState)(0),d=h[0],b=h[1],f=Object(u.useState)([]),j=(f[0],f[1],Object(u.useState)(!1)),g=j[0],p=j[1],x=Object(a.useRouter)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("button",{className:"btn btn-secondary",onClick:function(){return x.push("/")},children:"Back"}),Object(r.jsx)("h1",{className:"display-4 my-3 text-center",children:"Launches Generator"}),Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"form-group d-flex flex-column",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",children:"Number of Entries"}),Object(r.jsx)("input",{type:"number",className:"form-control",placeholder:"Amount",disabled:g,style:g?{cursor:"not-allowed"}:{cursor:"text"},min:"1",onChange:function(e){g||b(e.target.value)}}),Object(r.jsx)("button",{type:"button",class:"btn btn-primary mt-3 align-self-end",onClick:function(){c&&i.a.fire({icon:"error",title:"Error",text:"".concat(c.message)}),n&&i.a.fire({title:"Loading!",html:"Please be patient...",timer:3e3,timerProgressBar:!0,didOpen:function(){i.a.showLoading(),timerInterval=setInterval((function(){var e=i.a.getContent();if(e){var t=e.querySelector("b");t&&(t.textContent=i.a.getTimerLeft())}}),100)},willClose:function(){clearInterval(timerInterval)}}).then((function(e){e.dismiss===i.a.DismissReason.timer&&console.log("Should be ready now!")})),l&&(g?p(!1):(d>Array.from(l.launches).length&&(i.a.fire({icon:"error",title:"Error",text:"More than amount of data on server, the max is ".concat(Array.from(l.launches).length)}),b(Array.from(l.launches).length)),0==d?i.a.fire({icon:"error",title:"Error",text:"You cannot search for 0 query"}):p(!0)))},children:g?"Clear":"Generate"})]})}),g&&Object(r.jsx)(r.Fragment,{children:l&&function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(Array.from(l.launches)).splice(0,d).map((function(e,t){return Object(r.jsx)(s.a,{launch:e,id:t})}))}),Object(r.jsxs)("footer",{className:"text-center",style:!g||d<=2?{position:"absolute",left:0,bottom:20,right:0}:{marginBottom:20},children:["Developed by ",Object(r.jsx)("a",{href:"https://www.github.com/andytubeee",children:"Andrew Yang"})," \xa9 ",(new Date).getFullYear()]})]})}var b=new o.ApolloClient({uri:"/graphql",cache:new o.InMemoryCache});function f(){Object(a.useRouter)();return Object(r.jsx)(o.ApolloProvider,{client:b,children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("img",{src:"/assets/images/SpaceXLogoFull.png",alt:"SpaceX Logo",className:"img-fluid d-block m-auto",onClick:function(){window.open("https://www.spacex.com/","_ blank")},style:{width:500,cursor:"pointer"}}),Object(r.jsx)(d,{})]})})}}},[["YExt",0,2,1,3]]]);