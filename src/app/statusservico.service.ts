import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { StatusServico } from './statusservico';

@Injectable()
export class StatusServicoService {

    private baseUrl = "http://localhost:8080/";

    constructor(private http: HttpClient) {}

    getListaStatusServico(): Observable<StatusServico[]> {
        return this.http.get<StatusServico[]>(this.baseUrl + 'listar-status')
            .pipe(
                tap(statusServicos => this.log('buscando')),
                catchError(this.handleError('getListaStatusServico', []))
            );
    }

    getListaStatusServicoPorData(data: Date): Observable<StatusServico[]> {
        return this.http.get<StatusServico[]>(this.baseUrl + 'listar-status-por-data?data=' + data)
            .pipe(
                tap(statusServicos => this.log('buscando')),
                catchError(this.handleError('getListaStatusServicoPorData', []))
            );
    }

    getListaStatusServicoPorEstado(estado: string): Observable<StatusServico[]> {
        return this.http.get<StatusServico[]>(this.baseUrl + 'listar-status-por-estado?estado=' + estado)
            .pipe(
                tap(statusServicos => this.log('buscando')),
                catchError(this.handleError('getListaStatusServicoPorEstado', []))
            );
    }

    getMaisIndisponivel<StatusServico>(): Observable<StatusServico> {
        return this.http.get<StatusServico>(this.baseUrl + 'buscar-status-mais-indisponivel')
          .pipe(
            tap(_ => this.log('buscando objeto mais indisponível')),
            catchError(this.handleError<StatusServico>('getMaisIndisponivel'))
          );
      }

    log(message: string) {
  	
    }
  
    private handleError<StatusServico> (operation = 'operation', result?: StatusServico) {
        return (error: any): Observable<StatusServico> => {
            console.error(error);
  
            this.log(`${operation} failed: ${error.message}`);
  
            return of(result as StatusServico);
        }
    }
}