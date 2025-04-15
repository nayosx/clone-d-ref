import { Injectable } from '@angular/core';
import { DeviceInfo } from '@shared/interfaces/device.interface';
import {UAParser} from 'ua-parser-js';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  parser: UAParser;

  constructor() { 
    this.parser = new UAParser();
  }

  getDeviceInfo(): DeviceInfo {
    const result = this.parser.getResult();
    return {
      browser: result.browser.name || 'Unknown',
      os: result.os.name || 'Unknown',
      device: JSON.stringify(result.device),
      cpu: JSON.stringify(result.cpu),
      ua: result.ua,
    };
  }
}
