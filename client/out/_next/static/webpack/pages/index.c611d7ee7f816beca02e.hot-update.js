webpackHotUpdate_N_E("pages/index",{

/***/ "./components/libs/Particles.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/react-particles-js/cjs/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/cjs/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||n(t,e,r)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Particles=void 0;var a=o(r(2));t.Particles=a.default,i(r(10),t),i(r(11),t),i(r(12),t),i(r(13),t),i(r(14),t),i(r(15),t),i(r(16),t),i(r(17),t),i(r(18),t),i(r(19),t),i(r(20),t),i(r(21),t),t.default=a.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var i=l(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return u(this,r)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),p=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),d=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&f(t,e,r);return p(t,e),t},y=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var v=d(r(0)),b=r(0),h=y(r(3)),m=r(4),g=r(5),P=r(6),O=r(9),_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(f,e);var t,r,n,u=s(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=u.call(this,e)).state={canvas:void 0,library:void 0},t.loadCanvas=t.loadCanvas.bind(c(t)),t}return t=f,(r=[{key:"buildParticlesLibrary",value:function(e,t){try{if(void 0===window)return null}catch(e){return null}O.tsParticles.init();var r=new m.Options;r.load(P.defaultParams),r.load(t);var n=new g.Container(e,r);return this.props.particlesRef&&(this.props.particlesRef.current=n),n}},{key:"refresh",value:function(e){var t=this,r=this.state.canvas;r&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.id,e.params)},(function(){t.loadCanvas(r)})))}},{key:"destroy",value:function(){this.state.library&&this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},(function(){var r=t.state.library;r&&(r.canvas.loadCanvas(e),r.start())}))}},{key:"shouldComponentUpdate",value:function(e){return!h.default(e,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),o(l(f.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.id,this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.className,i=e.canvasClassName,o=e.id;return v.createElement("div",{className:n,id:o},v.createElement("canvas",{ref:this.loadCanvas,className:i,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}}])&&i(t.prototype,r),n&&i(t,n),f}(b.Component);t.default=_,_.defaultProps={width:"100%",height:"100%",params:P.defaultParams,style:{},id:"tsparticles"}},function(e,t){e.exports=__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Core/Container */ "./node_modules/tsparticles/dist/Core/Container.js")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultParams=void 0;var n=r(7),i=r(8);t.defaultParams={particles:{number:{value:40,max:-1,density:{enable:!1,area:1200}},color:{value:"#FFF"},shape:{type:n.ShapeType.circle,polygon:{sides:5},image:{src:"",width:100,height:100}},stroke:{width:0,color:"#000000"},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,minimumValue:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,minimumValue:0,sync:!1}},links:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:n.MoveDirection.none,random:!1,straight:!1,outMode:n.OutMode.bounce,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detectsOn:n.InteractivityDetect.canvas,events:{onHover:{enable:!1,mode:n.HoverMode.grab},onClick:{enable:!1,mode:n.ClickMode.repulse},resize:!0},modes:{grab:{distance:180,links:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{quantity:4},remove:{quantity:2}}},detectRetina:!0,fpsLimit:999,polygon:{enable:!1,scale:1,type:i.Type.inline,inline:{arrangement:i.InlineArrangement.onePerPoint},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:i.MoveType.path},url:""}}},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums */ "./node_modules/tsparticles/dist/Enums/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles */ "./node_modules/tsparticles/dist/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js")}]));

/***/ }),

/***/ "./node_modules/react-particles-js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-particles-js/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ReactParticles = __webpack_require__(/*! ./cjs/particles */ "./node_modules/react-particles-js/cjs/particles.js");
for (let key in ReactParticles) {
    ReactParticles.default[key] = ReactParticles[key];
}
module.exports = ReactParticles.default;

