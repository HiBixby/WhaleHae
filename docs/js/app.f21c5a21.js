(function(){"use strict";var t={9048:function(t,e,o){var n=o(9242),a=o(3396);function s(t,e,o,n,s,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}var i=o(7139),l={name:"App",setup(){const t=(0,i.oR)();try{chrome.storage.local.get(["todos"]).then((e=>{const o=Object.values(e.todos).map((t=>(t.date=new Date(t.date),t)));console.log(o),t.commit("SET_TODOS",o)}))}catch{console.log("개발모드입니다.")}}},r=o(89);const d=(0,r.Z)(l,[["render",s]]);var c=d,u=o(2483),g=o(2268);const h=t=>((0,a.dD)("data-v-5e989e89"),t=t(),(0,a.Cn)(),t),v={class:"container"},D=["onClick"],m=h((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11.507",height:"20.553",viewBox:"0 0 11.507 20.553"},[(0,a._)("path",{id:"back",d:"M9.938,19.835.154,10.356l0,0,0,0-.006-.006,0,0-.007-.007,0,0-.008-.009h0A.478.478,0,0,1,0,10.012s0,0,0-.006S0,10,0,10a.465.465,0,0,1,.059-.219v0l0-.007,0-.006v0a.528.528,0,0,1,.093-.114L9.938.177A.681.681,0,0,1,10.8.133a.476.476,0,0,1,.051.743L1.43,10.006l9.421,9.13a.476.476,0,0,1-.051.743.668.668,0,0,1-.406.133A.659.659,0,0,1,9.938,19.835Z",transform:"translate(0.25 0.291)",fill:"#707070",stroke:"#707070","stroke-linecap":"round","stroke-width":"0.5"})],-1))),p=[m],w={class:"day"},f={class:"second-line"},_={key:0,xmlns:"http://www.w3.org/2000/svg",width:"21.888",height:"25.014",viewBox:"0 0 21.888 25.014"},T=h((()=>(0,a._)("path",{d:"M10.962 0A1.562 1.562 0 0 0 9.4 1.563V2.5a7.821 7.821 0 0 0-6.254 7.661v.918a9.4 9.4 0 0 1-2.37 6.234l-.362.406a1.564 1.564 0 0 0 1.168 2.6h18.76a1.564 1.564 0 0 0 1.168-2.6l-.362-.406a9.394 9.394 0 0 1-2.37-6.234v-.918A7.821 7.821 0 0 0 12.525 2.5v-.937A1.562 1.562 0 0 0 10.962 0zm2.213 24.1a3.128 3.128 0 0 0 .914-2.213H7.835a3.13 3.13 0 0 0 5.34 2.213z",transform:"translate(-.019)"},null,-1))),C=[T],k={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},S=h((()=>(0,a._)("path",{d:"M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"},null,-1))),M=[S],O=h((()=>(0,a._)("label",null,"To do",-1))),b=["value"],y=h((()=>(0,a._)("label",null,"Link",-1))),E=["value"],x=["onClick"];function L(t,e,o,s,i,l){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("nav",null,[(0,a.Wm)(r,{to:"/",custom:""},{default:(0,a.w5)((({navigate:t})=>[(0,a._)("button",{onClick:e=>l.SaveAndExit(t),class:"btn-prev"},p,8,D)])),_:1})]),(0,a._)("header",null,[(0,a._)("time",w,(0,g.zw)(l.getYYYYMMDD),1),(0,a._)("div",f,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.time=t),type:"time",class:"time"},null,512),[[n.nr,i.time]]),(0,a._)("button",{onClick:e[1]||(e[1]=(...t)=>l.ToggleNoti&&l.ToggleNoti(...t)),class:"btn-noti"},[i.noti?((0,a.wg)(),(0,a.iD)("svg",_,C)):((0,a.wg)(),(0,a.iD)("svg",k,M))])])]),(0,a._)("form",null,[O,(0,a._)("input",{onInput:e[2]||(e[2]=(...t)=>l.ChangeTitle&&l.ChangeTitle(...t)),value:i.title,type:"text",placeholder:"제목을 입력해주세요."},null,40,b),y,(0,a._)("input",{onInput:e[3]||(e[3]=(...t)=>l.ChangeLink&&l.ChangeLink(...t)),value:i.link,type:"url",placeholder:"URL을 입력해주세요."},null,40,E)]),(0,a.Wm)(r,{to:"/",custom:""},{default:(0,a.w5)((({navigate:t})=>[(0,a._)("button",{onClick:e=>l.DeleteAndExit(t),class:"btn-delete"},"삭제",8,x)])),_:1})])}var A=o(5743),Y=o.n(A);Y().locale("ko");var $={name:"AddTodo",data(){const t=this.$store.getters.getSelectedDate,e=this.$store.getters.getSelectedTodo;let o;return o=e?e.id:0!==this.$store.getters.getTodos.length?parseInt(this.$store.getters.getTodos.at(-1).id)+1:1,{dateWithoutTime:new Date(t.getFullYear(),t.getMonth(),t.getDate()),id:o,time:e?("0"+e.date.getHours()).slice(-2)+":"+("0"+e.date.getMinutes()).slice(-2):null,title:e?e.title:null,link:e?e.link:null,noti:!e||e.noti}},methods:{ChangeTitle(t){this.title=t.target.value},ChangeLink(t){this.link=t.target.value},ToggleNoti(){this.noti=!this.noti},UpdateChromeStorage(){chrome.storage.local.set({todos:this.$store.getters.getTodos}).then((()=>console.log("value is set to"+this.$store.getters.getTodos)))},SaveAndExit(t){const e=this.time,o=e?parseInt(this.time.slice(0,2)):0,n=e?parseInt(this.time.slice(3)):0,a={id:this.id,date:new Date(this.$store.getters.getSelectedDate.getFullYear(),this.$store.getters.getSelectedDate.getMonth(),this.$store.getters.getSelectedDate.getDate(),o,n,0),title:this.title,link:this.link,noti:this.noti,done:!1};this.$store.getters.getSelectedTodo?(console.log(a),this.$store.dispatch("editTodo",a),this.$store.dispatch("setTodos",this.$store.getters.getTodos),this.$store.commit("SET_SELECTED_TODO",null)):(this.$store.dispatch("addTodo",a),this.$store.dispatch("setTodos",this.$store.getters.getTodos)),t()},DeleteAndExit(t){const e=this.$store.getters.getSelectedTodo;e&&(this.$store.dispatch("deleteTodo",e.id),this.$store.commit("SET_SELECTED_TODO",null),this.$store.dispatch("setTodos",this.$store.getters.getTodos)),t()}},computed:{...(0,i.Se)(["getSelectedDate"]),getYYYYMMDD:function(){return Y()(this.getSelectedDate).format("YYYY.MM.DD")},dateOfTodo:function(){return this.getSelectedDate.year}}};const z=(0,r.Z)($,[["render",L],["__scopeId","data-v-5e989e89"]]);var V=z;const H={class:"wrapper"};function Z(t,e,o,n,s,i){const l=(0,a.up)("CalendarComp"),r=(0,a.up)("EmptyTodo"),d=(0,a.up)("TodoBox");return(0,a.wg)(),(0,a.iD)("div",H,[(0,a.Wm)(l),i.isEmpty?((0,a.wg)(),(0,a.j4)(r,{key:0})):((0,a.wg)(),(0,a.j4)(d,{key:1}))])}const B=t=>((0,a.dD)("data-v-c4aecc44"),t=t(),(0,a.Cn)(),t),I={class:"empty-todo"},F=B((()=>(0,a._)("div",null,[(0,a._)("p",null,"오늘은 한가하네요"),(0,a._)("p",null,"일정을 추가해봐요!")],-1))),W=["onClick"],j=B((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54",viewBox:"0 0 54 54"},[(0,a._)("defs",null,[(0,a._)("filter",{id:"mt1lapbf5a",x:"0",y:"0",width:"54",height:"54",filterUnits:"userSpaceOnUse"},[(0,a._)("feOffset",{dy:"3"}),(0,a._)("feGaussianBlur",{stdDeviation:"3",result:"blur"}),(0,a._)("feFlood",{"flood-opacity":".161"}),(0,a._)("feComposite",{operator:"in",in2:"blur"}),(0,a._)("feComposite",{in:"SourceGraphic"})])]),(0,a._)("g",{"data-name":"그룹 118"},[(0,a._)("g",{style:{filter:"url(#mt1lapbf5a)"}},[(0,a._)("circle",{"data-name":"타원 28",cx:"18",cy:"18",r:"18",transform:"translate(9 6)",style:{fill:"#fff"}})]),(0,a._)("path",{"data-name":"패스 72",d:"M-541 154a18 18 0 0 0 18-18 18 18 0 0 0-18-18 18 18 0 0 0-18 18 18 18 0 0 0 18 18zm-1.687-11.812v-4.5h-4.5a1.683 1.683 0 0 1-1.688-1.688 1.683 1.683 0 0 1 1.688-1.687h4.5v-4.5a1.683 1.683 0 0 1 1.687-1.688 1.683 1.683 0 0 1 1.688 1.688v4.5h4.5a1.683 1.683 0 0 1 1.687 1.687 1.683 1.683 0 0 1-1.687 1.688h-4.5v4.5a1.683 1.683 0 0 1-1.688 1.687 1.683 1.683 0 0 1-1.687-1.688z",transform:"translate(568 -112)",style:{fill:"#34e8cd"}})])],-1))),N=[j];function G(t,e,o,n,s,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",I,[F,(0,a.Wm)(l,{to:"/todo"},{default:(0,a.w5)((({navigate:t})=>[(0,a._)("button",{onClick:t},N,8,W)])),_:1})])}var P={name:"EmptyTodo"};const U=(0,r.Z)(P,[["render",G],["__scopeId","data-v-c4aecc44"]]);var K=U;const q=t=>((0,a.dD)("data-v-23cafdf7"),t=t(),(0,a.Cn)(),t),R={class:"container"},J={class:"date"},Q=["onClick"],X=["onClick"],tt=q((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[(0,a._)("path",{id:"패스_2","data-name":"패스 2",d:"M-550,136a9,9,0,0,0,9-9,9,9,0,0,0-9-9,9,9,0,0,0-9,9A9,9,0,0,0-550,136Zm-.844-5.906v-2.25h-2.25a.842.842,0,0,1-.844-.844.842.842,0,0,1,.844-.844h2.25v-2.25a.842.842,0,0,1,.844-.844.842.842,0,0,1,.844.844v2.25h2.25a.842.842,0,0,1,.844.844.842.842,0,0,1-.844.844h-2.25v2.25a.842.842,0,0,1-.844.844A.842.842,0,0,1-550.844,130.094Z",transform:"translate(559 -118)",fill:"#01af94"})],-1))),et=[tt];function ot(t,e,o,s,i,l){const r=(0,a.up)("TodoList"),d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",R,[(0,a._)("div",J,(0,g.zw)(t.getSelectedDate.getDate())+"일 Task",1),(0,a.Wm)(d,{to:"/list",custom:""},{default:(0,a.w5)((({navigate:t})=>[(0,a._)("div",{onClick:(0,n.iM)(t,["self"]),class:"box"},[(0,a.Wm)(r),(0,a.Wm)(d,{to:"/todo",custom:""},{default:(0,a.w5)((({navigate:t})=>[(0,a._)("button",{class:"btn-add",onClick:t},et,8,X)])),_:2},1024)],8,Q)])),_:1})])}const nt=t=>((0,a.dD)("data-v-26ce2c84"),t=t(),(0,a.Cn)(),t),at={class:"first-line"},st=nt((()=>(0,a._)("input",{type:"checkbox"},null,-1))),it={class:"second-line"},lt={class:"title"},rt={class:"button-container"},dt=["onClick"],ct=nt((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[(0,a._)("path",{id:"패스_5","data-name":"패스 5",d:"M16.752,5.858a1.987,1.987,0,0,0-2.813,0L12.87,6.924,16.347,10.4l1.069-1.069a1.987,1.987,0,0,0,0-2.813ZM6.124,13.673a1.963,1.963,0,0,0-.48.778L4.593,17.606a.857.857,0,0,0,.206.874.846.846,0,0,0,.874.206l3.154-1.051a2.057,2.057,0,0,0,.778-.48l5.943-5.946L12.067,7.727ZM3.41,7.361A3.411,3.411,0,0,0,0,10.771v9.094a3.411,3.411,0,0,0,3.41,3.41H12.5a3.411,3.411,0,0,0,3.41-3.41v-3.41a1.137,1.137,0,0,0-2.273,0v3.41A1.135,1.135,0,0,1,12.5,21H3.41a1.135,1.135,0,0,1-1.137-1.137V10.771A1.135,1.135,0,0,1,3.41,9.634H6.82a1.137,1.137,0,1,0,0-2.273Z",transform:"translate(0 -5.275)",fill:"#01af94"})],-1))),ut=[ct],gt=["onClick"],ht={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15.75 18"},vt=nt((()=>(0,a._)("path",{id:"패스_48","data-name":"패스 48",d:"M7.893,0A1.124,1.124,0,0,0,6.768,1.125V1.8a5.628,5.628,0,0,0-4.5,5.513v.661A6.766,6.766,0,0,1,.563,12.459l-.26.292a1.125,1.125,0,0,0,.84,1.874h13.5a1.125,1.125,0,0,0,.84-1.874l-.26-.292a6.76,6.76,0,0,1-1.705-4.486V7.313A5.628,5.628,0,0,0,9.018,1.8V1.125A1.124,1.124,0,0,0,7.893,0ZM9.486,17.343a2.251,2.251,0,0,0,.657-1.593h-4.5a2.252,2.252,0,0,0,3.843,1.593Z",transform:"translate(-0.019)"},null,-1))),Dt=[vt],mt={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},pt=nt((()=>(0,a._)("path",{d:"M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"},null,-1))),wt=[pt],ft={class:"link"},_t=nt((()=>(0,a._)("hr",null,null,-1)));function Tt(t,e,o,n,s,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.getTodosOfDate,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("div",at,[st,(0,a._)("time",null,(0,g.zw)(("0"+t.date.getHours()).slice(-2)+":"+("0"+t.date.getMinutes()).slice(-2)),1)]),(0,a._)("div",it,[(0,a._)("span",lt,(0,g.zw)(t.title),1),(0,a._)("div",rt,[(0,a.Wm)(l,{to:"/todo",custom:""},{default:(0,a.w5)((({navigate:e})=>[(0,a._)("button",{onClick:o=>[e(),i.setSelectedTodo(t)],class:"btn-edit"},ut,8,dt)])),_:2},1024),(0,a._)("button",{onClick:e=>i.ToggleNoti(t),class:"btn-noti"},[t.noti?((0,a.wg)(),(0,a.iD)("svg",ht,Dt)):((0,a.wg)(),(0,a.iD)("svg",mt,wt))],8,gt)])]),(0,a._)("p",ft,(0,g.zw)(t.link?t.link:"No Link"),1),_t])))),128))])}o(7692);Y().locale("ko");var Ct={name:"TodoList",methods:{setSelectedTodo(t){this.$store.commit("SET_SELECTED_TODO",t)},ToggleNoti(t){t.noti=!t.noti,this.$store.dispatch("editTodo",t),this.$store.dispatch("setTodos",this.$store.getters.getTodos)}},computed:{...(0,i.rn)(["selectedDate","todos"]),...(0,i.Se)(["getSelectedDate","getTodosOfDate","getTodos"])}};const kt=(0,r.Z)(Ct,[["render",Tt],["__scopeId","data-v-26ce2c84"]]);var St=kt;Y().locale("ko");var Mt={name:"TodoBox",components:{TodoList:St},computed:{...(0,i.rn)(["selectedDate","todos"]),...(0,i.Se)(["getSelectedDate","getTodosOfDate"])}};const Ot=(0,r.Z)(Mt,[["render",ot],["__scopeId","data-v-23cafdf7"]]);var bt=Ot;const yt=t=>((0,a.dD)("data-v-1120511c"),t=t(),(0,a.Cn)(),t),Et={class:"calendar"},xt={class:"year"},Lt={class:"month"},At={class:"btn-container"},Yt=yt((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"16",viewBox:"0 0 8 16"},[(0,a._)("path",{d:"M7.223 15.859.112 8.28v-.006l-.024-.022A.4.4 0 0 1 0 8a.4.4 0 0 1 .043-.18v-.006a.417.417 0 0 1 .068-.092L7.223.141a.461.461 0 0 1 .628-.034.4.4 0 0 1 .036.593L1.039 8l6.848 7.3a.4.4 0 0 1-.037.594.462.462 0 0 1-.627-.035z"})],-1))),$t=[Yt],zt=yt((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"16",viewBox:"0 0 8 16"},[(0,a._)("path",{d:"M.777.141 7.888 7.72v.006l.024.022A.4.4 0 0 1 8 8a.4.4 0 0 1-.043.18v.006a.417.417 0 0 1-.068.092L.777 15.859a.461.461 0 0 1-.628.034.4.4 0 0 1-.036-.593L6.961 8 .113.7A.4.4 0 0 1 .15.106a.462.462 0 0 1 .627.035z"})],-1))),Vt=[zt],Ht=yt((()=>(0,a._)("ul",{class:"weeks"},[(0,a._)("li",null,"Su"),(0,a._)("li",null,"Mo"),(0,a._)("li",null,"Tu"),(0,a._)("li",null,"We"),(0,a._)("li",null,"Th"),(0,a._)("li",null,"Fr"),(0,a._)("li",null,"Sa")],-1))),Zt={class:"days"},Bt=["onClick"];function It(t,e,o,s,i,l){return(0,a.wg)(),(0,a.iD)("div",Et,[(0,a._)("div",xt,(0,g.zw)(l.getCurrYear),1),(0,a._)("div",Lt,(0,g.zw)(l.getCurrMonth),1),(0,a._)("div",At,[(0,a._)("button",{class:"btn-prev",onClick:e[0]||(e[0]=(0,n.iM)(((...t)=>l.GoPrevMonth&&l.GoPrevMonth(...t)),["prevent"]))},$t),(0,a._)("button",{class:"btn-next",onClick:e[1]||(e[1]=(...t)=>l.GoNextMonth&&l.GoNextMonth(...t))},Vt)]),Ht,(0,a._)("ul",Zt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.getFirstDayOfMonth,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"disabled"})))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.getLastDateOfMonth,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,g.C_)({selected:e===t.getSelectedDate.getDate()&&l.isEqualYearAndMonth})},[(0,a._)("button",{class:"active",onClick:t=>l.ChangeSelectedDate(e)},(0,g.zw)(e),9,Bt)],2)))),128))])])}var Ft={name:"CalendarComp",data(){return{currentDate:new Date}},methods:{...(0,i.nv)(["setSelectedDate"]),GoPrevMonth(){this.currentDate=new Date(this.currentDate.setMonth(this.currentDate.getMonth()-1))},GoNextMonth(){this.currentDate=new Date(this.currentDate.setMonth(this.currentDate.getMonth()+1))},ChangeSelectedDate(t){this.setSelectedDate(new Date(this.getCurrYear,this.getCurrMonth-1,t))}},computed:{...(0,i.rn)(["selectedDate"]),...(0,i.Se)(["getSelectedDate"]),getCurrYear:function(){return this.currentDate.getFullYear()},getCurrMonth:function(){return("0"+(this.currentDate.getMonth()+1)).slice(-2)},getCurrDay:function(){return this.currentDate.getDay()},getFirstDayOfMonth:function(){return new Date(this.getCurrYear,this.getCurrMonth-1,1).getDay()},getLastDateOfMonth:function(){return new Date(this.getCurrYear,this.getCurrMonth,0).getDate()},getLastDateOfLastMonth:function(){return new Date(this.getCurrYear,this.getCurrMonth-1,0).getDate()},isEqualYearAndMonth:function(){return this.currentDate.getFullYear()===this.getSelectedDate.getFullYear()&&this.currentDate.getMonth()===this.getSelectedDate.getMonth()}}};const Wt=(0,r.Z)(Ft,[["render",It],["__scopeId","data-v-1120511c"]]);var jt=Wt,Nt={name:"MainPage",components:{EmptyTodo:K,TodoBox:bt,CalendarComp:jt},computed:{...(0,i.Se)(["getTodosOfDate"]),isEmpty:function(){return 0===this.getTodosOfDate.length}}};const Gt=(0,r.Z)(Nt,[["render",Z],["__scopeId","data-v-2cb6f04f"]]);var Pt=Gt;const Ut=t=>((0,a.dD)("data-v-e7c8c134"),t=t(),(0,a.Cn)(),t),Kt={class:"wrapper"},qt=["onClick"],Rt=Ut((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11.507",height:"20.553",viewBox:"0 0 11.507 20.553"},[(0,a._)("path",{id:"back",d:"M9.938,19.835.154,10.356l0,0,0,0-.006-.006,0,0-.007-.007,0,0-.008-.009h0A.478.478,0,0,1,0,10.012s0,0,0-.006S0,10,0,10a.465.465,0,0,1,.059-.219v0l0-.007,0-.006v0a.528.528,0,0,1,.093-.114L9.938.177A.681.681,0,0,1,10.8.133a.476.476,0,0,1,.051.743L1.43,10.006l9.421,9.13a.476.476,0,0,1-.051.743.668.668,0,0,1-.406.133A.659.659,0,0,1,9.938,19.835Z",transform:"translate(0.25 0.291)",fill:"#707070",stroke:"#707070","stroke-linecap":"round","stroke-width":"0.5"})],-1))),Jt=[Rt];function Qt(t,e,o,n,s,i){const l=(0,a.up)("router-link"),r=(0,a.up)("todo-list");return(0,a.wg)(),(0,a.iD)("div",Kt,[(0,a.Wm)(l,{to:"/",custom:""},{default:(0,a.w5)((({navigate:t})=>[(0,a._)("button",{onClick:t,class:"btn-prev"},Jt,8,qt)])),_:1}),(0,a._)("header",null,(0,g.zw)(t.getSelectedDate.getDate())+"일의 Task",1),(0,a.Wm)(r)])}Y().locale("ko");var Xt={name:"AddTodo",components:{TodoList:St},data(){return{}},computed:{...(0,i.Se)(["getSelectedDate","getTodosOfDate"])}};const te=(0,r.Z)(Xt,[["render",Qt],["__scopeId","data-v-e7c8c134"]]);var ee=te;const oe=(0,u.p7)({history:(0,u.r5)(),routes:[{path:"/",name:"home",component:Pt},{path:"/todo",name:"todo",component:V},{path:"/list",name:"list",component:ee}]});var ne=oe;const ae={state:()=>({selectedDate:new Date}),mutations:{SET_SELECTED_DATE(t,e){t.selectedDate=e}},getters:{getSelectedDate(t){return t.selectedDate}},actions:{setSelectedDate({commit:t},e){t("SET_SELECTED_DATE",e)}}};o(7658);function se(t){if(t.date.getTime()>Date.now()&&!0===t.noti&&!1===t.done)try{chrome.alarms.create(t.id.toString(),{when:t.date.getTime()})}catch{console.log("알람 생성되지 않음.")}}function ie(t){chrome.alarms.clear(t.toString())}function le(t){t.map((t=>(t.date=t.date.getTime(),t))),chrome.storage.local.set({todos:t}).then(console.log("value is set to",t))}const re={state:()=>({todos:[],selectedTodo:null}),mutations:{SET_TODOS(t,e){t.todos=e},ADD_TODO(t,e){t.todos.push(e)},DELETE_TODO(t,e){t.todos=t.todos.filter((t=>t.id!==e))},EDIT_TODO(t,e){for(let o=0;o<t.todos.length;o++)if(t.todos[o].id===e.id){t.todos[o]=e;break}},SET_SELECTED_TODO(t,e){t.selectedTodo=e}},getters:{getTodos(t){return t.todos},getTodosOfDate(t,e,o){const n=o.dates.selectedDate,a=t.todos.map((t=>(console.log(new Date(t.date)),t.date=new Date(t.date),t))),s=a.filter((t=>t.date.getFullYear()===n.getFullYear()&&t.date.getMonth()===n.getMonth()&&t.date.getDate()===n.getDate())),i=s.sort((function(t,e){return t.date-e.date}));return i},getSelectedTodo(t){return t.selectedTodo}},actions:{setTodos({commit:t},e){t("SET_TODOS",e);try{le(e)}catch{console.log("크롬 스토리지에 저장되지 않음.")}},addTodo({commit:t},e){t("ADD_TODO",e),se(e)},deleteTodo({commit:t},e){t("DELETE_TODO",e);try{ie(e)}catch{console.log("알람 삭제되지 않음")}},editTodo({commit:t},e){t("EDIT_TODO",e),ie(e.id),se(e)}}};var de=(0,i.MT)({modules:{dates:ae,todos:re}});const ce=(0,n.ri)(c);ce.use(de),ce.use(ne),ce.mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,s){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],s=t[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[r])}))?n.splice(r--,1):(l=!1,s<i&&(i=s));if(l){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,a,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,i=n[0],l=n[1],r=n[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(r)var c=r(o)}for(e&&e(n);d<i.length;d++)s=i[d],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(c)},n=self["webpackChunkwhale_hae"]=self["webpackChunkwhale_hae"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9048)}));n=o.O(n)})();
//# sourceMappingURL=app.f21c5a21.js.map