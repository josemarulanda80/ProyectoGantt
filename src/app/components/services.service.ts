import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RESTBooksResponse } from '../interfaces/gantt.interface';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesGantt {
  private apiUrl = 'https://www.inspectorsystems.co/v1/api/servicio-static/TI/servicios-gantt'

  constructor(private htpp: HttpClient) { }

  searchData() {
    const headers = new HttpHeaders({
      'secret-key': '06a446e5dd12470cf4086d1fd53c205b'
    })

    return this.htpp.get<RESTBooksResponse>(this.apiUrl, { headers: headers }).pipe(catchError(this.messageError))
  }
// En aplicaciones mas complejas haria uso de patrones para el manejo de los errores
  messageError(error:HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.warn('erro');
    return throwError('Error personalizado')
  }
}
