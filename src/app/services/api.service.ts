import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estados } from '../interfaces/estados';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = "https://covid19-brazil-api.now.sh/api/report/v1";

  constructor(private http: HttpClient) { }

    getData() {
      return this.http.get<any[]>(`${this.URL}`);
    }
  
}
