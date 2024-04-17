import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { GetBrandsListResponse } from '../models/get-brands-list-response';

@Injectable({
  providedIn: 'root',
}) // Singleton
export class BrandsService {
  private apiControllerUrl = `${environment.apiUrl}/brands`;

  // private http!: HttpClient;
  // constructor(http:HttpClient) {
  //   http = this.http;
  // }
  constructor(private http: HttpClient) {}

  getList() : Observable<GetBrandsListResponse> {
    return this.http.get<GetBrandsListResponse>(this.apiControllerUrl);
  }

  // getById(id: number) {}

  // create(data: any) {}

  // update(id: number, data: any) {}

  // delete(id: number) {}
}
