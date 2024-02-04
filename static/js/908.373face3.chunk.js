"use strict";(self.webpackChunkmovie_mingle=self.webpackChunkmovie_mingle||[]).push([[908],{3908:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var i,r,a,o,c,s,d,p,u=t(9439),x=t(2791),l=t(7689),f=t(7737),h=t(168),m=t(6487),g=m.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n"]))),w=m.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  max-width: 1264px;\n"]))),v=m.ZP.li(a||(a=(0,h.Z)(["\n  width: 240px;\n  cursor: pointer;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: all var(--basic-transition);\n\n  &:hover {\n    scale: 1.08;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\n      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,\n      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n  }\n"]))),b=t(4164),Z=t(4373),y=m.ZP.div(o||(o=(0,h.Z)(["\n  max-width: 1200px;\n  overflow: hidden;\n"]))),j=m.ZP.img(c||(c=(0,h.Z)(["\n  object-fit: cover;\n"]))),P=m.ZP.div(s||(s=(0,h.Z)(["\n  z-index: 1200;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),k=m.ZP.button(d||(d=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: 8px;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  color: var(--basic-white);\n  border: none;\n  cursor: pointer;\n\n  @media screen and (max-width: 639px) {\n    width: 28px;\n    height: 28px;\n  }\n"]))),z=(0,m.ZP)(Z.QAE)(p||(p=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),C=t(184),S=document.querySelector("#modal-root"),E=function(n){var e=n.currentImage,t=n.closeModal;return(0,x.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]),(0,b.createPortal)((0,C.jsx)(P,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,C.jsxs)(y,{children:[(0,C.jsx)(k,{type:"button","aria-label":"close image modal window",onClick:t,children:(0,C.jsx)(z,{})}),(0,C.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(e),alt:"movie-scene"})]})}),S)},I=t(7691),_=t(9637),M=function(){var n=(0,l.UO)().movieId,e=(0,x.useState)([]),t=(0,u.Z)(e,2),i=t[0],r=t[1],a=(0,x.useState)(""),o=(0,u.Z)(a,2),c=o[0],s=o[1],d=(0,x.useState)(!1),p=(0,u.Z)(d,2),h=p[0],m=p[1],b=(0,x.useState)(null),Z=(0,u.Z)(b,2),y=Z[0],P=Z[1];(0,x.useEffect)((function(){n&&(0,f.C)("image",n).then((function(n){var e=n.backdrops;e.length?(r(e.map((function(n){return n.file_path}))),s("")):s("We are sorry, but there are no photos yet :(")})).catch((function(){return s("We are sorry, but something went wrong :( Please, try again later")})).finally((function(){(0,I.Y)()}))}),[n]);var k=function(n){P(n.target.dataset.path),m(!0)};return(0,C.jsxs)(g,{children:[""===c?(0,C.jsx)(w,{children:i.map((function(n){return(0,C.jsx)(v,{onClick:k,children:(0,C.jsx)(j,{src:"".concat("https://image.tmdb.org/t/p/w300").concat(n),alt:"movie-scene","data-path":n})},n)}))}):(0,C.jsx)(_.jj,{children:c}),h&&(0,C.jsx)(E,{currentImage:y,closeModal:function(){m(!1),P(null)}})]})}},7691:function(n,e,t){t.d(e,{Y:function(){return r},i:function(){return a}});var i=t(5667),r=function(){i.OK.scrollTo("additionalMenu",{duration:1e3,smooth:!0,offset:-80})},a=function(){i.OK.scrollTo("moviesPageStart",{duration:1e3,smooth:!0,offset:-100})}},9637:function(n,e,t){t.d(e,{Dx:function(){return x},V1:function(){return p},VM:function(){return f},jj:function(){return l},kI:function(){return u}});var i,r,a,o,c,s=t(168),d=t(6487),p=d.ZP.h1(i||(i=(0,s.Z)(["\n  max-width: 85%;\n  text-align: center;\n  color: var(--basic-white);\n  font-size: 60px;\n  line-height: 1.33;\n  text-shadow: 0px 11px 10px #082925b2;\n\n  @media screen and (max-width: 1279px) {\n    font-size: 44px;\n  }\n\n  @media screen and (max-width: 639px) {\n    font-size: 32px;\n  }\n"]))),u=d.ZP.p(r||(r=(0,s.Z)(["\n  text-align: center;\n  font-size: 24px;\n  color: var(--basic-white);\n  text-shadow: 3px 0px 7px rgba(85, 85, 85, 0.8),\n    -3px 0px 7px rgba(85, 85, 85, 0.8), 0px 4px 7px rgba(85, 85, 85, 0.8);\n\n  @media screen and (max-width: 1279px) {\n    font-size: 20px;\n  }\n\n  @media screen and (max-width: 639px) {\n    font-size: 16px;\n  }\n"]))),x=d.ZP.h2(a||(a=(0,s.Z)(["\n  text-align: center;\n  font-size: 32px;\n  margin: 0 auto 16px auto;\n\n  @media screen and (max-width: 1279px) {\n    font-size: 28px;\n  }\n\n  @media screen and (max-width: 639px) {\n    font-size: 24px;\n  }\n"]))),l=d.ZP.p(o||(o=(0,s.Z)(["\n  font-size: 20px;\n  margin: 24px 0;\n\n  @media screen and (max-width: 639px) {\n    font-size: 16px;\n  }\n"]))),f=d.ZP.section(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 52px;\n  width: 100%;\n  height: 480px;\n  background: linear-gradient(to top, #082925b2 40%, #0c403b79 100%),\n    center / cover no-repeat url(",");\n  margin-bottom: 24px;\n  border: none;\n\n  @media screen and (max-width: 639px) {\n    gap: 32px;\n  }\n"])),(function(n){return n.$heroImage}))},7737:function(n,e,t){t.d(e,{C:function(){return d}});var i=t(5861),r=t(4687),a=t.n(r),o=t(1591),c="81bc6a75d9ad77927c9b3f7e8ad30411",s="https://api.themoviedb.org/3";function d(n,e,t,i){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(a().mark((function n(e,t,i,r){var d,p,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d={trending:"/trending/movie/day",movieById:"/movie/".concat(t),searchByQuery:"/search/movie",searchVideos:"/movie/".concat(t,"/videos"),cast:"/movie/".concat(t,"/credits"),reviews:"/movie/".concat(t,"/reviews"),image:"/movie/".concat(t,"/images")},p=new URLSearchParams({query:i,include_adult:!1,page:r}),n.next=4,o.Z.get("".concat(s).concat(d[e],"?api_key=").concat(c,"&").concat("searchByQuery"===e?p:""));case 4:return u=n.sent,n.abrupt("return",u.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=908.373face3.chunk.js.map