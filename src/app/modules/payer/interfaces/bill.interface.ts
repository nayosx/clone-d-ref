import { HeaderRequest, HeaderResponse } from "@shared/interfaces/response.interface";

export interface ReqBill {
    header: HeaderRequest;
    body:   BodyReqBill;
}

export interface BodyReqBill {
    identificadorCanal: string;
    idColector:         number;
    nombre:             string;
    codCanal:           string;
    npe:                string;
    barra:              string;
    cuentaAbono:        number;
    tipoCuentaAbono:    string;
    cuentaCargo:        number;
    tipoCuentaCargo:    string;
    montoTotal:         number;
    montoParcial:       number;
    valorMora:          number;
    usuario:            string;
    lote:               string;
    codigotranIbs:      number;
    online:             number;
    reversa:            string;
    sqn:                string;
    secuenciaATH:       string;
    atributos:          Atributo[];
}

export interface Atributo {
    idAtributo:            number;
    valorAtributoPantalla: number | string;
    nombre:                string;
    svrValidacion:         string;
}

export interface RespBill {
    header: HeaderResponse;
    body:   BodyRespBill;
}

export interface BodyRespBill {
    codigosConfirmacion: CodigosConfirmacion;
    reversaEfectuada:    string;
    reversa:             Reversa;
}

export interface CodigosConfirmacion {
    respuestaCargoAbonoCuenta:     RespuestaCargoAbonoCuenta;
    respuestaPagoOnline:           null;
    respuestaRegistrarPagoFactura: RespuestaRegistrarPagoFactura;
}

export interface RespuestaCargoAbonoCuenta {
    confirmacionCargoAbono: string;
    fechaIBS:               string;
}

export interface RespuestaRegistrarPagoFactura {
    confirmacionPago: string;
}

export interface Reversa {
    respuestaReversaCargoAbono: RespuestaReversaCargoAbono;
}

export interface RespuestaReversaCargoAbono {
}

