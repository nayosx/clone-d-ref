import { HeaderRequest, HeaderResponse } from "@shared/interfaces/response.interface";

export interface ReqValidaDataPayment {
    header: HeaderRequest;
    body:   BodyReqValidDataPayment;
}

export interface BodyReqValidDataPayment {
    datosValidar:          DatosValidar;
    respuestaInfoColector: RespuestaInfoColector;
}

export interface DatosValidar {
    npe:         string;
    barra:       string;
    categoria:   number;
    codigoCanal: string;
}

export interface RespuestaInfoColector {
    idColector: number;
    atributos:  Atributo[];
}

export interface Atributo {
    idAtributo:            number;
    valorAtributoPantalla: number | string;
    svrValidacion:         string;
}

export interface RespValidateDataPayment {
    header: HeaderResponse;
    body:   BodyRespValidateDataPayment;
}

export interface BodyRespValidateDataPayment {
    infoEnLinea:  any;
    montoTotal:   number;
    montoParcial: number;
    valorMora:    number;
}