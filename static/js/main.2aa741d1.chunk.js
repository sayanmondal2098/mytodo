(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],{19:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/404.142b6cae.jpg"},40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(33),c=a.n(l),o=(a(45),a(5)),i=a(6),s=a(8),u=a(7),m=a(9),h=a(15),d=a(17),p=a(39),b=(a(48),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={posts:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({posts:t},console.log(t))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{columns:[{Header:"userId",accessor:"userId"},{Header:"id",accessor:"id"},{Header:"title",accessor:"title"},{Header:"body",accessor:"body"}],data:this.state.posts}))}}]),t}(r.a.Component)),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={userId:[],id:[],title:[],completed:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){return e.setState({userId:t.userId,title:t.title,id:t.id,completed:t.completed})}))}},{key:"render",value:function(){var e=this.state,t=e.userId,a=e.title,n=e.id,l=e.completed;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("h1",null,"UserId"),t),r.a.createElement("div",null,r.a.createElement("h1",null,"completed"),l),r.a.createElement("div",null,r.a.createElement("h1",null,"Id"),n),r.a.createElement("div",null,r.a.createElement("h1",null,"title"),a)))}}]),t}(r.a.Component),E=a(13),f=(a(19),a(34)),y=a.n(f),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},a.handleUsernameChange=a.handleUsernameChange.bind(Object(E.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(E.a)(a)),a.getWeather=a.getWeather.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"getWeather",value:function(e){e.preventDefault(),y.a.post("http://localhost:8080/vmart/login?email=".concat(this.state.username,"&password=").concat(this.state.password)).then((function(e){console.log(e),console.log(e.data)}))}},{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=(e.lon,e.lat,e.icon),l=(e.main,e.description),c=e.celsius,o=(e.temp_max,e.temp_min,e.pressure,e.humidity,e.visibility),i=(e.wind_speed,e.rain,e.clouds),s=e.error,u="http://openweathermap.org/img/wn/".concat(n,"@2x.png");return s&&Object(d.a)("https://google.com"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{onSubmit:this.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"Enter user Name...",value:this.state.username,onChange:this.handleUsernameChange}),r.a.createElement("input",{type:"text",name:"password",placeholder:"password Name (Optional)...",value:this.state.password,onChange:this.handlePasswordChange}),r.a.createElement("button",null,"Get User")),r.a.createElement("h1",null,t),r.a.createElement("h4",null,a),r.a.createElement("img",{src:u}),r.a.createElement("h4",null,c," ",r.a.createElement("br",null)," ",l," ",r.a.createElement("br",null)," ",o," ",r.a.createElement("br",null)," ",i)))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={city:"",country:"",lon:void 0,lat:void 0,icon:void 0,main:void 0,description:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,pressure:void 0,humidity:void 0,wind_speed:void 0,visibility:void 0,rain:void 0,clouds:void 0,error:!1},a.handleCityChange=a.handleCityChange.bind(Object(E.a)(a)),a.handleCountryChange=a.handleCountryChange.bind(Object(E.a)(a)),a.getWeather=a.getWeather.bind(Object(E.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"handleCityChange",value:function(e){this.setState({city:e.target.value})}},{key:"handleCountryChange",value:function(e){this.setState({country:e.target.value})}},{key:"getWeather",value:function(e){var t=this;e.preventDefault(),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.city,"&appid=f1f66ef328ad5089cd48bdf7d7cb81f6")).then((function(e){return e.json()})).then((function(e){return t.setState({city:e.name,country:e.sys.country,lon:e.coord.lon,lat:e.coord.lat,icon:e.weather[0].icon,main:e.weather[0].main,description:e.weather[0].description,celsius:t.calCelsius(e.main.temp),temp_min:t.calCelsius(e.main.temp_min),temp_max:t.calCelsius(e.main.temp_max),pressure:e.main.pressure,humidity:e.main.humidity,visibility:e.visibility,wind_speed:e.wind.speed,clouds:e.clouds.all},console.log(e),(function(e){t.setState({error:!0})}))}))}},{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.country,n=(e.lon,e.lat,e.icon),l=(e.main,e.description),c=e.celsius,o=(e.temp_max,e.temp_min,e.pressure,e.humidity,e.visibility),i=(e.wind_speed,e.rain,e.clouds),s=e.error,u="http://openweathermap.org/img/wn/".concat(n,"@2x.png");return s&&Object(d.a)("https://google.com"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{onSubmit:this.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"Enter City Name...",value:this.state.city,onChange:this.handleCityChange}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country Name (Optional)...",value:this.state.country,onChange:this.handleCountryChange}),r.a.createElement("button",null,"Get Weather")),r.a.createElement("h1",null,a),r.a.createElement("h4",null,t),r.a.createElement("img",{src:u}),r.a.createElement("h4",null,c," ",r.a.createElement("br",null)," ",l," ",r.a.createElement("br",null)," ",o," ",r.a.createElement("br",null)," ",i)))}}]),t}(r.a.Component),O=a(37),w=a.n(O),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"error"},r.a.createElement("img",{src:w.a,className:"error"})))}}]),t}(r.a.Component),k=a(16),_=a(38),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"2, MY ADDRESS SALTLAKE, KOLKATA PIN - 700067"),r.a.createElement("div",null,r.a.createElement("a",{href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.c,null)),r.a.createElement("a",{href:"http://www.facebook.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,null)),r.a.createElement("a",{href:"http://www.linkedin.com/in",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.d,null)),r.a.createElement("a",{href:"http://www.gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,null)))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("dev",{className:"sidenav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"sidenav_ul"},r.a.createElement(k.b,null),r.a.createElement(h.b,{to:"/home"},"Home")),r.a.createElement("li",{className:"sidenav_ul"},r.a.createElement(k.f,null),r.a.createElement(h.b,{to:"/user"},"User")),r.a.createElement("li",{className:"sidenav_ul"},r.a.createElement(k.e,null),r.a.createElement(h.b,{to:"/root"},"Root")),r.a.createElement("li",{className:"sidenav_ul"},r.a.createElement(k.e,null),r.a.createElement(h.b,{to:"/weather"},"Weather"))))}}]),t}(r.a.Component),x=(a(69),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(S,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/home",component:b}),r.a.createElement(d.b,{path:"/user",component:g}),r.a.createElement(d.b,{path:"/root",component:v}),r.a.createElement(d.b,{path:"/weather",component:j}),r.a.createElement(d.b,{component:C})),r.a.createElement(N,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2aa741d1.chunk.js.map