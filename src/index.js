"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-05-23
 *
 * @description index.js
 * @augments
 * @example
 *
 */

import XyzButton from "./xyz-button.vue";


export default {
    install(Vue, options) {
        Vue.component("xyz-button", XyzButton);
        // Vue.component("XyzButton", XyzButton);
    }
};
