import { HttpClient, HttpErrorResponse, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../interface/book';
import { Rental } from '../interface/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private readonly apiUrl: string = 'http://localhost:8080/api';

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
  
  constructor(private http: HttpClient) { }

  // working
  getRentalList = (): Observable<Rental[]> =>
    this.http.get<Rental[]>(`${this.apiUrl}/rental/list`);

  // working 
  getRentalsForPerson = (id: number): Observable<Rental[]> =>
    this.http.get<Rental[]>(`${this.apiUrl}/rentals/person/${id}`)

  // working
  getBookForRentals = (id: number): Observable<Rental[]> => 
    this.http.get<Rental[]>(`${this.apiUrl}/rentals/book/${id}`);

    // working
    createRental(rental: Rental): Observable<Rental> {
      let rentalBody = JSON.stringify(rental);
      return this.http
        .post<Rental>(`${this.apiUrl}/rental/add`, rentalBody, this.httpOptions)
        .pipe(catchError(this.handleError));
    }

}
