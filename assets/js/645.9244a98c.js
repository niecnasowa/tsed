(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{1081:function(s,a,t){"use strict";t.r(a);var n=t(43),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"openapimodelschemabuilder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openapimodelschemabuilder"}},[s._v("#")]),s._v(" OpenApiModelSchemaBuilder "),t("Badge",{attrs:{text:"Class",type:"class"}}),s._v(" "),t("Badge",{attrs:{text:"private",title:"private",type:"private"}})],1),s._v(" "),t("section",{staticClass:"symbol-info"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { OpenApiModelSchemaBuilder } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/swagger/src/class/OpenApiModelSchemaBuilder"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.6/packages/swagger/src/class/OpenApiModelSchemaBuilder.ts#L0-L0"}},[s._v("/packages/swagger/src/class/OpenApiModelSchemaBuilder.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" OpenApiModelSchemaBuilder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('<span class="token keyword">protected</span> _definitions<span class="token punctuation">:</span> <a href="/api/swagger/interfaces/OpenApiDefinitions.html"><span class="token">OpenApiDefinitions</span></a><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> _responses<span class="token punctuation">:</span> <a href="/api/swagger/interfaces/OpenApiResponses.html"><span class="token">OpenApiResponses</span></a><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> _schema<span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\n<span class="token keyword">constructor</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">schema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\nget <span class="token function">definitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/swagger/interfaces/OpenApiDefinitions.html"><span class="token">OpenApiDefinitions</span></a><span class="token punctuation">;</span>\nget <span class="token function">responses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/swagger/interfaces/OpenApiResponses.html"><span class="token">OpenApiResponses</span></a><span class="token punctuation">;</span>\n/**\n * Build the <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a> and his properties.\n * @returns <span class="token punctuation">{</span>OpenApiModelSchemaBuilder<span class="token punctuation">}</span>\n */\n<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/class/Storable.html"><span class="token">Storable</span></a><span class="token punctuation">}</span> model\n * @returns <span class="token punctuation">{</span><a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">}</span>\n */\n<span class="token keyword">protected</span> <span class="token function">createSchema</span><span class="token punctuation">(</span><span class="token punctuation">{</span> schema<span class="token punctuation">,</span> type<span class="token punctuation">,</span> collectionType <span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    schema<span class="token punctuation">:</span> Partial&lt;<a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a>&gt; | <span class="token keyword">any</span><span class="token punctuation">;</span>\n    type<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n    collectionType<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt; | undefined<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\n/**\n * Return the stored <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a> of the <span class="token keyword">class</span> if exists. Otherwise<span class="token punctuation">,</span> return an empty <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a>.\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token keyword">protected</span> <span class="token function">getClassSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("Build a Schema from a given Model.")]),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" _definitions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/swagger/interfaces/OpenApiDefinitions.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenApiDefinitions")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" _responses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/swagger/interfaces/OpenApiResponses.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenApiResponses")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" _schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("schema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("definitions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/swagger/interfaces/OpenApiDefinitions.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenApiDefinitions")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("get "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("responses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/swagger/interfaces/OpenApiResponses.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("OpenApiResponses")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Build the Schema and his properties.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createSchema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collectionType "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<"),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),s._v("> | "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     collectionType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v("> | undefined"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClassSchema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Return the stored Schema of the class if exists. Otherwise, return an empty Schema.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);