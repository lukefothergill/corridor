(this.webpackJsonpcoridors=this.webpackJsonpcoridors||[]).push([[0],[,function(e,t,a){e.exports={board:"Board_board__21Pbv",square:"Board_square__2Sj8T",narrow:"Board_narrow__NUhNX",short:"Board_short__251F-",nothing:"Board_nothing__CdNa2",emptyWall:"Board_emptyWall__2QPIv",hover:"Board_hover__1WgqN",horz:"Board_horz__15q0T",w1:"Board_w1__3IXna",w2:"Board_w2__3_0Ki",vert:"Board_vert__1gOiq",wall:"Board_wall__XyZwn",empty:"Board_empty__WlA6a",validmove:"Board_validmove__3pm2u","pulse-move":"Board_pulse-move__hgdNu",player1:"Board_player1__8QlVJ",active:"Board_active__3p7qy",pulse1:"Board_pulse1__2MrNP",player2:"Board_player2__3X4fq",pulse2:"Board_pulse2__ea3-k",player3:"Board_player3__4-dk-",pulse3:"Board_pulse3__Q3eq_",player4:"Board_player4__L86FT",pulse4:"Board_pulse4__3DHkG"}},,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),c=(a(14),a(15),a(2)),i=a(3),u=a(7),s=a(6),h=a(8),y=function(){function e(t,a,n,r,o){Object(c.a)(this,e),this.x=a,this.y=n,this.id=t,this.walls=r,this.objectives=o}return Object(i.a)(e,[{key:"move",value:function(e,t){this.x=e,this.y=t}},{key:"getPos",value:function(){return{x:this.x,y:this.y}}},{key:"hasWon",value:function(){var e=null!==this.objectives.x?this.objectives.x:this.x,t=null!==this.objectives.y?this.objectives.y:this.y;return e===this.x&&t===this.y||(console.log(this.id,this.x,this.y,this.objectives),!1)}},{key:"useWall",value:function(){return this.walls>0&&(this.walls--,!0)}}]),e}(),v=a(1),d=a.n(v),_=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(u.a)(this,Object(s.a)(t).call(this,e));for(var n=e.x,r=void 0===n?9:n,o=e.y,l=void 0===o?9:o,i=e.players,h=void 0===i?4:i,v=e.walls,d=void 0===v?5:v,_=function(e,t){for(var a=2*t-1,n=new Array(2*e-1),r=0;r<n.length;r++){n[r]=new Array(a);for(var o=0;o<n[r].length;o++){var l=o%2,c=r%2;n[r][o]=c?l?"e":"w":l?"w":0}}return n}(r,l),p={1:{x:Math.floor(_.length/2),y:0},2:{x:_.length-1,y:Math.floor(_[0].length/2)},3:{x:Math.floor(_.length/2),y:_[0].length-1},4:{x:0,y:Math.floor(_[0].length/2)}},f={1:{x:null,y:_[0].length-1},2:{x:0,y:null},3:{x:null,y:0},4:{x:_.length-1,y:null}},m=[],w=1;w<=h;w++)m.push(new y(w,p[w].x,p[w].y,d,f[w]));return a.state={board:_,curPlayer:1,players:m,winner:null,walls:[],wallHover:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"getPlayer",value:function(e){return this.state.players[e-1]}},{key:"getCurrentPlayer",value:function(){var e=this.state.curPlayer;return this.getPlayer(e)}},{key:"getMovesFlatArray",value:function(e){var t=this.getPlayer(e),a=t.x,n=t.y,r=this.state.board,o=[],l=function(e,t){return!(e<0||t<0)&&(!(e>r.length-1||t>r[e].length-1)&&"w"===r[e][t])};return l(a+1,n)&&o.push("".concat(a+2,":").concat(n)),l(a-1,n)&&o.push("".concat(a-2,":").concat(n)),l(a,n+1)&&o.push("".concat(a,":").concat(n+2)),l(a,n-1)&&o.push("".concat(a,":").concat(n-2)),o}},{key:"tryTurn",value:function(e,t){var a=this.state,n=a.curPlayer,r=a.players;if(null===a.winner){var o={players:r};if(this.tryMove(e,t)||this.tryWall(e,t))r.map((function(e){return e.id!==n?"".concat(e.x,"|").concat(e.y):""})).includes("".concat(r[n-1].x,"|").concat(r[n-1].y))||(n===r.length?o.curPlayer=1:o.curPlayer=n+1),r[n-1].hasWon()&&(o.winner=r[n-1]),this.setState(o)}}},{key:"tryMove",value:function(e,t){var a=this.state,n=a.curPlayer,r=a.players;return!!this.getMovesFlatArray(n).includes("".concat(e,":").concat(t))&&(r[n-1].move(e,t),!0)}},{key:"tryWall",value:function(e,t){var a=this.state,n=a.curPlayer,r=a.players,o=a.board;if("w"===o[e][t]&&r[n-1].useWall()){var l=this.getSelectedWalls();return l.map((function(e){return o[e.y][e.x]="W"})),this.setState({board:o}),3==l.length}return!1}},{key:"getSelectedWalls",value:function(){var e=this.state,t=e.wallHover,a=e.board,n=[];if(null!==t){var r=t.x,o=t.y,l=t.n,c=function(e,t){try{"W"!==a[t][e]&&n.push({x:e,y:t})}catch(r){}};c(r,o),r%2?(1===l&&(c(r,o-1),c(r,o-2)),2===l&&(c(r,o+1),c(r,o+2))):(1===l&&(c(r-1,o),c(r-2,o)),2===l&&(c(r+1,o),c(r+2,o)))}return 3===n.length?n:[]}},{key:"render",value:function(){var e=this,t=this.state,a=t.curPlayer,n=t.winner,o=t.board,l=this.state.players.map((function(e,t){return"".concat(e.x,":").concat(e.y)})),c=this.getMovesFlatArray(a),i=this.getSelectedWalls().map((function(e){return"".concat(e.x,"|").concat(e.y)})),u=function(e,t,n){var r=[d.a.square];if(t%2&&r.push(d.a.narrow),n%2&&r.push(d.a.short),c.includes("".concat(n,":").concat(t))&&r.push(d.a.validmove),-1!==l.indexOf("".concat(n,":").concat(t))){var o=l.indexOf("".concat(n,":").concat(t))+1;r.push(d.a["player".concat(o)]),a===o&&r.push(d.a.active)}switch(e){case"e":r.push(d.a.nothing);break;case"w":r.push(d.a.emptyWall),t%2?r.push(d.a.horz):r.push(d.a.vert),i.length&&-1!==i.indexOf("".concat(t,"|").concat(n))&&r.push(d.a.hover);break;case"W":r.push(d.a.wall);break;default:r.push(d.a.empty)}return r.join(" ")},s=function(t,a,n){return e.setState({wallHover:{x:t,y:a,n:n}})},h=function(t,a,n){var r=e.state.wallHover;null!==r&&t===r.x&&a===r.y&&e.setState({wallHover:null})},y=function(e,t,a){return"w"===e?function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.w1,onPointerEnter:function(){return s(e,t,1)},onPointerLeave:function(){return h(e,t)}},"w1"),r.a.createElement("div",{className:d.a.w2,onPointerEnter:function(){return s(e,t,2)},onPointerLeave:function(){return h(e,t)}},"w2"))}(t,a):e},v=function(t,a){return r.a.createElement("div",{key:a,className:d.a.col},t.map((function(t,n){return function(t,a,n){return r.a.createElement("div",{key:a,className:u(t,a,n),onClick:function(t){return e.tryTurn(n,a)}},y(t,a,n))}(t,n,a)})))},_=n?r.a.createElement("div",null,"Player ".concat(n.id," is the Winner")):null;return r.a.createElement("div",null,r.a.createElement("div",{className:d.a.board},o.map((function(e,t){return v(e,t)}))),_)}}]),t}(n.Component);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Game"),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1eed26ca.chunk.js.map