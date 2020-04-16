(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"15d5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a='\n<h1>quasar-tiptap</h1><h2 id="d5fb3c" level="2">Introduction</h2><p><strong><span style="color: #1890ff">Quasar Tiptap Editor</span></strong>&nbsp;is a WYSIWYG rich-text editor using&nbsp;tiptap&nbsp;and Quasar.🔥</p><h2 id="3b0d30" level="2">Text</h2><p data-text-align="center"><strong><span style="font-family: Arial Black">Bold text</span></strong></p><p><em>Italic text</em></p><p><u>Underline text</u></p><p><s>Strike through text</s></p><p><code>Inline code</code></p><p><span style="color: #ff4d4f">Text with color</span></p><p><span style="background: #ffec3d">Text with background</span></p><p></p><h2 id="2c1e92" level="2">Code</h2><p data-indent="1">This a indent Text.</p><blockquote><p>This is a block quote</p><p>Second line</p></blockquote><pre><code>let a = 10\nlet b = 20</code></pre><h2 id="ce7176" level="2">Diagram</h2><p></p><diagram src="graph TD\nA[Christmas] --\x3e|Get money| B(Go shopping)\nB --\x3e C{Let me think}\nC --\x3e|One| D[Laptop]\nC --\x3e|Two| E[iPhonee]\nC --\x3e|Three| F[Cars]"></diagram><h2 id="a4baf0" level="2">Math</h2><p><span style="color: rgb(0, 0, 0)"><span style="font-family: Roboto, -apple-system, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif">Write inline formula, such as&nbsp;</span></span><ki src="\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N"></ki>，or block formula:</p><p></p><katex src="E=mc^2"></katex><p></p><katex src="e^x=\\lim_{n\\to\\infty} \\left( 1+\\frac{x}{n} \\right)^n"></katex><p></p>\n',o='\n<h1>Full Featured</h1>\n<h2 id="78b268" level="2">Introduction</h2>\n<p>🔥Quasar Tiptap Editor 🔥is a WYSIWYG rich-text editor using&nbsp;tiptap&nbsp;and Quasar.</p>\n<p>that\'s easy to use, friendly to developers, fully extensible and clean in design.</p>\n<h2 id="fda00d" level="2">Heading</h2>\n<h2 id="752ca3" level="2">List</h2>\n<h2 id="859f4c" level="2">Table</h2>\n<table>\n  <tbody>\n    <tr>\n      <td>\n        <p></p>\n      </td>\n      <td>\n        <p></p>\n      </td>\n      <td>\n        <p></p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <p></p>\n      </td>\n      <td>\n        <p></p>\n      </td>\n      <td>\n        <p></p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <p></p>\n      </td>\n      <td>\n        <p></p>\n      </td>\n      <td>\n        <p></p>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<h2 id="b1240b" level="2">Diagrams</h2>\n<p></p>\n<diagram src="graph TD\nA[Christmas] --\x3e|Get money| B(Go shopping)\nB --\x3e C{Let me think}\nC --\x3e|One| D[Laptop]\nC --\x3e|Two| E[iPhonee]\nC --\x3e|Three| F[Cars]"></diagram>\n<h2 id="c082db" level="2">Math Formula</h2>\n<h3 id="09bb5d" level="3">Inline</h3>\n<p>\n  <ki src="E=mc^2"></ki>\n</p>\n<h3 id="c35252" level="3">Block</h3>\n<p></p>\n<katex src="E=mc^2"></katex>\n<p></p>\n'},"4b30":function(t,e,n){"use strict";var a=n("d961"),o=n.n(a);o.a},d961:function(t,e,n){},df05:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"page-quasar-tiptap-basic"},[n("section",{staticClass:"row col-12 justify-center"},[n("header",{staticClass:"row col-12 justify-center items-center bg-blue text-white banner"},[n("span",{staticClass:"text-h3"},[t._v("Basic")])]),n("section",{staticClass:"row col-10 q-pa-md"},[n("quasar-tiptap",t._b({on:{update:t.onUpdate}},"quasar-tiptap",t.options,!1))],1)])])},o=[],p=(n("7f7f"),n("4db1")),i=n.n(p),s=n("6fba"),r=n("f23d"),l=n("cb2e"),d=n("15d5"),c=n("6d81"),h={name:"page-quasar-tiptap-basic",data:function(){return{options:{content:d["a"],editable:!0,extensions:[].concat(i()(l["r"]),[new r["p"]({showOnlyCurrent:!1,emptyNodeText:function(t){return"title"===t.type.name?"Title":"Content"}})]),toolbar:[c["a"],"separator","bold","italic","underline","strike","code","separator","heading","font-family","fore-color","back-color","format_clear","separator","align-dropdown","indent","outdent","line-height","separator","horizontal","bullet_list","ordered_list","todo_list","separator","blockquote","code_block","photo","table","separator","undo","redo"]},json:"",html:""}},components:{QuasarTiptap:s["a"],OAddMoreBtn:c["a"]},methods:{onUpdate:function(t){t.state;var e=t.getJSON,n=t.getHTML;this.json=e(),this.html=n(),console.log("html",this.html)}},mounted:function(){},deactivated:function(){},beforeDestroy:function(){}},u=h,b=(n("4b30"),n("2877")),f=Object(b["a"])(u,a,o,!1,null,null,null);e["default"]=f.exports}}]);