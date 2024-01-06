"use strict";(self.webpackChunkmovie_mingle=self.webpackChunkmovie_mingle||[]).push([[722],{7992:function(n,e,t){t.d(e,{Z:function(){return S}});var r,i,a,o,c,s,u,l=t(168),d=t(7482),p=t(6487),h=p.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  animation: "," 700ms ease-in-out;\n"])),d.J),x=t(7689),f=t(1087),g=p.ZP.li(i||(i=(0,l.Z)(["\n  position: relative;\n"]))),v=(0,p.ZP)(f.rU)(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px;\n  width: 224px;\n"]))),m=p.ZP.div(o||(o=(0,l.Z)(["\n  margin: 0 auto 8px auto;\n  border-radius: 8px;\n  width: 200px;\n  height: 268px;\n  display: flex;\n  align-content: center;\n  overflow: hidden;\n  transition: all var(--basic-transition);\n  &:hover {\n    box-shadow: 0px 0px 16px 4px var(--basic-dark);\n  }\n"]))),b=p.ZP.img(c||(c=(0,l.Z)(["\n  border-radius: 8px;\n  width: 100%;\n  object-fit: cover;\n  transition: transform var(--basic-transition);\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),Z=p.ZP.h3(s||(s=(0,l.Z)(["\n  text-align: center;\n"]))),y=p.ZP.div(u||(u=(0,l.Z)(["\n  position: absolute;\n  top: 232px;\n  left: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 2px solid var(--basic-white);\n  background-color: ",";\n  color: var(--basic-white);\n  box-shadow: rgba(193, 193, 193, 0.766) 0px 2px 4px 0px,\n    rgba(225, 225, 225, 0.682) 0px 2px 16px 0px;\n"])),(function(n){return n.$color}));function w(n){var e;return n?n<50?e="#ce3030":n<70?e="#e9ad3d":n>=70&&(e="#437d33"):e="#959393",e}var j=t(3699),P=t(184),k=function(n){var e=n.movie,t=(0,x.TH)();return(0,P.jsxs)(g,{children:[(0,P.jsxs)(v,{to:"/"===t.pathname||"/watchlist"===t.pathname?"/movies/".concat(e.id):"".concat(e.id),state:{from:t},children:[(0,P.jsx)(m,{children:(0,P.jsx)(b,{src:e.poster_path?"".concat("https://image.tmdb.org/t/p/","w300").concat(e.poster_path):"https://cdn.pixabay.com/photo/2014/01/21/16/01/backdrop-249158_1280.jpg",alt:e.title})}),(0,P.jsx)(Z,{children:e.title}),(0,P.jsx)("p",{children:e.release_date?new Date(e.release_date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""}),(0,P.jsx)(y,{$color:w(Math.round(10*e.vote_average)),children:0===e.vote_average?"NR":"".concat(Math.round(10*e.vote_average),"%")})]}),(0,P.jsx)(j.f,{movieData:e})]})},S=function(n){var e=n.movies;return(0,P.jsx)(h,{children:e.map((function(n){return(0,P.jsx)(k,{movie:n},n.id)}))})}},3699:function(n,e,t){t.d(e,{f:function(){return g}});var r,i,a,o=t(9439),c=t(2791),s=t(168),u=t(6487),l=t(1578),d=u.ZP.button(r||(r=(0,s.Z)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background-color: var(--accent);\n  color: var(--basic-white);\n  border: none;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  cursor: pointer;\n"]))),p=(0,u.ZP)(l.F4H)(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),h=(0,u.ZP)(l.eVf)(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),x=t(8580),f=t(184),g=function(n){var e=n.movieData,t=(0,c.useState)(!1),r=(0,o.Z)(t,2),i=r[0],a=r[1],s=(0,c.useContext)(x.rh),u=s.watchlist,l=s.addMovieToWatchlist,g=s.removeMovieFromWatchlist,v=(0,c.useState)(!1),m=(0,o.Z)(v,2),b=m[0],Z=m[1];return(0,c.useEffect)((function(){var n=u.find((function(n){return n.id===e.id}));a(!!n)}),[e.id,u]),(0,c.useEffect)((function(){b&&localStorage.setItem("moviesWatchlist",JSON.stringify(u))}),[u,b]),(0,f.jsx)(f.Fragment,{children:i?(0,f.jsx)(d,{type:"button","aria-label":"remove from watchlist",onClick:function(){return g(e)},children:(0,f.jsx)(h,{})}):(0,f.jsx)(d,{type:"button","aria-label":"add to watchlist",onClick:function(){l(e),Z(!0)},children:(0,f.jsx)(p,{})})})}},9637:function(n,e,t){t.d(e,{Dx:function(){return p},V1:function(){return l},VM:function(){return x},jj:function(){return h},kI:function(){return d}});var r,i,a,o,c,s=t(168),u=t(6487),l=u.ZP.h1(r||(r=(0,s.Z)(["\n  text-align: center;\n  color: var(--basic-white);\n  font-size: 60px;\n  line-height: 80px;\n  text-shadow: 0px 11px 10px #082925b2;\n"]))),d=u.ZP.p(i||(i=(0,s.Z)(["\n  text-align: center;\n  font-size: 24px;\n  color: var(--basic-white);\n  text-shadow: 3px 0px 7px rgba(85, 85, 85, 0.8),\n    -3px 0px 7px rgba(85, 85, 85, 0.8), 0px 4px 7px rgba(85, 85, 85, 0.8);\n"]))),p=u.ZP.h2(a||(a=(0,s.Z)(["\n  text-align: center;\n  font-size: 32px;\n  margin: 0 auto 16px auto;\n"]))),h=u.ZP.p(o||(o=(0,s.Z)(["\n  font-size: 20px;\n  margin: 24px 0;\n"]))),x=u.ZP.section(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 52px;\n  width: 100%;\n  height: 480px;\n  background: linear-gradient(to top, #082925b2 40%, #0c403b79 100%),\n    center / cover no-repeat url(",");\n  margin-bottom: 24px;\n  border: none;\n"])),(function(n){return n.$heroImage}))},9722:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,a,o,c,s,u,l=t(9439),d=t(7992),p=t(5705),h=t(168),x=t(6487),f=t(9126),g=(0,x.ZP)(p.l0)(r||(r=(0,h.Z)(["\n  margin: 0 auto 24px auto;\n  padding-left: 12px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: var(--basic-white);\n  border: 1px solid var(--basic-dark);\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=x.ZP.button(i||(i=(0,h.Z)(["\n  margin-left: 12px;\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity var(--basic-transition);\n  cursor: pointer;\n  outline: none;\n  background-color: var(--basic-light);\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"]))),m=(0,x.ZP)(f.dVI)(a||(a=(0,h.Z)(["\n  width: 36px;\n  height: 36px;\n  color: var(--basic-dark);\n"]))),b=x.ZP.span(o||(o=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),Z=(0,x.ZP)(p.gN)(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=t(184),w=function(n){var e=n.handleSearch,t=n.handleChange,r=n.query;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(p.J9,{initialValues:{searchQuery:""},onSubmit:e,children:(0,y.jsxs)(g,{children:[(0,y.jsx)(Z,{value:r,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",onChange:t}),(0,y.jsxs)(v,{type:"submit",children:[(0,y.jsx)(m,{}),(0,y.jsx)(b,{children:"Search"})]})]})})})},j=t(9637),P=t(2791),k=t(1087),S=t(7737),C=x.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n"]))),_=x.ZP.h3(u||(u=(0,h.Z)(["\n  width: 800px;\n  text-align: center;\n"]))),q=t(2973),z=function(){var n=(0,P.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],i=(0,k.lr)(),a=(0,l.Z)(i,2),o=a[0],c=a[1],s=(0,P.useState)([]),u=(0,l.Z)(s,2),p=u[0],h=u[1],x=(0,P.useState)(""),f=(0,l.Z)(x,2),g=f[0],v=f[1],m=(0,P.useState)(0),b=(0,l.Z)(m,2),Z=b[0],z=b[1],I=(0,P.useState)(1),M=(0,l.Z)(I,2),B=M[0],F=M[1],N=(0,P.useState)(0),V=(0,l.Z)(N,2),D=V[0],Q=V[1];(0,P.useEffect)((function(){var n=o.get("query");n&&r(n)}),[o]);(0,P.useEffect)((function(){var n=o.get("query"),e=Number(o.get("page"));F(e),n&&(0,S.C)("searchByQuery",0,n,e).then((function(e){var t=e.results,r=e.total_pages;if(!t.length)return v("We couldn't find movies, mentioning ".concat(n.toUpperCase(),". Try something else")),void Q([]);h(t),z(r),v(""),Q(r)})).catch((function(){v("We are sorry, but something went wrong :( Please, try again later"),Q([])}))}),[o,t]);return(0,y.jsxs)(C,{children:[(0,y.jsxs)(_,{children:["Ready to explore the world of cinema? ",(0,y.jsx)("br",{}),"Simply enter your movie query, and let the magic unfold!"]}),(0,y.jsx)(w,{handleSearch:function(){if(""===t)return v("Please enter your search query"),void Q([]);c({query:t,page:1}),v(""),F(1),h([])},handleChange:function(n){var e=n.target.value;e||c({}),r(e)},query:t}),""===g?(0,y.jsx)(d.Z,{movies:p}):(0,y.jsx)(j.jj,{children:g}),Z>1&&(0,y.jsx)(q.Z,{count:D,page:B,onChange:function(n){var e=Number(n.target.innerText);F(e),c({query:t,page:e})},hidePrevButton:!0,hideNextButton:!0,color:"success",sx:{"& .MuiPaginationItem-root":{color:"#ffffff",backgroundColor:"#266861",fontFamily:"inherit"},"& .MuiPaginationItem-ellipsis":{backgroundColor:"transparent",color:"inherit",fontSize:"24px"}}})]})}},7737:function(n,e,t){t.d(e,{C:function(){return u}});var r=t(5861),i=t(4687),a=t.n(i),o=t(1591),c="81bc6a75d9ad77927c9b3f7e8ad30411",s="https://api.themoviedb.org/3";function u(n,e,t,r){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e,t,r,i){var u,l,d;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u={trending:"/trending/movie/day",movieById:"/movie/".concat(t),searchByQuery:"/search/movie",searchVideos:"/movie/".concat(t,"/videos"),cast:"/movie/".concat(t,"/credits"),reviews:"/movie/".concat(t,"/reviews"),image:"/movie/".concat(t,"/images")},l=new URLSearchParams({query:r,include_adult:!1,page:i}),n.next=4,o.Z.get("".concat(s).concat(u[e],"?api_key=").concat(c,"&").concat("searchByQuery"===e?l:""));case 4:return d=n.sent,n.abrupt("return",d.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=722.8f92ca07.chunk.js.map