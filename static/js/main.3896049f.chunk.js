(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports={nav:"Nav_nav__29Zts",item:"Nav_item__3AO71",active:"Nav_active__2Jdn9",friends:"Nav_friends__2m-nt",itemUsers:"Nav_itemUsers__3v6tu"}},13:function(e,t,a){e.exports={avatar:"ProfileInfo_avatar__4UCXI",info:"ProfileInfo_info__24fRA",mainPic:"ProfileInfo_mainPic__23XAu",job:"ProfileInfo_job__2yVUl",contacts:"ProfileInfo_contacts__1GtZn",profileInfo:"ProfileInfo_profileInfo__1sO0z"}},134:function(e,t,a){e.exports=a.p+"static/media/logo.f50ceefd.png"},136:function(e,t,a){e.exports={avaMessage:"Friends_avaMessage__1Vc5_",name:"Friends_name__3U4Qm",friendsBlock:"Friends_friendsBlock__2RrYR"}},137:function(e,t,a){e.exports=a.p+"static/media/user.93a57c9f.png"},139:function(e,t,a){e.exports={content:"Profile_content__2YBPj"}},14:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__35Lum",dialogItem:"Dialogs_dialogItem__2bA-5",active:"Dialogs_active__34DVD",dialogCol:"Dialogs_dialogCol__18ftw",dialog:"Dialogs_dialog__31XvN",messages:"Dialogs_messages__3ZC1X",message:"Dialogs_message__3ETRK",avaMessage:"Dialogs_avaMessage__2unvE",name:"Dialogs_name__3Ela2",rightItem:"Dialogs_rightItem__2pMdr",messageText:"Dialogs_messageText__2RuMn",textArea:"Dialogs_textArea__lBIak",btn:"Dialogs_btn__2e9BP",text:"Dialogs_text__13LOX"}},140:function(e,t,a){e.exports=a.p+"static/media/avatar.adf3f16b.png"},166:function(e,t,a){e.exports=a(292)},168:function(e,t,a){},249:function(e,t,a){},254:function(e,t,a){e.exports=a.p+"static/media/avaMessage.adf3f16b.png"},27:function(e,t,a){e.exports={avaMessage:"Users_avaMessage__3YZA3",usersPage:"Users_usersPage__DRlhh",users:"Users_users__1UuJc",userBlock:"Users_userBlock__26PAc",userBlockBody:"Users_userBlockBody__34J-l",userItem:"Users_userItem__16tYE",userStatus:"Users_userStatus__3yUGZ",userTitle:"Users_userTitle__1wq5P",page:"Users_page__2vjn6",selectedPage:"Users_selectedPage__gZpN4"}},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(168),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(6),o=a(37),i=a(10),c=a(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f0e08188-8253-43c0-9ba4-c5828ee19e1e"}}),l=function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},u=function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))},m=function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))},d=function(e){return c.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return c.get("profile/status/".concat(e)).then((function(e){return e.data}))},p=function(e){return c.put("profile/status",{status:e}).then((function(e){return e.data}))},g=function(){return c.get("auth/me").then((function(e){return e.data}))},E=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},h=function(){return c.delete("auth/login").then((function(e){return e.data}))},_={posts:[{id:0,message:"hello",like:"5"},{id:1,message:"how are you?",like:"0"}],profile:null,status:""},v=function(e){return{type:"GET_USER_STATUS",status:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={message:t.newPostText,like:"0"};return Object(i.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[a]),text:""});case"SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"GET_USER_STATUS":return Object(i.a)({},e,{status:t.status});default:return e}},O={dialogs:[{id:1,name:"Sasha"},{id:2,name:"Oxa"},{id:3,name:"Andrew"},{id:4,name:"Roman"}],messages:[{id:1,message:"Hello"},{id:2,message:"how are you?"},{id:3,message:"yo"},{id:4,message:"yo"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var a=t.newMessageText;return Object(i.a)({},e,{newMessageText:"",messages:[].concat(Object(o.a)(e.messages),[{id:5,message:a}])});default:return e}},j=a(69),w=a.n(j),S={friends:[{id:1,name:"Sasha",ava:w.a},{id:2,name:"Oxa",ava:w.a},{id:3,name:"Andrew",ava:w.a}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;arguments.length>1&&arguments[1];return e},I={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},y=function(e){return{type:"TOGGLE-FETCHING",isFetching:e}},C=function(e,t){return{type:"TOGGLE_FOLLOWING",followingInProgress:e,userId:t}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!1}):e}))});case"SET-USERS":return Object(i.a)({},e,{users:Object(o.a)(t.users)});case"SET-CURRENT-PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE-FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING":return Object(i.a)({},e,{followingInProgress:t.followingInProgress?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},U=a(39),k={id:null,email:null,login:null,isFetching:!1,isAuth:!1},x=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},A=function(){return function(e){return g().then((function(t){if(0===t.resultCode){var a=t.data,n=a.id,r=a.email,s=a.login;e(x(n,r,s,!0))}}))}},R=function(){return function(e){h().then((function(t){0===t.resultCode&&e(x(null,null,null,!1))}))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(i.a)({},e,{},t.payload);default:return e}},M=a(131),L=a(129),D={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_INITIALIZED":return Object(i.a)({},e,{initialized:!0});default:return e}},G=Object(s.c)({profileReducer:b,dialogsReducer:N,friendsReducer:P,usersReducer:T,auth:F,form:L.a,appReducer:B}),z=Object(s.e)(G,Object(s.a)(M.a));window.store=z;var Z,W=z,X=a(62),J=a.n(X),H=a(19),Y=a(20),q=a(21),K=a(22),V=(a(249),a(35)),Q=a.n(V),$=a(134),ee=a.n($),te=a(9),ae=function(e){return r.a.createElement("header",{className:Q.a.header},r.a.createElement("img",{className:Q.a.logo,src:ee.a}),r.a.createElement("div",{className:Q.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(te.b,{to:"/login"},"Login")))},ne=a(11),re=a.n(ne),se=a(136),oe=a.n(se),ie=(a(254),a(70)),ce=a.n(ie),le=function(e){return r.a.createElement("div",{className:ce.a.item},r.a.createElement("img",{className:ce.a.avaMessage,src:e.img}),r.a.createElement("span",{className:ce.a.name},e.name))},ue=function(e){var t=e.friends.map((function(e){return r.a.createElement(le,{key:e.id,name:e.name,img:e.ava})}));return r.a.createElement("div",{className:oe.a.friendsBlock},t)},me=a(8),de=Object(me.b)((function(e){return{friends:e.friendsReducer.friends}}))(ue),fe=function(e){return r.a.createElement("nav",{className:re.a.nav},r.a.createElement("div",{className:re.a.item},r.a.createElement(te.b,{to:"/profile",activeClassName:re.a.active},"Profile")),r.a.createElement("div",{className:re.a.item},r.a.createElement(te.b,{to:"/dialogs",activeClassName:re.a.active},"Messages")),r.a.createElement("div",{className:re.a.item},r.a.createElement(te.b,{to:"/news",activeClassName:re.a.active},"News")),r.a.createElement("div",{className:re.a.item},r.a.createElement(te.b,{to:"/music",activeClassName:re.a.active},"Music")),r.a.createElement("div",{className:re.a.item},r.a.createElement(te.b,{to:"/settings",activeClassName:re.a.active},"Settings")),r.a.createElement("div",{className:re.a.friends},r.a.createElement(te.b,{to:"/friends",activeClassName:re.a.active},"Friends")),r.a.createElement(de,null),r.a.createElement("div",{className:re.a.itemUsers},r.a.createElement(te.b,{to:"/users",activeClassName:re.a.active},"Find Users")))},pe=a(32),ge=a(14),Ee=a.n(ge),he=a(65),_e=a.n(he),ve=function(e){return r.a.createElement("div",{className:Ee.a.dialogCol},r.a.createElement("img",{className:Ee.a.avaMessage,src:_e.a}),r.a.createElement(te.b,{to:"/dialogs/"+e.id},r.a.createElement("span",{className:Ee.a.name},e.name)))},be=function(e){return r.a.createElement("div",{className:Ee.a.dialog},r.a.createElement("img",{className:Ee.a.avaMessage+" "+e.className,src:_e.a}),r.a.createElement("span",{className:Ee.a.messageText+" "+e.className},e.message))},Oe=a(127),Ne=a(128),je=a(72),we=a(44),Se=a.n(we),Pe=function(e){e.input;var t=e.meta,a=(e.child,Object(je.a)(e,["input","meta","child"])),n=t.error&&t.touched;return r.a.createElement("div",{className:Se.a.formControl+" "+(n?Se.a.error:"")},a.children,r.a.createElement("div",null,n&&r.a.createElement("span",{className:Se.a.error}," ",t.error)))},Ie=function(e){var t=e.input,a=(e.meta,Object(je.a)(e,["input","meta"]));return r.a.createElement(Pe,e," ",r.a.createElement("textarea",Object.assign({},t,a)))},ye=function(e){var t=e.input,a=(e.meta,Object(je.a)(e,["input","meta"]));return r.a.createElement(Pe,e," ",r.a.createElement("input",Object.assign({},t,a)))},Ce=function(e){return e?void 0:"Field is required"},Te=Object(Ne.a)({form:"AddNewMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:Ee.a.textArea},r.a.createElement(Oe.a,{validate:[Ce],component:Ie,name:"newMessageText",className:Ee.a.text}),r.a.createElement("button",{className:Ee.a.btn},"Send"))})),Ue=function(e){var t=e.dialogsReducer.dialogs.map((function(e){return r.a.createElement(ve,{id:e.id,key:e.id,name:e.name})})),a=e.dialogsReducer.messages.map((function(e){return r.a.createElement(be,{key:e.id,message:e.message})}));return e.isAuth?r.a.createElement("div",{className:Ee.a.dialogs},r.a.createElement("div",{className:Ee.a.dialogItem},t),r.a.createElement("div",{className:Ee.a.messages},a,r.a.createElement(Te,{onSubmit:function(t){e.addNewMessage(t.newMessageText)}}))):r.a.createElement(pe.a,{to:"/login"})},ke=function(e){return{isAuth:e.auth.isAuth}},xe=function(e){var t=function(t){Object(K.a)(n,t);var a=Object(q.a)(n);function n(){return Object(H.a)(this,n),a.apply(this,arguments)}return Object(Y.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(pe.a,{to:"/login"})}}]),n}(r.a.Component);return Object(me.b)(ke)(t)},Ae=Object(s.d)(Object(me.b)((function(e){return{dialogsReducer:e.dialogsReducer}}),(function(e){return{addNewMessage:function(t){e(function(e){return{type:"SEND-MESSAGE",newMessageText:e}}(t))}}})),xe)(Ue),Re=a(27),Fe=a.n(Re),Me=a(137),Le=a.n(Me),De=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",{className:Fe.a.usersPage},e.isFetching?null:r.a.createElement("div",null,r.a.createElement("div",null,a.map((function(t){return r.a.createElement("span",{className:"".concat(e.currentPage===t&&Fe.a.selectedPage," ").concat(Fe.a.page),onClick:function(a){e.onPageChanged(t)}},t)}))),r.a.createElement("div",{className:Fe.a.users},e.users.map((function(t){return r.a.createElement("div",{className:Fe.a.userItem,key:t.id},r.a.createElement("div",{className:Fe.a.userBlock},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(te.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:Fe.a.avaMessage,src:null!==t.photos.small?t.photos.small:Le.a,alt:"photo"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("div",{className:Fe.a.userBlockBody},r.a.createElement("div",null,t.name),r.a.createElement("div",{className:Fe.a.userStatus},t.status),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.city"),r.a.createElement("div",null,"user.location.country")))))})))))},Be=a(93),Ge=a.n(Be),ze=function(e){return r.a.createElement("div",{className:"".concat(Ge.a.loader," ").concat(Ge.a.loaderItem)},r.a.createElement("span",null," "),r.a.createElement("span",null," "),r.a.createElement("span",null," "))},Ze=a(138),We=Object(Ze.a)((function(e){return e.usersReducer.users}),(function(e){return e.filter((function(e){return!0}))})),Xe=function(e){return e.usersReducer.pageSize},Je=function(e){return e.usersReducer.totalUsersCount},He=function(e){return e.usersReducer.currentPage},Ye=function(e){return e.usersReducer.isFetching},qe=function(e){return e.usersReducer.followingInProgress},Ke=function(e){Object(K.a)(a,e);var t=Object(q.a)(a);function a(){var e;Object(H.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(Y.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ze,null):null,r.a.createElement(De,{followingInProgress:this.props.followingInProgress,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,users:this.props.users,follow:this.props.followUser,unFollow:this.props.unfollowUser,onPageChanged:this.onPageChanged,isFetching:this.props.isFetching}))}}]),a}(r.a.Component),Ve=Object(s.d)(Object(me.b)((function(e){return{users:We(e),pageSize:Xe(e),totalUsersCount:Je(e),currentPage:He(e),isFetching:Ye(e),followingInProgress:qe(e)}}),{followUser:function(e){return function(t){t(C(!0,e)),u(e).then((function(a){0===a.resultCode&&(t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(C(!1,e)))}))}},unfollowUser:function(e){return function(t){t(C(!0,e)),m(e).then((function(a){0===a.resultCode&&(t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(C(!1,e)))}))}},toggleFollowing:C,getUsers:function(e,t){return function(a){a(y(!0)),a(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(e)),l(e,t).then((function(e){a(y(!1)),a({type:"SET-USERS",users:e.items}),a({type:"SET-TOTAL-COUNT",totalUsersCount:e.totalCount})}))}}}))(Ke),Qe=a(139),$e=a.n(Qe),et=a(94),tt=a.n(et),at=a(95),nt=a.n(at),rt=a(140),st=a.n(rt),ot=function(e){return r.a.createElement("div",{className:nt.a.item},r.a.createElement("img",{className:nt.a.avatar,src:st.a}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like ",e.like)))},it=(Z=10,function(e){return e.length<Z?void 0:"Max length is ".concat(Z," symbols")}),ct=Object(Ne.a)({form:"AddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Oe.a,{validate:[Ce,it],component:Ie,placeholder:"New post",name:"newPostText"})),r.a.createElement("div",{className:tt.a.addPost},r.a.createElement("button",null,"Add post")))})),lt=function(e){var t=e.posts.map((function(e){return r.a.createElement(ot,{key:e.id,message:e.message,like:e.like})}));return r.a.createElement("div",{className:tt.a.postInfo},r.a.createElement("h3",null,"My posts"),r.a.createElement(ct,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)},ut=a(13),mt=a.n(ut),dt=a(67),ft=a.n(dt),pt=a(68),gt=a.n(pt),Et=(r.a.Component,Object(me.b)((function(e){return{text:e.profileReducer.text,posts:e.profileReducer.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(lt)),ht=a(96),_t=function(e){var t=Object(n.useState)(!1),a=Object(ht.a)(t,2),s=a[0],o=a[1],i=Object(n.useState)(e.status),c=Object(ht.a)(i,2),l=c[0],u=c[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);var m=function(){o(!0)};return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:mt.a.mainPic}),r.a.createElement("div",{className:mt.a.info},r.a.createElement("img",{className:mt.a.avatar,src:e.profile.photos.large}),r.a.createElement("div",{className:mt.a.profileInfo},r.a.createElement("div",null,e.profile.fullName),s?r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(l)},value:l}):r.a.createElement("div",{onDoubleClick:m},e.status||"-------"),r.a.createElement("div",{onDoubleClick:m},e.profile.aboutMe),r.a.createElement("div",null,"Looking for a job: ",e.profile.lookingForAJob?r.a.createElement("img",{className:mt.a.job,alt:"",src:ft.a}):r.a.createElement("img",{className:mt.a.job,alt:"",src:gt.a})),r.a.createElement("div",null,"Contacts:",r.a.createElement("div",{className:mt.a.contacts},r.a.createElement("a",{href:"#"},e.profile.contacts.facebook),r.a.createElement("a",{href:"#"},e.profile.contacts.vk),r.a.createElement("a",{href:"#"},e.profile.contacts.twitter),r.a.createElement("a",{href:"#"},e.profile.contacts.instagram)))))):r.a.createElement(ze,null)},vt=function(e){return r.a.createElement("div",{className:$e.a.content},r.a.createElement(_t,{status:e.status,profile:e.profile,updateStatus:e.updateStatus}),r.a.createElement(Et,null))},bt=function(e){Object(K.a)(a,e);var t=Object(q.a)(a);function a(){return Object(H.a)(this,a),t.apply(this,arguments)}return Object(Y.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.put("/login"),this.props.getProfileThunk(e),this.props.getStatusThunk(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(vt,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunk})))}}]),a}(r.a.Component),Ot=Object(s.d)(Object(me.b)((function(e){return{profile:e.profileReducer.profile,status:e.profileReducer.status,authUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfileThunk:function(e){return function(t){d(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e})}))}},getStatusThunk:function(e){return function(t){f(e).then((function(e){console.log(e),t(v(e))}))}},updateStatusThunk:function(e){return function(t){p(e).then((function(a){0===a.resultCode&&t(v(e))}))}}}),pe.f,xe)(bt),Nt=function(e){Object(K.a)(a,e);var t=Object(q.a)(a);function a(){return Object(H.a)(this,a),t.apply(this,arguments)}return Object(Y.a)(a,[{key:"render",value:function(){return r.a.createElement(ae,this.props)}}]),a}(r.a.Component),jt=Object(me.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:R})(Nt),wt=Object(Ne.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Oe.a,{validate:[Ce],placeholder:"email",name:"email",component:ye})),r.a.createElement("div",null,r.a.createElement(Oe.a,{validate:[Ce],placeholder:"password",name:"password",type:"password",component:ye})),r.a.createElement("div",null,r.a.createElement(Oe.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"),e.error&&r.a.createElement("div",{className:Se.a.formError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),St=Object(me.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(n){E(e,t,a).then((function(e){if(0===e.resultCode)n(A());else{var t=e.messages.length>0?e.messages[0]:"some error";n(Object(U.a)("login",{_error:t}))}}))}},logout:R})((function(e){return e.isAuth?r.a.createElement(pe.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(wt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),Pt=function(e){Object(K.a)(a,e);var t=Object(q.a)(a);function a(){return Object(H.a)(this,a),t.apply(this,arguments)}return Object(Y.a)(a,[{key:"componentDidMount",value:function(){this.props.initialise()}},{key:"render",value:function(){return this.props.initialised?r.a.createElement(te.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(jt,null),r.a.createElement(fe,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(pe.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ot,null)}}),r.a.createElement(pe.b,{path:"/dialogs",render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(pe.b,{path:"/users",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(pe.b,{path:"/login",render:function(){return r.a.createElement(St,null)}})))):r.a.createElement(ze,null)}}]),a}(r.a.Component),It=Object(s.d)(pe.f,Object(me.b)((function(e){return{initialised:e.appReducer.initialized}}),{initialise:function(){return function(e){e(A()).then((function(){e({type:"IS_INITIALIZED"})}))}}}))(Pt);J.a.render(r.a.createElement(te.a,null,r.a.createElement(me.a,{store:W},r.a.createElement(It,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports={header:"Header_header__1lJQl",logo:"Header_logo__2_KtS",loginBlock:"Header_loginBlock__2ESaP"}},44:function(e,t,a){e.exports={"form-control":"FormControls_form-control__3eTSU",formControl:"FormControls_formControl__CM7hd",error:"FormControls_error__LBTXp",formError:"FormControls_formError__16X9q"}},65:function(e,t,a){e.exports=a.p+"static/media/avaMessage.adf3f16b.png"},67:function(e,t,a){e.exports=a.p+"static/media/done.b9ea0577.png"},68:function(e,t,a){e.exports=a.p+"static/media/undone.007a5ffb.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/ava.adf3f16b.png"},70:function(e,t,a){e.exports={avaMessage:"FriendsItem_avaMessage__gaQng",name:"FriendsItem_name__3ASE-",item:"FriendsItem_item__2mo-j"}},93:function(e,t,a){e.exports={loader:"PreLoader_loader__1e5oh",loaderItem:"PreLoader_loaderItem__7rqyc",bounce:"PreLoader_bounce__2RXZV"}},94:function(e,t,a){e.exports={postInfo:"MyPosts_postInfo__2c5lU"}},95:function(e,t,a){e.exports={item:"Post_item__whpK4",avatar:"Post_avatar__18xxM"}}},[[166,1,2]]]);
//# sourceMappingURL=main.3896049f.chunk.js.map