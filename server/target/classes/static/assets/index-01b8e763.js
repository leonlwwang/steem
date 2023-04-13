(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function L(){}function pe(t){return t()}function oe(){return Object.create(null)}function P(t){t.forEach(pe)}function _e(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let W;function ie(t,e){return W||(W=document.createElement("a")),W.href=e,t===W.href}function be(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function he(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function k(){return T(" ")}function re(){return T("")}function F(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ve(t){return Array.from(t.childNodes)}function B(t,e){e=""+e,t.data!==e&&(t.data=e)}function D(t,e){t.value=e??""}function S(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function $e(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}let J;function z(t){J=t}function ge(){if(!J)throw new Error("Function called outside component initialization");return J}function ke(t){ge().$$.on_mount.push(t)}function we(){const t=ge();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=$e(e,n,{cancelable:l});return s.slice().forEach(u=>{u.call(t,o)}),!o.defaultPrevented}return!0}}const M=[],ue=[];let H=[];const ce=[],Ce=Promise.resolve();let ne=!1;function Ee(){ne||(ne=!0,Ce.then(ye))}function le(t){H.push(t)}const te=new Set;let j=0;function ye(){if(j!==0)return;const t=J;do{try{for(;j<M.length;){const e=M[j];j++,z(e),Ne(e.$$)}}catch(e){throw M.length=0,j=0,e}for(z(null),M.length=0,j=0;ue.length;)ue.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];te.has(n)||(te.add(n),n())}H.length=0}while(M.length);for(;ce.length;)ce.pop()();ne=!1,te.clear(),z(t)}function Ne(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}function qe(t){const e=[],n=[];H.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),H=e}const X=new Set;let Se;function I(t,e){t&&t.i&&(X.delete(t),t.i(e))}function Z(t,e,n,l){if(t&&t.o){if(X.has(t))return;X.add(t),Se.c.push(()=>{X.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function ee(t){t&&t.c()}function Q(t,e,n,l){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),l||le(()=>{const u=t.$$.on_mount.map(pe).filter(_e);t.$$.on_destroy?t.$$.on_destroy.push(...u):P(u),t.$$.on_mount=[]}),o.forEach(le)}function x(t,e){const n=t.$$;n.fragment!==null&&(qe(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(t,e){t.$$.dirty[0]===-1&&(M.push(t),Ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,l,s,o,u,f=[-1]){const i=J;z(t);const r=t.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:e.target||i.$$.root};u&&u(r.root);let d=!1;if(r.ctx=n?n(t,e.props||{},(a,C,...y)=>{const g=y.length?y[0]:C;return r.ctx&&s(r.ctx[a],r.ctx[a]=g)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](g),d&&Ue(t,a)),C}):[],r.update(),d=!0,P(r.before_update),r.fragment=l?l(r.ctx):!1,e.target){if(e.hydrate){const a=ve(e.target);r.fragment&&r.fragment.l(a),a.forEach(E)}else r.fragment&&r.fragment.c();e.intro&&I(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),ye()}z(i)}class Y{$destroy(){x(this,1),this.$destroy=L}$on(e,n){if(!_e(n))return L;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(t,e,n){const l=t.slice();return l[6]=e[n],l}function Le(t){let e;return{c(){e=m("p"),e.textContent="No results found.",S(e,"color","darkgray")},m(n,l){q(n,e,l)},p:L,d(n){n&&E(e)}}}function Oe(t){let e,n=t[1].length+"",l,s,o,u,f=t[1],i=[];for(let r=0;r<f.length;r+=1)i[r]=ae(fe(t,f,r));return{c(){e=m("p"),l=T(n),s=T(" results found."),o=k();for(let r=0;r<i.length;r+=1)i[r].c();u=re(),S(e,"color","darkgray")},m(r,d){q(r,e,d),c(e,l),c(e,s),q(r,o,d);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,d);q(r,u,d)},p(r,d){if(d&2&&n!==(n=r[1].length+"")&&B(l,n),d&2){f=r[1];let a;for(a=0;a<f.length;a+=1){const C=fe(r,f,a);i[a]?i[a].p(C,d):(i[a]=ae(C),i[a].c(),i[a].m(u.parentNode,u))}for(;a<i.length;a+=1)i[a].d(1);i.length=f.length}},d(r){r&&E(e),r&&E(o),he(i,r),r&&E(u)}}}function ae(t){let e,n,l;return{c(){e=m("img"),ie(e.src,n=t[6].image)||p(e,"src",n),p(e,"alt",l=t[6].gameName)},m(s,o){q(s,e,o)},p(s,o){o&2&&!ie(e.src,n=s[6].image)&&p(e,"src",n),o&2&&l!==(l=s[6].gameName)&&p(e,"alt",l)},d(s){s&&E(e)}}}function Fe(t){let e,n,l,s,o,u,f,i,r,d,a,C,y,g,h,$,w;function _(b,O){return b[1].length>0?Oe:Le}let N=_(t),v=N(t);return{c(){e=m("div"),n=m("form"),l=m("div"),s=m("label"),s.textContent="🔎",o=k(),u=m("input"),f=k(),i=m("div"),r=m("button"),r.textContent="Submit",d=k(),a=m("button"),a.textContent="Query 1",C=k(),y=m("button"),y.textContent="Query 2",g=k(),v.c(),h=re(),p(s,"for","search"),p(u,"type","text"),p(u,"class","form-control col-lg-9"),p(u,"id","search"),p(u,"name","search"),p(u,"placeholder"," search for games..."),u.required=!0,p(l,"class","searchform"),p(r,"type","submit"),p(r,"class","btn btn-primary"),S(r,"margin-right","1rem"),p(a,"id","btnq1"),p(a,"class","btn btn-primary"),S(a,"margin-right","0.5rem"),p(y,"id","btnq2"),p(y,"class","btn btn-primary"),S(y,"margin-left","0.5rem"),S(i,"display","flex"),p(e,"class","btn-container")},m(b,O){q(b,e,O),c(e,n),c(n,l),c(l,s),c(l,o),c(l,u),D(u,t[0]),c(n,f),c(n,i),c(i,r),c(i,d),c(i,a),c(i,C),c(i,y),q(b,g,O),v.m(b,O),q(b,h,O),$||(w=[F(u,"input",t[5]),F(a,"click",t[3]),F(y,"click",t[4]),F(n,"submit",t[2])],$=!0)},p(b,[O]){O&1&&u.value!==b[0]&&D(u,b[0]),N===(N=_(b))&&v?v.p(b,O):(v.d(1),v=N(b),v&&(v.c(),v.m(h.parentNode,h)))},i:L,o:L,d(b){b&&E(e),b&&E(g),v.d(b),b&&E(h),$=!1,P(w)}}}function Te(t,e,n){let l="",s=[];async function o(r){r.preventDefault();const d=new FormData;d.append("search",l);const a=await fetch("/api/games/search",{method:"POST",body:d});n(1,s=await a.json()),console.log(s)}async function u(r){r.preventDefault();const d=new FormData;d.append("search",l);const a=await fetch("/api/games/query1",{method:"POST",body:d});n(1,s=await a.json()),console.log(s)}async function f(r){r.preventDefault();const d=new FormData;d.append("search",l);const a=await fetch("/api/games/query2",{method:"POST",body:d});n(1,s=await a.json()),console.log(s)}function i(){l=this.value,n(0,l)}return[l,s,o,u,f,i]}class Ae extends Y{constructor(e){super(),R(this,e,Te,Fe,K,{})}}function De(t){let e,n,l,s,o,u,f,i,r,d,a,C,y,g,h,$,w,_,N;return{c(){e=m("form"),n=m("label"),l=m("p"),l.textContent="username:",s=k(),o=m("input"),u=k(),f=m("label"),i=m("p"),i.textContent="name:",r=k(),d=m("input"),a=k(),C=m("label"),y=m("p"),y.textContent="email:",g=k(),h=m("input"),$=k(),w=m("button"),w.textContent="Sign Up",S(l,"display","inline"),S(l,"padding-right","1em"),p(o,"type","text"),o.required=!0,p(o,"class","svelte-l52ccu"),p(n,"class","svelte-l52ccu"),S(i,"display","inline"),S(i,"padding-right","1em"),p(d,"type","text"),d.required=!0,p(d,"class","svelte-l52ccu"),p(f,"class","svelte-l52ccu"),S(y,"display","inline"),S(y,"padding-right","1em"),p(h,"type","email"),h.required=!0,p(h,"class","svelte-l52ccu"),p(C,"class","svelte-l52ccu"),p(w,"type","submit"),p(w,"class","svelte-l52ccu"),p(e,"class","svelte-l52ccu")},m(v,b){q(v,e,b),c(e,n),c(n,l),c(n,s),c(n,o),D(o,t[0]),c(e,u),c(e,f),c(f,i),c(f,r),c(f,d),D(d,t[1]),c(e,a),c(e,C),c(C,y),c(C,g),c(C,h),D(h,t[2]),c(e,$),c(e,w),_||(N=[F(o,"input",t[4]),F(d,"input",t[5]),F(h,"input",t[6]),F(e,"submit",t[3])],_=!0)},p(v,[b]){b&1&&o.value!==v[0]&&D(o,v[0]),b&2&&d.value!==v[1]&&D(d,v[1]),b&4&&h.value!==v[2]&&D(h,v[2])},i:L,o:L,d(v){v&&E(e),_=!1,P(N)}}}function Pe(t,e,n){const l=we();let s="",o="",u="";function f(a){a.preventDefault(),l("submit",{username:s,realName:o,emailAddress:u})}function i(){s=this.value,n(0,s)}function r(){o=this.value,n(1,o)}function d(){u=this.value,n(2,u)}return[s,o,u,f,i,r,d]}class je extends Y{constructor(e){super(),R(this,e,Pe,De,K,{})}}function Me(t){let e;return{c(){e=m("p"),e.innerHTML="<em>You need to log in to change your username.</em>",S(e,"color","#BB342F"),S(e,"font-size","0.7rem")},m(n,l){q(n,e,l)},p:L,d(n){n&&E(e)}}}function Be(t){let e,n,l,s,o;return{c(){e=m("p"),n=T("Username successfully changed to "),l=m("em"),s=T(t[0]),o=T("."),S(e,"font-size","0.8rem")},m(u,f){q(u,e,f),c(e,n),c(e,l),c(l,s),c(e,o)},p(u,f){f&1&&B(s,u[0])},d(u){u&&E(e)}}}function He(t){let e,n,l,s,o,u,f,i,r,d,a;function C(h,$){if(h[2]==1)return Be;if(h[2]==-1)return Me}let y=C(t),g=y&&y(t);return{c(){e=m("form"),n=m("div"),l=m("label"),l.textContent="update username:",s=k(),o=m("input"),u=k(),f=m("button"),f.textContent="Update",i=k(),g&&g.c(),r=re(),p(l,"for","username"),p(l,"class","svelte-1l9cloy"),p(o,"type","text"),p(o,"id","username"),p(o,"name","username"),o.required=!0,p(o,"class","svelte-1l9cloy"),p(f,"type","submit"),p(f,"class","svelte-1l9cloy"),p(e,"class","svelte-1l9cloy")},m(h,$){q(h,e,$),c(e,n),c(n,l),c(n,s),c(n,o),D(o,t[1]),c(e,u),c(e,f),q(h,i,$),g&&g.m(h,$),q(h,r,$),d||(a=[F(o,"input",t[4]),F(e,"submit",t[3])],d=!0)},p(h,[$]){$&2&&o.value!==h[1]&&D(o,h[1]),y===(y=C(h))&&g?g.p(h,$):(g&&g.d(1),g=y&&y(h),g&&(g.c(),g.m(r.parentNode,r)))},i:L,o:L,d(h){h&&E(e),h&&E(i),g&&g.d(h),h&&E(r),d=!1,P(a)}}}function ze(t,e,n){let l,{username:s}=e,o=null;async function u(i){if(i.preventDefault(),n(1,o=i.target.username.value.trim()),!o){console.error("New username is required");return}(await fetch(`/api/users/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(n(2,l=1),console.log(`Username updated to ${o}`),n(0,s=o)):(n(2,l=-1),console.error("Failed to update username"))}function f(){o=this.value,n(1,o)}return t.$$set=i=>{"username"in i&&n(0,s=i.username)},n(2,l=0),[s,o,l,u,f]}class Ie extends Y{constructor(e){super(),R(this,e,ze,He,K,{username:0})}}function Qe(t){let e,n,l;return{c(){e=m("button"),e.textContent="Log Out",p(e,"class","svelte-mpxy6q")},m(s,o){q(s,e,o),n||(l=F(e,"click",t[3]),n=!0)},p:L,d(s){s&&E(e),n=!1,l()}}}function xe(t){let e;return{c(){e=m("button"),e.textContent="Log In",p(e,"type","submit"),p(e,"class","svelte-mpxy6q")},m(n,l){q(n,e,l)},p:L,d(n){n&&E(e)}}}function Je(t){let e;return{c(){e=m("p"),e.innerHTML="<em>Username does not exist.</em>",S(e,"color","#BB342F"),S(e,"font-size","0.75rem")},m(n,l){q(n,e,l)},p:L,d(n){n&&E(e)}}}function Ke(t){let e,n,l,s;return{c(){e=m("p"),n=T("✅ Logged in as "),l=m("em"),s=T(t[0])},m(o,u){q(o,e,u),c(e,n),c(e,l),c(l,s)},p(o,u){u&1&&B(s,o[0])},d(o){o&&E(e)}}}function Re(t){let e,n,l,s,o,u,f,i,r,d,a;function C(_,N){return _[1]==0||_[1]==-1?xe:Qe}let y=C(t),g=y(t);function h(_,N){if(_[1]==1)return Ke;if(_[1]==-1)return Je}let $=h(t),w=$&&$(t);return i=new Ie({props:{username:t[0]}}),{c(){e=m("form"),n=m("div"),n.innerHTML=`<label for="username" class="svelte-mpxy6q">username:</label> 
        <input type="text" id="username" name="username" required="" class="svelte-mpxy6q"/>`,l=k(),g.c(),s=k(),w&&w.c(),o=k(),u=m("h2"),u.textContent="Change Username",f=k(),ee(i.$$.fragment),p(e,"class","svelte-mpxy6q")},m(_,N){q(_,e,N),c(e,n),c(e,l),g.m(e,null),q(_,s,N),w&&w.m(_,N),q(_,o,N),q(_,u,N),q(_,f,N),Q(i,_,N),r=!0,d||(a=F(e,"submit",t[2]),d=!0)},p(_,[N]){y===(y=C(_))&&g?g.p(_,N):(g.d(1),g=y(_),g&&(g.c(),g.m(e,null))),$===($=h(_))&&w?w.p(_,N):(w&&w.d(1),w=$&&$(_),w&&(w.c(),w.m(o.parentNode,o)));const v={};N&1&&(v.username=_[0]),i.$set(v)},i(_){r||(I(i.$$.fragment,_),r=!0)},o(_){Z(i.$$.fragment,_),r=!1},d(_){_&&E(e),g.d(),_&&E(s),w&&w.d(_),_&&E(o),_&&E(u),_&&E(f),x(i,_),d=!1,a()}}}function Ye(t,e,n){let l,s;function o(f){f.preventDefault();const i=f.target.username.value.trim();if(!i){console.error("Username is required");return}fetch(`/api/users/${i}`).then(r=>{r.ok?(console.log(`User ${i} found`),n(1,l=1),n(0,s=i)):(n(1,l=-1),console.error(`User ${i} not found`))}).catch(r=>console.error(r))}function u(){n(1,l=0),n(0,s=null)}return n(1,l=0),n(0,s=null),[s,l,o,u]}class Ge extends Y{constructor(e){super(),R(this,e,Ye,Re,K,{})}}function me(t,e,n){const l=t.slice();return l[5]=e[n],l}function Ve(t){let e;return{c(){e=m("p"),e.textContent="No users found 😢",S(e,"color","darkgray")},m(n,l){q(n,e,l)},p:L,d(n){n&&E(e)}}}function We(t){let e,n,l,s,o=t[0],u=[];for(let f=0;f<o.length;f+=1)u[f]=de(me(t,o,f));return{c(){e=m("table"),n=m("thead"),n.innerHTML=`<tr><th class="element svelte-y8491c">Username</th> 
            <th class="element svelte-y8491c">Name</th> 
            <th class="element svelte-y8491c">Email</th> 
            <th></th></tr>`,l=k(),s=m("tbody");for(let f=0;f<u.length;f+=1)u[f].c();p(e,"class","svelte-y8491c")},m(f,i){q(f,e,i),c(e,n),c(e,l),c(e,s);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null)},p(f,i){if(i&5){o=f[0];let r;for(r=0;r<o.length;r+=1){const d=me(f,o,r);u[r]?u[r].p(d,i):(u[r]=de(d),u[r].c(),u[r].m(s,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=o.length}},d(f){f&&E(e),he(u,f)}}}function de(t){let e,n,l=t[5].username+"",s,o,u,f=t[5].realName+"",i,r,d,a=t[5].emailAddress+"",C,y,g,h,$,w,_;function N(){return t[3](t[5])}return{c(){e=m("tr"),n=m("td"),s=T(l),o=k(),u=m("td"),i=T(f),r=k(),d=m("td"),C=T(a),y=k(),g=m("td"),h=m("button"),h.textContent="❌",$=k(),p(n,"class","element svelte-y8491c"),p(u,"class","element svelte-y8491c"),p(d,"class","element svelte-y8491c")},m(v,b){q(v,e,b),c(e,n),c(n,s),c(e,o),c(e,u),c(u,i),c(e,r),c(e,d),c(d,C),c(e,y),c(e,g),c(g,h),c(e,$),w||(_=F(h,"click",N),w=!0)},p(v,b){t=v,b&1&&l!==(l=t[5].username+"")&&B(s,l),b&1&&f!==(f=t[5].realName+"")&&B(i,f),b&1&&a!==(a=t[5].emailAddress+"")&&B(C,a)},d(v){v&&E(e),w=!1,_()}}}function Xe(t){let e,n,l,s,o,u,f,i,r,d,a,C,y,g,h,$,w,_,N,v,b,O;f=new je({}),f.$on("submit",t[1]);function se(U,V){return U[0].length>0?We:Ve}let G=se(t),A=G(t);return $=new Ge({}),b=new Ae({}),{c(){e=m("main"),n=m("div"),n.innerHTML=`<h1>STEEM</h1> 
    <a href="/"><img style="display: inline-block;" id="logo" src="/logo.png" alt="bad-logo"/></a>`,l=k(),s=m("div"),o=m("h2"),o.textContent="Registration",u=k(),ee(f.$$.fragment),i=k(),r=m("div"),d=m("h2"),d.textContent="Users",a=k(),A.c(),C=k(),y=m("div"),g=m("h2"),g.textContent="Login",h=k(),ee($.$$.fragment),w=k(),_=m("div"),N=m("h2"),N.textContent="Search",v=k(),ee(b.$$.fragment),p(n,"class","top-bar"),p(s,"class","card"),p(r,"class","card"),p(y,"class","card"),p(_,"class","card")},m(U,V){q(U,e,V),c(e,n),c(e,l),c(e,s),c(s,o),c(s,u),Q(f,s,null),c(e,i),c(e,r),c(r,d),c(r,a),A.m(r,null),c(e,C),c(e,y),c(y,g),c(y,h),Q($,y,null),c(e,w),c(e,_),c(_,N),c(_,v),Q(b,_,null),O=!0},p(U,[V]){G===(G=se(U))&&A?A.p(U,V):(A.d(1),A=G(U),A&&(A.c(),A.m(r,null)))},i(U){O||(I(f.$$.fragment,U),I($.$$.fragment,U),I(b.$$.fragment,U),O=!0)},o(U){Z(f.$$.fragment,U),Z($.$$.fragment,U),Z(b.$$.fragment,U),O=!1},d(U){U&&E(e),x(f),A.d(),x($),x(b)}}}function Ze(t,e,n){let l=[];ke(async()=>{const i=await fetch("/api/users");n(0,l=await i.json())});function s(i){fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i.detail)}).then(r=>r.text()).then(r=>{console.log(r),u()}).catch(r=>console.error(r))}function o(i){confirm("Are you sure you want to delete this user?")&&fetch("/api/users/"+i,{method:"DELETE"}).then(r=>{r.ok?n(0,l=l.filter(d=>d.username!==i)):console.error("Failed to delete user")}).catch(r=>console.error(r))}function u(){fetch("/api/users").then(i=>i.json()).then(i=>{n(0,l=i)}).catch(i=>console.error(i))}return u(),[l,s,o,i=>o(i.username)]}class et extends Y{constructor(e){super(),R(this,e,Ze,Xe,K,{})}}new et({target:document.getElementById("app")});
