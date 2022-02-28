export interface RESTBooksResponse {

    //En angular es buena practica tipar las variables y evitar el uso de any
    success: boolean;
    msg:     string;
    data:    Datum[];
}

export interface Datum {
    accept_sura:     boolean;
    _id:             string;
    id_empresa:      string;
    id_ofertamiento: IDOfertamiento;
    ofertamiento:    Ofertamiento;
    summoned_users:  SummonedUser[];
    publish:         Publish;
    obser_central:   ObserCentral[];
    __v:             number;
    sura_progress:   SuraProgress;
    id_asignacion:   IDAsignacion;
}

export interface IDAsignacion {
    _id:                     string;
    uuid:                    string;
    codigoServicio:          string;
    riesgo:                  string;
    primerNombre:            string;
    segundoNombre:           string;
    primerApellido:          string;
    segundoApellido:         string;
    telefonoSolicitante:     string;
    telefonoSolicitante2:    string;
    claseVehiculo:           string;
    marcaVehiculo:           string;
    tipoTransmisionVehiculo: string;
    observaciones:           string;
    __v:                     number;
}

export interface IDOfertamiento {
    _id:                    string;
    uuid:                   string;
    ciudad:                 string;
    latitudOrigen:          string;
    longitudOrigen:         string;
    puntoReferenciaOrigen:  string;
    direccionOrigen:        string;
    latitudDestino:         string;
    longitudDestino:        string;
    puntoReferenciaDestino: string;
    direccionDestino:       string;
    descripcionServicio:    string;
    fechaCita:              string;
    horaCita:               string;
    observaciones:          string;
    guardian:               string;
    __v:                    number;
}

export interface ObserCentral {
    _id:          string;
    date_publish: Date;
    obser:        string;
}

export interface Ofertamiento {
    uuid:         string;
    complete:     boolean;
    agendamiento: boolean;
}

export interface Publish {
    date_post: Date;
}

export interface SummonedUser {
    _id:     string;
    phone:   string;
    accept:  boolean;
    id_user: IDUser;
}

export interface IDUser {
    _id:   string;
    name:  string;
    phone: string;
}

export interface SuraProgress {
    observaciones: string;
    dist:          number;
    evid_photos:   any[] | null;
    info:          string;
    tarifa_est:    string;
    tarifa_serv:   string;
    ubi:           Ubi;
}

export interface Ubi {
    lat: number;
    lon: number;
}
