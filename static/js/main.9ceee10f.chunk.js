(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(3),i=n.n(a),u=n(1),o=n(2),l=n(11),s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"FETCH_ARTICLES__BEGIN":return!0;case"FETCH_ARTICLES__RESOLVE":return!1;default:return e}},f=n(8),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ARTICLES__RESOLVE":return t.articles.map(function(e){return Object(f.a)({},e,{isSelected:!1})});case"TOGGLE_ARTICLE_SELECTION":return e.map(function(e){return e.name===t.articleName?Object(f.a)({},e,{isSelected:!e.isSelected}):e});default:return e}},h=Object(o.c)({areArticlesBeingFetched:s,articles:d}),m=(n(29),n(7)),E=n.n(m),p=n(12),v=function(e){return Object(p.a)(E.a.mark(function t(){var n,r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"FETCH_ARTICLES__BEGIN"}),t.next=3,fetch("https://packing-list-weight-api.herokuapp.com/articles");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e({type:"FETCH_ARTICLES__RESOLVE",articles:r});case 8:case"end":return t.stop()}},t)}))},b=function(e){return function(t){return function(){e({type:"TOGGLE_ARTICLE_SELECTION",articleName:t})}}},g=n(13),O=n(14),w=n(16),C=n(15),S=n(17),_=(n(33),function(e){var t=e.handleCheckboxChange,n=e.isSelected,r=e.name,a=e.weight,i="checkbox-".concat(r);return c.a.createElement("label",{"data-selector":"Article",htmlFor:i,style:{display:"block"}},c.a.createElement("input",{type:"checkbox",id:i,onChange:t,checked:n}),"".concat(r," (").concat(a,"kg)"))}),k=Object(u.b)(function(){return{}},function(e,t){var n=t.name;return{handleCheckboxChange:b(e)(n)}})(_),j=function(e){var t=e.articles;return c.a.createElement("ul",null,t.map(function(e){return c.a.createElement(k,{key:e.name,isSelected:e.isSelected,name:e.name,weight:e.weight})}))},A=Object(u.b)(function(e){return{articles:e.articles}},function(){return{}})(j),T=function(){return c.a.createElement(r.Fragment,null,c.a.createElement(F,null),c.a.createElement(N,null))},L=function(e){var t=e.value;return c.a.createElement("div",{"data-selector":"NumberOfSelectedArticles"},"Number of selected articles: ".concat(t))},y=function(e){return e.filter(function(e){return e.isSelected}).length},F=Object(u.b)(function(e){var t=e.articles;return{value:y(t)}},function(){return{}})(L),I=function(e){var t=e.value;return c.a.createElement("div",{"data-selector":"Weight"},"Weight: ".concat(t,"kg"))},R=function(e){return e.filter(function(e){return e.isSelected}).reduce(function(e,t){return e+t.weight},0)},N=Object(u.b)(function(e){var t=e.articles;return{value:R(t)}},function(){return{}})(I),x=function(e){function t(){return Object(g.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticles()}},{key:"render",value:function(){var e=this.props.areArticlesBeingFetched;return c.a.createElement("div",{className:"App"},e?c.a.createElement("div",{"data-selector":"App-isLoading",style:{marginTop:"1em"}},"Loading\u2026"):c.a.createElement(r.Fragment,null,c.a.createElement(A,null),c.a.createElement(T,null)))}}]),t}(r.Component),B=Object(u.b)(function(e){return{areArticlesBeingFetched:e.areArticlesBeingFetched}},function(e){return{fetchArticles:v(e)}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(o.d)(h,Object(o.a)(l.a));i.a.render(c.a.createElement(u.a,{store:G},c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.9ceee10f.chunk.js.map