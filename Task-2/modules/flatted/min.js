self.Flatted=function(n){"use strict";
/*! (c) 2020 Andrea Giammarchi */var t=JSON.parse,r=JSON.stringify,e=Object.keys,u=String,a="string",f={},i="object",o=function(n,t){return t},c=function(n){return n instanceof u?u(n):n},l=function(n,t){return typeof t===a?new u(t):t},s=function n(t,r,a,o){for(var c=[],l=e(a),s=l.length,p=0;p<s;p++){var v=l[p],y=a[v];if(y instanceof u){var g=t[y];typeof g!==i||r.has(g)?a[v]=o.call(a,v,g):(r.add(g),a[v]=f,c.push({k:v,a:[t,r,g,o]}))}else a[v]!==f&&(a[v]=o.call(a,v,y))}for(var h=c.length,O=0;O<h;O++){var S=c[O],d=S.k,w=S.a;a[d]=o.call(a,d,n.apply(null,w))}return a},p=function(n,t,r){var e=u(t.push(r)-1);return n.set(r,e),e},v=function(n,r){var e=t(n,l).map(c),u=e[0],a=r||o,f=typeof u===i&&u?s(e,new Set,u,a):u;return a.call({"":f},"",f)},y=function(n,t,e){for(var u=t&&typeof t===i?function(n,r){return""===n||-1<t.indexOf(n)?r:void 0}:t||o,f=new Map,c=[],l=[],s=+p(f,c,u.call({"":n},"",n)),v=!s;s<c.length;)v=!0,l[s]=r(c[s++],y,e);return"["+l.join(",")+"]";function y(n,t){if(v)return v=!v,t;var r=u.call(this,n,t);switch(typeof r){case i:if(null===r)return r;case a:return f.get(r)||p(f,c,r)}return r}};return n.fromJSON=function(n){return v(r(n))},n.parse=v,n.stringify=y,n.toJSON=function(n){return t(y(n))},n}({});