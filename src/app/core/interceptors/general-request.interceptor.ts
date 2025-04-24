import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import dayjs from 'dayjs';
import { customAlphabet } from 'nanoid';

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
const nano16 = customAlphabet(alphabet, 16);

const nonZero = '123456789';
const nanoidFirst = customAlphabet(nonZero, 1);

const digits = '0123456789';
const nanoidRest = customAlphabet(digits, 15);

export function generateNumericId(): string {
  return `${nanoidFirst()}${nanoidRest()}`;
}

const pathsToInclude = [
  '/testGET', 
  '/testPOST'
];

export function generalRequest(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  let sessionId = sessionStorage.getItem('sid');

  if (!sessionId) {
    sessionId = generateNumericId();
    sessionStorage.setItem('sid', sessionId);
  }

  if (pathsToInclude.some(path => req.url.includes(path))) {
    const constantHeader = {
      idTransaccion: nano16(),
      idSesion: sessionId,
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