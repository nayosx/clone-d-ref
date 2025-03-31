import { HeaderResponse, Body, HeaderRequest } from "./response.interface";

export interface ReqOTPGenerate {
    header: HeaderRequest;
    body:   BodyReqOTPGenerate;
}

export interface BodyReqOTPGenerate {
    niu: string;
}

export interface RespOTPGenerate {
    header: HeaderResponse;
    body:   Body;
}

export interface ReqOTPValidate {
    header: HeaderRequest;
    body:   BodyReqOTPValidate;
}

export interface BodyReqOTPValidate {
    niu: string;
    otp: string;
}

export interface RespOTPValidate {
    header: HeaderResponse;
    body:   Body;
}
