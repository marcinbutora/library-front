import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { handleError } from 'src/functions/handleError';
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
      .pipe(catchError(handleError));
  }
}
