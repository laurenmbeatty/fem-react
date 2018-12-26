// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Pet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//Stateless functional component
var Pet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pet, _React$Component);

  function Pet() {
    _classCallCheck(this, Pet);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pet).apply(this, arguments));
  }

  _createClass(Pet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          animal = _this$props.animal,
          breed = _this$props.breed,
          media = _this$props.media,
          location = _this$props.location,
          id = _this$props.id;
      var photos = [];

      if (media && media.photos && media.photos.photo) {
        photos = media.photos.photo.filter(function (photo) {
          return photo["@size"] === "pn";
        });
      }

      var hero = photos[0] ? photos[0].value : "http://placecorgi.com/300/300";
      return _react.default.createElement(_router.Link, {
        to: "/details/".concat(id),
        className: "pet"
      }, _react.default.createElement("div", {
        className: "image-container"
      }, _react.default.createElement("img", {
        src: hero,
        alt: name
      })), _react.default.createElement("div", {
        className: "info"
      }, _react.default.createElement("h1", null, name), _react.default.createElement("h2", null, animal, " - ", breed, " - ", location)));
    }
  }]);

  return Pet;
}(_react.default.Component);

var _default = Pet;
exports.default = _default;
},{"react":"../node_modules/react/index.js","@reach/router":"../node_modules/@reach/router/es/index.js"}],"actionCreators/getBreeds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBreeds;

var _petfinderClient = _interopRequireDefault(require("petfinder-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var petfinder = (0, _petfinderClient.default)({
  key: "b7d9918f8bfea2a3fc01582327b87b74",
  secret: "2af8de9c7e5eeca7a2ed795cf3a9986c"
});

function getBreeds() {
  //needs to return a "thunk" --- a function, really
  return function getBreedsThunk(dispatch, getState) {
    var _getState = getState(),
        animal = _getState.animal;

    if (animal) {
      petfinder.breed.list({
        animal: animal
      }).then(function (data) {
        if (data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)) {
          dispatch({
            type: "SET_BREEDS",
            payload: data.petfinder.breeds.breed
          });
        } else {
          dispatch({
            type: "SET_BREEDS",
            payload: []
          });
        }
      });
    } else {
      dispatch({
        type: "SET_BREEDS",
        payload: []
      });
    }
  };
}
},{"petfinder-client":"../node_modules/petfinder-client/index.js"}],"actionCreators/changeBreed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeBreed;

function changeBreed(breed) {
  return {
    type: "SET_BREED",
    payload: breed
  };
}
},{}],"actionCreators/changeAnimal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeAnimal;

function changeAnimal(animal) {
  return {
    type: "SET_ANIMAL",
    payload: animal
  };
}
},{}],"actionCreators/changeLocation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeLocationl;

function changeLocationl(location) {
  return {
    type: "SET_LOCATION",
    payload: location
  };
}
},{}],"SearchBox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _petfinderClient = require("petfinder-client");

var _reactRedux = require("react-redux");

var _getBreeds = _interopRequireDefault(require("./actionCreators/getBreeds"));

var _changeBreed = _interopRequireDefault(require("./actionCreators/changeBreed"));

var _changeAnimal = _interopRequireDefault(require("./actionCreators/changeAnimal"));

var _changeLocation = _interopRequireDefault(require("./actionCreators/changeLocation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox() {
    var _getPrototypeOf2;

    var _this;

    var _temp;

    _classCallCheck(this, SearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchBox)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.handleFormSubmit = function (event) {
      event.preventDefault();

      _this.props.search();
    }, _temp));
  }

  _createClass(SearchBox, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "search-params"
      }, _react.default.createElement("form", {
        onSubmit: this.handleFormSubmit
      }, _react.default.createElement("label", {
        htmlFor: "location"
      }, "Location", _react.default.createElement("input", {
        onChange: this.props.handleLocationChange,
        id: "location",
        value: this.props.location,
        placeholder: "Location"
      })), _react.default.createElement("label", {
        htmlFor: "animal"
      }, "Animal", _react.default.createElement("select", {
        id: "animal",
        value: this.props.animal,
        onChange: this.props.handleAnimalChange,
        onBlur: this.props.handleAnimalChange
      }, _react.default.createElement("option", null), _petfinderClient.ANIMALS.map(function (animal) {
        return _react.default.createElement("option", {
          key: animal,
          value: animal
        }, animal);
      }))), _react.default.createElement("label", {
        htmlFor: "breed"
      }, "Breed", _react.default.createElement("select", {
        id: "breed",
        value: this.props.breed,
        onChange: this.props.handleBreedChange,
        onBlur: this.props.handleBreedChange,
        disabled: !this.props.breeds.length
      }, _react.default.createElement("option", null), this.props.breeds.map(function (breed) {
        return _react.default.createElement("option", {
          key: breed,
          value: breed
        }, breed);
      })), _react.default.createElement("button", null, "Submit"))));
    }
  }]);

  return SearchBox;
}(_react.default.Component); //from redux store


