/*!
 * xyz-button v1.0.1
 * (c) xgqfrms
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));
var __vue_create_injector__ = _interopDefault(require('vue-runtime-helpers/dist/inject-style/browser.js'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description  XyzButton
 * @augments
 * @example
 * @link
 * @created 2019-05-23
 *
 */
var script = {
  // name: "XyzButton",
  props: {
    color: {
      type: String,
      "default": "blue",
      validator: function validator(x) {
        return ["blue", "green", "red"].indexOf(x) !== -1;
      }
    },
    rounded: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": "default",
      validator: function validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit("click", event);
    },
    // not work on mobile devices
    onDoubleClick: function onDoubleClick(event) {
      this.$emit("dblclick", event);
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', {
    "class": ["xyz-button", "xyz-button--" + _vm.color, "xyz-button--" + _vm.size, {
      'xyz-button--rounded': _vm.rounded
    }],
    on: {
      "click": _vm.onClick,
      "dblclick": _vm.onDoubleClick
    }
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-513fd96a_0", {
    source: ".xyz-button{display:inline-block;outline:0;border:1px solid rgba(0,0,0,.1);color:#fff;font-weight:500;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;user-select:none;cursor:pointer}.xyz-button--blue{background-color:#0194ef}.xyz-button--green{background-color:#1bb934}.xyz-button--red{background-color:#e1112c}.xyz-button--small{padding:8px 10px;border-radius:4px;font-size:12px;line-height:12px}.xyz-button--default{padding:12px 14px;border-radius:6px;font-size:14px;line-height:16px}.xyz-button--large{padding:16px 18px;border-radius:8px;font-size:16px;line-height:20px}.xyz-button--rounded{border-radius:60px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var XyzButton = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

// import * as PxtoRem from "./utils/px2rem";
// PxtoRem();

var index = {
  install: function install(Vue, options) {
    Vue.component("xyz-button", XyzButton); // Vue.component("crop-card", CorpCard);
  }
};

module.exports = index;
