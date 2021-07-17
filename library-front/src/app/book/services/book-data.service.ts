import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { handleError } from 'src/functions/handleError';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  private readonly apiUrl: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${this.apiUrl}`,
    }),
  };

  msgTrue = false;

  constructor(private http: HttpClient) {}

  getBookList = (): Observable<Book[]> =>
    this.http.get<Book[]>(`${this.apiUrl}/book`);

  getBookById = (id: number): Observable<any> =>
    this.http.get<Book>(`${this.apiUrl}/book/${id}`);

  // working
  createBook(book: Book): Observable<Book> {
    let bookBody = JSON.stringify(book);
    return this.http
      .post<Book>(`${this.apiUrl}/book/`, bookBody, this.httpOptions)
      .pipe(catchError(handleError));
  }

  updateBook = (id: number, value: any): Observable<Object> =>
    this.http.put(`${this.apiUrl}/book/${id}`, value);

  deleteBook = (id: number): Observable<any> =>
    this.http.delete(`${this.apiUrl}/book/${id}`, { responseType: 'text' });
}
