!function(){"use strict";var o=function(o){return document.getElementById(o)},n=window.console;n.log||(n.log=function(){alert([].join.apply(arguments," "))}),Sortable.create(o("foo"),{group:"words",animation:150,store:{get:function(o){var n=localStorage.getItem(o.options.group);return n?n.split("|"):[]},set:function(o){var n=o.toArray();localStorage.setItem(o.options.group,n.join("|"))}},onAdd:function(o){n.log("onAdd.foo:",[o.item,o.from])},onUpdate:function(o){n.log("onUpdate.foo:",[o.item,o.from])},onRemove:function(o){n.log("onRemove.foo:",[o.item,o.from])},onStart:function(o){n.log("onStart.foo:",[o.item,o.from])},onSort:function(o){n.log("onStart.foo:",[o.item,o.from])},onEnd:function(o){n.log("onEnd.foo:",[o.item,o.from])}}),Sortable.create(o("bar"),{group:"words",animation:150,onAdd:function(o){n.log("onAdd.bar:",o.item)},onUpdate:function(o){n.log("onUpdate.bar:",o.item)},onRemove:function(o){n.log("onRemove.bar:",o.item)},onStart:function(o){n.log("onStart.foo:",o.item)},onEnd:function(o){n.log("onEnd.foo:",o.item)}}),Sortable.create(o("multi"),{animation:150,draggable:".tile",handle:".tile__name"}),[].forEach.call(o("multi").getElementsByClassName("tile__list"),function(o){Sortable.create(o,{group:"photo",animation:150})});var t=Sortable.create(o("editable"),{animation:150,filter:".js-remove",onFilter:function(o){o.item.parentNode.removeChild(o.item)}});o("addUser").onclick=function(){Ply.dialog("prompt",{title:"Add",form:{name:"name"}}).done(function(o){var n=document.createElement("li");n.innerHTML=o.data.name+'<i class="js-remove">✖</i>',t.el.appendChild(n)})},[{name:"advanced",pull:!0,put:!0},{name:"advanced",pull:"clone",put:!1},{name:"advanced",pull:!1,put:!0}].forEach(function(n,t){Sortable.create(o("advanced-"+(t+1)),{sort:1!=t,group:n,animation:150})}),Sortable.create(o("handle-1"),{handle:".drag-handle",animation:150}),angular.module("todoApp",["ng-sortable"]).constant("ngSortableConfig",{onEnd:function(){n.log("default onEnd()")}}).controller("TodoController",["$scope",function(o){o.todos=[{text:"learn angular",done:!0},{text:"build an angular app",done:!1}],o.addTodo=function(){o.todos.push({text:o.todoText,done:!1}),o.todoText=""},o.remaining=function(){var n=0;return angular.forEach(o.todos,function(o){n+=o.done?0:1}),n},o.archive=function(){var n=o.todos;o.todos=[],angular.forEach(n,function(n){n.done||o.todos.push(n)})}}]).controller("TodoControllerNext",["$scope",function(o){o.todos=[{text:"learn Sortable",done:!0},{text:"use ng-sortable",done:!1},{text:"Enjoy",done:!1}],o.remaining=function(){var n=0;return angular.forEach(o.todos,function(o){n+=o.done?0:1}),n},o.sortableConfig={group:"todo",animation:150},"Start End Add Update Remove Sort".split(" ").forEach(function(t){o.sortableConfig["on"+t]=n.log.bind(n,t)})}])}(),document.addEventListener("DOMContentLoaded",function(){function o(o,n,t,e){var a=document.createElement("canvas"),r=a.getContext("2d");a.width=n,a.height=t;for(var i=0;i<n;i++)for(var l=0;l<t;l++){var d=Math.floor(255*Math.random());r.fillStyle="rgba("+d+","+d+","+d+","+e+")",r.fillRect(i,l,1,1)}o.style.background="url("+a.toDataURL("image/png")+")"}o(document.getElementsByTagName("body")[0],50,50,.02)},!1);