(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/server.743fdc7d.png"},17:function(e,t){},22:function(e,t,a){e.exports=a.p+"static/media/bounce.781f2637.png"},24:function(e,t,a){e.exports=a(45)},29:function(e,t,a){},31:function(e,t,a){},37:function(e,t){},38:function(e,t){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),i=a.n(r),c=(a(29),a(2)),o=a.n(c),l=a(5),u=a(21),m=a(6),h=a(7),p=a(9),d=a(8),v=a(10),f=(a(31),a(22)),E=a.n(f),N=a(4),g=a.n(N),b=a(14),y=a.n(b),I=[],w=[],S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={filterValue:"",data:[],notFoundIP:[],sort:!1,repeatIp:[]},a.showContent=function(){return a.state.data.map(function(e,t){return s.a.createElement("div",{key:e.server,className:"sheet-item"},s.a.createElement("div",{className:"sheet-server"},s.a.createElement("p",{className:"index"},"".concat(t+1)),s.a.createElement("p",{className:"sheet-server-value"},e.server)),s.a.createElement("div",{className:"sheet-server-name"},s.a.createElement("p",{className:"sheet-server-value"},e.name)),s.a.createElement("div",{className:"sheet-server-name"},s.a.createElement("p",{className:"sheet-server-value"},e.coast?e.coast:"Not found")))})},a.handleChange=function(e){var t=I.filter(function(t){return t.server.includes(e.target.value)});a.setState({data:t})},a.showRepitedInvoice=function(){return a.state.repeatIp.map(function(e){return s.a.createElement("div",{key:e,className:"sheet-item"},s.a.createElement("div",{className:"sheet-server"},s.a.createElement("img",{className:"sheet-server-img",src:y.a,alt:"icon"}),s.a.createElement("p",{className:"sheet-server-value"},e)))})},a.showNotFound=function(){return a.state.notFoundIP.map(function(e){return s.a.createElement("div",{key:e,className:"sheet-item"},s.a.createElement("div",{className:"sheet-server"},s.a.createElement("img",{className:"sheet-server-img",src:y.a,alt:"icon"}),s.a.createElement("p",{className:"sheet-server-value"},e)))})},a.handleSortClick=function(){if(a.state.sort){var e=[];a.props.invoice.ips.map(function(t){if(a.props.sheet[t]){var n={server:t,name:a.props.sheet[t].name?a.props.sheet[t].name:null,coast:a.props.sheet[t].coast?a.props.sheet[t].coast:null};e.push(n)}a.setState({data:e,sort:!1})})}else{var t=I.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0});a.setState({data:t,sort:!0})}},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.invoice.ips.map(function(e){if(t.props.sheet[e]){var a={server:e,name:t.props.sheet[e].name?t.props.sheet[e].name:null,coast:t.props.sheet[e].coast?t.props.sheet[e].coast:null};I.push(a)}t.props.sheet[e]||w.push(e)}),this.setState({data:I,notFoundIP:w,repeatIp:this.props.invoice.repeatingIps});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.notFoundIP,a=e.repeatIp,n=e.data;return s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"container-header"},"Real Sheet"),s.a.createElement("h4",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u0432 \u0422\u0430\u0431\u043b\u0438\u0447\u043a\u0435 ".concat(this.state.data.length)),s.a.createElement("div",{className:"ipsMenu"},s.a.createElement("div",{className:"repeting-ips"},s.a.createElement("h2",{className:"show-repeating"},"Repeating IP in Invoice"),a.length&&this.showRepitedInvoice()),s.a.createElement("div",{className:"not-found-ips"},s.a.createElement("h2",{className:"show-repeating"},"Not Found IP from Invoice"),t.length&&this.showNotFound())),s.a.createElement("div",{className:"filter-section"},s.a.createElement("label",{className:"filter-label",htmlFor:"filter"},"Filter by IP"),s.a.createElement("input",{className:"fileInput",onChange:this.handleChange,id:"filter",placeholder:"enter the Ip",type:"text"}),s.a.createElement("button",{onClick:this.handleSortClick,className:"sort"},"Sort by Name")),s.a.createElement("div",{className:"sheet-container"},s.a.createElement("h2",null,"Invoices"),n&&this.showContent()))}}]),t}(s.a.Component),j=a(23),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={invoice:{},sheet:{},invoiceIps:null,sheets:null,error:null,loading:!1},a.handleChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.files[0]))},a.parceInvice=function(e){var t=[],n=[],s=new FileReader;s.readAsArrayBuffer(e),s.onload=function(e){var s=g.a.read(e.target.result,{type:"buffer"}),r=s.SheetNames[0],i=s.Sheets[r],c=g.a.utils.sheet_to_json(i,{header:1});for(var o in c)c[o][4]&&c[o][4].indexOf("(")>-1&&function(){var e=c[o][4].split("(")[1].split(")")[0];t.includes(e)?(n.push(e),t.filter(function(t){return t!==e})):t.push(e)}();a.setState({invoiceIps:{ips:t,repeatingIps:n}})}},a.parceSheet=function(e){var t={},n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(e){var n=g.a.read(e.target.result,{type:"buffer"}),s=n.SheetNames,r=[],i=!0,c=!1,o=void 0;try{for(var l,u=s[Symbol.iterator]();!(i=(l=u.next()).done);i=!0){var m=l.value;r.push(n.Sheets[m])}}catch(N){c=!0,o=N}finally{try{i||null==u.return||u.return()}finally{if(c)throw o}}for(var h=[],p=0,d=r;p<d.length;p++){var v=d[p];h.push(g.a.utils.sheet_to_json(v,{header:1}))}for(var f in h)for(var E in h[f])t[h[f][E][2]]={coast:h[f][E][8],name:h[f][E][0]};a.setState({sheets:t,loading:!1})}},a.handleSubmit=function(){var e=Object(l.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),e.next=4,a.parceInvice(a.state.invoice);case 4:return e.sent,e.next=7,a.parceSheet(a.state.sheet);case 7:e.sent;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=function(t){var a=t.state,n=t.label,r=t.id,i=t.name;return s.a.createElement("div",{className:"upload-section"},s.a.createElement("label",{className:"upload",htmlFor:r},n),s.a.createElement("input",{className:"fileInput",style:{display:"none"},onChange:e.handleChange,id:r,name:i,multiple:!0,type:"file"}),a.name&&s.a.createElement("div",{className:"invoice-description"},s.a.createElement("img",{className:"uploadImage",src:E.a,alt:"bounce"}),s.a.createElement("p",{className:"name-file"},a.name)))};return s.a.createElement("div",{className:"App"},s.a.createElement("form",{className:"formLoad"},s.a.createElement(t,{state:this.state.invoice,label:"Upload the Invoice here",name:"invoice",id:"raised-button-invoice"}),s.a.createElement(t,{state:this.state.sheet,label:"Upload the Sheet here",name:"sheet",id:"raised-button-file"})),s.a.createElement("button",{className:"myButton",onClick:this.handleSubmit},"Show Result"),this.state.loading&&s.a.createElement(j.a,{css:{display:"block",margin:" 0 auto",borderColor:"red"},sizeUnit:"px",size:20,color:"aquamarine",loading:this.state.loading}),this.state.invoiceIps&&this.state.sheets&&!this.state.loading&&s.a.createElement(S,{sheet:this.state.sheets,invoice:this.state.invoiceIps}))}}]),t}(s.a.Component);i.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.76ea788f.chunk.js.map