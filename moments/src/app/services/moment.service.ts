import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Observable é uma técnica que lida com compartilhamento de dados, é muito usado no Angular e pode ser considerado uma versão melhor de uma promise.
import { Moment } from '../interface/Moment';
import { environment } from 'src/environments/environment';
import { Response } from '../interface/Response';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiRrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiRrl)
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiRrl}/${id}`
    return this.http.get<Response<Moment>>(url)
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiRrl, formData);
  }

  removeMoment(id: number) {
    const url = `${this.apiRrl}/${id}`
    return this.http.delete(url)
  }
}
