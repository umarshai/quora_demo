import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuora } from './quora';
@Injectable({
  providedIn: 'root',
})
export class QuoraService {
  constructor(private httpc: HttpClient) {}

  getServices(): Observable<IQuora[]> {
    return this.httpc.get<IQuora[]>('/assets/quora.json');
  }
}
