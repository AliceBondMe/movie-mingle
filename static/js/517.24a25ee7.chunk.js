"use strict";(self.webpackChunkmovie_mingle=self.webpackChunkmovie_mingle||[]).push([[517],{9637:function(e,n,t){t.d(n,{V:function(){return c},j:function(){return s}});var i,a,r=t(168),o=t(5867),c=o.default.h2(i||(i=(0,r.Z)(["\n  margin-bottom: 20px;\n"]))),s=o.default.p(a||(a=(0,r.Z)(["\n  font-size: 24px;\n  margin: 24px 0;\n"])))},9517:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var i,a,r,o,c,s,l,d,u,p=t(9439),h=t(2791),x=t(7689),m=t(7737),f=t(1826),v=t(168),g=t(5867),j=g.default.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-bottom: 16px;\n"]))),b=g.default.h1(a||(a=(0,v.Z)(["\n  margin-bottom: 16px;\n"]))),y=g.default.div(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 600px;\n  font-size: 18px;\n  line-height: 28px;\n"]))),w=g.default.span(o||(o=(0,v.Z)(["\n  font-weight: bold;\n"]))),Z=g.default.img(c||(c=(0,v.Z)(["\n  width: 300px;\n"]))),_=t(184),k={year:"numeric",month:"long",day:"numeric"},S=function(e){var n=e.movieData;return(0,_.jsxs)(j,{children:[(0,_.jsx)(Z,{src:n.poster_path?"".concat("https://image.tmdb.org/t/p/","w300").concat(n.poster_path):"https://cdn.pixabay.com/photo/2014/01/21/16/01/backdrop-249158_1280.jpg",alt:n.title}),(0,_.jsxs)(y,{children:[(0,_.jsx)(b,{children:"".concat(n.title," (").concat(n.release_date?new Date(n.release_date).getFullYear():"year unknown",")")}),(0,_.jsxs)("p",{children:[(0,_.jsx)(w,{children:"Release date:"})," ",new Date(n.release_date).toLocaleDateString("en-US",k)]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(w,{children:"Rating: "}),0===n.vote_average?"Not rated":"".concat(Math.round(10*n.vote_average),"%")]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(w,{children:"Genres:"})," ",n.genres.map((function(e){return e.name})).join(", ")||"None"]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(w,{children:"Promo:"})," ",n.tagline||"None"]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(w,{children:"Overview:"})," ",n.overview||"None"]})]})]})},C=t(9637),D=t(1087),N=g.default.div(s||(s=(0,v.Z)(["\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  margin-bottom: 24px;\n"]))),z=g.default.ul(l||(l=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: bottom;\n  font-size: 24px;\n  font-weight: bold;\n"]))),B=(0,g.default)(D.OL)(d||(d=(0,v.Z)(["\n  &.active {\n    text-decoration: underline;\n  }\n"]))),R=(0,g.default)(D.rU)(u||(u=(0,v.Z)(["\n  display: inline-block;\n  text-decoration: underline;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),U=function(){var e,n=(0,x.UO)().movieId,t=(0,h.useState)(null),i=(0,p.Z)(t,2),a=i[0],r=i[1],o=(0,h.useState)(""),c=(0,p.Z)(o,2),s=c[0],l=c[1],d=(0,x.TH)().state,u=(0,x.s0)();return(0,h.useEffect)((function(){(0,m.C)("movieById",Number(n)).then((function(e){r(e),l("")})).catch((function(e){l("We are sorry, but something went wrong :( Please, try again later. You will be automatically redirected to Home page."),setTimeout((function(){u("/")}),2e3)}))}),[n,u]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(R,{to:null!==(e=null===d||void 0===d?void 0:d.from)&&void 0!==e?e:"/",children:"Go back"}),""===s&&a?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S,{movieData:a}),(0,_.jsxs)(N,{children:[(0,_.jsx)("h2",{children:"Additional information: "}),(0,_.jsxs)(z,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(B,{to:"cast",state:{from:null===d||void 0===d?void 0:d.from},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(B,{to:"reviews",state:{from:null===d||void 0===d?void 0:d.from},children:"Reviews"})})]})]}),(0,_.jsx)(h.Suspense,{fallback:(0,_.jsx)(f.a,{}),children:(0,_.jsx)(x.j3,{})})]}):(0,_.jsx)(C.j,{children:s})]})}},7737:function(e,n,t){t.d(n,{C:function(){return l}});var i=t(5861),a=t(7757),r=t.n(a),o=t(340),c="81bc6a75d9ad77927c9b3f7e8ad30411",s="https://api.themoviedb.org/3";function l(e,n,t){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(r().mark((function e(n,t,i){var a,l,d;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={trending:"/trending/movie/day",movieById:"/movie/".concat(t),searchByQuery:"/search/movie",cast:"/movie/".concat(t,"/credits"),reviews:"/movie/".concat(t,"/reviews")},l=new URLSearchParams({query:i,include_adult:!0}),e.next=4,o.Z.get("".concat(s).concat(a[n],"?api_key=").concat(c,"&").concat("searchByQuery"===n?l:""));case 4:return d=e.sent,e.abrupt("return",d.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=517.24a25ee7.chunk.js.map