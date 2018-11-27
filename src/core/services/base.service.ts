import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export abstract class BaseService<T> {
  protected api = environment.api;
  private _endpoint: string;

  constructor(protected _httpClient: HttpClient) {
  }

  protected set endpoint(endpoint: string) {
    this._endpoint = endpoint;
  }

  protected get endpoint() {
    return this._endpoint;
  }

  public getAll(): Observable<T[]> {
    return this._httpClient.get<T[]>(`${this.api}${this.endpoint}`);
  }

  public getById(id: string): Observable<T | T[]> {
    return this._httpClient.get<T[]>(`${this.api}${this.endpoint}/${id}`);
  }

  public save(item: T): Observable<T | T[]> {
    return this._httpClient.post<T>(`${this.api}${this.endpoint}`, item);
  }

  public update(id: string, item: T): Observable<T | T[]> {
    return this._httpClient.put<T>(`${this.api}${this.endpoint}/${id}`, item);
  }

  public delete(id: string): Observable<T | T[]> {
    return this._httpClient.delete<T>(`${this.api}${this.endpoint}/${id}`);
  }

}
