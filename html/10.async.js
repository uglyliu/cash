(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0dng":function(e,t,a){e.exports={card:"card___1lLg_",heading:"heading___3iSdG",steps:"steps___2QPgQ",errorIcon:"errorIcon___3sjJd",errorPopover:"errorPopover___15mhh",errorListItem:"errorListItem___Wg8Mo",errorField:"errorField___1jSBm",editable:"editable___hpZUP",advancedForm:"advancedForm___3hN7R",optional:"optional___16e6u"}},"2OH4":function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=l(a("bx4M"));a("14J3");var i=l(a("BMrR"));a("jCWc");var n=l(a("kPKH"));a("DZo9");var u=l(a("8z0m"));a("Pwec");var s=l(a("CtXQ")),o=l(a("pVnL"));a("+L6B");var m=l(a("2/Rp")),f=l(a("MVZn"));a("2qtc");var c=l(a("kLXV"));a("5NDa");var p=l(a("5rEg"));a("OaEy");var h=l(a("2fM7"));a("y8nQ");var g=l(a("Vl3Y"));a("Znn+");var v=l(a("ZTPi")),E=l(a("DlQD")),y=l(a("FIf5"));a("nyGS");var b,w,C,_=r(a("q1tI")),k=a("MuoO"),I=l(a("0dng")),P=a("dCQc"),V=a("20nU");E.default.setOptions({highlight:e=>y.default.highlightAuto(e).value});var L=v.default.TabPane,q=g.default.Item,M=h.default.Option,S=p.default.TextArea,A={labelCol:{sm:{span:2}},wrapperCol:{sm:{span:22}}},R={labelCol:{sm:{span:8}},wrapperCol:{sm:{span:10}}},F=(b=(0,k.connect)(e=>{var t=e.adminArticleCreate;return{adminArticleCreate:t}}),w=g.default.create(),b(C=w(C=class extends _.PureComponent{constructor(){super(...arguments),this.state={previewVisible:!1,uploadImageVisible:!1,previewImage:"",fileList:[],value:"",keywords:""},this.handleTagChange=(e=>{this.setState({keywords:e})}),this.handleChangeContent=(e=>{this.setState({output:(0,E.default)(e.target.value)})}),this.handleCustomUploadImage=(e=>{var t=e.file,a=new FormData;a.append("img",t),(0,P.uploadImage)(a).then(e=>{var t=e.path;this.setState({uploadImageVisible:!1}),c.default.success({title:"\u4e0a\u4f20\u6210\u529f",content:`${V.MediaPath+t}`})})}),this.handleCreateArticle=(()=>{var e=this.props,t=e.form.validateFieldsAndScroll,a=e.dispatch;t((e,t)=>{if(!e)if(t["img"]){var l=t["img"].file,r=new FormData;r.append("img",l["originFileObj"]),(0,P.uploadImage)(r).then(e=>{var l=e.path,r=(0,f.default)({},t,{img:V.MediaPath+l,keywords:t.keywords.join()});a({type:"adminArticleCreate/create",payload:r})})}else{var d=(0,f.default)({},t,{keywords:t.keywords.join()});a({type:"adminArticleCreate/create",payload:d})}})}),this.handleCancel=(()=>this.setState({previewVisible:!1})),this.handlePreview=(e=>{this.setState({previewImage:e.thumbUrl,previewVisible:!0})}),this.handleChange=(e=>{var t=e.fileList;return this.setState({fileList:t})})}componentDidMount(){var e=this.props.dispatch;e({type:"adminArticleCreate/getTags"})}render(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.previewVisible,l=t.previewImage,r=t.fileList,f=t.value,E=t.output,y=t.keywords,b=this.props.adminArticleCreate.tags;return _.default.createElement(d.default,{className:I.default.card,bordered:!1},_.default.createElement(v.default,{tabBarExtraContent:_.default.createElement("div",null,_.default.createElement(m.default,{type:"primary",onClick:()=>{this.setState({uploadImageVisible:!0})},icon:"upload"},"\u4e0a\u4f20\u56fe\u7247"),_.default.createElement(m.default,{type:"primary",onClick:this.handleCreateArticle,style:{marginLeft:10}},"\u63d0\u4ea4"))},_.default.createElement(L,{tab:"\u57fa\u672c\u4fe1\u606f",key:"1"},_.default.createElement(g.default,{hideRequiredMark:!0},_.default.createElement(q,(0,o.default)({},A,{label:"\u6807\u9898"}),e("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}]})(_.default.createElement(p.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))),_.default.createElement(q,(0,o.default)({},A,{label:"URL"}),e("url",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165URL"}]})(_.default.createElement(p.default,{style:{width:"100%"},placeholder:"\u8bf7\u8f93\u5165URL"}))),_.default.createElement(q,(0,o.default)({},A,{label:"\u6458\u8981"}),e("description",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6458\u8981"}]})(_.default.createElement(S,{rows:3,placeholder:"\u8bf7\u8f93\u5165\u6458\u8981"}))),_.default.createElement(q,(0,o.default)({},A,{label:"\u6807\u7b7e"}),e("tags",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6807\u7b7e"}]})(_.default.createElement(h.default,{mode:"tags",style:{width:"100%"},placeholder:"\u8bf7\u9009\u62e9\u6587\u7ae0\u6807\u7b7e",onChange:this.handleTagChange},b.map(e=>_.default.createElement(M,{key:e["name"]},e["name"]))))),_.default.createElement(q,(0,o.default)({},A,{label:"\u5173\u952e\u5b57"}),e("keywords",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"}],initialValue:y})(_.default.createElement(p.default,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"}))),_.default.createElement(i.default,{gutter:16},_.default.createElement(n.default,{span:6},_.default.createElement(q,(0,o.default)({},R,{label:"\u5c01\u9762\u56fe"}),e("img",{})(_.default.createElement(u.default,{name:"img",listType:"picture",fileList:r,disabled:1===r.length,onPreview:this.handlePreview,onChange:this.handleChange},_.default.createElement(m.default,null,_.default.createElement(s.default,{type:"upload"})))))),_.default.createElement(n.default,{span:6},_.default.createElement(q,(0,o.default)({},R,{label:"\u72b6\u6001"}),e("status",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u72b6\u6001"}],initialValue:1})(_.default.createElement(h.default,{style:{width:"100%"}},_.default.createElement(M,{value:1},"\u53d1\u5e03"),_.default.createElement(M,{value:2},"\u8349\u7a3f"))))),_.default.createElement(n.default,{span:6},_.default.createElement(q,(0,o.default)({},R,{label:"\u7c7b\u578b"}),e("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7c7b\u578b"}],initialValue:1})(_.default.createElement(h.default,{style:{width:"100%"}},_.default.createElement(M,{value:1},"\u6587\u7ae0"),_.default.createElement(M,{value:2},"\u4e13\u9898")))))))),_.default.createElement(L,{tab:"\u6587\u7ae0\u5185\u5bb9",key:"2"},_.default.createElement(g.default,{hideRequiredMark:!0},_.default.createElement(q,null,e("content",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:f})(_.default.createElement(S,{onChange:this.handleChangeContent,placeholder:"\u8bf7\u8f93\u5165",autosize:{minRows:20}}))))),_.default.createElement(L,{tab:"\u6587\u7ae0\u9605\u89c8",key:"3"},_.default.createElement("div",{dangerouslySetInnerHTML:{__html:E}}))),_.default.createElement(c.default,{visible:a,footer:null,onCancel:this.handleCancel},_.default.createElement("img",{style:{width:"100%"},src:l})),_.default.createElement(c.default,{visible:this.state.uploadImageVisible,footer:null,onCancel:()=>{this.setState({uploadImageVisible:!1})},destroyOnClose:!0,keyboard:!1,maskClosable:!1},_.default.createElement(u.default,{name:"img",listType:"picture",onPreview:this.handlePreview,customRequest:this.handleCustomUploadImage},_.default.createElement(m.default,null,_.default.createElement(s.default,{type:"upload"}),"\u4e0a\u4f20\u56fe\u7247"))))}})||C)||C),T=F;t.default=T}}]);