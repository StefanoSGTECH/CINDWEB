"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[483],{3483:(U,u,o)=>{o.r(u),o.d(u,{InsertModule:()=>J});var r=o(3679),t=o(7716),g=o(3247),f=o(1095),d=o(6627),a=o(7832),m=o(8295),Z=o(9983);function x(e,i){1&e&&t._uU(0,"Basic information")}function v(e,i){1&e&&t._uU(0,"Profile")}function T(e,i){1&e&&t._uU(0,"Done")}let h=(()=>{class e{constructor(n,l){this._formBuilder=n,this._datas=l,this.fileName=""}ngOnInit(){this.verticalStepperForm=this._formBuilder.group({step1:this._formBuilder.group({email:["",[r.kI.required,r.kI.email]]}),step2:this._formBuilder.group({firstName:["",r.kI.required],lastName:["",r.kI.required]})})}onFileSelected(n){this._datas.addwithfile(n.target.files).subscribe(p=>{this.fileName=""})}carica(){this._datas.add(this.verticalStepperForm.get("step1").value.email,this.verticalStepperForm.get("step2").value.firstName,this.verticalStepperForm.get("step2").value.lastName).subscribe(n=>{this.verticalStepperForm.reset()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(g.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-insert"]],decls:56,vars:24,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"mt-2","mb-8","text-3xl","font-bold"],["type","file","accept",".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",1,"file-input",3,"change"],["fileUpload",""],[1,"file-upload"],["mat-fab","","color","primary",1,"upload-btn",3,"click"],[1,"mt-8","mb-8","text-3xl","font-bold"],[1,"p-4","bg-card","shadow","rounded","overflow-hidden",3,"formGroup"],[3,"linear"],["verticalStepper",""],[3,"formGroupName","stepControl"],["verticalStepperStep1",""],["matStepLabel",""],[1,"flex"],[1,"flex-auto"],["matInput","","required","",3,"formControlName","placeholder"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[1,"flex","justify-end"],["mat-flat-button","","type","button","matStepperNext","",1,"px-8",3,"color","disabled"],["verticalStepperStep2",""],[1,"flex","flex-col","gt-xs:flex-row"],[1,"flex-auto","gt-xs:pr-3"],[1,"flex-auto","gt-xs:pl-3"],["mat-flat-button","","type","button","matStepperPrevious","",1,"px-8","mr-2",3,"color"],[1,"flex","justify-end","mt-8"],["mat-flat-button","","type","reset",1,"px-8","mr-2",3,"color","click"],["mat-flat-button","","type","button",1,"px-8",3,"color","click"]],template:function(n,l){if(1&n){const p=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h2",4),t._uU(5," Inserimento Dati "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t._uU(9,"Tramite File csv:"),t.qZA(),t.TgZ(10,"input",8,9),t.NdJ("change",function(c){return l.onFileSelected(c)}),t.qZA(),t.TgZ(12,"div",10),t._uU(13),t.TgZ(14,"button",11),t.NdJ("click",function(){return t.CHM(p),t.MAs(11).click()}),t.TgZ(15,"mat-icon"),t._uU(16,"attach_file"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",12),t._uU(18,"Manuale:"),t.qZA(),t.TgZ(19,"form",13),t.TgZ(20,"mat-vertical-stepper",14,15),t.TgZ(22,"mat-step",16,17),t.YNc(24,x,1,0,"ng-template",18),t.TgZ(25,"div",19),t.TgZ(26,"mat-form-field",20),t._UZ(27,"input",21),t._UZ(28,"mat-icon",22),t.qZA(),t.qZA(),t.TgZ(29,"div",23),t.TgZ(30,"button",24),t._uU(31," Next "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"mat-step",16,25),t.YNc(34,v,1,0,"ng-template",18),t.TgZ(35,"div",26),t.TgZ(36,"mat-form-field",27),t._UZ(37,"input",21),t._UZ(38,"mat-icon",22),t.qZA(),t.TgZ(39,"mat-form-field",28),t._UZ(40,"input",21),t._UZ(41,"mat-icon",22),t.qZA(),t.qZA(),t.TgZ(42,"div",23),t.TgZ(43,"button",29),t._uU(44," Back "),t.qZA(),t.TgZ(45,"button",24),t._uU(46," Next "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"mat-step"),t.YNc(48,T,1,0,"ng-template",18),t.TgZ(49,"div",30),t.TgZ(50,"button",29),t._uU(51," Back "),t.qZA(),t.TgZ(52,"button",31),t.NdJ("click",function(){return t.CHM(p),t.MAs(21).reset()}),t._uU(53," Reset "),t.qZA(),t.TgZ(54,"button",32),t.NdJ("click",function(){return l.carica()}),t._uU(55," Carica "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const p=t.MAs(23),s=t.MAs(33);t.xp6(13),t.hij(" ",l.fileName||"No file uploaded yet."," "),t.xp6(6),t.Q6J("formGroup",l.verticalStepperForm),t.xp6(1),t.Q6J("linear",!0),t.xp6(2),t.Q6J("formGroupName","step1")("stepControl",l.verticalStepperForm.get("step1")),t.xp6(5),t.Q6J("formControlName","email")("placeholder","Email Address"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:mail"),t.xp6(2),t.Q6J("color","primary")("disabled",p.stepControl.pristine),t.xp6(2),t.Q6J("formGroupName","step2")("stepControl",l.verticalStepperForm.get("step2")),t.xp6(5),t.Q6J("formControlName","firstName")("placeholder","First name"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:user-circle"),t.xp6(2),t.Q6J("formControlName","lastName")("placeholder","Last name"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:user-circle"),t.xp6(2),t.Q6J("color","accent"),t.xp6(2),t.Q6J("color","primary")("disabled",s.stepControl.pristine||s.stepControl.invalid),t.xp6(5),t.Q6J("color","accent"),t.xp6(2),t.Q6J("color","light"),t.xp6(2),t.Q6J("color","primary")}},directives:[f.lW,d.Hw,r._Y,r.JL,r.sg,a.Vq,a.C0,r.x0,a.VY,m.KE,Z.Nt,r.Fj,r.Q7,r.JJ,r.u,m.qo,a.Ic,a.fd],styles:[".file-input[_ngcontent-%COMP%]{display:none}"]}),e})();var A=o(3423),C=o(7539),N=o(7441),b=o(2613),I=o(4466);const q=[{path:"",component:h}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[A.Bz.forChild(q),f.ot,C.p9,m.lN,d.Ps,Z.c,b.Fk,N.LD,a.T5,I.m]]}),e})()}}]);