import { Body, HeaderRequest, HeaderResponse } from "@shared/interfaces/response.interface";

export interface ReqCollectors {
    header: HeaderRequest;
    body:   Body;
}

export interface BodyReqCollectors {
    codigoCanal: string;
    flagSinNPE:  string;
}

export interface RespCollectors {
    header: HeaderResponse;
    body:   BodyRespCollector;
}

export interface BodyRespCollector extends Body{
    tipoMensajeRespuesta:   string;
    respuestaListaColector: RespuestaListaColector;
}

export interface RespuestaListaColector {
    colector: Colector[];
}

export interface Colector {
    numCtaAbono:          string;
    numProveedor:         string;
    poseeCodigoBarra:     string;
    idColector:           string;
    nombre:               string;
    idCategoriaColector:  string;
    nombreCategoria:      string;
    prefijoNPE:           string;
    prefijoBarra:         string;
    idTipologia:          string;
    descripcionTipologia: string;
    referenciaAudioIVR:   string;
    referenciaImagen:     string;
    niu:                  string;
}


export interface ReqCollectorDetail {
    header: HeaderRequest;
    body:   Body;
}

export interface BodyReqCollectorDetail {
    idcolector: string;
}

export interface RespCollectorDetail {
    header: HeaderResponse;
    body:   Body;
}

export interface BodyRespCollectorDetail {
    tipoMensajeRespuesta:  string;
    respuestaInfoColector: RespuestaInfoColector;
}

export interface RespuestaInfoColector {
    idColector:              string;
    nombre:                  string;
    poseeCodigoBarra:        string;
    idCategoriaColector:     string;
    nombreCategoria:         string;
    codTipoCuenta:           string;
    descripcionTipoCuenta:   string;
    numeroCuentaAbono:       string;
    referenciaImagen:        string;
    referenciaAudioIVR:      string;
    idTipologia:             string;
    esCodigoDiesco:          string;
    descripcionTipologia:    string;
    valDuplicidadPago:       string;
    obtencionFecVencimiento: string;
    prefijoBarra:            string;
    prefijoNPE:              string;
    niu:                     string;
    numeroIdIBS:             string;
    cuentaContable:          string;
    cuentaFinalColector:     string;
    validacionesJerarquica:  ValidacionesJerarquica;
    fechaVencimiento:        FechaVencimiento;
    calculoMora:             CalculoMora;
    atributos:               Atributo[];
    canalesHabilitados:      CanalesHabilitado[];
}

export interface Atributo {
    valorAtributoPantalla: string;
    srvValidacion:         string;
    idAtributo:            string;
    tipoDato:              string;
    leyendaDespliegue:     string;
    secDespliegue:         string;
    esLlaveBusqueda:       string;
    esObligatorio:         string;
    pedirPantalla:         string;
    nombre:                string;
    valorPosibleAtributo:  ValorPosibleAtributo[] | null;
}

export interface ValorPosibleAtributo {
    despliegue:    string;
    valorAtributo: string;
}

export interface CalculoMora {
    tipoDeMora:               string;
    valorMora:                string;
    realizarCalculoMoraLinea: string;
    calculoMoraEspecializada: string;
}

export interface CanalesHabilitado {
    codigoCanal: string;
    idCanal:     string;
    codigoIBS:   string;
    motivo:      string;
    lote:        string;
    descripcion: string;
}

export interface FechaVencimiento {
    validarFechaVencimiento: string;
    accionValFecVencimiento: string;
}

export interface ValidacionesJerarquica {
    valEnLinea:           string;
    valBaseDatoRecibida:  string;
    valDigitoVerificador: string;
}

export interface Header {
    idTransaccion: string;
    idSesion:      string;
    codigo:        number;
    descripcion:   string;
    fechaHora:     string;
}
