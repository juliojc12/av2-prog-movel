import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private BASE_URL = "https://api.github.com/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }

  public getUser(username) {
    return this.http.get(this.BASE_URL+{username})
  }
}
