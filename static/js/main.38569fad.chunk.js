(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),i=s(4),c=s.n(i),n=(s(8),s(0));var l=()=>Object(n.jsxs)("header",{className:"app__header",children:[Object(n.jsx)("h1",{className:"app__title",children:Object(n.jsxs)("a",{href:"#",children:[Object(n.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(n.jsx)("nav",{className:"app__menu",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Comics"})})]})})]});var o=class{constructor(){var e=this;this._apiKey="apikey=77b917266f3bd79b6fd8dc04288e5a58",this._apiBase="https://gateway.marvel.com:443/v1/public",this._baseOffset=210,this.getResource=async e=>{let t=await fetch(e);if(!t.ok)throw new Error("Cloud not fetch ".concat(e,", status: ").concat(t.status));return await t.json()},this.getAllCharacters=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._baseOffset;return(await e.getResource("".concat(e._apiBase,"/characters?limit=9&offset=").concat(t,"&").concat(e._apiKey))).data.results.map(e._transformCharacter)},this.getCharacter=async e=>{const t=await this.getResource("".concat(this._apiBase,"/characters/").concat(e,"?").concat(this._apiKey));return this._transformCharacter(t.data.results[0])},this._transformCharacter=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items})}},h=(s(10),s.p+"static/media/mjolnir.61f31e18.png");var d=()=>Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(n.jsx)("g",{transform:"translate(80,50)",children:Object(n.jsx)("g",{transform:"rotate(0)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(n.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(n.jsx)("g",{transform:"rotate(45)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(n.jsx)("g",{transform:"translate(50,80)",children:Object(n.jsx)("g",{transform:"rotate(90)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(n.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(n.jsx)("g",{transform:"rotate(135)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(n.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(n.jsx)("g",{transform:"rotate(180)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(n.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(n.jsx)("g",{transform:"rotate(225)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(n.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(n.jsx)("g",{transform:"rotate(270)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(n.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(n.jsx)("g",{transform:"rotate(315)",children:Object(n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]}),j=s.p+"static/media/error.42292aa1.gif";var m=()=>Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:j,alt:"error"});class b extends a.Component{constructor(){super(...arguments),this.state={char:{},loading:!0,error:!1},this.MarvelService=new o,this.onCharLoaded=e=>{this.setState({char:e,loading:!1})},this.onCharLoading=()=>{this.setState({loading:!0})},this.onError=()=>{this.setState({loading:!1,error:!0})},this.updateChar=()=>{const e=Math.floor(400*Math.random()+1011e3);this.onCharLoading(),this.MarvelService.getCharacter(e).then(this.onCharLoaded).catch(this.onError)}}componentDidMount(){this.updateChar()}componentWillUnmount(){clearInterval(this.timerId)}render(){const{char:e,loading:t,error:s}=this.state,a=s?Object(n.jsx)(m,{}):null,r=t?Object(n.jsx)(d,{}):null,i=t||s?null:Object(n.jsx)(u,{char:e});return Object(n.jsxs)("div",{className:"randomchar",children:[a,r,i,Object(n.jsxs)("div",{className:"randomchar__static",children:[Object(n.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(n.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(n.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(n.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"try it"})}),Object(n.jsx)("img",{src:h,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}const u=e=>{let{char:t}=e;const{name:s,description:a,thumbnail:r,homepage:i,wiki:c}=t;let l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"contain"}),Object(n.jsxs)("div",{className:"randomchar__block",children:[Object(n.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:l}),Object(n.jsxs)("div",{className:"randomchar__info",children:[Object(n.jsx)("p",{className:"randomchar__name",children:s}),Object(n.jsx)("p",{className:"randomchar__descr",children:a}),Object(n.jsxs)("div",{className:"randomchar__btns",children:[Object(n.jsx)("a",{href:i,className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"homepage"})}),Object(n.jsx)("a",{href:c,className:"button button__secondary",children:Object(n.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})};var p=b;s(11);class O extends a.Component{constructor(){super(...arguments),this.state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:1543,charEnded:!1},this.MarvelService=new o,this.onRequest=e=>{this.onCharListLoading(),this.MarvelService.getAllCharacters(e).then(this.onCharListLoaded).catch(this.onError)},this.onCharListLoading=()=>{this.setState({newItemLoading:!0})},this.onCharListLoaded=e=>{let t=!1;e.length<9&&(t=!0),this.setState((s=>{let{offset:a,charList:r}=s;return{charList:[...r,...e],loading:!1,newItemLoading:!1,offset:a+9,charEnded:t}}))},this.onError=()=>{this.setState({error:!0,loading:!1})},this.itemRefs=[],this.setRef=e=>{this.itemRefs.push(e)},this.focusOnItem=e=>{this.itemRefs.forEach((e=>e.classList.remove("char__item_selected"))),this.itemRefs[e].classList.add("char__item_selected"),this.itemRefs[e].focus()}}componentDidMount(){this.onRequest()}renderItem(e){const t=e.map(((e,t)=>{let s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(s={objectFit:"unset"}),Object(n.jsxs)("li",{className:"char__item",ref:this.setRef,onClick:()=>{this.props.onCharSelected(e.id),this.focusOnItem(t),console.log(t)},children:["onKeyPress=",s=>{" "!==s.key&&"Enter"!==s.key||(this.props.onCharSelected(e.id),this.focusOnItem(t))},Object(n.jsx)("img",{src:e.thumbnail,alt:e.name,style:s}),Object(n.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(n.jsx)("ul",{className:"char__grid",children:t})}render(){const{charList:e,loading:t,error:s,newItemLoading:a,offset:r,charEnded:i}=this.state,c=this.renderItem(e),l=s?Object(n.jsx)(m,{}):null,o=t?Object(n.jsx)(d,{}):null,h=t||s?null:c;return Object(n.jsxs)("div",{className:"char__list",children:[l,o,h,Object(n.jsx)("button",{className:"button button__main button__long",disabled:a,style:{display:i?"none":"block"},onClick:()=>this.onRequest(r),children:Object(n.jsx)("div",{className:"inner",children:"load more"})})]})}}var x=O;s(12),s(13);var f=()=>Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]});class g extends a.Component{constructor(){super(...arguments),this.state={char:null,loading:!1,error:!1},this.MarvelService=new o,this.updateChar=()=>{const{charId:e}=this.props;e&&(this.onCharLoading(),this.MarvelService.getCharacter(e).then(this.onCharLoaded).catch(this.onError))},this.onCharLoaded=e=>{this.setState({char:e,loading:!1})},this.onCharLoading=()=>{this.setState({loading:!0})},this.onError=()=>{this.setState({loading:!1,error:!0})}}componentDidMount(){this.updateChar()}componentDidUpdate(e,t){this.props.charId!==e.charId&&this.updateChar()}render(){const{char:e,loading:t,error:s}=this.state,a=e||t||s?null:Object(n.jsx)(f,{}),r=s?Object(n.jsx)(m,{}):null,i=t?Object(n.jsx)(d,{}):null,c=t||s||!e?null:Object(n.jsx)(_,{char:e});return Object(n.jsxs)("div",{className:"char__info",children:[a,i,r,c]})}}const _=e=>{let{char:t}=e;const{name:s,description:a,thumbnail:r,homepage:i,wiki:c,comics:l}=t;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"char__basics",children:[Object(n.jsx)("img",{src:r,alt:"abyss",style:o}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"char__info-name",children:s}),Object(n.jsxs)("div",{className:"char__btns",children:[Object(n.jsx)("a",{href:i,className:"button button__main",children:Object(n.jsx)("div",{className:"inner",children:"homepage"})}),Object(n.jsx)("a",{href:c,className:"button button__secondary",children:Object(n.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(n.jsx)("div",{className:"char__descr",children:a}),Object(n.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(n.jsxs)("ul",{className:"char__comics-list",children:[l.length>0?null:"There is no comics with this character",l.map(((e,t)=>{if(!(t>9))return Object(n.jsx)("li",{className:"char__comics-item",children:Object(n.jsx)("a",{href:e.resourceURI,children:e.name})},t)}))]})]})};var v=g,y=s.p+"static/media/vision.067d4ae1.png",N=s(3);class C extends N.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,t){this.setState({error:!0})}render(){return this.state.error?Object(n.jsx)(m,{}):this.props.children}}var k=C;class w extends a.Component{constructor(){super(...arguments),this.state={selectedChar:null},this.onCharSelected=e=>{this.setState({selectedChar:e})}}render(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(k,{children:Object(n.jsx)(p,{})}),Object(n.jsxs)("div",{className:"char__content",children:[Object(n.jsx)(k,{children:Object(n.jsx)(x,{onCharSelected:this.onCharSelected})}),Object(n.jsx)(k,{children:Object(n.jsx)(v,{charId:this.state.selectedChar})})]}),Object(n.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})]})}}var L=w;s(14);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.38569fad.chunk.js.map