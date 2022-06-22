import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    let url = environment.apiDomain + 'api/users?page=2';
    return this.httpClient.get(url);
  }
}