var mapStateToProps = function mapStateToProps(_ref) {
  var breed = _ref.breed,
      breeds = _ref.breeds,
      animal = _ref.animal,
      location = _ref.location;
  return {
    breed: breed,
    breeds: breeds,
    animal: animal,
    location: location
  };
}; //from actions


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleAnimalChange: function handleAnimalChange(event) {
      //dispatch gives an action to redux
      dispatch((0, _changeAnimal.default)(event.target.value));
      dispatch((0, _getBreeds.default)());
    },
    handleBreedChange: function handleBreedChange(event) {
      dispatch((0, _changeBreed.default)(event.target.value));
    },
    handleLocationChange: function handleLocationChange(event) {
      dispatch((0, _changeLocation.default)(event.target.value));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchBox);

exports.default = _default;
},{"react":"../node_modules/react/index.js","petfinder-client":"../node_modules/petfinder-client/index.js","react-redux":"../node_modules/react-redux/es/index.js","./actionCreators/getBreeds":"actionCreators/getBreeds.js","./actionCreators/changeBreed":"actionCreators/changeBreed.js","./actionCreators/changeAnimal":"actionCreators/changeAnimal.js","./actionCreators/changeLocation":"actionCreators/changeLocation.js"}],"Results.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _petfinderClient = _interopRequireDefault(require("petfinder-client"));

var _Pet = _interopRequireDefault(require("./Pet"));

var _SearchBox = _interopRequireDefault(require("./SearchBox"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var petfinder = (0, _petfinderClient.default)({
  key: "b7d9918f8bfea2a3fc01582327b87b74",
  secret: "2af8de9c7e5eeca7a2ed795cf3a9986c"
});

var Results =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Results, _React$Component);

  //gets called once per component
  //props immutable, state is changeable
  //state stays at the same level
  //state = things that can change
  function Results(props) {
    var _this;

    _classCallCheck(this, Results);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Results).call(this, props));

    _this.search = function () {
      petfinder.pet.find({
        output: "full",
        location: _this.props.location,
        animal: _this.props.animal,
        breed: _this.props.breed
      }).then(function (data) {
        var pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        _this.setState({
          pets: pets
        }); //could be pets: pets

      });
    };

    _this.state = {
      pets: []
    };
    return _this;
  }

  _createClass(Results, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "search"
      }, _react.default.createElement(_SearchBox.default, {
        search: this.search
      }), this.state.pets.map(function (pet) {
        var breed;

        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        return _react.default.createElement(_Pet.default, {
          key: pet.id,
          animal: pet.animal,
          name: pet.name,
          breed: breed,
          media: pet.media,
          location: "".concat(pet.contact.city, ", ").concat(pet.contact.state),
          id: pet.id
        });
      }));
    }
  }]);

  return Results;
}(_react.default.Component); //injects location as a prop to context which then passes to Results


var mapStateToProps = function mapStateToProps(_ref) {
  var location = _ref.location,
      breed = _ref.breed,
      animal = _ref.animal;
  return {
    location: location,
    breed: breed,
    animal: animal
  };
}; //connects results to react store


var _default = (0, _reactRedux.connect)(mapStateToProps)(Results);

exports.default = _default;
},{"react":"../node_modules/react/index.js","petfinder-client":"../node_modules/petfinder-client/index.js","./Pet":"Pet.js","./SearchBox":"SearchBox.js","react-redux":"../node_modules/react-redux/es/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56760" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Results.30829819.map