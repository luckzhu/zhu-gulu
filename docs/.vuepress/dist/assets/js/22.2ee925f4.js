(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{119:function(t,e,o){"use strict";var n=o(69);o.n(n).a},120:function(t,e,o){"use strict";var n,s=o(206),i=(o(51),{name:"EzToast",props:{autoClose:{type:[Boolean,Number],default:2,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:"关闭",closeCallback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","middle","bottom"].indexOf(t)>=0}}},computed:{toastPosition:function(){return Object(s.a)({},"position-".concat(this.position),!0)}},mounted:function(){this.updateStyle(),this.exeAutoClose()},methods:{updateStyle:function(){var t=this;this.$nextTick(function(){t.$refs.line.style.height="".concat(t.$refs.toast.getBoundingClientRect().height,"px")})},exeAutoClose:function(){var t=this;this.autoClose&&setTimeout(function(){t.toastClose()},1e3*this.autoClose)},toastClose:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},clickClose:function(){this.toastClose(),this.closeButton&&"function"==typeof this.closeButton.closeCallback&&this.closeButton.closeCallback(this)}}}),a=(o(119),o(1)),c=Object(a.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",class:t.toastPosition},[o("div",{ref:"toast",staticClass:"ez-toast"},[o("div",{staticClass:"message"},[t.enableHtml?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),o("span",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?o("span",{staticClass:"close",on:{click:t.clickClose}},[t._v(t._s(t.closeButton.text))]):t._e()])])},[],!1,null,"348852c9",null).exports;e.a={install:function(t,e){t.prototype.$toast=function(e,o){n&&"function"==typeof n&&n.close(),n=function(t){var e=t.Vue,o=t.message,n=t.propsData,s=t.onClose,i=new(e.extend(c))({propsData:n});return i.$slots.default=[o],i.$mount(),i.$on("close",s),document.body.appendChild(i.$el),i}({Vue:t,message:e,propsData:o,onClose:function(){n=null}})}}}},208:function(t,e,o){},272:function(t,e,o){"use strict";var n=o(208);o.n(n).a},277:function(t,e,o){"use strict";o.r(e);o(24);var n=o(120),s=o(71);o(0).a.use(n.a);var i={components:{"ez-button":s.a},data:function(){return{content:'\n<ez-button @click="showToast1">上方弹出</ez-button>\n\nmethods: {\n  showToast1() {\n    this.$toast("点击弹出文字提示", {\n      closeButton: {\n          text: "我知道了",\n          closeCallback(toast) {\n          }\n     });\n  },\n  }\n}\n      '.replace(/^ {8}/gm,"").trim()}},methods:{showToast1:function(){this.$toast("点击弹出文字提示",{closeButton:{text:"我知道了",closeCallback:function(t){}}})}}},a=(o(272),o(1)),c=Object(a.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"padding-top":"4px"}},[o("h3",[t._v("设置关闭按钮文字")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"box"},[o("div",{staticClass:"row"},[o("ez-button",{on:{click:t.showToast1}},[t._v("上方弹出")])],1)]),t._v(" "),t._m(2),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("设置 "),e("code",[this._v("closeButton")]),this._v(" 中的 "),e("code",[this._v("text")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"4c256ea9",null);e.default=c.exports},69:function(t,e,o){}}]);