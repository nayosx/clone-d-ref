import { inject, Injectable } from '@angular/core';
import { CypherService } from '../cypher/cypher.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  cypher = inject(CypherService);

  setLocal(key: string, value: any, isEncrypt: boolean = true): void {
    if (value === null || value === undefined) {
      throw new Error(`Cannot store null or undefined value for key: ${key}`);
    }
    const data = isEncrypt ? this.cypher.encrypt(JSON.stringify(value)) : JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  getLocal<T>(key: string, isEncrypt: boolean = true): T | null {
    const data = localStorage.getItem(key);
    if (!data) return null;
    const value = isEncrypt ? this.cypher.decrypt(data) : data;
    if (value === 'null' || value === 'undefined') return null;
    return JSON.parse(value) as T;
  }

  removeLocal(key: string): void {
    localStorage.removeItem(key);
  }

  clearLocal(): void {
    localStorage.clear();
  }

  setSession(key: string, value: any, isEncrypt: boolean = true): void {
    if (value === null || value === undefined) {
      throw new Error(`Cannot store null or undefined value for key: ${key}`);
    }
    const data = isEncrypt ? this.cypher.encrypt(JSON.stringify(value)) : JSON.stringify(value);
    sessionStorage.setItem(key, data);
  }

  getSession<T>(key: string, isEncrypt: boolean = true): T | null {
    const data = sessionStorage.getItem(key);
    if (!data) return null;
    const value = isEncrypt ? this.cypher.decrypt(data) : data;
    if (value === 'null' || value === 'undefined') return null;
    return JSON.parse(value) as T;
  }

  removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearSession(): void {
    sessionStorage.clear();
  }
}