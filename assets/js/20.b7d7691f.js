(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{112:function(t,s,e){"use strict";var o=e(62);e.n(o).a},113:function(t,s,e){"use strict";var o=e(63);e.n(o).a},126:function(t,s,e){"use strict";e(52),e(51);var o={name:"EzRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},n=(e(112),e(1)),a=Object(n.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"df8e0f26",null);s.a=a.exports},127:function(t,s,e){"use strict";var o=e(128),n=(e(51),e(186),e(187),e(52),e(98),function(t){var s=Object.keys(t),e=!0;return s.forEach(function(t){["span","offset"].includes(t)||(e=!1)}),e}),a={name:"EzCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:n},narrowPc:{type:Object,validator:n},pc:{type:Object,validator:n},widePc:{type:Object,validator:n}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var e=[];return t.span&&e.push("col-".concat(s).concat(t.span)),t.offset&&e.push("offset-".concat(s).concat(t.offset)),e}},computed:{colClass:function(){var t=this.span,s=this.offset,e=this.ipad,n=this.narrowPc,a=this.pc,c=this.widePc,l=this.createClasses;return[].concat(Object(o.a)(l({span:t,offset:s})),Object(o.a)(l(e,"ipad-")),Object(o.a)(l(n,"narrow-pc-")),Object(o.a)(l(a,"pc-")),Object(o.a)(l(c,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},c=(e(113),e(1)),l=Object(c.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"6c785a66",null);s.a=l.exports},190:function(t,s,e){},256:function(t,s,e){"use strict";var o=e(190);e.n(o).a},291:function(t,s,e){"use strict";e.r(s);e(24);var o=e(126),n=e(127),a={components:{"ez-row":o.a,"ez-col":n.a},data:function(){return{content:'\n          * {\n            box-sizing: border-box;\n          }\n\n          <ez-row class="demoRow" gutter="10">\n            <ez-col span="8">\n              <div class="demoCol">8</div>\n            </ez-col>\n            <ez-col span="8" offset="8">\n              <div class="demoCol">8</div>\n            </ez-col>\n          </ez-row>\n          <ez-row class="demoRow" gutter="10">\n            <ez-col span="6" offset="6">\n              <div class="demoCol">6</div>\n            </ez-col>\n            <ez-col span="6" offset="6">\n              <div class="demoCol">6</div>\n            </ez-col>\n          </ez-row>\n          <ez-row class="demoRow" gutter="10">\n            <ez-col span="4">\n              <div class="demoCol">4</div>\n            </ez-col>\n            <ez-col span="4" offset="4">\n              <div class="demoCol">4</div>\n            </ez-col>\n            <ez-col span="4" offset="8">\n              <div class="demoCol">4</div>\n            </ez-col>\n          </ez-row>\n          <ez-row class="demoRow" gutter="10">\n            <ez-col span="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n            <ez-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </ez-col>\n          </ez-row>\n      '.replace(/^ {8}/gm,"").trim()}}},c=(e(256),e(1)),l=Object(c.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h3",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("ez-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("ez-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("ez-col",{attrs:{span:"8",offset:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),e("ez-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("ez-col",{attrs:{span:"6",offset:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("ez-col",{attrs:{span:"6",offset:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),e("ez-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("ez-col",{attrs:{span:"4"}},[e("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),e("ez-col",{attrs:{span:"4",offset:"4"}},[e("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),e("ez-col",{attrs:{span:"4",offset:"8"}},[e("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),e("ez-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("ez-col",{attrs:{span:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2",offset:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2",offset:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2",offset:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),e("ez-col",{attrs:{span:"2",offset:"2"}},[e("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(2),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("设置 "),s("code",[this._v("offset")]),this._v(" 属性 ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"1967e4a5",null);s.default=l.exports},62:function(t,s,e){},63:function(t,s,e){}}]);