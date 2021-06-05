import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';
import { Person } from '../interface/person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  private readonly apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getPersonList = ():Observable<Person[]> => this.http.get<Person[]>(`${this.apiUrl}/person/list`);
  getBookList = ():Observable<Book[]> => this.http.get<Book[]>(`${this.apiUrl}/book/list`);
  getPersonById = (id: number):Observable<Person> => this.http.get<Person>(`${this.apiUrl}/${id}`);
  createPerson = (person: Object): Observable<Object> => this.http.post(`${this.apiUrl}`, person); 
  updatePerson = (id: number, value: any): Observable<Object> => this.http.put(`${this.apiUrl}/${id}`, value);
  deletePerson = (id: number): Observable<any> => this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text'});
}
