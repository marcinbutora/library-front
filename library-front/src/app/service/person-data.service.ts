import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Book } from '../interface/book';
import { Person } from '../interface/person';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonDataService {
  apiUrl: string = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
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

  getPersonList = (): Observable<Person[]> =>
    this.http.get<Person[]>(`${this.apiUrl}/person/list`);

  getPersonById = (id: number): Observable<any> =>
    this.http.get<Person>(`${this.apiUrl}/person/byid/${id}`);

  createPerson(person: Person): Observable<Person> {
    let personBody = JSON.stringify(person);
    return this.http
      .post<Person>(`${this.apiUrl}/person/add`, personBody, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updatePerson = (id: number, value: any): Observable<Object> =>
    this.http.put(
      `${this.apiUrl}/person/update/${id}`,
      value,
      this.httpOptions
    );

  deletePerson = (id: number): Observable<any> =>
    this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
}
