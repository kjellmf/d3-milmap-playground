import ms from "milsymbol";
import Vue from "vue";

export default Vue.extend({
  name: "MilSymbol",
  props: {
    sidc: [String, Number],
    size: {
      type: Number,
      default: 15
    },
    modifiers: {
      type: Object
    }
  },
  render(h) {
    let symb = new ms.Symbol(this.sidc, { size: this.size, simpleStatusModifier: true }, this.modifiers || {});
    return h('span', {
      attrs: { class: 'milsymbol' },
      domProps: { innerHTML: symb.asSVG() }
    })
  }
});
