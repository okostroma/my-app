(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(36),o=a(37),r=a(38),s=a(39),c=a(29),i=a(0),u=a.n(i),l=a(12),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(s.a)(i,t);var a=Object(r.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),i}(u.a.Component);return Object(l.b)(p)(t)}},297:function(e,t,a){e.exports={avatar:"ProfileInfo_avatar__4UCXI",info:"ProfileInfo_info__24fRA",job:"ProfileInfo_job__2yVUl",contacts:"ProfileInfo_contacts__1GtZn",profileInfo:"ProfileInfo_profileInfo__1sO0z"}},298:function(e,t,a){e.exports=a.p+"static/media/done.b9ea0577.png"},299:function(e,t,a){e.exports=a.p+"static/media/undone.007a5ffb.jpg"},300:function(e,t,a){e.exports={content:"Profile_content__2YBPj"}},301:function(e,t,a){e.exports={postInfo:"MyPosts_postInfo__2c5lU"}},302:function(e,t,a){e.exports={item:"Post_item__whpK4",avatar:"Post_avatar__18xxM"}},303:function(e,t,a){e.exports=a.p+"static/media/avatar.adf3f16b.png"},304:function(e,t,a){"use strict";a.r(t);var n=a(36),o=a(37),r=a(38),s=a(39),c=a(0),i=a.n(c),u=a(300),l=a.n(u),p=a(301),f=a.n(p),m=a(302),d=a.n(m),h=a(303),b=a.n(h),v=function(e){return i.a.createElement("div",{className:d.a.item},i.a.createElement("img",{className:d.a.avatar,src:b.a}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like ",e.like)))},E=a(91),j=a(130),_=a(57),g=a(34),k=Object(_.a)(10),O=Object(j.a)({form:"AddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(E.a,{validate:[_.b,k],component:g.b,placeholder:"New post",name:"newPostText"})),i.a.createElement("div",{className:f.a.addPost},i.a.createElement("button",null,"Add post")))})),P=function(e){var t=e.posts.map((function(e){return i.a.createElement(v,{key:e.id,message:e.message,like:e.like})}));return i.a.createElement("div",{className:f.a.postInfo},i.a.createElement("h3",null,"My posts"),i.a.createElement(O,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)},I=a(297),N=a.n(I),x=a(42),S=a(298),y=a.n(S),A=a(299),T=a.n(A),w=a(97),C=a.n(w),M=(i.a.Component,a(98)),R=a(12),U=Object(R.b)((function(e){return{text:e.profileReducer.text,posts:e.profileReducer.posts}}),(function(e){return{addPost:function(t){e(Object(M.a)(t))}}}))(P),D=a(131),F=function(e){var t=Object(c.useState)(!1),a=Object(D.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(e.status),s=Object(D.a)(r,2),u=s[0],l=s[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);var p=function(){o(!0)};return e.profile?i.a.createElement("div",null,i.a.createElement("div",{className:N.a.info},i.a.createElement("img",{className:N.a.avatar,src:e.profile.photos.large||C.a}),i.a.createElement("div",{className:N.a.profileInfo},i.a.createElement("div",null,e.profile.fullName),n?i.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u}):i.a.createElement("div",{onDoubleClick:p},e.status||"-------"),i.a.createElement("div",{onDoubleClick:p},e.profile.aboutMe),i.a.createElement("div",null,"Looking for a job: ",e.profile.lookingForAJob?i.a.createElement("img",{className:N.a.job,alt:"",src:y.a}):i.a.createElement("img",{className:N.a.job,alt:"",src:T.a})),i.a.createElement("div",null,"Contacts:",i.a.createElement("div",{className:N.a.contacts},i.a.createElement("a",{href:"#"},e.profile.contacts.facebook),i.a.createElement("a",{href:"#"},e.profile.contacts.vk),i.a.createElement("a",{href:"#"},e.profile.contacts.twitter),i.a.createElement("a",{href:"#"},e.profile.contacts.instagram)))))):i.a.createElement(x.a,null)},J=function(e){return i.a.createElement("div",{className:l.a.content},i.a.createElement(F,{status:e.status,profile:e.profile,updateStatus:e.updateStatus}),i.a.createElement(U,null))},B=a(29),z=a(7),G=a(295),K=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.put("/login"),this.props.getProfileThunk(e),this.props.getStatusThunk(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(J,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk})))}}]),a}(i.a.Component);t.default=Object(z.d)(Object(R.b)((function(e){return{profile:e.profileReducer.profile,status:e.profileReducer.status,authUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfileThunk:M.c,getStatusThunk:M.d,updateStatusThunk:M.e}),B.f,G.a)(K)}}]);
//# sourceMappingURL=3.245d39e9.chunk.js.map