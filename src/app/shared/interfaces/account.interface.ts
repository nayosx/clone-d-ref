import { HeaderRequest, HeaderResponse } from "./response.interface";

export interface Account<T> {
    id: number | string;
    name: string;
    img: string;
    description?: string;
    dateExpire: string;
    isSelected?: boolean;
    isFavorte?: boolean;
    data: T;
}

export interface ReqAccount {
    header: HeaderRequest;
    body:   BodyReqAccount;
}

export interface BodyReqAccount {
    niu:     string;
    usuario: string;
}

export interface RespAccount {
    header: HeaderResponse;
    body:   BodyRespAccount;
}

export interface BodyRespAccount {
    cuentas: Cuenta[];
}

export interface Cuenta {
    numero: string;
    tipo:   string;
    alias:  string;
    moneda: string;
}