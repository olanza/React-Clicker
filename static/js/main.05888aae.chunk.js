(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://i.imgur.com/SN086zQ.jpg"},{id:2,image:"https://i.imgur.com/O5D4yFg.jpg"},{id:3,image:"https://i.imgur.com/W5QSXCO.jpg"},{id:4,image:"https://i.imgur.com/MgbPND8.jpg"},{id:5,image:"https://i.imgur.com/j35Mb9S.jpg"},{id:6,image:"https://i.imgur.com/DVgzNs6.jpg"},{id:7,image:"https://i.imgur.com/3ZXi326.jpg"},{id:8,image:"https://i.imgur.com/Rhj76el.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),o=(a(15),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),d=(a(16),function(e){return i.a.createElement("div",{className:"card img-container hover"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),g=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(18),function(e){return i.a.createElement("div",{className:"gameScore"},i.a.createElement("h3",{className:"score"},"Your Score: ",e.total),i.a.createElement("h3",{className:"status"},e.status))}),p=a(1),f=(a(19),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={land:p,clickedItems:[],score:0,goal:8,status:""},a.shuffleScoreCard=function(e){var t=a.state.clickedItems;if(t.includes(e))a.setState({clickedItems:[],score:0,status:"Game Over! You lost. Click to play again!"});else{if(t.push(e),8===t.length)return a.setState({score:8,status:"You Won! Great Job, Smartie! Click to play again!",clickedItems:[]}),void console.log("You Win");a.setState({land:p,clickedItems:t,score:t.length,status:" "});for(var n=p.length-1;n>0;n--){var i=Math.floor(Math.random()*(n+1)),c=[p[i],p[n]];p[n]=c[0],p[i]=c[1]}}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",{className:"App-title"},"React Clicker"),i.a.createElement("p",{className:"App-intro"},"Memorization game, do not click the same image twice!")),i.a.createElement(h,{total:this.state.score,goal:8,status:this.state.status}),i.a.createElement(g,null,this.state.land.map(function(t){return i.a.createElement(d,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})})),i.a.createElement("footer",null,i.a.createElement("p",null,"Made with React.")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.05888aae.chunk.js.map