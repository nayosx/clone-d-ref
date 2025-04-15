import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import dayjs from 'dayjs';
import { inject } from "@angular/core";
import { DeviceService } from "@shared/services/devices/device.service";

const pathsToInclude = ['/testGET', '/testPOST'];


export function generalRequest(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const deviceServ = inject(DeviceService);

  if (pathsToInclude.some(path => req.url.includes(path))) {
    const constantHeader = {
      idTransaccion: 'bdf5fd9c-bf6a-4d60-8086-a',
      idSesion: 124999519233026,
      fechaHora: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      usuario: 'usuarioDemo',
      canal: 'PYME',
      ip: '190.62.15.34',
      dispositivo: 'UP1A.231005.007'
    };

    const newBody = {
      header: constantHeader,
      body: req.body
    };

    const clonedReq = req.clone({ body: newBody });
    return next(clonedReq);
  }

  return next(req);
}