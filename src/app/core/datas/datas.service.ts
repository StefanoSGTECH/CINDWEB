import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { currentenv } from 'environments/currentenv';
import { Datas, DatasADDResp, DatasAllResp, Empty } from './datas.types';
import { identity } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class DatasService
{

    constructor(private _httpClient: HttpClient) {}

    // GET -------------------------------------------------------------------------------------------------

    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    add(email: string, firstName: string, lastName: string): Observable<DatasADDResp>
    {
        let header = new HttpHeaders().set("Authorization", this.accessToken);
        return this._httpClient.post<DatasADDResp>(environment.api + '/api/v1/datas/add',  {
            'email': email,
            'firstName': firstName,
            'lastName': lastName
        }, { headers: header });
    }

    addwithfile(files: File[]): Observable<DatasADDResp> {

        // access token
        let header = new HttpHeaders().set("Authorization", this.accessToken);
  
        // Create form data
        const formData = new FormData(); 

        // custom data
        //formData.append("token", this.accessToken);
          
        for (const file of files) {
            formData.append("file", file, file.name);
        }
          
        return this._httpClient.post<DatasADDResp>(environment.api + '/api/v1/datas/addfiledata', formData, { headers: header })
    }

    edit(id: number, email: string, firstName: string, lastName: string): Observable<DatasADDResp>
    {
        let header = new HttpHeaders().set("Authorization", this.accessToken);
        return this._httpClient.put<DatasADDResp>(environment.api + '/api/v1/datas/'+ id,  {
            'email': email,
            'firstName': firstName,
            'lastName': lastName
        }, { headers: header });
    }

    deleteId(id: number): Observable<Empty>
    {
        let header = new HttpHeaders().set("Authorization", this.accessToken);
        return this._httpClient.delete<Empty>(environment.api + '/api/v1/datas/' + id, { headers: header });
    }

    getId(id: number): Observable<Datas>
    {
        let header = new HttpHeaders().set("Authorization", this.accessToken);
        return this._httpClient.get<Datas>(environment.api + '/api/v1/datas/' + id, { headers: header });
    }

    getAll(): Observable<DatasAllResp>
    {
        let header = new HttpHeaders().set("Authorization", this.accessToken);
        return this._httpClient.get<DatasAllResp>(environment.api + '/api/v1/datas/all', { headers: header });
    }
}
