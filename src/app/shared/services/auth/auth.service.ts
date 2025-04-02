// src/app/services/auth/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path: string = 'http://localhost:3000';

  private http = inject(HttpClient);

  public isShowAllUI = signal(false);
  public isLoading = signal(false);

  constructor() { }

  login(body: any): Observable<any> {
    return this.http.post(`${this.path}/generateToken`, body);
  }

  setShowAllUI(value: boolean): void {
    this.isShowAllUI.set(value);
  }

  setIsLoading(value: boolean): void {
    this.isLoading.set(value);
  }
}
