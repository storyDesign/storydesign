(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"wrapper"},[e("form",{on:{submit:t.addStory}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.title,expression:"info.title"}],attrs:{type:"text"},domProps:{value:t.info.title},on:{input:function(o){o.target.composing||t.$set(t.info,"title",o.target.value)}}}),e("h1",[t._v(t._s(t.info.title))]),e("button",{attrs:{type:"submit"}},[t._v("OK")])])])},n=[],s={data:function(){return{stories:[],info:{title:""}}},created:function(){this.getStories()},methods:{getStories:function(){var t=this;this.$http.get("https://storydesign.github.io/storyDesign/dist/data/db.json").then((function(o){t.stories=o.data.stories,console.log(t.stories)})).catch((function(t){console.log(t)}))},addStory:function(){var t=this,o=this.info;this.$http.post("https://storydesign.github.io/storyDesign/dist/data/db.json",o).then((function(o){console.log(o),t.getStories()})).catch((function(t){console.log(t)}))}}},r=s,a=e("2877"),c=Object(a["a"])(r,i,n,!1,null,null,null);o["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b9d35.baa32814.js.map