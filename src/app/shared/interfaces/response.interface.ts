export interface BaseHeader {
    idTransaccion: string;
    idSesion:      string;
    fechaHora:     string;
}

export interface HeaderResponse extends BaseHeader {
    codigo:        number;
    descripcion:   string;
}

export interface HeaderRequest extends BaseHeader {
    usuario:       string;
    canal:         string;
    ip:            string;
    dispositivo:   string;
}

export interface Body {}