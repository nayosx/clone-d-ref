import { HeaderResponse, HeaderRequest } from "./response.interface";

export interface RegUser {
    header: HeaderRequest;
    body:   BodyReqUser;
}

export interface BodyReqUser {
    usuario: string;
}


export interface RespUser {
    header: HeaderResponse;
    body:   BodyRespUser;
}

export interface BodyRespUser {
    niu:               number;
    correo:            string;
    telefono:          string;
    modoAutenticacion: number;
    profesion:         string;
    edad:              number;
    personaNatural:    boolean;
    nit:               string;
}
