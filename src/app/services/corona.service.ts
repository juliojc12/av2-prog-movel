import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }

  getEstados() {
    const URL = "https://covid19-brazil-api.now.sh/api/report/v1";
    return this.http.get<any>(URL);
  }

}
