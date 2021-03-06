(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae290952"],{"159b":function(e,t,r){var a=r("da84"),n=r("fdbc"),s=r("17c2"),o=r("9112");for(var i in n){var c=a[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{o(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,n=r("a640"),s=r("ae40"),o=n("forEach"),i=s("forEach");e.exports=o&&i?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"1d14":function(e,t,r){},"30d2":function(e,t,r){"use strict";r("1d14")},4160:function(e,t,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4a61":function(e,t,r){},"4de4":function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").filter,s=r("1dde"),o=r("ae40"),i=s("filter"),c=o("filter");a({target:"Array",proto:!0,forced:!i||!c},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},b43c:function(e,t,r){"use strict";r("4a61")},b64b:function(e,t,r){var a=r("23e7"),n=r("7b0b"),s=r("df75"),o=r("d039"),i=o((function(){s(1)}));a({target:"Object",stat:!0,forced:i},{keys:function(e){return s(n(e))}})},bb51:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-start"}},[r("span",[e._v("Username")]),r("vs-input",{staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:"User Name"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("span",[e._v("Repository")]),r("vs-input",{attrs:{placeholder:"Repository"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$refs.fetchReleaseButton.$el.click()}},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}})],1),r("vs-button",{ref:"fetchReleaseButton",staticClass:"getButton",on:{click:e.getReleases}},[e._v(" Get the latest release stats ")]),r("div",{staticClass:"container-box"},e._l(e.computedReleases,(function(e,t){return r("card",{key:t,attrs:{tag_name:e.tag_name,html_url:e.html_url,author:e.author,published_at:e.published_at,pre_release:e.prerelease}})})),1),r("div",{staticClass:"pagination"},[r("font-awesome-icon",{staticStyle:{"font-size":"50px"},style:{color:1===e.page?"#B0B4B5":"#2C3E50",cursor:1===e.page?"":"pointer"},attrs:{icon:"angle-left"},on:{click:function(t){1!==e.page&&e.page--}}}),r("div",{staticStyle:{"margin-left":"20px","margin-right":"20px"}},[e._v(" "+e._s(e.page)+" ")]),r("font-awesome-icon",{staticStyle:{"font-size":"50px",cursor:"pointer"},style:{color:e.computedReleases.length!==e.per_page?"#B0B4B5":"#2C3E50",cursor:e.computedReleases.length!==e.per_page?"":"pointer"},attrs:{icon:"angle-right"},on:{click:function(t){e.computedReleases.length===e.per_page&&e.page++}}})],1)],1)},n=[];r("fb6a"),r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r("2f62"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title-area"},[r("a",{attrs:{href:e.html_url,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:"tag"}}),r("span",[e._v(e._s(e.tag_name))]),r("br"),e.pre_release?r("span",{staticStyle:{color:"green"}},[e._v(" Pre-Release ")]):e._e()],1)]),r("div",{staticClass:"header-area"},[r("div",{staticClass:"header-area-title"},[r("div",{staticClass:"info-icon"},[r("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"info"}})],1),r("b",{staticStyle:{"margin-left":"5px"}},[e._v("Release Info")])]),r("div",{staticStyle:{"margin-top":"10px"}},[r("span",[r("a",{attrs:{href:e.author.html_url,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:"user"}}),r("span",[r("b",{staticStyle:{"margin-left":"5px"}},[e._v("Author:")]),e._v(" @"+e._s(e.author.login))]),r("br")],1)]),r("span",[r("font-awesome-icon",{attrs:{icon:"calendar"}}),r("span",[r("b",{staticStyle:{"margin-left":"5px"}},[e._v(" Published: ")]),r("span",{staticStyle:{"font-size":".7rem"}},[e._v(" "+e._s(e.published_at)+" ")])])],1)])])])},u=[],p={props:{tag_name:{default:"",required:!0},html_url:{default:"/",required:!0},author:{default:{},required:!0},published_at:{default:"",required:!0},pre_release:{default:!1,required:!0}}},f=p,h=(r("30d2"),r("2877")),d=Object(h["a"])(f,l,u,!1,null,"7f3d7750",null),g=d.exports,b={name:"Home",components:{card:g},computed:i(i({},Object(c["b"])(["releases","repos"])),{},{computedReleases:function(){return this.releases.slice((this.page-1)*this.per_page,(this.page-1)*this.per_page+this.per_page)}}),watch:{page:function(e){this.computedReleases.length<this.per_page&&this.$store.dispatch("FETCH_RELEASES",{userName:this.username,repoName:this.repoName,page:e,per_page:this.per_page})}},data:function(){return{username:"",repoName:"",page:1,per_page:30}},methods:{getReleases:function(){this.page=1,this.$store.commit("clearReleases"),this.$store.dispatch("FETCH_RELEASES",{userName:this.username,repoName:this.repoName,page:this.page,per_page:this.per_page})},getPreviousPage:function(){console.log()},getNextPage:function(){this.releases[this.per_page+1]||console.log("YENİ SAYFA GELİYORR")}}},m=b,_=(r("b43c"),Object(h["a"])(m,a,n,!1,null,"0b62d9f6",null));t["default"]=_.exports},dbb4:function(e,t,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),o=r("fc6a"),i=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,a=o(e),n=i.f,l=s(a),u={},p=0;while(l.length>p)r=n(a,t=l[p++]),void 0!==r&&c(u,t,r);return u}})},e439:function(e,t,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),o=r("06cf").f,i=r("83ab"),c=n((function(){o(1)})),l=!i||c;a({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})}}]);
//# sourceMappingURL=chunk-ae290952.e0f023a1.js.map