import { HeaderRequest, HeaderResponse, Body } from "./response.interface";

export interface ReqJWTRefresh {
    header: HeaderRequest;
    body:   BodyReqJWTRefresh;
}

export interface BodyReqJWTRefresh {
    modoOperacion: string;
}

export interface RespJWTRefresh {
    header: HeaderResponse;
    body:   Body;
}