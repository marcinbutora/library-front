import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  private readonly apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getBookList = (): Observable<Book[]> =>
    this.http.get<Book[]>(`${this.apiUrl}/book/list`);

  getBookById = (id: number): Observable<any> =>
    this.http.get<Book>(`${this.apiUrl}/book/byid/${id}`);

  createBook = (book: Object): Observable<Object> =>
    this.http.post(`${this.apiUrl}/book/add`, book);

  updateBook = (id: number, value: any): Observable<Object> =>
    this.http.put(`${this.apiUrl}/book/update/${id}`, value);

  deleteBook = (id: number): Observable<any> =>
    this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
}
