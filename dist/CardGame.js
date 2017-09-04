!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CardGame=e():t.CardGame=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return d.get(this)}function u(){return v.get(this)}function o(t){if(!(t&&(t instanceof y.default||t.constructor instanceof y.default)))throw new Error("parent of Card can only be an instance of CardSet");this.parent&&this.parent.remove(this),g.set(this,t)}function a(){return u.call(this).value.index}function s(){return i.call(this).key}function c(){return u.call(this).key}function f(){return i.call(this).value}function l(){var t;(t=_.get(this)).emit.apply(t,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e._getSuit=i,e._getNumber=u,e._setParent=o;var p=n(1),y=function(t){return t&&t.__esModule?t:{default:t}}(p),d=new WeakMap,v=new WeakMap,g=new WeakMap,m=new WeakMap,_=new WeakMap,b=function(){function t(e,n,i,u){r(this,t),d.set(this,u.suits.get(e)),v.set(this,u.numbers.get(n)),m.set(this,i),_.set(this,u),l.call(this,"card:create",this)}return h(t,[{key:"parent",get:function(){return g.get(this)}},{key:"deck",get:function(){return m.get(this)}}],[{key:"compare",value:function(t,e,n){return n({sameSuit:s.call(t)===s.call(e),sameSuitGroup:f.call(t)===f.call(e),sameNumber:c.call(t)===c.call(t),numberDiff:a.call(t)-a.call(e)})}}]),h(t,[{key:"isSameSuit",value:function(e){return t.compare(this,e,function(t){return t.sameSuit})}},{key:"isSameSuitGroup",value:function(e){return t.compare(this,e,function(t){return t.sameSuitGroup})}},{key:"isDiff",value:function(e,n){return"number"==typeof n&&(n=function(t){return t===n}),t.compare(this,e,function(t){var e=t.numberDiff;return n(e)})}},{key:"isSameNumber",value:function(t){return this.isDiff(t,0)}},{key:"isGreaterThan",value:function(t){return this.isDiff(t,function(t){return t>0})}},{key:"isLessThan",value:function(t){return this.isDiff(t,function(t){return t<0})}},{key:"isPlusOne",value:function(t){return this.isDiff(t,1)}},{key:"isMinusOne",value:function(t){return this.isDiff(t,-1)}},{key:"toString",value:function(){return"Card {"+s.call(this)+", "+c.call(this)+"}"}}]),t}();e.default=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(){return d.get(this)}function o(){return v.get(this)}function a(){return g.get(this)}function s(t){for(var e,n,r=arguments.length,i=Array(r>1?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];(e=o.call(this)).emit.apply(e,[t,this].concat(i)),(n=a.call(this)).emit.apply(n,["cardSet:"+t,this].concat(i))}function c(){console.log(u.call(this).map(function(t){return[l._getSuit.call(t).key,l._getNumber.call(t).key]}))}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e._emit=s;var l=n(0),h=r(l),p=n(2),y=r(p),d=new WeakMap,v=new WeakMap,g=new WeakMap,m=function(){function t(e,n){i(this,t),g.set(this,n),v.set(this,new y.default),d.set(this,[]),Array.isArray(e)&&this.add(e)}return f(t,[{key:"topCard",get:function(){var t=u.call(this);return t[t.length]}},{key:"length",get:function(){return u.call(this).length}}]),f(t,[{key:"add",value:function(t){var e=this;return t instanceof h.default&&(t=[t]),t.forEach(function(t){t instanceof h.default&&(u.call(e).push(t),l._setParent.call(t,e),s.call(e,"addCard",t))}),this}},{key:"remove",value:function(t){return u.call(this).splice(u.call(this).indexOf(t),1),s.call(this,"removeCard",t),this}},{key:"drop",value:function(t){var e=this;return Array.isArray(t)||(t=[t]),t.forEach(function(t){t instanceof h.default&&!e.canDrop||!1!==e.canDrop(t)?(e.add(t),s.call(e,"dropCard",t)):s.call(e,"rejectCard",t)}),this}},{key:"shuffle",value:function(){var t=void 0,e=void 0,n=u.call(this).length;if(n)for(;--n;)e=Math.floor(Math.random()*(n+1)),t=u.call(this)[e],u.call(this)[e]=u.call(this)[n],u.call(this)[n]=t;return s.call(this,"shuffle",this),c.call(this),this}},{key:"sort",value:function(){var t=a.call(this).numbers.length;return u.call(this).sort(function(e,n){return l._getSuit.call(e).value.index*t+l._getNumber.call(e).value.index-(l._getSuit.call(n).value.index*t+l._getNumber.call(n).value.index)}),s.call(this,"sort",this),c.call(this),this}},{key:"draw",value:function(t){var e=u.call(this).slice(-t);return s.call(this,"drawCards",this,e),e}},{key:"each",value:function(t){u.call(this).forEach(function(e,n){t(e,n,l._getSuit.call(e),l._getNumber.call(e))})}},{key:"map",value:function(t){return u.call(this).map(function(e,n){return t(e,n,l._getSuit.call(e),l._getNumber.call(e))})}},{key:"on",value:function(){var t;return(t=o.call(this)).on.apply(t,arguments),this}},{key:"one",value:function(){var t;return(t=o.call(this)).one.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=o.call(this)).off.apply(t,arguments),this}}]),t}();e.default=m},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){i.off(t,r),e.apply(n,arguments)}var i=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var u=0,o=r.length;u<o;u++)r[u].fn!==e&&r[u].fn._!==e&&i.push(r[u]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(){return p.get(this)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),l=n(1),h=r(l),p=new WeakMap,y=new WeakMap,d=function(t){function e(t,n){i(this,e);var r=u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,null,t));return p.set(r,t),y.set(r,n),t.suits.each(function(e){t.numbers.each(function(n){r.add(new f.default(e,n,r,t))})}),l._emit.call(r,"deck:create",r),r}return o(e,t),s(e,[{key:"suits",get:function(){return a.call(this).suits}},{key:"numbers",get:function(){return a.call(this).numbers}},{key:"player",get:function(){return y.get(this)}}]),s(e,[{key:"canDrop",value:function(){return!1}}]),e}(h.default);e.default=d},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){var t;(t=f.get(this)).emit.apply(t,arguments)}function u(){return f.get(this)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),c=new WeakMap,f=new WeakMap,l=new WeakMap,h=new WeakMap,p=function(){function t(e,n){r(this,t),c.set(this,e),f.set(this,n),l.set(this,new s.default(n,this)),this.resetScore(),i.call(this,"player:create",this)}return o(t,[{key:"name",get:function(){return c.get(this)}},{key:"deck",get:function(){return l.get(this)}},{key:"score",get:function(){return h.get(this)}}]),o(t,[{key:"addScore",value:function(t){var e=this.score;return h.set(this,e+t),i.call(this,"player:addScore",this,e,this.score),this}},{key:"resetScore",value:function(){return h.set(this,u.call(this).initialScore),i.call(this,"player:resetScore",this),this}}]),t}();e.default=p},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t,e){return typeof e===t};e.isType=r;var i=function(t){return r("object",t)};e.isObject=i;var u=function(t){return r("string",t)};e.isString=u;var o=function(t){return r("number",t)};e.isNumber=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(){return b.get(this)}function o(){return k.get(this)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(0),c=r(s),f=n(1),l=r(f),h=n(3),p=r(h),y=n(4),d=r(y),v=n(7),g=r(v),m=n(8),_=r(m),b=new WeakMap,k=new WeakMap,w=function(){function t(e,n){i(this,t),e=e||{},e instanceof _.default||(e=new _.default(e)),b.set(this,e),k.set(this,[new g.default(e)]),this.addPlayers(n)}return a(t,[{key:"currentRound",get:function(){return o.call(this).slice(-1)[0]}}],[{key:"Config",get:function(){return _.default}},{key:"Card",get:function(){return c.default}},{key:"CardSet",get:function(){return l.default}},{key:"Deck",get:function(){return p.default}},{key:"Player",get:function(){return d.default}},{key:"Round",get:function(){return g.default}}]),a(t,[{key:"addPlayer",value:function(t){return t&&"string"==typeof t&&(t=new d.default(t,u.call(this))),this.currentRound.addPlayer(t),this}},{key:"addPlayers",value:function(t){return Array.isArray(t)||(t=[t]),t.forEach(this.addPlayer.bind(this)),this}},{key:"startRound",value:function(){return this.currentRound.start(),this}},{key:"finishRound",value:function(){return this.currentRound.finish(),this}},{key:"newRound",value:function(t){return t=this.currentRound.mapPlayers(function(t){return t}).concat(t||[]),o.call(this).push(new g.default(u.call(this)).addPlayers(t)),this}},{key:"on",value:function(){var t;return(t=u.call(this)).on.apply(t,arguments),this}},{key:"once",value:function(){var t;return(t=u.call(this)).once.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=u.call(this)).off.apply(t,arguments),this}}]),t}();e.default=w,t.exports=w},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return f.get(this)}function u(){var t;(t=c.get(this)).emit.apply(t,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(4),s=function(t){return t&&t.__esModule?t:{default:t}}(a),c=new WeakMap,f=new WeakMap,l=function(){function t(e){r(this,t),c.set(this,e),f.set(this,[]),u.call(this,"round:create",this)}return o(t,[{key:"addPlayer",value:function(t){return t instanceof s.default&&i.call(this).indexOf(t)<0&&(i.call(this).push(t),u.call(this,"round:addPlayer",this,t)),this}},{key:"addPlayers",value:function(t){var e=this;return t.forEach(function(t){return e.addPlayer(t)}),this}},{key:"start",value:function(){return this.eachPlayer(function(t){t.deck.shuffle(),t.resetScore()}),u.call(this,"round:start",this),this}},{key:"finish",value:function(){return u.call(this,"round:finish",this),this}},{key:"eachPlayer",value:function(t){return i.call(this).forEach(t),this}},{key:"mapPlayers",value:function(t){return i.call(this).map(t)}}]),t}();e.default=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function s(t){return t.trim().replace(/\s+/g,"_").toUpperCase()}function c(t){return[].concat(a(Array(t))).map(function(t,e){return v[++e]})}function f(){return O.get(this)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),h=n(9),p=r(h),y=n(2),d=r(y),v=["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","TWELVE","THIRTEEN","FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTEEN","NINETEEN","TWENTY"],g={RED:["HEARTS","DIAMONDS"],BLACK:["CLUBS","SPADES"]},m=["ACE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","JACK","QUEEN","KING"],_=function(t){function e(t){i(this,e);var n={},r={};if(!Array.isArray(t)){var o=[],c=Object.keys(t);c.forEach(function(e){o=[].concat(a(o),a(t[e])),t[e].forEach(function(t){n[t]=c[e]})}),t=o}return t.forEach(function(t,e){r[s(t)]={index:e,group:n[t]}}),u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r))}return o(e,t),l(e,[{key:"length",get:function(){return this.enums.length}}]),l(e,[{key:"each",value:function(t){this.enums.forEach(function(e){return t(e.key)})}}]),e}(p.default),b=function(t){function e(t){i(this,e),"number"==typeof t&&(t=c(t));var n={},r={};if(!Array.isArray(t)){t=Object.keys(t)}return t.forEach(function(t,e){r[s(t)]={index:e,value:n[t]}}),u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r))}return o(e,t),l(e,[{key:"length",get:function(){return this.enums.length}}]),l(e,[{key:"each",value:function(t){this.enums.forEach(function(e){return t(e.key)})}}]),e}(p.default),k=new WeakMap,w=new WeakMap,E=new WeakMap,O=new WeakMap,M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.suits,r=void 0===n?g:n,u=e.numbers,o=void 0===u?m:u,a=e.initialScore,s=void 0===a?0:a;i(this,t),k.set(this,new _(r)),w.set(this,new b(o)),E.set(this,s),O.set(this,new d.default)}return l(t,[{key:"suits",get:function(){return k.get(this)}},{key:"numbers",get:function(){return w.get(this)}},{key:"initialScore",get:function(){return E.get(this)}}]),l(t,[{key:"on",value:function(){var t;return(t=f.call(this)).on.apply(t,arguments),this}},{key:"once",value:function(){var t;return(t=f.call(this)).once.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=f.call(this)).off.apply(t,arguments),this}},{key:"emit",value:function(){var t;return(t=f.call(this)).emit.apply(t,arguments),this}}]),t}();e.default=M},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";(function(e){function r(t,e){if(t&&"name"===e||l.call(d,e)>=0)throw new Error("Enum key "+e+" is a reserved word!")}var i=function(t){return t&&t.__esModule?t.default:t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=i(n(12)),a=i(n(13)),s=n(5),c=s.isString,f=s.isNumber,l=n(14).indexOf,h=i(n(15)),p=o.endianness(),y=function(){function t(e,n){var i=this;if(u(this,t),this.size=4,this.indirection=1,n&&c(n)&&(n={name:n}),this._options=n||{},this._options.separator=this._options.separator||" | ",this._options.endianness=this._options.endianness||p,this._options.ignoreCase=this._options.ignoreCase||!1,this._options.freez=this._options.freez||!1,this.enums=[],e.length){this._enumLastIndex=e.length;var o=e;e={};for(var s=0;s<o.length;s++)e[o[s]]=Math.pow(2,s)}for(var f in e)r(this._options.name,f),this[f]=new a(f,e[f],{ignoreCase:this._options.ignoreCase}),this.enums.push(this[f]);this._enumMap=e,this._options.ignoreCase&&(this.getLowerCaseEnums=function(){for(var t={},e=0,n=this.enums.length;e<n;e++)t[this.enums[e].key.toLowerCase()]=this.enums[e];return t}),this._options.name&&(this.name=this._options.name);this.isFlaggable=function(){for(var t=0,e=i.enums.length;t<e;t++){var n=i.enums[t];if(0===n.value||n.value&n.value-1)return!1}return!0}(),this._options.freez&&this.freezeEnums()}return t.prototype.getKey=function(t){var e=this.get(t);if(e)return e.key},t.prototype.getValue=function(t){var e=this.get(t);if(e)return e.value},t.prototype.get=function(t,e){if(null!==t&&void 0!==t){if(h(t)&&(t=t["readUInt32"+this._options.endianness](e||0)),a.isEnumItem(t)){if(l.call(this.enums,t)>=0)return t;if(!this.isFlaggable||this.isFlaggable&&t.key.indexOf(this._options.separator)<0)return;return this.get(t.key)}if(c(t)){var n=this;if(this._options.ignoreCase&&(n=this.getLowerCaseEnums(),t=t.toLowerCase()),t.indexOf(this._options.separator)>0){for(var r=t.split(this._options.separator),i=0,u=0;u<r.length;u++){i|=n[r[u]].value}return new a(t,i)}return n[t]}for(var o in this)if(this.hasOwnProperty(o)&&this[o].value===t)return this[o];var s=null;if(this.isFlaggable)for(var f in this)this.hasOwnProperty(f)&&0!=(t&this[f].value)&&(s?s+=this._options.separator:s="",s+=f);return this.get(s||null)}},t.prototype.set=function(t,e,n){var r=this.get(n);if(r)return t["writeUInt32"+this._options.endianness](r.value,e||0)},t.prototype.freezeEnums=function(){function t(t){return Object.getOwnPropertyNames(t).forEach(function(e){Object.getOwnPropertyDescriptor(t,e).configurable&&Object.defineProperties(t,e,{writable:!1,configurable:!1})}),t}function e(t){return t}function n(r){if("object"==typeof r&&null!==r&&!Object.isFrozen(r)&&!Object.isSealed(r)){for(var i in r)r.hasOwnProperty(i)&&(r.__defineGetter__(i,e.bind(null,r[i])),r.__defineSetter__(i,function(t){throw TypeError("Cannot redefine property; Enum Type is not extensible.")}),n(r[i]));Object.freeze?Object.freeze(r):t(r)}}return function(){return Object.isFrozen&&Object.isSealed&&Object.getOwnPropertyNames&&Object.getOwnPropertyDescriptor&&Object.defineProperties&&Object.__defineGetter__&&Object.__defineSetter__}()&&n(this),this},t.prototype.isDefined=function(t){var e=function(e){return e===t};return(c(t)||f(t))&&(e=function(e){return e.is(t)}),this.enums.some(e)},t.prototype.toJSON=function(){return this._enumMap},t.prototype.extend=function(t){if(t.length){var e=t;t={};for(var n=0;n<e.length;n++){var i=this._enumLastIndex+n;t[e[n]]=Math.pow(2,i)}for(var u in t)r(this._options.name,u),this[u]=new a(u,t[u],{ignoreCase:this._options.ignoreCase}),this.enums.push(this[u]);for(var o in this._enumMap)t[o]=this._enumMap[o];this._enumLastIndex+=t.length,this._enumMap=t,this._options.freez&&this.freezeEnums()}},t.register=function(){var n=void 0===arguments[0]?"Enum":arguments[0];e[n]||(e[n]=t)},t}();t.exports=y;var d=["_options","get","getKey","getValue","enums","isFlaggable","_enumMap","toJSON","_enumLastIndex"]}).call(e,n(11))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!=typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n"},function(t,e,n){"use strict";var r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=n(5),u=i.isObject,o=i.isString,a=function(){function t(e,n){var i=void 0===arguments[2]?{}:arguments[2];r(this,t),this.key=e,this.value=n,this._options=i,this._options.ignoreCase=this._options.ignoreCase||!1}return t.prototype.has=function(e){return t.isEnumItem(e)?0!=(this.value&e.value):o(e)?this._options.ignoreCase?this.key.toLowerCase().indexOf(e.toLowerCase())>=0:this.key.indexOf(e)>=0:0!=(this.value&e)},t.prototype.is=function(e){return t.isEnumItem(e)?this.key===e.key:o(e)?this._options.ignoreCase?this.key.toLowerCase()===e.toLowerCase():this.key===e:this.value===e},t.prototype.toString=function(){return this.key},t.prototype.toJSON=function(){return this.key},t.prototype.valueOf=function(){return this.value},t.isEnumItem=function(e){return e instanceof t||u(e)&&void 0!==e.key&&void 0!==e.value},t}();t.exports=a},function(t,e,n){"use strict";e.__esModule=!0;var r=Array.prototype.indexOf||function(t,e){void 0===e&&(e=0),e<0&&(e+=this.length),e<0&&(e=0);for(var n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e.indexOf=r},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}}])});