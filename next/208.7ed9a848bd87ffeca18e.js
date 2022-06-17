(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{"4leg":function(t,e,r){"use strict";r.r(e),r.d(e,"Table",(function(){return yt})),r.d(e,"createTable",(function(){return wt})),r.d(e,"default",(function(){return yt}));var o,n,a=r("jgtz"),i=r("Dsue"),l=r("geR4"),s=r("jgEa"),c=r("aGmo"),d=r("7bKp");if("undefined"!=typeof WeakMap){var p=new WeakMap;o=function(t){return p.get(t)},n=function(t,e){return p.set(t,e),e}}else{var h=[],f=0;o=function(t){for(var e=0;e<h.length;e+=2)if(h[e]==t)return h[e+1]},n=function(t,e){return 10==f&&(f=0),h[f++]=t,h[f++]=e}}var u=function(t,e,r,o){this.left=t,this.top=e,this.right=r,this.bottom=o},v=function(t,e,r,o){this.width=t,this.height=e,this.map=r,this.problems=o};function m(t){if(t.colwidth)return t.colwidth.slice();for(var e=[],r=0;r<t.colspan;r++)e.push(0);return e}function w(t){var e=t.cached.tableNodeTypes;if(!e)for(var r in e=t.cached.tableNodeTypes={},t.nodes){var o=t.nodes[r],n=o.spec.tableRole;n&&(e[n]=o)}return e}v.prototype.findCell=function(t){for(var e=0;e<this.map.length;e++){var r=this.map[e];if(r==t){for(var o=e%this.width,n=e/this.width|0,a=o+1,i=n+1,l=1;a<this.width&&this.map[e+l]==r;l++)a++;for(var s=1;i<this.height&&this.map[e+this.width*s]==r;s++)i++;return new u(o,n,a,i)}}throw new RangeError("No cell with offset "+t+" found")},v.prototype.colCount=function(t){for(var e=0;e<this.map.length;e++)if(this.map[e]==t)return e%this.width;throw new RangeError("No cell with offset "+t+" found")},v.prototype.nextCell=function(t,e,r){var o=this.findCell(t),n=o.left,a=o.right,i=o.top,l=o.bottom;return"horiz"==e?(r<0?0==n:a==this.width)?null:this.map[i*this.width+(r<0?n-1:a)]:(r<0?0==i:l==this.height)?null:this.map[n+this.width*(r<0?i-1:l)]},v.prototype.rectBetween=function(t,e){var r=this.findCell(t),o=r.left,n=r.right,a=r.top,i=r.bottom,l=this.findCell(e),s=l.right,c=l.top,d=l.bottom;return new u(Math.min(o,l.left),Math.min(a,c),Math.max(n,s),Math.max(i,d))},v.prototype.cellsInRect=function(t){for(var e=[],r={},o=t.top;o<t.bottom;o++)for(var n=t.left;n<t.right;n++){var a=o*this.width+n,i=this.map[a];r[i]||(r[i]=!0,n==t.left&&n&&this.map[a-1]==i||o==t.top&&o&&this.map[a-this.width]==i||e.push(i))}return e},v.prototype.positionAt=function(t,e,r){for(var o=0,n=0;;o++){var a=n+r.child(o).nodeSize;if(o==t){for(var i=e+t*this.width,l=(t+1)*this.width;i<l&&this.map[i]<n;)i++;return i==l?a-1:this.map[i]}n=a}},v.get=function(t){return o(t)||n(t,function(t){if("table"!=t.type.spec.tableRole)throw new RangeError("Not a table node: "+t.type.name);for(var e=function(t){for(var e=-1,r=!1,o=0;o<t.childCount;o++){var n=t.child(o),a=0;if(r)for(var i=0;i<o;i++)for(var l=t.child(i),s=0;s<l.childCount;s++){var c=l.child(s);i+c.attrs.rowspan>o&&(a+=c.attrs.colspan)}for(var d=0;d<n.childCount;d++){var p=n.child(d);a+=p.attrs.colspan,p.attrs.rowspan>1&&(r=!0)}-1==e?e=a:e!=a&&(e=Math.max(e,a))}return e}(t),r=t.childCount,o=[],n=0,a=null,i=[],l=0,s=e*r;l<s;l++)o[l]=0;for(var c=0,d=0;c<r;c++){var p=t.child(c);d++;for(var h=0;;h++){for(;n<o.length&&0!=o[n];)n++;if(h==p.childCount)break;for(var f=p.child(h),u=f.attrs,w=u.colspan,g=u.rowspan,b=u.colwidth,C=0;C<g;C++){if(C+c>=r){(a||(a=[])).push({type:"overlong_rowspan",pos:d,n:g-C});break}for(var y=n+C*e,S=0;S<w;S++){0==o[y+S]?o[y+S]=d:(a||(a=[])).push({type:"collision",row:c,pos:d,n:w-S});var A=b&&b[S];if(A){var $=(y+S)%e*2,M=i[$];null==M||M!=A&&1==i[$+1]?(i[$]=A,i[$+1]=1):M==A&&i[$+1]++}}}n+=w,d+=f.nodeSize}for(var R=(c+1)*e,N=0;n<R;)0==o[n++]&&N++;N&&(a||(a=[])).push({type:"missing",row:c,n:N}),d++}for(var z=new v(e,r,o,a),x=!1,k=0;!x&&k<i.length;k+=2)null!=i[k]&&i[k+1]<r&&(x=!0);return x&&function(t,e,r){t.problems||(t.problems=[]);for(var o=0,n={};o<t.map.length;o++){var a=t.map[o];if(!n[a]){n[a]=!0;for(var i=r.nodeAt(a),l=null,s=0;s<i.attrs.colspan;s++){var c=e[(o+s)%t.width*2];null==c||i.attrs.colwidth&&i.attrs.colwidth[s]==c||((l||(l=m(i.attrs)))[s]=c)}l&&t.problems.unshift({type:"colwidth mismatch",pos:a,colwidth:l})}}}(z,i,t),z}(t))};var g=new i.e("selectingCells");function b(t){for(var e=t.depth-1;e>0;e--)if("row"==t.node(e).type.spec.tableRole)return t.node(0).resolve(t.before(e+1));return null}function C(t){for(var e=t.selection.$head,r=e.depth;r>0;r--)if("row"==e.node(r).type.spec.tableRole)return!0;return!1}function y(t){var e=t.selection;return e.$anchorCell?e.$anchorCell.pos>e.$headCell.pos?e.$anchorCell:e.$headCell:e.node&&"cell"==e.node.type.spec.tableRole?e.$anchor:b(e.$head)||function(t){for(var e=t.nodeAfter,r=t.pos;e;e=e.firstChild,r++){var o=e.type.spec.tableRole;if("cell"==o||"header_cell"==o)return t.doc.resolve(r)}for(var n=t.nodeBefore,a=t.pos;n;n=n.lastChild,a--){var i=n.type.spec.tableRole;if("cell"==i||"header_cell"==i)return t.doc.resolve(a-n.nodeSize)}}(e.$head)}function S(t){return"row"==t.parent.type.spec.tableRole&&t.nodeAfter}function A(t,e){return t.depth==e.depth&&t.pos>=e.start(-1)&&t.pos<=e.end(-1)}function $(t,e,r){var o=t.start(-1),n=v.get(t.node(-1)).nextCell(t.pos-o,e,r);return null==n?null:t.node(0).resolve(o+n)}function M(t,e,r){var o={};for(var n in t)o[n]=t[n];return o[e]=r,o}function R(t,e,r){void 0===r&&(r=1);var o=M(t,"colspan",t.colspan-r);return o.colwidth&&(o.colwidth=o.colwidth.slice(),o.colwidth.splice(e,r),o.colwidth.some((function(t){return t>0}))||(o.colwidth=null)),o}function N(t,e,r){void 0===r&&(r=1);var o=M(t,"colspan",t.colspan+r);if(o.colwidth){o.colwidth=o.colwidth.slice();for(var n=0;n<r;n++)o.colwidth.splice(e,0,0)}return o}var z=function(t){function e(e,r){void 0===r&&(r=e);var o=e.node(-1),n=v.get(o),a=e.start(-1),l=n.rectBetween(e.pos-a,r.pos-a),s=e.node(0),c=n.cellsInRect(l).filter((function(t){return t!=r.pos-a}));c.unshift(r.pos-a);var d=c.map((function(t){var e=o.nodeAt(t),r=t+a+1;return new i.g(s.resolve(r),s.resolve(r+e.content.size))}));t.call(this,d[0].$from,d[0].$to,d),this.$anchorCell=e,this.$headCell=r}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.map=function(t,r){var o=t.resolve(r.map(this.$anchorCell.pos)),n=t.resolve(r.map(this.$headCell.pos));if(S(o)&&S(n)&&A(o,n)){var a=this.$anchorCell.node(-1)!=o.node(-1);return a&&this.isRowSelection()?e.rowSelection(o,n):a&&this.isColSelection()?e.colSelection(o,n):new e(o,n)}return i.h.between(o,n)},e.prototype.content=function(){for(var t=this.$anchorCell.node(-1),e=v.get(t),r=this.$anchorCell.start(-1),o=e.rectBetween(this.$anchorCell.pos-r,this.$headCell.pos-r),n={},a=[],i=o.top;i<o.bottom;i++){for(var s=[],c=i*e.width+o.left,d=o.left;d<o.right;d++,c++){var p=e.map[c];if(!n[p]){n[p]=!0;var h=e.findCell(p),f=t.nodeAt(p),u=o.left-h.left,m=h.right-o.right;if(u>0||m>0){var w=f.attrs;u>0&&(w=R(w,0,u)),m>0&&(w=R(w,w.colspan-m,m)),f=h.left<o.left?f.type.createAndFill(w):f.type.create(w,f.content)}if(h.top<o.top||h.bottom>o.bottom){var g=M(f.attrs,"rowspan",Math.min(h.bottom,o.bottom)-Math.max(h.top,o.top));f=h.top<o.top?f.type.createAndFill(g):f.type.create(g,f.content)}s.push(f)}}a.push(t.child(i).copy(l.c.from(s)))}var b=this.isColSelection()&&this.isRowSelection()?t:a;return new l.j(l.c.from(b),1,1)},e.prototype.replace=function(e,r){void 0===r&&(r=l.j.empty);for(var o=e.steps.length,n=this.ranges,a=0;a<n.length;a++){var i=n[a],s=i.$from,c=i.$to,d=e.mapping.slice(o);e.replace(d.map(s.pos),d.map(c.pos),a?l.j.empty:r)}var p=t.findFrom(e.doc.resolve(e.mapping.slice(o).map(this.to)),-1);p&&e.setSelection(p)},e.prototype.replaceWith=function(t,e){this.replace(t,new l.j(l.c.from(e),0,0))},e.prototype.forEachCell=function(t){for(var e=this.$anchorCell.node(-1),r=v.get(e),o=this.$anchorCell.start(-1),n=r.cellsInRect(r.rectBetween(this.$anchorCell.pos-o,this.$headCell.pos-o)),a=0;a<n.length;a++)t(e.nodeAt(n[a]),o+n[a])},e.prototype.isColSelection=function(){var t=this.$anchorCell.index(-1),e=this.$headCell.index(-1);return!(Math.min(t,e)>0)&&Math.max(t+this.$anchorCell.nodeAfter.attrs.rowspan,e+this.$headCell.nodeAfter.attrs.rowspan)==this.$headCell.node(-1).childCount},e.colSelection=function(t,r){void 0===r&&(r=t);var o=v.get(t.node(-1)),n=t.start(-1),a=o.findCell(t.pos-n),i=o.findCell(r.pos-n),l=t.node(0);return a.top<=i.top?(a.top>0&&(t=l.resolve(n+o.map[a.left])),i.bottom<o.height&&(r=l.resolve(n+o.map[o.width*(o.height-1)+i.right-1]))):(i.top>0&&(r=l.resolve(n+o.map[i.left])),a.bottom<o.height&&(t=l.resolve(n+o.map[o.width*(o.height-1)+a.right-1]))),new e(t,r)},e.prototype.isRowSelection=function(){var t=v.get(this.$anchorCell.node(-1)),e=this.$anchorCell.start(-1),r=t.colCount(this.$anchorCell.pos-e),o=t.colCount(this.$headCell.pos-e);return!(Math.min(r,o)>0)&&Math.max(r+this.$anchorCell.nodeAfter.attrs.colspan,o+this.$headCell.nodeAfter.attrs.colspan)==t.width},e.prototype.eq=function(t){return t instanceof e&&t.$anchorCell.pos==this.$anchorCell.pos&&t.$headCell.pos==this.$headCell.pos},e.rowSelection=function(t,r){void 0===r&&(r=t);var o=v.get(t.node(-1)),n=t.start(-1),a=o.findCell(t.pos-n),i=o.findCell(r.pos-n),l=t.node(0);return a.left<=i.left?(a.left>0&&(t=l.resolve(n+o.map[a.top*o.width])),i.right<o.width&&(r=l.resolve(n+o.map[o.width*(i.top+1)-1]))):(i.left>0&&(r=l.resolve(n+o.map[i.top*o.width])),a.right<o.width&&(t=l.resolve(n+o.map[o.width*(a.top+1)-1]))),new e(t,r)},e.prototype.toJSON=function(){return{type:"cell",anchor:this.$anchorCell.pos,head:this.$headCell.pos}},e.fromJSON=function(t,r){return new e(t.resolve(r.anchor),t.resolve(r.head))},e.create=function(t,r,o){return void 0===o&&(o=r),new e(t.resolve(r),t.resolve(o))},e.prototype.getBookmark=function(){return new x(this.$anchorCell.pos,this.$headCell.pos)},e}(i.f);z.prototype.visible=!1,i.f.jsonID("cell",z);var x=function(t,e){this.anchor=t,this.head=e};function k(t){if(!(t.selection instanceof z))return null;var e=[];return t.selection.forEachCell((function(t,r){e.push(c.a.node(r,r+t.nodeSize,{class:"selectedCell"}))})),c.b.create(t.doc,e)}function T(t,e){var r=t.createAndFill();return new d.d(r).replace(0,r.content.size,e).doc}function E(t,e,r,o,n,a,i,l){if(0==i||i==e.height)return!1;for(var s=!1,c=n;c<a;c++){var d=i*e.width+c,p=e.map[d];if(e.map[d-e.width]==p){s=!0;var h=r.nodeAt(p),f=e.findCell(p),u=f.top,v=f.left;t.setNodeMarkup(t.mapping.slice(l).map(p+o),null,M(h.attrs,"rowspan",i-u)),t.insert(t.mapping.slice(l).map(e.positionAt(i,v,r)),h.type.createAndFill(M(h.attrs,"rowspan",u+h.attrs.rowspan-i))),c+=h.attrs.colspan-1}}return s}function H(t,e,r,o,n,a,i,l){if(0==i||i==e.width)return!1;for(var s=!1,c=n;c<a;c++){var d=c*e.width+i,p=e.map[d];if(e.map[d-1]==p){s=!0;var h=r.nodeAt(p),f=e.colCount(p),u=t.mapping.slice(l).map(p+o);t.setNodeMarkup(u,null,R(h.attrs,i-f,h.attrs.colspan-(i-f))),t.insert(u+h.nodeSize,h.type.createAndFill(R(h.attrs,0,i-f))),c+=h.attrs.rowspan-1}}return s}function D(t,e,r,o,n){var a=r?t.doc.nodeAt(r-1):t.doc,i=v.get(a),s=o.top,c=o.left,d=c+n.width,p=s+n.height,h=t.tr,f=0;function u(){a=r?h.doc.nodeAt(r-1):h.doc,i=v.get(a),f=h.mapping.maps.length}(function(t,e,r,o,n,a,i){var s,c,d=w(t.doc.type.schema);if(n>e.width)for(var p=0,h=0;p<e.height;p++){var f=r.child(p);h+=f.nodeSize;var u,v=[];u=null==f.lastChild||f.lastChild.type==d.cell?s||(s=d.cell.createAndFill()):c||(c=d.header_cell.createAndFill());for(var m=e.width;m<n;m++)v.push(u);t.insert(t.mapping.slice(i).map(h-1+o),v)}if(a>e.height){for(var g=[],b=0,C=(e.height-1)*e.width;b<Math.max(e.width,n);b++){var y=!(b>=e.width)&&r.nodeAt(e.map[C+b]).type==d.header_cell;g.push(y?c||(c=d.header_cell.createAndFill()):s||(s=d.cell.createAndFill()))}for(var S=d.row.create(null,l.c.from(g)),A=[],$=e.height;$<a;$++)A.push(S);t.insert(t.mapping.slice(i).map(o+r.nodeSize-2),A)}return!(!s&&!c)})(h,i,a,r,d,p,f)&&u(),E(h,i,a,r,c,d,s,f)&&u(),E(h,i,a,r,c,d,p,f)&&u(),H(h,i,a,r,s,p,c,f)&&u(),H(h,i,a,r,s,p,d,f)&&u();for(var m=s;m<p;m++){var g=i.positionAt(m,c,a),b=i.positionAt(m,d,a);h.replace(h.mapping.slice(f).map(g+r),h.mapping.slice(f).map(b+r),new l.j(n.rows[m-s],0,0))}u(),h.setSelection(new z(h.doc.resolve(r+i.positionAt(s,c,a)),h.doc.resolve(r+i.positionAt(p-1,d-1,a)))),e(h)}x.prototype.map=function(t){return new x(t.map(this.anchor),t.map(this.head))},x.prototype.resolve=function(t){var e=t.resolve(this.anchor),r=t.resolve(this.head);return"row"==e.parent.type.spec.tableRole&&"row"==r.parent.type.spec.tableRole&&e.index()<e.parent.childCount&&r.index()<r.parent.childCount&&A(e,r)?new z(e,r):i.f.near(r,1)};var W=Object(s.a)({ArrowLeft:L("horiz",-1),ArrowRight:L("horiz",1),ArrowUp:L("vert",-1),ArrowDown:L("vert",1),"Shift-ArrowLeft":B("horiz",-1),"Shift-ArrowRight":B("horiz",1),"Shift-ArrowUp":B("vert",-1),"Shift-ArrowDown":B("vert",1),Backspace:O,"Mod-Backspace":O,Delete:O,"Mod-Delete":O});function _(t,e,r){return!r.eq(t.selection)&&(e&&e(t.tr.setSelection(r).scrollIntoView()),!0)}function L(t,e){return function(r,o,n){var a=r.selection;if(a instanceof z)return _(r,o,i.f.near(a.$headCell,e));if("horiz"!=t&&!a.empty)return!1;var l=P(n,t,e);if(null==l)return!1;if("horiz"==t)return _(r,o,i.f.near(r.doc.resolve(a.head+e),e));var s,c=r.doc.resolve(l),d=$(c,t,e);return s=d?i.f.near(d,1):e<0?i.f.near(r.doc.resolve(c.before(-1)),-1):i.f.near(r.doc.resolve(c.after(-1)),1),_(r,o,s)}}function B(t,e){return function(r,o,n){var a=r.selection;if(!(a instanceof z)){var i=P(n,t,e);if(null==i)return!1;a=new z(r.doc.resolve(i))}var l=$(a.$headCell,t,e);return!!l&&_(r,o,new z(a.$anchorCell,l))}}function O(t,e){var r=t.selection;if(!(r instanceof z))return!1;if(e){var o=t.tr,n=w(t.schema).cell.createAndFill().content;r.forEachCell((function(t,e){t.content.eq(n)||o.replace(o.mapping.map(e+1),o.mapping.map(e+t.nodeSize-1),new l.j(n,0,0))})),o.docChanged&&e(o)}return!0}function j(t,e){var r=b(t.state.doc.resolve(e));return!!r&&(t.dispatch(t.state.tr.setSelection(new z(r))),!0)}function F(t,e,r){if(!C(t.state))return!1;var o=function(t){if(!t.size)return null;for(var e=t.content,r=t.openStart,o=t.openEnd;1==e.childCount&&(r>0&&o>0||"table"==e.firstChild.type.spec.tableRole);)r--,o--,e=e.firstChild.content;var n=e.firstChild,a=n.type.spec.tableRole,i=n.type.schema,s=[];if("row"==a)for(var c=0;c<e.childCount;c++){var d=e.child(c).content,p=c?0:Math.max(0,r-1),h=c<e.childCount-1?0:Math.max(0,o-1);(p||h)&&(d=T(w(i).row,new l.j(d,p,h)).content),s.push(d)}else{if("cell"!=a&&"header_cell"!=a)return null;s.push(r||o?T(w(i).row,new l.j(e,r,o)).content:e)}return function(t,e){for(var r=[],o=0;o<e.length;o++)for(var n=e[o],a=n.childCount-1;a>=0;a--)for(var i=n.child(a).attrs,s=i.rowspan,c=i.colspan,d=o;d<o+s;d++)r[d]=(r[d]||0)+c;for(var p=0,h=0;h<r.length;h++)p=Math.max(p,r[h]);for(var f=0;f<r.length;f++)if(f>=e.length&&e.push(l.c.empty),r[f]<p){for(var u=w(t).cell.createAndFill(),v=[],m=r[f];m<p;m++)v.push(u);e[f]=e[f].append(l.c.from(v))}return{height:e.length,width:p,rows:e}}(i,s)}(r),n=t.state.selection;if(n instanceof z){o||(o={width:1,height:1,rows:[l.c.from(T(w(t.state.schema).cell,r))]});var a=n.$anchorCell.node(-1),i=n.$anchorCell.start(-1),s=v.get(a).rectBetween(n.$anchorCell.pos-i,n.$headCell.pos-i);return o=function(t,e,r){var o=t.width,n=t.height,a=t.rows;if(o!=e){for(var i=[],s=[],c=0;c<a.length;c++){for(var d=a[c],p=[],h=i[c]||0,f=0;h<e;f++){var u=d.child(f%d.childCount);h+u.attrs.colspan>e&&(u=u.type.create(R(u.attrs,u.attrs.colspan,h+u.attrs.colspan-e),u.content)),p.push(u),h+=u.attrs.colspan;for(var v=1;v<u.attrs.rowspan;v++)i[c+v]=(i[c+v]||0)+u.attrs.colspan}s.push(l.c.from(p))}a=s,o=e}if(n!=r){for(var m=[],w=0,g=0;w<r;w++,g++){for(var b=[],C=a[g%n],y=0;y<C.childCount;y++){var S=C.child(y);w+S.attrs.rowspan>r&&(S=S.type.create(M(S.attrs,"rowspan",Math.max(1,r-S.attrs.rowspan)),S.content)),b.push(S)}m.push(l.c.from(b))}a=m,n=r}return{width:o,height:n,rows:a}}(o,s.right-s.left,s.bottom-s.top),D(t.state,t.dispatch,i,s,o),!0}if(o){var c=y(t.state),d=c.start(-1);return D(t.state,t.dispatch,d,v.get(c.node(-1)).findCell(c.pos-d),o),!0}return!1}function I(t,e){if(!e.ctrlKey&&!e.metaKey){var r,o=V(t,e.target);if(e.shiftKey&&t.state.selection instanceof z)n(t.state.selection.$anchorCell,e),e.preventDefault();else if(e.shiftKey&&o&&null!=(r=b(t.state.selection.$anchor))&&X(t,e).pos!=r.pos)n(r,e),e.preventDefault();else if(!o)return;t.root.addEventListener("mouseup",a),t.root.addEventListener("dragstart",a),t.root.addEventListener("mousemove",i)}function n(e,r){var o=X(t,r),n=null==g.getState(t.state);if(!o||!A(e,o)){if(!n)return;o=e}var a=new z(e,o);if(n||!t.state.selection.eq(a)){var i=t.state.tr.setSelection(a);n&&i.setMeta(g,e.pos),t.dispatch(i)}}function a(){t.root.removeEventListener("mouseup",a),t.root.removeEventListener("dragstart",a),t.root.removeEventListener("mousemove",i),null!=g.getState(t.state)&&t.dispatch(t.state.tr.setMeta(g,-1))}function i(r){var i,l=g.getState(t.state);if(null!=l)i=t.state.doc.resolve(l);else if(V(t,r.target)!=o&&!(i=X(t,e)))return a();i&&n(i,r)}}function P(t,e,r){if(!(t.state.selection instanceof i.h))return null;for(var o=t.state.selection.$head,n=o.depth-1;n>=0;n--){var a=o.node(n);if((r<0?o.index(n):o.indexAfter(n))!=(r<0?0:a.childCount))return null;if("cell"==a.type.spec.tableRole||"header_cell"==a.type.spec.tableRole){var l=o.before(n);return t.endOfTextblock("vert"==e?r>0?"down":"up":r>0?"right":"left")?l:null}}return null}function V(t,e){for(;e&&e!=t.dom;e=e.parentNode)if("TD"==e.nodeName||"TH"==e.nodeName)return e}function X(t,e){var r=t.posAtCoords({left:e.clientX,top:e.clientY});return r&&r?b(t.state.doc.resolve(r.pos)):null}var K=new i.e("fix-tables");function q(t,e){var r,o=function(e,o){"table"==e.type.spec.tableRole&&(r=function(t,e,r,o){var n=v.get(e);if(!n.problems)return o;o||(o=t.tr);for(var a,i,l=[],s=0;s<n.height;s++)l.push(0);for(var c=0;c<n.problems.length;c++){var d=n.problems[c];if("collision"==d.type){for(var p=e.nodeAt(d.pos),h=0;h<p.attrs.rowspan;h++)l[d.row+h]+=d.n;o.setNodeMarkup(o.mapping.map(r+1+d.pos),null,R(p.attrs,p.attrs.colspan-d.n,d.n))}else if("missing"==d.type)l[d.row]+=d.n;else if("overlong_rowspan"==d.type){var f=e.nodeAt(d.pos);o.setNodeMarkup(o.mapping.map(r+1+d.pos),null,M(f.attrs,"rowspan",f.attrs.rowspan-d.n))}else if("colwidth mismatch"==d.type){var u=e.nodeAt(d.pos);o.setNodeMarkup(o.mapping.map(r+1+d.pos),null,M(u.attrs,"colwidth",d.colwidth))}}for(var m=0;m<l.length;m++)l[m]&&(null==a&&(a=m),i=m);for(var g=0,b=r+1;g<n.height;g++){var C=e.child(g),y=b+C.nodeSize,S=l[g];if(S>0){var A="cell";C.firstChild&&(A=C.firstChild.type.spec.tableRole);for(var $=[],N=0;N<S;N++)$.push(w(t.schema)[A].createAndFill());o.insert(o.mapping.map(0!=g&&a!=g-1||i!=g?y-1:b+1),$)}b=y}return o.setMeta(K,{fixTables:!0})}(t,e,o,r))};return e?e.doc!=t.doc&&function t(e,r,o,n){var a=e.childCount,i=r.childCount;t:for(var l=0,s=0;l<i;l++){for(var c=r.child(l),d=s,p=Math.min(a,l+3);d<p;d++)if(e.child(d)==c){s=d+1,o+=c.nodeSize;continue t}n(c,o),s<a&&e.child(s).sameMarkup(c)?t(e.child(s),c,o+1,n):c.nodesBetween(0,c.content.size,n,o+1),o+=c.nodeSize}}(e.doc,t.doc,0,o):t.doc.descendants(o),r}function J(t){var e,r=t.selection,o=y(t),n=o.node(-1),a=o.start(-1),i=v.get(n);return(e=r instanceof z?i.rectBetween(r.$anchorCell.pos-a,r.$headCell.pos-a):i.findCell(o.pos-a)).tableStart=a,e.map=i,e.table=n,e}function U(t,e,r){var o=e.map,n=e.tableStart,a=e.table,i=r>0?-1:0;(function(t,e,r){for(var o=w(e.type.schema).header_cell,n=0;n<t.height;n++)if(e.nodeAt(t.map[r+n*t.width]).type!=o)return!1;return!0})(o,a,r+i)&&(i=0==r||r==o.width?null:0);for(var l=0;l<o.height;l++){var s=l*o.width+r;if(r>0&&r<o.width&&o.map[s-1]==o.map[s]){var c=o.map[s],d=a.nodeAt(c);t.setNodeMarkup(t.mapping.map(n+c),null,N(d.attrs,r-o.colCount(c))),l+=d.attrs.rowspan-1}else{var p=null==i?w(a.type.schema).cell:a.nodeAt(o.map[s+i]).type,h=o.positionAt(l,r,a);t.insert(t.mapping.map(n+h),p.createAndFill())}}return t}function Y(t,e,r){for(var o=e.map,n=e.table,a=e.tableStart,i=t.mapping.maps.length,l=0;l<o.height;){var s=l*o.width+r,c=o.map[s],d=n.nodeAt(c);if(r>0&&o.map[s-1]==c||r<o.width-1&&o.map[s+1]==c)t.setNodeMarkup(t.mapping.slice(i).map(a+c),null,R(d.attrs,r-o.colCount(c)));else{var p=t.mapping.slice(i).map(a+c);t.delete(p,p+d.nodeSize)}l+=d.attrs.rowspan}}function G(t,e,r){for(var o=e.map,n=e.tableStart,a=e.table,i=n,l=0;l<r;l++)i+=a.child(l).nodeSize;var s=[],c=r>0?-1:0;(function(t,e,r){for(var o=w(e.type.schema).header_cell,n=0;n<t.width;n++)if(e.nodeAt(t.map[n+r*t.width]).type!=o)return!1;return!0})(o,a,r+c)&&(c=0==r||r==o.height?null:0);for(var d=0,p=o.width*r;d<o.width;d++,p++)if(r>0&&r<o.height&&o.map[p]==o.map[p-o.width]){var h=o.map[p],f=a.nodeAt(h).attrs;t.setNodeMarkup(n+h,null,M(f,"rowspan",f.rowspan+1)),d+=f.colspan-1}else{var u=null==c?w(a.type.schema).cell:a.nodeAt(o.map[p+c*o.width]).type;s.push(u.createAndFill())}return t.insert(i,w(a.type.schema).row.create(null,s)),t}function Q(t,e,r){for(var o=e.map,n=e.table,a=e.tableStart,i=0,l=0;l<r;l++)i+=n.child(l).nodeSize;var s=i+n.child(r).nodeSize,c=t.mapping.maps.length;t.delete(i+a,s+a);for(var d=0,p=r*o.width;d<o.width;d++,p++){var h=o.map[p];if(r>0&&h==o.map[p-o.width]){var f=n.nodeAt(h).attrs;t.setNodeMarkup(t.mapping.slice(c).map(h+a),null,M(f,"rowspan",f.rowspan-1)),d+=f.colspan-1}else if(r<o.width&&h==o.map[p+o.width]){var u=n.nodeAt(h),v=u.type.create(M(u.attrs,"rowspan",u.attrs.rowspan-1),u.content),m=o.positionAt(r+1,d,n);t.insert(t.mapping.slice(c).map(a+m),v),d+=u.attrs.colspan-1}}}function Z(t){var e=t.content;return 1==e.childCount&&e.firstChild.isTextblock&&0==e.firstChild.childCount}function tt(t,e){var r=t.selection;if(!(r instanceof z)||r.$anchorCell.pos==r.$headCell.pos)return!1;var o=J(t),n=o.map;if(function(t,e){for(var r=t.width,o=t.height,n=t.map,a=e.top*r+e.left,i=a,l=(e.bottom-1)*r+e.left,s=a+(e.right-e.left-1),c=e.top;c<e.bottom;c++){if(e.left>0&&n[i]==n[i-1]||e.right<r&&n[s]==n[s+1])return!0;i+=r,s+=r}for(var d=e.left;d<e.right;d++){if(e.top>0&&n[a]==n[a-r]||e.bottom<o&&n[l]==n[l+r])return!0;a++,l++}return!1}(n,o))return!1;if(e){for(var a,i,s=t.tr,c={},d=l.c.empty,p=o.top;p<o.bottom;p++)for(var h=o.left;h<o.right;h++){var f=n.map[p*n.width+h],u=o.table.nodeAt(f);if(!c[f])if(c[f]=!0,null==a)a=f,i=u;else{Z(u)||(d=d.append(u.content));var v=s.mapping.map(f+o.tableStart);s.delete(v,v+u.nodeSize)}}if(s.setNodeMarkup(a+o.tableStart,null,M(N(i.attrs,i.attrs.colspan,o.right-o.left-i.attrs.colspan),"rowspan",o.bottom-o.top)),d.size){var m=a+1+i.content.size,w=Z(i)?a+1:m;s.replaceWith(w+o.tableStart,m+o.tableStart,d)}s.setSelection(new z(s.doc.resolve(a+o.tableStart))),e(s)}return!0}function et(t,e){var r,o=w(t.schema);return(r=function(t){return o[t.node.type.spec.tableRole]},function(t,e){var o,n,a=t.selection;if(a instanceof z){if(a.$anchorCell.pos!=a.$headCell.pos)return!1;o=a.$anchorCell.nodeAfter,n=a.$anchorCell.pos}else{if(!(o=function(t){for(var e=t.depth;e>0;e--){var r=t.node(e).type.spec.tableRole;if("cell"===r||"header_cell"===r)return t.node(e)}return null}(a.$from)))return!1;n=b(a.$from).pos}if(1==o.attrs.colspan&&1==o.attrs.rowspan)return!1;if(e){var i=o.attrs,l=[],s=i.colwidth;i.rowspan>1&&(i=M(i,"rowspan",1)),i.colspan>1&&(i=M(i,"colspan",1));for(var c,d=J(t),p=t.tr,h=0;h<d.right-d.left;h++)l.push(s?M(i,"colwidth",s&&s[h]?[s[h]]:null):i);for(var f=d.top;f<d.bottom;f++){var u=d.map.positionAt(f,d.left,d.table);f==d.top&&(u+=o.nodeSize);for(var v=d.left,m=0;v<d.right;v++,m++)v==d.left&&f==d.top||p.insert(c=p.mapping.map(u+d.tableStart,1),r({node:o,row:f,col:v}).createAndFill(l[m]))}p.setNodeMarkup(n,r({node:o,row:d.top,col:d.left}),l[0]),a instanceof z&&p.setSelection(new z(p.doc.resolve(a.$anchorCell.pos),c&&p.doc.resolve(c))),e(p)}return!0})(t,e)}function rt(t,e,r){for(var o=e.map.cellsInRect({left:0,top:0,right:"row"==t?e.map.width:1,bottom:"column"==t?e.map.height:1}),n=0;n<o.length;n++){var a=e.table.nodeAt(o[n]);if(a&&a.type!==r.header_cell)return!1}return!0}function ot(t,e){return(e=e||{useDeprecatedLogic:!1}).useDeprecatedLogic?function(t){return function(e,r){if(!C(e))return!1;if(r){for(var o=w(e.schema),n=J(e),a=e.tr,i=n.map.cellsInRect("column"==t?new u(n.left,0,n.right,n.map.height):"row"==t?new u(0,n.top,n.map.width,n.bottom):n),l=i.map((function(t){return n.table.nodeAt(t)})),s=0;s<i.length;s++)l[s].type==o.header_cell&&a.setNodeMarkup(n.tableStart+i[s],o.cell,l[s].attrs);if(0==a.steps.length)for(var c=0;c<i.length;c++)a.setNodeMarkup(n.tableStart+i[c],o.header_cell,l[c].attrs);r(a)}return!0}}(t):function(e,r){if(!C(e))return!1;if(r){var o=w(e.schema),n=J(e),a=e.tr,i=rt("row",n,o),l=rt("column",n,o),s=("column"===t?i:"row"===t&&l)?1:0,c="column"==t?new u(0,s,1,n.map.height):"row"==t?new u(s,0,n.map.width,1):n,d="column"==t?l?o.cell:o.header_cell:"row"==t?i?o.cell:o.header_cell:o.cell;n.map.cellsInRect(c).forEach((function(t){var e=t+n.tableStart,r=a.doc.nodeAt(e);r&&a.setNodeMarkup(e,d,r.attrs)})),r(a)}return!0}}ot("row",{useDeprecatedLogic:!0}),ot("column",{useDeprecatedLogic:!0});var nt=ot("cell",{useDeprecatedLogic:!0});function at(t){return function(e,r){if(!C(e))return!1;var o=function(t,e){if(e<0){var r=t.nodeBefore;if(r)return t.pos-r.nodeSize;for(var o=t.index(-1)-1,n=t.before();o>=0;o--){var a=t.node(-1).child(o);if(a.childCount)return n-1-a.lastChild.nodeSize;n-=a.nodeSize}}else{if(t.index()<t.parent.childCount-1)return t.pos+t.nodeAfter.nodeSize;for(var i=t.node(-1),l=t.indexAfter(-1),s=t.after();l<i.childCount;l++){var c=i.child(l);if(c.childCount)return s+1;s+=c.nodeSize}}}(y(e),t);if(null!=o){if(r){var n=e.doc.resolve(o);r(e.tr.setSelection(i.h.between(n,(a=n,a.node(0).resolve(a.pos+a.nodeAfter.nodeSize)))).scrollIntoView())}var a;return!0}}}var it=function(t,e){this.node=t,this.cellMinWidth=e,this.dom=document.createElement("div"),this.dom.className="tableWrapper",this.table=this.dom.appendChild(document.createElement("table")),this.colgroup=this.table.appendChild(document.createElement("colgroup")),lt(t,this.colgroup,this.table,e),this.contentDOM=this.table.appendChild(document.createElement("tbody"))};function lt(t,e,r,o,n,a){for(var i=0,l=!0,s=e.firstChild,c=t.firstChild,d=0,p=0;d<c.childCount;d++)for(var h=c.child(d).attrs,f=h.colspan,u=h.colwidth,v=0;v<f;v++,p++){var m=n==p?a:u&&u[v],w=m?m+"px":"";i+=m||o,m||(l=!1),s?(s.style.width!=w&&(s.style.width=w),s=s.nextSibling):e.appendChild(document.createElement("col")).style.width=w}for(;s;){var g=s.nextSibling;s.parentNode.removeChild(s),s=g}l?(r.style.width=i+"px",r.style.minWidth=""):(r.style.width="",r.style.minWidth=i+"px")}it.prototype.update=function(t){return t.type==this.node.type&&(this.node=t,lt(t,this.colgroup,this.table,this.cellMinWidth),!0)},it.prototype.ignoreMutation=function(t){return"attributes"==t.type&&(t.target==this.table||this.colgroup.contains(t.target))};var st=new i.e("tableColumnResizing");function ct(t){void 0===t&&(t={});var e=t.handleWidth;void 0===e&&(e=5);var r=t.cellMinWidth;void 0===r&&(r=25);var o=t.View;void 0===o&&(o=it);var n=t.lastColumnResizable;return void 0===n&&(n=!0),new i.d({key:st,state:{init:function(t,e){return this.spec.props.nodeViews[w(e.schema).table.name]=function(t,e){return new o(t,r,e)},new dt(-1,!1)},apply:function(t,e){return e.apply(t)}},props:{attributes:function(t){return st.getState(t).activeHandle>-1?{class:"resize-cursor"}:null},handleDOMEvents:{mousemove:function(t,r){!function(t,e,r,o,n){var a=st.getState(t.state);if(!a.dragging){var i=function(t){for(;t&&"TD"!=t.nodeName&&"TH"!=t.nodeName;)t=t.classList.contains("ProseMirror")?null:t.parentNode;return t}(e.target),l=-1;if(i){var s=i.getBoundingClientRect(),c=s.right;e.clientX-s.left<=r?l=pt(t,e,"left"):c-e.clientX<=r&&(l=pt(t,e,"right"))}if(l!=a.activeHandle){if(!n&&-1!==l){var d=t.state.doc.resolve(l),p=d.node(-1),h=v.get(p),f=d.start(-1);if(h.colCount(d.pos-f)+d.nodeAfter.attrs.colspan-1==h.width-1)return}ft(t,l)}}}(t,r,e,0,n)},mouseleave:function(t){!function(t){var e=st.getState(t.state);e.activeHandle>-1&&!e.dragging&&ft(t,-1)}(t)},mousedown:function(t,e){!function(t,e,r){var o=st.getState(t.state);if(-1==o.activeHandle||o.dragging)return!1;var n=t.state.doc.nodeAt(o.activeHandle),a=function(t,e,r){var o=r.colspan,n=r.colwidth,a=n&&n[n.length-1];if(a)return a;var i=t.domAtPos(e),l=i.node.childNodes[i.offset].offsetWidth,s=o;if(n)for(var c=0;c<o;c++)n[c]&&(l-=n[c],s--);return l/s}(t,o.activeHandle,n.attrs);function i(e){window.removeEventListener("mouseup",i),window.removeEventListener("mousemove",l);var o=st.getState(t.state);o.dragging&&(function(t,e,r){for(var o=t.state.doc.resolve(e),n=o.node(-1),a=v.get(n),i=o.start(-1),l=a.colCount(o.pos-i)+o.nodeAfter.attrs.colspan-1,s=t.state.tr,c=0;c<a.height;c++){var d=c*a.width+l;if(!c||a.map[d]!=a.map[d-a.width]){var p=a.map[d],h=n.nodeAt(p).attrs,f=1==h.colspan?0:l-a.colCount(p);if(!h.colwidth||h.colwidth[f]!=r){var u=h.colwidth?h.colwidth.slice():ut(h.colspan);u[f]=r,s.setNodeMarkup(i+p,null,M(h,"colwidth",u))}}}s.docChanged&&t.dispatch(s)}(t,o.activeHandle,ht(o.dragging,e,r)),t.dispatch(t.state.tr.setMeta(st,{setDragging:null})))}function l(e){if(!e.which)return i(e);var o=st.getState(t.state),n=ht(o.dragging,e,r);!function(t,e,r,o){for(var n=t.state.doc.resolve(e),a=n.node(-1),i=n.start(-1),l=v.get(a).colCount(n.pos-i)+n.nodeAfter.attrs.colspan-1,s=t.domAtPos(n.start(-1)).node;"TABLE"!=s.nodeName;)s=s.parentNode;lt(a,s.firstChild,s,o,l,r)}(t,o.activeHandle,n,r)}t.dispatch(t.state.tr.setMeta(st,{setDragging:{startX:e.clientX,startWidth:a}})),window.addEventListener("mouseup",i),window.addEventListener("mousemove",l),e.preventDefault()}(t,e,r)}},decorations:function(t){var e=st.getState(t);if(e.activeHandle>-1)return function(t,e){for(var r=[],o=t.doc.resolve(e),n=o.node(-1),a=v.get(n),i=o.start(-1),l=a.colCount(o.pos-i)+o.nodeAfter.attrs.colspan,s=0;s<a.height;s++){var d=l+s*a.width-1;if(!(l!=a.width&&a.map[d]==a.map[d+1]||0!=s&&a.map[d-1]==a.map[d-1-a.width])){var p=a.map[d],h=i+p+n.nodeAt(p).nodeSize-1,f=document.createElement("div");f.className="column-resize-handle",r.push(c.a.widget(h,f))}}return c.b.create(t.doc,r)}(t,e.activeHandle)},nodeViews:{}}})}var dt=function(t,e){this.activeHandle=t,this.dragging=e};function pt(t,e,r){var o=t.posAtCoords({left:e.clientX,top:e.clientY});if(!o)return-1;var n=b(t.state.doc.resolve(o.pos));if(!n)return-1;if("right"==r)return n.pos;var a=v.get(n.node(-1)),i=n.start(-1),l=a.map.indexOf(n.pos-i);return l%a.width==0?-1:i+a.map[l-1]}function ht(t,e,r){return Math.max(r,t.startWidth+(e.clientX-t.startX))}function ft(t,e){t.dispatch(t.state.tr.setMeta(st,{setHandle:e}))}function ut(t){for(var e=[],r=0;r<t;r++)e.push(0);return e}function vt(t){void 0===t&&(t={});var e=t.allowTableNodeSelection;return void 0===e&&(e=!1),new i.d({key:g,state:{init:function(){return null},apply:function(t,e){var r=t.getMeta(g);if(null!=r)return-1==r?null:r;if(null==e||!t.docChanged)return e;var o=t.mapping.mapResult(e);return o.deleted?null:o.pos}},props:{decorations:k,handleDOMEvents:{mousedown:I},createSelectionBetween:function(t){if(null!=g.getState(t.state))return t.state.selection},handleTripleClick:j,handleKeyDown:W,handlePaste:F},appendTransaction:function(t,r,o){return function(t,e,r){var o,n,a=(e||t).selection,l=(e||t).doc;if(a instanceof i.c&&(n=a.node.type.spec.tableRole)){if("cell"==n||"header_cell"==n)o=z.create(l,a.from);else if("row"==n){var s=l.resolve(a.from+1);o=z.rowSelection(s,s)}else if(!r){var c=v.get(a.node),d=a.from+1;o=z.create(l,d+1,d+c.map[c.width*c.height-1])}}else a instanceof i.h&&function(t){var e=t.$from,r=t.$to;if(e.pos==r.pos||e.pos<e.pos-6)return!1;for(var o=e.pos,n=r.pos,a=e.depth;a>=0&&!(e.after(a+1)<e.end(a));a--,o++);for(var i=r.depth;i>=0&&!(r.before(i+1)>r.start(i));i--,n--);return o==n&&/row|table/.test(e.node(a).type.spec.tableRole)}(a)?o=i.h.create(l,a.from):a instanceof i.h&&function(t){for(var e,r,o=t.$from,n=t.$to,a=o.depth;a>0;a--){var i=o.node(a);if("cell"===i.type.spec.tableRole||"header_cell"===i.type.spec.tableRole){e=i;break}}for(var l=n.depth;l>0;l--){var s=n.node(l);if("cell"===s.type.spec.tableRole||"header_cell"===s.type.spec.tableRole){r=s;break}}return e!==r&&0===n.parentOffset}(a)&&(o=i.h.create(l,a.$from.start(),a.$from.end()));return o&&(e||(e=t.tr)).setSelection(o),e}(o,q(o,r),e)}})}function mt(t,e){return e?t.createChecked(null,e):t.createAndFill()}function wt(t,e,r,o,n){const a=function(t){if(t.cached.tableNodeTypes)return t.cached.tableNodeTypes;const e={};return Object.keys(t.nodes).forEach(r=>{const o=t.nodes[r];o.spec.tableRole&&(e[o.spec.tableRole]=o)}),t.cached.tableNodeTypes=e,e}(t),i=[],l=[];for(let c=0;c<r;c+=1){const t=mt(a.cell,n);if(t&&l.push(t),o){const t=mt(a.header_cell,n);t&&i.push(t)}}const s=[];for(let c=0;c<e;c+=1)s.push(a.row.createChecked(null,o&&0===c?i:l));return a.table.createChecked(null,s)}dt.prototype.apply=function(t){var e=this,r=t.getMeta(st);if(r&&null!=r.setHandle)return new dt(r.setHandle,null);if(r&&void 0!==r.setDragging)return new dt(e.activeHandle,r.setDragging);if(e.activeHandle>-1&&t.docChanged){var o=t.mapping.map(e.activeHandle,-1);S(t.doc.resolve(o))||(o=null),e=new dt(o,e.dragging)}return e};const gt=({editor:t})=>{const{selection:e}=t.state;if(!(e instanceof z))return!1;let r=0;const o=Object(a.findParentNodeClosestToPos)(e.ranges[0].$from,t=>"table"===t.type.name);return null==o||o.node.descendants(t=>{if("table"===t.type.name)return!1;["tableCell","tableHeader"].includes(t.type.name)&&(r+=1)}),r===e.ranges.length&&(t.commands.deleteTable(),!0)};function bt(t,e,r,o,n,a){let i=0,l=!0,s=e.firstChild;const c=t.firstChild;for(let d=0,p=0;d<c.childCount;d+=1){const{colspan:t,colwidth:r}=c.child(d).attrs;for(let c=0;c<t;c+=1,p+=1){const t=n===p?a:r&&r[c],d=t?t+"px":"";i+=t||o,t||(l=!1),s?(s.style.width!==d&&(s.style.width=d),s=s.nextSibling):e.appendChild(document.createElement("col")).style.width=d}}for(;s;){const t=s.nextSibling;s.parentNode.removeChild(s),s=t}l?(r.style.width=i+"px",r.style.minWidth=""):(r.style.width="",r.style.minWidth=i+"px")}class Ct{constructor(t,e){this.node=t,this.cellMinWidth=e,this.dom=document.createElement("div"),this.dom.className="tableWrapper",this.table=this.dom.appendChild(document.createElement("table")),this.colgroup=this.table.appendChild(document.createElement("colgroup")),bt(t,this.colgroup,this.table,e),this.contentDOM=this.table.appendChild(document.createElement("tbody"))}update(t){return t.type===this.node.type&&(this.node=t,bt(t,this.colgroup,this.table,this.cellMinWidth),!0)}ignoreMutation(t){return"attributes"===t.type&&(t.target===this.table||this.colgroup.contains(t.target))}}const yt=a.Node.create({name:"table",addOptions:()=>({HTMLAttributes:{},resizable:!1,handleWidth:5,cellMinWidth:25,View:Ct,lastColumnResizable:!0,allowTableNodeSelection:!1}),content:"tableRow+",tableRole:"table",isolating:!0,group:"block",parseHTML:()=>[{tag:"table"}],renderHTML({HTMLAttributes:t}){return["table",Object(a.mergeAttributes)(this.options.HTMLAttributes,t),["tbody",0]]},addCommands:()=>({insertTable:({rows:t=3,cols:e=3,withHeaderRow:r=!0}={})=>({tr:o,dispatch:n,editor:a})=>{const l=wt(a.schema,t,e,r);if(n){const t=o.selection.anchor+1;o.replaceSelectionWith(l).scrollIntoView().setSelection(i.h.near(o.doc.resolve(t)))}return!0},addColumnBefore:()=>({state:t,dispatch:e})=>function(t,e){if(!C(t))return!1;if(e){var r=J(t);e(U(t.tr,r,r.left))}return!0}(t,e),addColumnAfter:()=>({state:t,dispatch:e})=>function(t,e){if(!C(t))return!1;if(e){var r=J(t);e(U(t.tr,r,r.right))}return!0}(t,e),deleteColumn:()=>({state:t,dispatch:e})=>function(t,e){if(!C(t))return!1;if(e){var r=J(t),o=t.tr;if(0==r.left&&r.right==r.map.width)return!1;for(var n=r.right-1;Y(o,r,n),n!=r.left;n--)r.table=r.tableStart?o.doc.nodeAt(r.tableStart-1):o.doc,r.map=v.get(r.table);e(o)}return!0}(t,e),addRowBefore:()=>({state:t,dispatch:e})=>function(t,e){if(!C(t))return!1;if(e){var r=J(t);e(G(t.tr,r,r.top))}return!0}(t,e),addRowAfter:()=>({state:t,dispatch:e})=>function(t,e){if(!C(t))return!1;if(e){var r=J(t);e(G(t.tr,r,r.bottom))}return!0}(t,e),deleteRow:()=>({state:t,dispatch:e})=>function(t,e){if(!C(t))return!1;if(e){var r=J(t),o=t.tr;if(0==r.top&&r.bottom==r.map.height)return!1;for(var n=r.bottom-1;Q(o,r,n),n!=r.top;n--)r.table=r.tableStart?o.doc.nodeAt(r.tableStart-1):o.doc,r.map=v.get(r.table);e(o)}return!0}(t,e),deleteTable:()=>({state:t,dispatch:e})=>function(t,e){for(var r=t.selection.$anchor,o=r.depth;o>0;o--)if("table"==r.node(o).type.spec.tableRole)return e&&e(t.tr.delete(r.before(o),r.after(o)).scrollIntoView()),!0;return!1}(t,e),mergeCells:()=>({state:t,dispatch:e})=>tt(t,e),splitCell:()=>({state:t,dispatch:e})=>et(t,e),toggleHeaderColumn:()=>({state:t,dispatch:e})=>ot("column")(t,e),toggleHeaderRow:()=>({state:t,dispatch:e})=>ot("row")(t,e),toggleHeaderCell:()=>({state:t,dispatch:e})=>nt(t,e),mergeOrSplit:()=>({state:t,dispatch:e})=>!!tt(t,e)||et(t,e),setCellAttribute:(t,e)=>({state:r,dispatch:o})=>function(t,e){return function(r,o){if(!C(r))return!1;var n=y(r);if(n.nodeAfter.attrs[t]===e)return!1;if(o){var a=r.tr;r.selection instanceof z?r.selection.forEachCell((function(r,o){r.attrs[t]!==e&&a.setNodeMarkup(o,null,M(r.attrs,t,e))})):a.setNodeMarkup(n.pos,null,M(n.nodeAfter.attrs,t,e)),o(a)}return!0}}(t,e)(r,o),goToNextCell:()=>({state:t,dispatch:e})=>at(1)(t,e),goToPreviousCell:()=>({state:t,dispatch:e})=>at(-1)(t,e),fixTables:()=>({state:t,dispatch:e})=>(e&&q(t),!0),setCellSelection:t=>({tr:e,dispatch:r})=>{if(r){const r=z.create(e.doc,t.anchorCell,t.headCell);e.setSelection(r)}return!0}}),addKeyboardShortcuts(){return{Tab:()=>!!this.editor.commands.goToNextCell()||!!this.editor.can().addRowAfter()&&this.editor.chain().addRowAfter().goToNextCell().run(),"Shift-Tab":()=>this.editor.commands.goToPreviousCell(),Backspace:gt,"Mod-Backspace":gt,Delete:gt,"Mod-Delete":gt}},addProseMirrorPlugins(){return[...this.options.resizable&&this.editor.isEditable?[ct({handleWidth:this.options.handleWidth,cellMinWidth:this.options.cellMinWidth,View:this.options.View,lastColumnResizable:this.options.lastColumnResizable})]:[],vt({allowTableNodeSelection:this.options.allowTableNodeSelection})]},extendNodeSchema(t){const e={name:t.name,options:t.options,storage:t.storage};return{tableRole:Object(a.callOrReturn)(Object(a.getExtensionField)(t,"tableRole",e))}}})}}]);