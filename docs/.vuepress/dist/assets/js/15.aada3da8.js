(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{111:function(t,n,e){"use strict";var a=e(61);e.n(a).a},112:function(t,n,e){"use strict";var a=e(62);e.n(a).a},113:function(t,n,e){"use strict";var a=e(63);e.n(a).a},114:function(t,n,e){"use strict";var a=e(64);e.n(a).a},115:function(t,n,e){"use strict";var a=e(65);e.n(a).a},119:function(t,n,e){"use strict";var a={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},i=(e(115),e(1)),r=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2):t._e()])},[],!1,null,"3a1308f2",null);n.a=r.exports},120:function(t,n,e){"use strict";var a={name:"EzContent"},i=(e(114),e(1)),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gulu-content"},[this._t("default")],2)},[],!1,null,"c48b9b08",null);n.a=r.exports},121:function(t,n,e){"use strict";var a={name:"EzFooter"},i=(e(113),e(1)),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"926a9318",null);n.a=r.exports},122:function(t,n,e){"use strict";var a={name:"EzHeader"},i=(e(112),e(1)),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"39029a60",null);n.a=r.exports},123:function(t,n,e){"use strict";e(72),e(53);var a={name:"EzLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(n){"GuluSider"===n.$options.name&&(t.layoutClass.hasSider=!0)})}},i=(e(111),e(1)),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"2c3fa330",null);n.a=r.exports},190:function(t,n,e){},247:function(t,n,e){"use strict";var a=e(190);e.n(a).a},277:function(t,n,e){"use strict";e.r(n);e(24);var a=e(123),i=e(122),r=e(121),s=e(120),o=e(119),c={components:{GLayout:a.a,GHeader:i.a,GFooter:r.a,GContent:s.a,GSider:o.a},data:function(){return{content:'\n          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n            <g-sider style=" background:#ddd; width:200px; color: black;">\n              sider\n            </g-sider>\n            <g-layout>\n              <g-header style="height: 50px; background:lightskyblue;">\n                header\n              </g-header>\n              <g-content style="height: 100px; background:deepskyblue;">\n                content\n              </g-content>\n              <g-footer style="height: 50px; background:lightskyblue;">\n                footer\n              </g-footer>\n            </g-layout>\n          </g-layout>\n\n      '.replace(/^ {8}/gm,"").trim()}}},u=(e(247),e(1)),l=Object(u.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("g-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}},[t._v("\n      sider\n    ")]),t._v(" "),e("g-layout",[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        header\n      ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")]),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        footer\n      ")])],1)],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"3f1747b0",null);n.default=l.exports},61:function(t,n,e){},62:function(t,n,e){},63:function(t,n,e){},64:function(t,n,e){},65:function(t,n,e){},72:function(t,n,e){var a=e(22).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||e(12)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})}}]);