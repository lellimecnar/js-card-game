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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports._getSuit = _getSuit;
exports._getNumber = _getNumber;
exports._getConfig = _getConfig;
exports._getIndex = _getIndex;
exports._setParent = _setParent;

var _CardSet = __webpack_require__(1);

var _CardSet2 = _interopRequireDefault(_CardSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _suit = new WeakMap();
var _number = new WeakMap();
var _parent = new WeakMap();
var _deck = new WeakMap();
var _config = new WeakMap();

function _getSuit() {
	return _suit.get(this);
}

function _getNumber() {
	return _number.get(this);
}

function _getConfig() {
	return _config.get(this);
}

function _getIndex() {
	return _getSuit.call(this).value.index * _getConfig.call(this).numbers.length + _getNumber.call(this).value.index;
}

function _setParent(newParent) {
	if (!newParent || !(newParent instanceof _CardSet2.default) && !(newParent.constructor instanceof _CardSet2.default)) {
		throw new Error('parent of Card can only be an instance of CardSet');
	}

	if (this.parent) {
		this.parent.remove(this);
	}

	_parent.set(this, newParent);
}

function _getNumberIndex() {
	return _getNumber.call(this).value.index;
}

function _getSuitName() {
	return _getSuit.call(this).key;
}

function _getNumberName() {
	return _getNumber.call(this).key;
}

function _getSuitGroup() {
	return _getSuit.call(this).value;
}

function _getDeck() {
	return _deck.get(this);
}

function _emit() {
	var _ref;

	(_ref = _getConfig.call(this)).emit.apply(_ref, arguments);
}

var Card = function () {
	_createClass(Card, [{
		key: 'parent',
		get: function get() {
			return _parent.get(this);
		}
	}, {
		key: 'deck',
		get: function get() {
			return _deck.get(this);
		}
	}], [{
		key: 'compare',
		value: function compare(a, b, fn) {
			return fn({
				sameSuit: _getSuitName.call(a) === _getSuitName.call(b),
				sameSuitGroup: _getSuitGroup.call(a) === _getSuitGroup.call(b),
				sameNumber: _getNumberName.call(a) === _getNumberName.call(a),
				numberDiff: _getNumberIndex.call(a) - _getNumberIndex.call(b)
			});
		}
	}]);

	function Card(suit, number, deck, config) {
		_classCallCheck(this, Card);

		_suit.set(this, config.suits.get(suit));
		_number.set(this, config.numbers.get(number));
		_deck.set(this, deck);
		_config.set(this, config);

		_emit.call(this, 'card:create', this);
	}

	_createClass(Card, [{
		key: 'isSameSuit',
		value: function isSameSuit(card) {
			return Card.compare(this, card, function (_ref2) {
				var sameSuit = _ref2.sameSuit;
				return sameSuit;
			});
		}
	}, {
		key: 'isSameSuitGroup',
		value: function isSameSuitGroup(card) {
			return Card.compare(this, card, function (_ref3) {
				var sameSuitGroup = _ref3.sameSuitGroup;
				return sameSuitGroup;
			});
		}
	}, {
		key: 'isDiff',
		value: function isDiff(card, _diff) {
			if (typeof _diff === 'number') {
				_diff = function diff(numberDiff) {
					return numberDiff === _diff;
				};
			}

			return Card.compare(this, card, function (_ref4) {
				var numberDiff = _ref4.numberDiff;
				return _diff(numberDiff);
			});
		}
	}, {
		key: 'isSameNumber',
		value: function isSameNumber(card) {
			return this.isDiff(card, 0);
		}
	}, {
		key: 'isGreaterThan',
		value: function isGreaterThan(card) {
			return this.isDiff(card, function (diff) {
				return diff > 0;
			});
		}
	}, {
		key: 'isLessThan',
		value: function isLessThan(card) {
			return this.isDiff(card, function (diff) {
				return diff < 0;
			});
		}
	}, {
		key: 'isPlusOne',
		value: function isPlusOne(card) {
			return this.isDiff(card, 1);
		}
	}, {
		key: 'isMinusOne',
		value: function isMinusOne(card) {
			return this.isDiff(card, -1);
		}
	}]);

	return Card;
}();

exports.default = Card;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports._emit = _emit;

var _Card = __webpack_require__(0);

var _Card2 = _interopRequireDefault(_Card);

var _tinyEmitter = __webpack_require__(2);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _cards = new WeakMap();
var _events = new WeakMap();
var _config = new WeakMap();

function _getCards() {
	return _cards.get(this);
}

function _getEvents() {
	return _events.get(this);
}

function _getConfig() {
	return _config.get(this);
}

function _emit(type) {
	var _ref, _ref2;

	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	(_ref = _getEvents.call(this)).emit.apply(_ref, [type, this].concat(args));
	(_ref2 = _getConfig.call(this)).emit.apply(_ref2, ['cardSet:' + type, this].concat(args));
}

function _logCards() {
	if (!_getConfig.call(this).logging) {
		return;
	}

	console.log(_getCards.call(this).map(function (card) {
		return {
			suit: _Card._getSuit.call(card).key,
			group: _Card._getSuit.call(card).value.group,
			number: _Card._getNumber.call(card).key,
			index: _Card._getNumber.call(card).value.index,
			value: _Card._getNumber.call(card).value.value,
			deckIndex: _Card._getIndex.call(card)
		};
	}));
}

var CardSet = function () {
	_createClass(CardSet, [{
		key: 'topCard',
		get: function get() {
			var cards = _getCards.call(this);
			return cards[cards.length];
		}
	}, {
		key: 'length',
		get: function get() {
			return _getCards.call(this).length;
		}
	}]);

	function CardSet(cards, config) {
		_classCallCheck(this, CardSet);

		_config.set(this, config);
		_events.set(this, new _tinyEmitter2.default());
		_cards.set(this, []);

		if (Array.isArray(cards)) {
			this.add(cards);
		}
	}

	_createClass(CardSet, [{
		key: 'add',
		value: function add(newCards) {
			var _this = this;

			if (newCards instanceof _Card2.default) {
				newCards = [newCards];
			}

			newCards.forEach(function (card) {
				if (card instanceof _Card2.default) {
					_getCards.call(_this).push(card);
					_Card._setParent.call(card, _this);

					_emit.call(_this, 'addCard', card);
				}
			});

			return this;
		}
	}, {
		key: 'remove',
		value: function remove(card) {
			_getCards.call(this).splice(_getCards.call(this).indexOf(card), 1);

			_emit.call(this, 'removeCard', card);

			return this;
		}
	}, {
		key: 'drop',
		value: function drop(newCards) {
			var _this2 = this;

			if (!Array.isArray(newCards)) {
				newCards = [newCards];
			}

			newCards.forEach(function (card) {
				if (card instanceof _Card2.default && !_this2.canDrop || _this2.canDrop(card) !== false) {
					_this2.add(card);
					_emit.call(_this2, 'dropCard', card);
				} else {
					_emit.call(_this2, 'rejectCard', card);
				}
			});

			return this;
		}
	}, {
		key: 'shuffle',
		value: function shuffle() {
			var tmp = void 0,
			    current = void 0;
			var top = _getCards.call(this).length;

			if (top) while (--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = _getCards.call(this)[current];
				_getCards.call(this)[current] = _getCards.call(this)[top];
				_getCards.call(this)[top] = tmp;
			}

			_emit.call(this, 'shuffle', this);

			_logCards.call(this);

			return this;
		}
	}, {
		key: 'sort',
		value: function sort() {
			_getCards.call(this).sort(function (a, b) {
				return _Card._getIndex.call(a) - _Card._getIndex.call(b);
			});

			_emit.call(this, 'sort', this);

			_logCards.call(this);

			return this;
		}
	}, {
		key: 'draw',
		value: function draw(count) {
			var cards = _getCards.call(this).slice(-count);

			_emit.call(this, 'drawCards', this, cards);

			return cards;
		}
	}, {
		key: 'each',
		value: function each(fn) {
			_getCards.call(this).forEach(function (card, i) {
				fn(card, i, _Card._getSuit.call(card), _Card._getNumber.call(card));
			});
		}
	}, {
		key: 'map',
		value: function map(fn) {
			return _getCards.call(this).map(function (card, i) {
				return fn(card, i, _Card._getSuit.call(card), _Card._getNumber.call(card));
			});
		}
	}, {
		key: 'on',
		value: function on() {
			var _ref3;

			(_ref3 = _getEvents.call(this)).on.apply(_ref3, arguments);

			return this;
		}
	}, {
		key: 'one',
		value: function one() {
			var _ref4;

			(_ref4 = _getEvents.call(this)).one.apply(_ref4, arguments);

			return this;
		}
	}, {
		key: 'off',
		value: function off() {
			var _ref5;

			(_ref5 = _getEvents.call(this)).off.apply(_ref5, arguments);

			return this;
		}
	}]);

	return CardSet;
}();

exports.default = CardSet;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Card = __webpack_require__(0);

var _Card2 = _interopRequireDefault(_Card);

var _CardSet2 = __webpack_require__(1);

var _CardSet3 = _interopRequireDefault(_CardSet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _config = new WeakMap();
var _player = new WeakMap();

function _getConfig() {
	return _config.get(this);
}

var Deck = function (_CardSet) {
	_inherits(Deck, _CardSet);

	_createClass(Deck, [{
		key: 'suits',
		get: function get() {
			return _getConfig.call(this).suits;
		}
	}, {
		key: 'numbers',
		get: function get() {
			return _getConfig.call(this).numbers;
		}
	}, {
		key: 'player',
		get: function get() {
			return _player.get(this);
		}
	}]);

	function Deck(config, player) {
		_classCallCheck(this, Deck);

		var _this = _possibleConstructorReturn(this, (Deck.__proto__ || Object.getPrototypeOf(Deck)).call(this, null, config));

		_config.set(_this, config);
		_player.set(_this, player);

		config.suits.each(function (suit) {
			config.numbers.each(function (number) {
				_this.add(new _Card2.default(suit, number, _this, config));
			});
		});

		_CardSet2._emit.call(_this, 'deck:create', _this);
		return _this;
	}

	_createClass(Deck, [{
		key: 'canDrop',
		value: function canDrop() {
			return false;
		}
	}]);

	return Deck;
}(_CardSet3.default);

exports.default = Deck;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Deck = __webpack_require__(3);

var _Deck2 = _interopRequireDefault(_Deck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _name = new WeakMap();
var _config = new WeakMap();
var _deck = new WeakMap();
var _score = new WeakMap();

function _emit() {
	var _config$get;

	(_config$get = _config.get(this)).emit.apply(_config$get, arguments);
}

function _getConfig() {
	return _config.get(this);
}

var Player = function () {
	_createClass(Player, [{
		key: 'name',
		get: function get() {
			return _name.get(this);
		}
	}, {
		key: 'deck',
		get: function get() {
			return _deck.get(this);
		}
	}, {
		key: 'score',
		get: function get() {
			return _score.get(this);
		}
	}]);

	function Player(name, config) {
		_classCallCheck(this, Player);

		_name.set(this, name);
		_config.set(this, config);
		_deck.set(this, new _Deck2.default(config, this));

		this.resetScore();

		_emit.call(this, 'player:create', this);
	}

	_createClass(Player, [{
		key: 'addScore',
		value: function addScore(num) {
			var oldScore = this.score;
			_score.set(this, oldScore + num);

			_emit.call(this, 'player:addScore', this, oldScore, this.score);

			return this;
		}
	}, {
		key: 'resetScore',
		value: function resetScore() {
			_score.set(this, _getConfig.call(this).initialScore);

			_emit.call(this, 'player:resetScore', this);

			return this;
		}
	}]);

	return Player;
}();

exports.default = Player;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Card = __webpack_require__(0);

var _Card2 = _interopRequireDefault(_Card);

var _CardSet = __webpack_require__(1);

var _CardSet2 = _interopRequireDefault(_CardSet);

var _Deck = __webpack_require__(3);

var _Deck2 = _interopRequireDefault(_Deck);

var _Player = __webpack_require__(4);

var _Player2 = _interopRequireDefault(_Player);

var _Round = __webpack_require__(7);

var _Round2 = _interopRequireDefault(_Round);

var _Config = __webpack_require__(8);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _config = new WeakMap();
var _rounds = new WeakMap();

function _getConfig() {
	return _config.get(this);
}

function _getRounds() {
	return _rounds.get(this);
}

var CardGame = function () {
	_createClass(CardGame, [{
		key: 'currentRound',
		get: function get() {
			return _getRounds.call(this).slice(-1)[0];
		}
	}], [{
		key: 'Config',
		get: function get() {
			return _Config2.default;
		}
	}, {
		key: 'Card',
		get: function get() {
			return _Card2.default;
		}
	}, {
		key: 'CardSet',
		get: function get() {
			return _CardSet2.default;
		}
	}, {
		key: 'Deck',
		get: function get() {
			return _Deck2.default;
		}
	}, {
		key: 'Player',
		get: function get() {
			return _Player2.default;
		}
	}, {
		key: 'Round',
		get: function get() {
			return _Round2.default;
		}
	}]);

	function CardGame(config, players) {
		_classCallCheck(this, CardGame);

		config = config || {};

		if (!(config instanceof _Config2.default)) {
			config = new _Config2.default(config);
		}

		_config.set(this, config);

		_rounds.set(this, [new _Round2.default(config)]);

		this.addPlayers(players);
	}

	_createClass(CardGame, [{
		key: 'enableLogging',
		value: function enableLogging() {
			_config.get(this).logging = true;

			return this;
		}
	}, {
		key: 'addPlayer',
		value: function addPlayer(player) {
			if (player && typeof player === 'string') {
				player = new _Player2.default(player, _getConfig.call(this));
			}

			this.currentRound.addPlayer(player);

			return this;
		}
	}, {
		key: 'addPlayers',
		value: function addPlayers(players) {
			if (!Array.isArray(players)) {
				players = [players];
			}

			players.forEach(this.addPlayer.bind(this));

			return this;
		}
	}, {
		key: 'startRound',
		value: function startRound() {
			this.currentRound.start();

			return this;
		}
	}, {
		key: 'finishRound',
		value: function finishRound() {
			this.currentRound.finish();

			return this;
		}
	}, {
		key: 'newRound',
		value: function newRound(players) {
			players = this.currentRound.mapPlayers(function (player) {
				return player;
			}).concat(players || []);

			_getRounds.call(this).push(new _Round2.default(_getConfig.call(this)).addPlayers(players));

			return this;
		}
	}, {
		key: 'on',
		value: function on() {
			var _ref;

			(_ref = _getConfig.call(this)).on.apply(_ref, arguments);

			return this;
		}
	}, {
		key: 'once',
		value: function once() {
			var _ref2;

			(_ref2 = _getConfig.call(this)).once.apply(_ref2, arguments);

			return this;
		}
	}, {
		key: 'off',
		value: function off() {
			var _ref3;

			(_ref3 = _getConfig.call(this)).off.apply(_ref3, arguments);

			return this;
		}
	}]);

	return CardGame;
}();

/*** EXPORTS FROM exports-loader ***/


exports.default = CardGame;
module.exports = CardGame;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player = __webpack_require__(4);

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _config = new WeakMap();
var _players = new WeakMap();

function _getPlayers() {
	return _players.get(this);
}

function _emit() {
	var _config$get;

	(_config$get = _config.get(this)).emit.apply(_config$get, arguments);
}

var Round = function () {
	function Round(config) {
		_classCallCheck(this, Round);

		_config.set(this, config);
		_players.set(this, []);

		_emit.call(this, 'round:create', this);
	}

	_createClass(Round, [{
		key: 'addPlayer',
		value: function addPlayer(player) {
			if (player instanceof _Player2.default && _getPlayers.call(this).indexOf(player) < 0) {
				_getPlayers.call(this).push(player);
				_emit.call(this, 'round:addPlayer', this, player);
			}

			return this;
		}
	}, {
		key: 'addPlayers',
		value: function addPlayers(players) {
			var _this = this;

			players.forEach(function (player) {
				return _this.addPlayer(player);
			});

			return this;
		}
	}, {
		key: 'start',
		value: function start() {
			this.eachPlayer(function (player) {
				player.deck.shuffle();
				player.resetScore();
			});

			_emit.call(this, 'round:start', this);
			return this;
		}
	}, {
		key: 'finish',
		value: function finish() {

			_emit.call(this, 'round:finish', this);
			return this;
		}
	}, {
		key: 'eachPlayer',
		value: function eachPlayer(fn) {
			_getPlayers.call(this).forEach(fn);

			return this;
		}
	}, {
		key: 'mapPlayers',
		value: function mapPlayers(fn) {
			return _getPlayers.call(this).map(fn);
		}
	}]);

	return Round;
}();

exports.default = Round;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enum = __webpack_require__(9);

var _enum2 = _interopRequireDefault(_enum);

var _tinyEmitter = __webpack_require__(2);

var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var NUMBERS = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY'];

var STANDARD_SUITS = { RED: ['HEARTS', 'DIAMONDS'], BLACK: ['CLUBS', 'SPADES'] };
var STANDARD_NUMBERS = ['ACE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'JACK', 'QUEEN', 'KING'];

function constantCase(str) {
	return str.trim().replace(/\s+/g, '_').toUpperCase();
}

function makeRange(max) {
	return [].concat(_toConsumableArray(Array(max))).map(function (val, n) {
		return NUMBERS[++n];
	});
}

var SuitEnum = function (_Enum) {
	_inherits(SuitEnum, _Enum);

	_createClass(SuitEnum, [{
		key: 'length',
		get: function get() {
			return this.enums.length;
		}
	}]);

	function SuitEnum(suits) {
		_classCallCheck(this, SuitEnum);

		var groups = {};
		var suitMap = {};

		if (!Array.isArray(suits)) {
			var flatSuits = [];
			var groupNames = Object.keys(suits);

			groupNames.forEach(function (name) {
				flatSuits = [].concat(_toConsumableArray(flatSuits), _toConsumableArray(suits[name]));
				suits[name].forEach(function (suit) {
					groups[suit] = name;
				});
			});

			suits = flatSuits;
		}

		suits.forEach(function (suit, i) {
			suitMap[constantCase(suit)] = {
				index: i,
				group: constantCase(groups[suit] || constantCase(suit))
			};
		});

		return _possibleConstructorReturn(this, (SuitEnum.__proto__ || Object.getPrototypeOf(SuitEnum)).call(this, suitMap));
	}

	_createClass(SuitEnum, [{
		key: 'each',
		value: function each(fn) {
			this.enums.forEach(function (suit) {
				return fn(suit.key);
			});
		}
	}]);

	return SuitEnum;
}(_enum2.default);

var NumberEnum = function (_Enum2) {
	_inherits(NumberEnum, _Enum2);

	_createClass(NumberEnum, [{
		key: 'length',
		get: function get() {
			return this.enums.length;
		}
	}]);

	function NumberEnum(numbers) {
		_classCallCheck(this, NumberEnum);

		if (typeof numbers === 'number') {
			numbers = makeRange(numbers);
		}

		var values = {};
		var numberMap = {};

		if (!Array.isArray(numbers)) {
			var _values = numbers;
			numbers = Object.keys(numbers);
		}

		numbers.forEach(function (number, i) {
			numberMap[constantCase(number)] = {
				index: i,
				value: values[number] || i + 1
			};
		});

		return _possibleConstructorReturn(this, (NumberEnum.__proto__ || Object.getPrototypeOf(NumberEnum)).call(this, numberMap));
	}

	_createClass(NumberEnum, [{
		key: 'each',
		value: function each(fn) {
			this.enums.forEach(function (number) {
				return fn(number.key);
			});
		}
	}]);

	return NumberEnum;
}(_enum2.default);

var _suits = new WeakMap();
var _numbers = new WeakMap();
var _initialScore = new WeakMap();
var _events = new WeakMap();
var _logging = new WeakMap();

function _getEvents() {
	return _events.get(this);
}

var Config = function () {
	_createClass(Config, [{
		key: 'suits',
		get: function get() {
			return _suits.get(this);
		}
	}, {
		key: 'numbers',
		get: function get() {
			return _numbers.get(this);
		}
	}, {
		key: 'initialScore',
		get: function get() {
			return _initialScore.get(this);
		}
	}, {
		key: 'logging',
		get: function get() {
			return _logging.get(this);
		},
		set: function set(val) {
			_logging.set(this, !!val);
		}
	}]);

	function Config() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$suits = _ref.suits,
		    suits = _ref$suits === undefined ? STANDARD_SUITS : _ref$suits,
		    _ref$numbers = _ref.numbers,
		    numbers = _ref$numbers === undefined ? STANDARD_NUMBERS : _ref$numbers,
		    _ref$initialScore = _ref.initialScore,
		    initialScore = _ref$initialScore === undefined ? 0 : _ref$initialScore;

		_classCallCheck(this, Config);

		_suits.set(this, new SuitEnum(suits));
		_numbers.set(this, new NumberEnum(numbers));
		_initialScore.set(this, initialScore);
		_events.set(this, new _tinyEmitter2.default());
		_logging.set(this, false);
	}

	_createClass(Config, [{
		key: 'on',
		value: function on() {
			var _ref2;

			(_ref2 = _getEvents.call(this)).on.apply(_ref2, arguments);

			return this;
		}
	}, {
		key: 'once',
		value: function once() {
			var _ref3;

			(_ref3 = _getEvents.call(this)).once.apply(_ref3, arguments);

			return this;
		}
	}, {
		key: 'off',
		value: function off() {
			var _ref4;

			(_ref4 = _getEvents.call(this)).off.apply(_ref4, arguments);

			return this;
		}
	}, {
		key: 'emit',
		value: function emit() {
			var _ref5;

			(_ref5 = _getEvents.call(this)).emit.apply(_ref5, arguments);

			return this;
		}
	}]);

	return Config;
}();

exports.default = Config;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var os = _interopRequire(__webpack_require__(12));

var EnumItem = _interopRequire(__webpack_require__(13));

var _isType = __webpack_require__(5);

var isString = _isType.isString;
var isNumber = _isType.isNumber;

var indexOf = __webpack_require__(14).indexOf;

var isBuffer = _interopRequire(__webpack_require__(15));

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _isType = __webpack_require__(5);

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
/* 14 */
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
/* 15 */
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


/***/ })
/******/ ]);
});