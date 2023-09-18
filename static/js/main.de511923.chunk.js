(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(32).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(25),a=c.n(n),s=c(6),r=c(4),o=(c(32),c(1)),i=c.n(o),l=(c(33),c(34),c(0)),u=function(e){var t=e.parent;return Object(l.jsx)(s.b,{to:"/",className:"logo ".concat(t,"__logo"),children:Object(l.jsx)("img",{src:"./icons/logo.svg",alt:"Logo",className:"logo__img"})})},j=c(9),d=c.n(j),b=(c(37),function(e){var t=e.isActive;return d()("navbar-item",{"navbar-item--active":t})}),p=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)(s.c,{to:"/",className:b,children:"Home"}),Object(l.jsx)(s.c,{to:"/phones",end:!0,className:b,children:"Phones"}),Object(l.jsx)(s.c,{to:"/tablets",className:b,children:"Tablets"}),Object(l.jsx)(s.c,{to:"/accessories",className:b,children:"Accessories"})]})},m=c(10),h=c(3);function O(e,t){var c=Object(o.useState)((function(){var c=localStorage.getItem(e);if(!c)return t;try{return JSON.parse(c)}catch(n){return localStorage.removeItem(e),t}})),n=Object(h.a)(c,2),a=n[0],s=n[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),s(t)}]}var _=i.a.createContext({cartProducts:[],addToCart:function(){},deleteFromCart:function(){}}),v=function(e){var t=e.children,c=O("cart",[]),n=Object(h.a)(c,2),a=n[0],s=n[1],r=function(e){return s([].concat(Object(m.a)(a),[e]))},i=function(e){var t=a.filter((function(t){return t.id!==e}));s(t)},u=Object(o.useMemo)((function(){return{cartProducts:a,addToCart:r,deleteFromCart:i}}),[a]);return Object(l.jsx)(_.Provider,{value:u,children:t})},x=i.a.createContext({favoritesProducts:[],addToFavorites:function(){},deleteFavorites:function(){}}),f=function(e){var t=e.children,c=O("favorites",[]),n=Object(h.a)(c,2),a=n[0],s=n[1],r=function(e){return s([].concat(Object(m.a)(a),[e]))},i=function(e){var t=a.filter((function(t){return t.id!==e}));s(t)},u=Object(o.useMemo)((function(){return{favoritesProducts:a,addToFavorites:r,deleteFavorites:i}}),[a]);return Object(l.jsx)(x.Provider,{value:u,children:t})},g=c(26),N=c.n(g);c(39);function y(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(h.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var C=function(){var e=Object(s.d)(),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(""),i=Object(h.a)(a,2),u=i[0],j=i[1],d=Object(r.m)().pathname.replace(/[^a-zA-Z0-9]/g,"");function b(e){var t=y(c,e);n(t)}Object(o.useEffect)((function(){j(c.get("query")||"")}),[]);var p=N()((function(e){b({query:e||null})}),1e3);return Object(l.jsxs)("label",{className:"search",children:[Object(l.jsx)("input",{type:"text",className:"search__field",placeholder:"Search in ".concat(d),value:u,onChange:function(e){var t=e.target.value;j(t),p(t)}}),u?Object(l.jsx)("button",{type:"button",className:"search__close",onClick:function(){j(""),b({query:null})},children:Object(l.jsx)("img",{src:"../icons/close.svg",alt:"close",className:"search__icon"})}):Object(l.jsx)("img",{src:"../icons/Search.svg",alt:"Search",className:"search__icon"})]})},k=(c(40),function(e){var t=e.isActive;return d()("button",{"button--active":t})}),A=function(e){var t=e.purpose,c=e.count;return Object(l.jsxs)(s.c,{to:"/".concat(t),className:k,children:[Object(l.jsx)("img",{src:"../icons/".concat(t,".svg"),alt:t,className:"button__img"}),c>0&&Object(l.jsx)("span",{className:"button__count",children:c})]})},S=["/phones","/tablets","/accessories","/favorites"],P=function(){var e=Object(r.m)(),t=Object(o.useContext)(_).cartProducts,c=Object(o.useContext)(x).favoritesProducts,n=S.includes(e.pathname);return"/cart"===e.pathname?Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(u,{parent:"header"}),Object(l.jsx)(A,{purpose:"cart",count:t.length})]}):Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(u,{parent:"header"}),Object(l.jsxs)("div",{className:"header__bar",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"header__items",children:[n&&Object(l.jsx)(C,{}),Object(l.jsxs)("div",{className:"header__buttons",children:[Object(l.jsx)(A,{purpose:"favorites",count:c.length}),Object(l.jsx)(A,{purpose:"cart",count:t.length})]})]})]})]})},w=(c(41),function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)(u,{parent:"footer"}),Object(l.jsxs)("div",{className:"footer__links",children:[Object(l.jsx)("a",{href:"https://github.com/yura-enttsel",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Github"}),Object(l.jsx)("a",{href:"https://github.com/yura-enttsel",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Contacts"}),Object(l.jsx)("a",{href:"https://github.com/yura-enttsel",className:"footer__link",target:"_blank",rel:"noreferrer",children:"Rigths"})]}),Object(l.jsxs)("div",{className:"footer__back",children:[Object(l.jsx)("div",{className:"footer__text",children:"Back to top"}),Object(l.jsx)("button",{type:"button",className:"footer__button","aria-label":"Back to top",onClick:function(){window.scroll({top:0,behavior:"smooth"})},children:Object(l.jsx)("img",{src:"../icons/chevron.svg",alt:"To top"})})]})]})}),I=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(P,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("main",{className:"main",children:Object(l.jsx)(r.a,{})}),Object(l.jsx)(w,{})]})]})},M=(c(42),"https://mate-academy.github.io/react_phone-catalog/_new/"),F=["".concat(M,"img/banner-phones.png"),"".concat(M,"img/banner-tablets.png"),"".concat(M,"img/banner-accessories.png")],T=(c(43),function(){var e=Object(o.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(0),s=Object(h.a)(a,2),r=s[0],i=s[1];Object(o.useEffect)((function(){n(F)}),[]),Object(o.useEffect)((function(){var e=setTimeout((function(){i((function(e){return e===c.length-1?0:e+1}))}),5e3);return function(){clearTimeout(e)}}),[r]);var u=function(e){var t=e;e<0?t=c.length-1:e>=c.length&&(t=0),i(t)};return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return u(r-1)},className:"banner__button",children:Object(l.jsx)("img",{src:"../icons/chevron-left.svg",alt:"Left arrow"})}),Object(l.jsxs)("div",{className:"banner__container",children:[Object(l.jsx)("div",{className:"banner__inner",style:{transform:"translateX(-".concat(100*r,"%)")},children:c.map((function(e){return Object(l.jsx)("img",{className:"banner__img",src:e,alt:"Banner"},e)}))}),Object(l.jsx)("div",{className:"banner__indicators",children:c.map((function(e,t){return Object(l.jsx)("button",{type:"button","aria-label":"Banner indicator",className:d()("banner__indicator",{"banner__indicator--active":r===t}),onClick:function(){return u(t)}},e)}))})]}),Object(l.jsx)("button",{type:"button",onClick:function(){return u(r-1)},className:"banner__button",children:Object(l.jsx)("img",{src:"../icons/chevron-right.svg",alt:"Left arrow"})})]})}),E=c(8),B=c(5),L=c.n(B);var q,R,D=function(e){return function(e){return fetch("https://mate-academy.github.io/react_phone-catalog/_new/products"+e).then((function(e){if(!e.ok)throw new Error;return e.json()}))}(e)},$=function(e){return D("/".concat(e,".json"))},G=i.a.createContext({phones:[],isError:!1,loading:!1}),H=function(e){var t=e.children,c=Object(o.useState)([]),n=Object(h.a)(c,2),a=n[0],s=n[1],r=Object(o.useState)(!1),i=Object(h.a)(r,2),u=i[0],j=i[1],d=Object(o.useState)(!1),b=Object(h.a)(d,2),p=b[0],m=b[1],O=function(){var e=Object(E.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),m(!0),e.prev=2,e.next=5,D(".json");case 5:t=e.sent,s(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),j(!0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){O()}),[]);var _=Object(o.useMemo)((function(){return{phones:a,isError:u,loading:p}}),[a,u,p]);return Object(l.jsx)(G.Provider,{value:_,children:t})},W=(c(44),c(45),c(46),function(e){var t=e.product,c=e.isInCart,n=Object(o.useContext)(_),a=n.addToCart,s=n.deleteFromCart;return Object(l.jsx)("button",{"aria-label":"Add to cart button",type:"button",className:d()("button-cartAdd",{"button-cartAdd--added":c}),onClick:function(){return e=t,void(c?s(e.id):a(e));var e},children:c?"Added to cart":"Add to cart"})}),z=(c(47),function(e){var t=e.product,c=e.isInFavorites,n=Object(o.useContext)(x),a=n.addToFavorites,s=n.deleteFavorites;return Object(l.jsx)("button",{"aria-label":"Add to favorites button",type:"button",className:d()("button-favoritesAdd",{"button-favoritesAdd--added":c}),onClick:function(){return e=t,void(c?s(e.id):a(e));var e},children:c?Object(l.jsx)("img",{src:"../icons/favoritesFilled.svg",alt:"Favorites button"}):Object(l.jsx)("img",{src:"../icons/favorites.svg",alt:"Favorites button"})})}),J=function(e){var t=e.product,c=e.isOnSale,n=void 0===c||c,a=Object(o.useContext)(_).cartProducts,r=Object(o.useContext)(x).favoritesProducts,i=Object(o.useState)(!1),u=Object(h.a)(i,2),j=u[0],d=u[1],b=Object(o.useState)(!1),p=Object(h.a)(b,2),m=p[0],O=p[1],v=Object(s.d)(),f=Object(h.a)(v,1)[0];Object(o.useEffect)((function(){d(a.some((function(e){var c=e.id;return!!t&&c===t.id}))),O(r.some((function(e){var c=e.id;return!!t&&c===t.id})))}),[t,a,r]);var g="".concat(M).concat(null===t||void 0===t?void 0:t.image);return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)(s.b,{to:"/phones/".concat(null===t||void 0===t?void 0:t.itemId),state:{search:f.toString()},className:"product-card__link",children:Object(l.jsx)("img",{src:g,alt:"Phone",className:"product-card__img"})}),Object(l.jsx)("p",{className:"product-card__title",children:"".concat(null===t||void 0===t?void 0:t.name," (iMT9G2FS/A)")}),Object(l.jsxs)("div",{className:"product-card__prices",children:[Object(l.jsx)("p",{className:"product-card__full_price",children:"$".concat(null===t||void 0===t?void 0:t.fullPrice)}),n&&Object(l.jsx)("p",{className:"product-card__sale_price",children:"$".concat(null===t||void 0===t?void 0:t.price)})]}),Object(l.jsxs)("div",{className:"product-card__description",children:[Object(l.jsxs)("p",{className:"product-card__param",children:[Object(l.jsx)("span",{className:"product-card__param_title",children:"Screen"}),Object(l.jsx)("span",{className:"product-card__param_value",children:null===t||void 0===t?void 0:t.screen})]}),Object(l.jsxs)("p",{className:"product-card__param",children:[Object(l.jsx)("span",{className:"product-card__param_title",children:"Capacity"}),Object(l.jsx)("span",{className:"product-card__param_value",children:null===t||void 0===t?void 0:t.capacity})]}),Object(l.jsxs)("p",{className:"product-card__param",children:[Object(l.jsx)("span",{className:"product-card__param_title",children:"RAM"}),Object(l.jsx)("span",{className:"product-card__param_value",children:null===t||void 0===t?void 0:t.ram})]})]}),Object(l.jsx)("div",{className:"product-card__buttons",children:t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(W,{product:t,isInCart:j}),Object(l.jsx)(z,{product:t,isInFavorites:m})]})})]})},Y=function(e){var t=e.products,c=e.isOnSale,n=void 0===c||c,a=e.title,s=Object(o.useState)(0),r=Object(h.a)(s,2),i=r[0],u=r[1],j=Object(o.useState)({itemWidth:272,step:4,frameSize:4,gap:16,animationDuration:500,infinite:!0}),d=Object(h.a)(j,1)[0],b=d.itemWidth,p=d.step,m=d.frameSize,O=d.gap,_=d.animationDuration,v=d.infinite,x=Object(o.useMemo)((function(){var e=t.length-m;return e*b+(e-1)*O}),[t,d]),f=(t.length-m)*b,g=m*b+(m-1)*O;return Object(l.jsxs)("div",{className:"product-slider",children:[Object(l.jsxs)("div",{className:"product-slider__top",children:[Object(l.jsx)("h1",{className:"product-slider__title",children:a}),Object(l.jsxs)("div",{className:"product-slider__buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){u(Math.min(i+b*p+p*O,0)),0===i&&u(-x)},className:"product-slider__button",disabled:0===i,children:Object(l.jsx)("img",{src:"../icons/chevron-left.svg",alt:"Left arrow"})}),Object(l.jsx)("button",{type:"button",onClick:function(){u(Math.max(i-b*p-p*O,-x)),i===-x&&v&&u(0)},className:"product-slider__button",disabled:i===-f&&!v,children:Object(l.jsx)("img",{src:"../icons/chevron-right.svg",alt:"Left arrow"})})]})]}),Object(l.jsx)("div",{className:"product-slider__container",style:{width:"".concat(g,"px"),gap:"".concat(O,"px")},children:t.map((function(e){return Object(l.jsx)("div",{className:"product-slider__item",style:{transform:"translateX(".concat(i,"px)"),transition:"".concat(_,"ms")},children:Object(l.jsx)(J,{product:e,isOnSale:n})},e.id)}))})]})},K=(c(48),[{category:"Mobile phones",path:"/phones",imgSrc:"".concat(M,"img/category-phones.png")},{category:"Tablets",path:"/tablets",imgSrc:"".concat(M,"img/category-tablets.png")},{category:"Accessories",path:"/accessories",imgSrc:"".concat(M,"img/category-accessories.png")}]);!function(e){e.MP="Mobile phones",e.TAB="Tablets",e.ACC="Accessories"}(q||(q={})),function(e){e.HOT="Hot prices",e.CATEGORY="Shop by category",e.NEW="Brand new models",e.LIKE="You may also like",e.MP="Mobile phones",e.TAB="Tablets",e.ACC="Accessories",e.FAVORITES="Favourites",e.CART="Cart"}(R||(R={}));var U=function(e){var t=e.phonesLengt,c=void 0===t?0:t,n=e.tabletsLengt,a=void 0===n?0:n,r=e.accessoriesLength,i=void 0===r?0:r,u=Object(o.useState)([]),j=Object(h.a)(u,2),b=j[0],p=j[1];Object(o.useEffect)((function(){p(K)}),[]);var m=function(e){switch(e){case q.MP:return c;case q.TAB:return a;case q.ACC:return i;default:return 0}};return Object(l.jsxs)("section",{className:"category",children:[Object(l.jsx)("h1",{className:"category__title",children:R.CATEGORY}),Object(l.jsx)("div",{className:"category__content",children:b.map((function(e){var t=e.category,c=e.path,n=e.imgSrc;return Object(l.jsxs)(s.b,{to:c,children:[Object(l.jsx)("figure",{className:d()("category__element",{"category__element--phone":t===q.MP,"category__element--tablet":t===q.TAB,"category__element--accesories":t===q.ACC}),children:Object(l.jsx)("img",{className:d()("category__img",{"category__img--phone":t===q.MP,"category__img--tablet":t===q.TAB,"category__img--accesories":t===q.ACC}),src:n,alt:t})}),Object(l.jsx)("p",{className:"category__type",children:t}),Object(l.jsx)("p",{className:"category__length",children:"".concat(m(t)," models")})]},t)}))})]})},V=(c(49),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),X=(c(50),function(){return Object(l.jsx)("p",{className:"error-mesage",children:"Looks like something went wrong..."})}),Z=function(){var e=Object(o.useContext)(G),t=e.phones,c=e.loading,n=e.isError,a=Object(o.useMemo)((function(){return t.filter((function(e){var t=e.price;return e.fullPrice-t>=80}))}),[t]),s=Object(o.useMemo)((function(){return Object(m.a)(t).filter((function(e){return e.year>=2019})).sort((function(){return Math.random()-.5}))}),[t]);return Object(l.jsxs)("section",{className:"home-page",children:[Object(l.jsx)("div",{className:"home-page__banner",children:Object(l.jsx)(T,{})}),c&&Object(l.jsx)(V,{}),!c&&n&&Object(l.jsx)(X,{}),!c&&!n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"home-page__slider",children:Object(l.jsx)(Y,{title:R.HOT,products:a,isOnSale:!0})}),Object(l.jsx)("div",{className:"home-page__categories",children:Object(l.jsx)(U,{phonesLengt:t.length})}),Object(l.jsx)("div",{className:"home-page__slider",children:Object(l.jsx)(Y,{title:R.NEW,products:s,isOnSale:!1})})]})]})},Q=(c(51),[{sortBy:"sort",title:"Newest",value:null},{sortBy:"sort",title:"Alphabetically",value:"name"},{sortBy:"sort",title:"Cheapest",value:"price"}]),ee=[{sortBy:"perPage",title:"16",value:null},{sortBy:"perPage",title:"8",value:"8"},{sortBy:"perPage",title:"4",value:"4"},{sortBy:"perPage",title:"All",value:"All"}],te=(c(52),function(e){var t=e.products;return Object(l.jsx)("section",{className:"products-list",children:t.map((function(e){return Object(l.jsx)(J,{product:e},e.id)}))})}),ce=c(7),ne=(c(53),c(14)),ae=c(27),se=["children","params"],re=function(e){var t=e.children,c=e.params,n=Object(ae.a)(e,se),a=Object(s.d)(),r=Object(h.a)(a,1)[0];return Object(l.jsx)(s.b,Object(ne.a)(Object(ne.a)({to:{search:y(r,c)}},n),{},{children:t}))},oe=function(e){var t=e.options,c=e.description,n=Object(o.useState)(!1),a=Object(h.a)(n,2),r=a[0],i=a[1],u=Object(s.d)(),j=Object(h.a)(u,1)[0].get(t[0].sortBy)||"",b=Object(o.useMemo)((function(){var e;return null===(e=t.find((function(e){return e.value===j})))||void 0===e?void 0:e.title}),[t,j]),p=function(){i((function(e){return!e}))};return Object(l.jsxs)("div",{className:"select",children:[Object(l.jsx)("p",{className:"select__description",children:c}),Object(l.jsxs)("button",{className:d()("select__button",{"select__button--active":r}),type:"button",onClick:function(){i((function(e){return!e}))},children:[Object(l.jsx)("span",{children:b||t[0].title}),Object(l.jsx)("img",{src:"".concat(r?"../icons/chevron-up.svg":"../icons/chevron-down.svg"),alt:"Arrow",className:"select__icon"})]}),r&&Object(l.jsx)("div",{className:"select__options",children:t.map((function(e){return Object(l.jsx)(re,{params:Object(ce.a)({},e.sortBy,e.value),className:"select__option",onClick:p,children:e.title},e.value)}))})]})};c(54);var ie,le,ue=function(e){var t=e.total,c=e.perPage,n=void 0===c?16:c,a=e.currentPage,r=void 0===a?1:a,i=Object(s.d)(),u=Object(h.a)(i,2),j=u[0],b=u[1],p=function(e,t){for(var c=[],n=e;n<=t;n+=1)c.push(n);return c}(1,Math.ceil(t/n));function m(e){var t=y(j,e);b(t)}Object(o.useEffect)((function(){m({page:"1"})}),[t,n]);var O=function(e){e>p.length||e<1||m({page:e.toString()})};return Object(l.jsxs)("div",{className:"pagination",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return O(r-1)},className:"pagination__button",disabled:1===r,children:Object(l.jsx)("img",{src:"../icons/chevron-left.svg",alt:"Left arrow"})}),Object(l.jsx)("div",{className:"pagination__pages",children:p.map((function(e){return Object(l.jsx)(re,{params:{page:e.toString()},className:d()("pagination__page",{"pagination__page--active":r===e}),children:e},e)}))}),Object(l.jsx)("button",{type:"button",onClick:function(){return O(r+1)},className:"pagination__button",disabled:r===p.length,children:Object(l.jsx)("img",{src:"../icons/chevron-right.svg",alt:"Left arrow"})})]})},je=(c(55),function(e){return e.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}),de=function(){var e=Object(r.m)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e){return t+="/".concat(e),Object(l.jsxs)(s.b,{className:"crumb",to:t,children:[Object(l.jsx)("img",{className:"crumb__icon",src:"../icons/chevron-right.svg",alt:"Arrow rigth"}),Object(l.jsx)("span",{className:"crumb__text",children:je(e)})]},e)}));return Object(l.jsxs)("div",{className:"breadcrumbs",children:[Object(l.jsx)(s.b,{className:"crumb",to:"/",children:Object(l.jsx)("img",{className:"crumb__icon",src:"../icons/home.svg",alt:"home"})}),c]})},be=(c(56),function(e){var t=e.section;return Object(l.jsx)("p",{className:"no-results",children:"There are no products matching your search in the ".concat(t,"...")})}),pe=function(){var e=Object(o.useContext)(G),t=e.phones,c=e.loading,n=e.isError,a=Object(s.d)(),r=Object(h.a)(a,1)[0],i=r.get("sort")||"",u=r.get("perPage")||"16",j=r.get("page")||"1",d=r.get("query")||"",b=Object(o.useMemo)((function(){return Object(m.a)(t).sort((function(e,t){switch(i){case"name":return e.name.localeCompare(t.name);case"price":return Number(e.price)-Number(t.price);default:return Number(t.year)-Number(e.year)}}))}),[i,t]),p=Object(o.useMemo)((function(){return d.trim()?t.filter((function(e){return e.name.toLowerCase().includes(d.trim().toLowerCase())})):t}),[t,d]),O=Object(o.useMemo)((function(){if("All"===u)return b;var e=b.length,t=Number(j)*Number(u),c=t-Number(u),n=t>e?e:t;return b.slice(c,n)}),[b,j,u]);return Object(l.jsx)("section",{className:"phones-page",children:d.trim()?Object(l.jsx)(l.Fragment,{children:p.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"phones-page__length",children:"".concat(p.length," results")}),Object(l.jsx)("div",{className:"phones-page__list",children:Object(l.jsx)(te,{products:p})})]}):Object(l.jsx)(be,{section:"phones"})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"phones-page__breadcrumbs",children:Object(l.jsx)(de,{})}),Object(l.jsx)("h1",{className:"phones-page__title",children:R.MP}),c&&Object(l.jsx)(V,{}),!c&&n&&Object(l.jsx)(X,{}),!c&&!n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"phones-page__length",children:"".concat(t.length," Models")}),Object(l.jsxs)("div",{className:"phones-page__selects",children:[Object(l.jsx)(oe,{options:Q,description:"Sort By"}),Object(l.jsx)(oe,{options:ee,description:"Items on page"})]}),Object(l.jsx)("div",{className:"phones-page__list",children:Object(l.jsx)(te,{products:O})}),Object(l.jsx)("div",{className:"phones-page__pagination",children:b.length>Number(u)&&"All"!==u&&Object(l.jsx)(ue,{total:b.length,perPage:Number(u),currentPage:Number(j)})})]})]})})},me=(c(57),{black:"#2c2c2e",silver:"#d9d9d9",gold:"#fAd7bd",rosegold:"#e6c7c2",spacegray:"#25282a",white:"#f9f6ef",yellow:"#f3d060",coral:"#ee7762",red:"#a5282c",purple:"#d1cdda",green:"#aee1cd",midnightgreen:"#4e5851"}),he=(c(58),function(){var e=Object(r.o)(),t=Object(r.m)().state;return Object(l.jsxs)("button",{className:"button-back",type:"button",onClick:function(){e({pathname:"..",search:null===t||void 0===t?void 0:t.search})},children:[Object(l.jsx)("img",{className:"button-back__arrow",src:"../icons/chevron-left.svg",alt:"Arrow left"}),Object(l.jsx)("span",{className:"button-back__text",children:"Back"})]})});!function(e){e.Screen="screen",e.Resolution="resolution",e.Processor="processor",e.RAM="ram"}(ie||(ie={})),function(e){e.Screen="screen",e.Resolution="resolution",e.Processor="processor",e.RAM="ram",e["Built in memory"]="capacity",e.Camera="camera",e.Zoom="zoom",e.Cell="cell"}(le||(le={}));var Oe=function(e){var t=e.isActive;return d()("product-page__color",{"product-page__color--active":t})},_e=function(e){var t=e.isActive;return d()("product-page__capacity",{"product-page__capacity--active":t})},ve=function(e){return Array.isArray(e)?e.join(", "):e},xe=function(){var e=Object(o.useContext)(G).phones,t=Object(o.useContext)(_).cartProducts,c=Object(o.useContext)(x).favoritesProducts,n=Object(o.useState)(!1),a=Object(h.a)(n,2),i=a[0],u=a[1],j=Object(o.useState)(!1),b=Object(h.a)(j,2),p=b[0],m=b[1],O=Object(o.useState)(null),v=Object(h.a)(O,2),f=v[0],g=v[1],N=Object(o.useState)(!1),y=Object(h.a)(N,2),C=y[0],k=y[1],A=Object(o.useState)(!1),S=Object(h.a)(A,2),P=S[0],w=S[1],I=Object(o.useState)(""),F=Object(h.a)(I,2),T=F[0],B=F[1],q=Object(r.q)().phoneId,D=function(){var e=Object(E.a)(L.a.mark((function e(t){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),k(!1),e.prev=2,e.next=5,$(t);case 5:c=e.sent,g(c),B(c.images[0]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),k(!0);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){q&&D(q)}),[q]),Object(o.useEffect)((function(){u(t.some((function(e){return!!q&&q===e.phoneId}))),m(c.some((function(e){return!!q&&q===e.phoneId})))}),[q,t,c]);var H=Object(o.useMemo)((function(){return e.find((function(e){return e.phoneId===q}))||{}}),[e,q]),J=Object(o.useMemo)((function(){var t=f?1.3*f.priceDiscount:0,c=f?.7*f.priceDiscount:0;return e.filter((function(e){var n=e.price;return n>=c&&n<=t}))}),[f,e]);return Object(l.jsxs)("section",{className:"product-page",children:[Object(l.jsx)("div",{className:"product-page__breadcrumbs",children:Object(l.jsx)(de,{})}),Object(l.jsx)("div",{className:"product-page__back",children:Object(l.jsx)(he,{})}),P&&!C&&Object(l.jsx)(V,{}),!P&&C&&Object(l.jsx)(X,{}),!C&&!P&&f&&Object(l.jsxs)("div",{className:"product-page__product",children:[Object(l.jsx)("h1",{className:"product-page__product-title",children:null===f||void 0===f?void 0:f.name}),Object(l.jsx)("div",{className:"product-page__extra-photos",children:null===f||void 0===f?void 0:f.images.map((function(e){return Object(l.jsx)("div",{"aria-hidden":"true",className:d()("product-page__extra-element",{"product-page__extra-element--active":e===T}),onClick:function(){return B(e)},children:Object(l.jsx)("img",{className:"product-page__image",src:"".concat(M).concat(e),alt:"iPhone"})},e)}))}),Object(l.jsx)("div",{className:"product-page__main-photo",children:Object(l.jsx)("img",{className:"product-page__image-main",src:"".concat(M).concat(T),alt:"iPhone"})}),Object(l.jsxs)("div",{className:"product-page__options",children:[Object(l.jsx)("p",{className:"product-page__options-title",children:"Available colors"}),Object(l.jsx)("div",{className:"product-page__colors",children:null===f||void 0===f?void 0:f.colorsAvailable.map((function(e){return Object(l.jsx)(s.c,{className:Oe,to:"/phones/".concat(null===f||void 0===f?void 0:f.namespaceId,"-").concat(null===f||void 0===f?void 0:f.capacity.toLowerCase(),"-").concat(e),style:{background:me[e]}},e)}))}),Object(l.jsx)("p",{className:"product-page__options-title",children:"Select capacity"}),Object(l.jsx)("div",{className:"product-page__capacities",children:null===f||void 0===f?void 0:f.capacityAvailable.map((function(e){return Object(l.jsx)(s.c,{className:_e,to:"/phones/".concat(null===f||void 0===f?void 0:f.namespaceId,"-").concat(e.toLowerCase(),"-").concat(null===f||void 0===f?void 0:f.color),children:e},e)}))}),Object(l.jsxs)("div",{className:"product-page__prices",children:[Object(l.jsx)("p",{className:"product-page__sale_price",children:"$".concat(null===f||void 0===f?void 0:f.priceDiscount)}),Object(l.jsx)("p",{className:"product-page__full_price",children:"$".concat(null===f||void 0===f?void 0:f.priceRegular)})]}),Object(l.jsxs)("div",{className:"product-page__buttons",children:[Object(l.jsx)(W,{product:H,isInCart:i}),Object(l.jsx)(z,{product:H,isInFavorites:p})]}),Object(l.jsx)("div",{className:"product-page__specs",children:Object.entries(ie).map((function(e){var t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("p",{className:"product-page__param",children:[Object(l.jsx)("span",{className:"product-page__param-title",children:c}),Object(l.jsx)("span",{className:"product-page__param-value",children:f[n]})]})}))})]}),Object(l.jsxs)("article",{className:"product-page__about",children:[Object(l.jsx)("h2",{className:"product-page__article-title",children:"About"}),null===f||void 0===f?void 0:f.description.map((function(e){return Object(l.jsxs)("div",{className:"product-page__paragraph",children:[Object(l.jsx)("h3",{className:"product-page__subtitle",children:e.title}),Object(l.jsx)("p",{className:"product-page__text",children:e.text.map((function(e){return Object(l.jsx)("p",{className:"product-page__text-part",children:e},e)}))})]},e.title)}))]}),Object(l.jsxs)("article",{className:"product-page__tech-specs",children:[Object(l.jsx)("h2",{className:"product-page__article-title",children:"Tech specs"}),Object.entries(le).map((function(e){var t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("p",{className:"product-page__param",children:[Object(l.jsx)("span",{className:"product-page__param-title product-page__param-title--article",children:c}),Object(l.jsx)("span",{className:"product-page__param-value product-page__param-value--article",children:ve(f[n])})]})}))]})]}),Object(l.jsx)("div",{className:"produc-page__slider",children:Object(l.jsx)(Y,{title:R.LIKE,products:J})})]})},fe=(c(59),c(60),function(){return Object(l.jsxs)("div",{className:"construction",children:[Object(l.jsx)("h1",{className:"construction__title",children:"Comming soon!"}),Object(l.jsx)("p",{className:"construction__message",children:"This page is under construction. Check it later."})]})}),ge=function(){return Object(l.jsxs)("section",{className:"tablets-page",children:[Object(l.jsx)("div",{className:"tablets-page__breadcrumbs",children:Object(l.jsx)(de,{})}),Object(l.jsx)("div",{className:"tablets-page__content",children:Object(l.jsx)(fe,{})})]})},Ne=(c(61),function(){return Object(l.jsxs)("section",{className:"accessories-page",children:[Object(l.jsx)("div",{className:"accessories-page__breadcrumbs",children:Object(l.jsx)(de,{})}),Object(l.jsx)("div",{className:"accessories-page__content",children:Object(l.jsx)(fe,{})})]})}),ye=(c(62),c(63),function(e){var t=e.product,c=e.onDelete,n=e.amount,a=e.onChange;return Object(l.jsxs)("div",{className:"cart-product",children:[Object(l.jsx)("button",{type:"button",className:"cart-product__delete",onClick:function(){return c(t.id)},children:Object(l.jsx)("img",{src:"../icons/close.svg",alt:"Delete",className:"cart-product__icon"})}),Object(l.jsx)("div",{className:"cart-product__photo",children:Object(l.jsx)("img",{src:"".concat(M).concat(t.image),alt:t.name,className:"cart-product__image"})}),Object(l.jsxs)("div",{className:"cart-product__name",children:["".concat(t.name),Object(l.jsx)("br",{}),"(iMT9G2FS/A)"]}),Object(l.jsxs)("div",{className:"cart-product__buttons",children:[Object(l.jsx)("button",{type:"button",className:"cart-product__button",onClick:function(){return a(t.itemId,-1)},disabled:1===n,children:Object(l.jsx)("img",{src:"../icons/minus.svg",alt:"minus amount",className:"cart-product__icon"})}),Object(l.jsx)("div",{className:"cart-product__amount",children:n}),Object(l.jsx)("button",{type:"button",className:"cart-product__button",onClick:function(){return a(t.itemId,1)},children:Object(l.jsx)("img",{src:"../../icons/plus.svg",alt:"plus amount",className:"cart-product__icon"})})]}),Object(l.jsx)("p",{className:"cart-product__price",children:"$".concat(t.price*n)})]})}),Ce=(c(64),function(e){var t=e.total,c=e.totalItems,n=e.onClick,a=e.isClicked;return Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsxs)("div",{className:"checkout__total",children:[Object(l.jsx)("h1",{className:"checkout__price",children:"$".concat(t)}),Object(l.jsx)("p",{className:"checkout__items",children:"Total for ".concat(c," items")})]}),Object(l.jsx)("button",{type:"button",className:"checkout__button",onClick:function(){return n(!0)},children:"Checkout"}),a&&Object(l.jsxs)("div",{className:"checkout__sorry",children:[Object(l.jsx)("p",{className:"checkout__sorry-message",children:"We are sorry, but this feature is not implemented yet"}),Object(l.jsx)("button",{type:"button",className:"checkout__sorry-close",onClick:function(){return n(!1)},children:Object(l.jsx)("img",{src:"../icons/close.svg",alt:"Delete",className:"checkout__sorry-image"})})]})]})}),ke=function(){var e=Object(o.useContext)(_),t=e.cartProducts,c=e.deleteFromCart,n=O("cartAmount",[]),a=Object(h.a)(n,2),s=a[0],r=a[1],i=Object(o.useState)(!1),u=Object(h.a)(i,2),j=u[0],d=u[1],b=function(e,t){var c=s.map((function(c){return c.itemId===e?Object(ne.a)(Object(ne.a)({},c),{},{quantity:c.quantity+t>0?c.quantity+t:c.quantity}):Object(ne.a)({},c)}));r(c)};Object(o.useEffect)((function(){var e=t.map((function(e){var t;return{itemId:e.itemId,quantity:(null===(t=s.find((function(t){return t.itemId===e.itemId})))||void 0===t?void 0:t.quantity)||1}}));r(e)}),[t]);var p=Object(o.useMemo)((function(){return t.reduce((function(e,t){var c,n=(null===(c=s.find((function(e){var c=e.itemId;return t.itemId===c})))||void 0===c?void 0:c.quantity)||1;return e+t.price*n}),0)}),[t,s]),m=Object(o.useMemo)((function(){return s.reduce((function(e,t){return e+t.quantity}),0)}),[s]);return Object(l.jsxs)("section",{className:"cart-page",children:[Object(l.jsx)("div",{className:"cart-page__back",children:Object(l.jsx)(he,{})}),Object(l.jsx)("h1",{className:"cart-page__title",children:R.CART}),Object(l.jsx)("div",{className:"cart-page__products",children:t.length>0&&t.map((function(e){var t;return Object(l.jsx)(ye,{product:e,onDelete:c,onChange:b,amount:(null===(t=s.find((function(t){return e.itemId===t.itemId})))||void 0===t?void 0:t.quantity)||1},e.id)}))}),Object(l.jsx)("div",{className:"cart-page__checkout",children:Object(l.jsx)(Ce,{total:p,totalItems:m,onClick:d,isClicked:j})})]})},Ae=(c(65),c(66),function(e){var t=e.section;return Object(l.jsx)("p",{className:"no-results",children:"No producs in ".concat(t," yet. Please add something you like!...")})}),Se=function(){var e=Object(o.useContext)(x).favoritesProducts,t=Object(s.d)(),c=Object(h.a)(t,1)[0].get("query")||"",n=Object(o.useMemo)((function(){return c.trim()?e.filter((function(e){return e.name.toLowerCase().includes(c.trim().toLowerCase())})):e}),[e,c]);return Object(l.jsxs)("section",{className:"favorites-page",children:[Object(l.jsx)("div",{className:"favorites-page__breadcrumbs",children:Object(l.jsx)(de,{})}),0===e.length&&Object(l.jsx)(Ae,{section:"favorites"}),n.length>0&&e.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"favorites-page__title",children:R.FAVORITES}),Object(l.jsx)("p",{className:"favorites-page__count",children:"".concat(n.length," items")}),Object(l.jsx)("div",{className:"favorites-page__list",children:Object(l.jsx)(te,{products:n})})]}),0===n.length&&e.length>0&&Object(l.jsx)(be,{section:"favorites"})]})},Pe=(c(67),function(){return Object(l.jsxs)("section",{className:"page-notFound",children:[Object(l.jsx)("div",{className:"page-notFound__back",children:Object(l.jsx)(he,{})}),Object(l.jsxs)("p",{className:"page-notFound__message",children:["Page Not Found. You can return to the\xa0",Object(l.jsx)(s.b,{to:"/",className:"page-notFound__link",children:"Home Page."})]})]})}),we=function(){return Object(l.jsx)(s.a,{children:Object(l.jsx)(H,{children:Object(l.jsx)(v,{children:Object(l.jsx)(f,{children:Object(l.jsx)(r.d,{children:Object(l.jsxs)(r.b,{path:"/",element:Object(l.jsx)(I,{}),children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(Z,{})}),Object(l.jsxs)(r.b,{path:"phones",children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(pe,{})}),Object(l.jsx)(r.b,{path:":phoneId",element:Object(l.jsx)(xe,{})})]}),Object(l.jsx)(r.b,{path:"tablets",element:Object(l.jsx)(ge,{})}),Object(l.jsx)(r.b,{path:"accessories",element:Object(l.jsx)(Ne,{})}),Object(l.jsx)(r.b,{path:"cart",element:Object(l.jsx)(ke,{})}),Object(l.jsx)(r.b,{path:"favorites",element:Object(l.jsx)(Se,{})}),Object(l.jsx)(r.b,{path:"*",element:Object(l.jsx)(Pe,{})})]})})})})})})};a.a.render(Object(l.jsx)(we,{}),document.getElementById("root"))}]),[[68,1,2]]]);
//# sourceMappingURL=main.de511923.chunk.js.map