import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Rental } from '../model/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
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
    return throwError(`${error.message}`);    
  }
  
  constructor(private http: HttpClient) { }

  // working
  getRentalList = (): Observable<Rental[]> =>
    this.http.get<Rental[]>(`${this.apiUrl}/rentals`);

  // working 
  getRentalsForPerson = (id: number): Observable<Rental[]> =>
    this.http.get<Rental[]>(`${this.apiUrl}/rentals/reader/${id}`)

  // working
  getBookForRentals = (id: number): Observable<Rental[]> => 
    this.http.get<Rental[]>(`${this.apiUrl}/rentals/book/${id}`);

  // working
  createRental(bookId: number, personId: number): Observable<Rental> {
    return this.http
      .post<Rental>(`${this.apiUrl}/rentals/${personId}/${bookId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
