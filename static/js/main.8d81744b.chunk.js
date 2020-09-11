(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),c=(a(27),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),d=a(6),h=a(5),f=(a(28),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={darkMode:!1},a.darktStyle="body { background-color: hsl(207, 26%, 17%); } * {color:hsl(0, 0%, 100%);} .header, .footer {background-color: hsl(209, 23%, 22%)} .countryCard__description, .filter__chooseRegion, .filter__dropdown, .filter__searchInput, .scroll, .btn{background-color: hsl(209, 23%, 22%)} .filter__dropdown-item:hover{color:hsl(200, 15%, 8%); background-color: hsl(0,0%,100%);} .countryCard__description {border: 0} *:active, .scroll__arrowUp{color:hsl(0, 0%, 100%);} .scroll, .btn:hover{box-shadow: 0rem 0rem .5rem .2rem rgba(255, 255, 255, 0.4)} .btn:focus{box-shadow: inset 0rem 0rem .5rem .2rem rgba(255, 255, 255, 0.4)}",a.handleSlider=function(){a.setState({darkMode:!a.state.darkMode})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.darkMode?r.a.createElement("style",null,this.darktStyle):null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},"Where in the world?"),r.a.createElement("div",{className:"header__changeMode"},r.a.createElement("input",{className:"header__change-input",type:"checkbox",name:"mode",id:"mode",onChange:this.handleSlider}),r.a.createElement("label",{htmlFor:"mode",className:"header__darkLightMode"},r.a.createElement("svg",{className:"header__icon-moon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},r.a.createElement("title",null,"moon"),r.a.createElement("path",{d:"M13.719 1.8c0.686 0.385 1.332 0.867 1.916 1.449 3.42 3.422 3.42 8.966 0 12.386s-8.965 3.42-12.386 0c-0.583-0.584-1.065-1.231-1.449-1.916 3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z",fill:this.state.darkMode?"hsl(0, 0%, 100%)":"hsl(209, 23%, 22%)"})),r.a.createElement("span",{className:"header__mode-name"},this.state.darkMode?"Light Mode":"Dark Mode")))))}}]),t}(n.Component)),_=(a(29),function(e){var t=e.countriesAll.map(function(e,t){return r.a.createElement(h.b,{to:"country.alpha3Code",className:"navLink",key:t},r.a.createElement("div",{className:"countryCard",key:t},r.a.createElement("div",{className:"countryCard__flag"},r.a.createElement("img",{className:"countryCard__flagImg",src:"country.flag",alt:"country.name"})),r.a.createElement("div",{className:"countryCard__description"},r.a.createElement("h1",{className:"countryCard__primary"}," country.name "),r.a.createElement("ul",{className:"countryCard__itemList"}))))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"countries-container"},t))}),p=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={countriesAll:[],isLoaded:!1,option:"all",optionUpper:"",searchValue:"",filtered:"",filterActive:!1,regionChoosed:!1,scroll:!1},a.scrollCheck=function(){!1===window.scrollY<100?a.setState({scroll:!0}):a.setState({scroll:!1})},a.handleSearchCountry=function(e){a.setState({searchValue:e.target.value});var t=[];t=""!==e.target.value?a.state.countriesAll.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())}):a.state.countriesAll,a.setState({filtered:t})},a.handleFilterRegion=function(){a.setState({filterActive:!a.state.filterActive})},a.handleCloseGlobalFilterRegion=function(){!0===a.state.filterActive&&a.setState({filterActive:!1})},a.handleChangeRegion=function(e){var t=e.currentTarget.getAttribute("value"),n=t.slice(0,1).toUpperCase()+t.slice(1,t.length);a.setState({option:t,optionUpper:n,regionChoosed:!0,filterActive:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.scrollCheck,!1),fetch("https://restcountries.eu/rest/v2/all").then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(t){e.setState({countriesAll:t,isLoaded:!0})}).catch(function(e){return console.log(e)})}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.option!==this.state.option&&fetch("https://restcountries.eu/rest/v2/".concat("all"===this.state.option?"":"region/").concat(this.state.option)).then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(e){a.setState({filtered:"",searchValue:"",countriesAll:e,isLoaded:!0})}).catch(function(e){return console.log(e)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollCheck,!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"home",onClick:this.handleCloseGlobalFilterRegion},r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter__searchPanel"},r.a.createElement("svg",{className:"filter__icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("title",null,"magnifying-glass"),r.a.createElement("path",{d:"M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"})),r.a.createElement("input",{className:"filter__searchInput",type:"text",placeholder:"Search for a country...",value:this.state.searchValue,onChange:this.handleSearchCountry})),r.a.createElement("div",{className:"filter__selectPanel"},r.a.createElement(h.a,{to:"./"},r.a.createElement("span",{onClick:this.handleFilterRegion,className:this.state.filterActive?"filter__chooseRegion filter__chooseRegion--caretUp":"filter__chooseRegion filter__chooseRegion--caretDown"},this.state.regionChoosed?this.state.optionUpper:"Filter by Region"),r.a.createElement("ul",{className:this.state.filterActive?"filter__dropdown visible":"filter__dropdown"},r.a.createElement("li",{className:"filter__dropdown-item filter__dropdown-item--all",value:"all",onClick:this.handleChangeRegion},"All"),r.a.createElement("li",{className:"filter__dropdown-item filter__dropdown-item--africa",value:"africa",onClick:this.handleChangeRegion},"Africa"),r.a.createElement("li",{className:"filter__dropdown-item filter__dropdown-item--americas",value:"americas",onClick:this.handleChangeRegion},"Americas"),r.a.createElement("li",{className:"filter__dropdown-item filter__dropdown-item--asia",value:"asia",onClick:this.handleChangeRegion},"Asia"),r.a.createElement("li",{className:"filter__dropdown-item filter__dropdown-item--europe",value:"europe",onClick:this.handleChangeRegion},"Europe"),r.a.createElement("li",{className:"filter__dropdown-item filter__dropdown-item--oceania",value:"oceania",onClick:this.handleChangeRegion},"Oceania"))))),this.state.isLoaded?r.a.createElement(_,{countriesAll:""===this.state.filtered?this.state.countriesAll:this.state.filtered}):r.a.createElement("div",{className:"loading"},r.a.createElement("span",{className:"loading__loader"})),r.a.createElement("div",{className:this.state.scroll?"scroll":null,onClick:function(){window.scrollTo(0,0)}},r.a.createElement("i",{className:this.state.scroll?"fas fa-arrow-up scroll__arrowUp":null})))}}]),t}(n.Component)),g=(a(36),function(e){var t=e.borders.map(function(e,t){return r.a.createElement("li",{className:"borders-item",key:t},r.a.createElement(h.b,{to:"border",className:"navLink"},r.a.createElement("button",{className:"btn btn--borders"},' "border"')))});return r.a.createElement("div",{className:"country-container"},r.a.createElement("div",{className:"country-container__back"},r.a.createElement(h.b,{to:"/",className:"navLink"},r.a.createElement("button",{className:"btn country-container__button-back"},"Back"))),r.a.createElement("div",{className:"country-details"},r.a.createElement("div",{className:"country-details__flag"},r.a.createElement("img",{className:"country-details__flagImg",src:e.flag,alt:e.name})),r.a.createElement("div",{className:"country-details__info"},r.a.createElement("h1",{className:"country-details__headingPrimary"}," props.name "),r.a.createElement("ul",{className:"info-list info-list--partOne"},r.a.createElement("li",{className:"info-item info-item--nativeName"},r.a.createElement("h4",{className:"country-details__headingQuaternary"},"Native Name:")," props.nativeName"),r.a.createElement("li",{className:"info-item"},r.a.createElement("h4",{className:"country-details__headingQuaternary"},"Region:")," props.region"),r.a.createElement("li",{className:"info-item"},r.a.createElement("h4",{className:"country-details__headingQuaternary"},"Sub Region:")," props.subRegion")),r.a.createElement("ul",{className:"info-list info-list--partTwo"},r.a.createElement("ul",{className:"info-list__curriences"},r.a.createElement("h4",{className:"country-details__headingQuaternary"},"Curriences: ")," currencies")),r.a.createElement("ul",{className:"info-list info-list--partThree"},r.a.createElement("ul",{className:"info-list__borders"},r.a.createElement("h4",null,"Border Countries:"),t)))))}),E=(a(37),function(){return r.a.createElement("footer",{className:"footer"})}),v=(a(38),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Page not Found"))}),N=(a(39),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={countriesAll:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(t){e.setState({countriesAll:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.countriesAll.map(function(t,a){return r.a.createElement(d.a,{exact:!0,path:"/".concat(t.alpha3Code),key:a,render:function(){return r.a.createElement("main",{className:"main main--country"},r.a.createElement(g,{countryAll:e.state.countriesAll,alpha3Code:t.alpha3Code,borders:t.borders,flag:t.flag,name:t.name}))}})});return r.a.createElement(h.a,{basename:"/Countries-API"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement("main",{className:"main main--home"},r.a.createElement(p,null)," ")}}),t,r.a.createElement(d.a,{render:function(){return r.a.createElement("main",{className:"main main--error"},r.a.createElement(v,null))}})),r.a.createElement(E,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.8d81744b.chunk.js.map