(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(16),i=c.n(r),l=c(7),o=c(14),j=c(2),h=(c(23),function(e){return Object(a.jsx)(l.b,{to:"/character/".concat(e.name),title:"Show more about this character",children:Object(a.jsxs)("li",{className:"character ".concat(e.isAlive),children:[Object(a.jsx)("img",{className:"character-image",src:e.imageUrl,alt:"Producto: ".concat(e.name)}),Object(a.jsx)("h2",{className:"character-name",children:e.name}),Object(a.jsxs)("h3",{className:"character-species",children:[Object(a.jsx)("span",{children:e.isAlien}),e.species]})]})})}),m=function(e){return Object(a.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"name",children:"Who are you looking for?"}),Object(a.jsx)("input",{className:"form-input",type:"text",id:"name",value:e.filterText,placeholder:"Rick",onChange:function(t){e.handleFilter(t.target.value)}})]})},u=function(e){var t=e.characters.map((function(e){var t="Human"===e.species?"\ud83d\udc64":"\ud83d\udc7d",c="Dead"===e.status?"dead":"";return Object(a.jsx)(h,{imageUrl:e.image,name:e.name,isAlien:t,isAlive:c,species:e.species},e.id)}));return Object(a.jsxs)("section",{children:[Object(a.jsx)(m,{filterText:e.filterText,handleFilter:e.handleFilter}),Object(a.jsx)("ul",{className:"character-list",children:t})]})},d=c.p+"static/media/logo.de13d484.png",b=function(){return Object(a.jsx)("img",{className:"logo",src:d,alt:"Rick and Morty",title:"Rick and Morty"})},x=function(e){return Object(a.jsxs)("article",{className:"character-detail",children:[Object(a.jsx)("img",{className:"img-detail",src:e.imageUrl,alt:"Producto: ".concat(e.name)}),Object(a.jsxs)("div",{className:"title-detail",children:[Object(a.jsxs)("h2",{children:[e.name," ",Object(a.jsx)("span",{children:e.isAlive})]}),Object(a.jsxs)("h3",{children:["Status: ",e.status]}),Object(a.jsxs)("h3",{children:["Species: ",e.species]}),Object(a.jsxs)("h3",{children:["Origin: ",e.origin]}),Object(a.jsxs)("h3",{children:["Episodes: ",e.episodes]}),Object(a.jsx)(l.b,{to:"/",title:"Back to the List",children:Object(a.jsx)("button",{className:"back back-detail",children:"Go to the list"})})]})]})},O=function(e){return Object(a.jsxs)("section",{className:"not-found",children:[Object(a.jsxs)("p",{className:"not-found-item",children:['There is no character with the name "',e.name,'"']}),!0===e.back?Object(a.jsx)(l.b,{to:"/",title:"Back to the list",children:Object(a.jsx)("button",{className:"back",children:"Go to the list"})}):null]})},f=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))},p=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),l=i[0],h=i[1];Object(s.useEffect)((function(){f().then((function(e){m(e),n(e)}))}),[]);var m=function(e){e.sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}))},d=function(e){h(e)},p=c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{className:"Header",children:Object(a.jsx)(b,{})}),Object(a.jsx)("main",{className:"App",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:0===p.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{characters:p,filterText:l,handleFilter:d}),Object(a.jsx)(O,{name:l})]}):Object(a.jsx)(u,{characters:p,filterText:l,handleFilter:d})}),Object(a.jsx)(j.a,{path:"/character/:characterName",component:function(e){var t=e.match.params.characterName,s=c.find((function(e){return t===e.name}));if(s){var n=function(e){return"Dead"===e.status?"\ud83d\udc80":"Alive"===e.status?"\ud83d\udc96":""}(s);return Object(a.jsx)(x,{imageUrl:s.image,name:s.name,status:s.status,species:s.species,isAlive:n,origin:s.origin.name,episodes:s.episode.length})}return Object(a.jsx)(O,{name:t,back:!0})}})]})})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(p,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d73e3b11.chunk.js.map