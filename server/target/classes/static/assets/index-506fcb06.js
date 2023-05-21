(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function G(){}function ir(e){return e()}function hn(){return Object.create(null)}function be(e){e.forEach(ir)}function ar(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Je;function Ne(e,t){return Je||(Je=document.createElement("a")),Je.href=t,e===Je.href}function ms(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function ze(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function A(){return L(" ")}function $e(){return L("")}function V(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function hs(e){return function(t){return t.preventDefault(),e.call(this,t)}}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Bt(e){return e===""?null:+e}function bs(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.data!==t&&(e.data=t)}function K(e,t){e.value=t??""}function M(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function bn(e,t,n){for(let r=0;r<e.options.length;r+=1){const s=e.options[r];if(s.__value===t){s.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function gs(e){const t=e.querySelector(":checked");return t&&t.__value}function _s(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,r,t),s}let Ue;function Fe(e){Ue=e}function lr(){if(!Ue)throw new Error("Function called outside component initialization");return Ue}function ys(e){lr().$$.on_mount.push(e)}function cr(){const e=lr();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const o=_s(t,n,{cancelable:r});return s.slice().forEach(i=>{i.call(e,o)}),!o.defaultPrevented}return!0}}const Oe=[],et=[];let Re=[];const Lt=[],ws=Promise.resolve();let Mt=!1;function Es(){Mt||(Mt=!0,ws.then(ur))}function tt(e){Re.push(e)}function vs(e){Lt.push(e)}const wt=new Set;let ke=0;function ur(){if(ke!==0)return;const e=Ue;do{try{for(;ke<Oe.length;){const t=Oe[ke];ke++,Fe(t),Ss(t.$$)}}catch(t){throw Oe.length=0,ke=0,t}for(Fe(null),Oe.length=0,ke=0;et.length;)et.pop()();for(let t=0;t<Re.length;t+=1){const n=Re[t];wt.has(n)||(wt.add(n),n())}Re.length=0}while(Oe.length);for(;Lt.length;)Lt.pop()();Mt=!1,wt.clear(),Fe(e)}function Ss(e){if(e.fragment!==null){e.update(),be(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(tt)}}function Is(e){const t=[],n=[];Re.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),Re=t}const Ke=new Set;let As;function le(e,t){e&&e.i&&(Ke.delete(e),e.i(t))}function ve(e,t,n,r){if(e&&e.o){if(Ke.has(e))return;Ke.add(e),As.c.push(()=>{Ke.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Ts(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function Se(e){e&&e.c()}function ce(e,t,n,r){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),r||tt(()=>{const i=e.$$.on_mount.map(ir).filter(ar);e.$$.on_destroy?e.$$.on_destroy.push(...i):be(i),e.$$.on_mount=[]}),o.forEach(tt)}function ue(e,t){const n=e.$$;n.fragment!==null&&(Is(n.after_update),be(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Cs(e,t){e.$$.dirty[0]===-1&&(Oe.push(e),Es(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,n,r,s,o,i,a=[-1]){const c=Ue;Fe(e);const l=e.$$={fragment:null,ctx:[],props:o,update:G,not_equal:s,bound:hn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:hn(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};i&&i(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(d,p,...h)=>{const b=h.length?h[0]:p;return l.ctx&&s(l.ctx[d],l.ctx[d]=b)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](b),u&&Cs(e,d)),p}):[],l.update(),u=!0,be(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const d=bs(t.target);l.fragment&&l.fragment.l(d),d.forEach(w)}else l.fragment&&l.fragment.c();t.intro&&le(e.$$.fragment),ce(e,t.target,t.anchor,t.customElement),ur()}Fe(c)}class ye{$destroy(){ue(this,1),this.$destroy=G}$on(t,n){if(!ar(n))return G;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ms(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function gn(e,t,n){const r=e.slice();return r[9]=t[n],r}function Ds(e){let t;return{c(){t=m("p"),t.textContent="No results found.",M(t,"color","darkgray")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function ks(e){let t,n=e[1].length+"",r,s,o,i,a=e[1],c=[];for(let l=0;l<a.length;l+=1)c[l]=yn(gn(e,a,l));return{c(){t=m("p"),r=L(n),s=L(" results found."),o=A();for(let l=0;l<c.length;l+=1)c[l].c();i=$e(),M(t,"color","darkgray")},m(l,u){E(l,t,u),f(t,r),f(t,s),E(l,o,u);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,u);E(l,i,u)},p(l,u){if(u&2&&n!==(n=l[1].length+"")&&H(r,n),u&34){a=l[1];let d;for(d=0;d<a.length;d+=1){const p=gn(l,a,d);c[d]?c[d].p(p,u):(c[d]=yn(p),c[d].c(),c[d].m(i.parentNode,i))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},d(l){l&&w(t),l&&w(o),ze(c,l),l&&w(i)}}}function _n(e){let t,n,r,s=e[9].finalPrice+"",o;return{c(){t=m("p"),n=m("b"),n.textContent="ON SALE!",r=L(" Discount price: "),o=L(s),M(t,"font-size","0.9rem")},m(i,a){E(i,t,a),f(t,n),f(t,r),f(t,o)},p(i,a){a&2&&s!==(s=i[9].finalPrice+"")&&H(o,s)},d(i){i&&w(t)}}}function yn(e){let t,n,r,s,o,i,a=e[9].gameName+"",c,l,u,d,p=e[9].metacriticScore+"",h,b,g,T=e[9].shortDescription+"",v,k,R,$,N=e[9].initialPrice+"",F,U,B,C,O,I,j,W,P=e[9].initialPrice!=e[9].finalPrice&&_n(e);function Y(){return e[8](e[9])}return{c(){t=m("img"),s=A(),o=m("p"),i=m("b"),c=L(a),l=A(),u=m("p"),d=L("Metacritic score: "),h=L(p),b=A(),g=m("p"),v=L(T),k=A(),R=m("p"),$=L("Original price: "),F=L(N),U=A(),P&&P.c(),B=A(),C=m("div"),O=m("button"),O.textContent="Bookmark",I=A(),Ne(t.src,n=e[9].image)||y(t,"src",n),y(t,"alt",r=e[9].gameName),M(o,"font-size","0.9rem"),M(u,"font-size","0.9rem"),M(g,"font-size","0.9rem"),M(R,"font-size","0.9rem"),y(O,"id","btn_bookmark"),y(O,"class","btn btn-primary"),M(O,"margin-right","0.5rem"),M(C,"display","flex")},m(S,D){E(S,t,D),E(S,s,D),E(S,o,D),f(o,i),f(i,c),E(S,l,D),E(S,u,D),f(u,d),f(u,h),E(S,b,D),E(S,g,D),f(g,v),E(S,k,D),E(S,R,D),f(R,$),f(R,F),E(S,U,D),P&&P.m(S,D),E(S,B,D),E(S,C,D),f(C,O),f(C,I),j||(W=V(O,"click",Y),j=!0)},p(S,D){e=S,D&2&&!Ne(t.src,n=e[9].image)&&y(t,"src",n),D&2&&r!==(r=e[9].gameName)&&y(t,"alt",r),D&2&&a!==(a=e[9].gameName+"")&&H(c,a),D&2&&p!==(p=e[9].metacriticScore+"")&&H(h,p),D&2&&T!==(T=e[9].shortDescription+"")&&H(v,T),D&2&&N!==(N=e[9].initialPrice+"")&&H(F,N),e[9].initialPrice!=e[9].finalPrice?P?P.p(e,D):(P=_n(e),P.c(),P.m(B.parentNode,B)):P&&(P.d(1),P=null)},d(S){S&&w(t),S&&w(s),S&&w(o),S&&w(l),S&&w(u),S&&w(b),S&&w(g),S&&w(k),S&&w(R),S&&w(U),P&&P.d(S),S&&w(B),S&&w(C),j=!1,W()}}}function Os(e){let t,n,r,s,o,i,a,c,l,u,d,p,h,b,g,T,v,k,R,$,N;function F(C,O){return C[1].length>0?ks:Ds}let U=F(e),B=U(e);return{c(){t=m("div"),n=m("form"),r=m("div"),s=m("label"),s.textContent="🔎",o=A(),i=m("input"),a=A(),c=m("p"),c.innerHTML="<b>Specialized Query 1:</b> Return the game name, website, genre, and initial price of games that share the same website as games with similar name to the provided game name, have steam spy number of players greater than 10000 (inclusive), and have initial price less than 10 (not inclusive).",l=A(),u=m("p"),u.innerHTML="<b>Specialized Query 2:</b> Return the game name and PC minimum and recommended requirements of all games that have the same PC requirements as games with similar name to the provided game name, ordered by game name in ascending order.",d=A(),p=m("div"),h=m("button"),h.textContent="Submit",b=A(),g=m("button"),g.textContent="Query 1",T=A(),v=m("button"),v.textContent="Query 2",k=A(),B.c(),R=$e(),y(s,"for","search"),y(i,"type","text"),y(i,"class","form-control col-lg-9"),y(i,"id","search"),y(i,"name","search"),y(i,"placeholder"," search for games..."),i.required=!0,y(r,"class","searchform"),M(c,"font-size","0.9rem"),M(u,"font-size","0.9rem"),y(h,"type","submit"),y(h,"class","btn btn-primary"),M(h,"margin-right","1rem"),y(g,"id","btnq1"),y(g,"class","btn btn-primary"),M(g,"margin-right","0.5rem"),y(v,"id","btnq2"),y(v,"class","btn btn-primary"),M(v,"margin-left","0.5rem"),M(p,"display","flex"),y(t,"class","btn-container")},m(C,O){E(C,t,O),f(t,n),f(n,r),f(r,s),f(r,o),f(r,i),K(i,e[0]),f(n,a),f(n,c),f(n,l),f(n,u),f(n,d),f(n,p),f(p,h),f(p,b),f(p,g),f(p,T),f(p,v),E(C,k,O),B.m(C,O),E(C,R,O),$||(N=[V(i,"input",e[7]),V(g,"click",e[3]),V(v,"click",e[4]),V(n,"submit",e[2])],$=!0)},p(C,[O]){O&1&&i.value!==C[0]&&K(i,C[0]),U===(U=F(C))&&B?B.p(C,O):(B.d(1),B=U(C),B&&(B.c(),B.m(R.parentNode,R)))},i:G,o:G,d(C){C&&w(t),C&&w(k),B.d(C),C&&w(R),$=!1,be(N)}}}function Rs(e,t,n){let{username:r}=t,s="",o=[];async function i(p){p.preventDefault();const h=new FormData;h.append("search",s);const b=await fetch("/api/games/search",{method:"POST",body:h});n(1,o=await b.json()),console.log(o)}async function a(p){p.preventDefault();const h=new FormData;h.append("search",s);const b=await fetch("/api/games/query1",{method:"POST",body:h});n(1,o=await b.json()),console.log(o)}async function c(p){p.preventDefault();const h=new FormData;h.append("search",s);const b=await fetch("/api/games/query2",{method:"POST",body:h});n(1,o=await b.json()),console.log(o)}async function l(p){console.log("Bookmarking",p);const h=new FormData;h.append("username",r),h.append("gameName",p),await fetch("/api/bookmarks/bookmarkGame",{method:"POST",body:h})}function u(){s=this.value,n(0,s)}const d=p=>l(p.gameName);return e.$$set=p=>{"username"in p&&n(6,r=p.username)},[s,o,i,a,c,l,r,u,d]}class Ns extends ye{constructor(t){super(),_e(this,t,Rs,Os,ge,{username:6})}}function Ps(e){let t,n,r,s,o,i,a,c,l,u,d,p,h,b,g,T,v,k,R;return{c(){t=m("form"),n=m("label"),r=m("p"),r.textContent="username:",s=A(),o=m("input"),i=A(),a=m("label"),c=m("p"),c.textContent="name:",l=A(),u=m("input"),d=A(),p=m("label"),h=m("p"),h.textContent="email:",b=A(),g=m("input"),T=A(),v=m("button"),v.textContent="Sign Up",M(r,"display","inline"),M(r,"padding-right","1em"),y(o,"type","text"),o.required=!0,y(o,"class","svelte-l52ccu"),y(n,"class","svelte-l52ccu"),M(c,"display","inline"),M(c,"padding-right","1em"),y(u,"type","text"),u.required=!0,y(u,"class","svelte-l52ccu"),y(a,"class","svelte-l52ccu"),M(h,"display","inline"),M(h,"padding-right","1em"),y(g,"type","email"),g.required=!0,y(g,"class","svelte-l52ccu"),y(p,"class","svelte-l52ccu"),y(v,"type","submit"),y(v,"class","svelte-l52ccu"),y(t,"class","svelte-l52ccu")},m($,N){E($,t,N),f(t,n),f(n,r),f(n,s),f(n,o),K(o,e[0]),f(t,i),f(t,a),f(a,c),f(a,l),f(a,u),K(u,e[1]),f(t,d),f(t,p),f(p,h),f(p,b),f(p,g),K(g,e[2]),f(t,T),f(t,v),k||(R=[V(o,"input",e[4]),V(u,"input",e[5]),V(g,"input",e[6]),V(t,"submit",e[3])],k=!0)},p($,[N]){N&1&&o.value!==$[0]&&K(o,$[0]),N&2&&u.value!==$[1]&&K(u,$[1]),N&4&&g.value!==$[2]&&K(g,$[2])},i:G,o:G,d($){$&&w(t),k=!1,be(R)}}}function $s(e,t,n){const r=cr();let s="",o="",i="";function a(d){d.preventDefault(),r("submit",{username:s,realName:o,emailAddress:i})}function c(){s=this.value,n(0,s)}function l(){o=this.value,n(1,o)}function u(){i=this.value,n(2,i)}return[s,o,i,a,c,l,u]}class Bs extends ye{constructor(t){super(),_e(this,t,$s,Ps,ge,{})}}function wn(e,t,n){const r=e.slice();return r[9]=t[n],r}function En(e,t,n){const r=e.slice();return r[9]=t[n],r}function Ls(e){let t;return{c(){t=m("p"),t.textContent="No results found.",M(t,"color","darkgray")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function Ms(e){let t,n=e[1].length+"",r,s,o,i,a=e[1],c=[];for(let l=0;l<a.length;l+=1)c[l]=Sn(En(e,a,l));return{c(){t=m("p"),r=L(n),s=L(" bookmarks."),o=A();for(let l=0;l<c.length;l+=1)c[l].c();i=$e(),M(t,"color","darkgray")},m(l,u){E(l,t,u),f(t,r),f(t,s),E(l,o,u);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,u);E(l,i,u)},p(l,u){if(u&2&&n!==(n=l[1].length+"")&&H(r,n),u&18){a=l[1];let d;for(d=0;d<a.length;d+=1){const p=En(l,a,d);c[d]?c[d].p(p,u):(c[d]=Sn(p),c[d].c(),c[d].m(i.parentNode,i))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},d(l){l&&w(t),l&&w(o),ze(c,l),l&&w(i)}}}function vn(e){let t,n,r,s=e[9].finalPrice+"",o;return{c(){t=m("p"),n=m("b"),n.textContent="ON SALE!",r=L(" Discount price: "),o=L(s),M(t,"font-size","0.9rem")},m(i,a){E(i,t,a),f(t,n),f(t,r),f(t,o)},p(i,a){a&2&&s!==(s=i[9].finalPrice+"")&&H(o,s)},d(i){i&&w(t)}}}function Sn(e){let t,n,r,s,o,i,a=e[9].gameName+"",c,l,u,d,p=e[9].metacriticScore+"",h,b,g,T=e[9].shortDescription+"",v,k,R,$,N=e[9].initialPrice+"",F,U,B,C,O,I,j,W,P=e[9].initialPrice!=e[9].finalPrice&&vn(e);function Y(){return e[6](e[9])}return{c(){t=m("img"),s=A(),o=m("p"),i=m("b"),c=L(a),l=A(),u=m("p"),d=L("Metacritic score: "),h=L(p),b=A(),g=m("p"),v=L(T),k=A(),R=m("p"),$=L("Original price: "),F=L(N),U=A(),P&&P.c(),B=A(),C=m("div"),O=m("button"),O.textContent="Remove Bookmark",I=A(),Ne(t.src,n=e[9].image)||y(t,"src",n),y(t,"alt",r=e[9].gameName),M(o,"font-size","0.9rem"),M(u,"font-size","0.9rem"),M(g,"font-size","0.9rem"),M(R,"font-size","0.9rem"),y(O,"id","btn_remove_bookmark"),y(O,"class","btn btn-primary"),M(O,"margin-right","0.5rem"),M(C,"display","flex")},m(S,D){E(S,t,D),E(S,s,D),E(S,o,D),f(o,i),f(i,c),E(S,l,D),E(S,u,D),f(u,d),f(u,h),E(S,b,D),E(S,g,D),f(g,v),E(S,k,D),E(S,R,D),f(R,$),f(R,F),E(S,U,D),P&&P.m(S,D),E(S,B,D),E(S,C,D),f(C,O),f(C,I),j||(W=V(O,"click",Y),j=!0)},p(S,D){e=S,D&2&&!Ne(t.src,n=e[9].image)&&y(t,"src",n),D&2&&r!==(r=e[9].gameName)&&y(t,"alt",r),D&2&&a!==(a=e[9].gameName+"")&&H(c,a),D&2&&p!==(p=e[9].metacriticScore+"")&&H(h,p),D&2&&T!==(T=e[9].shortDescription+"")&&H(v,T),D&2&&N!==(N=e[9].initialPrice+"")&&H(F,N),e[9].initialPrice!=e[9].finalPrice?P?P.p(e,D):(P=vn(e),P.c(),P.m(B.parentNode,B)):P&&(P.d(1),P=null)},d(S){S&&w(t),S&&w(s),S&&w(o),S&&w(l),S&&w(u),S&&w(b),S&&w(g),S&&w(k),S&&w(R),S&&w(U),P&&P.d(S),S&&w(B),S&&w(C),j=!1,W()}}}function Fs(e){let t;return{c(){t=m("p"),t.textContent="No recommendations found.",M(t,"color","darkgray")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function js(e){let t,n=e[2].length+"",r,s,o,i,a=e[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=An(wn(e,a,l));return{c(){t=m("p"),r=L(n),s=L(" recommendations."),o=A();for(let l=0;l<c.length;l+=1)c[l].c();i=$e(),M(t,"color","darkgray")},m(l,u){E(l,t,u),f(t,r),f(t,s),E(l,o,u);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,u);E(l,i,u)},p(l,u){if(u&4&&n!==(n=l[2].length+"")&&H(r,n),u&12){a=l[2];let d;for(d=0;d<a.length;d+=1){const p=wn(l,a,d);c[d]?c[d].p(p,u):(c[d]=An(p),c[d].c(),c[d].m(i.parentNode,i))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},d(l){l&&w(t),l&&w(o),ze(c,l),l&&w(i)}}}function In(e){let t,n,r,s=e[9].finalPrice+"",o;return{c(){t=m("p"),n=m("b"),n.textContent="ON SALE!",r=L(" Discount price: "),o=L(s),M(t,"font-size","0.9rem")},m(i,a){E(i,t,a),f(t,n),f(t,r),f(t,o)},p(i,a){a&4&&s!==(s=i[9].finalPrice+"")&&H(o,s)},d(i){i&&w(t)}}}function An(e){let t,n,r,s,o,i,a=e[9].gameName+"",c,l,u,d,p=e[9].metacriticScore+"",h,b,g,T=e[9].shortDescription+"",v,k,R,$,N=e[9].initialPrice+"",F,U,B,C,O,I,j,W,P=e[9].initialPrice!=e[9].finalPrice&&In(e);function Y(){return e[7](e[9])}return{c(){t=m("img"),s=A(),o=m("p"),i=m("b"),c=L(a),l=A(),u=m("p"),d=L("Metacritic score: "),h=L(p),b=A(),g=m("p"),v=L(T),k=A(),R=m("p"),$=L("Original price: "),F=L(N),U=A(),P&&P.c(),B=A(),C=m("div"),O=m("button"),O.textContent="Add Bookmark",I=A(),Ne(t.src,n=e[9].image)||y(t,"src",n),y(t,"alt",r=e[9].gameName),M(o,"font-size","0.9rem"),M(u,"font-size","0.9rem"),M(g,"font-size","0.9rem"),M(R,"font-size","0.9rem"),y(O,"id","btn_add_bookmark"),y(O,"class","btn btn-primary"),M(O,"margin-right","0.5rem"),M(C,"display","flex")},m(S,D){E(S,t,D),E(S,s,D),E(S,o,D),f(o,i),f(i,c),E(S,l,D),E(S,u,D),f(u,d),f(u,h),E(S,b,D),E(S,g,D),f(g,v),E(S,k,D),E(S,R,D),f(R,$),f(R,F),E(S,U,D),P&&P.m(S,D),E(S,B,D),E(S,C,D),f(C,O),f(C,I),j||(W=V(O,"click",Y),j=!0)},p(S,D){e=S,D&4&&!Ne(t.src,n=e[9].image)&&y(t,"src",n),D&4&&r!==(r=e[9].gameName)&&y(t,"alt",r),D&4&&a!==(a=e[9].gameName+"")&&H(c,a),D&4&&p!==(p=e[9].metacriticScore+"")&&H(h,p),D&4&&T!==(T=e[9].shortDescription+"")&&H(v,T),D&4&&N!==(N=e[9].initialPrice+"")&&H(F,N),e[9].initialPrice!=e[9].finalPrice?P?P.p(e,D):(P=In(e),P.c(),P.m(B.parentNode,B)):P&&(P.d(1),P=null)},d(S){S&&w(t),S&&w(s),S&&w(o),S&&w(l),S&&w(u),S&&w(b),S&&w(g),S&&w(k),S&&w(R),S&&w(U),P&&P.d(S),S&&w(B),S&&w(C),j=!1,W()}}}function Us(e){let t,n,r,s,o,i,a,c,l,u;function d(v,k){return v[1].length>0?Ms:Ls}let p=d(e),h=p(e);function b(v,k){return v[2].length>0?js:Fs}let g=b(e),T=g(e);return{c(){t=m("h3"),t.innerHTML="<p>Bookmarked games</p>",n=A(),r=m("form"),r.innerHTML='<button type="submit">View Bookmarks</button>',s=A(),h.c(),o=A(),i=m("h3"),i.innerHTML="<p>Recommendations based on bookmarks</p>",a=A(),T.c(),c=$e()},m(v,k){E(v,t,k),E(v,n,k),E(v,r,k),E(v,s,k),h.m(v,k),E(v,o,k),E(v,i,k),E(v,a,k),T.m(v,k),E(v,c,k),l||(u=V(r,"submit",e[0]),l=!0)},p(v,[k]){p===(p=d(v))&&h?h.p(v,k):(h.d(1),h=p(v),h&&(h.c(),h.m(o.parentNode,o))),g===(g=b(v))&&T?T.p(v,k):(T.d(1),T=g(v),T&&(T.c(),T.m(c.parentNode,c)))},i:G,o:G,d(v){v&&w(t),v&&w(n),v&&w(r),v&&w(s),h.d(v),v&&w(o),v&&w(i),v&&w(a),T.d(v),v&&w(c),l=!1,u()}}}function xs(e,t,n){let{username:r}=t,s=[],o=[];async function i(p){if(p!=null&&p.preventDefault(),console.log("Getting bookmarks for user",r),!r){console.error("Username is required"),n(1,s=[]),n(2,o=[]);return}const h=await fetch(`/api/bookmarks/${r}`);n(1,s=await h.json()),console.log(s),l()}async function a(p){console.log("Bookmarking",p);const h=new FormData;h.append("username",r),h.append("gameName",p),await fetch("/api/bookmarks/bookmarkGame",{method:"POST",body:h}),i()}async function c(p){if(console.log("Removing bookmarked game",p,"for user",r),!r){console.error("Username is required");return}const h=new FormData;h.append("username",r),h.append("gameName",p);const b=await fetch("/api/bookmarks/removeBookmarkedGame",{method:"POST",body:h});console.log("Remove bookmark response ",b),i()}async function l(){if(console.log("Getting bookmark recommendations for user",r),!r){console.error("Username is required");return}const p=await fetch(`/api/bookmarks/recommendations/${r}`);n(2,o=await p.json()),console.log(o)}const u=p=>c(p.gameName),d=p=>a(p.gameName);return e.$$set=p=>{"username"in p&&n(5,r=p.username)},[i,s,o,a,c,r,u,d]}class Hs extends ye{constructor(t){super(),_e(this,t,xs,Us,ge,{username:5,getBookmarks:0})}get getBookmarks(){return this.$$.ctx[0]}}function zs(e){let t;return{c(){t=m("p"),t.innerHTML="<em>You need to log in to change your username.</em>",M(t,"color","#BB342F"),M(t,"font-size","0.7rem")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function qs(e){let t,n,r,s,o;return{c(){t=m("p"),n=L("Username successfully changed to "),r=m("em"),s=L(e[0]),o=L("."),M(t,"font-size","0.8rem")},m(i,a){E(i,t,a),f(t,n),f(t,r),f(r,s),f(t,o)},p(i,a){a&1&&H(s,i[0])},d(i){i&&w(t)}}}function Vs(e){let t,n,r,s,o,i,a,c,l,u,d;function p(g,T){if(g[2]==1)return qs;if(g[2]==-1)return zs}let h=p(e),b=h&&h(e);return{c(){t=m("form"),n=m("div"),r=m("label"),r.textContent="update username:",s=A(),o=m("input"),i=A(),a=m("button"),a.textContent="Update",c=A(),b&&b.c(),l=$e(),y(r,"for","username"),y(r,"class","svelte-1l9cloy"),y(o,"type","text"),y(o,"id","username"),y(o,"name","username"),o.required=!0,y(o,"class","svelte-1l9cloy"),y(a,"type","submit"),y(a,"class","svelte-1l9cloy"),y(t,"class","svelte-1l9cloy")},m(g,T){E(g,t,T),f(t,n),f(n,r),f(n,s),f(n,o),K(o,e[1]),f(t,i),f(t,a),E(g,c,T),b&&b.m(g,T),E(g,l,T),u||(d=[V(o,"input",e[4]),V(t,"submit",e[3])],u=!0)},p(g,[T]){T&2&&o.value!==g[1]&&K(o,g[1]),h===(h=p(g))&&b?b.p(g,T):(b&&b.d(1),b=h&&h(g),b&&(b.c(),b.m(l.parentNode,l)))},i:G,o:G,d(g){g&&w(t),g&&w(c),b&&b.d(g),g&&w(l),u=!1,be(d)}}}function Ws(e,t,n){let r,{username:s}=t,o=null;async function i(c){if(c.preventDefault(),n(1,o=c.target.username.value.trim()),!o){console.error("New username is required");return}(await fetch(`/api/users/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(n(2,r=1),console.log(`Username updated to ${o}`),n(0,s=o)):(n(2,r=-1),console.error("Failed to update username"))}function a(){o=this.value,n(1,o)}return e.$$set=c=>{"username"in c&&n(0,s=c.username)},n(2,r=0),[s,o,r,i,a]}class Gs extends ye{constructor(t){super(),_e(this,t,Ws,Vs,ge,{username:0})}}function Js(e){let t,n,r;return{c(){t=m("button"),t.textContent="Log Out",y(t,"class","svelte-mpxy6q")},m(s,o){E(s,t,o),n||(r=V(t,"click",e[4]),n=!0)},p:G,d(s){s&&w(t),n=!1,r()}}}function Ks(e){let t;return{c(){t=m("button"),t.textContent="Log In",y(t,"type","submit"),y(t,"class","svelte-mpxy6q")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function Ys(e){let t;return{c(){t=m("p"),t.innerHTML="<em>Username does not exist.</em>",M(t,"color","#BB342F"),M(t,"font-size","0.75rem")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function Xs(e){let t,n,r,s;return{c(){t=m("p"),n=L("✅ Logged in as "),r=m("em"),s=L(e[1])},m(o,i){E(o,t,i),f(t,n),f(t,r),f(r,s)},p(o,i){i&2&&H(s,o[1])},d(o){o&&w(t)}}}function Qs(e){let t,n,r,s,o,i,a,c,l,u,d,p,h,b,g,T,v,k,R;function $(I,j){return I[2]==0||I[2]==-1?Ks:Js}let N=$(e),F=N(e);function U(I,j){if(I[2]==1)return Xs;if(I[2]==-1)return Ys}let B=U(e),C=B&&B(e);c=new Gs({props:{username:e[1]}});let O={username:e[1]};return p=new Hs({props:O}),e[5](p),T=new Ns({props:{username:e[1]}}),{c(){t=m("form"),n=m("div"),n.innerHTML=`<label for="username" class="svelte-mpxy6q">username:</label> 
        <input type="text" id="username" name="username" required="" class="svelte-mpxy6q"/>`,r=A(),F.c(),s=A(),C&&C.c(),o=A(),i=m("h2"),i.textContent="Change Username",a=A(),Se(c.$$.fragment),l=A(),u=m("h2"),u.textContent="Bookmarks",d=A(),Se(p.$$.fragment),h=A(),b=m("h2"),b.textContent="Search",g=A(),Se(T.$$.fragment),y(t,"class","svelte-mpxy6q")},m(I,j){E(I,t,j),f(t,n),f(t,r),F.m(t,null),E(I,s,j),C&&C.m(I,j),E(I,o,j),E(I,i,j),E(I,a,j),ce(c,I,j),E(I,l,j),E(I,u,j),E(I,d,j),ce(p,I,j),E(I,h,j),E(I,b,j),E(I,g,j),ce(T,I,j),v=!0,k||(R=V(t,"submit",e[3]),k=!0)},p(I,[j]){N===(N=$(I))&&F?F.p(I,j):(F.d(1),F=N(I),F&&(F.c(),F.m(t,null))),B===(B=U(I))&&C?C.p(I,j):(C&&C.d(1),C=B&&B(I),C&&(C.c(),C.m(o.parentNode,o)));const W={};j&2&&(W.username=I[1]),c.$set(W);const P={};j&2&&(P.username=I[1]),p.$set(P);const Y={};j&2&&(Y.username=I[1]),T.$set(Y)},i(I){v||(le(c.$$.fragment,I),le(p.$$.fragment,I),le(T.$$.fragment,I),v=!0)},o(I){ve(c.$$.fragment,I),ve(p.$$.fragment,I),ve(T.$$.fragment,I),v=!1},d(I){I&&w(t),F.d(),I&&w(s),C&&C.d(I),I&&w(o),I&&w(i),I&&w(a),ue(c,I),I&&w(l),I&&w(u),I&&w(d),e[5](null),ue(p,I),I&&w(h),I&&w(b),I&&w(g),ue(T,I),k=!1,R()}}}function Zs(e,t,n){let r,s,o;function i(l){l.preventDefault();const u=l.target.username.value.trim();if(!u){console.error("Username is required");return}fetch(`/api/users/${u}`).then(d=>{d.ok?(console.log(`User ${u} found`),n(2,r=1),n(1,s=u)):(n(2,r=-1),console.error(`User ${u} not found`))}).catch(d=>console.error(d))}function a(){n(2,r=0),n(1,s=null)}function c(l){et[l?"unshift":"push"](()=>{o=l,n(0,o)})}return n(2,r=0),n(1,s=null),[o,s,r,i,a,c]}class eo extends ye{constructor(t){super(),_e(this,t,Zs,Qs,ge,{})}}function fr(e,t){return function(){return e.apply(t,arguments)}}const{toString:to}=Object.prototype,{getPrototypeOf:Yt}=Object,at=(e=>t=>{const n=to.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),oe=e=>(e=e.toLowerCase(),t=>at(t)===e),lt=e=>t=>typeof t===e,{isArray:Be}=Array,xe=lt("undefined");function no(e){return e!==null&&!xe(e)&&e.constructor!==null&&!xe(e.constructor)&&se(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dr=oe("ArrayBuffer");function ro(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dr(e.buffer),t}const so=lt("string"),se=lt("function"),pr=lt("number"),Xt=e=>e!==null&&typeof e=="object",oo=e=>e===!0||e===!1,Ye=e=>{if(at(e)!=="object")return!1;const t=Yt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},io=oe("Date"),ao=oe("File"),lo=oe("Blob"),co=oe("FileList"),uo=e=>Xt(e)&&se(e.pipe),fo=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||se(e.append)&&((t=at(e))==="formdata"||t==="object"&&se(e.toString)&&e.toString()==="[object FormData]"))},po=oe("URLSearchParams"),mo=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function qe(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Be(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function mr(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const hr=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),br=e=>!xe(e)&&e!==hr;function Ft(){const{caseless:e}=br(this)&&this||{},t={},n=(r,s)=>{const o=e&&mr(t,s)||s;Ye(t[o])&&Ye(r)?t[o]=Ft(t[o],r):Ye(r)?t[o]=Ft({},r):Be(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&qe(arguments[r],n);return t}const ho=(e,t,n,{allOwnKeys:r}={})=>(qe(t,(s,o)=>{n&&se(s)?e[o]=fr(s,n):e[o]=s},{allOwnKeys:r}),e),bo=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),go=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},_o=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Yt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yo=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wo=e=>{if(!e)return null;if(Be(e))return e;let t=e.length;if(!pr(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Eo=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Yt(Uint8Array)),vo=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},So=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Io=oe("HTMLFormElement"),Ao=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Tn=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),To=oe("RegExp"),gr=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};qe(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Co=e=>{gr(e,(t,n)=>{if(se(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(se(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Do=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return Be(e)?r(e):r(String(e).split(t)),n},ko=()=>{},Oo=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Et="abcdefghijklmnopqrstuvwxyz",Cn="0123456789",_r={DIGIT:Cn,ALPHA:Et,ALPHA_DIGIT:Et+Et.toUpperCase()+Cn},Ro=(e=16,t=_r.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function No(e){return!!(e&&se(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Po=e=>{const t=new Array(10),n=(r,s)=>{if(Xt(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=Be(r)?[]:{};return qe(r,(i,a)=>{const c=n(i,s+1);!xe(c)&&(o[a]=c)}),t[s]=void 0,o}}return r};return n(e,0)},_={isArray:Be,isArrayBuffer:dr,isBuffer:no,isFormData:fo,isArrayBufferView:ro,isString:so,isNumber:pr,isBoolean:oo,isObject:Xt,isPlainObject:Ye,isUndefined:xe,isDate:io,isFile:ao,isBlob:lo,isRegExp:To,isFunction:se,isStream:uo,isURLSearchParams:po,isTypedArray:Eo,isFileList:co,forEach:qe,merge:Ft,extend:ho,trim:mo,stripBOM:bo,inherits:go,toFlatObject:_o,kindOf:at,kindOfTest:oe,endsWith:yo,toArray:wo,forEachEntry:vo,matchAll:So,isHTMLForm:Io,hasOwnProperty:Tn,hasOwnProp:Tn,reduceDescriptors:gr,freezeMethods:Co,toObjectSet:Do,toCamelCase:Ao,noop:ko,toFiniteNumber:Oo,findKey:mr,global:hr,isContextDefined:br,ALPHABET:_r,generateString:Ro,isSpecCompliantForm:No,toJSONObject:Po};function x(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}_.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const yr=x.prototype,wr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wr[e]={value:e}});Object.defineProperties(x,wr);Object.defineProperty(yr,"isAxiosError",{value:!0});x.from=(e,t,n,r,s,o)=>{const i=Object.create(yr);return _.toFlatObject(e,i,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),x.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const $o=null;function jt(e){return _.isPlainObject(e)||_.isArray(e)}function Er(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Dn(e,t,n){return e?e.concat(t).map(function(s,o){return s=Er(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Bo(e){return _.isArray(e)&&!e.some(jt)}const Lo=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function ct(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,T){return!_.isUndefined(T[g])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(b){if(b===null)return"";if(_.isDate(b))return b.toISOString();if(!c&&_.isBlob(b))throw new x("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(b)||_.isTypedArray(b)?c&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,g,T){let v=b;if(b&&!T&&typeof b=="object"){if(_.endsWith(g,"{}"))g=r?g:g.slice(0,-2),b=JSON.stringify(b);else if(_.isArray(b)&&Bo(b)||(_.isFileList(b)||_.endsWith(g,"[]"))&&(v=_.toArray(b)))return g=Er(g),v.forEach(function(R,$){!(_.isUndefined(R)||R===null)&&t.append(i===!0?Dn([g],$,o):i===null?g:g+"[]",l(R))}),!1}return jt(b)?!0:(t.append(Dn(T,g,o),l(b)),!1)}const d=[],p=Object.assign(Lo,{defaultVisitor:u,convertValue:l,isVisitable:jt});function h(b,g){if(!_.isUndefined(b)){if(d.indexOf(b)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(b),_.forEach(b,function(v,k){(!(_.isUndefined(v)||v===null)&&s.call(t,v,_.isString(k)?k.trim():k,g,p))===!0&&h(v,g?g.concat(k):[k])}),d.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return h(e),t}function kn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Qt(e,t){this._pairs=[],e&&ct(e,this,t)}const vr=Qt.prototype;vr.append=function(t,n){this._pairs.push([t,n])};vr.toString=function(t){const n=t?function(r){return t.call(this,r,kn)}:kn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mo(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Sr(e,t,n){if(!t)return e;const r=n&&n.encode||Mo,s=n&&n.serialize;let o;if(s?o=s(t,n):o=_.isURLSearchParams(t)?t.toString():new Qt(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Fo{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const On=Fo,Ir={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},jo=typeof URLSearchParams<"u"?URLSearchParams:Qt,Uo=typeof FormData<"u"?FormData:null,xo=typeof Blob<"u"?Blob:null,Ho=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),zo=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ne={isBrowser:!0,classes:{URLSearchParams:jo,FormData:Uo,Blob:xo},isStandardBrowserEnv:Ho,isStandardBrowserWebWorkerEnv:zo,protocols:["http","https","file","blob","url","data"]};function qo(e,t){return ct(e,new ne.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return ne.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Vo(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wo(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ar(e){function t(n,r,s,o){let i=n[o++];const a=Number.isFinite(+i),c=o>=n.length;return i=!i&&_.isArray(s)?s.length:i,c?(_.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!_.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&_.isArray(s[i])&&(s[i]=Wo(s[i])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,s)=>{t(Vo(r),s,n,0)}),n}return null}const Go={"Content-Type":void 0};function Jo(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ut={transitional:Ir,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=_.isObject(t);if(o&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return s&&s?JSON.stringify(Ar(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qo(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ct(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Jo(t)):t}],transformResponse:[function(t){const n=this.transitional||ut.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?x.from(a,x.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ne.classes.FormData,Blob:ne.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){ut.headers[t]={}});_.forEach(["post","put","patch"],function(t){ut.headers[t]=_.merge(Go)});const Zt=ut,Ko=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yo=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Ko[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Rn=Symbol("internals");function Me(e){return e&&String(e).trim().toLowerCase()}function Xe(e){return e===!1||e==null?e:_.isArray(e)?e.map(Xe):String(e)}function Xo(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qo=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function vt(e,t,n,r,s){if(_.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Zo(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ei(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ft{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,c,l){const u=Me(c);if(!u)throw new Error("header name must be a non-empty string");const d=_.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Xe(a))}const i=(a,c)=>_.forEach(a,(l,u)=>o(l,u,c));return _.isPlainObject(t)||t instanceof this.constructor?i(t,n):_.isString(t)&&(t=t.trim())&&!Qo(t)?i(Yo(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Me(t),t){const r=_.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xo(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Me(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||vt(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=Me(i),i){const a=_.findKey(r,i);a&&(!n||vt(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||vt(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return _.forEach(this,(s,o)=>{const i=_.findKey(r,o);if(i){n[i]=Xe(s),delete n[o];return}const a=t?Zo(o):String(o).trim();a!==o&&delete n[o],n[a]=Xe(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Rn]=this[Rn]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=Me(i);r[a]||(ei(s,i),r[a]=!0)}return _.isArray(t)?t.forEach(o):o(t),this}}ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods(ft.prototype);_.freezeMethods(ft);const re=ft;function St(e,t){const n=this||Zt,r=t||n,s=re.from(r.headers);let o=r.data;return _.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Tr(e){return!!(e&&e.__CANCEL__)}function Ve(e,t,n){x.call(this,e??"canceled",x.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(Ve,x,{__CANCEL__:!0});function ti(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new x("Request failed with status code "+n.status,[x.ERR_BAD_REQUEST,x.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ni=ne.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,a){const c=[];c.push(n+"="+encodeURIComponent(r)),_.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),_.isString(o)&&c.push("path="+o),_.isString(i)&&c.push("domain="+i),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ri(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function si(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Cr(e,t){return e&&!ri(t)?si(e,t):t}const oi=ne.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const a=_.isString(i)?s(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function ii(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ai(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[o];i||(i=l),n[s]=c,r[s]=l;let d=o,p=0;for(;d!==s;)p+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const h=u&&l-u;return h?Math.round(p*1e3/h):void 0}}function Nn(e,t){let n=0;const r=ai(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-n,c=r(a),l=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&l?(i-o)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const li=typeof XMLHttpRequest<"u",ci=li&&function(e){return new Promise(function(n,r){let s=e.data;const o=re.from(e.headers).normalize(),i=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}_.isFormData(s)&&(ne.isStandardBrowserEnv||ne.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+b))}const u=Cr(e.baseURL,e.url);l.open(e.method.toUpperCase(),Sr(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function d(){if(!l)return;const h=re.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:h,config:e,request:l};ti(function(v){n(v),c()},function(v){r(v),c()},g),l=null}if("onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(r(new x("Request aborted",x.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new x("Network Error",x.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||Ir;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new x(b,g.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,e,l)),l=null},ne.isStandardBrowserEnv){const h=(e.withCredentials||oi(u))&&e.xsrfCookieName&&ni.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&_.forEach(o.toJSON(),function(b,g){l.setRequestHeader(g,b)}),_.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Nn(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Nn(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=h=>{l&&(r(!h||h.type?new Ve(null,e,l):h),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=ii(u);if(p&&ne.protocols.indexOf(p)===-1){r(new x("Unsupported protocol "+p+":",x.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Qe={http:$o,xhr:ci};_.forEach(Qe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ui={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=_.isString(n)?Qe[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new x(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(Qe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Qe};function It(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ve(null,e)}function Pn(e){return It(e),e.headers=re.from(e.headers),e.data=St.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ui.getAdapter(e.adapter||Zt.adapter)(e).then(function(r){return It(e),r.data=St.call(e,e.transformResponse,r),r.headers=re.from(r.headers),r},function(r){return Tr(r)||(It(e),r&&r.response&&(r.response.data=St.call(e,e.transformResponse,r.response),r.response.headers=re.from(r.response.headers))),Promise.reject(r)})}const $n=e=>e instanceof re?e.toJSON():e;function Pe(e,t){t=t||{};const n={};function r(l,u,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function o(l,u){if(!_.isUndefined(u))return r(void 0,u)}function i(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const c={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(l,u)=>s($n(l),$n(u),!0)};return _.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const d=c[u]||s,p=d(e[u],t[u],u);_.isUndefined(p)&&d!==a||(n[u]=p)}),n}const Dr="1.3.6",en={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{en[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Bn={};en.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Dr+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new x(s(i," has been removed"+(n?" in "+n:"")),x.ERR_DEPRECATED);return n&&!Bn[i]&&(Bn[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};function fi(e,t,n){if(typeof e!="object")throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],c=a===void 0||i(a,o,e);if(c!==!0)throw new x("option "+o+" must be "+c,x.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new x("Unknown option "+o,x.ERR_BAD_OPTION)}}const Ut={assertOptions:fi,validators:en},ae=Ut.validators;class nt{constructor(t){this.defaults=t,this.interceptors={request:new On,response:new On}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Pe(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Ut.assertOptions(r,{silentJSONParsing:ae.transitional(ae.boolean),forcedJSONParsing:ae.transitional(ae.boolean),clarifyTimeoutError:ae.transitional(ae.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Ut.assertOptions(s,{encode:ae.function,serialize:ae.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&_.merge(o.common,o[n.method]),i&&_.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),n.headers=re.concat(i,o);const a=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(c=c&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let u,d=0,p;if(!c){const b=[Pn.bind(this),void 0];for(b.unshift.apply(b,a),b.push.apply(b,l),p=b.length,u=Promise.resolve(n);d<p;)u=u.then(b[d++],b[d++]);return u}p=a.length;let h=n;for(d=0;d<p;){const b=a[d++],g=a[d++];try{h=b(h)}catch(T){g.call(this,T);break}}try{u=Pn.call(this,h)}catch(b){return Promise.reject(b)}for(d=0,p=l.length;d<p;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=Pe(this.defaults,t);const n=Cr(t.baseURL,t.url);return Sr(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){nt.prototype[t]=function(n,r){return this.request(Pe(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(Pe(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}nt.prototype[t]=n(),nt.prototype[t+"Form"]=n(!0)});const Ze=nt;class tn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new Ve(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new tn(function(s){t=s}),cancel:t}}}const di=tn;function pi(e){return function(n){return e.apply(null,n)}}function mi(e){return _.isObject(e)&&e.isAxiosError===!0}const xt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xt).forEach(([e,t])=>{xt[t]=e});const hi=xt;function kr(e){const t=new Ze(e),n=fr(Ze.prototype.request,t);return _.extend(n,Ze.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return kr(Pe(e,s))},n}const J=kr(Zt);J.Axios=Ze;J.CanceledError=Ve;J.CancelToken=di;J.isCancel=Tr;J.VERSION=Dr;J.toFormData=ct;J.AxiosError=x;J.Cancel=J.CanceledError;J.all=function(t){return Promise.all(t)};J.spread=pi;J.isAxiosError=mi;J.mergeConfig=Pe;J.AxiosHeaders=re;J.formToJSON=e=>Ar(_.isHTMLForm(e)?new FormData(e):e);J.HttpStatusCode=hi;J.default=J;const bi=J;function Ln(e,t,n){const r=e.slice();return r[1]=t[n].gameName,r[2]=t[n].gameGenre,r[3]=t[n].releaseDate,r[4]=t[n].old_price,r[5]=t[n].new_price,r[6]=t[n].lowest_price,r}function Mn(e){let t,n,r=e[1]+"",s,o,i,a=e[2]+"",c,l,u,d=e[3]+"",p,h,b,g=e[4]+"",T,v,k,R=e[5]+"",$,N,F,U=e[6]+"",B,C;return{c(){t=m("tr"),n=m("td"),s=L(r),o=A(),i=m("td"),c=L(a),l=A(),u=m("td"),p=L(d),h=A(),b=m("td"),T=L(g),v=A(),k=m("td"),$=L(R),N=A(),F=m("td"),B=L(U),C=A(),y(n,"class","svelte-hxl0cg"),y(i,"class","svelte-hxl0cg"),y(u,"class","svelte-hxl0cg"),y(b,"class","svelte-hxl0cg"),y(k,"class","svelte-hxl0cg"),y(F,"class","svelte-hxl0cg")},m(O,I){E(O,t,I),f(t,n),f(n,s),f(t,o),f(t,i),f(i,c),f(t,l),f(t,u),f(u,p),f(t,h),f(t,b),f(b,T),f(t,v),f(t,k),f(k,$),f(t,N),f(t,F),f(F,B),f(t,C)},p(O,I){I&1&&r!==(r=O[1]+"")&&H(s,r),I&1&&a!==(a=O[2]+"")&&H(c,a),I&1&&d!==(d=O[3]+"")&&H(p,d),I&1&&g!==(g=O[4]+"")&&H(T,g),I&1&&R!==(R=O[5]+"")&&H($,R),I&1&&U!==(U=O[6]+"")&&H(B,U)},d(O){O&&w(t)}}}function gi(e){let t,n,r,s,o,i=e[0],a=[];for(let c=0;c<i.length;c+=1)a[c]=Mn(Ln(e,i,c));return{c(){t=m("div"),n=m("table"),r=m("thead"),r.innerHTML=`<tr><th class="svelte-hxl0cg">Game Name</th> 
                <th class="svelte-hxl0cg">Genre</th> 
                <th class="svelte-hxl0cg">Release Date</th> 
                <th class="svelte-hxl0cg">Old Price</th> 
                <th class="svelte-hxl0cg">New Price</th> 
                <th class="svelte-hxl0cg">Lowest Ever Price</th></tr>`,s=A(),o=m("tbody");for(let c=0;c<a.length;c+=1)a[c].c();y(n,"class","svelte-hxl0cg"),y(t,"class","results-container svelte-hxl0cg")},m(c,l){E(c,t,l),f(t,n),f(n,r),f(n,s),f(n,o);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(o,null)},p(c,[l]){if(l&1){i=c[0];let u;for(u=0;u<i.length;u+=1){const d=Ln(c,i,u);a[u]?a[u].p(d,l):(a[u]=Mn(d),a[u].c(),a[u].m(o,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=i.length}},i:G,o:G,d(c){c&&w(t),ze(a,c)}}}function _i(e,t,n){let{results:r=[]}=t;return e.$$set=s=>{"results"in s&&n(0,r=s.results)},[r]}class yi extends ye{constructor(t){super(),_e(this,t,_i,gi,ge,{results:0})}}function wi(e){let t,n,r,s,o,i,a,c,l,u,d,p,h,b,g,T,v,k,R,$,N,F,U,B,C,O,I,j,W,P,Y,S,D,te,un,Q,fn,Le,bt,We,gt,ie,_t,Ge,yt,dn;function ps(z){e[11](z)}let pn={};return e[4]!==void 0&&(pn.results=e[4]),ie=new yi({props:pn}),et.push(()=>Ts(ie,"results",ps)),{c(){t=m("div"),n=m("h2"),n.textContent="Apply Discount",r=A(),s=m("form"),o=m("label"),o.textContent="Genre:",i=A(),a=m("select"),c=m("option"),c.textContent="Select genre",l=m("option"),l.textContent="NonGame",u=m("option"),u.textContent="Indie",d=m("option"),d.textContent="Action",p=m("option"),p.textContent="Adventure",h=m("option"),h.textContent="Casual",b=m("option"),b.textContent="Strategy",g=m("option"),g.textContent="RPG",T=m("option"),T.textContent="Simulation",v=m("option"),v.textContent="Early Access",k=m("option"),k.textContent="Free to Play",R=m("option"),R.textContent="Sports",$=m("option"),$.textContent="Racing",N=m("option"),N.textContent="Massively Multiplayer",F=A(),U=m("label"),U.textContent="Release Date (Month Date Year):",B=A(),C=m("input"),O=A(),I=m("label"),I.textContent="Game Name:",j=A(),W=m("input"),P=A(),Y=m("label"),Y.textContent="Discount Rate:",S=A(),D=m("div"),te=m("input"),un=A(),Q=m("input"),fn=A(),Le=m("button"),Le.textContent="Apply Discount",bt=A(),We=m("h2"),We.textContent="Discount Results",gt=A(),Se(ie.$$.fragment),y(o,"for","genre"),y(o,"class","svelte-1leaywn"),c.__value="",c.value=c.__value,l.__value="NonGame",l.value=l.__value,u.__value="Indie",u.value=u.__value,d.__value="Action",d.value=d.__value,p.__value="Adventure",p.value=p.__value,h.__value="Casual",h.value=h.__value,b.__value="Strategy",b.value=b.__value,g.__value="RPG",g.value=g.__value,T.__value="Simulation",T.value=T.__value,v.__value="Early Access",v.value=v.__value,k.__value="Free to Play",k.value=k.__value,R.__value="Sports",R.value=R.__value,$.__value="Racing",$.value=$.__value,N.__value="Massively Multiplayer",N.value=N.__value,y(a,"id","genre"),a.required=!0,y(a,"class","svelte-1leaywn"),e[0]===void 0&&tt(()=>e[6].call(a)),y(U,"for","releaseDate"),y(U,"class","svelte-1leaywn"),y(C,"type","text"),y(C,"id","releaseDate"),y(C,"placeholder","e.g. Aug 25 2009"),y(C,"class","svelte-1leaywn"),y(I,"for","gameName"),y(I,"class","svelte-1leaywn"),y(W,"type","text"),y(W,"id","gameName"),y(W,"class","svelte-1leaywn"),y(Y,"for","discountRate"),y(Y,"class","svelte-1leaywn"),y(te,"type","range"),y(te,"id","discountSlider"),y(te,"min","0"),y(te,"max","1"),y(te,"step","0.01"),y(Q,"type","number"),y(Q,"id","discountRate"),y(Q,"min","0"),y(Q,"max","1"),y(Q,"step","0.01"),Q.required=!0,y(Q,"class","svelte-1leaywn"),y(D,"class","discount-slider"),y(Le,"type","submit"),y(Le,"class","svelte-1leaywn")},m(z,ee){E(z,t,ee),f(t,n),f(t,r),f(t,s),f(s,o),f(s,i),f(s,a),f(a,c),f(a,l),f(a,u),f(a,d),f(a,p),f(a,h),f(a,b),f(a,g),f(a,T),f(a,v),f(a,k),f(a,R),f(a,$),f(a,N),bn(a,e[0],!0),f(s,F),f(s,U),f(s,B),f(s,C),K(C,e[1]),f(s,O),f(s,I),f(s,j),f(s,W),K(W,e[2]),f(s,P),f(s,Y),f(s,S),f(s,D),f(D,te),K(te,e[3]),f(D,un),f(D,Q),K(Q,e[3]),f(s,fn),f(s,Le),E(z,bt,ee),E(z,We,ee),E(z,gt,ee),ce(ie,z,ee),Ge=!0,yt||(dn=[V(a,"change",e[6]),V(C,"input",e[7]),V(W,"input",e[8]),V(te,"change",e[9]),V(te,"input",e[9]),V(Q,"input",e[10]),V(s,"submit",hs(e[5]))],yt=!0)},p(z,[ee]){ee&1&&bn(a,z[0]),ee&2&&C.value!==z[1]&&K(C,z[1]),ee&4&&W.value!==z[2]&&K(W,z[2]),ee&8&&K(te,z[3]),ee&8&&Bt(Q.value)!==z[3]&&K(Q,z[3]);const mn={};!_t&&ee&16&&(_t=!0,mn.results=z[4],vs(()=>_t=!1)),ie.$set(mn)},i(z){Ge||(le(ie.$$.fragment,z),Ge=!0)},o(z){ve(ie.$$.fragment,z),Ge=!1},d(z){z&&w(t),z&&w(bt),z&&w(We),z&&w(gt),ue(ie,z),yt=!1,be(dn)}}}function Ei(e,t,n){cr();let r="",s="",o="",i=0,a=[];async function c(){try{const g=await bi.post("/api/games/apply-discount",null,{params:{genre:r,releaseDate:s,gameName:o,discountRate:i},headers:{"Content-Type":"application/x-www-form-urlencoded"}});n(4,a=g.data)}catch(g){console.error("Error applying discount:",g),alert("Error applying discount. Please try again.")}}function l(){r=gs(this),n(0,r)}function u(){s=this.value,n(1,s)}function d(){o=this.value,n(2,o)}function p(){i=Bt(this.value),n(3,i)}function h(){i=Bt(this.value),n(3,i)}function b(g){a=g,n(4,a)}return[r,s,o,i,a,c,l,u,d,p,h,b]}class vi extends ye{constructor(t){super(),_e(this,t,Ei,wi,ge,{})}}function Fn(e,t,n){const r=e.slice();return r[5]=t[n],r}function Si(e){let t;return{c(){t=m("p"),t.textContent="No users found 😢",M(t,"color","darkgray")},m(n,r){E(n,t,r)},p:G,d(n){n&&w(t)}}}function Ii(e){let t,n,r,s,o=e[0],i=[];for(let a=0;a<o.length;a+=1)i[a]=jn(Fn(e,o,a));return{c(){t=m("table"),n=m("thead"),n.innerHTML=`<tr><th class="element svelte-13uy8s4">Username</th> 
            <th class="element svelte-13uy8s4">Name</th> 
            <th class="element svelte-13uy8s4">Email</th> 
            <th></th></tr>`,r=A(),s=m("tbody");for(let a=0;a<i.length;a+=1)i[a].c();y(t,"class","svelte-13uy8s4")},m(a,c){E(a,t,c),f(t,n),f(t,r),f(t,s);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(s,null)},p(a,c){if(c&5){o=a[0];let l;for(l=0;l<o.length;l+=1){const u=Fn(a,o,l);i[l]?i[l].p(u,c):(i[l]=jn(u),i[l].c(),i[l].m(s,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=o.length}},d(a){a&&w(t),ze(i,a)}}}function jn(e){let t,n,r=e[5].username+"",s,o,i,a=e[5].realName+"",c,l,u,d=e[5].emailAddress+"",p,h,b,g,T,v,k;function R(){return e[3](e[5])}return{c(){t=m("tr"),n=m("td"),s=L(r),o=A(),i=m("td"),c=L(a),l=A(),u=m("td"),p=L(d),h=A(),b=m("td"),g=m("button"),g.textContent="❌",T=A(),y(n,"class","element svelte-13uy8s4"),y(i,"class","element svelte-13uy8s4"),y(u,"class","element svelte-13uy8s4")},m($,N){E($,t,N),f(t,n),f(n,s),f(t,o),f(t,i),f(i,c),f(t,l),f(t,u),f(u,p),f(t,h),f(t,b),f(b,g),f(t,T),v||(k=V(g,"click",R),v=!0)},p($,N){e=$,N&1&&r!==(r=e[5].username+"")&&H(s,r),N&1&&a!==(a=e[5].realName+"")&&H(c,a),N&1&&d!==(d=e[5].emailAddress+"")&&H(p,d)},d($){$&&w(t),v=!1,k()}}}function Ai(e){let t,n,r,s,o,i,a,c,l,u,d,p,h,b,g,T,v,k,R,$,N,F;a=new Bs({}),a.$on("submit",e[1]);function U(O,I){return O[0].length>0?Ii:Si}let B=U(e),C=B(e);return T=new eo({}),N=new vi({}),{c(){t=m("main"),n=m("div"),n.innerHTML=`<h1>STEEM</h1> 
    <a href="/"><img style="display: inline-block;" id="logo" src="/logo.png" alt="bad-logo"/></a>`,r=A(),s=m("div"),o=m("h2"),o.textContent="Registration",i=A(),Se(a.$$.fragment),c=A(),l=m("div"),u=m("h2"),u.textContent="Users",d=A(),C.c(),p=A(),h=m("div"),b=m("h2"),b.textContent="Login",g=A(),Se(T.$$.fragment),v=A(),k=m("div"),R=m("h2"),R.textContent="Discount",$=A(),Se(N.$$.fragment),y(n,"class","top-bar"),y(s,"class","card"),y(l,"class","card"),y(h,"class","card"),y(k,"class","card")},m(O,I){E(O,t,I),f(t,n),f(t,r),f(t,s),f(s,o),f(s,i),ce(a,s,null),f(t,c),f(t,l),f(l,u),f(l,d),C.m(l,null),f(t,p),f(t,h),f(h,b),f(h,g),ce(T,h,null),f(t,v),f(t,k),f(k,R),f(k,$),ce(N,k,null),F=!0},p(O,[I]){B===(B=U(O))&&C?C.p(O,I):(C.d(1),C=B(O),C&&(C.c(),C.m(l,null)))},i(O){F||(le(a.$$.fragment,O),le(T.$$.fragment,O),le(N.$$.fragment,O),F=!0)},o(O){ve(a.$$.fragment,O),ve(T.$$.fragment,O),ve(N.$$.fragment,O),F=!1},d(O){O&&w(t),ue(a),C.d(),ue(T),ue(N)}}}function Ti(e,t,n){let r=[];ys(async()=>{const c=await fetch("/api/users");n(0,r=await c.json())});function s(c){fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.detail)}).then(l=>l.text()).then(l=>{console.log(l),i()}).catch(l=>console.error(l))}function o(c){confirm("Are you sure you want to delete this user?")&&fetch("/api/users/"+c,{method:"DELETE"}).then(l=>{l.ok?n(0,r=r.filter(u=>u.username!==c)):console.error("Failed to delete user")}).catch(l=>console.error(l))}function i(){fetch("/api/users").then(c=>c.json()).then(c=>{n(0,r=c)}).catch(c=>console.error(c))}return i(),[r,s,o,c=>o(c.username)]}class Ci extends ye{constructor(t){super(),_e(this,t,Ti,Ai,ge,{})}}new Ci({target:document.getElementById("app")});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Di=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,h=l&63;c||(h=64,i||(p=64)),r.push(n[u],n[d],n[p],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Or(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Di(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||d==null)throw new ki;const p=o<<2|a>>4;if(r.push(p),l!==64){const h=a<<4&240|l>>2;if(r.push(h),d!==64){const b=l<<6&192|d;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ki extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oi=function(e){const t=Or(e);return Rr.encodeByteArray(t,!0)},Nr=function(e){return Oi(e).replace(/\./g,"")},Ri=function(e){try{return Rr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=()=>Ni().__FIREBASE_DEFAULTS__,$i=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bi=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ri(e[1]);return t&&JSON.parse(t)},Li=()=>{try{return Pi()||$i()||Bi()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pr=()=>{var e;return(e=Li())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Fi(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $r(){try{return typeof indexedDB=="object"}catch{return!1}}function Br(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function ji(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="FirebaseError";class De extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ui,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dt.prototype.create)}}class dt{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?xi(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new De(s,a,r)}}function xi(e,t){return e.replace(Hi,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Hi=/\{\$([^}]+)}/g;function rt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Un(o)&&Un(i)){if(!rt(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Un(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=1e3,qi=2,Vi=4*60*60*1e3,Wi=.5;function xn(e,t=zi,n=qi){const r=t*Math.pow(n,e),s=Math.round(Wi*r*(Math.random()-.5)*2);return Math.min(Vi,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e){return e&&e._delegate?e._delegate:e}class he{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Mi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ki(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ji(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ji(e){return e===we?void 0:e}function Ki(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gi(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));const Xi={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Qi=q.INFO,Zi={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},ea=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Zi[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mr{constructor(t){this.name=t,this._logLevel=Qi,this._logHandler=ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xi[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const ta=(e,t)=>t.some(n=>e instanceof n);let Hn,zn;function na(){return Hn||(Hn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ra(){return zn||(zn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fr=new WeakMap,Ht=new WeakMap,jr=new WeakMap,At=new WeakMap,nn=new WeakMap;function sa(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(fe(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Fr.set(n,e)}).catch(()=>{}),nn.set(t,e),t}function oa(e){if(Ht.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Ht.set(e,t)}let zt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ht.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ia(e){zt=e(zt)}function aa(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Tt(this),t,...n);return jr.set(r,t.sort?t.sort():[t]),fe(r)}:ra().includes(e)?function(...t){return e.apply(Tt(this),t),fe(Fr.get(this))}:function(...t){return fe(e.apply(Tt(this),t))}}function la(e){return typeof e=="function"?aa(e):(e instanceof IDBTransaction&&oa(e),ta(e,na())?new Proxy(e,zt):e)}function fe(e){if(e instanceof IDBRequest)return sa(e);if(At.has(e))return At.get(e);const t=la(e);return t!==e&&(At.set(e,t),nn.set(t,e)),t}const Tt=e=>nn.get(e);function ca(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=fe(i);return r&&i.addEventListener("upgradeneeded",c=>{r(fe(i.result),c.oldVersion,c.newVersion,fe(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ua=["get","getKey","getAll","getAllKeys","count"],fa=["put","add","delete","clear"],Ct=new Map;function qn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ct.get(t))return Ct.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=fa.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ua.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ct.set(t,o),o}ia(e=>({...e,get:(t,n,r)=>qn(t,n)||e.get(t,n,r),has:(t,n)=>!!qn(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pa(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qt="@firebase/app",Vn="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Mr("@firebase/app"),ma="@firebase/app-compat",ha="@firebase/analytics-compat",ba="@firebase/analytics",ga="@firebase/app-check-compat",_a="@firebase/app-check",ya="@firebase/auth",wa="@firebase/auth-compat",Ea="@firebase/database",va="@firebase/database-compat",Sa="@firebase/functions",Ia="@firebase/functions-compat",Aa="@firebase/installations",Ta="@firebase/installations-compat",Ca="@firebase/messaging",Da="@firebase/messaging-compat",ka="@firebase/performance",Oa="@firebase/performance-compat",Ra="@firebase/remote-config",Na="@firebase/remote-config-compat",Pa="@firebase/storage",$a="@firebase/storage-compat",Ba="@firebase/firestore",La="@firebase/firestore-compat",Ma="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]",Fa={[qt]:"fire-core",[ma]:"fire-core-compat",[ba]:"fire-analytics",[ha]:"fire-analytics-compat",[_a]:"fire-app-check",[ga]:"fire-app-check-compat",[ya]:"fire-auth",[wa]:"fire-auth-compat",[Ea]:"fire-rtdb",[va]:"fire-rtdb-compat",[Sa]:"fire-fn",[Ia]:"fire-fn-compat",[Aa]:"fire-iid",[Ta]:"fire-iid-compat",[Ca]:"fire-fcm",[Da]:"fire-fcm-compat",[ka]:"fire-perf",[Oa]:"fire-perf-compat",[Ra]:"fire-rc",[Na]:"fire-rc-compat",[Pa]:"fire-gcs",[$a]:"fire-gcs-compat",[Ba]:"fire-fst",[La]:"fire-fst-compat","fire-js":"fire-js",[Ma]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Map,Wt=new Map;function ja(e,t){try{e.container.addComponent(t)}catch(n){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ae(e){const t=e.name;if(Wt.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;Wt.set(t,e);for(const n of st.values())ja(n,e);return!0}function pt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new dt("app","Firebase",Ua);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new he("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}function Ur(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vt,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw de.create("bad-app-name",{appName:String(s)});if(n||(n=Pr()),!n)throw de.create("no-options");const o=st.get(s);if(o){if(rt(n,o.options)&&rt(r,o.config))return o;throw de.create("duplicate-app",{appName:s})}const i=new Yi(s);for(const c of Wt.values())i.addComponent(c);const a=new xa(n,r,i);return st.set(s,a),a}function Ha(e=Vt){const t=st.get(e);if(!t&&e===Vt&&Pr())return Ur();if(!t)throw de.create("no-app",{appName:e});return t}function pe(e,t,n){var r;let s=(r=Fa[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ie.warn(a.join(" "));return}Ae(new he(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="firebase-heartbeat-database",qa=1,He="firebase-heartbeat-store";let Dt=null;function xr(){return Dt||(Dt=ca(za,qa,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(He)}}}).catch(e=>{throw de.create("idb-open",{originalErrorMessage:e.message})})),Dt}async function Va(e){try{return await(await xr()).transaction(He).objectStore(He).get(Hr(e))}catch(t){if(t instanceof De)Ie.warn(t.message);else{const n=de.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(n.message)}}}async function Wn(e,t){try{const r=(await xr()).transaction(He,"readwrite");await r.objectStore(He).put(t,Hr(e)),await r.done}catch(n){if(n instanceof De)Ie.warn(n.message);else{const r=de.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ie.warn(r.message)}}}function Hr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=1024,Ga=30*24*60*60*1e3;class Ja{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ya(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Ga}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gn(),{heartbeatsToSend:n,unsentEntries:r}=Ka(this._heartbeatsCache.heartbeats),s=Nr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gn(){return new Date().toISOString().substring(0,10)}function Ka(e,t=Wa){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Jn(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ya{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $r()?Br().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Va(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wn(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wn(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Jn(e){return Nr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e){Ae(new he("platform-logger",t=>new da(t),"PRIVATE")),Ae(new he("heartbeat",t=>new Ja(t),"PRIVATE")),pe(qt,Vn,e),pe(qt,Vn,"esm2017"),pe("fire-js","")}Xa("");var Qa="firebase",Za="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Qa,Za,"app");const el=(e,t)=>t.some(n=>e instanceof n);let Kn,Yn;function tl(){return Kn||(Kn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nl(){return Yn||(Yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zr=new WeakMap,Gt=new WeakMap,qr=new WeakMap,kt=new WeakMap,rn=new WeakMap;function rl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(me(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&zr.set(n,e)}).catch(()=>{}),rn.set(t,e),t}function sl(e){if(Gt.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Gt.set(e,t)}let Jt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Gt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ol(e){Jt=e(Jt)}function il(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ot(this),t,...n);return qr.set(r,t.sort?t.sort():[t]),me(r)}:nl().includes(e)?function(...t){return e.apply(Ot(this),t),me(zr.get(this))}:function(...t){return me(e.apply(Ot(this),t))}}function al(e){return typeof e=="function"?il(e):(e instanceof IDBTransaction&&sl(e),el(e,tl())?new Proxy(e,Jt):e)}function me(e){if(e instanceof IDBRequest)return rl(e);if(kt.has(e))return kt.get(e);const t=al(e);return t!==e&&(kt.set(e,t),rn.set(t,e)),t}const Ot=e=>rn.get(e);function ll(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=me(i);return r&&i.addEventListener("upgradeneeded",c=>{r(me(i.result),c.oldVersion,c.newVersion,me(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const cl=["get","getKey","getAll","getAllKeys","count"],ul=["put","add","delete","clear"],Rt=new Map;function Xn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rt.get(t))return Rt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ul.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cl.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Rt.set(t,o),o}ol(e=>({...e,get:(t,n,r)=>Xn(t,n)||e.get(t,n,r),has:(t,n)=>!!Xn(t,n)||e.has(t,n)}));const Vr="@firebase/installations",sn="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=1e4,Gr=`w:${sn}`,Jr="FIS_v2",fl="https://firebaseinstallations.googleapis.com/v1",dl=60*60*1e3,pl="installations",ml="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Te=new dt(pl,ml,hl);function Kr(e){return e instanceof De&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr({projectId:e}){return`${fl}/projects/${e}/installations`}function Xr(e){return{token:e.token,requestStatus:2,expiresIn:gl(e.expiresIn),creationTime:Date.now()}}async function Qr(e,t){const r=(await t.json()).error;return Te.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zr({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function bl(e,{refreshToken:t}){const n=Zr(e);return n.append("Authorization",_l(t)),n}async function es(e){const t=await e();return t.status>=500&&t.status<600?e():t}function gl(e){return Number(e.replace("s","000"))}function _l(e){return`${Jr} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Yr(e),s=Zr(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:Jr,appId:e.appId,sdkVersion:Gr},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await es(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Xr(l.authToken)}}else throw await Qr("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=/^[cdef][\w-]{21}$/,Kt="";function vl(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Sl(e);return El.test(n)?n:Kt}catch{return Kt}}function Sl(e){return wl(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map;function rs(e,t){const n=mt(e);ss(n,t),Il(n,t)}function ss(e,t){const n=ns.get(e);if(n)for(const r of n)r(t)}function Il(e,t){const n=Al();n&&n.postMessage({key:e,fid:t}),Tl()}let Ee=null;function Al(){return!Ee&&"BroadcastChannel"in self&&(Ee=new BroadcastChannel("[Firebase] FID Change"),Ee.onmessage=e=>{ss(e.data.key,e.data.fid)}),Ee}function Tl(){ns.size===0&&Ee&&(Ee.close(),Ee=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="firebase-installations-database",Dl=1,Ce="firebase-installations-store";let Nt=null;function on(){return Nt||(Nt=ll(Cl,Dl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}})),Nt}async function ot(e,t){const n=mt(e),s=(await on()).transaction(Ce,"readwrite"),o=s.objectStore(Ce),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&rs(e,t.fid),t}async function os(e){const t=mt(e),r=(await on()).transaction(Ce,"readwrite");await r.objectStore(Ce).delete(t),await r.done}async function ht(e,t){const n=mt(e),s=(await on()).transaction(Ce,"readwrite"),o=s.objectStore(Ce),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&rs(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(e){let t;const n=await ht(e.appConfig,r=>{const s=kl(r),o=Ol(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===Kt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function kl(e){const t=e||{fid:vl(),registrationStatus:0};return is(t)}function Ol(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Te.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Rl(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Nl(e)}:{installationEntry:t}}async function Rl(e,t){try{const n=await yl(e,t);return ot(e.appConfig,n)}catch(n){throw Kr(n)&&n.customData.serverCode===409?await os(e.appConfig):await ot(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Nl(e){let t=await Qn(e.appConfig);for(;t.registrationStatus===1;)await ts(100),t=await Qn(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await an(e);return r||n}return t}function Qn(e){return ht(e,t=>{if(!t)throw Te.create("installation-not-found");return is(t)})}function is(e){return Pl(e)?{fid:e.fid,registrationStatus:0}:e}function Pl(e){return e.registrationStatus===1&&e.registrationTime+Wr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l({appConfig:e,heartbeatServiceProvider:t},n){const r=Bl(e,n),s=bl(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:Gr,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await es(()=>fetch(r,a));if(c.ok){const l=await c.json();return Xr(l)}else throw await Qr("Generate Auth Token",c)}function Bl(e,{fid:t}){return`${Yr(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(e,t=!1){let n;const r=await ht(e.appConfig,o=>{if(!as(o))throw Te.create("not-registered");const i=o.authToken;if(!t&&Fl(i))return o;if(i.requestStatus===1)return n=Ll(e,t),o;{if(!navigator.onLine)throw Te.create("app-offline");const a=Ul(o);return n=Ml(e,a),a}});return n?await n:r.authToken}async function Ll(e,t){let n=await Zn(e.appConfig);for(;n.authToken.requestStatus===1;)await ts(100),n=await Zn(e.appConfig);const r=n.authToken;return r.requestStatus===0?ln(e,t):r}function Zn(e){return ht(e,t=>{if(!as(t))throw Te.create("not-registered");const n=t.authToken;return xl(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ml(e,t){try{const n=await $l(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ot(e.appConfig,r),n}catch(n){if(Kr(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await os(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ot(e.appConfig,r)}throw n}}function as(e){return e!==void 0&&e.registrationStatus===2}function Fl(e){return e.requestStatus===2&&!jl(e)}function jl(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+dl}function Ul(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function xl(e){return e.requestStatus===1&&e.requestTime+Wr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(e){const t=e,{installationEntry:n,registrationPromise:r}=await an(t);return r?r.catch(console.error):ln(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(e,t=!1){const n=e;return await ql(n),(await ln(n,t)).token}async function ql(e){const{registrationPromise:t}=await an(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(e){if(!e||!e.options)throw Pt("App Configuration");if(!e.name)throw Pt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Pt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Pt(e){return Te.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="installations",Wl="installations-internal",Gl=e=>{const t=e.getProvider("app").getImmediate(),n=Vl(t),r=pt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jl=e=>{const t=e.getProvider("app").getImmediate(),n=pt(t,ls).getImmediate();return{getId:()=>Hl(n),getToken:s=>zl(n,s)}};function Kl(){Ae(new he(ls,Gl,"PUBLIC")),Ae(new he(Wl,Jl,"PRIVATE"))}Kl();pe(Vr,sn);pe(Vr,sn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="analytics",Yl="firebase_id",Xl="origin",Ql=60*1e3,Zl="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=new Mr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Z=new dt("analytics","Analytics",ec);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e){if(!e.startsWith(cn)){const t=Z.create("invalid-gtag-resource",{gtagURL:e});return X.warn(t.message),""}return e}function cs(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function nc(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function rc(e,t){const n=nc("firebase-js-sdk-policy",{createScriptURL:tc}),r=document.createElement("script"),s=`${cn}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function sc(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function oc(e,t,n,r,s,o){const i=r[s];try{if(i)await t[i];else{const c=(await cs(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){X.error(a)}e("config",s,o)}async function ic(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const a=await cs(n);for(const c of i){const l=a.find(d=>d.measurementId===c),u=l&&t[l.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){X.error(o)}}function ac(e,t,n,r){async function s(o,...i){try{if(o==="event"){const[a,c]=i;await ic(e,t,n,a,c)}else if(o==="config"){const[a,c]=i;await oc(e,t,n,r,a,c)}else if(o==="consent"){const[a]=i;e("consent","update",a)}else if(o==="get"){const[a,c,l]=i;e("get",a,c,l)}else if(o==="set"){const[a]=i;e("set",a)}else e(o,...i)}catch(a){X.error(a)}}return s}function lc(e,t,n,r,s){let o=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=ac(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function cc(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(cn)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=30,fc=1e3;class dc{constructor(t={},n=fc){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const us=new dc;function pc(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function mc(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:pc(r)},o=Zl.replace("{app-id}",n),i=await fetch(o,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Z.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function hc(e,t=us,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw Z.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Z.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _c;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ql),fs({appId:r,apiKey:s,measurementId:o},i,a,t)}async function fs(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=us){var o;const{appId:i,measurementId:a}=e;try{await bc(r,t)}catch(c){if(a)return X.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await mc(e);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!gc(l)){if(s.deleteThrottleMetadata(i),a)return X.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw c}const u=Number((o=l==null?void 0:l.customData)===null||o===void 0?void 0:o.httpStatus)===503?xn(n,s.intervalMillis,uc):xn(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,d),X.debug(`Calling attemptFetch again in ${u} millis`),fs(e,d,r,s)}}function bc(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(Z.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function gc(e){if(!(e instanceof De)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class _c{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function yc(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(){if($r())try{await Br()}catch(e){return X.warn(Z.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return X.warn(Z.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ec(e,t,n,r,s,o,i){var a;const c=hc(e);c.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&X.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>X.error(h)),t.push(c);const l=wc().then(h=>{if(h)return r.getId()}),[u,d]=await Promise.all([c,l]);cc(o)||rc(o,u.measurementId),s("js",new Date);const p=(a=i==null?void 0:i.config)!==null&&a!==void 0?a:{};return p[Xl]="firebase",p.update=!0,d!=null&&(p[Yl]=d),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.app=t}_delete(){return delete je[this.app.options.appId],Promise.resolve()}}let je={},er=[];const tr={};let $t="dataLayer",Sc="gtag",nr,ds,rr=!1;function Ic(){const e=[];if(Fi()&&e.push("This is a browser extension environment."),ji()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Z.create("invalid-analytics-context",{errorInfo:t});X.warn(n.message)}}function Ac(e,t,n){Ic();const r=e.options.appId;if(!r)throw Z.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)X.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Z.create("no-api-key");if(je[r]!=null)throw Z.create("already-exists",{id:r});if(!rr){sc($t);const{wrappedGtag:o,gtagCore:i}=lc(je,er,tr,$t,Sc);ds=o,nr=i,rr=!0}return je[r]=Ec(e,er,tr,t,nr,$t,n),new vc(e)}function Tc(e=Ha()){e=Lr(e);const t=pt(e,it);return t.isInitialized()?t.getImmediate():Cc(e)}function Cc(e,t={}){const n=pt(e,it);if(n.isInitialized()){const s=n.getImmediate();if(rt(t,n.getOptions()))return s;throw Z.create("already-initialized")}return n.initialize({options:t})}function Dc(e,t,n,r){e=Lr(e),yc(ds,je[e.app.options.appId],t,n,r).catch(s=>X.error(s))}const sr="@firebase/analytics",or="0.10.0";function kc(){Ae(new he(it,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Ac(r,s,n)},"PUBLIC")),Ae(new he("analytics-internal",e,"PRIVATE")),pe(sr,or),pe(sr,or,"esm2017");function e(t){try{const n=t.getProvider(it).getImmediate();return{logEvent:(r,s,o)=>Dc(n,r,s,o)}}catch(n){throw Z.create("interop-component-reg-failed",{reason:n})}}}kc();const Oc={apiKey:"AIzaSyBy-8_982uc8keGoC7cG4CpoTWxIrJ11BQ",authDomain:"steamclonestore.firebaseapp.com",projectId:"steamclonestore",storageBucket:"steamclonestore.appspot.com",messagingSenderId:"437785690482",appId:"1:437785690482:web:4bea1532e38f02dbaf5deb",measurementId:"G-JHN0EZ9LPF"},Rc=Ur(Oc);Tc(Rc);
