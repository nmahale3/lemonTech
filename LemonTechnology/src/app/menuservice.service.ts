import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService
{
  constructor(private http:HttpClient) { }
   private apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173';
  getMenuData(): Observable<any>
  {
    return this.http.get(this.apiUrl);
  }
}
