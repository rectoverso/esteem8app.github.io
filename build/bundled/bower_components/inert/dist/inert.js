"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();!function(e){function t(e,r,n){if(e.nodeType==Node.ELEMENT_NODE){var o=e;r&&r(o);var i=o.shadowRoot||o.webkitShadowRoot;if(i)return void t(i,r,i);if("content"==o.localName){for(var a=o,s=a.getDistributedNodes?a.getDistributedNodes():[],d=0;d<s.length;d++)t(s[d],r,n);return}if("slot"==o.localName){for(var u=o,l=u.assignedNodes?u.assignedNodes({flatten:!0}):[],h=0;h<l.length;h++)t(l[h],r,n);return}}for(var c=e.firstChild;null!=c;)t(c,r,n),c=c.nextSibling}function r(t){if(!t.querySelector("style#inert-style")){var r=e.createElement("style");r.setAttribute("id","inert-style"),r.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n",t.appendChild(r)}}var n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]"].join(","),o=function(){function r(e,t){_classCallCheck(this,r),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set([]),this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return _createClass(r,[{key:"destructor",value:function(){this._observer.disconnect(),this._observer=null,this._rootElement&&this._rootElement.removeAttribute("aria-hidden"),this._rootElement=null;var e=!0,t=!1,r=void 0;try{for(var n,o=this._managedNodes[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;this._unmanageNode(i.node)}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(r){var n=this;t(r,function(e){n._visitNode(e)});var o=e.activeElement;if(!e.body.contains(r)){for(var i=r,a=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){a=i;break}i=i.parentNode}a&&(o=a.activeElement)}r.contains(o)&&o.blur()}},{key:"_visitNode",value:function(e){e.nodeType===Node.ELEMENT_NODE&&(e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(e.matches(n)||e.hasAttribute("tabindex"))&&this._manageNode(e))}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}},{key:"_unmanageSubtree",value:function(e){var r=this;t(e,function(e){r._unmanageNode(e)})}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e));var r=!0,n=!1,o=void 0;try{for(var i,a=t.managedNodes[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value;this._manageNode(s.node)}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}},{key:"_onMutation",value:function(e,t){var r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value,d=s.target;if("childList"===s.type){var u=!0,l=!1,h=void 0;try{for(var c,f=Array.from(s.addedNodes)[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var v=c.value;this._makeSubtreeUnfocusable(v)}}catch(e){l=!0,h=e}finally{try{!u&&f.return&&f.return()}finally{if(l)throw h}}var y=!0,_=!1,b=void 0;try{for(var m,g=Array.from(s.removedNodes)[Symbol.iterator]();!(y=(m=g.next()).done);y=!0){var N=m.value;this._unmanageSubtree(N)}}catch(e){_=!0,b=e}finally{try{!y&&g.return&&g.return()}finally{if(_)throw b}}}else if("attributes"===s.type)if("tabindex"===s.attributeName)this._manageNode(d);else if(d!==this._rootElement&&"inert"===s.attributeName&&d.hasAttribute("inert")){this._adoptInertRoot(d);var w=this._inertManager.getInertRoot(d),I=!0,E=!1,k=void 0;try{for(var x,p=this._managedNodes[Symbol.iterator]();!(I=(x=p.next()).done);I=!0){var S=x.value;d.contains(S.node)&&w._manageNode(S.node)}}catch(e){E=!0,k=e}finally{try{!I&&p.return&&p.return()}finally{if(E)throw k}}}}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}}]),r}(),i=function(){function e(t,r){_classCallCheck(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([r]),this._destroyed=!1,this.ensureUntabbable()}return _createClass(e,[{key:"destructor",value:function(){this._throwIfDestroyed(),this._node&&(this.hasSavedTabIndex?this._node.setAttribute("tabindex",this.savedTabIndex):this._node.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete this._node.focus),this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){var e=this.node;if(e.matches(n)){if(e.tabIndex===-1&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return"_savedTabIndex"in this}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),a=function(){function e(t){if(_classCallCheck(this,e),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),r(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return _createClass(e,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var n=new o(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,n),!this._document.body.contains(e))for(var i=e.parentNode;i;)11===i.nodeType&&r(i),i=i.parentNode}else{if(!this._inertRoots.has(e))return;var a=this._inertRoots.get(e);a.destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var r=this._managedNodes.get(e);return void 0!==r?(r.addInertRoot(t),r.ensureUntabbable()):r=new i(e,t),this._managedNodes.set(e,r),r}},{key:"deregister",value:function(e,t){var r=this._managedNodes.get(e);return r?(r.removeInertRoot(t),r.destroyed&&this._managedNodes.delete(e),r):null}},{key:"_onDocumentLoaded",value:function(){var e=Array.from(this._document.querySelectorAll("[inert]")),t=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;this.setInert(a,!0)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}this._observer.observe(this._document.body,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(e,t){var r=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value;switch(s.type){case"childList":var d=!0,u=!1,l=void 0;try{for(var h,c=Array.from(s.addedNodes)[Symbol.iterator]();!(d=(h=c.next()).done);d=!0){var f=h.value;if(f.nodeType===Node.ELEMENT_NODE){var v=Array.from(f.querySelectorAll("[inert]"));f.matches("[inert]")&&v.unshift(f);var y=!0,_=!1,b=void 0;try{for(var m,g=v[Symbol.iterator]();!(y=(m=g.next()).done);y=!0){var N=m.value;this.setInert(N,!0)}}catch(e){_=!0,b=e}finally{try{!y&&g.return&&g.return()}finally{if(_)throw b}}}}}catch(e){u=!0,l=e}finally{try{!d&&c.return&&c.return()}finally{if(u)throw l}}break;case"attributes":if("inert"!==s.attributeName)continue;var w=s.target,I=w.hasAttribute("inert");this.setInert(w,I)}}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}}]),e}(),s=new a(e);Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){s.setInert(this,e)}})}(document);