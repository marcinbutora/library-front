import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from '../interface/book';

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient) {}

  getBookList = (): Observable<Book[]> =>
    this.http.get<Book[]>(`${this.apiUrl}/book/list`);

  getBookById = (id: number): Observable<any> =>
    this.http.get<Book>(`${this.apiUrl}/book/byid/${id}`);

  // working
  createBook(book: Book): Observable<Book> {
    let bookBody = JSON.stringify(book);
    return this.http
      .post<Book>(`${this.apiUrl}/book/add`, bookBody, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateBook = (id: number, value: any): Observable<Object> =>
    this.http.put(`${this.apiUrl}/book/update/${id}`, value);

  deleteBook = (id: number): Observable<any> =>
    this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
}
