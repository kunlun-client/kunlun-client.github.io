(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"npm-私有仓库使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-私有仓库使用指南","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 私有仓库使用指南")]),a("h2",{attrs:{id:"_1-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 概述")]),a("ul",[a("li",[t._v("服务器地址：http://172.30.3.107:8082")]),a("li",[t._v("登录和发布用户名与 svn 用户名一致")]),a("li",[t._v("新的 Nexus 支持 maven2 和 npm，并且对原有的 nexus 服务器进行了代理")])]),a("h2",{attrs:{id:"_2-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 配置")]),a("div",{staticClass:"language-Bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry http://172.30.3.107:8082/repository/npm_group/\n\n或\n\nyarn config "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry http://172.30.3.107:8082/repository/npm_group/\n")])])]),a("h2",{attrs:{id:"_3-发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-发布","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 发布")]),a("p",[t._v("在 package.json 中配置以下内容（三项内容，缺一不可）：")]),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"npmt"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1.0.1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"publishConfig"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"registry"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://172.30.3.107:8082/repository/npm_hosted/"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("仅未登陆时执行")]),a("div",{staticClass:"language-Bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" login -registry"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("http://172.30.3.107:8082/repository/npm_hosted/\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);