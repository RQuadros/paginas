(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/paginas/carzebel/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"543f":function(t,e,a){"use strict";var r=a("dc11"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("Cabecalho"),a("v-container",{staticClass:"px-0 py-0",attrs:{fluid:""}},[a("nav",{staticClass:"pb-3 pt-2 text-center"},[a("v-btn-toggle",{attrs:{borderless:""}},[a("v-btn",{staticClass:"cor-laranja",attrs:{text:"",to:"/cerimonial"}},[t._v("Cerimonial")]),a("v-btn",{staticClass:"cor-laranja",attrs:{text:"",to:"/sobre"}},[t._v("Sobre")]),a("v-btn",{staticClass:"cor-laranja",attrs:{text:"",to:"/contato"}},[t._v("Contato")])],1)],1),a("transition",{attrs:{name:"component-fade",mode:"out-in"}},[a("router-view",{staticClass:"cor-marrom"})],1),a("v-btn",{attrs:{fab:"",color:"#25D366",bottom:"",right:"",fixed:"",href:"https://wa.me/5521999346020",target:"_blank"},nativeOn:{click:function(e){return e.stopPropagation(),t.click(e)}}},[a("v-icon",{attrs:{color:"white",large:""}},[t._v("mdi-whatsapp")])],1)],1),a("Rodape")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"bg-laranja d-flex flex-row align-center justify-center"},[a("h1",{staticClass:"pb-3 pt-1 mb-1 cor-marrom",on:{click:t.navegarParaHome}},[a("strong",[t._v("Carzebel")]),t._v(" "),a("span",[t._v("Festas & Eventos")])])])},c=[],l={methods:{navegarParaHome:function(){"/"!==this.$route.path&&this.$router.push("/")}}},u=l,m=(a("f50e"),a("2877")),p=Object(m["a"])(u,o,c,!1,null,"5832268a",null),d=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"flex-grow-1 pb-10 pt-8 flex-column align-start"},[a("h2",{staticClass:"font-weight-light cor-marrom mb-3"},[t._v("Entre em contato")]),a("nav",[a("v-row",[a("v-btn",{staticClass:"cor-marrom pl-3",attrs:{text:"",href:"tel:+5521999346020"}},[t._v(" 21 99934-6020 ")])],1),a("v-row",{staticClass:"mb-2"},[a("v-btn",{staticClass:"cor-marrom pl-3 text-lowercase",attrs:{text:"",href:"mailto:contato@carzebel.com.br"}},[t._v(" contato@carzebel.com.br ")])],1),a("v-row",[a("v-btn",{staticClass:"cor-marrom ml-2",attrs:{icon:"",href:"https://www.instagram.com/carzebeleventos/",target:"_blank"}},[a("v-icon",[t._v("mdi-instagram")])],1),a("v-btn",{staticClass:"cor-marrom ml-2",attrs:{icon:"",href:"https://www.facebook.com/carlamotacerimonial/",target:"_blank"}},[a("v-icon",[t._v("mdi-facebook")])],1)],1)],1)])},v=[],f=a("6544"),b=a.n(f),h=a("8336"),C=a("553a"),_=a("132d"),w=a("0fd9"),j={},x=Object(m["a"])(j,g,v,!1,null,null,null),y=x.exports;b()(x,{VBtn:h["a"],VFooter:C["a"],VIcon:_["a"],VRow:w["a"]});var V={name:"App",components:{Cabecalho:d,Rodape:y}},O=V,k=(a("c927"),a("7496")),E=a("a609"),D=a("a523"),P=a("a75b"),L=Object(m["a"])(O,s,i,!1,null,"7c8fb518",null),S=L.exports;b()(L,{VApp:k["a"],VBtn:h["a"],VBtnToggle:E["a"],VContainer:D["a"],VContent:P["a"],VIcon:_["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-img",{attrs:{src:"img/capa.jpg"}})],1)},$=[],z=a("adda"),M={},q=Object(m["a"])(M,I,$,!1,null,null,null),A=q.exports;b()(q,{VImg:z["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("CarrosselEventos"),a("aside",{staticClass:"py-10"},[a("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},t._l(t.listaCerimonias,(function(e){return a("v-col",{key:e,staticClass:"coluna-lista-cerimonial",attrs:{cols:"6",md:"4"}},[a("v-card",{staticClass:"cor-marrom font-weight-light mb-2",attrs:{tile:"",elevation:"0"}},[t._v(" "+t._s(e)+" ")])],1)})),1),a("h3",{staticClass:"font-weight-light text-center mb-5"},[t._v("Mais Serviços")]),a("v-row",{attrs:{"no-gutters":""}},t._l(t.listaServicos,(function(e){return a("v-col",{key:e,staticClass:"coluna-lista-cerimonial",attrs:{cols:"6",md:"4"}},[a("v-card",{staticClass:"cor-marrom font-weight-light mb-2",attrs:{tile:"",elevation:"0"}},[t._v(" "+t._s(e)+" ")])],1)})),1)],1)],1)},R=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-slide-group",{attrs:{"center-active":"",value:t.imagensEventos.findIndex((function(e){return e==t.imagemDestacada}))}},t._l(t.imagensEventos,(function(e){return a("v-slide-item",{key:t.imagensEventos.findIndex((function(t){return t.src==e.src}))},[a("v-card",{staticClass:"overflow-hidden thumb-evento",attrs:{tile:"",ripple:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-img",{staticClass:"fill-height",attrs:{src:""+e.src,"lazy-src":""+e.src},on:{click:function(a){return a.stopPropagation(),t.destacarImagemClicada(e)}}})],1)],1)],1)})),1),a("v-dialog",{attrs:{"overlay-color":"#fff","content-class":"ma-0","overlay-opacity":"0.8"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.imagemDestacada?a("v-card",[a("v-img",{attrs:{src:""+t.imagemDestacada.src}})],1):t._e()],1)],1)},F=[],H={methods:{destacarImagemClicada:function(t){t&&(this.dialog=!0,this.imagemDestacada=t)}},data:function(){return{dialog:!1,imagemDestacada:null,imagensEventos:[{src:"../img/imagens-eventos/1.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/2.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/3.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/4.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/5.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/6.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/7.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/8.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/9.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/10.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/11.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:"../img/imagens-eventos/12.jpg",legenda:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]}}},J=H,G=(a("543f"),a("b0af")),N=a("169a"),U=a("7efd"),K=a("9dbe"),Q=Object(m["a"])(J,T,F,!1,null,"e05ab508",null),W=Q.exports;b()(Q,{VCard:G["a"],VDialog:N["a"],VImg:z["a"],VRow:w["a"],VSlideGroup:U["a"],VSlideItem:K["a"]});var X={data:function(){return{listaCerimonias:["Casamentos","15 Anos","Chás Diversos","Bodas","Aniversários","Confraternizações"],listaServicos:["Buquês","Decoração","Atrações Musicais","Passeios/Transporte"]}},components:{CarrosselEventos:W}},Y=X,Z=(a("ff64"),a("62ad")),tt=Object(m["a"])(Y,B,R,!1,null,"37d7a329",null),et=tt.exports;b()(tt,{VCard:G["a"],VCol:Z["a"],VRow:w["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-img",{staticClass:"mb-3",attrs:{src:"img/carla.jpg"}}),a("v-container",[a("p",[t._v(" Proin nec turpis dignissim, luctus libero quis, bibendum augue. Vivamus non ipsum molestie, tempor velit vel, ultrices tellus. Vivamus elementum ultrices ante varius mattis. Donec sed pulvinar diam, at iaculis urna. Vestibulum gravida lectus massa, ut iaculis lorem hendrerit ac. Donec non mattis leo. Donec sapien urna, iaculis in commodo id, tempus a ante. Suspendisse non faucibus nibh. ")]),a("p",[t._v(" Donec ultricies nisi metus. Curabitur enim quam, feugiat a tellus ac, dictum sodales urna. Nunc imperdiet arcu a dui pharetra feugiat. Ut imperdiet vestibulum lacus aliquet rutrum. Cras porttitor lorem tincidunt scelerisque tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi mattis, arcu eu tempor eleifend, purus ipsum vehicula mauris, nec ultricies nibh magna vel ipsum. ")])])],1)},rt=[],nt={},st=Object(m["a"])(nt,at,rt,!1,null,null,null),it=st.exports;b()(st,{VContainer:D["a"],VImg:z["a"]});var ot=a("f309");r["a"].use(ot["a"]);var ct=new ot["a"]({});r["a"].use(n["a"]);var lt=new n["a"]({mode:"history",routes:[{path:"/",component:A},{path:"/cerimonial",component:et},{path:"/sobre",component:it}]});new r["a"]({router:lt,vuetify:ct,render:function(t){return t(S)}}).$mount("#app")},7716:function(t,e,a){},c347:function(t,e,a){},c927:function(t,e,a){"use strict";var r=a("e14f"),n=a.n(r);n.a},dc11:function(t,e,a){},e14f:function(t,e,a){},f50e:function(t,e,a){"use strict";var r=a("7716"),n=a.n(r);n.a},ff64:function(t,e,a){"use strict";var r=a("c347"),n=a.n(r);n.a}});
//# sourceMappingURL=app.ae0d888d.js.map