/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Canvas.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Canvas {
    constructor(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    init() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.resize();
        const options = this.container.actualOptions;
        const element = this.element;
        if (element) {
            if (options.fullScreen.enable) {
                this.originalStyle = Utils_1.Utils.deepExtend({}, element.style);
                element.style.position = "fixed";
                element.style.zIndex = options.fullScreen.zIndex.toString(10);
                element.style.top = "0";
                element.style.left = "0";
                element.style.width = "100%";
                element.style.height = "100%";
            }
            else {
                element.style.position = (_b = (_a = this.originalStyle) === null || _a === void 0 ? void 0 : _a.position) !== null && _b !== void 0 ? _b : "";
                element.style.zIndex = (_d = (_c = this.originalStyle) === null || _c === void 0 ? void 0 : _c.zIndex) !== null && _d !== void 0 ? _d : "";
                element.style.top = (_f = (_e = this.originalStyle) === null || _e === void 0 ? void 0 : _e.top) !== null && _f !== void 0 ? _f : "";
                element.style.left = (_h = (_g = this.originalStyle) === null || _g === void 0 ? void 0 : _g.left) !== null && _h !== void 0 ? _h : "";
                element.style.width = (_k = (_j = this.originalStyle) === null || _j === void 0 ? void 0 : _j.width) !== null && _k !== void 0 ? _k : "";
                element.style.height = (_m = (_l = this.originalStyle) === null || _l === void 0 ? void 0 : _l.height) !== null && _m !== void 0 ? _m : "";
            }
        }
        const cover = options.backgroundMask.cover;
        const color = cover.color;
        const trail = options.particles.move.trail;
        const coverRgb = Utils_1.ColorUtils.colorToRgb(color);
        this.coverColor =
            coverRgb !== undefined
                ? {
                    r: coverRgb.r,
                    g: coverRgb.g,
                    b: coverRgb.b,
                    a: cover.opacity,
                }
                : undefined;
        this.trailFillColor = Utils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.initBackground();
        this.paint();
    }
    loadCanvas(canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Utils_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : this.generatedCanvas;
        this.element = canvas;
        this.originalStyle = Utils_1.Utils.deepExtend({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    }
    destroy() {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    }
    paint() {
        const options = this.container.actualOptions;
        if (!this.context) {
            return;
        }
        if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
            this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.coverColor, this.coverColor.a));
        }
        else {
            this.paintBase();
        }
    }
    clear() {
        const options = this.container.actualOptions;
        const trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    }
    windowResize() {
        if (!this.element) {
            return;
        }
        const container = this.container;
        this.resize();
        container.actualOptions.setResponsive(this.size.width, container.retina.pixelRatio, container.options);
        container.particles.setDensity();
        for (const [, plugin] of container.plugins) {
            if (plugin.resize !== undefined) {
                plugin.resize();
            }
        }
    }
    resize() {
        if (!this.element) {
            return;
        }
        const container = this.container;
        const pxRatio = container.retina.pixelRatio;
        const size = container.canvas.size;
        const oldSize = {
            width: size.width,
            height: size.height,
        };
        size.width = this.element.offsetWidth * pxRatio;
        size.height = this.element.offsetHeight * pxRatio;
        this.element.width = size.width;
        this.element.height = size.height;
        if (this.container.started) {
            this.resizeFactor = {
                width: size.width / oldSize.width,
                height: size.height / oldSize.height,
            };
        }
    }
    drawConnectLine(p1, p2) {
        var _a;
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        const lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        Utils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
    }
    drawGrabLine(particle, lineColor, opacity, mousePos) {
        var _a;
        const container = this.container;
        const ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        const beginPos = particle.getPosition();
        Utils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
    }
    drawParticleShadow(particle, mousePos) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.drawParticleShadow(this.container, this.context, particle, mousePos);
    }
    drawLinkTriangle(p1, link1, link2) {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const p2 = link1.destination;
        const p3 = link2.destination;
        const triangleOptions = p1.options.links.triangles;
        const opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        if (opacityTriangle <= 0) {
            return;
        }
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const pos3 = p3.getPosition();
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        if (Utils_1.NumberUtils.getDistance(pos1, pos2) > container.retina.linksDistance ||
            Utils_1.NumberUtils.getDistance(pos3, pos2) > container.retina.linksDistance ||
            Utils_1.NumberUtils.getDistance(pos3, pos1) > container.retina.linksDistance) {
            return;
        }
        let colorTriangle = Utils_1.ColorUtils.colorToRgb(triangleOptions.color);
        if (!colorTriangle) {
            const linksOptions = p1.options.links;
            const linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors.get(linksOptions.id)
                : container.particles.linksColor;
            colorTriangle = Utils_1.ColorUtils.getLinkColor(p1, p2, linkColor);
        }
        if (!colorTriangle) {
            return;
        }
        Utils_1.CanvasUtils.drawLinkTriangle(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
    }
    drawLinkLine(p1, link) {
        var _a, _b;
        const container = this.container;
        const options = container.actualOptions;
        const p2 = link.destination;
        let opacity = link.opacity;
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        let colorLine;
        const twinkle = p1.options.twinkle.lines;
        if (twinkle.enable) {
            const twinkleFreq = twinkle.frequency;
            const twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
            const twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== undefined) {
                colorLine = twinkleRgb;
                opacity = twinkle.opacity;
            }
        }
        if (!colorLine) {
            const linksOptions = p1.options.links;
            const linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors.get(linksOptions.id)
                : container.particles.linksColor;
            colorLine = Utils_1.ColorUtils.getLinkColor(p1, p2, linkColor);
        }
        if (!colorLine) {
            return;
        }
        const width = (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
        const maxDistance = (_b = p1.linksDistance) !== null && _b !== void 0 ? _b : container.retina.linksDistance;
        Utils_1.CanvasUtils.drawLinkLine(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
    }
    drawParticle(particle, delta) {
        var _a, _b, _c, _d;
        if (((_a = particle.image) === null || _a === void 0 ? void 0 : _a.loaded) === false || particle.spawning || particle.destroyed) {
            return;
        }
        const pfColor = particle.getFillColor();
        const psColor = (_b = particle.getStrokeColor()) !== null && _b !== void 0 ? _b : pfColor;
        if (!pfColor && !psColor) {
            return;
        }
        const options = this.container.actualOptions;
        const pOptions = particle.options;
        const twinkle = pOptions.twinkle.particles;
        const twinkleFreq = twinkle.frequency;
        const twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
        const twinkling = twinkle.enable && Math.random() < twinkleFreq;
        const radius = particle.getRadius();
        const opacity = twinkling ? twinkle.opacity : (_c = particle.bubble.opacity) !== null && _c !== void 0 ? _c : particle.opacity.value;
        const infectionStage = particle.infecter.infectionStage;
        const infection = options.infection;
        const infectionStages = infection.stages;
        const infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
        const infectionRgb = Utils_1.ColorUtils.colorToRgb(infectionColor);
        const fColor = twinkling && twinkleRgb !== undefined
            ? twinkleRgb
            : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : (pfColor ? Utils_1.ColorUtils.hslToRgb(pfColor) : undefined);
        const sColor = twinkling && twinkleRgb !== undefined
            ? twinkleRgb
            : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : (psColor ? Utils_1.ColorUtils.hslToRgb(psColor) : undefined);
        const fillColorValue = fColor !== undefined ? Utils_1.ColorUtils.getStyleFromRgb(fColor, opacity) : undefined;
        if (!this.context || (!fillColorValue && !sColor)) {
            return;
        }
        const strokeColorValue = sColor !== undefined
            ? Utils_1.ColorUtils.getStyleFromRgb(sColor, (_d = particle.stroke.opacity) !== null && _d !== void 0 ? _d : opacity)
            : fillColorValue;
        this.drawParticleLinks(particle);
        if (radius > 0) {
            Utils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, fillColorValue, strokeColorValue, options.backgroundMask.enable, options.backgroundMask.composite, radius, opacity, particle.options.shadow);
        }
    }
    drawParticleLinks(particle) {
        if (!this.context) {
            return;
        }
        const container = this.container;
        const particles = container.particles;
        const pOptions = particle.options;
        if (particle.links.length > 0) {
            this.context.save();
            const p1Links = particle.links.filter((l) => {
                const linkFreq = container.particles.getLinkFrequency(particle, l.destination);
                return linkFreq <= pOptions.links.frequency;
            });
            for (const link of p1Links) {
                const p2 = link.destination;
                if (pOptions.links.triangles.enable) {
                    const links = p1Links.map((l) => l.destination);
                    const vertices = p2.links.filter((t) => {
                        const linkFreq = container.particles.getLinkFrequency(p2, t.destination);
                        return linkFreq <= p2.options.links.frequency && links.indexOf(t.destination) >= 0;
                    });
                    if (vertices.length) {
                        for (const vertex of vertices) {
                            const p3 = vertex.destination;
                            const triangleFreq = particles.getTriangleFrequency(particle, p2, p3);
                            if (triangleFreq > pOptions.links.triangles.frequency) {
                                continue;
                            }
                            this.drawLinkTriangle(particle, link, vertex);
                        }
                    }
                }
                if (link.opacity > 0 && container.retina.linksWidth > 0) {
                    this.drawLinkLine(particle, link);
                }
            }
            this.context.restore();
        }
    }
    drawPlugin(plugin, delta) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    }
    drawLight(mousePos) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.drawLight(this.container, this.context, mousePos);
    }
    paintBase(baseColor) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
    }
    lineStyle(p1, p2) {
        if (!this.context) {
            return;
        }
        const options = this.container.actualOptions;
        const connectOptions = options.interactivity.modes.connect;
        return Utils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.links.opacity);
    }
    initBackground() {
        const options = this.container.actualOptions;
        const background = options.background;
        const element = this.element;
        const elementStyle = element === null || element === void 0 ? void 0 : element.style;
        if (!elementStyle) {
            return;
        }
        if (background.color) {
            const color = Utils_1.ColorUtils.colorToRgb(background.color);
            elementStyle.backgroundColor = color ? Utils_1.ColorUtils.getStyleFromRgb(color, background.opacity) : "";
        }
        else {
            elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
}
exports.Canvas = Canvas;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Container.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Container.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const Canvas_1 = __webpack_require__(/*! ./Canvas */ "./node_modules/tsparticles/dist/Core/Canvas.js");
const Particles_1 = __webpack_require__(/*! ./Particles */ "./node_modules/tsparticles/dist/Core/Particles.js");
const Retina_1 = __webpack_require__(/*! ./Retina */ "./node_modules/tsparticles/dist/Core/Retina.js");
const FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "./node_modules/tsparticles/dist/Core/FrameManager.js");
const Options_1 = __webpack_require__(/*! ../Options/Classes/Options */ "./node_modules/tsparticles/dist/Options/Classes/Options.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Vector_1 = __webpack_require__(/*! ./Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js");
class Container {
    constructor(id, sourceOptions, ...presets) {
        this.id = id;
        this.fpsLimit = 60;
        this.firstStart = true;
        this.started = false;
        this.destroyed = false;
        this.paused = true;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.pathGenerator = {
            generate: () => {
                const v = Vector_1.Vector.create(0, 0);
                v.length = Math.random();
                v.angle = Math.random() * Math.PI * 2;
                return v;
            },
            init: () => {
            },
            update: () => {
            },
        };
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false,
            },
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.attract = { particles: [] };
        this.plugins = new Map();
        this.drawers = new Map();
        this.density = 1;
        this._options = new Options_1.Options();
        this.actualOptions = new Options_1.Options();
        for (const preset of presets) {
            this._options.load(Utils_1.Plugins.getPreset(preset));
        }
        const shapes = Utils_1.Plugins.getSupportedShapes();
        for (const type of shapes) {
            const drawer = Utils_1.Plugins.getShapeDrawer(type);
            if (drawer) {
                this.drawers.set(type, drawer);
            }
        }
        if (this._options) {
            this._options.load(this._sourceOptions);
        }
        this.eventListeners = new Utils_1.EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
            this.intersectionObserver = new IntersectionObserver((entries) => this.intersectionManager(entries));
        }
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    play(force) {
        const needsUpdate = this.paused || force;
        if (this.firstStart && !this.actualOptions.autoPlay) {
            this.firstStart = false;
            return;
        }
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (const [, plugin] of this.plugins) {
                if (plugin.play) {
                    plugin.play();
                }
            }
            this.lastFrameTime = performance.now();
        }
        this.draw();
    }
    pause() {
        if (this.drawAnimationFrame !== undefined) {
            Utils_1.Utils.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (this.paused) {
            return;
        }
        for (const [, plugin] of this.plugins) {
            if (plugin.pause) {
                plugin.pause();
            }
        }
        if (!this.pageHidden) {
            this.paused = true;
        }
    }
    draw() {
        this.drawAnimationFrame = Utils_1.Utils.animate((timestamp) => this.drawer.nextFrame(timestamp));
    }
    getAnimationStatus() {
        return !this.paused;
    }
    setNoise(noiseOrGenerator, init, update) {
        this.setPath(noiseOrGenerator, init, update);
    }
    setPath(pathOrGenerator, init, update) {
        if (!pathOrGenerator) {
            return;
        }
        if (typeof pathOrGenerator === "function") {
            this.pathGenerator.generate = pathOrGenerator;
            if (init) {
                this.pathGenerator.init = init;
            }
            if (update) {
                this.pathGenerator.update = update;
            }
        }
        else {
            if (pathOrGenerator.generate) {
                this.pathGenerator.generate = pathOrGenerator.generate;
            }
            if (pathOrGenerator.init) {
                this.pathGenerator.init = pathOrGenerator.init;
            }
            if (pathOrGenerator.update) {
                this.pathGenerator.update = pathOrGenerator.update;
            }
        }
    }
    destroy() {
        this.stop();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers) {
            if (drawer.destroy) {
                drawer.destroy(this);
            }
        }
        for (const key of this.drawers.keys()) {
            this.drawers.delete(key);
        }
        this.destroyed = true;
    }
    exportImg(callback) {
        this.exportImage(callback);
    }
    exportImage(callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    }
    exportConfiguration() {
        return JSON.stringify(this.actualOptions, undefined, 2);
    }
    refresh() {
        this.stop();
        return this.start();
    }
    reset() {
        this._options = new Options_1.Options();
        return this.refresh();
    }
    stop() {
        if (!this.started) {
            return;
        }
        this.firstStart = true;
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.clear();
        if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
            this.intersectionObserver.observe(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
            if (plugin.stop) {
                plugin.stop();
            }
        }
        for (const key of this.plugins.keys()) {
            this.plugins.delete(key);
        }
        this.particles.linksColors = new Map();
        delete this.particles.grabLineColor;
        delete this.particles.linksColor;
    }
    loadTheme(name) {
        return __awaiter(this, void 0, void 0, function* () {
            this.actualOptions.setTheme(name);
            yield this.refresh();
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.started) {
                return;
            }
            yield this.init();
            this.started = true;
            this.eventListeners.addListeners();
            if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
                this.intersectionObserver.observe(this.interactivity.element);
            }
            for (const [, plugin] of this.plugins) {
                if (plugin.startAsync !== undefined) {
                    yield plugin.startAsync();
                }
                else if (plugin.start !== undefined) {
                    plugin.start();
                }
            }
            this.play();
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.actualOptions = new Options_1.Options();
            this.actualOptions.load(this._options);
            this.retina.init();
            this.canvas.init();
            this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
            this.actualOptions.setTheme(undefined);
            this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
            const availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
            for (const [id, plugin] of availablePlugins) {
                this.plugins.set(id, plugin);
            }
            for (const [, drawer] of this.drawers) {
                if (drawer.init) {
                    yield drawer.init(this);
                }
            }
            for (const [, plugin] of this.plugins) {
                if (plugin.init) {
                    plugin.init(this.actualOptions);
                }
                else if (plugin.initAsync !== undefined) {
                    yield plugin.initAsync(this.actualOptions);
                }
            }
            this.canvas.resize();
            this.particles.init();
            this.particles.setDensity();
        });
    }
    intersectionManager(entries) {
        if (!this.actualOptions.pauseOnOutsideViewport) {
            return;
        }
        for (const entry of entries) {
            if (entry.target !== this.interactivity.element) {
                continue;
            }
            if (entry.isIntersecting) {
                this.play();
            }
            else {
                this.pause();
            }
        }
    }
}
exports.Container = Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/FrameManager.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/FrameManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameManager = void 0;
class FrameManager {
    constructor(container) {
        this.container = container;
    }
    nextFrame(timestamp) {
        try {
            const container = this.container;
            if (container.lastFrameTime !== undefined &&
                timestamp < container.lastFrameTime + 1000 / container.fpsLimit) {
                container.draw();
                return;
            }
            const deltaValue = timestamp - container.lastFrameTime;
            const delta = {
                value: deltaValue,
                factor: (60 * deltaValue) / 1000,
            };
            container.lastFrameTime = timestamp;
            container.particles.draw(delta);
            if (container.getAnimationStatus()) {
                container.draw();
            }
        }
        catch (e) {
            console.error("tsParticles error in animation loop", e);
        }
    }
}
exports.FrameManager = FrameManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Loader.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const Container_1 = __webpack_require__(/*! ./Container */ "./node_modules/tsparticles/dist/Core/Container.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const tsParticlesDom = [];
function fetchError(statusCode) {
    console.error(`Error tsParticles - fetch status: ${statusCode}`);
    console.error("Error tsParticles - File config not found");
}
class Loader {
    static dom() {
        return tsParticlesDom;
    }
    static domItem(index) {
        const dom = Loader.dom();
        const item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    }
    static load(tagId, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            const domContainer = document.getElementById(tagId);
            if (!domContainer) {
                return;
            }
            return Loader.set(tagId, domContainer, options, index);
        });
    }
    static set(id, domContainer, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentOptions = options instanceof Array ? Utils_1.Utils.itemFromArray(options, index) : options;
            const dom = Loader.dom();
            const oldIndex = dom.findIndex((v) => v.id === id);
            if (oldIndex >= 0) {
                const old = Loader.domItem(oldIndex);
                if (old && !old.destroyed) {
                    old.destroy();
                    dom.splice(oldIndex, 1);
                }
            }
            let canvasEl;
            let generatedCanvas;
            if (domContainer.tagName.toLowerCase() === "canvas") {
                canvasEl = domContainer;
                generatedCanvas = false;
            }
            else {
                const existingCanvases = domContainer.getElementsByTagName("canvas");
                if (existingCanvases.length) {
                    canvasEl = existingCanvases[0];
                    if (!canvasEl.className) {
                        canvasEl.className = Utils_1.Constants.canvasClass;
                    }
                    generatedCanvas = false;
                }
                else {
                    generatedCanvas = true;
                    canvasEl = document.createElement("canvas");
                    canvasEl.className = Utils_1.Constants.canvasClass;
                    canvasEl.style.width = "100%";
                    canvasEl.style.height = "100%";
                    domContainer.appendChild(canvasEl);
                }
            }
            const newItem = new Container_1.Container(id, currentOptions);
            if (oldIndex >= 0) {
                dom.splice(oldIndex, 0, newItem);
            }
            else {
                dom.push(newItem);
            }
            newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
            yield newItem.start();
            return newItem;
        });
    }
    static loadJSON(tagId, jsonUrl, index) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = jsonUrl instanceof Array ? Utils_1.Utils.itemFromArray(jsonUrl, index) : jsonUrl;
            const response = yield fetch(url);
            if (response.ok) {
                return Loader.load(tagId, yield response.json());
            }
            else {
                fetchError(response.status);
            }
        });
    }
    static setJSON(id, domContainer, jsonUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(jsonUrl);
            if (response.ok) {
                const options = yield response.json();
                return Loader.set(id, domContainer, options);
            }
            else {
                fetchError(response.status);
            }
        });
    }
    static setOnClickHandler(callback) {
        const dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (const domItem of dom) {
            const el = domItem.interactivity.element;
            if (!el) {
                continue;
            }
            const clickOrTouchHandler = (e, pos) => {
                if (domItem.destroyed) {
                    return;
                }
                const pxRatio = domItem.retina.pixelRatio;
                const posRetina = {
                    x: pos.x * pxRatio,
                    y: pos.y * pxRatio,
                };
                const particles = domItem.particles.quadTree.queryCircle(posRetina, domItem.retina.sizeValue);
                callback(e, particles);
            };
            const clickHandler = (e) => {
                if (domItem.destroyed) {
                    return;
                }
                const mouseEvent = e;
                const pos = {
                    x: mouseEvent.offsetX || mouseEvent.clientX,
                    y: mouseEvent.offsetY || mouseEvent.clientY,
                };
                clickOrTouchHandler(e, pos);
            };
            const touchStartHandler = () => {
                if (domItem.destroyed) {
                    return;
                }
                touched = true;
                touchMoved = false;
            };
            const touchMoveHandler = () => {
                if (domItem.destroyed) {
                    return;
                }
                touchMoved = true;
            };
            const touchEndHandler = (e) => {
                var _a, _b, _c;
                if (domItem.destroyed) {
                    return;
                }
                if (touched && !touchMoved) {
                    const touchEvent = e;
                    const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
                    const canvasRect = (_a = domItem.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                    const pos = {
                        x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                        y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
                    };
                    clickOrTouchHandler(e, pos);
                }
                touched = false;
                touchMoved = false;
            };
            const touchCancelHandler = () => {
                if (domItem.destroyed) {
                    return;
                }
                touched = false;
                touchMoved = false;
            };
            let touched = false;
            let touchMoved = false;
            el.addEventListener("click", clickHandler);
            el.addEventListener("touchstart", touchStartHandler);
            el.addEventListener("touchmove", touchMoveHandler);
            el.addEventListener("touchend", touchEndHandler);
            el.addEventListener("touchcancel", touchCancelHandler);
        }
    }
}
exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particle = void 0;
const Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "./node_modules/tsparticles/dist/Core/Particle/Updater.js");
const ParticlesOptions_1 = __webpack_require__(/*! ../Options/Classes/Particles/ParticlesOptions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesOptions.js");
const Shape_1 = __webpack_require__(/*! ../Options/Classes/Particles/Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Infecter_1 = __webpack_require__(/*! ./Particle/Infecter */ "./node_modules/tsparticles/dist/Core/Particle/Infecter.js");
const Mover_1 = __webpack_require__(/*! ./Particle/Mover */ "./node_modules/tsparticles/dist/Core/Particle/Mover.js");
const Vector_1 = __webpack_require__(/*! ./Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js");
class Particle {
    constructor(id, container, position, overrideOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.id = id;
        this.container = container;
        this.links = [];
        this.fill = true;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.splitCount = 0;
        this.misplaced = false;
        this.loops = {
            opacity: 0,
            size: 0,
        };
        const pxRatio = container.retina.pixelRatio;
        const options = container.actualOptions;
        const particlesOptions = new ParticlesOptions_1.ParticlesOptions();
        particlesOptions.load(options.particles);
        const shapeType = particlesOptions.shape.type;
        const reduceDuplicates = particlesOptions.reduceDuplicates;
        this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;
        if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
            if (overrideOptions.shape.type) {
                const overrideShapeType = overrideOptions.shape.type;
                this.shape =
                    overrideShapeType instanceof Array
                        ? Utils_1.Utils.itemFromArray(overrideShapeType, this.id, reduceDuplicates)
                        : overrideShapeType;
            }
            const shapeOptions = new Shape_1.Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape) {
                const shapeData = shapeOptions.options[this.shape];
                if (shapeData) {
                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array
                        ? Utils_1.Utils.itemFromArray(shapeData, this.id, reduceDuplicates)
                        : shapeData);
                }
            }
        }
        else {
            const shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
            }
        }
        if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
        }
        if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== undefined) {
            particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
        }
        this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
        this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
        this.options = particlesOptions;
        this.pathDelay = Utils_1.NumberUtils.getValue(this.options.move.path.delay) * 1000;
        container.retina.initParticle(this);
        const color = this.options.color;
        const sizeOptions = this.options.size;
        const sizeValue = Utils_1.NumberUtils.getValue(sizeOptions) * container.retina.pixelRatio;
        const randomSize = typeof sizeOptions.random === "boolean" ? sizeOptions.random : sizeOptions.random.enable;
        this.size = {
            value: sizeValue,
        };
        this.direction = this.options.move.direction;
        this.bubble = {
            inRange: false,
        };
        this.initialVelocity = this.calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        const rotateOptions = this.options.rotate;
        this.rotate = {
            value: (Utils_1.NumberUtils.getRangeValue(rotateOptions.value) * Math.PI) / 180,
        };
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === Enums_1.RotateDirection.random) {
            const index = Math.floor(Math.random() * 2);
            rotateDirection = index > 0 ? Enums_1.RotateDirection.counterClockwise : Enums_1.RotateDirection.clockwise;
        }
        switch (rotateDirection) {
            case Enums_1.RotateDirection.counterClockwise:
            case "counterClockwise":
                this.rotate.status = Enums_1.AnimationStatus.decreasing;
                break;
            case Enums_1.RotateDirection.clockwise:
                this.rotate.status = Enums_1.AnimationStatus.increasing;
                break;
        }
        const rotateAnimation = this.options.rotate.animation;
        if (rotateAnimation.enable) {
            this.rotate.velocity = (rotateAnimation.speed / 360) * container.retina.reduceFactor;
            if (!rotateAnimation.sync) {
                this.rotate.velocity *= Math.random();
            }
        }
        const sizeAnimation = this.options.size.animation;
        if (sizeAnimation.enable) {
            this.size.status = Enums_1.AnimationStatus.increasing;
            if (!randomSize) {
                switch (sizeAnimation.startValue) {
                    case Enums_1.StartValueType.min:
                        this.size.value = sizeAnimation.minimumValue * pxRatio;
                        break;
                    case Enums_1.StartValueType.random:
                        this.size.value = Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(sizeAnimation.minimumValue * pxRatio, this.size.value));
                        break;
                    case Enums_1.StartValueType.max:
                    default:
                        this.size.status = Enums_1.AnimationStatus.decreasing;
                        break;
                }
            }
            this.size.velocity =
                (((_g = this.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100) *
                    container.retina.reduceFactor;
            if (!sizeAnimation.sync) {
                this.size.velocity *= Math.random();
            }
        }
        const hslColor = Utils_1.ColorUtils.colorToHsl(color, this.id, reduceDuplicates);
        if (hslColor) {
            this.color = {
                h: {
                    value: hslColor.h,
                },
                s: {
                    value: hslColor.s,
                },
                l: {
                    value: hslColor.l,
                },
            };
            const colorAnimation = this.options.color.animation;
            this.setColorAnimation(colorAnimation.h, this.color.h);
            this.setColorAnimation(colorAnimation.s, this.color.s);
            this.setColorAnimation(colorAnimation.l, this.color.l);
        }
        this.position = this.calcPosition(this.container, position);
        this.initialPosition = this.position.copy();
        this.offset = Vector_1.Vector.create(0, 0);
        const opacityOptions = this.options.opacity;
        const randomOpacity = typeof opacityOptions.random === "boolean" ? opacityOptions.random : opacityOptions.random.enable;
        this.opacity = {
            value: Utils_1.NumberUtils.getValue(opacityOptions),
        };
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            this.opacity.status = Enums_1.AnimationStatus.increasing;
            if (!randomOpacity) {
                switch (opacityAnimation.startValue) {
                    case Enums_1.StartValueType.min:
                        this.opacity.value = opacityAnimation.minimumValue;
                        break;
                    case Enums_1.StartValueType.random:
                        this.opacity.value = Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(opacityAnimation.minimumValue, this.opacity.value));
                        break;
                    case Enums_1.StartValueType.max:
                    default:
                        this.opacity.status = Enums_1.AnimationStatus.decreasing;
                        break;
                }
            }
            this.opacity.velocity = (opacityAnimation.speed / 100) * container.retina.reduceFactor;
            if (!opacityAnimation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = Utils_1.Plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        const imageShape = this.loadImageShape(container, drawer);
        if (imageShape) {
            this.image = imageShape.image;
            this.fill = imageShape.fill;
            this.close = imageShape.close;
        }
        this.stroke =
            this.options.stroke instanceof Array
                ? Utils_1.Utils.itemFromArray(this.options.stroke, this.id, reduceDuplicates)
                : this.options.stroke;
        this.strokeWidth = this.stroke.width * container.retina.pixelRatio;
        const strokeHslColor = (_h = Utils_1.ColorUtils.colorToHsl(this.stroke.color)) !== null && _h !== void 0 ? _h : this.getFillColor();
        if (strokeHslColor) {
            this.strokeColor = {
                h: {
                    value: strokeHslColor.h,
                },
                s: {
                    value: strokeHslColor.s,
                },
                l: {
                    value: strokeHslColor.l,
                },
            };
            const strokeColorAnimation = (_j = this.stroke.color) === null || _j === void 0 ? void 0 : _j.animation;
            if (strokeColorAnimation && this.strokeColor) {
                this.setColorAnimation(strokeColorAnimation.h, this.strokeColor.h);
                this.setColorAnimation(strokeColorAnimation.s, this.strokeColor.s);
                this.setColorAnimation(strokeColorAnimation.l, this.strokeColor.l);
            }
        }
        const lifeOptions = particlesOptions.life;
        this.lifeDelay = container.retina.reduceFactor
            ? ((Utils_1.NumberUtils.getValue(lifeOptions.delay) * (lifeOptions.delay.sync ? 1 : Math.random())) /
                container.retina.reduceFactor) *
                1000
            : 0;
        this.lifeDelayTime = 0;
        this.lifeDuration = container.retina.reduceFactor
            ? ((Utils_1.NumberUtils.getValue(lifeOptions.duration) * (lifeOptions.duration.sync ? 1 : Math.random())) /
                container.retina.reduceFactor) *
                1000
            : 0;
        this.lifeTime = 0;
        this.livesRemaining = particlesOptions.life.count;
        this.spawning = this.lifeDelay > 0;
        if (this.lifeDuration <= 0) {
            this.lifeDuration = -1;
        }
        if (this.livesRemaining <= 0) {
            this.livesRemaining = -1;
        }
        this.shadowColor = Utils_1.ColorUtils.colorToRgb(this.options.shadow.color);
        this.updater = new Updater_1.Updater(container, this);
        this.infecter = new Infecter_1.Infecter(container);
        this.mover = new Mover_1.Mover(container, this);
        if (drawer && drawer.particleInit) {
            drawer.particleInit(container, this);
        }
    }
    move(delta) {
        this.mover.move(delta);
    }
    update(delta) {
        this.updater.update(delta);
    }
    draw(delta) {
        this.container.canvas.drawParticle(this, delta);
    }
    getPosition() {
        return this.position.add(this.offset);
    }
    getRadius() {
        return this.bubble.radius || this.size.value;
    }
    getMass() {
        const radius = this.getRadius();
        return (Math.pow(radius, 2) * Math.PI) / 2;
    }
    getFillColor() {
        var _a;
        return (_a = this.bubble.color) !== null && _a !== void 0 ? _a : Utils_1.ColorUtils.getHslFromAnimation(this.color);
    }
    getStrokeColor() {
        var _a, _b;
        return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : Utils_1.ColorUtils.getHslFromAnimation(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
    }
    destroy(override) {
        this.destroyed = true;
        this.bubble.inRange = false;
        this.links = [];
        if (this.unbreakable) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        for (const [, plugin] of this.container.plugins) {
            if (plugin.particleDestroyed) {
                plugin.particleDestroyed(this, override);
            }
        }
        if (override) {
            return;
        }
        const destroyOptions = this.options.destroy;
        if (destroyOptions.mode === Enums_1.DestroyMode.split) {
            this.split();
        }
    }
    reset() {
        this.loops.opacity = 0;
        this.loops.size = 0;
    }
    split() {
        const splitOptions = this.options.destroy.split;
        if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
            return;
        }
        const rate = Utils_1.NumberUtils.getRangeValue(splitOptions.rate.value);
        for (let i = 0; i < rate; i++) {
            this.container.particles.addSplitParticle(this);
        }
    }
    setColorAnimation(colorAnimation, colorValue) {
        if (colorAnimation.enable) {
            colorValue.velocity = (colorAnimation.speed / 100) * this.container.retina.reduceFactor;
            if (colorAnimation.sync) {
                return;
            }
            colorValue.status = Enums_1.AnimationStatus.increasing;
            colorValue.velocity *= Math.random();
            if (colorValue.value) {
                colorValue.value *= Math.random();
            }
        }
        else {
            colorValue.velocity = 0;
        }
    }
    calcPosition(container, position, tryCount = 0) {
        var _a, _b;
        for (const [, plugin] of container.plugins) {
            const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) {
                return Vector_1.Vector.create(pluginPos.x, pluginPos.y);
            }
        }
        const pos = Vector_1.Vector.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * container.canvas.size.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * container.canvas.size.height);
        const outMode = this.options.move.outMode;
        if (Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounce) || Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounceHorizontal)) {
            if (pos.x > container.canvas.size.width - this.size.value * 2) {
                pos.x -= this.size.value;
            }
            else if (pos.x < this.size.value * 2) {
                pos.x += this.size.value;
            }
        }
        if (Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounce) || Utils_1.Utils.isInArray(outMode, Enums_1.OutMode.bounceVertical)) {
            if (pos.y > container.canvas.size.height - this.size.value * 2) {
                pos.y -= this.size.value;
            }
            else if (pos.y < this.size.value * 2) {
                pos.y += this.size.value;
            }
        }
        if (this.checkOverlap(pos, tryCount)) {
            return this.calcPosition(container, undefined, tryCount + 1);
        }
        return pos;
    }
    checkOverlap(pos, tryCount = 0) {
        const overlapOptions = this.options.collisions.overlap;
        if (!overlapOptions.enable) {
            const retries = overlapOptions.retries;
            if (retries >= 0 && tryCount > retries) {
                throw new Error("Particle is overlapping and can't be placed");
            }
            let overlaps = false;
            for (const particle of this.container.particles.array) {
                if (Utils_1.NumberUtils.getDistance(pos, particle.position) < this.size.value + particle.size.value) {
                    overlaps = true;
                    break;
                }
            }
            return overlaps;
        }
        return false;
    }
    calculateVelocity() {
        const baseVelocity = Utils_1.NumberUtils.getParticleBaseVelocity(this.direction);
        const res = baseVelocity.copy();
        const moveOptions = this.options.move;
        let rad;
        let radOffset = Math.PI / 4;
        if (typeof moveOptions.angle === "number") {
            rad = (Math.PI / 180) * moveOptions.angle;
        }
        else {
            rad = (Math.PI / 180) * moveOptions.angle.value;
            radOffset = (Math.PI / 180) * moveOptions.angle.offset;
        }
        const range = {
            left: Math.sin(radOffset + rad / 2) - Math.sin(radOffset - rad / 2),
            right: Math.cos(radOffset + rad / 2) - Math.cos(radOffset - rad / 2),
        };
        if (!moveOptions.straight || moveOptions.random) {
            res.x += Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(range.left, range.right)) / 2;
            res.y += Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(range.left, range.right)) / 2;
        }
        return res;
    }
    loadImageShape(container, drawer) {
        var _a, _b, _c, _d, _e;
        if (!(this.shape === Enums_1.ShapeType.image || this.shape === Enums_1.ShapeType.images)) {
            return;
        }
        const imageDrawer = drawer;
        const images = imageDrawer.getImages(container).images;
        const imageData = this.shapeData;
        const image = (_a = images.find((t) => t.source === imageData.src)) !== null && _a !== void 0 ? _a : images[0];
        const color = this.getFillColor();
        let imageRes;
        if (!image) {
            return;
        }
        if (image.svgData !== undefined && imageData.replaceColor && color) {
            const svgColoredData = Utils_1.ColorUtils.replaceColorSvg(image, color, this.opacity.value);
            const svg = new Blob([svgColoredData], { type: "image/svg+xml" });
            const domUrl = URL || window.URL || window.webkitURL || window;
            const url = domUrl.createObjectURL(svg);
            const img = new Image();
            imageRes = {
                data: image,
                loaded: false,
                ratio: imageData.width / imageData.height,
                replaceColor: (_b = imageData.replaceColor) !== null && _b !== void 0 ? _b : imageData.replace_color,
                source: imageData.src,
            };
            img.addEventListener("load", () => {
                if (this.image) {
                    this.image.loaded = true;
                    image.element = img;
                }
                domUrl.revokeObjectURL(url);
            });
            img.addEventListener("error", () => {
                domUrl.revokeObjectURL(url);
                Utils_1.Utils.loadImage(imageData.src).then((img2) => {
                    if (this.image && img2) {
                        image.element = img2.element;
                        this.image.loaded = true;
                    }
                });
            });
            img.src = url;
        }
        else {
            imageRes = {
                data: image,
                loaded: true,
                ratio: imageData.width / imageData.height,
                replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
                source: imageData.src,
            };
        }
        if (!imageRes.ratio) {
            imageRes.ratio = 1;
        }
        const fill = (_d = imageData.fill) !== null && _d !== void 0 ? _d : this.fill;
        const close = (_e = imageData.close) !== null && _e !== void 0 ? _e : this.close;
        return {
            image: imageRes,
            fill,
            close,
        };
    }
}
exports.Particle = Particle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Infecter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Infecter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infecter = void 0;
class Infecter {
    constructor(container) {
        this.container = container;
    }
    startInfection(stage) {
        const options = this.container.actualOptions;
        const stages = options.infection.stages;
        const stagesCount = stages.length;
        if (stage > stagesCount || stage < 0) {
            return;
        }
        this.infectionDelay = 0;
        this.infectionDelayStage = stage;
    }
    updateInfectionStage(stage) {
        const options = this.container.actualOptions;
        const stagesCount = options.infection.stages.length;
        if (stage > stagesCount || stage < 0 || (this.infectionStage !== undefined && this.infectionStage > stage)) {
            return;
        }
        this.infectionStage = stage;
        this.infectionTime = 0;
    }
    updateInfection(delta) {
        const options = this.container.actualOptions;
        const infection = options.infection;
        const stages = options.infection.stages;
        const stagesCount = stages.length;
        if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
            const stage = this.infectionDelayStage;
            if (stage > stagesCount || stage < 0) {
                return;
            }
            if (this.infectionDelay > infection.delay * 1000) {
                this.infectionStage = stage;
                this.infectionTime = 0;
                delete this.infectionDelay;
                delete this.infectionDelayStage;
            }
            else {
                this.infectionDelay += delta;
            }
        }
        else {
            delete this.infectionDelay;
            delete this.infectionDelayStage;
        }
        if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
            const infectionStage = stages[this.infectionStage];
            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
                if (this.infectionTime > infectionStage.duration * 1000) {
                    this.nextInfectionStage();
                }
                else {
                    this.infectionTime += delta;
                }
            }
            else {
                this.infectionTime += delta;
            }
        }
        else {
            delete this.infectionStage;
            delete this.infectionTime;
        }
    }
    nextInfectionStage() {
        const options = this.container.actualOptions;
        const stagesCount = options.infection.stages.length;
        if (stagesCount <= 0 || this.infectionStage === undefined) {
            return;
        }
        this.infectionTime = 0;
        if (stagesCount <= ++this.infectionStage) {
            if (options.infection.cure) {
                delete this.infectionStage;
                delete this.infectionTime;
                return;
            }
            else {
                this.infectionStage = 0;
                this.infectionTime = 0;
            }
        }
    }
}
exports.Infecter = Infecter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionManager = void 0;
const Grabber_1 = __webpack_require__(/*! ../../Interactions/External/Grabber */ "./node_modules/tsparticles/dist/Interactions/External/Grabber.js");
const Repulser_1 = __webpack_require__(/*! ../../Interactions/External/Repulser */ "./node_modules/tsparticles/dist/Interactions/External/Repulser.js");
const Bubbler_1 = __webpack_require__(/*! ../../Interactions/External/Bubbler */ "./node_modules/tsparticles/dist/Interactions/External/Bubbler.js");
const Connector_1 = __webpack_require__(/*! ../../Interactions/External/Connector */ "./node_modules/tsparticles/dist/Interactions/External/Connector.js");
const Linker_1 = __webpack_require__(/*! ../../Interactions/Particles/Linker */ "./node_modules/tsparticles/dist/Interactions/Particles/Linker.js");
const Attractor_1 = __webpack_require__(/*! ../../Interactions/Particles/Attractor */ "./node_modules/tsparticles/dist/Interactions/Particles/Attractor.js");
const Collider_1 = __webpack_require__(/*! ../../Interactions/Particles/Collider */ "./node_modules/tsparticles/dist/Interactions/Particles/Collider.js");
const Infecter_1 = __webpack_require__(/*! ../../Interactions/Particles/Infecter */ "./node_modules/tsparticles/dist/Interactions/Particles/Infecter.js");
const TrailMaker_1 = __webpack_require__(/*! ../../Interactions/External/TrailMaker */ "./node_modules/tsparticles/dist/Interactions/External/TrailMaker.js");
const Attractor_2 = __webpack_require__(/*! ../../Interactions/External/Attractor */ "./node_modules/tsparticles/dist/Interactions/External/Attractor.js");
const Lighter_1 = __webpack_require__(/*! ../../Interactions/Particles/Lighter */ "./node_modules/tsparticles/dist/Interactions/Particles/Lighter.js");
const Lighter_2 = __webpack_require__(/*! ../../Interactions/External/Lighter */ "./node_modules/tsparticles/dist/Interactions/External/Lighter.js");
const Bouncer_1 = __webpack_require__(/*! ../../Interactions/External/Bouncer */ "./node_modules/tsparticles/dist/Interactions/External/Bouncer.js");
class InteractionManager {
    constructor(container) {
        this.container = container;
        this.externalInteractors = [
            new Bouncer_1.Bouncer(container),
            new Bubbler_1.Bubbler(container),
            new Connector_1.Connector(container),
            new Grabber_1.Grabber(container),
            new Lighter_2.Lighter(container),
            new Attractor_2.Attractor(container),
            new Repulser_1.Repulser(container),
            new TrailMaker_1.TrailMaker(container),
        ];
        this.particleInteractors = [
            new Attractor_1.Attractor(container),
            new Lighter_1.Lighter(container),
            new Collider_1.Collider(container),
            new Infecter_1.Infecter(container),
            new Linker_1.Linker(container),
        ];
    }
    init() {
    }
    externalInteract(delta) {
        for (const interactor of this.externalInteractors) {
            if (interactor.isEnabled()) {
                interactor.interact(delta);
            }
        }
    }
    particlesInteract(particle, delta) {
        for (const interactor of this.externalInteractors) {
            interactor.reset(particle);
        }
        for (const interactor of this.particleInteractors) {
            if (interactor.isEnabled(particle)) {
                interactor.interact(particle, delta);
            }
        }
    }
}
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Mover.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Mover.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Mover = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class Mover {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    move(delta) {
        const particle = this.particle;
        particle.bubble.inRange = false;
        particle.links = [];
        for (const [, plugin] of this.container.plugins) {
            if (particle.destroyed) {
                break;
            }
            if (plugin.particleUpdate) {
                plugin.particleUpdate(particle, delta);
            }
        }
        if (particle.destroyed) {
            return;
        }
        this.moveParticle(delta);
        this.moveParallax();
    }
    moveParticle(delta) {
        var _a, _b;
        const particle = this.particle;
        const particlesOptions = particle.options;
        if (!particlesOptions.move.enable) {
            return;
        }
        const container = this.container;
        const slowFactor = this.getProximitySpeedFactor();
        const baseSpeed = ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : Utils_1.NumberUtils.getRangeValue(particle.options.move.speed) * container.retina.pixelRatio) *
            container.retina.reduceFactor;
        const maxSize = Utils_1.NumberUtils.getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
        const sizeFactor = particlesOptions.move.size ? particle.getRadius() / maxSize : 1;
        const moveSpeed = (baseSpeed / 2) * sizeFactor * slowFactor * delta.factor;
        const moveDrift = (_b = particle.moveDrift) !== null && _b !== void 0 ? _b : Utils_1.NumberUtils.getRangeValue(particle.options.move.drift) * container.retina.pixelRatio;
        this.applyPath(delta);
        const gravityOptions = particlesOptions.move.gravity;
        if (gravityOptions.enable) {
            particle.velocity.y += (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
        }
        particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);
        const decay = 1 - particle.options.move.decay;
        particle.velocity.multTo(decay);
        const velocity = particle.velocity.mult(moveSpeed);
        if (gravityOptions.enable && velocity.y >= gravityOptions.maxSpeed && gravityOptions.maxSpeed > 0) {
            velocity.y = gravityOptions.maxSpeed;
            particle.velocity.y = velocity.y / moveSpeed;
        }
        particle.position.addTo(velocity);
        if (particlesOptions.move.vibrate) {
            particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
            particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
        }
        const initialPosition = particle.initialPosition;
        const initialDistance = Utils_1.NumberUtils.getDistance(initialPosition, particle.position);
        if (particle.maxDistance) {
            if (initialDistance >= particle.maxDistance && !particle.misplaced) {
                particle.misplaced = initialDistance > particle.maxDistance;
                particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
                particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
            }
            else if (initialDistance < particle.maxDistance && particle.misplaced) {
                particle.misplaced = false;
            }
            else if (particle.misplaced) {
                if ((particle.position.x < initialPosition.x && particle.velocity.x < 0) ||
                    (particle.position.x > initialPosition.x && particle.velocity.x > 0)) {
                    particle.velocity.x *= -Math.random();
                }
                if ((particle.position.y < initialPosition.y && particle.velocity.y < 0) ||
                    (particle.position.y > initialPosition.y && particle.velocity.y > 0)) {
                    particle.velocity.y *= -Math.random();
                }
            }
        }
    }
    applyPath(delta) {
        const particle = this.particle;
        const particlesOptions = particle.options;
        const pathOptions = particlesOptions.move.path;
        const pathEnabled = pathOptions.enable;
        if (!pathEnabled) {
            return;
        }
        const container = this.container;
        if (particle.lastPathTime <= particle.pathDelay) {
            particle.lastPathTime += delta.value;
            return;
        }
        let generator = container.pathGenerator;
        if (pathOptions.generator) {
            const customGenerator = Utils_1.Plugins.getPathGenerator(pathOptions.generator);
            if (customGenerator) {
                generator = customGenerator;
            }
        }
        const path = generator.generate(particle);
        particle.velocity.addTo(path);
        if (pathOptions.clamp) {
            particle.velocity.x = Utils_1.NumberUtils.clamp(particle.velocity.x, -1, 1);
            particle.velocity.y = Utils_1.NumberUtils.clamp(particle.velocity.y, -1, 1);
        }
        particle.lastPathTime -= particle.pathDelay;
    }
    moveParallax() {
        const container = this.container;
        const options = container.actualOptions;
        if (Utils_1.Utils.isSsr() || !options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        const particle = this.particle;
        const parallaxForce = options.interactivity.events.onHover.parallax.force;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const canvasCenter = {
            x: container.canvas.size.width / 2,
            y: container.canvas.size.height / 2,
        };
        const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        const factor = particle.getRadius() / parallaxForce;
        const tmp = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor,
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    }
    getProximitySpeedFactor() {
        const container = this.container;
        const options = container.actualOptions;
        const active = Utils_1.Utils.isInArray(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        const mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        const particlePos = this.particle.getPosition();
        const dist = Utils_1.NumberUtils.getDistance(mousePos, particlePos);
        const radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        const proximityFactor = dist / radius || 0;
        const slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    }
}
exports.Mover = Mover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Updater.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Updater.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const OutModeDirection_1 = __webpack_require__(/*! ../../Enums/Directions/OutModeDirection */ "./node_modules/tsparticles/dist/Enums/Directions/OutModeDirection.js");
function bounceHorizontal(data) {
    if (data.outMode === Enums_1.OutMode.bounce ||
        data.outMode === Enums_1.OutMode.bounceHorizontal ||
        data.outMode === "bounceHorizontal" ||
        data.outMode === Enums_1.OutMode.split) {
        const velocity = data.particle.velocity.x;
        let bounced = false;
        if ((data.direction === OutModeDirection_1.OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0) ||
            (data.direction === OutModeDirection_1.OutModeDirection.left && data.bounds.left <= 0 && velocity < 0)) {
            const newVelocity = Utils_1.NumberUtils.getValue(data.particle.options.bounce.horizontal);
            data.particle.velocity.x *= -newVelocity;
            bounced = true;
        }
        if (!bounced) {
            return;
        }
        const minPos = data.offset.x + data.size;
        if (data.bounds.right >= data.canvasSize.width) {
            data.particle.position.x = data.canvasSize.width - minPos;
        }
        else if (data.bounds.left <= 0) {
            data.particle.position.x = minPos;
        }
        if (data.outMode === Enums_1.OutMode.split) {
            data.particle.destroy();
        }
    }
}
function bounceVertical(data) {
    if (data.outMode === Enums_1.OutMode.bounce ||
        data.outMode === Enums_1.OutMode.bounceVertical ||
        data.outMode === "bounceVertical" ||
        data.outMode === Enums_1.OutMode.split) {
        const velocity = data.particle.velocity.y;
        let bounced = false;
        if ((data.direction === OutModeDirection_1.OutModeDirection.bottom &&
            data.bounds.bottom >= data.canvasSize.height &&
            velocity > 0) ||
            (data.direction === OutModeDirection_1.OutModeDirection.top && data.bounds.top <= 0 && velocity < 0)) {
            const newVelocity = Utils_1.NumberUtils.getValue(data.particle.options.bounce.vertical);
            data.particle.velocity.y *= -newVelocity;
            bounced = true;
        }
        if (!bounced) {
            return;
        }
        const minPos = data.offset.y + data.size;
        if (data.bounds.bottom >= data.canvasSize.height) {
            data.particle.position.y = data.canvasSize.height - minPos;
        }
        else if (data.bounds.top <= 0) {
            data.particle.position.y = minPos;
        }
        if (data.outMode === Enums_1.OutMode.split) {
            data.particle.destroy();
        }
    }
}
function checkDestroy(particle, destroy, value, minValue, maxValue) {
    switch (destroy) {
        case Enums_1.DestroyType.max:
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case Enums_1.DestroyType.min:
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
class Updater {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    update(delta) {
        if (this.particle.destroyed) {
            return;
        }
        this.updateLife(delta);
        if (this.particle.destroyed || this.particle.spawning) {
            return;
        }
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.updateColor(delta);
        this.updateStrokeColor(delta);
        this.updateOutModes(delta);
    }
    updateLife(delta) {
        const particle = this.particle;
        let justSpawned = false;
        if (particle.spawning) {
            particle.lifeDelayTime += delta.value;
            if (particle.lifeDelayTime >= particle.lifeDelay) {
                justSpawned = true;
                particle.spawning = false;
                particle.lifeDelayTime = 0;
                particle.lifeTime = 0;
            }
        }
        if (particle.lifeDuration === -1) {
            return;
        }
        if (!particle.spawning) {
            if (justSpawned) {
                particle.lifeTime = 0;
            }
            else {
                particle.lifeTime += delta.value;
            }
            if (particle.lifeTime >= particle.lifeDuration) {
                particle.lifeTime = 0;
                if (particle.livesRemaining > 0) {
                    particle.livesRemaining--;
                }
                if (particle.livesRemaining === 0) {
                    particle.destroy();
                    return;
                }
                const canvasSize = this.container.canvas.size;
                particle.position.x = Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(0, canvasSize.width));
                particle.position.y = Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(0, canvasSize.height));
                particle.spawning = true;
                particle.lifeDelayTime = 0;
                particle.lifeTime = 0;
                particle.reset();
                const lifeOptions = particle.options.life;
                particle.lifeDelay = Utils_1.NumberUtils.getValue(lifeOptions.delay) * 1000;
                particle.lifeDuration = Utils_1.NumberUtils.getValue(lifeOptions.duration) * 1000;
            }
        }
    }
    updateOpacity(delta) {
        var _a, _b;
        const particle = this.particle;
        const opacityOpt = particle.options.opacity;
        const opacityAnim = opacityOpt.animation;
        const minValue = Utils_1.NumberUtils.getRangeMin(opacityOpt.value);
        const maxValue = Utils_1.NumberUtils.getRangeMax(opacityOpt.value);
        if (!particle.destroyed &&
            opacityAnim.enable &&
            (opacityAnim.count <= 0 || particle.loops.size < opacityAnim.count)) {
            switch (particle.opacity.status) {
                case Enums_1.AnimationStatus.increasing:
                    if (particle.opacity.value >= maxValue) {
                        particle.opacity.status = Enums_1.AnimationStatus.decreasing;
                        particle.loops.opacity++;
                    }
                    else {
                        particle.opacity.value += ((_a = particle.opacity.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
                    }
                    break;
                case Enums_1.AnimationStatus.decreasing:
                    if (particle.opacity.value <= minValue) {
                        particle.opacity.status = Enums_1.AnimationStatus.increasing;
                        particle.loops.opacity++;
                    }
                    else {
                        particle.opacity.value -= ((_b = particle.opacity.velocity) !== null && _b !== void 0 ? _b : 0) * delta.factor;
                    }
                    break;
            }
            checkDestroy(particle, opacityAnim.destroy, particle.opacity.value, minValue, maxValue);
            if (!particle.destroyed) {
                particle.opacity.value = Utils_1.NumberUtils.clamp(particle.opacity.value, minValue, maxValue);
            }
        }
    }
    updateSize(delta) {
        var _a;
        const container = this.container;
        const particle = this.particle;
        const sizeOpt = particle.options.size;
        const sizeAnim = sizeOpt.animation;
        const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        const minValue = Utils_1.NumberUtils.getRangeMin(sizeOpt.value) * container.retina.pixelRatio;
        const maxValue = Utils_1.NumberUtils.getRangeMax(sizeOpt.value) * container.retina.pixelRatio;
        if (!particle.destroyed && sizeAnim.enable && (sizeAnim.count <= 0 || particle.loops.size < sizeAnim.count)) {
            switch (particle.size.status) {
                case Enums_1.AnimationStatus.increasing:
                    if (particle.size.value >= maxValue) {
                        particle.size.status = Enums_1.AnimationStatus.decreasing;
                        particle.loops.size++;
                    }
                    else {
                        particle.size.value += sizeVelocity;
                    }
                    break;
                case Enums_1.AnimationStatus.decreasing:
                    if (particle.size.value <= minValue) {
                        particle.size.status = Enums_1.AnimationStatus.increasing;
                        particle.loops.size++;
                    }
                    else {
                        particle.size.value -= sizeVelocity;
                    }
            }
            checkDestroy(particle, sizeAnim.destroy, particle.size.value, minValue, maxValue);
            if (!particle.destroyed) {
                particle.size.value = Utils_1.NumberUtils.clamp(particle.size.value, minValue, maxValue);
            }
        }
    }
    updateAngle(delta) {
        var _a;
        const particle = this.particle;
        const rotate = particle.options.rotate;
        const rotateAnimation = rotate.animation;
        const speed = ((_a = particle.rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
        const max = 2 * Math.PI;
        if (rotateAnimation.enable) {
            switch (particle.rotate.status) {
                case Enums_1.AnimationStatus.increasing:
                    particle.rotate.value += speed;
                    if (particle.rotate.value > max) {
                        particle.rotate.value -= max;
                    }
                    break;
                case Enums_1.AnimationStatus.decreasing:
                default:
                    particle.rotate.value -= speed;
                    if (particle.rotate.value < 0) {
                        particle.rotate.value += max;
                    }
                    break;
            }
        }
    }
    updateColor(delta) {
        var _a, _b, _c;
        const particle = this.particle;
        const animationOptions = particle.options.color.animation;
        if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== undefined) {
            this.updateColorValue(particle, delta, particle.color.h, animationOptions.h, 360, false);
        }
        if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== undefined) {
            this.updateColorValue(particle, delta, particle.color.s, animationOptions.s, 100, true);
        }
        if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== undefined) {
            this.updateColorValue(particle, delta, particle.color.l, animationOptions.l, 100, true);
        }
    }
    updateStrokeColor(delta) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const particle = this.particle;
        if (!particle.stroke.color) {
            return;
        }
        const animationOptions = particle.stroke.color.animation;
        const valueAnimations = animationOptions;
        if (valueAnimations.enable !== undefined) {
            const hue = (_b = (_a = particle.strokeColor) === null || _a === void 0 ? void 0 : _a.h) !== null && _b !== void 0 ? _b : (_c = particle.color) === null || _c === void 0 ? void 0 : _c.h;
            if (hue) {
                this.updateColorValue(particle, delta, hue, valueAnimations, 360, false);
            }
        }
        else {
            const hslAnimations = animationOptions;
            const h = (_e = (_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.h) !== null && _e !== void 0 ? _e : (_f = particle.color) === null || _f === void 0 ? void 0 : _f.h;
            if (h) {
                this.updateColorValue(particle, delta, h, hslAnimations.h, 360, false);
            }
            const s = (_h = (_g = particle.strokeColor) === null || _g === void 0 ? void 0 : _g.s) !== null && _h !== void 0 ? _h : (_j = particle.color) === null || _j === void 0 ? void 0 : _j.s;
            if (s) {
                this.updateColorValue(particle, delta, s, hslAnimations.s, 100, true);
            }
            const l = (_l = (_k = particle.strokeColor) === null || _k === void 0 ? void 0 : _k.l) !== null && _l !== void 0 ? _l : (_m = particle.color) === null || _m === void 0 ? void 0 : _m.l;
            if (l) {
                this.updateColorValue(particle, delta, l, hslAnimations.l, 100, true);
            }
        }
    }
    updateColorValue(particle, delta, value, valueAnimation, max, decrease) {
        var _a;
        const colorValue = value;
        if (!colorValue || !valueAnimation.enable) {
            return;
        }
        const offset = Utils_1.NumberUtils.randomInRange(valueAnimation.offset);
        const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
        if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
            colorValue.value += velocity;
            if (decrease && colorValue.value > max) {
                colorValue.status = Enums_1.AnimationStatus.decreasing;
                colorValue.value -= colorValue.value % max;
            }
        }
        else {
            colorValue.value -= velocity;
            if (colorValue.value < 0) {
                colorValue.status = Enums_1.AnimationStatus.increasing;
                colorValue.value += colorValue.value;
            }
        }
        if (colorValue.value > max) {
            colorValue.value %= max;
        }
    }
    updateOutModes(delta) {
        var _a, _b, _c, _d;
        const outModes = this.particle.options.move.outModes;
        this.updateOutMode(delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, OutModeDirection_1.OutModeDirection.bottom);
        this.updateOutMode(delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, OutModeDirection_1.OutModeDirection.left);
        this.updateOutMode(delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, OutModeDirection_1.OutModeDirection.right);
        this.updateOutMode(delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, OutModeDirection_1.OutModeDirection.top);
    }
    updateOutMode(delta, outMode, direction) {
        const container = this.container;
        const particle = this.particle;
        switch (outMode) {
            case Enums_1.OutMode.bounce:
            case Enums_1.OutMode.bounceVertical:
            case Enums_1.OutMode.bounceHorizontal:
            case "bounceVertical":
            case "bounceHorizontal":
            case Enums_1.OutMode.split:
                this.updateBounce(delta, direction, outMode);
                break;
            case Enums_1.OutMode.destroy:
                if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
                    container.particles.remove(particle, true);
                }
                break;
            case Enums_1.OutMode.out:
                if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
                    this.fixOutOfCanvasPosition(direction);
                }
                break;
            case Enums_1.OutMode.none:
                this.bounceNone(direction);
                break;
        }
    }
    fixOutOfCanvasPosition(direction) {
        const container = this.container;
        const particle = this.particle;
        const wrap = particle.options.move.warp;
        const canvasSize = container.canvas.size;
        const newPos = {
            bottom: canvasSize.height + particle.getRadius() - particle.offset.y,
            left: -particle.getRadius() - particle.offset.x,
            right: canvasSize.width + particle.getRadius() + particle.offset.x,
            top: -particle.getRadius() - particle.offset.y,
        };
        const sizeValue = particle.getRadius();
        const nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
        if (direction === OutModeDirection_1.OutModeDirection.right && nextBounds.left > canvasSize.width - particle.offset.x) {
            particle.position.x = newPos.left;
            if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
            }
        }
        else if (direction === OutModeDirection_1.OutModeDirection.left && nextBounds.right < -particle.offset.x) {
            particle.position.x = newPos.right;
            if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
            }
        }
        if (direction === OutModeDirection_1.OutModeDirection.bottom && nextBounds.top > canvasSize.height - particle.offset.y) {
            if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
            }
            particle.position.y = newPos.top;
        }
        else if (direction === OutModeDirection_1.OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
            if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
            }
            particle.position.y = newPos.bottom;
        }
    }
    updateBounce(delta, direction, outMode) {
        const container = this.container;
        const particle = this.particle;
        let handled = false;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta, direction);
            }
            if (handled) {
                break;
            }
        }
        if (handled) {
            return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = Utils_1.Utils.calculateBounds(pos, size), canvasSize = container.canvas.size;
        bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size });
        bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size });
    }
    bounceNone(direction) {
        const particle = this.particle;
        if (particle.options.move.distance) {
            return;
        }
        const gravityOptions = particle.options.move.gravity;
        const container = this.container;
        if (!gravityOptions.enable) {
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
                container.particles.remove(particle);
            }
        }
        else {
            const position = particle.position;
            if ((gravityOptions.acceleration >= 0 &&
                position.y > container.canvas.size.height &&
                direction === OutModeDirection_1.OutModeDirection.bottom) ||
                (gravityOptions.acceleration < 0 && position.y < 0 && direction === OutModeDirection_1.OutModeDirection.top)) {
                container.particles.remove(particle);
            }
        }
    }
}
exports.Updater = Updater;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particle/Vector.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particle/Vector.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(x, y) {
        let defX, defY;
        if (y === undefined) {
            if (typeof x === "number") {
                throw new Error("tsParticles - Vector not initialized correctly");
            }
            const coords = x;
            [defX, defY] = [coords.x, coords.y];
        }
        else {
            [defX, defY] = [x, y];
        }
        this.x = defX;
        this.y = defY;
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this.updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    set length(length) {
        this.updateFromAngle(this.angle, length);
    }
    add(v) {
        return Vector.create(this.x + v.x, this.y + v.y);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
    }
    sub(v) {
        return Vector.create(this.x - v.x, this.y - v.y);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
    }
    mult(n) {
        return Vector.create(this.x * n, this.y * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
    }
    div(n) {
        return Vector.create(this.x / n, this.y / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    getLengthSq() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    manhattanDistanceTo(v) {
        return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
    }
    copy() {
        return Vector.clone(this);
    }
    setTo(velocity) {
        this.x = velocity.x;
        this.y = velocity.y;
    }
    rotate(angle) {
        return Vector.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
    }
    updateFromAngle(angle, length) {
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }
}
exports.Vector = Vector;
Vector.origin = Vector.create(0, 0);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Particles.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Particles.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Particles = void 0;
const Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Core/Particle.js");
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const InteractionManager_1 = __webpack_require__(/*! ./Particle/InteractionManager */ "./node_modules/tsparticles/dist/Core/Particle/InteractionManager.js");
const ParticlesOptions_1 = __webpack_require__(/*! ../Options/Classes/Particles/ParticlesOptions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesOptions.js");
class Particles {
    constructor(container) {
        this.container = container;
        this.nextId = 0;
        this.array = [];
        this.limit = 0;
        this.linksFreq = new Map();
        this.trianglesFreq = new Map();
        this.interactionManager = new InteractionManager_1.InteractionManager(container);
        const canvasSize = this.container.canvas.size;
        this.linksColors = new Map();
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, (canvasSize.width * 3) / 2, (canvasSize.height * 3) / 2), 4);
    }
    get count() {
        return this.array.length;
    }
    init() {
        const container = this.container;
        const options = container.actualOptions;
        this.linksFreq = new Map();
        this.trianglesFreq = new Map();
        let handled = false;
        for (const particle of options.manualParticles) {
            const pos = particle.position
                ? {
                    x: (particle.position.x * container.canvas.size.width) / 100,
                    y: (particle.position.y * container.canvas.size.height) / 100,
                }
                : undefined;
            this.addParticle(pos, particle.options);
        }
        for (const [, plugin] of container.plugins) {
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            for (let i = this.count; i < options.particles.number.value; i++) {
                this.addParticle();
            }
        }
        if (options.infection.enable) {
            for (let i = 0; i < options.infection.infections; i++) {
                const notInfected = this.array.filter((p) => p.infecter.infectionStage === undefined);
                const infected = Utils_1.Utils.itemFromArray(notInfected);
                infected.infecter.startInfection(0);
            }
        }
        this.interactionManager.init();
        container.pathGenerator.init();
    }
    redraw() {
        this.clear();
        this.init();
        this.draw({ value: 0, factor: 0 });
    }
    removeAt(index, quantity, override) {
        if (index >= 0 && index <= this.count) {
            for (const particle of this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1)) {
                particle.destroy(override);
            }
        }
    }
    remove(particle, override) {
        this.removeAt(this.array.indexOf(particle), undefined, override);
    }
    update(delta) {
        const container = this.container;
        const particlesToDelete = [];
        container.pathGenerator.update();
        for (const [, plugin] of container.plugins) {
            if (plugin.update !== undefined) {
                plugin.update(delta);
            }
        }
        for (const particle of this.array) {
            const resizeFactor = this.container.canvas.resizeFactor;
            if (resizeFactor) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
            }
            particle.move(delta);
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            this.quadTree.insert(new Utils_1.Point(particle.getPosition(), particle));
        }
        for (const particle of particlesToDelete) {
            this.remove(particle);
        }
        this.interactionManager.externalInteract(delta);
        for (const particle of this.container.particles.array) {
            particle.update(delta);
            if (!particle.destroyed && !particle.spawning) {
                this.interactionManager.particlesInteract(particle, delta);
            }
        }
        delete container.canvas.resizeFactor;
    }
    draw(delta) {
        const container = this.container;
        container.canvas.clear();
        const canvasSize = this.container.canvas.size;
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, (canvasSize.width * 3) / 2, (canvasSize.height * 3) / 2), 4);
        this.update(delta);
        for (const [, plugin] of container.plugins) {
            container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this.array) {
            p.draw(delta);
        }
    }
    clear() {
        this.array = [];
    }
    push(nb, mouse, overrideOptions) {
        const container = this.container;
        const options = container.actualOptions;
        const limit = options.particles.number.limit * container.density;
        this.pushing = true;
        if (limit > 0) {
            const countToRemove = this.count + nb - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        for (let i = 0; i < nb; i++) {
            this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions);
        }
        this.pushing = false;
    }
    addParticle(position, overrideOptions) {
        return this.pushParticle(position, overrideOptions);
    }
    addSplitParticle(parent) {
        const splitOptions = parent.options.destroy.split;
        const options = new ParticlesOptions_1.ParticlesOptions();
        options.load(parent.options);
        const factor = Utils_1.NumberUtils.getRangeValue(splitOptions.factor.value);
        options.color.load({
            value: {
                hsl: parent.getFillColor(),
            },
        });
        if (typeof options.size.value === "number") {
            options.size.value /= factor;
        }
        else {
            options.size.value.min /= factor;
            options.size.value.max /= factor;
        }
        options.load(splitOptions.particles);
        const offset = Utils_1.NumberUtils.setRangeValue(-parent.size.value, parent.size.value);
        const position = {
            x: parent.position.x + Utils_1.NumberUtils.randomInRange(offset),
            y: parent.position.y + Utils_1.NumberUtils.randomInRange(offset),
        };
        return this.pushParticle(position, options, (particle) => {
            if (particle.size.value < 0.5) {
                return false;
            }
            particle.velocity.length = Utils_1.NumberUtils.randomInRange(Utils_1.NumberUtils.setRangeValue(parent.velocity.length, particle.velocity.length));
            particle.splitCount = parent.splitCount + 1;
            particle.unbreakable = true;
            setTimeout(() => {
                particle.unbreakable = false;
            }, 500);
            return true;
        });
    }
    removeQuantity(quantity) {
        this.removeAt(0, quantity);
    }
    getLinkFrequency(p1, p2) {
        const key = `${Math.min(p1.id, p2.id)}_${Math.max(p1.id, p2.id)}`;
        let res = this.linksFreq.get(key);
        if (res === undefined) {
            res = Math.random();
            this.linksFreq.set(key, res);
        }
        return res;
    }
    getTriangleFrequency(p1, p2, p3) {
        let [id1, id2, id3] = [p1.id, p2.id, p3.id];
        if (id1 > id2) {
            [id2, id1] = [id1, id2];
        }
        if (id2 > id3) {
            [id3, id2] = [id2, id3];
        }
        if (id1 > id3) {
            [id3, id1] = [id1, id3];
        }
        const key = `${id1}_${id2}_${id3}`;
        let res = this.trianglesFreq.get(key);
        if (res === undefined) {
            res = Math.random();
            this.trianglesFreq.set(key, res);
        }
        return res;
    }
    setDensity() {
        const options = this.container.actualOptions;
        this.applyDensity(options.particles);
    }
    applyDensity(options) {
        var _a;
        if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
            return;
        }
        const numberOptions = options.number;
        const densityFactor = this.initDensityFactor(numberOptions.density);
        const optParticlesNumber = numberOptions.value;
        const optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        const particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor;
        const particlesCount = this.count;
        this.limit = numberOptions.limit * densityFactor;
        if (particlesCount < particlesNumber) {
            this.push(Math.abs(particlesNumber - particlesCount), undefined, options);
        }
        else if (particlesCount > particlesNumber) {
            this.removeQuantity(particlesCount - particlesNumber);
        }
    }
    initDensityFactor(densityOptions) {
        const container = this.container;
        if (!container.canvas.element || !densityOptions.enable) {
            return 1;
        }
        const canvas = container.canvas.element;
        const pxRatio = container.retina.pixelRatio;
        return (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * pxRatio * densityOptions.area);
    }
    pushParticle(position, overrideOptions, initializer) {
        try {
            const particle = new Particle_1.Particle(this.nextId, this.container, position, overrideOptions);
            let canAdd = true;
            if (initializer) {
                canAdd = initializer(particle);
            }
            if (!canAdd) {
                return;
            }
            this.array.push(particle);
            this.nextId++;
            return particle;
        }
        catch (e) {
            console.warn(`error adding particle: ${e}`);
            return;
        }
    }
}
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Core/Retina.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Core/Retina.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Retina = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Retina {
    constructor(container) {
        this.container = container;
    }
    init() {
        const container = this.container;
        const options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || Utils_1.Utils.isSsr() ? 1 : window.devicePixelRatio;
        const motionOptions = this.container.actualOptions.motion;
        if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
            if (Utils_1.Utils.isSsr() || typeof matchMedia === "undefined" || !matchMedia) {
                this.reduceFactor = 1;
            }
            else {
                const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
                if (mediaQuery) {
                    this.handleMotionChange(mediaQuery);
                    const handleChange = () => {
                        this.handleMotionChange(mediaQuery);
                        container.refresh().catch(() => {
                        });
                    };
                    if (mediaQuery.addEventListener !== undefined) {
                        mediaQuery.addEventListener("change", handleChange);
                    }
                    else if (mediaQuery.addListener !== undefined) {
                        mediaQuery.addListener(handleChange);
                    }
                }
            }
        }
        else {
            this.reduceFactor = 1;
        }
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles;
        this.linksDistance = particles.links.distance * ratio;
        this.linksWidth = particles.links.width * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        const modes = options.interactivity.modes;
        this.connectModeDistance = modes.connect.distance * ratio;
        this.connectModeRadius = modes.connect.radius * ratio;
        this.grabModeDistance = modes.grab.distance * ratio;
        this.repulseModeDistance = modes.repulse.distance * ratio;
        this.bounceModeDistance = modes.bounce.distance * ratio;
        this.attractModeDistance = modes.attract.distance * ratio;
        this.slowModeRadius = modes.slow.radius * ratio;
        this.bubbleModeDistance = modes.bubble.distance * ratio;
        if (modes.bubble.size) {
            this.bubbleModeSize = modes.bubble.size * ratio;
        }
    }
    initParticle(particle) {
        const particlesOptions = particle.options;
        const ratio = this.pixelRatio;
        particle.linksDistance = particlesOptions.links.distance * ratio;
        particle.linksWidth = particlesOptions.links.width * ratio;
        particle.moveDrift = Utils_1.NumberUtils.getRangeValue(particlesOptions.move.drift) * ratio;
        particle.moveSpeed = Utils_1.NumberUtils.getRangeValue(particlesOptions.move.speed) * ratio;
        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
        particle.maxDistance = particlesOptions.move.distance * ratio;
    }
    handleMotionChange(mediaQuery) {
        const options = this.container.actualOptions;
        if (mediaQuery.matches) {
            const motion = options.motion;
            this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
        }
        else {
            this.reduceFactor = 1;
        }
    }
}
exports.Retina = Retina;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/AnimationStatus.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/AnimationStatus.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationStatus = void 0;
var AnimationStatus;
(function (AnimationStatus) {
    AnimationStatus[AnimationStatus["increasing"] = 0] = "increasing";
    AnimationStatus[AnimationStatus["decreasing"] = 1] = "decreasing";
})(AnimationStatus = exports.AnimationStatus || (exports.AnimationStatus = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDirection = void 0;
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/OutModeDirection.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/OutModeDirection.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutModeDirection = void 0;
var OutModeDirection;
(function (OutModeDirection) {
    OutModeDirection["bottom"] = "bottom";
    OutModeDirection["left"] = "left";
    OutModeDirection["right"] = "right";
    OutModeDirection["top"] = "top";
})(OutModeDirection = exports.OutModeDirection || (exports.OutModeDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateDirection = void 0;
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Directions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Directions/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MoveDirection */ "./node_modules/tsparticles/dist/Enums/Directions/MoveDirection.js"), exports);
__exportStar(__webpack_require__(/*! ./RotateDirection */ "./node_modules/tsparticles/dist/Enums/Directions/RotateDirection.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractivityDetect = void 0;
var InteractivityDetect;
(function (InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickMode = void 0;
var ClickMode;
(function (ClickMode) {
    ClickMode["attract"] = "attract";
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
    ClickMode["pause"] = "pause";
    ClickMode["trail"] = "trail";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionMode = void 0;
var CollisionMode;
(function (CollisionMode) {
    CollisionMode["absorb"] = "absorb";
    CollisionMode["bounce"] = "bounce";
    CollisionMode["destroy"] = "destroy";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DestroyMode.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DestroyMode.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyMode = void 0;
var DestroyMode;
(function (DestroyMode) {
    DestroyMode["none"] = "none";
    DestroyMode["split"] = "split";
})(DestroyMode = exports.DestroyMode || (exports.DestroyMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivMode = void 0;
var DivMode;
(function (DivMode) {
    DivMode["bounce"] = "bounce";
    DivMode["bubble"] = "bubble";
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverMode = void 0;
var HoverMode;
(function (HoverMode) {
    HoverMode["attract"] = "attract";
    HoverMode["bounce"] = "bounce";
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["light"] = "light";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
    HoverMode["trail"] = "trail";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/OutMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/OutMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutMode = void 0;
var OutMode;
(function (OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["none"] = "none";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
    OutMode["split"] = "split";
})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeMode = void 0;
var SizeMode;
(function (SizeMode) {
    SizeMode["precise"] = "precise";
    SizeMode["percent"] = "percent";
})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ThemeMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ThemeMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeMode = void 0;
var ThemeMode;
(function (ThemeMode) {
    ThemeMode["any"] = "any";
    ThemeMode["dark"] = "dark";
    ThemeMode["light"] = "light";
})(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js"), exports);
__exportStar(__webpack_require__(/*! ./DestroyMode */ "./node_modules/tsparticles/dist/Enums/Modes/DestroyMode.js"), exports);
__exportStar(__webpack_require__(/*! ./DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js"), exports);
__exportStar(__webpack_require__(/*! ./HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js"), exports);
__exportStar(__webpack_require__(/*! ./CollisionMode */ "./node_modules/tsparticles/dist/Enums/Modes/CollisionMode.js"), exports);
__exportStar(__webpack_require__(/*! ./OutMode */ "./node_modules/tsparticles/dist/Enums/Modes/OutMode.js"), exports);
__exportStar(__webpack_require__(/*! ./SizeMode */ "./node_modules/tsparticles/dist/Enums/Modes/SizeMode.js"), exports);
__exportStar(__webpack_require__(/*! ./ThemeMode */ "./node_modules/tsparticles/dist/Enums/Modes/ThemeMode.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/MoveDirection.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/MoveDirection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OutMode.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OutMode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskInlineArrangement = void 0;
const Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
Object.defineProperty(exports, "PolygonMaskInlineArrangement", { enumerable: true, get: function () { return Enums_1.InlineArrangement; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskMoveType = void 0;
const Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
Object.defineProperty(exports, "PolygonMaskMoveType", { enumerable: true, get: function () { return Enums_1.MoveType; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskType = void 0;
const Enums_1 = __webpack_require__(/*! ../Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
Object.defineProperty(exports, "PolygonMaskType", { enumerable: true, get: function () { return Enums_1.Type; } });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/RotateDirection.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/RotateDirection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ShapeType.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ShapeType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/DestroyType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DestroyType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyType = void 0;
var DestroyType;
(function (DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType = exports.DestroyType || (exports.DestroyType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/DivType.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/DivType.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivType = void 0;
var DivType;
(function (DivType) {
    DivType["circle"] = "circle";
    DivType["rectangle"] = "rectangle";
})(DivType = exports.DivType || (exports.DivType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBubbleType = void 0;
var ProcessBubbleType;
(function (ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/ShapeType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/ShapeType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeType = void 0;
var ShapeType;
(function (ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["image"] = "image";
    ShapeType["images"] = "images";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/StartValueType.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/StartValueType.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartValueType = void 0;
var StartValueType;
(function (StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
    StartValueType["random"] = "random";
})(StartValueType = exports.StartValueType || (exports.StartValueType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./DestroyType */ "./node_modules/tsparticles/dist/Enums/Types/DestroyType.js"), exports);
__exportStar(__webpack_require__(/*! ./ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/Types/ProcessBubbleType.js"), exports);
__exportStar(__webpack_require__(/*! ./ShapeType */ "./node_modules/tsparticles/dist/Enums/Types/ShapeType.js"), exports);
__exportStar(__webpack_require__(/*! ./StartValueType */ "./node_modules/tsparticles/dist/Enums/Types/StartValueType.js"), exports);
__exportStar(__webpack_require__(/*! ./DivType */ "./node_modules/tsparticles/dist/Enums/Types/DivType.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js"), exports);
__exportStar(__webpack_require__(/*! ./AnimationStatus */ "./node_modules/tsparticles/dist/Enums/AnimationStatus.js"), exports);
__exportStar(__webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js"), exports);
__exportStar(__webpack_require__(/*! ./InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Attractor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Attractor.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attractor = void 0;
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Attractor {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        if (!((events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return Utils_1.Utils.isInArray(Enums_1.HoverMode.attract, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.attract, clickMode);
    }
    reset() {
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        const mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        const events = options.interactivity.events;
        const hoverEnabled = events.onHover.enable;
        const hoverMode = events.onHover.mode;
        const clickEnabled = events.onClick.enable;
        const clickMode = events.onClick.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.attract, hoverMode)) {
            this.hoverAttract();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.attract, clickMode)) {
            this.clickAttract();
        }
    }
    hoverAttract() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const attractRadius = container.retina.attractModeDistance;
        this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
    }
    processAttract(position, attractRadius, area) {
        const container = this.container;
        const query = container.particles.quadTree.query(area);
        for (const particle of query) {
            const { dx, dy, distance } = Utils_1.NumberUtils.getDistances(particle.position, position);
            const normVec = {
                x: dx / distance,
                y: dy / distance,
            };
            const velocity = container.actualOptions.interactivity.modes.attract.speed;
            const attractFactor = Utils_1.NumberUtils.clamp((1 - Math.pow(distance / attractRadius, 2)) * velocity, 0, 50);
            particle.position.x -= normVec.x * attractFactor;
            particle.position.y -= normVec.y * attractFactor;
        }
    }
    clickAttract() {
        const container = this.container;
        if (!container.attract.finish) {
            if (!container.attract.count) {
                container.attract.count = 0;
            }
            container.attract.count++;
            if (container.attract.count === container.particles.count) {
                container.attract.finish = true;
            }
        }
        if (container.attract.clicking) {
            const mousePos = container.interactivity.mouse.clickPosition;
            if (!mousePos) {
                return;
            }
            const attractRadius = container.retina.attractModeDistance;
            this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
        }
        else if (container.attract.clicking === false) {
            container.attract.particles = [];
        }
        return;
    }
}
exports.Attractor = Attractor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Bouncer.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Bouncer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bouncer = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Vector_1 = __webpack_require__(/*! ../../Core/Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js");
class Bouncer {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        return ((mouse.position && events.onHover.enable && Utils_1.Utils.isInArray(Enums_1.HoverMode.bounce, events.onHover.mode)) ||
            Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.bounce, divs));
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        const events = options.interactivity.events;
        const mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        const hoverEnabled = events.onHover.enable;
        const hoverMode = events.onHover.mode;
        const divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.bounce, hoverMode)) {
            this.processMouseBounce();
        }
        else {
            Utils_1.Utils.divModeExecute(Enums_1.DivMode.bounce, divs, (selector, div) => this.singleSelectorBounce(selector, div));
        }
    }
    reset() {
    }
    processMouseBounce() {
        const container = this.container;
        const pxRatio = container.retina.pixelRatio;
        const tolerance = 10 * pxRatio;
        const mousePos = container.interactivity.mouse.position;
        const radius = container.retina.bounceModeDistance;
        if (mousePos) {
            this.processBounce(mousePos, radius, new Utils_1.Circle(mousePos.x, mousePos.y, radius + tolerance));
        }
    }
    singleSelectorBounce(selector, div) {
        const container = this.container;
        const query = document.querySelectorAll(selector);
        if (!query.length) {
            return;
        }
        query.forEach((item) => {
            const elem = item;
            const pxRatio = container.retina.pixelRatio;
            const pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            };
            const radius = (elem.offsetWidth / 2) * pxRatio;
            const tolerance = 10 * pxRatio;
            const area = div.type === Enums_1.DivType.circle
                ? new Utils_1.Circle(pos.x, pos.y, radius + tolerance)
                : new Utils_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
            this.processBounce(pos, radius, area);
        });
    }
    processBounce(position, radius, area) {
        const query = this.container.particles.quadTree.query(area);
        for (const particle of query) {
            if (area instanceof Utils_1.Circle) {
                Utils_1.Utils.circleBounce(Utils_1.Utils.circleBounceDataFromParticle(particle), {
                    position,
                    radius,
                    mass: (Math.pow(radius, 2) * Math.PI) / 2,
                    velocity: Vector_1.Vector.create(0, 0),
                    factor: {
                        horizontal: 0,
                        vertical: 0,
                    },
                });
            }
            else if (area instanceof Utils_1.Rectangle) {
                Utils_1.Utils.rectBounce(particle, Utils_1.Utils.calculateBounds(position, radius));
            }
        }
    }
}
exports.Bouncer = Bouncer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Bubbler.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Bubbler.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubbler = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue > optionsValue) {
        const size = particleValue + (modeValue - optionsValue) * ratio;
        return Utils_1.NumberUtils.clamp(size, particleValue, modeValue);
    }
    else if (modeValue < optionsValue) {
        const size = particleValue - (optionsValue - modeValue) * ratio;
        return Utils_1.NumberUtils.clamp(size, modeValue, particleValue);
    }
}
class Bubbler {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        const divBubble = Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.bubble, divs);
        if (!(divBubble || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return (Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode) || divBubble);
    }
    reset(particle, force) {
        if (!particle.bubble.inRange || force) {
            delete particle.bubble.div;
            delete particle.bubble.opacity;
            delete particle.bubble.radius;
            delete particle.bubble.color;
        }
    }
    interact() {
        const options = this.container.actualOptions;
        const events = options.interactivity.events;
        const onHover = events.onHover;
        const onClick = events.onClick;
        const hoverEnabled = onHover.enable;
        const hoverMode = onHover.mode;
        const clickEnabled = onClick.enable;
        const clickMode = onClick.mode;
        const divs = events.onDiv;
        if (hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.bubble, clickMode)) {
            this.clickBubble();
        }
        else {
            Utils_1.Utils.divModeExecute(Enums_1.DivMode.bubble, divs, (selector, div) => this.singleSelectorHover(selector, div));
        }
    }
    singleSelectorHover(selector, div) {
        const container = this.container;
        const selectors = document.querySelectorAll(selector);
        if (!selectors.length) {
            return;
        }
        selectors.forEach((item) => {
            const elem = item;
            const pxRatio = container.retina.pixelRatio;
            const pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            };
            const repulseRadius = (elem.offsetWidth / 2) * pxRatio;
            const area = div.type === Enums_1.DivType.circle
                ? new Utils_1.Circle(pos.x, pos.y, repulseRadius)
                : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
            const query = container.particles.quadTree.query(area);
            for (const particle of query) {
                if (!area.contains(particle.getPosition())) {
                    continue;
                }
                particle.bubble.inRange = true;
                const divs = container.actualOptions.interactivity.modes.bubble.divs;
                const divBubble = Utils_1.Utils.divMode(divs, elem);
                if (!particle.bubble.div || particle.bubble.div !== elem) {
                    this.reset(particle, true);
                    particle.bubble.div = elem;
                }
                this.hoverBubbleSize(particle, 1, divBubble);
                this.hoverBubbleOpacity(particle, 1, divBubble);
                this.hoverBubbleColor(particle, divBubble);
            }
        });
    }
    process(particle, distMouse, timeSpent, data) {
        const container = this.container;
        const bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        const options = container.actualOptions;
        const bubbleDuration = options.interactivity.modes.bubble.duration;
        const bubbleDistance = container.retina.bubbleModeDistance;
        const particlesParam = data.particlesObj.optValue;
        const pObjBubble = data.bubbleObj.value;
        const pObj = data.particlesObj.value || 0;
        const type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        const value = pObj - (timeSpent * (pObj - bubbleParam)) / bubbleDuration;
                        if (type === Enums_1.ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === Enums_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === Enums_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === Enums_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === Enums_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === Enums_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    }
    clickBubble() {
        const container = this.container;
        const options = container.actualOptions;
        const mouseClickPos = container.interactivity.mouse.clickPosition;
        if (mouseClickPos === undefined) {
            return;
        }
        const distance = container.retina.bubbleModeDistance;
        const query = container.particles.quadTree.queryCircle(mouseClickPos, distance);
        for (const particle of query) {
            if (!container.bubble.clicking) {
                continue;
            }
            particle.bubble.inRange = !container.bubble.durationEnd;
            const pos = particle.getPosition();
            const distMouse = Utils_1.NumberUtils.getDistance(pos, mouseClickPos);
            const timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (timeSpent > options.interactivity.modes.bubble.duration) {
                container.bubble.durationEnd = true;
            }
            if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                container.bubble.clicking = false;
                container.bubble.durationEnd = false;
            }
            const sizeData = {
                bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: particle.bubble.radius,
                },
                particlesObj: {
                    optValue: Utils_1.NumberUtils.getRangeMax(particle.options.size.value) * container.retina.pixelRatio,
                    value: particle.size.value,
                },
                type: Enums_1.ProcessBubbleType.size,
            };
            this.process(particle, distMouse, timeSpent, sizeData);
            const opacityData = {
                bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: particle.bubble.opacity,
                },
                particlesObj: {
                    optValue: Utils_1.NumberUtils.getRangeMax(particle.options.opacity.value),
                    value: particle.opacity.value,
                },
                type: Enums_1.ProcessBubbleType.opacity,
            };
            this.process(particle, distMouse, timeSpent, opacityData);
            if (!container.bubble.durationEnd) {
                if (distMouse <= container.retina.bubbleModeDistance) {
                    this.hoverBubbleColor(particle);
                }
                else {
                    delete particle.bubble.color;
                }
            }
            else {
                delete particle.bubble.color;
            }
        }
    }
    hoverBubble() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) {
            return;
        }
        const distance = container.retina.bubbleModeDistance;
        const query = container.particles.quadTree.queryCircle(mousePos, distance);
        for (const particle of query) {
            particle.bubble.inRange = true;
            const pos = particle.getPosition();
            const pointDistance = Utils_1.NumberUtils.getDistance(pos, mousePos);
            const ratio = 1 - pointDistance / distance;
            if (pointDistance <= distance) {
                if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(particle, ratio);
                    this.hoverBubbleOpacity(particle, ratio);
                    this.hoverBubbleColor(particle);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    }
    hoverBubbleSize(particle, ratio, divBubble) {
        const container = this.container;
        const modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size)
            ? divBubble.size * container.retina.pixelRatio
            : container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        const optSize = Utils_1.NumberUtils.getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
        const pSize = particle.size.value;
        const size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    }
    hoverBubbleOpacity(particle, ratio, divBubble) {
        var _a;
        const options = this.container.actualOptions;
        const modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        const optOpacity = particle.options.opacity.value;
        const pOpacity = particle.opacity.value;
        const opacity = calculateBubbleValue(pOpacity, modeOpacity, Utils_1.NumberUtils.getRangeMax(optOpacity), ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    }
    hoverBubbleColor(particle, divBubble) {
        var _a;
        const options = this.container.actualOptions;
        if (particle.bubble.color === undefined) {
            const modeColor = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.color) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            const bubbleColor = modeColor instanceof Array ? Utils_1.Utils.itemFromArray(modeColor) : modeColor;
            particle.bubble.color = Utils_1.ColorUtils.colorToHsl(bubbleColor);
        }
    }
}
exports.Bubbler = Bubbler;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Connector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Connector.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class Connector {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.Utils.isInArray(Modes_1.HoverMode.connect, hoverMode);
    }
    reset() {
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            const distance = Math.abs(container.retina.connectModeRadius);
            const query = container.particles.quadTree.queryCircle(mousePos, distance);
            let i = 0;
            for (const p1 of query) {
                const pos1 = p1.getPosition();
                for (const p2 of query.slice(i + 1)) {
                    const pos2 = p2.getPosition();
                    const distMax = Math.abs(container.retina.connectModeDistance);
                    const xDiff = Math.abs(pos1.x - pos2.x);
                    const yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    }
}
exports.Connector = Connector;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Grabber.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Grabber.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grabber = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class Grabber {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.Utils.isInArray(Modes_1.HoverMode.grab, hoverMode);
    }
    reset() {
    }
    interact() {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
            const mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            const distance = container.retina.grabModeDistance;
            const query = container.particles.quadTree.queryCircle(mousePos, distance);
            for (const particle of query) {
                const pos = particle.getPosition();
                const pointDistance = Utils_1.NumberUtils.getDistance(pos, mousePos);
                if (pointDistance <= distance) {
                    const grabLineOptions = interactivity.modes.grab.links;
                    const lineOpacity = grabLineOptions.opacity;
                    const opacityLine = lineOpacity - (pointDistance * lineOpacity) / distance;
                    if (opacityLine > 0) {
                        const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;
                        if (!container.particles.grabLineColor) {
                            const linksOptions = container.actualOptions.interactivity.modes.grab.links;
                            container.particles.grabLineColor = Utils_1.ColorUtils.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
                        }
                        const colorLine = Utils_1.ColorUtils.getLinkColor(particle, undefined, container.particles.grabLineColor);
                        if (colorLine === undefined) {
                            return;
                        }
                        container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
                    }
                }
            }
        }
    }
}
exports.Grabber = Grabber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Lighter.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Lighter.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighter = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class Lighter {
    constructor(container) {
        this.container = container;
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = container.interactivity.mouse.position;
            if (!mousePos) {
                return;
            }
            container.canvas.drawLight(mousePos);
        }
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.Utils.isInArray(Modes_1.HoverMode.light, hoverMode);
    }
    reset() {
    }
}
exports.Lighter = Lighter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/Repulser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/Repulser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulser = void 0;
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Vector_1 = __webpack_require__(/*! ../../Core/Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js");
class Repulser {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        const divs = events.onDiv;
        const divRepulse = Utils_1.Utils.isDivModeEnabled(Enums_1.DivMode.repulse, divs);
        if (!(divRepulse || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return (Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode) || Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode) || divRepulse);
    }
    reset() {
    }
    interact() {
        const container = this.container;
        const options = container.actualOptions;
        const mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        const events = options.interactivity.events;
        const hoverEnabled = events.onHover.enable;
        const hoverMode = events.onHover.mode;
        const clickEnabled = events.onClick.enable;
        const clickMode = events.onClick.mode;
        const divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse();
        }
        else {
            Utils_1.Utils.divModeExecute(Enums_1.DivMode.repulse, divs, (selector, div) => this.singleSelectorRepulse(selector, div));
        }
    }
    singleSelectorRepulse(selector, div) {
        const container = this.container;
        const query = document.querySelectorAll(selector);
        if (!query.length) {
            return;
        }
        query.forEach((item) => {
            const elem = item;
            const pxRatio = container.retina.pixelRatio;
            const pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            };
            const repulseRadius = (elem.offsetWidth / 2) * pxRatio;
            const area = div.type === Enums_1.DivType.circle
                ? new Utils_1.Circle(pos.x, pos.y, repulseRadius)
                : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
            const divs = container.actualOptions.interactivity.modes.repulse.divs;
            const divRepulse = Utils_1.Utils.divMode(divs, elem);
            this.processRepulse(pos, repulseRadius, area, divRepulse);
        });
    }
    hoverRepulse() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
    }
    processRepulse(position, repulseRadius, area, divRepulse) {
        var _a;
        const container = this.container;
        const query = container.particles.quadTree.query(area);
        for (const particle of query) {
            const { dx, dy, distance } = Utils_1.NumberUtils.getDistances(particle.position, position);
            const normVec = {
                x: dx / distance,
                y: dy / distance,
            };
            const velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : container.actualOptions.interactivity.modes.repulse.speed) * 100;
            const repulseFactor = Utils_1.NumberUtils.clamp((1 - Math.pow(distance / repulseRadius, 2)) * velocity, 0, 50);
            particle.position.x += normVec.x * repulseFactor;
            particle.position.y += normVec.y * repulseFactor;
        }
    }
    clickRepulse() {
        const container = this.container;
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            const repulseDistance = container.retina.repulseModeDistance;
            const repulseRadius = Math.pow(repulseDistance / 6, 3);
            const mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            const range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
            const query = container.particles.quadTree.query(range);
            for (const particle of query) {
                const { dx, dy, distance } = Utils_1.NumberUtils.getDistances(mouseClickPos, particle.position);
                const d = distance * distance;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    const velocity = container.actualOptions.interactivity.modes.repulse.speed;
                    const v = Vector_1.Vector.create(dx, dy);
                    v.length = (-repulseRadius * velocity) / d;
                    particle.velocity.setTo(v);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (const particle of container.repulse.particles) {
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.repulse.particles = [];
        }
    }
}
exports.Repulser = Repulser;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/External/TrailMaker.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/External/TrailMaker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailMaker = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class TrailMaker {
    constructor(container) {
        this.container = container;
        this.delay = 0;
    }
    interact(delta) {
        if (!this.container.retina.reduceFactor) {
            return;
        }
        const container = this.container;
        const options = container.actualOptions;
        const trailOptions = options.interactivity.modes.trail;
        const optDelay = (trailOptions.delay * 1000) / this.container.retina.reduceFactor;
        if (this.delay < optDelay) {
            this.delay += delta.value;
        }
        if (this.delay >= optDelay) {
            container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
            this.delay -= optDelay;
        }
    }
    isEnabled() {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        const events = options.interactivity.events;
        return ((mouse.clicking &&
            mouse.inside &&
            !!mouse.position &&
            Utils_1.Utils.isInArray(Modes_1.ClickMode.trail, events.onClick.mode)) ||
            (mouse.inside && !!mouse.position && Utils_1.Utils.isInArray(Modes_1.HoverMode.trail, events.onHover.mode)));
    }
    reset() {
    }
}
exports.TrailMaker = TrailMaker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/Particles/Attractor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Attractor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attractor = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Attractor {
    constructor(container) {
        this.container = container;
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const distance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query) {
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition();
            const { dx, dy } = Utils_1.NumberUtils.getDistances(pos1, pos2);
            const rotate = p1.options.move.attract.rotate;
            const ax = dx / (rotate.x * 1000);
            const ay = dy / (rotate.y * 1000);
            p1.velocity.x -= ax;
            p1.velocity.y -= ay;
            p2.velocity.x += ax;
            p2.velocity.y += ay;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {
    }
}
exports.Attractor = Attractor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/Particles/Collider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Collider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
function bounce(p1, p2) {
    Utils_1.Utils.circleBounce(Utils_1.Utils.circleBounceDataFromParticle(p1), Utils_1.Utils.circleBounceDataFromParticle(p2));
}
function destroy(p1, p2) {
    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
        p1.destroy();
    }
    else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
        p2.destroy();
    }
    else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        if (p1.getRadius() >= p2.getRadius()) {
            p2.destroy();
        }
        else {
            p1.destroy();
        }
    }
}
class Collider {
    constructor(container) {
        this.container = container;
    }
    isEnabled(particle) {
        return particle.options.collisions.enable;
    }
    reset() {
    }
    interact(p1) {
        const container = this.container;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.queryCircle(pos1, p1.getRadius() * 2);
        for (const p2 of query) {
            if (p1 === p2 ||
                !p2.options.collisions.enable ||
                p1.options.collisions.mode !== p2.options.collisions.mode ||
                p2.destroyed ||
                p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition();
            const dist = Utils_1.NumberUtils.getDistance(pos1, pos2);
            const radius1 = p1.getRadius();
            const radius2 = p2.getRadius();
            const distP = radius1 + radius2;
            if (dist <= distP) {
                this.resolveCollision(p1, p2);
            }
        }
    }
    resolveCollision(p1, p2) {
        switch (p1.options.collisions.mode) {
            case Enums_1.CollisionMode.absorb: {
                this.absorb(p1, p2);
                break;
            }
            case Enums_1.CollisionMode.bounce: {
                bounce(p1, p2);
                break;
            }
            case Enums_1.CollisionMode.destroy: {
                destroy(p1, p2);
                break;
            }
        }
    }
    absorb(p1, p2) {
        const container = this.container;
        const fps = container.actualOptions.fpsLimit / 1000;
        if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
            p1.destroy();
        }
        else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
            p2.destroy();
        }
        else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
            if (p1.getRadius() >= p2.getRadius()) {
                const factor = Utils_1.NumberUtils.clamp(p1.getRadius() / p2.getRadius(), 0, p2.getRadius()) * fps;
                p1.size.value += factor;
                p2.size.value -= factor;
                if (p2.getRadius() <= container.retina.pixelRatio) {
                    p2.size.value = 0;
                    p2.destroy();
                }
            }
            else {
                const factor = Utils_1.NumberUtils.clamp(p2.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;
                p1.size.value -= factor;
                p2.size.value += factor;
                if (p1.getRadius() <= container.retina.pixelRatio) {
                    p1.size.value = 0;
                    p1.destroy();
                }
            }
        }
    }
}
exports.Collider = Collider;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/Particles/Infecter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Infecter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infecter = void 0;
class Infecter {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        return this.container.actualOptions.infection.enable;
    }
    reset() {
    }
    interact(p1, delta) {
        var _a, _b;
        const infecter1 = p1.infecter;
        infecter1.updateInfection(delta.value);
        if (infecter1.infectionStage === undefined) {
            return;
        }
        const container = this.container;
        const options = container.actualOptions;
        const infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        const infectionStage1 = infectionOptions.stages[infecter1.infectionStage];
        const pxRatio = container.retina.pixelRatio;
        const radius = p1.getRadius() * 2 + infectionStage1.radius * pxRatio;
        const pos = p1.getPosition();
        const infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : infecter1.infectionStage;
        const query = container.particles.quadTree.queryCircle(pos, radius);
        const infections = infectionStage1.rate;
        const neighbors = query.length;
        for (const p2 of query) {
            if (p2 === p1 ||
                p2.destroyed ||
                p2.spawning ||
                !(p2.infecter.infectionStage === undefined || p2.infecter.infectionStage !== infecter1.infectionStage)) {
                continue;
            }
            const infecter2 = p2.infecter;
            if (Math.random() < infections / neighbors) {
                if (infecter2.infectionStage === undefined) {
                    infecter2.startInfection(infectedStage1);
                }
                else if (infecter2.infectionStage < infecter1.infectionStage) {
                    infecter2.updateInfectionStage(infectedStage1);
                }
                else if (infecter2.infectionStage > infecter1.infectionStage) {
                    const infectionStage2 = infectionOptions.stages[infecter2.infectionStage];
                    const infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : infecter2.infectionStage;
                    infecter1.updateInfectionStage(infectedStage2);
                }
            }
        }
    }
}
exports.Infecter = Infecter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/Particles/Lighter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Lighter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighter = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Modes_1 = __webpack_require__(/*! ../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class Lighter {
    constructor(container) {
        this.container = container;
    }
    interact(particle) {
        const container = this.container;
        const options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = this.container.interactivity.mouse.position;
            if (mousePos) {
                container.canvas.drawParticleShadow(particle, mousePos);
            }
        }
    }
    isEnabled() {
        const container = this.container;
        const mouse = container.interactivity.mouse;
        const events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        return Utils_1.Utils.isInArray(Modes_1.HoverMode.light, hoverMode);
    }
    reset() {
    }
}
exports.Lighter = Lighter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Interactions/Particles/Linker.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Interactions/Particles/Linker.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Linker = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Linker {
    constructor(container) {
        this.container = container;
    }
    isEnabled(particle) {
        return particle.options.links.enable;
    }
    reset() {
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const linkOpt1 = p1.options.links;
        const optOpacity = linkOpt1.opacity;
        const optDistance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const canvasSize = container.canvas.size;
        const warp = linkOpt1.warp;
        const pos1 = p1.getPosition();
        const range = warp
            ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize)
            : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
        const query = container.particles.quadTree.query(range);
        for (const p2 of query) {
            const linkOpt2 = p2.options.links;
            if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed) {
                continue;
            }
            const pos2 = p2.getPosition();
            let distance = Utils_1.NumberUtils.getDistance(pos1, pos2);
            if (warp) {
                if (distance > optDistance) {
                    const pos2NE = {
                        x: pos2.x - canvasSize.width,
                        y: pos2.y,
                    };
                    distance = Utils_1.NumberUtils.getDistance(pos1, pos2NE);
                    if (distance > optDistance) {
                        const pos2SE = {
                            x: pos2.x - canvasSize.width,
                            y: pos2.y - canvasSize.height,
                        };
                        distance = Utils_1.NumberUtils.getDistance(pos1, pos2SE);
                        if (distance > optDistance) {
                            const pos2SW = {
                                x: pos2.x,
                                y: pos2.y - canvasSize.height,
                            };
                            distance = Utils_1.NumberUtils.getDistance(pos1, pos2SW);
                        }
                    }
                }
            }
            if (distance > optDistance) {
                return;
            }
            const opacityLine = (1 - distance / optDistance) * optOpacity;
            const linksOptions = p1.options.links;
            let linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors.get(linksOptions.id)
                : container.particles.linksColor;
            if (!linkColor) {
                const optColor = linksOptions.color;
                linkColor = Utils_1.ColorUtils.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
                if (linksOptions.id !== undefined) {
                    container.particles.linksColors.set(linksOptions.id, linkColor);
                }
                else {
                    container.particles.linksColor = linkColor;
                }
            }
            if (p2.links.map((t) => t.destination).indexOf(p1) === -1 &&
                p1.links.map((t) => t.destination).indexOf(p2) === -1) {
                p1.links.push({
                    destination: p2,
                    opacity: opacityLine,
                });
            }
        }
    }
}
exports.Linker = Linker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/AnimationOptions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/AnimationOptions.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationOptions = void 0;
class AnimationOptions {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.AnimationOptions = AnimationOptions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Background {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.Background = Background;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMask = void 0;
const BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js");
class BackgroundMask {
    constructor() {
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.composite !== undefined) {
            this.composite = data.composite;
        }
        if (data.cover !== undefined) {
            const cover = data.cover;
            const color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
            this.cover.load(cover.color !== undefined ? cover : { color: color });
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundMaskCover = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class BackgroundMaskCover {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/ColorAnimation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/ColorAnimation.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorAnimation = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class ColorAnimation {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.sync = true;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset !== undefined) {
            this.offset = Utils_1.NumberUtils.setRangeValue(data.offset);
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.ColorAnimation = ColorAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/FullScreen/FullScreen.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/FullScreen/FullScreen.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreen = void 0;
class FullScreen {
    constructor() {
        this.enable = false;
        this.zIndex = -1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.zIndex !== undefined) {
            this.zIndex = data.zIndex;
        }
    }
}
exports.FullScreen = FullScreen;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Infection = void 0;
const InfectionStage_1 = __webpack_require__(/*! ./InfectionStage */ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js");
class Infection {
    constructor() {
        this.cure = false;
        this.delay = 0;
        this.enable = false;
        this.infections = 0;
        this.stages = [];
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.cure !== undefined) {
            this.cure = data.cure;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.infections !== undefined) {
            this.infections = data.infections;
        }
        if (data.stages === undefined) {
            return;
        }
        this.stages = data.stages.map((t) => {
            const s = new InfectionStage_1.InfectionStage();
            s.load(t);
            return s;
        });
    }
}
exports.Infection = Infection;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Infection/InfectionStage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InfectionStage = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class InfectionStage {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#ff0000";
        this.radius = 0;
        this.rate = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        this.duration = data.duration;
        this.infectedStage = data.infectedStage;
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
        if (data.rate !== undefined) {
            this.rate = data.rate;
        }
    }
}
exports.InfectionStage = InfectionStage;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEvent = void 0;
class ClickEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DivEvent = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class DivEvent {
    constructor() {
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = Enums_1.DivType.circle;
    }
    get elementId() {
        return this.ids;
    }
    set elementId(value) {
        this.ids = value;
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    get ids() {
        return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace("#", ""))
            : this.selectors.replace("#", "");
    }
    set ids(value) {
        this.selectors = value instanceof Array ? value.map((t) => `#${t}`) : `#${value}`;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
        if (ids !== undefined) {
            this.ids = ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}
exports.DivEvent = DivEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/ClickEvent.js");
const DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent.js");
const HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js");
class Events {
    constructor() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
        const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
        if (onDiv !== undefined) {
            if (onDiv instanceof Array) {
                this.onDiv = onDiv.map((div) => {
                    const tmp = new DivEvent_1.DivEvent();
                    tmp.load(div);
                    return tmp;
                });
            }
            else {
                this.onDiv = new DivEvent_1.DivEvent();
                this.onDiv.load(onDiv);
            }
        }
        this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
        if (data.resize !== undefined) {
            this.resize = data.resize;
        }
    }
}
exports.Events = Events;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverEvent = void 0;
const Parallax_1 = __webpack_require__(/*! ./Parallax */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js");
class HoverEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
    }
}
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parallax = void 0;
class Parallax {
    constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.force !== undefined) {
            this.force = data.force;
        }
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}
exports.Parallax = Parallax;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Interactivity = void 0;
const Enums_1 = __webpack_require__(/*! ../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Events_1 = __webpack_require__(/*! ./Events/Events */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Events/Events.js");
const Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js");
class Interactivity {
    constructor() {
        this.detectsOn = Enums_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    get detect_on() {
        return this.detectsOn;
    }
    set detect_on(value) {
        this.detectsOn = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
        if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
            if (this.events.onHover.mode instanceof Array) {
                if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) {
                    this.events.onHover.mode.push(Enums_1.HoverMode.slow);
                }
            }
            else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) {
                this.events.onHover.mode = [this.events.onHover.mode, Enums_1.HoverMode.slow];
            }
        }
    }
}
exports.Interactivity = Interactivity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Attract.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Attract.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attract = void 0;
class Attract {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bounce.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bounce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bounce = void 0;
class Bounce {
    constructor() {
        this.distance = 200;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
    }
}
exports.Bounce = Bounce;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble = void 0;
const BubbleDiv_1 = __webpack_require__(/*! ./BubbleDiv */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js");
const BubbleBase_1 = __webpack_require__(/*! ./BubbleBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js");
class Bubble extends BubbleBase_1.BubbleBase {
    load(data) {
        super.load(data);
        if (!(data !== undefined && data.divs !== undefined)) {
            return;
        }
        if (data.divs instanceof Array) {
            this.divs = data.divs.map((s) => {
                const tmp = new BubbleDiv_1.BubbleDiv();
                tmp.load(s);
                return tmp;
            });
        }
        else {
            if (this.divs instanceof Array || !this.divs) {
                this.divs = new BubbleDiv_1.BubbleDiv();
            }
            this.divs.load(data.divs);
        }
    }
}
exports.Bubble = Bubble;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleBase = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class BubbleBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.color !== undefined) {
            if (data.color instanceof Array) {
                this.color = data.color.map((s) => OptionsColor_1.OptionsColor.create(undefined, s));
            }
            else {
                if (this.color instanceof Array) {
                    this.color = new OptionsColor_1.OptionsColor();
                }
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
    }
}
exports.BubbleBase = BubbleBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleDiv.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleDiv = void 0;
const BubbleBase_1 = __webpack_require__(/*! ./BubbleBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/BubbleBase.js");
class BubbleDiv extends BubbleBase_1.BubbleBase {
    constructor() {
        super();
        this.selectors = [];
    }
    get ids() {
        return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace("#", ""))
            : this.selectors.replace("#", "");
    }
    set ids(value) {
        this.selectors = value instanceof Array ? value.map((t) => `#${t}`) : `#${value}`;
    }
    load(data) {
        super.load(data);
        if (data === undefined) {
            return;
        }
        if (data.ids !== undefined) {
            this.ids = data.ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}
exports.BubbleDiv = BubbleDiv;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const ConnectLinks_1 = __webpack_require__(/*! ./ConnectLinks */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js");
class Connect {
    constructor() {
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.Connect = Connect;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/ConnectLinks.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectLinks = void 0;
class ConnectLinks {
    constructor() {
        this.opacity = 0.5;
    }
    load(data) {
        if (!(data !== undefined && data.opacity !== undefined)) {
            return;
        }
        this.opacity = data.opacity;
    }
}
exports.ConnectLinks = ConnectLinks;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grab = void 0;
const GrabLinks_1 = __webpack_require__(/*! ./GrabLinks */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js");
class Grab {
    constructor() {
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    }
}
exports.Grab = Grab;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/GrabLinks.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GrabLinks = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class GrabLinks {
    constructor() {
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.GrabLinks = GrabLinks;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Light.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Light.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Light = void 0;
const LightArea_1 = __webpack_require__(/*! ./LightArea */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightArea.js");
const LightShadow_1 = __webpack_require__(/*! ./LightShadow */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightShadow.js");
class Light {
    constructor() {
        this.area = new LightArea_1.LightArea();
        this.shadow = new LightShadow_1.LightShadow();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.area.load(data.area);
        this.shadow.load(data.shadow);
    }
}
exports.Light = Light;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightArea.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightArea.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LightArea = void 0;
const LightGradient_1 = __webpack_require__(/*! ./LightGradient */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightGradient.js");
class LightArea {
    constructor() {
        this.gradient = new LightGradient_1.LightGradient();
        this.radius = 1000;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.gradient.load(data.gradient);
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.LightArea = LightArea;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightGradient.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightGradient.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LightGradient = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class LightGradient {
    constructor() {
        this.start = new OptionsColor_1.OptionsColor();
        this.stop = new OptionsColor_1.OptionsColor();
        this.start.value = "#ffffff";
        this.stop.value = "#000000";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.start = OptionsColor_1.OptionsColor.create(this.start, data.start);
        this.stop = OptionsColor_1.OptionsColor.create(this.stop, data.stop);
    }
}
exports.LightGradient = LightGradient;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightShadow.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/LightShadow.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LightShadow = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class LightShadow {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.length = 2000;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
exports.LightShadow = LightShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Modes = void 0;
const Bubble_1 = __webpack_require__(/*! ./Bubble */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble.js");
const Connect_1 = __webpack_require__(/*! ./Connect */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Connect.js");
const Grab_1 = __webpack_require__(/*! ./Grab */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Grab.js");
const Remove_1 = __webpack_require__(/*! ./Remove */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js");
const Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js");
const Repulse_1 = __webpack_require__(/*! ./Repulse */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js");
const Slow_1 = __webpack_require__(/*! ./Slow */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js");
const Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Trail.js");
const Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Attract.js");
const Light_1 = __webpack_require__(/*! ./Light */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Light.js");
const Bounce_1 = __webpack_require__(/*! ./Bounce */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Bounce.js");
class Modes {
    constructor() {
        this.attract = new Attract_1.Attract();
        this.bounce = new Bounce_1.Bounce();
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.grab = new Grab_1.Grab();
        this.light = new Light_1.Light();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
        this.trail = new Trail_1.Trail();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.attract.load(data.attract);
        this.bubble.load(data.bubble);
        this.connect.load(data.connect);
        this.grab.load(data.grab);
        this.light.load(data.light);
        this.push.load(data.push);
        this.remove.load(data.remove);
        this.repulse.load(data.repulse);
        this.slow.load(data.slow);
        this.trail.load(data.trail);
    }
}
exports.Modes = Modes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Push = void 0;
class Push {
    constructor() {
        this.quantity = 4;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
    }
}
exports.Push = Push;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
class Remove {
    constructor() {
        this.quantity = 2;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
    }
}
exports.Remove = Remove;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulse = void 0;
const RepulseDiv_1 = __webpack_require__(/*! ./RepulseDiv */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js");
const RepulseBase_1 = __webpack_require__(/*! ./RepulseBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js");
class Repulse extends RepulseBase_1.RepulseBase {
    load(data) {
        super.load(data);
        if ((data === null || data === void 0 ? void 0 : data.divs) === undefined) {
            return;
        }
        if (data.divs instanceof Array) {
            this.divs = data.divs.map((s) => {
                const tmp = new RepulseDiv_1.RepulseDiv();
                tmp.load(s);
                return tmp;
            });
        }
        else {
            if (this.divs instanceof Array || !this.divs) {
                this.divs = new RepulseDiv_1.RepulseDiv();
            }
            this.divs.load(data.divs);
        }
    }
}
exports.Repulse = Repulse;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RepulseBase = void 0;
class RepulseBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.speed = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
exports.RepulseBase = RepulseBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseDiv.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RepulseDiv = void 0;
const RepulseBase_1 = __webpack_require__(/*! ./RepulseBase */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/RepulseBase.js");
class RepulseDiv extends RepulseBase_1.RepulseBase {
    constructor() {
        super();
        this.selectors = [];
    }
    get ids() {
        if (this.selectors instanceof Array) {
            return this.selectors.map((t) => t.replace("#", ""));
        }
        else {
            return this.selectors.replace("#", "");
        }
    }
    set ids(value) {
        if (value instanceof Array) {
            this.selectors = value.map(() => `#${value}`);
        }
        else {
            this.selectors = `#${value}`;
        }
    }
    load(data) {
        super.load(data);
        if (data === undefined) {
            return;
        }
        if (data.ids !== undefined) {
            this.ids = data.ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}
exports.RepulseDiv = RepulseDiv;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Slow = void 0;
class Slow {
    constructor() {
        this.factor = 3;
        this.radius = 200;
    }
    get active() {
        return false;
    }
    set active(_value) {
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.Slow = Slow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Trail.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Interactivity/Modes/Trail.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Trail = void 0;
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Trail {
    constructor() {
        this.delay = 1;
        this.quantity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.quantity !== undefined) {
            this.quantity = data.quantity;
        }
        if (data.particles !== undefined) {
            this.particles = Utils_1.Utils.deepExtend({}, data.particles);
        }
    }
}
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/ManualParticle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/ManualParticle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualParticle = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class ManualParticle {
    load(data) {
        var _a, _b;
        if (!data) {
            return;
        }
        if (data.position !== undefined) {
            this.position = {
                x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
                y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50,
            };
        }
        if (data.options !== undefined) {
            this.options = Utils_1.Utils.deepExtend({}, data.options);
        }
    }
}
exports.ManualParticle = ManualParticle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Motion/Motion.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Motion/Motion.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Motion = void 0;
const MotionReduce_1 = __webpack_require__(/*! ./MotionReduce */ "./node_modules/tsparticles/dist/Options/Classes/Motion/MotionReduce.js");
class Motion {
    constructor() {
        this.disable = false;
        this.reduce = new MotionReduce_1.MotionReduce();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.disable !== undefined) {
            this.disable = data.disable;
        }
        this.reduce.load(data.reduce);
    }
}
exports.Motion = Motion;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Motion/MotionReduce.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Motion/MotionReduce.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionReduce = void 0;
class MotionReduce {
    constructor() {
        this.factor = 4;
        this.value = true;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.MotionReduce = MotionReduce;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "./node_modules/tsparticles/dist/Options/Classes/Interactivity/Interactivity.js");
const ParticlesOptions_1 = __webpack_require__(/*! ./Particles/ParticlesOptions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesOptions.js");
const BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "./node_modules/tsparticles/dist/Options/Classes/BackgroundMask/BackgroundMask.js");
const Background_1 = __webpack_require__(/*! ./Background/Background */ "./node_modules/tsparticles/dist/Options/Classes/Background/Background.js");
const Infection_1 = __webpack_require__(/*! ./Infection/Infection */ "./node_modules/tsparticles/dist/Options/Classes/Infection/Infection.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Theme_1 = __webpack_require__(/*! ./Theme/Theme */ "./node_modules/tsparticles/dist/Options/Classes/Theme/Theme.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const FullScreen_1 = __webpack_require__(/*! ./FullScreen/FullScreen */ "./node_modules/tsparticles/dist/Options/Classes/FullScreen/FullScreen.js");
const Motion_1 = __webpack_require__(/*! ./Motion/Motion */ "./node_modules/tsparticles/dist/Options/Classes/Motion/Motion.js");
const ManualParticle_1 = __webpack_require__(/*! ./ManualParticle */ "./node_modules/tsparticles/dist/Options/Classes/ManualParticle.js");
const Responsive_1 = __webpack_require__(/*! ./Responsive */ "./node_modules/tsparticles/dist/Options/Classes/Responsive.js");
class Options {
    constructor() {
        this.autoPlay = true;
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.fullScreen = new FullScreen_1.FullScreen();
        this.detectRetina = true;
        this.fpsLimit = 60;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.manualParticles = [];
        this.motion = new Motion_1.Motion();
        this.particles = new ParticlesOptions_1.ParticlesOptions();
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.themes = [];
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    get backgroundMode() {
        return this.fullScreen;
    }
    set backgroundMode(value) {
        this.fullScreen.load(value);
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        if (data.preset !== undefined) {
            if (data.preset instanceof Array) {
                for (const preset of data.preset) {
                    this.importPreset(preset);
                }
            }
            else {
                this.importPreset(data.preset);
            }
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== undefined) {
            this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        this.background.load(data.background);
        this.fullScreen.load((_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode);
        this.backgroundMask.load(data.backgroundMask);
        this.infection.load(data.infection);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles !== undefined) {
            this.manualParticles = data.manualParticles.map((t) => {
                const tmp = new ManualParticle_1.ManualParticle();
                tmp.load(t);
                return tmp;
            });
        }
        this.motion.load(data.motion);
        this.particles.load(data.particles);
        Utils_1.Plugins.loadOptions(this, data);
        if (data.responsive !== undefined) {
            for (const responsive of data.responsive) {
                const optResponsive = new Responsive_1.Responsive();
                optResponsive.load(responsive);
                this.responsive.push(optResponsive);
            }
        }
        this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
        if (data.themes !== undefined) {
            for (const theme of data.themes) {
                const optTheme = new Theme_1.Theme();
                optTheme.load(theme);
                this.themes.push(optTheme);
            }
        }
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme) => theme.name === name);
            if (chosenTheme) {
                this.load(chosenTheme.options);
            }
        }
        else {
            const clientDarkMode = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
            let defaultTheme = this.themes.find((theme) => theme.default.value &&
                ((theme.default.mode === Enums_1.ThemeMode.dark && clientDarkMode) ||
                    (theme.default.mode === Enums_1.ThemeMode.light && !clientDarkMode)));
            if (!defaultTheme) {
                defaultTheme = this.themes.find((theme) => theme.default.value && theme.default.mode === Enums_1.ThemeMode.any);
            }
            if (defaultTheme) {
                this.load(defaultTheme.options);
            }
        }
    }
    importPreset(preset) {
        this.load(Utils_1.Plugins.getPreset(preset));
    }
    setResponsive(width, pxRatio, defaultOptions) {
        var _a;
        this.load(defaultOptions);
        this.load((_a = this.responsive.find((t) => t.maxWidth * pxRatio > width)) === null || _a === void 0 ? void 0 : _a.options);
    }
}
exports.Options = Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsColor = void 0;
class OptionsColor {
    constructor() {
        this.value = "#fff";
    }
    static create(source, data) {
        const color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    }
    load(data) {
        if ((data === null || data === void 0 ? void 0 : data.value) === undefined) {
            return;
        }
        this.value = data.value;
    }
}
exports.OptionsColor = OptionsColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatableColor = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
const HslAnimation_1 = __webpack_require__(/*! ./HslAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/HslAnimation.js");
class AnimatableColor extends OptionsColor_1.OptionsColor {
    constructor() {
        super();
        this.animation = new HslAnimation_1.HslAnimation();
    }
    static create(source, data) {
        const color = source !== null && source !== void 0 ? source : new AnimatableColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) {
                this.animation.h.load(colorAnimation);
            }
            else {
                this.animation.load(data.animation);
            }
        }
    }
}
exports.AnimatableColor = AnimatableColor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/Bounce.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/Bounce.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bounce = void 0;
const BounceFactor_1 = __webpack_require__(/*! ./BounceFactor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/BounceFactor.js");
class Bounce {
    constructor() {
        this.horizontal = new BounceFactor_1.BounceFactor();
        this.vertical = new BounceFactor_1.BounceFactor();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}
exports.Bounce = Bounce;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/BounceFactor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/BounceFactor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceFactor = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class BounceFactor extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
}
exports.BounceFactor = BounceFactor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions/Collisions.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions/Collisions.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collisions = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Bounce_1 = __webpack_require__(/*! ../Bounce/Bounce */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/Bounce.js");
const CollisionsOverlap_1 = __webpack_require__(/*! ./CollisionsOverlap */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions/CollisionsOverlap.js");
class Collisions {
    constructor() {
        this.bounce = new Bounce_1.Bounce();
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
        this.overlap = new CollisionsOverlap_1.CollisionsOverlap();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
    }
}
exports.Collisions = Collisions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions/CollisionsOverlap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions/CollisionsOverlap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionsOverlap = void 0;
class CollisionsOverlap {
    constructor() {
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.retries !== undefined) {
            this.retries = data.retries;
        }
    }
}
exports.CollisionsOverlap = CollisionsOverlap;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/Destroy.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/Destroy.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Destroy = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Split_1 = __webpack_require__(/*! ./Split */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/Split.js");
class Destroy {
    constructor() {
        this.mode = Enums_1.DestroyMode.none;
        this.split = new Split_1.Split();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.split.load(data.split);
    }
}
exports.Destroy = Destroy;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/Split.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/Split.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Split = void 0;
const SplitFactor_1 = __webpack_require__(/*! ./SplitFactor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/SplitFactor.js");
const SplitRate_1 = __webpack_require__(/*! ./SplitRate */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/SplitRate.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Split {
    constructor() {
        this.count = 1;
        this.factor = new SplitFactor_1.SplitFactor();
        this.rate = new SplitRate_1.SplitRate();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.factor.load(data.factor);
        this.rate.load(data.rate);
        if (data.particles !== undefined) {
            this.particles = Utils_1.Utils.deepExtend({}, data.particles);
        }
    }
}
exports.Split = Split;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/SplitFactor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/SplitFactor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitFactor = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class SplitFactor extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.value = 3;
    }
}
exports.SplitFactor = SplitFactor;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/SplitRate.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/SplitRate.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitRate = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class SplitRate extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.value = { min: 4, max: 9 };
    }
}
exports.SplitRate = SplitRate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/HslAnimation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/HslAnimation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HslAnimation = void 0;
const ColorAnimation_1 = __webpack_require__(/*! ../ColorAnimation */ "./node_modules/tsparticles/dist/Options/Classes/ColorAnimation.js");
class HslAnimation {
    constructor() {
        this.h = new ColorAnimation_1.ColorAnimation();
        this.s = new ColorAnimation_1.ColorAnimation();
        this.l = new ColorAnimation_1.ColorAnimation();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}
exports.HslAnimation = HslAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Life/Life.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Life/Life.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Life = void 0;
const LifeDelay_1 = __webpack_require__(/*! ./LifeDelay */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDelay.js");
const LifeDuration_1 = __webpack_require__(/*! ./LifeDuration */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDuration.js");
class Life {
    constructor() {
        this.count = 0;
        this.delay = new LifeDelay_1.LifeDelay();
        this.duration = new LifeDuration_1.LifeDuration();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}
exports.Life = Life;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDelay.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDelay.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeDelay = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class LifeDelay extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.LifeDelay = LifeDelay;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDuration.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Life/LifeDuration.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeDuration = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class LifeDuration extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.0001;
        this.sync = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.LifeDuration = LifeDuration;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Links = void 0;
const LinksShadow_1 = __webpack_require__(/*! ./LinksShadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js");
const LinksTriangle_1 = __webpack_require__(/*! ./LinksTriangle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js");
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Links {
    constructor() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.id !== undefined) {
            this.id = data.id;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
exports.Links = Links;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksShadow.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksShadow = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class LinksShadow {
    constructor() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "#00ff00";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.LinksShadow = LinksShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Links/LinksTriangle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksTriangle = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class LinksTriangle {
    constructor() {
        this.enable = false;
        this.frequency = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.LinksTriangle = LinksTriangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Attract.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Attract.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attract = void 0;
class Attract {
    constructor() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    get rotateX() {
        return this.rotate.x;
    }
    set rotateX(value) {
        this.rotate.x = value;
    }
    get rotateY() {
        return this.rotate.y;
    }
    set rotateY(value) {
        this.rotate.y = value;
    }
    load(data) {
        var _a, _b, _c, _d;
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
        if (rotateX !== undefined) {
            this.rotate.x = rotateX;
        }
        const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
        if (rotateY !== undefined) {
            this.rotate.y = rotateY;
        }
    }
}
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Move.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Move.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Attract.js");
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Trail.js");
const Path_1 = __webpack_require__(/*! ./Path/Path */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Path/Path.js");
const MoveAngle_1 = __webpack_require__(/*! ./MoveAngle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveAngle.js");
const MoveGravity_1 = __webpack_require__(/*! ./MoveGravity */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveGravity.js");
const OutModes_1 = __webpack_require__(/*! ./OutModes */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/OutModes.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Move {
    constructor() {
        this.angle = new MoveAngle_1.MoveAngle();
        this.attract = new Attract_1.Attract();
        this.decay = 0;
        this.distance = 0;
        this.direction = Enums_1.MoveDirection.none;
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity_1.MoveGravity();
        this.path = new Path_1.Path();
        this.outModes = new OutModes_1.OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
        this.warp = false;
    }
    get collisions() {
        return false;
    }
    set collisions(value) {
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    get outMode() {
        return this.outModes.default;
    }
    set outMode(value) {
        this.outModes.default = value;
    }
    get noise() {
        return this.path;
    }
    set noise(value) {
        this.path = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        if (data.angle !== undefined) {
            if (typeof data.angle === "number") {
                this.angle.value = data.angle;
            }
            else {
                this.angle.load(data.angle);
            }
        }
        this.attract.load(data.attract);
        if (data.decay !== undefined) {
            this.decay = data.decay;
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.drift !== undefined) {
            this.drift = Utils_1.NumberUtils.setRangeValue(data.drift);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
        if (data.outModes !== undefined || outMode !== undefined) {
            if (typeof data.outModes === "string" || (data.outModes === undefined && outMode !== undefined)) {
                this.outModes.load({
                    default: (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode,
                });
            }
            else {
                this.outModes.load(data.outModes);
            }
        }
        this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.speed !== undefined) {
            this.speed = Utils_1.NumberUtils.setRangeValue(data.speed);
        }
        if (data.straight !== undefined) {
            this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveAngle.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveAngle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveAngle = void 0;
class MoveAngle {
    constructor() {
        this.offset = 45;
        this.value = 90;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.offset !== undefined) {
            this.offset = data.offset;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.MoveAngle = MoveAngle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveGravity.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/MoveGravity.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveGravity = void 0;
class MoveGravity {
    constructor() {
        this.acceleration = 9.81;
        this.enable = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = data.acceleration;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
    }
}
exports.MoveGravity = MoveGravity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/OutModes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/OutModes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OutModes = void 0;
const Modes_1 = __webpack_require__(/*! ../../../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class OutModes {
    constructor() {
        this.default = Modes_1.OutMode.out;
    }
    load(data) {
        var _a, _b, _c, _d;
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
        this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
        this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
        this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
    }
}
exports.OutModes = OutModes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Path/Path.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Path/Path.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const PathDelay_1 = __webpack_require__(/*! ./PathDelay */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Path/PathDelay.js");
class Path {
    constructor() {
        this.clamp = true;
        this.delay = new PathDelay_1.PathDelay();
        this.enable = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.clamp !== undefined) {
            this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.generator = data.generator;
    }
}
exports.Path = Path;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Path/PathDelay.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Path/PathDelay.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PathDelay = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class PathDelay extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
    }
}
exports.PathDelay = PathDelay;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Trail.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Trail.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Trail = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Trail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Number/Density.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Number/Density.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Density = void 0;
class Density {
    constructor() {
        this.enable = false;
        this.area = 800;
        this.factor = 1000;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
        if (area !== undefined) {
            this.area = area;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
    }
}
exports.Density = Density;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Number/ParticlesNumber.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Number/ParticlesNumber.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticlesNumber = void 0;
const Density_1 = __webpack_require__(/*! ./Density */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Number/Density.js");
class ParticlesNumber {
    constructor() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    get max() {
        return this.limit;
    }
    set max(value) {
        this.limit = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        this.density.load(data.density);
        const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
        if (limit !== undefined) {
            this.limit = limit;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Opacity = void 0;
const OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js");
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Opacity extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = Utils_1.NumberUtils.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.Opacity = Opacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/OpacityAnimation.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityAnimation = void 0;
const Types_1 = __webpack_require__(/*! ../../../../Enums/Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js");
const AnimationOptions_1 = __webpack_require__(/*! ../../AnimationOptions */ "./node_modules/tsparticles/dist/Options/Classes/AnimationOptions.js");
class OpacityAnimation extends AnimationOptions_1.AnimationOptions {
    constructor() {
        super();
        this.destroy = Types_1.DestroyType.none;
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.startValue = Types_1.StartValueType.random;
        this.sync = false;
    }
    get opacity_min() {
        return this.minimumValue;
    }
    set opacity_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        super.load(data);
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
        if (minimumValue !== undefined) {
            this.minimumValue = minimumValue;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesOptions.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/ParticlesOptions.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticlesOptions = void 0;
const Links_1 = __webpack_require__(/*! ./Links/Links */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Links/Links.js");
const Move_1 = __webpack_require__(/*! ./Move/Move */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Move/Move.js");
const ParticlesNumber_1 = __webpack_require__(/*! ./Number/ParticlesNumber */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Number/ParticlesNumber.js");
const Opacity_1 = __webpack_require__(/*! ./Opacity/Opacity */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Opacity/Opacity.js");
const Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js");
const Size_1 = __webpack_require__(/*! ./Size/Size */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js");
const Rotate_1 = __webpack_require__(/*! ./Rotate/Rotate */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js");
const Shadow_1 = __webpack_require__(/*! ./Shadow */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js");
const Stroke_1 = __webpack_require__(/*! ./Stroke */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js");
const Collisions_1 = __webpack_require__(/*! ./Collisions/Collisions */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Collisions/Collisions.js");
const Twinkle_1 = __webpack_require__(/*! ./Twinkle/Twinkle */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js");
const AnimatableColor_1 = __webpack_require__(/*! ./AnimatableColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js");
const Life_1 = __webpack_require__(/*! ./Life/Life */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Life/Life.js");
const Bounce_1 = __webpack_require__(/*! ./Bounce/Bounce */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Bounce/Bounce.js");
const Destroy_1 = __webpack_require__(/*! ./Destroy/Destroy */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Destroy/Destroy.js");
class ParticlesOptions {
    constructor() {
        this.bounce = new Bounce_1.Bounce();
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.destroy = new Destroy_1.Destroy();
        this.life = new Life_1.Life();
        this.links = new Links_1.Links();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.reduceDuplicates = false;
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.twinkle = new Twinkle_1.Twinkle();
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (data === undefined) {
            return;
        }
        this.bounce.load(data.bounce);
        this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        this.destroy.load(data.destroy);
        this.life.load(data.life);
        const links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
        if (links !== undefined) {
            this.links.load(links);
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        if (data.reduceDuplicates !== undefined) {
            this.reduceDuplicates = data.reduceDuplicates;
        }
        this.rotate.load(data.rotate);
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.twinkle.load(data.twinkle);
        const collisions = (_d = (_c = data.move) === null || _c === void 0 ? void 0 : _c.collisions) !== null && _d !== void 0 ? _d : (_e = data.move) === null || _e === void 0 ? void 0 : _e.bounce;
        if (collisions !== undefined) {
            this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        const strokeToLoad = (_f = data.stroke) !== null && _f !== void 0 ? _f : (_g = data.shape) === null || _g === void 0 ? void 0 : _g.stroke;
        if (strokeToLoad === undefined) {
            return;
        }
        if (strokeToLoad instanceof Array) {
            this.stroke = strokeToLoad.map((s) => {
                const tmp = new Stroke_1.Stroke();
                tmp.load(s);
                return tmp;
            });
        }
        else {
            if (this.stroke instanceof Array) {
                this.stroke = new Stroke_1.Stroke();
            }
            this.stroke.load(strokeToLoad);
        }
    }
}
exports.ParticlesOptions = ParticlesOptions;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/Rotate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
const RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js");
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class Rotate extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
        this.path = false;
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.animation.load(data.animation);
        if (data.path !== undefined) {
            this.path = data.path;
        }
    }
}
exports.Rotate = Rotate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Rotate/RotateAnimation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateAnimation = void 0;
class RotateAnimation {
    constructor() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Shadow {
    constructor() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset === undefined) {
            return;
        }
        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }
        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}
exports.Shadow = Shadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Shape {
    constructor() {
        this.options = {};
        this.type = Enums_1.ShapeType.circle;
    }
    get image() {
        var _a;
        return ((_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images]);
    }
    set image(value) {
        this.options[Enums_1.ShapeType.image] = value;
        this.options[Enums_1.ShapeType.images] = value;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get images() {
        return this.image instanceof Array ? this.image : [this.image];
    }
    set images(value) {
        this.image = value;
    }
    get stroke() {
        return [];
    }
    set stroke(_value) {
    }
    get character() {
        var _a;
        return ((_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.char]);
    }
    set character(value) {
        this.options[Enums_1.ShapeType.character] = value;
        this.options[Enums_1.ShapeType.char] = value;
    }
    get polygon() {
        var _a;
        return ((_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star]);
    }
    set polygon(value) {
        this.options[Enums_1.ShapeType.polygon] = value;
        this.options[Enums_1.ShapeType.star] = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) {
            return;
        }
        const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
        if (options !== undefined) {
            for (const shape in options) {
                const item = options[shape];
                if (item !== undefined) {
                    this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                }
            }
        }
        this.loadShape(data.character, Enums_1.ShapeType.character, Enums_1.ShapeType.char, true);
        this.loadShape(data.polygon, Enums_1.ShapeType.polygon, Enums_1.ShapeType.star, false);
        this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, Enums_1.ShapeType.image, Enums_1.ShapeType.images, true);
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
    loadShape(item, mainKey, altKey, altOverride) {
        var _a, _b, _c, _d;
        if (item === undefined) {
            return;
        }
        if (item instanceof Array) {
            if (!(this.options[mainKey] instanceof Array)) {
                this.options[mainKey] = [];
                if (!this.options[altKey] || altOverride) {
                    this.options[altKey] = [];
                }
            }
            this.options[mainKey] = Utils_1.Utils.deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);
            if (!this.options[altKey] || altOverride) {
                this.options[altKey] = Utils_1.Utils.deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
            }
        }
        else {
            if (this.options[mainKey] instanceof Array) {
                this.options[mainKey] = {};
                if (!this.options[altKey] || altOverride) {
                    this.options[altKey] = {};
                }
            }
            this.options[mainKey] = Utils_1.Utils.deepExtend((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);
            if (!this.options[altKey] || altOverride) {
                this.options[altKey] = Utils_1.Utils.deepExtend((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
            }
        }
    }
}
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/Size.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
const SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js");
const ValueWithRandom_1 = __webpack_require__(/*! ../../ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Size extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = Utils_1.NumberUtils.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.Size = Size;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Size/SizeAnimation.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeAnimation = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const AnimationOptions_1 = __webpack_require__(/*! ../../AnimationOptions */ "./node_modules/tsparticles/dist/Options/Classes/AnimationOptions.js");
class SizeAnimation extends AnimationOptions_1.AnimationOptions {
    constructor() {
        super();
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.startValue = Enums_1.StartValueType.random;
        this.sync = false;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        super.load(data);
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
        if (minimumValue !== undefined) {
            this.minimumValue = minimumValue;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stroke = void 0;
const AnimatableColor_1 = __webpack_require__(/*! ./AnimatableColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js");
class Stroke {
    constructor() {
        this.width = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.Stroke = Stroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/Twinkle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Twinkle = void 0;
const TwinkleValues_1 = __webpack_require__(/*! ./TwinkleValues */ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js");
class Twinkle {
    constructor() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}
exports.Twinkle = Twinkle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Particles/Twinkle/TwinkleValues.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TwinkleValues = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class TwinkleValues {
    constructor() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.TwinkleValues = TwinkleValues;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Random.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Random.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
exports.Random = Random;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Responsive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Responsive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Responsive = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class Responsive {
    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.options !== undefined) {
            this.options = Utils_1.Utils.deepExtend({}, data.options);
        }
    }
}
exports.Responsive = Responsive;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Theme/Theme.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Theme/Theme.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const Utils_1 = __webpack_require__(/*! ../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const ThemeDefault_1 = __webpack_require__(/*! ./ThemeDefault */ "./node_modules/tsparticles/dist/Options/Classes/Theme/ThemeDefault.js");
class Theme {
    constructor() {
        this.name = "";
        this.default = new ThemeDefault_1.ThemeDefault();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== undefined) {
            this.options = Utils_1.Utils.deepExtend({}, data.options);
        }
    }
}
exports.Theme = Theme;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/Theme/ThemeDefault.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/Theme/ThemeDefault.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeDefault = void 0;
const Modes_1 = __webpack_require__(/*! ../../../Enums/Modes */ "./node_modules/tsparticles/dist/Enums/Modes/index.js");
class ThemeDefault {
    constructor() {
        this.mode = Modes_1.ThemeMode.any;
        this.value = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.ThemeDefault = ThemeDefault;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueWithRandom = void 0;
const Random_1 = __webpack_require__(/*! ./Random */ "./node_modules/tsparticles/dist/Options/Classes/Random.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class ValueWithRandom {
    constructor() {
        this.random = new Random_1.Random();
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (typeof data.random === "boolean") {
            this.random.enable = data.random;
        }
        else {
            this.random.load(data.random);
        }
        if (data.value !== undefined) {
            this.value = Utils_1.NumberUtils.setRangeValue(data.value, this.random.enable ? this.random.minimumValue : undefined);
        }
    }
}
exports.ValueWithRandom = ValueWithRandom;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberInstance = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Vector_1 = __webpack_require__(/*! ../../Core/Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js");
class AbsorberInstance {
    constructor(absorbers, container, options, position) {
        var _a, _b, _c;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position ? Vector_1.Vector.create(position.x, position.y) : undefined;
        this.options = options;
        this.dragging = false;
        this.name = this.options.name;
        this.opacity = this.options.opacity;
        this.size = Utils_1.NumberUtils.getValue(options.size) * container.retina.pixelRatio;
        this.mass = this.size * options.size.density * container.retina.reduceFactor;
        const limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
        const color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = Utils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
    }
    attract(particle) {
        const options = this.options;
        if (options.draggable) {
            const mouse = this.container.interactivity.mouse;
            if (mouse.clicking && mouse.downPosition) {
                const mouseDist = Utils_1.NumberUtils.getDistance(this.position, mouse.downPosition);
                if (mouseDist <= this.size) {
                    this.dragging = true;
                }
            }
            else {
                this.dragging = false;
            }
            if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
            }
        }
        const pos = particle.getPosition();
        const { dx, dy, distance } = Utils_1.NumberUtils.getDistances(this.position, pos);
        const v = Vector_1.Vector.create(dx, dy);
        v.length = (this.mass / Math.pow(distance, 2)) * this.container.retina.reduceFactor;
        if (distance < this.size + particle.getRadius()) {
            const sizeFactor = particle.getRadius() * 0.033 * this.container.retina.pixelRatio;
            if (this.size > particle.getRadius() && distance < this.size - particle.getRadius()) {
                if (options.destroy) {
                    particle.destroy();
                }
                else {
                    particle.needsNewPosition = true;
                    this.updateParticlePosition(particle, v);
                }
            }
            else {
                if (options.destroy) {
                    particle.size.value -= sizeFactor;
                }
                this.updateParticlePosition(particle, v);
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density * this.container.retina.reduceFactor;
        }
        else {
            this.updateParticlePosition(particle, v);
        }
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = Utils_1.ColorUtils.getStyleFromRgb(this.color, this.opacity);
        context.fill();
    }
    calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.options.position;
        return Vector_1.Vector.create((((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100) * container.canvas.size.width, (((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100) * container.canvas.size.height);
    }
    updateParticlePosition(particle, v) {
        var _a;
        if (particle.destroyed) {
            return;
        }
        const canvasSize = this.container.canvas.size;
        if (particle.needsNewPosition) {
            const pSize = particle.getRadius();
            particle.position.x = Math.random() * (canvasSize.width - pSize * 2) + pSize;
            particle.position.y = Math.random() * (canvasSize.height - pSize * 2) + pSize;
            particle.needsNewPosition = false;
        }
        if (this.options.orbits) {
            if (particle.orbit === undefined) {
                particle.orbit = Vector_1.Vector.create(0, 0);
                particle.orbit.length = Utils_1.NumberUtils.getDistance(particle.getPosition(), this.position);
                particle.orbit.angle = Math.random() * Math.PI * 2;
            }
            if (particle.orbit.length <= this.size && !this.options.destroy) {
                particle.orbit.length = Math.random() * Math.max(canvasSize.width, canvasSize.height);
            }
            particle.velocity.x = 0;
            particle.velocity.y = 0;
            particle.position.setTo(particle.orbit.add(this.position));
            particle.orbit.length -= v.length;
            particle.orbit.angle +=
                (((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : Utils_1.NumberUtils.getRangeValue(particle.options.move.speed) * this.container.retina.pixelRatio) /
                    100) *
                    this.container.retina.reduceFactor;
        }
        else {
            particle.velocity.addTo(v);
        }
    }
}
exports.AbsorberInstance = AbsorberInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorbers = void 0;
const AbsorberInstance_1 = __webpack_require__(/*! ./AbsorberInstance */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorberInstance.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js");
class Absorbers {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
        const overridableContainer = container;
        overridableContainer.addAbsorber = (options, position) => this.addAbsorber(options, position);
    }
    init(options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.absorbers) {
            if (options.absorbers instanceof Array) {
                this.absorbers = options.absorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.absorbers instanceof Array) {
                    this.absorbers = new Absorber_1.Absorber();
                }
                this.absorbers.load(options.absorbers);
            }
        }
        const interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                this.interactivityAbsorbers = interactivityAbsorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityAbsorbers instanceof Array) {
                    this.interactivityAbsorbers = new Absorber_1.Absorber();
                }
                this.interactivityAbsorbers.load(interactivityAbsorbers);
            }
        }
        if (this.absorbers instanceof Array) {
            for (const absorberOptions of this.absorbers) {
                this.addAbsorber(absorberOptions);
            }
        }
        else {
            this.addAbsorber(this.absorbers);
        }
    }
    particleUpdate(particle) {
        for (const absorber of this.array) {
            absorber.attract(particle);
            if (particle.destroyed) {
                break;
            }
        }
    }
    draw(context) {
        for (const absorber of this.array) {
            context.save();
            absorber.draw(context);
            context.restore();
        }
    }
    stop() {
        this.array = [];
    }
    resize() {
        for (const absorber of this.array) {
            absorber.resize();
        }
    }
    handleClickMode(mode) {
        const container = this.container;
        const absorberOptions = this.absorbers;
        const modeAbsorbers = this.interactivityAbsorbers;
        if (mode === Enums_1.AbsorberClickMode.absorber) {
            let absorbersModeOptions;
            if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) {
                    absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
                }
            }
            else {
                absorbersModeOptions = modeAbsorbers;
            }
            const absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (absorberOptions instanceof Array ? Utils_1.Utils.itemFromArray(absorberOptions) : absorberOptions);
            const aPosition = container.interactivity.mouse.clickPosition;
            this.addAbsorber(absorbersOptions, aPosition);
        }
    }
    addAbsorber(options, position) {
        const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, options, position);
        this.array.push(absorber);
        return absorber;
    }
    removeAbsorber(absorber) {
        const index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
}
exports.Absorbers = Absorbers;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorbersPlugin = void 0;
const Absorbers_1 = __webpack_require__(/*! ./Absorbers */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Absorbers.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js");
const Absorber_1 = __webpack_require__(/*! ./Options/Classes/Absorber */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js");
class AbsorbersPlugin {
    constructor() {
        this.id = "absorbers";
    }
    getPlugin(container) {
        return new Absorbers_1.Absorbers(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (options === undefined) {
            return false;
        }
        const absorbers = options.absorbers;
        let loadAbsorbers = false;
        if (absorbers instanceof Array) {
            if (absorbers.length) {
                loadAbsorbers = true;
            }
        }
        else if (absorbers !== undefined) {
            loadAbsorbers = true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            Utils_1.Utils.isInArray(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
            loadAbsorbers = true;
        }
        return loadAbsorbers;
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        if (source === null || source === void 0 ? void 0 : source.absorbers) {
            if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
                optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                let absorberOptions = optionsCast.absorbers;
                if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === undefined) {
                    optionsCast.absorbers = absorberOptions = new Absorber_1.Absorber();
                }
                absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
            }
        }
        const interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map((s) => {
                    const tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                let absorberOptions = optionsCast.interactivity.modes.absorbers;
                if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === undefined) {
                    optionsCast.interactivity.modes.absorbers = absorberOptions = new Absorber_1.Absorber();
                }
                absorberOptions.load(interactivityAbsorbers);
            }
        }
    }
}
const plugin = new AbsorbersPlugin();
exports.AbsorbersPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberClickMode = void 0;
var AbsorberClickMode;
(function (AbsorberClickMode) {
    AbsorberClickMode["absorber"] = "absorber";
})(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./AbsorberClickMode */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/AbsorberClickMode.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/Absorber.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorber = void 0;
const AbsorberSize_1 = __webpack_require__(/*! ./AbsorberSize */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js");
const OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Absorber {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.draggable = false;
        this.opacity = 1;
        this.destroy = true;
        this.orbits = false;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.draggable !== undefined) {
            this.draggable = data.draggable;
        }
        this.name = data.name;
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.position !== undefined) {
            this.position = {
                x: data.position.x,
                y: data.position.y,
            };
        }
        if (data.size !== undefined) {
            this.size.load(data.size);
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.orbits !== undefined) {
            this.orbits = data.orbits;
        }
    }
}
exports.Absorber = Absorber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Absorbers/Options/Classes/AbsorberSize.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberSize = void 0;
const ValueWithRandom_1 = __webpack_require__(/*! ../../../../Options/Classes/ValueWithRandom */ "./node_modules/tsparticles/dist/Options/Classes/ValueWithRandom.js");
class AbsorberSize extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.density = 5;
        this.random.minimumValue = 1;
        this.value = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.density !== undefined) {
            this.density = data.density;
        }
        if (data.limit !== undefined) {
            this.limit = data.limit;
        }
        if (data.limit !== undefined) {
            this.limit = data.limit;
        }
    }
}
exports.AbsorberSize = AbsorberSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterInstance = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const EmitterSize_1 = __webpack_require__(/*! ./Options/Classes/EmitterSize */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js");
function randomCoordinate(position, offset) {
    return position + offset * (Math.random() - 0.5);
}
function randomPosition(position, offset) {
    return {
        x: randomCoordinate(position.x, offset.x),
        y: randomCoordinate(position.y, offset.y),
    };
}
class EmitterInstance {
    constructor(emitters, container, emitterOptions, position) {
        var _a, _b, _c, _d;
        this.emitters = emitters;
        this.container = container;
        this.firstSpawn = true;
        this.currentDuration = 0;
        this.currentEmitDelay = 0;
        this.currentSpawnDelay = 0;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
        this.spawnDelay = (((_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0) * 1000) / this.container.retina.reduceFactor;
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
        this.name = emitterOptions.name;
        let particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);
        if (particlesOptions === undefined) {
            particlesOptions = {};
        }
        if (particlesOptions.move === undefined) {
            particlesOptions.move = {};
        }
        if (particlesOptions.move.direction === undefined) {
            particlesOptions.move.direction = this.emitterOptions.direction;
        }
        if (this.emitterOptions.spawnColor !== undefined) {
            this.spawnColor = Utils_1.ColorUtils.colorToHsl(this.emitterOptions.spawnColor);
        }
        this.paused = !this.emitterOptions.autoPlay;
        this.particlesOptions = particlesOptions;
        this.size =
            (_c = this.emitterOptions.size) !== null && _c !== void 0 ? _c : (() => {
                const size = new EmitterSize_1.EmitterSize();
                size.load({
                    height: 0,
                    mode: Enums_1.SizeMode.percent,
                    width: 0,
                });
                return size;
            })();
        this.lifeCount = (_d = this.emitterOptions.life.count) !== null && _d !== void 0 ? _d : -1;
        this.immortal = this.lifeCount <= 0;
        this.play();
    }
    externalPlay() {
        this.paused = false;
        this.play();
    }
    externalPause() {
        this.paused = true;
        this.pause();
    }
    play() {
        if (this.paused) {
            return;
        }
        if (this.container.retina.reduceFactor &&
            (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count)) {
            if (this.emitDelay === undefined) {
                this.emitDelay = (1000 * this.emitterOptions.rate.delay) / this.container.retina.reduceFactor;
            }
            if (this.lifeCount > 0 || this.immortal) {
                this.prepareToDie();
            }
        }
    }
    pause() {
        if (this.paused) {
            return;
        }
        delete this.emitDelay;
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    }
    update(delta) {
        var _a, _b, _c;
        if (this.paused) {
            return;
        }
        if (this.firstSpawn) {
            this.firstSpawn = false;
            this.currentSpawnDelay = (_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0;
            this.currentEmitDelay = (_b = this.emitDelay) !== null && _b !== void 0 ? _b : 0;
            delta.value = 0;
        }
        if (this.duration !== undefined) {
            this.currentDuration += delta.value;
            if (this.currentDuration >= this.duration) {
                this.pause();
                if (this.spawnDelay !== undefined) {
                    delete this.spawnDelay;
                }
                if (!this.immortal) {
                    this.lifeCount--;
                }
                if (this.lifeCount > 0 || this.immortal) {
                    this.position = this.calcPosition();
                    this.spawnDelay =
                        (((_c = this.emitterOptions.life.delay) !== null && _c !== void 0 ? _c : 0) * 1000) / this.container.retina.reduceFactor;
                }
                else {
                    this.destroy();
                }
                this.currentDuration -= this.duration;
                delete this.duration;
            }
        }
        if (this.spawnDelay !== undefined) {
            this.currentSpawnDelay += delta.value;
            if (this.currentSpawnDelay >= this.spawnDelay) {
                this.play();
                this.currentSpawnDelay -= this.currentSpawnDelay;
                delete this.spawnDelay;
            }
        }
        if (this.emitDelay !== undefined) {
            this.currentEmitDelay += delta.value;
            if (this.currentEmitDelay >= this.emitDelay) {
                this.emit();
                this.currentEmitDelay -= this.emitDelay;
            }
        }
    }
    prepareToDie() {
        var _a;
        if (this.paused) {
            return;
        }
        const duration = (_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration;
        if (this.container.retina.reduceFactor &&
            (this.lifeCount > 0 || this.immortal) &&
            duration !== undefined &&
            duration > 0) {
            this.duration = duration * 1000;
        }
    }
    destroy() {
        this.emitters.removeEmitter(this);
    }
    calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.emitterOptions.position;
        return {
            x: (((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100) * container.canvas.size.width,
            y: (((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100) * container.canvas.size.height,
        };
    }
    emit() {
        var _a;
        if (this.paused) {
            return;
        }
        const container = this.container;
        const position = this.position;
        const offset = {
            x: this.size.mode === Enums_1.SizeMode.percent
                ? (container.canvas.size.width * this.size.width) / 100
                : this.size.width,
            y: this.size.mode === Enums_1.SizeMode.percent
                ? (container.canvas.size.height * this.size.height) / 100
                : this.size.height,
        };
        for (let i = 0; i < this.emitterOptions.rate.quantity; i++) {
            const particlesOptions = Utils_1.Utils.deepExtend({}, this.particlesOptions);
            if (this.spawnColor !== undefined) {
                const colorAnimation = (_a = this.emitterOptions.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;
                if (colorAnimation) {
                    const hueAnimation = colorAnimation;
                    if (hueAnimation.enable) {
                        this.spawnColor.h = this.setColorAnimation(hueAnimation, this.spawnColor.h, 360);
                    }
                    else {
                        const hslAnimation = colorAnimation;
                        this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                        this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                        this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
                    }
                }
                if (!particlesOptions.color) {
                    particlesOptions.color = {
                        value: this.spawnColor,
                    };
                }
                else {
                    particlesOptions.color.value = this.spawnColor;
                }
            }
            container.particles.addParticle(randomPosition(position, offset), particlesOptions);
        }
    }
    setColorAnimation(animation, initValue, maxValue) {
        var _a;
        const container = this.container;
        if (!animation.enable) {
            return initValue;
        }
        const colorOffset = Utils_1.NumberUtils.randomInRange(animation.offset);
        const emitFactor = (1000 * this.emitterOptions.rate.delay) / container.retina.reduceFactor;
        const colorSpeed = (_a = animation.speed) !== null && _a !== void 0 ? _a : 0;
        return (initValue + (colorSpeed * container.fpsLimit) / emitFactor + colorOffset * 3.6) % maxValue;
    }
}
exports.EmitterInstance = EmitterInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitters = void 0;
const EmitterInstance_1 = __webpack_require__(/*! ./EmitterInstance */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmitterInstance.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js");
class Emitters {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
        const overridableContainer = container;
        overridableContainer.addEmitter = (options, position) => this.addEmitter(options, position);
        overridableContainer.playEmitter = (idxOrName) => {
            const emitter = idxOrName === undefined || typeof idxOrName === "number"
                ? this.array[idxOrName || 0]
                : this.array.find((t) => t.name === idxOrName);
            if (emitter) {
                emitter.externalPlay();
            }
        };
        overridableContainer.pauseEmitter = (idxOrName) => {
            const emitter = idxOrName === undefined || typeof idxOrName === "number"
                ? this.array[idxOrName || 0]
                : this.array.find((t) => t.name === idxOrName);
            if (emitter) {
                emitter.externalPause();
            }
        };
    }
    init(options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.emitters) {
            if (options.emitters instanceof Array) {
                this.emitters = options.emitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.emitters instanceof Array) {
                    this.emitters = new Emitter_1.Emitter();
                }
                this.emitters.load(options.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                this.interactivityEmitters = interactivityEmitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityEmitters instanceof Array) {
                    this.interactivityEmitters = new Emitter_1.Emitter();
                }
                this.interactivityEmitters.load(interactivityEmitters);
            }
        }
        if (this.emitters instanceof Array) {
            for (const emitterOptions of this.emitters) {
                this.addEmitter(emitterOptions);
            }
        }
        else {
            this.addEmitter(this.emitters);
        }
    }
    play() {
        for (const emitter of this.array) {
            emitter.play();
        }
    }
    pause() {
        for (const emitter of this.array) {
            emitter.pause();
        }
    }
    stop() {
        this.array = [];
    }
    update(delta) {
        for (const emitter of this.array) {
            emitter.update(delta);
        }
    }
    handleClickMode(mode) {
        const container = this.container;
        const emitterOptions = this.emitters;
        const modeEmitters = this.interactivityEmitters;
        if (mode === Enums_1.EmitterClickMode.emitter) {
            let emitterModeOptions;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            const emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (emitterOptions instanceof Array ? Utils_1.Utils.itemFromArray(emitterOptions) : emitterOptions);
            const ePosition = container.interactivity.mouse.clickPosition;
            this.addEmitter(Utils_1.Utils.deepExtend({}, emittersOptions), ePosition);
        }
    }
    resize() {
        for (const emitter of this.array) {
            emitter.resize();
        }
    }
    addEmitter(options, position) {
        const emitter = new EmitterInstance_1.EmitterInstance(this, this.container, options, position);
        this.array.push(emitter);
        return emitter;
    }
    removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
}
exports.Emitters = Emitters;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmittersPlugin = void 0;
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Emitters_1 = __webpack_require__(/*! ./Emitters */ "./node_modules/tsparticles/dist/Plugins/Emitters/Emitters.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js");
const Emitter_1 = __webpack_require__(/*! ./Options/Classes/Emitter */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js");
class EmittersPlugin {
    constructor() {
        this.id = "emitters";
    }
    getPlugin(container) {
        return new Emitters_1.Emitters(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (options === undefined) {
            return false;
        }
        const emitters = options.emitters;
        let loadEmitters = false;
        if (emitters instanceof Array) {
            if (emitters.length) {
                loadEmitters = true;
            }
        }
        else if (emitters !== undefined) {
            loadEmitters = true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            Utils_1.Utils.isInArray(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode)) {
            loadEmitters = true;
        }
        return loadEmitters;
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        if (source === null || source === void 0 ? void 0 : source.emitters) {
            if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
                optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                let emitterOptions = optionsCast.emitters;
                if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === undefined) {
                    optionsCast.emitters = emitterOptions = new Emitter_1.Emitter();
                }
                emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                optionsCast.interactivity.modes.emitters = interactivityEmitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                let emitterOptions = optionsCast.interactivity.modes.emitters;
                if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === undefined) {
                    optionsCast.interactivity.modes.emitters = emitterOptions = new Emitter_1.Emitter();
                }
                emitterOptions.load(interactivityEmitters);
            }
        }
    }
}
const plugin = new EmittersPlugin();
exports.EmittersPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterClickMode = void 0;
var EmitterClickMode;
(function (EmitterClickMode) {
    EmitterClickMode["emitter"] = "emitter";
})(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./EmitterClickMode */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/EmitterClickMode.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/Emitter.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const EmitterRate_1 = __webpack_require__(/*! ./EmitterRate */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js");
const EmitterLife_1 = __webpack_require__(/*! ./EmitterLife */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const EmitterSize_1 = __webpack_require__(/*! ./EmitterSize */ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js");
const AnimatableColor_1 = __webpack_require__(/*! ../../../../Options/Classes/Particles/AnimatableColor */ "./node_modules/tsparticles/dist/Options/Classes/Particles/AnimatableColor.js");
class Emitter {
    constructor() {
        this.autoPlay = true;
        this.direction = Enums_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.size !== undefined) {
            if (this.size === undefined) {
                this.size = new EmitterSize_1.EmitterSize();
            }
            this.size.load(data.size);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.life.load(data.life);
        this.name = data.name;
        if (data.particles !== undefined) {
            this.particles = Utils_1.Utils.deepExtend({}, data.particles);
        }
        this.rate.load(data.rate);
        if (data.position !== undefined) {
            this.position = {
                x: data.position.x,
                y: data.position.y,
            };
        }
        if (data.spawnColor !== undefined) {
            if (this.spawnColor === undefined) {
                this.spawnColor = new AnimatableColor_1.AnimatableColor();
            }
            this.spawnColor.load(data.spawnColor);
        }
    }
}
exports.Emitter = Emitter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterLife.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterLife = void 0;
class EmitterLife {
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
    }
}
exports.EmitterLife = EmitterLife;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterRate.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterRate = void 0;
class EmitterRate {
    constructor() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.quantity !== undefined) {
            this.quantity = data.quantity;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
    }
}
exports.EmitterRate = EmitterRate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/Emitters/Options/Classes/EmitterSize.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterSize = void 0;
const Enums_1 = __webpack_require__(/*! ../../../../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class EmitterSize {
    constructor() {
        this.mode = Enums_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.height !== undefined) {
            this.height = data.height;
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}
exports.EmitterSize = EmitterSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineArrangement = void 0;
var InlineArrangement;
(function (InlineArrangement) {
    InlineArrangement["equidistant"] = "equidistant";
    InlineArrangement["onePerPoint"] = "one-per-point";
    InlineArrangement["perPoint"] = "per-point";
    InlineArrangement["randomLength"] = "random-length";
    InlineArrangement["randomPoint"] = "random-point";
})(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveType = void 0;
var MoveType;
(function (MoveType) {
    MoveType["path"] = "path";
    MoveType["radius"] = "radius";
})(MoveType = exports.MoveType || (exports.MoveType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type["inline"] = "inline";
    Type["inside"] = "inside";
    Type["outside"] = "outside";
    Type["none"] = "none";
})(Type = exports.Type || (exports.Type = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./InlineArrangement */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/InlineArrangement.js"), exports);
__exportStar(__webpack_require__(/*! ./MoveType */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/MoveType.js"), exports);
__exportStar(__webpack_require__(/*! ./Type */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/Type.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Draw = void 0;
const DrawStroke_1 = __webpack_require__(/*! ./DrawStroke */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js");
const OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
class Draw {
    constructor() {
        this.enable = false;
        this.stroke = new DrawStroke_1.DrawStroke();
    }
    get lineWidth() {
        return this.stroke.width;
    }
    set lineWidth(value) {
        this.stroke.width = value;
    }
    get lineColor() {
        return this.stroke.color;
    }
    set lineColor(value) {
        this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    }
}
exports.Draw = Draw;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/DrawStroke.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawStroke = void 0;
const OptionsColor_1 = __webpack_require__(/*! ../../../../Options/Classes/OptionsColor */ "./node_modules/tsparticles/dist/Options/Classes/OptionsColor.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class DrawStroke {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = Utils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
exports.DrawStroke = DrawStroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Inline = void 0;
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
class Inline {
    constructor() {
        this.arrangement = Enums_1.InlineArrangement.onePerPoint;
    }
    load(data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    }
}
exports.Inline = Inline;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSvg = void 0;
class LocalSvg {
    constructor() {
        this.path = [];
        this.size = {
            height: 0,
            width: 0,
        };
    }
    load(data) {
        if (data !== undefined) {
            if (data.path !== undefined) {
                this.path = data.path;
            }
            if (data.size !== undefined) {
                if (data.size.width !== undefined) {
                    this.size.width = data.size.width;
                }
                if (data.size.height !== undefined) {
                    this.size.height = data.size.height;
                }
            }
        }
    }
}
exports.LocalSvg = LocalSvg;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
class Move {
    constructor() {
        this.radius = 10;
        this.type = Enums_1.MoveType.path;
    }
    load(data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    }
}
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMask = void 0;
const Enums_1 = __webpack_require__(/*! ../../Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
const Draw_1 = __webpack_require__(/*! ./Draw */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Draw.js");
const Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Move.js");
const Inline_1 = __webpack_require__(/*! ./Inline */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/Inline.js");
const LocalSvg_1 = __webpack_require__(/*! ./LocalSvg */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/LocalSvg.js");
const Utils_1 = __webpack_require__(/*! ../../../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
class PolygonMask {
    constructor() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new Inline_1.Inline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = Enums_1.Type.none;
    }
    get inlineArrangement() {
        return this.inline.arrangement;
    }
    set inlineArrangement(value) {
        this.inline.arrangement = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== Enums_1.Type.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.data !== undefined) {
                if (typeof data.data === "string") {
                    this.data = data.data;
                }
                else {
                    this.data = new LocalSvg_1.LocalSvg();
                    this.data.load(data.data);
                }
            }
            if (data.position !== undefined) {
                this.position = Utils_1.Utils.deepExtend({}, data.position);
            }
        }
    }
}
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskInstance = void 0;
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
const Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js");
function polygonBounce(particle) {
    particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
    particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
}
function drawPolygonMask(context, rawData, stroke) {
    const color = Utils_1.ColorUtils.colorToRgb(stroke.color);
    if (!color) {
        return;
    }
    context.beginPath();
    context.moveTo(rawData[0].x, rawData[0].y);
    for (const item of rawData) {
        context.lineTo(item.x, item.y);
    }
    context.closePath();
    context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color);
    context.lineWidth = stroke.width;
    context.stroke();
}
function drawPolygonMaskPath(context, path, stroke, position) {
    context.translate(position.x, position.y);
    const color = Utils_1.ColorUtils.colorToRgb(stroke.color);
    if (!color) {
        return;
    }
    context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color, stroke.opacity);
    context.lineWidth = stroke.width;
    context.stroke(path);
}
function parsePaths(paths, scale, offset) {
    const res = [];
    for (const path of paths) {
        const segments = path.element.pathSegList;
        const len = segments.numberOfItems;
        const p = {
            x: 0,
            y: 0,
        };
        for (let i = 0; i < len; i++) {
            const segment = segments.getItem(i);
            const svgPathSeg = window.SVGPathSeg;
            switch (segment.pathSegType) {
                case svgPathSeg.PATHSEG_MOVETO_ABS:
                case svgPathSeg.PATHSEG_LINETO_ABS:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                case svgPathSeg.PATHSEG_ARC_ABS:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                    const absSeg = segment;
                    p.x = absSeg.x;
                    p.y = absSeg.y;
                    break;
                }
                case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    p.x = segment.x;
                    break;
                case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    p.y = segment.y;
                    break;
                case svgPathSeg.PATHSEG_LINETO_REL:
                case svgPathSeg.PATHSEG_MOVETO_REL:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                case svgPathSeg.PATHSEG_ARC_REL:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                    const relSeg = segment;
                    p.x += relSeg.x;
                    p.y += relSeg.y;
                    break;
                }
                case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    p.x += segment.x;
                    break;
                case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    p.y += segment.y;
                    break;
                case svgPathSeg.PATHSEG_UNKNOWN:
                case svgPathSeg.PATHSEG_CLOSEPATH:
                    continue;
            }
            res.push({
                x: p.x * scale + offset.x,
                y: p.y * scale + offset.y,
            });
        }
    }
    return res;
}
class PolygonMaskInstance {
    constructor(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.path2DSupported = !!window.Path2D;
        this.options = new PolygonMask_1.PolygonMask();
        this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
    }
    initAsync(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
            const polygonMaskOptions = this.options;
            this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
            if (polygonMaskOptions.enable) {
                yield this.initRawData();
            }
        });
    }
    resize() {
        const container = this.container;
        const options = this.options;
        if (!(options.enable && options.type !== Enums_1.Type.none)) {
            return;
        }
        if (this.redrawTimeout) {
            clearTimeout(this.redrawTimeout);
        }
        this.redrawTimeout = window.setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            yield this.initRawData(true);
            container.particles.redraw();
        }), 250);
    }
    stop() {
        delete this.raw;
        delete this.paths;
    }
    particlesInitialization() {
        const options = this.options;
        if (options.enable &&
            options.type === Enums_1.Type.inline &&
            (options.inline.arrangement === Enums_1.InlineArrangement.onePerPoint ||
                options.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
            this.drawPoints();
            return true;
        }
        return false;
    }
    particlePosition(position) {
        var _a, _b;
        const options = this.options;
        if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
            return;
        }
        return Utils_1.Utils.deepExtend({}, position ? position : this.randomPoint());
    }
    particleBounce(particle) {
        const options = this.options;
        if (options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline) {
            if (!this.checkInsidePolygon(particle.getPosition())) {
                polygonBounce(particle);
                return true;
            }
        }
        else if (options.enable && options.type === Enums_1.Type.inline && particle.initialPosition) {
            const dist = Utils_1.NumberUtils.getDistance(particle.initialPosition, particle.getPosition());
            if (dist > this.polygonMaskMoveRadius) {
                polygonBounce(particle);
                return true;
            }
        }
        return false;
    }
    clickPositionValid(position) {
        const options = this.options;
        return (options.enable &&
            options.type !== Enums_1.Type.none &&
            options.type !== Enums_1.Type.inline &&
            this.checkInsidePolygon(position));
    }
    draw(context) {
        var _a;
        if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const options = this.options;
        const polygonDraw = options.draw;
        if (!(options.enable && polygonDraw.enable)) {
            return;
        }
        const rawData = this.raw;
        for (const path of this.paths) {
            const path2d = path.path2d;
            const path2dSupported = this.path2DSupported;
            if (!context) {
                continue;
            }
            if (path2dSupported && path2d && this.offset) {
                drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
            }
            else if (rawData) {
                drawPolygonMask(context, rawData, polygonDraw.stroke);
            }
        }
    }
    checkInsidePolygon(position) {
        var _a, _b;
        const container = this.container;
        const options = this.options;
        if (!options.enable || options.type === Enums_1.Type.none || options.type === Enums_1.Type.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Utils_1.Constants.noPolygonFound);
        }
        const canvasSize = container.canvas.size;
        const x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
        const y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
        let inside = false;
        for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            const pi = this.raw[i];
            const pj = this.raw[j];
            const intersect = pi.y > y !== pj.y > y && x < ((pj.x - pi.x) * (y - pi.y)) / (pj.y - pi.y) + pi.x;
            if (intersect) {
                inside = !inside;
            }
        }
        return options.type === Enums_1.Type.inside ? inside : options.type === Enums_1.Type.outside ? !inside : false;
    }
    parseSvgPath(xml, force) {
        var _a, _b, _c;
        const forceDownload = force !== null && force !== void 0 ? force : false;
        if (this.paths !== undefined && !forceDownload) {
            return this.raw;
        }
        const container = this.container;
        const options = this.options;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "image/svg+xml");
        const svg = doc.getElementsByTagName("svg")[0];
        let svgPaths = svg.getElementsByTagName("path");
        if (!svgPaths.length) {
            svgPaths = doc.getElementsByTagName("path");
        }
        this.paths = [];
        for (let i = 0; i < svgPaths.length; i++) {
            const path = svgPaths.item(i);
            if (path) {
                this.paths.push({
                    element: path,
                    length: path.getTotalLength(),
                });
            }
        }
        const pxRatio = container.retina.pixelRatio;
        const scale = options.scale / pxRatio;
        this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
        this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
        const position = (_c = options.position) !== null && _c !== void 0 ? _c : {
            x: 50,
            y: 50,
        };
        this.offset = {
            x: (container.canvas.size.width * position.x) / (100 * pxRatio) - this.dimension.width / 2,
            y: (container.canvas.size.height * position.y) / (100 * pxRatio) - this.dimension.height / 2,
        };
        return parsePaths(this.paths, scale, this.offset);
    }
    downloadSvgPath(svgUrl, force) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.options;
            const url = svgUrl || options.url;
            const forceDownload = force !== null && force !== void 0 ? force : false;
            if (!url || (this.paths !== undefined && !forceDownload)) {
                return this.raw;
            }
            const req = yield fetch(url);
            if (!req.ok) {
                throw new Error("tsParticles Error - Error occurred during polygon mask download");
            }
            return this.parseSvgPath(yield req.text(), force);
        });
    }
    drawPoints() {
        if (!this.raw) {
            return;
        }
        for (const item of this.raw) {
            this.container.particles.addParticle({
                x: item.x,
                y: item.y,
            });
        }
    }
    randomPoint() {
        const container = this.container;
        const options = this.options;
        let position;
        if (options.type === Enums_1.Type.inline) {
            switch (options.inline.arrangement) {
                case Enums_1.InlineArrangement.randomPoint:
                    position = this.getRandomPoint();
                    break;
                case Enums_1.InlineArrangement.randomLength:
                    position = this.getRandomPointByLength();
                    break;
                case Enums_1.InlineArrangement.equidistant:
                    position = this.getEquidistantPointByIndex(container.particles.count);
                    break;
                case Enums_1.InlineArrangement.onePerPoint:
                case Enums_1.InlineArrangement.perPoint:
                default:
                    position = this.getPointByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPoint();
        }
    }
    getRandomPoint() {
        if (!this.raw || !this.raw.length) {
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    }
    getRandomPointByLength() {
        var _a, _b, _c;
        const options = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const path = Utils_1.Utils.itemFromArray(this.paths);
        const distance = Math.floor(Math.random() * path.length) + 1;
        const point = path.element.getPointAtLength(distance);
        return {
            x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
            y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0),
        };
    }
    getEquidistantPointByIndex(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        const options = this.container.actualOptions;
        const polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        let offset = 0;
        let point;
        const totalLength = this.paths.reduce((tot, path) => tot + path.length, 0);
        const distance = totalLength / options.particles.number.value;
        for (const path of this.paths) {
            const pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
            y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0),
        };
    }
    getPointByIndex(index) {
        if (!this.raw || !this.raw.length) {
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        }
        const coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    }
    createPath2D() {
        var _a, _b;
        const options = this.options;
        if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        for (const path of this.paths) {
            const pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
            if (pathData) {
                const path2d = new Path2D(pathData);
                const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                const finalPath = new Path2D();
                const transform = matrix.scale(options.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (path.path2d || !this.raw) {
                continue;
            }
            path.path2d = new Path2D();
            path.path2d.moveTo(this.raw[0].x, this.raw[0].y);
            this.raw.forEach((pos, i) => {
                var _a;
                if (i > 0) {
                    (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                }
            });
            path.path2d.closePath();
        }
    }
    initRawData(force) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.options;
            if (options.url) {
                this.raw = yield this.downloadSvgPath(options.url, force);
            }
            else if (options.data) {
                const data = options.data;
                let svg;
                if (typeof data !== "string") {
                    const path = data.path instanceof Array
                        ? data.path.map((t) => `<path d="${t}" />`).join("")
                        : `<path d="${data.path}" />`;
                    const namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                    svg = `<svg ${namespaces} width="${data.size.width}" height="${data.size.height}">${path}</svg>`;
                }
                else {
                    svg = data;
                }
                this.raw = this.parseSvgPath(svg, force);
            }
            this.createPath2D();
        });
    }
}
exports.PolygonMaskInstance = PolygonMaskInstance;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskPlugin = void 0;
const PolygonMaskInstance_1 = __webpack_require__(/*! ./PolygonMaskInstance */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskInstance.js");
const PolygonMask_1 = __webpack_require__(/*! ./Options/Classes/PolygonMask */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Options/Classes/PolygonMask.js");
const Enums_1 = __webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js");
class PolygonMaskPlugin {
    constructor() {
        this.id = "polygonMask";
    }
    getPlugin(container) {
        return new PolygonMaskInstance_1.PolygonMaskInstance(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : (((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none);
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        let polygonOptions = optionsCast.polygon;
        if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === undefined) {
            optionsCast.polygon = polygonOptions = new PolygonMask_1.PolygonMask();
        }
        polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
    }
}
const plugin = new PolygonMaskPlugin();
exports.PolygonMaskPlugin = plugin;
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleDrawer = void 0;
class CircleDrawer {
    getSidesCount() {
        return 12;
    }
    draw(context, particle, radius) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    }
}
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDrawer = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class ImageDrawer {
    constructor() {
        this.images = [];
    }
    getSidesCount() {
        return 12;
    }
    getImages(container) {
        const containerImages = this.images.filter((t) => t.id === container.id);
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        return containerImages[0];
    }
    addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    }
    init(container) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const options = container.actualOptions;
            const shapeOptions = options.particles.shape;
            if (!Utils_1.Utils.isInArray(Enums_1.ShapeType.image, shapeOptions.type) &&
                !Utils_1.Utils.isInArray(Enums_1.ShapeType.images, shapeOptions.type)) {
                return;
            }
            const imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];
            if (imageOptions instanceof Array) {
                for (const optionsImage of imageOptions) {
                    yield this.loadImageShape(container, optionsImage);
                }
            }
            else {
                yield this.loadImageShape(container, imageOptions);
            }
        });
    }
    destroy() {
        this.images = [];
    }
    loadImageShape(container, imageShape) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = imageShape.replaceColor
                    ? yield Utils_1.Utils.downloadSvgImage(imageShape.src)
                    : yield Utils_1.Utils.loadImage(imageShape.src);
                if (image) {
                    this.addImage(container, image);
                }
            }
            catch (_a) {
                console.warn(`tsParticles error - ${imageShape.src} not found`);
            }
        });
    }
    draw(context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        const image = particle.image;
        const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        const pos = {
            x: -radius,
            y: -radius,
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    }
}
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LineDrawer = void 0;
class LineDrawer {
    getSidesCount() {
        return 1;
    }
    draw(context, particle, radius) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    }
}
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonDrawer = void 0;
const PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js");
class PolygonDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getSidesData(particle, radius) {
        var _a, _b;
        const polygon = particle.shapeData;
        const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: (radius * 2.66) / (sides / 3),
        };
    }
    getCenter(particle, radius) {
        const sides = this.getSidesCount(particle);
        return {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    }
}
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonDrawerBase = void 0;
class PolygonDrawerBase {
    getSidesCount(particle) {
        var _a, _b;
        const polygon = particle.shapeData;
        return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    }
    draw(context, particle, radius) {
        const start = this.getCenter(particle, radius);
        const side = this.getSidesData(particle, radius);
        const sideCount = side.count.numerator * side.count.denominator;
        const decimalSides = side.count.numerator / side.count.denominator;
        const interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        const interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (let i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    }
}
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareDrawer = void 0;
class SquareDrawer {
    getSidesCount() {
        return 4;
    }
    draw(context, particle, radius) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    }
}
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StarDrawer = void 0;
class StarDrawer {
    getSidesCount(particle) {
        var _a, _b;
        const star = particle.shapeData;
        return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
    }
    draw(context, particle, radius) {
        var _a;
        const star = particle.shapeData;
        const sides = this.getSidesCount(particle);
        const inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    }
}
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDrawer = void 0;
const Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
class TextDrawer {
    getSidesCount() {
        return 12;
    }
    init(container) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const options = container.actualOptions;
            if (Utils_1.Utils.isInArray(Enums_1.ShapeType.char, options.particles.shape.type) ||
                Utils_1.Utils.isInArray(Enums_1.ShapeType.character, options.particles.shape.type)) {
                const shapeOptions = ((_a = options.particles.shape.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[Enums_1.ShapeType.char]);
                if (shapeOptions instanceof Array) {
                    for (const character of shapeOptions) {
                        yield Utils_1.Utils.loadFont(character);
                    }
                }
                else {
                    if (shapeOptions !== undefined) {
                        yield Utils_1.Utils.loadFont(shapeOptions);
                    }
                }
            }
        });
    }
    draw(context, particle, radius) {
        const character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        const textData = character.value;
        if (textData === undefined) {
            return;
        }
        const textParticle = particle;
        if (textParticle.text === undefined) {
            textParticle.text =
                textData instanceof Array ? Utils_1.Utils.itemFromArray(textData, particle.randomIndexData) : textData;
        }
        const text = textParticle.text;
        const style = character.style;
        const weight = character.weight;
        const size = Math.round(radius) * 2;
        const font = character.font;
        const fill = particle.fill;
        const offsetX = (text.length * radius) / 2;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -offsetX,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    }
}
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleDrawer = void 0;
const PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawerBase.js");
class TriangleDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getSidesCount() {
        return 3;
    }
    getSidesData(particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    }
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    }
}
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Types/RangeValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/RangeValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Types/RecursivePartial.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/RecursivePartial.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Types/ShapeData.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/ShapeData.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Types/ShapeDrawerFunctions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/ShapeDrawerFunctions.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Types/SingleOrMultiple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/SingleOrMultiple.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./node_modules/tsparticles/dist/Types/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Types/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./RangeValue */ "./node_modules/tsparticles/dist/Types/RangeValue.js"), exports);
__exportStar(__webpack_require__(/*! ./RecursivePartial */ "./node_modules/tsparticles/dist/Types/RecursivePartial.js"), exports);
__exportStar(__webpack_require__(/*! ./ShapeData */ "./node_modules/tsparticles/dist/Types/ShapeData.js"), exports);
__exportStar(__webpack_require__(/*! ./ShapeDrawerFunctions */ "./node_modules/tsparticles/dist/Types/ShapeDrawerFunctions.js"), exports);
__exportStar(__webpack_require__(/*! ./SingleOrMultiple */ "./node_modules/tsparticles/dist/Types/SingleOrMultiple.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CanvasUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasUtils = void 0;
const ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js");
const NumberUtils_1 = __webpack_require__(/*! ./NumberUtils */ "./node_modules/tsparticles/dist/Utils/NumberUtils.js");
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
class CanvasUtils {
    static paintBase(context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    }
    static clear(context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    }
    static drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
        let drawn = false;
        if (NumberUtils_1.NumberUtils.getDistance(begin, end) <= maxDistance) {
            drawLine(context, begin, end);
            drawn = true;
        }
        else if (warp) {
            let pi1;
            let pi2;
            const endNE = {
                x: end.x - canvasSize.width,
                y: end.y,
            };
            const d1 = NumberUtils_1.NumberUtils.getDistances(begin, endNE);
            if (d1.distance <= maxDistance) {
                const yi = begin.y - (d1.dy / d1.dx) * begin.x;
                pi1 = { x: 0, y: yi };
                pi2 = { x: canvasSize.width, y: yi };
            }
            else {
                const endSW = {
                    x: end.x,
                    y: end.y - canvasSize.height,
                };
                const d2 = NumberUtils_1.NumberUtils.getDistances(begin, endSW);
                if (d2.distance <= maxDistance) {
                    const yi = begin.y - (d2.dy / d2.dx) * begin.x;
                    const xi = -yi / (d2.dy / d2.dx);
                    pi1 = { x: xi, y: 0 };
                    pi2 = { x: xi, y: canvasSize.height };
                }
                else {
                    const endSE = {
                        x: end.x - canvasSize.width,
                        y: end.y - canvasSize.height,
                    };
                    const d3 = NumberUtils_1.NumberUtils.getDistances(begin, endSE);
                    if (d3.distance <= maxDistance) {
                        const yi = begin.y - (d3.dy / d3.dx) * begin.x;
                        const xi = -yi / (d3.dy / d3.dx);
                        pi1 = { x: xi, y: yi };
                        pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                    }
                }
            }
            if (pi1 && pi2) {
                drawLine(context, begin, pi1);
                drawLine(context, end, pi2);
                drawn = true;
            }
        }
        if (!drawn) {
            return;
        }
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = composite;
        }
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        if (shadow.enable) {
            const shadowColor = ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
            if (shadowColor) {
                context.shadowBlur = shadow.blur;
                context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            }
        }
        context.stroke();
    }
    static drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
        drawTriangle(context, pos1, pos2, pos3);
        if (backgroundMask) {
            context.globalCompositeOperation = composite;
        }
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorTriangle, opacityTriangle);
        context.fill();
    }
    static drawConnectLine(context, width, lineStyle, begin, end) {
        context.save();
        drawLine(context, begin, end);
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
    }
    static gradient(context, p1, p2, opacity) {
        const gradStop = Math.floor(p2.getRadius() / p1.getRadius());
        const color1 = p1.getFillColor();
        const color2 = p2.getFillColor();
        if (!color1 || !color2) {
            return;
        }
        const sourcePos = p1.getPosition();
        const destPos = p2.getPosition();
        const midRgb = ColorUtils_1.ColorUtils.mix(color1, color2, p1.getRadius(), p2.getRadius());
        const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromHsl(color1, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromRgb(midRgb, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromHsl(color2, opacity));
        return grad;
    }
    static drawGrabLine(context, width, begin, end, colorLine, opacity) {
        context.save();
        drawLine(context, begin, end);
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
    }
    static drawLight(container, context, mousePos) {
        const lightOptions = container.actualOptions.interactivity.modes.light.area;
        context.beginPath();
        context.arc(mousePos.x, mousePos.y, lightOptions.radius, 0, 2 * Math.PI);
        const gradientAmbientLight = context.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, lightOptions.radius);
        const gradient = lightOptions.gradient;
        const gradientRgb = {
            start: ColorUtils_1.ColorUtils.colorToRgb(gradient.start),
            stop: ColorUtils_1.ColorUtils.colorToRgb(gradient.stop),
        };
        if (!gradientRgb.start || !gradientRgb.stop) {
            return;
        }
        gradientAmbientLight.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromRgb(gradientRgb.start));
        gradientAmbientLight.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromRgb(gradientRgb.stop));
        context.fillStyle = gradientAmbientLight;
        context.fill();
    }
    static drawParticleShadow(container, context, particle, mousePos) {
        const pos = particle.getPosition();
        const shadowOptions = container.actualOptions.interactivity.modes.light.shadow;
        context.save();
        const radius = particle.getRadius();
        const sides = particle.sides;
        const full = (Math.PI * 2) / sides;
        const angle = -particle.rotate.value + Math.PI / 4;
        const factor = 1;
        const dots = [];
        for (let i = 0; i < sides; i++) {
            dots.push({
                x: pos.x + radius * Math.sin(angle + full * i) * factor,
                y: pos.y + radius * Math.cos(angle + full * i) * factor,
            });
        }
        const points = [];
        const shadowLength = shadowOptions.length;
        for (const dot of dots) {
            const dotAngle = Math.atan2(mousePos.y - dot.y, mousePos.x - dot.x);
            const endX = dot.x + shadowLength * Math.sin(-dotAngle - Math.PI / 2);
            const endY = dot.y + shadowLength * Math.cos(-dotAngle - Math.PI / 2);
            points.push({
                endX: endX,
                endY: endY,
                startX: dot.x,
                startY: dot.y,
            });
        }
        const shadowRgb = ColorUtils_1.ColorUtils.colorToRgb(shadowOptions.color);
        if (!shadowRgb) {
            return;
        }
        const shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowRgb);
        for (let i = points.length - 1; i >= 0; i--) {
            const n = i == points.length - 1 ? 0 : i + 1;
            context.beginPath();
            context.moveTo(points[i].startX, points[i].startY);
            context.lineTo(points[n].startX, points[n].startY);
            context.lineTo(points[n].endX, points[n].endY);
            context.lineTo(points[i].endX, points[i].endY);
            context.fillStyle = shadowColor;
            context.fill();
        }
        context.restore();
    }
    static drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow) {
        const pos = particle.getPosition();
        context.save();
        context.translate(pos.x, pos.y);
        context.beginPath();
        const angle = particle.rotate.value + (particle.options.rotate.path ? particle.velocity.angle : 0);
        if (angle !== 0) {
            context.rotate(angle);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = composite;
        }
        const shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        if (fillColorValue) {
            context.fillStyle = fillColorValue;
        }
        const stroke = particle.stroke;
        context.lineWidth = particle.strokeWidth;
        if (strokeColorValue) {
            context.strokeStyle = strokeColorValue;
        }
        CanvasUtils.drawShape(container, context, particle, radius, opacity, delta);
        if (stroke.width > 0) {
            context.stroke();
        }
        if (particle.close) {
            context.closePath();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
        context.save();
        context.translate(pos.x, pos.y);
        if (angle !== 0) {
            context.rotate(angle);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = composite;
        }
        CanvasUtils.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
        context.restore();
    }
    static drawShape(container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        const drawer = container.drawers.get(particle.shape);
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
    }
    static drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        const drawer = container.drawers.get(particle.shape);
        if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
            return;
        }
        drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
    }
    static drawPlugin(context, plugin, delta) {
        if (plugin.draw !== undefined) {
            context.save();
            plugin.draw(context, delta);
            context.restore();
        }
    }
}
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Circle.js":
/*!*******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Circle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
class Circle extends Range_1.Range {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    contains(point) {
        const d = Math.pow(point.x - this.position.x, 2) + Math.pow(point.y - this.position.y, 2);
        return d <= this.radius * this.radius;
    }
    intersects(range) {
        const rect = range;
        const circle = range;
        const pos1 = this.position;
        const pos2 = range.position;
        const xDist = Math.abs(pos2.x - pos1.x);
        const yDist = Math.abs(pos2.y - pos1.y);
        const r = this.radius;
        if (circle.radius !== undefined) {
            const rSum = r + circle.radius;
            const dist = Math.sqrt(xDist * xDist + yDist + yDist);
            return rSum > dist;
        }
        else if (rect.size !== undefined) {
            const w = rect.size.width;
            const h = rect.size.height;
            const edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
            if (xDist > r + w || yDist > r + h) {
                return false;
            }
            if (xDist <= w || yDist <= h) {
                return true;
            }
            return edges <= r * r;
        }
        return false;
    }
}
exports.Circle = Circle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/CircleWarp.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/CircleWarp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleWarp = void 0;
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
const Circle_1 = __webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
class CircleWarp extends Circle_1.Circle {
    constructor(x, y, radius, canvasSize) {
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = {
            height: canvasSize.height,
            width: canvasSize.width,
        };
    }
    contains(point) {
        if (super.contains(point)) {
            return true;
        }
        const posNE = {
            x: point.x - this.canvasSize.width,
            y: point.y,
        };
        if (super.contains(posNE)) {
            return true;
        }
        const posSE = {
            x: point.x - this.canvasSize.width,
            y: point.y - this.canvasSize.height,
        };
        if (super.contains(posSE)) {
            return true;
        }
        const posSW = {
            x: point.x,
            y: point.y - this.canvasSize.height,
        };
        return super.contains(posSW);
    }
    intersects(range) {
        if (super.intersects(range)) {
            return true;
        }
        const rect = range;
        const circle = range;
        const newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height,
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
            return super.intersects(biggerCircle);
        }
        else if (rect.size !== undefined) {
            const rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return super.intersects(rectSW);
        }
        return false;
    }
}
exports.CircleWarp = CircleWarp;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/ColorUtils.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/ColorUtils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUtils = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
const NumberUtils_1 = __webpack_require__(/*! ./NumberUtils */ "./node_modules/tsparticles/dist/Utils/NumberUtils.js");
function hue2rgb(p, q, t) {
    let tCalc = t;
    if (tCalc < 0) {
        tCalc += 1;
    }
    if (tCalc > 1) {
        tCalc -= 1;
    }
    if (tCalc < 1 / 6) {
        return p + (q - p) * 6 * tCalc;
    }
    if (tCalc < 1 / 2) {
        return q;
    }
    if (tCalc < 2 / 3) {
        return p + (q - p) * (2 / 3 - tCalc) * 6;
    }
    return p;
}
function stringToRgba(input) {
    if (input.startsWith("rgb")) {
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result
            ? {
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                b: parseInt(result[3], 10),
                g: parseInt(result[2], 10),
                r: parseInt(result[1], 10),
            }
            : undefined;
    }
    else if (input.startsWith("hsl")) {
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result
            ? ColorUtils.hslaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1], 10),
                l: parseInt(result[3], 10),
                s: parseInt(result[2], 10),
            })
            : undefined;
    }
    else if (input.startsWith("hsv")) {
        const regex = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result
            ? ColorUtils.hsvaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1], 10),
                s: parseInt(result[2], 10),
                v: parseInt(result[3], 10),
            })
            : undefined;
    }
    else {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
        const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
            return r + r + g + g + b + b + (a !== undefined ? a + a : "");
        });
        const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
        const result = regex.exec(hexFixed);
        return result
            ? {
                a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
                b: parseInt(result[3], 16),
                g: parseInt(result[2], 16),
                r: parseInt(result[1], 16),
            }
            : undefined;
    }
}
class ColorUtils {
    static colorToRgb(input, index, useIndex = true) {
        var _a, _b, _c;
        if (input === undefined) {
            return;
        }
        const color = typeof input === "string" ? { value: input } : input;
        let res;
        if (typeof color.value === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = ColorUtils.getRandomRgbColor();
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                const colorSelected = Utils_1.Utils.itemFromArray(color.value, index, useIndex);
                res = ColorUtils.colorToRgb({ value: colorSelected });
            }
            else {
                const colorValue = color.value;
                const rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                else {
                    const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
                    if (hslColor.h !== undefined && hslColor.l !== undefined) {
                        res = ColorUtils.hslToRgb(hslColor);
                    }
                    else {
                        const hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;
                        if (hsvColor.h !== undefined && hsvColor.v !== undefined) {
                            res = ColorUtils.hsvToRgb(hsvColor);
                        }
                    }
                }
            }
        }
        return res;
    }
    static colorToHsl(color, index, useIndex = true) {
        const rgb = ColorUtils.colorToRgb(color, index, useIndex);
        return rgb !== undefined ? ColorUtils.rgbToHsl(rgb) : undefined;
    }
    static rgbToHsl(color) {
        const r1 = color.r / 255;
        const g1 = color.g / 255;
        const b1 = color.b / 255;
        const max = Math.max(r1, g1, b1);
        const min = Math.min(r1, g1, b1);
        const res = {
            h: 0,
            l: (max + min) / 2,
            s: 0,
        };
        if (max != min) {
            res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);
            res.h =
                r1 === max
                    ? (g1 - b1) / (max - min)
                    : (res.h = g1 === max ? 2.0 + (b1 - r1) / (max - min) : 4.0 + (r1 - g1) / (max - min));
        }
        res.l *= 100;
        res.s *= 100;
        res.h *= 60;
        if (res.h < 0) {
            res.h += 360;
        }
        return res;
    }
    static stringToAlpha(input) {
        var _a;
        return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    }
    static stringToRgb(input) {
        return stringToRgba(input);
    }
    static hslToRgb(hsl) {
        const result = { b: 0, g: 0, r: 0 };
        const hslPercent = {
            h: hsl.h / 360,
            l: hsl.l / 100,
            s: hsl.s / 100,
        };
        if (hslPercent.s === 0) {
            result.b = hslPercent.l;
            result.g = hslPercent.l;
            result.r = hslPercent.l;
        }
        else {
            const q = hslPercent.l < 0.5
                ? hslPercent.l * (1 + hslPercent.s)
                : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
            const p = 2 * hslPercent.l - q;
            result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
            result.g = hue2rgb(p, q, hslPercent.h);
            result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
        }
        result.r = Math.floor(result.r * 255);
        result.g = Math.floor(result.g * 255);
        result.b = Math.floor(result.b * 255);
        return result;
    }
    static hslaToRgba(hsla) {
        const rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    }
    static hslToHsv(hsl) {
        const l = hsl.l / 100, sl = hsl.s / 100;
        const v = l + sl * Math.min(l, 1 - l), sv = !v ? 0 : 2 * (1 - l / v);
        return {
            h: hsl.h,
            s: sv * 100,
            v: v * 100,
        };
    }
    static hslaToHsva(hsla) {
        const hsvResult = ColorUtils.hslToHsv(hsla);
        return {
            a: hsla.a,
            h: hsvResult.h,
            s: hsvResult.s,
            v: hsvResult.v,
        };
    }
    static hsvToHsl(hsv) {
        const v = hsv.v / 100, sv = hsv.s / 100;
        const l = v * (1 - sv / 2), sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
        return {
            h: hsv.h,
            l: l * 100,
            s: sl * 100,
        };
    }
    static hsvaToHsla(hsva) {
        const hslResult = ColorUtils.hsvToHsl(hsva);
        return {
            a: hsva.a,
            h: hslResult.h,
            l: hslResult.l,
            s: hslResult.s,
        };
    }
    static hsvToRgb(hsv) {
        const result = { b: 0, g: 0, r: 0 };
        const hsvPercent = {
            h: hsv.h / 60,
            s: hsv.s / 100,
            v: hsv.v / 100,
        };
        const c = hsvPercent.v * hsvPercent.s, x = c * (1 - Math.abs((hsvPercent.h % 2) - 1));
        let tempRgb;
        if (hsvPercent.h >= 0 && hsvPercent.h <= 1) {
            tempRgb = {
                r: c,
                g: x,
                b: 0,
            };
        }
        else if (hsvPercent.h > 1 && hsvPercent.h <= 2) {
            tempRgb = {
                r: x,
                g: c,
                b: 0,
            };
        }
        else if (hsvPercent.h > 2 && hsvPercent.h <= 3) {
            tempRgb = {
                r: 0,
                g: c,
                b: x,
            };
        }
        else if (hsvPercent.h > 3 && hsvPercent.h <= 4) {
            tempRgb = {
                r: 0,
                g: x,
                b: c,
            };
        }
        else if (hsvPercent.h > 4 && hsvPercent.h <= 5) {
            tempRgb = {
                r: x,
                g: 0,
                b: c,
            };
        }
        else if (hsvPercent.h > 5 && hsvPercent.h <= 6) {
            tempRgb = {
                r: c,
                g: 0,
                b: x,
            };
        }
        if (tempRgb) {
            const m = hsvPercent.v - c;
            result.r = Math.floor((tempRgb.r + m) * 255);
            result.g = Math.floor((tempRgb.g + m) * 255);
            result.b = Math.floor((tempRgb.b + m) * 255);
        }
        return result;
    }
    static hsvaToRgba(hsva) {
        const rgbResult = ColorUtils.hsvToRgb(hsva);
        return {
            a: hsva.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    }
    static rgbToHsv(rgb) {
        const rgbPercent = {
            r: rgb.r / 255,
            g: rgb.g / 255,
            b: rgb.b / 255,
        }, xMax = Math.max(rgbPercent.r, rgbPercent.g, rgbPercent.b), xMin = Math.min(rgbPercent.r, rgbPercent.g, rgbPercent.b), v = xMax, c = xMax - xMin;
        let h = 0;
        if (v === rgbPercent.r) {
            h = 60 * ((rgbPercent.g - rgbPercent.b) / c);
        }
        else if (v === rgbPercent.g) {
            h = 60 * (2 + (rgbPercent.b - rgbPercent.r) / c);
        }
        else if (v === rgbPercent.b) {
            h = 60 * (4 + (rgbPercent.r - rgbPercent.g) / c);
        }
        const s = !v ? 0 : c / v;
        return {
            h,
            s: s * 100,
            v: v * 100,
        };
    }
    static rgbaToHsva(rgba) {
        const hsvResult = ColorUtils.rgbToHsv(rgba);
        return {
            a: rgba.a,
            h: hsvResult.h,
            s: hsvResult.s,
            v: hsvResult.v,
        };
    }
    static getRandomRgbColor(min) {
        const fixedMin = min !== null && min !== void 0 ? min : 0;
        return {
            b: Math.floor(NumberUtils_1.NumberUtils.randomInRange(NumberUtils_1.NumberUtils.setRangeValue(fixedMin, 256))),
            g: Math.floor(NumberUtils_1.NumberUtils.randomInRange(NumberUtils_1.NumberUtils.setRangeValue(fixedMin, 256))),
            r: Math.floor(NumberUtils_1.NumberUtils.randomInRange(NumberUtils_1.NumberUtils.setRangeValue(fixedMin, 256))),
        };
    }
    static getStyleFromRgb(color, opacity) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
    }
    static getStyleFromHsl(color, opacity) {
        return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
    }
    static getStyleFromHsv(color, opacity) {
        return ColorUtils.getStyleFromHsl(ColorUtils.hsvToHsl(color), opacity);
    }
    static mix(color1, color2, size1, size2) {
        let rgb1 = color1;
        let rgb2 = color2;
        if (rgb1.r === undefined) {
            rgb1 = ColorUtils.hslToRgb(color1);
        }
        if (rgb2.r === undefined) {
            rgb2 = ColorUtils.hslToRgb(color2);
        }
        return {
            b: NumberUtils_1.NumberUtils.mix(rgb1.b, rgb2.b, size1, size2),
            g: NumberUtils_1.NumberUtils.mix(rgb1.g, rgb2.g, size1, size2),
            r: NumberUtils_1.NumberUtils.mix(rgb1.r, rgb2.r, size1, size2),
        };
    }
    static replaceColorSvg(image, color, opacity) {
        if (!image.svgData) {
            return "";
        }
        const svgXml = image.svgData;
        const rgbHex = /#([0-9A-F]{3,6})/gi;
        return svgXml.replace(rgbHex, () => ColorUtils.getStyleFromHsl(color, opacity));
    }
    static getLinkColor(p1, p2, linkColor) {
        var _a, _b;
        if (linkColor === Constants_1.Constants.randomColorValue) {
            return ColorUtils.getRandomRgbColor();
        }
        else if (linkColor === "mid") {
            const sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor();
            const destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();
            if (sourceColor && destColor && p2) {
                return ColorUtils.mix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
            }
            else {
                const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                if (hslColor) {
                    return ColorUtils.hslToRgb(hslColor);
                }
            }
        }
        else {
            return linkColor;
        }
    }
    static getLinkRandomColor(optColor, blink, consent) {
        const color = typeof optColor === "string" ? optColor : optColor.value;
        if (color === Constants_1.Constants.randomColorValue) {
            if (consent) {
                return ColorUtils.colorToRgb({
                    value: color,
                });
            }
            else if (blink) {
                return Constants_1.Constants.randomColorValue;
            }
            else {
                return Constants_1.Constants.midColorValue;
            }
        }
        else {
            return ColorUtils.colorToRgb({
                value: color,
            });
        }
    }
    static getHslFromAnimation(animation) {
        return animation !== undefined
            ? {
                h: animation.h.value,
                s: animation.s.value,
                l: animation.l.value,
            }
            : undefined;
    }
}
exports.ColorUtils = ColorUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.midColorValue = "mid";
Constants.touchEndEvent = "touchend";
Constants.mouseDownEvent = "mousedown";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.mouseOutEvent = "mouseout";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
Constants.noPolygonDataLoaded = "No polygon data loaded.";
Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/EventListeners.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/EventListeners.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListeners = void 0;
const Enums_1 = __webpack_require__(/*! ../Enums */ "./node_modules/tsparticles/dist/Enums/index.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js");
function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = { passive: true };
        if (typeof options === "boolean") {
            addOptions.capture = options;
        }
        else if (options !== undefined) {
            addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
    }
    else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container) {
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchStartHandler = (e) => this.mouseTouchMove(e);
        this.touchMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchEndHandler = () => this.mouseTouchFinish();
        this.mouseLeaveHandler = () => this.mouseTouchFinish();
        this.touchCancelHandler = () => this.mouseTouchFinish();
        this.touchEndClickHandler = (e) => this.mouseTouchClick(e);
        this.mouseUpHandler = (e) => this.mouseTouchClick(e);
        this.mouseDownHandler = () => this.mouseDown();
        this.visibilityChangeHandler = () => this.handleVisibilityChange();
        this.resizeHandler = () => this.handleWindowResize();
    }
    addListeners() {
        this.manageListeners(true);
    }
    removeListeners() {
        this.manageListeners(false);
    }
    manageListeners(add) {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const detectType = options.interactivity.detectsOn;
        let mouseLeaveEvent = Constants_1.Constants.mouseLeaveEvent;
        if (detectType === Enums_1.InteractivityDetect.window) {
            container.interactivity.element = window;
            mouseLeaveEvent = Constants_1.Constants.mouseOutEvent;
        }
        else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
            const canvasEl = container.canvas.element;
            container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        const interactivityEl = container.interactivity.element;
        if (!interactivityEl) {
            return;
        }
        const html = interactivityEl;
        if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
            manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            else {
                manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
                manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
                manageListener(interactivityEl, Constants_1.Constants.mouseDownEvent, this.mouseDownHandler, add);
            }
            manageListener(interactivityEl, mouseLeaveEvent, this.mouseLeaveHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (container.canvas.element) {
            container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
        }
        if (options.interactivity.events.resize) {
            manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    }
    handleWindowResize() {
        var _a;
        (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
    }
    handleVisibilityChange() {
        const container = this.container;
        const options = container.actualOptions;
        this.mouseTouchFinish();
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw();
            }
        }
    }
    mouseDown() {
        const interactivity = this.container.interactivity;
        if (interactivity) {
            const mouse = interactivity.mouse;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        }
    }
    mouseTouchMove(e) {
        var _a, _b, _c, _d, _e, _f, _g;
        const container = this.container;
        const options = container.actualOptions;
        if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
            return;
        }
        container.interactivity.mouse.inside = true;
        let pos;
        const canvas = container.canvas.element;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            const mouseEvent = e;
            if (container.interactivity.element === window) {
                if (canvas) {
                    const clientRect = canvas.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
                const source = mouseEvent.target;
                const target = mouseEvent.currentTarget;
                const canvasEl = container.canvas.element;
                if (source && target && canvasEl) {
                    const sourceRect = source.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    const canvasRect = canvasEl.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                        y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top),
                    };
                }
                else {
                    pos = {
                        x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
                        y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
                        y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            const touchEvent = e;
            const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            const canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_f = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _f !== void 0 ? _f : 0),
                y: lastTouch.clientY - ((_g = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _g !== void 0 ? _g : 0),
            };
        }
        const pxRatio = container.retina.pixelRatio;
        if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    }
    mouseTouchFinish() {
        const interactivity = this.container.interactivity;
        if (interactivity === undefined) {
            return;
        }
        const mouse = interactivity.mouse;
        delete mouse.position;
        delete mouse.clickPosition;
        delete mouse.downPosition;
        interactivity.status = Constants_1.Constants.mouseLeaveEvent;
        mouse.inside = false;
        mouse.clicking = false;
    }
    mouseTouchClick(e) {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        mouse.inside = true;
        let handled = false;
        const mousePosition = mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (const [, plugin] of container.plugins) {
            if (plugin.clickPositionValid !== undefined) {
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
        mouse.clicking = false;
    }
    doMouseTouchClick(e) {
        const container = this.container;
        const options = container.actualOptions;
        if (this.canPush) {
            const mousePos = container.interactivity.mouse.position;
            if (mousePos) {
                container.interactivity.mouse.clickPosition = {
                    x: mousePos.x,
                    y: mousePos.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            const onClick = options.interactivity.events.onClick;
            if (onClick.mode instanceof Array) {
                for (const mode of onClick.mode) {
                    this.handleClickMode(mode);
                }
            }
            else {
                this.handleClickMode(onClick.mode);
            }
        }
        if (e.type === "touchend") {
            setTimeout(() => this.mouseTouchFinish(), 500);
        }
    }
    handleClickMode(mode) {
        const container = this.container;
        const options = container.actualOptions;
        const pushNb = options.interactivity.modes.push.quantity;
        const removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
            case Enums_1.ClickMode.push: {
                if (pushNb > 0) {
                    container.particles.push(pushNb, container.interactivity.mouse);
                }
                break;
            }
            case Enums_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case Enums_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case Enums_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (const particle of container.repulse.particles) {
                    particle.velocity.setTo(particle.initialVelocity);
                }
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(() => {
                    if (!container.destroyed) {
                        container.repulse.clicking = false;
                    }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
            case Enums_1.ClickMode.attract:
                container.attract.clicking = true;
                container.attract.count = 0;
                for (const particle of container.attract.particles) {
                    particle.velocity.setTo(particle.initialVelocity);
                }
                container.attract.particles = [];
                container.attract.finish = false;
                setTimeout(() => {
                    if (!container.destroyed) {
                        container.attract.clicking = false;
                    }
                }, options.interactivity.modes.attract.duration * 1000);
                break;
            case Enums_1.ClickMode.pause:
                if (container.getAnimationStatus()) {
                    container.pause();
                }
                else {
                    container.play();
                }
                break;
        }
        for (const [, plugin] of container.plugins) {
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    }
}
exports.EventListeners = EventListeners;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/NumberUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/NumberUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
const Directions_1 = __webpack_require__(/*! ../Enums/Directions */ "./node_modules/tsparticles/dist/Enums/Directions/index.js");
const Vector_1 = __webpack_require__(/*! ../Core/Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js");
class NumberUtils {
    static clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }
    static mix(comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    }
    static randomInRange(r) {
        const max = NumberUtils.getRangeMax(r);
        let min = NumberUtils.getRangeMin(r);
        if (max === min) {
            min = 0;
        }
        return Math.random() * (max - min) + min;
    }
    static getRangeValue(value) {
        return typeof value === "number" ? value : NumberUtils.randomInRange(value);
    }
    static getRangeMin(value) {
        return typeof value === "number" ? value : value.min;
    }
    static getRangeMax(value) {
        return typeof value === "number" ? value : value.max;
    }
    static setRangeValue(source, value) {
        if (source === value || (value === undefined && typeof source === "number")) {
            return source;
        }
        const min = NumberUtils.getRangeMin(source), max = NumberUtils.getRangeMax(source);
        return value !== undefined
            ? {
                min: Math.min(min, value),
                max: Math.max(max, value),
            }
            : NumberUtils.setRangeValue(min, max);
    }
    static getValue(options) {
        const random = options.random;
        const { enable, minimumValue } = typeof random === "boolean" ? { enable: random, minimumValue: 0 } : random;
        return enable
            ? NumberUtils.getRangeValue(NumberUtils.setRangeValue(options.value, minimumValue))
            : NumberUtils.getRangeValue(options.value);
    }
    static getDistances(pointA, pointB) {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        return { dx: dx, dy: dy, distance: Math.sqrt(dx * dx + dy * dy) };
    }
    static getDistance(pointA, pointB) {
        return NumberUtils.getDistances(pointA, pointB).distance;
    }
    static getParticleBaseVelocity(direction) {
        const baseVelocity = Vector_1.Vector.origin;
        baseVelocity.length = 1;
        switch (direction) {
            case Directions_1.MoveDirection.top:
                baseVelocity.angle = -Math.PI / 2;
                break;
            case Directions_1.MoveDirection.topRight:
                baseVelocity.angle = -Math.PI / 4;
                break;
            case Directions_1.MoveDirection.right:
                baseVelocity.angle = 0;
                break;
            case Directions_1.MoveDirection.bottomRight:
                baseVelocity.angle = Math.PI / 4;
                break;
            case Directions_1.MoveDirection.bottom:
                baseVelocity.angle = Math.PI / 2;
                break;
            case Directions_1.MoveDirection.bottomLeft:
                baseVelocity.angle = (3 * Math.PI) / 4;
                break;
            case Directions_1.MoveDirection.left:
                baseVelocity.angle = Math.PI;
                break;
            case Directions_1.MoveDirection.topLeft:
                baseVelocity.angle = (-3 * Math.PI) / 4;
                break;
            case Directions_1.MoveDirection.none:
            default:
                baseVelocity.angle = Math.random() * Math.PI * 2;
                break;
        }
        return baseVelocity;
    }
    static rotateVelocity(velocity, angle) {
        return {
            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
        };
    }
    static collisionVelocity(v1, v2, m1, m2) {
        return Vector_1.Vector.create((v1.x * (m1 - m2)) / (m1 + m2) + (v2.x * 2 * m2) / (m1 + m2), v1.y);
    }
}
exports.NumberUtils = NumberUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Plugins.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Plugins.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugins = void 0;
const plugins = [];
const presets = new Map();
const drawers = new Map();
const pathGenerators = new Map();
class Plugins {
    static getPlugin(plugin) {
        return plugins.find((t) => t.id === plugin);
    }
    static addPlugin(plugin) {
        if (!Plugins.getPlugin(plugin.id)) {
            plugins.push(plugin);
        }
    }
    static getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of plugins) {
            if (!plugin.needsPlugin(container.actualOptions)) {
                continue;
            }
            res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
    }
    static loadOptions(options, sourceOptions) {
        for (const plugin of plugins) {
            plugin.loadOptions(options, sourceOptions);
        }
    }
    static getPreset(preset) {
        return presets.get(preset);
    }
    static addPreset(presetKey, options) {
        if (!Plugins.getPreset(presetKey)) {
            presets.set(presetKey, options);
        }
    }
    static addShapeDrawer(type, drawer) {
        if (!Plugins.getShapeDrawer(type)) {
            drawers.set(type, drawer);
        }
    }
    static getShapeDrawer(type) {
        return drawers.get(type);
    }
    static getSupportedShapes() {
        return drawers.keys();
    }
    static getPathGenerator(type) {
        return pathGenerators.get(type);
    }
    static addPathGenerator(type, pathGenerator) {
        if (!Plugins.getPathGenerator(type)) {
            pathGenerators.set(type, pathGenerator);
        }
    }
}
exports.Plugins = Plugins;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Point.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Point.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(position, particle) {
        this.position = position;
        this.particle = particle;
    }
}
exports.Point = Point;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/QuadTree.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/QuadTree.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadTree = void 0;
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js");
const Circle_1 = __webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js");
const CircleWarp_1 = __webpack_require__(/*! ./CircleWarp */ "./node_modules/tsparticles/dist/Utils/CircleWarp.js");
class QuadTree {
    constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }
    subdivide() {
        const x = this.rectangle.position.x;
        const y = this.rectangle.position.y;
        const w = this.rectangle.size.width;
        const h = this.rectangle.size.height;
        const capacity = this.capacity;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
        this.divided = true;
    }
    insert(point) {
        var _a, _b, _c, _d, _e;
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        if (!this.divided) {
            this.subdivide();
        }
        return ((_e = (((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) ||
            ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) ||
            ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) ||
            ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)))) !== null && _e !== void 0 ? _e : false);
    }
    queryCircle(position, radius) {
        return this.query(new Circle_1.Circle(position.x, position.y, radius));
    }
    queryCircleWarp(position, radius, containerOrSize) {
        const container = containerOrSize;
        const size = containerOrSize;
        return this.query(new CircleWarp_1.CircleWarp(position.x, position.y, radius, container.canvas !== undefined ? container.canvas.size : size));
    }
    queryRectangle(position, size) {
        return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height));
    }
    query(range, found) {
        var _a, _b, _c, _d;
        const res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        else {
            for (const p of this.points) {
                if (!range.contains(p.position)) {
                    continue;
                }
                res.push(p.particle);
            }
            if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
            }
        }
        return res;
    }
}
exports.QuadTree = QuadTree;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Range.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
class Range {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
}
exports.Range = Range;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Rectangle.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Rectangle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Range_1 = __webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js");
class Rectangle extends Range_1.Range {
    constructor(x, y, width, height) {
        super(x, y);
        this.size = {
            height: height,
            width: width,
        };
    }
    contains(point) {
        const w = this.size.width;
        const h = this.size.height;
        const pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        const rect = range;
        const circle = range;
        const w = this.size.width;
        const h = this.size.height;
        const pos1 = this.position;
        const pos2 = range.position;
        if (circle.radius !== undefined) {
            return circle.intersects(this);
        }
        else if (rect.size !== undefined) {
            const size2 = rect.size;
            const w2 = size2.width;
            const h2 = size2.height;
            return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
        }
        return false;
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/Utils.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/Utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const OutModeDirection_1 = __webpack_require__(/*! ../Enums/Directions/OutModeDirection */ "./node_modules/tsparticles/dist/Enums/Directions/OutModeDirection.js");
const NumberUtils_1 = __webpack_require__(/*! ./NumberUtils */ "./node_modules/tsparticles/dist/Utils/NumberUtils.js");
function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
    const res = { bounced: false };
    if (pOtherSide.min >= rectOtherSide.min &&
        pOtherSide.min <= rectOtherSide.max &&
        pOtherSide.max >= rectOtherSide.min &&
        pOtherSide.max <= rectOtherSide.max) {
        if ((pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0) ||
            (pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0)) {
            res.velocity = velocity * -factor;
            res.bounced = true;
        }
    }
    return res;
}
function checkSelector(element, selectors) {
    if (selectors instanceof Array) {
        for (const selector of selectors) {
            if (element.matches(selector)) {
                return true;
            }
        }
        return false;
    }
    else {
        return element.matches(selectors);
    }
}
class Utils {
    static isSsr() {
        return typeof window === "undefined" || !window;
    }
    static get animate() {
        return Utils.isSsr()
            ? (callback) => setTimeout(callback)
            : (callback) => (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.setTimeout)(callback);
    }
    static get cancelAnimation() {
        return Utils.isSsr()
            ? (handle) => clearTimeout(handle)
            : (handle) => (window.cancelAnimationFrame ||
                window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame ||
                window.oCancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame ||
                window.clearTimeout)(handle);
    }
    static isInArray(value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    }
    static loadFont(character) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield document.fonts.load(`${character.weight} 36px '${character.font}'`);
            }
            catch (_a) {
            }
        });
    }
    static arrayRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    static itemFromArray(array, index, useIndex = true) {
        const fixedIndex = index !== undefined && useIndex ? index % array.length : Utils.arrayRandomIndex(array);
        return array[fixedIndex];
    }
    static isPointInside(point, size, radius, direction) {
        return Utils.areBoundsInside(Utils.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
    }
    static areBoundsInside(bounds, size, direction) {
        let inside = true;
        if (!direction || direction === OutModeDirection_1.OutModeDirection.bottom) {
            inside = bounds.top < size.height;
        }
        if (inside && (!direction || direction === OutModeDirection_1.OutModeDirection.left)) {
            inside = bounds.right > 0;
        }
        if (inside && (!direction || direction === OutModeDirection_1.OutModeDirection.right)) {
            inside = bounds.left < size.width;
        }
        if (inside && (!direction || direction === OutModeDirection_1.OutModeDirection.top)) {
            inside = bounds.bottom > 0;
        }
        return inside;
    }
    static calculateBounds(point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    }
    static loadImage(source) {
        return new Promise((resolve, reject) => {
            if (!source) {
                reject("Error tsParticles - No image.src");
                return;
            }
            const image = {
                source: source,
                type: source.substr(source.length - 3),
            };
            const img = new Image();
            img.addEventListener("load", () => {
                image.element = img;
                resolve(image);
            });
            img.addEventListener("error", () => {
                reject(`Error tsParticles - loading image: ${source}`);
            });
            img.src = source;
        });
    }
    static downloadSvgImage(source) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!source) {
                throw new Error("Error tsParticles - No image.src");
            }
            const image = {
                source: source,
                type: source.substr(source.length - 3),
            };
            if (image.type !== "svg") {
                return Utils.loadImage(source);
            }
            const response = yield fetch(image.source);
            if (!response.ok) {
                throw new Error("Error tsParticles - Image not found");
            }
            image.svgData = yield response.text();
            return image;
        });
    }
    static deepExtend(destination, ...sources) {
        for (const source of sources) {
            if (source === undefined || source === null) {
                continue;
            }
            if (typeof source !== "object") {
                destination = source;
                continue;
            }
            const sourceIsArray = Array.isArray(source);
            if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
                destination = [];
            }
            else if (!sourceIsArray &&
                (typeof destination !== "object" || !destination || Array.isArray(destination))) {
                destination = {};
            }
            for (const key in source) {
                if (key === "__proto__") {
                    continue;
                }
                const sourceDict = source;
                const value = sourceDict[key];
                const isObject = typeof value === "object";
                const destDict = destination;
                destDict[key] =
                    isObject && Array.isArray(value)
                        ? value.map((v) => Utils.deepExtend(destDict[key], v))
                        : Utils.deepExtend(destDict[key], value);
            }
        }
        return destination;
    }
    static isDivModeEnabled(mode, divs) {
        return divs instanceof Array
            ? !!divs.find((t) => t.enable && Utils.isInArray(mode, t.mode))
            : Utils.isInArray(mode, divs.mode);
    }
    static divModeExecute(mode, divs, callback) {
        if (divs instanceof Array) {
            for (const div of divs) {
                const divMode = div.mode;
                const divEnabled = div.enable;
                if (divEnabled && Utils.isInArray(mode, divMode)) {
                    Utils.singleDivModeExecute(div, callback);
                }
            }
        }
        else {
            const divMode = divs.mode;
            const divEnabled = divs.enable;
            if (divEnabled && Utils.isInArray(mode, divMode)) {
                Utils.singleDivModeExecute(divs, callback);
            }
        }
    }
    static singleDivModeExecute(div, callback) {
        const selectors = div.selectors;
        if (selectors instanceof Array) {
            for (const selector of selectors) {
                callback(selector, div);
            }
        }
        else {
            callback(selectors, div);
        }
    }
    static divMode(divs, element) {
        if (!element || !divs) {
            return;
        }
        if (divs instanceof Array) {
            return divs.find((d) => checkSelector(element, d.selectors));
        }
        else if (checkSelector(element, divs.selectors)) {
            return divs;
        }
    }
    static circleBounceDataFromParticle(p) {
        return {
            position: p.getPosition(),
            radius: p.getRadius(),
            mass: p.getMass(),
            velocity: p.velocity,
            factor: {
                horizontal: NumberUtils_1.NumberUtils.getValue(p.options.bounce.horizontal),
                vertical: NumberUtils_1.NumberUtils.getValue(p.options.bounce.vertical),
            },
        };
    }
    static circleBounce(p1, p2) {
        const xVelocityDiff = p1.velocity.x;
        const yVelocityDiff = p1.velocity.y;
        const pos1 = p1.position;
        const pos2 = p2.position;
        const xDist = pos2.x - pos1.x;
        const yDist = pos2.y - pos1.y;
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
            const m1 = p1.mass;
            const m2 = p2.mass;
            const u1 = p1.velocity.rotate(angle);
            const u2 = p2.velocity.rotate(angle);
            const v1 = NumberUtils_1.NumberUtils.collisionVelocity(u1, u2, m1, m2);
            const v2 = NumberUtils_1.NumberUtils.collisionVelocity(u2, u1, m1, m2);
            const vFinal1 = v1.rotate(-angle);
            const vFinal2 = v2.rotate(-angle);
            p1.velocity.x = vFinal1.x * p1.factor.horizontal;
            p1.velocity.y = vFinal1.y * p1.factor.vertical;
            p2.velocity.x = vFinal2.x * p2.factor.horizontal;
            p2.velocity.y = vFinal2.y * p2.factor.vertical;
        }
    }
    static rectBounce(particle, divBounds) {
        const pPos = particle.getPosition();
        const size = particle.getRadius();
        const bounds = Utils.calculateBounds(pPos, size);
        const resH = rectSideBounce({
            min: bounds.left,
            max: bounds.right,
        }, {
            min: bounds.top,
            max: bounds.bottom,
        }, {
            min: divBounds.left,
            max: divBounds.right,
        }, {
            min: divBounds.top,
            max: divBounds.bottom,
        }, particle.velocity.x, NumberUtils_1.NumberUtils.getValue(particle.options.bounce.horizontal));
        if (resH.bounced) {
            if (resH.velocity !== undefined) {
                particle.velocity.x = resH.velocity;
            }
            if (resH.position !== undefined) {
                particle.position.x = resH.position;
            }
        }
        const resV = rectSideBounce({
            min: bounds.top,
            max: bounds.bottom,
        }, {
            min: bounds.left,
            max: bounds.right,
        }, {
            min: divBounds.top,
            max: divBounds.bottom,
        }, {
            min: divBounds.left,
            max: divBounds.right,
        }, particle.velocity.y, NumberUtils_1.NumberUtils.getValue(particle.options.bounce.vertical));
        if (resV.bounced) {
            if (resV.velocity !== undefined) {
                particle.velocity.y = resV.velocity;
            }
            if (resV.position !== undefined) {
                particle.position.y = resV.position;
            }
        }
    }
}
exports.Utils = Utils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Utils/index.js":
/*!******************************************************!*\
  !*** ./node_modules/tsparticles/dist/Utils/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./CanvasUtils */ "./node_modules/tsparticles/dist/Utils/CanvasUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Circle */ "./node_modules/tsparticles/dist/Utils/Circle.js"), exports);
__exportStar(__webpack_require__(/*! ./CircleWarp */ "./node_modules/tsparticles/dist/Utils/CircleWarp.js"), exports);
__exportStar(__webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Utils/ColorUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Utils/Constants.js"), exports);
__exportStar(__webpack_require__(/*! ./EventListeners */ "./node_modules/tsparticles/dist/Utils/EventListeners.js"), exports);
__exportStar(__webpack_require__(/*! ./NumberUtils */ "./node_modules/tsparticles/dist/Utils/NumberUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./Plugins */ "./node_modules/tsparticles/dist/Utils/Plugins.js"), exports);
__exportStar(__webpack_require__(/*! ./Point */ "./node_modules/tsparticles/dist/Utils/Point.js"), exports);
__exportStar(__webpack_require__(/*! ./QuadTree */ "./node_modules/tsparticles/dist/Utils/QuadTree.js"), exports);
__exportStar(__webpack_require__(/*! ./Range */ "./node_modules/tsparticles/dist/Utils/Range.js"), exports);
__exportStar(__webpack_require__(/*! ./Rectangle */ "./node_modules/tsparticles/dist/Utils/Rectangle.js"), exports);
__exportStar(__webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/Utils.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.Main = exports.Utils = exports.Constants = exports.ColorUtils = exports.CanvasUtils = void 0;
const pjs_1 = __webpack_require__(/*! ./pjs */ "./node_modules/tsparticles/dist/pjs.js");
const main_1 = __webpack_require__(/*! ./main */ "./node_modules/tsparticles/dist/main.js");
Object.defineProperty(exports, "Main", { enumerable: true, get: function () { return main_1.Main; } });
const Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
Object.defineProperty(exports, "CanvasUtils", { enumerable: true, get: function () { return Utils_1.CanvasUtils; } });
Object.defineProperty(exports, "ColorUtils", { enumerable: true, get: function () { return Utils_1.ColorUtils; } });
Object.defineProperty(exports, "Constants", { enumerable: true, get: function () { return Utils_1.Constants; } });
Object.defineProperty(exports, "Utils", { enumerable: true, get: function () { return Utils_1.Utils; } });
const tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();
const { particlesJS, pJSDom } = pjs_1.initPjs(tsParticles);
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
__exportStar(__webpack_require__(/*! ./Core/Particle/Vector */ "./node_modules/tsparticles/dist/Core/Particle/Vector.js"), exports);
__exportStar(__webpack_require__(/*! ./Core/Container */ "./node_modules/tsparticles/dist/Core/Container.js"), exports);
__exportStar(__webpack_require__(/*! ./Enums */ "./node_modules/tsparticles/dist/Enums/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Plugins/Absorbers/Enums */ "./node_modules/tsparticles/dist/Plugins/Absorbers/Enums/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Plugins/Emitters/Enums */ "./node_modules/tsparticles/dist/Plugins/Emitters/Enums/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Plugins/PolygonMask/Enums */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/Enums/index.js"), exports);
__exportStar(__webpack_require__(/*! ./Types */ "./node_modules/tsparticles/dist/Types/index.js"), exports);


/***/ }),

/***/ "./node_modules/tsparticles/dist/main.js":
/*!***********************************************!*\
  !*** ./node_modules/tsparticles/dist/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const main_slim_1 = __webpack_require__(/*! ./main.slim */ "./node_modules/tsparticles/dist/main.slim.js");
const AbsorbersPlugin_1 = __webpack_require__(/*! ./Plugins/Absorbers/AbsorbersPlugin */ "./node_modules/tsparticles/dist/Plugins/Absorbers/AbsorbersPlugin.js");
const EmittersPlugin_1 = __webpack_require__(/*! ./Plugins/Emitters/EmittersPlugin */ "./node_modules/tsparticles/dist/Plugins/Emitters/EmittersPlugin.js");
const PolygonMaskPlugin_1 = __webpack_require__(/*! ./Plugins/PolygonMask/PolygonMaskPlugin */ "./node_modules/tsparticles/dist/Plugins/PolygonMask/PolygonMaskPlugin.js");
class Main extends main_slim_1.MainSlim {
    constructor() {
        super();
        this.addPlugin(AbsorbersPlugin_1.AbsorbersPlugin);
        this.addPlugin(EmittersPlugin_1.EmittersPlugin);
        this.addPlugin(PolygonMaskPlugin_1.PolygonMaskPlugin);
    }
}
exports.Main = Main;


/***/ }),

/***/ "./node_modules/tsparticles/dist/main.slim.js":
/*!****************************************************!*\
  !*** ./node_modules/tsparticles/dist/main.slim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _initialized;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSlim = void 0;
const SquareDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/SquareDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/SquareDrawer.js");
const TextDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TextDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/TextDrawer.js");
const ImageDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/ImageDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/ImageDrawer.js");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Utils/index.js");
const Types_1 = __webpack_require__(/*! ./Enums/Types */ "./node_modules/tsparticles/dist/Enums/Types/index.js");
const LineDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/LineDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/LineDrawer.js");
const CircleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/CircleDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/CircleDrawer.js");
const TriangleDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/TriangleDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/TriangleDrawer.js");
const StarDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/StarDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/StarDrawer.js");
const PolygonDrawer_1 = __webpack_require__(/*! ./ShapeDrawers/PolygonDrawer */ "./node_modules/tsparticles/dist/ShapeDrawers/PolygonDrawer.js");
const Loader_1 = __webpack_require__(/*! ./Core/Loader */ "./node_modules/tsparticles/dist/Core/Loader.js");
class MainSlim {
    constructor() {
        _initialized.set(this, void 0);
        __classPrivateFieldSet(this, _initialized, false);
        const squareDrawer = new SquareDrawer_1.SquareDrawer();
        const textDrawer = new TextDrawer_1.TextDrawer();
        const imageDrawer = new ImageDrawer_1.ImageDrawer();
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.edge, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.square, squareDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.char, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.character, textDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.image, imageDrawer);
        Utils_1.Plugins.addShapeDrawer(Types_1.ShapeType.images, imageDrawer);
    }
    init() {
        if (!__classPrivateFieldGet(this, _initialized)) {
            __classPrivateFieldSet(this, _initialized, true);
        }
    }
    loadFromArray(tagId, options, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.load(tagId, options, index);
        });
    }
    load(tagId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.load(tagId, options);
        });
    }
    set(id, element, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader_1.Loader.set(id, element, options);
        });
    }
    loadJSON(tagId, pathConfigJson, index) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson, index);
    }
    setOnClickHandler(callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    }
    dom() {
        return Loader_1.Loader.dom();
    }
    domItem(index) {
        return Loader_1.Loader.domItem(index);
    }
    addShape(shape, drawer, init, afterEffect, destroy) {
        let customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                afterEffect: afterEffect,
                destroy: destroy,
                draw: drawer,
                init: init,
            };
        }
        else {
            customDrawer = drawer;
        }
        Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
    }
    addPreset(preset, options) {
        Utils_1.Plugins.addPreset(preset, options);
    }
    addPlugin(plugin) {
        Utils_1.Plugins.addPlugin(plugin);
    }
    addPathGenerator(name, generator) {
        Utils_1.Plugins.addPathGenerator(name, generator);
    }
}
exports.MainSlim = MainSlim;
_initialized = new WeakMap();


/***/ }),

/***/ "./node_modules/tsparticles/dist/pjs.js":
/*!**********************************************!*\
  !*** ./node_modules/tsparticles/dist/pjs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initPjs = void 0;
const initPjs = (main) => {
    const particlesJS = (tagId, options) => {
        return main.load(tagId, options);
    };
    particlesJS.load = (tagId, pathConfigJson, callback) => {
        main.loadJSON(tagId, pathConfigJson).then((container) => {
            if (container) {
                callback(container);
            }
        });
    };
    particlesJS.setOnClickHandler = (callback) => {
        main.setOnClickHandler(callback);
    };
    const pJSDom = main.dom();
    return { particlesJS, pJSDom };
};
exports.initPjs = initPjs;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\pages\\index.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex flex-column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_particles_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
        width: '100vw',
        height: '96vh',
        params: {
          polygon: {
            scale: 2,
            move: {
              radius: 3
            },
            draw: {
              stroke: {
                color: 'rgb(51, 168, 143)'
              }
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container d-flex align-items-center justify-content-center align-self-center",
        style: {
          position: "absolute",
          top: 0,
          height: "90vh"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-column align-items-center justify-content-around",
          style: {
            height: "40vh"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/images/SpaceXLogoFull.png",
            alt: "SpaceX Logo",
            className: "img-fluid d-block",
            onClick: function onClick() {
              window.open("https://www.spacex.com/", "_ blank");
            },
            style: {
              width: 700,
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex w-50 justify-content-around flex-wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              onClick: function onClick() {
                return router.push("launch_generator");
              },
              children: "Launch Generator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              children: "Launch Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: "text-center",
        style: {
          position: 'absolute',
          bottom: 40,
          width: '100%'
        },
        children: ["Developed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.github.com/andytubeee",
          children: "Andrew Yang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 24
        }, this), " \xA9 ", new Date().getFullYear()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})