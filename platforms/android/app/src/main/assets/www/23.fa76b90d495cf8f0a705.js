(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Tgrq:function(e,t,n){"use strict";n.r(t),n.d(t,"EnvironnementModule",(function(){return ae}));var i=n("Valr"),o=n("DUip"),r=n("mrSG"),a=n("ETwC"),c=n("Byqp"),b=n("nbAZ"),l=n("TYT/"),u=n("RdOO"),m=n("p+mS"),s=n("GsDI"),d=n("uLXW");function p(e,t){1&e&&(l.Xb(0,"th",16),l.Jc(1," Date et Heure "),l.Wb())}var f=function(e){return["/layouts/environnement/env-view",e]};function v(e,t){if(1&e&&(l.Xb(0,"mat-cell"),l.Xb(1,"a",17),l.Jc(2),l.kc(3,"date"),l.Wb(),l.Wb()),2&e){var n=t.$implicit;l.Db(1),l.pc("routerLink",l.tc(5,f,n.id)),l.Db(1),l.Kc(l.mc(3,2,n.Created.toDate(),"dd/MM/yyyy HH:mm:ss"))}}function g(e,t){1&e&&(l.Xb(0,"th",16),l.Jc(1," Calamit\xe9 Naturel Recente "),l.Wb())}function h(e,t){if(1&e&&(l.Xb(0,"td",18),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.Db(1),l.Lc(" ",n.CalamiteNaturelRecente,"")}}function C(e,t){1&e&&(l.Xb(0,"th",16),l.Jc(1," Air Proteg\xe9 "),l.Wb())}function W(e,t){if(1&e&&(l.Xb(0,"td",18),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.Db(1),l.Lc(" ",n.AirProtege,"")}}function X(e,t){1&e&&(l.Xb(0,"th",16),l.Jc(1," Modifiez "),l.Wb())}var y=function(e){return["/layouts/environnement/env-edit",e]};function D(e,t){if(1&e&&(l.Xb(0,"td",18),l.Xb(1,"a",17),l.Xb(2,"mat-icon"),l.Jc(3,"create"),l.Wb(),l.Wb(),l.Wb()),2&e){var n=t.$implicit;l.Db(1),l.pc("routerLink",l.tc(1,y,n.id))}}function E(e,t){1&e&&(l.Xb(0,"th",16),l.Jc(1," Supprimez "),l.Wb())}function P(e,t){if(1&e){var n=l.Yb();l.Xb(0,"td",18),l.Xb(1,"a",19),l.fc("click",(function(){l.Ac(n);var e=t.$implicit;return l.jc().removeProduct(e.id)})),l.Xb(2,"mat-icon"),l.Jc(3,"delete_sweep"),l.Wb(),l.Wb(),l.Wb()}}function w(e,t){1&e&&l.Sb(0,"tr",20)}function J(e,t){1&e&&l.Sb(0,"tr",21)}var R=function(){return[10,20,30]},S=function(){function e(e,t){this.envService=e,this.router=t,this.displayedColumns=["Created","CalamiteNaturelRecente","AirProtege","edit","remove"]}return e.prototype.ngOnInit=function(){var e=this;this.envService.getEnvironementByAgent().subscribe((function(t){var n=t.map((function(e){return Object(r.a)({id:e.payload.doc.id},e.payload.doc.data())}));e.dataSource=new a.k(n),e.dataSource.sort=e.sort,e.dataSource.paginator=e.paginator}))},e.prototype.addProductClick=function(){this.router.navigate(["/layouts/environnement/env-add"])},e.prototype.removeProduct=function(e){this.envService.removeEnvironementByID(e)},e.\u0275fac=function(t){return new(t||e)(l.Rb(u.a),l.Rb(o.e))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-env-list"]],viewQuery:function(e,t){var n;1&e&&(l.Fc(c.a,!0),l.Fc(b.a,!0)),2&e&&(l.wc(n=l.gc())&&(t.sort=n.first),l.wc(n=l.gc())&&(t.paginator=n.first))},decls:26,vars:5,consts:[[1,"container","eco-list"],["mat-raised-button","","color","primary",1,"primary-background","w-180","mat-elevation-z8",3,"click"],["fxLayout","column",1,"m-10","mat-elevation-z8"],[1,"example-container","mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","Created","sticky",""],["mat-header-cell","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","CalamiteNaturelRecente"],["mat-cell","",4,"matCellDef"],["matColumnDef","AirProtege"],["matColumnDef","edit"],["matColumnDef","remove"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],[3,"routerLink"],["mat-cell",""],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(l.Xb(0,"section",0),l.Xb(1,"button",1),l.fc("click",(function(){return t.addProductClick()})),l.Xb(2,"mat-icon"),l.Jc(3,"add"),l.Wb(),l.Wb(),l.Sb(4,"br"),l.Xb(5,"div",2),l.Xb(6,"div",3),l.Xb(7,"table",4),l.Vb(8,5),l.Hc(9,p,2,0,"th",6),l.Hc(10,v,4,7,"mat-cell",7),l.Ub(),l.Vb(11,8),l.Hc(12,g,2,0,"th",6),l.Hc(13,h,2,1,"td",9),l.Ub(),l.Vb(14,10),l.Hc(15,C,2,0,"th",6),l.Hc(16,W,2,1,"td",9),l.Ub(),l.Vb(17,11),l.Hc(18,X,2,0,"th",6),l.Hc(19,D,4,3,"td",9),l.Ub(),l.Vb(20,12),l.Hc(21,E,2,0,"th",6),l.Hc(22,P,4,0,"td",9),l.Ub(),l.Hc(23,w,1,0,"tr",13),l.Hc(24,J,1,0,"tr",14),l.Wb(),l.Sb(25,"mat-paginator",15),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Db(7),l.pc("dataSource",t.dataSource),l.Db(16),l.pc("matHeaderRowDef",t.displayedColumns),l.Db(1),l.pc("matRowDefColumns",t.displayedColumns),l.Db(1),l.pc("pageSizeOptions",l.sc(4,R)))},directives:[m.b,s.a,d.c,a.j,c.a,a.c,a.e,a.b,a.g,a.i,b.a,a.d,a.a,o.h,a.f,a.h],pipes:[i.e],styles:[".eco-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.eco-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;margin-right:10px}.example-container[_ngcontent-%COMP%]{overflow:auto}a[_ngcontent-%COMP%]{text-decoration:none}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center;border-right:1px solid #e0e0e0;padding-left:10px;padding-right:10px;padding-top:5px}td.mat-column-star[_ngcontent-%COMP%]{width:20px}td.mat-column-position[_ngcontent-%COMP%], th.mat-column-position[_ngcontent-%COMP%]{padding-left:5px}.mat-table-sticky[_ngcontent-%COMP%]:first-child{border-right:1px solid #e0e0e0}"]}),e}(),x=n("QJY3"),O=n("2WpN"),L=n("l8De"),I=n("gZta"),N=n("tOvj"),F=n("5msO"),M=n("mWkv"),k=n("eHTH"),A=n("cSbt"),H=n("TmZT");function U(e,t){if(1&e&&(l.Xb(0,"mat-radio-button",18),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.pc("value",n),l.Db(1),l.Lc(" ",n," ")}}function _(e,t){if(1&e&&(l.Xb(0,"mat-radio-button",18),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.pc("value",n),l.Db(1),l.Lc(" ",n," ")}}function q(e,t){if(1&e&&(l.Xb(0,"option",19),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.qc("value",n.name),l.Db(1),l.Kc(n.name)}}function G(e,t){if(1&e&&(l.Xb(0,"option",19),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.qc("value",n),l.Db(1),l.Kc(n)}}function T(e,t){if(1&e&&(l.Xb(0,"option",19),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.qc("value",n),l.Db(1),l.Kc(n)}}var V=function(){function e(e,t,n,i,o){this.storage=e,this.db=t,this.fb=n,this.envService=i,this.snackbar=o,this.qualite=["Tr\xe8s Bonne","Bonne","Moyen","Mauvaise","Tr\xe8s Mauvaise"],this.booleen=["OUI","NON"],this.EnvironementInfo={id:"",CalamiteNaturelRecente:"",AirProtege:"",RapportGeneralEnvironement:"",Province:"",CommunaleUrbain:"",CheferieSecteur:"",Created:null,agentId:""},this.isPreview=!1,this.isLoading=!1,this.countryList=L.a}return e.prototype.ngOnInit=function(){this.getUserId(),this.makingaddEnvironementForm()},e.prototype.makingaddEnvironementForm=function(){this.addEnvironementForm=this.fb.group({CalamiteNaturelRecente:["",x.r.required],AirProtege:["",x.r.required],RapportGeneralEnvironement:["",x.r.required],agentId:[""],Province:["",x.r.required],CommunaleUrbain:["",x.r.required],CheferieSecteur:["",x.r.required]})},e.prototype.getUserId=function(){var e=this;this.envService.getUserId().subscribe((function(t){e.getAgentId=t}))},e.prototype.onSubmit=function(){this.addEnvironementForm.valid?(this.isLoading=!0,this.EnvironementInfo={CalamiteNaturelRecente:this.addEnvironementForm.value.CalamiteNaturelRecente,AirProtege:this.addEnvironementForm.value.AirProtege,RapportGeneralEnvironement:this.addEnvironementForm.value.RapportGeneralEnvironement,Province:this.addEnvironementForm.value.Province,CommunaleUrbain:this.addEnvironementForm.value.CommunaleUrbain,CheferieSecteur:this.addEnvironementForm.value.CheferieSecteur,Created:new Date,agentId:this.getAgentId},this.envService.createEnvironement(this.EnvironementInfo),this.addEnvironementForm.reset(),this.showSnackbar()):this.openErrorBar()},e.prototype.showSnackbar=function(){this.snackbar.open("Rapports Envoy\xe9!","",{duration:6e3})},e.prototype.openErrorBar=function(){this.snackbar.open("Erreur d'enregistrement!","",{duration:6e3})},e.prototype.changeCountry=function(e){this.ville=this.countryList.find((function(t){return t.name==e})).ville,this.secteurCheferie=this.countryList.find((function(t){return t.name==e})).secteurCheferie},e.prototype.toggleHover=function(e){this.isHovering=e},e.prototype.startUpload=function(e){var t=this;this.isPreview=!0;var n=e.item(0);if("image"===n.type.split("/")[0]){var i="Environement/"+(new Date).getTime()+"_"+n.name;this.storage.ref(i),this.task=this.storage.upload(i,n,{customMetadata:{app:"My AngularFire-powered PWA!"}}),this.percentage=this.task.percentageChanges(),this.snapshot=this.task.snapshotChanges().pipe(Object(O.a)((function(){t.downloadURL=t.storage.ref(i).getDownloadURL(),console.log(t.downloadURL),t.downloadURL.subscribe((function(e){e&&(t.imgDownloadUrl=e)}))})))}else console.error("unsupported file type :( ")},e.prototype.isActive=function(e){return"running"===e.state&&e.bytesTransferred<e.totalBytes},e.\u0275fac=function(t){return new(t||e)(l.Rb(I.a),l.Rb(N.a),l.Rb(x.c),l.Rb(u.a),l.Rb(F.a))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-env-add"]],decls:42,vars:7,consts:[[1,"container"],[3,"formGroup"],["fxLayoutAlign","center center",1,"card","shadow","p-3","mb-5","bg-white","rounded"],[1,"form-row"],[1,"form-group","col-md-6"],["id","example-radio-group-label"],["aria-labelledby","example-radio-group-label","formControlName","CalamiteNaturelRecente",1,"example-radio-group"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],["aria-labelledby","example-radio-group-label","formControlName","AirProtege",1,"example-radio-group"],[1,"form-group","col-md-12"],["appearance","outline"],["matNativeControl","","formControlName","Province",3,"change"],[3,"value",4,"ngFor","ngForOf"],["matNativeControl","","formControlName","CommunaleUrbain"],["value","volvo"],["matNativeControl","","formControlName","CheferieSecteur"],["data","<p>Etat G\xe9n\xe9ral Environnemental.</p>","formControlName","RapportGeneralEnvironement"],["type","submit","mat-raised-button","","color","primary",1,"btn",3,"disabled","click"],[1,"example-radio-button",3,"value"],[3,"value"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Xb(1,"form",1),l.Xb(2,"div",2),l.Xb(3,"div",3),l.Xb(4,"div",4),l.Xb(5,"label",5),l.Jc(6,"Calamit\xe9 Naturel Recente"),l.Wb(),l.Xb(7,"mat-radio-group",6),l.Hc(8,U,2,2,"mat-radio-button",7),l.Wb(),l.Wb(),l.Xb(9,"div",4),l.Xb(10,"label",5),l.Jc(11,"Air Proteg\xe9"),l.Wb(),l.Xb(12,"mat-radio-group",8),l.Hc(13,_,2,2,"mat-radio-button",7),l.Wb(),l.Wb(),l.Xb(14,"div",9),l.Xb(15,"mat-form-field",10),l.Xb(16,"mat-label"),l.Jc(17,"Province"),l.Wb(),l.Xb(18,"select",11),l.fc("change",(function(e){return t.changeCountry(e.target.value)})),l.Hc(19,q,2,2,"option",12),l.Wb(),l.Wb(),l.Xb(20,"mat-form-field",10),l.Xb(21,"mat-label"),l.Jc(22,"Ville"),l.Wb(),l.Xb(23,"select",13),l.Xb(24,"option",14),l.Jc(25,"== Aucun selectionner =="),l.Wb(),l.Hc(26,G,2,2,"option",12),l.Wb(),l.Wb(),l.Xb(27,"mat-form-field",10),l.Xb(28,"mat-label"),l.Jc(29,"Chefferie / Secteur"),l.Wb(),l.Xb(30,"select",15),l.Xb(31,"option",14),l.Jc(32,"== Aucun selectionner =="),l.Wb(),l.Hc(33,T,2,2,"option",12),l.Wb(),l.Wb(),l.Xb(34,"div",9),l.Xb(35,"mat-label"),l.Jc(36,"Etat G\xe9n\xe9ral Environnemental"),l.Wb(),l.Sb(37,"ckeditor",16),l.Wb(),l.Wb(),l.Xb(38,"div"),l.Xb(39,"div",9),l.Xb(40,"button",17),l.fc("click",(function(){return t.onSubmit()})),l.Jc(41," Enregistrer "),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Db(1),l.pc("formGroup",t.addEnvironementForm),l.Db(7),l.pc("ngForOf",t.booleen),l.Db(5),l.pc("ngForOf",t.booleen),l.Db(6),l.pc("ngForOf",t.countryList),l.Db(7),l.pc("ngForOf",t.ville),l.Db(7),l.pc("ngForOf",t.secteurCheferie),l.Db(7),l.pc("disabled",!t.addEnvironementForm.valid))},directives:[x.t,x.k,x.e,d.b,M.b,x.j,x.d,i.m,k.b,k.e,A.b,x.q,x.m,x.s,H.a,m.b,M.a],styles:[".btn[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}.example-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.example-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e}();function B(e,t){if(1&e&&(l.Xb(0,"mat-radio-button",18),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.pc("value",n),l.Db(1),l.Lc(" ",n," ")}}function j(e,t){if(1&e&&(l.Xb(0,"mat-radio-button",18),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.pc("value",n),l.Db(1),l.Lc(" ",n," ")}}function $(e,t){if(1&e&&(l.Xb(0,"option",19),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.qc("value",n.name),l.Db(1),l.Kc(n.name)}}function z(e,t){if(1&e&&(l.Xb(0,"option",19),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.qc("value",n),l.Db(1),l.Kc(n)}}function K(e,t){if(1&e&&(l.Xb(0,"option",19),l.Jc(1),l.Wb()),2&e){var n=t.$implicit;l.qc("value",n),l.Db(1),l.Kc(n)}}var Y=function(){function e(e,t,n,i,o){this.storage=e,this.fb=t,this.envService=n,this.snackbar=i,this.route=o,this.qualite=["Tr\xe8s Bonne","Bonne","Moyen","Mauvaise","Tr\xe8s Mauvaise"],this.booleen=["OUI","NON"],this.EnvironementInfo={id:"",CalamiteNaturelRecente:"",AirProtege:"",RapportGeneralEnvironement:"",Province:"",CommunaleUrbain:"",CheferieSecteur:"",Created:null,agentId:""},this.isPreview=!1,this.isLoading=!1,this.countryList=L.a}return e.prototype.ngOnInit=function(){this.makingaddEnvironementForm(),this.getSupplierID();var e=this.route.snapshot.paramMap.get("id");e&&(this.getProductby(e),this.environnementid=e)},e.prototype.makingaddEnvironementForm=function(){this.addEnvironementForm=this.fb.group({CalamiteNaturelRecente:["",x.r.required],AirProtege:["",x.r.required],RapportGeneralEnvironement:["",x.r.required],Province:[""],CommunaleUrbain:[""],CheferieSecteur:[""]})},e.prototype.onSubmit=function(){this.addEnvironementForm.valid?(this.isLoading=!0,this.EnvironementInfo={CalamiteNaturelRecente:this.addEnvironementForm.value.CalamiteNaturelRecente,AirProtege:this.addEnvironementForm.value.AirProtege,RapportGeneralEnvironement:this.addEnvironementForm.value.RapportGeneralEnvironement,Province:this.addEnvironementForm.value.Province,CommunaleUrbain:this.addEnvironementForm.value.CommunaleUrbain,CheferieSecteur:this.addEnvironementForm.value.CheferieSecteur,Created:new Date,agentId:this.getAgentID},this.envService.updateEnvironement(this.EnvironementInfo,this.environnementid),this.addEnvironementForm.reset(),this.showSnackbar()):this.openErrorBar()},e.prototype.showSnackbar=function(){this.snackbar.open("Rapports Environnement Modifier!","",{duration:6e3})},e.prototype.openErrorBar=function(){this.snackbar.open("Erreur de modification!","",{duration:6e3})},e.prototype.getSupplierID=function(){var e=this;this.envService.getUserId().subscribe((function(t){e.getAgentID=t}))},e.prototype.getProductby=function(e){var t=this;this.envService.getEnvironementByEnvironementId(e).subscribe((function(e){t.patchData(e.data),t.EnvironementInfo=e.data}))},e.prototype.patchData=function(e){this.addEnvironementForm.patchValue({CalamiteNaturelRecente:e.CalamiteNaturelRecente,AirProtege:e.AirProtege,RapportGeneralEnvironement:e.RapportGeneralEnvironement,Province:e.Province,CommunaleUrbain:e.CommunaleUrbain,CheferieSecteur:e.CheferieSecteur})},e.prototype.changeCountry=function(e){this.ville=this.countryList.find((function(t){return t.name==e})).ville,this.secteurCheferie=this.countryList.find((function(t){return t.name==e})).secteurCheferie},e.prototype.toggleHover=function(e){this.isHovering=e},e.prototype.startUpload=function(e){var t=this;this.isPreview=!0;var n=e.item(0);if("image"===n.type.split("/")[0]){var i="Product/"+(new Date).getTime()+"_"+n.name;this.storage.ref(i),this.task=this.storage.upload(i,n,{customMetadata:{app:"My AngularFire-powered PWA!"}}),this.percentage=this.task.percentageChanges(),this.snapshot=this.task.snapshotChanges().pipe(Object(O.a)((function(){t.downloadURL=t.storage.ref(i).getDownloadURL(),t.downloadURL.subscribe((function(e){e&&(t.imgDownloadUrl=e)}))})))}else console.error("unsupported file type :( ")},e.prototype.isActive=function(e){return"running"===e.state&&e.bytesTransferred<e.totalBytes},e.\u0275fac=function(t){return new(t||e)(l.Rb(I.a),l.Rb(x.c),l.Rb(u.a),l.Rb(F.a),l.Rb(o.a))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-env-edit"]],decls:42,vars:7,consts:[[1,"container"],[3,"formGroup"],["fxLayoutAlign","center center",1,"card","shadow","p-3","mb-5","bg-white","rounded"],[1,"form-row"],[1,"form-group","col-md-6"],["id","example-radio-group-label"],["aria-labelledby","example-radio-group-label","formControlName","CalamiteNaturelRecente",1,"example-radio-group"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],["aria-labelledby","example-radio-group-label","formControlName","AirProtege",1,"example-radio-group"],[1,"form-group","col-md-12"],["appearance","outline"],["matNativeControl","","formControlName","Province",3,"change"],[3,"value",4,"ngFor","ngForOf"],["matNativeControl","","formControlName","CommunaleUrbain"],["value","volvo"],["matNativeControl","","formControlName","CheferieSecteur"],["data","<p>Etat G\xe9n\xe9ral Environnemental.</p>","formControlName","RapportGeneralEnvironement"],["type","submit","mat-raised-button","","color","primary",1,"btn",3,"disabled","click"],[1,"example-radio-button",3,"value"],[3,"value"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Xb(1,"form",1),l.Xb(2,"div",2),l.Xb(3,"div",3),l.Xb(4,"div",4),l.Xb(5,"label",5),l.Jc(6,"Calamit\xe9 Naturel Recente"),l.Wb(),l.Xb(7,"mat-radio-group",6),l.Hc(8,B,2,2,"mat-radio-button",7),l.Wb(),l.Wb(),l.Xb(9,"div",4),l.Xb(10,"label",5),l.Jc(11,"Air Proteg\xe9"),l.Wb(),l.Xb(12,"mat-radio-group",8),l.Hc(13,j,2,2,"mat-radio-button",7),l.Wb(),l.Wb(),l.Xb(14,"div",9),l.Xb(15,"mat-form-field",10),l.Xb(16,"mat-label"),l.Jc(17,"Province"),l.Wb(),l.Xb(18,"select",11),l.fc("change",(function(e){return t.changeCountry(e.target.value)})),l.Hc(19,$,2,2,"option",12),l.Wb(),l.Wb(),l.Xb(20,"mat-form-field",10),l.Xb(21,"mat-label"),l.Jc(22,"Ville"),l.Wb(),l.Xb(23,"select",13),l.Xb(24,"option",14),l.Jc(25,"== Aucun selectionner =="),l.Wb(),l.Hc(26,z,2,2,"option",12),l.Wb(),l.Wb(),l.Xb(27,"mat-form-field",10),l.Xb(28,"mat-label"),l.Jc(29,"Chefferie / Secteur"),l.Wb(),l.Xb(30,"select",15),l.Xb(31,"option",14),l.Jc(32,"== Aucun selectionner =="),l.Wb(),l.Hc(33,K,2,2,"option",12),l.Wb(),l.Wb(),l.Xb(34,"div",9),l.Xb(35,"mat-label"),l.Jc(36,"Etat G\xe9n\xe9ral Environnemental"),l.Wb(),l.Sb(37,"ckeditor",16),l.Wb(),l.Wb(),l.Xb(38,"div"),l.Xb(39,"div",9),l.Xb(40,"button",17),l.fc("click",(function(){return t.onSubmit()})),l.Jc(41," Modifier "),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&e&&(l.Db(1),l.pc("formGroup",t.addEnvironementForm),l.Db(7),l.pc("ngForOf",t.booleen),l.Db(5),l.pc("ngForOf",t.booleen),l.Db(6),l.pc("ngForOf",t.countryList),l.Db(7),l.pc("ngForOf",t.ville),l.Db(7),l.pc("ngForOf",t.secteurCheferie),l.Db(7),l.pc("disabled",!t.addEnvironementForm.valid))},directives:[x.t,x.k,x.e,d.b,M.b,x.j,x.d,i.m,k.b,k.e,A.b,x.q,x.m,x.s,H.a,m.b,M.a],styles:[".btn[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}.example-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.example-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e}(),Z=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Lb({type:e,selectors:[["app-environnement"]],decls:3,vars:0,consts:[[1,"banner"]],template:function(e,t){1&e&&(l.Xb(0,"div",0),l.Jc(1,"ASPECT ENVIRONNEMENTALE"),l.Wb(),l.Sb(2,"router-outlet"))},directives:[o.j],styles:[".banner[_ngcontent-%COMP%]{border-left:6px solid green;height:40px;margin-top:10px;margin-left:10px;padding-top:10px;padding-left:10px;font-size:20px}"]}),e}(),Q=n("vjX4"),ee=n("uad8");function te(e,t){1&e&&(l.Xb(0,"div",3),l.Xb(1,"div",4),l.Sb(2,"mat-spinner"),l.Wb(),l.Wb())}function ne(e,t){if(1&e&&(l.Xb(0,"div",5),l.Xb(1,"div",6),l.Xb(2,"h3",7),l.Jc(3),l.kc(4,"date"),l.Wb(),l.Sb(5,"br"),l.Xb(6,"ul",8),l.Xb(7,"li",9),l.Xb(8,"b"),l.Jc(9,"Calamit\xe9 Naturel R\xe9cente:"),l.Wb(),l.Jc(10),l.Wb(),l.Xb(11,"li",9),l.Xb(12,"b"),l.Jc(13,"Air Proteg\xe9:"),l.Wb(),l.Jc(14),l.Wb(),l.Wb(),l.Xb(15,"ul",8),l.Xb(16,"li",9),l.Xb(17,"b"),l.Jc(18,"Province:"),l.Wb(),l.Jc(19),l.Wb(),l.Xb(20,"li",9),l.Xb(21,"b"),l.Jc(22,"Ville:"),l.Wb(),l.Jc(23),l.Wb(),l.Xb(24,"li",9),l.Xb(25,"b"),l.Jc(26,"Cheferie / Secteur:"),l.Wb(),l.Jc(27),l.Wb(),l.Wb(),l.Sb(28,"br"),l.Xb(29,"div"),l.Xb(30,"h4"),l.Xb(31,"b"),l.Jc(32,"Rapport detaill\xe9"),l.Wb(),l.Wb(),l.Sb(33,"div",10),l.Wb(),l.Wb(),l.Xb(34,"div",6),l.Xb(35,"h2"),l.Jc(36,"Information de l'\xe9diteur"),l.Wb(),l.Xb(37,"ul",8),l.Xb(38,"li",9),l.Xb(39,"b"),l.Jc(40,"Nom:"),l.Wb(),l.Jc(41),l.Wb(),l.Xb(42,"li",9),l.Xb(43,"b"),l.Jc(44,"T\xe9l\xe9phone:"),l.Wb(),l.Jc(45),l.Wb(),l.Xb(46,"li",9),l.Xb(47,"b"),l.Jc(48,"Email:"),l.Wb(),l.Jc(49),l.Wb(),l.Xb(50,"li",9),l.Xb(51,"b"),l.Jc(52,"Adresse physique:"),l.Wb(),l.Jc(53),l.Wb(),l.Xb(54,"li",9),l.Xb(55,"b"),l.Jc(56,"Niveau d'acr\xe9ditation:"),l.Wb(),l.Jc(57),l.Wb(),l.Xb(58,"li",9),l.Xb(59,"b"),l.Jc(60,"Etat Civile:"),l.Wb(),l.Jc(61),l.Wb(),l.Xb(62,"li",9),l.Xb(63,"b"),l.Jc(64,"Identifiant Unique:"),l.Wb(),l.Jc(65),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&e){var n=l.jc();l.Db(3),l.Lc("Rapport du ",l.mc(4,14,n.environnemntView.Created,"dd/MM/yyy \xe0 H:mm:ss"),""),l.Db(7),l.Lc(" ",n.environnemntView.CalamiteNaturelRecente,""),l.Db(4),l.Lc(" ",n.environnemntView.AirProtege,""),l.Db(5),l.Lc(" ",n.environnemntView.Province,""),l.Db(4),l.Lc(" ",n.environnemntView.CommunaleUrbain,""),l.Db(4),l.Lc(" ",n.environnemntView.CheferieSecteur,""),l.Db(6),l.pc("innerHTML",n.environnemntView.RapportGeneralEnvironement,l.Bc),l.Db(8),l.Lc(" ",n.agentInfo.name,""),l.Db(4),l.Lc(" ",n.agentInfo.phoneNumber,""),l.Db(4),l.Lc(" ",n.agentInfo.email,""),l.Db(4),l.Lc(" ",n.agentInfo.useraddress,""),l.Db(4),l.Lc(" ",n.agentInfo.role,""),l.Db(4),l.Lc(" ",n.agentInfo.etatCivile,""),l.Db(4),l.Lc(" ",n.agentInfo.uid,"")}}var ie=[{path:"",component:Z,children:[{path:"env-list",component:S},{path:"env-add",component:V},{path:"env-edit/:id",component:Y},{path:"env-view/:id",component:function(){function e(e,t,n){this.route=e,this.envService=t,this.security=n,this.environnemntView={},this.loading=!1;var i=this.route.snapshot.paramMap.get("id");this.getDetails(i)}return e.prototype.ngOnInit=function(){this.setRole()},e.prototype.setRole=function(){var e=this;this.security.getRole().subscribe((function(t){e.currentRole=t}))},e.prototype.getEnvironnemntViewby=function(e){var t=this;this.loading=!0,this.envService.getEnvironementByEnvironementId(e).subscribe((function(e){t.environementData=e,t.envService.getProfileByAgentId(e.data.agentId).subscribe((function(e){t.agentInfo=e.data,t.loading=!1}),(function(e){t.loading=!1}))}),(function(e){t.loading=!1}))},e.prototype.getDetails=function(e){var t=this;this.loading=!0,this.envService.getOneProduct(e).subscribe((function(e){t.environnemntView=e,t.envService.getProfileByAgentId(e.agentId).subscribe((function(e){t.agentInfo=e.data,t.loading=!1}),(function(e){t.loading=!1})),t.loading=!1}))},e.\u0275fac=function(t){return new(t||e)(l.Rb(o.a),l.Rb(u.a),l.Rb(Q.a))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-env-view"]],decls:3,vars:2,consts:[["class","container",4,"ngIf"],[1,"container","m"],["fxLayout","column","fxLayoutAlign","flex-start flex-start",4,"ngIf"],[1,"container"],[1,"d-flex","justify-content-center"],["fxLayout","column","fxLayoutAlign","flex-start flex-start"],[1,"card","shadow","p-3","mb-5","bg-white","rounded"],[1,"text-break"],[1,"list-group","list-group-flush"],[1,"list-group-item","text-break"],[1,"text-justify",3,"innerHTML"]],template:function(e,t){1&e&&(l.Hc(0,te,3,0,"div",0),l.Xb(1,"div",1),l.Hc(2,ne,66,17,"div",2),l.Wb()),2&e&&(l.pc("ngIf",t.loading),l.Db(2),l.pc("ngIf",!t.loading))},directives:[i.n,ee.b,d.c,d.b],pipes:[i.e],styles:[""]}),e}()},{path:"",redirectTo:"env-list",pathMatch:"full"}]}],oe=function(){function e(){}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)},imports:[[o.i.forChild(ie)],o.i]}),e}(),re=n("PCNd"),ae=function(){function e(){}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)},imports:[[i.c,oe,re.a]]}),e}()}}]);