"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[592],{2255:(m,l,n)=>{n.d(l,{J:()=>i}),n(1452);var t=n(8583),r=n(7716);let i=(()=>{class a{}return a.\u0275fac=function(f){return new(f||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[[t.ez]]}),a})()},3247:(m,l,n)=>{n.d(l,{a:()=>u});var s=n(1841),d=n(2340),p=n(7716);let u=(()=>{class c{constructor(e){this._httpClient=e}get accessToken(){var e;return null!==(e=localStorage.getItem("accessToken"))&&void 0!==e?e:""}add(e,t,r){let i=(new s.WM).set("Authorization",this.accessToken);return this._httpClient.post(d.N.api+"/api/v1/datas/add",{email:e,firstName:t,lastName:r},{headers:i})}addwithfile(e){let t=(new s.WM).set("Authorization",this.accessToken);const r=new FormData;for(const i of e)r.append("file",i,i.name);return this._httpClient.post(d.N.api+"/api/v1/datas/addfiledata",r,{headers:t})}edit(e,t,r,i){let a=(new s.WM).set("Authorization",this.accessToken);return this._httpClient.put(d.N.api+"/api/v1/datas/"+e,{email:t,firstName:r,lastName:i},{headers:a})}deleteId(e){let t=(new s.WM).set("Authorization",this.accessToken);return this._httpClient.delete(d.N.api+"/api/v1/datas/"+e,{headers:t})}getId(e){let t=(new s.WM).set("Authorization",this.accessToken);return this._httpClient.get(d.N.api+"/api/v1/datas/"+e,{headers:t})}getAll(){let e=(new s.WM).set("Authorization",this.accessToken);return this._httpClient.get(d.N.api+"/api/v1/datas/all",{headers:e})}}return c.\u0275fac=function(e){return new(e||c)(p.LFG(s.eN))},c.\u0275prov=p.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);