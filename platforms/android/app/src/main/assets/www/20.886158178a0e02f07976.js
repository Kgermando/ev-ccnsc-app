(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Yj9t:function(t,e,i){"use strict";i.r(e),i.d(e,"AuthModule",(function(){return J}));var n=i("Valr"),o=i("DUip"),r=i("QJY3"),a=i("P6uZ"),s=i("LvDl"),b=i("4a21"),u=i("TYT/"),c=i("u+Fy"),p=i("jXHs"),m=i("5msO"),l=i("uLXW"),d=i("eHTH"),f=i("cSbt"),h=i("p+mS"),g=i("GsDI"),v=i("VkwW");function y(t,e){1&t&&(u.Xb(0,"div"),u.Sb(1,"mat-progress-bar",14),u.Wb())}var W=function(){function t(t,e,i,n,o){this.authenticationservice=t,this.fb=e,this.router=i,this.util=n,this.snackbar=o,this.hide=!0,this.isLoading=!1}return t.prototype.ngOnInit=function(){this.makingSignInForm()},t.prototype.makingSignInForm=function(){this.signinform=this.fb.group({email:["",[r.r.required,r.r.email]],password:["",r.r.required]})},t.prototype.onSubmit=function(){this.signinform.valid&&(this.isLoading=!0,this.userInformation={email:this.signinform.value.email,password:this.signinform.value.password},this.signinUser(this.userInformation))},t.prototype.signinUser=function(t){var e=this;this.authenticationservice.signin(t).pipe(Object(a.a)()).subscribe((function(t){t&&t.code?(console.log(t.code),e.validateSignIn(t.code),e.isLoading=!1,e.openErrorBar()):(console.log("Logged in"),e.router.navigate(["/layouts/home"]),e.isLoading=!1,e.showSnackbar())}))},t.prototype.validateSignIn=function(t){this.updateform();var e={};e[t]=!0,t===b.a["Wrong password"].code?this.signinform.controls.password.setErrors(e):this.signinform.controls.email.setErrors(e)},t.prototype.updateform=function(){var t=this,e=this.util.getFormControlsValueFromFormGroup(this.signinform);s.forEach(e,(function(e){t.signinform.get(e).markAsTouched()}))},t.prototype.showSnackbar=function(){this.snackbar.open("Authentification R\xe9ussie!","",{duration:8e3})},t.prototype.openErrorBar=function(){this.snackbar.open("Echec d'uthentification!","",{duration:6e3})},t.\u0275fac=function(e){return new(e||t)(u.Rb(c.a),u.Rb(r.c),u.Rb(o.e),u.Rb(p.b),u.Rb(m.a))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-login"]],decls:27,vars:7,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",1,"login"],[1,"container"],[4,"ngIf"],[1,"card","border","shadow","p-3","mb-5","bg-white","rounded","text-center"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-12"],["src","assets/img/logo.png","width","100px","height","100px","alt","Logo CCNSC RDC"],["appearance","outline"],["type","email","matInput","","placeholder","Adresse mail","formControlName","email"],["mat-icon-button","","matSuffix",""],["type","password","matInput","","placeholder","Votre mot de passe","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["type","submit","color","primary","mat-raised-button","",1,"btn",3,"disabled","click"],["mode","indeterminate"]],template:function(t,e){1&t&&(u.Xb(0,"div",0),u.Xb(1,"div",1),u.Hc(2,y,2,0,"div",2),u.Xb(3,"div",3),u.Xb(4,"form",4),u.Xb(5,"div",5),u.Xb(6,"div",6),u.Sb(7,"img",7),u.Wb(),u.Xb(8,"div",6),u.Xb(9,"mat-form-field",8),u.Xb(10,"mat-label"),u.Jc(11,"Email"),u.Wb(),u.Sb(12,"input",9),u.Xb(13,"button",10),u.Xb(14,"mat-icon"),u.Jc(15,"person"),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Xb(16,"div",6),u.Xb(17,"mat-form-field",8),u.Xb(18,"mat-label"),u.Jc(19,"Mot de Passe"),u.Wb(),u.Sb(20,"input",11),u.Xb(21,"button",12),u.fc("click",(function(){return e.hide=!e.hide})),u.Xb(22,"mat-icon"),u.Jc(23),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Xb(24,"div",6),u.Xb(25,"button",13),u.fc("click",(function(){return e.onSubmit()})),u.Jc(26," Login "),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&t&&(u.Db(2),u.pc("ngIf",e.isLoading),u.Db(2),u.pc("formGroup",e.signinform),u.Db(16),u.pc("type",e.hide?"password":"text"),u.Db(1),u.Eb("aria-label","Hide password")("aria-pressed",e.hide),u.Db(2),u.Kc(e.hide?"visibility_off":"visibility"),u.Db(2),u.pc("disabled",!e.signinform.valid))},directives:[l.c,l.b,l.d,n.n,r.t,r.k,r.e,d.b,d.e,f.b,r.b,r.j,r.d,h.b,d.f,g.a,v.a],styles:[".login[_ngcontent-%COMP%]{margin-top:15%}input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}input[_ngcontent-%COMP%]{max-width:400px}.btn[_ngcontent-%COMP%]{width:25%}@media screen and (max-width:700px){.login[_ngcontent-%COMP%]{margin-top:30%}}"]}),t}(),X=i("K9Ia"),w=i("lC8w"),x=i("17Os"),L=i("agxM"),S=i("MqYC");function k(t,e){1&t&&u.Sb(0,"mat-progress-bar",18)}function C(t,e){if(1&t&&(u.Xb(0,"mat-option",19),u.Jc(1),u.Wb()),2&t){var i=e.$implicit;u.pc("value",i.key),u.Db(1),u.Kc(i.value)}}var I=[{path:"login",component:W},{path:"register",component:function(){function t(t,e,i,n){this.fb=t,this.authenticationService=e,this.router=i,this.snackbar=n,this.roles=w.c,this.verificationEmailsent="L'email de v\xe9rification a \xe9t\xe9 envoy\xe9",this.isLoading=!1,this._unsubscribeAll=new X.a}return t.prototype.ngOnInit=function(){this.makingSignupForm(),this.setCustomValidation()},t.prototype.setCustomValidation=function(){this.signupform.updateValueAndValidity(),this.matcher=new p.a},t.prototype.makingSignupForm=function(){this.signupform=this.fb.group({name:["",[r.r.required]],email:["",[r.r.required,r.r.email]],password:["",r.r.required],phone:["",r.r.required],role:["",r.r.required],useraddress:["",r.r.required]})},t.prototype.onSubmit=function(){this.signupform.valid?(this.isLoading=!0,this.userInformation={email:this.signupform.value.email,password:this.signupform.value.password,name:this.signupform.value.name,metaData:{name:this.signupform.value.name,email:this.signupform.value.email,role:this.signupform.value.role,phoneNumber:this.signupform.value.phone,useraddress:this.signupform.value.useraddress}},this.registerUser(this.userInformation)):this.authenticationService.touchAllfields(this.signupform)},t.prototype.registerUser=function(t){var e=this;this.authenticationService.signUp(t).pipe(Object(a.a)()).subscribe((function(t){t&&t.code?s.forEach(b.b,(function(i,n){t.code==i.code&&e.openErrorBar()})):(e.openVerificationBar(),e.routeToHome()),e.isLoading=!1}))},t.prototype.openVerificationBar=function(){this.snackbar.open("Enregistrement Reussie!","",{duration:8e3})},t.prototype.openErrorBar=function(){this.snackbar.open("Erreur d'enregistrement!","",{duration:6e3})},t.prototype.routeToSignin=function(){this.router.navigate(["/auth/login"])},t.prototype.routeToHome=function(){this.router.navigate(["/layouts/home"])},t.prototype.ngOnDestroy=function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete(),this._unsubscribeAll.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(u.Rb(r.c),u.Rb(c.a),u.Rb(o.e),u.Rb(m.a))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-register"]],decls:51,vars:7,consts:[[1,"container","m"],[3,"formGroup"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","30px",1,"mt-100"],[1,"header-1","text"],[1,"header-2","text"],["fxLayout","row","fxLayoutAlign","center center","mode","indeterminate","color","primary","class","m-0 ",4,"ngIf"],[1,"p-80"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",1,"p-50px"],["fxLayout","row","fxLayoutAlign","start start","fxLayoutGap","50px"],["appearance","outline"],["type","text","matInput","","placeholder","Votre nom complet","formControlName","name"],["type","email","matInput","","placeholder","Type in Email","formControlName","email"],["type","password","matInput","","placeholder","Votre mot de passe","formControlName","password"],["type","text","matInput","","placeholder","Numero de T\xe9l\xe9phone","formControlName","phone"],["formControlName","role","disableOptionCentering",""],[3,"value",4,"ngFor","ngForOf"],["type","text","matInput","","placeholder","Adresse email","formControlName","useraddress"],["type","submit","mat-raised-button","","color","primary",1,"w-180","mt-30",3,"click"],["fxLayout","row","fxLayoutAlign","center center","mode","indeterminate","color","primary",1,"m-0"],[3,"value"]],template:function(t,e){1&t&&(u.Xb(0,"div",0),u.Xb(1,"form",1),u.Xb(2,"div",2),u.Xb(3,"div",3),u.Jc(4,"Page d'enregistrement"),u.Wb(),u.Xb(5,"div",4),u.Jc(6,"Renseigner les informations du nouveau compte"),u.Wb(),u.Xb(7,"div"),u.Hc(8,k,1,0,"mat-progress-bar",5),u.Xb(9,"mat-card",6),u.Xb(10,"div",7),u.Xb(11,"div",8),u.Xb(12,"div"),u.Xb(13,"mat-form-field",9),u.Xb(14,"mat-label"),u.Jc(15,"Nom et Pr\xe9nom"),u.Wb(),u.Sb(16,"input",10),u.Wb(),u.Wb(),u.Wb(),u.Xb(17,"div",8),u.Xb(18,"div"),u.Xb(19,"mat-form-field",9),u.Xb(20,"mat-label"),u.Jc(21,"Email"),u.Wb(),u.Sb(22,"input",11),u.Wb(),u.Wb(),u.Xb(23,"div"),u.Xb(24,"mat-form-field",9),u.Xb(25,"mat-label"),u.Jc(26,"Password"),u.Wb(),u.Sb(27,"input",12),u.Wb(),u.Wb(),u.Wb(),u.Xb(28,"div",8),u.Xb(29,"div"),u.Xb(30,"mat-form-field",9),u.Xb(31,"mat-label"),u.Jc(32,"T\xe9l\xe9phone"),u.Wb(),u.Sb(33,"input",13),u.Wb(),u.Wb(),u.Xb(34,"div"),u.Xb(35,"mat-form-field",9),u.Xb(36,"mat-label"),u.Jc(37,"R\xf4le"),u.Wb(),u.Xb(38,"mat-select",14),u.Hc(39,C,2,2,"mat-option",15),u.kc(40,"keyvalue"),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Xb(41,"div",8),u.Xb(42,"div"),u.Xb(43,"mat-form-field",9),u.Xb(44,"mat-label"),u.Jc(45,"Address"),u.Wb(),u.Sb(46,"input",16),u.Wb(),u.Wb(),u.Wb(),u.Xb(47,"div"),u.Xb(48,"div"),u.Xb(49,"button",17),u.fc("click",(function(){return e.onSubmit()})),u.Jc(50," Sign Up "),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&t&&(u.Db(1),u.pc("formGroup",e.signupform),u.Db(7),u.pc("ngIf",e.isLoading),u.Db(1),u.Hb("mat-elevation-z10",!0),u.Db(30),u.pc("ngForOf",u.lc(40,5,e.roles)))},directives:[r.t,r.k,r.e,l.c,l.b,l.d,n.n,x.a,d.b,d.e,f.b,r.b,r.j,r.d,L.a,n.m,h.b,v.a,S.n],pipes:[n.h],styles:[".text[_ngcontent-%COMP%]{line-height:1.1}"]}),t}()},{path:"",redirectTo:"login",pathMatch:"full"}],O=function(){function t(){}return t.\u0275mod=u.Pb({type:t}),t.\u0275inj=u.Ob({factory:function(e){return new(e||t)},imports:[[o.i.forChild(I)],o.i]}),t}(),A=i("PCNd"),J=function(){function t(){}return t.\u0275mod=u.Pb({type:t}),t.\u0275inj=u.Ob({factory:function(e){return new(e||t)},imports:[[n.c,O,A.a]]}),t}()}}]);