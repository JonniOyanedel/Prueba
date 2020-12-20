import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://localhost:65162/v1';

  constructor( private http:HttpClient) {  }

  getIndicadorList(val:any){
        return this.http.post(this.APIUrl+'/Indicador/GetItems',val);
  }
}
