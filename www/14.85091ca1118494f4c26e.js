(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{KBiM:function(t,e,a){"use strict";a.r(e),a.d(e,"SanteCovidModule",(function(){return z}));var i=a("Valr"),n=a("DUip"),o=a("TYT/"),c=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Lb({type:t,selectors:[["app-sante-covid"]],decls:1,vars:0,template:function(t,e){1&t&&o.Sb(0,"router-outlet")},directives:[n.j],styles:[""]}),t}(),r=a("mrSG"),s=a("o1mG");function l(t,e){if(1&t&&(o.Xb(0,"tbody"),o.Xb(1,"tr"),o.Xb(2,"th",4),o.Jc(3,"1"),o.Wb(),o.Xb(4,"td"),o.Jc(5),o.Wb(),o.Xb(6,"td"),o.Jc(7),o.Wb(),o.Xb(8,"td"),o.Jc(9),o.Wb(),o.Wb(),o.Wb()),2&t){var a=e.$implicit;o.Db(5),o.Lc(" ",a.NbreTotalContamine," "),o.Db(2),o.Lc(" ",a.NbreTotalGueris," "),o.Db(2),o.Lc(" ",a.NbreTotalDeces," ")}}var d=function(){function t(t){var e=this;this.convidServices=t,this.data=[],this.covidData=[],this.options={},this.convidServices.getAllCovid().subscribe((function(t){var a=t.map((function(t){return Object(r.a)({id:t.payload.doc.id},t.payload.doc.data())}));e.processData(a),e.covid=a}))}return t.prototype.ngOnInit=function(){},t.prototype.processData=function(t){var e=this;for(var a in this.data=[],this.covidData=[],t.forEach((function(t){e.data[t.NbreTotalContamine]?e.data[t.NbreTotalContamine]+=e.data[t.NbreTotalContamine]:e.data[t.NbreTotalContamine]=e.data[t.NbreTotalContamine]})),this.data)this.covidData.push({vavlue:this.data[a]})},t.\u0275fac=function(e){return new(e||t)(o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-contamine-nouveau"]],decls:16,vars:2,consts:[[1,"header"],[1,"table","table-bordered"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Jc(1,"NOMBRE DE PERSONNES COMTAMINES"),o.Wb(),o.Sb(2,"br"),o.Xb(3,"table",1),o.Xb(4,"thead"),o.Xb(5,"tr"),o.Xb(6,"th",2),o.Jc(7,"#"),o.Wb(),o.Xb(8,"th",2),o.Jc(9,"Nouveau cas"),o.Wb(),o.Xb(10,"th",2),o.Jc(11,"Gueris"),o.Wb(),o.Xb(12,"th",2),o.Jc(13,"D\xe9c\xe8s"),o.Wb(),o.Wb(),o.Wb(),o.Hc(14,l,10,3,"tbody",3),o.Wb(),o.Jc(15)),2&t&&(o.Db(14),o.pc("ngForOf",e.covid),o.Db(1),o.Lc(" ",e.covidData,""))},directives:[i.m],styles:[".header[_ngcontent-%COMP%]{font:outline;font-weight:800;text-align:center}"]}),t}(),u=a("z2hY"),p=function(){function t(t){var e=this;this.covidService=t,this.data=[],this.covidData=[],this.covidData1=[],this.options={},this.covidService.getAllCovid().subscribe((function(t){var a=t.map((function(t){return Object(r.a)({Province:t.payload.doc.Province},t.payload.doc.data())}));e.processData(a),e.processData1(a),e.options={backgroundColor:"#ffffff",color:["#0078D7","#B13138","#FFCB2E","#FF4081","#439842","#49326D"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e.covidData,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#FFCB2E"}},axisLabel:{textStyle:{color:"#000000"}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#49326D"}},splitLine:{lineStyle:{color:"#439842"}},axisLabel:{textStyle:{color:"#000000"}}}],series:[{name:"Score",type:"bar",barWidth:"60%",data:e.covidData1}]}}))}return t.prototype.processData=function(t){var e=this;for(var a in this.data=[],this.covidData=[],t.forEach((function(t){e.data[t.NbreTotalContamine]?e.data[t.NbreTotalContamine]+=1:e.data[t.NbreTotalContamine]=1})),this.data)this.covidData.push({name:a,value:this.data[a]})},t.prototype.processData1=function(t){var e=this;for(var a in this.data=[],this.covidData1=[],t.forEach((function(t){e.data[t.Province]?e.data[t.Province]+=1:e.data[t.Province]=1})),this.data)this.covidData1.push({name:a,value:this.data[a]})},t.\u0275fac=function(e){return new(e||t)(o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-contamine-secteur-chefferie"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,e){1&t&&o.Sb(0,"div",0),2&t&&o.pc("options",e.options)},directives:[u.a],styles:[""]}),t}(),b=function(){function t(){this.options={},this.options={backgroundColor:"#ffffff",color:["#0078D7","#B13138","#FFCB2E","#FF4081","#439842","#49326D"],tooltip:{trigger:"none",axisPointer:{type:"cross"}},legend:{data:["2015 Precipitation","2016 Precipitation"],textStyle:{color:"#000000"}},grid:{top:70,bottom:50},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:"#B13138"}},axisLabel:{textStyle:{color:"#000000"}},axisPointer:{label:{formatter:function(t){return"Precipitation  "+t.value+(t.seriesData.length?"\uff1a"+t.seriesData[0].data:"")}}},data:["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]},{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:"#FF4081"}},axisLabel:{textStyle:{color:"#000000"}},axisPointer:{label:{formatter:function(t){return"Precipitation  "+t.value+(t.seriesData.length?"\uff1a"+t.seriesData[0].data:"")}}},data:["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11","2015-12"]}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#B13138"}},splitLine:{lineStyle:{color:"#B13138"}},axisLabel:{textStyle:{color:"#000000"}}}],series:[{name:"2015 Precipitation",type:"line",xAxisIndex:1,smooth:!0,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,52,6,2.3]},{name:"2016 Precipitation",type:"line",smooth:!0,data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,99,18.4,10.3,.7]},{name:"2016 Pluie",type:"line",smooth:!0,data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,99,18.4,10.3,.7]}]}}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Lb({type:t,selectors:[["app-contamine-ville"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(t,e){1&t&&o.Sb(0,"div",0),2&t&&o.pc("options",e.options)},directives:[u.a],styles:[""]}),t}(),f=function(){function t(t){var e=this;this.covidServices=t,this.data=[],this.covidData=[],this.options={},this.covidServices.getAllCovid().subscribe((function(t){var a=t.map((function(t){return Object(r.a)({id:t.payload.doc.id},t.payload.doc.data())}));e.processData(a),e.options={backgroundColor:"#ffffff",color:["#0078D7","#B13138","#FFCB2E","#FF4081","#439842","#49326D"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:e.covidData,textStyle:{color:"#000000"}},series:[{name:"Etat de financement des Structures Santaires",type:"pie",radius:"80%",center:["50%","50%"],data:e.covidData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"#F0F0F0"}},label:{normal:{textStyle:{color:"#000000"}}},labelLine:{normal:{lineStyle:{color:"#000000"}}}}]}}))}return t.prototype.ngOnInit=function(){},t.prototype.processData=function(t){var e=this;for(var a in this.data=[],this.covidData=[],t.forEach((function(t){e.data[t.EtatFinancementStructureSanitaire]?e.data[t.EtatFinancementStructureSanitaire]+=1:e.data[t.EtatFinancementStructureSanitaire]=1})),this.data)this.covidData.push({name:a,value:this.data[a]})},t.prototype.onChartInit=function(t){console.log(t)},t.\u0275fac=function(e){return new(e||t)(o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-etat-financement-covid"]],decls:3,vars:1,consts:[[1,"header"],["echarts","",1,"echart",3,"options","chartInit"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Jc(1,"ETAT DE FINANCEMENT DES STRUCTURES SANITAIRES"),o.Wb(),o.Xb(2,"div",1),o.fc("chartInit",(function(t){return e.onChartInit(t)})),o.Wb()),2&t&&(o.Db(2),o.pc("options",e.options))},directives:[u.a],styles:[".header[_ngcontent-%COMP%]{font:outline;font-weight:800;text-align:center}"]}),t}(),h=function(){function t(t){var e=this;this.convidServices=t,this.data=[],this.covidData=[],this.options={},this.convidServices.getAllCovid().subscribe((function(t){var a=t.map((function(t){return Object(r.a)({id:t.payload.doc.id},t.payload.doc.data())}));e.processData(a),e.options={backgroundColor:"#ffffff",color:["#0078D7","#B13138"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:e.covidData,textStyle:{color:"#000000"}},series:[{name:"Accesbilit\xe9 aux Structures Santaires par la Population",type:"pie",radius:"80%",center:["50%","50%"],data:e.covidData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"#F0F0F0"}},label:{normal:{textStyle:{color:"#000000"}}},labelLine:{normal:{lineStyle:{color:"#000000"}}}}]}}))}return t.prototype.ngOnInit=function(){},t.prototype.processData=function(t){var e=this;for(var a in this.data=[],this.covidData=[],t.forEach((function(t){e.data[t.AccesbiliteStructureSantairePopulation]?e.data[t.AccesbiliteStructureSantairePopulation]+=1:e.data[t.AccesbiliteStructureSantairePopulation]=1})),this.data)this.covidData.push({name:a,value:this.data[a]})},t.prototype.onChartInit=function(t){console.log(t)},t.\u0275fac=function(e){return new(e||t)(o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-accesibilite-structure-sanitaire-covid"]],decls:3,vars:1,consts:[[1,"header"],["echarts","",1,"echart",3,"options","chartInit"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Jc(1,"ACCESIBILITE AUX STRUCTURES SANITAIRE"),o.Wb(),o.Xb(2,"div",1),o.fc("chartInit",(function(t){return e.onChartInit(t)})),o.Wb()),2&t&&(o.Db(2),o.pc("options",e.options))},directives:[u.a],styles:[".header[_ngcontent-%COMP%]{font:outline;font-weight:800;text-align:center}"]}),t}(),v=["Bas-Uele","Equateur","Haut Katanga","Haut Lomami","Haut Uele","Ituri","Kasa\xef","Kasa\xef Oriental","Kongo Central","Kwango","Kwilu","Lomami","Lualaba","Kasa\xef Central","Ma\xef Ndombe","Maniema","Mongala","Nord Kivu","Nord Ubangi","Sankuru","Sud Kivu","Sud Ubangi","Nord Ubangi","Tshopo","Nord Ubangi","Kinshasa"],m=function(){function t(t){var e=this;this.convidServices=t,this.results=[],this.resultsData=[],this.province=v,this.options={},this.convidServices.getAllCovid().subscribe((function(t){var a=t.map((function(t){return Object(r.a)({id:t.payload.doc.id},t.payload.doc.data())}));e.processData(a),e.options={legend:{},tooltip:{},dataset:{dimensions:["Province","NbreTotalContaminer","NbreTotalGueris","NbreTotalDeces"],source:a},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}))}return t.prototype.ngOnInit=function(){},t.prototype.processData=function(t){var e=this;for(var a in this.results=[],this.resultsData=[],t.forEach((function(t){e.results[t.Province]?e.results[t.Province]+=1:e.results[t.Province]=1})),this.results)this.resultsData.push({name:a,value:this.results[a]})},t.prototype.processData1=function(t){var e=this;for(var a in this.results=[],this.resultsData=[],t.forEach((function(t){e.results[t.Date]?e.results[t.Date]+=Number(t.points):e.results[t.Date]=Number(t.points)})),this.results)this.results.push({name:a,value:this.results[a]})},t.\u0275fac=function(e){return new(e||t)(o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-province"]],decls:3,vars:1,consts:[[1,"header"],["echarts","",1,"echart",3,"options"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Jc(1,"ETAT DES STRUCTURES SANITAIRE"),o.Wb(),o.Sb(2,"div",1)),2&t&&(o.Db(2),o.pc("options",e.options))},directives:[u.a],styles:[".header[_ngcontent-%COMP%]{font:outline;font-weight:800;text-align:center}"]}),t}(),y=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Lb({type:t,selectors:[["app-sante-covid-home"]],decls:20,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"shadow","p-3","mb-5","bg-white","rounded"],[1,"col-md-6"]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Xb(1,"div",1),o.Xb(2,"div",2),o.Xb(3,"div",3),o.Sb(4,"app-contamine-nouveau"),o.Wb(),o.Wb(),o.Xb(5,"div",2),o.Xb(6,"div",3),o.Sb(7,"app-contamine-secteur-chefferie"),o.Wb(),o.Wb(),o.Xb(8,"div",2),o.Xb(9,"div",3),o.Sb(10,"app-contamine-ville"),o.Wb(),o.Wb(),o.Xb(11,"div",4),o.Xb(12,"div",3),o.Sb(13,"app-etat-financement-covid"),o.Wb(),o.Wb(),o.Xb(14,"div",4),o.Xb(15,"div",3),o.Sb(16,"app-accesibilite-structure-sanitaire-covid"),o.Wb(),o.Wb(),o.Xb(17,"div",2),o.Xb(18,"div",3),o.Sb(19,"app-province"),o.Wb(),o.Wb(),o.Wb(),o.Wb())},directives:[d,p,b,f,h,m],styles:[""]}),t}(),S=a("Byqp"),g=a("nbAZ"),D=a("ETwC"),C=a("eHTH"),x=a("cSbt"),W=a("uLXW"),X=a("GsDI");function P(t,e){1&t&&(o.Xb(0,"th",19),o.Jc(1," Date et Heure "),o.Wb())}var w=function(t){return["/layouts/sante/covid/covid-view",t]};function O(t,e){if(1&t&&(o.Xb(0,"mat-cell"),o.Xb(1,"a",20),o.Jc(2),o.kc(3,"date"),o.Wb(),o.Wb()),2&t){var a=e.$implicit;o.Db(1),o.pc("routerLink",o.tc(5,w,a.id)),o.Db(1),o.Kc(o.mc(3,2,a.Created.toDate(),"dd/MM/yyyy HH:mm:ss"))}}function L(t,e){1&t&&(o.Xb(0,"th",19),o.Jc(1," Etat Financement des Structures Sanitaire "),o.Wb())}function E(t,e){if(1&t&&(o.Xb(0,"td",21),o.Jc(1),o.Wb()),2&t){var a=e.$implicit;o.Db(1),o.Lc(" ",a.EtatFinancementStructureSanitaire,"")}}function T(t,e){1&t&&(o.Xb(0,"th",19),o.Jc(1," Accesbilit\xe9 aux Structures Santaire par la Population "),o.Wb())}function F(t,e){if(1&t&&(o.Xb(0,"td",21),o.Jc(1),o.Wb()),2&t){var a=e.$implicit;o.Db(1),o.Lc(" ",a.AccesbiliteStructureSantairePopulation,"")}}function A(t,e){1&t&&(o.Xb(0,"th",19),o.Jc(1," Province "),o.Wb())}function M(t,e){if(1&t&&(o.Xb(0,"td",21),o.Jc(1),o.Wb()),2&t){var a=e.$implicit;o.Db(1),o.Lc(" ",a.Province,"")}}function I(t,e){1&t&&(o.Xb(0,"th",19),o.Jc(1," Modifiez "),o.Wb())}var N=function(t){return["/layouts/sante/covid/covid-edit",t]};function J(t,e){if(1&t&&(o.Xb(0,"td",21),o.Xb(1,"a",20),o.Xb(2,"mat-icon"),o.Jc(3,"edit"),o.Wb(),o.Wb(),o.Wb()),2&t){var a=e.$implicit;o.Db(1),o.pc("routerLink",o.tc(1,N,a.id))}}function H(t,e){1&t&&(o.Xb(0,"th",19),o.Jc(1," Supprimez "),o.Wb())}function R(t,e){if(1&t){var a=o.Yb();o.Xb(0,"td",21),o.Xb(1,"a",22),o.fc("click",(function(){o.Ac(a);var t=e.$implicit;return o.jc().removeProduct(t.id)})),o.Xb(2,"mat-icon"),o.Jc(3,"delete_sweep"),o.Wb(),o.Wb(),o.Wb()}}function _(t,e){1&t&&o.Sb(0,"tr",23)}function k(t,e){1&t&&o.Sb(0,"tr",24)}var B=function(){return[10,20]},U=[{path:"",component:c,children:[{path:"sante-covid-home",component:y},{path:"sante-covid-list",component:function(){function t(t){this.convidService=t,this.displayedColumns=["Created","EtatFinancementStructureSanitaire","AccesbiliteStructureSantairePopulation","Province","edit","remove"]}return t.prototype.ngOnInit=function(){var t=this;this.convidService.getAllCovid().subscribe((function(e){var a=e.map((function(t){return Object(r.a)({id:t.payload.doc.id},t.payload.doc.data())}));t.dataSource=new D.k(a),t.dataSource.sort=t.sort,t.dataSource.paginator=t.paginator}))},t.prototype.applyFilter=function(t){this.dataSource.filter=t.target.value.trim().toLowerCase()},t.prototype.removeProduct=function(t){this.convidService.removeCovidByID(t)},t.\u0275fac=function(e){return new(e||t)(o.Rb(s.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-sante-covid-list"]],viewQuery:function(t,e){var a;1&t&&(o.Fc(S.a,!0),o.Fc(g.a,!0)),2&t&&(o.wc(a=o.gc())&&(e.sort=a.first),o.wc(a=o.gc())&&(e.paginator=a.first))},decls:32,vars:5,consts:[[1,"header"],[1,"container","eco-list"],["appearance","fill"],["matInput","","placeholder","Ex. kinshasa",3,"keyup"],["fxLayout","column",1,"m-10","mat-elevation-z8"],[1,"example-container","mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","Created","sticky","","matSort",""],["mat-header-cell","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","EtatFinancementStructureSanitaire"],["mat-cell","",4,"matCellDef"],["matColumnDef","AccesbiliteStructureSantairePopulation"],["matColumnDef","Province"],["matColumnDef","edit"],["matColumnDef","remove"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],[3,"routerLink"],["mat-cell",""],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.Xb(0,"div",0),o.Jc(1,"Liste compl\xe8te des rapports sur COVID-19"),o.Wb(),o.Xb(2,"section",1),o.Xb(3,"mat-form-field",2),o.Xb(4,"mat-label"),o.Jc(5,"Recherche"),o.Wb(),o.Xb(6,"input",3),o.fc("keyup",(function(t){return e.applyFilter(t)})),o.Wb(),o.Wb(),o.Sb(7,"br"),o.Xb(8,"div",4),o.Xb(9,"div",5),o.Xb(10,"table",6),o.Vb(11,7),o.Hc(12,P,2,0,"th",8),o.Hc(13,O,4,7,"mat-cell",9),o.Ub(),o.Vb(14,10),o.Hc(15,L,2,0,"th",8),o.Hc(16,E,2,1,"td",11),o.Ub(),o.Vb(17,12),o.Hc(18,T,2,0,"th",8),o.Hc(19,F,2,1,"td",11),o.Ub(),o.Vb(20,13),o.Hc(21,A,2,0,"th",8),o.Hc(22,M,2,1,"td",11),o.Ub(),o.Vb(23,14),o.Hc(24,I,2,0,"th",8),o.Hc(25,J,4,3,"td",11),o.Ub(),o.Vb(26,15),o.Hc(27,H,2,0,"th",8),o.Hc(28,R,4,0,"td",11),o.Ub(),o.Hc(29,_,1,0,"tr",16),o.Hc(30,k,1,0,"tr",17),o.Wb(),o.Sb(31,"mat-paginator",18),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Db(10),o.pc("dataSource",e.dataSource),o.Db(19),o.pc("matHeaderRowDef",e.displayedColumns),o.Db(1),o.pc("matRowDefColumns",e.displayedColumns),o.Db(1),o.pc("pageSizeOptions",o.sc(4,B)))},directives:[C.b,C.e,x.b,W.c,D.j,D.c,S.a,D.e,D.b,D.g,D.i,g.a,D.d,D.a,n.h,X.a,D.f,D.h],pipes:[i.e],styles:[".mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.eco-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.eco-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;margin-right:10px}.example-container[_ngcontent-%COMP%]{overflow:auto}a[_ngcontent-%COMP%]{text-decoration:none}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center;border-right:1px solid #e0e0e0;padding-left:10px;padding-right:10px;padding-top:5px}td.mat-column-star[_ngcontent-%COMP%]{width:20px}td.mat-column-position[_ngcontent-%COMP%], th.mat-column-position[_ngcontent-%COMP%]{padding-left:5px}.mat-table-sticky[_ngcontent-%COMP%]:first-child{border-right:1px solid #e0e0e0}.header[_ngcontent-%COMP%]{font-size:20px;font-weight:800;text-align:center;margin-bottom:20px}"]}),t}()},{path:"",redirectTo:"sante-covid-home",pathMatch:"full"}]}],K=function(){function t(){}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[n.i.forChild(U)],n.i]}),t}(),j=a("PCNd"),z=function(){function t(){}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(e){return new(e||t)},imports:[[i.c,K,j.a]]}),t}()}}]);