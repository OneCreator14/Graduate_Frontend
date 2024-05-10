// import { openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

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
//   return (openBlock(), createElementBlock("button", {
//     class: normalizeClass(["l-component l-button", `l-${__props.type} l-${__props.size}`])
//   }, [
//     renderSlot(_ctx.$slots, "default")
//   ], 2 /* CLASS */))
// }
// }

// };

// script.__file = "src/components/button/BaseButton.vue";

// export { script as default };
