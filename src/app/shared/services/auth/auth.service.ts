import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path:string = 'http://localhost:3000';

  private http = inject(HttpClient);

  constructor() { }

  login(body:any):Observable<any>{
    return this.http.post(`${this.path}/generateToken`, body);
  }
}
