"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[8915],{8915:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});e(98276),e(89543),e(12577),e(16162);var r=function(){var t=this,a=t._self._c;return a("div",[a("a-card",{staticClass:"ant-pro-components-tag-select",attrs:{bordered:!1}},[a("a-form",{attrs:{form:t.form,layout:"inline"}},[a("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{title:"所属类目",block:""}},[a("a-form-item",[a("tag-select",[a("tag-select-option",{attrs:{value:"Category1"}},[t._v("类目一")]),a("tag-select-option",{attrs:{value:"Category2"}},[t._v("类目二")]),a("tag-select-option",{attrs:{value:"Category3"}},[t._v("类目三")]),a("tag-select-option",{attrs:{value:"Category4"}},[t._v("类目四")]),a("tag-select-option",{attrs:{value:"Category5"}},[t._v("类目五")]),a("tag-select-option",{attrs:{value:"Category6"}},[t._v("类目六")]),a("tag-select-option",{attrs:{value:"Category7"}},[t._v("类目七")]),a("tag-select-option",{attrs:{value:"Category8"}},[t._v("类目八")]),a("tag-select-option",{attrs:{value:"Category9"}},[t._v("类目九")]),a("tag-select-option",{attrs:{value:"Category10"}},[t._v("类目十")])],1)],1)],1),a("standard-form-row",{attrs:{title:"其它选项",grid:"",last:""}},[a("a-row",[a("a-col",{attrs:{lg:8,md:10,sm:10,xs:24}},[a("a-form-item",{attrs:{"wrapper-col":{sm:{span:16},xs:{span:24}},label:"作者"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["author"],expression:"['author']"}],staticStyle:{"max-width":"200px",width:"100%"},attrs:{mode:"multiple",placeholder:"不限"},on:{change:t.handleChange}},[a("a-select-option",{attrs:{value:"lisa"}},[t._v("王昭君")])],1)],1)],1),a("a-col",{attrs:{lg:8,md:10,sm:10,xs:24}},[a("a-form-item",{attrs:{"wrapper-col":{sm:{span:16},xs:{span:24}},label:"好评度"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["rate"],expression:"['rate']"}],staticStyle:{"max-width":"200px",width:"100%"},attrs:{placeholder:"不限"}},[a("a-select-option",{attrs:{value:"good"}},[t._v("优秀")]),a("a-select-option",{attrs:{value:"normal"}},[t._v("普通")])],1)],1)],1)],1)],1)],1)],1),a("div",{staticClass:"ant-pro-pages-list-projects-cardList"},[a("a-list",{attrs:{loading:t.loading,"data-source":t.data,grid:{gutter:24,xl:4,lg:3,md:3,sm:2,xs:1}},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-card",{staticClass:"ant-pro-pages-list-projects-card",attrs:{hoverable:""}},[a("img",{attrs:{slot:"cover",src:e.cover,alt:e.title},slot:"cover"}),a("a-card-meta",{attrs:{title:e.title}},[a("template",{slot:"description"},[a("ellipsis",{attrs:{length:50}},[t._v(t._s(e.description))])],1)],2),a("div",{staticClass:"cardItemContent"},[a("span",[t._v(t._s(t._f("fromNow")(e.updatedAt)))]),a("div",{staticClass:"avatarList"},[a("avatar-list",{attrs:{size:"small","max-length":2}},t._l(e.members,(function(t,r){return a("avatar-list-item",{key:"".concat(e.id,"-avatar-").concat(r),attrs:{src:t.avatar,tips:t.name}})})),1)],1)])],1)],1)}}])})],1)],1)},s=[],o=e(98777),l=e.n(o),i=e(75811),n=i.OT.Option,c=i.eM.Item,d={components:{AvatarList:i.eM,AvatarListItem:c,Ellipsis:i.mH,TagSelect:i.OT,TagSelectOption:n,StandardFormRow:i.vy},data:function(){return{data:[],form:this.$form.createForm(this),loading:!0}},filters:{fromNow:function(t){return l()(t).fromNow()}},mounted:function(){this.getList()},methods:{handleChange:function(t){},getList:function(){var t=this;this.$http.get("/list/article",{params:{count:8}}).then((function(a){t.data=a.result,t.loading=!1}))}}},p=d,m=e(78302),v=(0,m.Z)(p,r,s,!1,null,"554a7d2a",null),u=v.exports}}]);