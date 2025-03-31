import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CypherService {

  private readonly keyName = 'xhx';

  constructor() { }

  getOrCreateSecretKey(): string {
    let secretKey = sessionStorage.getItem(this.keyName);
    if (!secretKey) {
      secretKey = this._generateSecretKey();
      sessionStorage.setItem(this.keyName, secretKey);
    }
    return secretKey;
  }

  private _generateSecretKey(): string {
    return CryptoJS.lib.WordArray.random(32).toString();
  }

  encrypt(arg: string): string {
    const secretKey = this.getOrCreateSecretKey();
    let output = '';

    try {
      output = CryptoJS.AES.encrypt(arg, secretKey).toString();
    } catch(err) {
      output = '';
    }

    return output;
  }

  decrypt(arg: string): string {

    const secretKey = this.getOrCreateSecretKey();
    let decript = '';

    try {
      const bytes = CryptoJS.AES.decrypt(arg, secretKey);
      decript = bytes.toString(CryptoJS.enc.Utf8);
    } catch(e) {
      decript = '';
    }
    
    return decript;
  }
}