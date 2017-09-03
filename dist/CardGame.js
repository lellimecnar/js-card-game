(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CardGame"] = factory();
	else
		root["CardGame"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _CardGame=__webpack_require__(1);var _CardGame2=_interopRequireDefault(_CardGame);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_CardGame2.default;/*** EXPORTS FROM exports-loader ***/module.exports=_CardGame2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Card=__webpack_require__(12);var _Card2=_interopRequireDefault(_Card);var _CardSet=__webpack_require__(13);var _CardSet2=_interopRequireDefault(_CardSet);var _Deck=__webpack_require__(14);var _Deck2=_interopRequireDefault(_Deck);var _Player=__webpack_require__(15);var _Player2=_interopRequireDefault(_Player);var _Round=__webpack_require__(16);var _Round2=_interopRequireDefault(_Round);var _Preset=__webpack_require__(4);var _Preset2=_interopRequireDefault(_Preset);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const privateAttributesOfCardGame=new WeakMap();const _rounds=new WeakMap();function _getRounds(){return _rounds.get(this);}class CardGame{static get Preset(){return _Preset2.default;}static get Card(){return _Card2.default;}static get CardSet(){return _CardSet2.default;}static get Deck(){return _Deck2.default;}static get Player(){return _Player2.default;}static get Round(){return _Round2.default;}get currentRound(){return _getRounds.call(this).slice(-1)[0];}constructor(config){privateAttributesOfCardGame.set(this,{});if(!(config instanceof _Preset2.default)){config=new _Preset2.default(config);}privateAttributesOfCardGame.get(this)._config=config;_rounds.set(this,[new _Round2.default(config)]);}addPlayer(player){if(typeof player==='string'){player=new _Player2.default(player,privateAttributesOfCardGame.get(this)._config);}this.currentRound.addPlayer(player);return this;}addPlayers(players){players.forEach(this.addPlayer.bind(this));return this;}startRound(){this.currentRound.start();return this;}finishRound(){this.currentRound.finish();return this;}newRound(players){players=this.currentRound.mapPlayers(player=>player).concat(players||[]);_getRounds.call(this).push(new _Round2.default(privateAttributesOfCardGame.get(this)._config).addPlayers(players));return this;}}exports.default=CardGame;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var isType = function (type, value) {
  return typeof value === type;
};
exports.isType = isType;
var isObject = function (value) {
  return isType("object", value);
};
exports.isObject = isObject;
var isString = function (value) {
  return isType("string", value);
};
exports.isString = isString;
var isNumber = function (value) {
  return isType("number", value);
};
exports.isNumber = isNumber;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _enum=__webpack_require__(5);var _enum2=_interopRequireDefault(_enum);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const privateAttributesOfPreset=new WeakMap();const NUMBERS=['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN','FIFTEEN','SIXTEEN','SEVENTEEN','EIGHTEEN','NINETEEN','TWENTY'];const STANDARD_SUITS={RED:['HEARTS','DIAMONDS'],BLACK:['CLUBS','SPADES']};const STANDARD_NUMBERS=['ACE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','JACK','QUEEN','KING'];function constantCase(str){return str.trim().replace(/\s+/g,'_').toUpperCase();}function makeRange(max){return[...Array(max)].map((val,n)=>NUMBERS[++n]);}class SuitEnum extends _enum2.default{constructor(suits){let groups={};let suitMap={};if(!Array.isArray(suits)){let flatSuits=[];let groupNames=Object.keys(suits);groupNames.forEach(name=>{flatSuits=[...flatSuits,...suits[name]];suits[name].forEach(suit=>{groups[suit]=groupNames[name];});});suits=flatSuits;}suits.forEach((suit,i)=>{suitMap[constantCase(suit)]={index:i,group:groups[suit]};});super(suitMap);}each(fn){this.enums.forEach(suit=>fn(suit.key));}}class NumberEnum extends _enum2.default{constructor(numbers){if(typeof numbers==='number'){numbers=makeRange(numbers);}let values={};let numberMap={};if(!Array.isArray(numbers)){let values=numbers;numbers=Object.keys(numbers);}numbers.forEach((number,i)=>{numberMap[constantCase(number)]={index:i,value:values[number]};});super(numberMap);}each(fn){this.enums.forEach(number=>fn(number.key));}}class Preset{get suits(){return privateAttributesOfPreset.get(this)._suits;}get numbers(){return privateAttributesOfPreset.get(this)._numbers;}get initialScore(){return privateAttributesOfPreset.get(this)._initialScore;}constructor({suits=STANDARD_SUITS,numbers=STANDARD_NUMBERS,initialScore=0}={}){privateAttributesOfPreset.set(this,{});privateAttributesOfPreset.get(this)._suits=new SuitEnum(suits);privateAttributesOfPreset.get(this)._numbers=new NumberEnum(numbers);privateAttributesOfPreset.get(this)._initialScore=initialScore;}}exports.default=Preset;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var os = _interopRequire(__webpack_require__(8));

var EnumItem = _interopRequire(__webpack_require__(9));

var _isType = __webpack_require__(3);

var isString = _isType.isString;
var isNumber = _isType.isNumber;

var indexOf = __webpack_require__(10).indexOf;

var isBuffer = _interopRequire(__webpack_require__(11));

var endianness = os.endianness();

/**
 * Represents an Enum with enum items.
 * @param {Array || Object}  map     This are the enum items.
 * @param {String || Object} options This are options. [optional]
 */

var Enum = (function () {
  function Enum(map, options) {
    var _this = this;

    _classCallCheck(this, Enum);

    /* implement the "ref type interface", so that Enum types can
     * be used in `node-ffi` function declarations and invokations.
     * In C, these Enums act as `uint32_t` types.
     *
     * https://github.com/TooTallNate/ref#the-type-interface
     */
    this.size = 4;
    this.indirection = 1;

    if (options && isString(options)) {
      options = { name: options };
    }

    this._options = options || {};
    this._options.separator = this._options.separator || " | ";
    this._options.endianness = this._options.endianness || endianness;
    this._options.ignoreCase = this._options.ignoreCase || false;
    this._options.freez = this._options.freez || false;

    this.enums = [];

    if (map.length) {
      this._enumLastIndex = map.length;
      var array = map;
      map = {};

      for (var i = 0; i < array.length; i++) {
        map[array[i]] = Math.pow(2, i);
      }
    }

    for (var member in map) {
      guardReservedKeys(this._options.name, member);
      this[member] = new EnumItem(member, map[member], { ignoreCase: this._options.ignoreCase });
      this.enums.push(this[member]);
    }
    this._enumMap = map;

    if (this._options.ignoreCase) {
      this.getLowerCaseEnums = function () {
        var res = {};
        for (var i = 0, len = this.enums.length; i < len; i++) {
          res[this.enums[i].key.toLowerCase()] = this.enums[i];
        }
        return res;
      };
    }

    if (this._options.name) {
      this.name = this._options.name;
    }

    var isFlaggable = function () {
      for (var i = 0, len = _this.enums.length; i < len; i++) {
        var e = _this.enums[i];

        if (!(e.value !== 0 && !(e.value & e.value - 1))) {
          return false;
        }
      }
      return true;
    };

    this.isFlaggable = isFlaggable();
    if (this._options.freez) {
      this.freezeEnums(); //this will make instances of Enum non-extensible
    }
  }

  /**
   * Returns the appropriate EnumItem key.
   * @param  {EnumItem || String || Number} key The object to get with.
   * @return {String}                           The get result.
   */

  Enum.prototype.getKey = function getKey(value) {
    var item = this.get(value);
    if (item) {
      return item.key;
    }
  };

  /**
   * Returns the appropriate EnumItem value.
   * @param  {EnumItem || String || Number} key The object to get with.
   * @return {Number}                           The get result.
   */

  Enum.prototype.getValue = function getValue(key) {
    var item = this.get(key);
    if (item) {
      return item.value;
    }
  };

  /**
   * Returns the appropriate EnumItem.
   * @param  {EnumItem || String || Number} key The object to get with.
   * @return {EnumItem}                         The get result.
   */

  Enum.prototype.get = function get(key, offset) {
    if (key === null || key === undefined) {
      return;
    } // Buffer instance support, part of the ref Type interface
    if (isBuffer(key)) {
      key = key["readUInt32" + this._options.endianness](offset || 0);
    }

    if (EnumItem.isEnumItem(key)) {
      var foundIndex = indexOf.call(this.enums, key);
      if (foundIndex >= 0) {
        return key;
      }
      if (!this.isFlaggable || this.isFlaggable && key.key.indexOf(this._options.separator) < 0) {
        return;
      }
      return this.get(key.key);
    } else if (isString(key)) {

      var enums = this;
      if (this._options.ignoreCase) {
        enums = this.getLowerCaseEnums();
        key = key.toLowerCase();
      }

      if (key.indexOf(this._options.separator) > 0) {
        var parts = key.split(this._options.separator);

        var value = 0;
        for (var i = 0; i < parts.length; i++) {
          var part = parts[i];

          value |= enums[part].value;
        }

        return new EnumItem(key, value);
      } else {
        return enums[key];
      }
    } else {
      for (var m in this) {
        if (this.hasOwnProperty(m)) {
          if (this[m].value === key) {
            return this[m];
          }
        }
      }

      var result = null;

      if (this.isFlaggable) {
        for (var n in this) {
          if (this.hasOwnProperty(n)) {
            if ((key & this[n].value) !== 0) {
              if (result) {
                result += this._options.separator;
              } else {
                result = "";
              }
              result += n;
            }
          }
        }
      }

      return this.get(result || null);
    }
  };

  /**
   * Sets the Enum "value" onto the give `buffer` at the specified `offset`.
   * Part of the ref "Type interface".
   *
   * @param  {Buffer} buffer The Buffer instance to write to.
   * @param  {Number} offset The offset in the buffer to write to. Default 0.
   * @param  {EnumItem || String || Number} value The EnumItem to write.
   */

  Enum.prototype.set = function set(buffer, offset, value) {
    var item = this.get(value);
    if (item) {
      return buffer["writeUInt32" + this._options.endianness](item.value, offset || 0);
    }
  };

  /**
   * Define freezeEnums() as a property of the prototype.
   * make enumerable items nonconfigurable and deep freeze the properties. Throw Error on property setter.
   */

  Enum.prototype.freezeEnums = function freezeEnums() {
    function envSupportsFreezing() {
      return Object.isFrozen && Object.isSealed && Object.getOwnPropertyNames && Object.getOwnPropertyDescriptor && Object.defineProperties && Object.__defineGetter__ && Object.__defineSetter__;
    }

    function freezer(o) {
      var props = Object.getOwnPropertyNames(o);
      props.forEach(function (p) {
        if (!Object.getOwnPropertyDescriptor(o, p).configurable) {
          return;
        }

        Object.defineProperties(o, p, { writable: false, configurable: false });
      });
      return o;
    }

    function getPropertyValue(value) {
      return value;
    }

    function deepFreezeEnums(o) {
      if (typeof o !== "object" || o === null || Object.isFrozen(o) || Object.isSealed(o)) {
        return;
      }
      for (var key in o) {
        if (o.hasOwnProperty(key)) {
          o.__defineGetter__(key, getPropertyValue.bind(null, o[key]));
          o.__defineSetter__(key, function throwPropertySetError(value) {
            throw TypeError("Cannot redefine property; Enum Type is not extensible.");
          });
          deepFreezeEnums(o[key]);
        }
      }
      if (Object.freeze) {
        Object.freeze(o);
      } else {
        freezer(o);
      }
    }

    if (envSupportsFreezing()) {
      deepFreezeEnums(this);
    }

    return this;
  };

  /**
   * Return true whether the enumItem parameter passed in is an EnumItem object and 
   * has been included as constant of this Enum   
   * @param  {EnumItem} enumItem
   */

  Enum.prototype.isDefined = function isDefined(enumItem) {
    var condition = function (e) {
      return e === enumItem;
    };
    if (isString(enumItem) || isNumber(enumItem)) {
      condition = function (e) {
        return e.is(enumItem);
      };
    }
    return this.enums.some(condition);
  };

  /**
   * Returns JSON object representation of this Enum.
   * @return {String} JSON object representation of this Enum.
   */

  Enum.prototype.toJSON = function toJSON() {
    return this._enumMap;
  };

  /**
   * Extends the existing Enum with a New Map.
   * @param  {Array}  map  Map to extend from
   */

  Enum.prototype.extend = function extend(map) {
    if (map.length) {
      var array = map;
      map = {};

      for (var i = 0; i < array.length; i++) {
        var exponent = this._enumLastIndex + i;
        map[array[i]] = Math.pow(2, exponent);
      }

      for (var member in map) {
        guardReservedKeys(this._options.name, member);
        this[member] = new EnumItem(member, map[member], { ignoreCase: this._options.ignoreCase });
        this.enums.push(this[member]);
      }

      for (var key in this._enumMap) {
        map[key] = this._enumMap[key];
      }

      this._enumLastIndex += map.length;
      this._enumMap = map;

      if (this._options.freez) {
        this.freezeEnums(); //this will make instances of new Enum non-extensible
      }
    }
  };

  /**
   * Registers the Enum Type globally in node.js.
   * @param  {String} key Global variable. [optional]
   */

  Enum.register = function register() {
    var key = arguments[0] === undefined ? "Enum" : arguments[0];

    if (!global[key]) {
      global[key] = Enum;
    }
  };

  return Enum;
})();

module.exports = Enum;

// private

var reservedKeys = ["_options", "get", "getKey", "getValue", "enums", "isFlaggable", "_enumMap", "toJSON", "_enumLastIndex"];

function guardReservedKeys(customName, key) {
  if (customName && key === "name" || indexOf.call(reservedKeys, key) >= 0) {
    throw new Error("Enum key " + key + " is a reserved word!");
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _isType = __webpack_require__(3);

var isObject = _isType.isObject;
var isString = _isType.isString;

/**
 * Represents an Item of an Enum.
 * @param {String} key   The Enum key.
 * @param {Number} value The Enum value.
 */

var EnumItem = (function () {

  /*constructor reference so that, this.constructor===EnumItem//=>true */

  function EnumItem(key, value) {
    var options = arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, EnumItem);

    this.key = key;
    this.value = value;

    this._options = options;
    this._options.ignoreCase = this._options.ignoreCase || false;
  }

  /**
   * Checks if the flagged EnumItem has the passing object.
   * @param  {EnumItem || String || Number} value The object to check with.
   * @return {Boolean}                            The check result.
   */

  EnumItem.prototype.has = function has(value) {
    if (EnumItem.isEnumItem(value)) {
      return (this.value & value.value) !== 0;
    } else if (isString(value)) {
      if (this._options.ignoreCase) {
        return this.key.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      }
      return this.key.indexOf(value) >= 0;
    } else {
      return (this.value & value) !== 0;
    }
  };

  /**
   * Checks if the EnumItem is the same as the passing object.
   * @param  {EnumItem || String || Number} key The object to check with.
   * @return {Boolean}                          The check result.
   */

  EnumItem.prototype.is = function is(key) {
    if (EnumItem.isEnumItem(key)) {
      return this.key === key.key;
    } else if (isString(key)) {
      if (this._options.ignoreCase) {
        return this.key.toLowerCase() === key.toLowerCase();
      }
      return this.key === key;
    } else {
      return this.value === key;
    }
  };

  /**
   * Returns String representation of this EnumItem.
   * @return {String} String representation of this EnumItem.
   */

  EnumItem.prototype.toString = function toString() {
    return this.key;
  };

  /**
   * Returns JSON object representation of this EnumItem.
   * @return {String} JSON object representation of this EnumItem.
   */

  EnumItem.prototype.toJSON = function toJSON() {
    return this.key;
  };

  /**
   * Returns the value to compare with.
   * @return {String} The value to compare with.
   */

  EnumItem.prototype.valueOf = function valueOf() {
    return this.value;
  };

  EnumItem.isEnumItem = function isEnumItem(value) {
    return value instanceof EnumItem || isObject(value) && value.key !== undefined && value.value !== undefined;
  };

  return EnumItem;
})();

module.exports = EnumItem;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var indexOf = Array.prototype.indexOf || function (find, i /*opt*/) {
  if (i === undefined) i = 0;
  if (i < 0) i += this.length;
  if (i < 0) i = 0;
  for (var n = this.length; i < n; i++) if (i in this && this[i] === find) return i;
  return -1;
};
exports.indexOf = indexOf;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports._getSuit=_getSuit;exports._getNumber=_getNumber;exports._setParent=_setParent;var _CardSet=__webpack_require__(13);var _CardSet2=_interopRequireDefault(_CardSet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const _suit=new WeakMap();const _number=new WeakMap();const _parent=new WeakMap();const _deck=new WeakMap();function _getSuit(){return _suit.get(this);}function _getNumber(){return _number.get(this);}function _setParent(newParent){if(!newParent||!(newParent instanceof _CardSet2.default)&&!(newParent.constructor instanceof _CardSet2.default)){throw new Error('parent of Card can only be an instance of CardSet');}if(this.parent){this.parent.remove(this);}_parent.set(this,newParent);}function _getNumberIndex(){return this.deck.NUMBERS.enums.indexOf(_getNumber.call(this));}function _getSuitName(){return _getSuit.call(this).key;}function _getNumberName(){return _getNumber.call(this).key;}function _getSuitGroup(){return _getSuit.call(this).value;}class Card{static compare(a,b,fn){return fn({sameSuit:_getSuitName.call(a)===_getSuitName.call(b),sameSuitGroup:_getSuitGroup.call(a)===_getSuitGroup.call(b),sameNumber:_getNumberName.call(a)===_getNumberName.call(a),numberDiff:_getNumberIndex.call(a)-_getNumberIndex.call(b)});}get parent(){return _parent.get(this);}get deck(){return _deck.get(this);}constructor(suit,number,deck){_suit.set(this,deck.SUITS.get(suit));_number.set(this,deck.NUMBERS.get(number));_deck.set(this,deck);}isSameSuit(card){return Card.compare(this,card,({sameSuit})=>sameSuit);}isSameSuitGroup(card){return Card.compare(this,card,({sameSuitGroup})=>sameSuitGroup);}isDiff(card,diff){if(typeof diff==='number'){diff=numberDiff=>numberDiff===diff;}return Card.compare(this,card,({numberDiff})=>diff(numberDiff));}isSameNumber(card){return this.isDiff(card,0);}isGreaterThan(card){return this.isDiff(card,diff=>diff>0);}isLessThan(card){return this.isDiff(card,diff=>diff<0);}isPlusOne(card){return this.isDiff(card,1);}isMinusOne(card){return this.isDiff(card,-1);}toString(){return`Card {${_getSuitName.call(this)}, ${_getNumberName.call(this)}}`;}}exports.default=Card;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Card=__webpack_require__(12);var _Card2=_interopRequireDefault(_Card);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const privateAttributesOfCardSet=new WeakMap();class CardSet{get topCard(){const cards=_getCards.call(this);return cards[cards.length];}get length(){return _getCards.call(this).length;}constructor(cards,config){privateAttributesOfCardSet.set(this,{});privateAttributesOfCardSet.get(this)._config=config;privateAttributesOfCardSet.get(this)._cards=[];if(Array.isArray(cards)){this.add(cards);}}add(newCards){if(newCards instanceof _Card2.default){newCards=[newCards];}newCards.forEach(card=>{if(card instanceof _Card2.default){privateAttributesOfCardSet.get(this)._cards.push(card);_Card._setParent.call(card,this);}});return this;}remove(card){privateAttributesOfCardSet.get(this)._cards.splice(privateAttributesOfCardSet.get(this)._cards.indexOf(card),1);return this;}drop(newCards){if(!Array.isArray(newCards)){newCards=[newCards];}newCards.forEach(card=>{if(card instanceof _Card2.default&&!this.canDrop||this.canDrop(card)){this.add(card);}});return this;}shuffle(){let tmp,current;let top=privateAttributesOfCardSet.get(this)._cards.length;if(top)while(--top){current=Math.floor(Math.random()*(top+1));tmp=privateAttributesOfCardSet.get(this)._cards[current];privateAttributesOfCardSet.get(this)._cards[current]=privateAttributesOfCardSet.get(this)._cards[top];privateAttributesOfCardSet.get(this)._cards[top]=tmp;}return this;}draw(count){return privateAttributesOfCardSet.get(this)._cards.slice(-count);}each(fn){privateAttributesOfCardSet.get(this)._cards.forEach((card,i)=>{fn(card,i,_Card._getSuit.call(card),_Card._getNumber.call(card));});}map(fn){return privateAttributesOfCardSet.get(this)._cards.map((card,i)=>{return fn(card,i,_Card._getSuit.call(card),_Card._getNumber.call(card));});}}exports.default=CardSet;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Card=__webpack_require__(12);var _Card2=_interopRequireDefault(_Card);var _CardSet=__webpack_require__(13);var _CardSet2=_interopRequireDefault(_CardSet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const privateAttributesOfDeck=new WeakMap();class Deck extends _CardSet2.default{get SUITS(){return privateAttributesOfDeck.get(this)._suits;}get NUMBERS(){return privateAttributesOfDeck.get(this)._numbers;}get player(){return privateAttributesOfDeck.get(this)._player;}constructor({suits,numbers},player){super();privateAttributesOfDeck.set(this,{});privateAttributesOfDeck.get(this)._suits=suits;privateAttributesOfDeck.get(this)._numbers=numbers;privateAttributesOfDeck.get(this)._player=player;suits.each(suit=>{numbers.each(number=>{this.add(new _Card2.default(suit,number,this));});});}}exports.default=Deck;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Deck=__webpack_require__(14);var _Deck2=_interopRequireDefault(_Deck);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const privateAttributesOfPlayer=new WeakMap();class Player{get name(){return privateAttributesOfPlayer.get(this)._name;}get deck(){return privateAttributesOfPlayer.get(this)._deck;}get score(){return privateAttributesOfPlayer.get(this)._score;}constructor(name,config){privateAttributesOfPlayer.set(this,{});privateAttributesOfPlayer.get(this)._name=name;privateAttributesOfPlayer.get(this)._config=config;privateAttributesOfPlayer.get(this)._deck=new _Deck2.default(config,this);this.resetScore();}addScore(num){privateAttributesOfPlayer.get(this)._score+=num;}resetScore(){privateAttributesOfPlayer.get(this)._score=privateAttributesOfPlayer.get(this)._config.initialScore;}}exports.default=Player;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Player=__webpack_require__(15);var _Player2=_interopRequireDefault(_Player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const privateAttributesOfRound=new WeakMap();class Round{constructor(config){privateAttributesOfRound.set(this,{});privateAttributesOfRound.get(this)._config=config;privateAttributesOfRound.get(this)._players=[];}addPlayer(player){if(player instanceof _Player2.default&&privateAttributesOfRound.get(this)._players.indexOf(player)<0){privateAttributesOfRound.get(this)._players.push(player);}return this;}addPlayers(players){players.forEach(player=>this.addPlayer(player));return this;}start(){this.eachPlayer(player=>{player.deck.shuffle();player.resetScore();});return this;}finish(){return this;}eachPlayer(fn){privateAttributesOfRound.get(this)._players.forEach(fn);return this;}mapPlayers(fn){return privateAttributesOfRound.get(this)._players.map(fn);}}exports.default=Round;

/***/ })
/******/ ]);
});