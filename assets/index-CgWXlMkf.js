(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function As(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function xg(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bl={duration:.5,overwrite:!1,delay:0},Kf,wn,Xt,Ni=1e8,kt=1/Ni,Sd=Math.PI*2,px=Sd/4,mx=0,yg=Math.sqrt,gx=Math.cos,_x=Math.sin,En=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},Us=function(e){return typeof e=="number"},Zf=function(e){return typeof e>"u"},cs=function(e){return typeof e=="object"},ii=function(e){return e!==!1},Jf=function(){return typeof window<"u"},jl=function(e){return nn(e)||En(e)},bg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,vx=/random\([^)]+\)/g,xx=/,\s*/g,Zp=/(?:-?\.?\d|\.)+/gi,Mg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sg=/[+-]=-?[.\d]+/,yx=/[^,'"\[\]\s]+/gi,bx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,Qi,Ed,Qf,Ei={},gu={},Eg,Tg=function(e){return(gu=io(e,Ei))&&ci},ep=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ml=function(e,t){return!t&&console.warn(e)},Ag=function(e,t){return e&&(Ei[e]=t)&&gu&&(gu[e]=t)||Ei},Sl=function(){return 0},Mx={suppressEvents:!0,isStart:!0,kill:!1},qc={suppressEvents:!0,kill:!1},Sx={suppressEvents:!0},tp={},ar=[],Td={},wg,gi={},rh={},Jp=30,jc=[],np="",ip=function(e){var t=e[0],n,i;if(cs(t)||nn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=jc.length;i--&&!jc[i].targetTest(t););n=jc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new jg(e[i],n)))||e.splice(i,1);return e},Vr=function(e){return e._gsap||ip(Oi(e))[0]._gsap},Rg=function(e,t,n){return(n=e[t])&&nn(n)?e[t]():Zf(n)&&e.getAttribute&&e.getAttribute(t)||n},si=function(e,t){return(e=e.split(",")).forEach(t)||e},on=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},Ga=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ex=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_u=function(){var e=ar.length,t=ar.slice(0),n,i;for(Td={},ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sp=function(e){return!!(e._initted||e._startAt||e.add)},Cg=function(e,t,n,i){ar.length&&!wn&&_u(),e.render(t,n,!!(wn&&t<0&&sp(e))),ar.length&&!wn&&_u()},Pg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yx).length<2?t:En(e)?e.trim():e},Lg=function(e){return e},Ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},io=function(e,t){for(var n in t)e[n]=t[n];return e},Qp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=cs(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},vu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},il=function(e){var t=e.parent||jt,n=e.keyframes?Tx(Bn(e.keyframes)):Ti;if(ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ax=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Dg=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ku=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ad=function(e,t,n,i){return e._startAt&&(wn?e._startAt.revert(qc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Rx=function s(e){return!e||e._ts&&s(e.parent)},em=function(e){return e._repeat?so(e._tTime,e=e.duration()+e._rDelay)*e:0},so=function(e,t){var n=Math.floor(e=qt(e/t));return e&&n===e?n-1:n},xu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bu=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},zu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bu(e),n._dirty||Gr(n,e)),e},Ig=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xu(e.rawTime(),t),(!t._dur||Vl(0,t.totalDuration(),n)-t._tTime>kt)&&t.render(n,!0)),Gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-kt}},ns=function(e,t,n,i){return t.parent&&hr(t),t._start=qt((Us(n)?n:n||e!==jt?Ci(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dg(e,t,"_first","_last",e._sort?"_start":0),wd(t)||(e._recent=t),i||Ig(e,t),e._ts<0&&zu(e,e._tTime),e},Ng=function(e,t){return(Ei.ScrollTrigger||ep("scrollTrigger",t))&&Ei.ScrollTrigger.create(t,e)},Og=function(e,t,n,i,r){if(ap(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wg!==vi.frame)return ar.push(e),e._lazy=[r,i],1},Cx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},wd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Px=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Cx(e)&&!(!e._initted&&wd(e))||(e._ts<0||e._dp._ts<0)&&!wd(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Vl(0,e._tDur,t),u=so(l,o),e._yoyo&&u&1&&(a=1-a),u!==so(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||wn||i||e._zTime===kt||!t&&e._zTime){if(!e._initted&&Og(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?kt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ad(e,t,n,!0),e._onUpdate&&!n&&bi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&hr(e,1),!n&&!wn&&(bi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Lx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ro=function(e,t,n,i){var r=e._repeat,a=qt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:qt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&zu(e,e._tTime=e._tDur*o),e.parent&&Bu(e),n||Gr(e.parent,e),e},tm=function(e){return e instanceof ti?Gr(e):ro(e,e._dur)},Dx={_start:0,endTime:Sl,totalDuration:Sl},Ci=function s(e,t,n){var i=e.labels,r=e._recent||Dx,a=e.duration()>=Ni?r.endTime(!1):e._dur,o,l,c;return En(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},sl=function(e,t,n){var i=Us(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;a.immediateRender=ii(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new dn(t[0],a,t[r+1])},_r=function(e,t){return e||e===0?t(e):t},Vl=function(e,t,n){return n<e?e:n>t?t:n},Un=function(e,t){return!En(e)||!(t=bx.exec(e))?"":t[1]},Ix=function(e,t,n){return _r(n,function(i){return Vl(e,t,i)})},Rd=[].slice,Ug=function(e,t){return e&&cs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&cs(e[0]))&&!e.nodeType&&e!==Qi},Nx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return En(i)&&!t||Ug(i,1)?(r=n).push.apply(r,Oi(i)):n.push(i)})||n},Oi=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):En(e)&&!n&&(Ed||!ao())?Rd.call((t||Qf).querySelectorAll(e),0):Bn(e)?Nx(e,n):Ug(e)?Rd.call(e,0):e?[e]:[]},Cd=function(e){return e=Oi(e)[0]||Ml("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Oi(t,n.querySelectorAll?n:n===e?Ml("Invalid scope")||Qf.createElement("div"):e)}},Fg=function(e){return e.sort(function(){return .5-Math.random()})},kg=function(e){if(nn(e))return e;var t=cs(e)?e:{each:e},n=Wr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return En(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,p=a[_],g,b,y,x,w,A,M,R,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,Ni])[1],!I){for(M=-Ni;M<(M=m[I++].getBoundingClientRect().left)&&I<_;);I<_&&I--}for(p=a[_]=[],g=l?Math.min(I,_)*u-.5:i%I,b=I===Ni?0:l?_*h/I-.5:i/I|0,M=0,R=Ni,A=0;A<_;A++)y=A%I-g,x=b-(A/I|0),p[A]=w=c?Math.abs(c==="y"?x:y):yg(y*y+x*x),w>M&&(M=w),w<R&&(R=w);i==="random"&&Fg(p),p.max=M-R,p.min=R,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(I>_?_-1:c?c==="y"?_/I:I:Math.max(I,_/I))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=Un(t.amount||t.each)||0,n=n&&_<0?Yx(n):n}return _=(p[d]-p.min)/p.max||0,qt(p.b+(n?n(_):_)*p.v)+p.u}},Pd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Us(n)?0:Un(n))}},Bg=function(e,t){var n=Bn(e),i,r;return!n&&cs(e)&&(i=n=e.radius||Ni,e.values?(e=Oi(e.values),(r=!Us(e[0]))&&(i*=i)):e=Pd(e.increment)),_r(t,n?nn(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ni,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Us(a)?u:u+Un(a)}:Pd(e))},zg=function(e,t,n,i){return _r(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ox=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Ux=function(e,t){return function(n){return e(parseFloat(n))+(t||Un(n))}},Fx=function(e,t,n){return Vg(e,t,0,1,n)},Hg=function(e,t,n){return _r(n,function(i){return e[~~t(i)]})},kx=function s(e,t,n){var i=t-e;return Bn(e)?Hg(e,s(0,e.length),t):_r(n,function(r){return(i+(r-e)%i)%i+e})},Bx=function s(e,t,n){var i=t-e,r=i*2;return Bn(e)?Hg(e,s(0,e.length-1),t):_r(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},El=function(e){return e.replace(vx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(xx);return zg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vg=function(e,t,n,i,r){var a=t-e,o=i-n;return _r(r,function(l){return n+((l-e)/a*o||0)})},zx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=En(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=io(Bn(e)?[]:{},e));if(!u){for(l in t)rp.call(o,e,l,"get",t[l]);r=function(m){return cp(m,o)||(a?e.p:e)}}}return _r(n,r)},nm=function(e,t,n){var i=e.labels,r=Ni,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},bi=function(e,t,n){var i=e.vars,r=i[t],a=Xt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ar.length&&_u(),o&&(Xt=o),u=l?r.apply(c,l):r.call(c),Xt=a,u},qo=function(e){return hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&bi(e,"onInterrupt"),e},Ua,Gg=[],Wg=function(e){if(e)if(e=!e.name&&e.default||e,Jf()||e.headless){var t=e.name,n=nn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Sl,render:cp,add:rp,kill:iy,modifier:ny,rawVars:0},a={targetTest:0,get:0,getSetter:lp,aliases:{},register:0};if(ao(),e!==i){if(gi[t])return;Ti(i,Ti(vu(e,r),a)),io(i.prototype,io(r,vu(e,a))),gi[i.prop=t]=i,e.targetTest&&(jc.push(i),tp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ag(t,i),e.register&&e.register(ci,i,ri)}else Gg.push(e)},Ft=255,jo={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},ah=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ft+.5|0},Xg=function(e,t,n){var i=e?Us(e)?[e>>16,e>>8&Ft,e&Ft]:0:jo.black,r,a,o,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),jo[e])i=jo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ft,i&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Zp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ah(l+1/3,r,a),i[1]=ah(l,r,a),i[2]=ah(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Mg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Zp)||jo.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/Ft,a=i[1]/Ft,o=i[2]/Ft,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(a-o)/f+(a<o?6:0):h===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},$g=function(e){var t=[],n=[],i=-1;return e.split(or).forEach(function(r){var a=r.match(Oa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},im=function(e,t,n){var i="",r=(e+i).match(or),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Xg(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=$g(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(or,"1").split(Oa),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(or),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},or=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in jo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Hx=/hsl[a]?\(/,Yg=function(e){var t=e.join(" "),n;if(or.lastIndex=0,or.test(t))return n=Hx.test(t),e[1]=im(e[1],n),e[0]=im(e[0],n,$g(e[1])),!0},Tl,vi=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,d,f,m=function _(p){var g=s()-i,b=p===!0,y,x,w,A;if((g>e||g<0)&&(n+=g-t),i+=g,w=i-n,y=w-a,(y>0||b)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,a+=y+(y>=r?4:r-y),x=1),b||(l=c(_)),x)for(f=0;f<o.length;f++)o[f](w,d,A,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Eg&&(!Ed&&Jf()&&(Qi=Ed=window,Qf=Qi.document||{},Ei.gsap=ci,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(ci.version),Tg(gu||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),Gg.forEach(Wg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Tl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Tl=0,c=Sl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,g,b){var y=g?function(x,w,A,M){p(x,w,A,M),h.remove(y)}:p;return h.remove(p),o[b?"unshift":"push"](y),ao(),y},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},h}(),ao=function(){return!Tl&&vi.wake()},yt={},Vx=/^[\d.\-M][\d.\-,\s]/,Gx=/["']/g,Wx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Gx,"").trim():+c,i=l.substr(o+1).trim();return t},Xx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$x=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Wx(t[1])]:Xx(e).split(",").map(Pg)):yt._CE&&Vx.test(e)?yt._CE("",e):n},Yx=function(e){return function(t){return 1-e(1-t)}},Wr=function(e,t){return e&&(nn(e)?e:yt[e]||$x(e))||t},sa=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return si(e,function(o){yt[o]=Ei[o]=r,yt[a=o.toLowerCase()]=n;for(var l in r)yt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[o+"."+l]=r[l]}),r},qg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oh=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Sd*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*_x((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:qg(o);return r=Sd/r,l.config=function(c,u){return s(e,c,u)},l},lh=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:qg(n);return i.config=function(r){return s(e,r)},i};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;sa(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;sa("Elastic",oh("in"),oh("out"),oh());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};sa("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);sa("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});sa("Circ",function(s){return-(yg(1-s*s)-1)});sa("Sine",function(s){return s===1?1:-gx(s*px)+1});sa("Back",lh("in"),lh("out"),lh());yt.SteppedEase=yt.steps=Ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-kt;return function(o){return((i*Vl(0,a,o)|0)+r)*n}}};bl.ease=yt["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return np+=s+","+s+"Params,"});var jg=function(e,t){this.id=mx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rg,this.set=t?t.getSetter:lp},Al=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ro(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),Tl||vi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ao(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zu(this,n),!r._dp||r.parent||Ig(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ns(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===kt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+em(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+em(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?so(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-kt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-kt?0:this._rts,this.totalTime(Vl(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Bu(this),wx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=qt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ns(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Sx);var i=wn;return wn=n,sp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ci(this,n),ii(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ii(i)),this._dur||(this._zTime=-kt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-kt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-kt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-kt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=nn(n)?n:Lg,l=function(){var u=i.then;i.then=null,r&&r(),nn(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){qo(this)},s}();Ti(Al.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kt,_prom:0,_ps:!1,_rts:1});var ti=function(s){xg(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ii(n.sortChildren),jt&&ns(n.parent||jt,As(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ng(As(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return sl(0,arguments,this),this},t.from=function(i,r,a){return sl(1,arguments,this),this},t.fromTo=function(i,r,a,o){return sl(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,il(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new dn(i,r,Ci(this,a),1),this},t.call=function(i,r,a){return ns(this,dn.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new dn(i,a,Ci(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,il(a).immediateRender=ii(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,il(o).immediateRender=ii(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,p,g,b,y,x,w,A,M;if(this!==jt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,x=this._start,y=this._ts,g=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=qt(u%p),u===l?(_=this._repeat,d=c):(w=qt(u/p),_=~~w,_&&_===w&&(d=c,_--),d>c&&(d=c)),w=so(this._tTime,p),!o&&this._tTime&&w!==_&&this._tTime-w*p-this._dur<=0&&(w=_),A&&_&1&&(d=c-d,M=1),_!==w&&!this._lock){var R=A&&w&1,I=R===(A&&_&1);if(_<w&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(M?0:qt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Lx(this,qt(o),qt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!w&&(bi(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!g){b=0,m&&(u+=this._zTime=-kt);break}}f=m}else{f=this._last;for(var v=i<0?i:d;f;){if(m=f._prev,(f._act||v<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,r,a||wn&&sp(f)),d!==this._time||!this._ts&&!g){b=0,m&&(u+=this._zTime=v?-kt:kt);break}}f=m}}if(b&&!r&&(this.pause(),b.render(d>=o?0:-kt)._zTime=d>=o?1:-1,this._ts))return this._start=x,Bu(this),this.render(i,r,a);this._onUpdate&&!r&&bi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(bi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Us(r)||(r=Ci(this,r,i)),!(i instanceof Al)){if(Bn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(En(i))return this.addLabel(i,r);if(nn(i))i=dn.delayedCall(0,i);else return this}return this!==i?ns(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof dn?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return En(i)?this.removeLabel(i):nn(i)?this.killTweensOf(i):(i.parent===this&&ku(this,i),i===this._recent&&(this._recent=this._last),Gr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(vi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Ci(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=dn.delayedCall(0,r||Sl,a);return o.data="isPause",this._hasPause=1,ns(this,o,Ci(this,i))},t.removePause=function(i){var r=this._first;for(i=Ci(this,i);r;)r._start===i&&r.data==="isPause"&&hr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Js!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Oi(i),l=this._first,c=Us(r),u;l;)l instanceof dn?Ex(l._targets,o)&&(c?(!Js||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Ci(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=dn.to(a,Ti({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||kt,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&ro(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},r));return d?m.render(0):m},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Ti({startAt:{time:Ci(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),nm(this,Ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),nm(this,Ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=qt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Gr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Ni,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ns(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=qt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ro(a,a===jt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(jt._ts&&(Cg(jt,xu(i,jt)),wg=vi.frame),vi.frame>=Jp){Jp+=Si.autoSleep||120;var r=jt._first;if((!r||!r._ts)&&Si.autoSleep&&vi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||vi.sleep()}}},e}(Al);Ti(ti.prototype,{_lock:0,_hasPause:0,_forcing:0});var qx=function(e,t,n,i,r,a,o){var l=new ri(this._pt,e,t,0,1,t_,null,r),c=0,u=0,h,d,f,m,_,p,g,b;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=El(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(sh)||[];h=sh.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?Ga(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=sh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Sg.test(i)||g)&&(l.e=0),this._pt=l,l},rp=function(e,t,n,i,r,a,o,l,c,u){nn(i)&&(i=i(r||0,e,a));var h=e[t],d=n!=="get"?n:nn(h)?c?e[t.indexOf("set")||!nn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=nn(h)?c?Qx:Qg:op,m;if(En(i)&&(~i.indexOf("random(")&&(i=El(i)),i.charAt(1)==="="&&(m=Ga(d,i)+(Un(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Ld)return!isNaN(d*i)&&i!==""?(m=new ri(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?ty:e_,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&ep(t,i),qx.call(this,e,t,d,i,f,l||Si.stringFilter,c))},jx=function(e,t,n,i,r){if(nn(e)&&(e=rl(e,r,t,n,i)),!cs(e)||e.style&&e.nodeType||Bn(e)||bg(e))return En(e)?rl(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=rl(e[o],r,t,n,i);return a},Kg=function(e,t,n,i,r,a){var o,l,c,u;if(gi[e]&&(o=new gi[e]).init(r,o.rawVars?t[e]:jx(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new ri(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ua))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Js,Ld,ap=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,y=e._overwrite==="auto"&&!Kf,x=e.timeline,w=i.easeReverse||h,A,M,R,I,v,E,N,z,W,q,H,Y,$;if(x&&(!d||!r)&&(r="none"),e._ease=Wr(r,bl.ease),e._rEase=w&&(Wr(w)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||d&&!i.stagger){if(z=p[0]?Vr(p[0]).harness:0,Y=z&&i[z.prop],A=vu(i,tp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&m?qc:Mx),_._lazy=0),a){if(hr(e._startAt=dn.set(p,Ti({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ii(l),startAt:null,delay:0,onUpdate:c&&function(){return bi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!o&&!f)&&e._startAt.revert(qc),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),R=Ti({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ii(l),immediateRender:o,stagger:0,parent:g},A),Y&&(R[z.prop]=Y),hr(e._startAt=dn.set(p,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(qc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ii(l)||l&&!m,M=0;M<p.length;M++){if(v=p[M],N=v._gsap||ip(p)[M]._gsap,e._ptLookup[M]=q={},Td[N.id]&&ar.length&&_u(),H=b===p?M:b.indexOf(v),z&&(W=new z).init(v,Y||A,e,H,b)!==!1&&(e._pt=I=new ri(e._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(re){q[re]=I}),W.priority&&(E=1)),!z||Y)for(R in A)gi[R]&&(W=Kg(R,A,e,H,v,b))?W.priority&&(E=1):q[R]=I=rp.call(e,v,R,"get",A[R],H,b,0,i.stringFilter);e._op&&e._op[M]&&e.kill(v,e._op[M]),y&&e._pt&&(Js=e,jt.killTweensOf(v,q,e.globalTime(t)),$=!e.parent,Js=0),e._pt&&l&&(Td[N.id]=1)}E&&n_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&x.render(Ni,!0,!0)},Kx=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ld=1,e.vars[t]="+=0",ap(e,o),Ld=0,l?Ml(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=on(n)+Un(h.e)),h.b&&(h.b=u.s+Un(h.b))},Zx=function(e,t){var n=e[0]?Vr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=io({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Jx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Bn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},rl=function(e,t,n,i,r){return nn(e)?e.call(t,n,i,r):En(e)&&~e.indexOf("random(")?El(e):e},Zg=np+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jg={};si(Zg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Jg[s]=1});var dn=function(s){xg(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:il(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||jt,b=(Bn(n)||bg(n)?Us(n[0]):"length"in i)?[n]:Oi(n),y,x,w,A,M,R,I,v;if(o._targets=b.length?ip(b):Ml("GSAP target "+n+" not found. https://gsap.com",!Si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||d||jl(c)||jl(u)){i=o.vars;var E=i.easeReverse||i.yoyoEase;if(y=o.timeline=new ti({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:b}),y.kill(),y.parent=y._dp=As(o),y._start=0,d||jl(c)||jl(u)){if(A=b.length,I=d&&kg(d),cs(d))for(M in d)~Zg.indexOf(M)&&(v||(v={}),v[M]=d[M]);for(x=0;x<A;x++)w=vu(i,Jg),w.stagger=0,E&&(w.easeReverse=E),v&&io(w,v),R=b[x],w.duration=+rl(c,As(o),x,R,b),w.delay=(+rl(u,As(o),x,R,b)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(R,w,I?I(x,R,b):0),y._ease=yt.none;y.duration()?c=u=0:o.timeline=0}else if(m){il(Ti(y.vars.defaults,{ease:"none"})),y._ease=Wr(m.ease||i.ease||"none");var N=0,z,W,q;if(Bn(m))m.forEach(function(H){return y.to(b,H,">")}),y.duration();else{w={};for(M in m)M==="ease"||M==="easeEach"||Jx(M,m[M],w,m.easeEach);for(M in w)for(z=w[M].sort(function(H,Y){return H.t-Y.t}),N=0,x=0;x<z.length;x++)W=z[x],q={ease:W.e,duration:(W.t-(x?z[x-1].t:0))/100*c},q[M]=W.v,y.to(b,q,N),N+=q.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Kf&&(Js=As(o),jt.killTweensOf(b),Js=0),ns(g,As(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!m&&o._start===qt(g._time)&&ii(h)&&Rx(As(o))&&g.data!=="nested")&&(o._tTime=-kt,o.render(Math.max(0,-u)||0)),p&&Ng(As(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-kt&&!u?l:i<kt?0:i,d,f,m,_,p,g,b,y;if(!c)Px(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(d=qt(h%_),h===l?(m=this._repeat,d=c):(p=qt(h/_),m=~~p,m&&m===p?(d=c,m--):d>c&&(d=c)),g=this._yoyo&&m&1,g&&(d=c-d),p=so(this._tTime,_),d===o&&!a&&this._initted&&m===p)return this._tTime=h,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(qt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Og(this,u?i:d,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var x=d<o;if(x!==this._inv){var w=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(x?-1:1)/w:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!r&&!p&&(bi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ad(this,i,r,a),bi(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&bi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ad(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&hr(this,1),!r&&!(u&&!o)&&(h||o||g)&&(bi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){Tl||vi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ap(this,c),u=this._ease(c/this._dur),Kx(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(zu(this,0),this.parent||Dg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Js&&Js.vars.overwrite!==!0)._first||qo(this),this.parent&&a!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Oi(i):o,c=this._ptLookup,u=this._pt,h,d,f,m,_,p,g;if((!r||r==="all")&&Ax(o,l))return r==="all"&&(this._pt=0),qo(this);for(h=this._op=this._op||[],r!=="all"&&(En(r)&&(_={},si(r,function(b){return _[b]=1}),r=_),r=Zx(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){d=c[g],r==="all"?(h[g]=r,m=d,f={}):(f=h[g]=h[g]||{},m=r);for(_ in m)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ku(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&qo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return sl(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return sl(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return jt.killTweensOf(i,r,a)},e}(Al);Ti(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(s){dn[s]=function(){var e=new ti,t=Rd.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var op=function(e,t,n){return e[t]=n},Qg=function(e,t,n){return e[t](n)},Qx=function(e,t,n,i){return e[t](i.fp,n)},ey=function(e,t,n){return e.setAttribute(t,n)},lp=function(e,t){return nn(e[t])?Qg:Zf(e[t])&&e.setAttribute?ey:op},e_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ty=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},t_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},cp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ny=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},iy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ku(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},n_=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},ri=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||e_,this.d=l||this,this.set=c||op,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=sy,this.m=n,this.mt=r,this.tween=i},s}();si(np+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return tp[s]=1});Ei.TweenMax=Ei.TweenLite=dn;Ei.TimelineLite=Ei.TimelineMax=ti;jt=new ti({sortChildren:!1,defaults:bl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=Yg;var Xr=[],Kc={},ry=[],sm=0,ay=0,ch=function(e){return(Kc[e]||ry).map(function(t){return t()})},Dd=function(){var e=Date.now(),t=[];e-sm>2&&(ch("matchMediaInit"),Xr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Qi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ch("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sm=e,ch("matchMedia"))},i_=function(){function s(t,n){this.selector=n&&Cd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ay++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){nn(n)&&(r=i,i=n,n=nn);var a=this,o=function(){var c=Xt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Cd(r)),Xt=a,h=i.apply(a,arguments),nn(h)&&a._r.push(h),Xt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===nn?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Xt;Xt=null,n(this),Xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof dn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof ti?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof dn)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Xr.length;a--;)Xr[a].id===this.id&&Xr.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),oy=function(){function s(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){cs(n)||(n={matches:n});var a=new i_(0,r||this.scope),o=a.conditions={},l,c,u;Xt&&!a.selector&&(a.selector=Xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qi.matchMedia(n[c]),l&&(Xr.indexOf(a)<0&&Xr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Dd):l.addEventListener("change",Dd)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),yu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Wg(i)})},timeline:function(e){return new ti(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,n,i){En(e)&&(e=Oi(e)[0]);var r=Vr(e||{}).get,a=n?Lg:Pg;return n==="native"&&(n=""),e&&(t?a((gi[t]&&gi[t].get||r)(e,t,n,i)):function(o,l,c){return a((gi[o]&&gi[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Oi(e),e.length>1){var i=e.map(function(u){return ci.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=gi[t],o=Vr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Ua._pt=0,h.init(e,n?u+n:u,Ua,0,[e]),h.render(1,h),Ua._pt&&cp(1,Ua)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=ci.to(e,Ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wr(e.ease,bl.ease)),Qp(bl,e||{})},config:function(e){return Qp(Si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gi[o]&&!Ei[o]&&Ml(t+" effect requires "+o+" plugin.")}),rh[t]=function(o,l,c){return n(Oi(o),Ti(l||{},r),c)},a&&(ti.prototype[t]=function(o,l,c){return this.add(rh[t](o,cs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=Wr(t)},parseEase:function(e,t){return arguments.length?Wr(e,t):yt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ti(e),i,r;for(n.smoothChildTiming=ii(e.smoothChildTiming),jt.remove(n),n._dp=0,n._time=n._tTime=jt._time,i=jt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof dn&&i.vars.onComplete===i._targets[0]))&&ns(n,i,i._start-i._delay),i=r;return ns(jt,n,0),n},context:function(e,t){return e?new i_(e,t):Xt},matchMedia:function(e){return new oy(e)},matchMediaRefresh:function(){return Xr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Dd()},addEventListener:function(e,t){var n=Kc[e]||(Kc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:kx,wrapYoyo:Bx,distribute:kg,random:zg,snap:Bg,normalize:Fx,getUnit:Un,clamp:Ix,splitColor:Xg,toArray:Oi,selector:Cd,mapRange:Vg,pipe:Ox,unitize:Ux,interpolate:zx,shuffle:Fg},install:Tg,effects:rh,ticker:vi,updateRoot:ti.updateRoot,plugins:gi,globalTimeline:jt,core:{PropTween:ri,globals:Ag,Tween:dn,Timeline:ti,Animation:Al,getCache:Vr,_removeLinkedListItem:ku,reverting:function(){return wn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return Kf=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return yu[s]=dn[s]});vi.add(ti.updateRoot);Ua=yu.to({},{duration:0});var ly=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cy=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=ly(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},uh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(En(r)&&(l={},si(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}cy(o,r)}}}},ci=yu.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uh("roundProps",Pd),uh("modifiers"),uh("snap",Bg))||yu;dn.version=ti.version=ci.version="3.15.0";Eg=1;Jf()&&ao();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rm,Qs,Wa,up,Ur,am,hp,uy=function(){return typeof window<"u"},Fs={},Cr=180/Math.PI,Xa=Math.PI/180,ha=Math.atan2,om=1e8,dp=/([A-Z])/g,hy=/(left|right|width|margin|padding|x)/i,dy=/[\s,\(]\S/,ss={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},py=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},my=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},s_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},r_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_y=function(e,t,n){return e.style[t]=n},vy=function(e,t,n){return e.style.setProperty(t,n)},xy=function(e,t,n){return e._gsap[t]=n},yy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},by=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},My=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Zt="transform",ai=Zt+"Origin",Sy=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Fs&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ss[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Rs(i,o)}):this.tfm[e]=a.x?a[e]:Rs(i,e),e===ai&&(this.tfm.zOrigin=a.zOrigin);else return ss.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Zt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Zt}(r||t)&&this.props.push(e,t,r[e])},a_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ey=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(dp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=hp(),(!r||!r.isStart)&&!n[Zt]&&(a_(n),i.zOrigin&&n[ai]&&(n[ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},o_=function(e,t){var n={target:e,props:[],revert:Ey,save:Sy};return e._gsap||ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},l_,Nd=function(e,t){var n=Qs.createElementNS?Qs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qs.createElement(e);return n&&n.style?n:Qs.createElement(e)},Mi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(dp,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,oo(t)||t,1)||""},lm="O,Moz,ms,Ms,Webkit".split(","),oo=function(e,t,n){var i=t||Ur,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lm[a]+e in r););return a<0?null:(a===3?"ms":a>=0?lm[a]:"")+e},Od=function(){uy()&&window.document&&(rm=window,Qs=rm.document,Wa=Qs.documentElement,Ur=Nd("div")||{style:{}},Nd("div"),Zt=oo(Zt),ai=Zt+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",l_=!!oo("perspective"),hp=ci.core.reverting,up=1)},cm=function(e){var t=e.ownerSVGElement,n=Nd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Wa.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Wa.removeChild(n),r},um=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},c_=function(e){var t,n;try{t=e.getBBox()}catch{t=cm(e),n=1}return t&&(t.width||t.height)||n||(t=cm(e)),t&&!t.width&&!t.x&&!t.y?{x:+um(e,["x","cx","x1"])||0,y:+um(e,["y","cy","y1"])||0,width:0,height:0}:t},u_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&c_(e))},dr=function(e,t){if(t){var n=e.style,i;t in Fs&&t!==ai&&(t=Zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(dp,"-$1").toLowerCase())):n.removeAttribute(t)}},er=function(e,t,n,i,r,a){var o=new ri(e._pt,t,n,0,1,a?r_:s_);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},hm={deg:1,rad:1,turn:1},Ty={grid:1,flex:1},fr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ur.style,l=hy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,p,g;if(i===a||!r||hm[i]||hm[a])return r;if(a!=="px"&&!d&&(r=s(e,t,n,"px")),g=e.getCTM&&u_(e),(f||a==="%")&&(Fs[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],on(f?r/m*h:r/100*m);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qs||!_.appendChild)&&(_=Qs.body),p=_._gsap,p&&f&&p.width&&l&&p.time===vi.time&&!p.uncache)return on(r/p.width*h);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,m=e[u],b?e.style[t]=b:dr(e,t)}else(f||a==="%")&&!Ty[Mi(_,"display")]&&(o.position=Mi(e,"position")),_===e&&(o.position="static"),_.appendChild(Ur),m=Ur[u],_.removeChild(Ur),o.position="absolute";return l&&f&&(p=Vr(_),p.time=vi.time,p.width=_[u]),on(d?m*r/h:m&&r?h/m*r:0)},Rs=function(e,t,n,i){var r;return up||Od(),t in ss&&t!=="transform"&&(t=ss[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fs[t]&&t!=="transform"?(r=Rl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Mu(Mi(e,ai))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=bu[t]&&bu[t](e,t,n)||Mi(e,t)||Rg(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?fr(e,t,r,n)+n:r},Ay=function(e,t,n,i){if(!n||n==="none"){var r=oo(t,e,1),a=r&&Mi(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var o=new ri(this._pt,e.style,t,0,1,t_),l=0,c=0,u,h,d,f,m,_,p,g,b,y,x,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Mi(e,t)||i,_?e.style[t]=_:dr(e,t)),u=[n,i],Yg(u),n=u[0],i=u[1],d=n.match(Oa)||[],w=i.match(Oa)||[],w.length){for(;h=Oa.exec(i);)p=h[0],b=i.substring(l,h.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),p.charAt(1)==="="&&(p=Ga(f,p)+x),g=parseFloat(p),y=p.substr((g+"").length),l=Oa.lastIndex-y.length,y||(y=y||Si.units[t]||x,l===i.length&&(i+=y,o.e+=y)),x!==y&&(f=fr(e,t,_,y)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?r_:s_;return Sg.test(i)&&(o.e=0),this._pt=o,o},dm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=dm[n]||n,t[1]=dm[i]||i,t.join(" ")},Ry=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Fs[o]&&(l=1,o=o==="transformOrigin"?ai:Zt),dr(n,o);l&&(dr(n,Zt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Rl(n,1),a.uncache=1,a_(i)))}},bu={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new ri(e._pt,t,n,0,0,Ry);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},wl=[1,0,0,1,0,0],h_={},d_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fm=function(e){var t=Mi(e,Zt);return d_(t)?wl:t.substr(7).match(Mg).map(on)},fp=function(e,t){var n=e._gsap||Vr(e),i=e.style,r=fm(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?wl:r):(r===wl&&!e.offsetParent&&e!==Wa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Wa.appendChild(e)),r=fm(e),l?i.display=l:dr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Wa.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ud=function(e,t,n,i,r,a){var o=e._gsap,l=r||fp(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],b=l[5],y=t.split(" "),x=parseFloat(y[0])||0,w=parseFloat(y[1])||0,A,M,R,I;n?l!==wl&&(M=f*p-m*_)&&(R=x*(p/M)+w*(-_/M)+(_*b-p*g)/M,I=x*(-m/M)+w*(f/M)-(f*b-m*g)/M,x=R,w=I):(A=c_(e),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(y[1]||y[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(g=x-c,b=w-u,o.xOffset=h+(g*f+b*_)-g,o.yOffset=d+(g*m+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ai]="0px 0px",a&&(er(a,o,"xOrigin",c,x),er(a,o,"yOrigin",u,w),er(a,o,"xOffset",h,o.xOffset),er(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Rl=function(e,t){var n=e._gsap||new jg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Mi(e,ai)||"0",u,h,d,f,m,_,p,g,b,y,x,w,A,M,R,I,v,E,N,z,W,q,H,Y,$,re,L,le,qe,tt,j,ee;return u=h=d=_=p=g=b=y=x=0,f=m=1,n.svg=!!(e.getCTM&&u_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),i.scale=i.rotate=i.translate="none"),M=fp(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Ud(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,M)),w=n.xOrigin||0,A=n.yOrigin||0,M!==wl&&(E=M[0],N=M[1],z=M[2],W=M[3],u=q=M[4],h=H=M[5],M.length===6?(f=Math.sqrt(E*E+N*N),m=Math.sqrt(W*W+z*z),_=E||N?ha(N,E)*Cr:0,b=z||W?ha(z,W)*Cr+_:0,b&&(m*=Math.abs(Math.cos(b*Xa))),n.svg&&(u-=w-(w*E+A*z),h-=A-(w*N+A*W))):(ee=M[6],tt=M[7],L=M[8],le=M[9],qe=M[10],j=M[11],u=M[12],h=M[13],d=M[14],R=ha(ee,qe),p=R*Cr,R&&(I=Math.cos(-R),v=Math.sin(-R),Y=q*I+L*v,$=H*I+le*v,re=ee*I+qe*v,L=q*-v+L*I,le=H*-v+le*I,qe=ee*-v+qe*I,j=tt*-v+j*I,q=Y,H=$,ee=re),R=ha(-z,qe),g=R*Cr,R&&(I=Math.cos(-R),v=Math.sin(-R),Y=E*I-L*v,$=N*I-le*v,re=z*I-qe*v,j=W*v+j*I,E=Y,N=$,z=re),R=ha(N,E),_=R*Cr,R&&(I=Math.cos(R),v=Math.sin(R),Y=E*I+N*v,$=q*I+H*v,N=N*I-E*v,H=H*I-q*v,E=Y,q=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=on(Math.sqrt(E*E+N*N+z*z)),m=on(Math.sqrt(H*H+ee*ee)),R=ha(q,H),b=Math.abs(R)>2e-4?R*Cr:0,x=j?1/(j<0?-j:j):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!d_(Mi(e,Zt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=on(f),n.scaleY=on(m),n.rotation=on(_)+o,n.rotationX=on(p)+o,n.rotationY=on(g)+o,n.skewX=b+o,n.skewY=y+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ai]=Mu(c)),n.xOffset=n.yOffset=0,n.force3D=Si.force3D,n.renderTransform=n.svg?Py:l_?f_:Cy,n.uncache=0,n},Mu=function(e){return(e=e.split(" "))[0]+" "+e[1]},hh=function(e,t,n){var i=Un(t);return on(parseFloat(t)+parseFloat(fr(e,"x",n+"px",i)))+i},Cy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,f_(e,t)},vr="0deg",wo="0px",xr=") ",f_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,b=n.target,y=n.zOrigin,x="",w=g==="auto"&&e&&e!==1||g===!0;if(y&&(h!==vr||u!==vr)){var A=parseFloat(u)*Xa,M=Math.sin(A),R=Math.cos(A),I;A=parseFloat(h)*Xa,I=Math.cos(A),a=hh(b,a,M*I*-y),o=hh(b,o,-Math.sin(A)*-y),l=hh(b,l,R*I*-y+y)}p!==wo&&(x+="perspective("+p+xr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(w||a!==wo||o!==wo||l!==wo)&&(x+=l!==wo||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xr),c!==vr&&(x+="rotate("+c+xr),u!==vr&&(x+="rotateY("+u+xr),h!==vr&&(x+="rotateX("+h+xr),(d!==vr||f!==vr)&&(x+="skew("+d+", "+f+xr),(m!==1||_!==1)&&(x+="scale("+m+", "+_+xr),b.style[Zt]=x||"translate(0, 0)"},Py=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,b=n.forceCSS,y=parseFloat(a),x=parseFloat(o),w,A,M,R,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xa,c*=Xa,w=Math.cos(l)*h,A=Math.sin(l)*h,M=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Xa,I=Math.tan(c-u),I=Math.sqrt(1+I*I),M*=I,R*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),w*=I,A*=I)),w=on(w),A=on(A),M=on(M),R=on(R)):(w=h,R=d,A=M=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=fr(f,"x",a,"px"),x=fr(f,"y",o,"px")),(m||_||p||g)&&(y=on(y+m-(m*w+_*M)+p),x=on(x+_-(m*A+_*R)+g)),(i||r)&&(I=f.getBBox(),y=on(y+i/100*I.width),x=on(x+r/100*I.height)),I="matrix("+w+","+A+","+M+","+R+","+y+","+x+")",f.setAttribute("transform",I),b&&(f.style[Zt]=I)},Ly=function(e,t,n,i,r){var a=360,o=En(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*om)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*om)%a-~~(c/a)*a)),e._pt=d=new ri(e._pt,t,n,i,c,fy),d.e=u,d.u="deg",e._props.push(n),d},pm=function(e,t){for(var n in t)e[n]=t[n];return e},Dy=function(e,t,n){var i=pm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Zt]=t,o=Rl(n,1),dr(n,Zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Zt],a[Zt]=t,o=Rl(n,1),a[Zt]=c);for(l in Fs)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(f=Un(c),m=Un(u),h=f!==m?fr(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new ri(e._pt,o,l,h,d-h,Id),e._pt.u=m||0,e._props.push(l));pm(o,i)};si("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});bu[e>1?"border"+s:s]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(m){return Rs(o,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var p_={name:"css",register:Od,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,m,_,p,g,b,y,x,w,A,M,R,I;up||Od(),this.styles=this.styles||o_(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(gi[_]&&Kg(_,t,n,i,e,r)))){if(f=typeof u,m=bu[_],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=El(u)),m)m(this,e,_,u,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",or.lastIndex=0,or.test(c)||(p=Un(c),g=Un(u),g?p!==g&&(c=fr(e,_,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,i,r,0,0,_),a.push(_),R.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],En(c)&&~c.indexOf("random(")&&(c=El(c)),Un(c+"")||c==="auto"||(c+=Si.units[_]||Un(Rs(e,_))||""),(c+"").charAt(1)==="="&&(c=Rs(e,_))):c=Rs(e,_),d=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),_ in ss&&(_==="autoAlpha"&&(d===1&&Rs(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),er(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ss[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Fs,y){if(this.styles.save(_),I=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Mi(e,"perspective"),v?e.style.perspective=v:dr(e,"perspective")}h=parseFloat(u)}if(x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Rl(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new ri(this._pt,o,Zt,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new ri(this._pt,w,"scaleY",w.scaleY,(b?Ga(w.scaleY,b+h):h)-w.scaleY||0,Id),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ai,0,o[ai]),u=wy(u),w.svg?Ud(e,u,0,A,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&er(this,w,"zOrigin",w.zOrigin,g),er(this,o,_,Mu(c),Mu(u)));continue}else if(_==="svgOrigin"){Ud(e,u,1,A,0,this);continue}else if(_ in h_){Ly(this,w,_,d,b?Ga(d,b+u):u);continue}else if(_==="smoothOrigin"){er(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){Dy(this,u,e);continue}}else _ in o||(_=oo(_)||_);if(y||(h||h===0)&&(d||d===0)&&!dy.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),g=Un(u)||(_ in Si.units?Si.units[_]:p),p!==g&&(d=fr(e,_,c,g)),this._pt=new ri(this._pt,y?w:o,_,d,(b?Ga(d,b+h):h)-d,!y&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?gy:Id),this._pt.u=g||0,y&&I!==u?(this._pt.b=c,this._pt.e=I,this._pt.r=my):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=py);else if(_ in o)Ay.call(this,e,_,c,b?b+u:u);else if(_ in e)this.add(e,_,c||e[_],b?b+u:u,i,r);else if(_!=="parseTransform"){ep(_,u);continue}y||(_ in o?R.push(_,0,o[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),a.push(_)}}M&&n_(this)},render:function(e,t){if(t.tween._time||!hp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rs,aliases:ss,getSetter:function(e,t,n){var i=ss[t];return i&&i.indexOf(",")<0&&(t=i),t in Fs&&t!==ai&&(e._gsap.x||Rs(e,"x"))?n&&am===n?t==="scale"?yy:xy:(am=n||{})&&(t==="scale"?by:My):e.style&&!Zf(e.style[t])?_y:~t.indexOf("-")?vy:lp(e,t)},core:{_removeProperty:dr,_getMatrix:fp}};ci.utils.checkPrefix=oo;ci.core.getStyleSaver=o_;(function(s,e,t,n){var i=si(s+","+e+","+t,function(r){Fs[r]=1});si(e,function(r){Si.units[r]="deg",h_[r]=1}),ss[i[13]]=s+","+e,si(n,function(r){var a=r.split(":");ss[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Si.units[s]="px"});ci.registerPlugin(p_);var Re=ci.registerPlugin(p_)||ci;Re.core.Tween;const m_={title:"MINISO × Animal Crossing — Crea tu avatar",disclaimer:"Prototipo académico de Diseño Interactivo. Colaboración ficticia sin relación comercial con MINISO ni con Nintendo. Las marcas mencionadas pertenecen a sus titulares."},mm=[{label:"Colaboración",section:"colaboracion"},{label:"Testimonios",section:"testimonios"}],pp=[{id:"marca",label:"Marca"},{id:"productos",label:"Productos"},{id:"tiendas",label:"Tiendas"},{id:"inversores",label:"Inversores"},{id:"responsabilidad",label:"Responsabilidad social"}],gm={marca:{title:"Marca",body:"Diseño cotidiano, precios amables y objetos que acompañan la vida diaria. Esta página es un espacio reservado dentro del prototipo para el contenido institucional de la marca."},productos:{title:"Productos",body:"Aquí vivirá el catálogo general. Dentro de esta colaboración, el producto protagonista es el que tú diseñas: una figura, un peluche o un llavero hechos a partir de tu avatar."},tiendas:{title:"Tiendas",body:"Puedes recoger tu pedido en una tienda participante. En el prototipo, las tiendas aparecen como opciones de ejemplo durante el pedido."},inversores:{title:"Inversores",body:"Espacio reservado para información corporativa. No forma parte del recorrido principal de la experiencia."},responsabilidad:{title:"Responsabilidad social",body:"Las figuras de esta colaboración usan empaques reciclables y se fabrican bajo pedido para evitar inventario sobrante. Contenido de ejemplo para el prototipo."}},dh={hero:{kicker:"Edición de colaboración 2026",title:"Construye tu avatar. Hazlo tuyo.",text:"Elige su cabello, su ropa, sus accesorios y hasta quién lo acompaña. Cuando esté listo, lo convertimos en una figura que puedes tener en tus manos.",cta:"Personalizar mi avatar",hint:"Arrastra la isla para girarla"},collab:{title:"Una tienda de objetos cotidianos y una isla tranquila se encontraron",text:"Esta colaboración une el diseño práctico de MINISO con el espíritu relajado de Animal Crossing. Aquí no eliges un producto de un catálogo: lo diseñas tú.",steps:[{title:"Crea",text:"Arma tu avatar pieza por pieza, desde la forma del cuerpo hasta sus orejas."},{title:"Transforma",text:"Cada decisión cambia el avatar al instante. Prueba, deshaz y vuelve a probar."},{title:"Contempla",text:"Gíralo, acércate y reconoce en él algo tuyo."},{title:"Materializa",text:"Pide tu figura, peluche o llavero, y genera tu tarjeta coleccionable."}],productsTitle:"Lo que diseñas en pantalla llega a tus manos",cta:"Crea tu avatar"},testimonials:{title:"Lo que dicen quienes ya tienen el suyo",cta:"Personalizar mi avatar"}},Fd=[{name:"Valentina",place:"Cali",quote:"Le puse mis gafas redondas y mi bufanda roja. Cuando llegó la figura, mi mamá dijo que era yo en miniatura.",avatar:{hair:"bob",hairColor:"#2B2220",accFace:"roundglasses",accNeck:"scarf",shirt:"basic",shirtColor:"#F6F1E6",skin:"#E2A676",mouth:"open",mouthColor:"#E0706A"}},{name:"Andrés",place:"Medellín",quote:"Pensé que iba a tardar dos minutos y me quedé media hora probando peinados. La tarjeta la tengo de fondo de pantalla.",avatar:{hair:"spiky",hairColor:"#A0673A",shirt:"hoodie",shirtColor:"#3A4A5A",accHead:"headphones",skin:"#C68256",eyes:"big",eyeColor:"#6B4226"}},{name:"Mariana",place:"Bogotá",quote:"Me encantó poder poner a mi gata. Es el regalo de cumpleaños más personal que le he dado a mi hermana.",avatar:{hair:"long",hairColor:"#E8C07A",shirt:"dress",shirtColor:"#F2A7B8",companion:"cat",skin:"#FCE3CF",eyes:"happy",accHead:"flower"}},{name:"Samuel",place:"Barranquilla",quote:"Recogí mi pedido en la tienda y ya venía en una cajita con ventana. Se siente como un coleccionable de verdad.",avatar:{hair:"curly",hairColor:"#2B2220",shirt:"polo",shirtColor:"#F6D365",skin:"#5E3A26",accHead:"strawhat",companion:"shopbag"}},{name:"Lucía",place:"Pereira",quote:"Nada de plantillas: cada decisión la tomé yo. Por eso se siente mío.",avatar:{hair:"buns",hairColor:"#F2A7B8",shirt:"stripes",shirtColor:"#7FB3D5",skin:"#F4C9A3",accFace:"blush",eyes:"almond",eyeColor:"#8D6BB5"}},{name:"Tomás",place:"Cartagena",quote:"Hice uno para mí y otro para mi abuelo, con su sombrero y su perro. Los dos están en su repisa.",avatar:{hair:"none",shirt:"polo",shirtColor:"#F6F1E6",skin:"#8F5A3A",accHead:"cap",companion:"dog",accFace:"roundglasses"}}],g_=[{id:"figure",name:"Figura coleccionable",detail:"Resina pintada a mano, 10 cm, con base de pasto y caja con ventana.",price:89900,days:"7 a 10 días hábiles"},{id:"plush",name:"Peluche",detail:"Felpa suave, 25 cm, bordado con los detalles de tu avatar.",price:69900,days:"10 a 12 días hábiles"},{id:"keychain",name:"Llavero",detail:"Acrílico doble cara, 6 cm, con argolla metálica.",price:29900,days:"4 a 6 días hábiles"}],Su={cost:9900,freeFrom:15e4},__={Cali:["MINISO Chipichape","MINISO Unicentro","MINISO Jardín Plaza"],Bogotá:["MINISO Andino","MINISO Titán Plaza","MINISO Unicentro Bogotá"],Medellín:["MINISO Santafé","MINISO El Tesoro"],Barranquilla:["MINISO Buenavista"],Pereira:["MINISO Parque Arboleda"],Cartagena:["MINISO Caribe Plaza"]},Iy=["Bancolombia","Banco de Bogotá","Davivienda","BBVA","Banco de Occidente","Nequi"],$a={personalities:["Creativo","Tranquilo","Aventurero","Soñador","Alegre","Curioso"],favorites:["Personalizado","Una taza de café","Las flores","Coleccionar cosas","La música","Los días de lluvia"],themes:[{id:"spring",name:"Primavera",from:"#DDF0D2",to:"#FFF4D6",leaf:"#7DB46C"},{id:"beach",name:"Playa",from:"#CFEAF2",to:"#FFF1D2",leaf:"#5FA3B8"},{id:"autumn",name:"Otoño",from:"#F8DDC0",to:"#FFF3DD",leaf:"#D08A43"},{id:"night",name:"Noche",from:"#C9CBEA",to:"#F3E9F7",leaf:"#7D7AB8"}],series:"Serie Isla 01"},kd=new Map;let Kl=null,Da=null,Zc=null,_m=Promise.resolve();function ra(s,e){kd.set(s,e)}function Gl(s){location.hash==="#"+s?Bd():location.hash=s}function vm(s){!location.hash||location.hash==="#/"||location.hash==="#"?v_(s):(Zc=s,Gl("/"))}function v_(s){const e=document.getElementById(s);if(!e)return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})}function Ny(){const e=((location.hash||"#/").slice(1)||"/").split("/").filter(Boolean);return{base:"/"+(e[0]||""),param:e[1]||null}}function Bd(){_m=_m.then(Oy).catch(s=>console.error(s))}async function Oy(){const{base:s,param:e}=Ny(),t=kd.get(s)||kd.get("/");document.body.dataset.route=t.name||s.slice(1)||"home",Kl&&(await Re.to(Da,{autoAlpha:0,y:8,duration:.22,ease:"power1.in"}),Kl.unmount&&Kl.unmount()),Da.innerHTML="",window.scrollTo(0,0),Kl=t,await t.mount(Da,e),Re.fromTo(Da,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.4,ease:"power2.out"});const n=Da.querySelector("h1");if(n&&(n.setAttribute("tabindex","-1"),n.focus({preventScroll:!0})),Zc){const i=Zc;Zc=null,requestAnimationFrame(()=>setTimeout(()=>v_(i),60))}}function Uy(s){Da=s,window.addEventListener("hashchange",Bd),Bd()}const Fy=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}),Ns=s=>Fy.format(s);function De(s=""){return String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function x_(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return Math.abs(e)}const pe=(s,e=document)=>e.querySelector(s),Dt=(s,e=document)=>[...e.querySelectorAll(s)],aa=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ky={undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',redo:'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',reset:'<path d="M3.5 12a8.5 8.5 0 1 0 2.8-6.3L3.5 8.2"/><path d="M3.5 3.5v4.7h4.7"/>',front:'<circle cx="12" cy="9" r="4.5"/><path d="M5 21c1.4-3.6 3.9-5.2 7-5.2s5.6 1.6 7 5.2"/>',rotate:'<path d="M20.5 12a8.5 8.5 0 0 1-14.9 5.6"/><path d="M3.5 12A8.5 8.5 0 0 1 18.4 6.4"/><path d="M18.5 2.5v4h-4"/><path d="M5.5 21.5v-4h4"/>',zoomIn:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8M11 8v6M8 11h6"/>',zoomOut:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8M8 11h6"/>',save:'<path d="M6.5 3.5h11v17l-5.5-3.8-5.5 3.8z"/>',sound:'<path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6"/><path d="M18 6.5a7.8 7.8 0 0 1 0 11"/>',soundOff:'<path d="M4 9.5v5h3.5l4.5 4v-13l-4.5 4z"/><path d="m16 9.5 5 5M21 9.5l-5 5"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.4c-.7.3-1 .9-1 1.7"/><path d="M12 17h.01"/>',close:'<path d="M6 6l12 12M18 6 6 18"/>',check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',bag:'<path d="M5 8h14l-1.2 12.5H6.2z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/>',card:'<rect x="5" y="2.5" width="14" height="19" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M8.5 17h7"/>',leaf:'<path d="M4.5 19.5C4.5 11 10 4.5 19.5 4.5c0 9.5-6.5 15-15 15z"/><path d="M4.5 19.5 13 11"/>',share:'<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4.1M8.2 13.2l7.6 4.1"/>',download:'<path d="M12 4v11m-5-5 5 5 5-5"/><path d="M5 20h14"/>',arrowLeft:'<path d="M19 12H5m6-6-6 6 6 6"/>',arrowRight:'<path d="M5 12h14m-6-6 6 6-6 6"/>',menu:'<path d="M4 7h16M4 12h16M4 17h10"/>',dice:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/>',body:'<circle cx="12" cy="7" r="3.5"/><path d="M6.5 21v-4.5a5.5 5.5 0 0 1 11 0V21"/>',hair:'<path d="M5 15c0-6.5 3.2-11 7-11s7 4.5 7 11"/><path d="M5 15c2.2-1 3.3-4 3.3-6.3C10.5 11 14 12 19 11.5"/>',face:'<circle cx="12" cy="12" r="9"/><path d="M9 10v1M15 10v1M8.5 15c2 2 5 2 7 0"/>',shirt:'<path d="M8.5 4 4 7l2 4 2-1v10h8V10l2 1 2-4-4.5-3c-.9 1.4-2.1 2-3.5 2s-2.6-.6-3.5-2z"/>',glasses:'<circle cx="7" cy="14" r="3.5"/><circle cx="17" cy="14" r="3.5"/><path d="M10.5 14h3M3.5 13 5 8M20.5 13 19 8"/>',truck:'<path d="M3 6.5h11v9.5H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',store:'<path d="M4 9 5.5 4h13L20 9M4 9v11h16V9M4 9h16"/><path d="M10 20v-6h4v6"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',none:'<circle cx="12" cy="12" r="8"/><path d="m6.5 17.5 11-11"/>',link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.2-3.8 4-5.5 7.5-5.5s6.3 1.7 7.5 5.5"/>',minus:'<path d="M6 12h12"/>',plus:'<path d="M12 6v12M6 12h12"/>',sparkle:'<path d="M12 3.5c.6 4.2 2.3 6.5 6.5 7.5-4.2 1-5.9 3.3-6.5 7.5-.6-4.2-2.3-6.5-6.5-7.5 4.2-1 5.9-3.3 6.5-7.5z"/>',edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>'};function xe(s,e=""){return`<svg class="icon ${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ky[s]||""}</svg>`}function Eu(s="#7DB46C",e=""){return`<svg class="${e}" viewBox="0 0 60 80" aria-hidden="true" focusable="false"><path d="M30 76C8 58 6 30 30 4c24 26 22 54 0 72z" fill="${s}"/><path d="M30 72V14" stroke="rgba(255,255,255,.55)" stroke-width="3" stroke-linecap="round"/><path d="M30 34l10-8M30 48l12-9M30 48l-12-9M30 34l-10-8" stroke="rgba(255,255,255,.4)" stroke-width="2.4" stroke-linecap="round"/></svg>`}function Hu({className:s="",label:e="",html:t=""}){const n=document.createElement("dialog");return n.className=`modal ${s}`,e&&n.setAttribute("aria-label",e),n.innerHTML=`<div class="modal-card">${t}</div>`,document.body.appendChild(n),n.addEventListener("click",i=>{i.target===n&&as(n)}),n.addEventListener("cancel",i=>{i.preventDefault(),as(n)}),n}function Vu(s){if(s.open)return;s.showModal();const e=s.querySelector(".modal-card");Re.fromTo(s,{backgroundColor:"rgba(58,46,40,0)"},{backgroundColor:"rgba(58,46,40,0.42)",duration:.3}),Re.fromTo(e,{y:24,scale:.96,autoAlpha:0},{y:0,scale:1,autoAlpha:1,duration:.45,ease:"back.out(1.5)"})}function as(s,e){if(!s.open)return;const t=s.querySelector(".modal-card");Re.to(s,{backgroundColor:"rgba(58,46,40,0)",duration:.22}),Re.to(t,{y:16,scale:.97,autoAlpha:0,duration:.22,ease:"power1.in",onComplete:()=>{s.close(),e&&e()}})}function Cl(s=""){return`<span class="lockup ${s}" aria-label="MINISO por Animal Crossing" role="img">
    <span class="lk-miniso" aria-hidden="true">MINISO</span>
    <span class="lk-x" aria-hidden="true">×</span>
    <span class="lk-ac" aria-hidden="true">Animal Crossing</span>
  </span>`}function By(s){s.innerHTML=`
    <div class="header-inner">
      <a class="header-brand" href="#/" aria-label="Inicio: MINISO por Animal Crossing">${Cl()}</a>
      <nav class="header-nav" aria-label="Principal">
        ${mm.map(i=>`<button type="button" class="nav-link" data-section="${i.section}">${i.label}</button>`).join("")}
        <button type="button" class="nav-link nav-menu" data-open-menu aria-haspopup="dialog">${xe("menu")}<span>Menú</span></button>
      </nav>
      <a class="btn btn--primary btn--sm header-cta" href="#/personalizar">${xe("sparkle")}<span>Personalizar</span></a>
    </div>`;const e=Hu({className:"drawer",label:"Menú",html:`
      <div class="drawer-head">
        ${Cl()}
        <button type="button" class="icon-btn" data-close aria-label="Cerrar menú">${xe("close")}</button>
      </div>
      <nav aria-label="Menú del sitio">
        <p class="drawer-label">La colaboración</p>
        <ul class="drawer-list">
          ${mm.map(i=>`<li><button type="button" data-section="${i.section}">${i.label}</button></li>`).join("")}
          <li><a href="#/personalizar">Personalización</a></li>
        </ul>
        <p class="drawer-label">MINISO</p>
        <ul class="drawer-list">
          ${pp.map(i=>`<li><a href="#/info/${i.id}">${i.label}</a></li>`).join("")}
        </ul>
      </nav>
      <a class="btn btn--primary btn--block" href="#/personalizar">Personalizar mi avatar</a>`}),t=()=>Vu(e);s.addEventListener("click",i=>{const r=i.target.closest("[data-section]");r&&vm(r.dataset.section),i.target.closest("[data-open-menu]")&&t()}),e.addEventListener("click",i=>{i.target.closest("[data-close]")&&as(e);const r=i.target.closest("[data-section]");r&&as(e,()=>vm(r.dataset.section)),i.target.closest("a")&&as(e)});const n=()=>s.classList.toggle("is-scrolled",window.scrollY>8);window.addEventListener("scroll",n,{passive:!0}),n()}function zy(s){s.innerHTML=`
    <div class="footer-inner">
      <div class="footer-brand">${Cl()}<p>${m_.disclaimer}</p></div>
      <nav class="footer-nav" aria-label="Pie de página">
        ${pp.map(e=>`<a href="#/info/${e.id}">${e.label}</a>`).join("")}
      </nav>
    </div>`}function Hy(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Vy(s,e,t){return e&&Hy(s.prototype,e),s}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var An,Jc,xi,tr,nr,Ya,y_,Pr,qa,b_,Ls,Xi,M_,S_=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},E_=1,Fa=[],ht=[],os=[],al=Date.now,zd=function(e,t){return t},Gy=function(){var e=qa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ht),i.push.apply(i,os),ht=n,os=i,zd=function(a,o){return t[a](o)}},lr=function(e,t){return~os.indexOf(e)&&os[os.indexOf(e)+1][t]},ol=function(e){return!!~b_.indexOf(e)},Vn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Zl="scrollLeft",Jl="scrollTop",Hd=function(){return Ls&&Ls.isPressed||ht.cache++},Tu=function(e,t){var n=function i(r){if(r||r===0){E_&&(xi.history.scrollRestoration="manual");var a=Ls&&Ls.isPressed;r=i.v=Math.round(r)||(Ls&&Ls.iOS?1:0),e(r),i.cacheID=ht.cache,a&&zd("ss",r)}else(t||ht.cache!==i.cacheID||zd("ref"))&&(i.cacheID=ht.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Yn={s:Zl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Tu(function(s){return arguments.length?xi.scrollTo(s,gn.sc()):xi.pageXOffset||tr[Zl]||nr[Zl]||Ya[Zl]||0})},gn={s:Jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Yn,sc:Tu(function(s){return arguments.length?xi.scrollTo(Yn.sc(),s):xi.pageYOffset||tr[Jl]||nr[Jl]||Ya[Jl]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Wy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},pr=function(e,t){var n=t.s,i=t.sc;ol(e)&&(e=tr.scrollingElement||nr);var r=ht.indexOf(e),a=i===gn.sc?1:2;!~r&&(r=ht.push(e)-1),ht[r+a]||Vn(e,"scroll",Hd);var o=ht[r+a],l=o||(ht[r+a]=Tu(lr(e,n),!0)||(ol(e)?i:Tu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},Vd=function(e,t,n){var i=e,r=e,a=al(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=al();_||p-a>l?(r=i,i=m,o=a,a=p):n?i+=m:i=r+(m-r)/(p-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},d=function(m){var _=o,p=r,g=al();return(m||m===0)&&m!==i&&u(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Ro=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},T_=function(){qa=An.core.globals().ScrollTrigger,qa&&qa.core&&Gy()},A_=function(e){return An=e||S_(),!Jc&&An&&typeof document<"u"&&document.body&&(xi=window,tr=document,nr=tr.documentElement,Ya=tr.body,b_=[xi,tr,nr,Ya],An.utils.clamp,M_=An.core.context||function(){},Pr="onpointerenter"in Ya?"pointer":"mouse",y_=cn.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xi=cn.eventTypes=("ontouchstart"in nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return E_=0},500),Jc=1),qa||T_(),Jc};Yn.op=gn;ht.cache=0;var cn=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Jc||A_(An)||console.warn("Please gsap.registerPlugin(Observer)"),qa||T_();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,b=n.onDrag,y=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,M=n.onUp,R=n.onDown,I=n.onChangeX,v=n.onChangeY,E=n.onChange,N=n.onToggleX,z=n.onToggleY,W=n.onHover,q=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,$=n.isNormalizer,re=n.onGestureStart,L=n.onGestureEnd,le=n.onWheel,qe=n.onEnable,tt=n.onDisable,j=n.onClick,ee=n.scrollSpeed,ge=n.capture,oe=n.allowClicks,Ie=n.lockAxis,Ce=n.onLockAxis;this.target=o=ei(o)||nr,this.vars=n,f&&(f=An.utils.toArray(f)),i=i||1e-9,r=r||0,m=m||1,ee=ee||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(Ya).lineHeight)||22);var Qe,Je,We,D,_t,Xe,je,k=this,ot=0,Be=0,C=n.passive||!u&&n.passive!==!1,S=pr(o,Yn),X=pr(o,gn),J=S(),ne=X(),Z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Xi[0]==="pointerdown",Ae=ol(o),se=o.ownerDocument||tr,_e=[0,0,0],Ze=[0,0,0],ie=0,Se=function(){return ie=al()},Ee=function(Pe,bt){return(k.event=Pe)&&f&&Wy(Pe.target,f)||bt&&Z&&Pe.pointerType!=="touch"||Y&&Y(Pe,bt)},He=function(){k._vx.reset(),k._vy.reset(),Je.pause(),h&&h(k)},Me=function(){var Pe=k.deltaX=xm(_e),bt=k.deltaY=xm(Ze),ve=Math.abs(Pe)>=i,ze=Math.abs(bt)>=i;E&&(ve||ze)&&E(k,Pe,bt,_e,Ze),ve&&(w&&k.deltaX>0&&w(k),A&&k.deltaX<0&&A(k),I&&I(k),N&&k.deltaX<0!=ot<0&&N(k),ot=k.deltaX,_e[0]=_e[1]=_e[2]=0),ze&&(R&&k.deltaY>0&&R(k),M&&k.deltaY<0&&M(k),v&&v(k),z&&k.deltaY<0!=Be<0&&z(k),Be=k.deltaY,Ze[0]=Ze[1]=Ze[2]=0),(D||We)&&(H&&H(k),We&&(p&&We===1&&p(k),b&&b(k),We=0),D=!1),Xe&&!(Xe=!1)&&Ce&&Ce(k),_t&&(le(k),_t=!1),Qe=0},nt=function(Pe,bt,ve){_e[ve]+=Pe,Ze[ve]+=bt,k._vx.update(Pe),k._vy.update(bt),c?Qe||(Qe=requestAnimationFrame(Me)):Me()},$e=function(Pe,bt){Ie&&!je&&(k.axis=je=Math.abs(Pe)>Math.abs(bt)?"x":"y",Xe=!0),je!=="y"&&(_e[2]+=Pe,k._vx.update(Pe,!0)),je!=="x"&&(Ze[2]+=bt,k._vy.update(bt,!0)),c?Qe||(Qe=requestAnimationFrame(Me)):Me()},vt=function(Pe){if(!Ee(Pe,1)){Pe=Ro(Pe,u);var bt=Pe.clientX,ve=Pe.clientY,ze=bt-k.x,Ue=ve-k.y,Ke=k.isDragging;k.x=bt,k.y=ve,(Ke||(ze||Ue)&&(Math.abs(k.startX-bt)>=r||Math.abs(k.startY-ve)>=r))&&(We||(We=Ke?2:1),Ke||(k.isDragging=!0),$e(ze,Ue))}},O=k.onPress=function(Oe){Ee(Oe,1)||Oe&&Oe.button||(k.axis=je=null,Je.pause(),k.isPressed=!0,Oe=Ro(Oe),ot=Be=0,k.startX=k.x=Oe.clientX,k.startY=k.y=Oe.clientY,k._vx.reset(),k._vy.reset(),Vn($?o:se,Xi[1],vt,C,!0),k.deltaX=k.deltaY=0,y&&y(k))},te=k.onRelease=function(Oe){if(!Ee(Oe,1)){zn($?o:se,Xi[1],vt,!0);var Pe=!isNaN(k.y-k.startY),bt=k.isDragging,ve=bt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),ze=Ro(Oe);!ve&&Pe&&(k._vx.reset(),k._vy.reset(),u&&oe&&An.delayedCall(.08,function(){if(al()-ie>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(se.createEvent){var Ue=se.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,xi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Ue)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&bt&&!$&&Je.restart(!0),We&&Me(),g&&bt&&g(k),x&&x(k,ve)}},K=function(Pe){return Pe.touches&&Pe.touches.length>1&&(k.isGesturing=!0)&&re(Pe,k.isDragging)},Q=function(){return(k.isGesturing=!1)||L(k)},ce=function(Pe){if(!Ee(Pe)){var bt=S(),ve=X();nt((bt-J)*ee,(ve-ne)*ee,1),J=bt,ne=ve,h&&Je.restart(!0)}},de=function(Pe){if(!Ee(Pe)){Pe=Ro(Pe,u),le&&(_t=!0);var bt=(Pe.deltaMode===1?l:Pe.deltaMode===2?xi.innerHeight:1)*m;nt(Pe.deltaX*bt,Pe.deltaY*bt,0),h&&!$&&Je.restart(!0)}},it=function(Pe){if(!Ee(Pe)){var bt=Pe.clientX,ve=Pe.clientY,ze=bt-k.x,Ue=ve-k.y;k.x=bt,k.y=ve,D=!0,h&&Je.restart(!0),(ze||Ue)&&$e(ze,Ue)}},Ot=function(Pe){k.event=Pe,W(k)},Gt=function(Pe){k.event=Pe,q(k)},ft=function(Pe){return Ee(Pe)||Ro(Pe,u)&&j(k)};Je=k._dc=An.delayedCall(d||.25,He).pause(),k.deltaX=k.deltaY=0,k._vx=Vd(0,50,!0),k._vy=Vd(0,50,!0),k.scrollX=S,k.scrollY=X,k.isDragging=k.isGesturing=k.isPressed=!1,M_(this),k.enable=function(Oe){return k.isEnabled||(Vn(Ae?se:o,"scroll",Hd),a.indexOf("scroll")>=0&&Vn(Ae?se:o,"scroll",ce,C,ge),a.indexOf("wheel")>=0&&Vn(o,"wheel",de,C,ge),(a.indexOf("touch")>=0&&y_||a.indexOf("pointer")>=0)&&(Vn(o,Xi[0],O,C,ge),Vn(se,Xi[2],te),Vn(se,Xi[3],te),oe&&Vn(o,"click",Se,!0,!0),j&&Vn(o,"click",ft),re&&Vn(se,"gesturestart",K),L&&Vn(se,"gestureend",Q),W&&Vn(o,Pr+"enter",Ot),q&&Vn(o,Pr+"leave",Gt),H&&Vn(o,Pr+"move",it)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=D=We=!1,k._vx.reset(),k._vy.reset(),J=S(),ne=X(),Oe&&Oe.type&&O(Oe),qe&&qe(k)),k},k.disable=function(){k.isEnabled&&(Fa.filter(function(Oe){return Oe!==k&&ol(Oe.target)}).length||zn(Ae?se:o,"scroll",Hd),k.isPressed&&(k._vx.reset(),k._vy.reset(),zn($?o:se,Xi[1],vt,!0)),zn(Ae?se:o,"scroll",ce,ge),zn(o,"wheel",de,ge),zn(o,Xi[0],O,ge),zn(se,Xi[2],te),zn(se,Xi[3],te),zn(o,"click",Se,!0),zn(o,"click",ft),zn(se,"gesturestart",K),zn(se,"gestureend",Q),zn(o,Pr+"enter",Ot),zn(o,Pr+"leave",Gt),zn(o,Pr+"move",it),k.isEnabled=k.isPressed=k.isDragging=!1,tt&&tt(k))},k.kill=k.revert=function(){k.disable();var Oe=Fa.indexOf(k);Oe>=0&&Fa.splice(Oe,1),Ls===k&&(Ls=0)},Fa.push(k),$&&ol(o)&&(Ls=k),k.enable(_)},Vy(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();cn.version="3.15.0";cn.create=function(s){return new cn(s)};cn.register=A_;cn.getAll=function(){return Fa.slice()};cn.getById=function(s){return Fa.filter(function(e){return e.vars.id===s})[0]};S_()&&An.registerPlugin(cn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,Ia,ut,Ct,_i,At,mp,Au,Pl,ll,Ko,Ql,Dn,Gu,Gd,Xn,ym,bm,Na,w_,fh,R_,Wn,Wd,C_,P_,qs,Xd,gp,ja,_p,cl,$d,ph,ec=1,In=Date.now,mh=In(),Fi=0,Zo=0,Mm=function(e,t,n){var i=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Sm=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Xy=function s(){return Zo&&requestAnimationFrame(s)},Em=function(){return Gu=1},Tm=function(){return Gu=0},es=function(e){return e},Jo=function(e){return Math.round(e*1e5)/1e5||0},L_=function(){return typeof window<"u"},D_=function(){return we||L_()&&(we=window.gsap)&&we.registerPlugin&&we},jr=function(e){return!!~mp.indexOf(e)},I_=function(e){return(e==="Height"?_p:ut["inner"+e])||_i["client"+e]||At["client"+e]},N_=function(e){return lr(e,"getBoundingClientRect")||(jr(e)?function(){return iu.width=ut.innerWidth,iu.height=_p,iu}:function(){return Ps(e)})},$y=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=lr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?I_(r):e["client"+r])||0}},Yy=function(e,t){return!t||~os.indexOf(e)?N_(e):function(){return iu}},rs=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=lr(e,n))?a()-N_(e)()[r]:jr(e)?(_i[n]||At[n])-I_(i):e[n]-e["offset"+i])},tc=function(e,t){for(var n=0;n<Na.length;n+=3)(!t||~t.indexOf(Na[n+1]))&&e(Na[n],Na[n+1],Na[n+2])},mi=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},Qo=function(e){return typeof e=="number"},Lr=function(e){return typeof e=="object"},Co=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},da=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},fa=Math.abs,O_="left",U_="top",vp="right",xp="bottom",$r="width",Yr="height",ul="Right",hl="Left",dl="Top",fl="Bottom",hn="padding",Li="margin",lo="Width",yp="Height",mn="px",Di=function(e){return ut.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},qy=function(e){var t=Di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Am=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ps=function(e,t){var n=t&&Di(e)[Gd]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},wu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},F_=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},jy=function(e){return function(t){return we.utils.snap(F_(e),t)}},bp=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},Ky=function(e){return function(t,n){return bp(F_(e))(t,n.direction)}},nc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Sn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ic=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},wm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sc={toggleActions:"play",anticipatePin:0},Ru={top:0,left:0,center:.5,bottom:1,right:1},Qc=function(e,t){if(mi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ru?Ru[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rc=function(e,t,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,m=Ct.createElement("div"),_=jr(n)||lr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?At:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,y=b?c:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(i===gn?vp:xp)+":"+(a+parseFloat(d))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=x,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],eu(m,0,i,b),m},eu=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+lo]=1,r["border"+o+lo]=0,r[n.p]=t+"px",we.set(e,r)},ct=[],Yd={},Ll,Rm=function(){return In()-Fi>34&&(Ll||(Ll=requestAnimationFrame(Os)))},pa=function(){(!Wn||!Wn.isPressed||Wn.startX>At.clientWidth)&&(ht.cache++,Wn?Ll||(Ll=requestAnimationFrame(Os)):Os(),Fi||Zr("scrollStart"),Fi=In())},gh=function(){P_=ut.innerWidth,C_=ut.innerHeight},el=function(e){ht.cache++,(e===!0||!Dn&&!R_&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!Wd||P_!==ut.innerWidth||Math.abs(ut.innerHeight-C_)>ut.innerHeight*.25))&&Au.restart(!0)},Kr={},Zy=[],k_=function s(){return Mn(dt,"scrollEnd",s)||Fr(!0)},Zr=function(e){return Kr[e]&&Kr[e].map(function(t){return t()})||Zy},pi=[],B_=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},z_=function(){return ht.forEach(function(e){return Fn(e)&&++e.cacheID&&(e.rec=e())})},Mp=function(e,t){var n;for(Xn=0;Xn<ct.length;Xn++)n=ct[Xn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));cl=!0,t&&B_(t),t||Zr("revert")},H_=function(e,t){ht.cache++,(t||!$n)&&ht.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),mi(e)&&(ut.history.scrollRestoration=gp=e)},$n,qr=0,Cm,Jy=function(){if(Cm!==qr){var e=Cm=qr;requestAnimationFrame(function(){return e===qr&&Fr(!0)})}},V_=function(){At.appendChild(ja),_p=!Wn&&ja.offsetHeight||ut.innerHeight,At.removeChild(ja)},Pm=function(e){return Pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Fr=function(e,t){if(_i=Ct.documentElement,At=Ct.body,mp=[ut,Ct,_i,At],Fi&&!e&&!cl){Sn(dt,"scrollEnd",k_);return}V_(),$n=dt.isRefreshing=!0,cl||z_();var n=Zr("refreshInit");w_&&dt.sort(),t||Mp(),ht.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),cl=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),$d=1,Pm(!0),ct.forEach(function(i){var r=rs(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),Pm(!1),$d=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ht.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),H_(gp,1),Au.pause(),qr++,$n=2,Os(2),ct.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=dt.isRefreshing=!1,Zr("refresh")},qd=0,tu=1,pl,Os=function(e){if(e===2||!$n&&!cl){dt.isUpdating=!0,pl&&pl.update(0);var t=ct.length,n=In(),i=n-mh>=50,r=t&&ct[0].scroll();if(tu=qd>r?-1:1,$n||(qd=r),i&&(Fi&&!Gu&&n-Fi>200&&(Fi=0,Zr("scrollEnd")),Ko=mh,mh=n),tu<0){for(Xn=t;Xn-- >0;)ct[Xn]&&ct[Xn].update(0,i);tu=1}else for(Xn=0;Xn<t;Xn++)ct[Xn]&&ct[Xn].update(0,i);dt.isUpdating=!1}Ll=0},jd=[O_,U_,xp,vp,Li+fl,Li+ul,Li+dl,Li+hl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nu=jd.concat([$r,Yr,"boxSizing","max"+lo,"max"+yp,"position",Li,hn,hn+dl,hn+ul,hn+fl,hn+hl]),Qy=function(e,t,n){Ka(n);var i=e._gsap;if(i.spacerIsNative)Ka(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},_h=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=jd.length,a=t.style,o=e.style,l;r--;)l=jd[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[xp]=o[vp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[$r]=wu(e,Yn)+mn,a[Yr]=wu(e,gn)+mn,a[hn]=o[Li]=o[U_]=o[O_]="0",Ka(i),o[$r]=o["max"+lo]=n[$r],o[Yr]=o["max"+yp]=n[Yr],o[hn]=n[hn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eb=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(eb,"-$1").toLowerCase())}},ac=function(e){for(var t=nu.length,n=e.style,i=[],r=0;r<t;r++)i.push(nu[r],n[nu[r]]);return i.t=e,i},tb=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},iu={left:0,top:0},Lm=function(e,t,n,i,r,a,o,l,c,u,h,d,f,m){Fn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Qc("0"+e.substr(3),n):0));var _=f?f.time():0,p,g,b;if(f&&f.seek(0),isNaN(e)||(e=+e),Qo(e))f&&(e=we.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&eu(o,n,i,!0);else{Fn(t)&&(t=t(l));var y=(e||"0").split(" "),x,w,A,M;b=ei(t,l)||At,x=Ps(b)||{},(!x||!x.left&&!x.top)&&Di(b).display==="none"&&(M=b.style.display,b.style.display="block",x=Ps(b),M?b.style.display=M:b.style.removeProperty("display")),w=Qc(y[0],x[i.d]),A=Qc(y[1]||"0",n),e=x[i.p]-c[i.p]-u+w+r-A,o&&eu(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var R=e+n,I=a._isStart;p="scroll"+i.d2,eu(a,R,i,I&&R>20||!I&&(h?Math.max(At[p],_i[p]):a.parentNode[p])<=R+1),h&&(c=Ps(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+mn))}return f&&b&&(p=Ps(b),f.seek(d),g=Ps(b),f._caScrollDist=p[i.p]-g[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},nb=/(webkit|moz|length|cssText|inset)/i,Dm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===At){e._stOrig=r.cssText,o=Di(e);for(a in o)!+a&&!nb.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},G_=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},oc=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},Im=function(e,t){var n=pr(e,t),i="_scroll"+t.p2,r=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,m={};c=c||n();var _=G_(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ht.cache++,a.tween&&Os()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=we.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Sn(e,"wheel",n.wheelHandler),dt.isTouch&&Sn(e,"touchmove",n.wheelHandler),r},dt=function(){function s(t,n){Ia||s.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xd(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zo){this.update=this.refresh=this.kill=es;return}n=Am(mi(n)||Qo(n)||n.nodeType?{trigger:n}:n,sc);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,b=r.onSnapComplete,y=r.once,x=r.snap,w=r.pinReparent,A=r.pinSpacer,M=r.containerAnimation,R=r.fastScrollEnd,I=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Yn:gn,E=!h&&h!==0,N=ei(n.scroller||ut),z=we.core.getCache(N),W=jr(N),q=("pinType"in n?n.pinType:lr(N,"pinType")||W&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=E&&n.toggleActions.split(" "),$="markers"in n?n.markers:sc.markers,re=W?0:parseFloat(Di(N)["border"+v.p2+lo])||0,L=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(L)},qe=$y(N,W,v),tt=Yy(N,W),j=0,ee=0,ge=0,oe=pr(N,v),Ie,Ce,Qe,Je,We,D,_t,Xe,je,k,ot,Be,C,S,X,J,ne,Z,Ae,se,_e,Ze,ie,Se,Ee,He,Me,nt,$e,vt,O,te,K,Q,ce,de,it,Ot,Gt;if(L._startClamp=L._endClamp=!1,L._dir=v,p*=45,L.scroller=N,L.scroll=M?M.time.bind(M):oe,Je=oe(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(w_=1,n.refreshPriority===-9999&&(pl=L)),z.tweenScroll=z.tweenScroll||{top:Im(N,gn),left:Im(N,Yn)},L.tweenTo=Ie=z.tweenScroll[v.p],L.scrubDuration=function(ve){K=Qo(ve)&&ve,K?te?te.duration(ve):te=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return g&&g(L)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),vt=0,l||(l=i.vars.id)),x&&((!Lr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&we.set(W?[At,_i]:N,{scrollBehavior:"auto"}),ht.forEach(function(ve){return Fn(ve)&&ve.target===(W?Ct.scrollingElement||_i:N)&&(ve.smooth=!1)}),Qe=Fn(x.snapTo)?x.snapTo:x.snapTo==="labels"?jy(i):x.snapTo==="labelsDirectional"?Ky(i):x.directional!==!1?function(ve,ze){return bp(x.snapTo)(ve,In()-ee<500?0:ze.direction)}:we.utils.snap(x.snapTo),Q=x.duration||{min:.1,max:2},Q=Lr(Q)?ll(Q.min,Q.max):ll(Q,Q),ce=we.delayedCall(x.delay||K/2||.1,function(){var ve=oe(),ze=In()-ee<500,Ue=Ie.tween;if((ze||Math.abs(L.getVelocity())<10)&&!Ue&&!Gu&&j!==ve){var Ke=(ve-D)/S,sn=i&&!E?i.totalProgress():Ke,st=ze?0:(sn-O)/(In()-Ko)*1e3||0,Wt=we.utils.clamp(-Ke,1-Ke,fa(st/2)*st/.185),rn=Ke+(x.inertia===!1?0:Wt),zt,Ut,Rt=x,ui=Rt.onStart,Ht=Rt.onInterrupt,T=Rt.onComplete;if(zt=Qe(rn,L),Qo(zt)||(zt=rn),Ut=Math.max(0,Math.round(D+zt*S)),ve<=_t&&ve>=D&&Ut!==ve){if(Ue&&!Ue._initted&&Ue.data<=fa(Ut-ve))return;x.inertia===!1&&(Wt=zt-Ke),Ie(Ut,{duration:Q(fa(Math.max(fa(rn-sn),fa(zt-sn))*.185/st/.05||0)),ease:x.ease||"power3",data:fa(Ut-ve),onInterrupt:function(){return ce.restart(!0)&&Ht&&da(L,Ht)},onComplete:function(){L.update(),j=oe(),i&&!E&&(te?te.resetTo("totalProgress",zt,i._tTime/i._tDur):i.progress(zt)),vt=O=i&&!E?i.totalProgress():L.progress,b&&b(L),T&&da(L,T)}},ve,Wt*S,Ut-ve-Wt*S),ui&&da(L,ui,Ie.tween)}}else L.isActive&&j!==ve&&ce.restart(!0)}).pause()),l&&(Yd[l]=L),d=L.trigger=ei(d||f!==!0&&f),Gt=d&&d._gsap&&d._gsap.stRevert,Gt&&(Gt=Gt(L)),f=f===!0?d:ei(f),mi(o)&&(o={targets:d,className:o}),f&&(m===!1||m===Li||(m=!m&&f.parentNode&&f.parentNode.style&&Di(f.parentNode).display==="flex"?!1:hn),L.pin=f,Ce=we.core.getCache(f),Ce.spacer?X=Ce.pinState:(A&&(A=ei(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ce.spacerIsNative=!!A,A&&(Ce.spacerState=ac(A))),Ce.spacer=Z=A||Ct.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Ce.pinState=X=ac(f)),n.force3D!==!1&&we.set(f,{force3D:!0}),L.spacer=Z=Ce.spacer,$e=Di(f),Se=$e[m+v.os2],se=we.getProperty(f),_e=we.quickSetter(f,v.a,mn),_h(f,Z,$e),ne=ac(f)),$){Be=Lr($)?Am($,wm):wm,k=rc("scroller-start",l,N,v,Be,0),ot=rc("scroller-end",l,N,v,Be,0,k),Ae=k["offset"+v.op.d2];var ft=ei(lr(N,"content")||N);Xe=this.markerStart=rc("start",l,ft,v,Be,Ae,0,M),je=this.markerEnd=rc("end",l,ft,v,Be,Ae,0,M),M&&(Ot=we.quickSetter([Xe,je],v.a,mn)),!q&&!(os.length&&lr(N,"fixedMarkers")===!0)&&(qy(W?At:N),we.set([k,ot],{force3D:!0}),He=we.quickSetter(k,v.a,mn),nt=we.quickSetter(ot,v.a,mn))}if(M){var Oe=M.vars.onUpdate,Pe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){L.update(0,0,1),Oe&&Oe.apply(M,Pe||[])})}if(L.previous=function(){return ct[ct.indexOf(L)-1]},L.next=function(){return ct[ct.indexOf(L)+1]},L.revert=function(ve,ze){if(!ze)return L.kill(!0);var Ue=ve!==!1||!L.enabled,Ke=Dn;Ue!==L.isReverted&&(Ue&&(de=Math.max(oe(),L.scroll.rec||0),ge=L.progress,it=i&&i.progress()),Xe&&[Xe,je,k,ot].forEach(function(sn){return sn.style.display=Ue?"none":"block"}),Ue&&(Dn=L,L.update(Ue)),f&&(!w||!L.isActive)&&(Ue?Qy(f,Z,X):_h(f,Z,Di(f),Ee)),Ue||L.update(Ue),Dn=Ke,L.isReverted=Ue)},L.refresh=function(ve,ze,Ue,Ke){if(!((Dn||!L.enabled)&&!ze)){if(f&&ve&&Fi){Sn(s,"scrollEnd",k_);return}!$n&&le&&le(L),Dn=L,Ie.tween&&!Ue&&(Ie.tween.kill(),Ie.tween=0),te&&te.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(lt){return lt.vars.immediateRender&&lt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var sn=qe(),st=tt(),Wt=M?M.duration():rs(N,v),rn=S<=.01||!S,zt=0,Ut=Ke||0,Rt=Lr(Ue)?Ue.end:n.end,ui=n.endTrigger||d,Ht=Lr(Ue)?Ue.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),T=L.pinnedContainer=n.pinnedContainer&&ei(n.pinnedContainer,L),F=d&&Math.max(0,ct.indexOf(L))||0,V=F,G,U,ae,be,me,fe,Ne,Ve,Le,xt,gt,It,yn;for($&&Lr(Ue)&&(It=we.getProperty(k,v.p),yn=we.getProperty(ot,v.p));V-- >0;)fe=ct[V],fe.end||fe.refresh(0,1)||(Dn=L),Ne=fe.pin,Ne&&(Ne===d||Ne===f||Ne===T)&&!fe.isReverted&&(xt||(xt=[]),xt.unshift(fe),fe.revert(!0,!0)),fe!==ct[V]&&(F--,V--);for(Fn(Ht)&&(Ht=Ht(L)),Ht=Mm(Ht,"start",L),D=Lm(Ht,d,sn,v,oe(),Xe,k,L,st,re,q,Wt,M,L._startClamp&&"_startClamp")||(f?-.001:0),Fn(Rt)&&(Rt=Rt(L)),mi(Rt)&&!Rt.indexOf("+=")&&(~Rt.indexOf(" ")?Rt=(mi(Ht)?Ht.split(" ")[0]:"")+Rt:(zt=Qc(Rt.substr(2),sn),Rt=mi(Ht)?Ht:(M?we.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,D):D)+zt,ui=d)),Rt=Mm(Rt,"end",L),_t=Math.max(D,Lm(Rt||(ui?"100% 0":Wt),ui,sn,v,oe()+zt,je,ot,L,st,re,q,Wt,M,L._endClamp&&"_endClamp"))||-.001,zt=0,V=F;V--;)fe=ct[V]||{},Ne=fe.pin,Ne&&fe.start-fe._pinPush<=D&&!M&&fe.end>0&&(G=fe.end-(L._startClamp?Math.max(0,fe.start):fe.start),(Ne===d&&fe.start-fe._pinPush<D||Ne===T)&&isNaN(Ht)&&(zt+=G*(1-fe.progress)),Ne===f&&(Ut+=G));if(D+=zt,_t+=zt,L._startClamp&&(L._startClamp+=zt),L._endClamp&&!$n&&(L._endClamp=_t||-.001,_t=Math.min(_t,rs(N,v))),S=_t-D||(D-=.01)&&.001,rn&&(ge=we.utils.clamp(0,1,we.utils.normalize(D,_t,de))),L._pinPush=Ut,Xe&&zt&&(G={},G[v.a]="+="+zt,T&&(G[v.p]="-="+oe()),we.set([Xe,je],G)),f&&!($d&&L.end>=rs(N,v)))G=Di(f),be=v===gn,ae=oe(),Ze=parseFloat(se(v.a))+Ut,!Wt&&_t>1&&(gt=(W?Ct.scrollingElement||_i:N).style,gt={style:gt,value:gt["overflow"+v.a.toUpperCase()]},W&&Di(At)["overflow"+v.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+v.a.toUpperCase()]="scroll")),_h(f,Z,G),ne=ac(f),U=Ps(f,!0),Ve=q&&pr(N,be?Yn:gn)(),m?(Ee=[m+v.os2,S+Ut+mn],Ee.t=Z,V=m===hn?wu(f,v)+S+Ut:0,V&&(Ee.push(v.d,V+mn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+mn)),Ka(Ee),T&&ct.forEach(function(lt){lt.pin===T&&lt.vars.pinSpacing!==!1&&(lt._subPinOffset=!0)}),q&&oe(de)):(V=wu(f,v),V&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+mn)),q&&(me={top:U.top+(be?ae-D:Ve)+mn,left:U.left+(be?Ve:ae-D)+mn,boxSizing:"border-box",position:"fixed"},me[$r]=me["max"+lo]=Math.ceil(U.width)+mn,me[Yr]=me["max"+yp]=Math.ceil(U.height)+mn,me[Li]=me[Li+dl]=me[Li+ul]=me[Li+fl]=me[Li+hl]="0",me[hn]=G[hn],me[hn+dl]=G[hn+dl],me[hn+ul]=G[hn+ul],me[hn+fl]=G[hn+fl],me[hn+hl]=G[hn+hl],J=tb(X,me,w),$n&&oe(0)),i?(Le=i._initted,fh(1),i.render(i.duration(),!0,!0),ie=se(v.a)-Ze+S+Ut,Me=Math.abs(S-ie)>1,q&&Me&&J.splice(J.length-2,2),i.render(0,!0,!0),Le||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fh(0)):ie=S,gt&&(gt.value?gt.style["overflow"+v.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+v.a));else if(d&&oe()&&!M)for(U=d.parentNode;U&&U!==At;)U._pinOffset&&(D-=U._pinOffset,_t-=U._pinOffset),U=U.parentNode;xt&&xt.forEach(function(lt){return lt.revert(!1,!0)}),L.start=D,L.end=_t,Je=We=$n?de:oe(),!M&&!$n&&(Je<de&&oe(de),L.scroll.rec=0),L.revert(!1,!0),ee=In(),ce&&(j=-1,ce.restart(!0)),Dn=0,i&&E&&(i._initted||it)&&i.progress()!==it&&i.progress(it||0,!0).render(i.time(),!0,!0),(rn||ge!==L.progress||M||_||i&&!i._initted)&&(i&&!E&&(i._initted||ge||i.vars.immediateRender!==!1)&&i.totalProgress(M&&D<-.001&&!ge?we.utils.normalize(D,_t,0):ge,!0),L.progress=rn||(Je-D)/S===ge?0:ge),f&&m&&(Z._pinOffset=Math.round(L.progress*ie)),te&&te.invalidate(),isNaN(It)||(It-=we.getProperty(k,v.p),yn-=we.getProperty(ot,v.p),oc(k,v,It),oc(Xe,v,It-(Ke||0)),oc(ot,v,yn),oc(je,v,yn-(Ke||0))),rn&&!$n&&L.update(),u&&!$n&&!C&&(C=!0,u(L),C=!1)}},L.getVelocity=function(){return(oe()-We)/(In()-Ko)*1e3||0},L.endAnimation=function(){Co(L.callbackAnimation),i&&(te?te.progress(1):i.paused()?E||Co(i,L.direction<0,1):Co(i,i.reversed()))},L.labelToScroll=function(ve){return i&&i.labels&&(D||L.refresh()||D)+i.labels[ve]/i.duration()*S||0},L.getTrailing=function(ve){var ze=ct.indexOf(L),Ue=L.direction>0?ct.slice(0,ze).reverse():ct.slice(ze+1);return(mi(ve)?Ue.filter(function(Ke){return Ke.vars.preventOverlaps===ve}):Ue).filter(function(Ke){return L.direction>0?Ke.end<=D:Ke.start>=_t})},L.update=function(ve,ze,Ue){if(!(M&&!Ue&&!ve)){var Ke=$n===!0?de:L.scroll(),sn=ve?0:(Ke-D)/S,st=sn<0?0:sn>1?1:sn||0,Wt=L.progress,rn,zt,Ut,Rt,ui,Ht,T,F;if(ze&&(We=Je,Je=M?oe():Ke,x&&(O=vt,vt=i&&!E?i.totalProgress():st)),p&&f&&!Dn&&!ec&&Fi&&(!st&&D<Ke+(Ke-We)/(In()-Ko)*p?st=1e-4:st===1&&_t>Ke+(Ke-We)/(In()-Ko)*p&&(st=.9999)),st!==Wt&&L.enabled){if(rn=L.isActive=!!st&&st<1,zt=!!Wt&&Wt<1,Ht=rn!==zt,ui=Ht||!!st!=!!Wt,L.direction=st>Wt?1:-1,L.progress=st,ui&&!Dn&&(Ut=st&&!Wt?0:st===1?1:Wt===1?2:3,E&&(Rt=!Ht&&Y[Ut+1]!=="none"&&Y[Ut+1]||Y[Ut],F=i&&(Rt==="complete"||Rt==="reset"||Rt in i))),I&&(Ht||F)&&(F||h||!i)&&(Fn(I)?I(L):L.getTrailing(I).forEach(function(ae){return ae.endAnimation()})),E||(te&&!Dn&&!ec?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",st,i._tTime/i._tDur):(te.vars.totalProgress=st,te.invalidate().restart())):i&&i.totalProgress(st,!!(Dn&&(ee||ve)))),f){if(ve&&m&&(Z.style[m+v.os2]=Se),!q)_e(Jo(Ze+ie*st));else if(ui){if(T=!ve&&st>Wt&&_t+1>Ke&&Ke+1>=rs(N,v),w)if(!ve&&(rn||T)){var V=Ps(f,!0),G=Ke-D;Dm(f,At,V.top+(v===gn?G:0)+mn,V.left+(v===gn?0:G)+mn)}else Dm(f,Z);Ka(rn||T?J:ne),Me&&st<1&&rn||_e(Ze+(st===1&&!T?ie:0))}}x&&!Ie.tween&&!Dn&&!ec&&ce.restart(!0),o&&(Ht||y&&st&&(st<1||!ph))&&Pl(o.targets).forEach(function(ae){return ae.classList[rn||y?"add":"remove"](o.className)}),a&&!E&&!ve&&a(L),ui&&!Dn?(E&&(F&&(Rt==="complete"?i.pause().totalProgress(1):Rt==="reset"?i.restart(!0).pause():Rt==="restart"?i.restart(!0):i[Rt]()),a&&a(L)),(Ht||!ph)&&(c&&Ht&&da(L,c),H[Ut]&&da(L,H[Ut]),y&&(st===1?L.kill(!1,1):H[Ut]=0),Ht||(Ut=st===1?1:3,H[Ut]&&da(L,H[Ut]))),R&&!rn&&Math.abs(L.getVelocity())>(Qo(R)?R:2500)&&(Co(L.callbackAnimation),te?te.progress(1):Co(i,Rt==="reverse"?1:!st,1))):E&&a&&!Dn&&a(L)}if(nt){var U=M?Ke/M.duration()*(M._caScrollDist||0):Ke;He(U+(k._isFlipped?1:0)),nt(U)}Ot&&Ot(-Ke/M.duration()*(M._caScrollDist||0))}},L.enable=function(ve,ze){L.enabled||(L.enabled=!0,Sn(N,"resize",el),W||Sn(N,"scroll",pa),le&&Sn(s,"refreshInit",le),ve!==!1&&(L.progress=ge=0,Je=We=j=oe()),ze!==!1&&L.refresh())},L.getTween=function(ve){return ve&&Ie?Ie.tween:te},L.setPositions=function(ve,ze,Ue,Ke){if(M){var sn=M.scrollTrigger,st=M.duration(),Wt=sn.end-sn.start;ve=sn.start+Wt*ve/st,ze=sn.start+Wt*ze/st}L.refresh(!1,!1,{start:Sm(ve,Ue&&!!L._startClamp),end:Sm(ze,Ue&&!!L._endClamp)},Ke),L.update()},L.adjustPinSpacing=function(ve){if(Ee&&ve){var ze=Ee.indexOf(v.d)+1;Ee[ze]=parseFloat(Ee[ze])+ve+mn,Ee[1]=parseFloat(Ee[1])+ve+mn,Ka(Ee)}},L.disable=function(ve,ze){if(ve!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,ze||te&&te.pause(),de=0,Ce&&(Ce.uncache=1),le&&Mn(s,"refreshInit",le),ce&&(ce.pause(),Ie.tween&&Ie.tween.kill()&&(Ie.tween=0)),!W)){for(var Ue=ct.length;Ue--;)if(ct[Ue].scroller===N&&ct[Ue]!==L)return;Mn(N,"resize",el),W||Mn(N,"scroll",pa)}},L.kill=function(ve,ze){L.disable(ve,ze),te&&!ze&&te.kill(),l&&delete Yd[l];var Ue=ct.indexOf(L);Ue>=0&&ct.splice(Ue,1),Ue===Xn&&tu>0&&Xn--,Ue=0,ct.forEach(function(Ke){return Ke.scroller===L.scroller&&(Ue=1)}),Ue||$n||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),ze||i.kill()),Xe&&[Xe,je,k,ot].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),pl===L&&(pl=0),f&&(Ce&&(Ce.uncache=1),Ue=0,ct.forEach(function(Ke){return Ke.pin===f&&Ue++}),Ue||(Ce.spacer=0)),n.onKill&&n.onKill(L)},ct.push(L),L.enable(!1,!1),Gt&&Gt(L),i&&i.add&&!S){var bt=L.update;L.update=function(){L.update=bt,ht.cache++,D||_t||L.refresh()},we.delayedCall(.01,L.update),S=.01,D=_t=0}else L.refresh();f&&Jy()},s.register=function(n){return Ia||(we=n||D_(),L_()&&window.document&&s.enable(),Ia=Zo),Ia},s.defaults=function(n){if(n)for(var i in n)sc[i]=n[i];return sc},s.disable=function(n,i){Zo=0,ct.forEach(function(a){return a[i?"kill":"disable"](n)}),Mn(ut,"wheel",pa),Mn(Ct,"scroll",pa),clearInterval(Ql),Mn(Ct,"touchcancel",es),Mn(At,"touchstart",es),nc(Mn,Ct,"pointerdown,touchstart,mousedown",Em),nc(Mn,Ct,"pointerup,touchend,mouseup",Tm),Au.kill(),tc(Mn);for(var r=0;r<ht.length;r+=3)ic(Mn,ht[r],ht[r+1]),ic(Mn,ht[r],ht[r+2])},s.enable=function(){if(ut=window,Ct=document,_i=Ct.documentElement,At=Ct.body,we){if(Pl=we.utils.toArray,ll=we.utils.clamp,Xd=we.core.context||es,fh=we.core.suppressOverwrites||es,gp=ut.history.scrollRestoration||"auto",qd=ut.pageYOffset||0,we.core.globals("ScrollTrigger",s),At){Zo=1,ja=document.createElement("div"),ja.style.height="100vh",ja.style.position="absolute",V_(),Xy(),cn.register(we),s.isTouch=cn.isTouch,qs=cn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wd=cn.isTouch===1,Sn(ut,"wheel",pa),mp=[ut,Ct,_i,At],we.matchMedia?(s.matchMedia=function(u){var h=we.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},we.addEventListener("matchMediaInit",function(){z_(),Mp()}),we.addEventListener("matchMediaRevert",function(){return B_()}),we.addEventListener("matchMedia",function(){Fr(0,1),Zr("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return gh(),gh})):console.warn("Requires GSAP 3.11.0 or later"),gh(),Sn(Ct,"scroll",pa);var n=At.hasAttribute("style"),i=At.style,r=i.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ps(At),gn.m=Math.round(o.top+gn.sc())||0,Yn.m=Math.round(o.left+Yn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),Ql=setInterval(Rm,250),we.delayedCall(.5,function(){return ec=0}),Sn(Ct,"touchcancel",es),Sn(At,"touchstart",es),nc(Sn,Ct,"pointerdown,touchstart,mousedown",Em),nc(Sn,Ct,"pointerup,touchend,mouseup",Tm),Gd=we.utils.checkPrefix("transform"),nu.push(Gd),Ia=In(),Au=we.delayedCall(.2,Fr).pause(),Na=[Ct,"visibilitychange",function(){var u=ut.innerWidth,h=ut.innerHeight;Ct.hidden?(ym=u,bm=h):(ym!==u||bm!==h)&&el()},Ct,"DOMContentLoaded",Fr,ut,"load",Fr,ut,"resize",el],tc(Sn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<ht.length;l+=3)ic(Mn,ht[l],ht[l+1]),ic(Mn,ht[l],ht[l+2])}else if(Ct){var c=function u(){s.enable(),Ct.removeEventListener("DOMContentLoaded",u)};Ct.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(ph=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ql)||(Ql=i)&&setInterval(Rm,i),"ignoreMobileResize"in n&&(Wd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tc(Mn)||tc(Sn,n.autoRefreshEvents||"none"),R_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=ei(n),a=ht.indexOf(r),o=jr(r);~a&&ht.splice(a,o?6:2),i&&(o?os.unshift(ut,i,At,i,_i,i):os.unshift(r,i))},s.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(mi(n)?ei(n):n).getBoundingClientRect(),o=a[r?$r:Yr]*i||0;return r?a.right-o>0&&a.left+o<ut.innerWidth:a.bottom-o>0&&a.top+o<ut.innerHeight},s.positionInViewport=function(n,i,r){mi(n)&&(n=ei(n));var a=n.getBoundingClientRect(),o=a[r?$r:Yr],l=i==null?o/2:i in Ru?Ru[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/ut.innerWidth:(a.top+l)/ut.innerHeight},s.killAll=function(n){if(ct.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(r){return r()})}},s}();dt.version="3.15.0";dt.saveStyles=function(s){return s?Pl(s).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Xd())}}):pi};dt.revert=function(s,e){return Mp(!s,e)};dt.create=function(s,e){return new dt(s,e)};dt.refresh=function(s){return s?el(!0):(Ia||dt.register())&&Fr(!0)};dt.update=function(s){return++ht.cache&&Os(s===!0?2:0)};dt.clearScrollMemory=H_;dt.maxScroll=function(s,e){return rs(s,e?Yn:gn)};dt.getScrollFunc=function(s,e){return pr(ei(s),e?Yn:gn)};dt.getById=function(s){return Yd[s]};dt.getAll=function(){return ct.filter(function(s){return s.vars.id!=="ScrollSmoother"})};dt.isScrolling=function(){return!!Fi};dt.snapDirectional=bp;dt.addEventListener=function(s,e){var t=Kr[s]||(Kr[s]=[]);~t.indexOf(e)||t.push(e)};dt.removeEventListener=function(s,e){var t=Kr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};dt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],d=[],f=we.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),d.push(m),r<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Fn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Fn(r)&&(r=r(),Sn(dt,"refresh",function(){return r=e.batchMax()})),Pl(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(dt.create(c))}),t};var Nm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(cn.isTouch?" pinch-zoom":""):"none",e===_i&&s(At,t)},lc={auto:1,scroll:1},ib=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||we.core.getCache(r),o=In(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(lc[(l=Di(r)).overflowY]||lc[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!jr(r)&&(lc[(l=Di(r)).overflowY]||lc[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},W_=function(e,t,n,i){return cn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ib,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Sn(Ct,cn.eventTypes[0],Um,!1,!0)},onDisable:function(){return Mn(Ct,cn.eventTypes[0],Um,!0)}})},sb=/(input|label|select|textarea)/i,Om,Um=function(e){var t=sb.test(e.target.tagName);(t||Om)&&(e._gsapAllow=!0,Om=t)},rb=function(e){Lr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=ei(e.target)||_i,u=we.core.globals().ScrollSmoother,h=u&&u.get(),d=qs&&(e.content&&ei(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=pr(c,gn),m=pr(c,Yn),_=1,p=(cn.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,g=0,b=Fn(i)?function(){return i(o)}:function(){return i||2.8},y,x,w=W_(c,e.type,!0,r),A=function(){return x=!1},M=es,R=es,I=function(){l=rs(c,gn),R=ll(qs?1:0,l),n&&(M=ll(0,rs(c,Yn))),y=qr},v=function(){d._gsap.y=Jo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},E=function(){if(x){requestAnimationFrame(A);var $=Jo(o.deltaY/2),re=R(f.v-$);if(d&&re!==f.v+f.offset){f.offset=re-f.v;var L=Jo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=ht.cache,Os()}return!0}f.offset&&v(),x=!0},N,z,W,q,H=function(){I(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&we.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return qs&&Y.type==="touchmove"&&E()||_>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){x=!1;var Y=_;_=Jo((ut.visualViewport&&ut.visualViewport.scale||1)/p),N.pause(),Y!==_&&vh(c,_>1.01?!0:n?!1:"x"),z=m(),W=f(),I(),y=qr},e.onRelease=e.onGestureStart=function(Y,$){if(f.offset&&v(),!$)q.restart(!0);else{ht.cache++;var re=b(),L,le;n&&(L=m(),le=L+re*.05*-Y.velocityX/.227,re*=Nm(m,L,le,rs(c,Yn)),N.vars.scrollX=M(le)),L=f(),le=L+re*.05*-Y.velocityY/.227,re*=Nm(f,L,le,rs(c,gn)),N.vars.scrollY=R(le),N.invalidate().duration(re).play(.01),(qs&&N.vars.scrollY>=l||L>=l-1)&&we.to({},{onUpdate:H,duration:re})}a&&a(Y)},e.onWheel=function(){N._ts&&N.pause(),In()-g>1e3&&(y=0,g=In())},e.onChange=function(Y,$,re,L,le){if(qr!==y&&I(),$&&n&&m(M(L[2]===$?z+(Y.startX-Y.x):m()+$-L[1])),re){f.offset&&v();var qe=le[2]===re,tt=qe?W+Y.startY-Y.y:f()+re-le[1],j=R(tt);qe&&tt!==j&&(W+=j-tt),f(j)}(re||$)&&Os()},e.onEnable=function(){vh(c,n?!1:"x"),dt.addEventListener("refresh",H),Sn(ut,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),w.enable()},e.onDisable=function(){vh(c,!0),Mn(ut,"resize",H),dt.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new cn(e),o.iOS=qs,qs&&!f()&&f(1),qs&&we.ticker.add(es),q=o._dc,N=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:G_(f,f(),function(){return N.pause()})},onUpdate:Os,onComplete:q.vars.onComplete}),o};dt.sort=function(s){if(Fn(s))return ct.sort(s);var e=ut.pageYOffset||0;return dt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ct.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};dt.observe=function(s){return new cn(s)};dt.normalizeScroll=function(s){if(typeof s>"u")return Wn;if(s===!0&&Wn)return Wn.enable();if(s===!1){Wn&&Wn.kill(),Wn=s;return}var e=s instanceof cn?s:rb(s);return Wn&&Wn.target===e.target&&Wn.kill(),jr(e.target)&&(Wn=e),e};dt.core={_getVelocityProp:Vd,_inputObserver:W_,_scrollers:ht,_proxies:os,bridge:{ss:function(){Fi||Zr("scrollStart"),Fi=In()},ref:function(){return Dn}}};D_()&&we.registerPlugin(dt);const ab=[{id:"#FCE3CF",name:"Porcelana"},{id:"#F4C9A3",name:"Durazno"},{id:"#E2A676",name:"Miel"},{id:"#C68256",name:"Canela"},{id:"#8F5A3A",name:"Cacao"},{id:"#5E3A26",name:"Café oscuro"}],ob=[{id:"#2B2220",name:"Negro"},{id:"#5A3A26",name:"Castaño"},{id:"#A0673A",name:"Caramelo"},{id:"#E8C07A",name:"Rubio"},{id:"#D9483B",name:"Pelirrojo"},{id:"#F2A7B8",name:"Rosa"},{id:"#8CB7E6",name:"Azul cielo"},{id:"#9ACB8A",name:"Menta"},{id:"#ECE8E1",name:"Plateado"}],lb=[{id:"#2B2220",name:"Oscuro"},{id:"#6B4226",name:"Café"},{id:"#3E7FB8",name:"Azul"},{id:"#4E9A5C",name:"Verde"},{id:"#8D6BB5",name:"Lavanda"},{id:"#C98A2E",name:"Ámbar"}],cb=[{id:"#6B3A2E",name:"Natural"},{id:"#E0706A",name:"Coral"},{id:"#E88CA0",name:"Rosado"},{id:"#C8102E",name:"Rojo"}],ub=[{id:"#F6F1E6",name:"Crema"},{id:"#E60012",name:"Rojo MINISO"},{id:"#F2A7B8",name:"Rosa"},{id:"#F6D365",name:"Amarillo"},{id:"#9ACB8A",name:"Menta"},{id:"#7FB3D5",name:"Azul"},{id:"#3A4A5A",name:"Marino"},{id:"#8B6B4A",name:"Café"},{id:"#2F2F2F",name:"Negro"}],hb=[{id:"#4A6FA5",name:"Denim"},{id:"#3A4A5A",name:"Marino"},{id:"#D9C3A0",name:"Beige"},{id:"#8B6B4A",name:"Café"},{id:"#7A8B55",name:"Oliva"},{id:"#F2A7B8",name:"Rosa"},{id:"#2F2F2F",name:"Negro"}],db=[{id:"#F7F5F0",name:"Blanco"},{id:"#E60012",name:"Rojo"},{id:"#8B5A3C",name:"Cuero"},{id:"#2F2F2F",name:"Negro"},{id:"#F6D365",name:"Amarillo"},{id:"#9ACB8A",name:"Menta"}],oa=[{id:"body",label:"Cuerpo",icon:"body",camera:"full",groups:[{key:"bodyType",label:"Tipo de cuerpo",type:"options",thumb:"full",options:[{id:"standard",name:"Clásico",model:null,thumbnail:null},{id:"round",name:"Redondito",model:null,thumbnail:null},{id:"tall",name:"Alto",model:null,thumbnail:null},{id:"mini",name:"Mini",model:null,thumbnail:null}]},{key:"skin",label:"Tono de piel",type:"colors",options:ab}]},{id:"hair",label:"Cabello",icon:"hair",camera:"head",groups:[{key:"hair",label:"Estilo",type:"options",thumb:"bust",options:[{id:"none",name:"Sin cabello"},{id:"short",name:"Corto"},{id:"bangs",name:"Flequillo"},{id:"spiky",name:"Puntas"},{id:"pompadour",name:"Tupé"},{id:"curly",name:"Rizado"},{id:"bob",name:"Bob"},{id:"ponytail",name:"Cola de caballo"},{id:"buns",name:"Moños"},{id:"long",name:"Largo"}]},{key:"hairColor",label:"Color",type:"colors",options:ob}]},{id:"face",label:"Rostro",icon:"face",camera:"head",groups:[{key:"eyes",label:"Ojos",type:"options",thumb:"bust",options:[{id:"round",name:"Redondos"},{id:"big",name:"Brillantes"},{id:"almond",name:"Almendra"},{id:"happy",name:"Felices"},{id:"sleepy",name:"Soñolientos"},{id:"dot",name:"Puntitos"}]},{key:"eyeColor",label:"Color de ojos",type:"colors",options:lb},{key:"nose",label:"Nariz",type:"options",thumb:"bust",options:[{id:"button",name:"Botón"},{id:"triangle",name:"Triángulo"},{id:"round",name:"Redonda"},{id:"dot",name:"Pequeña"}]},{key:"mouth",label:"Boca",type:"options",thumb:"bust",options:[{id:"smile",name:"Sonrisa"},{id:"open",name:"Alegre"},{id:"neutral",name:"Tranquila"},{id:"cat",name:"Gatuna"},{id:"o",name:"Sorpresa"}]},{key:"mouthColor",label:"Color de boca",type:"colors",options:cb},{key:"ears",label:"Orejas",type:"options",thumb:"bust",options:[{id:"round",name:"Redondas"},{id:"small",name:"Pequeñas"},{id:"big",name:"Grandes"},{id:"pointy",name:"Puntiagudas"}]}]},{id:"clothes",label:"Ropa",icon:"shirt",camera:"body",groups:[{key:"shirt",label:"Parte superior",type:"options",thumb:"part",options:[{id:"basic",name:"Camiseta"},{id:"stamp",name:"Estampado hoja"},{id:"stripes",name:"Rayas"},{id:"polo",name:"Camisa con cuello"},{id:"hoodie",name:"Buzo con capucha"},{id:"dress",name:"Vestido"}]},{key:"shirtColor",label:"Color superior",type:"colors",options:ub},{key:"pants",label:"Parte inferior",type:"options",thumb:"part",options:[{id:"jeans",name:"Pantalón"},{id:"joggers",name:"Jogger"},{id:"shorts",name:"Pantaloneta"},{id:"skirt",name:"Falda"},{id:"overalls",name:"Overol"}]},{key:"pantsColor",label:"Color inferior",type:"colors",options:hb},{key:"shoes",label:"Zapatos",type:"options",thumb:"part",options:[{id:"sneakers",name:"Tenis"},{id:"boots",name:"Botas"},{id:"sandals",name:"Sandalias"},{id:"slippers",name:"Pantuflas"}]},{key:"shoesColor",label:"Color de zapatos",type:"colors",options:db}]},{id:"accessories",label:"Accesorios",icon:"glasses",camera:"head",groups:[{key:"accHead",label:"Cabeza",type:"options",thumb:"bust",options:[{id:"none",name:"Nada"},{id:"cap",name:"Gorra"},{id:"strawhat",name:"Sombrero de paja"},{id:"beanie",name:"Gorro de lana"},{id:"headband",name:"Diadema con moño"},{id:"headphones",name:"Audífonos"},{id:"leafcrown",name:"Corona de hojas"},{id:"flower",name:"Flor"}]},{key:"accFace",label:"Cara",type:"options",thumb:"bust",options:[{id:"none",name:"Nada"},{id:"roundglasses",name:"Gafas redondas"},{id:"sunglasses",name:"Gafas de sol"},{id:"blush",name:"Rubor"},{id:"nosering",name:"Piercing nariz"},{id:"earrings",name:"Aretes"},{id:"bandaid",name:"Curita"}]},{key:"accNeck",label:"Cuello y torso",type:"options",thumb:"part",options:[{id:"none",name:"Nada"},{id:"scarf",name:"Bufanda"},{id:"necklace",name:"Collar de hoja"},{id:"bowtie",name:"Corbatín"},{id:"crossbag",name:"Bolso cruzado"},{id:"backpack",name:"Mochila"}]}]},{id:"objects",label:"Objetos",icon:"leaf",camera:"full",groups:[{key:"companion",label:"Objeto o acompañante",type:"options",thumb:"part",options:[{id:"none",name:"Nada"},{id:"shopbag",name:"Bolsa MINISO"},{id:"mug",name:"Taza"},{id:"bouquet",name:"Ramo de flores"},{id:"leafumbrella",name:"Sombrilla de hoja"},{id:"balloon",name:"Globo"},{id:"cat",name:"Gatito"},{id:"dog",name:"Perrito"},{id:"bird",name:"Pajarito"}]}]}],Dl={bodyType:"standard",skin:"#F4C9A3",hair:"short",hairColor:"#5A3A26",eyes:"round",eyeColor:"#2B2220",nose:"button",mouth:"smile",mouthColor:"#6B3A2E",ears:"round",shirt:"stamp",shirtColor:"#9ACB8A",pants:"jeans",pantsColor:"#4A6FA5",shoes:"sneakers",shoesColor:"#F7F5F0",accHead:"none",accFace:"none",accNeck:"none",companion:"none"},Wu={};oa.forEach(s=>s.groups.forEach(e=>{Wu[e.key]={...e,category:s.id}}));function fb(s){return Wu[s]}function Sp(s,e){const t=Wu[s];return t&&t.options.find(n=>n.id===e)||null}function zi(s,e){const t=Sp(s,e);return t?t.name:e}function xh(s){const e={...Dl};return!s||typeof s!="object"||Object.keys(Dl).forEach(t=>{s[t]!==void 0&&Sp(t,s[t])&&(e[t]=s[t])}),e}function pb(){const s={};return Object.keys(Dl).forEach(e=>{const t=Wu[e].options;s[e]=t[Math.floor(Math.random()*t.length)].id}),s}const Zi={get(s,e=null){try{const t=localStorage.getItem(s);return t===null?e:JSON.parse(t)}catch{return e}},set(s,e){try{return localStorage.setItem(s,JSON.stringify(e)),!0}catch{return!1}},remove(s){try{localStorage.removeItem(s)}catch{}}},Ji={draft:"mxac:draft",saved:"mxac:saved",profile:"mxac:profile",order:"mxac:order",flags:"mxac:flags"},mb=60;class gb{constructor(){const e=Zi.get(Ji.saved),t=Zi.get(Ji.draft);this.state=xh(t||e&&e.avatar),this.savedAt=e?e.savedAt:null,this.savedSnapshot=e?JSON.stringify(xh(e.avatar)):null,this.past=[],this.future=[],this.listeners=new Set,this.profile={name:"",personality:"Creativo",favorite:"Personalizado",theme:"spring",...Zi.get(Ji.profile)||{}},this.order=Zi.get(Ji.order),this.flags=Zi.get(Ji.flags,{}),this.session=null}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}_emit(e){Zi.set(Ji.draft,this.state),this.listeners.forEach(t=>t(this.state,e))}_push(){this.past.push(this.state),this.past.length>mb&&this.past.shift(),this.future=[]}set(e,t){return this.state[e]===t?!1:(this._push(),this.state={...this.state,[e]:t},this._emit({type:"set",key:e}),!0)}replace(e,t="replace"){const n=xh(e);return JSON.stringify(n)===JSON.stringify(this.state)?!1:(this._push(),this.state=n,this._emit({type:t}),!0)}undo(){return this.past.length?(this.future.push(this.state),this.state=this.past.pop(),this._emit({type:"undo"}),!0):!1}redo(){return this.future.length?(this.past.push(this.state),this.state=this.future.pop(),this._emit({type:"redo"}),!0):!1}reset(){return this.replace(Dl,"reset")}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}save(){const e={avatar:this.state,savedAt:Date.now()},t=Zi.set(Ji.saved,e);return t&&(this.savedAt=e.savedAt,this.savedSnapshot=JSON.stringify(this.state)),t}get hasSaved(){return!!this.savedAt}get isSaved(){return this.savedSnapshot===JSON.stringify(this.state)}setProfile(e){this.profile={...this.profile,...e},Zi.set(Ji.profile,this.profile)}setOrder(e){this.order=e,Zi.set(Ji.order,e)}flag(e,t){return t===void 0?this.flags[e]:(this.flags={...this.flags,[e]:t},Zi.set(Ji.flags,this.flags),t)}}const Ge=new gb;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="169",Za={ROTATE:0,DOLLY:1,PAN:2},ka={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_b=0,Fm=1,vb=2,X_=1,$_=2,Ts=3,Ki=0,oi=1,en=2,cr=0,Ja=1,km=2,Bm=3,zm=4,xb=5,Nr=100,yb=101,bb=102,Mb=103,Sb=104,Eb=200,Tb=201,Ab=202,wb=203,Kd=204,Zd=205,Rb=206,Cb=207,Pb=208,Lb=209,Db=210,Ib=211,Nb=212,Ob=213,Ub=214,Jd=0,Qd=1,ef=2,co=3,tf=4,nf=5,sf=6,rf=7,Y_=0,Fb=1,kb=2,ur=0,Bb=1,zb=2,Hb=3,Vb=4,Gb=5,Wb=6,Xb=7,Hm="attached",$b="detached",q_=300,uo=301,ho=302,af=303,of=304,Xu=306,Jr=1e3,ir=1001,Cu=1002,kn=1003,j_=1004,tl=1005,yi=1006,su=1007,Ds=1008,ks=1009,K_=1010,Z_=1011,Il=1012,Tp=1013,Qr=1014,ji=1015,Wl=1016,Ap=1017,wp=1018,fo=1020,J_=35902,Q_=1021,ev=1022,Ui=1023,tv=1024,nv=1025,Qa=1026,po=1027,Rp=1028,Cp=1029,iv=1030,Pp=1031,Lp=1033,ru=33776,au=33777,ou=33778,lu=33779,lf=35840,cf=35841,uf=35842,hf=35843,df=36196,ff=37492,pf=37496,mf=37808,gf=37809,_f=37810,vf=37811,xf=37812,yf=37813,bf=37814,Mf=37815,Sf=37816,Ef=37817,Tf=37818,Af=37819,wf=37820,Rf=37821,cu=36492,Cf=36494,Pf=36495,sv=36283,Lf=36284,Df=36285,If=36286,Nl=2300,Ol=2301,yh=2302,Vm=2400,Gm=2401,Wm=2402,Yb=2500,qb=0,rv=1,Nf=2,jb=3200,Kb=3201,av=0,Zb=1,Ks="",Nn="srgb",Rn="srgb-linear",Dp="display-p3",$u="display-p3-linear",Pu="linear",Vt="srgb",Lu="rec709",Du="p3",ma=7680,Xm=519,Jb=512,Qb=513,eM=514,ov=515,tM=516,nM=517,iM=518,sM=519,Of=35044,$m="300 es",Is=2e3,Iu=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ym=1234567;const ml=Math.PI/180,mo=180/Math.PI;function ki(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function Ip(s,e){return(s%e+e)%e}function rM(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function aM(s,e,t){return s!==e?(t-s)/(e-s):0}function gl(s,e,t){return(1-t)*s+t*e}function oM(s,e,t,n){return gl(s,e,1-Math.exp(-t*n))}function lM(s,e=1){return e-Math.abs(Ip(s,e*2)-e)}function cM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function dM(s,e){return s+Math.random()*(e-s)}function fM(s){return s*(.5-Math.random())}function pM(s){s!==void 0&&(Ym=s);let e=Ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mM(s){return s*ml}function gM(s){return s*mo}function _M(s){return(s&s-1)===0&&s!==0}function vM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yM(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yu={DEG2RAD:ml,RAD2DEG:mo,generateUUID:ki,clamp:fn,euclideanModulo:Ip,mapLinear:rM,inverseLerp:aM,lerp:gl,damp:oM,pingpong:lM,smoothstep:cM,smootherstep:uM,randInt:hM,randFloat:dM,randFloatSpread:fM,seededRandom:pM,degToRad:mM,radToDeg:gM,isPowerOfTwo:_M,ceilPowerOfTwo:vM,floorPowerOfTwo:xM,setQuaternionFromProperEuler:yM,normalize:Pt,denormalize:Yi};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,r,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],b=i[1],y=i[4],x=i[7],w=i[2],A=i[5],M=i[8];return r[0]=a*_+o*b+l*w,r[3]=a*p+o*y+l*A,r[6]=a*g+o*x+l*M,r[1]=c*_+u*b+h*w,r[4]=c*p+u*y+h*A,r[7]=c*g+u*x+h*M,r[2]=d*_+f*b+m*w,r[5]=d*p+f*y+m*A,r[8]=d*g+f*x+m*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bh.makeScale(e,t)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new at;function lv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bM(){const s=Ul("canvas");return s.style.display="block",s}const qm={};function uu(s){s in qm||(qm[s]=!0,console.warn(s))}function MM(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function SM(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function EM(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jm=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Km=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[Rn]:{transfer:Pu,primaries:Lu,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Nn]:{transfer:Vt,primaries:Lu,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[$u]:{transfer:Pu,primaries:Du,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Km),fromReference:s=>s.applyMatrix3(jm)},[Dp]:{transfer:Vt,primaries:Du,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Km),fromReference:s=>s.applyMatrix3(jm).convertLinearToSRGB()}},TM=new Set([Rn,$u]),St={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!TM.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Po[e].toReference,i=Po[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Po[s].primaries},getTransfer:function(s){return s===Ks?Pu:Po[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Po[e].luminanceCoefficients)}};function eo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ga;class AM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ga===void 0&&(ga=Ul("canvas")),ga.width=e.width,ga.height=e.height;const n=ga.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ga}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=eo(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(eo(t[n]/255)*255):t[n]=eo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Sh(i[a].image)):r.push(Sh(i[a]))}else r=Sh(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?AM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RM=0;class _n extends la{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=ir,i=ir,r=yi,a=Ds,o=Ui,l=ks,c=_n.DEFAULT_ANISOTROPY,u=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=ki(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=q_;_n.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,w=(g+1)/2,A=(u+d)/4,M=(h+_)/4,R=(m+p)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=M/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=M/r,i=R/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends la{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends CM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uv extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PM extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let p=1-o;const g=l*d+c*f+u*m+h*_,b=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,g*b);p=Math.sin(p*A)/w,o=Math.sin(o*A)/w}const x=o*b;if(l=l*p+d*x,c=c*p+f*x,u=u*p+m*x,h=h*p+_*x,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new P,Zm=new us;class Ai{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hi):Hi.fromBufferAttribute(r,a),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),uc.subVectors(this.max,Lo),_a.subVectors(e.a,Lo),va.subVectors(e.b,Lo),xa.subVectors(e.c,Lo),zs.subVectors(va,_a),Hs.subVectors(xa,va),yr.subVectors(_a,xa);let t=[0,-zs.z,zs.y,0,-Hs.z,Hs.y,0,-yr.z,yr.y,zs.z,0,-zs.x,Hs.z,0,-Hs.x,yr.z,0,-yr.x,-zs.y,zs.x,0,-Hs.y,Hs.x,0,-yr.y,yr.x,0];return!Th(t,_a,va,xa,uc)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,_a,va,xa,uc))?!1:(hc.crossVectors(zs,Hs),t=[hc.x,hc.y,hc.z],Th(t,_a,va,xa,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _s=[new P,new P,new P,new P,new P,new P,new P,new P],Hi=new P,cc=new Ai,_a=new P,va=new P,xa=new P,zs=new P,Hs=new P,yr=new P,Lo=new P,uc=new P,hc=new P,br=new P;function Th(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){br.fromArray(s,r);const o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=n.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const LM=new Ai,Do=new P,Ah=new P;class fs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):LM.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const t=Do.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Do,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Ah)),this.expandByPoint(Do.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vs=new P,wh=new P,dc=new P,Vs=new P,Rh=new P,fc=new P,Ch=new P;class Xl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wh.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),Vs.copy(this.origin).sub(wh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(dc),o=Vs.dot(this.direction),l=-Vs.dot(dc),c=Vs.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wh).addScaledVector(dc,d),f}intersectSphere(e,t){vs.subVectors(e.center,this.origin);const n=vs.dot(this.direction),i=vs.dot(vs)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,n,i,r){Rh.subVectors(t,e),fc.subVectors(n,e),Ch.crossVectors(Rh,fc);let a=this.direction.dot(Ch),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vs.subVectors(this.origin,e);const l=o*this.direction.dot(fc.crossVectors(Vs,fc));if(l<0)return null;const c=o*this.direction.dot(Rh.cross(Vs));if(c<0||l+c>a)return null;const u=-o*Vs.dot(Ch);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,m,_,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,m,_,p)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ya.setFromMatrixColumn(e,0).length(),r=1/ya.setFromMatrixColumn(e,1).length(),a=1/ya.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DM,e,IM)}lookAt(e,t,n){const i=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Gs.crossVectors(n,di),Gs.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Gs.crossVectors(n,di)),Gs.normalize(),pc.crossVectors(di,Gs),i[0]=Gs.x,i[4]=pc.x,i[8]=di.x,i[1]=Gs.y,i[5]=pc.y,i[9]=di.y,i[2]=Gs.z,i[6]=pc.z,i[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],b=n[3],y=n[7],x=n[11],w=n[15],A=i[0],M=i[4],R=i[8],I=i[12],v=i[1],E=i[5],N=i[9],z=i[13],W=i[2],q=i[6],H=i[10],Y=i[14],$=i[3],re=i[7],L=i[11],le=i[15];return r[0]=a*A+o*v+l*W+c*$,r[4]=a*M+o*E+l*q+c*re,r[8]=a*R+o*N+l*H+c*L,r[12]=a*I+o*z+l*Y+c*le,r[1]=u*A+h*v+d*W+f*$,r[5]=u*M+h*E+d*q+f*re,r[9]=u*R+h*N+d*H+f*L,r[13]=u*I+h*z+d*Y+f*le,r[2]=m*A+_*v+p*W+g*$,r[6]=m*M+_*E+p*q+g*re,r[10]=m*R+_*N+p*H+g*L,r[14]=m*I+_*z+p*Y+g*le,r[3]=b*A+y*v+x*W+w*$,r[7]=b*M+y*E+x*q+w*re,r[11]=b*R+y*N+x*H+w*L,r[15]=b*I+y*z+x*Y+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15];return m*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+p*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+g*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],b=h*p*c-_*d*c+_*l*f-o*p*f-h*l*g+o*d*g,y=m*d*c-u*p*c-m*l*f+a*p*f+u*l*g-a*d*g,x=u*_*c-m*h*c+m*o*f-a*_*f-u*o*g+a*h*g,w=m*h*l-u*_*l-m*o*d+a*_*d+u*o*p-a*h*p,A=t*b+n*y+i*x+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=b*M,e[1]=(_*d*r-h*p*r-_*i*f+n*p*f+h*i*g-n*d*g)*M,e[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*g+n*l*g)*M,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*M,e[4]=y*M,e[5]=(u*p*r-m*d*r+m*i*f-t*p*f-u*i*g+t*d*g)*M,e[6]=(m*l*r-a*p*r-m*i*c+t*p*c+a*i*g-t*l*g)*M,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*f+t*l*f)*M,e[8]=x*M,e[9]=(m*h*r-u*_*r-m*n*f+t*_*f+u*n*g-t*h*g)*M,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*g+t*o*g)*M,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*M,e[12]=w*M,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*p+t*h*p)*M,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*p-t*o*p)*M,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,_=a*u,p=a*h,g=o*h,b=l*c,y=l*u,x=l*h,w=n.x,A=n.y,M=n.z;return i[0]=(1-(_+g))*w,i[1]=(f+x)*w,i[2]=(m-y)*w,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+g))*A,i[6]=(p+b)*A,i[7]=0,i[8]=(m+y)*M,i[9]=(p-b)*M,i[10]=(1-(d+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ya.set(i[0],i[1],i[2]).length();const a=ya.set(i[4],i[5],i[6]).length(),o=ya.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vi.copy(this);const c=1/r,u=1/a,h=1/o;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=u,Vi.elements[5]*=u,Vi.elements[6]*=u,Vi.elements[8]*=h,Vi.elements[9]*=h,Vi.elements[10]*=h,t.setFromRotationMatrix(Vi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Is){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===Is)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Iu)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Is){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*c,f=(n+i)*u;let m,_;if(o===Is)m=(a+r)*h,_=-2*h;else if(o===Iu)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ya=new P,Vi=new et,DM=new P(0,0,0),IM=new P(1,1,1),Gs=new P,pc=new P,di=new P,Jm=new et,Qm=new us;class hs{constructor(e=0,t=0,n=0,i=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NM=0;const e0=new P,ba=new us,xs=new et,mc=new P,Io=new P,OM=new P,UM=new us,t0=new P(1,0,0),n0=new P(0,1,0),i0=new P(0,0,1),s0={type:"added"},FM={type:"removed"},Ma={type:"childadded",child:null},Ph={type:"childremoved",child:null};class $t extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new P,t=new hs,n=new us,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new at}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ba.setFromAxisAngle(e,t),this.quaternion.multiply(ba),this}rotateOnWorldAxis(e,t){return ba.setFromAxisAngle(e,t),this.quaternion.premultiply(ba),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mc.copy(e):mc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Io,mc,this.up):xs.lookAt(mc,Io,this.up),this.quaternion.setFromRotationMatrix(xs),i&&(xs.extractRotation(i.matrixWorld),ba.setFromRotationMatrix(xs),this.quaternion.premultiply(ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s0),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FM),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s0),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,OM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,UM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$t.DEFAULT_UP=new P(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new P,ys=new P,Lh=new P,bs=new P,Sa=new P,Ea=new P,r0=new P,Dh=new P,Ih=new P,Nh=new P,Oh=new Et,Uh=new Et,Fh=new Et;class qi{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gi.subVectors(e,t),i.cross(Gi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gi.subVectors(i,t),ys.subVectors(n,t),Lh.subVectors(e,t);const a=Gi.dot(Gi),o=Gi.dot(ys),l=Gi.dot(Lh),c=ys.dot(ys),u=ys.dot(Lh),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(a,bs.y),l.addScaledVector(o,bs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Oh.setScalar(0),Uh.setScalar(0),Fh.setScalar(0),Oh.fromBufferAttribute(e,t),Uh.fromBufferAttribute(e,n),Fh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Oh,r.x),a.addScaledVector(Uh,r.y),a.addScaledVector(Fh,r.z),a}static isFrontFacing(e,t,n,i){return Gi.subVectors(n,t),ys.subVectors(e,t),Gi.cross(ys).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Gi.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return qi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Sa.subVectors(i,n),Ea.subVectors(r,n),Dh.subVectors(e,n);const l=Sa.dot(Dh),c=Ea.dot(Dh);if(l<=0&&c<=0)return t.copy(n);Ih.subVectors(e,i);const u=Sa.dot(Ih),h=Ea.dot(Ih);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Sa,a);Nh.subVectors(e,r);const f=Sa.dot(Nh),m=Ea.dot(Nh);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ea,o);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return r0.subVectors(r,i),o=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(r0,o);const g=1/(p+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Sa,a).addScaledVector(Ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},gc={h:0,s:0,l:0};function kh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=Ip(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kh(a,r,e+1/3),this.g=kh(a,r,e),this.b=kh(a,r,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=Nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const n=dv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}copyLinearToSRGB(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return St.fromWorkingColorSpace(Ln.copy(this),e),Math.round(fn(Ln.r*255,0,255))*65536+Math.round(fn(Ln.g*255,0,255))*256+Math.round(fn(Ln.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Ln.copy(this),t);const n=Ln.r,i=Ln.g,r=Ln.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Nn){St.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,i=Ln.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(gc);const n=gl(Ws.h,gc.h,t),i=gl(Ws.s,gc.s,t),r=gl(Ws.l,gc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ye;Ye.NAMES=dv;let kM=0;class ls extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ja,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ja&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kd&&(n.blendSrc=this.blendSrc),this.blendDst!==Zd&&(n.blendDst=this.blendDst),this.blendEquation!==Nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sr extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new P,_c=new ue;class Zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Of,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_c.fromBufferAttribute(this,t),_c.applyMatrix3(e),this.setXY(t,_c.x,_c.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Of&&(e.usage=this.usage),e}}class fv extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pv extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let BM=0;const Ri=new et,Bh=new $t,Ta=new P,fi=new Ai,No=new Ai,bn=new P;class Cn extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?pv:fv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];No.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(fi.min,No.min),fi.expandByPoint(bn),bn.addVectors(fi.max,No.max),fi.expandByPoint(bn)):(fi.expandByPoint(No.min),fi.expandByPoint(No.max))}fi.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)bn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bn.fromBufferAttribute(o,c),l&&(Ta.fromBufferAttribute(e,c),bn.add(Ta)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,d=new ue,f=new ue,m=new ue,_=new P,p=new P;function g(R,I,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,v),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const E=1/(f.x*m.y-m.x*f.y);isFinite(E)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(E),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(E),o[R].add(_),o[I].add(_),o[v].add(_),l[R].add(p),l[I].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,I=b.length;R<I;++R){const v=b[R],E=v.start,N=v.count;for(let z=E,W=E+N;z<W;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new P,x=new P,w=new P,A=new P;function M(R){w.fromBufferAttribute(i,R),A.copy(w);const I=o[R];y.copy(I),y.sub(w.multiplyScalar(w.dot(I))).normalize(),x.crossVectors(A,I);const E=x.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,E)}for(let R=0,I=b.length;R<I;++R){const v=b[R],E=v.start,N=v.count;for(let z=E,W=E+N;z<W;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new Zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a0=new et,Mr=new Xl,vc=new fs,o0=new P,xc=new P,yc=new P,bc=new P,zh=new P,Mc=new P,l0=new P,Sc=new P;class qn extends $t{constructor(e=new Cn,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Mc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(zh.fromBufferAttribute(h,e),a?Mc.addScaledVector(zh,u):Mc.addScaledVector(zh.sub(t),u))}t.add(Mc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(vc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(vc,o0)===null||Mr.origin.distanceToSquared(o0)>(e.far-e.near)**2))&&(a0.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(a0),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,w=y;x<w;x+=3){const A=o.getX(x),M=o.getX(x+1),R=o.getX(x+2);i=Ec(this,g,e,n,c,u,h,A,M,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const b=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);i=Ec(this,a,e,n,c,u,h,b,y,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,w=y;x<w;x+=3){const A=x,M=x+1,R=x+2;i=Ec(this,g,e,n,c,u,h,A,M,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const b=p,y=p+1,x=p+2;i=Ec(this,a,e,n,c,u,h,b,y,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function zM(s,e,t,n,i,r,a,o){let l;if(e.side===oi?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ki,o),l===null)return null;Sc.copy(o),Sc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Sc);return c<t.near||c>t.far?null:{distance:c,point:Sc.clone(),object:s}}function Ec(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,xc),s.getVertexPosition(l,yc),s.getVertexPosition(c,bc);const u=zM(s,e,t,n,xc,yc,bc,l0);if(u){const h=new P;qi.getBarycoord(l0,xc,yc,bc,h),i&&(u.uv=qi.getInterpolatedAttribute(i,o,l,c,h,new ue)),r&&(u.uv1=qi.getInterpolatedAttribute(r,o,l,c,h,new ue)),a&&(u.normal=qi.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};qi.getNormal(xc,yc,bc,d.normal),u.face=d,u.barycoord=h}return u}class Kt extends Cn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function m(_,p,g,b,y,x,w,A,M,R,I){const v=x/M,E=w/R,N=x/2,z=w/2,W=A/2,q=M+1,H=R+1;let Y=0,$=0;const re=new P;for(let L=0;L<H;L++){const le=L*E-z;for(let qe=0;qe<q;qe++){const tt=qe*v-N;re[_]=tt*b,re[p]=le*y,re[g]=W,c.push(re.x,re.y,re.z),re[_]=0,re[p]=0,re[g]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(qe/M),h.push(1-L/R),Y+=1}}for(let L=0;L<R;L++)for(let le=0;le<M;le++){const qe=d+le+q*L,tt=d+le+q*(L+1),j=d+(le+1)+q*(L+1),ee=d+(le+1)+q*L;l.push(qe,tt,ee),l.push(tt,j,ee),$+=6}o.addGroup(f,$,I),f+=$,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gn(s){const e={};for(let t=0;t<s.length;t++){const n=go(s[t]);for(const i in n)e[i]=n[i]}return e}function HM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const VM={clone:go,merge:Gn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=HM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gv extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xs=new P,c0=new ue,u0=new ue;class On extends gv{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z),Xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z)}getViewSize(e,t){return this.getViewBounds(e,c0,u0),t.subVectors(u0,c0)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ml*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Aa=-90,wa=1;class XM extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(Aa,wa,e,t);i.layers=this.layers,this.add(i);const r=new On(Aa,wa,e,t);r.layers=this.layers,this.add(r);const a=new On(Aa,wa,e,t);a.layers=this.layers,this.add(a);const o=new On(Aa,wa,e,t);o.layers=this.layers,this.add(o);const l=new On(Aa,wa,e,t);l.layers=this.layers,this.add(l);const c=new On(Aa,wa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Is)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Iu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _v extends _n{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:uo,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $M extends ea{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _v(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Kt(5,5,5),r=new mr({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:cr});r.uniforms.tEquirect.value=t;const a=new qn(i,r),o=t.minFilter;return t.minFilter===Ds&&(t.minFilter=yi),new XM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Hh=new P,YM=new P,qM=new at;class js{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hh.subVectors(n,t).cross(YM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qM.getNormalMatrix(e),i=this.coplanarPoint(Hh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new fs,Tc=new P;class Np{constructor(e=new js,t=new js,n=new js,i=new js,r=new js,a=new js){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Is){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],p=i[11],g=i[12],b=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,p-f,x-g).normalize(),n[1].setComponents(l+r,d+c,p+f,x+g).normalize(),n[2].setComponents(l+a,d+u,p+m,x+b).normalize(),n[3].setComponents(l-a,d-u,p-m,x-b).normalize(),n[4].setComponents(l-o,d-h,p-_,x-y).normalize(),t===Is)n[5].setComponents(l+o,d+h,p+_,x+y).normalize();else if(t===Iu)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tc.x=i.normal.x>0?e.max.x:e.min.x,Tc.y=i.normal.y>0?e.max.y:e.min.y,Tc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vv(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jM(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Mo extends Cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const b=g*d-a;for(let y=0;y<c;y++){const x=y*h-r;m.push(x,-b,0),_.push(0,0,1),p.push(y/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const y=b+c*g,x=b+c*(g+1),w=b+1+c*(g+1),A=b+1+c*g;f.push(y,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",wS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,US=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:KM,alphahash_pars_fragment:ZM,alphamap_fragment:JM,alphamap_pars_fragment:QM,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:sS,batching_vertex:rS,begin_vertex:aS,beginnormal_vertex:oS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:hS,clipping_planes_pars_fragment:dS,clipping_planes_pars_vertex:fS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:gS,color_pars_vertex:_S,color_vertex:vS,common:xS,cube_uv_reflection_fragment:yS,defaultnormal_vertex:bS,displacementmap_pars_vertex:MS,displacementmap_vertex:SS,emissivemap_fragment:ES,emissivemap_pars_fragment:TS,colorspace_fragment:AS,colorspace_pars_fragment:wS,envmap_fragment:RS,envmap_common_pars_fragment:CS,envmap_pars_fragment:PS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:VS,envmap_vertex:DS,fog_vertex:IS,fog_pars_vertex:NS,fog_fragment:OS,fog_pars_fragment:US,gradientmap_pars_fragment:FS,lightmap_pars_fragment:kS,lights_lambert_fragment:BS,lights_lambert_pars_fragment:zS,lights_pars_begin:HS,lights_toon_fragment:GS,lights_toon_pars_fragment:WS,lights_phong_fragment:XS,lights_phong_pars_fragment:$S,lights_physical_fragment:YS,lights_physical_pars_fragment:qS,lights_fragment_begin:jS,lights_fragment_maps:KS,lights_fragment_end:ZS,logdepthbuf_fragment:JS,logdepthbuf_pars_fragment:QS,logdepthbuf_pars_vertex:e1,logdepthbuf_vertex:t1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:s1,map_particle_pars_fragment:r1,metalnessmap_fragment:a1,metalnessmap_pars_fragment:o1,morphinstance_vertex:l1,morphcolor_vertex:c1,morphnormal_vertex:u1,morphtarget_pars_vertex:h1,morphtarget_vertex:d1,normal_fragment_begin:f1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:_1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:x1,clearcoat_normal_fragment_maps:y1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:M1,opaque_fragment:S1,packing:E1,premultiplied_alpha_fragment:T1,project_vertex:A1,dithering_fragment:w1,dithering_pars_fragment:R1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:D1,shadowmap_vertex:I1,shadowmask_pars_fragment:N1,skinbase_vertex:O1,skinning_pars_vertex:U1,skinning_vertex:F1,skinnormal_vertex:k1,specularmap_fragment:B1,specularmap_pars_fragment:z1,tonemapping_fragment:H1,tonemapping_pars_fragment:V1,transmission_fragment:G1,transmission_pars_fragment:W1,uv_pars_fragment:X1,uv_pars_vertex:$1,uv_vertex:Y1,worldpos_vertex:q1,background_vert:j1,background_frag:K1,backgroundCube_vert:Z1,backgroundCube_frag:J1,cube_vert:Q1,cube_frag:eE,depth_vert:tE,depth_frag:nE,distanceRGBA_vert:iE,distanceRGBA_frag:sE,equirect_vert:rE,equirect_frag:aE,linedashed_vert:oE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:uE,meshlambert_vert:hE,meshlambert_frag:dE,meshmatcap_vert:fE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:gE,meshphong_vert:_E,meshphong_frag:vE,meshphysical_vert:xE,meshphysical_frag:yE,meshtoon_vert:bE,meshtoon_frag:ME,points_vert:SE,points_frag:EE,shadow_vert:TE,shadow_frag:AE,sprite_vert:wE,sprite_frag:RE},ye={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ts={basic:{uniforms:Gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Gn([ye.points,ye.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Gn([ye.common,ye.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Gn([ye.sprite,ye.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Gn([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Gn([ye.lights,ye.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ts.physical={uniforms:Gn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Ac={r:0,b:0,g:0},Er=new hs,CE=new et;function PE(s,e,t,n,i,r,a){const o=new Ye(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const x=m(b);x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===Xu)?(u===void 0&&(u=new qn(new Kt(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:go(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(y.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(Er)),u.material.toneMapped=St.getTransfer(x.colorSpace)!==Vt,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new qn(new Mo(2,2),new mr({name:"BackgroundMaterial",uniforms:go(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=St.getTransfer(x.colorSpace)!==Vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,y){b.getRGB(Ac,mv(s)),n.buffers.color.setClear(Ac.r,Ac.g,Ac.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(o,l)},render:_,addToRenderList:p}}function LE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,E,N,z,W){let q=!1;const H=h(z,N,E);r!==H&&(r=H,c(r.object)),q=f(v,z,N,W),q&&m(v,z,N,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(v,E,N,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,E,N){const z=N.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let q=W[E.id];q===void 0&&(q={},W[E.id]=q);let H=q[z];return H===void 0&&(H=d(l()),q[z]=H),H}function d(v){const E=[],N=[],z=[];for(let W=0;W<t;W++)E[W]=0,N[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:z,object:v,attributes:{},index:null}}function f(v,E,N,z){const W=r.attributes,q=E.attributes;let H=0;const Y=N.getAttributes();for(const $ in Y)if(Y[$].location>=0){const L=W[$];let le=q[$];if(le===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),L===void 0||L.attribute!==le||le&&L.data!==le.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function m(v,E,N,z){const W={},q=E.attributes;let H=0;const Y=N.getAttributes();for(const $ in Y)if(Y[$].location>=0){let L=q[$];L===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const le={};le.attribute=L,L&&L.data&&(le.data=L.data),W[$]=le,H++}r.attributes=W,r.attributesNum=H,r.index=z}function _(){const v=r.newAttributes;for(let E=0,N=v.length;E<N;E++)v[E]=0}function p(v){g(v,0)}function g(v,E){const N=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;N[v]=1,z[v]===0&&(s.enableVertexAttribArray(v),z[v]=1),W[v]!==E&&(s.vertexAttribDivisor(v,E),W[v]=E)}function b(){const v=r.newAttributes,E=r.enabledAttributes;for(let N=0,z=E.length;N<z;N++)E[N]!==v[N]&&(s.disableVertexAttribArray(N),E[N]=0)}function y(v,E,N,z,W,q,H){H===!0?s.vertexAttribIPointer(v,E,N,W,q):s.vertexAttribPointer(v,E,N,z,W,q)}function x(v,E,N,z){_();const W=z.attributes,q=N.getAttributes(),H=E.defaultAttributeValues;for(const Y in q){const $=q[Y];if($.location>=0){let re=W[Y];if(re===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const L=re.normalized,le=re.itemSize,qe=e.get(re);if(qe===void 0)continue;const tt=qe.buffer,j=qe.type,ee=qe.bytesPerElement,ge=j===s.INT||j===s.UNSIGNED_INT||re.gpuType===Tp;if(re.isInterleavedBufferAttribute){const oe=re.data,Ie=oe.stride,Ce=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<$.locationSize;Qe++)g($.location+Qe,oe.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Qe=0;Qe<$.locationSize;Qe++)p($.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Qe=0;Qe<$.locationSize;Qe++)y($.location+Qe,le/$.locationSize,j,L,Ie*ee,(Ce+le/$.locationSize*Qe)*ee,ge)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)g($.location+oe,re.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<$.locationSize;oe++)p($.location+oe);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let oe=0;oe<$.locationSize;oe++)y($.location+oe,le/$.locationSize,j,L,le*ee,le/$.locationSize*oe*ee,ge)}}else if(H!==void 0){const L=H[Y];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv($.location,L);break;case 3:s.vertexAttrib3fv($.location,L);break;case 4:s.vertexAttrib4fv($.location,L);break;default:s.vertexAttrib1fv($.location,L)}}}}b()}function w(){R();for(const v in n){const E=n[v];for(const N in E){const z=E[N];for(const W in z)u(z[W].object),delete z[W];delete E[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const N in E){const z=E[N];for(const W in z)u(z[W].object),delete z[W];delete E[N]}delete n[v.id]}function M(v){for(const E in n){const N=n[E];if(N[v.id]===void 0)continue;const z=N[v.id];for(const W in z)u(z[W].object),delete z[W];delete N[v.id]}}function R(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function DE(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];for(let _=0;_<d.length;_++)t.update(m,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function IE(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==Ui&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const R=M===Wl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ks&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ji&&!R)}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function NE(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new js,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,y=b*4;let x=g.clippingState||null;l.value=x,x=u(m,d,y,f);for(let w=0;w!==y;++w)x[w]=t[w];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function OE(s){let e=new WeakMap;function t(a,o){return o===af?a.mapping=uo:o===of&&(a.mapping=ho),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===af||o===of)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $M(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Op extends gv{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ba=4,h0=[.125,.215,.35,.446,.526,.582],Or=20,Vh=new Op,d0=new Ye;let Gh=null,Wh=0,Xh=0,$h=!1;const Dr=(1+Math.sqrt(5))/2,Ra=1/Dr,f0=[new P(-Dr,Ra,0),new P(Dr,Ra,0),new P(-Ra,0,Dr),new P(Ra,0,Dr),new P(0,Dr,-Ra),new P(0,Dr,Ra),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class p0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=$h,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Wl,format:Ui,colorSpace:Rn,depthBuffer:!1},i=m0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(r)),this._blurMaterial=FE(r,e,t)}return i}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,Vh)}_sceneToCubeUV(e,t,n,i){const o=new On(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(d0),u.toneMapping=ur,u.autoClear=!1;const f=new sr({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),m=new qn(new Kt,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(d0),_=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):b===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;wc(i,b*y,g>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===uo||e.mapping===ho;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new qn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;wc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=f0[(i-r-1)%f0.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qn(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Or-1),_=r/m,p=isFinite(r)?1+Math.floor(u*_):Or;p>Or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Or}`);const g=[];let b=0;for(let M=0;M<Or;++M){const R=M/_,I=Math.exp(-R*R/2);g.push(I),M===0?b+=I:M<p&&(b+=2*I)}for(let M=0;M<g.length;M++)g[M]=g[M]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-Ba?i-y+Ba:0),A=4*(this._cubeSize-x);wc(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(h,Vh)}}function UE(s){const e=[],t=[],n=[];let i=s;const r=s-Ba+1+h0.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ba?l=h0[a-s+Ba-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,p=2,g=1,b=new Float32Array(_*m*f),y=new Float32Array(p*m*f),x=new Float32Array(g*m*f);for(let A=0;A<f;A++){const M=A%3*2/3-1,R=A>2?0:-1,I=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];b.set(I,_*m*A),y.set(d,p*m*A);const v=[A,A,A,A,A,A];x.set(v,g*m*A)}const w=new Cn;w.setAttribute("position",new Zn(b,_)),w.setAttribute("uv",new Zn(y,p)),w.setAttribute("faceIndex",new Zn(x,g)),e.push(w),i>Ba&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function m0(s,e,t){const n=new ea(s,e,t);return n.texture.mapping=Xu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function FE(s,e,t){const n=new Float32Array(Or),i=new P(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function g0(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function _0(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kE(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===af||l===of,u=l===uo||l===ho;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new p0(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new p0(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function BE(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&uu("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zE(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let p=0,g=_.length;p<g;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let y=0,x=b.length;y<x;y+=3){const w=b[y+0],A=b[y+1],M=b[y+2];d.push(w,A,A,M,M,w)}}else if(m!==void 0){const b=m.array;_=m.version;for(let y=0,x=b.length/3-1;y<x;y+=3){const w=y+0,A=y+1,M=y+2;d.push(w,A,A,M,M,w)}}else return;const p=new(lv(d)?pv:fv)(d,1);p.version=_;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function HE(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function h(d,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let b=0;b<m;b++)g+=f[b];for(let b=0;b<_.length;b++)t.update(g,n,_[b])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function VE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function GE(s,e,t){const n=new WeakMap,i=new Et;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let w=o.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const M=new Float32Array(w*A*4*h),R=new uv(M,w,A,h);R.type=ji,R.needsUpdate=!0;const I=x*4;for(let E=0;E<h;E++){const N=g[E],z=b[E],W=y[E],q=w*A*4*E;for(let H=0;H<N.count;H++){const Y=H*I;m===!0&&(i.fromBufferAttribute(N,H),M[q+Y+0]=i.x,M[q+Y+1]=i.y,M[q+Y+2]=i.z,M[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(z,H),M[q+Y+4]=i.x,M[q+Y+5]=i.y,M[q+Y+6]=i.z,M[q+Y+7]=0),p===!0&&(i.fromBufferAttribute(W,H),M[q+Y+8]=i.x,M[q+Y+9]=i.y,M[q+Y+10]=i.z,M[q+Y+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new ue(w,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function WE(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class xv extends _n{constructor(e,t,n,i,r,a,o,l,c,u=Qa){if(u!==Qa&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qa&&(n=Qr),n===void 0&&u===po&&(n=fo),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yv=new _n,v0=new xv(1,1),bv=new uv,Mv=new PM,Sv=new _v,x0=[],y0=[],b0=new Float32Array(16),M0=new Float32Array(9),S0=new Float32Array(4);function So(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=x0[i];if(r===void 0&&(r=new Float32Array(i),x0[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qu(s,e){let t=y0[e];t===void 0&&(t=new Int32Array(e),y0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function XE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function YE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function qE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function jE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;S0.set(n),s.uniformMatrix2fv(this.addr,!1,S0),xn(t,n)}}function KE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;M0.set(n),s.uniformMatrix3fv(this.addr,!1,M0),xn(t,n)}}function ZE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;b0.set(n),s.uniformMatrix4fv(this.addr,!1,b0),xn(t,n)}}function JE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function tT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function nT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function aT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(v0.compareFunction=ov,r=v0):r=yv,t.setTexture2D(e||r,i)}function oT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mv,i)}function lT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sv,i)}function cT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bv,i)}function uT(s){switch(s){case 5126:return XE;case 35664:return $E;case 35665:return YE;case 35666:return qE;case 35674:return jE;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return JE;case 35667:case 35671:return QE;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return sT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function hT(s,e){s.uniform1fv(this.addr,e)}function dT(s,e){const t=So(e,this.size,2);s.uniform2fv(this.addr,t)}function fT(s,e){const t=So(e,this.size,3);s.uniform3fv(this.addr,t)}function pT(s,e){const t=So(e,this.size,4);s.uniform4fv(this.addr,t)}function mT(s,e){const t=So(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gT(s,e){const t=So(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _T(s,e){const t=So(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vT(s,e){s.uniform1iv(this.addr,e)}function xT(s,e){s.uniform2iv(this.addr,e)}function yT(s,e){s.uniform3iv(this.addr,e)}function bT(s,e){s.uniform4iv(this.addr,e)}function MT(s,e){s.uniform1uiv(this.addr,e)}function ST(s,e){s.uniform2uiv(this.addr,e)}function ET(s,e){s.uniform3uiv(this.addr,e)}function TT(s,e){s.uniform4uiv(this.addr,e)}function AT(s,e,t){const n=this.cache,i=e.length,r=qu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yv,r[a])}function wT(s,e,t){const n=this.cache,i=e.length,r=qu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Mv,r[a])}function RT(s,e,t){const n=this.cache,i=e.length,r=qu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sv,r[a])}function CT(s,e,t){const n=this.cache,i=e.length,r=qu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bv,r[a])}function PT(s){switch(s){case 5126:return hT;case 35664:return dT;case 35665:return fT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return bT;case 5125:return MT;case 36294:return ST;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}class LT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uT(t.type)}}class DT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PT(t.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function E0(s,e){s.seq.push(e),s.map[e.id]=e}function NT(s,e,t){const n=s.name,i=n.length;for(Yh.lastIndex=0;;){const r=Yh.exec(n),a=Yh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){E0(t,c===void 0?new LT(o,s,e):new DT(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new IT(o),E0(t,h)),t=h}}}class hu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);NT(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function T0(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const OT=37297;let UT=0;function FT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function kT(s){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(s);let n;switch(e===t?n="":e===Du&&t===Lu?n="LinearDisplayP3ToLinearSRGB":e===Lu&&t===Du&&(n="LinearSRGBToLinearDisplayP3"),s){case Rn:case $u:return[n,"LinearTransferOETF"];case Nn:case Dp:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function A0(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+FT(s.getShaderSource(e),a)}else return i}function BT(s,e){const t=kT(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zT(s,e){let t;switch(e){case Bb:t="Linear";break;case zb:t="Reinhard";break;case Hb:t="Cineon";break;case Vb:t="ACESFilmic";break;case Wb:t="AgX";break;case Xb:t="Neutral";break;case Gb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new P;function HT(){St.getLuminanceCoefficients(Rc);const s=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function GT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function nl(s){return s!==""}function w0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(s){return s.replace(XT,YT)}const $T=new Map;function YT(s,e){let t=rt[e];if(t===void 0){const n=$T.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uf(t)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(s){return s.replace(qT,jT)}function jT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function P0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ts&&(e="SHADOWMAP_TYPE_VSM"),e}function ZT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case uo:case ho:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function QT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Y_:e="ENVMAP_BLENDING_MULTIPLY";break;case Fb:e="ENVMAP_BLENDING_MIX";break;case kb:e="ENVMAP_BLENDING_ADD";break}return e}function eA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tA(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=KT(t),c=ZT(t),u=JT(t),h=QT(t),d=eA(t),f=VT(t),m=GT(r),_=i.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(nl).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(nl).join(`
`),g.length>0&&(g+=`
`)):(p=[P0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),g=[P0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?rt.tonemapping_pars_fragment:"",t.toneMapping!==ur?zT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,BT("linearToOutputTexel",t.outputColorSpace),HT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),a=Uf(a),a=w0(a,t),a=R0(a,t),o=Uf(o),o=w0(o,t),o=R0(o,t),a=C0(a),o=C0(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=b+p+a,x=b+g+o,w=T0(i,i.VERTEX_SHADER,y),A=T0(i,i.FRAGMENT_SHADER,x);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function M(E){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(A).trim();let q=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,A);else{const Y=A0(i,w,"vertex"),$=A0(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+Y+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||W==="")&&(H=!1);H&&(E.diagnostics={runnable:q,programLog:N,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:g}})}i.deleteShader(w),i.deleteShader(A),R=new hu(i,_),I=WT(i,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let I;this.getAttributes=function(){return I===void 0&&M(this),I};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,OT)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let nA=0;class iA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sA(e),t.set(e,n)),n}}class sA{constructor(e){this.id=nA++,this.code=e,this.usedTimes=0}}function rA(s,e,t,n,i,r,a){const o=new hv,l=new iA,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,E,N,z,W){const q=z.fog,H=W.geometry,Y=v.isMeshStandardMaterial?z.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),re=$&&$.mapping===Xu?$.image.height:null,L=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qe=le!==void 0?le.length:0;let tt=0;H.morphAttributes.position!==void 0&&(tt=1),H.morphAttributes.normal!==void 0&&(tt=2),H.morphAttributes.color!==void 0&&(tt=3);let j,ee,ge,oe;if(L){const Oe=ts[L];j=Oe.vertexShader,ee=Oe.fragmentShader}else j=v.vertexShader,ee=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const Ie=s.getRenderTarget(),Ce=W.isInstancedMesh===!0,Qe=W.isBatchedMesh===!0,Je=!!v.map,We=!!v.matcap,D=!!$,_t=!!v.aoMap,Xe=!!v.lightMap,je=!!v.bumpMap,k=!!v.normalMap,ot=!!v.displacementMap,Be=!!v.emissiveMap,C=!!v.metalnessMap,S=!!v.roughnessMap,X=v.anisotropy>0,J=v.clearcoat>0,ne=v.dispersion>0,Z=v.iridescence>0,Ae=v.sheen>0,se=v.transmission>0,_e=X&&!!v.anisotropyMap,Ze=J&&!!v.clearcoatMap,ie=J&&!!v.clearcoatNormalMap,Se=J&&!!v.clearcoatRoughnessMap,Ee=Z&&!!v.iridescenceMap,He=Z&&!!v.iridescenceThicknessMap,Me=Ae&&!!v.sheenColorMap,nt=Ae&&!!v.sheenRoughnessMap,$e=!!v.specularMap,vt=!!v.specularColorMap,O=!!v.specularIntensityMap,te=se&&!!v.transmissionMap,K=se&&!!v.thicknessMap,Q=!!v.gradientMap,ce=!!v.alphaMap,de=v.alphaTest>0,it=!!v.alphaHash,Ot=!!v.extensions;let Gt=ur;v.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const ft={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:ee,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Qe,batchingColor:Qe&&W._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&W.instanceColor!==null,instancingMorph:Ce&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Rn,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:We,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:re,aoMap:_t,lightMap:Xe,bumpMap:je,normalMap:k,displacementMap:f&&ot,emissiveMap:Be,normalMapObjectSpace:k&&v.normalMapType===Zb,normalMapTangentSpace:k&&v.normalMapType===av,metalnessMap:C,roughnessMap:S,anisotropy:X,anisotropyMap:_e,clearcoat:J,clearcoatMap:Ze,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:ne,iridescence:Z,iridescenceMap:Ee,iridescenceThicknessMap:He,sheen:Ae,sheenColorMap:Me,sheenRoughnessMap:nt,specularMap:$e,specularColorMap:vt,specularIntensityMap:O,transmission:se,transmissionMap:te,thicknessMap:K,gradientMap:Q,opaque:v.transparent===!1&&v.blending===Ja&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:it,combine:v.combine,mapUv:Je&&p(v.map.channel),aoMapUv:_t&&p(v.aoMap.channel),lightMapUv:Xe&&p(v.lightMap.channel),bumpMapUv:je&&p(v.bumpMap.channel),normalMapUv:k&&p(v.normalMap.channel),displacementMapUv:ot&&p(v.displacementMap.channel),emissiveMapUv:Be&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:_e&&p(v.anisotropyMap.channel),clearcoatMapUv:Ze&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:nt&&p(v.sheenRoughnessMap.channel),specularMapUv:$e&&p(v.specularMap.channel),specularColorMapUv:vt&&p(v.specularColorMap.channel),specularIntensityMapUv:O&&p(v.specularIntensityMap.channel),transmissionMapUv:te&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:ce&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(k||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(Je||ce),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:qe,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&St.getTransfer(v.map.colorSpace)===Vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===oi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ot&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&v.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function b(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(y(E,v),x(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function w(v){const E=_[v.type];let N;if(E){const z=ts[E];N=VM.clone(z.uniforms)}else N=v.uniforms;return N}function A(v,E){let N;for(let z=0,W=u.length;z<W;z++){const q=u[z];if(q.cacheKey===E){N=q,++N.usedTimes;break}}return N===void 0&&(N=new tA(s,E,v,r),u.push(N)),N}function M(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:w,acquireProgram:A,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:I}}function aA(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function oA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function L0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D0(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,m,_,p){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:p},s[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=_,g.group=p),e++,g}function o(h,d,f,m,_,p){const g=a(h,d,f,m,_,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(h,d,f,m,_,p){const g=a(h,d,f,m,_,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||oA),n.length>1&&n.sort(d||L0),i.length>1&&i.sort(d||L0)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function lA(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new D0,s.set(n,[a])):i>=r.length?(a=new D0,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function cA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function uA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hA=0;function dA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fA(s){const e=new cA,t=uA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new et,a=new et;function o(c){let u=0,h=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,b=0,y=0,x=0,w=0,A=0,M=0;c.sort(dA);for(let I=0,v=c.length;I<v;I++){const E=c[I],N=E.color,z=E.intensity,W=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=N.r*z,h+=N.g*z,d+=N.b*z;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],z);M++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,$=t.get(E);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=E.shadow.matrix,b++}n.directional[f]=H,f++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(N).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[_]=H;const Y=E.shadow;if(E.map&&(n.spotLightMap[w]=E.map,w++,Y.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,E.castShadow){const $=t.get(E);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=q,x++}_++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(N).multiplyScalar(z),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=H,p++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const Y=E.shadow,$=t.get(E);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=E.shadow.matrix,y++}n.point[m]=H,m++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(z),H.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[g]=H,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==g||R.numDirectionalShadows!==b||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=M,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=g,R.numDirectionalShadows=b,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=M,n.version=hA++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const y=c[g];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function I0(s){const e=new fA(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pA(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new I0(s),e.set(i,[o])):r>=a.length?(o=new I0(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class mA extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gA extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xA(s,e,t){let n=new Np;const i=new ue,r=new ue,a=new Et,o=new mA({depthPacking:Kb}),l=new gA,c={},u=t.maxTextureSize,h={[Ki]:oi,[oi]:Ki,[en]:en},d=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:_A,fragmentShader:vA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Cn;m.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qn(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X_;let g=this.type;this.render=function(A,M,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const I=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),N=s.state;N.setBlending(cr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=g!==Ts&&this.type===Ts,W=g===Ts&&this.type!==Ts;for(let q=0,H=A.length;q<H;q++){const Y=A[q],$=Y.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const re=$.getFrameExtents();if(i.multiply(re),r.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/re.x),i.x=r.x*re.x,$.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/re.y),i.y=r.y*re.y,$.mapSize.y=r.y)),$.map===null||z===!0||W===!0){const le=this.type!==Ts?{minFilter:kn,magFilter:kn}:{};$.map!==null&&$.map.dispose(),$.map=new ea(i.x,i.y,le),$.map.texture.name=Y.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const L=$.getViewportCount();for(let le=0;le<L;le++){const qe=$.getViewport(le);a.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),N.viewport(a),$.updateMatrices(Y,le),n=$.getFrustum(),x(M,R,$.camera,Y,this.type)}$.isPointLightShadow!==!0&&this.type===Ts&&b($,R),$.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(I,v,E)};function b(A,M){const R=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ea(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(M,null,R,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(M,null,R,f,_,null)}function y(A,M,R,I){let v=null;const E=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)v=E;else if(v=R.isPointLight===!0?l:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=v.uuid,z=M.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let q=W[z];q===void 0&&(q=v.clone(),W[z]=q,M.addEventListener("dispose",w)),v=q}if(v.visible=M.visible,v.wireframe=M.wireframe,I===Ts?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:h[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=R}return v}function x(A,M,R,I,v){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ts)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const z=e.update(A),W=A.material;if(Array.isArray(W)){const q=z.groups;for(let H=0,Y=q.length;H<Y;H++){const $=q[H],re=W[$.materialIndex];if(re&&re.visible){const L=y(A,re,I,v);A.onBeforeShadow(s,A,M,R,z,L,$),s.renderBufferDirect(R,null,z,L,A,$),A.onAfterShadow(s,A,M,R,z,L,$)}}}else if(W.visible){const q=y(A,W,I,v);A.onBeforeShadow(s,A,M,R,z,q,null),s.renderBufferDirect(R,null,z,q,A,null),A.onAfterShadow(s,A,M,R,z,q,null)}}const N=A.children;for(let z=0,W=N.length;z<W;z++)x(N[z],M,R,I,v)}function w(A){A.target.removeEventListener("dispose",w);for(const R in c){const I=c[R],v=A.target.uuid;v in I&&(I[v].dispose(),delete I[v])}}}const yA={[Jd]:Qd,[ef]:sf,[tf]:rf,[co]:nf,[Qd]:Jd,[sf]:ef,[rf]:tf,[nf]:co};function bA(s){function e(){let O=!1;const te=new Et;let K=null;const Q=new Et(0,0,0,0);return{setMask:function(ce){K!==ce&&!O&&(s.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){O=ce},setClear:function(ce,de,it,Ot,Gt){Gt===!0&&(ce*=Ot,de*=Ot,it*=Ot),te.set(ce,de,it,Ot),Q.equals(te)===!1&&(s.clearColor(ce,de,it,Ot),Q.copy(te))},reset:function(){O=!1,K=null,Q.set(-1,0,0,0)}}}function t(){let O=!1,te=!1,K=null,Q=null,ce=null;return{setReversed:function(de){te=de},setTest:function(de){de?ge(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(de){K!==de&&!O&&(s.depthMask(de),K=de)},setFunc:function(de){if(te&&(de=yA[de]),Q!==de){switch(de){case Jd:s.depthFunc(s.NEVER);break;case Qd:s.depthFunc(s.ALWAYS);break;case ef:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case tf:s.depthFunc(s.EQUAL);break;case nf:s.depthFunc(s.GEQUAL);break;case sf:s.depthFunc(s.GREATER);break;case rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=de}},setLocked:function(de){O=de},setClear:function(de){ce!==de&&(s.clearDepth(de),ce=de)},reset:function(){O=!1,K=null,Q=null,ce=null}}}function n(){let O=!1,te=null,K=null,Q=null,ce=null,de=null,it=null,Ot=null,Gt=null;return{setTest:function(ft){O||(ft?ge(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(ft){te!==ft&&!O&&(s.stencilMask(ft),te=ft)},setFunc:function(ft,Oe,Pe){(K!==ft||Q!==Oe||ce!==Pe)&&(s.stencilFunc(ft,Oe,Pe),K=ft,Q=Oe,ce=Pe)},setOp:function(ft,Oe,Pe){(de!==ft||it!==Oe||Ot!==Pe)&&(s.stencilOp(ft,Oe,Pe),de=ft,it=Oe,Ot=Pe)},setLocked:function(ft){O=ft},setClear:function(ft){Gt!==ft&&(s.clearStencil(ft),Gt=ft)},reset:function(){O=!1,te=null,K=null,Q=null,ce=null,de=null,it=null,Ot=null,Gt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,b=null,y=null,x=null,w=null,A=new Ye(0,0,0),M=0,R=!1,I=null,v=null,E=null,N=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=H>=2);let $=null,re={};const L=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),qe=new Et().fromArray(L),tt=new Et().fromArray(le);function j(O,te,K,Q){const ce=new Uint8Array(4),de=s.createTexture();s.bindTexture(O,de),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<K;it++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(te+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return de}const ee={};ee[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ge(s.DEPTH_TEST),r.setFunc(co),Xe(!1),je(Fm),ge(s.CULL_FACE),D(cr);function ge(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function oe(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Ie(O,te){return u[O]!==te?(s.bindFramebuffer(O,te),u[O]=te,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=te),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Ce(O,te){let K=d,Q=!1;if(O){K=h.get(te),K===void 0&&(K=[],h.set(te,K));const ce=O.textures;if(K.length!==ce.length||K[0]!==s.COLOR_ATTACHMENT0){for(let de=0,it=ce.length;de<it;de++)K[de]=s.COLOR_ATTACHMENT0+de;K.length=ce.length,Q=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,Q=!0);Q&&s.drawBuffers(K)}function Qe(O){return f!==O?(s.useProgram(O),f=O,!0):!1}const Je={[Nr]:s.FUNC_ADD,[yb]:s.FUNC_SUBTRACT,[bb]:s.FUNC_REVERSE_SUBTRACT};Je[Mb]=s.MIN,Je[Sb]=s.MAX;const We={[Eb]:s.ZERO,[Tb]:s.ONE,[Ab]:s.SRC_COLOR,[Kd]:s.SRC_ALPHA,[Db]:s.SRC_ALPHA_SATURATE,[Pb]:s.DST_COLOR,[Rb]:s.DST_ALPHA,[wb]:s.ONE_MINUS_SRC_COLOR,[Zd]:s.ONE_MINUS_SRC_ALPHA,[Lb]:s.ONE_MINUS_DST_COLOR,[Cb]:s.ONE_MINUS_DST_ALPHA,[Ib]:s.CONSTANT_COLOR,[Nb]:s.ONE_MINUS_CONSTANT_COLOR,[Ob]:s.CONSTANT_ALPHA,[Ub]:s.ONE_MINUS_CONSTANT_ALPHA};function D(O,te,K,Q,ce,de,it,Ot,Gt,ft){if(O===cr){m===!0&&(oe(s.BLEND),m=!1);return}if(m===!1&&(ge(s.BLEND),m=!0),O!==xb){if(O!==_||ft!==R){if((p!==Nr||y!==Nr)&&(s.blendEquation(s.FUNC_ADD),p=Nr,y=Nr),ft)switch(O){case Ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFunc(s.ONE,s.ONE);break;case Bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}g=null,b=null,x=null,w=null,A.set(0,0,0),M=0,_=O,R=ft}return}ce=ce||te,de=de||K,it=it||Q,(te!==p||ce!==y)&&(s.blendEquationSeparate(Je[te],Je[ce]),p=te,y=ce),(K!==g||Q!==b||de!==x||it!==w)&&(s.blendFuncSeparate(We[K],We[Q],We[de],We[it]),g=K,b=Q,x=de,w=it),(Ot.equals(A)===!1||Gt!==M)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Gt),A.copy(Ot),M=Gt),_=O,R=!1}function _t(O,te){O.side===en?oe(s.CULL_FACE):ge(s.CULL_FACE);let K=O.side===oi;te&&(K=!K),Xe(K),O.blending===Ja&&O.transparent===!1?D(cr):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),i.setMask(O.colorWrite);const Q=O.stencilWrite;a.setTest(Q),Q&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ot(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(O){I!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),I=O)}function je(O){O!==_b?(ge(s.CULL_FACE),O!==v&&(O===Fm?s.cullFace(s.BACK):O===vb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),v=O}function k(O){O!==E&&(q&&s.lineWidth(O),E=O)}function ot(O,te,K){O?(ge(s.POLYGON_OFFSET_FILL),(N!==te||z!==K)&&(s.polygonOffset(te,K),N=te,z=K)):oe(s.POLYGON_OFFSET_FILL)}function Be(O){O?ge(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function C(O){O===void 0&&(O=s.TEXTURE0+W-1),$!==O&&(s.activeTexture(O),$=O)}function S(O,te,K){K===void 0&&($===null?K=s.TEXTURE0+W-1:K=$);let Q=re[K];Q===void 0&&(Q={type:void 0,texture:void 0},re[K]=Q),(Q.type!==O||Q.texture!==te)&&($!==K&&(s.activeTexture(K),$=K),s.bindTexture(O,te||ee[O]),Q.type=O,Q.texture=te)}function X(){const O=re[$];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){qe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function Me(O){tt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function nt(O,te){let K=l.get(te);K===void 0&&(K=new WeakMap,l.set(te,K));let Q=K.get(O);Q===void 0&&(Q=s.getUniformBlockIndex(te,O.name),K.set(O,Q))}function $e(O,te){const Q=l.get(te).get(O);o.get(te)!==Q&&(s.uniformBlockBinding(te,Q,O.__bindingPointIndex),o.set(te,Q))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},$=null,re={},u={},h=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,b=null,y=null,x=null,w=null,A=new Ye(0,0,0),M=0,R=!1,I=null,v=null,E=null,N=null,z=null,qe.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ge,disable:oe,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:Qe,setBlending:D,setMaterial:_t,setFlipSided:Xe,setCullFace:je,setLineWidth:k,setPolygonOffset:ot,setScissorTest:Be,activeTexture:C,bindTexture:S,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Ee,updateUBOMapping:nt,uniformBlockBinding:$e,texStorage2D:Ze,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Ae,compressedTexSubImage2D:se,compressedTexSubImage3D:_e,scissor:He,viewport:Me,reset:vt}}function N0(s,e,t,n){const i=MA(n);switch(t){case Q_:return s*e;case tv:return s*e;case nv:return s*e*2;case Rp:return s*e/i.components*i.byteLength;case Cp:return s*e/i.components*i.byteLength;case iv:return s*e*2/i.components*i.byteLength;case Pp:return s*e*2/i.components*i.byteLength;case ev:return s*e*3/i.components*i.byteLength;case Ui:return s*e*4/i.components*i.byteLength;case Lp:return s*e*4/i.components*i.byteLength;case ru:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ou:case lu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:case hf:return Math.max(s,16)*Math.max(e,8)/4;case lf:case uf:return Math.max(s,8)*Math.max(e,8)/2;case df:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cu:case Cf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sv:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Df:case If:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MA(s){switch(s){case ks:case K_:return{byteLength:1,components:1};case Il:case Z_:case Wl:return{byteLength:2,components:1};case Ap:case wp:return{byteLength:2,components:4};case Qr:case Tp:case ji:return{byteLength:4,components:1};case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function SA(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):Ul("canvas")}function _(C,S,X){let J=1;const ne=Be(C);if((ne.width>X||ne.height>X)&&(J=X/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*ne.width),Ae=Math.floor(J*ne.height);h===void 0&&(h=m(Z,Ae));const se=S?m(Z,Ae):h;return se.width=Z,se.height=Ae,se.getContext("2d").drawImage(C,0,0,Z,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ae+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==kn&&C.minFilter!==yi}function g(C){s.generateMipmap(C)}function b(C,S,X,J,ne=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===s.RED&&(X===s.FLOAT&&(Z=s.R32F),X===s.HALF_FLOAT&&(Z=s.R16F),X===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.R8UI),X===s.UNSIGNED_SHORT&&(Z=s.R16UI),X===s.UNSIGNED_INT&&(Z=s.R32UI),X===s.BYTE&&(Z=s.R8I),X===s.SHORT&&(Z=s.R16I),X===s.INT&&(Z=s.R32I)),S===s.RG&&(X===s.FLOAT&&(Z=s.RG32F),X===s.HALF_FLOAT&&(Z=s.RG16F),X===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.RG8UI),X===s.UNSIGNED_SHORT&&(Z=s.RG16UI),X===s.UNSIGNED_INT&&(Z=s.RG32UI),X===s.BYTE&&(Z=s.RG8I),X===s.SHORT&&(Z=s.RG16I),X===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),X===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),X===s.UNSIGNED_INT&&(Z=s.RGB32UI),X===s.BYTE&&(Z=s.RGB8I),X===s.SHORT&&(Z=s.RGB16I),X===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),X===s.UNSIGNED_INT&&(Z=s.RGBA32UI),X===s.BYTE&&(Z=s.RGBA8I),X===s.SHORT&&(Z=s.RGBA16I),X===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){const Ae=ne?Pu:St.getTransfer(J);X===s.FLOAT&&(Z=s.RGBA32F),X===s.HALF_FLOAT&&(Z=s.RGBA16F),X===s.UNSIGNED_BYTE&&(Z=Ae===Vt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(C,S){let X;return C?S===null||S===Qr||S===fo?X=s.DEPTH24_STENCIL8:S===ji?X=s.DEPTH32F_STENCIL8:S===Il&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qr||S===fo?X=s.DEPTH_COMPONENT24:S===ji?X=s.DEPTH_COMPONENT32F:S===Il&&(X=s.DEPTH_COMPONENT16),X}function x(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==yi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){const S=C.target;S.removeEventListener("dispose",w),M(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),I(S)}function M(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,J=d.get(X);if(J){const ne=J[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(J).length===0&&d.delete(X)}n.remove(C)}function R(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const X=C.source,J=d.get(X);delete J[S.__cacheKey],a.memory.textures--}function I(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ne=0;ne<S.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(S.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=C.textures;for(let J=0,ne=X.length;J<ne;J++){const Z=n.get(X[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(C)}let v=0;function E(){v=0}function N(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const X=n.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(X,C,S);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+S)}function q(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){tt(X,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+S)}function H(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){tt(X,C,S);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+S)}function Y(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){j(X,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+S)}const $={[Jr]:s.REPEAT,[ir]:s.CLAMP_TO_EDGE,[Cu]:s.MIRRORED_REPEAT},re={[kn]:s.NEAREST,[j_]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[su]:s.LINEAR_MIPMAP_NEAREST,[Ds]:s.LINEAR_MIPMAP_LINEAR},L={[Jb]:s.NEVER,[sM]:s.ALWAYS,[Qb]:s.LESS,[ov]:s.LEQUAL,[eM]:s.EQUAL,[iM]:s.GEQUAL,[tM]:s.GREATER,[nM]:s.NOTEQUAL};function le(C,S){if(S.type===ji&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yi||S.magFilter===su||S.magFilter===tl||S.magFilter===Ds||S.minFilter===yi||S.minFilter===su||S.minFilter===tl||S.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,re[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,L[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kn||S.minFilter!==tl&&S.minFilter!==Ds||S.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qe(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));const J=S.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const Z=z(S);if(Z!==C.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[Z].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(S)),C.__cacheKey=Z,C.__webglTexture=ne[Z].texture}return X}function tt(C,S,X){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const ne=qe(C,S),Z=S.source;t.bindTexture(J,C.__webglTexture,s.TEXTURE0+X);const Ae=n.get(Z);if(Z.version!==Ae.__version||ne===!0){t.activeTexture(s.TEXTURE0+X);const se=St.getPrimaries(St.workingColorSpace),_e=S.colorSpace===Ks?null:St.getPrimaries(S.colorSpace),Ze=S.colorSpace===Ks||se===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ie=_(S.image,!1,i.maxTextureSize);ie=ot(S,ie);const Se=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type);let He=b(S.internalFormat,Se,Ee,S.colorSpace,S.isVideoTexture);le(J,S);let Me;const nt=S.mipmaps,$e=S.isVideoTexture!==!0,vt=Ae.__version===void 0||ne===!0,O=Z.dataReady,te=x(S,ie);if(S.isDepthTexture)He=y(S.format===po,S.type),vt&&($e?t.texStorage2D(s.TEXTURE_2D,1,He,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,He,ie.width,ie.height,0,Se,Ee,null));else if(S.isDataTexture)if(nt.length>0){$e&&vt&&t.texStorage2D(s.TEXTURE_2D,te,He,nt[0].width,nt[0].height);for(let K=0,Q=nt.length;K<Q;K++)Me=nt[K],$e?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,Ee,Me.data):t.texImage2D(s.TEXTURE_2D,K,He,Me.width,Me.height,0,Se,Ee,Me.data);S.generateMipmaps=!1}else $e?(vt&&t.texStorage2D(s.TEXTURE_2D,te,He,ie.width,ie.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,Ee,ie.data)):t.texImage2D(s.TEXTURE_2D,0,He,ie.width,ie.height,0,Se,Ee,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,te,He,nt[0].width,nt[0].height,ie.depth);for(let K=0,Q=nt.length;K<Q;K++)if(Me=nt[K],S.format!==Ui)if(Se!==null)if($e){if(O)if(S.layerUpdates.size>0){const ce=N0(Me.width,Me.height,S.format,S.type);for(const de of S.layerUpdates){const it=Me.data.subarray(de*ce/Me.data.BYTES_PER_ELEMENT,(de+1)*ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,de,Me.width,Me.height,1,Se,it,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ie.depth,Se,Me.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,He,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ie.depth,Se,Ee,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,He,Me.width,Me.height,ie.depth,0,Se,Ee,Me.data)}else{$e&&vt&&t.texStorage2D(s.TEXTURE_2D,te,He,nt[0].width,nt[0].height);for(let K=0,Q=nt.length;K<Q;K++)Me=nt[K],S.format!==Ui?Se!==null?$e?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,K,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,Ee,Me.data):t.texImage2D(s.TEXTURE_2D,K,He,Me.width,Me.height,0,Se,Ee,Me.data)}else if(S.isDataArrayTexture)if($e){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,te,He,ie.width,ie.height,ie.depth),O)if(S.layerUpdates.size>0){const K=N0(ie.width,ie.height,S.format,S.type);for(const Q of S.layerUpdates){const ce=ie.data.subarray(Q*K/ie.data.BYTES_PER_ELEMENT,(Q+1)*K/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,Se,Ee,ce)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ee,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,ie.width,ie.height,ie.depth,0,Se,Ee,ie.data);else if(S.isData3DTexture)$e?(vt&&t.texStorage3D(s.TEXTURE_3D,te,He,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ee,ie.data)):t.texImage3D(s.TEXTURE_3D,0,He,ie.width,ie.height,ie.depth,0,Se,Ee,ie.data);else if(S.isFramebufferTexture){if(vt)if($e)t.texStorage2D(s.TEXTURE_2D,te,He,ie.width,ie.height);else{let K=ie.width,Q=ie.height;for(let ce=0;ce<te;ce++)t.texImage2D(s.TEXTURE_2D,ce,He,K,Q,0,Se,Ee,null),K>>=1,Q>>=1}}else if(nt.length>0){if($e&&vt){const K=Be(nt[0]);t.texStorage2D(s.TEXTURE_2D,te,He,K.width,K.height)}for(let K=0,Q=nt.length;K<Q;K++)Me=nt[K],$e?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Se,Ee,Me):t.texImage2D(s.TEXTURE_2D,K,He,Se,Ee,Me);S.generateMipmaps=!1}else if($e){if(vt){const K=Be(ie);t.texStorage2D(s.TEXTURE_2D,te,He,K.width,K.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Ee,ie)}else t.texImage2D(s.TEXTURE_2D,0,He,Se,Ee,ie);p(S)&&g(J),Ae.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,X){if(S.image.length!==6)return;const J=qe(C,S),ne=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+X);const Z=n.get(ne);if(ne.version!==Z.__version||J===!0){t.activeTexture(s.TEXTURE0+X);const Ae=St.getPrimaries(St.workingColorSpace),se=S.colorSpace===Ks?null:St.getPrimaries(S.colorSpace),_e=S.colorSpace===Ks||Ae===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let Q=0;Q<6;Q++)!Ze&&!ie?Se[Q]=_(S.image[Q],!0,i.maxCubemapSize):Se[Q]=ie?S.image[Q].image:S.image[Q],Se[Q]=ot(S,Se[Q]);const Ee=Se[0],He=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),nt=b(S.internalFormat,He,Me,S.colorSpace),$e=S.isVideoTexture!==!0,vt=Z.__version===void 0||J===!0,O=ne.dataReady;let te=x(S,Ee);le(s.TEXTURE_CUBE_MAP,S);let K;if(Ze){$e&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,te,nt,Ee.width,Ee.height);for(let Q=0;Q<6;Q++){K=Se[Q].mipmaps;for(let ce=0;ce<K.length;ce++){const de=K[ce];S.format!==Ui?He!==null?$e?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,nt,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,de.width,de.height,He,Me,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,nt,de.width,de.height,0,He,Me,de.data)}}}else{if(K=S.mipmaps,$e&&vt){K.length>0&&te++;const Q=Be(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,te,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Se[Q].width,Se[Q].height,He,Me,Se[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Se[Q].width,Se[Q].height,0,He,Me,Se[Q].data);for(let ce=0;ce<K.length;ce++){const it=K[ce].image[Q].image;$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,it.width,it.height,He,Me,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,nt,it.width,it.height,0,He,Me,it.data)}}else{$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,He,Me,Se[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,He,Me,Se[Q]);for(let ce=0;ce<K.length;ce++){const de=K[ce];$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,He,Me,de.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,nt,He,Me,de.image[Q])}}}p(S)&&g(s.TEXTURE_CUBE_MAP),Z.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ee(C,S,X,J,ne,Z){const Ae=r.convert(X.format,X.colorSpace),se=r.convert(X.type),_e=b(X.internalFormat,Ae,se,X.colorSpace);if(!n.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>Z),Se=Math.max(1,S.height>>Z);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,_e,ie,Se,S.depth,0,Ae,se,null):t.texImage2D(ne,Z,_e,ie,Se,0,Ae,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ne,n.get(X).__webglTexture,0,Xe(S)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ne,n.get(X).__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(C,S,X){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const J=S.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=y(S.stencilBuffer,ne),Ae=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=Xe(S);je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Z,S.width,S.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,C)}else{const J=S.textures;for(let ne=0;ne<J.length;ne++){const Z=J[ne],Ae=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),_e=b(Z.internalFormat,Ae,se,Z.colorSpace),Ze=Xe(S);X&&je(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,_e,S.width,S.height):je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,_e,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_e,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,ne=Xe(S);if(S.depthTexture.format===Qa)je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===po)je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=s.createRenderbuffer(),ge(S.__webglDepthbuffer[J],C,!1);else{const ne=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ge(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(C,S,X){const J=n.get(C);S!==void 0&&ee(J.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Ie(C)}function Qe(C){const S=C.texture,X=n.get(C),J=n.get(S);C.addEventListener("dispose",A);const ne=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,a.memory.textures++),Z){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let _e=0;_e<S.mipmaps.length;_e++)X.__webglFramebuffer[se][_e]=s.createFramebuffer()}else X.__webglFramebuffer[se]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)X.__webglFramebuffer[se]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let se=0,_e=ne.length;se<_e;se++){const Ze=n.get(ne[se]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&je(C)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<ne.length;se++){const _e=ne[se];X.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[se]);const Ze=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),Se=b(_e.internalFormat,Ze,ie,_e.colorSpace,C.isXRRenderTarget===!0),Ee=Xe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Se,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,X.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),le(s.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)ee(X.__webglFramebuffer[se][_e],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e);else ee(X.__webglFramebuffer[se],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(S)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let se=0,_e=ne.length;se<_e;se++){const Ze=ne[se],ie=n.get(Ze);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),le(s.TEXTURE_2D,Ze),ee(X.__webglFramebuffer,C,Ze,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),p(Ze)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),le(se,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)ee(X.__webglFramebuffer[_e],C,S,s.COLOR_ATTACHMENT0,se,_e);else ee(X.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,se,0);p(S)&&g(se),t.unbindTexture()}C.depthBuffer&&Ie(C)}function Je(C){const S=C.textures;for(let X=0,J=S.length;X<J;X++){const ne=S[X];if(p(ne)){const Z=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ae=n.get(ne).__webglTexture;t.bindTexture(Z,Ae),g(Z),t.unbindTexture()}}}const We=[],D=[];function _t(C){if(C.samples>0){if(je(C)===!1){const S=C.textures,X=C.width,J=C.height;let ne=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(C),se=S.length>1;if(se)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const Ze=n.get(S[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,X,J,0,0,X,J,ne,s.NEAREST),l===!0&&(We.length=0,D.length=0,We.push(s.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push(Z),D.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const Ze=n.get(S[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Xe(C){return Math.min(i.maxSamples,C.samples)}function je(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ot(C,S){const X=C.colorSpace,J=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Rn&&X!==Ks&&(St.getTransfer(X)===Vt?(J!==Ui||ne!==ks)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Ce,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=je}function EA(s,e){function t(n,i=Ks){let r;const a=St.getTransfer(i);if(n===ks)return s.UNSIGNED_BYTE;if(n===Ap)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wp)return s.UNSIGNED_SHORT_5_5_5_1;if(n===J_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===K_)return s.BYTE;if(n===Z_)return s.SHORT;if(n===Il)return s.UNSIGNED_SHORT;if(n===Tp)return s.INT;if(n===Qr)return s.UNSIGNED_INT;if(n===ji)return s.FLOAT;if(n===Wl)return s.HALF_FLOAT;if(n===Q_)return s.ALPHA;if(n===ev)return s.RGB;if(n===Ui)return s.RGBA;if(n===tv)return s.LUMINANCE;if(n===nv)return s.LUMINANCE_ALPHA;if(n===Qa)return s.DEPTH_COMPONENT;if(n===po)return s.DEPTH_STENCIL;if(n===Rp)return s.RED;if(n===Cp)return s.RED_INTEGER;if(n===iv)return s.RG;if(n===Pp)return s.RG_INTEGER;if(n===Lp)return s.RGBA_INTEGER;if(n===ru||n===au||n===ou||n===lu)if(a===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ru)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===au)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ou)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ru)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===au)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ou)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lf||n===cf||n===uf||n===hf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===df||n===ff||n===pf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===df||n===ff)return a===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mf||n===gf||n===_f||n===vf||n===xf||n===yf||n===bf||n===Mf||n===Sf||n===Ef||n===Tf||n===Af||n===wf||n===Rf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_f)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ef)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Af)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rf)return a===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cu||n===Cf||n===Pf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cu)return a===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sv||n===Lf||n===Df||n===If)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Df)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===If)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class TA extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ni extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new _n,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mr({vertexShader:wA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends la{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=new CA,p=t.getContextAttributes();let g=null,b=null;const y=[],x=[],w=new ue;let A=null;const M=new On;M.layers.enable(1),M.viewport=new Et;const R=new On;R.layers.enable(2),R.viewport=new Et;const I=[M,R],v=new TA;v.layers.enable(1),v.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=y[j];return ee===void 0&&(ee=new qh,y[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=y[j];return ee===void 0&&(ee=new qh,y[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=y[j];return ee===void 0&&(ee=new qh,y[j]=ee),ee.getHandSpace()};function z(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const ge=y[ee];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||a),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let j=0;j<y.length;j++){const ee=x[j];ee!==null&&(x[j]=null,y[j].disconnect(ee))}E=null,N=null,_.reset(),e.setRenderTarget(g),f=null,d=null,h=null,i=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ea(f.framebufferWidth,f.framebufferHeight,{format:Ui,type:ks,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ge=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?po:Qa,ge=p.stencil?fo:Qr);const Ie={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ea(d.textureWidth,d.textureHeight,{format:Ui,type:ks,depthTexture:new xv(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(j){for(let ee=0;ee<j.removed.length;ee++){const ge=j.removed[ee],oe=x.indexOf(ge);oe>=0&&(x[oe]=null,y[oe].disconnect(ge))}for(let ee=0;ee<j.added.length;ee++){const ge=j.added[ee];let oe=x.indexOf(ge);if(oe===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=x.length){x.push(ge),oe=Ce;break}else if(x[Ce]===null){x[Ce]=ge,oe=Ce;break}if(oe===-1)break}const Ie=y[oe];Ie&&Ie.connect(ge)}}const H=new P,Y=new P;function $(j,ee,ge){H.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const oe=H.distanceTo(Y),Ie=ee.projectionMatrix.elements,Ce=ge.projectionMatrix.elements,Qe=Ie[14]/(Ie[10]-1),Je=Ie[14]/(Ie[10]+1),We=(Ie[9]+1)/Ie[5],D=(Ie[9]-1)/Ie[5],_t=(Ie[8]-1)/Ie[0],Xe=(Ce[8]+1)/Ce[0],je=Qe*_t,k=Qe*Xe,ot=oe/(-_t+Xe),Be=ot*-_t;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const C=Qe+ot,S=Je+ot,X=je-Be,J=k+(oe-Be),ne=We*Je/S*C,Z=D*Je/S*C;j.projectionMatrix.makePerspective(X,J,ne,Z,C,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,ge=j.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),v.near=R.near=M.near=ee,v.far=R.far=M.far=ge,(E!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,N=v.far);const oe=j.parent,Ie=v.cameras;re(v,oe);for(let Ce=0;Ce<Ie.length;Ce++)re(Ie[Ce],oe);Ie.length===2?$(v,M,R):v.projectionMatrix.copy(M.projectionMatrix),L(j,v,oe)};function L(j,ee,ge){ge===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let le=null;function qe(j,ee){if(u=ee.getViewerPose(c||a),m=ee,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let oe=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ce=0;Ce<ge.length;Ce++){const Qe=ge[Ce];let Je=null;if(f!==null)Je=f.getViewport(Qe);else{const D=h.getViewSubImage(d,Qe);Je=D.viewport,Ce===0&&(e.setRenderTargetTextures(b,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(b))}let We=I[Ce];We===void 0&&(We=new On,We.layers.enable(Ce),We.viewport=new Et,I[Ce]=We),We.matrix.fromArray(Qe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Qe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Je.x,Je.y,Je.width,Je.height),Ce===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(We)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ce=h.getDepthInformation(ge[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,i.renderState)}}for(let ge=0;ge<y.length;ge++){const oe=x[ge],Ie=y[ge];oe!==null&&Ie!==void 0&&Ie.update(oe,ee,c||a)}le&&le(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const tt=new vv;tt.setAnimationLoop(qe),this.setAnimationLoop=function(j){le=j},this.dispose=function(){}}}const Tr=new hs,LA=new et;function DA(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,mv(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,b,y,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,b,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===oi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===oi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),y=b.envMap,x=b.envMapRotation;y&&(p.envMap.value=y,Tr.copy(x),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(Tr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===oi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IA(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const x=y.program;n.uniformBlockBinding(b,x)}function c(b,y){let x=i[b.id];x===void 0&&(m(b),x=u(b),i[b.id]=x,b.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(b,w);const A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function u(b){const y=h();b.__bindingPointIndex=y;const x=s.createBuffer(),w=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=i[b.id],x=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,M=x.length;A<M;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let I=0,v=R.length;I<v;I++){const E=R[I];if(f(E,A,I,w)===!0){const N=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let q=0;q<z.length;q++){const H=z[q],Y=_(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+W,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,y,x,w){const A=b.value,M=y+"_"+x;if(w[M]===void 0)return typeof A=="number"||typeof A=="boolean"?w[M]=A:w[M]=A.clone(),!0;{const R=w[M];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[M]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(b){const y=b.uniforms;let x=0;const w=16;for(let M=0,R=y.length;M<R;M++){const I=Array.isArray(y[M])?y[M]:[y[M]];for(let v=0,E=I.length;v<E;v++){const N=I[v],z=Array.isArray(N.value)?N.value:[N.value];for(let W=0,q=z.length;W<q;W++){const H=z[W],Y=_(H),$=x%w,re=$%Y.boundary,L=$+re;x+=re,L!==0&&w-L<Y.storage&&(x+=w-L),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Y.storage}}}const A=x%w;return A>0&&(x+=w-A),b.__size=x,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}class Ev{constructor(e={}){const{canvas:t=bM(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=ur,this.toneMappingExposure=1;const y=this;let x=!1,w=0,A=0,M=null,R=-1,I=null;const v=new Et,E=new Et;let N=null;const z=new Ye(0);let W=0,q=t.width,H=t.height,Y=1,$=null,re=null;const L=new Et(0,0,q,H),le=new Et(0,0,q,H);let qe=!1;const tt=new Np;let j=!1,ee=!1;const ge=new et,oe=new et,Ie=new P,Ce=new Et,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function We(){return M===null?Y:1}let D=n;function _t(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ep}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const F="webgl2";if(D=_t(F,T),D===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Xe,je,k,ot,Be,C,S,X,J,ne,Z,Ae,se,_e,Ze,ie,Se,Ee,He,Me,nt,$e,vt,O;function te(){Xe=new BE(D),Xe.init(),$e=new EA(D,Xe),je=new IE(D,Xe,e,$e),k=new bA(D),je.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),ot=new VE(D),Be=new aA,C=new SA(D,Xe,k,Be,je,$e,ot),S=new OE(y),X=new kE(y),J=new jM(D),vt=new LE(D,J),ne=new zE(D,J,ot,vt),Z=new WE(D,ne,J,ot),He=new GE(D,je,C),ie=new NE(Be),Ae=new rA(y,S,X,Xe,je,vt,ie),se=new DA(y,Be),_e=new lA,Ze=new pA(Xe),Ee=new PE(y,S,X,k,Z,d,l),Se=new xA(y,Z,je),O=new IA(D,ot,je,k),Me=new DE(D,Xe,ot),nt=new HE(D,Xe,ot),ot.programs=Ae.programs,y.capabilities=je,y.extensions=Xe,y.properties=Be,y.renderLists=_e,y.shadowMap=Se,y.state=k,y.info=ot}te();const K=new PA(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(q,H,!1))},this.getSize=function(T){return T.set(q,H)},this.setSize=function(T,F,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,H=F,t.width=Math.floor(T*Y),t.height=Math.floor(F*Y),V===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(q*Y,H*Y).floor()},this.setDrawingBufferSize=function(T,F,V){q=T,H=F,Y=V,t.width=Math.floor(T*V),t.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,F,V,G){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,F,V,G),k.viewport(v.copy(L).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,F,V,G){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,F,V,G),k.scissor(E.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(T){k.setScissorTest(qe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,F=!0,V=!0){let G=0;if(T){let U=!1;if(M!==null){const ae=M.texture.format;U=ae===Lp||ae===Pp||ae===Cp}if(U){const ae=M.texture.type,be=ae===ks||ae===Qr||ae===Il||ae===fo||ae===Ap||ae===wp,me=Ee.getClearColor(),fe=Ee.getClearAlpha(),Ne=me.r,Ve=me.g,Le=me.b;be?(f[0]=Ne,f[1]=Ve,f[2]=Le,f[3]=fe,D.clearBufferuiv(D.COLOR,0,f)):(m[0]=Ne,m[1]=Ve,m[2]=Le,m[3]=fe,D.clearBufferiv(D.COLOR,0,m))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",de,!1),_e.dispose(),Ze.dispose(),Be.dispose(),S.dispose(),X.dispose(),Z.dispose(),vt.dispose(),O.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",bt),K.removeEventListener("sessionend",ve),ze.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=ot.autoReset,F=Se.enabled,V=Se.autoUpdate,G=Se.needsUpdate,U=Se.type;te(),ot.autoReset=T,Se.enabled=F,Se.autoUpdate=V,Se.needsUpdate=G,Se.type=U}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const F=T.target;F.removeEventListener("dispose",it),Ot(F)}function Ot(T){Gt(T),Be.remove(T)}function Gt(T){const F=Be.get(T).programs;F!==void 0&&(F.forEach(function(V){Ae.releaseProgram(V)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,G,U,ae){F===null&&(F=Qe);const be=U.isMesh&&U.matrixWorld.determinant()<0,me=Rt(T,F,V,G,U);k.setMaterial(G,be);let fe=V.index,Ne=1;if(G.wireframe===!0){if(fe=ne.getWireframeAttribute(V),fe===void 0)return;Ne=2}const Ve=V.drawRange,Le=V.attributes.position;let xt=Ve.start*Ne,gt=(Ve.start+Ve.count)*Ne;ae!==null&&(xt=Math.max(xt,ae.start*Ne),gt=Math.min(gt,(ae.start+ae.count)*Ne)),fe!==null?(xt=Math.max(xt,0),gt=Math.min(gt,fe.count)):Le!=null&&(xt=Math.max(xt,0),gt=Math.min(gt,Le.count));const It=gt-xt;if(It<0||It===1/0)return;vt.setup(U,G,me,V,fe);let yn,lt=Me;if(fe!==null&&(yn=J.get(fe),lt=nt,lt.setIndex(yn)),U.isMesh)G.wireframe===!0?(k.setLineWidth(G.wireframeLinewidth*We()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(U.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),k.setLineWidth(ke*We()),U.isLineSegments?lt.setMode(D.LINES):U.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else U.isPoints?lt.setMode(D.POINTS):U.isSprite&&lt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ke=U._multiDrawStarts,Tn=U._multiDrawCounts,Tt=U._multiDrawCount,Bi=fe?J.get(fe).bytesPerElement:1,ua=Be.get(G).currentProgram.getUniforms();for(let hi=0;hi<Tt;hi++)ua.setValue(D,"_gl_DrawID",hi),lt.render(ke[hi]/Bi,Tn[hi])}else if(U.isInstancedMesh)lt.renderInstances(xt,It,U.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tn=Math.min(V.instanceCount,ke);lt.renderInstances(xt,It,Tn)}else lt.render(xt,It)};function ft(T,F,V){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=oi,T.needsUpdate=!0,rn(T,F,V),T.side=Ki,T.needsUpdate=!0,rn(T,F,V),T.side=en):rn(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),p=Ze.get(V),p.init(F),b.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==V&&T.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let be=0;be<ae.length;be++){const me=ae[be];ft(me,V,U),G.add(me)}else ft(ae,V,U),G.add(ae)}),b.pop(),p=null,G},this.compileAsync=function(T,F,V=null){const G=this.compile(T,F,V);return new Promise(U=>{function ae(){if(G.forEach(function(be){Be.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){U(T);return}setTimeout(ae,10)}Xe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Oe=null;function Pe(T){Oe&&Oe(T)}function bt(){ze.stop()}function ve(){ze.start()}const ze=new vv;ze.setAnimationLoop(Pe),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(T){Oe=T,K.setAnimationLoop(T),T===null?ze.stop():ze.start()},K.addEventListener("sessionstart",bt),K.addEventListener("sessionend",ve),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,M),p=Ze.get(T,b.length),p.init(F),b.push(p),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(oe),ee=this.localClippingEnabled,j=ie.init(this.clippingPlanes,ee),_=_e.get(T,g.length),_.init(),g.push(_),K.enabled===!0&&K.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Ue(ae,F,-1/0,y.sortObjects)}Ue(T,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort($,re),Je=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Je&&Ee.addToRenderList(_,T),this.info.render.frame++,j===!0&&ie.beginShadows();const V=p.state.shadowsArray;Se.render(V,T,F),j===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,U=_.transmissive;if(p.setupLights(),F.isArrayCamera){const ae=F.cameras;if(U.length>0)for(let be=0,me=ae.length;be<me;be++){const fe=ae[be];sn(G,U,T,fe)}Je&&Ee.render(T);for(let be=0,me=ae.length;be<me;be++){const fe=ae[be];Ke(_,T,fe,fe.viewport)}}else U.length>0&&sn(G,U,T,F),Je&&Ee.render(T),Ke(_,T,F);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(y,T,F),vt.resetDefaultState(),R=-1,I=null,b.pop(),b.length>0?(p=b[b.length-1],j===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Ue(T,F,V,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){G&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const be=Z.update(T),me=T.material;me.visible&&_.push(T,be,me,V,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){const be=Z.update(T),me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ce.copy(be.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(me)){const fe=be.groups;for(let Ne=0,Ve=fe.length;Ne<Ve;Ne++){const Le=fe[Ne],xt=me[Le.materialIndex];xt&&xt.visible&&_.push(T,be,xt,V,Ce.z,Le)}}else me.visible&&_.push(T,be,me,V,Ce.z,null)}}const ae=T.children;for(let be=0,me=ae.length;be<me;be++)Ue(ae[be],F,V,G)}function Ke(T,F,V,G){const U=T.opaque,ae=T.transmissive,be=T.transparent;p.setupLightsView(V),j===!0&&ie.setGlobalState(y.clippingPlanes,V),G&&k.viewport(v.copy(G)),U.length>0&&st(U,F,V),ae.length>0&&st(ae,F,V),be.length>0&&st(be,F,V),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function sn(T,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ea(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Wl:ks,minFilter:Ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const ae=p.state.transmissionRenderTarget[G.id],be=G.viewport||v;ae.setSize(be.z,be.w);const me=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(z),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Je&&Ee.render(V);const fe=y.toneMapping;y.toneMapping=ur;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),j===!0&&ie.setGlobalState(y.clippingPlanes,G),st(T,V,G),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Le=0,xt=F.length;Le<xt;Le++){const gt=F[Le],It=gt.object,yn=gt.geometry,lt=gt.material,ke=gt.group;if(lt.side===en&&It.layers.test(G.layers)){const Tn=lt.side;lt.side=oi,lt.needsUpdate=!0,Wt(It,V,G,yn,lt,ke),lt.side=Tn,lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}y.setRenderTarget(me),y.setClearColor(z,W),Ne!==void 0&&(G.viewport=Ne),y.toneMapping=fe}function st(T,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let U=0,ae=T.length;U<ae;U++){const be=T[U],me=be.object,fe=be.geometry,Ne=G===null?be.material:G,Ve=be.group;me.layers.test(V.layers)&&Wt(me,F,V,fe,Ne,Ve)}}function Wt(T,F,V,G,U,ae){T.onBeforeRender(y,F,V,G,U,ae),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(y,F,V,G,T,ae),U.transparent===!0&&U.side===en&&U.forceSinglePass===!1?(U.side=oi,U.needsUpdate=!0,y.renderBufferDirect(V,F,G,U,T,ae),U.side=Ki,U.needsUpdate=!0,y.renderBufferDirect(V,F,G,U,T,ae),U.side=en):y.renderBufferDirect(V,F,G,U,T,ae),T.onAfterRender(y,F,V,G,U,ae)}function rn(T,F,V){F.isScene!==!0&&(F=Qe);const G=Be.get(T),U=p.state.lights,ae=p.state.shadowsArray,be=U.state.version,me=Ae.getParameters(T,U.state,ae,F,V),fe=Ae.getProgramCacheKey(me);let Ne=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?X:S).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",it),Ne=new Map,G.programs=Ne);let Ve=Ne.get(fe);if(Ve!==void 0){if(G.currentProgram===Ve&&G.lightsStateVersion===be)return Ut(T,me),Ve}else me.uniforms=Ae.getUniforms(T),T.onBeforeCompile(me,y),Ve=Ae.acquireProgram(me,fe),Ne.set(fe,Ve),G.uniforms=me.uniforms;const Le=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ie.uniform),Ut(T,me),G.needsLights=Ht(T),G.lightsStateVersion=be,G.needsLights&&(Le.ambientLightColor.value=U.state.ambient,Le.lightProbe.value=U.state.probe,Le.directionalLights.value=U.state.directional,Le.directionalLightShadows.value=U.state.directionalShadow,Le.spotLights.value=U.state.spot,Le.spotLightShadows.value=U.state.spotShadow,Le.rectAreaLights.value=U.state.rectArea,Le.ltc_1.value=U.state.rectAreaLTC1,Le.ltc_2.value=U.state.rectAreaLTC2,Le.pointLights.value=U.state.point,Le.pointLightShadows.value=U.state.pointShadow,Le.hemisphereLights.value=U.state.hemi,Le.directionalShadowMap.value=U.state.directionalShadowMap,Le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Le.spotShadowMap.value=U.state.spotShadowMap,Le.spotLightMatrix.value=U.state.spotLightMatrix,Le.spotLightMap.value=U.state.spotLightMap,Le.pointShadowMap.value=U.state.pointShadowMap,Le.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ve,G.uniformsList=null,Ve}function zt(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=hu.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ut(T,F){const V=Be.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Rt(T,F,V,G,U){F.isScene!==!0&&(F=Qe),C.resetTextureUnits();const ae=F.fog,be=G.isMeshStandardMaterial?F.environment:null,me=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Rn,fe=(G.isMeshStandardMaterial?X:S).get(G.envMap||be),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let It=ur;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(It=y.toneMapping);const yn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=yn!==void 0?yn.length:0,ke=Be.get(G),Tn=p.state.lights;if(j===!0&&(ee===!0||T!==I)){const wi=T===I&&G.id===R;ie.setState(G,T,wi)}let Tt=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Tn.state.version||ke.outputColorSpace!==me||U.isBatchedMesh&&ke.batching===!1||!U.isBatchedMesh&&ke.batching===!0||U.isBatchedMesh&&ke.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ke.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ke.instancing===!1||!U.isInstancedMesh&&ke.instancing===!0||U.isSkinnedMesh&&ke.skinning===!1||!U.isSkinnedMesh&&ke.skinning===!0||U.isInstancedMesh&&ke.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ke.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ke.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ke.instancingMorph===!1&&U.morphTexture!==null||ke.envMap!==fe||G.fog===!0&&ke.fog!==ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ie.numPlanes||ke.numIntersection!==ie.numIntersection)||ke.vertexAlphas!==Ne||ke.vertexTangents!==Ve||ke.morphTargets!==Le||ke.morphNormals!==xt||ke.morphColors!==gt||ke.toneMapping!==It||ke.morphTargetsCount!==lt)&&(Tt=!0):(Tt=!0,ke.__version=G.version);let Bi=ke.currentProgram;Tt===!0&&(Bi=rn(G,F,U));let ua=!1,hi=!1,th=!1;const an=Bi.getUniforms(),Bs=ke.uniforms;if(k.useProgram(Bi.program)&&(ua=!0,hi=!0,th=!0),G.id!==R&&(R=G.id,hi=!0),ua||I!==T){je.reverseDepthBuffer?(ge.copy(T.projectionMatrix),SM(ge),EM(ge),an.setValue(D,"projectionMatrix",ge)):an.setValue(D,"projectionMatrix",T.projectionMatrix),an.setValue(D,"viewMatrix",T.matrixWorldInverse);const wi=an.map.cameraPosition;wi!==void 0&&wi.setValue(D,Ie.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&an.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&an.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,hi=!0,th=!0)}if(U.isSkinnedMesh){an.setOptional(D,U,"bindMatrix"),an.setOptional(D,U,"bindMatrixInverse");const wi=U.skeleton;wi&&(wi.boneTexture===null&&wi.computeBoneTexture(),an.setValue(D,"boneTexture",wi.boneTexture,C))}U.isBatchedMesh&&(an.setOptional(D,U,"batchingTexture"),an.setValue(D,"batchingTexture",U._matricesTexture,C),an.setOptional(D,U,"batchingIdTexture"),an.setValue(D,"batchingIdTexture",U._indirectTexture,C),an.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&an.setValue(D,"batchingColorTexture",U._colorsTexture,C));const nh=V.morphAttributes;if((nh.position!==void 0||nh.normal!==void 0||nh.color!==void 0)&&He.update(U,V,Bi),(hi||ke.receiveShadow!==U.receiveShadow)&&(ke.receiveShadow=U.receiveShadow,an.setValue(D,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Bs.envMap.value=fe,Bs.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Bs.envMapIntensity.value=F.environmentIntensity),hi&&(an.setValue(D,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&ui(Bs,th),ae&&G.fog===!0&&se.refreshFogUniforms(Bs,ae),se.refreshMaterialUniforms(Bs,G,Y,H,p.state.transmissionRenderTarget[T.id]),hu.upload(D,zt(ke),Bs,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hu.upload(D,zt(ke),Bs,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&an.setValue(D,"center",U.center),an.setValue(D,"modelViewMatrix",U.modelViewMatrix),an.setValue(D,"normalMatrix",U.normalMatrix),an.setValue(D,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wi=G.uniformsGroups;for(let ih=0,fx=wi.length;ih<fx;ih++){const Kp=wi[ih];O.update(Kp,Bi),O.bind(Kp,Bi)}}return Bi}function ui(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ht(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,F,V){Be.get(T.texture).__webglTexture=F,Be.get(T.depthTexture).__webglTexture=V;const G=Be.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const V=Be.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){M=T,w=F,A=V;let G=!0,U=null,ae=!1,be=!1;if(T){const fe=Be.get(T);if(fe.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(fe.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(fe.__hasExternalTextures)C.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&Be.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(be=!0);const Ve=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?U=Ve[F][V]:U=Ve[F],ae=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?U=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?U=Ve[V]:U=Ve,v.copy(T.viewport),E.copy(T.scissor),N=T.scissorTest}else v.copy(L).multiplyScalar(Y).floor(),E.copy(le).multiplyScalar(Y).floor(),N=qe;if(k.bindFramebuffer(D.FRAMEBUFFER,U)&&G&&k.drawBuffers(T,U),k.viewport(v),k.scissor(E),k.setScissorTest(N),ae){const fe=Be.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,V)}else if(be){const fe=Be.get(T.texture),Ne=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.__webglTexture,V||0,Ne)}R=-1},this.readRenderTargetPixels=function(T,F,V,G,U,ae,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(me=me[be]),me){k.bindFramebuffer(D.FRAMEBUFFER,me);try{const fe=T.texture,Ne=fe.format,Ve=fe.type;if(!je.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&V>=0&&V<=T.height-U&&D.readPixels(F,V,G,U,$e.convert(Ne),$e.convert(Ve),ae)}finally{const fe=M!==null?Be.get(M).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(T,F,V,G,U,ae,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(me=me[be]),me){const fe=T.texture,Ne=fe.format,Ve=fe.type;if(!je.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&V>=0&&V<=T.height-U){k.bindFramebuffer(D.FRAMEBUFFER,me);const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(F,V,G,U,$e.convert(Ne),$e.convert(Ve),0);const xt=M!==null?Be.get(M).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,xt);const gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await MM(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Le),D.deleteSync(gt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,V=0){T.isTexture!==!0&&(uu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(T.image.width*G),ae=Math.floor(T.image.height*G),be=F!==null?F.x:0,me=F!==null?F.y:0;C.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,be,me,U,ae),k.unbindTexture()},this.copyTextureToTexture=function(T,F,V=null,G=null,U=0){T.isTexture!==!0&&(uu("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],U=arguments[3]||0,V=null);let ae,be,me,fe,Ne,Ve;V!==null?(ae=V.max.x-V.min.x,be=V.max.y-V.min.y,me=V.min.x,fe=V.min.y):(ae=T.image.width,be=T.image.height,me=0,fe=0),G!==null?(Ne=G.x,Ve=G.y):(Ne=0,Ve=0);const Le=$e.convert(F.format),xt=$e.convert(F.type);C.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const gt=D.getParameter(D.UNPACK_ROW_LENGTH),It=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=D.getParameter(D.UNPACK_SKIP_PIXELS),lt=D.getParameter(D.UNPACK_SKIP_ROWS),ke=D.getParameter(D.UNPACK_SKIP_IMAGES),Tn=T.isCompressedTexture?T.mipmaps[U]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Tn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,me),D.pixelStorei(D.UNPACK_SKIP_ROWS,fe),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ne,Ve,ae,be,Le,xt,Tn.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ne,Ve,Tn.width,Tn.height,Le,Tn.data):D.texSubImage2D(D.TEXTURE_2D,U,Ne,Ve,ae,be,Le,xt,Tn),D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke),U===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V=null,G=null,U=0){T.isTexture!==!0&&(uu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],U=arguments[4]||0);let ae,be,me,fe,Ne,Ve,Le,xt,gt;const It=T.isCompressedTexture?T.mipmaps[U]:T.image;V!==null?(ae=V.max.x-V.min.x,be=V.max.y-V.min.y,me=V.max.z-V.min.z,fe=V.min.x,Ne=V.min.y,Ve=V.min.z):(ae=It.width,be=It.height,me=It.depth,fe=0,Ne=0,Ve=0),G!==null?(Le=G.x,xt=G.y,gt=G.z):(Le=0,xt=0,gt=0);const yn=$e.convert(F.format),lt=$e.convert(F.type);let ke;if(F.isData3DTexture)C.setTexture3D(F,0),ke=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),ke=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Tn=D.getParameter(D.UNPACK_ROW_LENGTH),Tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Bi=D.getParameter(D.UNPACK_SKIP_PIXELS),ua=D.getParameter(D.UNPACK_SKIP_ROWS),hi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(ke,U,Le,xt,gt,ae,be,me,yn,lt,It.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ke,U,Le,xt,gt,ae,be,me,yn,It.data):D.texSubImage3D(ke,U,Le,xt,gt,ae,be,me,yn,lt,It),D.pixelStorei(D.UNPACK_ROW_LENGTH,Tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ua),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hi),U===0&&F.generateMipmaps&&D.generateMipmap(ke),k.unbindTexture()},this.initRenderTarget=function(T){Be.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),k.unbindTexture()},this.resetState=function(){w=0,A=0,M=null,k.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dp?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===$u?"display-p3":"srgb"}}class Tv extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class NA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Of,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new P;class Fp{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const O0=new P,U0=new Et,F0=new Et,OA=new P,k0=new et,Cc=new P,jh=new fs,B0=new et,Kh=new Xl;class UA extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hm,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cc),this.boundingBox.expandByPoint(Cc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cc),this.boundingSphere.expandByPoint(Cc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jh.copy(this.boundingSphere),jh.applyMatrix4(i),e.ray.intersectsSphere(jh)!==!1&&(B0.copy(i).invert(),Kh.copy(e.ray).applyMatrix4(B0),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$b?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;U0.fromBufferAttribute(i.attributes.skinIndex,e),F0.fromBufferAttribute(i.attributes.skinWeight,e),O0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=F0.getComponent(r);if(a!==0){const o=U0.getComponent(r);k0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(OA.copy(O0).applyMatrix4(k0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Av extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wv extends _n{constructor(e=null,t=1,n=1,i,r,a,o,l,c=kn,u=kn,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const z0=new et,FA=new et;class kp{constructor(e=[],t=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:FA;z0.multiplyMatrices(o,t[r]),z0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new kp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wv(t,e,e,Ui,ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Av),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ff extends Zn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ca=new et,H0=new et,Pc=[],V0=new Ai,kA=new et,Oo=new qn,Uo=new fs;class BA extends qn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ff(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ca),V0.copy(e.boundingBox).applyMatrix4(Ca),this.boundingBox.union(V0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ca),Uo.copy(e.boundingSphere).applyMatrix4(Ca),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),e.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ca),H0.multiplyMatrices(n,Ca),Oo.matrixWorld=H0,Oo.raycast(e,Pc);for(let a=0,o=Pc.length;a<o;a++){const l=Pc[a];l.instanceId=r,l.object=this,t.push(l)}Pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ff(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wv(new Float32Array(i*this.count),i,this.count,Rp,ji));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Rv extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nu=new P,Ou=new P,G0=new et,Fo=new Xl,Lc=new fs,Zh=new P,W0=new P;class Bp extends $t{constructor(e=new Cn,t=new Rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nu.fromBufferAttribute(t,i-1),Ou.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nu.distanceTo(Ou);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(i),Lc.radius+=r,e.ray.intersectsSphere(Lc)===!1)return;G0.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(G0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){const g=u.getX(_),b=u.getX(_+1),y=Dc(this,e,Fo,l,g,b);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(f),g=Dc(this,e,Fo,l,_,p);g&&t.push(g)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){const g=Dc(this,e,Fo,l,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=Dc(this,e,Fo,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dc(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Nu.fromBufferAttribute(a,i),Ou.fromBufferAttribute(a,r),t.distanceSqToSegment(Nu,Ou,Zh,W0)>n)return;Zh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zh);if(!(l<e.near||l>e.far))return{distance:l,point:W0.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const X0=new P,$0=new P;class zA extends Bp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)X0.fromBufferAttribute(t,i),$0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+X0.distanceTo($0);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HA extends Bp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cv extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y0=new et,kf=new Xl,Ic=new fs,Nc=new P;class VA extends $t{constructor(e=new Cn,t=new Cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(i),Ic.radius+=r,e.ray.intersectsSphere(Ic)===!1)return;Y0.copy(i).invert(),kf.copy(e.ray).applyMatrix4(Y0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);Nc.fromBufferAttribute(h,p),q0(Nc,p,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Nc.fromBufferAttribute(h,m),q0(Nc,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function q0(s,e,t,n,i,r,a){const o=kf.distanceSqToPoint(s);if(o<t){const l=new P;kf.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class GA extends _n{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ue:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],a=[],o=new P,l=new et;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(fn(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(fn(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zp extends ps{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WA extends zp{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hp(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Oc=new P,Jh=new Hp,Qh=new Hp,ed=new Hp;class XA extends ps{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Oc.subVectors(i[0],i[1]).add(i[0]),c=Oc);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Oc.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Jh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,p),Qh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,p),ed.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Qh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ed.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Jh.calc(l),Qh.calc(l),ed.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function j0(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function $A(s,e){const t=1-s;return t*t*e}function YA(s,e){return 2*(1-s)*s*e}function qA(s,e){return s*s*e}function _l(s,e,t,n){return $A(s,e)+YA(s,t)+qA(s,n)}function jA(s,e){const t=1-s;return t*t*t*e}function KA(s,e){const t=1-s;return 3*t*t*s*e}function ZA(s,e){return 3*(1-s)*s*s*e}function JA(s,e){return s*s*s*e}function vl(s,e,t,n,i){return jA(s,e)+KA(s,t)+ZA(s,n)+JA(s,i)}class Pv extends ps{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vl(e,i.x,r.x,a.x,o.x),vl(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QA extends ps{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vl(e,i.x,r.x,a.x,o.x),vl(e,i.y,r.y,a.y,o.y),vl(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lv extends ps{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ew extends ps{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dv extends ps{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(_l(e,i.x,r.x,a.x),_l(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tw extends ps{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(_l(e,i.x,r.x,a.x),_l(e,i.y,r.y,a.y),_l(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iv extends ps{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(j0(o,l.x,c.x,u.x,h.x),j0(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var K0=Object.freeze({__proto__:null,ArcCurve:WA,CatmullRomCurve3:XA,CubicBezierCurve:Pv,CubicBezierCurve3:QA,EllipseCurve:zp,LineCurve:Lv,LineCurve3:ew,QuadraticBezierCurve:Dv,QuadraticBezierCurve3:tw,SplineCurve:Iv});class nw extends ps{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new K0[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new K0[i.type]().fromJSON(i))}return this}}class Bf extends nw{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lv(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Dv(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Pv(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Iv(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new zp(e,t,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vp extends Cn{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=fn(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new ue,f=new P,m=new P,_=new P;let p=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:p=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let b=0;b<=t;b++){const y=n+b*u*i,x=Math.sin(y),w=Math.cos(y);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*x,h.y=e[A].y,h.z=e[A].x*w,a.push(h.x,h.y,h.z),d.x=b/t,d.y=A/(e.length-1),o.push(d.x,d.y);const M=l[3*A+0]*x,R=l[3*A+1],I=l[3*A+0]*w;c.push(M,R,I)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){const x=y+b*e.length,w=x,A=x+e.length,M=x+e.length+1,R=x+1;r.push(w,A,R),r.push(M,R,A)}this.setIndex(r),this.setAttribute("position",new wt(a,3)),this.setAttribute("uv",new wt(o,2)),this.setAttribute("normal",new wt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.points,e.segments,e.phiStart,e.phiLength)}}class ds extends Vp{constructor(e=1,t=1,n=4,i=8){const r=new Bf;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ds(e.radius,e.length,e.capSegments,e.radialSegments)}}class ta extends Cn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,u=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends Cn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function b(){const x=new P,w=new P;let A=0;const M=(t-e)/n;for(let R=0;R<=r;R++){const I=[],v=R/r,E=v*(t-e)+e;for(let N=0;N<=i;N++){const z=N/i,W=z*l+o,q=Math.sin(W),H=Math.cos(W);w.x=E*q,w.y=-v*n+p,w.z=E*H,h.push(w.x,w.y,w.z),x.set(q,M,H).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-v),I.push(m++)}_.push(I)}for(let R=0;R<i;R++)for(let I=0;I<r;I++){const v=_[I][R],E=_[I+1][R],N=_[I+1][R+1],z=_[I][R+1];e>0&&(u.push(v,E,z),A+=3),t>0&&(u.push(E,N,z),A+=3)}c.addGroup(g,A,0),g+=A}function y(x){const w=m,A=new ue,M=new P;let R=0;const I=x===!0?e:t,v=x===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),m++;const E=m;for(let N=0;N<=i;N++){const W=N/i*l+o,q=Math.cos(W),H=Math.sin(W);M.x=I*H,M.y=p*v,M.z=I*q,h.push(M.x,M.y,M.z),d.push(0,v,0),A.x=q*.5+.5,A.y=H*.5*v+.5,f.push(A.x,A.y),m++}for(let N=0;N<i;N++){const z=w+N,W=E+N;x===!0?u.push(W,W+1,z):u.push(W+1,W,z),R+=3}c.addGroup(g,R,x===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn extends mt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ju extends Cn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new P,x=new P,w=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],x),f(t[A+2],w),l(y,x,w,b)}function l(b,y,x,w){const A=w+1,M=[];for(let R=0;R<=A;R++){M[R]=[];const I=b.clone().lerp(x,R/A),v=y.clone().lerp(x,R/A),E=A-R;for(let N=0;N<=E;N++)N===0&&R===A?M[R][N]=I:M[R][N]=I.clone().lerp(v,N/E)}for(let R=0;R<A;R++)for(let I=0;I<2*(A-R)-1;I++){const v=Math.floor(I/2);I%2===0?(d(M[R][v+1]),d(M[R+1][v]),d(M[R][v])):(d(M[R][v+1]),d(M[R+1][v+1]),d(M[R+1][v]))}}function c(b){const y=new P;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(b),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const b=new P;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const x=p(b)/2/Math.PI+.5,w=g(b)/Math.PI+.5;a.push(x,1-w)}m(),h()}function h(){for(let b=0;b<a.length;b+=6){const y=a[b+0],x=a[b+2],w=a[b+4],A=Math.max(y,x,w),M=Math.min(y,x,w);A>.9&&M<.1&&(y<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,y){const x=b*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function m(){const b=new P,y=new P,x=new P,w=new P,A=new ue,M=new ue,R=new ue;for(let I=0,v=0;I<r.length;I+=9,v+=6){b.set(r[I+0],r[I+1],r[I+2]),y.set(r[I+3],r[I+4],r[I+5]),x.set(r[I+6],r[I+7],r[I+8]),A.set(a[v+0],a[v+1]),M.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),w.copy(b).add(y).add(x).divideScalar(3);const E=p(w);_(A,v+0,b,E),_(M,v+2,y,E),_(R,v+4,x,E)}}function _(b,y,x,w){w<0&&b.x===1&&(a[y]=b.x-1),x.x===0&&x.z===0&&(a[y]=w/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.vertices,e.indices,e.radius,e.details)}}class Nv extends Bf{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bf().fromJSON(i))}return this}}const iw={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ov(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(n&&(r=lw(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let m=t;m<i;m+=t)h=s[m],d=s[m+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Fl(r,a,t,o,l,f,0),a}};function Ov(s,e,t,n,i){let r,a;if(i===xw(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Z0(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Z0(r,s[r],s[r+1],a);return a&&Ku(a,a.next)&&(Bl(a),a=a.next),a}function na(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ku(t,t.next)||Jt(t.prev,t,t.next)===0)){if(Bl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fl(s,e,t,n,i,r,a){if(!s)return;!a&&r&&fw(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?rw(s,n,i,r):sw(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Bl(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=aw(na(s),e,t),Fl(s,e,t,n,i,r,2)):a===2&&ow(s,e,t,n,i,r):Fl(na(s),e,t,n,i,r,1);break}}}function sw(s){const e=s.prev,t=s,n=s.next;if(Jt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&za(i,o,r,l,a,c,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function rw(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Jt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,u=i.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,_=o>l?o>c?o:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,g=zf(f,m,e,t,n),b=zf(_,p,e,t,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=g&&x&&x.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==i&&y!==a&&za(o,u,l,h,c,d,y.x,y.y)&&Jt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==i&&x!==a&&za(o,u,l,h,c,d,x.x,x.y)&&Jt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==i&&y!==a&&za(o,u,l,h,c,d,y.x,y.y)&&Jt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==i&&x!==a&&za(o,u,l,h,c,d,x.x,x.y)&&Jt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function aw(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ku(i,r)&&Uv(i,n,n.next,r)&&kl(i,r)&&kl(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Bl(n),Bl(n.next),n=s=r),n=n.next}while(n!==s);return na(n)}function ow(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gw(a,o)){let l=Fv(a,o);a=na(a,a.next),l=na(l,l.next),Fl(a,e,t,n,i,r,0),Fl(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function lw(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Ov(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(mw(c));for(i.sort(cw),r=0;r<i.length;r++)t=uw(i[r],t);return t}function cw(s,e){return s.x-e.x}function uw(s,e){const t=hw(s,e);if(!t)return e;const n=Fv(t,s);return na(n,n.next),na(t,t.next)}function hw(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&za(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),kl(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&dw(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function dw(s,e){return Jt(s.prev,s,e.prev)<0&&Jt(e.next,s,s.next)<0}function fw(s,e,t,n){let i=s;do i.z===0&&(i.z=zf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,pw(i)}function pw(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function zf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function mw(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function za(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function gw(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!_w(s,e)&&(kl(s,e)&&kl(e,s)&&vw(s,e)&&(Jt(s.prev,s,e.prev)||Jt(s,e.prev,e))||Ku(s,e)&&Jt(s.prev,s,s.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ku(s,e){return s.x===e.x&&s.y===e.y}function Uv(s,e,t,n){const i=Fc(Jt(s,e,t)),r=Fc(Jt(s,e,n)),a=Fc(Jt(t,n,s)),o=Fc(Jt(t,n,e));return!!(i!==r&&a!==o||i===0&&Uc(s,t,e)||r===0&&Uc(s,n,e)||a===0&&Uc(t,s,n)||o===0&&Uc(t,e,n))}function Uc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fc(s){return s>0?1:s<0?-1:0}function _w(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Uv(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function kl(s,e){return Jt(s.prev,s,s.next)<0?Jt(s,e,s.next)>=0&&Jt(s,s.prev,e)>=0:Jt(s,e,s.prev)<0||Jt(s,s.next,e)<0}function vw(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Fv(s,e){const t=new Hf(s.i,s.x,s.y),n=new Hf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Z0(s,e,t,n){const i=new Hf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xw(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class xl{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return xl.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];J0(e),Q0(n,e);let a=e.length;t.forEach(J0);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Q0(n,t[l]);const o=iw.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function J0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Q0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class gr extends ju{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gr(e.radius,e.detail)}}class Gp extends ju{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gp(e.radius,e.detail)}}class ca extends Cn{constructor(e=new Nv([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;xl.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const b=m[p];xl.isClockWise(b)===!0&&(m[p]=b.reverse())}const _=xl.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const b=m[p];f=f.concat(b)}for(let p=0,g=f.length;p<g;p++){const b=f[p];i.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let p=0,g=_.length;p<g;p++){const b=_[p],y=b[0]+h,x=b[1]+h,w=b[2]+h;n.push(y,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return yw(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new ca(n,e.curveSegments)}}function yw(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Fe extends Cn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const b=[],y=g/n;let x=0;g===0&&a===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+y*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(A+x,1-y),b.push(c++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const y=u[g][b+1],x=u[g][b],w=u[g+1][b],A=u[g+1][b+1];(g!==0||a>0)&&f.push(y,x,A),(g!==n-1||l<Math.PI)&&f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bt extends Cn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,g=(i+1)*(f-1)+m,b=(i+1)*f+m;a.push(_,p,b),a.push(p,g,b)}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _o extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ms extends _o{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function kc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bw(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mw(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function eg(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function kv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class $l{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sw extends $l{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vm,endingEnd:Vm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gm:r=e,o=2*t-n;break;case Wm:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gm:a=e,l=2*n-t;break;case Wm:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*p+(1.5+f)*_+.5*m,x=f*p-f*_;for(let w=0;w!==o;++w)r[w]=g*a[u+w]+b*a[c+w]+y*a[l+w]+x*a[h+w];return r}}class Ew extends $l{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Tw extends $l{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class gs{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kc(t,this.TimeBufferType),this.values=kc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kc(e.times,Array),values:kc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ew(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nl:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case yh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nl;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&bw(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yh,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gs.prototype.TimeBufferType=Float32Array;gs.prototype.ValueBufferType=Float32Array;gs.prototype.DefaultInterpolation=Ol;class Eo extends gs{constructor(e,t,n){super(e,t,n)}}Eo.prototype.ValueTypeName="bool";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=Nl;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Bv extends gs{}Bv.prototype.ValueTypeName="color";class vo extends gs{}vo.prototype.ValueTypeName="number";class Aw extends $l{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)us.slerpFlat(r,0,a,c-o,a,c,l);return r}}class xo extends gs{InterpolantFactoryMethodLinear(e){return new Aw(this.times,this.values,this.getValueSize(),e)}}xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends gs{constructor(e,t,n){super(e,t,n)}}To.prototype.ValueTypeName="string";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=Nl;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends gs{}yo.prototype.ValueTypeName="vector";class ww{constructor(e="",t=-1,n=[],i=Yb){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ki(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cw(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(gs.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Mw(l);l=eg(l,1,u),c=eg(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const p=[],g=[];kv(f,p,g,m),p.length!==0&&_.push(new h(d,p,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let b=0;b!==d[m].morphTargets.length;++b){const y=d[m];p.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new vo(".morphTargetInfluence["+_+"]",p,g))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(yo,f+".position",d,"pos",i),n(xo,f+".quaternion",d,"rot",i),n(yo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rw(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return Bv;case"quaternion":return xo;case"bool":case"boolean":return Eo;case"string":return To}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cw(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rw(s.type);if(s.times===void 0){const t=[],n=[];kv(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const rr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pw{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Lw=new Pw;class Ao{constructor(e){this.manager=e!==void 0?e:Lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms={};class Dw extends Error{constructor(e,t){super(e),this.response=t}}class zv extends Ao{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ms[e]!==void 0){Ms[e].push({onLoad:t,onProgress:n,onError:i});return}Ms[e]=[],Ms[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ms[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){b();function b(){h.read().then(({done:y,value:x})=>{if(y)g.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,M=u.length;A<M;A++){const R=u[A];R.onProgress&&R.onProgress(w)}g.enqueue(x),b()}},y=>{g.error(y)})}}});return new Response(p)}else throw new Dw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{rr.add(e,c);const u=Ms[e];delete Ms[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ms[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ms[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Iw extends Ao{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=rr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ul("img");function l(){u(),rr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Nw extends Ao{constructor(e){super(e)}load(e,t,n,i){const r=new _n,a=new Iw(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Zu extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hv extends Zu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const td=new et,tg=new P,ng=new P;class Wp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Np,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tg.setFromMatrixPosition(e.matrixWorld),t.position.copy(tg),ng.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ng),t.updateMatrixWorld(),td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ow extends Wp{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=mo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Uw extends Zu{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ow}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ig=new et,ko=new P,nd=new P;class Fw extends Wp{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(ko),nd.copy(n.position),nd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nd),n.updateMatrixWorld(),i.makeTranslation(-ko.x,-ko.y,-ko.z),ig.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ig)}}class kw extends Zu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bw extends Wp{constructor(){super(new Op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends Zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Bw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yl{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zw extends Ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=rr.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rr.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),rr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});rr.add(e,l),r.manager.itemStart(e)}}class Hw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sg(){return performance.now()}const Xp="\\[\\]\\.:\\/",Vw=new RegExp("["+Xp+"]","g"),$p="[^"+Xp+"]",Gw="[^"+Xp.replace("\\.","")+"]",Ww=/((?:WC+[\/:])*)/.source.replace("WC",$p),Xw=/(WCOD+)?/.source.replace("WCOD",Gw),$w=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$p),Yw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$p),qw=new RegExp("^"+Ww+Xw+$w+Yw+"$"),jw=["material","materials","bones","map"];class Kw{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vw,"")}static parseTrackName(e){const t=qw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);jw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=Kw;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rg{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zw extends la{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);const ag={type:"change"},Yp={type:"start"},Vv={type:"end"},Bc=new Xl,og=new js,Jw=Math.cos(70*Yu.DEG2RAD),pn=new P,Jn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6;class Qw extends Zw{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Za.ROTATE,MIDDLE:Za.DOLLY,RIGHT:Za.PAN},this.touches={ONE:ka.ROTATE,TWO:ka.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new us,this._lastTargetPosition=new P,this._quat=new us().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rg,this._sphericalDelta=new rg,this._scale=1,this._panOffset=new P,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new P,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tR.bind(this),this._onPointerDown=eR.bind(this),this._onPointerUp=nR.bind(this),this._onContextMenu=cR.bind(this),this._onMouseWheel=rR.bind(this),this._onKeyDown=aR.bind(this),this._onTouchStart=oR.bind(this),this._onTouchMove=lR.bind(this),this._onMouseDown=iR.bind(this),this._onMouseMove=sR.bind(this),this._interceptControlDown=uR.bind(this),this._interceptControlUp=hR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ag),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Jn:n>Math.PI&&(n-=Jn),i<-Math.PI?i+=Jn:i>Math.PI&&(i-=Jn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Bc.origin.copy(this.object.position),Bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bc.direction))<Jw?this.object.lookAt(this.target):(og.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bc.intersectPlane(og,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(ag),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;pn.copy(i).sub(this.target);let r=pn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function tR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function nR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vv),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iR(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Za.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case Za.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case Za.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Yp)}function sR(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rR(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(Yp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Vv))}function aR(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function oR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ka.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case ka.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case ka.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case ka.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Yp)}function lR(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function cR(s){this.enabled!==!1&&s.preventDefault()}function uR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lg={standard:{torsoR:.27,torsoH:.26,legLen:.3,armLen:.3,headR:.5},round:{torsoR:.33,torsoH:.22,legLen:.26,armLen:.28,headR:.5},tall:{torsoR:.25,torsoH:.38,legLen:.42,armLen:.37,headR:.48},mini:{torsoR:.24,torsoH:.18,legLen:.2,armLen:.24,headR:.53}};function Vf(s){const e=lg[s]||lg.standard,t=.09,n=t+e.legLen,i=n-e.torsoR*.35,r=i+e.torsoR+e.torsoH/2,a=r+e.torsoH/2+e.torsoR,o=r+e.torsoH/2+e.torsoR*.35,l=[1,.9,.93],c=a+e.headR*l[1]*.78,u=.062,h=.42,d=[1,-1].map(f=>{const m=new P(f*e.torsoR*.92,o,0),_=new P(f*Math.sin(h),-Math.cos(h),0),p=m.clone().addScaledVector(_,e.armLen+u*.9);return{side:f,shoulder:m,dir:_,hand:p,angle:f*h}});return{...e,type:s,shoeH:t,hipY:n,torsoBottom:i,torsoY:r,torsoTop:a,shoulderY:o,headY:c,headScale:l,headTop:c+e.headR*l[1],armR:u,arms:d,legX:e.torsoR*.42,legR:Math.max(.07,e.torsoR*.3),chestZ:e.torsoR*.88,earX:e.headR*l[0]*.97,earY:-.03}}const Uu={skin:"skin",hair:"hairColor",eye:"eyeColor",mouth:"mouthColor",shirt:"shirtColor",pants:"pantsColor",shoes:"shoesColor"},dR=Object.fromEntries(Object.entries(Uu).map(([s,e])=>[e,s]));function Gv(s,e=1){const t=new Ye(s);return e<1?t.multiplyScalar(e):e>1&&t.lerp(new Ye("#ffffff"),Math.min(1,e-1)),t}function Wv(s){return{role(e,{shade:t=1,rough:n=.78,map:i=null,side:r=Ki}={}){const a=new _o({color:Gv(s[Uu[e]]||"#ffffff",t),roughness:n,metalness:0,map:i,side:r});return a.userData.role=e,a.userData.shade=t,a},fixed(e,{rough:t=.8,metal:n=0,side:i=Ki,opacity:r=1,flat:a=!1}={}){return new _o({color:new Ye(e),roughness:t,metalness:n,side:i,transparent:r<1,opacity:r,flatShading:a})}}}function cg(s,e){if(e===qb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Nf||e===rv){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Nf)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Xv extends Ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _R(t)}),this.register(function(t){return new vR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new yR(t)}),this.register(function(t){return new bR(t)}),this.register(function(t){return new MR(t)}),this.register(function(t){return new SR(t)}),this.register(function(t){return new gR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new pR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new LR(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=yl.extractUrlBase(e);a=yl.resolveURL(c,this.path)}else a=yl.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new zv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$v){try{a[pt.KHR_BINARY_GLTF]=new DR(e)}catch(h){i&&i(h);return}r=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:a[h]=new mR;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[h]=new IR(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[h]=new NR;break;case pt.KHR_MESH_QUANTIZATION:a[h]=new OR;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function fR(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pR{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kw(u),c.distance=h;break;case"spot":c=new Uw(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ws(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class mR{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return sr}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nn))}return Promise.all(i)}}class gR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _R{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(r)}}class vR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class xR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class yR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class bR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class MR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(o[0],o[1],o[2],Rn),Promise.all(r)}}class SR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ER{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(o[0],o[1],o[2],Rn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nn)),Promise.all(r)}}class TR{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class AR{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ms}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class wR{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class RR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CR{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PR{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class LR{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Pi.TRIANGLES&&c.mode!==Pi.TRIANGLE_STRIP&&c.mode!==Pi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const m of h){const _=new et,p=new P,g=new us,b=new P(1,1,1),y=new BA(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(p,g,b));for(const x in l)if(x==="_COLOR_0"){const w=l[x];y.instanceColor=new Ff(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);$t.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const $v="glTF",Bo=12,ug={JSON:1313821514,BIN:5130562};class DR{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$v)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bo,r=new DataView(e,Bo);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===ug.JSON){const c=new Uint8Array(e,Bo+a,o);this.content=n.decode(c)}else if(l===ug.BIN){const c=Bo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Gf[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Gf[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=to[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}h(f)},o,c,Rn,d)})})}}class NR{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OR{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Yv extends $l{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,_=m-c,p=-2*f+3*d,g=f-d,b=1-p,y=g-d+h;for(let x=0;x!==o;x++){const w=a[_+x+o],A=a[_+x+l]*u,M=a[m+x+o],R=a[m+x]*u;r[x]=b*w+y*A+p*M+g*R}return r}}const UR=new us;class FR extends Yv{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return UR.fromArray(r).normalize().toArray(r),r}}const Pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hg={9728:kn,9729:yi,9984:j_,9985:su,9986:tl,9987:Ds},dg={33071:ir,33648:Cu,10497:Jr},sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kR={CUBICSPLINE:void 0,LINEAR:Ol,STEP:Nl},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BR(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _o({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),s.DefaultMaterial}function Ar(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ws(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zR(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function HR(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VR(s){let e;const t=s.extensions&&s.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ad(t.attributes):e=s.indices+":"+ad(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ad(s.targets[n]);return e}function ad(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Wf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GR(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const WR=new et;class XR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Nw(this.options.manager):this.textureLoader=new zw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ar(r,o,i),ws(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(yl.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=sd[i.type],o=to[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Zn(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=sd[i.type],c=to[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==h){const g=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let y=t.cache.get(b);y||(_=new c(o,g*f,i.count*f/u),y=new NA(_,f/u),t.cache.add(b,y)),p=new Fp(y,l,d%f/u,m)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),p=new Zn(_,l,m);if(i.sparse!==void 0){const g=sd.SCALAR,b=to[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new b(a[1],y,i.sparse.count*g),A=new c(a[2],x,i.sparse.count*l);o!==null&&(p=new Zn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let M=0,R=w.length;M<R;M++){const I=w[M];if(p.setX(I,A[M*l]),l>=2&&p.setY(I,A[M*l+1]),l>=3&&p.setZ(I,A[M*l+2]),l>=4&&p.setW(I,A[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=hg[d.magFilter]||yi,u.minFilter=hg[d.minFilter]||Ds,u.wrapS=dg[d.wrapS]||Jr,u.wrapT=dg[d.wrapT]||Jr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const p=new _n(_);p.needsUpdate=!0,d(p)}),t.load(yl.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ws(h,a),h.userData.mimeType=a.mimeType||GR(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Cv,ls.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rv,ls.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _o}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const h=i[pt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ye(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Rn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Nn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=en);const u=r.alphaMode||rd.OPAQUE;if(u===rd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===rd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==sr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==sr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==sr){const h=r.emissiveFactor;o.emissive=new Ye().setRGB(h[0],h[1],h[2],Rn)}return r.emissiveTexture!==void 0&&a!==sr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nn)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ws(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ar(i,h,r),h})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return fg(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=VR(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fg(new Cn,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?BR(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],p=a[f];let g;const b=c[f];if(p.mode===Pi.TRIANGLES||p.mode===Pi.TRIANGLE_STRIP||p.mode===Pi.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new UA(_,b):new qn(_,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Pi.TRIANGLE_STRIP?g.geometry=cg(g.geometry,rv):p.mode===Pi.TRIANGLE_FAN&&(g.geometry=cg(g.geometry,Nf));else if(p.mode===Pi.LINES)g=new zA(_,b);else if(p.mode===Pi.LINE_STRIP)g=new Bp(_,b);else if(p.mode===Pi.LINE_LOOP)g=new HA(_,b);else if(p.mode===Pi.POINTS)g=new VA(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&HR(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ws(g,r),p.extensions&&Ar(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ar(i,h[0],r),h[0];const d=new ni;r.extensions&&Ar(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new On(Yu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Op(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ws(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new et;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kp(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let b=0,y=d.length;b<y;b++){const x=d[b],w=f[b],A=m[b],M=_[b],R=p[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const I=n._createAnimationTracks(x,w,A,M,R);if(I)for(let v=0;v<I.length;v++)g.push(I[v])}return new ww(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WR)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Av:c.length>1?u=new ni:c.length===1?u=c[0]:u=new $t,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ws(u,r),r.extensions&&Ar(n,u,r),r.matrix!==void 0){const h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ni;n.name&&(r.name=i.createUniqueName(n.name)),ws(r,n),n.extensions&&Ar(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ls||d instanceof _n)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];$s[r.path]===$s.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch($s[r.path]){case $s.weights:c=vo;break;case $s.rotation:c=xo;break;case $s.position:case $s.scale:c=yo;break;default:switch(n.itemSize){case 1:c=vo;break;case 2:case 3:default:c=yo;break}break}const u=i.interpolation!==void 0?kR[i.interpolation]:Ol,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+$s[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Wf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof xo?FR:Yv;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $R(s,e,t){const n=e.attributes,i=new Ai;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=Wf(to[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Wf(to[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new fs;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function fg(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Gf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return St.workingColorSpace!==Rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),ws(s,e),$R(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zR(s,e.targets,t):s})}const YR=new P(0,0,1);function B(s,e,{pos:t,rot:n,scale:i}={}){const r=new qn(s,e);return t&&r.position.set(t[0],t[1],t[2]),n&&r.rotation.set(n[0],n[1],n[2]),i!==void 0&&(typeof i=="number"?r.scale.setScalar(i):r.scale.set(i[0],i[1],i[2])),r.castShadow=!0,r}function he(...s){const e=new ni;return s.flat().forEach(t=>t&&e.add(t)),e}function qR(s,e,t,n=0){const i=s.headR,[r,a,o]=s.headScale,l=e/(i*r),c=t/(i*a),u=Math.sqrt(Math.max(0,1-l*l-c*c))*i*o,h=new P(e/(r*r),t/(a*a),u/(o*o)).normalize();return{p:new P(e,t,u).addScaledVector(h,n),n:h}}function $i(s,e,t,n,i=.004){const{p:r,n:a}=qR(e,t,n,i);return s.position.copy(r),s.quaternion.setFromUnitVectors(YR,a),s}function Yl(s=.1,e=.16){const t=new Nv;return t.moveTo(0,-e/2),t.bezierCurveTo(s*.9,-e*.25,s*.7,e*.35,0,e/2),t.bezierCurveTo(-s*.7,e*.35,-s*.9,-e*.25,0,-e/2),t}function jR(){const s=document.createElement("canvas");s.width=8,s.height=64;const e=s.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,8,64),e.fillStyle="#b9b9b9";for(let n=0;n<64;n+=16)e.fillRect(0,n,8,8);const t=new GA(s);return t.colorSpace=Nn,t.wrapS=t.wrapT=Jr,t.repeat.set(1,3),t.magFilter=kn,t}function KR({dims:s,M:e}){const t=e.role("skin"),n=he();n.add(B(new ds(s.torsoR,s.torsoH,6,20),t,{pos:[0,s.torsoY,0],scale:[1,1,.88]})),n.add(B(new mt(.09,.1,.12,14),t,{pos:[0,s.torsoTop-.02,0]})),s.arms.forEach(r=>{const a=r.shoulder.clone().addScaledVector(r.dir,s.armLen/2);n.add(B(new ds(s.armR,s.armLen,4,12),t,{pos:a.toArray(),rot:[0,0,r.angle]})),n.add(B(new Fe(s.armR*1.35,14,10),t,{pos:r.hand.toArray()}))});const i=s.hipY-s.shoeH*.5;return[-1,1].forEach(r=>{n.add(B(new mt(s.legR,s.legR*.92,i,14),t,{pos:[r*s.legX,s.shoeH*.5+i/2,0]}))}),n}function ZR({dims:s,M:e}){const t=e.role("skin");return he(B(new Fe(s.headR,40,28),t,{scale:s.headScale}))}function zc(s){return({dims:e,M:t})=>{const n=t.role("skin",{shade:.95}),i=he();return[-1,1].forEach(r=>{const a=s(n,e);a.position.set(r*e.earX,e.earY,0),a.scale.x*=r,i.add(a)}),i}}const od={body:{default:KR},head:{default:ZR},ears:{round:zc(s=>B(new Fe(.1,16,12),s,{scale:[.55,1,.8]})),small:zc(s=>B(new Fe(.07,14,10),s,{scale:[.55,1,.8]})),big:zc(s=>B(new Fe(.14,16,12),s,{scale:[.5,1,.75]})),pointy:zc(s=>B(new jn(.075,.24,12),s,{pos:[.05,.05,0],rot:[0,0,-1],scale:[1,1,.55]}))}},JR=Math.PI*2;function pg(s,e,t=0){const n=Math.PI/2+t/2;return new Fe(s,40,24,n,JR-t,0,e)}function Ys(s,{top:e=1.12,back:t=1.75,gap:n=2.3,puff:i=1.07,widen:r=1}={}){const{dims:a,M:o}=s,l=o.role("hair",{side:en,rough:.7}),c=a.headR*i,u=he(B(pg(c,e,0),l),B(pg(c*1.005,t,n),l));return u.scale.set(a.headScale[0]*r,a.headScale[1],a.headScale[2]),u.userData.mat=l,u}const QR={none:()=>he(),short:s=>Ys(s),bangs:s=>{const e=Ys(s,{top:1.3,back:1.9,gap:2.1});return e.add(B(new Fe(.12,16,12),e.userData.mat,{pos:[.3,.14,.34],scale:[1.2,.55,.6],rot:[0,0,-.5]})),e},spiky:s=>{const e=Ys(s,{top:1.02,back:1.6,gap:2.4}),t=s.dims.headR,n=new jn(.1,.26,8);return[[0,.95,.2],[.3,.85,.15],[-.3,.85,.15],[.15,.9,-.25],[-.15,.9,-.25],[0,.75,.55]].forEach(([r,a,o])=>{const l=new P(r,a,o).normalize(),c=B(n,e.userData.mat);c.position.copy(l.clone().multiplyScalar(t*1)),c.quaternion.setFromUnitVectors(new P(0,1,0),l),e.add(c)}),e},pompadour:s=>{const e=Ys(s,{top:1.05,back:1.65});return e.add(B(new Fe(.3,24,16),e.userData.mat,{pos:[0,.42,.18],scale:[1.15,.6,.85],rot:[-.3,0,0]})),e},curly:s=>{const{dims:e,M:t}=s,n=t.role("hair",{rough:.9});n.flatShading=!0;const i=he(),r=new gr(.15,0),a=70;for(let o=0;o<a;o++){const l=1-o/(a-1)*2,c=Math.sqrt(1-l*l),u=o*2.399963,h=new P(Math.cos(u)*c,l,Math.sin(u)*c),d=Math.acos(h.y),f=h.z>.35&&d>1.05;if(d>1.85||f)continue;const m=B(r,n);m.position.copy(h.multiplyScalar(e.headR*1.04)),m.rotation.set(o,o*.7,0),i.add(m)}return i.scale.set(e.headScale[0]*1.02,e.headScale[1],e.headScale[2]),i},bob:s=>Ys(s,{top:1.2,back:2.25,gap:1.9,puff:1.1,widen:1.06}),ponytail:s=>{const e=Ys(s,{top:1.1,back:1.7}),t=e.userData.mat;return e.add(B(new Fe(.15,16,12),t,{pos:[0,.18,-.55]})),e.add(B(new ds(.1,.32,4,12),t,{pos:[0,-.08,-.62],rot:[.25,0,0]})),e.add(B(new Bt(.075,.03,8,16),s.M.fixed("#E60012"),{pos:[0,.14,-.6],rot:[1.3,0,0]})),e},buns:s=>{const e=Ys(s,{top:1.1,back:1.65});return[-1,1].forEach(t=>{e.add(B(new Fe(.17,18,14),e.userData.mat,{pos:[t*.32,.46,-.04]}))}),e},long:s=>{const e=Ys(s,{top:1.15,back:2.35,gap:1.85,puff:1.08});return e.add(B(new ds(.3,.42,6,16),e.userData.mat,{pos:[0,-.45,-.28],scale:[1.15,1,.45]})),e}},eC=.17,tC=0;function Pa(s,e){const t=he();return[-1,1].forEach(n=>{const i=e(s,n);i.userData.eye=!0;const r=$i(he(i),s.dims,n*eC,tC,0);t.add(r)}),t}const ld=(s,e=.02,t=.03,n=.02)=>B(new Fe(n,10,8),s.fixed("#ffffff",{rough:.3}),{pos:[e,t,.028]}),nC={round:s=>Pa(s,({M:e})=>he(B(new Fe(.068,20,14),e.role("eye",{rough:.35}),{scale:[1,1.22,.4]}),ld(e))),big:s=>Pa(s,({M:e})=>he(B(new Fe(.088,22,16),e.fixed("#FFFFFF",{rough:.4}),{scale:[1,1.18,.32]}),B(new Fe(.062,20,14),e.role("eye",{rough:.3}),{pos:[0,-.005,.014],scale:[1,1.15,.35]}),B(new Fe(.03,14,10),e.fixed("#1E1714",{rough:.3}),{pos:[0,-.005,.028],scale:[1,1.1,.4]}),ld(e,.022,.03,.022))),almond:s=>Pa(s,({M:e},t)=>he(B(new Fe(.06,20,14),e.role("eye",{rough:.35}),{scale:[1.45,.78,.4],rot:[0,0,t*.18]}),ld(e,.025,.018,.016))),happy:s=>Pa(s,({M:e})=>he(B(new Bt(.055,.015,8,20,Math.PI),e.role("eye"),{pos:[0,-.02,0]}))),sleepy:s=>Pa(s,({M:e})=>he(B(new Fe(.062,20,12,0,Math.PI*2,Math.PI/2,Math.PI/2),e.role("eye",{rough:.35}),{scale:[1.1,1,.4],rot:[0,0,0]}),B(new ds(.012,.13,4,8),e.fixed("#3A2E28"),{rot:[0,0,Math.PI/2],pos:[0,.002,.006]}))),dot:s=>Pa(s,({M:e})=>he(B(new Fe(.036,14,10),e.role("eye",{rough:.35}),{scale:[1,1.2,.5]})))},iC=-.1;function Hc(s,e){return $i(he(e(s)),s.dims,0,iC,0)}const sC={button:s=>Hc(s,({M:e})=>B(new Fe(.045,16,12),e.role("skin",{shade:.9}),{scale:[1.2,.9,.8]})),triangle:s=>Hc(s,({M:e})=>B(new jn(.05,.09,3),e.role("skin",{shade:.9}),{rot:[Math.PI/2,0,0],pos:[0,0,.02]})),round:s=>Hc(s,({M:e})=>B(new Fe(.07,18,14),e.role("skin",{shade:.88}),{scale:[1.15,.95,.8]})),dot:s=>Hc(s,({M:e})=>B(new Fe(.025,12,10),e.role("skin",{shade:.72}),{scale:[1.2,.9,.7]}))},rC=-.21;function zo(s,e){return $i(he(e(s)),s.dims,0,rC,.006)}const aC={smile:s=>zo(s,({M:e})=>B(new Bt(.06,.013,8,20,Math.PI),e.role("mouth"),{rot:[0,0,Math.PI],pos:[0,.03,0]})),open:s=>zo(s,({M:e})=>he(B(new ta(.068,24,Math.PI,Math.PI),e.role("mouth",{side:en}),{pos:[0,.03,0]}),B(new ta(.035,16,Math.PI,Math.PI),e.fixed("#F08A8A",{side:en}),{pos:[0,-.01,.002]}))),neutral:s=>zo(s,({M:e})=>B(new ds(.012,.07,4,8),e.role("mouth"),{rot:[0,0,Math.PI/2]})),cat:s=>zo(s,({M:e})=>{const t=e.role("mouth"),n=new Bt(.032,.011,8,16,Math.PI);return he(B(n,t,{rot:[0,0,Math.PI],pos:[-.031,.015,0]}),B(n,t,{rot:[0,0,Math.PI],pos:[.031,.015,0]}))}),o:s=>zo(s,({M:e})=>B(new Bt(.03,.012,8,18),e.role("mouth")))};function Ho(s,e,t=1.07){return B(new ds(s.torsoR*t,s.torsoH,6,22),e,{pos:[0,s.torsoY,0],scale:[1,1,.88]})}function Vo(s,e,t=.45,n=1.4){const i=he();return s.arms.forEach(r=>{const a=s.armLen*t,o=r.shoulder.clone().addScaledVector(r.dir,a/2);i.add(B(new mt(s.armR*n,s.armR*(n+.12),a,14),e,{pos:o.toArray(),rot:[0,0,r.angle]})),i.add(B(new Fe(s.armR*n*1.05,14,10),e,{pos:r.shoulder.toArray()}))}),i}function cd(s,e=.01){return s.torsoR*1.07*.88+e}const oC={basic:({dims:s,M:e})=>{const t=e.role("shirt");return he(Ho(s,t),Vo(s,t))},stamp:({dims:s,M:e})=>{const t=e.role("shirt"),n=B(new ca(Yl(.12,.17)),e.fixed("#FFF8EA",{side:en}),{pos:[.03,s.torsoY+.03,cd(s,.004)],rot:[0,0,-.5]}),i=B(new Mo(.008,.13),e.fixed("#7DB46C"),{pos:[.03,s.torsoY+.03,cd(s,.007)],rot:[0,0,-.5]});return he(Ho(s,t),Vo(s,t),n,i)},stripes:({dims:s,M:e})=>{const t=e.role("shirt",{map:jR()});return he(Ho(s,t),Vo(s,e.role("shirt")))},polo:({dims:s,M:e})=>{const t=e.role("shirt"),n=e.role("shirt",{shade:1.35}),i=he(Ho(s,t),Vo(s,t)),r=s.torsoTop-.05;[-1,1].forEach(a=>{i.add(B(new jn(.065,.1,3),n,{pos:[a*.07,r,s.torsoR*.62],rot:[.9,0,a*2.6],scale:[1,1,.35]}))});for(let a=0;a<3;a++)i.add(B(new Fe(.014,8,6),e.fixed("#FFF8EA"),{pos:[0,s.torsoY+.06-a*.07,cd(s,0)]}));return i},hoodie:({dims:s,M:e})=>{const t=e.role("shirt"),n=e.role("shirt",{shade:.85}),i=he(Ho(s,t,1.13),Vo(s,t,1,1.45));return i.add(B(new Bt(.17,.065,10,24),t,{pos:[0,s.torsoTop-.06,-.08],rot:[Math.PI/2-.35,0,0]})),i.add(B(new Kt(s.torsoR*1.1,.1,.03),n,{pos:[0,s.torsoY-.1,s.torsoR*1.13*.88-.005]})),[-1,1].forEach(r=>{i.add(B(new mt(.008,.008,.14,6),e.fixed("#FFF8EA"),{pos:[r*.05,s.torsoTop-.14,s.torsoR*.95]}))}),i},dress:({dims:s,M:e})=>{const t=e.role("shirt"),n=s.torsoTop-.04,i=s.hipY-s.legLen*.45,r=n-i,a=he(B(new mt(s.torsoR*1.02,s.torsoR*1.75,r,28),t,{pos:[0,i+r/2,0],scale:[1,1,.9]}),B(new Bt(s.torsoR*1.12,.022,8,28),e.fixed("#FFF8EA"),{pos:[0,s.torsoY-.02,0],rot:[Math.PI/2,0,0],scale:[1,.9,1]}));return s.arms.forEach(o=>{a.add(B(new Fe(s.armR*1.8,14,10),t,{pos:o.shoulder.toArray()}))}),a}};function Vc(s,e){return B(new Fe(s.torsoR*1.04,22,14,0,Math.PI*2,Math.PI/2,Math.PI/2),e,{pos:[0,s.hipY+.06,0],scale:[1,.75,.9]})}function Gc(s,e,t){const n=he(),r=s.hipY+.04-t;return[-1,1].forEach(a=>{n.add(B(new mt(s.legR*1.32,s.legR*1.25,r,14),e,{pos:[a*s.legX,t+r/2,0]}))}),n}const lC={jeans:({dims:s,M:e})=>{const t=e.role("pants");return he(Vc(s,t),Gc(s,t,s.shoeH*.7))},joggers:({dims:s,M:e})=>{const t=e.role("pants"),n=e.role("pants",{shade:.78}),i=he(Vc(s,t),Gc(s,t,s.shoeH+.03));return[-1,1].forEach(r=>{i.add(B(new mt(s.legR*1.2,s.legR*1.2,.05,14),n,{pos:[r*s.legX,s.shoeH+.03,0]}))}),i},shorts:({dims:s,M:e})=>{const t=e.role("pants");return he(Vc(s,t),Gc(s,t,s.hipY-s.legLen*.45))},skirt:({dims:s,M:e})=>{const t=e.role("pants"),n=s.hipY+.1,i=s.hipY-s.legLen*.5,r=n-i;return he(B(new mt(s.torsoR*1.05,s.torsoR*1.55,r,24),t,{pos:[0,i+r/2,0],scale:[1,1,.9]}))},overalls:({dims:s,M:e})=>{const t=e.role("pants"),n=he(Vc(s,t),Gc(s,t,s.shoeH*.7)),i=s.torsoR*1.07*.88;return n.add(B(new Kt(s.torsoR*1.05,s.torsoH*.5+.12,.03),t,{pos:[0,s.torsoY-.02,i-.004]})),[-1,1].forEach(r=>{n.add(B(new Kt(.045,.3,.02),t,{pos:[r*s.torsoR*.42,s.shoulderY-.03,i*.55],rot:[-.9,0,0]})),n.add(B(new mt(.018,.018,.012,10),e.fixed("#F6D365",{metal:.4,rough:.4}),{pos:[r*s.torsoR*.38,s.torsoY+s.torsoH*.25,i+.014],rot:[Math.PI/2,0,0]}))}),n}};function Wc(s,e){const t=he();return[-1,1].forEach(n=>{const i=e(n);i.position.set(n*s.legX,0,.03),t.add(i)}),t}const cC={sneakers:({dims:s,M:e})=>Wc(s,()=>he(B(new Fe(.1,18,12),e.role("shoes"),{pos:[0,.07,.02],scale:[.95,.62,1.35]}),B(new mt(.1,.1,.035,18),e.fixed("#FFFFFF"),{pos:[0,.018,.02],scale:[.98,1,1.4]}))),boots:({dims:s,M:e})=>Wc(s,()=>he(B(new mt(s.legR*1.45,s.legR*1.5,.2,16),e.role("shoes"),{pos:[0,.12,0]}),B(new Fe(.1,16,12),e.role("shoes"),{pos:[0,.06,.05],scale:[.95,.6,1.25]}),B(new mt(.1,.1,.03,16),e.fixed("#5A3E2B"),{pos:[0,.015,.03],scale:[1,1,1.35]}))),sandals:({dims:s,M:e})=>Wc(s,()=>he(B(new Fe(.085,14,10),e.role("skin"),{pos:[0,.06,.03],scale:[.9,.6,1.3]}),B(new mt(.1,.1,.03,18),e.role("shoes"),{pos:[0,.015,.03],scale:[1,1,1.4]}),B(new Bt(.075,.015,8,18,Math.PI),e.role("shoes",{shade:.85}),{pos:[0,.035,.05]}))),slippers:({dims:s,M:e})=>Wc(s,()=>he(B(new Fe(.11,18,12),e.role("shoes",{rough:1}),{pos:[0,.065,.03],scale:[1,.62,1.35]}),B(new Fe(.04,12,10),e.fixed("#FFFFFF",{rough:1}),{pos:[0,.11,.13]})))},Zs="#E60012",du="#FFF6E6",uC={none:()=>he(),cap:({dims:s,M:e})=>{const t=e.fixed(Zs,{rough:.7}),n=s.headR*1.1;return he(B(new Fe(n,32,16,0,Math.PI*2,0,Math.PI/2),t,{pos:[0,.1,-.02],scale:[1,.78,1]}),B(new mt(.34,.34,.03,28,1,!1,-Math.PI/2,Math.PI),t,{pos:[0,.14,.33],rot:[.16,0,0],scale:[1,1,.95]}),B(new Fe(.04,12,8),e.fixed(du),{pos:[0,.1+n*.78,-.02]}))},strawhat:({dims:s,M:e})=>{const t=e.fixed("#E8C77E",{rough:.95});return he(B(new mt(.34,.4,.26,28),t,{pos:[0,.48,0]}),B(new mt(.34,.34,.06,28),t,{pos:[0,.6,0],scale:[.98,1,.98]}),B(new mt(.76,.78,.03,36),t,{pos:[0,.36,0],rot:[.08,0,0]}),B(new mt(.405,.405,.06,28,1,!0),e.fixed(Zs,{side:en}),{pos:[0,.4,0]}))},beanie:({dims:s,M:e})=>{const t=e.fixed("#F2B84B",{rough:1}),n=s.headR*1.1;return he(B(new Fe(n,28,14,0,Math.PI*2,0,Math.PI/2),t,{pos:[0,.12,0],scale:[1,.85,1]}),B(new Bt(n*.98,.06,10,32),e.fixed("#E3A437",{rough:1}),{pos:[0,.14,0],rot:[Math.PI/2,0,0]}),B(new Fe(.1,14,10),e.fixed(du,{rough:1}),{pos:[0,.12+n*.85+.05,0]}))},headband:({dims:s,M:e})=>{const t=e.fixed("#F2A7B8",{rough:.6}),n=he(B(new Bt(s.headR*1.04,.028,8,36,Math.PI),t,{pos:[0,.02,.05],scale:[s.headScale[0]*1.02,s.headScale[1]*1.04,1],rot:[-.25,0,0]})),i=he(B(new jn(.08,.14,12),e.fixed(Zs),{rot:[0,0,Math.PI/2],pos:[.07,0,0]}),B(new jn(.08,.14,12),e.fixed(Zs),{rot:[0,0,-Math.PI/2],pos:[-.07,0,0]}),B(new Fe(.035,10,8),e.fixed(Zs),{}));return i.position.set(.28,.4,.12),i.rotation.set(0,0,-.5),n.add(i),n},headphones:({dims:s,M:e})=>{const t=e.fixed("#9ACB8A",{rough:.5}),n=e.fixed(du,{rough:.9}),i=he(B(new Bt(s.headR*1.1,.035,10,36,Math.PI),t,{pos:[0,.02,0],scale:[1.05,.95,1]}));return[-1,1].forEach(r=>{i.add(B(new mt(.12,.12,.08,20),t,{pos:[r*(s.earX+.05),-.02,0],rot:[0,0,Math.PI/2]})),i.add(B(new mt(.09,.09,.04,20),n,{pos:[r*(s.earX+0),-.02,0],rot:[0,0,Math.PI/2]}))}),i},leafcrown:({dims:s,M:e})=>{const t=he(B(new Bt(s.headR*.86,.02,8,36),e.fixed("#8B5E3C"),{pos:[0,.33,0],rot:[Math.PI/2,0,0]})),n=new ca(Yl(.12,.2)),i=["#7DB46C","#8CC37A","#6BA35E"];for(let r=0;r<12;r++){const a=r/12*Math.PI*2,o=s.headR*.88,l=B(n,e.fixed(i[r%3],{side:en}),{pos:[Math.sin(a)*o,.38,Math.cos(a)*o]});l.rotation.set(-.35,a,r%2?.3:-.3),t.add(l)}return t},flower:({dims:s,M:e})=>{const t=he(B(new Fe(.045,12,10),e.fixed("#F6D365"),{scale:[1,1,.6]}));for(let n=0;n<5;n++){const i=n/5*Math.PI*2;t.add(B(new Fe(.055,12,10),e.fixed("#FFFFFF",{rough:.6}),{pos:[Math.cos(i)*.07,Math.sin(i)*.07,-.01],scale:[1,1,.45]}))}return $i(t,s,.3,.26,.03)}},hC={none:()=>he(),roundglasses:({dims:s,M:e})=>{const t=e.fixed("#5A3E2B",{rough:.4}),n=he();return[-1,1].forEach(i=>{n.add($i(B(new Bt(.095,.013,8,28),t),s,i*.17,0,.05))}),n.add($i(he(B(new mt(.01,.01,.1,6),t,{rot:[0,0,Math.PI/2]})),s,0,.02,.07)),n},sunglasses:({dims:s,M:e})=>{const t=e.fixed("#2A2A30",{rough:.15,metal:.2}),n=e.fixed(Zs,{rough:.4}),i=he();return[-1,1].forEach(r=>{const a=he(B(new mt(.1,.1,.015,24),t,{rot:[Math.PI/2,0,0],scale:[1.1,1,.9]}),B(new Bt(.1,.012,8,24),n,{scale:[1.1,.9,1]}));i.add($i(a,s,r*.17,0,.05))}),i.add($i(he(B(new mt(.01,.01,.1,6),n,{rot:[0,0,Math.PI/2]})),s,0,.02,.07)),i},blush:({dims:s,M:e})=>{const t=e.fixed("#F4978E",{opacity:.7,rough:1}),n=he();return[-1,1].forEach(i=>{n.add($i(B(new ta(.06,20),t,{scale:[1.3,.8,1]}),s,i*.25,-.13,.006))}),n},nosering:({dims:s,M:e})=>he($i(B(new Bt(.022,.006,6,16),e.fixed("#D9D9D9",{metal:.9,rough:.25}),{rot:[0,1.2,0]}),s,.045,-.12,.03)),earrings:({dims:s,M:e})=>{const t=e.fixed("#F2C14E",{metal:.8,rough:.3}),n=he();return[-1,1].forEach(i=>{n.add(B(new Bt(.035,.008,6,16),t,{pos:[i*(s.earX+.02),s.earY-.12,.02],rot:[0,Math.PI/2,0]}))}),n},bandaid:({dims:s,M:e})=>he($i(B(new Kt(.12,.04,.01),e.fixed("#F2D3A8",{rough:1}),{rot:[0,0,.4]}),s,-.26,-.1,.008))},dC={none:()=>he(),scarf:({dims:s,M:e})=>{const t=e.fixed(Zs,{rough:.95});return he(B(new Bt(s.torsoR*.72,.075,12,28),t,{pos:[0,s.torsoTop-.06,0],rot:[Math.PI/2,0,0]}),B(new Kt(.1,.24,.05),t,{pos:[s.torsoR*.45,s.torsoTop-.2,s.torsoR*.85],rot:[.15,0,.12]}),B(new Kt(.1,.02,.055),e.fixed(du,{rough:.95}),{pos:[s.torsoR*.46,s.torsoTop-.28,s.torsoR*.86],rot:[.15,0,.12]}))},necklace:({dims:s,M:e})=>{const t=e.fixed("#F2C14E",{metal:.7,rough:.35}),n=s.torsoR*1.07*.88;return he(B(new Bt(s.torsoR*.62,.008,6,32),t,{pos:[0,s.torsoTop-.08,.03],rot:[Math.PI/2-.5,0,0]}),B(new ca(Yl(.07,.1)),e.fixed("#7DB46C",{side:en}),{pos:[0,s.torsoTop-.2,n+.01]}))},bowtie:({dims:s,M:e})=>{const t=e.fixed(Zs,{rough:.6}),n=s.torsoR*.92;return he(B(new jn(.06,.1,10),t,{pos:[.05,s.torsoTop-.1,n],rot:[0,0,Math.PI/2]}),B(new jn(.06,.1,10),t,{pos:[-.05,s.torsoTop-.1,n],rot:[0,0,-Math.PI/2]}),B(new Fe(.03,10,8),t,{pos:[0,s.torsoTop-.1,n+.01]}))},crossbag:({dims:s,M:e})=>{const t=e.fixed("#9E6B43",{rough:.6}),n=s.torsoR*1.18;return he(B(new Bt(n,.018,6,36),t,{pos:[0,s.torsoY+.02,0],rot:[Math.PI/2,.85,0],scale:[1,.88,1.9]}),B(new Kt(.2,.15,.07),t,{pos:[-s.torsoR*.95,s.hipY+.02,s.torsoR*.55],rot:[0,-.6,0]}),B(new Kt(.2,.05,.075),e.fixed("#7E5234"),{pos:[-s.torsoR*.95,s.hipY+.07,s.torsoR*.56],rot:[0,-.6,0]}))},backpack:({dims:s,M:e})=>{const t=e.fixed("#9ACB8A",{rough:.8}),n=he(B(new ds(s.torsoR*.7,s.torsoH*.6+.1,6,16),t,{pos:[0,s.torsoY+.02,-s.torsoR*1.05],scale:[1,1,.55]}),B(new Kt(s.torsoR*.9,.12,.05),e.fixed("#86B876"),{pos:[0,s.torsoY-.08,-s.torsoR*1.35]}));return[-1,1].forEach(i=>{n.add(B(new Bt(s.torsoR*.55,.018,6,20,Math.PI),t,{pos:[i*s.torsoR*.5,s.torsoY+.05,-.02],rot:[0,Math.PI/2,0],scale:[1.9,1.1,1]}))}),n}},Xc="#E60012",Go="#FFF6E6",Wo=s=>s.arms[0].hand;function mg({M:s},e,t){const n=s.fixed(e.body,{rough:.85}),i=s.fixed(e.belly,{rough:.85}),r=s.fixed("#2B2220",{rough:.3}),a=he(B(new Fe(.16,18,14),n,{pos:[0,.15,0],scale:[1,.95,1.1]}),B(new Fe(.1,14,10),i,{pos:[0,.14,.1],scale:[1,1.1,.6]}),B(new Fe(.15,18,14),n,{pos:[0,.37,.05]}),B(new Fe(.06,12,10),i,{pos:[0,.33,.18],scale:[1.3,.9,.8]}),B(new Fe(.018,8,6),r,{pos:[0,.35,.235]}),B(new Fe(.02,8,6),r,{pos:[.06,.4,.18]}),B(new Fe(.02,8,6),r,{pos:[-.06,.4,.18]}),B(new Bt(.1,.03,8,14,Math.PI),n,{pos:[0,.18,-.18],rot:[0,Math.PI/2,.6]}));return t(a,n),a.position.set(.62,0,.3),a.rotation.y=-.5,a.userData.bob=!0,a}const fC={none:()=>he(),shopbag:({dims:s,M:e})=>{const t=Wo(s),n=he(B(new Kt(.2,.22,.09),e.fixed(Xc,{rough:.7}),{pos:[0,-.2,0]}),B(new Kt(.12,.05,.092),e.fixed(Go),{pos:[0,-.18,0]}),B(new Bt(.05,.008,6,14,Math.PI),e.fixed(Go),{pos:[0,-.09,.02]}),B(new Bt(.05,.008,6,14,Math.PI),e.fixed(Go),{pos:[0,-.09,-.02]}));return n.position.copy(t),n},mug:({dims:s,M:e})=>{const t=Wo(s),n=he(B(new mt(.065,.058,.13,18),e.fixed(Go,{rough:.4}),{}),B(new ta(.058,18),e.fixed("#6B4226"),{pos:[0,.055,0],rot:[-Math.PI/2,0,0]}),B(new Bt(.035,.012,6,14),e.fixed(Go,{rough:.4}),{pos:[.07,0,0]}),B(new mt(.066,.066,.03,18,1,!0),e.fixed(Xc,{side:en}),{pos:[0,-.02,0]}));return n.position.copy(t).add(new P(.02,.06,.08)),n},bouquet:({dims:s,M:e})=>{const t=Wo(s),n=he(B(new jn(.09,.26,14,1,!0),e.fixed("#F4E8CB",{side:en}),{rot:[Math.PI,0,0],pos:[0,.02,0]})),i=["#E86A5C","#F2A7B8","#F6D365","#FFFFFF"];return[[0,.16,0],[.06,.13,.03],[-.06,.13,.02],[.01,.14,-.06]].forEach((r,a)=>{n.add(B(new Fe(.05,12,10),e.fixed(i[a],{rough:.7}),{pos:r}))}),n.position.copy(t).add(new P(0,.02,.06)),n.rotation.z=-.25,n},leafumbrella:({dims:s,M:e})=>{const t=Wo(s),i=s.headTop+.28-t.y,r=he(B(new mt(.014,.014,i,8),e.fixed("#8B5E3C"),{pos:[0,i/2,0]})),a=B(new ca(Yl(.95,1.2)),e.fixed("#7DB46C",{side:en,rough:.7}),{pos:[0,i+.04,0],rot:[-Math.PI/2+.15,0,.4]});return a.castShadow=!0,r.add(a),r.add(B(new Mo(.02,1),e.fixed("#5E9A50",{side:en}),{pos:[0,i+.05,0],rot:[-Math.PI/2+.15,0,.4]})),r.position.copy(t),r.rotation.z=.12,r},balloon:({dims:s,M:e})=>{const t=Wo(s),n=s.headTop+.35-t.y,i=he(B(new mt(.004,.004,n,4),e.fixed("#FFFFFF"),{pos:[0,n/2,0]}),B(new Fe(.2,22,16),e.fixed(Xc,{rough:.3}),{pos:[0,n+.2,0],scale:[1,1.15,1]}),B(new jn(.03,.04,8),e.fixed(Xc),{pos:[0,n+0,0]}));return i.position.copy(t),i.rotation.z=-.1,i.userData.bob=!0,i},cat:s=>mg(s,{body:"#F2A65A",belly:"#FFF3E0"},(e,t)=>{[-1,1].forEach(n=>e.add(B(new jn(.055,.1,10),t,{pos:[n*.08,.5,.04],rot:[0,0,-n*.3]})))}),dog:s=>mg(s,{body:"#C8905E",belly:"#FFF3E0"},e=>{const t=s.M.fixed("#8B5E3C",{rough:.85});[-1,1].forEach(n=>e.add(B(new Fe(.06,12,10),t,{pos:[n*.14,.38,.02],scale:[.5,1.3,.9],rot:[0,0,n*.3]})))}),bird:({dims:s,M:e})=>{const t=e.fixed("#F6D365",{rough:.7}),n=s.arms[1].hand,i=he(B(new Fe(.07,14,12),t,{scale:[1,.95,1.15]}),B(new Fe(.05,14,12),t,{pos:[0,.07,.04]}),B(new jn(.018,.04,8),e.fixed("#F08A3C"),{pos:[0,.07,.1],rot:[Math.PI/2,0,0]}),B(new Fe(.01,6,6),e.fixed("#2B2220"),{pos:[.025,.085,.08]}),B(new Fe(.01,6,6),e.fixed("#2B2220"),{pos:[-.025,.085,.08]}),B(new Fe(.04,10,8),e.fixed("#E8B94A"),{pos:[.06,0,-.01],scale:[.4,.8,1.2]}));return i.position.set(n.x,n.y+.1,n.z+.02),i.rotation.y=-.3,i.userData.bob=!0,i}},pC={body:od.body,head:od.head,ears:od.ears,hair:QR,eyes:nC,nose:sC,mouth:aC,shirt:oC,pants:lC,shoes:cC,accHead:uC,accFace:hC,accNeck:dC,companion:fC},mC=new Xv,ud=new Map;async function qv(s,e,t){if(e&&e.model)try{return await gC(e.model,t)}catch(a){console.warn(`[avatar] No se pudo cargar ${e.model}. Se usa el placeholder.`,a)}const n=pC[s]||{},i=e&&(e.builder||e.id)||"default",r=n[i]||n.default;return r?r(t):new ni}async function gC(s,e){ud.has(s)||ud.set(s,mC.loadAsync(s));const n=(await ud.get(s)).scene.clone(!0);return n.traverse(i=>{if(!i.isMesh)return;i.castShadow=!0,i.userData.fromGLB=!0;const r=(i.material&&i.material.name?i.material.name:"").toLowerCase(),a=Object.keys(Uu).find(o=>r.includes(o));a&&(i.material=i.material.clone(),i.material.color=new Ye(e.config[Uu[a]]),i.material.userData.role=a,i.material.userData.shade=1)}),n}function Ha(s){s.traverse(e=>{if(!e.isMesh||e.userData.fromGLB)return;e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n&&(n.map&&n.map.dispose(),n.dispose())})})}const Xf=[{slot:"body",key:"bodyType",parent:"body"},{slot:"head",key:null,parent:"head"},{slot:"ears",key:"ears",parent:"head"},{slot:"hair",key:"hair",parent:"head"},{slot:"eyes",key:"eyes",parent:"head"},{slot:"nose",key:"nose",parent:"head"},{slot:"mouth",key:"mouth",parent:"head"},{slot:"shirt",key:"shirt",parent:"body"},{slot:"pants",key:"pants",parent:"body"},{slot:"shoes",key:"shoes",parent:"body"},{slot:"accHead",key:"accHead",parent:"head"},{slot:"accFace",key:"accFace",parent:"head"},{slot:"accNeck",key:"accNeck",parent:"body"},{slot:"companion",key:"companion",parent:"body"}],no=Object.fromEntries(Xf.filter(s=>s.key).map(s=>[s.key,s]));class jv{constructor({animated:e=!0}={}){this.animated=e,this.root=new ni,this.root.name="avatar",this.bodyGroup=new ni,this.headGroup=new ni,this.root.add(this.bodyGroup),this.bodyGroup.add(this.headGroup),this.parts={},this.tokens={},this.config=null,this.dims=null,this.nextBlink=2}async build(e){return this.config={...e},this.dims=Vf(this.config.bodyType),this.headGroup.position.set(0,this.dims.headY,0),await Promise.all(Xf.map(t=>this._setSlot(t,!1))),this}async apply(e){const t=this.config;if(this.config={...e},!t)return await this.build(e),["*"];if(t.bodyType!==e.bodyType)return await this._rebuildAll(),["body"];const n=[],i=[];return Object.keys(e).forEach(r=>{if(t[r]===e[r])return;const a=dR[r];a?(this._tweenRole(a,e[r]),n.push(r)):no[r]&&(i.push(this._setSlot(no[r],this.animated)),n.push(no[r].slot))}),await Promise.all(i),n}async _rebuildAll(){const e=this.bodyGroup.scale;this.animated&&await Re.to(e,{x:1.08,y:.9,z:1.08,duration:.16,ease:"power2.in"}),this.dims=Vf(this.config.bodyType),this.headGroup.position.set(0,this.dims.headY,0),await Promise.all(Xf.map(t=>this._setSlot(t,!1))),this.animated&&Re.to(e,{x:1,y:1,z:1,duration:.7,ease:"elastic.out(1, 0.55)"})}async _setSlot(e,t){const n=(this.tokens[e.slot]||0)+1;this.tokens[e.slot]=n;const i=e.key?this.config[e.key]:"default",r=e.key&&Sp(e.key,i)||{id:i},a={dims:this.dims,M:Wv(this.config),config:this.config},o=await qv(e.slot,r,a);if(this.tokens[e.slot]!==n){Ha(o);return}o.name=e.slot,o.traverse(u=>{u.isMesh&&(u.castShadow=!0)});const l=e.parent==="head"?this.headGroup:this.bodyGroup,c=this.parts[e.slot];if(this.parts[e.slot]=o,l.add(o),c&&(t?(Re.killTweensOf(c.scale),Re.to(c.scale,{x:.001,y:.001,z:.001,duration:.22,ease:"power2.in",onComplete:()=>{c.removeFromParent(),Ha(c)}})):(c.removeFromParent(),Ha(c))),t){const u=o.scale.clone();o.scale.setScalar(.001),Re.to(o.scale,{x:u.x,y:u.y,z:u.z,duration:.55,delay:.12,ease:"back.out(1.7)"})}}_tweenRole(e,t){this.root.traverse(n=>{if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{if(!r||!r.userData||r.userData.role!==e)return;const a=Gv(t,r.userData.shade||1);this.animated?Re.to(r.color,{r:a.r,g:a.g,b:a.b,duration:.45,ease:"power2.out"}):r.color.copy(a)})})}getSlotCenter(e){const t=this.parts[e],n=new Ai;return t&&n.setFromObject(t),!t||n.isEmpty()?new P(0,this.dims?this.dims.headY:1,.3):n.getCenter(new P)}update(e){if(!this.animated||!this.dims)return;if(this.bodyGroup.position.y=Math.sin(e*2.1)*.006,this.headGroup.rotation.z=Math.sin(e*.9)*.035,this.headGroup.rotation.x=Math.sin(e*.7)*.02,e>this.nextBlink){this.nextBlink=e+2.5+Math.random()*3;const n=this.parts.eyes;n&&n.traverse(i=>{i.userData.eye&&Re.fromTo(i.scale,{y:1},{y:.1,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut"})})}const t=this.parts.companion;t&&t.userData.bob&&(t.userData.baseY=t.userData.baseY??t.position.y,t.position.y=t.userData.baseY+Math.sin(e*2.4)*.015)}dispose(){Object.values(this.parts).forEach(e=>{e.removeFromParent(),Ha(e)}),this.parts={}}}const Ju={environmentModels:{floor:null,plants:null,decorations:null},colors:{grass:"#B8D78E",grassDark:"#9CC476",earth:"#C9955C",earthDark:"#A8773F",path:"#F4E8CB",wood:"#C99A63",woodDark:"#9E7143",foliage:["#7DB46C","#8CC37A","#6BA35E"],trunk:"#8B5E3C",boxRed:"#E60012",boxBand:"#FFF6E6",flowers:["#F6D365","#F2A7B8","#FFFFFF","#E86A5C"]},lights:{sky:"#FFF4E0",ground:"#A9C98D",hemiIntensity:1.5,key:"#FFE6C2",keyIntensity:2.4,fill:"#D6E9FF",fillIntensity:.7},camera:{fov:32,minDistance:2.1,maxDistance:9,presets:{full:{pos:[0,1.4,6.1],target:[0,.95,0]},body:{pos:[0,1.1,4.3],target:[0,.8,0]},head:{pos:[0,1.62,3.5],target:[0,1.4,0]},showcase:{pos:[3.1,2.5,8.6],target:[0,.7,0]},final:{pos:[1.3,1.5,5.4],target:[0,.95,0]}}}},tn=Ju.colors,Qt=(s,e={})=>new _o({color:s,roughness:.9,metalness:0,...e});function _C(){const s=B(new mt(3,3,.2,56),Qt(tn.grass),{pos:[0,-.1,0]});s.receiveShadow=!0,s.castShadow=!1;const e=B(new Bt(3,.08,8,56),Qt(tn.grassDark),{pos:[0,-.02,0],rot:[Math.PI/2,0,0]});e.castShadow=!1;const t=B(new mt(2.98,2.2,.8,56),Qt(tn.earth),{pos:[0,-.6,0]});t.castShadow=!1;const n=B(new jn(2.2,.9,40),Qt(tn.earthDark),{pos:[0,-1.44,0],rot:[Math.PI,0,0]});n.castShadow=!1;const i=B(new ta(1.05,40),Qt(tn.path),{pos:[0,.004,0],rot:[-Math.PI/2,0,0]});return i.receiveShadow=!0,i.castShadow=!1,he(s,e,t,n,i)}function hd(s,e,t=1,n=tn.foliage[0]){const i=he(B(new mt(.08,.12,.7,8),Qt(tn.trunk),{pos:[0,.35,0]}),B(new gr(.55,1),Qt(n,{flatShading:!0}),{pos:[0,1,0],scale:[1,1.1,1]}),B(new gr(.38,1),Qt(tn.foliage[1],{flatShading:!0}),{pos:[.18,1.45,.05]}));return i.position.set(s,0,e),i.scale.setScalar(t),i}function gg(s,e,t=1){const n=he(B(new gr(.28,1),Qt(tn.foliage[2],{flatShading:!0}),{pos:[0,.2,0]}),B(new gr(.2,1),Qt(tn.foliage[1],{flatShading:!0}),{pos:[.22,.14,.05]}));return n.position.set(s,0,e),n.scale.setScalar(t),n}function dd(s,e){const t=he();for(let n=0;n<4;n++){const i=n*1.7,r=Math.cos(i)*.14,a=Math.sin(i)*.14;t.add(B(new mt(.008,.008,.12,5),Qt("#5E9A50"),{pos:[r,.06,a]})),t.add(B(new Fe(.045,10,8),Qt(tn.flowers[n%tn.flowers.length]),{pos:[r,.13,a]}))}return t.position.set(s,0,e),t}function vC(){const s=Qt(tn.wood),e=Qt(tn.woodDark),t=he(B(new Kt(.9,.05,.36),s,{pos:[0,.35,0]}),B(new Kt(.9,.05,.36),s,{pos:[0,.8,0]}),B(new Kt(.05,1,.36),e,{pos:[-.45,.5,0]}),B(new Kt(.05,1,.36),e,{pos:[.45,.5,0]})),n=Qt(tn.boxRed,{roughness:.6}),i=Qt(tn.boxBand),r=(a,o,l,c)=>he(B(new Kt(l,c,.22),n,{pos:[a,o+c/2,0]}),B(new Kt(l+.004,c*.22,.224),i,{pos:[a,o+c*.62,0]}));return t.add(r(-.22,.375,.22,.26),r(.08,.375,.18,.2),r(.3,.375,.14,.3)),t.add(r(-.18,.825,.26,.22),r(.18,.825,.2,.28)),t.add(B(new mt(.08,.06,.12,12),Qt("#FFF6E6"),{pos:[.28,.885,.03]})),t.add(B(new gr(.1,1),Qt(tn.foliage[0],{flatShading:!0}),{pos:[.28,1,.03]})),t.position.set(1.75,0,-.9),t.rotation.y=-.75,t}function xC(){const s=he(),e=Qt("#E9D3AE");for(let t=0;t<7;t++){const n=Math.PI+.55+t*.3,i=2.65;s.add(B(new Kt(.07,.38,.07),e,{pos:[Math.cos(n)*i,.19,Math.sin(n)*i]}))}return s}function yC(){return he(B(new mt(.3,.32,.08,24),Qt("#FFF6E6"),{pos:[0,.34,0]}),B(new mt(.05,.06,.32,10),Qt(tn.woodDark),{pos:[0,.16,0]}))}function bC(){const s=new ca(Yl(.07,.11)),e=[],t=he();for(let n=0;n<7;n++){const i=B(s,Qt(tn.foliage[n%3],{side:en}));i.castShadow=!1,i.userData={x:(Math.random()-.5)*4.5,z:(Math.random()-.5)*3-.5,speed:.12+Math.random()*.1,phase:Math.random()*10,h:2.8},e.push(i),t.add(i)}return{group:t,update(n){e.forEach(i=>{const r=i.userData,a=r.h-(n*r.speed+r.phase)%1*r.h;i.position.set(r.x+Math.sin(n+r.phase)*.3,a,r.z),i.rotation.set(n*.8+r.phase,n*.5,Math.sin(n+r.phase))})}}}function MC(){const s=new ni;s.name="environment";const e=_C(),t=he(hd(-2.05,-1.25,1.05,tn.foliage[0]),hd(-1.2,-2.15,.8,tn.foliage[2]),hd(2.25,.9,.75,tn.foliage[1]),gg(-1.9,.75,1.1),gg(1.2,-1.95,.9),dd(-1.25,1.35),dd(1.55,1.55),dd(-2.3,-.2)),n=he(vC(),xC(),yC());n.children[2].position.set(-1.35,0,-.4);const i=bC();s.add(e,t,n,i.group);const r=new Xv,a={floor:e,plants:t,decorations:n};return Object.entries(Ju.environmentModels).forEach(([o,l])=>{l&&r.loadAsync(l).then(c=>{c.scene.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.remove(a[o]),s.add(c.scene)}).catch(c=>console.warn(`[ambiente] No se pudo cargar ${l}. Se mantiene el placeholder.`,c))}),{group:s,update(o){i.update(o)}}}const wr=Ju.camera;class SC{constructor(){this.renderer=new Ev({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$_,this.renderer.setClearColor(0,0),this.canvas=this.renderer.domElement,this.canvas.className="stage-canvas",this.canvas.setAttribute("role","img"),this.canvas.setAttribute("aria-label","Vista 3D de tu avatar sobre una pequeña isla. Arrastra para girar."),this.canvas.tabIndex=-1,this.scene=new Tv,this.camera=new On(wr.fov,1,.1,60),this.camera.position.set(...wr.presets.full.pos),this.controls=new Qw(this.camera,this.canvas),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.07,enablePan:!1,rotateSpeed:.6,zoomSpeed:.6,minDistance:wr.minDistance,maxDistance:wr.maxDistance,minPolarAngle:.35,maxPolarAngle:1.52,autoRotateSpeed:1.1}),this.controls.target.set(...wr.presets.full.target),this._lights(),this.environment=MC(),this.scene.add(this.environment.group),this.avatar=new jv({animated:!0}),this.scene.add(this.avatar.root),this._sparkles(),this.clock=new Hw,this.container=null,this.mode="edit",this.tick=this.tick.bind(this),this.resizeObserver=new ResizeObserver(()=>this.resize())}async init(e){await this.avatar.build(e),this.ready=!0}_lights(){const e=Ju.lights;this.scene.add(new Hv(e.sky,e.ground,e.hemiIntensity));const t=new zl(e.key,e.keyIntensity);t.position.set(3,6,4),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-3.2,t.shadow.camera.right=3.2,t.shadow.camera.top=3.2,t.shadow.camera.bottom=-3.2,t.shadow.camera.near=1,t.shadow.camera.far=16,t.shadow.bias=-8e-4,t.shadow.normalBias=.02,t.shadow.radius=4,this.scene.add(t);const n=new zl(e.fill,e.fillIntensity);n.position.set(-4,3,-2),this.scene.add(n)}_sparkles(){this.sparkleGroup=new ni;const e=new Gp(.035,0),t=["#FFE08A","#FFFFFF","#F7B7C4","#BFE3B0","#E60012"];this.sparkles=[];for(let n=0;n<14;n++){const i=new qn(e,new sr({color:t[n%t.length],transparent:!0,opacity:0}));i.visible=!1,this.sparkles.push(i),this.sparkleGroup.add(i)}this.scene.add(this.sparkleGroup)}sparkleAt(e){const t=this.avatar.getSlotCenter(e);this.sparkles.forEach((n,i)=>{Re.killTweensOf([n.position,n.scale,n.material]);const r=new P(Math.random()-.5,Math.random()*.8-.2,Math.random()*.6).normalize();n.visible=!0,n.position.copy(t),n.scale.setScalar(.6+Math.random()*.8),n.material.opacity=1,Re.to(n.position,{x:t.x+r.x*.45,y:t.y+r.y*.45,z:t.z+r.z*.45,duration:.7,ease:"power2.out"}),Re.to(n.scale,{x:.01,y:.01,z:.01,duration:.7,ease:"power1.in"}),Re.to(n.material,{opacity:0,duration:.7,delay:.1,onComplete:()=>{n.visible=!1}})})}attach(e,t="edit"){this.detach(),this.container=e,e.appendChild(this.canvas),this.resizeObserver.observe(e),this.resize(),this.setMode(t,!1),this.clock.getDelta(),this.renderer.setAnimationLoop(this.tick)}detach(){this.container&&(this.renderer.setAnimationLoop(null),this.resizeObserver.unobserve(this.container),this.canvas.remove(),this.container=null)}resize(){if(!this.container)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setMode(e,t=!0){this.mode=e;const n=this.controls;n.enableZoom=e!=="showcase",n.enableRotate=!0,n.autoRotate=e==="showcase"||e==="final",n.autoRotateSpeed=e==="final"?.8:1.1,this.focus(e==="showcase"?"showcase":e==="final"?"final":"full",t?1.2:0)}focus(e,t=1.1){const n=wr.presets[e]||wr.presets.full,i=new P(...n.target),r=new P(...n.pos),a=this.camera.aspect||1;if(a<.85&&r.sub(i).multiplyScalar(Math.min(1.6,.85/a+.25)).add(i),Re.killTweensOf([this.camera.position,this.controls.target]),!t){this.camera.position.copy(r),this.controls.target.copy(i),this.controls.update();return}Re.to(this.camera.position,{x:r.x,y:r.y,z:r.z,duration:t,ease:"power3.inOut"}),Re.to(this.controls.target,{x:i.x,y:i.y,z:i.z,duration:t,ease:"power3.inOut"})}zoom(e){const t=this.controls.target,n=this.camera.position.clone().sub(t),i=Yu.clamp(n.length()*e,this.controls.minDistance,this.controls.maxDistance);n.setLength(i).add(t),Re.to(this.camera.position,{x:n.x,y:n.y,z:n.z,duration:.6,ease:"power2.out"})}setAutoRotate(e){return this.controls.autoRotate=e,e}tick(){const e=Math.min(this.clock.getDelta(),.05),t=this.clock.elapsedTime;this.controls.update(e),this.avatar.update(t),this.environment.update(t),this.renderer.render(this.scene,this.camera)}}let $c=null,$f=!1;function Kv(){if($f)return!1;try{const s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function qp(s){return $c||(Kv()?($c=(async()=>{try{const e=new SC;return await e.init(s),e}catch(e){return console.error("[stage] No se pudo iniciar WebGL",e),$f=!0,null}})(),$c):($f=!0,Promise.resolve(null)))}let kr=null,Br=null,Cs=null;const zr=new Map;function Zv(){if(kr)return!0;if(!Kv())return!1;kr=new Ev({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),kr.setPixelRatio(1),kr.setClearColor(0,0),Br=new Tv,Br.add(new Hv("#FFF4E0","#C9D9B8",1.8));const s=new zl("#FFE6C2",2.2);s.position.set(2,4,5),Br.add(s);const e=new zl("#D6E9FF",.8);return e.position.set(-3,2,-3),Br.add(e),Cs=new On(26,1,.05,50),!0}function Yf(s,{angle:e=.35,elevation:t=.12,pad:n=1.25}={}){const i=s.getCenter(new P),r=s.getSize(new P),o=Math.max(r.x,r.y,r.z*.8)*.5*n/Math.tan(Yu.degToRad(Cs.fov/2)),l=new P(Math.sin(e),t,Math.cos(e)).normalize();Cs.position.copy(i).addScaledVector(l,o),Cs.near=o/20,Cs.far=o*10,Cs.updateProjectionMatrix(),Cs.lookAt(i)}function Jv(s,e,t,n){kr.setSize(e,t,!1),Cs.aspect=e/t,Br.add(s),n(),kr.render(Br,Cs);const i=kr.domElement.toDataURL("image/png");return Br.remove(s),i}async function bo(s,{width:e=512,height:t=512,framing:n="full",angle:i=.35}={}){if(!Zv())return null;const r=`avatar:${n}:${e}x${t}:${i}:${JSON.stringify(s)}`;if(zr.has(r))return zr.get(r);const a=new jv({animated:!1});await a.build(s);const o=a.dims,l=Jv(a.root,e,t,()=>{let c;n==="bust"?(c=new Ai(new P(-o.headR*1.1,o.headY-o.headR*1.25,-o.headR),new P(o.headR*1.1,o.headY+o.headR*1.05,o.headR)),Yf(c,{angle:i*.6,elevation:.05,pad:1.05})):(c=new Ai().setFromObject(a.root),Yf(c,{angle:i,elevation:.14,pad:n==="portrait"?1.02:1.12}))});return a.dispose(),zr.set(r,l),l}async function EC(s,e,t,n=160){if(!Zv())return null;const i=`part:${s}:${e.id}:${t.bodyType}:${t.shirtColor}:${t.pantsColor}:${t.shoesColor}:${t.skin}`;if(zr.has(i))return zr.get(i);const r=Vf(t.bodyType),a=await qv(s,e,{dims:r,M:Wv(t),config:t}),o=new Ai().setFromObject(a);if(o.isEmpty())return Ha(a),zr.set(i,null),null;const l=Jv(a,n,n,()=>Yf(o,{angle:.45,elevation:.2,pad:1.15}));return Ha(a),zr.set(i,l),l}function Qu(s,e=""){const t=`<img class="portrait-mine pv-img" alt="" ${e?`src="${e}"`:""} />`;return s==="plush"?`<div class="pv pv--plush"><div class="pv-plush">${t}</div><span class="pv-label">Peluche 25 cm</span></div>`:s==="keychain"?`<div class="pv pv--key"><span class="pv-ring" aria-hidden="true"></span><div class="pv-acrylic">${t}</div></div>`:`<div class="pv pv--box">
    <div class="pv-box">
      <div class="pv-box-top"><span class="pv-brand">MINISO</span><span class="pv-x">×</span><span class="pv-ac">Animal Crossing</span></div>
      <div class="pv-window">${t}<span class="pv-base" aria-hidden="true"></span></div>
      <div class="pv-box-foot">Figura coleccionable</div>
    </div>
  </div>`}Re.registerPlugin(dt);let La=null,fd=null;function TC(){const s=dh.hero,e=dh.collab,t=dh.testimonials,n=s.title.split(" ").map(i=>`<span class="word"><span>${De(i)}</span></span>`).join(" ");return`
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="hero-kicker">${De(s.kicker)}</p>
        <div class="hero-lockup">${Cl("lockup--xl")}</div>
        <h1 id="hero-title" class="hero-title">${n}</h1>
        <p class="hero-text">${De(s.text)}</p>
        <div class="hero-actions">
          <a class="btn btn--primary btn--lg" href="#/personalizar">${xe("sparkle")}<span>${De(s.cta)}</span></a>
          <button type="button" class="btn btn--quiet" data-section="colaboracion">Cómo funciona</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-sky" aria-hidden="true"></div>
        <div class="hero-stage stage-mount" id="heroStage">
          <div class="stage-loading" aria-hidden="true">${xe("leaf")}</div>
        </div>
        <div class="float float--a" aria-hidden="true">${Eu("#8CC37A")}</div>
        <div class="float float--b" aria-hidden="true">${Eu("#F2A7B8")}</div>
        <div class="float float--c" aria-hidden="true"><span class="tag-red">Hecho por ti</span></div>
        <p class="hero-hint">${xe("rotate")}<span>${De(s.hint)}</span></p>
      </div>
    </div>
  </section>

  <section id="colaboracion" class="collab" aria-labelledby="collab-title">
    <div class="wrap">
      <header class="section-head">
        <h2 id="collab-title">${De(e.title)}</h2>
        <p>${De(e.text)}</p>
      </header>

      <ol class="journey">
        ${e.steps.map((i,r)=>`
          <li class="journey-step">
            <span class="journey-num" aria-hidden="true">${r+1}</span>
            <h3>${De(i.title)}</h3>
            <p>${De(i.text)}</p>
          </li>`).join("")}
      </ol>

      <div class="materialize">
        <h3 class="materialize-title">${De(e.productsTitle)}</h3>
        <div class="materialize-row">
          <figure class="mat-item">
            <div class="mat-screen"><img class="portrait-mine" alt="Tu avatar en la pantalla" /></div>
            <figcaption>Tu avatar en 3D</figcaption>
          </figure>
          <span class="mat-arrow" aria-hidden="true">${xe("arrowRight")}</span>
          <figure class="mat-item">
            ${Qu("figure")}
            <figcaption>Figura, peluche o llavero</figcaption>
          </figure>
          <span class="mat-arrow" aria-hidden="true">${xe("arrowRight")}</span>
          <figure class="mat-item">
            <div class="mini-card"><div class="mini-card-art"><img class="portrait-mine" alt="" /></div><span>Tu tarjeta</span></div>
            <figcaption>Tarjeta coleccionable para compartir</figcaption>
          </figure>
        </div>
      </div>

      <div class="cta-band">
        <p>Tu avatar empieza con una primera decisión.</p>
        <a class="btn btn--primary btn--lg" href="#/personalizar">${xe("sparkle")}<span>${De(e.cta)}</span></a>
      </div>
    </div>
  </section>

  <section id="testimonios" class="testimonials" aria-labelledby="t-title">
    <div class="wrap">
      <header class="section-head section-head--row">
        <h2 id="t-title">${De(t.title)}</h2>
        <div class="carousel-nav">
          <button type="button" class="icon-btn" data-dir="-1" aria-label="Testimonio anterior">${xe("arrowLeft")}</button>
          <button type="button" class="icon-btn" data-dir="1" aria-label="Testimonio siguiente">${xe("arrowRight")}</button>
        </div>
      </header>
      <ul class="t-track" tabindex="0" aria-label="Testimonios, desplázate horizontalmente">
        ${Fd.map((i,r)=>`
          <li class="t-card">
            <figure>
              <div class="t-portrait"><img data-t="${r}" alt="Avatar de ${De(i.name)}" /></div>
              <blockquote><p>${De(i.quote)}</p></blockquote>
              <figcaption><strong>${De(i.name)}</strong><span>${De(i.place)}</span></figcaption>
            </figure>
          </li>`).join("")}
      </ul>
      <div class="center-cta">
        <a class="btn btn--primary btn--lg" href="#/personalizar">${xe("sparkle")}<span>${De(t.cta)}</span></a>
      </div>
    </div>
  </section>`}async function AC(s){const e=await bo(Ge.state,{width:420,height:420,framing:"portrait"});e&&Dt(".portrait-mine",s).forEach(t=>{t.src=e});for(let t=0;t<Fd.length;t++){if(!s.isConnected)return;const n=await bo({...Dl,...Fd[t].avatar},{width:280,height:280,framing:"bust"}),i=pe(`img[data-t="${t}"]`,s);i&&n&&(i.src=n,Re.fromTo(i,{autoAlpha:0,scale:.9},{autoAlpha:1,scale:1,duration:.5})),await new Promise(r=>requestAnimationFrame(r))}}function wC(s){Re.timeline({defaults:{ease:"power3.out"}}).from(pe(".hero-kicker",s),{y:12,autoAlpha:0,duration:.5}).from(Dt(".hero-lockup .lockup > span",s),{y:18,autoAlpha:0,stagger:.08,duration:.6},"-=0.25").from(Dt(".hero-title .word > span",s),{yPercent:110,duration:.8,stagger:.06},"-=0.35").from(Dt(".hero-text, .hero-actions",s),{y:14,autoAlpha:0,stagger:.1,duration:.6},"-=0.5").from(pe(".hero-visual",s),{scale:.94,autoAlpha:0,duration:1.1,ease:"expo.out"},.15).from(Dt(".float",s),{scale:0,autoAlpha:0,stagger:.12,duration:.7,ease:"back.out(1.8)"},"-=0.6"),aa||Dt(".float",s).forEach((t,n)=>{Re.to(t,{y:n%2?-10:10,rotation:n%2?6:-6,duration:3+n,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:1.4})})}function RC(s){Re.from(Dt(".journey-step",s),{y:26,autoAlpha:0,stagger:.14,duration:.7,ease:"power3.out",scrollTrigger:{trigger:pe(".journey",s),start:"top 80%",once:!0}}),Re.from(pe(".journey",s),{"--line":0,duration:1.4,ease:"power2.inOut",scrollTrigger:{trigger:pe(".journey",s),start:"top 80%",once:!0}}),Re.from(Dt(".mat-item, .mat-arrow",s),{y:20,autoAlpha:0,stagger:.12,duration:.6,ease:"power2.out",scrollTrigger:{trigger:pe(".materialize",s),start:"top 78%",once:!0}})}function CC(s){const e=pe(".t-track",s);Dt(".carousel-nav [data-dir]",s).forEach(t=>{t.addEventListener("click",()=>{const n=pe(".t-card",e),i=n?n.getBoundingClientRect().width+20:320;e.scrollBy({left:i*Number(t.dataset.dir),behavior:aa?"auto":"smooth"})})})}const PC={name:"home",async mount(s){var n;s.innerHTML=TC();const e=s;fd=Re.context(()=>{wC(e),RC(e)},e),CC(e),pe(".hero-actions [data-section]",e).addEventListener("click",()=>{document.getElementById("colaboracion").scrollIntoView({behavior:aa?"auto":"smooth"})}),La=await qp(Ge.state);const t=pe("#heroStage",e);La&&t&&e.isConnected?(await La.avatar.apply(Ge.state),La.attach(t,"showcase"),(n=pe(".stage-loading",t))==null||n.remove()):t&&(t.innerHTML='<p class="stage-fallback">Tu navegador no pudo iniciar la vista 3D. Puedes seguir explorando la colaboración.</p>'),AC(e)},unmount(){fd&&fd.revert(),dt.getAll().forEach(s=>s.kill()),La&&La.detach()}};let Xo=null;const LC={pop:{notes:[660,880],step:.05,dur:.09},tab:{notes:[520],step:.05,dur:.06},soft:{notes:[440,392],step:.06,dur:.1},success:{notes:[523,659,784],step:.09,dur:.16}};function DC(){return Xo||(Xo=new(window.AudioContext||window.webkitAudioContext)),Xo.state==="suspended"&&Xo.resume(),Xo}const ln={get enabled(){return Ge.flag("sound")!==!1},toggle(){return Ge.flag("sound",!this.enabled)},play(s="pop"){if(!this.enabled)return;const e=LC[s];if(e)try{const t=DC();e.notes.forEach((n,i)=>{const r=t.currentTime+i*e.step,a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(.05,r+.012),o.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),a.connect(o).connect(t.destination),a.start(r),a.stop(r+e.dur+.02)})}catch{}}};let Rr=null;function Ii(s,{iconName:e="check",duration:t=2600}={}){Rr||(Rr=document.createElement("div"),Rr.className="toast-region",Rr.setAttribute("role","status"),Rr.setAttribute("aria-live","polite"),document.body.appendChild(Rr));const n=document.createElement("div");n.className="toast",n.innerHTML=`${xe(e)}<span>${s}</span>`,Rr.appendChild(n),Re.fromTo(n,{y:16,autoAlpha:0},{y:0,autoAlpha:1,duration:.35,ease:"back.out(1.6)"}),Re.to(n,{y:-8,autoAlpha:0,duration:.3,delay:t/1e3,onComplete:()=>n.remove()})}const IC=[{icon:"sparkle",title:"Personaliza tu avatar",text:"Toca una opción y mira cómo cambia al instante."},{icon:"shirt",title:"Explora las categorías",text:"Cuerpo, cabello, rostro, ropa, accesorios y objetos."},{icon:"save",title:"Guarda tu creación",text:"Queda guardada en este navegador para volver cuando quieras."},{icon:"bag",title:"Decide qué sigue",text:"Pide tu producto físico o crea tu tarjeta coleccionable."}];let Ss=null;function Qv(s){Ss||(Ss=Hu({className:"modal--intro",label:"¿Cómo funciona?",html:`
        <button type="button" class="icon-btn modal-close" data-close aria-label="Cerrar instrucciones">${xe("close")}</button>
        <p class="modal-kicker">Bienvenida al estudio</p>
        <h2 class="modal-title">¿Cómo funciona?</h2>
        <ol class="intro-steps">
          ${IC.map((e,t)=>`
            <li class="intro-step">
              <span class="intro-num" aria-hidden="true">${t+1}</span>
              <span class="intro-icon" aria-hidden="true">${xe(e.icon)}</span>
              <span class="intro-copy"><strong>${e.title}</strong><span>${e.text}</span></span>
            </li>`).join("")}
        </ol>
        <p class="intro-tip">${xe("rotate")}<span>Arrastra la escena para girar a tu avatar y usa la rueda para acercarte.</span></p>
        <button type="button" class="btn btn--primary btn--block btn--lg" data-close data-start>Comenzar</button>`}),Ss.addEventListener("click",e=>{e.target.closest("[data-close]")&&as(Ss)})),Ss.onclose=()=>{s&&s(),Ss.onclose=null},Vu(Ss),Re.from(Ss.querySelectorAll(".intro-step"),{x:-12,autoAlpha:0,stagger:.08,duration:.4,delay:.15,ease:"power2.out"}),requestAnimationFrame(()=>Ss.querySelector("[data-start]").focus())}let Yt=null,pd=null,ia=oa[0].id,fu=0,li=null,md=null;function NC(){return`
  <section class="studio" aria-label="Estudio de personalización">
    <div class="studio-stage">
      <div class="stage-mount" id="studioStage"><div class="stage-loading" aria-hidden="true">${xe("leaf")}</div></div>

      <div class="studio-top">
        <a class="chip-btn" href="#/">${xe("arrowLeft")}<span>Inicio</span></a>
        <div class="toolbar" role="toolbar" aria-label="Historial">
          <button type="button" class="tool" data-act="undo" aria-label="Deshacer" title="Deshacer (Ctrl+Z)">${xe("undo")}</button>
          <button type="button" class="tool" data-act="redo" aria-label="Rehacer" title="Rehacer (Ctrl+Y)">${xe("redo")}</button>
          <span class="toolbar-sep" aria-hidden="true"></span>
          <button type="button" class="tool" data-act="random" aria-label="Sorpréndeme: avatar aleatorio" title="Sorpréndeme">${xe("dice")}</button>
          <button type="button" class="tool" data-act="reset" aria-label="Reiniciar avatar" title="Reiniciar avatar">${xe("reset")}</button>
        </div>
        <div class="studio-top-right">
          <button type="button" class="tool tool--round" data-act="sound" aria-pressed="${ln.enabled}" aria-label="Sonidos">${xe(ln.enabled?"sound":"soundOff")}</button>
          <button type="button" class="tool tool--round" data-act="help" aria-label="¿Cómo funciona?">${xe("help")}</button>
        </div>
      </div>

      <div class="camera-bar toolbar" role="toolbar" aria-label="Cámara">
        <button type="button" class="tool" data-act="front" aria-label="Vista frontal" title="Vista frontal">${xe("front")}<span class="tool-label">Frente</span></button>
        <button type="button" class="tool" data-act="spin" aria-pressed="false" aria-label="Vista 360°, girar automáticamente" title="Vista 360°">${xe("rotate")}<span class="tool-label">360°</span></button>
        <span class="toolbar-sep" aria-hidden="true"></span>
        <button type="button" class="tool" data-act="zoomOut" aria-label="Alejar">${xe("zoomOut")}</button>
        <button type="button" class="tool" data-act="zoomIn" aria-label="Acercar">${xe("zoomIn")}</button>
      </div>
      <p class="stage-hint">Arrastra para girar. Usa la rueda o pellizca para acercar.</p>
    </div>

    <aside class="studio-panel" aria-label="Opciones de personalización">
      <div class="panel-head">
        <h1 class="panel-title">Tu estudio</h1>
        <p class="panel-status" id="saveStatus" aria-live="polite"></p>
      </div>
      <div class="cat-tabs" role="tablist" aria-label="Categorías">
        ${oa.map(s=>`
          <button type="button" class="cat-tab" role="tab" id="tab-${s.id}" data-cat="${s.id}"
            aria-selected="${s.id===ia}" aria-controls="catPanel" tabindex="${s.id===ia?0:-1}">
            ${xe(s.icon)}<span>${De(s.label)}</span>
          </button>`).join("")}
      </div>
      <div class="cat-panel" id="catPanel" role="tabpanel" tabindex="0"></div>
      <div class="panel-actions">
        <button type="button" class="btn btn--secondary" data-act="save">${xe("save")}<span>Guardar creación</span></button>
        <button type="button" class="btn btn--primary" data-act="done">${xe("check")}<span>Terminar avatar</span></button>
      </div>
    </aside>
  </section>`}function OC(s){const e=Ge.state[s.key];return s.type==="colors"?`
      <fieldset class="opt-group">
        <legend>${De(s.label)}</legend>
        <div class="swatches" role="radiogroup" aria-label="${De(s.label)}">
          ${s.options.map(t=>`
            <button type="button" class="swatch" role="radio" data-key="${s.key}" data-id="${t.id}"
              aria-checked="${t.id===e}" tabindex="${t.id===e?0:-1}"
              aria-label="${De(t.name)}" title="${De(t.name)}" style="--c:${t.id}">
              <span class="swatch-check">${xe("check")}</span>
            </button>`).join("")}
        </div>
      </fieldset>`:`
    <fieldset class="opt-group">
      <legend>${De(s.label)}</legend>
      <div class="opt-grid" role="radiogroup" aria-label="${De(s.label)}">
        ${s.options.map(t=>`
          <button type="button" class="opt" role="radio" data-key="${s.key}" data-id="${t.id}"
            aria-checked="${t.id===e}" tabindex="${t.id===e?0:-1}">
            <span class="opt-thumb" data-thumb="${s.key}:${t.id}">
              ${t.thumbnail?`<img src="${t.thumbnail}" alt="" />`:'<span class="thumb-skeleton"></span>'}
            </span>
            <span class="opt-name">${De(t.name)}</span>
            <span class="opt-check" aria-hidden="true">${xe("check")}</span>
          </button>`).join("")}
      </div>
    </fieldset>`}function ex(s=!0){const e=oa.find(n=>n.id===ia),t=pe("#catPanel",li);t.setAttribute("aria-labelledby",`tab-${e.id}`),t.innerHTML=e.groups.map(OC).join(""),t.scrollTop=0,s&&Re.from(Dt(".opt-group",t),{y:12,autoAlpha:0,stagger:.06,duration:.35,ease:"power2.out"}),ix(e)}function tx(){Dt('[role="radio"][data-key]',li).forEach(t=>{const n=Ge.state[t.dataset.key]===t.dataset.id;t.setAttribute("aria-checked",n),t.tabIndex=n?0:-1});const s=pe('[data-act="undo"]',li),e=pe('[data-act="redo"]',li);s.disabled=!Ge.canUndo,e.disabled=!Ge.canRedo,nx()}function nx(){const s=pe("#saveStatus",li);s&&(s.textContent=Ge.isSaved?"Creación guardada en este navegador":"Tienes cambios sin guardar",s.classList.toggle("is-saved",Ge.isSaved))}function ix(s){const e=++fu,t=[];s.groups.forEach(i=>{i.type==="options"&&i.options.forEach(r=>{r.thumbnail||t.push({g:i,o:r})})}),(async()=>{for(const{g:i,o:r}of t){if(e!==fu||!li||!li.isConnected)return;const a=no[i.key],o={...Ge.state,[i.key]:r.id};i.key==="hair"&&(o.accHead="none");let l=null;i.thumb==="part"?l=await EC(a.slot,r,o,160):l=await bo(o,{width:160,height:160,framing:i.thumb==="bust"?"bust":"full"});const c=pe(`[data-thumb="${i.key}:${r.id}"]`,li);c&&e===fu&&(c.innerHTML=l?`<img src="${l}" alt="" />`:`<span class="thumb-none">${xe("none")}</span>`,Re.fromTo(c.firstElementChild,{autoAlpha:0,scale:.85},{autoAlpha:1,scale:1,duration:.3})),await new Promise(u=>requestAnimationFrame(u))}})()}function sx(s,e=!1){if(s===ia)return;ia=s,Dt(".cat-tab",li).forEach(n=>{const i=n.dataset.cat===s;if(n.setAttribute("aria-selected",i),n.tabIndex=i?0:-1,i&&e&&n.focus(),i){const r=n.parentElement;r.scrollTo({left:n.offsetLeft-(r.clientWidth-n.offsetWidth)/2,behavior:"smooth"})}}),ex(),ln.play("tab");const t=oa.find(n=>n.id===s);Yt&&(Yt.setAutoRotate(!1),qf(!1),Yt.focus(t.camera||"full"))}function qf(s){const e=pe('[data-act="spin"]',li);e&&e.setAttribute("aria-pressed",s)}function gd(s){switch(s){case"undo":Ge.undo()&&ln.play("soft");break;case"redo":Ge.redo()&&ln.play("soft");break;case"reset":Ge.reset()&&(Ii("Avatar reiniciado. Puedes deshacerlo.",{iconName:"reset"}),ln.play("soft"));break;case"random":Ge.replace(pb(),"random"),ln.play("success");break;case"front":Yt&&(Yt.setAutoRotate(!1),qf(!1),Yt.focus("full"));break;case"spin":Yt&&qf(Yt.setAutoRotate(!Yt.controls.autoRotate));break;case"zoomIn":Yt&&Yt.zoom(.8);break;case"zoomOut":Yt&&Yt.zoom(1.25);break;case"sound":{const e=ln.toggle(),t=pe('[data-act="sound"]',li);t.setAttribute("aria-pressed",e),t.innerHTML=xe(e?"sound":"soundOff");break}case"help":Qv();break;case"save":Ge.save()?(Ii("Creación guardada"),ln.play("success")):Ii("No se pudo guardar en este navegador",{iconName:"close"}),nx();break;case"done":Ge.save(),Gl("/listo");break}}function UC(s){const e=s.target.closest('[role="radio"]');if(!e||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(s.key))return;s.preventDefault();const n=Dt('[role="radio"]',e.parentElement),i=n.indexOf(e),r=n[(i+(s.key==="ArrowRight"||s.key==="ArrowDown"?1:-1)+n.length)%n.length];r.focus(),r.click()}function FC(s){const e=s.target.closest('[role="tab"]');if(!e||!["ArrowRight","ArrowLeft","Home","End"].includes(s.key))return;s.preventDefault();const t=Dt('[role="tab"]',li);let n=t.indexOf(e);s.key==="ArrowRight"&&(n=(n+1)%t.length),s.key==="ArrowLeft"&&(n=(n-1+t.length)%t.length),s.key==="Home"&&(n=0),s.key==="End"&&(n=t.length-1),sx(t[n].dataset.cat,!0)}async function kC(s,e){if(tx(),!Yt)return;const t=await Yt.avatar.apply(s);if(e.type==="set"&&t.length){const n=t[0],i=no[e.key]?no[e.key].slot:n;Yt.sparkleAt(i==="body"?"shirt":i)}(e.type==="reset"||e.type==="random"||e.type==="undo"||e.type==="redo")&&BC()}function BC(){const s=oa.find(e=>e.id===ia);ix(s)}const zC={name:"customize",async mount(s){var t;li=s,s.innerHTML=NC(),ex(!1),tx(),s.addEventListener("click",n=>{const i=n.target.closest('[role="radio"][data-key]');if(i){Ge.set(i.dataset.key,i.dataset.id)&&(ln.play("pop"),Re.fromTo(i,{scale:.92},{scale:1,duration:.45,ease:"back.out(3)"}));return}const r=n.target.closest("[data-cat]");if(r)return sx(r.dataset.cat);const a=n.target.closest("[data-act]");a&&gd(a.dataset.act)}),s.addEventListener("keydown",n=>{UC(n),FC(n)}),md=n=>{!(n.ctrlKey||n.metaKey)||n.target.matches("input, textarea")||(n.key.toLowerCase()==="z"&&!n.shiftKey&&(n.preventDefault(),gd("undo")),(n.key.toLowerCase()==="y"||n.key.toLowerCase()==="z"&&n.shiftKey)&&(n.preventDefault(),gd("redo")))},window.addEventListener("keydown",md),pd=Ge.subscribe(kC),Ge.flag("introSeen")||setTimeout(()=>Qv(()=>Ge.flag("introSeen",!0)),450),Yt=await qp(Ge.state);const e=pe("#studioStage",s);if(Yt&&s.isConnected){await Yt.avatar.apply(Ge.state),Yt.attach(e,"edit"),(t=pe(".stage-loading",e))==null||t.remove();const n=oa.find(i=>i.id===ia);Yt.focus(n.camera||"full",1.4)}else e&&(e.innerHTML='<p class="stage-fallback">No fue posible iniciar la vista 3D en este navegador. Prueba con una versión reciente de Chrome, Edge, Firefox o Safari.</p>')},unmount(){fu++,pd&&pd(),window.removeEventListener("keydown",md),Yt&&Yt.detach(),li=null}};let Wi=null;function HC(s){const e=[["Cuerpo",zi("bodyType",s.bodyType)],["Cabello",zi("hair",s.hair)],["Ojos",zi("eyes",s.eyes)],["Nariz",zi("nose",s.nose)],["Boca",zi("mouth",s.mouth)],["Orejas",zi("ears",s.ears)],["Parte superior",zi("shirt",s.shirt)],["Parte inferior",zi("pants",s.pants)],["Zapatos",zi("shoes",s.shoes)]],t=["accHead","accFace","accNeck"].filter(n=>s[n]!=="none").map(n=>zi(n,s[n]));return e.push(["Accesorios",t.length?t.join(", "):"Ninguno"]),e.push(["Acompañante",s.companion==="none"?"Ninguno":zi("companion",s.companion)]),e}function VC(s){return["skin","hairColor","shirtColor","pantsColor","shoesColor"].map(t=>{var r;const n=fb(t),i=((r=n.options.find(a=>a.id===s[t]))==null?void 0:r.name)||s[t];return`<li><span class="dot" style="--c:${s[t]}"></span><span>${De(n.label)}: ${De(i)}</span></li>`}).join("")}function GC(){const s=Ge.state,e=Ge.profile.name;return`
  <section class="final" aria-labelledby="final-title">
    <div class="final-stage">
      <div class="stage-mount" id="finalStage"><div class="stage-loading" aria-hidden="true">${xe("leaf")}</div></div>
      <div class="final-confetti" aria-hidden="true"></div>
      <div class="camera-bar toolbar toolbar--float" role="toolbar" aria-label="Cámara">
        <button type="button" class="tool" data-act="spin" aria-pressed="true" aria-label="Girar automáticamente">${xe("rotate")}<span class="tool-label">360°</span></button>
        <button type="button" class="tool" data-act="zoomOut" aria-label="Alejar">${xe("zoomOut")}</button>
        <button type="button" class="tool" data-act="zoomIn" aria-label="Acercar">${xe("zoomIn")}</button>
      </div>
    </div>

    <div class="final-panel">
      <p class="eyebrow">${xe("sparkle")} Contempla tu creación</p>
      <h1 id="final-title" class="final-title">¡Tu avatar está listo!</h1>
      <p class="final-lead">Cada detalle lo decidiste tú. Gíralo, míralo con calma y elige cómo quieres llevarlo contigo.</p>

      <label class="field">
        <span class="field-label">Ponle nombre</span>
        <input class="input" id="avatarName" type="text" maxlength="18" autocomplete="off" placeholder="Tu avatar" value="${De(e)}" />
      </label>

      <details class="summary-box" open>
        <summary>Resumen de tu avatar</summary>
        <dl class="summary-list">
          ${HC(s).map(([t,n])=>`<div><dt>${De(t)}</dt><dd>${De(n)}</dd></div>`).join("")}
        </dl>
        <ul class="color-list" aria-label="Colores elegidos">${VC(s)}</ul>
      </details>

      <div class="choice-row">
        <a class="btn btn--choice" href="#/pedido">
          <span class="choice-icon">${xe("bag")}</span>
          <span class="choice-copy"><strong>Pedir mi producto</strong><span>Figura, peluche o llavero</span></span>
        </a>
        <a class="btn btn--choice" href="#/tarjeta">
          <span class="choice-icon">${xe("card")}</span>
          <span class="choice-copy"><strong>Crear tarjeta Amiibo</strong><span>Coleccionable digital para compartir</span></span>
        </a>
      </div>
      <a class="btn btn--quiet final-back" href="#/personalizar">${xe("edit")}<span>Seguir editando</span></a>
    </div>
  </section>`}function WC(s){if(aa)return;const e=pe(".final-confetti",s),t=["#7DB46C","#9ACB8A","#F2A7B8","#F6D365","#E60012"];for(let n=0;n<18;n++){const i=document.createElement("span");i.className="confetti-leaf",i.innerHTML=Eu(t[n%t.length]),e.appendChild(i),Re.fromTo(i,{x:()=>Re.utils.random(-40,40)+"%",left:Re.utils.random(10,90)+"%",y:-40,rotation:Re.utils.random(-90,90),autoAlpha:1,scale:Re.utils.random(.5,1)},{y:()=>(e.clientHeight||500)+40,rotation:"+="+Re.utils.random(120,300),x:"+="+Re.utils.random(-60,60),duration:Re.utils.random(2.6,4.2),delay:Re.utils.random(0,.8),ease:"sine.in",onComplete:()=>i.remove()})}}const XC={name:"final",async mount(s){var n;s.innerHTML=GC();const e=s;Re.from(Dt(".final-panel > *",e),{y:16,autoAlpha:0,stagger:.07,duration:.55,ease:"power2.out",delay:.15}),ln.play("success"),pe("#avatarName",e).addEventListener("input",i=>Ge.setProfile({name:i.target.value.trim()})),e.addEventListener("click",i=>{var a;const r=(a=i.target.closest("[data-act]"))==null?void 0:a.dataset.act;if(!(!r||!Wi)){if(r==="spin"){const o=Wi.setAutoRotate(!Wi.controls.autoRotate);i.target.closest("[data-act]").setAttribute("aria-pressed",o)}r==="zoomIn"&&Wi.zoom(.8),r==="zoomOut"&&Wi.zoom(1.25)}}),Wi=await qp(Ge.state);const t=pe("#finalStage",e);Wi&&e.isConnected?(await Wi.avatar.apply(Ge.state),Wi.attach(t,"final"),(n=pe(".stage-loading",t))==null||n.remove(),WC(e)):t&&(t.innerHTML='<p class="stage-fallback">La vista 3D no está disponible en este navegador, pero tu creación sigue guardada.</p>')},unmount(){Wi&&Wi.detach()}},$C=["Producto","Tus datos","Pago"];let Mt=null,Va="",_d=null;const Te={step:0,productId:"figure",qty:1,delivery:"delivery",customer:{name:"",lastName:"",email:"",phone:"",city:"Cali",address:"",store:""},payment:"card"},ql=()=>g_.find(s=>s.id===Te.productId),eh=()=>{const s=ql().price*Te.qty,e=Te.delivery==="pickup"||s>=Su.freeFrom?0:Su.cost;return{subtotal:s,shipping:e,total:s+e}};function rx(){return`<ol class="stepper" aria-label="Pasos del pedido">
    ${$C.map((s,e)=>`<li class="${e<Te.step?"is-done":""} ${e===Te.step?"is-current":""}" ${e===Te.step?'aria-current="step"':""}>
      <span class="stepper-num" aria-hidden="true">${e<Te.step?xe("check"):e+1}</span><span>${s}</span></li>`).join("")}
  </ol>`}function YC(){return`
    <h2 class="step-title">Elige cómo quieres a tu avatar</h2>
    <div class="product-options" role="radiogroup" aria-label="Producto">
      ${g_.map(s=>`
        <button type="button" class="product-opt" role="radio" data-product="${s.id}" aria-checked="${s.id===Te.productId}" tabindex="${s.id===Te.productId?0:-1}">
          <span class="product-opt-visual">${Qu(s.id,Va)}</span>
          <span class="product-opt-copy"><strong>${De(s.name)}</strong><span>${De(s.detail)}</span></span>
          <span class="product-opt-price">${Ns(s.price)}</span>
          <span class="opt-check" aria-hidden="true">${xe("check")}</span>
        </button>`).join("")}
    </div>
    <div class="avail">
      <span class="avail-dot" aria-hidden="true"></span>
      <p><strong>Disponible.</strong> Se fabrica bajo pedido a partir de tu avatar. Tiempo estimado: <span id="eta">${De(ql().days)}</span>.</p>
    </div>
    <div class="qty-row">
      <span class="field-label" id="qtyLabel">Cantidad</span>
      <div class="qty" role="group" aria-labelledby="qtyLabel">
        <button type="button" class="icon-btn" data-qty="-1" aria-label="Quitar una unidad">${xe("minus")}</button>
        <output id="qtyOut" aria-live="polite">${Te.qty}</output>
        <button type="button" class="icon-btn" data-qty="1" aria-label="Agregar una unidad">${xe("plus")}</button>
      </div>
    </div>
    <div class="step-actions">
      <a class="btn btn--quiet" href="#/listo">${xe("arrowLeft")}<span>Volver</span></a>
      <button type="button" class="btn btn--primary" data-next>Continuar</button>
    </div>`}function is(s,e,{type:t="text",autocomplete:n="",required:i=!0,value:r="",inputmode:a="",placeholder:o=""}={}){return`<label class="field" for="${s}">
    <span class="field-label">${e}${i?"":" <em>(opcional)</em>"}</span>
    <input class="input" id="${s}" name="${s}" type="${t}" value="${De(r)}" ${n?`autocomplete="${n}"`:""} ${a?`inputmode="${a}"`:""} ${o?`placeholder="${o}"`:""} ${i?'required aria-required="true"':""} aria-describedby="${s}-err" />
    <span class="field-error" id="${s}-err"></span>
  </label>`}function ax(s){const e=__[s]||[];return e.length?e.map(t=>`<option ${t===Te.customer.store?"selected":""}>${De(t)}</option>`).join(""):'<option value="">No hay tiendas en esta ciudad</option>'}function qC(){const s=Te.customer,e=Ge.session;return`
    <h2 class="step-title">Tus datos</h2>
    ${e?`<p class="session-note">${xe("user")}<span>Sesión simulada iniciada como <strong>${De(e.email)}</strong></span></p>`:""}
    <form class="form-grid" id="dataForm" novalidate>
      ${is("name","Nombre",{autocomplete:"given-name",value:s.name})}
      ${is("lastName","Apellido",{autocomplete:"family-name",value:s.lastName})}
      ${is("email","Correo",{type:"email",autocomplete:"email",value:s.email,placeholder:"nombre@correo.com"})}
      ${is("phone","Teléfono",{type:"tel",autocomplete:"tel",inputmode:"tel",value:s.phone,placeholder:"300 000 0000"})}

      <fieldset class="field field--full delivery-choice">
        <legend class="field-label">¿Cómo quieres recibirlo?</legend>
        <div class="seg" role="radiogroup" aria-label="Método de entrega">
          <button type="button" class="seg-opt" role="radio" data-delivery="delivery" aria-checked="${Te.delivery==="delivery"}">${xe("truck")}<span><strong>Entrega</strong><small>A domicilio · ${Ns(Su.cost)} (gratis desde ${Ns(Su.freeFrom)})</small></span></button>
          <button type="button" class="seg-opt" role="radio" data-delivery="pickup" aria-checked="${Te.delivery==="pickup"}">${xe("store")}<span><strong>Recogida en tienda MINISO</strong><small>Sin costo de envío</small></span></button>
        </div>
      </fieldset>

      <label class="field" for="city">
        <span class="field-label">Ciudad</span>
        <select class="input" id="city" name="city" autocomplete="address-level2">
          ${Object.keys(__).map(t=>`<option ${t===s.city?"selected":""}>${t}</option>`).join("")}
          <option ${s.city==="Otra"?"selected":""} value="Otra">Otra ciudad</option>
        </select>
      </label>

      <div class="field-slot" data-when="delivery" ${Te.delivery==="pickup"?"hidden":""}>
        ${is("address","Dirección",{autocomplete:"street-address",value:s.address,placeholder:"Calle, número, barrio"})}
      </div>
      <label class="field" for="storeSel" data-when="pickup" ${Te.delivery==="delivery"?"hidden":""}>
        <span class="field-label">Tienda</span>
        <select class="input" id="storeSel" name="store" aria-describedby="storeSel-err">${ax(s.city)}</select>
        <span class="field-error" id="storeSel-err"></span>
      </label>
    </form>
    <div class="step-actions">
      <button type="button" class="btn btn--quiet" data-prev>${xe("arrowLeft")}<span>Atrás</span></button>
      <button type="button" class="btn btn--primary" data-next>Continuar al pago</button>
    </div>`}function jC(){const s=[{id:"card",label:"Tarjeta",sub:"Crédito o débito"},{id:"pse",label:"PSE",sub:"Débito desde tu banco"},{id:"nequi",label:"Nequi",sub:"Pago con tu celular"}];return Te.delivery==="pickup"&&s.push({id:"store",label:"Pagar en tienda",sub:"Al recoger tu pedido"}),s.find(e=>e.id===Te.payment)||(Te.payment="card"),`
    <h2 class="step-title">Método de pago</h2>
    <p class="sim-note">${xe("lock")}<span>Esto es una simulación: no se realiza ningún cobro y no debes ingresar datos reales.</span></p>
    <div class="pay-methods" role="radiogroup" aria-label="Método de pago">
      ${s.map(e=>`<button type="button" class="pay-opt" role="radio" data-pay="${e.id}" aria-checked="${e.id===Te.payment}"><strong>${e.label}</strong><small>${e.sub}</small><span class="opt-check" aria-hidden="true">${xe("check")}</span></button>`).join("")}
    </div>
    <form class="form-grid pay-form" id="payForm" novalidate>${ox()}</form>
    <div class="step-actions">
      <button type="button" class="btn btn--quiet" data-prev>${xe("arrowLeft")}<span>Atrás</span></button>
      <button type="button" class="btn btn--primary btn--lg" data-finish>${xe("lock")}<span>Finalizar pago · <span data-total>${Ns(eh().total)}</span></span></button>
    </div>`}function ox(){switch(Te.payment){case"card":return`
      <div class="card-preview field--full" aria-hidden="true"><span class="cp-chip"></span><span class="cp-num" id="cpNum">•••• •••• •••• ••••</span><span class="cp-name" id="cpName">NOMBRE EN LA TARJETA</span></div>
      ${is("ccNumber","Número de tarjeta",{inputmode:"numeric",placeholder:"4242 4242 4242 4242",autocomplete:"off"}).replace('class="field"','class="field field--full"')}
      ${is("ccName","Nombre en la tarjeta",{autocomplete:"off",value:[Te.customer.name,Te.customer.lastName].join(" ").trim()}).replace('class="field"','class="field field--full"')}
      ${is("ccExp","Vence (MM/AA)",{inputmode:"numeric",placeholder:"08/29",autocomplete:"off"})}
      ${is("ccCvc","CVC",{inputmode:"numeric",placeholder:"123",autocomplete:"off"})}`;case"pse":return`
      <label class="field field--full" for="bank"><span class="field-label">Banco</span>
        <select class="input" id="bank">${Iy.map(s=>`<option>${s}</option>`).join("")}</select></label>
      <p class="field--full muted">Al finalizar, simularemos la redirección a tu banco.</p>`;case"nequi":return`${is("nequiPhone","Celular Nequi",{type:"tel",inputmode:"tel",value:Te.customer.phone,placeholder:"300 000 0000"}).replace('class="field"','class="field field--full"')}
      <p class="field--full muted">Simularemos una notificación de pago en tu celular.</p>`;default:return`<p class="field--full muted">Pagarás cuando recojas tu pedido en <strong>${De(Te.customer.store)}</strong>.</p>`}}function lx(){const s=ql(),e=eh();return`
    <div class="order-summary-card">
      <div class="os-visual">${Qu(s.id,Va)}</div>
      <h2 class="os-title">${De(s.name)} de <span data-avname>${De(Ge.profile.name||"tu avatar")}</span></h2>
      <p class="os-avail"><span class="avail-dot" aria-hidden="true"></span>Disponible · ${De(s.days)}</p>
      <dl class="os-lines">
        <div><dt>${De(s.name)} × ${Te.qty}</dt><dd>${Ns(e.subtotal)}</dd></div>
        <div><dt>${Te.delivery==="pickup"?"Recogida en tienda":"Envío"}</dt><dd>${e.shipping?Ns(e.shipping):"Gratis"}</dd></div>
        <div class="os-total"><dt>Total</dt><dd>${Ns(e.total)}</dd></div>
      </dl>
      <a class="os-edit" href="#/personalizar">${xe("edit")}<span>Editar avatar</span></a>
    </div>`}function KC(){return`
  <section class="order wrap" aria-labelledby="order-title">
    <header class="order-head">
      <p class="eyebrow">${xe("bag")} Materializa tu creación</p>
      <h1 id="order-title">Pide tu producto</h1>
      <div id="stepper">${rx()}</div>
    </header>
    <div class="order-grid">
      <div class="order-main"><div class="step-body" id="stepBody"></div></div>
      <aside class="order-aside" id="orderAside" aria-label="Resumen del pedido">${lx()}</aside>
    </div>
  </section>`}function pu(s=1){const e=pe("#stepBody",Mt);e.innerHTML=[YC,qC,jC][Te.step](),pe("#stepper",Mt).innerHTML=rx(),mu(),Re.fromTo(e,{x:24*s,autoAlpha:0},{x:0,autoAlpha:1,duration:.4,ease:"power2.out"});const t=pe(".step-title",e);t&&(t.tabIndex=-1,t.focus({preventScroll:!0})),Te.step===2&&Te.payment==="card"&&ux()}function mu(){const s=pe("#orderAside",Mt);s&&(s.innerHTML=lx());const e=pe("[data-total]",Mt);e&&(e.textContent=Ns(eh().total))}const ZC={name:s=>s.length>=2||"Escribe tu nombre.",lastName:s=>s.length>=2||"Escribe tu apellido.",email:s=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)||"Revisa el formato del correo (nombre@correo.com).",phone:s=>s.replace(/\D/g,"").length>=7||"El teléfono debe tener al menos 7 dígitos.",address:s=>s.length>=5||"Escribe una dirección de entrega.",ccNumber:s=>s.replace(/\D/g,"").length>=15||"El número debe tener 15 o 16 dígitos.",ccName:s=>s.length>=3||"Escribe el nombre como aparece en la tarjeta.",ccExp:s=>/^(0[1-9]|1[0-2])\/\d{2}$/.test(s)||"Usa el formato MM/AA.",ccCvc:s=>/^\d{3,4}$/.test(s)||"El CVC tiene 3 o 4 dígitos.",nequiPhone:s=>s.replace(/\D/g,"").length===10||"El celular debe tener 10 dígitos."};function cx(s){let e=null;return s.forEach(t=>{const n=pe("#"+t,Mt);if(!n||n.closest("[hidden]"))return;const i=ZC[t](n.value.trim()),r=pe("#"+t+"-err",Mt),a=i===!0;n.setAttribute("aria-invalid",!a),r&&(r.textContent=a?"":i),!a&&!e&&(e=n)}),e&&(e.focus(),Re.fromTo(e,{x:-6},{x:0,duration:.4,ease:"elastic.out(1, 0.3)"}),ln.play("soft")),!e}function vd(){const s=Te.customer;["name","lastName","email","phone","address"].forEach(t=>{const n=pe("#"+t,Mt);n&&(s[t]=n.value.trim())}),s.city=pe("#city",Mt).value;const e=pe("#storeSel",Mt);s.store=e?e.value:""}function JC(s){if(Ge.session)return s();_d||(_d=Hu({className:"modal--login",label:"Inicio de sesión",html:`
        <button type="button" class="icon-btn modal-close" data-close aria-label="Cerrar">${xe("close")}</button>
        <div class="login-choice">
          <p class="modal-kicker">Antes de continuar</p>
          <h2 class="modal-title">¿Tienes cuenta MINISO?</h2>
          <p class="muted">Inicia sesión para autocompletar tus datos o continúa como invitado. Ambos caminos funcionan igual.</p>
          <div class="login-actions">
            <button type="button" class="btn btn--primary btn--block" data-login>${xe("user")}<span>Iniciar sesión con MINISO</span></button>
            <button type="button" class="btn btn--secondary btn--block" data-guest>Continuar sin iniciar sesión</button>
          </div>
        </div>
        <form class="login-form" hidden novalidate>
          <p class="modal-kicker">Cuenta MINISO (simulada)</p>
          <h2 class="modal-title">Iniciar sesión</h2>
          <label class="field" for="lgEmail"><span class="field-label">Correo</span>
            <input class="input" id="lgEmail" type="email" autocomplete="off" placeholder="nombre@correo.com" aria-describedby="lgEmail-err" /><span class="field-error" id="lgEmail-err"></span></label>
          <label class="field" for="lgPass"><span class="field-label">Contraseña</span>
            <input class="input" id="lgPass" type="password" autocomplete="off" aria-describedby="lgPass-err" /><span class="field-error" id="lgPass-err"></span></label>
          <p class="sim-note">${xe("lock")}<span>Formulario ficticio: no se conecta con ninguna cuenta real.</span></p>
          <div class="login-actions">
            <button type="submit" class="btn btn--primary btn--block">Entrar</button>
            <button type="button" class="btn btn--quiet btn--block" data-back>Volver</button>
          </div>
        </form>`}));const e=_d,t=pe(".login-choice",e),n=pe(".login-form",e);t.hidden=!1,n.hidden=!0,e.onclick=i=>{i.target.closest("[data-close]")&&as(e),i.target.closest("[data-guest]")&&as(e,s),i.target.closest("[data-login]")&&(t.hidden=!0,n.hidden=!1,Re.from(n,{x:20,autoAlpha:0,duration:.3}),pe("#lgEmail",e).focus()),i.target.closest("[data-back]")&&(n.hidden=!0,t.hidden=!1,pe("[data-login]",e).focus())},n.onsubmit=i=>{i.preventDefault();const r=pe("#lgEmail",e).value.trim(),a=pe("#lgPass",e).value,o=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(r),l=a.length>=4;if(pe("#lgEmail-err",e).textContent=o?"":"Escribe un correo válido.",pe("#lgPass-err",e).textContent=l?"":"Mínimo 4 caracteres (cualquier texto sirve).",pe("#lgEmail",e).setAttribute("aria-invalid",!o),pe("#lgPass",e).setAttribute("aria-invalid",!l),!o)return pe("#lgEmail",e).focus();if(!l)return pe("#lgPass",e).focus();const c=r.split("@")[0].replace(/[._\d-]+/g," ").trim();Ge.session={email:r},Te.customer.email||(Te.customer.email=r),!Te.customer.name&&c&&(Te.customer.name=c.charAt(0).toUpperCase()+c.slice(1).split(" ")[0]),Ii("Sesión iniciada (simulación)",{iconName:"user"}),as(e,s)},Vu(e)}function QC(){var c;const s={card:["ccNumber","ccName","ccExp","ccCvc"],nequi:["nequiPhone"]}[Te.payment]||[];if(!cx(s))return;let t={card:"Tarjeta",pse:"PSE · "+(((c=pe("#bank",Mt))==null?void 0:c.value)||""),nequi:"Nequi",store:"Pago en tienda"}[Te.payment];Te.payment==="card"&&(t+=" terminada en "+pe("#ccNumber",Mt).value.replace(/\D/g,"").slice(-4));const n=document.createElement("div");n.className="pay-loading",n.setAttribute("role","status"),n.innerHTML=`<div class="pay-loading-card"><span class="spinner-leaf">${xe("leaf")}</span><p>${Te.payment==="pse"?"Conectando con tu banco…":"Procesando tu pago…"}</p><small>Simulación, sin cargos reales</small></div>`,document.body.appendChild(n),Re.from(n,{autoAlpha:0,duration:.25}),Re.to(pe(".spinner-leaf",n),{rotation:360,repeat:-1,duration:1.4,ease:"none"});const i=Date.now(),r="MXAC-"+x_(i+Te.customer.email).toString(36).toUpperCase().slice(0,6).padStart(6,"0"),a=ql(),o=eh(),l=Te.customer;Ge.setOrder({number:r,createdAt:i,product:{id:a.id,name:a.name,price:a.price,days:a.days},qty:Te.qty,...o,delivery:Te.delivery,deliveryLabel:Te.delivery==="pickup"?`Recogida en ${l.store} (${l.city})`:`Entrega en ${l.address}, ${l.city==="Otra"?"tu ciudad":l.city}`,customer:{name:l.name,lastName:l.lastName,email:l.email,phone:l.phone},payment:t,avatar:Ge.state,avatarName:Ge.profile.name||"Tu avatar"}),setTimeout(()=>{Re.to(n,{autoAlpha:0,duration:.25,onComplete:()=>n.remove()}),Gl("/confirmacion")},1700)}function ux(){const s=pe("#ccNumber",Mt),e=pe("#ccExp",Mt),t=pe("#ccName",Mt),n=pe("#ccCvc",Mt);s.addEventListener("input",()=>{const r=s.value.replace(/\D/g,"").slice(0,16);s.value=r.replace(/(.{4})/g,"$1 ").trim(),pe("#cpNum",Mt).textContent=(r+"•".repeat(16-r.length)).replace(/(.{4})/g,"$1 ").trim()}),e.addEventListener("input",()=>{const r=e.value.replace(/\D/g,"").slice(0,4);e.value=r.length>2?r.slice(0,2)+"/"+r.slice(2):r}),n.addEventListener("input",()=>{n.value=n.value.replace(/\D/g,"").slice(0,4)});const i=()=>{pe("#cpName",Mt).textContent=(t.value||"Nombre en la tarjeta").toUpperCase()};t.addEventListener("input",i),i()}function e2(s){const e=s.target,t=e.closest("[data-product]");if(t){Te.productId=t.dataset.product,Dt("[data-product]",Mt).forEach(a=>{const o=a===t;a.setAttribute("aria-checked",o),a.tabIndex=o?0:-1}),pe("#eta",Mt).textContent=ql().days,mu(),Re.fromTo(pe(".os-visual",Mt),{scale:.92},{scale:1,duration:.5,ease:"back.out(2)"}),ln.play("pop");return}const n=e.closest("[data-qty]");if(n){Te.qty=Math.min(5,Math.max(1,Te.qty+Number(n.dataset.qty))),pe("#qtyOut",Mt).textContent=Te.qty,mu();return}const i=e.closest("[data-delivery]");if(i){vd(),Te.delivery=i.dataset.delivery,Dt("[data-delivery]",Mt).forEach(o=>o.setAttribute("aria-checked",o===i)),Dt("[data-when]",Mt).forEach(o=>{o.hidden=o.dataset.when!==Te.delivery});const a=pe(`[data-when="${Te.delivery}"]`,Mt);a&&Re.from(a,{y:-6,autoAlpha:0,duration:.3}),mu(),ln.play("tab");return}const r=e.closest("[data-pay]");if(r){Te.payment=r.dataset.pay,Dt("[data-pay]",Mt).forEach(o=>o.setAttribute("aria-checked",o===r));const a=pe("#payForm",Mt);a.innerHTML=ox(),Re.from(a,{y:8,autoAlpha:0,duration:.3}),Te.payment==="card"&&ux(),ln.play("tab");return}if(e.closest("[data-prev]"))return Te.step===1&&vd(),Te.step=Math.max(0,Te.step-1),pu(-1);if(e.closest("[data-next]")){if(Te.step===0)return JC(()=>{Te.step=1,pu()});if(Te.step===1){const a=["name","lastName","email","phone"];return Te.delivery==="delivery"&&a.push("address"),cx(a)?(vd(),Te.delivery==="pickup"&&!Te.customer.store?(pe("#storeSel-err",Mt).textContent="Elige otra ciudad: aquí aún no hay tiendas participantes.",pe("#city",Mt).focus()):(Te.step=2,pu())):void 0}}e.closest("[data-finish]")&&QC()}function t2(s){if(s.target.id==="city"){Te.customer.city=s.target.value,Te.customer.store="";const e=pe("#storeSel",Mt);e&&(e.innerHTML=ax(s.target.value),pe("#storeSel-err",Mt).textContent="")}}function n2(s){const e=s.target.closest('[role="radio"]');if(!e||!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(s.key))return;s.preventDefault();const t=Dt('[role="radio"]',e.parentElement),n=t.indexOf(e)+(s.key==="ArrowRight"||s.key==="ArrowDown"?1:-1),i=t[(n+t.length)%t.length];i.focus(),i.click()}const i2={name:"order",async mount(s){Mt=s,Te.step=0,Va="",s.innerHTML=KC(),pu(),s.addEventListener("click",e2),s.addEventListener("change",t2),s.addEventListener("keydown",n2),Va=await bo(Ge.state,{width:360,height:360,framing:"portrait"})||"",Mt&&Va&&Dt(".pv-img",Mt).forEach(e=>{e.src=Va})},unmount(){Mt=null}};function s2(){return`<section class="confirm wrap confirm--empty">
    <h1>Aún no tienes pedidos</h1>
    <p class="muted">Crea tu avatar y pide tu producto para ver aquí la confirmación.</p>
    <a class="btn btn--primary" href="#/personalizar">Personalizar mi avatar</a>
  </section>`}function r2(s){const e=new Date(s.createdAt).toLocaleDateString("es-CO",{day:"numeric",month:"long",year:"numeric"});return`
  <section class="confirm wrap" aria-labelledby="confirm-title">
    <div class="confirm-hero">
      <span class="confirm-badge" aria-hidden="true">${xe("check")}</span>
      <h1 id="confirm-title">¡Tu pedido está listo!</h1>
      <p class="muted">Te enviamos (de mentira) la confirmación a <strong>${De(s.customer.email)}</strong>.</p>
      <p class="order-number">Pedido <strong>${De(s.number)}</strong></p>
    </div>

    <div class="confirm-grid">
      <div class="confirm-visual">
        ${Qu(s.product.id)}
        <p class="confirm-caption">${De(s.product.name)} de <strong>${De(s.avatarName)}</strong></p>
      </div>
      <div class="confirm-details">
        <h2 class="sr-only">Resumen del pedido</h2>
        <dl class="os-lines os-lines--big">
          <div><dt>Producto</dt><dd>${De(s.product.name)} × ${s.qty}</dd></div>
          <div><dt>Avatar</dt><dd class="dd-avatar"><img class="confirm-mini" alt="" />${De(s.avatarName)}</dd></div>
          <div><dt>${s.delivery==="pickup"?"Recogida":"Entrega"}</dt><dd>${De(s.deliveryLabel)}</dd></div>
          <div><dt>Tiempo estimado</dt><dd>${De(s.product.days)}</dd></div>
          <div><dt>Pago</dt><dd>${De(s.payment)}</dd></div>
          <div><dt>Fecha</dt><dd>${De(e)}</dd></div>
          <div class="os-total"><dt>Total</dt><dd>${Ns(s.total)}</dd></div>
        </dl>
        <div class="choice-row choice-row--compact">
          <a class="btn btn--choice" href="#/tarjeta"><span class="choice-icon">${xe("card")}</span><span class="choice-copy"><strong>Crear tarjeta Amiibo</strong><span>Tu coleccionable digital</span></span></a>
          <button type="button" class="btn btn--choice" data-finish><span class="choice-icon">${xe("check")}</span><span class="choice-copy"><strong>Finalizar</strong><span>Volver al inicio</span></span></button>
        </div>
      </div>
    </div>
  </section>`}const a2={name:"confirm",async mount(s){const e=Ge.order;if(!e){s.innerHTML=s2();return}s.innerHTML=r2(e),ln.play("success"),Re.timeline({delay:.1}).from(pe(".confirm-badge",s),{scale:0,rotation:-40,duration:.7,ease:"back.out(2)"}).from(Dt(".confirm-hero > :not(.confirm-badge)",s),{y:12,autoAlpha:0,stagger:.08,duration:.45},"-=0.3").from(Dt(".confirm-visual, .confirm-details",s),{y:20,autoAlpha:0,stagger:.12,duration:.55},"-=0.2"),pe("[data-finish]",s).addEventListener("click",()=>{Gl("/"),Ii("¡Gracias por crear con nosotros!",{iconName:"leaf"})});const n=await bo(e.avatar,{width:360,height:360,framing:"portrait"});n&&Dt(".pv-img, .confirm-mini",s).forEach(i=>{i.src=n})}},Qn=750,$o=1050,Yc="#3A2E28",xd="#E60012",o2="#FFFBF2",l2="#C99A63";function Es(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+n,t,r),s.closePath()}function _g(s,e,t,n,i,r,a=1){s.save(),s.translate(e,t),s.rotate(i),s.scale(n,n),s.globalAlpha=a,s.fillStyle=r,s.beginPath(),s.moveTo(0,-20),s.bezierCurveTo(14,-10,14,10,0,20),s.bezierCurveTo(-14,10,-14,-10,0,-20),s.fill(),s.strokeStyle="rgba(255,255,255,.6)",s.lineWidth=2,s.beginPath(),s.moveTo(0,-14),s.lineTo(0,16),s.stroke(),s.restore()}function c2(s){let e=s||1;return()=>((e=Math.imul(e^e>>>15,2246822507)^Math.imul(e^e>>>13,3266489909))>>>0)/4294967296}function u2(s){return new Promise(e=>{if(!s)return e(null);const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=s})}function jp(s){return String(x_(JSON.stringify(s))%1e5).padStart(5,"0")}async function h2(s){await Promise.all([document.fonts.load('800 60px "Baloo 2"'),document.fonts.load('700 30px "Nunito"'),document.fonts.load('400 40px "Archivo Black"')]).catch(()=>{});const e=$a.themes.find(x=>x.id===s.theme)||$a.themes[0],t=document.createElement("canvas");t.width=Qn,t.height=$o;const n=t.getContext("2d"),i=jp(s.avatar),r=c2(Number(i)+e.id.length);Es(n,0,0,Qn,$o,44),n.fillStyle=o2,n.fill(),n.save(),Es(n,0,0,Qn,$o,44),n.clip(),n.strokeStyle=e.leaf,n.globalAlpha=.35,n.setLineDash([10,10]),n.lineWidth=3,Es(n,16,16,Qn-32,$o-32,34),n.stroke(),n.setLineDash([]),n.globalAlpha=1;const a=40,o=108,l=Qn-80,c=600;n.save(),Es(n,a,o,l,c,30),n.clip();const u=n.createLinearGradient(0,o,0,o+c);u.addColorStop(0,e.from),u.addColorStop(1,e.to),n.fillStyle=u,n.fillRect(a,o,l,c),n.fillStyle=e.id==="night"?"#FFF8E1":"#FFE9A8",n.globalAlpha=.9,n.beginPath(),n.arc(a+l-110,o+110,54,0,Math.PI*2),n.fill(),n.globalAlpha=1;for(let x=0;x<7;x++){const w=a+30+r()*(l-60),A=o+30+r()*180;n.fillStyle="rgba(255,255,255,.7)",e.id==="night"?(n.beginPath(),n.arc(w,A,3+r()*3,0,Math.PI*2),n.fill()):(n.beginPath(),n.ellipse(w,A,34+r()*20,12,0,0,Math.PI*2),n.fill())}const h=(x,w,A)=>{n.fillStyle=w,n.beginPath(),n.moveTo(a,o+c),n.lineTo(a,x);for(let M=0;M<=l;M+=20)n.lineTo(a+M,x+Math.sin(M/90+A)*18);n.lineTo(a+l,o+c),n.fill()};h(o+c-190,e.leaf+"55",1),h(o+c-130,e.leaf+"99",3),h(o+c-70,e.leaf,5);for(let x=0;x<10;x++)_g(n,a+r()*l,o+40+r()*(c-80),.6+r()*.6,r()*6,x%3?e.leaf:xd,x%3?.35:.2);n.fillStyle="rgba(58,46,40,.16)",n.beginPath(),n.ellipse(a+l/2,o+c-88,150,22,0,0,Math.PI*2),n.fill();const d=await u2(s.portrait);d&&n.drawImage(d,a+(l-560)/2,o+c-560-64,560,560),n.restore(),n.strokeStyle="rgba(255,255,255,.9)",n.lineWidth=6,Es(n,a,o,l,c,30),n.stroke(),n.textBaseline="middle",n.fillStyle=xd,n.font='400 34px "Archivo Black", "Arial Black", sans-serif',n.fillText("MINISO",52,62);const f=n.measureText("MINISO").width;n.fillStyle=Yc,n.font='700 28px "Nunito", sans-serif',n.fillText("×",52+f+12,62),n.font='800 32px "Baloo 2", sans-serif',n.fillStyle="#2F5D46",n.fillText("Animal Crossing",52+f+40,64),n.textAlign="right",n.font='700 22px "Nunito", sans-serif',n.fillStyle=Yc,n.globalAlpha=.7,n.fillText($a.series.toUpperCase(),Qn-52,62),n.globalAlpha=1,n.textAlign="left";const m=o+c-34;n.fillStyle="rgba(58,46,40,.15)",Es(n,92,m+8,Qn-184,96,48),n.fill(),n.fillStyle=l2,Es(n,92,m,Qn-184,96,48),n.fill(),n.fillStyle="rgba(255,255,255,.18)",Es(n,104,m+8,Qn-208,30,15),n.fill(),n.fillStyle="#FFFFFF",n.textAlign="center";let _=60;const p=(s.name||"Tu avatar").slice(0,18);do n.font=`800 ${_}px "Baloo 2", sans-serif`,_-=2;while(n.measureText(p).width>Qn-260&&_>30);n.fillText(p,Qn/2,m+52);const g=[["Personalidad",s.personality],["Elemento favorito",s.favorite]];let b=m+150;g.forEach(([x,w])=>{n.textAlign="left",n.fillStyle=e.leaf,n.beginPath(),n.arc(84,b,10,0,Math.PI*2),n.fill(),n.fillStyle=Yc,n.globalAlpha=.65,n.font='700 24px "Nunito", sans-serif',n.fillText(x,108,b),n.globalAlpha=1,n.textAlign="right",n.font='800 32px "Baloo 2", sans-serif',n.fillText(w,Qn-64,b+2),n.strokeStyle="rgba(58,46,40,.12)",n.lineWidth=2,n.setLineDash([4,8]),n.beginPath(),n.moveTo(64,b+32),n.lineTo(Qn-64,b+32),n.stroke(),n.setLineDash([]),b+=70});const y=$o-70;return n.fillStyle=xd,Es(n,52,y-26,190,52,26),n.fill(),n.fillStyle="#FFFFFF",n.textAlign="center",n.font='800 26px "Baloo 2", sans-serif',n.fillText("Hecho por ti",147,y+2),n.textAlign="right",n.fillStyle=Yc,n.globalAlpha=.7,n.font='700 22px "Nunito", sans-serif',n.fillText(`N.º ${i} · ${s.date||""}`,Qn-56,y),n.globalAlpha=1,_g(n,272,y,.8,.6,e.leaf,.8),n.restore(),t}let Kn=null,hx=null,Fu="",Ir=null,jf=0,Yo=null,Hr=!1,yd=null,bd=null;function dx(){return bd||(bd=window.claude&&typeof window.claude.use=="function"?window.claude.use("downloads").catch(()=>null):Promise.resolve(null)),bd}function d2(s,e,t){const n=Ge.profile[e];return`<fieldset class="opt-group">
    <legend>${t}</legend>
    <div class="chip-row" role="radiogroup" aria-label="${t}">
      ${s.map(i=>`<button type="button" class="chip" role="radio" data-profile="${e}" data-value="${De(i)}" aria-checked="${i===n}" tabindex="${i===n?0:-1}">${De(i)}</button>`).join("")}
    </div>
  </fieldset>`}function f2(){const s=Ge.profile;return`
  <section class="cardpage wrap" aria-labelledby="card-title">
    <div class="card-stage">
      <div class="card3d" id="card3d">
        <div class="card-face card-front">
          <img id="cardImg" alt="Tarjeta coleccionable de ${De(s.name||"tu avatar")}" />
          <span class="card-shine" aria-hidden="true"></span>
          <div class="card-generating" aria-hidden="true"><span class="spinner-leaf">${xe("leaf")}</span><span>Generando tu tarjeta…</span></div>
        </div>
        <div class="card-face card-back" aria-hidden="true">
          <div class="card-back-inner">
            ${Cl("lockup--stack")}
            <p>Esta tarjeta guarda una creación única.</p>
            <span class="card-back-serial">N.º ${jp(Ge.state)}</span>
          </div>
        </div>
      </div>
      <button type="button" class="chip-btn card-flip" data-flip aria-pressed="false">${xe("rotate")}<span>Voltear tarjeta</span></button>
    </div>

    <div class="card-panel">
      <p class="eyebrow">${xe("card")} Tarjeta coleccionable</p>
      <h1 id="card-title">Crea tu tarjeta Amiibo</h1>
      <p class="muted">Se generó a partir de tu avatar. Ajusta sus datos y el fondo: la tarjeta cambia al instante.</p>

      <label class="field"><span class="field-label">Nombre</span>
        <input class="input" id="cardName" maxlength="18" autocomplete="off" placeholder="Tu avatar" value="${De(s.name)}" /></label>
      ${d2($a.personalities,"personality","Personalidad")}
      <label class="field"><span class="field-label">Elemento favorito</span>
        <select class="input" id="cardFav">${$a.favorites.map(e=>`<option ${e===s.favorite?"selected":""}>${De(e)}</option>`).join("")}</select></label>
      <fieldset class="opt-group">
        <legend>Fondo</legend>
        <div class="theme-row" role="radiogroup" aria-label="Fondo">
          ${$a.themes.map(e=>`<button type="button" class="theme-opt" role="radio" data-theme="${e.id}" aria-checked="${e.id===s.theme}" tabindex="${e.id===s.theme?0:-1}" style="--from:${e.from};--to:${e.to};--leaf:${e.leaf}"><span class="theme-swatch" aria-hidden="true"></span><span>${e.name}</span></button>`).join("")}
        </div>
      </fieldset>

      <div class="ready" id="ready" hidden>
        <h2 class="ready-title">¡Tu tarjeta está lista!</h2>
        <div class="choice-row choice-row--compact">
          <button type="button" class="btn btn--choice" data-share><span class="choice-icon">${xe("share")}</span><span class="choice-copy"><strong>Compartir</strong><span>Descárgala o compártela</span></span></button>
          <button type="button" class="btn btn--choice" data-finish><span class="choice-icon">${xe("check")}</span><span class="choice-copy"><strong>Finalizar</strong><span>Volver al inicio</span></span></button>
        </div>
      </div>
      <a class="btn btn--quiet" href="#/listo">${xe("arrowLeft")}<span>Volver a mi avatar</span></a>
    </div>
  </section>`}async function Hl(s=!1){const e=++jf,t=Ge.profile,n=new Date().toLocaleDateString("es-CO",{day:"numeric",month:"short",year:"numeric"}),i=await h2({portrait:hx,name:t.name||"Tu avatar",personality:t.personality,favorite:t.favorite,theme:t.theme,avatar:Ge.state,date:n});if(e!==jf||!Kn)return;Fu=i.toDataURL("image/png"),i.toBlob(a=>{Ir=a},"image/png");const r=pe("#cardImg",Kn);r.src=Fu,r.alt=`Tarjeta coleccionable de ${t.name||"tu avatar"}: personalidad ${t.personality}, elemento favorito ${t.favorite}`,s&&p2()}function p2(){const s=pe("#card3d",Kn);Re.timeline().to(pe(".card-generating",Kn),{autoAlpha:0,duration:.3}).fromTo(s,{rotationY:-180,scale:.8,y:30},{rotationY:0,scale:1,y:0,duration:aa?.01:1.2,ease:"power3.out"},0).fromTo(pe(".card-shine",Kn),{backgroundPosition:"-150% 0"},{backgroundPosition:"250% 0",duration:1.2,ease:"power2.inOut"},.7).add(()=>{const t=pe("#ready",Kn);t.hidden=!1,Re.from(t,{y:14,autoAlpha:0,duration:.5,ease:"back.out(1.6)"}),ln.play("success")},"-=0.3")}function m2(){const s=pe(".card-stage",Kn),e=pe("#card3d",Kn);if(aa||!window.matchMedia("(hover: hover)").matches)return()=>{};const t=i=>{const r=s.getBoundingClientRect(),a=(i.clientX-r.left)/r.width-.5,o=(i.clientY-r.top)/r.height-.5;Re.to(e,{rotationY:(Hr?180:0)+a*14,rotationX:-o*12,duration:.6,ease:"power2.out"}),pe(".card-shine",Kn).style.setProperty("--mx",`${(a+.5)*100}%`)},n=()=>Re.to(e,{rotationY:Hr?180:0,rotationX:0,duration:.8,ease:"power3.out"});return s.addEventListener("pointermove",t),s.addEventListener("pointerleave",n),()=>{s.removeEventListener("pointermove",t),s.removeEventListener("pointerleave",n)}}function Md(){return`tarjeta-${(Ge.profile.name||"mi-avatar").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-")}-miniso-x-animal-crossing.png`}function g2(){if(!Yo){const n=[{id:"instagram",label:"Instagram",short:"IG"},{id:"facebook",label:"Facebook",short:"f"},{id:"x",label:"X",short:"X"},{id:"whatsapp",label:"WhatsApp",short:"WA"}];Yo=Hu({className:"modal--share",label:"Compartir tarjeta",html:`
        <button type="button" class="icon-btn modal-close" data-close aria-label="Cerrar">${xe("close")}</button>
        <div class="share-grid">
          <img class="share-preview" alt="Vista previa de tu tarjeta" />
          <div>
            <p class="modal-kicker">Lista para compartir</p>
            <h2 class="modal-title">Comparte tu tarjeta</h2>
            <p class="muted">Descárgala como imagen o elige una red. Es una simulación: no se publicará nada.</p>
            <div class="share-actions">
              <a class="btn btn--primary btn--block" data-download download>${xe("download")}<span>Descargar imagen</span></a>
              <button type="button" class="btn btn--secondary btn--block" data-native hidden>${xe("share")}<span>Compartir desde el dispositivo</span></button>
            </div>
            <p class="share-label">Redes sociales (simulado)</p>
            <div class="social-row">
              ${n.map(i=>`<button type="button" class="social-btn social-btn--${i.id}" data-social="${i.label}"><span class="social-glyph" aria-hidden="true">${i.short}</span><span>${i.label}</span></button>`).join("")}
            </div>
            <button type="button" class="chip-btn" data-copy>${xe("link")}<span>Copiar enlace</span></button>
          </div>
        </div>`}),Yo.addEventListener("click",async i=>{if(i.target.closest("[data-close]"))return as(Yo);if(i.target.closest("[data-download]")){window.claude&&i.preventDefault();const a=await Promise.race([dx(),new Promise(o=>setTimeout(()=>o(null),300))]);if(a&&Ir)try{await a.save({filename:Md(),data:Ir}),Ii("Imagen guardada",{iconName:"download"})}catch(o){o&&o.code!=="declined"&&Ii("No fue posible descargar la imagen aquí",{iconName:"close"})}else window.claude||Ii("Imagen descargada",{iconName:"download"});return}const r=i.target.closest("[data-social]");if(r){const a=r;a.classList.add("is-sent"),Re.fromTo(a,{scale:.9},{scale:1,duration:.5,ease:"back.out(3)"}),ln.play("pop"),Ii(`Simulación: tu tarjeta quedó lista para ${a.dataset.social}. No se publicó nada.`,{iconName:"share",duration:3200});return}if(i.target.closest("[data-copy]")){const a=`https://miniso.com.co/animal-crossing/tarjeta/${jp(Ge.state)}`;try{await navigator.clipboard.writeText(a),Ii("Enlace ficticio copiado")}catch{Ii(a,{iconName:"link",duration:4e3})}return}if(i.target.closest("[data-native]")&&Ir){const a=new File([Ir],Md(),{type:"image/png"});try{await navigator.share({files:[a],title:"Mi tarjeta MINISO × Animal Crossing"})}catch{}}})}const s=Yo;pe(".share-preview",s).src=Fu;const e=pe("[data-download]",s);e.href=Fu,e.download=Md();const t=pe("[data-native]",s);t.hidden=!(Ir&&navigator.canShare&&navigator.canShare({files:[new File([Ir],"x.png",{type:"image/png"})]})),Dt(".social-btn",s).forEach(n=>n.classList.remove("is-sent")),Vu(s)}let vg=null;function _2(s){s.target.id==="cardName"&&(Ge.setProfile({name:s.target.value.trim()}),clearTimeout(vg),vg=setTimeout(()=>Hl(),180))}function v2(s){s.target.id==="cardFav"&&(Ge.setProfile({favorite:s.target.value}),Hl())}function x2(s){const e=s.target.closest("[data-profile]");if(e)return Ge.setProfile({[e.dataset.profile]:e.dataset.value}),Dt(`[data-profile="${e.dataset.profile}"]`,Kn).forEach(i=>{const r=i===e;i.setAttribute("aria-checked",r),i.tabIndex=r?0:-1}),ln.play("pop"),Hl();const t=s.target.closest("[data-theme]");if(t)return Ge.setProfile({theme:t.dataset.theme}),Dt("[data-theme]",Kn).forEach(i=>{const r=i===t;i.setAttribute("aria-checked",r),i.tabIndex=r?0:-1}),ln.play("pop"),Hl();const n=s.target.closest("[data-flip]");if(n){Hr=!Hr,n.setAttribute("aria-pressed",Hr),Re.to(pe("#card3d",Kn),{rotationY:Hr?180:0,rotationX:0,duration:.9,ease:"power3.inOut"}),ln.play("soft");return}if(s.target.closest("[data-share]"))return g2();s.target.closest("[data-finish]")&&(Gl("/"),Ii("¡Gracias por crear con nosotros!",{iconName:"leaf"}))}function y2(s){const e=s.target.closest('[role="radio"]');if(!e||!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(s.key))return;s.preventDefault();const t=Dt('[role="radio"]',e.parentElement),n=t.indexOf(e)+(s.key==="ArrowRight"||s.key==="ArrowDown"?1:-1),i=t[(n+t.length)%t.length];i.focus(),i.click()}const b2={name:"card",async mount(s){Kn=s,Hr=!1,s.innerHTML=f2(),Re.from(Dt(".card-panel > *",s),{y:14,autoAlpha:0,stagger:.06,duration:.5,delay:.1}),s.addEventListener("input",_2),s.addEventListener("change",v2),s.addEventListener("click",x2),s.addEventListener("keydown",y2),yd=m2(),dx(),hx=await bo(Ge.state,{width:620,height:620,framing:"portrait",angle:.3}),Kn&&await Hl(!0)},unmount(){jf++,yd&&yd(),Kn=null}},M2={name:"info",mount(s,e){const t=gm[e]||gm.marca;s.innerHTML=`
      <section class="info wrap" aria-labelledby="info-title">
        <div class="info-card">
          <span class="info-leaf" aria-hidden="true">${Eu("#9ACB8A")}</span>
          <p class="eyebrow">MINISO</p>
          <h1 id="info-title">${De(t.title)}</h1>
          <p>${De(t.body)}</p>
          <a class="btn btn--primary" href="#/personalizar">${xe("sparkle")}<span>Personalizar mi avatar</span></a>
        </div>
        <nav class="info-nav" aria-label="Otras páginas">
          ${pp.map(n=>`<a href="#/info/${n.id}" ${n.id===e?'aria-current="page"':""}>${De(n.label)}</a>`).join("")}
        </nav>
      </section>`}};document.title=m_.title;aa&&Re.globalTimeline.timeScale(4);By(document.getElementById("site-header"));zy(document.getElementById("site-footer"));ra("/",PC);ra("/personalizar",zC);ra("/listo",XC);ra("/pedido",i2);ra("/confirmacion",a2);ra("/tarjeta",b2);ra("/info",M2);Uy(document.getElementById("app"));
