// 'use strict';

// var vue = require('vue');

// var script = {
//   __name: 'BaseButton',
//   props: {
//   type: {
//     type: String,
//     default: () => "primary",
//     validator: (buttonType) => ["primary", "secondary"].includes(buttonType),
//   },
//   size: {
//     type: String,
//     default: () => "middle",
//     validator: (buttonSize) => ["big", "middle", "small"].includes(buttonSize),
//   },
// },
//   setup(__props) {



// return (_ctx, _cache) => {
//   return (vue.openBlock(), vue.createElementBlock("button", {
//     class: vue.normalizeClass(["l-component l-button", `l-${__props.type} l-${__props.size}`])
//   }, [
//     vue.renderSlot(_ctx.$slots, "default")
//   ], 2 /* CLASS */))
// }
// }

// };

// script.__file = "src/components/button/BaseButton.vue";

// module.exports = script;
